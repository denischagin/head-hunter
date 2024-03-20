import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "../../types/vacancy";
import {BehaviorSubject, tap} from "rxjs";
import {API_URL} from "../../constants/api";
import {LoaderService} from "../loader.service";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  vacancies$ = new BehaviorSubject<Vacancy[]>([])

  constructor(
    private readonly http: HttpClient,
    private readonly loaderService: LoaderService
  ) {
  }

  getVacancies() {
    this.loaderService.changeLoaderStage('Загрузка списка вакансий...')
    return this.http
      .get<Vacancy[]>(`${API_URL}/vacancies`)
      .pipe(
        tap(vacancies => this.loaderService.changeLoaderStage(null))
      )
      .subscribe(vacancies => this.vacancies$.next(vacancies));
  }
}
