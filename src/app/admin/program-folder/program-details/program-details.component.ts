import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../service/program.service';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.css']
})
export class ProgramDetailsComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private programService : ProgramService
  ) {}
  @Input() selectedUser: any;
  apiUrl = 'http://localhost:3001';
program: any;
programs: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(
        this.apiUrl + '/program/' + this.route.snapshot.paramMap.get('id')!+'/technichal'
      )
      .subscribe((data) => {
        this.program = data;
        console.log('in program-details ', this.program.technicals);
      });
  }



    //Programme récupéré par id
    // getProgramById(p: any) {
    //   this.programService.getprogramById(p.id).subscribe({
    //     next: (data) => {
    //       this.program = data;
    //       console.log("Programme ",p.id," données : ",this.program)
    //       this.router.navigate(['/admin/program', p.id]);
    //     },
    //     error: (err) => {
    //       this.errorMessage = err.error;
    //     },
    //   });
    //   console.log('Hello program',p);
    // }



  // handleUpdateUserActif() {
  //   this.router.navigate(['admin/user-edit-status', this.user.id]);
  // }
}
