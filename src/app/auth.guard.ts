import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService} from './services/authenticate.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  private loginUrl: string = '/';
  constructor(private _authService: AuthenticateService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var check = this._authService.getTokenCheck();
      console.log(check);
      // alert('check');
      if(check){
        //  alert(check);
        return true;
      }
      else{
        // alert('not check');
        return new Observable<boolean>((observer) => {
        this._authService.checkTokenValidation().subscribe(
          data => {
            console.log(data);
            // alert('data');
            this._authService.setLoggedIn(true);
            observer.next(true);
          },
          error => {
            this._authService.setLoggedIn(false);
            console.log('error');
            // alert('error');
            this.router.navigate(['/']);
            observer.next(false);
            observer.complete();
          });
        });
      }
      
      
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }    
}
