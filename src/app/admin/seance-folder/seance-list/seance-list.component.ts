import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SeanceService } from 'src/app/services/seance/seance.service';

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.css']
})
export class SeanceListComponent {
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
      });
    this.getSeances();
  }



  getSeances() {
    console.log('seances');
    this.httpClient
      .get<any[]>('http://localhost:3001/seance')
      .subscribe({
        next: (data) => {
          this.seances = data as [];
          console.log('Seance', this.seances);
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
