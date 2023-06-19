import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
 repeatPass:string='none';
  id:any=sessionStorage.getItem('userId')
  constructor(private http:HttpClient,private url:URlService,private route:Router,private toastr:ToastrService){  
  }
  user:any={

  }
  public registration:any={
    name:''
  };
  ngOnInit(){
    this. showUser()
    sessionStorage.removeItem('id')
    sessionStorage.removeItem("EmpActif")
    sessionStorage.removeItem("Empdesactif")
  }
  UpdateForm = new FormGroup({
    firstname: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    Lastname: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    login: new FormControl('',[Validators.required,Validators.email]),
    pwd: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    rpwd: new FormControl(''),
    
  });
  get FirstName():FormControl{ return this.UpdateForm.get("firstname") as FormControl;}
  get LastName():FormControl{ return this.UpdateForm.get("Lastname") as FormControl;}
  get login():FormControl{ return this.UpdateForm.get("login") as FormControl;}
  get pwd():FormControl{ return this.UpdateForm.get("pwd") as FormControl;}
  get rpwd():FormControl{ return this.UpdateForm.get("rpwd") as FormControl;}
  showUser(){if(this.id!="XXXXXX")this.http.get<any>(this.url.UserUrl+'/'+sessionStorage.getItem('userId'),this.registration).subscribe(data=>{this.user=data;})}
  Update()
  {
    var axios = require('axios');
    var data = this.user
    console.log(this.user)
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.UserUrl+'/'+this.id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => 
    {
      if(response.status==204)
      {
        this.route.navigate(['/Home']);
        this.toastr.success('Update success');
      }
      else{
        this.route.navigate(['/UserProfile']);
        this.toastr.warning('All field are Required');
      }
    })
    .catch( (error) => {
      console.log(error);
      this.route.navigate(['/UserProfile']);
      this.toastr.warning('All field are Required');
    });
  }

}
