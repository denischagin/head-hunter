import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthResponse, LoginCredentials, RefreshCredentials} from "../../types/auth";
import {ViewerService} from "../store/viewer.service";
import {Observable, tap} from "rxjs";
import {API_URL} from "../../constants/api";

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
      .post<AuthResponse>(`${API_URL}/login`, credentials)
      .pipe(tap(response =>
        this.viewerService.authenticate(response)
      ))
  }

  public register(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_URL}/register`, credentials)
      .pipe(tap(response =>
        this.viewerService.authenticate(response)
      ))
  }

  public refresh(credentials: RefreshCredentials): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_URL}/refresh`, credentials)
      .pipe(tap(response =>
        this.viewerService.authenticate(response)
      ))
  }
}
