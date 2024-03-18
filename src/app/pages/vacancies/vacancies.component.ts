import { Component } from '@angular/core';
import {NavigationComponent} from "../../components/navigation/navigation.component";

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent {

}
