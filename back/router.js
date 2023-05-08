import express from "express";
import amuletsController from "./controllers/amuletsController.js";
import armorsController from "./controllers/armorsController.js";
import weaponsController from "./controllers/weaponsConroller.js";
import userController from "./controllers/usersController.js";
import loginController from "./auth/login.js";
import auth from "./auth/auth.js";
import armorSetsController from "./controllers/armorSetsController.js";

const router = express.Router();

//AMULETS
router.get("/api/items/amulets", amuletsController.getAll);
router.get("/api/items/amulets/:id", amuletsController.getById);

//ARMORS
router.get("/api/items/armors", armorsController.getAll);
router.get("/api/items/armors/:id", armorsController.getById);
router.get(
  "/api/items/armors/category/:category",
  armorsController.getByCategory
);

//ARMOR SETS
router.get("/api/sets/armors", armorSetsController.getAll);
router.get("/api/sets/armors/:id", armorSetsController.getById);

//WEAPONS
router.get("/api/items/weapons", weaponsController.getAll);
router.get("/api/items/weapons/:id", weaponsController.getById);
router.get(
  "/api/items/weapons/category/:category",
  weaponsController.getByCategory
);

//AUTH
router.post("/api/auth/register", auth.hashPassword, userController.postUser);
router.post(
  "/api/auth/login",
  loginController.getUserByEmailWithPasswordAndPassToNext,
  auth.verifyPassword
);

//USER
router.get("/api/users/reset", userController.resetUser);

export default router;
