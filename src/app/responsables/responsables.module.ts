import { HighBarreResponsableComponent } from './../shared/high-barre-responsable/high-barre-responsable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsablesRoutingModule } from './responsables-routing.module';

import { UsersComponent } from './users/users.component';
import { HighBarResponsableComponent } from './high-bar-responsable/high-bar-responsable/high-bar-responsable.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ResponsableComponent } from './responsable/responsable.component';
import { MessageListComponent } from './message-folder-responsable/message-list/message-list.component';
import { MessageCreateComponent } from './message-folder-responsable/message-create/message-create.component';
import { ProgramResponsableComponent } from './program-folder-responsable/program-responsable/program-responsable.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { SeanceListComponent } from './seances/seance-list/seance-list.component';
import { PresenceListComponent } from './presences/presence-list/presence-list.component';
import { ProfilResponsableComponent } from './profil/profil-responsable/profil-responsable.component';
import { PresenceValidateComponent } from './presences/presence-validate/presence-validate.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    HighBarreResponsableComponent,
    UsersComponent,
    HighBarResponsableComponent,
    ResponsableComponent,
    MessageListComponent,
    MessageCreateComponent,
    ProgramResponsableComponent,
    EventListComponent,
    SeanceListComponent,
    PresenceListComponent,
    ProfilResponsableComponent,
    PresenceValidateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResponsablesRoutingModule,
    HttpClientModule,  RouterModule
  ]

})
export class ResponsablesModule { }
