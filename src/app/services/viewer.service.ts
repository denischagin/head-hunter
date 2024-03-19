import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Viewer} from "../types/viewer";
import {AuthResponse} from "../types/auth";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  viewer = new BehaviorSubject<Viewer | null>(null);

  constructor(
    private tokenService: TokenService
  ) {
  }

  public authenticate(authResponse: AuthResponse) {
    this.tokenService.setToken(authResponse.accessToken.accessToken);
    this.viewer.next({...authResponse, isAuthenticated: true});
  }

  public logout() {
    this.tokenService.removeToken();
    this.viewer.next(null);
  }
}
