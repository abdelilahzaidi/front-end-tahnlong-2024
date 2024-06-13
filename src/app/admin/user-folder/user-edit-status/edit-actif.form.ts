import { FormControl, FormGroup, Validators } from "@angular/forms";

export function fUserEditActif(user: any): FormGroup {
    return new FormGroup({
        actif:new FormControl(user.actif)
      })
}
