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
            Logger.info(efhlogo + " When we came to, our gear was gone, in defeat we ran home, doding bullets left and right.");
            Logger.info(efhlogo + " As we arrived home, we realised, our food rations are low, only 2 tuchonka to our name.")
            Logger.info(efhlogo + ' It would only be a matter of days until we starved. Its death or killing. No inbetween.');
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