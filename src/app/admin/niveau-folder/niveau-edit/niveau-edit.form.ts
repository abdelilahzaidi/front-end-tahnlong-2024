import { FormControl, FormGroup, Validators } from '@angular/forms';

export function fNiveauEdit(niveau: any): FormGroup {
  console.log('FormGroupe',niveau)
  return new FormGroup({
    grade: new FormControl(niveau.title),
    program: new FormControl(niveau.contenu),
  });

}
