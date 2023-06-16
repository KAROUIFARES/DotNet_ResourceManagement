import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.autoriser(route);
  }
  
  private autoriser(route: ActivatedRouteSnapshot): boolean {
    const role = sessionStorage.getItem('userRole');
    const expectedRoles = route.data['expectedRoles'];
    const roleMatches = expectedRoles.findIndex((expectedRole: string | null) => role === expectedRole);
    return roleMatches >= 0;
  }
  
  
}
