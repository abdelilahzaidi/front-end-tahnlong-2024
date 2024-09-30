import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import ta from 'date-fns/locale/ta';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})


export class MessageCreateComponent implements OnInit {

  senderId: number = 18; // ID of the sender
  formMessage!: FormGroup;
  response$: any;
  members: any[] = [];
  apiUrl = 'http://localhost:3001';

  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  constructor(
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) {

    this.formMessage = this.fb.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      receivers: [[], Validators.required],
      senderId: [this.senderId]
    });
  }

  ngOnInit() {
    this.getMembers();
  }


  getMembers() {
    this.httpClient.get<any[]>(`${this.apiUrl}/user`).subscribe(
      (data) => {
        this.members = data;
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }


  sendNewMessage(): void {

    const selectedReceiverId = this.formMessage.get('receivers')!.value;


    const formData = {
      titre: this.formMessage.get('titre')!.value,
      contenu: this.formMessage.get('contenu')!.value,
      receiverIds: [selectedReceiverId],
      senderId: this.senderId
    };


    console.log('FormData:', formData);


    this.messageService.sendMessage(formData).subscribe(
      (response) => {

        console.log('Message sent successfully:', response);

        this.response$ = response;

        alert('Message sent successfully!');


        const currentId = this.route.snapshot.paramMap.get('id');


        this.router.navigate([`/admin/message-list/${currentId}`]);
      },
      (error) => {

        console.error('Error sending message:', error.message);
        
        alert('Error sending message. Please try again.');
      }
    );
  }

  // Method to close the modal or component (if applicable)
  closeModal() {
    this.close.emit();
  }
}
