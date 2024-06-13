import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HoraireService } from 'src/app/services/horaire/horaire.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-horaire-list',
  templateUrl: './horaire-list.component.html',
  styleUrls: ['./horaire-list.component.css']
})
export class HoraireListComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private horaireService: HoraireService,
    private router: Router
  ) {}

  apiUrl = 'http://localhost:3001';
  user: any;
  horaire: any;
  horaires: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/horaire')
      .subscribe((data: any) => {
        this.horaire = data;
      });
    this.gethoraires();
  }


  gethoraires() {
    console.log('horaires');
    this.httpClient
      .get<any[]>('http://localhost:3001/horaire')
      .subscribe({
        next: (data) => {
          this.horaires = data as [];
          console.log('Niveaux', this.horaires);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }

  // gethoraires() {
  //   console.log('horaires');
  //   this.httpClient
  //     .get<any[]>('http://localhost:3001/horaire')
  //     .subscribe({
  //       next: (data) => {
  //         this.horaires = data.map(it => ({
  //           ...it,
  //           jour: format(new Date(it.jour), 'yyyy-MM-dd'),
  //           heureDebut: it.heureDebut.split(':').slice(0,2).join(':'),  heureFin: it.heureFin.split(':').slice(0,2).join(':')
  //         }));
  //       },
  //       error: (err: any) => {
  //         console.log(err);
  //       },
  //     });
  //   }


    createHoraire(){
      this.router.navigate(['/admin/horaire-new']);
    }

    gethoraireById(p: any) {
      this.horaireService.getHoraireById(p.id).subscribe({
        next: (data) => {
          this.horaire = data;
          console.log("user ",p.id," données : ",this.horaire)
          this.router.navigate(['/admin/horaire-details', p.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
      console.log('Hello horaireme',p);
    }






    editHoraireById($event:Event,h: any) {
      $event.preventDefault();
      $event.stopPropagation()
      this.horaireService.getHoraireById(h.id).subscribe({
        next: (data) => {
          this.horaire = data;
          console.log("user ",h.id," données : ",this.horaire)
          this.router.navigate(['/admin/horaire-edit', h.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
      console.log('Hello horaireme',h);
    }

  createhoraire(){
    this.router.navigate(['/admin/horaire-new']);
  }
  handleDeletehoraire($event: Event,h: any) {
    $event.preventDefault();
    $event.stopPropagation();
    let conf = confirm('Êtes-vous sûr de vouloir supprimer ce horaire ?');
    if (conf == false) return;
    this.currentAction = 'handleDeleteUser';
    this.horaireService.deleteHoraire(h.id).subscribe({
      next: (data) => {
        let index = this.horaires.indexOf(h);
        this.horaires.splice(index, 1);
      },
      error: (err) => {
        this.errorMessage = err.error;
      },
    });
  }

  // gethoraireById(p: any) {
  //   console.log("Un prog")
  //   this.niveauService.gethoraireById(p.id).subscribe({
  //     next: (data) => {
  //       this.horaire = data
  //       console.log("horaire", data)
  //       console.log("horaire id", this.horaire.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }

}
