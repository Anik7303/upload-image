import { Request, Response, NextFunction } from "express";
import { model } from "mongoose";

// database interfaces
import { IImage } from "../interfaces";
import { formatImages, generateError, getImageData } from "../utils";

// database model
const Images = model<IImage>("image");

export async function getImages(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const images = await Images.find();

    if (images.length > 0) {
      res.status(200).json(images.map((image) => getImageData(image)));
      return;
    }

    const error = new Error("No images found");
    next(generateError(error, 404));
  } catch (error) {
    next(error);
  }
}

export async function getImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const image = await Images.findOne({ _id: id });

    if (image) {
      res.status(200).json(getImageData(image));
      return;
    }

    const error = new Error(`An image with id '${id}' not found.`);
    next(generateError(error, 404));
  } catch (error) {
    next(error);
  }
}

export async function postImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { file } = req;

    const image = new Images({
      name: file!.filename,
    });
    await image.save();

    if (req.file) {
      await formatImages(req.file);
    }

    res.status(201).json(getImageData(image));
  } catch (error) {
    next(error);
  }
}

export async function deleteImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const image = await Images.findOne({ _id: id });

    if (image) {
      await image.delete();
      res.status(200).json(getImageData(image));
    }

    const error = new Error(`An image with id '${id}' not found.`);
    next(generateError(error, 404));
  } catch (error) {
    next(error);
  }
}
