import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import router from "./router.js";
import main from "./db.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Remnant API Launched on port ${port}`);
  try {
    main();
  } catch (err) {
    console.error(err);
  }
});
