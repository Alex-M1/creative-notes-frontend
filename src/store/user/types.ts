export interface IUserState {
  isReady: boolean;
  currentLanguage: string;
  userInfo: IUserInfo;
  initStatus: boolean;
  oldPassword: string;
  newPassword: string;
  freezeUserInfo: IUserInfo | Record<string, never>;
  adminPanel: IAdminUsersRequest
}

export interface IAdminUsersRequest {
  page: number;
  total_page: number;
  users: Array<IAdminsUser>
}

export type TChangeRole = {
  user: string;
  role: string;
};

export interface IAdminsUser {
  _id: string;
  img?: string;
  login: string;
  online: false;
  role: string;
}

export interface ICheckAuth {
  message: string;
}

export interface IUserInfoPayload {
  message: IUserInfo
}

export interface IErrorPayload {
  message: string;
}

export interface IUserInfo {
  age: string;
  city: string;
  img: string;
  lastName: string;
  login: string;
  name: string;
  role: string;
}

export interface INewUserInfoField {
  field: string;
  value: string;
}
