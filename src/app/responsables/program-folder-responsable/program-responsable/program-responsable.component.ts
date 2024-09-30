import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program/program.service';

@Component({
  selector: 'app-program-responsable',
  templateUrl: './program-responsable.component.html',
  styleUrls: ['./program-responsable.component.css']
})
export class ProgramResponsableComponent implements OnInit{
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private programService: ProgramService
  ) {}
  @Input() selectedUser: any;
  apiUrl = 'http://localhost:3001';
  program: any;
  programs: any[] = [];
  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(
        this.apiUrl +
          '/program/' +
          this.route.snapshot.paramMap.get('id')! +
          '/technichal'
      )
      .subscribe((data) => {
        this.program = data;
        console.log('in program-details ', this.program.technicals);
      });
  }


}

