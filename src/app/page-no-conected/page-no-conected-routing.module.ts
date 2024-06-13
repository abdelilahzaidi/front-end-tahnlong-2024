import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VovinamComponent } from './vovinam/vovinam.component';
import { TeamComponent } from '../team/team.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'vovinam',component:VovinamComponent
  },
  {
    path:'team',component:TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNoConectedRoutingModule { }
