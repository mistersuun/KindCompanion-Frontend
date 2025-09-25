import { Injectable, inject } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivateChild {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> {
    // TODO: Implement proper role-based access control
    const currentUser = this.authService.getCurrentUser();

    if (!currentUser) {
      this.router.navigate(['/auth/login']);
      return of(false);
    }

    // For now, allow all authenticated users
    // TODO: Extract allowed roles from route data
    const allowedRoles = childRoute.data?.['allowedRoles'] as UserRole[] || [];

    if (allowedRoles.length > 0) {
      const hasAllowedRole = allowedRoles.includes(currentUser.role);

      if (!hasAllowedRole) {
        this.router.navigate(['/403']);
        return of(false);
      }
    }

    return of(true);
  }

  // Helper method for use in routing
  canActivateChildWithRoles(allowedRoles: UserRole[]) {
    return (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      childRoute.data = { ...childRoute.data, allowedRoles };
      return this.canActivateChild(childRoute, state);
    };
  }
}