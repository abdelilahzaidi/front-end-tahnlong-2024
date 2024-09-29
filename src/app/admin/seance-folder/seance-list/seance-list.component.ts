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
  seances: any[] = [];
  paginatedSeances: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  pages: number[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSeances();

  }

  getSeances() {
    this.httpClient.get<any[]>('http://localhost:3001/seance').subscribe({
      next: (data) => {
        this.seances = data;
        console.log("Seances : ",this.seances)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }



  createSeance() {
    this.router.navigate(['/admin/seance-new']);
  }

  // editSeanceById(seanceId: number) {
  //   this.router.navigate(['/admin/seance-edit', seanceId]);
  // }

  // deleteSeanceById(seanceId: number) {
  //   this.httpClient.delete(`http://localhost:3001/seance/${seanceId}`).subscribe({
  //     next: () => {
  //       this.getSeances();
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
}
