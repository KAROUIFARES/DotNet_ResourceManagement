import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URlService {

  constructor() { }

  server:string="http://localhost:5000"
  //USER
  UserUrl:string=this.server+'/users';
  Login:string='/LoginUser';

  //POST
  PostUrl:string=this.server+'/posts';

  //EMPLOYEE
  EmployeeUrl:string=this.server+'/Employee';

  //Hardware
  hardwareUrl:string=this.server+'/hardware';
  //softwareList
  softwareUrl:string=this.server+'/software';
  //AffectePost
  AffectPostUrl:string=this.server+'/AffectePost';
  GetEmpPost:string=this.server+'/AffectePost/EmpPostList';

  //AffectEquip
  AffectEquip:string=this.server+'/AffecteEquipment';

  //GetEmpEquip
  EmployeeEquip:string=this.server+'/EmployeeEquipment/GetEmpPost?id='

  //GetEquipPost
  EquipPost:string=this.server+'/AffecteEquipment/GetEquiPost?id='
  //UpdateState
  UpdateState:string='/UpdateState';
  //EmpAdress
  EmpAdress:string=this.server+'/EmpAdress'
  
  //DeleteEquipPost
  DeleteEquipPost1:string=this.server+'/AffecteEquipment/equipList?PostId='
  DeleteEquipPost:string=this.server+'/AffecteEquipment/'
}
