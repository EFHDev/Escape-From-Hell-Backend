"use strict";
const chalk = require('chalk');
const efhlogo = ((chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white(']')));
const database = DatabaseServer.tables
const traders = DatabaseServer.tables.traders
const config = require("../config.json");

class UnlockTradersClass
{
    static onLoadMod()
    {

        for (let trader in traders)
        {
            if (config.unlockTraders === true)
            {
                traders[trader].base.unlockedByDefault = ["True"]
                logger.debug(efhlogo + "Unlocked Trader " + chalk.blue(traders[trader].base.nickname) + "...")
            }
        }
    }
}

module.exports = UnlockTradersClass
