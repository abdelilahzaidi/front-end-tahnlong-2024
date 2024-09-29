import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeanceUserService } from 'src/app/services/seance-user.service';

@Component({
  selector: 'app-presence-validate',
  templateUrl: './presence-validate.component.html',
  styleUrls: ['./presence-validate.component.css']
})
export class PresenceValidateComponent implements OnInit {
  seances: any[] = [];
  seanceId: number | null = null; // ID de la séance sélectionnée
  users: any[] = []; // Liste des utilisateurs pour la séance sélectionnée
  objectifDuCour: string = ''; // Objectif du cours pour la séance sélectionnée
  presence:boolean=false
  currentId:number=22
  constructor(
    private seanceUserService: SeanceUserService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.seanceId = +id; // Convertir l'ID en nombre
        this.loadSeanceDetails(this.seanceId);
        this.loadUsersForSeance(this.seanceId);
      }
    });
  }

  loadSeanceDetails(seanceId: number): void {
    this.httpClient.get<any>(`http://localhost:3001/seance/${seanceId}`).subscribe(
      (data) => {
        this.objectifDuCour = data.cour.objectifDuCour; // Assurez-vous que cette propriété existe
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de la séance', error);
      }
    );
  }

  loadUsersForSeance(seanceId: number): void {
    this.seanceUserService.getUsersBySeanceId(seanceId).subscribe(
      (data: any[]) => {
        if (data.length === 0) {
          console.warn('Aucun utilisateur trouvé pour la séance avec l\'ID ' + seanceId);
        } else {
          this.users = data;
          console.log('Users:', this.users);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.seanceId !== null) {
      // Create an array of presence data, including userId and presence status
      const presences = this.users
        .map(user => ({
          userId: user.user.id,
          presence: user.presence
        }))
        .filter((value, index, self) =>
          index === self.findIndex((t) => t.userId === value.userId)
        ); // Remove duplicates by userId

      console.log('Data sent:', presences);

      // Create the full payload for the request
      const requestData = {
        userIds: presences.map(p => p.userId),
        presence: presences[0]?.presence // Assuming all have the same presence status, adjust as needed
      };

      // Call the service to update presence
      this.seanceUserService.updatePresence(this.seanceId, requestData).subscribe(
        (response) => {
          console.log('Presence updated successfully', response);
          this.router.navigate(['/responsables/presences',this.currentId]); // Redirect to a confirmation page
        },
        (error) => {
          console.error('Error updating presence', error);
        }
      );
    }
  }






}
