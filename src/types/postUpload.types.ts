import { Document } from "mongoose";

export interface IPost extends Document {
  name: string;
  age: number;
  email: string;
}
