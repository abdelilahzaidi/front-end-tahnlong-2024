import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthGuard } from 'src/app/guards/auth.guard';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authGard :AuthGuard
  ) {}
  @Input() selectedUser: any;
  apiUrl = 'http://localhost:3001';
  user: any;
  users: any[] = [];

  response$: any;

  currentAction!: string;

  ngOnInit(): void {
    this.authGard.isLoggedIn()
    console.log('Ici',this.authGard)

  }
}





