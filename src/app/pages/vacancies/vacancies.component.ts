import {Component} from '@angular/core';
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {VacancyItemComponent} from "../../components/vacancy/vacancy-item/vacancy-item.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {VacancyListComponent} from "../../components/vacancy/vacancy-list/vacancy-list.component";

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    NavigationComponent,
    VacancyItemComponent,
    NgIf,
    AsyncPipe,
    NgForOf,
    VacancyListComponent
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent {

}
