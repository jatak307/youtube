import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  });

  public onFormSubmit() {
    this.formSubmit.emit(this.form);
  }
}
