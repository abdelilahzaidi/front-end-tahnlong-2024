import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user/users.component';
import { AuthGuard } from '../guards/auth.guard';
import { FactureComponent } from './facture/facture.component';
import { CourComponent } from './cour/cour.component';
import { ProgramComponent } from './program/program.component';
import { HoraireComponent } from './horaire/horaire.component';
import { SeanceComponent } from './seance/seance.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { EventListUserComponent } from './event/event-list-user/event-list-user.component';
import { ProgramDetailsComponent } from '../admin/program-folder/program-details/program-details.component';
import { EventParticipateComponent } from './event/event-participate/event-participate.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MessageUserListComponent } from './message-folder-user/message-user-list/message-user-list.component';
import { MessageUserCreateComponent } from './message-folder-user/message-user-create/message-user-create.component';
;


const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [AuthGuard] },
  //{ path: 'responsable', component: ResponsableComponent },
  { path: 'users/:id', component: UsersComponent },
  { path: 'user-details/:id', component: UserDetailsComponent},
  { path: 'program-details/:id', component: ProgramComponent },
  { path: 'facture/:id', component: FactureComponent },
  { path: 'facture', component: FactureComponent },
  {path:'cour',component:CourComponent},
  {path:'program',component:ProgramComponent},
  {path:'program/:id',component:ProgramComponent},
  {path:'horaire',component:HoraireComponent},
  {path:'abonnement',component:AbonnementComponent},
  {path:'seance/:id',component:SeanceComponent},
  {path:'event-list-user',component:EventListUserComponent},
  {path:'event-list-user/:id',component:EventListUserComponent},
  {path:'event-participate',component:EventParticipateComponent},
  {path:'message-list',component:MessageUserListComponent},
  {path:'message-list/:id',component:MessageUserListComponent},
  {path:'message-create/:id',component:MessageUserCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
