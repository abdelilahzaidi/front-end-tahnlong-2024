import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionService } from '../services/session.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  program: any;
  user:any;
  user$: Observable<any>;
  userId: number | undefined;
  currentAction: any;
  actions = [
    { route: "program-list", title: "Programme", icon: "file-earmark-text" },
    { route: "niveau-list", title: "Niveau", icon: "person" },
    { route: "horaire-list", title: "Horaire", icon: "clock" },
    { route: "lieu-list", title: "Lieu", icon: "person" },
    { route: "seance-list", title: "Seance", icon: "person" },
    { route: "facture-list", title: "Facture", icon: "person" },
    { route: "abonnement-list", title: "Abonnement", icon: "person" },
    { route: "message-list", title: "message", icon: "chat-dots" },
    { route: "event-list", title: "événements", icon: "chat-dots" },
  ];

  constructor(private httpClient: HttpClient, private router: Router, private $session: SessionService, private userService: UserService, private route: ActivatedRoute) {
    this.user$ = $session.User$;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = +id;
      this.user$ = this.userService.getUserById(this.userId);
    } else {
      // Gérer le cas où id est null
      console.error('No user ID found in the route.');
    } }


    getProgramDetails(): void {
      // Vérifiez d'abord si l'utilisateur a un programme défini
      if (this.user && this.user.level && this.user.level.program) {
        // Récupérez les détails du programme à partir de l'utilisateur
        this.program = this.user.level.program;
      }
    }

    handleActionClick(action: any): void {
      switch (action.title) {
        case 'Programme':
          this.getProgramDetails();
          break;
        case 'Message':
          this.afficherMessages();
          break;
        case 'Niveau':
          this.afficherNiveau();
          break;
        case 'Abonnement':
          this.afficherAbonnement();
          break;
        // Ajoutez d'autres cas pour les autres actions si nécessaire
        default:
          console.error('Action non gérée :', action.title);
      }
    }

    afficherProgramme(): void {
      this.user$.subscribe(userData => {
        if (userData && userData.level && userData.level.program) {
          this.program = userData.level.program;
        }
        console.log('Programme---')
      });
    }

    afficherMessages(): void {
      // Implémentez la logique pour récupérer et afficher les messages ici
    }

    afficherNiveau(): void {
      // Implémentez la logique pour afficher le niveau ici
    }

    afficherAbonnement(): void {
      // Implémentez la logique pour afficher l'abonnement ici
    }

  doLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
    console.log('logout');
  }

}




