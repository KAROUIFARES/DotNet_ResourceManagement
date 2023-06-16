import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent {
  id:any=''
  constructor(private url:URlService,private toastr:ToastrService,private route:Router,private http:HttpClient)
  {
    this.id=sessionStorage.getItem('id')
  }
  public registration:any={name:''};
  post:any=
  {
    title: '',
    hieraLevel: '',
    state: false
  }
  postForm=new FormGroup({
    title:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    hieraLevel:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
  })
  get title():FormControl{return this.postForm.get("title") as unknown as FormControl;}
  get hieraLevel():FormControl{return this.postForm.get("hieraLevel") as unknown as FormControl;}
  ngOnInit(){this.getpost();}
  getpost(){this.http.get<any>(this.url.PostUrl+'/'+this.id,this.registration).subscribe(data=>{this.post=data})}
  UpdateEquipment()
  {
    var axios = require('axios');
    var data = this.post;
    var config = 
    {
      method: 'put',
      url:this.url.PostUrl+'/'+this.id,
      headers: { 'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => 
    {
      if(response.status==204)
      {
        this.toastr.success('success')
        this.route.navigate(['/GestPost'])
      }
    })
    .catch(function (error) {
      console.log(error);
    });    
  }
}
