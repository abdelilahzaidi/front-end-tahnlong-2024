import { ProgramService } from './../../services/program/program.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  apiUrl = 'http://localhost:3001';
  errorMessage: any =null;
  currentUser = {};
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]

  })

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private  programService : ProgramService,
    private router: Router,
    private $session: SessionService,
    private http: HttpClient

    ) { }

  onSubmit() {

    this.authService.userLogIn(this.loginForm.value).subscribe(
      ({token, user}: any) => {
        const program = { id:user.level.id, name: 'default program' };
        this.$session.open({ token, user,program });
        if (user.status === 'admin') {
          this.router.navigate(["/admin"])
          return;
        }
        else if(user.status === 'responsable'){
          this.router.navigate(["/responsables"])
          return;
        }
        this.router.navigate(['/users'])
        return;
      }
    )
  }
}





