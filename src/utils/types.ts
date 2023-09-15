export interface UserData {
  createdAt: string;
  email: string;
  id: number;
  role: number;
  token: string;
  city: string;
  country: string;
  domesticNumber: string;
  iternationalCountry?: string;
  iternationalNumber?: string;
  socialNetworks?: SocialNetworks;
}

export interface SocialNetworks {
  facebookLink: string;
  instagramLink: string;
  viberLink: string;
}

export interface LoginUserRo extends ResponseObj {
  userData: UserData;
}

export interface ResponseObj {
  statusCode: number;
  message: string;
}
