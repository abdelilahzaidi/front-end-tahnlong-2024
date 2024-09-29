import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program/program.service';

@Component({
  selector: 'app-profil-responsable',
  templateUrl: './profil-responsable.component.html',
  styleUrls: ['./profil-responsable.component.css']
})
export class ProfilResponsableComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private programService: ProgramService,

  ) {}
  @Input() selectedUser: any;
  apiUrl = 'http://localhost:3001';
  user: any;
  users: any[] = [];
  program: any;

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(
        this.apiUrl + '/user/' + this.route.snapshot.paramMap.get('id')!+'/level'
      )
      .subscribe((data) => {
        this.user = data;
        console.log('in user-details ', this.user);
      });
  }
  handleUpdateUserActif() {
    this.router.navigate(['admin/user-edit-status', this.user.id]);
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

}
