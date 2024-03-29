import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthResponse, LoginCredentials, RefreshCredentials} from "../../types/auth";
import {ViewerService} from "../store/viewer.service";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private viewerService: ViewerService
  ) {
  }

  public login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`login`, credentials)
      .pipe(tap(response =>
        this.viewerService.authenticate(response)
      ))
  }

  public register(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`register`, credentials)
      .pipe(tap(response =>
        this.viewerService.authenticate(response)
      ))
  }

  public refresh(credentials: RefreshCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`refresh`, credentials)
      .pipe(tap(response =>
        this.viewerService.authenticate(response)
      ))
  }
}
