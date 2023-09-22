export interface UserData extends UserInfo {
  createdAt: string;
  email: string;
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

export interface UserInfo {
  id?: number;
  email?: string;
  lastName?: string;
  name?: string;
  city?: string;
  country?: string;
  createdAt?: string;
  domesticNumber?: string;
  iternationalCountry?: string;
  iternationalNumber?: string;
  facebookLink?: string;
  instagramLink?: string;
  image?: string;
}

export interface UserInfoRo extends StatusCode {
  userData: UserInfo;
}

export interface AlbumSesion {
  id: number;
  albumName: string;
  participants: string;
  albumPath: string;
  albumPassword?: string;
  mainVideo?: string;
  trailerVideo?: string;
  images: ImagesRo[];
}

export interface AlbumSesionRo extends StatusCode {
  album: AlbumSesion;
}

export interface ImagesRo {
  id: number;
  albumSesionId: number;
  image: string;
}

export interface StatusCode {
  statusCode: number;
  message?: string;
}

export interface YoutubeLinksRo {
  album: AlbumSesion;
  albumsData?: AlbumData[];
  youtubeLinks?: YoutubeLinks;
}

export interface AlbumData {
  id?: number;
  participants?: string;
}

export interface YoutubeLinks {
  id: number;
  albumId: number;
  userId: number;
  youtubeLink1?: string;
  youtubeLink2?: string;
  youtubeLink3?: string;
}

export interface ExtendedFile extends File {
  preview: string;
}

export interface FileImagesRo extends ResponseObj {
  url: string;
  sessionToken: string;
}
