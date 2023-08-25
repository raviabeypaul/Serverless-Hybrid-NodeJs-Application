import { User } from "sample-app/entities/UserEntity";
import { UserRepositoryI } from "sample-app/repositories/repositoryI";

export const UpdateLogistics = async (
  payload: Partial<User>,
  userRepository: UserRepositoryI
) => {
  return await userRepository.update(payload);
};