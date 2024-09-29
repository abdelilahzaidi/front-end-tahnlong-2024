import { FormControl, FormGroup, Validators } from "@angular/forms";

export function factureCreate(facture: any): FormGroup {
  console.log('factureFormGroup',facture)
    return new FormGroup({
        type_abonnement: new FormControl(facture.type_abonnement),
        users: new FormControl(facture.users),
        date_envoie: new FormControl(facture.date_envoie),
        idMontant:new FormControl(facture.idMontant)

      })
}
