import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LieuService } from 'src/app/services/lieu/lieu.service';
import { flieuEdit } from './lieu-edit.form';

@Component({
  selector: 'app-lieu-edit',
  templateUrl: './lieu-edit.component.html',
  styleUrls: ['./lieu-edit.component.css']
})
export class LieuEditComponent implements OnInit {
  lieu: any;
  errorMessage: any;
  response$: any;
  lieuEditForm: FormGroup = flieuEdit({});

  constructor(private lieuService: LieuService, private router: Router, private $route: ActivatedRoute) {}

  ngOnInit() {
    this.$route.data.subscribe(({ lieu }) => {
      this.lieu = lieu;
      console.log('In onInit', this.lieu);
      this.lieuEditForm = flieuEdit(lieu);
      console.log('flieu', this.lieuEditForm);
    });
  }

  handleUpdatelieu() {
    if (!this.lieu || !this.lieu.id) {
      this.errorMessage = 'Lieu ou ID de lieu est indéfini.';
      return;
    }

    console.log('lieume', this.lieu.id);
    this.lieuService.updateLieu(this.lieu.id, this.lieuEditForm.value).subscribe({
      next: (data) => {
        this.response$ = data;
        alert(`Le lieu ${this.lieu.nom} a été modifié avec succès!!`);
        this.router.navigate(['admin/lieu-list']);
      },
      error: (err) => {
        this.errorMessage = err;
      }
    });
  }
}

