import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DateCourService } from 'src/app/services/date-cour/date-cour.service';


@Component({
  selector: 'app-date-cour-list',
  templateUrl: './date-cour-list.component.html',
  styleUrls: ['./date-cour-list.component.css']
})
export class DateCourListComponent  {

  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private dateCourService: DateCourService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
 dateCour: any;
 dateCours: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/date-cour')
      .subscribe((data) => {
        this.dateCour = data;
      });
    this.getdateCours();
  }



  getdateCours() {
    console.log('dateCours');
    this.httpClient
      .get<any[]>('http://localhost:3001/date-cour')
      .subscribe({
        next: (data) => {
          this.dateCours = data as [];
          console.log('dateCourx', this.dateCours);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

  // getdateCourById(p: any) {
  //   console.log("Un prog")
  //   this.dateCourService.getdateCourById(p.id).subscribe({
  //     next: (data) => {
  //       this.dateCour = data
  //       console.log("dateCour", data)
  //       console.log("dateCour id", this.dateCour.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }

}
