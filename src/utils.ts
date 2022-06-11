import path from "path";
import Str from "@supercharge/strings";

import { IErrorWithCode, IImage, IImageData } from "./interfaces";

export function generateError(error: Error, code?: number): IErrorWithCode {
  const message =
    error.message || "An unexpected error occured, Please try again later.";
  code = code || 500;

  const err = new Error(message) as IErrorWithCode;
  err.statusCode = code;

  return err;
}

export function generateFilename(name: string): string {
  const hash = Str.random(20);
  const date = Date.now();
  const extension = path.extname(name);
  return `${date}_${hash}${extension}`;
}

export function getImageData(image: IImage): IImageData {
  return {
    id: image._id.toString(),
    name: image.name,
    path: image.path,
    createdAt: image.createdAt,
    updatedAt: image.updatedAt,
  };
}
