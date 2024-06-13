import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentprogram = {};

  constructor(private http: HttpClient) {}

  getprogramById(id: any) {
    return this.http.get(this.apiUrl + '/program/' + id+'/technichal', {
      responseType: 'json',
    });
  }

  deleteprogram(id: any) {
    return this.http.delete(this.apiUrl + '/program/' + id, {
      responseType: 'json',
    });
  }


 updateprogram(id: any, program: any) {
  console.log('id',id)
  return this.http.put<any>(this.apiUrl+'/program'+id, {...program})
  .pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Une erreur s\'est produite lors de la requête :', error);
      return throwError(error);
    })
  );
}
createprogram(program: any) {
  console.log('In service angular',program)
  return this.http.post<any>(this.apiUrl+'/program', {...program})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}
}
