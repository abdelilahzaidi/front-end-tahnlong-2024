import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { SentMessages } from 'src/app/interfaces/message/message.interface';

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
          throw error;
        })
      );
  }

  getMessagesByReceiver(receiverId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/message/${receiverId}/user`)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des messages:', error);
          throw error;
        })
      );
  }

  async getMessagesByUser(messageId: number): Promise<{ user: any; message: any[] }> {
    try {
      const response = await this.http
        .get<{ user: any; message: any[] }>(`${this.apiUrl}/message/${messageId}/user`)
        .toPromise();

      console.log('Réponse du service:', response);

      return response || { user: null, message: [] };
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs par message:', error);
      throw error;
    }
  }

  sendMessage(messageData: { titre: string, contenu: string, receiverIds: number[], senderId: number }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl+'/message', messageData, { headers });
  }



}
