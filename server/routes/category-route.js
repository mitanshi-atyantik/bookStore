import express from "express";
import { getCategory, getCt } from "../controller/category-controller.js";

const router = express.Router();

router.get("/categories", getCategory);
router.get("/category/:category", getCt);

export default router;