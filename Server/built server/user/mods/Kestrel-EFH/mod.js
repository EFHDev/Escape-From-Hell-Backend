"use strict";

const sshitem = require("./content/barter/ssh_barter.js");
const pdaThing = require("./content/barter/barter_pda.js");
const UnlockTradersClass = require("./configer/unlockTraders.js");


function onLoadMod() {
  global.logger = require("../../../core/util/logger").logger;
 // Configs {
  UnlockTradersClass.onLoadMod();
  // Items
  sshitem.onLoadMod();
  pdaThing.onLoadMod();
}

class Mod {
  constructor() {
    Logger.info("Kestrel-EFH");
    ModLoader.onLoad["Kestrel-EFH"] = onLoadMod;
  }
}

module.exports.Mod = new Mod();