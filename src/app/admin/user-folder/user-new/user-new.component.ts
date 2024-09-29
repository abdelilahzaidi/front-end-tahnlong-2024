import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/users/user.service';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  errorMessage: any;
  response$ :any;
  constructor(private fb : FormBuilder, private userService : UserService,private router: Router, private $http: HttpClient){}
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
    level:new FormControl('', [Validators.required]),
    status:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
    password_confirm:new FormControl('', [Validators.required])

  })

  levels$: Observable<any[]> = of([])
  ngOnInit(){
    this.levels$ = this.$http.get<any[]>('http://localhost:3001/level')
  }
  async submit() {
    console.log('user / submit', this.userForm.value);

    this.userService.createUser(this.userForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res;
          alert("Utilisateur ajouté");
          this.router.navigate(['/admin/user-list']);
        },
        (error) => {
          this.errorMessage=error;
          console.error('Une erreur s\'est produite lors de la requête :', error);
          
        }
      );
  }



}
