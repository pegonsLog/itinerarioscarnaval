import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;
  userAuth: string = '';

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      user: ['2024'],
      password: ['2024'],
    });
  }


  public onSubmit() {
    this.userAuth = this.loginService.userAuth(this.form.value);
    if (this.userAuth === 'user') {
      this.router.navigate(['list']);
    }
    if (this.userAuth === 'adm') {
      this.router.navigate(['form']);
    }
    if (this.userAuth === '') {
      this.onError();
    }
  }
  public onClear() {
    this.form.setValue({ user: '', password: '' });
  }

  onError() {
    this.snackBar.open('Usuário ou senha inválidos!', 'X', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
