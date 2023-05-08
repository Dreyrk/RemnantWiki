import mongoose from "mongoose";
import dotenv from "dotenv";

import amulet from "./models/amulet.js";
import armors from "./models/armors.js";
import armorSet from "./models/armorSet.js";
import emote from "./models/emote.js";
import ring from "./models/ring.js";
import weapons from "./models/weapons.js";
import mods from "./models/mods.js";
import trait from "./models/trait.js";

import amuletsData from "./data/amulets.json" assert { type: "json" };
import armorSetsData from "./data/armor_sets.json" assert { type: "json" };
import armorsData from "./data/armors.json" assert { type: "json" };
import emotesData from "./data/emotes.json" assert { type: "json" };
import modsData from "./data/mods.json" assert { type: "json" };
import ringsData from "./data/rings.json" assert { type: "json" };
import traitsData from "./data/traits.json" assert { type: "json" };
import weaponsData from "./data/weapons.json" assert { type: "json" };

dotenv.config();

const uri = process.env.URI || "mongodb://127.0.0.1:27017/remnantdb";

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await amulet.deleteMany({});
  await amulet.insertMany(amuletsData);

  await armorSet.deleteMany({});
  await armorSet.insertMany(armorSetsData);

  await armors.deleteMany({});
  await armors.insertMany(armorsData);

  await emote.deleteMany({});
  await emote.insertMany(emotesData);

  await mods.deleteMany({});
  await mods.insertMany(modsData);

  await ring.deleteMany({});
  await ring.insertMany(ringsData);

  await trait.deleteMany({});
  await trait.insertMany(traitsData);

  await weapons.deleteMany({});
  await weapons.insertMany(weaponsData);

  await mongoose.connection.close();
}

main().catch((err) => console.log("!!DBERROR!!", err));
