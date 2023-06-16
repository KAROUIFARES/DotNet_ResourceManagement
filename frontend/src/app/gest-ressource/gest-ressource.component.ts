import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetail } from '../Services/Post/post-detail';
import { RessourceDetail } from '../Services/Ressource/ressource-detail';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-gest-ressource',
  templateUrl: './gest-ressource.component.html',
  styleUrls: ['./gest-ressource.component.scss']
})
export class GestRessourceComponent {
  public dateString:string=""
  public postId:string='';
  public allData:any=[];
  public Post:any=[];  
  public role=sessionStorage.getItem('userRole');
  constructor(private http:HttpClient,private route:Router,private url:URlService)
  {
    const today = new Date();
    this.dateString = today.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/').reverse().join('/');
    this.showEmpList();
  }
  public registration:any={fullname:''};
  ngOnInit()
  {
    sessionStorage.removeItem("EmpActif")
    sessionStorage.removeItem("Empdesactif")
  }
  showEmpList(){this.http.get<RessourceDetail>(this.url.EmployeeUrl,this.registration).subscribe(data=>{this.allData=data;})}
  isValid()
  {
    if(this.role=="AdminSysteme")
      return true;
    else return false;
  }
  navigate(id:string){sessionStorage.setItem('id',id);}
  UpdateState(id:string,state:boolean)
  {
    var axios = require('axios');
    var data ={"state":state,"resignationDate":this.dateString}
    var config = 
    {
      method: 'put',
      maxBodyLength: Infinity,
      url: this.url.EmployeeUrl+this.url.UpdateState+'/'+id,
      headers: {'Content-Type': 'application/json'},
      data : data
    };
    axios(config)
    .then( (response) => {})
    .catch(function (error) {console.log(error);});
  }
}
