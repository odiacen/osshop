import { OsshopService } from './osshop.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoged = localStorage.getItem('test')
  route;

  constructor(router: Router) {
    this.route = router.navigate
    
   }
  canActivate() {
    
    if  (this.isLoged === "true") 
      return true
    
    else  return false
         
  }

  }

  
