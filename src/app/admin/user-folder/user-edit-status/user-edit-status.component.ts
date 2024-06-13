import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { fUserEditActif } from './edit-actif.form';

@Component({
  selector: 'app-user-edit-status',
  templateUrl: './user-edit-status.component.html',
  styleUrls: ['./user-edit-status.component.css']
})
export class UserEditStatusComponent implements OnInit {
  user :any
  response$: any;
  errorMessage: any;
  userEditForm: FormGroup = fUserEditActif({})

  constructor(private userService: UserService, private router :Router, private $route: ActivatedRoute) {

  }

  ngOnInit() {
    this.$route.data.subscribe(({user}) => {
      this.user = user ;
      this.userEditForm = fUserEditActif(user)
    })
  }

  handleUpdateUser() {
    console.log(this.user)
    this.userService.updateUser(this.user.id,this.userEditForm.value).subscribe({
      next : (data)=>{

        this.response$ = data;
        this.router.navigate(['admin/user-list']);
        alert("User has been successfully updated");
      }, error : err => {
        this.errorMessage=err;
      }
    })
  }



}
function fUserEdit(arg0: {}): FormGroup {
  throw new Error('Function not implemented.');
}

