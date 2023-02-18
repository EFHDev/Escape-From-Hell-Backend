"use strict";

const sshThing = require("./content/barter/ssh_barter.js");
const UnlockTradersClass = require("./configer/unlockTraders.js")
const config = require("./config.json");

class Mod
{
    constructor()
    {
            Logger.info("Kestrel-EFH");
            ModLoader.onLoad["Kestrel-EFH"] = sshThing.onLoadMod;
            ModLoader.onLoad["Kestrel-EFH"] = UnlockTradersClass.onLoadMod;
    }
}

module.exports.Mod = new Mod();