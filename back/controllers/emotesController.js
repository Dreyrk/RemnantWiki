import mongoose from "mongoose";
import emote from "../models/emote.js";
import CODES from "../utils/httpCodes.js";

const emotesController = {
  getAll: async (req, res) => {
    try {
      const data = await emote.find({});

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
        const item = await emote.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "emote not found" });
        }
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "ID is not valid" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default emotesController;
