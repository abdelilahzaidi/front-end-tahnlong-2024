import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SeanceService } from 'src/app/services/seance/seance.service';

@Component({
  selector: 'app-seance-detail',
  templateUrl: './seance-detail.component.html',
  styleUrls: ['./seance-detail.component.css']
})
export class SeanceDetailComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private seanceService: SeanceService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
  seance: any;
  seances: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/seance')
      .subscribe((data: any) => {
        this.seance = data;
        // Transformation de `dateCour` en Date si ce n'est pas déjà une Date
        this.seances.forEach(seance => {
          if (seance.dateCour && !(seance.dateCour instanceof Date)) {
            seance.dateCour = new Date(seance.dateCour);
          }
        });
      });
    this.getSeances();
  }



  getSeances() {
    this.httpClient.get<any[]>('http://localhost:3001/seance')
      .subscribe({
        next: (data) => {
          this.seances = data.map(seance => {
            if (seance && seance.dateCour) {
              return {
                ...seance,
                dateCour: seance.dateCour.dateCour || seance.dateCour
              };
            } else {
              // Si le seance est null ou n'a pas de dateCour, gérez ce cas
              return {
                ...seance,
                dateCour: null // ou toute autre valeur par défaut
              };
            }
          });
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }



    createSeance(){
      this.router.navigate(['/admin/seance-new']);
    }

  // getseanceById(p: any) {
  //   console.log("Un prog")
  //   this.niveauService.getseanceById(p.id).subscribe({
  //     next: (data) => {
  //       this.seance = data
  //       console.log("seance", data)
  //       console.log("seance id", this.seance.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }
}
