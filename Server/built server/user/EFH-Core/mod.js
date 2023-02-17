"use strict";
const chalk = require('chalk');
const efhlogo = ((chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white(']')));
const db = require("./db.json");
const bundles = require("./bundles.json"); // do i even need to do this
const Taurus44 = require("./content/taurus.js");
const SchlaggerDrink = require("./content/schlagger.js");
const configpoem = require("./config.json");
const RationCard = require('./content/ration-card');
const SSHFigure = require('./content/efh_ssh_barter');
const KattoPatch = require('./content/efh_katto_patch');
const AtlasStone = require('./content/atlas_stone');

class Mod
{
    constructor()
    {
        if(!configpoem?.poems == false)
        {
            //console.log(chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white.bold(']'))
            console.log(chalk.greenBright.bold`
            ******** ******** **      **         ******    *******   *******   ********
           /**///// /**///// /**     /**        **////**  **/////** /**////** /**///// 
           /**      /**      /**     /**       **    //  **     //**/**   /** /**      
           /******* /******* /**********      /**       /**      /**/*******  /******* 
           /**////  /**////  /**//////**      /**       /**      /**/**///**  /**////  
           /**      /**      /**     /**      //**    **//**     ** /**  //** /**      
           /********/**      /**     /**       //******  //*******  /**   //**/********
           //////// //       //      //         //////    ///////   //     // //////// "
           Thank you for playing! `);
            Logger.info(efhlogo + " We awoke to find our equipment was missing, So we retreated, dodging gunfire, in distress.");
            Logger.info(efhlogo + " Upon arrival, we discovered a bleak reality, With only two cans of tushonka left to sustain us.")
            Logger.info(efhlogo + ' Starvation loomed, leaving us with a dire choice. Death or violence, with no middle ground to suffice.');
            ModLoader.onLoad["EFH-Core"] = Taurus44.onLoadMod;
            ModLoader.onLoad["EFH-Core"] = SchlaggerDrink.onLoadMod;
            ModLoader.onLoad["EFH-Core"] = RationCard.onLoadMod;
			ModLoader.onLoad["EFH-Core"] = SSHFigure.onLoadMod;
			ModLoader.onLoad["EFH-Core"] = KattoPatch.onLoadMod;
			ModLoader.onLoad["EFH-Core"] = AtlasStone.onLoadMod;
        }
        else if(!configpoem?.poems == true)
        {
            ModLoader.onLoad["EFH-Core"] = Taurus44.onLoadMod;
            ModLoader.onLoad["EFH-Core"] = SchlaggerDrink.onLoadMod;
            ModLoader.onLoad["EFH-Core"] = RationCard.onLoadMod;
			ModLoader.onLoad["EFH-Core"] = SSHFigure.onLoadMod;
			ModLoader.onLoad["EFH-Core"] = KattoPatch.onLoadMod;
			ModLoader.onLoad["EFH-Core"] = AtlasStone.onLoadMod;

        }
    }
}

module.exports.Mod = new Mod();