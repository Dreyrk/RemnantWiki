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
import user from "./models/user.js";
import worlds from "./models/worlds.js";
import builds from "./models/builds.js";
import achievement from "./models/achievement.js";
import boss from "./models/boss.js";

import amuletsData from "./data/amulets.json" assert { type: "json" };
import armorSetsData from "./data/armor_sets.json" assert { type: "json" };
import armorsData from "./data/armors.json" assert { type: "json" };
import emotesData from "./data/emotes.json" assert { type: "json" };
import modsData from "./data/mods.json" assert { type: "json" };
import ringsData from "./data/rings.json" assert { type: "json" };
import traitsData from "./data/traits.json" assert { type: "json" };
import weaponsData from "./data/weapons.json" assert { type: "json" };
import worldsData from "./data/worlds.json" assert { type: "json" };
import achievementsData from "./data/achievements.json" assert { type: "json" };
import bossesData from "./data/bosses.json" assert { type: "json" };

dotenv.config();

const uri = process.env.URI || "mongodb://127.0.0.1:27017/remnantdb";

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  //RESET ALL USERS
  await user.deleteMany({});

  //FILL DB
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

  await worlds.deleteMany({});
  await worlds.insertMany(worldsData);

  await achievement.deleteMany({});
  await achievement.insertMany(achievementsData);

  await boss.deleteMany({});
  await boss.insertMany(bossesData);

  await builds.deleteMany({});

  //Create Bests Builds

  const headOneShot = await armors.findOne({
    name: "Slayer Mask",
    category: "head",
  });
  const bodyOneShot = await armors.findOne({
    name: "Slayer Mantle",
    category: "body",
  });
  const legsOneShot = await armors.findOne({
    name: "Slayer Boots",
    category: "legs",
  });
  const amuletOneShot = await amulet.findOne({ name: "Razorwire Necklace" });
  const ring1OneShot = await ring.findOne({ name: "Bloodletter's Insignia" });
  const ring2OneShot = await ring.findOne({ name: "Burden of the Follower" });
  const primaryOneShot = await weapons.findOne({
    name: "Crossbow",
    category: "primary",
  });
  primaryOneShot.weaponMod = await mods
    .findOne({ name: "Hot Shot" })
    .select(["_id", "img", "name"]);
  const secondaryOneShot = await weapons.findOne({
    name: "Twin Shot",
    category: "secondary",
  });
  secondaryOneShot.weaponMod = await mods
    .findOne({ name: "Fan of Knives" })
    .select(["_id", "img", "name"]);
  const meleeOneShot = await weapons.findOne({
    name: "Scar of The Jungle God",
    category: "melee",
  });

  const OneShotBuild = {
    name: "One Shot Slayer",
    description:
      "This Build is optimized for one shot enemies without caring about difficulty level",
    head: headOneShot,
    body: bodyOneShot,
    legs: legsOneShot,
    amulet: amuletOneShot,
    ring1: ring1OneShot,
    ring2: ring2OneShot,
    primary: primaryOneShot,
    secondary: secondaryOneShot,
    melee: meleeOneShot,
  };

  const headCrit = await armors.findOne({
    name: "Radiant Visage",
    category: "head",
  });
  const bodyCrit = await armors.findOne({
    name: "Radiant Protector",
    category: "body",
  });
  const legsCrit = await armors.findOne({
    name: "Radiant Greaves",
    category: "legs",
  });
  const amuletCrit = await amulet.findOne({ name: "Gunslinger's Charm" });
  const ring1Crit = await ring.findOne({ name: "Braided Thorns" });
  const ring2Crit = await ring.findOne({ name: "Devouring Loop" });
  const primaryCrit = await weapons.findOne({
    name: "Fusion Rifle",
    category: "primary",
  });
  const secondaryCrit = await weapons.findOne({
    name: "Machine Pistol",
    category: "secondary",
  });
  secondaryCrit.weaponMod = await mods
    .findOne({ name: "Hunter's Mark" })
    .select(["_id", "img", "name"]);
  const meleeCrit = await weapons.findOne({
    name: "Hero's Sword",
    category: "melee",
  });

  const CritBuild = {
    name: "Radiant Executionner (Crit Build)",
    description: "This build maximize chance and damage of critical hits",
    head: headCrit,
    body: bodyCrit,
    legs: legsCrit,
    amulet: amuletCrit,
    ring1: ring1Crit,
    ring2: ring2Crit,
    primary: primaryCrit,
    secondary: secondaryCrit,
    melee: meleeCrit,
  };

  const headDoT = await armors.findOne({
    name: "Warlord Skull",
    category: "head",
  });
  const bodyDoT = await armors.findOne({
    name: "Warlord Armor",
    category: "body",
  });
  const legsDoT = await armors.findOne({
    name: "Warlord Boots",
    category: "legs",
  });
  const amuletDoT = await amulet.findOne({ name: "Vulcan's Detonator" });
  const ring1DoT = await ring.findOne({ name: "Prismatic Diamond Ring" });
  const ring2DoT = await ring.findOne({ name: "Band of Discord" });
  const primaryDoT = await weapons.findOne({
    name: "Eye of the Storm",
    category: "primary",
  });
  const secondaryDoT = await weapons.findOne({
    name: "Hive Cannon",
    category: "secondary",
  });
  const meleeDoT = await weapons.findOne({
    name: "Scar of The Jungle God",
    category: "melee",
  });

  const DoTBuild = {
    name: "Explosive Warlord (DoT Build)",
    description: "Perfect for explosing enemies whithout caring of his life",
    head: headDoT,
    body: bodyDoT,
    legs: legsDoT,
    amulet: amuletDoT,
    ring1: ring1DoT,
    ring2: ring2DoT,
    primary: primaryDoT,
    secondary: secondaryDoT,
    melee: meleeDoT,
  };

  await builds.insertMany([OneShotBuild, CritBuild, DoTBuild]);

  await mongoose.connection.close();
}

main().catch((err) => console.log("!!DBERROR!!", err));
