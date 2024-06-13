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




// getAbonnements() {
//   console.log('abonnements');
//   this.httpClient
//     .get<any[]>('http://localhost:3001/abonnement')
//     .subscribe({
//       next: (data) => {
//         this.levels = data as [];
//         console.log('Abonnement', this.levels);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }









// selectLevelDescription(description: string): void {
//   this.selectedDescription = description;
// }




// getlevels() {
//   console.log('levels');
//   this.httpClient
//     .get<any[]>('http://localhost:3001/level')
//     .subscribe({
//       next: (data) => {
//         this.levels = data as [];
//         console.log('Niveaux', this.levels);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }

//   createNiveau() {
//     this.router.navigate(['/admin/niveau-new']);
//   }
//   selectedLevel = this.levels[0];  // Par défaut, sélectionnez le premier niveau





//   editNiveauById($event: Event,l: any) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     this.niveauService.getLevelById(l.id).subscribe({
//       next: (data) => {
//         this.level = data;
//         console.log("Niveau ID : ", l.id, " données : ", this.level)
//         this.router.navigate(['/admin/niveau-edit', l.id]);
//       },
//       error: (err) => {
//         this.errorMessage = err.error;
//       },
//     });
//   }



//   handleDeleteNiveau($event: Event,l: any) {
//     $event.preventDefault();
//     $event.stopPropagation();
//     let conf = confirm('Êtes-vous sûr de vouloir supprimer ce niveau ?');
//     if (conf == false) return;
//     this.currentAction = 'handleDeleteUser';
//     this.niveauService.deleteLevel(l.id).subscribe({
//       next: (data) => {
//         let index = this.levels.indexOf(l);
//         this.levels.splice(index, 1);
//       },
//       error: (err) => {
//         this.errorMessage = err.error;
//       },
//     });
//   }

// // getlevelById(p: any) {
// //   //event.preventDefault();
// //   console.log("Un prog")
// //   this.niveauService.getLevelById(p.id).subscribe({
// //     next: (data) => {
// //       this.level = data
// //       console.log("level", data)
// //       console.log("level id", this.level.id, " ", p.id)
// //        this.selectedLevel = data;
// //        console.log("level", data);
// //       console.log("level id", this.selectedLevel.id, " ", this.level.id);
// //      },
// //     error: (err) => {
// //       this.errorMessage = err.error;
// //     },
// //   })
// // }

// getlevelById(event: MouseEvent, level: any) {
//   event.preventDefault(); // Empêche la redirection de la page
//   console.log("Un prog");
//   this.niveauService.getLevelById(level.id).subscribe({
//     next: (data) => {
//       this.selectedLevel = data;
//       console.log("level", data);
//       console.log("level id", this.selectedLevel.id, " ", level.id);
//     },
//     error: (err) => {
//       this.errorMessage = err.error;
//     }
//   });
// }
