import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-message-user-list',
  templateUrl: './message-user-list.component.html',
  styleUrls: ['./message-user-list.component.css']
})
export class MessageUserListComponent implements OnInit {
  errorMessage: any;
  apiUrl = 'http://localhost:3001';
  messages: any[] = [];
  selectedMessage: any;
  messageForm: FormGroup;
  user: any;
  users: any[] = [];
  isModalOpen = false;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService
  ) {
    this.messageForm = this.fb.group({
      titre: [''],
      contenu: [''],
    });
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.getUserMessages(userId);
    }
  }

  getUserMessages(userId: string): void {
    this.httpClient.get<any>(`${this.apiUrl}/message/user/${userId}`).subscribe(
      (data: any) => {
        console.log('API response:', data); // Vérifiez la structure de la réponse
        this.messages = Array.isArray(data) ? data : data.sentMessages || [];
        console.log('Messages:', this.messages);
      },
      (error) => {
        this.errorMessage = error;
        console.error('Error fetching messages:', error);
      }
    );
  }

  async selectMessage(message: any): Promise<void> {
    this.selectedMessage = message;
    const receiver = message.receivers[0];
    console.log('receiver', receiver);
  }

  sendMessage(): void {
    const formData = this.messageForm.value;
    // Envoyer le message en utilisant this.messageService ou directement avec HttpClient
    // Assurez-vous d'implémenter cette fonctionnalité selon votre logique backend
  }

  createMessage(): void {
    console.log('redirect to create a message');
    this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
