import express from "express";
import amuletsController from "./controllers/amuletsController.js";
import userController from "./controllers/usersController.js";
import loginController from "./auth/login.js";
import auth from "./auth/auth.js";

const router = express.Router();

//AMULETS
router.get("/api/items/amulets", amuletsController.getAll);
router.get("/api/items/amulets/:id", amuletsController.getById);

//ARMORS

router.post("/api/auth/register", auth.hashPassword, userController.postUser);
router.post(
  "/api/auth/login",
  loginController.getUserByEmailWithPasswordAndPassToNext,
  auth.verifyPassword
);

export default router;
