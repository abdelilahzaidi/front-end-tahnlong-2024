import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';


@Component({
  selector: 'app-facture-new',
  templateUrl: './facture-new.component.html',
  styleUrls: ['./facture-new.component.css']
})
export class FactureNewComponent implements  OnInit {

  errorMessage: string | null = null;
  response$: any;
  factureForm: FormGroup;
  abonnements: any[] = [];
  notificationMessage: string | null = null;
  invoices: any[] = [];

  constructor(private fb: FormBuilder, private factureService: FactureService, private router: Router, private http: HttpClient) {
    this.factureForm = this.fb.group({
      idDateEnvoie: ['', [Validators.required]],
      idEtat: ['false', [Validators.required]],
      idAbonnement: ['', [Validators.required]],
      idMontant: [{ value: '', disabled: true }, [Validators.required]],
    });
  }

  ngOnInit() {
    this.loadAbonnements();
  }

  loadAbonnements() {
    this.http.get<any[]>('http://localhost:3001/type-abonnement').subscribe(
      data => this.abonnements = data,
      error => console.error('Erreur de chargement des types d\'abonnement', error)
    );
  }




  onAbonnementChange(event: Event) {
    const selectedAbonnementId = (event.target as HTMLSelectElement).value;
    const selectedAbonnement = this.abonnements.find(abonnement => abonnement.id == selectedAbonnementId);

    if (selectedAbonnement) {
      this.factureForm.patchValue({ idMontant: selectedAbonnement.tarif });
    }
  }



  getInvoices(): void {

    this.factureService.getInvoices().subscribe((data) => {
      this.invoices = data;
    });
  }



  submit(): void {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const userIds = [24];
    const montant = 25;
    let abonnementType = 'Mensuel';

    if (currentMonth === 9) {
      abonnementType = 'Annuel';
    }

    const invoiceData = {
      userIds,
      abonnementType,
      dateEnvoie: currentDate.toISOString(),
      invoiceId: null
    };

    this.factureService.createInvoice(invoiceData).subscribe(
      (response) => {
        console.log('Facture créée avec succès', response);
        this.notificationMessage = 'Facture créée avec succès.';
        this.getInvoices();


        setTimeout(() => {
          this.notificationMessage = null;
        }, 3000);
      },
      (error) => {
        console.error('Erreur lors de la création de la facture', error);
        this.notificationMessage = 'Une erreur est survenue lors de la création de la facture.';

       
        setTimeout(() => {
          this.notificationMessage = null;
        }, 3000);
      }
    );
  }
}
