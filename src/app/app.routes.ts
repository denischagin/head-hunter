import {Routes} from '@angular/router';
import {VacanciesComponent} from "./pages/vacancies/vacancies.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {Paths} from "./constants/paths";

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${Paths.VACANCIES}`,
    pathMatch: 'full'
  },
  {path: Paths.VACANCIES, component: VacanciesComponent},
  {path: Paths.LOGIN, component: LoginPageComponent},
  {path: Paths.REGISTER, component: RegisterPageComponent},
];

