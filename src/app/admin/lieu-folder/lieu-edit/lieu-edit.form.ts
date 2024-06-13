import { FormControl, FormGroup, Validators } from '@angular/forms';

export function flieuEdit(program: any): FormGroup {
  console.log('FormGroupe',program)
  return new FormGroup({
    rue: new FormControl(program.title),
    commune: new FormControl(program.contenu),
    ville: new FormControl(program.contenu),
  });

}
