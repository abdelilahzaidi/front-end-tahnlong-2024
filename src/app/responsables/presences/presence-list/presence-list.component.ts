import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SeanceUserService } from 'src/app/services/seance-user.service';

@Component({
  selector: 'app-presence-list',
  templateUrl: './presence-list.component.html',
  styleUrls: ['./presence-list.component.css'],
})
export class PresenceListComponent implements OnInit {
  seances: any[] = [];
  showDiv = false;
  seanceId: number | null = null; // ID de la séance sélectionnée
  users: any[] = []; // Liste des utilisateurs pour la séance sélectionnée
  selectedSeance: any; // Objet pour stocker les détails de la séance sélectionnée

  constructor(
    private seanceUserService: SeanceUserService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSeances();
  }

  toggleDiv(seance: any): void {
    this.seanceId = seance.id; // Capture l'ID de la séance cliquée
    this.selectedSeance = seance; // Stocke les détails de la séance sélectionnée

    if (this.seanceId !== null) {
      this.loadUsersForSeance(this.seanceId);
    }

    this.showDiv = true; // Affiche la section des utilisateurs
  }

  loadUsersForSeance(seanceId: number): void {
    this.seanceUserService.getUsersBySeanceId(seanceId).subscribe(
      (data: any[]) => {
        this.users = data;
        console.log('users', this.users);
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  getSeances() {
    this.httpClient.get<any[]>('http://localhost:3001/seance').subscribe({
      next: (data) => {
        this.seances = data;
        console.log('Seances : ', this.seances);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // getSeances() {
  //   this.httpClient.get<any[]>('http://localhost:3001/seance').subscribe({
  //     next: (data) => {
  //       // Trier les séances par date
  //       this.seances = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  //       console.log('Seances triées : ', this.seances);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // getSeances() {
  //   this.httpClient.get<any[]>('http://localhost:3001/seance').subscribe({
  //     next: (data) => {
  //       // Filtrer les séances avec un ID compris entre 9 et 16
  //       this.seances = data.filter(seance => seance.id >= 9 && seance.id <= 16);

  //       console.log('Séances filtrées (ID entre 9 et 16) :', this.seances);
  //     },
  //     error: (err) => {
  //       console.log('Erreur lors de la récupération des séances :', err);
  //     },
  //   });
  // }



  validate($event: Event, seance: any) {
    $event.preventDefault(); // Empêche le comportement par défaut du bouton

    console.log('Received seance in validate:', seance);

    if (seance && seance.id) {
      this.seanceId = seance.id;
      this.selectedSeance = seance;
      this.router.navigate(['responsables/presence-validate', this.seanceId]);
    } else {
      console.error('Le paramètre ou l\'id est undefined');
    }
  }

}
