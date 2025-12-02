import express from "express";
import { createAlbom, getAllAlbom, getAlbom } from "../controller/albom.controller.js";

const router = express.Router();

router.post("/", createAlbom);
router.get("/", getAllAlbom);
router.get("/:id", getAlbom);

export default router;