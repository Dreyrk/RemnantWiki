import mongoose from "mongoose";
import weapons from "../models/weapons.js";
import CODES from "../utils/httpCodes.js";

const weaponsController = {
  getAll: async (req, res) => {
    const { limit, page } = req.query;

    const pageNumber = Number.parseInt(page, 10);
    const limitNumber = Number.parseInt(limit, 10);

    let pages = 0;

    if (pageNumber > 0 && !Number.isNaN(pageNumber)) {
      pages = pageNumber;
    }

    let size = 10;

    if (limitNumber > 0 && !Number.isNaN(limitNumber)) {
      size = limitNumber;
    }

    try {
      const count = await weapons.count();

      const data = await weapons
        .find({})
        .limit(size)
        .skip(size * pages);

      if (data) {
        res
          .status(CODES.SUCCESS)
          .send({ data: data, totalPages: Math.ceil(count / size) });
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
        const item = await weapons.findById(id);

        if (item) {
          res.status(CODES.SUCCESS).send({ data: item });
        } else {
          res.status(CODES.NOT_FOUND).send({ error: "weapons not found" });
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
      const categoryWeapons = await weapons.find({
        category,
      });

      if (categoryWeapons[0]) {
        res.status(CODES.SUCCESS).send({ data: categoryWeapons });
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "Category not found" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default weaponsController;
