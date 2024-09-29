import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent {
  // currentAction : any
  // title = 'than-long-client';
  // user$: Observable<any>;

  // constructor(
  //   private router: Router,
  //   private $session: SessionService
  //   ) {

  //     this.user$ = $session.User$
  //   }

  // handleRoute(action : any){
  //   this.currentAction=action
  //   this.router.navigateByUrl(action.route)
  // }
  // doLogout() {
  //   this.$session.close()
  // }
  user$: Observable<any>
  program$: Observable<any> |undefined
  currentId$: Observable<number>
  currentProgramId$: Observable<number | null>;


  constructor(
    private $session: SessionService,
    private $http: HttpClient
  ) {
    this.user$ = $session.User$;
    this.program$ = $session.Program$ ?? of({ id: null }); // Fournir un observable par défaut

    this.currentId$ = this.user$.pipe(map(({ id }) => id));
    this.currentProgramId$ = this.program$.pipe(map(({ id }) => id));
  }

}
