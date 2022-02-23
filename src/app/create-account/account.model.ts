export class AccountModel {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  imageUrl?: string;
  posts?: PostModel[];
}

export class PostModel {
  content?: string;
  time?: string;
}
