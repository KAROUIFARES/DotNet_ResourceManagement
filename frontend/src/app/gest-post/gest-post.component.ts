import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostDetail } from '../Services/Post/post-detail';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-gest-post',
  templateUrl: './gest-post.component.html',
  styleUrls: ['./gest-post.component.scss']
})
export class GestPostComponent {
  public allData:any=[];
  public role=sessionStorage.getItem('userRole');
  constructor(private http:HttpClient,private route:Router,private url:URlService,private toastr:ToastrService)
  {
    this.showPostList();
  }
  public registration:any={fullname:''};
  ngOnInit()
  {
    sessionStorage.removeItem("EmpActif")
    sessionStorage.removeItem("Empdesactif")
  }
  showPostList(){this.http.get<any>(this.url.PostUrl,this.registration).subscribe(data=>{this.allData=data;})}
  data:PostDetail=
  {
    title: '',
    hieraLevel: '',
    state: false
  }
  Update:any=
  {
    title: '',
    hieraLevel: '',
  }
  EquipForm=new FormGroup({
    title:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    hieraLevel:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ])
  })
  UpdateForm=new FormGroup({
    title:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    hieraLevel:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ])
  })
  get Title():FormControl{ return this.EquipForm.get("title") as FormControl;}
  get HieraLevel():FormControl{ return this.EquipForm.get("hieraLevel") as FormControl;}
  createEquipment()
  {
    var axios = require('axios');
    var data = this.data;
    var config = 
    {
      method: 'post',
      url:this.url.PostUrl,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => 
    {
      if(response.status==201)
      {this.toastr.success('success')}
    })
    .catch(function (error) {console.log(error);});   
  }

  UpdateEquip(id:string){
    var axios = require('axios');
    var data = this.Update
    console.log(this.Update)
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.PostUrl+'/'+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => 
    {
      if(response.status==204)
      {
        this.toastr.success('Equipment Updated')
      }
    })
    .catch(function (error) {console.log(error);});
  }
  UpdateState(id:string,state:boolean)
  {
    var axios = require('axios');
    var data ={"state":state}
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.PostUrl+this.url.UpdateState+'?id='+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {})
    .catch(function (error) {console.log(error);});
  }
  isValid()
  {
    if(this.role=='AdminSysteme')
    return true;
    else return false;
  }

  navigate(id:string){sessionStorage.setItem('id',id);}
}
