import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
  apiUrl = 'http://localhost:3001';
  invoices: any[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(): void {
    this.httpClient.get<any[]>(`${this.apiUrl}/invoice`)
      .subscribe((data) => {
        this.invoices = data;
        console.log(this.invoices);
      });
  }

  createFacture(): void {
    // Logic for creating a new invoice
    // You might navigate to a form page or open a modal for invoice creation
    this.router.navigate(['/admin/facture-new']);
    console.log('redirect to create an invoice');
  }

 
}
