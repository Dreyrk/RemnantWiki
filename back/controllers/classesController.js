import CODES from "../utils/httpCodes.js";

import armors from "../models/armors.js";
import weapons from "../models/weapons.js";
import trait from "../models/trait.js";
import mods from "../models/mods.js";
import armorSet from "../models/armorSet.js";

const classesController = {
  scrapper: async (req, res) => {
    try {
      const head = await armors
        .findOne({
          armorSet: "Scrapper",
          category: "head",
        })
        .select(["_id", "img"]);
      const body = await armors
        .findOne({
          armorSet: "Scrapper",
          category: "body",
        })
        .select(["_id", "img"]);
      const legs = await armors
        .findOne({
          armorSet: "Scrapper",
          category: "legs",
        })
        .select(["_id", "img"]);
      const primary = await weapons
        .findOne({
          name: "Shotgun",
          category: "primary",
        })
        .select(["_id", "img"]);
      const secondary = await weapons
        .findOne({
          name: "Repeater Pistol",
          category: "secondary",
        })
        .select(["_id", "img"]);
      const melee = await weapons
        .findOne({
          name: "Scrap Hammer",
          category: "melee",
        })
        .select(["_id", "img"]);
      const traits = await trait
        .find({
          name: { $in: ["Vigor", "Endurance", "Warrior"] },
        })
        .select(["_id", "img"]);
      const weaponMod = await mods
        .findOne({ name: "Hot Shot" })
        .select(["_id", "img"]);
      const img = await armorSet
        .findOne({ name: "Scrapper Set" })
        .select(["_id", "img.original", "img.skin"]);

      const description =
        "The Scrapper excels in close-range combat. Wielding a shotgun and a hammer, and decked in heavy armor, the Scrapper can take much more damage before needing to heal and is highly proficient at dispatching enemies up close and without too much need for accuracy. The Scrapper also starts with a weapon mod that deals Fire Damage, with a chance to inflict a damage-over-time effect which is highly effective against The Root, who are the most prominent enemy types early on.";

      const data = {
        name: "Scrapper",
        other: img,
        head,
        body,
        legs,
        primary,
        secondary,
        melee,
        traits,
        weaponMod,
        description,
      };

      res.status(CODES.SUCCESS).send({ data });
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
  cultist: async (req, res) => {
    try {
      const head = await armors
        .findOne({
          armorSet: "Cultist",
          category: "head",
        })
        .select(["_id", "img"]);
      const body = await armors
        .findOne({
          armorSet: "Cultist",
          category: "body",
        })
        .select(["_id", "img"]);
      const legs = await armors
        .findOne({
          armorSet: "Cultist",
          category: "legs",
        })
        .select(["_id", "img"]);
      const primary = await weapons
        .findOne({
          name: "Coach Gun",
          category: "primary",
        })
        .select(["_id", "img"]);
      const secondary = await weapons
        .findOne({
          name: "Repeater Pistol",
          category: "secondary",
        })
        .select(["_id", "img"]);
      const melee = await weapons
        .findOne({
          name: "Scrap Hatchet",
          category: "melee",
        })
        .select(["_id", "img"]);
      const traits = await trait
        .find({
          name: { $in: ["Vigor", "Endurance", "Spirit"] },
        })
        .select(["_id", "img"]);
      const weaponMod = await mods
        .findOne({ name: "Mender's Aura" })
        .select(["_id", "img"]);

      const img = await armorSet
        .findOne({ name: "Cultist's Set" })
        .select(["_id", "img.original", "img.skin"]);

      const description =
        "The Ex-Cultist is equipped with a coach gun which fares better at range than the Scrapper's shotgun, but only slightly. The Ex-Cultist's strengths lie in their ability to be self-sufficient. Starting with a Weapon Mod that heals them and their teammates is very valuable when learning the ropes, and will also help conserve on consumables for when you really need them. During co-op play, their Weapon Mod is even more important as it allows them to save Dragon Heart charges for reviving teammates instead of healing. Skillful management of this Weapon Mod's ability allows for a good amount of survivability.";

      const data = {
        name: "Cultist",
        other: img,
        head,
        body,
        legs,
        primary,
        secondary,
        melee,
        traits,
        weaponMod,
        description,
      };

      res.status(CODES.SUCCESS).send({ data });
    } catch (e) {
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
  hunter: async (req, res) => {
    try {
      const head = await armors
        .findOne({
          armorSet: "Hunter",
          category: "head",
        })
        .select(["_id", "img"]);
      const body = await armors
        .findOne({
          armorSet: "Hunter",
          category: "body",
        })
        .select(["_id", "img"]);
      const legs = await armors
        .findOne({
          armorSet: "Hunter",
          category: "legs",
        })
        .select(["_id", "img"]);
      const primary = await weapons
        .findOne({
          name: "Hunting Rifle",
          category: "primary",
        })
        .select(["_id", "img"]);
      const secondary = await weapons
        .findOne({
          name: "Repeater Pistol",
          category: "secondary",
        })
        .select(["_id", "img"]);
      const melee = await weapons
        .findOne({
          name: "Scrap Sword",
          category: "melee",
        })
        .select(["_id", "img"]);
      const traits = await trait
        .find({
          name: { $in: ["Vigor", "Endurance", "Shadow Walker"] },
        })
        .select(["_id", "img"]);
      const weaponMod = await mods
        .findOne({ name: "Hunter's Mark" })
        .select(["_id", "img"]);

      const img = await armorSet
        .findOne({ name: "Hunter Set" })
        .select(["_id", "img.original", "img.skin"]);

      const description =
        "The Hunter starts off with weapons and mods that center around dealing damage and exploiting enemy weak spots. They excel in dealing damage from afar but may have difficulty in enclosed spaces with their long gun. The Hunter's starting Trait is also conducive to a stealthy playstyle or for preventing ambushes which can offer some survivability. Their Weapon Mod allows them to see enemies through walls, allowing for strategizing and pinpointing certain enemies from within cover. It also increases their chance to critically hit marked opponents, further increasing damage potential.";

      const data = {
        name: "Hunter",
        other: img,
        head,
        body,
        legs,
        primary,
        secondary,
        melee,
        traits,
        weaponMod,
        description,
      };

      res.status(CODES.SUCCESS).send({ data });
    } catch (e) {
      console.log(e);
      res.sendStatus(CODES.INTERNAL_SERVER_ERROR);
    }
  },
};

export default classesController;
