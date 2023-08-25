import { User } from "sample-app/entities/UserEntity";
import { UserRepositoryI } from "sample-app/repositories/repositoryI";


export const QueryUser = async (
  queryParams: any,
  startingOffset: number,
  resultLimit: number,
  repository: UserRepositoryI
) => {
  const query: any = {};

  if (queryParams != undefined) {
    queryParams = queryParams.split(",");

    for (const i in queryParams) {
      const temp = queryParams[i].split(":");

      if (temp[0] != "countryCode") {
        query[temp[0]] = { $regex: temp[1], $options: "i" };
      }
    }
  }
  console.log(query);

  return await repository.query(query, startingOffset, resultLimit);
};

export const QueryByEmail = async (
  userRepository: UserRepositoryI,
  orderId: string
): Promise<User> => {
  let userQuery = {
    "deliveryPartner.orderId": orderId
  };
  console.log("User Query => ", userQuery);

  const results = await userRepository.query(userQuery, 0, 1);
  console.log("query results => ", results);

  return results.length > 0 ? results[0] : null;
};

export const Query = async (
  query: any,
  startingOffset: number,
  resultLimit: number,
  repository: UserRepositoryI
) => {
  console.log("Query Logistics");

  return await repository.query(query, startingOffset, resultLimit);
};