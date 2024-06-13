import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  user$: Observable<any>
  currentId$: Observable<number>
  constructor(
    private $session: SessionService,
    private $http: HttpClient
  ) {
    this.user$ = $session.User$;
    this.currentId$ = this.user$.pipe(map(({id}) => id))
  }

}
