import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FactureService } from 'src/app/services/facture.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-facture-list-update',
  templateUrl: './facture-list-update.component.html',
  styleUrls: ['./facture-list-update.component.css']
})
export class FactureListUpdateComponent implements OnInit {
  factureForm!: FormGroup;
  errorMessage: string = '';
  selectedUserId: number = 0;
  selectedInvoiceId: number = 0;
  users: any[] = []; // Assurez-vous d'initialiser la propriété users avec les données correctes
  apiUrl = 'http://localhost:3001';
  user: any;
  response$: any;
  currentAction!: string;
  constructor(
    private fb: FormBuilder,
    private factureService: FactureService,
    private userService: UserService, // Injection du service UserService pour récupérer la liste des utilisateurs
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.factureForm = this.fb.group({
      etatPaiement: [true, Validators.required], // Initialisation par défaut à "Payé"
      montant: ['', Validators.required]
    });

    // Récupérer la liste des utilisateurs au chargement du composant
   this.getUser()
  }

  // Méthode pour gérer la sélection de l'utilisateur
  onUserSelect(userId: any): void {
    // Convertir la valeur en nombre si nécessaire
    this.selectedUserId = parseInt(userId, 10); // Assurez-vous de convertir correctement si userId est une chaîne
  }

  // Méthode pour gérer la sélection de la facture (si nécessaire)
  onInvoiceSelect(invoiceId: any): void {
    // Convertir la valeur en nombre si nécessaire
    this.selectedInvoiceId = parseInt(invoiceId, 10); // Assurez-vous de convertir correctement si invoiceId est une chaîne
  }




  getUser() {
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

  // Méthode pour soumettre le formulaire
  submit(): void {
    if (this.factureForm.valid && this.selectedUserId && this.selectedInvoiceId) {
      const { etatPaiement, montant } = this.factureForm.value;
      // Appeler le service pour mettre à jour l'état de paiement de la facture
      this.factureService.updateInvoicePayment(this.selectedUserId, this.selectedInvoiceId, etatPaiement).subscribe({
        next: () => {
          alert('État de paiement mis à jour avec succès!');
          // Réinitialiser le formulaire ou naviguer vers une autre page si nécessaire
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de la mise à jour de l\'état de paiement.';
          console.error(err);
        }
      });
    } else {
      // Marquer les champs comme touchés pour afficher les messages d'erreur si nécessaire
      this.factureForm.markAllAsTouched();
    }
  }
}
