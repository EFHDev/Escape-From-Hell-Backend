"use strict";

const { get } = require("https");
const { config } = require("process");
const lco = require("./src/script.js");
const configpoem = require("./config.json");

class Mod
{
    constructor()
    {
        if(!configpoem?.poems == false)
        {
            Logger.info("[EFH] When we came to, our gear was gone, in defeat we ran home, doding bullets left and right.");
            Logger.info("[EFH] As we arrived home, we realised, our food rations are low, only 2 tuchonka to our name.")
            ModLoader.onLoad["EFH-Weapons"] = lco.onLoadMod;
        }
        else if(!configpoem?.poems == true)
        {
            ModLoader.onLoad["EFH-Weapons"] = lco.onLoadMod;
        }
    }
}
   

module.exports.Mod = new Mod();