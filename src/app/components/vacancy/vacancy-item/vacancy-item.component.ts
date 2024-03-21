import {Component, Input} from '@angular/core';
import {Vacancy} from "../../../types/vacancy";

@Component({
  selector: 'app-vacancy-item',
  standalone: true,
  imports: [],
  templateUrl: './vacancy-item.component.html',
  styleUrl: './vacancy-item.component.scss'
})
export class VacancyItemComponent {
  @Input() vacancy: Vacancy;
}
