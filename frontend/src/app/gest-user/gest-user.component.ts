import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-gest-user',
  templateUrl: './gest-user.component.html',
  styleUrls: ['./gest-user.component.scss']
})
export class GestUserComponent {
  public UserList:any=[];
  public userState:any=[];

  constructor(private http:HttpClient,private route:Router,private url:URlService)
  {
    this.showUserList();
  }
  ngOnInit()
  {
    sessionStorage.removeItem("EmpActif")
    sessionStorage.removeItem("Empdesactif")
  }
  public registration:any={name:''};
  UserState=new FormGroup({state:new FormControl('',[]),})
  get state():FormControl{ return this.UserState.get("state") as FormControl;}
  showUserList(){this.http.get<any>(this.url.UserUrl,this.registration).subscribe(data=>{this.UserList=data;})}
  UpdateState(id:string,state:boolean)
  {
    var axios = require('axios');
    var data ={"state":state}
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.UserUrl+this.url.UpdateState+'?id='+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  navigate(id:string)
  {
    sessionStorage.setItem('id',id);
    this.route.navigate(['UpdateUser'])
  }
}
