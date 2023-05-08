import express from "express";

//ITEMS IMPORT
import amuletsController from "./controllers/amuletsController.js";
import ringsController from "./controllers/ringsController.js";
import armorsController from "./controllers/armorsController.js";
import armorSetsController from "./controllers/armorSetsController.js";
import weaponsController from "./controllers/weaponsConroller.js";
import modsController from "./controllers/modsController.js";
import traitsController from "./controllers/traitsController.js";
import emotesController from "./controllers/emotesController.js";

//AUTH IMPORT
import userController from "./controllers/usersController.js";
import loginController from "./auth/login.js";
import auth from "./auth/auth.js";

const router = express.Router();

//AMULETS
router.get("/api/items/amulets", amuletsController.getAll);
router.get("/api/items/amulets/:id", amuletsController.getById);

//RINGS
router.get("/api/items/rings", ringsController.getAll);
router.get("/api/items/rings/:id", ringsController.getById);

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

//MODS
router.get("/api/items/mods", modsController.getAll);
router.get("/api/items/mods/:id", modsController.getById);
router.get("/api/items/mods/name/:name", modsController.getById);

//TRAITS
router.get("/api/items/traits", traitsController.getAll);
router.get("/api/items/traits/:id", traitsController.getById);

//EMOTES
router.get("/api/items/emotes", emotesController.getAll);
router.get("/api/items/emotes/:id", emotesController.getById);

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
