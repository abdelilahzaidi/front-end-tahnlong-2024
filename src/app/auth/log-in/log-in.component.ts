import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionService } from 'src/app/services/session.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  errorMessage: any =null;
  currentUser = {};
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]

  })

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private $session: SessionService

    ) { }

  onSubmit() {

    this.authService.userLogIn(this.loginForm.value).subscribe(
      ({token, user}: any) => {
        this.$session.open({ token, user });
        if (user.status === 'admin') {
          this.router.navigate(["/admin"])
          return;
        }
        else if(user.status === 'responsable'){
          this.router.navigate(["/users/responsable"])
          return;
        }
        this.router.navigate(['/users'])
        return;
        // this.authService.verifiedUser(token).subscribe(
        //   ({user}) => {
        //       console.log(user)
        //       if (user.status ==='admin') {
        //         this.router.navigate(['/admin-home'])
        //       } else {
        //           this.router.navigate(['/users'])
        //       }
        //   }
        // )


      }

    )

  }

}





