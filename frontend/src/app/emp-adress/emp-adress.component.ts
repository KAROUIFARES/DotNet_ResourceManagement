import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpAdressDdetail } from '../Services/EmpAdressDetail';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-emp-adress',
  templateUrl: './emp-adress.component.html',
  styleUrls: ['./emp-adress.component.scss']
})
export class EmpAdressComponent {
    id:any=sessionStorage.getItem('id')
    public allData:any=[];
    constructor(private route:Router,private url:URlService,private http:HttpClient,private toastr:ToastrService){}
    ngOnInit():void
    {
      if(this.id==null)
      {
        this.toastr.error("error")
      }
    }
    formdata:EmpAdressDdetail={
      EmpId: sessionStorage.getItem('id'),
      StreetAdress: '',
      city: '',
      province: '',
      codePostal: undefined
    }
      registeForm = new FormGroup({
        StreetAdress: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*')
        ]),
        city: new FormControl('',[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*')
        ]),
        province: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15)
        ]
        ),
        codePostal: new FormControl('',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15)
        ]),
        
      });
      get StreetAdress():FormControl{ return this.registeForm.get("StreetAdress") as FormControl;}
      get city():FormControl{ return this.registeForm.get("city") as FormControl;}
      get province():FormControl{ return this.registeForm.get("province") as FormControl;}
      get codePostal():FormControl{ return this.registeForm.get("codePostal") as FormControl;}
      registerSubmitted()
      {
        var axios = require('axios');
        var data = JSON.stringify(this.formdata);
        var config = {
          method: 'post',
        maxBodyLength: Infinity,
          url: this.url.EmpAdress,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then( (response) => {
          console.log(JSON.stringify(response.data));
          if(response.status==201)
          {
            this.route.navigate(['GestRessource']);
            this.toastr.success("Employee is Added")
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
  
      public registration:any={fullname:''}
  
}
