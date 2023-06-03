import worlds from "../models/worlds.js";
import CODES from "../utils/httpCodes.js";

const worldsController = {
  getAll: async (req, res) => {
    try {
      const data = await worlds.find({});

      if (data) {
        res.status(CODES.SUCCESS).send({ data });
      } else {
        res.sendStatus(CODES.NOT_FOUND);
      }
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
};

export default worldsController;
