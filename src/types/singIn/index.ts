export type authLoginType = {
  email: string;
  password: string;
  role: string;
  access_token: string;
};
export type forgotPasswordType = {
  email: string;
};

export type resetPasswordType = {
  password: string;
};

export interface IUser {
  id: string;
  email: string;
}
