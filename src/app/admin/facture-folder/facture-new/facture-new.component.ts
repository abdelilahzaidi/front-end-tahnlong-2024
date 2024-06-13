import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeanceService } from 'src/app/services/seance/seance.service';

@Component({
  selector: 'app-facture-new',
  templateUrl: './facture-new.component.html',
  styleUrls: ['./facture-new.component.css']
})
export class FactureNewComponent implements OnInit {
  errorMessage: any;
  response$ :any;
  constructor(private fb : FormBuilder, private seanceService : SeanceService,private router: Router, private $http: HttpClient){}
  seanceForm : FormGroup = this.fb.group({
    idDateCour: new FormControl('', [Validators.required]),
    idHoraire:new FormControl('', [Validators.required]),
    idCour:new FormControl('', [Validators.required]),
  })

  //grades$: Observable<any[]> = of([])
  ngOnInit(){
    //this.grades$ = this.$http.get<any[]>('http://localhost:3001/level')
  }
  async submit() {
    console.log('user / submit', this.seanceForm.value);

    this.seanceService.createSeance(this.seanceForm.value)
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
