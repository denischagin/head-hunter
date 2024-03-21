import {TokenService} from "../token.service";
import {ViewerService} from "./viewer.service";
import {AuthResponse} from "../../types/auth";

const authenticateData = {
  accessToken: {
    accessToken: 'accessToken',
    expirationDate: 'expirationDate'
  },
  refreshToken: {
    refreshToken: 'refreshToken',
    expirationDate: 'expirationDate'
  }
} as AuthResponse

describe('ViewerService', () => {
  let tokenService: TokenService;
  let viewerService: ViewerService

  beforeEach(() => {
    tokenService = new TokenService();
    viewerService = new ViewerService(tokenService);
  })


  it("should viewer authenticate", () => {
    viewerService.authenticate(authenticateData);

    expect(viewerService.viewer.getValue()).toEqual({...authenticateData, isAuthenticated: true})
  })

  it("should viewer logout", () => {
    viewerService.authenticate(authenticateData);
    viewerService.logout()

    expect(viewerService.viewer.getValue()).toBeNull()
  })
})
