import { UserEditComponent } from './user-folder/user-edit/user-edit.component';
UserEditComponent
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user-folder/user/user.component';
import { UserNewComponent } from './user-folder/user-new/user-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './container/admin.component';
import { MenuComponent } from './menu/menu.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-folder/user-list/user-list.component';
import { UserDetailsComponent } from './user-folder/user-details/user-details.component';
import { ProgramListComponent } from './program-folder/program-list/program-list.component';
import { HighBarreComponent } from "../shared/high-barre/high-barre.component";
import { UserProgramComponent } from './user-folder/user-program/user-program.component';
import { FactureNewComponent } from './facture-folder/facture-new/facture-new.component';
import { EventListComponent } from './event-folder/event-list/event-list.component';
//import { EventNewComponent } from './event-folder/event-new/event-new.component';
import { FactureAssignComponent } from './facture-folder/facture-assign/facture-assign.component';
import { FactureUserListComponent } from './facture-folder/facture-user-list/facture-user-list.component';
import { EventCreateComponent } from './event-folder/event-new/event-new.component';
import { DateCourListComponent } from './date-cour-folder/date-cour-list/date-cour-list.component';
import { HoraireUpdateComponent } from './horaire-folder/horaire-update/horaire-update.component';
import { FactureListUpdateComponent } from './facture-folder/facture-list-update/facture-list-update.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { SeanceDetailComponent } from './seance-folder/seance-detail/seance-detail.component';
import { AbonnementDetailComponent } from './abonnement-folder/abonnement-detail/abonnement-detail.component';
import { EventsDetailsComponent } from './event-folder/events-details/events-details.component';
import { FactureDetailComponent } from './facture-folder/facture-detail/facture-detail.component';
//import { MessageCreateComponent } from './message-folder/message-create/message-create.component';




@NgModule({
    declarations: [
        UserComponent,
        UserNewComponent,
        UserEditComponent,
        AdminComponent,
        MenuComponent,
        DashboardComponent,
        UserListComponent,
        UserDetailsComponent,
        ProgramListComponent,
        UserProgramComponent,
        FactureNewComponent,
        EventListComponent,
        EventCreateComponent,
        FactureAssignComponent,
        FactureUserListComponent,
        HoraireUpdateComponent,
        FactureNewComponent,
        FactureListUpdateComponent,
        SideBarComponent,
        SeanceDetailComponent,
        AbonnementDetailComponent,
        EventsDetailsComponent,
        FactureDetailComponent
        //MessageCreateComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        FormsModule,
        HighBarreComponent,
        

    ]
})
export class AdminModule { }
