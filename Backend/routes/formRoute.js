import express from "express";
import { sendMessage } from "../controller/formController.js";

const router = express.Router();

router.post("/", sendMessage);

export default router;
