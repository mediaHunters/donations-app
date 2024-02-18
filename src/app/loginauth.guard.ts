import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const LoginauthGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (isAuthenticated) {
    // If not authenticated, redirect to the login page or any other page
    return inject(Router).createUrlTree(['/products']);
  }
  // If authenticated, allow access
  return true;
};
