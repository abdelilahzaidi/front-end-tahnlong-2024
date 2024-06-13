import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-program',
  templateUrl: './user-program.component.html',
  styleUrls: ['./user-program.component.css']
})
export class UserProgramComponent {
  program$: Observable<any>
  
  constructor(
    private $route: ActivatedRoute,
    private $http: HttpClient
  ) {
    this.program$ = $route.paramMap.pipe(
      map(params => params.get("id")),
      switchMap((id) => this.$http.get<any>(`http://localhost:3001/user/${id}/program`))
    )
  }
}
