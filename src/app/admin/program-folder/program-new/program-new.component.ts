import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../service/program.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-program-new',
  templateUrl: './program-new.component.html',
  styleUrls: ['./program-new.component.css']
})
export class ProgramNewComponent implements OnInit {

  errorMessage: any;
  response$ :any;
  constructor(private fb : FormBuilder, private programService : ProgramService,private router: Router, private $http: HttpClient){}
  programForm : FormGroup = this.fb.group({
    title: new FormControl('', [Validators.required]),
    contenu:new FormControl('', [Validators.required]),
  })

  grades$: Observable<any[]> = of([])
  ngOnInit(){
    this.grades$ = this.$http.get<any[]>('http://localhost:3001/level')
  }
  async submit() {
    console.log('user / submit', this.programForm.value);

    this.programService.createprogram(this.programForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res; 
          alert("Programme ajouté");
          this.router.navigate(['/admin/program-list']);
        },
        (error) => {
          this.errorMessage=error;
          console.error('Une erreur s\'est produite lors de la requête :', error);

        }
      );
  }
}
