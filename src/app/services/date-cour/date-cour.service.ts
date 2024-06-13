import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateCourService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentlieu = {};

  constructor(private http: HttpClient) {}

  getDateCourById(id: any) {
    return this.http.get(this.apiUrl + '/lieu/' + id, {
      responseType: 'json',
    });
  }

  deleteDateCour(id: any) {
    return this.http.delete(this.apiUrl + '/date-cour/' + id, {
      responseType: 'json',
    });
  }


 updateDateCour(id: any, dateCour: any) {
  console.log('id',id)
  return this.http.put(this.apiUrl + '/date-cour/' + id, {...dateCour})
}
createDateCour(dateCour: any) {
  console.log('In service angular',dateCour)
  return this.http.post<any>(this.apiUrl+'/date-cour', {...dateCour})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}
}
