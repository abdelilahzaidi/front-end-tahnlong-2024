import { FormControl, FormGroup, Validators } from '@angular/forms';

export function fProgramEdit(program: any): FormGroup {
  console.log('FormGroupe',program)
  return new FormGroup({
    title: new FormControl(program.title),
    contenu: new FormControl(program.contenu),
  });

}
