import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

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
    // Initialize the form group with form controls
    this.formMessage = this.fb.group({
      titre: ['', Validators.required], // Field for the message title
      contenu: ['', Validators.required], // Field for the message content
      receivers: [[], Validators.required], // Field for selected receivers
      senderId: [this.senderId] // Pre-fill senderId with the value of senderId variable
    });
  }

  ngOnInit() {
    this.getMembers(); // Fetch the list of members on initialization
  }

  // Method to fetch the list of members (likely receivers)
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

  // Method called when the message is sent
  sendNewMessage(): void {
    // Retrieve the selected receiver's ID
    const selectedReceiverId = this.formMessage.get('receivers')!.value;

    // Build the form data to be sent
    const formData = {
      titre: this.formMessage.get('titre')!.value,
      contenu: this.formMessage.get('contenu')!.value,
      receiverIds: [selectedReceiverId], // Put the receiver's ID in an array
      senderId: this.senderId
    };

    // Log the form data for debugging purposes
    console.log('FormData:', formData);

    // Send the message using the messageService
    this.messageService.sendMessage(formData).subscribe(
      (response) => {
        // Log success response
        console.log('Message sent successfully:', response);
        // Update the response observable
        this.response$ = response;
        // Alert the user of the success
        alert('Message sent successfully!');

        // Extract the current ID from the URL
        const currentId = this.route.snapshot.paramMap.get('id');

        // Navigate back to the URL with the extracted ID
        this.router.navigate([`/admin/message-list/${currentId}`]);
      },
      (error) => {
        // Log the error response
        console.error('Error sending message:', error.message);
        // Alert the user of the error
        alert('Error sending message. Please try again.');
      }
    );
  }

  // Method to close the modal or component (if applicable)
  closeModal() {
    this.close.emit();
  }
}
