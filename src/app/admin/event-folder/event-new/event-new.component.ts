import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.css']
})
export class EventCreateComponent implements OnInit {
  eventForm: FormGroup;
  errorMessage: string = '';

  @Output() close = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
  ) {
    this.eventForm = this.fb.group({
      nom: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      userIds: ['']
    });
  }

  ngOnInit(): void {}

  // createEvent(): void {
  //   if (this.eventForm.invalid) {
  //     this.errorMessage = 'Veuillez remplir tous les champs requis';
  //     return;
  //   }

  //   const eventData = this.eventForm.value;
  //   console.log('Event Data:', eventData);

  //   this.eventService.createEvent(eventData).subscribe(
  //     (res) => {
  //       console.log('Réponse du serveur :', res);
  //       alert('Événement créé avec succès');
  //       this.router.navigate(['/admin/event-list']);
  //     },
  //     (error) => {
  //       console.error('Une erreur s\'est produite lors de la requête :', error);
  //       this.errorMessage = 'Erreur lors de la création de l\'événement';
  //     }
  //   );
  // }
  createEvent(): void {
    if (this.eventForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs requis';
      return;
    }

    const userIds = this.eventForm.value.userIds.split(',').map(Number); // Exemple de transformation si nécessaire
    const eventData = {
      nom: this.eventForm.value.nom,
      dateDebut: this.eventForm.value.dateDebut,
      dateFin: this.eventForm.value.dateFin,
      userIds: []  // Assurez-vous que c'est bien un tableau de nombres
    };

    this.eventService.createEvent(eventData).subscribe(
      (res) => {
        console.log('Réponse du serveur :', res);
        alert('Événement créé avec succès');
        this.router.navigate(['/admin/event-list']);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        this.errorMessage = 'Erreur lors de la création de l\'événement';
      }
    );
  }

}
