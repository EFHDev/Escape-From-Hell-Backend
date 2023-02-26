//plt_armr was here kekw
const locales = DatabaseServer.tables.locales.global;
const items = DatabaseServer.tables.templates.items;
const handbook = DatabaseServer.tables.templates.handbook.Items; // so it passed this point? nice
const chalk = require("chalk")
const config = require("../config.json"); // yeah same.. Runnin again kekw

//logger
const EFHMOD = require('../efh-mod');
const logger = require(EFHMOD.logger).logger;
const { colors } = require('../../../../core/efh/accessibility');

/**
 * A variety of scripts to change the in-game inspection menu information
 */
class QoLInspectInfo {

    /**
     * Change item background color based on price set 
     */
    static ItemRarityByColor() {
        let EditedItems = 0;
        for (const page of handbook) {
            if (page.Price === 0)
                continue;

            const item = items[page.Id];
            if (!items[page.Id]) //this might be pointless, after the first test if nothing pops this then we can remove this snippet
            {
                logger.logDebug("[QolInspectInfo] AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA IM NOT SUPPOSED TO APPEAR WHATEVER YOU DID FUCKED ME.");
                continue;
            }
            switch (item?._parent) {
                case "5485a8684bdc2da71d8b4567": {
                    const { CommonA, UncommonA, RareA, EpicA, MythicA, LegendaryA } = config.qol.ItemRarityThresholdAmmo;
                    const item = items[page.Id];
                    if (item?._type !== "Item" || !item?._props)
                        continue;

                    if (item?._parent === "5485a8684bdc2da71d8b4567" || "543be5cb4bdc2deb348b4568") {
                        if (page.Price < CommonA.High) { //if price is lower than or equal to CommonA.High
                            item._props.BackgroundColor = "grey";
                            EditedItems++
                            if (config.debug.deepdebug)
                                logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                            continue;
                        }
                        // if price is less than or equal to UncommonA.High and greater than or equal to UncommonA.Low
                        if (page.Price <= UncommonA.High && page.Price >= UncommonA.Low) {
                            item._props.BackgroundColor = "green";
                            EditedItems++
                            if (config.debug.deepdebug)
                                logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                            continue;
                        }
                        if (page.Price <= RareA.High && page.Price >= RareA.Low) {
                            item._props.BackgroundColor = "blue"
                            EditedItems++
                            if (config.debug.deepdebug)
                                logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                            continue;
                        }
                        if (page.Price <= EpicA.High && page.Price >= EpicA.Low) {
                            item._props.BackgroundColor = "violet";
                            EditedItems++
                            if (config.debug.deepdebug)
                                logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                            continue;
                        }
                        if (page.Price <= MythicA.High && page.Price >= MythicA.Low) {
                            item._props.BackgroundColor = "red";
                            EditedItems++
                            if (config.debug.deepdebug)
                                logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                            continue;
                        }
                        if (/* page.Price <= LegendaryA.High && */ page.Price >= LegendaryA.Low) {
                            item._props.BackgroundColor = "tracerYellow";
                            EditedItems++
                            if (config.debug.deepdebug)
                                logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                            continue;
                        }
                        logger.logError(`Couldnt set background color for item ${item?._name} with price of ${page.Price}`)
                    }
                }
                default: {
                    const { Common, Uncommon, Rare, Epic, Mythic, Legendary } = config.qol.ItemRarityThreshold;
                    const item = items[page.Id];
                    if (item?._type !== "Item" || !item?._props)
                        continue;

                    if (page.Price < Common.High) { //if price is lower than or equal to Common.High
                        item._props.BackgroundColor = "grey";
                        EditedItems++
                        if (config.debug.deepdebug)
                            logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                        continue;
                    }
                    // if price is less than or equal to Uncommon.High and greater than or equal to Uncommon.Low
                    if (page.Price <= Uncommon.High && page.Price >= Uncommon.Low) {
                        item._props.BackgroundColor = "green";
                        EditedItems++
                        if (config.debug.deepdebug)
                            logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                        continue;
                    }
                    if (page.Price <= Rare.High && page.Price >= Rare.Low) {
                        item._props.BackgroundColor = "blue"
                        EditedItems++
                        if (config.debug.deepdebug)
                            logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                        continue;
                    }
                    if (page.Price <= Epic.High && page.Price >= Epic.Low) {
                        item._props.BackgroundColor = "violet";
                        EditedItems++
                        if (config.debug.deepdebug)
                            logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                        continue;
                    }
                    if (page.Price <= Mythic.High && page.Price >= Mythic.Low) {
                        item._props.BackgroundColor = "red";
                        EditedItems++
                        if (config.debug.deepdebug)
                            logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                        continue;
                    }
                    if (/* page.Price <= Legendary.High && */ page.Price >= Legendary.Low) {
                        item._props.BackgroundColor = "tracerYellow";
                        EditedItems++
                        if (config.debug.deepdebug)
                            logger.logDebug(`${item?._name} had its background color set to ${chalk.hex(colors.green)(item._props.BackgroundColor)}`);
                        continue;
                    }
                    logger.logError(`Couldnt set background color for item ${item?._name} with price of ${page.Price}`)
                }
            }

        }
        logger.logDebug(`Background of ${chalk.hex(colors.blue)(EditedItems)} items changed`);
    }
    static AddPenDamagetoDesc() {
        for (const id in items) {
            if (items[id]._parent !== "5485a8684bdc2da71d8b4567")
                continue;

            const item = items[id];

            for (const localeID in locales) {
                const locale = locales[localeID].templates[item._id];

                if (["Caliber12g", "Caliber20g", "Caliber23x75"].includes(item._props.Caliber)) {
                    if (item._props.buckshotBullets === "0") {
                        locale.Description = `Penetration: ${item._props.PenetrationPower}\nDamage per pellet: ${item._props.Damage}\nRound Type: Slug\n\n${locale.Description}`;
                        continue;
                    }
                    locale.Description = `Penetration: ${item._props.PenetrationPower}\nDamage per pellet: ${item._props.Damage}\nRound Type: Buck\nProjectile Count: ${item._props.ProjectileCount}\n\n${locale.Description}`;
                    continue;
                }
                locale.Description = `Penetration: ${item._props.PenetrationPower}\nDamage: ${item._props.Damage}\n\n${locale.Description}`;
            }
        }
    }
}
module.exports = QoLInspectInfo;