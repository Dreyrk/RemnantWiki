import builds from "../models/builds.js";
import CODES from "../utils/httpCodes.js";

const buildsController = {
  getAll: async (req, res) => {
    try {
      const data = await builds
        .find({})
        .select([
          "name",
          "description",
          "head",
          "body",
          "legs",
          "primary",
          "secondary",
          "melee",
          "amulet",
          "ring1",
          "ring2",
        ]);

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

export default buildsController;
