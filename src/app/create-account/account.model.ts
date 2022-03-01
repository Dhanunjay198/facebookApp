export class AccountModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  otp?: number;
  imageUrl?: string;
  posts?: PostModel[];
}

export class PostModel {
  title?: string;
  content?: string;
  time?: string;
  imageUrl?: string;
  firstName?: string;
  calcTime?: string;
}
