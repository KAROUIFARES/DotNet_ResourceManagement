import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AddPreComponent } from './add-pre/add-pre.component';
import { AddRessComponent } from './add-ress/add-ress.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AffectEmpPostComponent } from './affect-emp-post/affect-emp-post.component';
import { AffectEquipComponent } from './affect-equip/affect-equip.component';
import { EmpAdressComponent } from './emp-adress/emp-adress.component';
import { EmpPostComponent } from './emp-post/emp-post.component';
import { EmployeeRecordComponent } from './employee-record/employee-record.component';
import { EquipPostListComponent } from './equip-post-list/equip-post-list.component';
import { GereEmpEquipComponent } from './gere-emp-equip/gere-emp-equip.component';
import { GestPostComponent } from './gest-post/gest-post.component';
import { GestPreRequisComponent } from './gest-pre-requis/gest-pre-requis.component';
import { GestRessourceComponent } from './gest-ressource/gest-ressource.component';
import { GestUserComponent } from './gest-user/gest-user.component';
import { GuardGuard } from './guard/guard.guard';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { StaticComponent } from './static/static.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UpdatePreComponent } from './update-pre/update-pre.component';
import { UpdateUserComponent } from './update-user/update-user.component';
const routes: Routes = [
  {path:"AddUser",component:AddUserComponent},//,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin']}
  {path:"",component:LoginComponent},
  {path:"Login",component:LoginComponent},
  {path:"GestUser",component:GestUserComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin']}},
  {path:"GestPost",component:GestPostComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH','AdminSysteme']}},
  {path:"GestRessource",component:GestRessourceComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme','AdminRH']}},
  {path:"GestPreRequis",component:GestPreRequisComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme']}},
  {path:"Home",component:HomeComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme','AdminRH']}},
  {path:"AddRess",component:AddRessComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}},
  {path:"UserProfile",component:ProfileComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme','AdminRH']}},
  {path:"UpdateUser",component:UpdateUserComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin']}},
  {path:"AffectPostEmp",component:AffectEmpPostComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin']}},
  {path:"EmployeeRecord",component:EmployeeRecordComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH','AdminSysteme']}},
  {path:"AffectEquip",component:AffectEquipComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme']}},
  {path:"EmpEquip",component:GereEmpEquipComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin']}},
  {path:"EquipPostLis",component:EquipPostListComponent,canActivate:[GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH','AdminSysteme']}},
  {path:"EmpPost",component:EmpPostComponent,canActivate:[GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}},
  {path:"EmpAdress",component:EmpAdressComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}},
  {path:"AddPost",component:AddPostComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}},
  {path:"updatePost",component:UpdatePostComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}},
  {path:"addPre",component:AddPreComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme']}},
  {path:"updatePre",component:UpdatePreComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminSysteme']}},
  {path:"updateEmp",component:UpdateEmpComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}},
  {path:"static",component:StaticComponent,canActivate: [GuardGuard,RoleGuard],data:{expectedRoles:['SuperAdmin','AdminRH']}}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
