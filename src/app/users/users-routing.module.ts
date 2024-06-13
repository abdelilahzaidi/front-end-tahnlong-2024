import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../guards/auth.guard';
import { ResponsableComponent } from '../responsable/responsable.component';

const routes: Routes = [
  {path:'', component:UsersComponent, canActivate: [AuthGuard]},
  {path:'responsable', component:ResponsableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
