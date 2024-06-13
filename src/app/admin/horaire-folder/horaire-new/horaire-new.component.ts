import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { HoraireService } from 'src/app/services/horaire/horaire.service';

@Component({
  selector: 'app-horaire-new',
  templateUrl: './horaire-new.component.html',
  styleUrls: ['./horaire-new.component.css']
})
export class HoraireNewComponent implements OnInit {


  errorMessage: any;
  response$ :any;
  constructor(private fb : FormBuilder, private horaireService : HoraireService,private router: Router, private $http: HttpClient){}
  horaireForm : FormGroup = this.fb.group({
    heureDebut: new FormControl('', [Validators.required]),
    heureFin:new FormControl('', [Validators.required]),
    jour:new FormControl('', [Validators.required]),
  })

  //grades$: Observable<any[]> = of([])
  ngOnInit(){
    //this.grades$ = this.$http.get<any[]>('http://localhost:3001/horaire')
  }
  async submit() {
    console.log('user / submit', this.horaireForm.value);

    this.horaireService.createHoraire(this.horaireForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res; // Si vous avez besoin de stocker la réponse
          alert("Programme ajouté");
          this.router.navigate(['/admin/program-list']);
        },
        (error) => {
          this.errorMessage=error;
          console.error('Une erreur s\'est produite lors de la requête :', error);
          // Traitez l'erreur comme vous le souhaitez ici
        }
      );
  }
}







