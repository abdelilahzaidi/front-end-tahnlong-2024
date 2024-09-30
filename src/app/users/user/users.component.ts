import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionService } from '../../services/session.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  program: any;
  user: any;
  user$: Observable<any>;
  program$: Observable<any> |undefined;
  userId: number | undefined;
  currentAction: any;
  currentId$: Observable<number>;
  currentProgramId$: Observable<number | null>;
  actions = [

    { route: 'program-details/:id', title: 'Programme', icon: 'file-earmark-text' },
    // { route: 'horaire', title: 'Horaire', icon: 'clock' },
    // { route: 'lieu', title: 'Lieu', icon: 'person' },
    { route: 'seance', title: 'Seance', icon: 'person' },
    { route: 'abonnement', title: 'Abonnement', icon: 'person' },
    { route: 'event-list-user', title: 'Événements', icon: 'chat-dots' },
    { route: 'facture', title: 'Factures', icon: 'chat-dots' },
  ];

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private $session: SessionService,
    private userService: UserService,
    private route: ActivatedRoute,

  ) {
    this.user$ = $session.User$;
    this.program$ = $session.Program$ ?? of({ id: null });
    this.currentId$ = this.user$.pipe(map(({ id }) => id));
    this.currentProgramId$ = this.program$.pipe(map(({ id }) => id));
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id '+id)
    if (id) {
      this.userId = +id;
      this.user$ = this.userService.getUserById(this.userId);
    } else {
      console.error('No user ID found in the route.');
    }
  }

  getProgramDetails(): void {
    if (this.user && this.user.level && this.user.level.program) {
      this.program = this.user.level.program;
    }
  }

 

  afficherProgramme(): void {
    this.user$.subscribe((userData) => {
      if (userData && userData.level && userData.level.program) {
        this.program = userData.level.program;
      }
      console.log('Programme---');
    });
  }

  afficherMessages(): void {}

  afficherNiveau(): void {}

  afficherAbonnement(): void {}

  doLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
    console.log('logout');
  }
}






