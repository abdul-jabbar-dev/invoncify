import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    // Wait for Firebase to initialize and then check the user state
    return this.authService.isAuthInitialized$.pipe(
      take(1), // Wait for initialization to complete
      switchMap((isInitialized) => {
        if (!isInitialized) {
          // If auth isn't initialized, redirect to login
          return this.router.navigate(['/login']);
        }

        // Once initialized, check the user's login state
        return this.authService.user$.pipe(
          take(1), // Take only the latest value (user state)
          map((user) => {
            if (user) {
              // If user is logged in, allow access
              return true;
            } else {
              // If not logged in, redirect to login
              return this.router.createUrlTree(['/login']);
            }
          })
        );
      })
    );
  }
}
