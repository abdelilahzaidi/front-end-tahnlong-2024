import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { SentMessages } from 'src/app/interfaces/message/message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  apiUrl = 'http://localhost:3001';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}
  getMessagesByReceiver(receiverId: number) {
    return this.http.get<any[]>(
      `${this.apiUrl}/messages/user-details?receiverId=${receiverId}`
    );
  }
  getMessageById(id: any) {
    return this.http.get(this.apiUrl + '/message/' + id, {
      responseType: 'json',
    });
  }
  getSentMessages(userId: number) {
    return  this.http.get<SentMessages>(`${this.apiUrl}/user/${userId}/sent-messages`)
      .pipe(
        catchError((error: any) => {
          console.error('Erreur lors de la récupération des messages envoyés:', error);
          return throwError(error);
        })
      );
  }
      // sendMessage(messageData: any): Observable<any> {
      //   return this.http.post<any>(`${this.apiUrl}/message`, messageData);
      // }
      // sendMessage(messageData: any): Observable<any> {
      //   return this.http.post<any>(`${this.apiUrl}/message`, messageData)
      //     .pipe(
      //       catchError((error: any) => {
      //         console.error('Erreur lors de l\'envoi du message :', error);
      //         return throwError(error);
      //       })
      //     );
      // }
      sendMessage(messageData: { titre: string, contenu: string, receiverIds: number[], senderId: number }): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(this.apiUrl+'/message', messageData, { headers });
      }
}
