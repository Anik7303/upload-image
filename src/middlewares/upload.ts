import path from "path";
import { Request } from "express";
import multer, { diskStorage, FileFilterCallback, Options } from "multer";

import { generateFilename } from "../utils";

interface FileFilter {
  (req: Request, file: Express.Multer.File, callback: FileFilterCallback): void;
}

const imageStorage = diskStorage({
  destination(_req, _file, callback) {
    callback(null, path.join("uploads"));
  },
  filename(_req, file, callback) {
    callback(null, generateFilename(file.originalname));
  },
});

let imageFileFilter: FileFilter = function (_req, file, callback) {
  callback(null, file.mimetype.startsWith("image/"));
};

const multerOptions: Options = {
  fileFilter: imageFileFilter,
  storage: imageStorage,
};

export const uploadImage = multer(multerOptions).single("image");
