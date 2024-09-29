import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { NiveauService } from 'src/app/services/niveau/niveau.service';

@Component({
  selector: 'app-niveau-new',
  templateUrl: './niveau-new.component.html',
  styleUrls: ['./niveau-new.component.css']
})
export class NiveauNewComponent implements OnInit {

  errorMessage: any;
  response$ :any;
  constructor(private fb : FormBuilder, private niveauService : NiveauService,private router: Router, private $http: HttpClient){}
  niveauForm : FormGroup = this.fb.group({
    grade: new FormControl('', [Validators.required]),
    title:new FormControl('', [Validators.required]),
    programId:new FormControl('', [Validators.required]),
  })

  program$: Observable<any[]> = of([])
  ngOnInit(){
    this.program$ = this.$http.get<any[]>('http://localhost:3001/program')
    console.log('In ngOnInit', this.program$)
  }
  async submit() {
    console.log('niveau / submit ', this.niveauForm.value);

    this.niveauService.createLevel(this.niveauForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res; 
          alert("Niveau ajouté");
          this.router.navigate(['/admin/niveau-list']);
        },
        (error) => {
          this.errorMessage=error;
          console.error('Une erreur s\'est produite lors de la requête :', error);

        }
      );
 }


}

