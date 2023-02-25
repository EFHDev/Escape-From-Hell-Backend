//const chalk = require('chalk');
//const efhlogo = ((chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white(']')));
//const modPath = `${ModLoader.getModPath("EFH-CORE")}`;
//
//class AddPlayerNametoBotPool {
//    static onLoadMod(playerName) {
//        const playerName = pmcProfile.Info.Nickname;
//
//        if (playerName)
//        {
//            const bots = this.databaseServer.getTables().bots.types;
//
//            if (bots["bear"])
//            {
//                bots["bear"].firstName.push(playerName);
//                bots["bear"].firstName.push(`Evil ${playerName}`);
//            }
//            
//            if (bots["usec"])
//            {
//                bots["usec"].firstName.push(playerName);
//                bots["usec"].firstName.push(`Evil ${playerName}`);
//            } 
//        
//      }
//      logger.info(efhlogo + ".[Fun]" + ` Added ${playerName} to botPool`);
//    }
//  }
//
//module.exports = AddPlayerNametoBotPool
