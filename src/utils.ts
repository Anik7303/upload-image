import path from "path";
import Str from "@supercharge/strings";
import sharp from "sharp";

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

export async function formatImages(file: Express.Multer.File) {
  const extension = path.extname(file.filename);
  const filename = file.filename.split(extension)[0];

  await sharp(file.path)
    .resize(40, 40)
    .toFormat("jpg", { quality: 90 })
    .toFile(`uploads/${filename}.thumbnail.jpg`);

  await sharp(file.path)
    .resize(320, 240)
    .toFormat("jpg", { quality: 90 })
    .toFile(`uploads/${filename}.small.jpg`);

  await sharp(file.path)
    .resize(640, 320)
    .toFormat("jpg", { quality: 90 })
    .toFile(`uploads/${filename}.medium.jpg`);

  await sharp(file.path)
    .resize(1280, 1024)
    .toFormat("jpg", { quality: 90 })
    .toFile(`uploads/${filename}.hd.jpg`);
}
