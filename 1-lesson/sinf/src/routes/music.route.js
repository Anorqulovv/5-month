import express from "express";
import { createMusic, getAllMusic, getMusic } from "../controller/music.controller.js";

const router = express.Router();

router.post("/", createMusic);
router.get("/", getAllMusic);
router.get("/:id", getMusic);

export default router;
