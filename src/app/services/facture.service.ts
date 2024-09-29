import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentprogram = {};

  constructor(private http: HttpClient) {}


  createFacture(factureData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, factureData);
  }


  getInvoices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/invoice`).pipe(
      catchError(this.handleError)
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`).pipe(
      catchError(this.handleError)
    );
  }

  assignInvoiceById(id: any) {
    return this.http.get(`${this.apiUrl}/invoice/${id}`, {
      responseType: 'json',
    }).pipe(
      catchError(this.handleError)
    );
  }


  assignInvoiceToUser(invoiceId: number, userId: number): Observable<any> {
    const url = `${this.apiUrl}/invoice/${invoiceId}/assign/${userId}`;
    return this.http.post(url, {});
  }

  getAbonnementTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/type-abonnement`).pipe(
      catchError(this.handleError)
    );
  }

  // assignInvoiceToUser(invoiceId: number, userId: number): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/invoice/${invoiceId}/assign`, { userId }).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }




  getInvoicesByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }



  updateInvoicePayment(userId: number, invoiceId: number, etatDePaiement: boolean): Observable<any> {
    const url = `${this.apiUrl}/invoice/${userId}/invoices/${invoiceId}`;
    return this.http.put<any>(url, { etatDePaiement });
  }

  updatePaymentStatus(invoiceId: number, etatDePaiement: boolean): Observable<any> {
    const url = `${this.apiUrl}/invoice/${invoiceId}/payment-status`; // Endpoint pour mettre à jour le paiement
    console.log('Url',this.apiUrl)
    console.log('Url',url)
    return this.http.put(url, { etatDePaiement }); // Envoi de la requête PUT
  }

  createInvoice(invoiceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/invoice/assign-by-abonnement-type`, invoiceData);
  }
}
