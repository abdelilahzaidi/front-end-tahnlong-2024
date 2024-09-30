import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeanceService } from 'src/app/services/seance/seance.service';

@Component({
  selector: 'app-seance-new',
  templateUrl: './seance-new.component.html',
  styleUrls: ['./seance-new.component.css']
})

export class SeanceNewComponent implements OnInit {

  errorMessage: any;
  response$: any;
  seanceForm: FormGroup;
  dates: any[] = [];
  filteredDates: any[] = [];
  horaires: any[] = [];
  cours: any[] = [];
  years: number[] = [];
  months: { value: number, name: string }[] = [
    { value: 0, name: 'Janvier' },
    { value: 1, name: 'Février' },
    { value: 2, name: 'Mars' },
    { value: 3, name: 'Avril' },
    { value: 4, name: 'Mai' },
    { value: 5, name: 'Juin' },
    { value: 6, name: 'Juillet' },
    { value: 7, name: 'Août' },
    { value: 8, name: 'Septembre' },
    { value: 9, name: 'Octobre' },
    { value: 10, name: 'Novembre' },
    { value: 11, name: 'Décembre' }
  ];
  selectedYear: number = new Date().getFullYear();
  selectedMonth: number = new Date().getMonth();

  constructor(private fb: FormBuilder, private seanceService: SeanceService, private router: Router, private http: HttpClient) {
    this.seanceForm = this.fb.group({
      idDateCour: ['', [Validators.required]],
      idHoraire: ['', [Validators.required]],
      idCour: ['', [Validators.required]],
    });
    console.log("SeanceForm : ",this.seanceForm)
  }

  ngOnInit() {
    this.loadYears();
    this.loadDates();
    this.loadHoraires();
    this.loadCours();
  }

  loadYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year <= currentYear + 4; year++) {
      this.years.push(year);
    }
  }

  loadDates() {
    this.http.get<any[]>('http://127.0.0.1:3001/date-cour').subscribe(
      data => {
        this.dates = data.map(date => {
          const dateObj = new Date(date.dateCour);
          const formattedDate = dateObj.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            weekday: 'long'
          });
          return {
            ...date,
            formattedDate
          };
        });
        this.filterDates();
      },
      error => console.error('Erreur de chargement des dates', error)
    );
  }

  loadHoraires() {
    this.http.get<any[]>('http://127.0.0.1:3001/horaire').subscribe(
      data => this.horaires = data,
      error => console.error('Erreur de chargement des horaires', error)
    );
  }

  loadCours() {
    this.http.get<any[]>('http://127.0.0.1:3001/cour').subscribe(
      data => this.cours = data,
      error => console.error('Erreur de chargement des cours', error)
    );
  }

  onYearChange(event: Event) {
    const selectedYear = (event.target as HTMLSelectElement).value;
    this.selectedYear = +selectedYear;
    this.filterDates();
  }

  onMonthChange(event: Event) {
    const selectedMonth = (event.target as HTMLSelectElement).value;
    this.selectedMonth = +selectedMonth;
    this.filterDates();
  }

  filterDates() {
    this.filteredDates = this.dates.filter(date => {
      const dateObj = new Date(date.dateCour);
      return dateObj.getFullYear() === this.selectedYear && dateObj.getMonth() === this.selectedMonth;
    });
  }

  async submit() {
    console.log('user / submit', this.seanceForm.value);

    this.seanceService.createSeance(this.seanceForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res;
          alert("Séance ajouté");
          this.router.navigate(['/admin/seance-list']);
        },
        (error) => {
          this.errorMessage = error;
          console.error('Une erreur s\'est produite lors de la requête :', error);
        }
      );
  }
}


