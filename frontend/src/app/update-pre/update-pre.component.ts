import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-update-pre',
  templateUrl: './update-pre.component.html',
  styleUrls: ['./update-pre.component.scss']
})
export class UpdatePreComponent {
  id:any=''
  equip:any={}
  public registration:any={
    name:''
  };
  constructor(private url:URlService,private toastr:ToastrService,private route:Router,private http:HttpClient)
  {
    this.id=sessionStorage.getItem('id')
  }
  Update:any=
  {
    nom: '',
    marque: '',
    Modele: '',
    Caract: '',
    state: false
  }
  EquipForm=new FormGroup({
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
    ])
  })
  get Name():FormControl{ return this.EquipForm.get("name") as FormControl;}
  get marque():FormControl{ return this.EquipForm.get("name") as FormControl;}
  get Modele():FormControl{ return this.EquipForm.get("name") as FormControl;}
  get Caract():FormControl{ return this.EquipForm.get("name") as FormControl;}
  ngOnInit()
  {
    this.showEquipList()
  }
  showEquipList(){this.http.get<any>(this.url.hardwareUrl+'/'+this.id,this.registration).subscribe(data=>{this.Update=data;})}
  UpdateEquip(id:string)
  {
    var axios = require('axios');
    var data = this.Update
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.hardwareUrl+'/'+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {
    console.log(response)
    if(response.status==204)
    {
      this.toastr.success('Equipment Updated')
      this.route.navigate(['GestPreRequis'])
    }})
    .catch(function (error) {
      console.log(error);
    });
  }
}
