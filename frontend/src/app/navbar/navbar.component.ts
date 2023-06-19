import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { URlService } from '../Services/url.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public role:any;
  public id:any;
  user:any={}
  registration:any={name:''}
  constructor(private http:HttpClient,public route:Router,private url:URlService){
  }
  
  ngOnInit(){
    this.role=sessionStorage.getItem('userRole');
    this.id=sessionStorage.getItem('userId');
    this.getuser()
  }
  getuser(){
    if(this.id!="XXXXXX")
      this.http.get<any>(this.url.UserUrl+'/'+this.id,this.registration).subscribe(data=>{this.user=data;console.log(data)})
    }
  logout()
  {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userId');
    this.route.navigate(['/Login']);
  }
  
}
