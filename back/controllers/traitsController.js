import mongoose from "mongoose";
import trait from "../models/trait.js";
import CODES from "../utils/httpCodes.js";

const traitController = {
  getAll: async (req, res) => {
    try {
      const data = await trait.find({});

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
        const item = await trait.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "trait not found" });
        }
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "ID is not valid" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getByWorld: async (req, res) => {
    const { world } = req.params;
    try {
      const data = await trait.find({ worlds: world });

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
};

export default traitController;
