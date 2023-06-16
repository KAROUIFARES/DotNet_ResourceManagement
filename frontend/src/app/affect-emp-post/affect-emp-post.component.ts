import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AffectPost } from '../Services/AffectPost/affect-post';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-affect-emp-post',
  templateUrl: './affect-emp-post.component.html',
  styleUrls: ['./affect-emp-post.component.scss']
})
export class AffectEmpPostComponent {
  public id:any='';
  constructor(private route:ActivatedRoute,private url:URlService,private http:HttpClient,private router:Router,private toastr:ToastrService){}
  public registration:any={name:''};
  Affectpost:AffectPost=
  {
    EmpId: this.id,
    PostId: ''
  }
  Employee:any={
    firstname: '',
    lastname: '',
    mail: '',
    phone: '',
    adress: '',
    NumComptBanc: ''}

  post:any=
  {
    title: '',
    hieraLevel: '',
    state: false
  }

  AffectPostForm = new FormGroup({PostId: new FormControl('',[])})
  get PostId():FormControl{ return this.AffectPostForm.get("PostId") as FormControl;}

  ngOnInit()
  {
    this.id=sessionStorage.getItem('id')
    this.Affectpost.EmpId=this.id,
    this.Getuser();
    this.showPostList();
  }

  showPostList(){
    this.http.get<any>(this.url.PostUrl,this.registration).subscribe(data=>{
      this.post=data;
    })}

  Getuser(){this.http.get<any>(this.url.EmployeeUrl+'/'+this.id,this.registration).subscribe(data=>{this.Employee=data;})}
  AffectePost(){
    var axios = require('axios');
    var data = this.Affectpost
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: this.url.AffectPostUrl,
      headers: { 
        'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {
      if(response.status==201)
      {
        this.router.navigate(['EmpPost'])
        this.toastr.success('Success', 'Post Affected!');
      }
    })
    .catch( (error) => {
      console.log(error);
      this.toastr.error("error")
    });}
}
