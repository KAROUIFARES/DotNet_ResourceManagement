import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-add-ress',
  templateUrl: './add-ress.component.html',
  styleUrls: ['./add-ress.component.scss']
})
export class AddRessComponent {
  id:any=''
  constructor(private route:Router,private url:URlService,private http:HttpClient,private toastr:ToastrService){
    this.id=sessionStorage.getItem('EmpId')
  }
  public registration:any={fullname:''}

  formdata:any={
  firstname: '',
  lastname: '',
  mail: '',
  phone: '',
  numComptBanc: '',
  dateOccupation:'',
  LaunchDate:'',
  state: false
}
  public allData:any=[];
  ngOnInit():void
  {
   if(this.id!=null)
   {
    this.getEmployee();
   } 
  }
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
      numComptBanc: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]),
      dateOccupation: new FormControl('',[
        Validators.required,
      ]),
      datelaunch: new FormControl('',[
        Validators.required,
      ]),
    });
    get firstname():FormControl{ return this.registeForm.get("firstname") as FormControl}
    get lastname():FormControl{ return this.registeForm.get("lastname") as FormControl}
    get mail():FormControl{ return this.registeForm.get("mail") as FormControl}
    get phone():FormControl{ return this.registeForm.get("phone") as FormControl}
    get NumComptBanc():FormControl{ return this.registeForm.get("numComptBanc") as FormControl}
    get dateOccupation():FormControl{return this.registeForm.get("dateOccupation")as FormControl}
    get LaunchDate():FormControl{return this.registeForm.get("datelaunch")as FormControl}

    getEmployee()
    {
      this.http.get<any>(this.url.EmployeeUrl+'/'+this.id,this.registration).subscribe(data=>{
        this.formdata=data
      })
    }

    ajouterEmployee()
    {
        if(this.id==null)
        {
          var axios = require('axios');
          var data = JSON.stringify(this.formdata)
          var config = {
            method: 'post',
            url: this.url.EmployeeUrl,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config)
          .then( (response) => {
            if(response.status==201)
            {
              this.route.navigate(['EmpAdress']);
              this.toastr.success("Adress saved")
              sessionStorage.setItem('EmpId',response.data.id)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        else
        {
          const axios = require('axios');
          let data = JSON.stringify(this.formdata)
          let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: this.url.EmployeeUrl+'/'+this.id,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

          axios.request(config)
          .then((response) => {
          })
          .catch((error) => {
            console.log(error);
          });
          this.route.navigate(['/EmpAdress'])
        }
    }

    


   

}
