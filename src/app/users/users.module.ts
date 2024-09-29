import { HighBarreMemberComponent } from './../shared/high-barre-member/high-barre-member.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './user/users.component';
import { FactureComponent } from './facture/facture.component';
import { ProgramComponent } from './program/program.component';
import { HoraireComponent } from './horaire/horaire.component';
import { SeanceComponent } from './seance/seance.component';
import { CourComponent } from './cour/cour.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { EventListUserComponent } from './event/event-list-user/event-list-user.component';
import { EventParticipateComponent } from './event/event-participate/event-participate.component';
import { SideBarUserComponent } from './side-bar-user/side-bar-user.component';
import { RouterModule } from '@angular/router';
import { HighBarUserComponent } from './high-bar/high-bar-user/high-bar-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MessageUserListComponent } from './message-folder-user/message-user-list/message-user-list.component';
import { MessageUserCreateComponent } from './message-folder-user/message-user-create/message-user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsersComponent,
    //MessageListComponent,
    FactureComponent,
    ProgramComponent,
    HoraireComponent,
    SeanceComponent,
    CourComponent,
    AbonnementComponent,
    EventListUserComponent,
    EventParticipateComponent,
    SideBarUserComponent,
    HighBarUserComponent,
    UserDetailsComponent,
    MessageUserListComponent,
    MessageUserCreateComponent



  ],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule,  RouterModule, FormsModule,ReactiveFormsModule,],
})
export class UsersModule {}
