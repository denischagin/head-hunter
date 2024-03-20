import {Routes} from '@angular/router';
import {VacanciesComponent} from "./pages/vacancies/vacancies.component";

export const routes: Routes = [
  {path: '**', redirectTo: 'vacancies'},
  {path: 'vacancies', component: VacanciesComponent},
];
