import { Router } from "express";

// middlewares
import { uploadImage } from "../middlewares";

// controllers
import { getImages, getImage, postImage, deleteImage } from "../controllers";

const router = Router();

router.get("/", getImages);
router.get("/:id", getImage);
router.post("/", uploadImage, postImage);
router.delete("/", deleteImage);

export default router;
