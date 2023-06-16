import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-gere-emp-equip',
  templateUrl: './gere-emp-equip.component.html',
  styleUrls: ['./gere-emp-equip.component.scss']
})
export class GereEmpEquipComponent {
  Id:any='';
  f1:boolean=false;
  f2:boolean=false;
  hieraLevel: any;
  title: any; 
  Post:any=[]
  PostId:any=[]
  EquipId:any=[]
  Equip:any=[]
  equipList:any[] = []; 
  software:any[] = []; 
  public registration:any={fullname:''};
  constructor(private route:Router,private toastr:ToastrService,private http:HttpClient,private url:URlService){}
  ngOnInit()
  {
    this.Id=sessionStorage.getItem('id')
    this.showEquipList()
  }
  showEquipList() {
    this.http.get<any>(this.url.EmployeeEquip + this.Id, this.registration).subscribe(data => {
      this.EquipId = data;
      console.log(this.url.EmployeeEquip + this.Id)
      console.log(data);
      for (let i = 0; i < this.EquipId.length; i++) {
        if(this.EquipId[i].type=="Hardware")
        {
          this.http.get<any>(this.url.hardwareUrl + '/' + this.EquipId[i].equiId, this.registration).subscribe(data => {
          this.equipList.push(data); 
          console.log(data);
        });
        }
        if(this.EquipId[i].type=="Software")
        {
          this.http.get<any>(this.url.softwareUrl + '/' + this.EquipId[i].equiId, this.registration).subscribe(data => {
            this.software.push(data); 
            console.log(data);});
        }
        
      }
    });
  }
  form1(){
    if(this.f1==false)
    {
      this.f1=true;
      this.f2=false;
    }else{
      this.f1=false;
      this.f2=false;
    }
    sessionStorage.setItem('f1', this.f1.toString());
    sessionStorage.setItem('f2', this.f2.toString());
  }
  form2(){
    if(this.f2==false)
    {
      this.f2=true;
      this.f1=false;
    }else{
      this.f1=false;
      this.f2=false;
    }
    sessionStorage.setItem('f1', this.f1.toString());
    sessionStorage.setItem('f2', this.f2.toString());
  }
  
}
