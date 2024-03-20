import {HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";
import {TokenService} from "../services/token.service";
import {AuthService} from "../services/api/auth.service";
import {ViewerService} from "../services/store/viewer.service";

export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private viewerService: ViewerService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
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
        catchError((error) => this.handleError(req, error, next))
      );
  }

  private handleError(request: HttpRequest<unknown>, error: HttpErrorResponse, next: HttpHandler) {
    const refreshToken = this.viewerService.viewer.value?.refreshToken.refreshToken

    if (error.status === 401) {
      if (!this.isRefreshing && !!refreshToken) {
        this.isRefreshing = true;

        this.authService.refresh({refreshToken})
          .subscribe({
            next: () => {
              this.isRefreshing = false;
              next.handle(request);
              return throwError(() => new Error(error.message))
            },
            error: () => {
              this.isRefreshing = false;
              this.viewerService.logout()
              return throwError(() => new Error(error.message))
            }
          })
      }
    }
    return throwError(() => new Error(error.message))
  }
}

// TODO fix interceptor
