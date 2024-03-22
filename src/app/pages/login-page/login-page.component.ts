import {Component} from '@angular/core';
import {AuthFormComponent} from "../../components/auth-form/auth-form.component";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/api/auth.service";
import {ApiError} from "../../types/error";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    AuthFormComponent,
    RouterLink,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  loginError: string | null = null;

  constructor(
    private readonly authService: AuthService
  ) {
  }

  get login() {
    return this.loginForm.controls.login
  }

  get password() {
    return this.loginForm.controls.password
  }

  public handleLogin(e: Event) {
    e.preventDefault()

    if (this.loginForm.invalid) {
      this.loginError = 'Заполните все поля'
      return
    }

    this.authService.login({
      login: this.loginForm.value.login!,
      password: this.loginForm.value.password!,
      role: "WORKER",
    }).subscribe({
      error: (err) => {
        const error = err.error as ApiError
        this.loginError = error.errorMessage
      }
    });
  }
}
