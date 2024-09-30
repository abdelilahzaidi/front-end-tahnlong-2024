import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NiveauService } from 'src/app/services/niveau/niveau.service';

@Component({
  selector: 'app-niveau-list',
  templateUrl: './niveau-list.component.html',
  styleUrls: ['./niveau-list.component.css']
})
export class NiveauListComponent  {

  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private niveauService: NiveauService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
  level: any;
  levels: any[] = [];
  selectedAbonnement: string = '';
  selectedLevel = this.levels[0];
  response$: any;

   currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/level')
      .subscribe((data) => {
        this.levels = data.sort((a, b) => a.id - b.id);
        console.log('Données triées ',this.levels)
        if (this.levels.length > 0) {
          this.selectedLevel = this.levels[0];
        }
      });

  }

  electedAbonnement(abonnement: string): void {
    this.selectedAbonnement = abonnement;
  }





    createNiveau() {
      this.router.navigate(['/admin/niveau-new']);
    }






    editNiveauById($event: Event,l: any) {
      $event.preventDefault();
      $event.stopPropagation();
      this.niveauService.getLevelById(l.id).subscribe({
        next: (data) => {
          this.level = data;
          console.log("Niveau ID : ", l.id, " données : ", this.level)
          this.router.navigate(['/admin/niveau-edit', l.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
    }



    handleDeleteNiveau($event: Event,l: any) {
      $event.preventDefault();
      $event.stopPropagation();
      let conf = confirm('Êtes-vous sûr de vouloir supprimer ce niveau ?');
      if (conf == false) return;
      this.currentAction = 'handleDeleteUser';
      this.niveauService.deleteLevel(l.id).subscribe({
        next: (data) => {
          let index = this.levels.indexOf(l);
          this.levels.splice(index, 1);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
    }



  getlevelById(event: MouseEvent, level: any) {
    event.preventDefault(); // Empêche la redirection de la page
    console.log("Un prog");
    this.niveauService.getLevelById(level.id).subscribe({
      next: (data) => {
        this.selectedLevel = data;
        console.log("level", data);
        console.log("level id", this.selectedLevel.id, " ", level.id);
      },
      error: (err) => {
        this.errorMessage = err.error;
      }
    });
  }


}
