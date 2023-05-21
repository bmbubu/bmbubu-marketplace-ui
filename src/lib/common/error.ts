export enum StatusCode {
  'SuccessOK' = 200,
  'Created' = 201,
  'NoConcent' = 204,
  'Unauthorized' = 401,
  'InternalError' = 500
}

export enum RegistrationError {
  FIRST_NAME_IS_REQUIRED = "First Name is Required",
  LAST_NAME_IS_REQUIRED = "Last Name is Required",
  EMAIL_IS_REQUIRED = "Email is Required",
  PASSWORD_IS_REQUIRED = "Password is Required",
  CONFIRM_PASSWORD_IS_REQUIRED = "Confirm Password is Required"
}