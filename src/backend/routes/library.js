import express from "express";
import asyncHandler from "express-async-handler";

import { songs } from "../controllers/library";

const router = express.Router();

router.route("/library/songs").get(asyncHandler(songs));

export default router;
