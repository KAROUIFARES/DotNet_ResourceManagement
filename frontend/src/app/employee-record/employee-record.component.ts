import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpAdressDdetail } from '../Services/EmpAdressDetail';
import { URlService } from '../Services/url.service';
@Component({
  selector: 'app-employee-record',
  templateUrl: './employee-record.component.html',
  styleUrls: ['./employee-record.component.scss']
})
export class EmployeeRecordComponent implements OnInit {
  id:any=sessionStorage.getItem('id');
  Employee: any={
    firstname: '',
    lastname: '',
    mail: '',
    phone: '',
    adress: '',
    NumComptBanc: '',
  }; 
  adress:any={
    StreetAdress: '',
    city: '',
    province: '',
    codePostal: 0
  }
  PostId:any=[]
  hieraLevel='';
  title='';
  Post:any=[];
  EquipId:any=[];
  equipList:any[] = [];
  Equipment:any=[];
  software:any[] = []; 
  public registration:any={
    fullname:''
  };
  constructor(private http:HttpClient,private route:Router,private url:URlService){
    this.showEmpList();
    this.showPostList();
    this.PostList();
    this.showEquipList();
    this.GetEmpAdress();
  }
  ngOnInit(): void {}
  showEmpList()
  {this.http.get<any>(this.url.EmployeeUrl+'/'+this.id,this.registration).subscribe(data=>{this.Employee=data; console.log(data)})}
  
  showPostList()
  {
    this.http.get<any>(this.url.GetEmpPost+'/'+this.id,this.registration).subscribe(data=>{
      this.PostId=data;
      for(let i=0;i<this.PostId.length;i++)
      {
        this.http.get<any>(this.url.PostUrl+'/'+this.PostId[i].postId,this.registration).subscribe(data=>{
        this.Post[i]=data;
        sessionStorage.setItem('Post',JSON.stringify(this.Post));
      })
    }
  })
  }

  GetEmpAdress(){this.http.get<any>(this.url.EmpAdress+'/EmpAdress/'+this.id,this.registration).subscribe(data=>{this.adress=data;})}
  PostList()
  {
    for(var i = 0; i<localStorage.length; i++){    
      let data = JSON.parse(sessionStorage.getItem(localStorage.key(i)!)!) 
      this.Post=data;
    }
    sessionStorage.removeItem('Post')
  }
  showEquipList() {
    this.http.get<any>(this.url.EmployeeEquip + this.id, this.registration).subscribe(data => {
      this.EquipId = data;
      for (let i = 0; i < this.EquipId.length; i++) {
        if(this.EquipId[i].type=="Hardware")
        {
          this.http.get<any>(this.url.hardwareUrl + '/' + this.EquipId[i].equiId, this.registration).subscribe(data => {
          this.equipList.push(data); 
         
        });
        }
        if(this.EquipId[i].type=="Software")
        {
          this.http.get<any>(this.url.softwareUrl + '/' + this.EquipId[i].equiId, this.registration).subscribe(data => {
            this.software.push(data); 
            });
        }
        
      }
    });
  }
}
