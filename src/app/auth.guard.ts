import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if((localStorage.getItem('name')== "abc")&&(localStorage.getItem('email')=='abc@gmail.com')&&(localStorage.getItem('password')=='a1234b12')){
    return true;
      }
      else
      {
        this.routes.navigate(['/login']);
        return false;
      }
  }
  
}
