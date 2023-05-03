import express from "express";

const router = express.Router();

router.post("/api/auth/register");
router.post("/api/auth/login");

export default router;
