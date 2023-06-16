import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-gest-pre-requis',
  templateUrl: './gest-pre-requis.component.html',
  styleUrls: ['./gest-pre-requis.component.scss']
})
export class GestPreRequisComponent {
  public EquipmentList:any=[];
tab1:boolean=false;
tab2:boolean=false;
  softwareList: any;
  constructor(private http:HttpClient,private route:Router,private url:URlService,private toastr:ToastrService)
  {
    this.showhardList();
    this.showsoftwareList()
  }
  public registration:any={fullname:''};
  ngOnInit()
  {
    sessionStorage.removeItem("EmpActif")
    sessionStorage.removeItem("Empdesactif")
    this.tableau2()
    if(this.tab1==true)
    {
      this.tableau1()
    }
    if(this.tab2==true)
    {
      this.tableau2()
    }
  }
  showhardList(){ this.http.get<any>(this.url.hardwareUrl,this.registration).subscribe(data=>{this.EquipmentList=data;})}
  showsoftwareList(){this.http.get<any>(this.url.softwareUrl,this.registration).subscribe(data=>{this.softwareList=data;})}
  UpdateState(id:string,state:boolean)
  {
    var axios = require('axios');
    var data ={"state":state}
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.hardwareUrl+this.url.UpdateState+'?id='+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {})
    .catch(function (error) {console.log(error);});
  }
  UpdateSoftwareState(id:string,state:boolean)
  {
    var axios = require('axios');
    var data ={"state":state}
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.softwareUrl+this.url.UpdateState+'?id='+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {})
    .catch(function (error) {console.log(error);});
  }
  
  tableau1(){
    if(this.tab1==false)
    {
      this.tab1=true;
      this.tab2=false;
    }
    else{
      this.tab1=false;
      this.tab2=false;
    }
  }
  tableau2(){
    if(this.tab2==false)
    {
      this.tab2=true;
      this.tab1=false;
    }
    else{
      this.tab2=false;
      this.tab1=false;
    }
  }
  navigate(id:string)
  {
    sessionStorage.setItem('id',id)
    this.route.navigate(['updatePre'])
  }
}
