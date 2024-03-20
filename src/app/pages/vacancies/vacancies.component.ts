import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {VacancyItemComponent} from "../../components/vacancy/vacancy-item/vacancy-item.component";
import {VacancyService} from "../../services/api/vacancy.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [
    NavigationComponent,
    VacancyItemComponent,
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.scss'
})
export class VacanciesComponent implements OnInit {
  vacancies$ = this.vacancyService.vacancies$

  constructor(
    private readonly vacancyService: VacancyService
  ) {
  }

  ngOnInit(): void {
    this.vacancyService.getVacancies()
  }
}
