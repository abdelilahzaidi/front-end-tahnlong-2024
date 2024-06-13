import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

  {
     path : "users",
     loadChildren : ()=>
     import('./users/users.module').then(
      u => u.UsersModule
     )
  },
  { path: 'users/:id', component: UsersComponent },
  {
    path:"admin",
    loadChildren : ()=>
    import('./admin/admin.module').then(a => a.AdminModule)
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        a => a.AuthModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('./page-no-conected/page-no-conected-routing.module').then(
        p =>p.PageNoConectedRoutingModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
