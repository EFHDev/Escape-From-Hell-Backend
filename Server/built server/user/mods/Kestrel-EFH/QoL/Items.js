const items = DatabaseServer.tables.templates.items;
const config = require("../config.json")
const chalk = require('chalk');
const EFHMOD = require('../efh-mod');
const logger = require(EFHMOD.logger).logger;


class Items {
    /**
     * Iterate through and adjust items based on _type property and configurations set
     */
    static adjustItems() {

        this.ExaminedItems = 0;
        this.DiscardLimitChange = 0;
        this.StackAdjustedItems = 0;


        for (const id in items) {
            const item = items[id];

            if (!item._props) {
                logger.logDebug(`Item ${id} does not have _props property`);
                continue;
            }

            switch (item._type) {
                case "Node":
                    this.itemIsNode(item);
                    break;

                case "Item":
                    this.itemIsItem(item);
                    break;

                default:
                    logger.logDebug(`Item ${id} _type ${item._type} isn't handled`);
            }
        }

        logger.logDebug(chalk.red(`DiscardLimitChange: ${this.DiscardLimitChange} || ExaminedItems: ${this.ExaminedItems} || StacksAdjusted: ${this.StackAdjustedItems}`));
    }

    /**
     * Item type is "Node" and is adjusted here based on configurations set
     */
    static itemIsNode(item) {
        if (config.qol.unlimitedDiscard)
            this.RemoveDiscardLimit(item);

        if (config.qol.examineAll)
            this.ExamineItem(item);
    }


    /**
    * Item type is "Item" and is adjusted here based on configurations set
    */
    static itemIsItem(item) {
        if (config.qol.adjustAmmoStacks && item._parent === '5485a8684bdc2da71d8b4567')
            this.StackSizes(item);
    }

    /**
     * Remove item discard limit by setting to -1 (unlimited)
     */
    static RemoveDiscardLimit(item) {
        if (!item._props?.DiscardLimit)
            return;

        item._props.DiscardLimit = -1;

        if (config.debug.deepdebug)
            logger.logSuccess(`Item ${item._name} can be discarded unlimitedly`);

        this.DiscardLimitChange++
    }

    /**
     * Examine item by default
     */
    static ExamineItem(item) {
        if (item._props?.ExaminedByDefault)
            return;

        item._props.ExaminedByDefault = true;

        if (config.debug.deepdebug)
            logger.logDebug(`Examined Item ${item._name}`);

        this.ExaminedItems++
    }

    static StackSizes(item) {
        if (["Caliber26x75",
            "Caliber40x46",
            "Caliber127x108",
            "Caliber40mmRU",
            "Caliber30x29"].includes(item._props.Caliber)) //mounted gun ammo or flares
            return;

        switch (item._props.Caliber) {
            case "Caliber9x19PARA":
            case "Caliber1143x23ACP":
            case "Caliber762x25TT":
            case "Caliber9x18PM":
            case "Caliber9x18PMM":
            case "Caliber9x33R":
            case "Caliber57x28":
            case "Caliber46x30":
            case "Caliber9x21":
                item._props.StackMaxSize = "160"
                if (config.debug.deepdebug)
                    logger.logDebug(`Changed Stacksize of ${item._name} to ${chalk.red(item._props.StackMaxSize)}`);
                this.StackAdjustedItems++
                break;

            case "Caliber762x39":
            case "Caliber9x39":
            case "Caliber366TKM":
            case "Caliber545x39":
            case "Caliber556x45NATO":
            case "Caliber762x35":
            case "Caliber762x51":
            case "Caliber762x54R":
                item._props.StackMaxSize = "120"
                if (config.debug.deepdebug)
                    logger.logDebug(`Changed Stacksize of ${item._name} to ${chalk.red(item._props.StackMaxSize)}`);
                this.StackAdjustedItems++
                break;

            case "Caliber12g":
            case "Caliber20g":
            case "Caliber23x75":
            case "Caliber127x55":
            case "Caliber86x70":
                item._props.StackMaxSize = "40"
                if (config.debug.deepdebug)
                    logger.logDebug(`Changed Stacksize of ${item._name} to ${chalk.red(item._props.StackMaxSize)}`);
                this.StackAdjustedItems++
                break;

            default:
                logger.logDebug(`AYYYYYY THIS CALIBER ${item._props.Caliber} IS SUMMM BOOLSHIITTTEEEET ${item._name}`);
                break;
        }
    }
}
module.exports = Items;