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
      const id = Number(params.get('id'));
      this.fetchHoraire(id);
    });
  }

  fetchHoraire(id: number) {
    this.horaireService.getHoraireById(id)
      .subscribe(
        (horaire: any) => {
          this.horaire = horaire;
          this.populateForm();
        },
        (error) => {
          console.error('Erreur lors de la récupération de l\'horaire :', error);

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

    const idHoraireToUpdate = this.horaire.id;

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
         
        }
      );
  }
}
