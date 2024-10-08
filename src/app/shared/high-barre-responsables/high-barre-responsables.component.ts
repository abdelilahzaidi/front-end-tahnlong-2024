import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-high-barre-responsables',
  templateUrl: './high-barre-responsables.component.html',
  styleUrls: ['./high-barre-responsables.component.css']
})
export class HighBarreResponsablesComponent {
  currentAction : any
  actions =[
    {route:"users",title:"Utilisateur","icon":"person"},
    {route:"program-list",title:"Programme","icon":"file-earmark-text"},
    {route:"niveau-list",title:"Niveau","icon":"person"},
    {route:"horaire-list",title:"Horaire","icon":"clock"},
    {route:"lieu-list",title:"Lieu","icon":"person"},
    {route:"cour-list",title:"Cours","icon":"person"},
    {route:"date-cour-list",title:"Date cours","icon":"person"},
    {route:"seance-list",title:"Seance","icon":"person"},
    {route:"facture-list",title:"Facture","icon":"person"},
    {route:"abonnement-list",title:"Abonnement","icon":"person"},
    {route:"event-list",title:"Événement","icon":"person"},
  ]
  title = 'than-long-client';
  user$: Observable<any>

  @Input('baseUri')
  set Uri(v: string) {
    this.actions.forEach(action => action.route = `${v}/${action.route}`)
  }

  constructor(
    private router: Router,
    private $session: SessionService
  ) {
    this.user$ = $session.User$
  }

  handleRoute(action : any){
    this.currentAction=action
    this.router.navigateByUrl(action.route)
  }
  doLogout() {
    this.$session.close()
  }
}
