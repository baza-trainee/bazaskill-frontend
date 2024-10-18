export interface authLoginType {
  email: string;
  password: string;
  role: string;
  access_token: string;
}
export interface forgotPasswordType {
  email: string;
  token: string;
}

export interface resetPasswordType {
  password: string;
}

export interface IUser {
  id: string;
  email: string;
}
