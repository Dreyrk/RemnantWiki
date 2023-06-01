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
      let data = [];
      if (world.includes("13")) {
        data = await trait.find({
          worlds: { $in: [world] },
        });
      } else {
        data = await trait.find({
          worlds: { $size: 1, $all: [world] },
        });
      }
      if (data.length > 0) {
        res.status(200).send({ data: data });
      } else {
        res.status(404).send({ error: "No trait found for this world" });
      }
    } catch (e) {
      res.sendStatus(500);
      console.error(e);
    }
  },
};

export default traitController;
