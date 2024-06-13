import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LieuService } from 'src/app/services/lieu/lieu.service';

@Component({
  selector: 'app-lieu-new',
  templateUrl: './lieu-new.component.html',
  styleUrls: ['./lieu-new.component.css']
})
export class LieuNewComponent implements OnInit {

  errorMessage: any;
  response$ :any;
  constructor(private fb : FormBuilder, private lieuService : LieuService,private router: Router, private $http: HttpClient){}
  lieuForm : FormGroup = this.fb.group({
    rue: new FormControl('', [Validators.required]),
    commune:new FormControl('', [Validators.required]),
    ville:new FormControl('', [Validators.required]),
  })

  //grades$: Observable<any[]> = of([])
  ngOnInit(){
    //this.grades$ = this.$http.get<any[]>('http://localhost:3001/')
  }
  async submit() {
    console.log('user / submit', this.lieuForm.value);

    this.lieuService.createlieu(this.lieuForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res; // Si vous avez besoin de stocker la réponse
          alert("Programme ajouté");
          this.router.navigate(['/admin/lieu-list']);
        },
        (error) => {
          this.errorMessage=error;
          console.error('Une erreur s\'est produite lors de la requête :', error);
          // Traitez l'erreur comme vous le souhaitez ici
        }
      );
  }
}
