"use strict";

const db = DatabaseServer.tables;
const items = db.templates.items
const locales = db.locales.global;
const { parent } = require('../../util/modding-keys');
const { tid } = require('../../util/modding-keys');
const {itemp} = require('../../util/modding-keys');
global.logger = require("../../../../../core/util/logger").logger;
const ragfair = tid.ragfair
const tp = parent


class sshitem{
    static onLoadMod()
    {
        sshitem.CreateSSH();
        sshitem.Yeetbitchintotrader();
        db.templates.prices["efh_ssh_barter"] = 25605;
    }
    
    static CreateSSH()
    {
		logger.logDebug("Creating SSH Barter Item") //For debugging purposes
        let ssh = JsonUtil.clone(items["5c488a752e221602b412af63"]);
        ssh._id = "efh_ssh_barter"; //ID of the item stoopid
        ssh.weight = 0.447; //Self explantory for the rest
		ssh.width = 1;
		ssh._props.Height = 2;
        ssh._props.ExaminedByDefault = true;
        ssh._props.Prefab.path = "assets/content/items/friend-items/ssh/efh_ssh_barter.bundle";
        items["efh_ssh_barter"] = ssh;
        {
            for (const localeID in locales) {
                locales[localeID].templates["efh_ssh_barter"] = {
                    "Name": "sex",
                    "ShortName": "sex",
                    "Description": "The L85A2 is a gas-operated, rotating bolt, magazine fed British assault rifle in a bullpup layout. A2 variant is the result of a significant upgrade in the early 2000s by Heckler & Koch of SA80, which was designed in the 1970s to 1980s."
                };
        }
    }

        db.templates.handbook.Items.push(
        {
            "Id": "efh_ssh_barter",
            "ParentId": tp.Valuables,
            "Price": 14320, 
        });
        logger.logSuccess("CreateSSH")
    }

    static Yeetbitchintotrader() //Add to flea and other traders too ig.
    {
        const assort_items = {
            "_id": "efh_ssh_barter",
            "_tpl": "efh_ssh_barter",
            "parentId": "hideout",
            "slotId": "hideout",
            "upd": {
                "UnlimitedCount": true,
                "StackObjectsCount": 999999999
            }
        }

        const barter_scheme = [
			[
			{
				"count": 5,
				"_tpl": "5449016a4bdc2d6f028b456f"
			}]
        ];
        tradersource[ragfair].assort.items.push(assort_items);
        tradersource[ragfair].assort.barter_scheme["efh_ssh_barter"] = barter_scheme
        tradersource[ragfair].assort.loyal_level_items["efh_ssh_barter"] = 1;
        logger.logSuccess("Added to Ragfair")
    }
}

module.exports = sshitem;
logger.logSuccess("If you read this, your gay.")