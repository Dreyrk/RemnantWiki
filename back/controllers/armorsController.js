import mongoose from "mongoose";
import armors from "../models/armors.js";
import CODES from "../utils/httpCodes.js";

const armorsController = {
  getAll: async (req, res) => {
    try {
      const data = await armors.find({});

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
        const item = await armors.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "armors not found" });
        }
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "ID is not valid" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getByCategory: async (req, res) => {
    const { category } = req.params;

    try {
      const categoryArmors = await armors.find({
        category,
      });

      if (categoryArmors[0]) {
        res.status(CODES.SUCCESS).send({ data: categoryArmors });
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "Category not found" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getRandom: async (req, res) => {
    try {
      const head = await armors.find({ category: "head" });
      const body = await armors.find({ category: "body" });
      const legs = await armors.find({ category: "legs" });

      const randomHead = await head[Math.floor(Math.random() * head.length)];
      const randomBody = await body[Math.floor(Math.random() * body.length)];
      const randomLegs = await legs[Math.floor(Math.random() * legs.length)];

      if (randomHead && randomBody && randomLegs) {
        res
          .status(CODES.SUCCESS)
          .send({ data: [randomHead, randomBody, randomLegs] });
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "data is undefined" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default armorsController;
