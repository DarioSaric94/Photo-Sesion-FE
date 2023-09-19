export interface UserData extends UserInfo {
  createdAt: string;
  email: string;
  id: number;
  role: number;
  token: string;
}

export interface UserInfo {
  email?: string;
  city?: string;
  country?: string;
  domesticNumber?: string;
  iternationalCountry?: string;
  iternationalNumber?: string;
  facebookLink?: string;
  instagramLink?: string;
}

export interface LoginUserRo extends ResponseObj {
  userData: UserData;
}

export interface ResponseObj {
  statusCode: number;
  message: string;
}

export interface YoutubeLinksData {
  youtubeLink1?: string;
  youtubeLink2?: string;
  youtubeLink3?: string;
  album?: any;
}
