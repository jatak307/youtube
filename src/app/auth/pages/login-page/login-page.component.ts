import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private authService: AuthService) {}

  public onFormSubmit(form: FormGroup) {
    this.authService.login(form);
  }
}
