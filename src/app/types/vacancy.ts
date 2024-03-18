export interface Region {
  id: number;
  title: string;
}

export interface Auth {
  authUserId: number;
  login: string;
  password: string;
  email: string;
  role: string;
  enabled: boolean;
  username: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  authorities: { authority: string }[];
}

export interface Hirer {
  hirerId: number;
  title: string;
  description: string;
  address: string;
  auth: Auth;
}

export interface Vacancy {
  id: number;
  title: string;
  description: string;
  workExperience: string;
  region: Region;
  specialty: string;
  industry: string;
  education: string;
  otherParams: string[];
  employmentType: string;
  workShedule: string;
  hirer: Hirer;
}
