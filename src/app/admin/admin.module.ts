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
import { EventNewComponent } from './event-folder/event-new/event-new.component';




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
        EventNewComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule, ReactiveFormsModule,
        HighBarreComponent
    ]
})
export class AdminModule { }
