import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log(state.url)
  const isAuthenticated = !!localStorage.getItem('token');
  if(state.url.includes('login') || state.url.includes('register')) {
    if (isAuthenticated) {
      // If not authenticated, redirect to the login page or any other page
      return inject(Router).createUrlTree(['/search']);
    }
  } else {
    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page or any other page
      
      return inject(Router).createUrlTree(['/login']);
    }
  }
  

  // If authenticated, allow access
  return true;
};
