
export type Status =
    "unverfied" // user is not verified
  | "active"
  | "inactive" // inactive triggered by user
  | "blocked" // suspicious activity deteced
export interface User {
    username : String;
    id: string;
    fName : string;
    lname : String;
    email : string;
    password : string;
    country: string;
    status: Status;
    createdAt: number;
    updatedAt: number;
  }