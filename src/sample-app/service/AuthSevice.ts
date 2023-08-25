
import { AppError } from "helpers/AppError"
import { APP_CODES, APP_MESSAGE, HTTP_CODES } from "helpers/constants"
import { UserRepositoryI } from "sample-app/repositories/repositoryI"


export const login = async (userRepository : UserRepositoryI, email, password)=>{
    const object = userRepository.get(email)
    if(!object){
        throw new AppError(HTTP_CODES.SERVER_ERROR, APP_CODES.LOGIN_ERROR,APP_MESSAGE.LOGIN_USER_DOES_NOT_EXIST, [])
    }
}

