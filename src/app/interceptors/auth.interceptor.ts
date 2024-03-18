import {HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {TokenService} from "../services/token.service";

export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken()

    if (!accessToken) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${accessToken}`,
      }),
      url: `localhost:8080/api/${req.url}`,
    })

    return next.handle(authReq)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.tokenService.removeToken();
    }

    return throwError(() => new Error(error.message))
  }
}
