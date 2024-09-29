import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  user$: Observable<any>
  program$: Observable<any> |undefined
  currentId$: Observable<number>
  currentProgramId$: Observable<number | null>;


  currentAction : any
  actions =[
    {route:"program-list",title:"Programme","icon":"file-earmark-text"},
    {route:"niveau-list",title:"Niveau","icon":"person"},
    // {route:"horaire-list",title:"Horaire","icon":"clock"},
    // {route:"lieu-list",title:"Lieu","icon":"person"},
    // {route:"cour-list",title:"Cours","icon":"person"},
    // {route:"date-cour-list",title:"Date cours","icon":"person"},
    {route:"seance-list",title:"Seance","icon":"person"},
    {route:"facture-list",title:"Facture","icon":"person"},
    {route:"abonnement-list",title:"Abonnement","icon":"person"},
    {route:"event-list",title:"Événement","icon":"person"},
  ]
  title = 'than-long-client';
  

  @Input('baseUri')
  set Uri(v: string) {
    this.actions.forEach(action => action.route = `${v}/${action.route}`)
  }



  handleRoute(action : any){
    this.currentAction=action
    this.router.navigateByUrl(action.route)
  }


  constructor(
    private router: Router,
    private $session: SessionService,
    private $http: HttpClient
  ) {
    this.user$ = $session.User$;
    this.program$ = $session.Program$ ?? of({ id: null }); // Fournir un observable par défaut

    this.currentId$ = this.user$.pipe(map(({ id }) => id));
    this.currentProgramId$ = this.program$.pipe(map(({ id }) => id));
  }
}
