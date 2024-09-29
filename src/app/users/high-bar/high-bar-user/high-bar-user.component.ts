import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, map } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-high-bar-user',
  templateUrl: './high-bar-user.component.html',
  styleUrls: ['./high-bar-user.component.css']
})
export class HighBarUserComponent implements OnInit {
  program: any;
  user: any;
  user$: Observable<any>;
  program$: Observable<any> |undefined;
  userId: number | undefined;
  currentAction: any;
  currentId$: Observable<number>;
  currentProgramId$: Observable<number | null>;


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
    
  }

  getProgramDetails(): void {
    if (this.user && this.user.level && this.user.level.program) {
      this.program = this.user.level.program;
    }
  }

  // handleActionClick(action: any): void {
  //   switch (action.title) {
  //     case 'Programme':
  //       this.getProgramDetails();
  //       break;
  //     case 'Message':
  //       this.afficherMessages();
  //       break;
  //     case 'Niveau':
  //       this.afficherNiveau();
  //       break;
  //     case 'Abonnement':
  //       this.afficherAbonnement();
  //       break;

  //     default:
  //       console.error('Action non gérée :', action.title);
  //   }
  // }

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

