import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DateCourService } from 'src/app/services/date-cour/date-cour.service';

@Component({
  selector: 'app-date-cour-list',
  templateUrl: './date-cour-list.component.html',
  styleUrls: ['./date-cour-list.component.css'],
})
export class DateCourListComponent {
  errorMessage: any;

  apiUrl = 'http://localhost:3001';
  user: any;
  dateCour: any;
  dateCours: any[] = [];
  filteredDateCours: any[] = []; // Pour stocker les dates de cours filtrées
  years: number[] = []; // Liste des années pour le filtre
  currentYear: number = new Date().getFullYear(); // Année en cours
  filterForm: FormGroup;
  response$: any;
  currentAction!: string;
  selectedYear: number | null = null;
  selectedMonth: number = new Date().getMonth();
  filteredDates: any[] = [];
  dates: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private dateCourService: DateCourService,
    private router: Router
  ) {
    this.filterForm = this.fb.group({
      selectedYear: [this.currentYear], // Par défaut, sélectionner l'année en cours
    });

    this.httpClient.get<any[]>('http://localhost:3001/date-cour').subscribe({
      next: (data) => {
        this.dateCours = data;
        this.filteredDateCours = this.dateCours; // Initialiser les dates de cours filtrées avec toutes les données
        this.setupYearsFilter();
      },
      error: (err) => {
        console.error('Error fetching date-cours:', err);
      },
    });
  }

  ngOnInit(): void {
    // this.httpClient
    //   .get<any[]>(this.apiUrl + '/date-cour')
    //   .subscribe((data) => {
    //     this.dateCour = data;
    //   });
    // this.getdateCours();
    this.httpClient.get<any[]>('http://localhost:3001/date-cour').subscribe({
      next: (data) => {
        this.dateCours = data;
        this.filteredDateCours = this.dateCours; // Initialiser les dates de cours filtrées avec toutes les données
        this.setupYearsFilter();
      },
      error: (err) => {
        console.error('Error fetching date-cours:', err);
      },
    });
  }

  getdateCours() {
    console.log('dateCours');
    this.httpClient.get<any[]>('http://localhost:3001/date-cour').subscribe({
      next: (data) => {
        this.dateCours = data as [];
        console.log('dateCourx', this.dateCours);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setupYearsFilter(): void {
    // Extraire les années uniques à partir des dates de cours
    this.years = Array.from(
      new Set(this.dateCours.map((dc) => new Date(dc.dateCour).getFullYear()))
    );
  }

  applyYearFilter(): void {
    const selectedYear = this.filterForm.get('selectedYear')?.value;
    this.filteredDateCours = this.dateCours.filter(
      (dc) => new Date(dc.dateCour).getFullYear() === selectedYear
    );
  }

  resetFilter(): void {
    this.filteredDateCours = this.dateCours; // Réinitialiser aux données complètes
    this.filterForm.patchValue({ selectedYear: this.currentYear }); // Réinitialiser l'année sélectionnée au courant
  }

  onYearChange(event: Event) {
    const selectedYear = (event.target as HTMLSelectElement).value;
    this.selectedYear = +selectedYear;
    this.filterDates();
  }
  filterDates() {
    this.filteredDates = this.dates.filter(date => {
      const dateObj = new Date(date.dateCour);
      return dateObj.getFullYear() === this.selectedYear && dateObj.getMonth() === this.selectedMonth;
    });
  }

  // getdateCourById(p: any) {
  //   console.log("Un prog")
  //   this.dateCourService.getdateCourById(p.id).subscribe({
  //     next: (data) => {
  //       this.dateCour = data
  //       console.log("dateCour", data)
  //       console.log("dateCour id", this.dateCour.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }
}
