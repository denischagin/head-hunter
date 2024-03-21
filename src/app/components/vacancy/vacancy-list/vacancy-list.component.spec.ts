import {VacancyListComponent} from './vacancy-list.component';
import {VacancyService} from "../../../services/api/vacancy.service";
import {HttpClient} from "@angular/common/http";
import {EMPTY, of} from "rxjs";
import {Vacancy} from "../../../types/vacancy";
import {LoaderService} from "../../../services/loader.service";

const mockVacancies = [
  {region: {title: "Kostroma"}, title: "Vacancy", hirer: {title: 'Hirer'}}
] as Vacancy[];

describe('VacancyListComponent', () => {
  let component: VacancyListComponent;
  let vacancyService: VacancyService
  let loaderService: LoaderService
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    vacancyService = new VacancyService(httpSpy);
    loaderService = new LoaderService();
    component = new VacancyListComponent(vacancyService, loaderService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getVacancies when ngOnInit', () => {
    const spyGetVacancies = spyOn(vacancyService, 'getVacancies').and.callFake(() => {
      return EMPTY
    })

    component.ngOnInit()
    expect(spyGetVacancies).toHaveBeenCalled()
  })

  it('should call changeLoaderStage when ngOnInit', () => {
    const spyChangeLoaderStage = spyOn(loaderService, 'changeLoaderStage').and.callThrough()
    spyOn(vacancyService, 'getVacancies').and.callFake(() => {
      return EMPTY
    })

    component.ngOnInit()
    expect(spyChangeLoaderStage).toHaveBeenCalled()
  })

  it('should update length vacancies', () => {
    spyOn(vacancyService, 'getVacancies').and.callFake(() => {
      return of(mockVacancies)
    })

    component.ngOnInit()
    expect(component.vacancies.length).toBe(mockVacancies.length)
  })
});
