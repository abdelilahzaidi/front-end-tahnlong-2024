import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LieuService } from 'src/app/services/lieu/lieu.service';

@Component({
  selector: 'app-lieu-list',
  templateUrl: './lieu-list.component.html',
  styleUrls: ['./lieu-list.component.css']
})
export class LieuListComponent  {

  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private lieuService: LieuService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
 lieu: any;
 lieus: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/lieu')
      .subscribe((data) => {
        this.lieu = data;
      });
    this.getlieus();
  }



  getlieus() {
    console.log('lieus');
    this.httpClient
      .get<any[]>('http://localhost:3001/lieu')
      .subscribe({
        next: (data) => {
          this.lieus = data as [];
          console.log('lieux', this.lieus);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    createLieu(){
      this.router.navigate(['/admin/lieu-new']);
    }

    editeLieu($event: Event,l: any) {
      $event.preventDefault();
      $event.stopPropagation();
      this.router.navigate(['/admin/lieu-edit',l.id]);
    }

  // getlieuById(p: any) {
  //   console.log("Un prog")
  //   this.lieuService.getlieuById(p.id).subscribe({
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
