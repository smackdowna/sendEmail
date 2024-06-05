import express from "express";
import { email } from "../controllers/emailController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//upload pdf
router.route("/sendemail").post(singleUpload,email);



export default router;
