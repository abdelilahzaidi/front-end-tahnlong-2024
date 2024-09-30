
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css'],
})
export class FactureListComponent implements OnInit {
  errorMessage: any;
  apiUrl = 'http://localhost:3001';
  invoices: any[] = [];
  user: any;
  users: any[] = [];
  response$: any;
  currentAction!: string;
  userForm: any;
  invoice: any;
  notificationMessage: string | null = null;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private userService: UserService,
    private factureService: FactureService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getInvoices();
    this.getUsers();
  }

  getInvoices(): void {
    this.httpClient.get<any[]>(`${this.apiUrl}/invoice`).subscribe((data) => {
      this.invoices = data;
      console.log(this.invoices);
    });
  }

  //Liste tous les utilisateurs
  getUsers() {
    return this.httpClient.get(this.apiUrl + '/user').subscribe({
      next: (data) => {
        this.users = data as [];
        console.log('user', this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createFacture(): void {
    this.router.navigate(['/admin/facture-new']);
    console.log('redirect to create an invoice');
  }

  assignUser(p: any) {

    if (!p || !p.id) {
      console.error('Invalid parameter:', p);
      return;
    }

    this.factureService.assignInvoiceById(p.id).subscribe({
      next: (data) => {
        this.invoice = data;
        console.log('Invoice data:', this.invoice);
        this.router.navigate(['/admin/facture-assign', p.id]);
      },
      error: (err) => {
        console.error('Error fetching invoice:', err);
        this.errorMessage = err.error;
      },
    });

    console.log('Assigned invoice:', p.id);
  }
  handleEditFacture(){
    this.router.navigate(['/admin/facture-list-update']);
  }



updatePaymentStatus(invoiceId: number, etatDePaiement: boolean): void {
  this.factureService.updatePaymentStatus(invoiceId, etatDePaiement).subscribe(
    (response) => {
      console.log('Mise à jour réussie', response);
      this.getInvoices();
      this.notificationMessage = 'L\'état de paiement a été mis à jour avec succès.';


      setTimeout(() => {
        this.notificationMessage = null;
      }, 3000);
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de l\'état de paiement', error);
      this.notificationMessage = 'Une erreur est survenue lors de la mise à jour de l\'état de paiement.';


      setTimeout(() => {
        this.notificationMessage = null;
      }, 3000);
    }
  );
}
confirmUpdatePayment(invoiceId: number, newEtatDePaiement: boolean): void {
  const confirmation = confirm('Souhaitez-vous vraiment mettre à jour l\'état de paiement ?');

  if (confirmation) {
    this.updatePaymentStatus(invoiceId, newEtatDePaiement);
  }
}
createMonthlyInvoices(){
  return this.router.navigate(['/admin/facture-new']);
}
}
