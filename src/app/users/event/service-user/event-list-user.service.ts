import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventListUserService {

  apiUrl = 'http://localhost:3001/event';

  headers = new HttpHeaders().set('Content-Type', 'application/json');





  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // getanyById(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }

  // createEvent(any: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, any);
  // }

  // updateEvent(id: number, any: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${id}`, any);
  // }

  // deleteEvent(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }


}
