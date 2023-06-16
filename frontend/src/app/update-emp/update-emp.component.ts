import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.scss']
})
export class UpdateEmpComponent {
  id:any=''
  constructor(private http:HttpClient,private url:URlService,private route:Router,private toastr:ToastrService)
  {
    this.id=sessionStorage.getItem('id')
  }
  public registration: any={name:''}
  f1:boolean=false;
  f2:boolean=false;
  Adress:any=
  {
    EmpId: undefined,
    StreetAdress: '',
    city: '',
    province: '',
    codePostal: undefined
  }
  Employee:any=
  {
    firstname: '',
    lastname: '',
    mail: '',
    phone: '',
    NumComptBanc: '',
    state: false
  }
  AdressForm=new FormGroup({
    StreetAdress:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    city:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    province:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    codePostal:new FormControl('',[
      Validators.required,
    ])
  })
  get StreetAdress():FormControl{return this.AdressForm.get("StreetAdress") as unknown as FormControl;}
  get city():FormControl{return this.AdressForm.get("city") as unknown as FormControl;}
  get province():FormControl{return this.AdressForm.get("province") as unknown as FormControl;}
  get codePostal():FormControl{return this.AdressForm.get("codePostal") as unknown as FormControl;}
  registeForm = new FormGroup({
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
    mail: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]),
    NumComptBanc: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]),
    
  });
  get firstname():FormControl{ return this.registeForm.get("firstname") as FormControl;}
  get lastname():FormControl{ return this.registeForm.get("lastname") as FormControl;}
  get mail():FormControl{ return this.registeForm.get("mail") as FormControl;}
  get phone():FormControl{ return this.registeForm.get("phone") as FormControl;}
  get NumComptBanc():FormControl{ return this.registeForm.get("NumComptBanc") as FormControl;}
  ngOnInit()
  {
    this.GetEmployee()
    this.GetAdress()

  }
  GetEmployee(){this.http.get<any>(this.url.EmployeeUrl+'/'+this.id,this.registration).subscribe(data=>{this.Employee=data;})}
  GetAdress(){this.http.get<any>(this.url.EmpAdress+'/EmpAdress/'+this.id,this.registration).subscribe(data=>{this.Adress=data;})}
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
  UpdateEmployee()
  {
    const axios = require('axios');
    let data = this.Employee
    let config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.EmployeeUrl+'/'+this.id,
      headers: { 'Content-Type': 'application/json'},
      data : data
    };
    axios.request(config)
    .then((response) => 
    {
      if(response.status==204)
      {
        this.toastr.success("Data Updated")
        this.route.navigate(['/GestRessource'])
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  UpdateAdress()
  {
    const axios = require('axios');
    let data = this.Adress
    let config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.EmpAdress+'/'+this.id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios.request(config)
    .then((response) => 
    {
      if(response.status==204)
      {
        this.route.navigate(['/GestRessource'])
        this.toastr.success('Adress Updated')
      }
    })
    .catch((error) => 
    {
      console.log(error);
    });
  }
}
