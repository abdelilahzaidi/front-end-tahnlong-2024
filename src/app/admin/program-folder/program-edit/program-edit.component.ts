import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ProgramService } from '../../service/program.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fProgramEdit } from './program-edit.form';

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.css']
})
export class ProgramEditComponent implements OnInit {
  program : any
  errorMessage: any;
  response$ :any;
  programEditForm: FormGroup = fProgramEdit({})
  constructor(private programService : ProgramService,private router: Router, private $route: ActivatedRoute){}

 // grades$: Observable<any[]> = of([])
  ngOnInit(){
    this.$route.data.subscribe(({program}) => {
      this.program = program ;
      console.log('In onInit',this.program)
      this.programEditForm = fProgramEdit(program)
      console.log('fprogram',this.programEditForm)
    })
  }

  handleUpdateProgram() {
    console.log('Programme',this.program)
    this.programService.updateprogram(this.program.id,this.programEditForm.value).subscribe({
      next : (data)=>{
        this.response$ = data;
        alert(`Le programme ${this.program} a été modifié avec succès!!`);
        this.router.navigate(['admin/program-list']);
      }, error : err => {
        this.errorMessage=err;
      }
    })
  }

}
