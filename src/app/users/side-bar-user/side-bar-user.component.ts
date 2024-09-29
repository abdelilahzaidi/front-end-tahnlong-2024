import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-side-bar-user',
  templateUrl: './side-bar-user.component.html',
  styleUrls: ['./side-bar-user.component.css']
})
export class SideBarUserComponent {
  isCollapsed: boolean = false;
  currentAction : any
  actions =[
    {route:"user-list",title:"Utilisateur","icon":"person"},
    {route:"program-details",title:"Programme","icon":"file-earmark-text"},
    {route:"horaire-list",title:"Horaire","icon":"clock"},
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

  toggleSideBar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
