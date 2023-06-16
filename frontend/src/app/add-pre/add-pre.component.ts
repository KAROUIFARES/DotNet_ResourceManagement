import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-add-pre',
  templateUrl: './add-pre.component.html',
  styleUrls: ['./add-pre.component.scss']
})
export class AddPreComponent {
  constructor(private url:URlService,private toastr:ToastrService,private route:Router){}
  ngOnInit()
  {
  }
  f1:boolean=false;
  f2:boolean=false;
  hardware:any={
    nom: '',
    marque: '',
    Modele: '',
    Caract: '',
    state: false
  }
  software:any={
    nom: '',
    version: '',
    state: false
  }
  softwareForm=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    version:new FormControl('',[
      Validators.required,
    ]),
  })

  get name():FormControl{ return this.softwareForm.get("name") as FormControl;}
  get version():FormControl{ return this.softwareForm.get("version") as FormControl;}
  hardwareForm=new FormGroup({
    name:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    marque:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    Modele:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    Caract:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    type:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ])
  })

  get Name():FormControl{ return this.hardwareForm.get("name") as FormControl;}
  get marque():FormControl{ return this.hardwareForm.get("name") as FormControl;}
  get Modele():FormControl{ return this.hardwareForm.get("name") as FormControl;}
  get Caract():FormControl{ return this.hardwareForm.get("name") as FormControl;}
  get type():FormControl{ return this.hardwareForm.get("name") as FormControl;}
 

  createEquipment()
  {
    var axios = require('axios');
    var data = this.hardware;
    var config = {
      method: 'post',
      url:this.url.hardwareUrl,
      headers: { 'Content-Type': 'application/json'},
      data : data};
    axios(config)
    .then( (response) => {
      if(response.status==201)
      {
        this.toastr.success('success')
        this.route.navigate(['GestPreRequis'])
    }})

    .catch(function (error) {
      console.log(error);
    });    
  }


  createSoftware() {
    const axios = require('axios');
    let data = JSON.stringify(this.software);
    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: this.url.softwareUrl,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  }
  

    form1(){
    if(this.f1==false)
    {
      this.f1=true;
      this.f2=false;
    }else{
      this.f1=false;
      this.f2=false;
    }

  }
  form2(){
    if(this.f2==false)
    {
      this.f2=true;
      this.f1=false;
    }else{
      this.f1=false;
      this.f2=false;
    }
  }
  
}
