import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceUserService {



  private apiUrl = 'http://127.0.0.1:3001/seance-user'; // URL de votre API

  constructor(private http: HttpClient) {}

  getUsersBySeanceId(seanceId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${seanceId}`);
  }
    // Mettre à jour la présence pour plusieurs utilisateurs
   // Mettre à jour la présence pour plusieurs utilisateurs
  //  updatePresence(seanceId: number, presences: { userId: number, presence: boolean }[]): Observable<any> {
  //   return this.http.patch(`${this.apiUrl}/${seanceId}/presence`, { ...presences });
  // }
  // updateprogram(id: any, program: any) {
  //   console.log('id',id)
  //   return this.http.put(this.apiUrl + '/program/' + id, {...program, grade: parseInt(program.grade)})
  // }
  updatePresence(seanceId: number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const apiUrl = `http://127.0.0.1:3001/seance-user/${seanceId}/presence`;

    return this.http.patch<any>(apiUrl, data, { headers });
  }

}
