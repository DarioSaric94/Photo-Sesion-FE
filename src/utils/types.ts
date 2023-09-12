export interface UserData {
  createdAt: string;
  email: string;
  favoriteCourses: any[];
  id: number;
  role: number;
  token: string;
}

export interface LoginUserRo extends ResponseObj {
  userData: UserData;
}

export interface ResponseObj {
  statusCode: number;
  message: string;
}
