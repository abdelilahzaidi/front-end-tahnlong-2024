import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentlevel = {};

  constructor(private http: HttpClient) {}

  getLevelById(id: any) {
    return this.http.get(this.apiUrl + '/level/' + id, {
      responseType: 'json',
    });
  }

  deleteLevel(id: any) {
    return this.http.delete(this.apiUrl + '/level/' + id, {
      responseType: 'json',
    });
  }


 updateLevel(id: any, level: any) {
  console.log('id',id)
  return this.http.put(this.apiUrl + '/level/' + id, {...level})
}
createLevel(level: any) {
  console.log('In service angular',level)
  return this.http.post<any>(this.apiUrl+'/level',{...level,program: parseInt(level.program)})
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Une erreur s\'est produite lors de la requête :', error);
        return throwError(error);
      })
    );
}


}




