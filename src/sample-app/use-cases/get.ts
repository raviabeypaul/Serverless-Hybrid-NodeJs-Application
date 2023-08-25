import { UserRepositoryI } from "sample-app/repositories/repositoryI";


export const GetLogistic = async (
  id: string,
  repository: UserRepositoryI
) => await repository.get(id);

