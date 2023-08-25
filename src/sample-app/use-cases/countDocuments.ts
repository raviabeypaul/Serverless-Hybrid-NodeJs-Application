import { UserRepositoryI } from "sample-app/repositories/repositoryI";


export const CountLogisticsDocuments = async (
  query: object,
  repository: UserRepositoryI
) => await repository.countDocuments(query);

