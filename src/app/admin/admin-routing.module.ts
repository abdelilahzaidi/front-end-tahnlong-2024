import { EventListComponent } from './event-folder/event-list/event-list.component';
import { UserEditComponent } from './user-folder/user-edit/user-edit.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNewComponent } from './user-folder/user-new/user-new.component';
import { UserComponent } from './user-folder/user/user.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsersComponent } from '../users/users.component';
import { authAdminGuard } from '../guards/auth-admin.guard';
import { userResolver } from './user-folder/user-edit/user.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-folder/user-list/user-list.component';
import { ProgramListComponent } from './program-folder/program-list/program-list.component';
import { UserDetailsComponent } from './user-folder/user-details/user-details.component';
import { UserEditStatusComponent } from './user-folder/user-edit-status/user-edit-status.component';
import { NiveauListComponent } from './niveau-folder/niveau-list/niveau-list.component';
import { HoraireListComponent } from './horaire-folder/horaire-list/horaire-list.component';
import { LieuListComponent } from './lieu-folder/lieu-list/lieu-list.component';
import { SeanceListComponent } from './seance-folder/seance-list/seance-list.component';
import { MessageListComponent } from './message-folder/message-list/message-list.component';
import { FactureListComponent } from './facture-folder/facture-list/facture-list.component';
import { CourListComponent } from './cour-folder/cour-list/cour-list.component';
import { DateCourListComponent } from './date-cour-folder/date-cour-list/date-cour-list.component';
import { AdminComponent } from './container/admin.component';
import { ProgramDetailsComponent } from './program-folder/program-details/program-details.component';
import { ProgramNewComponent } from './program-folder/program-new/program-new.component';
import { ProgramEditComponent } from './program-folder/program-edit/program-edit.component';
import { NiveauNewComponent } from './niveau-folder/niveau-new/niveau-new.component';
import { NiveauEditComponent } from './niveau-folder/niveau-edit/niveau-edit.component';
import { HoraireNewComponent } from './horaire-folder/horaire-new/horaire-new.component';
import { LieuNewComponent } from './lieu-folder/lieu-new/lieu-new.component';
import { LieuEditComponent } from './lieu-folder/lieu-edit/lieu-edit.component';
import { CourNewComponent } from './cour-folder/cour-new/cour-new.component';
import { SeanceNewComponent } from './seance-folder/seance-new/seance-new.component';
import { AbonnementDetailsComponent } from './abonnement-folder/abonnement-details/abonnement-details.component';
import { AbonnementListComponent } from './abonnement-folder/abonnement-list/abonnement-list.component';
import { AbonnementEditComponent } from './abonnement-folder/abonnement-edit/abonnement-edit.component';
import { UserProgramComponent } from './user-folder/user-program/user-program.component';
import { FactureNewComponent } from './facture-folder/facture-new/facture-new.component';
import { EventNewComponent } from './event-folder/event-new/event-new.component';


const routes: Routes = [
  { path: '', component: AdminComponent, canActivateChild: [ authAdminGuard()], children: [
    { path: 'user/:id/program', component: UserProgramComponent },
    // {path:'dashboard',component:DashboardComponent}, // /admin
    {path:'user-list',component:UserListComponent}, // /admin/user-list
    {path:'user-new',component:UserNewComponent},
    {path:'user',component:UserComponent, canActivate: [AuthGuard]},
    { path: 'user-details/:id', component: UserDetailsComponent},
    {path:'users',component:UsersComponent, canActivate: [AuthGuard]},
    {path:'user-edit/:id',component:UserEditComponent, resolve: { user: userResolver() }},
    {path:'user-edit-status/:id',component:UserEditStatusComponent, resolve: { user: userResolver() }},
    {path:'program-list',component:ProgramListComponent},
    {path:'niveau-list',component:NiveauListComponent},
    {path:'horaire-list',component:HoraireListComponent},
    {path:'lieu-list',component:LieuListComponent},
    {path:'seance-list',component:SeanceListComponent},
    {path:'message-list',component:MessageListComponent},
    {path:'facture-list',component:FactureListComponent},
    {path:'facture-new',component:FactureNewComponent},
    {path:'cour-list',component:CourListComponent},
    {path:'date-cour-list',component:DateCourListComponent},
    {path:'program-details/:id',component:ProgramDetailsComponent},
    {path:'program-new',component:ProgramNewComponent},
    {path:'program-edit/:id',component:ProgramEditComponent},
    {path:'niveau-new',component:NiveauNewComponent},
    {path:'niveau-edit',component:NiveauEditComponent},
    {path:'horaire-new',component:HoraireNewComponent},
    {path:'lieu-new',component:LieuNewComponent},
    {path:'lieu-edit/:id',component:LieuEditComponent},
    {path:'cour-new',component:CourNewComponent},
    {path:'seance-new',component:SeanceNewComponent},
    {path:'abonnement-list',component:AbonnementListComponent},
    {path:'abonnement-details',component:AbonnementDetailsComponent},
    {path:'abonnemnt-edit',component:AbonnementEditComponent},
    {path:'event-list',component:EventListComponent},
    {path:'event-new',component:EventNewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
