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
  users: any[] = [];
  apiUrl = 'http://localhost:3001';
  user: any;
  response$: any;
  currentAction!: string;
  constructor(
    private fb: FormBuilder,
    private factureService: FactureService,
    private userService: UserService,
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
    this.factureForm = this.fb.group({
      etatPaiement: [true, Validators.required],
    });


   this.getUser()
  }


  onUserSelect(userId: any): void {

    this.selectedUserId = parseInt(userId, 10);
  }


  onInvoiceSelect(invoiceId: any): void {

    this.selectedInvoiceId = parseInt(invoiceId, 10);
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


  submit(): void {
    if (this.factureForm.valid && this.selectedUserId && this.selectedInvoiceId) {
      const { etatPaiement, montant } = this.factureForm.value;

      this.factureService.updateInvoicePayment(this.selectedUserId, this.selectedInvoiceId, etatPaiement).subscribe({
        next: () => {
          alert('État de paiement mis à jour avec succès!');

        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de la mise à jour de l\'état de paiement.';
          console.error(err);
        }
      });
    } else {
      
      this.factureForm.markAllAsTouched();
    }
  }
}
