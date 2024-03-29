import mongoose from "mongoose";
import user from "../models/user.js";
import CODES from "../utils/httpCodes.js";

const userController = {
  getAll: async (req, res) => {
    try {
      const data = await user.find({}).select("pseudo");

      if (data) {
        res.status(CODES.SUCCESS).send({ data: data, totalUsers: data.length });
      } else {
        req.status(404).send({ error: "no users registered" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  getUserById: async (req, res) => {
    const { id } = res.params;
    try {
      if (mongoose.Types.ObjectId.isValid(id)) {
        const oneUser = await user.findById(id).select("pseudo", "email", "saved");

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
      if (userBody) {
        const newUser = await user.create(userBody);
        res.status(CODES.CREATED).send({ data: { pseudo: newUser.pseudo, email: newUser.email } });
      } else {
        res.sendStatus(CODES.BAD_REQUEST);
      }
    } catch (e) {
      res.status(CODES.INTERNAL_SERVER_ERROR).send({ error: e });
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params;
    const newUser = req.body;

    try {
      await user.findByIdAndUpdate(id, newUser);
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
  resetUser: async (req, res) => {
    try {
      await user.deleteMany({});
      res.sendStatus(CODES.SUCCESS);
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
};

export default userController;
