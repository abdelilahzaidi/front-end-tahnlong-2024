import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentcour = {};

  constructor(private http: HttpClient) {}

  getCourById(id: any) {
    return this.http.get(this.apiUrl + '/cour/' + id, {
      responseType: 'json',
    });
  }

  deleteCour(id: any) {
    return this.http.delete(this.apiUrl + '/cour/' + id, {
      responseType: 'json',
    });
  }


 updateCour(id: any, cour: any) {
  console.log('id',id)
  return this.http.put(this.apiUrl + '/cour/' + id, {...cour})
}
createcour(cour: any) {
  console.log('In service angular',cour)
  return this.http.post<any>(this.apiUrl+'/cour',{...cour})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}
}
