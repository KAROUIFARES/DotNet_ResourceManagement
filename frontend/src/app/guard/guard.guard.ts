import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(){
  }

  canActivate()
  {
    if(sessionStorage.getItem('userId')!=null)
    {return true}
    else
      return false;
  }
  
  }

  

  



