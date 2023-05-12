import mongoose from "mongoose";
import mods from "../models/mods.js";
import CODES from "../utils/httpCodes.js";

const modsController = {
  getAll: async (req, res) => {
    try {
      const data = await mods.find({});

      if (data) {
        res.status(CODES.SUCCESS).send({ data: data });
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "data is undefined" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;

    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        const item = await mods.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "mods not found" });
        }
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "ID is not valid" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getByName: async (req, res) => {
    const { name } = req.params;

    try {
      const mod = await mods.find({
        name,
      });

      if (mod) {
        res.status(CODES.SUCCESS).send(mod);
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "Mod not found" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default modsController;
