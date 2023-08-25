import { User } from "sample-app/entities/UserEntity";
import { UserRepositoryI } from "sample-app/repositories/repositoryI";

export const CreateLogistics = async (
  logistics: User,
  repository: UserRepositoryI
) => {

  await console.log("inside CreateLogistics use case => ", logistics);
  return await repository.create(logistics);
};
