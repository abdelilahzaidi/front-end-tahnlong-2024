import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
