import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-high-barre-responsable',
  templateUrl: './high-barre-responsable.component.html',
  styleUrls: ['./high-barre-responsable.component.css']
})
export class HighBarreResponsableComponent {
  currentAction : any
  actions =[
    {route:"users",title:"Utilisateur","icon":"person"},
    {route:"program-list",title:"Programme","icon":"person"},
    {route:"niveau-list",title:"Niveau","icon":"person"},
    {route:"horaire-list",title:"Horaire","icon":"person"},
    {route:"lieu-list",title:"Lieu","icon":"person"},
    {route:"seance-list",title:"Seance","icon":"person"},

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
