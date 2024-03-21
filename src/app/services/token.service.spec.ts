import {TokenService} from "./token.service";


const token = 'token';

describe('TokenService', () => {
  let tokenService: TokenService;

  beforeEach(() => {
    tokenService = new TokenService();
  })

  it('should set token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(token);

    tokenService.setToken(token);
    expect(tokenService.getToken()).toBe(token);
  })

  it('should get token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(token);

    expect(tokenService.getToken()).toBe(token);
  })

  it('should remove token', () => {
    spyOn(localStorage, 'removeItem');

    tokenService.removeToken();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
  })
})
