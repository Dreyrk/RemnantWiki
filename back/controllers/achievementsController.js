import achievement from "../models/achievement.js";
import CODES from "../utils/httpCodes.js";

const achievementsController = {
  getAll: async (req, res) => {
    try {
      const data = await achievement.find({});

      if (data) {
        res.status(CODES.SUCCESS).send({ data });
      } else {
        res.sendStatus(CODES.NOT_FOUND);
      }
    } catch (e) {
      res.status(CODES.INTERNAL_SERVER_ERROR).send({ error: e });
    }
  },
};

export default achievementsController;
