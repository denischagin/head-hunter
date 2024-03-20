import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

export class NoAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const noAuthReq = req.clone({
      withCredentials: true,
      url: `http://localhost:8080/api/${req.url}`,
    })
    return next.handle(noAuthReq)
  }
}
