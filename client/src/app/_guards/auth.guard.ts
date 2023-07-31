import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'  //Instantiaded when the app starts
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr:ToastrService) {}

  canActivate(): Observable<boolean>  {
    return this.accountService.currentUser$.pipe(   //Pipe to project and return a boolean
      map(user => {
        if(user) return true;
        else{
          this.toastr.error('You shall not pass!');
          return false;
        }
      })
    )
  }
  
}
