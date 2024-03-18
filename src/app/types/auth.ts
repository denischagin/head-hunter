export type AuthRoles = 'WORKER' | 'HIRER' | 'ADMIN'
export type PersonGender = 'MALE' | 'FEMALE' | 'UNKNOWN'

export interface LoginCredentials {
  login: string;
  password: string;
  role: AuthRoles;
}

export interface RegisterCredentials {
  surname: string
  name: string
  patronymic: string
  login: string
  password: string
  role: AuthRoles
  gender: PersonGender
  email: string
  dateOfBirth: string
}

export interface RefreshCredentials {
  refreshToken: string
}

export interface AuthResponse {
  accessToken: {
    accessToken: string;
    expirationDate: string;
  },
  refreshToken: {
    refreshToken: string;
    expirationDate: string;
  }
}

