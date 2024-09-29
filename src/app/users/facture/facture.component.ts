import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent implements OnInit {
  user: any; // Define the user as an object
  invoices: any[] = [];
  apiUrl = "127.0.0.1:3001";
  userId: number | undefined;
  user$: Observable<any> | undefined;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id',id)
    if (id) {
      this.userId = +id;
      this.user$ = this.userService.getUserById(this.userId);
      this.user$.subscribe(
        user => {
          this.user = user;
          this.getInvoiceData(); // Fetch invoices once user is loaded
        },
        error => {
          console.error('Error fetching user:', error);
        }
      );
    } else {
      console.error('No user ID found in the route.');
      this.router.navigate(['/users']); // Navigate to users list or another appropriate route
    }
  }

  getInvoiceData(): void {
    if (this.userId) { // Check if userId is defined
      this.invoiceService.getInvoicesByUserId(this.userId).subscribe(
        data => {
          this.invoices = data;
          console.log('Invoices:', this.invoices);
          console.log('In program-details:', this.userId);
        },
        error => {
          console.error('Error fetching invoices:', error);
        }
      );
    } else {
      console.error('User ID is not defined.');
    }
  }
}
