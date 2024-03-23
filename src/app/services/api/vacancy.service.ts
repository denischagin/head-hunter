import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vacancy} from "../../types/vacancy";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  vacancies$ = new BehaviorSubject<Vacancy[]>([])

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getVacancies() {
    return this.http
      .get<Vacancy[]>(`vacancies`)
      .pipe(
        tap(vacancies => {
          this.vacancies$.next(vacancies)
        }),
        catchError(error => {
          return throwError(() => new Error(error));
        })
      )
  }
}
