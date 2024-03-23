import {Component, OnInit} from '@angular/core';
import {VacancyItemComponent} from "../vacancy-item/vacancy-item.component";
import {VacancyService} from "../../../services/api/vacancy.service";
import {Vacancy} from "../../../types/vacancy";
import {NgForOf, NgIf} from "@angular/common";
import {tap} from "rxjs";
import {LoaderService} from "../../../services/loader.service";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [
    VacancyItemComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.scss'
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = []

  constructor(
    private readonly vacancyService: VacancyService,
    private readonly loaderService: LoaderService
  ) {
  }

  ngOnInit(): void {
    this.loaderService.changeLoaderStage("Загрузка списка вакансий...")
    this.vacancyService
      .getVacancies()
      .pipe(
        tap(_ => this.loaderService.hideLoader()),
      )
      .subscribe({
        next: vacancies => this.vacancies = vacancies,
        error: _ => this.loaderService.hideLoader()
      })
  }
}

