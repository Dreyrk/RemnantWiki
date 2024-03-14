import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CODES from "../utils/httpCodes.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const auth = {
  hashPassword: async (req, res, next) => {
    const user = req.body;

    try {
      const hashedPassword = await argon2.hash(user.password, hashingOptions);

      delete user.password;
      user.password = hashedPassword;

      next();
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  verifyPassword: async (req, res) => {
    try {
      const isVerified = await argon2.verify(req.user.password, req.body.password, hashingOptions);

      if (isVerified) {
        const id = req.user._id.toString();
        const token = jwt.sign({ sub: id }, JWT_SECRET, {
          algorithm: "HS512",
        });
        req.user.password = "secret password";
        console.log(req.user);
        res.status(200).send({ token, user: req.user });
      } else {
        res.status(CODES.BAD_REQUEST).send({ error: "Wrong Password" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
  verifyToken: (req, res, next) => {
    try {
      const [type, token] = req.headers.authorization.split(" ");
      if (type !== "Bearer") throw new Error("Only Bearer token allowed");
      req.payload = jwt.verify(token, JWT_SECRET);
      next();
    } catch (err) {
      console.error(err);
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
};

export default auth;
