import {Routes} from '@angular/router';
import {VacanciesComponent} from "./pages/vacancies/vacancies.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

export const routes: Routes = [
  // {path: '**', redirectTo: 'vacancies'},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
];

