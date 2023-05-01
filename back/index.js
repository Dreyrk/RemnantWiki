import express from "express";
import cors from "cors";
import router from "./router.js";
import main from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
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
