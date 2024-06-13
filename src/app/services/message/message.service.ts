import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}


  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/message`)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des messages:', error);
          throw error; // Propage l'erreur pour que le composant puisse la gérer
        })
      );
  }

  getMessagesByReceiver(receiverId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/message/${receiverId}/user`)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des messages:', error);
          throw error; // Propage l'erreur pour que le composant puisse la gérer
        })
      );
  }

  async getMessagesByUser(messageId: number): Promise<{ user: any; message: any[] }> {
    try {
      const response = await this.http
        .get<{ user: any; message: any[] }>(`${this.apiUrl}/message/${messageId}/user`)
        .toPromise();

      console.log('Réponse du service:', response); // Vérifiez la réponse du service

      return response || { user: null, message: [] };
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs par message:', error);
      throw error;
    }
  }

}
