import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  errorMessage: any =null;
  response$ :any;
  constructor(private fb : FormBuilder, private authService : AuthService,
    private router: Router, private $http: HttpClient){}
  userForm : FormGroup = this.fb.group({
    first_name: new FormControl('', [Validators.required]),
    last_name:new FormControl('', [Validators.required]),
    gender:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
    rue:new FormControl('', [Validators.required]),
    commune:new FormControl('', [Validators.required]),
    ville:new FormControl('', [Validators.required]),
    birthDate:new FormControl('', [Validators.required]),
    actif:new FormControl('', [Validators.required]),
    gsm:new FormControl('', [Validators.required]),
    grade:new FormControl('', [Validators.required]),
    //status:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
    password_confirm:new FormControl('', [Validators.required])

  })

  grades$: Observable<any[]> = of([])

  ngOnInit(){
    this.grades$ = this.$http.get<any[]>('http://localhost:3001/level')
  }

  async submit() {
    if (this.userForm.invalid) { return; }
    console.log('user / submit', this.userForm.value);

    this.authService.signupUser(this.userForm.value)
      .subscribe(
        {
          next:(res:any) => {
            console.log('Réponse du serveur :', res);
            this.response$ = res; // Si vous avez besoin de stocker la réponse
            this.router.navigate(['/auth/login'])
            alert("Bienvenue au Than Long, votre compte vient d'être créé");
          },
          error:(error)=>{
            console.error('Error Zaidi :',error.error)
            this.errorMessage=error.error.message;

          }
        }
      );
  }

}





