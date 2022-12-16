"use strict";

const SCARH = require("./src/scarh.js");

class Mod
{
    constructor()
    {
            Logger.info("Loading: FN Herstal SCAR-H Assault Rifle 7.62x51 juicer");
            ModLoader.onLoad["SamSWAT-SCARH"] = SCARH.onLoadMod;
    }
}

module.exports.Mod = new Mod();