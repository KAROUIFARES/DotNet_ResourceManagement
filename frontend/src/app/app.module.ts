import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GestUserComponent } from './gest-user/gest-user.component';
import { GestPostComponent } from './gest-post/gest-post.component';
import { GestRessourceComponent } from './gest-ressource/gest-ressource.component';
import { GestPreRequisComponent } from './gest-pre-requis/gest-pre-requis.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRessComponent } from './add-ress/add-ress.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { GuardGuard } from './guard/guard.guard';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AffectEmpPostComponent } from './affect-emp-post/affect-emp-post.component';
import { EmployeeRecordComponent } from './employee-record/employee-record.component';
import { AffectEquipComponent } from './affect-equip/affect-equip.component';
import { GereEmpEquipComponent } from './gere-emp-equip/gere-emp-equip.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NavbarComponent } from './navbar/navbar.component';
import { EquipPostListComponent } from './equip-post-list/equip-post-list.component';
import { EmpPostComponent } from './emp-post/emp-post.component';
import { EmpAdressComponent } from './emp-adress/emp-adress.component';
import { AddPreComponent } from './add-pre/add-pre.component';
import { UpdatePreComponent } from './update-pre/update-pre.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StaticComponent } from './static/static.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GestUserComponent,
    GestPostComponent,
    GestRessourceComponent,
    GestPreRequisComponent,
    AddUserComponent,
    AddRessComponent,
    ProfileComponent,
    UpdateUserComponent,
    AffectEmpPostComponent,
    EmployeeRecordComponent,
    AffectEquipComponent,
    GereEmpEquipComponent,
    NavbarComponent,
    EquipPostListComponent,
    EmpPostComponent,
    EmpAdressComponent,
    AddPreComponent,
    UpdatePreComponent,
    AddPostComponent,
    UpdatePostComponent,
    UpdateEmpComponent,
    StaticComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PdfViewerModule,
    NgxChartsModule
  ],
  providers: [
    GuardGuard,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
