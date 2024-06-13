import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentseance = {};

  constructor(private http: HttpClient) {}

  getSeanceById(id: any) {
    return this.http.get(this.apiUrl + '/seance/' + id, {
      responseType: 'json',
    });
  }

  deleteSeance(id: any) {
    return this.http.delete(this.apiUrl + '/seance/' + id, {
      responseType: 'json',
    });
  }


 updateSeance(id: any, seance: any) {
  console.log('id',id)
  return this.http.put(this.apiUrl + '/seance/' + id, {...seance})
}
createSeance(seance: any) {
  console.log('In service angular',seance)
  return this.http.post<any>(this.apiUrl+'/seance',{...seance})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}
}