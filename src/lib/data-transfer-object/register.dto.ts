export type RegisterRequestDto = {
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  address1?: string,
  address2?: string,
  contactNo?: string,
  zipCode?: string,
  roleid: number
}

export type RegisterFormDto = {
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string,
  address1?: string,
  address2?: string,
  contactNo?: string,
  zipCode?: string,
  isAgreeToTerms: boolean,
  isAgreeToUseData: boolean
}