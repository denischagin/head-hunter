import {AuthResponse} from "./auth";

export interface Viewer extends AuthResponse {
  isAuthenticated: boolean;
}
