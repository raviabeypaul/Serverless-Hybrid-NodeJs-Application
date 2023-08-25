import { User } from "sample-app/entities/UserEntity";


export interface Repository<RecordType> {
  create: (payload: RecordType) => any;
  get: (email: string) => any;
  query: (
      query: Record<string, any>,
      startingOffset: number,
      resultLimit: number
    ) => any;
  update: (payload: Partial<RecordType>) => any;
}
export interface UserRepositoryI extends Repository<User> {
  create: (payload: User) => any;
  query: (
    query: Record<string, any>,
    startingOffset: number,
    resultLimit: number
  ) => any;
  distinct: (column: string, query: Record<string, any>) => any;
  update: (payload: Partial<User>) => any;
  aggregate: (pipeline: object[]) => any;
  countDocuments: (query: Record<string, any>) => any;
}
