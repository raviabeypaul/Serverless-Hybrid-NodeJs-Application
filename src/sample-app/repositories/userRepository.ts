
import { User } from "sample-app/entities/UserEntity";
import { UserRepositoryI } from "./repositoryI";
import { client } from "connectors/db/mongo/client";

export const UserRepository = () : UserRepositoryI=>({
    
    create: async (user: User) => {
        const result: any = await (await client())
          .collection("user")
          .insertOne(user);
    
        return result as User;
      },
      get: async (email: string) => {
        const result = await (await client())
          .collection("user")
          .findOne({ email: email });
    
        return result;
      },
      update: async ({ email, ...user }: Partial<User>) => {
        console.log("update email => " + email + " user => ", user);
    
        const result = await (await client())
          .collection("user")
          .findOneAndUpdate(
            { email },
            { $set: { ...user, updatedAt: Math.floor(Date.now() / 1000) } },
            { returnDocument: "after" }
          );
    
        return result;
      },
      query: async (
        query: Record<string, any>,
        startingOffset: number,
        resultLimit: number
      ) => {
        let result = [];
    
        result = await (await client())
          .collection("user")
          .find(query)
          .skip(startingOffset != undefined ? Number(startingOffset) : 0)
          .limit(resultLimit != undefined ? Number(resultLimit) : 5)
          .sort({ createdAt: -1 })
          .toArray();
    
        return result;
      },
      distinct: async (column: string, query: Record<string, any>) => {
        let result = [];
    
        result = await (await client()).collection("user").distinct(column, query);
    
        return result;
      },
      aggregate: async (pipeline: Record<string, any>[]) => {
        const result = await (await client())
          .collection("user")
          .aggregate(pipeline)
          .toArray();
    
        return result;
      },
      countDocuments: async (query: Record<string, any>) => {
        const result = await (await client())
          .collection("user")
          .countDocuments(query);
    
        return result;
      },
      
})