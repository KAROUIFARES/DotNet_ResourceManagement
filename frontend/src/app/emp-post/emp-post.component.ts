import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-emp-post',
  templateUrl: './emp-post.component.html',
  styleUrls: ['./emp-post.component.scss']
})
export class EmpPostComponent {
  Empid:any='';
  enregistrement:any=[];
  Post:any=[];
  PostId:any=[];
  public registration:any={
    fullname:''
  };
  IDSupp: any;
  constructor(private http:HttpClient,private url:URlService,private toastr:ToastrService,private router:Router)
  {}
  ngOnInit()
  {
    this.Empid=sessionStorage.getItem('id')
    this.showPostList();
    this.PostList();
  }
  
  showPostList()
  {
    this.http.get<any>(this.url.GetEmpPost+'/'+this.Empid,this.registration).subscribe(data=>{
      this.PostId=data;
      for(let i=0;i<this.PostId.length;i++)
      {
        this.http.get<any>(this.url.PostUrl+'/'+this.PostId[i].postId,this.registration).subscribe(data=>{
        this.Post[i]=data;
        sessionStorage.setItem('Post',JSON.stringify(this.Post));
      })
    }
  })
  }


  PostList()
  {
    for(var i = 0; i<localStorage.length; i++){    
      let data = JSON.parse(sessionStorage.getItem(localStorage.key(i)!)!) 
      this.Post=data;
    }
    sessionStorage.removeItem('Post')
  }
  delete(id: string) {
    this.http.get<any>(this.url.AffectPostUrl+'/PostList/'+id+'?empid='+this.Empid,this.registration).subscribe(dataa=>{
      this.enregistrement=dataa;
      var axios = require('axios');
      var data = JSON.stringify({
      });
  
      var config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: this.url.AffectPostUrl+'/'+this.enregistrement.id,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
  
      axios(config)
      .then( (response) => {
        console.log(this.url.AffectPostUrl+'/'+this.enregistrement.id)
        console.log(JSON.stringify(response.data));
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
    })
  }

  navigate(id:string)
  {
    sessionStorage.setItem('id',id);
    this.router.navigate(['AffectPostEmp'])
  }
}
