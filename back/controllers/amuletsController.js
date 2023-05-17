import mongoose from "mongoose";
import amulet from "../models/amulet.js";
import CODES from "../utils/httpCodes.js";

const amuletsController = {
  getAll: async (req, res) => {
    try {
      const data = await amulet.find({});

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
        const item = await amulet.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "Amulet not found" });
        }
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "ID is not valid" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getRandom: async (req, res) => {
    try {
      const length = await amulet.count();

      const data = await amulet.find({});

      const randomItem = data[Math.floor(Math.random() * length)];

      if (data) {
        res.status(CODES.SUCCESS).send({ data: randomItem });
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "data is undefined" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default amuletsController;
