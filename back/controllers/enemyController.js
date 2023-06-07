import enemy from "../models/enemy.js";
import CODES from "../utils/httpCodes.js";

const enemyController = {
  getAll: async (req, res) => {
    try {
      const data = await enemy.find({});

      if (data) {
        res.status(CODES.SUCCESS).send({ data });
      } else {
        res.sendStatus(CODES.NOT_FOUND);
      }
    } catch (e) {
      res.status(CODES.INTERNAL_SERVER_ERROR).send({ error: e });
    }
  },
  getByLocation: async (req, res) => {
    const { location } = req.params;
    try {
      const data = await enemy.find({
        location,
      });

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

export default enemyController;
