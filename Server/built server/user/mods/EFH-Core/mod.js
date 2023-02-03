"use strict";
const chalk = require('chalk');
const efhlogo = ((chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white(']')));
const db = require("./db.json");
const bundles = require("./bundles.json"); // do i even need to do this
const Taurus44 = require("./content/taurus.js");
const SchlaggerDrink = require("./content/schlagger.js");
const configpoem = require("./config.json");
const RationCard = require('./content/ration-card');

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
        }
        else if(!configpoem?.poems == true)
        {
            ModLoader.onLoad["EFH-Core"] = Taurus44.onLoadMod;
            ModLoader.onLoad["EFH-Core"] = SchlaggerDrink.onLoadMod;
            ModLoader.onLoad["EFH-Core"] = RationCard.onLoadMod;

        }
    }
}

module.exports.Mod = new Mod();