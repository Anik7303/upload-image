import { Types } from "mongoose";

export interface IErrorWithCode extends Error {
  message: string;
  statusCode: number;
}

export interface IImage {
  _id: Types.ObjectId;
  name: string;
  path: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IImageData {
  id: string;
  name: string;
  path: string;
  createdAt: Date;
  updatedAt: Date;
}
