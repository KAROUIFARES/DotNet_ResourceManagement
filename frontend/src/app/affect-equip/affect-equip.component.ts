import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AffectEquip } from '../Services/AffectEquip/AffectEquip';
import { AffectPost } from '../Services/AffectPost/affect-post';

import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-affect-equip',
  templateUrl: './affect-equip.component.html',
  styleUrls: ['./affect-equip.component.scss']
})
export class AffectEquipComponent {
  constructor(private url:URlService,private http:HttpClient,private router:Router,private toastr:ToastrService){}
  public registration:any={
    name:''
  };
  f1:boolean=false;
  f2:boolean=false;
  id:any=sessionStorage.getItem('id');
  Equip:any=[]
  software:any=[] 
  post:any={
    title: '',
    hieraLevel: '',
    state: false
  }
  affectEquip:AffectEquip={
    PostId: this.id,
    EquiId: '',
    type:''
  }

  AffectEquiForm = new FormGroup({
    EquiId: new FormControl('',[])
  })

  get EquiId():FormControl{ return this.AffectEquiForm.get("EquiId") as FormControl;}
  
  ngOnInit()
  {
    this.GetPost()
    this.GetHardware()
    this.Getsoftware()
  }
  GetPost()
  {this.http.get<any>(this.url.PostUrl+'/'+this.id,this.registration).subscribe(data=>{
    this.post=data;})}

  GetHardware()
  {
    this.http.get<any>(this.url.hardwareUrl,this.registration).subscribe(data=>{
      this.Equip=data;
    })
  }
  Getsoftware()
  {
    this.http.get<any>(this.url.softwareUrl,this.registration).subscribe(data=>{
      this.software=data;
    })
  }

  AffecteEquip(){
    var axios = require('axios');
    var data = this.affectEquip
    console.log(JSON.stringify(data))
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url.AffectEquip,
      headers: { 
        'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {
      console.log(JSON.stringify(response.data));
      if(response.status==201)
      {
        this.router.navigate(['GestPost'])
        this.toastr.success('Success', 'Post Affected!');
      }
    })
    .catch( (error) => {

      this.toastr.error("error")
    });}
    form1(){
      if(this.f1==false)
      {
        this.f1=true;
        this.f2=false;
        this.affectEquip.type="Hardware"
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
        this.affectEquip.type="Software"
      }else{
        this.f1=false;
        this.f2=false;
      }
      sessionStorage.setItem('f1', this.f1.toString());
      sessionStorage.setItem('f2', this.f2.toString());
    }
}
