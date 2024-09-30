import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbonnementService } from 'src/app/services/abonnement/abonnement.service';

@Component({
  selector: 'app-abonnement-list',
  templateUrl: './abonnement-list.component.html',
  styleUrls: ['./abonnement-list.component.css']
})
export class AbonnementListComponent implements OnInit {
  apiUrl = 'http://localhost:3001';
  errorMessage: any;
  user: any;
  level: any;
  type: any;
  types: any[] = [];
  abonnements: any[] = [];
  selectedAbonnement: any;
  response$: any;
  currentAction!: string;
  users:any[]=[]

  constructor(
    private httpClient: HttpClient,
    private abonnementService: AbonnementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<any[]>(`${this.apiUrl}/type-abonnement`)
      .subscribe((data) => {
        this.types = data.sort((a, b) => a.id - b.id);
        console.log('Données triées', this.types);
        if (this.types.length > 0) {
          this.selectedAbonnement = this.types[0];
        }
      });
  }

  async onTypeAbonnementClick(typeId: number): Promise<void> {
    try {
      const data = await this.abonnementService.getUsersByTypeAbonnement(typeId);
      this.selectedAbonnement = data.typeAbonnement;
      this.users = data.users;
      console.log('Utilisateurs:', this.users);
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

}



