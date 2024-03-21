import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderStage$ = new BehaviorSubject<string | null>(null)

  constructor() {
  }

  changeLoaderStage(stage: string) {
    this.loaderStage$.next(stage)
  }

  hideLoader() {
    this.loaderStage$.next(null)
  }
}
