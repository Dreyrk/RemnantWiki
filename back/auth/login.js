import user from "../models/user.js";
import CODES from "../utils/httpCodes.js";

const loginController = {
  getUserByEmailWithPasswordAndPassToNext: async (req, res, next) => {
    const { email } = req.body;

    try {
      const loginUser = await user.find({ email });

      if (loginUser[0] != null) {
        req.user = loginUser[0];
        next();
      } else {
        res.status(CODES.NOT_FOUND).send({ error: "User not found" });
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
      console.error(e);
    }
  },
};

export default loginController;
