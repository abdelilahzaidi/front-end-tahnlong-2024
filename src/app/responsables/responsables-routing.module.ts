import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponsableComponent } from './responsable/responsable.component';
import { UsersComponent } from '../users/user/users.component';

//import { UserListComponent } from '../admin/user-folder/user-list/user-list.component';
import { AuthGuard } from '../guards/auth.guard';
import { MessageListComponent } from './message-folder-responsable/message-list/message-list.component';
import { ProgramResponsableComponent } from './program-folder-responsable/program-responsable/program-responsable.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { SeanceListComponent } from './seances/seance-list/seance-list.component';
import { PresenceListComponent } from './presences/presence-list/presence-list.component';
import { ProfilResponsableComponent } from './profil/profil-responsable/profil-responsable.component';
import { PresenceValidateComponent } from './presences/presence-validate/presence-validate.component';





const routes: Routes = [
  { path: '', component: ResponsableComponent, canActivateChild: [ ],children:[
    {path:'responsbale-detail/:id',component:ProfilResponsableComponent},
    {path:'users/:id',component:UsersComponent},
    {path:'message-list/:id',component:MessageListComponent},
    {path:'program-detail/:id',component:ProgramResponsableComponent},
    {path:'events/:id',component: EventListComponent},
    {path:'seances',component: SeanceListComponent},
    {path:'presences/:id',component: PresenceListComponent},
    {path:'presence-validate/:id',component:PresenceValidateComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsablesRoutingModule { }
