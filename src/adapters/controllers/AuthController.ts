import { LoginRequest } from "sample-app/dtos/AuthReqDtos";
import loginReqSchema from "sample-app/dtos/validators/validateLogin";
import { AppResponseDto } from "helpers/ApiResponseDto";
import { AppError } from "helpers/AppError";
import { APP_CODES, APP_MESSAGE, HTTP_CODES } from "helpers/constants";
import { login } from "sample-app/service/AuthSevice";
import { UserRepositoryI } from "sample-app/repositories/repositoryI";

export const AuthController = (userRepository : UserRepositoryI) => ({
   login: async (loginRequest: LoginRequest): Promise<AppResponseDto> => {
    console.info("inside login");
      const validationResponse = await loginReqSchema.validate(loginRequest);
      if (validationResponse.error) {
        throw new AppError(HTTP_CODES.BAD_REQUEST, APP_CODES.REGISTER_ERROR, APP_MESSAGE.REQUEST_VALIDATION_ERROR,[validationResponse.error])
      }

      const loginResponse = await login (
        userRepository,
        loginRequest.username,
        loginRequest.password
      );

      let appResponseDto : AppResponseDto = {
        appCode : APP_CODES.SUCCESS,
        httpCode : HTTP_CODES.SUCCESS,
        result : loginResponse,
        message : APP_MESSAGE.SUCCESS
      }
      return appResponseDto
    
  },
});
