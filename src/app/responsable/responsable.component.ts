import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {
  currentAction : any
  title = 'than-long-client';
  user$: Observable<any>
  constructor(
    private router: Router,
    private $session: SessionService
    ) {
      console.log("BLOP")
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
