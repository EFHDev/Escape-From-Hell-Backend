"use strict";
const chalk = require('chalk');
const efhlogo = ((chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white(']')));
const database = DatabaseServer.tables
const traders = DatabaseServer.tables.traders
const config = require("../config.json");
const EFHMOD = require('../efh-mod');
const logger = require(EFHMOD.logger).logger;
const { colors } = require('../QoL/accessability');

class UnlockTradersClass
{
    static onLoadMod()
    {
        logger.logDebug(" Unlock Traders is set to " + chalk.green(config.unlockTraders))
        for (let trader in traders)
        {
            if (config.unlockTraders === true)
            {
                if (traders[trader].base.nickname == "")
                {
                    logger.logDebug(efhlogo + " Ignored  Trader " + chalk.hex("#ff8c00")(" Ragfair") + "...") //Because ragfair cant be unlocked this way lol
                }
                else{
                    traders[trader].base.unlockedByDefault = ["True"]
                    logger.logSuccess(efhlogo + " Unlocked Trader " + chalk.hex(colors.blue)(traders[trader].base.nickname) + "...")
                }
            }
        }
    }
}

module.exports = UnlockTradersClass
