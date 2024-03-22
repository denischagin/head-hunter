import { Component } from '@angular/core';
import {AuthFormComponent} from "../../components/auth-form/auth-form.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    AuthFormComponent,
    RouterLink
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
