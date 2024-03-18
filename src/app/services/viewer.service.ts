import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Viewer} from "../types/viewer";
import {AuthResponse} from "../types/auth";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class ViewerService {
  viewer = new Subject<Viewer>();

  constructor(
    private tokenService: TokenService
  ) {
  }

  public authenticate(authResponse: AuthResponse) {
    this.tokenService.setToken(authResponse.accessToken.accessToken);
    this.viewer.next({...authResponse, isAuthenticated: true});
  }
}
