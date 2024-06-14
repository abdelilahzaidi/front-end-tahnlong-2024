import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
  errorMessage: any;
  apiUrl = 'http://localhost:3001';
  invoices: any[] = [];
  user: any;
  users: any[] = [];
  response$: any;
  currentAction!: string;
  userForm: any;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      user: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getInvoices();
    this.getUsers();
  }

  getInvoices(): void {
    this.httpClient.get<any[]>(`${this.apiUrl}/invoice`)
      .subscribe((data) => {
        this.invoices = data;
        console.log(this.invoices);
      });
  }

 //Liste tous les utilisateurs
getUsers() {
  return this.httpClient.get(this.apiUrl + '/user').subscribe({
    next: (data) => {
      this.users = data as [];
      console.log('user', this.user);
    },
    error: (err) => {
      console.log(err);
    },
  });
}

  createFacture(): void {
    this.router.navigate(['/admin/facture-new']);
    console.log('redirect to create an invoice');
  }
}





