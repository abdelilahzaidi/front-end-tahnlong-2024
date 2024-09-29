import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl ='http://localhost:3001'; ;

  constructor(private http: HttpClient) { }

  getInvoicesByUserId(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/invoice/user/${userId}`);
  }

  getAllInvoices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/invoice`);
  }

  getInvoiceById(invoiceId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/invoice/${invoiceId}`);
  }

  createInvoice(invoiceData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/invoice`, invoiceData);
  }

  updateInvoice(invoiceId: number, invoiceData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/invoice/${invoiceId}`, invoiceData);
  }

  deleteInvoice(invoiceId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/invoice/${invoiceId}`);
  }
}
