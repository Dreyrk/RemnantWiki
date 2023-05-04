import mongoose from "mongoose";
import user from "../models/user.js";
import CODES from "../utils/httpCodes.js";

const userController = {
  getUserById: async (req, res) => {
    const { id } = res.params;
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        const oneUser = await user
          .findById(id)
          .select("pseudo", "email", "saved");

        if (oneUser) {
          res.status(CODES.SUCCESS).send(oneUser);
        } else {
          res.sendStatus(CODES.NOT_FOUND);
        }
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "ID is not valid" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  postUser: async (req, res) => {
    const userBody = req.body;
    try {
      const newUser = await user.create(userBody);
      res.status(CODES.CREATED).send(newUser);
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default userController;
