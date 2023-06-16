import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-equip-post-list',
  templateUrl: './equip-post-list.component.html',
  styleUrls: ['./equip-post-list.component.scss']
})
export class EquipPostListComponent {
  f1:boolean=false;
  f2:boolean=false;
  Id:any='';
  hieraLevel: any;
  title: any; 
  Post:any=[]
  PostId:any=[]
  EquipId:any=[]
  Equip:any=[]
  equipList:any[] = []; 
  software:any[] = []; 
  public registration:any={ fullname:'' };
  constructor(private route:Router,private toastr:ToastrService,private http:HttpClient,private url:URlService){}
  ngOnInit(){
    this.Id=sessionStorage.getItem('id')
    this.showEquipList()
  }
  showEquipList() {
    this.http.get<any>(this.url.EquipPost + this.Id, this.registration).subscribe(data => {
      this.EquipId = data;
      for (let i = 0; i < this.EquipId.length; i++) {
        if(this.EquipId[i].type=="Hardware"){
           this.http.get<any>(this.url.hardwareUrl + '/' + this.EquipId[i].equiId, this.registration).subscribe(data => {
          this.equipList.push(data); 
        });
        }
        if(this.EquipId[i].type=="Software")
        {
          this.http.get<any>(this.url.softwareUrl + '/' + this.EquipId[i].equiId, this.registration).subscribe(data => {
            this.software.push(data); 
          });
        }
      }
    });
  }

  Delete(id:string)
  {
    var axios = require('axios');
    var data =''
    var config = {
      method: 'get',
    maxBodyLength: Infinity,
      url: this.url.DeleteEquipPost1+this.Id+'&equipid='+id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then( (response) => {
      //DELETE
      var axios = require('axios');
      var data = '';

      var config = {
        method: 'delete',
      maxBodyLength: Infinity,
        url: this.url.DeleteEquipPost+response.data.id,
        headers: { },
        data : data
      };

      axios(config)
      .then( (response) => {
        if(response.status==204)
        {
          this.toastr.success("post delete");
          setTimeout(() => {
            window.location.reload();
          }, 500); // Refresh after 3 seconds
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      ////////
    })
    .catch(function (error) {
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
