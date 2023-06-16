import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public role=sessionStorage.getItem('userRole')
  constructor(public route:Router){}
  userRole: any | undefined;

  ngOnInit() {
    sessionStorage.removeItem('id')
    sessionStorage.removeItem("EmpActif")
    sessionStorage.removeItem("Empdesactif")
    this.userRole = this.getUserRole();
  }
  
  getUserRole(): any {
    return sessionStorage.getItem('userRole');
  }
}
