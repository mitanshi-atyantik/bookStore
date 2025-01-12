import express from "express";
import { contactFunction } from "../controller/contact-controller.js";
const router = express.Router();

router.post("/contact", contactFunction);

export default router;