import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private authServise: AuthService) {}

  canLoad(): boolean {
    if (localStorage.getItem('token')) return true;
    this.router.navigate(['/auth']);
    return false;
  }
}
