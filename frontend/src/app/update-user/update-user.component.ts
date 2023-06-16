import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  id:any='';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router,private toastr:ToastrService,private url:URlService){}
  ngOnInit():void
  {
    this.id=sessionStorage.getItem('id')
    this.showUser();
  }
  user:any={}
  public registration:any={ name:''}
  UpdateForm = new FormGroup({
    firstname: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    lastname: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
   
    pwd: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    rpwd: new FormControl(''),})
  get FirstName():FormControl{ return this.UpdateForm.get("firstname") as FormControl;}
  get LastName():FormControl{ return this.UpdateForm.get("lastname") as FormControl;}
  get pwd():FormControl{ return this.UpdateForm.get("pwd") as FormControl;}
  get rpwd():FormControl{ return this.UpdateForm.get("rpwd") as FormControl;}
  showUser(){this.http.get<any>(this.url.UserUrl+'/'+this.id,this.registration).subscribe(data=>{this.user=data;})}
  Update()
  {
    var axios = require('axios');
    var data = this.user
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
        this.router.navigate(['/GestUser']);
        this.toastr.success('Update success');
      }
      else{
        this.router.navigate(['/UpdateUser']);
        this.toastr.warning('All field are Required');
      } 
    })
    .catch( (error) => 
    {
      console.log(error);
      this.router.navigate(['/UpdateUser']);
      this.toastr.warning('All field are Required');
    });
  }
  
}