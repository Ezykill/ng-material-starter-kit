import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  readonly loginForm: FormGroup = new FormGroup({
    login: new FormControl(),
    username: new FormControl()
  });

  constructor(private _loginService: LoginService) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService.login({
      login: loginForm.get('login')?.value,
      username: loginForm.get('username')?.value
    }).subscribe();
  }
}
