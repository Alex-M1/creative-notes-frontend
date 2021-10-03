export interface IUserState {
  isReady: boolean;
  currentLanguage: string;
  userInfo: IUserInfo;
  initStatus: boolean;
}

export interface ICheckAuth{
  message: string;
}

export interface IUserInfoPayload{
  message: IUserInfo
}

export interface IErrorPayload{
  message: string;
}

export interface IUserInfo{
  age: string;
  city: string;
  img: string;
  lastName: string;
  login: string;
  name: string;
  role: string;
}
