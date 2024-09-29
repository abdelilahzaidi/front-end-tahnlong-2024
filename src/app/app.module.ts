import { UsersComponent } from './responsables/users/users.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from './users/users.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/authInterceptorService';
import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './page-no-conected/home/home.component';
import { PageNoConectedModule } from './page-no-conected/page-no-conected.module';
import { VovinamComponent } from './page-no-conected/vovinam/vovinam.component';
import { MemberComponent } from './member/member.component';
import { NiveauComponent } from './admin/niveau-folder/niveau/niveau.component';
import { UserEditStatusComponent } from './admin/user-folder/user-edit-status/user-edit-status.component';
import { NiveauListComponent } from './admin/niveau-folder/niveau-list/niveau-list.component';
import { HoraireListComponent } from './admin/horaire-folder/horaire-list/horaire-list.component';
import { LieuListComponent } from './admin/lieu-folder/lieu-list/lieu-list.component';
import { SeanceListComponent } from './admin/seance-folder/seance-list/seance-list.component';
import { FactureListComponent } from './admin/facture-folder/facture-list/facture-list.component';
import { MessageListComponent } from './admin/message-folder/message-list/message-list.component';
import { CourListComponent } from './admin/cour-folder/cour-list/cour-list.component';
import { DateCourListComponent } from './admin/date-cour-folder/date-cour-list/date-cour-list.component';
import { ProgramDetailsComponent } from './admin/program-folder/program-details/program-details.component';
import { ProgramNewComponent } from './admin/program-folder/program-new/program-new.component';
import { ProgramEditComponent } from './admin/program-folder/program-edit/program-edit.component';
import { NiveauNewComponent } from './admin/niveau-folder/niveau-new/niveau-new.component';
import { NiveauEditComponent } from './admin/niveau-folder/niveau-edit/niveau-edit.component';
import { HoraireNewComponent } from './admin/horaire-folder/horaire-new/horaire-new.component';
import { LieuNewComponent } from './admin/lieu-folder/lieu-new/lieu-new.component';
import { LieuEditComponent } from './admin/lieu-folder/lieu-edit/lieu-edit.component';
import { CourNewComponent } from './admin/cour-folder/cour-new/cour-new.component';
import { SeanceNewComponent } from './admin/seance-folder/seance-new/seance-new.component';
import { AbonnementDetailsComponent } from './admin/abonnement-folder/abonnement-details/abonnement-details.component';
import { AbonnementEditComponent } from './admin/abonnement-folder/abonnement-edit/abonnement-edit.component';
import { AbonnementListComponent } from './admin/abonnement-folder/abonnement-list/abonnement-list.component';
import { HighBarreComponent } from "./shared/high-barre/high-barre.component";

import { HighBarreMemberComponent } from './shared/high-barre-member/high-barre-member.component';
import { TeamComponent } from './team/team.component';
import { MessageCreateComponent } from './admin/message-folder/message-create/message-create.component';
import { ResponsableComponent } from './responsables/responsable/responsable.component';
import { HighBarreResponsablesComponent } from './shared/high-barre-responsables/high-barre-responsables.component';
import { EventListComponent } from './responsable/events/event-list/event-list.component';








@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        VovinamComponent,
        TeamComponent,
        MemberComponent,
        
        NiveauComponent,
        UserEditStatusComponent,
        NiveauListComponent,
        HoraireListComponent,
        LieuListComponent,
        SeanceListComponent,
        FactureListComponent,
        MessageListComponent,
        MessageCreateComponent,
        CourListComponent,
        DateCourListComponent,
        ProgramDetailsComponent,
        ProgramNewComponent,
        ProgramEditComponent,
        NiveauNewComponent,
        NiveauEditComponent,
        HoraireNewComponent,
        LieuNewComponent,
        LieuEditComponent,
        CourNewComponent,
        //EventListComponent,
        SeanceNewComponent,
        AbonnementListComponent,
        AbonnementEditComponent,
        AbonnementDetailsComponent,
        HighBarreMemberComponent,
        HighBarreResponsablesComponent,
        EventListComponent,






    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        AuthGuard,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        UsersModule,
        AdminModule,
        PageNoConectedModule,
        HttpClientModule,
        ReactiveFormsModule,
        HighBarreComponent,




    ]
})
export class AppModule { }
