import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { ProgramService } from 'src/app/services/program/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @Input() selectedUser: any;

  apiUrl = 'http://localhost:3001';
  errorMessage: any;
  program$: Observable<any> | undefined;
  program: any;
  programs: any[] = [];
  response$: any;
  currentAction!: string;

  actions = [
    { route: 'program-details/:id', title: 'Programme', icon: 'file-earmark-text' },
    { route: 'seance', title: 'Seance', icon: 'person' },
    { route: 'abonnement', title: 'Abonnement', icon: 'person' },
    { route: 'event-list-user', title: 'Événements', icon: 'chat-dots' },
    { route: 'facture', title: 'Factures', icon: 'chat-dots' },
  ];

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {
    // Initialise l'observable program$ qui récupère le programme basé sur l'ID de l'URL
    this.program$ = this.route.paramMap.pipe(
      map(params => params.get("id")),
      switchMap((id) => this.httpClient.get<any>(`${this.apiUrl}/user/${id}/level`))
    );
    console.log('programme',this.program$)
  }







  ngOnInit(): void {
    const programId = this.route.snapshot.paramMap.get('id');

    this.httpClient
      .get<any>(`${this.apiUrl}/program/${programId}/technichal`)
      .subscribe(
        (data) => {
          this.program = data;  
          console.log('Données du programme: ', this.program);


          if (this.program && this.program.technicals && this.program.technicals.length > 0) {
            console.log('Techniques trouvées: ', this.program.technicals);
          } else {
            console.warn('Aucune technique trouvée pour ce programme.');
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails du programme: ', error);
          this.errorMessage = 'Impossible de charger les détails du programme.';
        }
      );
  }
}




