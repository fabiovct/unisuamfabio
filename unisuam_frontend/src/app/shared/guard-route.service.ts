import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class GuardRouteService implements CanActivate{
  constructor(private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   const token = window.localStorage.getItem('token_unisuam');
   if(token){
     return true;
   }else{
    window.location.pathname = '/';
    //  this.router.navigate(['/']);
     return false;
   }

  }

  
}
