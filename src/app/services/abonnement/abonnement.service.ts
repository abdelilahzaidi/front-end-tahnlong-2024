import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbonnementService {
  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentprogram = {};

  constructor(private http: HttpClient) {}

  getAbonnementById(id: any) {
    return this.http.get(this.apiUrl + '/abonnement/' + id, {
      responseType: 'json',
    });
  }

  deleteAbonnement(id: any) {
    return this.http.delete(this.apiUrl + '/abonnement/' + id, {
      responseType: 'json',
    });
  }

  updateAbonnement(id: any, abonnement: any) {
    console.log('id', id);
    return this.http
      .put<any>(this.apiUrl + '/abonnement' + id, { ...abonnement })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(
            "Une erreur s'est produite lors de la requête :",
            error
          );
          return throwError(error);
        })
      );
  }
  createAbonnement(abonnement: any) {
    console.log('In service angular', abonnement);
    return this.http
      .post<any>(this.apiUrl + '/abonnement', { ...abonnement })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(
            "Une erreur s'est produite lors de la requête :",
            error
          );
          return throwError(error);
        })
      );
  }

  async getUsersByTypeAbonnement(typeId: number): Promise<{ typeAbonnement: any; users: any[]; }> {
    try {
      const response = await this.http.get<{ typeAbonnement: any; users: any[]; }>(`${this.apiUrl}/type-abonnement/${typeId}/abonnement`).toPromise();
      return response || { typeAbonnement: null, users: [] }; // Assurez-vous qu'une valeur est toujours retournée
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs par type d\'abonnement:', error);
      throw error; // Lancer l'erreur pour que le composant puisse la gérer
    }
  }
}
