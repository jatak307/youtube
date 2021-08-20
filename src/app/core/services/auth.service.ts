import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userName?: string;

  constructor(private router: Router) {}

  public login(form: FormGroup) {
    const token =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    localStorage.setItem('token', token);
    localStorage.setItem('name', form.value.login);
    this.userName = form.value.login;
    this.router.navigate(['/main']);
  }

  public logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      this.userName = undefined;
      this.router.navigate(['/auth']);
    }
  }
}
