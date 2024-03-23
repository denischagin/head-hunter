import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {API_URL} from "../constants/api";
import {inject} from "@angular/core";
import {TokenService} from "../services/token.service";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService)

  const url = req.url;
  const token = tokenService.getToken();

  const headers = token ? new HttpHeaders({
    'Authorization': `Bearer ${token}`
  }) : req.headers;

  const newReq = req.clone({
    url: `${API_URL}/${url}`,
    headers: headers,
  });

  return next(newReq)
};
