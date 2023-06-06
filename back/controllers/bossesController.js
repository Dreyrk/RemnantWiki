import boss from "../models/boss.js";
import CODES from "../utils/httpCodes.js";

const bossController = {
  getAll: async (req, res) => {
    try {
      const data = await boss.find({});

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
      const data = await boss.find({
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

export default bossController;
