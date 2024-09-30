import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FactureService } from 'src/app/services/facture.service';


@Component({
  selector: 'app-facture-assign',
  templateUrl: './facture-assign.component.html',
  styleUrls: ['./facture-assign.component.css']
})


export class FactureAssignComponent implements OnInit
{
  invoices: any[] = [];
  users: any[] = [];
  users$: Observable<any[]> = of([]);
  abonnementTypes: any[] = [];
  selectedInvoiceId: number | null = null;
  selectedUserId: number | null = null;
  selectedAbonnementTypeId: number | null = null;
  selectedInvoice: any = null; // Facture sélectionnée
  selectedTarif: number | null = null;
  errorMessage: string | null = null;

  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private invoiceService: FactureService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      abonnementType: [''],
      user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadInvoices();
    this.loadUsers();
    this.loadAbonnementTypes();
    this.route.params.subscribe(params => {
      this.selectedInvoiceId = +params['id'];
      if (this.selectedInvoiceId) {
        this.loadSelectedInvoice(this.selectedInvoiceId);
      }
    });
    console.log("Invoice sélectionnée", this.selectedInvoice);
  }

  loadInvoices(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (data) => {
        this.invoices = data;
        console.log('invoices', this.invoices);
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Error loading invoices', err);
      }
    });
  }

  loadUsers(): void {
    this.users$ = this.invoiceService.getUsers(); 
    this.users$.subscribe({
      next: (data) => {
        console.log('Utilisateurs récupérés:', data);
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Erreur lors du chargement des utilisateurs', err);
      }
    });
  }

  loadAbonnementTypes(): void {
    this.invoiceService.getAbonnementTypes().subscribe({
      next: (data) => {
        this.abonnementTypes = data;
        console.log('abonnementTypes', this.abonnementTypes);
      },
      error: (err) => {
        this.errorMessage = err;
        console.error('Error loading abonnement types', err);
      }
    });
  }

  onAbonnementTypeChange(event: any): void {
    const typeId = event.target.value;
    const selectedType = this.abonnementTypes.find(type => type.id === Number(typeId));
    if (selectedType) {
      this.selectedTarif = selectedType.tarif;
    } else {
      this.selectedTarif = null;
    }
  }

  onSubmit(): void {
    this.selectedUserId = this.userForm.get('user')?.value;
    if (this.selectedInvoiceId !== null && this.selectedUserId !== null) {
      this.assignUserToInvoice(this.selectedInvoiceId, this.selectedUserId);
    } else {
      this.errorMessage = 'Veuillez sélectionner une facture et un utilisateur.';
    }
  }

  assignUserToInvoice(invoiceId: number, userId: number): void {
    this.invoiceService.assignInvoiceToUser(invoiceId, userId).subscribe(
      response => {
        console.log('Invoice assigned successfully', response);
        this.router.navigate(['/admin/facture-list']);
      },
      error => {
        console.error('Error assigning invoice', error);
      }
    );
  }

  loadSelectedInvoice(invoiceId: number): void {
    this.invoiceService.assignInvoiceById(invoiceId).subscribe({
      next: (data) => {
        this.selectedInvoice = data;
        console.log('Selected invoice:', this.selectedInvoice);
      },
      error: (err) => {
        console.error('Error loading selected invoice', err);
      }
    });
  }

  resetForm(): void {
    this.selectedInvoiceId = null;
    this.selectedUserId = null;
    this.selectedAbonnementTypeId = null;
  }
}
