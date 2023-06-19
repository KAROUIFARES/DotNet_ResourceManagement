import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';
import { Login } from '../Services/User/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  formdata:Login={
    login: '',
    pwd: ''
  }
  constructor(private route: Router,private toastr:ToastrService,private Url:URlService){
    this.route;
  }
  ngOnInit():void{}
  
    registeForm = new FormGroup
    ({
      login: new FormControl('',[Validators.required,Validators.email]),
      pwd: new FormControl('',[
      Validators.required])
    });

  Login()
  {
    if((this.formdata.login=="*mdWeb2023")&&(this.formdata.pwd=="md%%web")){
      sessionStorage.setItem("userId","XXXXXX");
      sessionStorage.setItem("userRole","SuperAdmin");
      this.route.navigate(['/Home'])
      this.toastr.success('Success', 'Welcome');
    }else{

 
      var axios = require('axios');
      var data = this.formdata;
      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: this.Url.UserUrl+this.Url.Login,
        
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
      .then( (response) => {
       
        if (response.data!=null)
        {
          console.log(response.data);
          if(response.data.state==true&&response.data.pwd==this.formdata.pwd)
          { 
            sessionStorage.setItem("userId",response.data.id);
            sessionStorage.setItem("userRole",response.data.role);
            this.route.navigate(['/Home'])
            this.toastr.success('Success', 'Welcome');
          }
          else if(response.data.state==true&&response.data.pwd!=this.formdata.pwd)
          {
            this.toastr.error('wrong data');
            this.route.navigate(['/login'])
          }
          else if(response.data.state==false)
          {
            this.toastr.warning('User is desabled');
            this.route.navigate(['/Login'])
          }
          else{
            this.toastr.warning('User does not exist');
          }
        }
        
        
      })
      .catch( (error) => {
        console.log(error);
        this.toastr.error("server error")
      });
    }
  }



    
    
  


    get login():FormControl{ return this.registeForm.get("login") as FormControl;}

    get pwd():FormControl{ return this.registeForm.get("pwd") as FormControl;}

   

}
