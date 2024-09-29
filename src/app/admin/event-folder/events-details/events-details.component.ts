import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css'],
})
export class EventsDetailsComponent implements OnInit {
  events: any[] = [];

  eventForm: FormGroup;
  response$: any;
  errorMessage: any;
  isModalOpen = false;
  participants: any[] = [];

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.eventForm = this.fb.group({
      // Define the form controls and validators
      nom: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (events: Event[]) => {
        this.events = events;
        // Trier les événements par date de début
        this.events.sort((a, b) => {
          return (
            new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime()
          );
        });
      },
      (error) => {
        console.error('Error loading events:', error);
        // Gérer l'erreur comme nécessaire
      }
    );
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id).subscribe(
      () => {
        console.log(`Event with ID ${id} deleted successfully`);
        // Actualiser la liste après suppression
        this.loadEvents();
      },
      (error) => {
        console.error(`Error deleting event with ID ${id}:`, error);
        // Gérer l'erreur comme nécessaire
      }
    );
  }

  createEvent(): void {
    this.router.navigate(['/admin/event-new']);
  }

  getParticipants(eventId: number): void {
    this.http
      .get<any[]>(`http://127.0.0.1:3001/event/${eventId}/participants`)
      .subscribe(
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
}
