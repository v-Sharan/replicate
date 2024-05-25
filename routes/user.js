import { Router } from "express";
import { ImageText } from "../controllers/upload.js";

import { fileUpload } from "../middleware/file.js";

const router = Router();

router.post("/", fileUpload.single("image"), ImageText);

export default router;
