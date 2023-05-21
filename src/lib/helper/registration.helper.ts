import axios from "axios";
import { StatusCode } from "../common/error";
import { RegisterFormDto, RegisterRequestDto } from "../data-transfer-object/register.dto";
import { REGISTER_URL } from "../common/api-url";
import { get } from "lodash";


export const convertFormDataToRequestDto = (formData: RegisterFormDto): RegisterRequestDto => {
  const {firstName, lastName, email, username, password, address1, address2, contactNo, zipCode} = formData
  return {
    firstName,
    lastName,
    email,
    username,
    password,
    address1,
    address2,
    contactNo,
    zipCode,
    roleid: 2
  }
}

export const registerFormData = async (registerRequestDto: RegisterRequestDto): Promise<number> => {
  try {
    const registerApiUrl = `${process.env.REACT_APP_MY_WORKPRODUCT_API}${REGISTER_URL}`
    const response = await axios
      .post(registerApiUrl, JSON.stringify(registerRequestDto), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: false,
      })
      .catch((err) => {
        return StatusCode.InternalError
      });
    

    if(get(response,'status') === StatusCode.Created) {
      return StatusCode.Created;
    }
    else {
      return StatusCode.InternalError;
    }
  } catch (error) {
    return StatusCode.InternalError
  }
} 