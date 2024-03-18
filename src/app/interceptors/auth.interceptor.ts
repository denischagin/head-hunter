import {HttpInterceptorFn} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req.headers.append('Authorization', 'Bearer' + localStorage.getItem('token'));
  return next(req);
};
