import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HoraireService } from 'src/app/services/horaire/horaire.service';

@Component({
  selector: 'app-horaire-update',
  templateUrl: './horaire-update.component.html',
  styleUrls: ['./horaire-update.component.css']
})
export class HoraireUpdateComponent implements OnInit {
  errorMessage: any;
  response$ :any;
  horaire:any
  constructor(private fb : FormBuilder, private horaireService : HoraireService,private router: Router, private route: ActivatedRoute, private $http: HttpClient){}
  horaireForm : FormGroup = this.fb.group({
    heureDebut: new FormControl('', [Validators.required]),
    heureFin:new FormControl('', [Validators.required]),
    jour:new FormControl('', [Validators.required]),
  })



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Récupère l'ID de l'horaire depuis l'URL
      this.fetchHoraire(id);
    });
  }

  fetchHoraire(id: number) {
    this.horaireService.getHoraireById(id)
      .subscribe(
        (horaire: any) => {
          this.horaire = horaire; // Stocke l'horaire récupéré
          this.populateForm(); // Pré-remplit le formulaire avec les données de l'horaire
        },
        (error) => {
          console.error('Erreur lors de la récupération de l\'horaire :', error);
          // Gérez l'erreur, par exemple, redirigez vers une page d'erreur ou affichez un message à l'utilisateur
        }
      );
  }

  populateForm() {
    if (this.horaire) {
      this.horaireForm.patchValue({
        heureDebut: this.horaire.heureDebut,
        heureFin: this.horaire.heureFin,
        jour: this.horaire.jour,
      });
    }
  }





  submit() {
    if (this.horaireForm.invalid || !this.horaire) {
      return;
    }

    console.log('Formulaire soumis :', this.horaireForm.value);

    const idHoraireToUpdate = this.horaire.id; // Utilise l'ID de l'horaire récupéré

    this.horaireService.updateHoraire(idHoraireToUpdate, this.horaireForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res; // Si nécessaire de stocker la réponse
          alert("Horaire mis à jour avec succès");
          this.router.navigate(['/admin/horaire-list']);
        },
        (error) => {
          this.errorMessage = error;
          console.error('Une erreur s\'est produite lors de la requête :', error);
          // Affichez un message d'erreur à l'utilisateur de manière plus conviviale
        }
      );
  }
}
