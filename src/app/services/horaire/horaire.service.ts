import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currenthoraire = {};

  constructor(private http: HttpClient) {}

  getHoraireById(id: any) {
    return this.http.get(this.apiUrl + '/horaire/' + id, {
      responseType: 'json',
    });
  }

  deleteHoraire(id: any) {
    return this.http.delete(this.apiUrl + '/horaire/' + id, {
      responseType: 'json',
    });
  }


 updateHoraire(id: any, horaire: any) {
  console.log('id',id)
  return this.http.put(this.apiUrl + '/horaire/' + id, {...horaire})
}
createHoraire(horaire: any) {
  console.log('In service angular',horaire)
  return this.http.post<any>(this.apiUrl+'/horaire',{...horaire})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}

}
