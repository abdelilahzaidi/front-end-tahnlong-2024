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
      idAbonnement: ['', [Validators.required]],  // Ajout du champ idAbonnement
      idMontant: [{ value: '', disabled: true }, [Validators.required]],  // Champ montant désactivé pour une mise à jour automatique
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

  // submit() {
  //   console.log('user / submit', this.factureForm.value);

  //   const factureData = {
  //     ...this.factureForm.value,
  //     idMontant: this.factureForm.get('idMontant')?.value  // Assurez-vous que le montant est inclus dans les données soumises
  //   };

  //   this.http.post('http://localhost:3001/invoice', factureData).subscribe(
  //     (res: any) => {
  //       console.log('Réponse du serveur :', res);
  //       this.response$ = res;
  //       alert("Facture ajoutée");
  //       this.router.navigate(['/admin/facture-list']);
  //     },
  //     (error: any) => {
  //       this.errorMessage = error.message;
  //       console.error('Une erreur s\'est produite lors de la requête :', error);
  //     }
  //   );
  // }


  getInvoices(): void {
    // Récupérer la liste des factures
    this.factureService.getInvoices().subscribe((data) => {
      this.invoices = data;
    });
  }



  submit(): void {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0 = Jan, 1 = Feb, ..., 8 = Sept, 11 = Dec
    const userIds = [24]; // Exemple d'ID d'utilisateur, à remplacer si nécessaire
    const montant = 25; // Montant de la facture
    let abonnementType = 'Mensuel'; // Type d'abonnement

    if (currentMonth === 9) { // 8 correspond à septembre
      abonnementType = 'Annuel'; // Si c'est septembre, on change le type d'abonnement
    }

    const invoiceData = {
      userIds,
      abonnementType,
      dateEnvoie: currentDate.toISOString(), // Format de la date à envoyer
      montant,
      invoiceId: null // InvoiceId à créer (peut être null)
    };

    this.factureService.createInvoice(invoiceData).subscribe(
      (response) => {
        console.log('Facture créée avec succès', response);
        this.notificationMessage = 'Facture créée avec succès.'; // Message de succès
        this.getInvoices(); // Recharger la liste des factures

        // Optionnel : Effacer le message après quelques secondes
        setTimeout(() => {
          this.notificationMessage = null;
        }, 3000);
      },
      (error) => {
        console.error('Erreur lors de la création de la facture', error);
        this.notificationMessage = 'Une erreur est survenue lors de la création de la facture.'; // Message d'erreur

        // Optionnel : Effacer le message après quelques secondes
        setTimeout(() => {
          this.notificationMessage = null;
        }, 3000);
      }
    );
  }
}
