import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentlieu = {};

  constructor(private http: HttpClient) {}

  getLieuById(id: any) {
    return this.http.get(this.apiUrl + '/lieu/' + id, {
      responseType: 'json',
    });
  }

  deletelieu(id: any) {
    return this.http.delete(this.apiUrl + '/lieu/' + id, {
      responseType: 'json',
    });
  }


 updateLieu(id: any, lieu: any) {
  console.log('id',id)
  return this.http.put(this.apiUrl + '/lieu/' + id, {...lieu})
}
createlieu(lieu: any) {
  console.log('In service angular',lieu)
  return this.http.post<any>(this.apiUrl+'/lieu',{...lieu})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}
}
