export class AccountModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  otp?: number;
  imageUrl?: string;
  posts?: PostModel[];
  livesIn?: string;
  DOB?: string;
}

export class PostModel {
  id?: number;
  title?: string;
  content?: string;
  time?: string;
  imageUrl?: string;
  firstName?: string;
  calcTime?: string;
  timeStamp?: number;
}
