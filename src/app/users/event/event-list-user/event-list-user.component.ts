import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list-user',
  templateUrl: './event-list-user.component.html',
  styleUrls: ['./event-list-user.component.css'],
})
export class EventListUserComponent implements OnInit {
  event: any;
  events: any[] = [];
  eventParticipationStatus: { [key: string]: string } = {};
  currentUserId: number | null = null;
  participants: any[] = [];


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const currentUserId = this.route.snapshot.paramMap.get('id');

      // Après avoir obtenu l'ID de l'utilisateur, récupérez les événements
      this.getAllEvents();

    });
  }

  getAllEvents() {
    this.http.get<any[]>('http://127.0.0.1:3001/event').subscribe((data) => {
      this.events = data;
      //   // Initialisez le statut de participation pour chaque événement
      //   this.events.forEach((event) => {
      //     this.eventParticipationStatus[event.nom] = 'ne participe pas';
      //   });
      // },
      // (error) => {
      //   console.error('Error fetching events:', error);
    });
  }

  // getUsersByEvent(eventId: number): void {
  //   this.http
  //     .get<any[]>(`http://127.0.0.1:3001/event/${eventId}/participants`)
  //     .subscribe(
  //       (data) => {
  //         this.events = data;
  //         console.log('Participants:', this.events);
  //         // Vous pouvez manipuler les données des participants ici selon vos besoins
  //       },
  //       (error) => {
  //         console.error('Error fetching participants:', error);
  //       }
  //     );
  // }


 getParticipants(eventId: number): void {
    this.http.get<any[]>(`http://127.0.0.1:3001/event/${eventId}/participants`).subscribe(
      (data) => {
        this.participants = data;
        console.log('Participants:', this.participants);
        // Vous pouvez manipuler les données des participants ici selon vos besoins
      },
      (error) => {
        console.error('Error fetching participants:', error);
      }
    );
  }

  participateEvent(event: any): void {
    const eventId = event.id;
    const userId = this.currentUserId;

    this.http
      .post(
        `http://127.0.0.1:3001/event/${eventId}/participate`,
        { userId },
        { responseType: 'text' }
      )
      .subscribe(
        (response: any) => {
          // Afficher le message renvoyé depuis le serveur
          console.log(response); // Afficher le message dans la console (à adapter selon votre besoin)

        alert(response)

        },
        (error) => {
          console.error('Error participating in event:', error);
        }
      );
  }

  participate() {
    this.router.navigate(['/users/event-participate']);
  }
}