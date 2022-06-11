import { model, Schema, SchemaOptions } from "mongoose";

// interfaces for database models
import { IImage } from "../interfaces";

const imageSchemaOptions: SchemaOptions = {
  autoIndex: false,
  timestamps: true,
};

const imageSchema = new Schema<IImage>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    path: {
      type: String,
      default: "/uploads",
    },
  },
  imageSchemaOptions
);

model<IImage>("image", imageSchema);
