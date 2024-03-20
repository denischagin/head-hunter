import { Component } from '@angular/core';
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {VacancyItemComponent} from "../../components/vacancy/vacancy-item/vacancy-item.component";

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    NavigationComponent,
    VacancyItemComponent
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent {

}
