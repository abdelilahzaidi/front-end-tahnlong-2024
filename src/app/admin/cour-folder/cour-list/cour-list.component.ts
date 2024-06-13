import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CourService } from 'src/app/services/cour/cour.service';

@Component({
  selector: 'app-cour-list',
  templateUrl: './cour-list.component.html',
  styleUrls: ['./cour-list.component.css']
})
export class CourListComponent {

  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private courservice: CourService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
 cour: any;
 cours: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/cour')
      .subscribe((data) => {
        this.cour = data;
      });
    this.getCours();
  }



  getCours() {
    console.log('cours');
    this.httpClient
      .get<any[]>('http://localhost:3001/cour')
      .subscribe({
        next: (data) => {
          this.cours = data  as [];
          console.log('cours', this.cours);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    createCour(){
      this.router.navigate(['/admin/cour-new']);
    }
    editeCour($event :Event,c :any){}
  // getlieuById(p: any) {
  //   console.log("Un prog")
  //   this.courservice.getlieuById(p.id).subscribe({
  //     next: (data) => {
  //       this.lieu = data
  //       console.log("lieu", data)
  //       console.log("lieu id", this.lieu.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }

}
