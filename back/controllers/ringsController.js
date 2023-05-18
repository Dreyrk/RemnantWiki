import mongoose from "mongoose";
import ring from "../models/ring.js";
import CODES from "../utils/httpCodes.js";

const ringsController = {
  getAll: async (req, res) => {
    try {
      const data = await ring.find({});

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
        const item = await ring.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "ring not found" });
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
      const length = await ring.count();

      const data = await ring.find({});

      const randomItem1 = data[Math.floor(Math.random() * length)];
      let randomItem2;

      do {
        randomItem2 = data[Math.floor(Math.random() * length)];
      } while (randomItem1 === randomItem2);

      if (data) {
        res.status(CODES.SUCCESS).send({
          data: {
            ring1: randomItem1,
            ring2: randomItem2,
          },
        });
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "data is undefined" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default ringsController;
