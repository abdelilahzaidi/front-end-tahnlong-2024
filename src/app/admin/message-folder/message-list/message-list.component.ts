import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})

export class MessageListComponent implements OnInit {
  messages: any[] = [];
  selectedUser: any;
  selectedMessage: any;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    // Exemple de chargement initial des messages
    this.loadMessages();
  }

  loadMessages(): void {
    this.messageService.getMessages() // Remplacez 1 par l'ID du récepteur approprié
      .subscribe(
        messages => {
          console.log('Messages récupérés:', messages);
          this.messages = messages;
        },
        error => {
          console.error('Erreur lors du chargement des messages:', error);
        }
      );
  }

  async selectedUserClick(messageId: number): Promise<void> {
    console.log('Dans la fonction, messageId:', messageId);
    if (!messageId) {
      console.error(`Message ${messageId} est indéfini`);
      return;
    }

    try {
      const data = await this.messageService.getMessagesByUser(messageId);
      console.log('Données récupérées du service:', data); // Vérifiez les données retournées par le service

      // Assurez-vous que data est un tableau non vide
      if (Array.isArray(data) && data.length > 0) {
        // Supposons que vous voulez accéder au premier message dans la liste retournée
        this.selectedMessage = data[0]; // Accès au premier message
        console.log('Message sélectionné:', this.selectedMessage);
      } else {
        console.error('Les données retournées par le service sont vides ou non conformes.');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }

}
