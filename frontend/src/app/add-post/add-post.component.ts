import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostDetail } from '../Services/Post/post-detail';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {
  constructor(private url:URlService,private toastr:ToastrService,private route:Router){}
  post:any={
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
  createEquipment()
  {
    var axios = require('axios');
    var data = this.post;
    var config = {
      method: 'post',
      url:this.url.PostUrl,
      headers: { 'Content-Type': 'application/json'},
      data : data};
    axios(config)
    .then( (response) => {
      if(response.status==201)
      {
        this.toastr.success('success')
        this.route.navigate(['/GestPost'])
    }})

    .catch(function (error) {
      console.log(error);
    });    
  }
}
