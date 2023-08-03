/**
 * Login form values type.
 */
export interface LoginInFormValue {
  username: string;
  password: string;
}

/**
 * Signup from type.
 */
export interface SignUpFormValue {
  username: string;
  password: string;
  confirmPassword: string;
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHERS = "Others",
}
