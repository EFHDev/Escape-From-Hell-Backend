"use strict";

const sshItem = require("./content/barter/ssh_barter.js");
const pda = require("./content/barter/barter_pda.js");
const AtlasStone = require("./content/barter/atlas_stone");
const UnlockTradersClass = require("./configer/unlockTraders.js");
const Items = require('./QOL/Items.js');
const QoLInspectInfo = require("./QoL/MoreItemInfo");
const config = require("./config.json");
const EFHMOD = require('./efh-mod');

function onLoadMod() {
  global.logger = require(EFHMOD.logger).logger;
  // Configs

  // Items // nope
  sshItem.onLoadMod(); 
  pda.onLoadMod();
  AtlasStone.onLoadMod();

  // QOL //
  Items.adjustItems();
  QoLInspectInfo.ItemRarityByColor();


  if (config.unlockTraders)
    UnlockTradersClass.UnlockTradersByDefault();

}

class Mod {//It could, since this is technickly the first thing loaded? but theres no defanition for ID here
  constructor() {
    //Logger.info("Kestrel-EFH"); // i think it has to do with this `maybe` because Logger doesn't exist
    ModLoader.onLoad["Kestrel-EFH"] = onLoadMod;
  }
}

module.exports.Mod = new Mod();