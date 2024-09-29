import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-participate',
  templateUrl: './event-participate.component.html',
  styleUrls: ['./event-participate.component.css']
})
export class EventParticipateComponent implements OnInit {
  events: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.http.get<any[]>('http://127.0.0.1:3001/event').subscribe(
      data => {
        this.events = data;
        console.log(this.events)
      },
      error => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
