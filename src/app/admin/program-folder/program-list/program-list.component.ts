import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program/program.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent {
  isCollapsed : boolean= true;
  errorMessage: any;
  selectedProgram : any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private programService: ProgramService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
  program: any;
  programs: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/program')
      .subscribe((data) => {
        this.programs = data.sort((a, b) => a.id - b.id);

        if (this.programs.length > 0) {
          this.selectedProgram = this.programs[0];
        }
      });
  }


  getPrograms() {
    console.log('Programs');
    this.httpClient
      .get<any[]>('http://localhost:3001/program')
      .subscribe({
        next: (data) => {
          this.programs = data as [];
          console.log('programs', this.programs);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }


    getProgramById(p: any) {
      this.programService.getprogramById(p.id).subscribe({
        next: (data) => {
          this.program = data;
          console.log("user ",p.id," données : ",this.program)
          this.router.navigate(['/admin/program-details', p.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
      console.log('Hello programme',p);
    }






    editProgramById($event:Event,p: any) {
      $event.preventDefault();
      $event.stopPropagation()
      this.programService.getprogramById(p.id).subscribe({
        next: (data) => {
          this.program = data;
          console.log("user ",p.id," données : ",this.program)
          this.router.navigate(['/admin/program-edit', p.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
      console.log('Hello programme',p);
    }

  createProgram(){
    this.router.navigate(['/admin/program-new']);
  }
  handleDeleteProgram($event: Event,p: any) {
    $event.preventDefault();
    $event.stopPropagation();
    let conf = confirm('Êtes-vous sûr de vouloir supprimer ce program ?');
    if (conf == false) return;
    this.currentAction = 'handleDeleteUser';
    this.programService.deleteprogram(p.id).subscribe({
      next: (data) => {
        let index = this.programs.indexOf(p);
        this.programs.splice(index, 1);
      },
      error: (err) => {
        this.errorMessage = err.error;
      },
    });
  }

}
