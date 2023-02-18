"use strict";
const ragfair = "ragfair"; //ragfair ID
const lineman = "5a7c2eca46aef81a7ca2145d"; //trader id
const db = DatabaseServer.tables;
const item = db.templates.items
const d_trader = db.traders;
const d_locales = db.locales.global;

class sshThing
{
    static onLoadMod()
    {
        sshThing.CreateSSH();
        sshThing.AddItemToTraders();
    }
    
    static CreateSSH()
    {
		logger.logDebug("Creating SSH Barter Item") //For debugging purposes
        let pk = JsonUtil.clone(item["59e3658a86f7741776641ac4"]); 
        pk._id = "efh_ssh_barter"; //ID of the item stoopid
        pk._props.Weight = 0.447; //Self explantory for the rest
		pk._props.Width = 1;
		pk._props.Height = 2;
        pk._props.Prefab.path = "assets/content/items/friend-items/ssh/efh_ssh_barter.bundle";
        item["efh_ssh_barter"] = pk;

        for (const localeID in d_locales)
        {
            d_locales[localeID].templates["efh_ssh_barter"] = {
                "Name": "<color=#FFFFFF>[EFH] Servph Corp PMC Group 1-1 Nikita Obliterators Helicopter Figureine</color>",
                "ShortName": "Helicopter Figureine",
				"Description": "The small figurine from Servph Corpp PMC Group is a meticulously crafted model depicting the fearsome Nikita Obliterators in action. The figurine features a highly detailed helicopter branded with the Servph Corpp Task Force 1-1 logo, soaring forward with intense speed and agility. A skilled sniper is shown aiming a powerful rifle out of the helicopter, ready to take down any target with ruthless precision. This figurine is a perfect representation of the highly trained, specialized mercenaries of the Servph Corpp PMC Group, who are renowned for their strategic prowess and combat skills. It is a must-have for military enthusiasts and collectors who appreciate the skill and bravery of these elite soldiers."
            };
        }

        db.templates.handbook.Items.push(
        {
            "Id": "efh_ssh_barter",
            "ParentId": "5b5f742686f774093e6cb4ff", //Roubles
            "Price": 14320, //How many roubles to buy
        });
    }

    static AddItemToTraders() //Add to flea and other traders too ig.
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
        d_trader[ragfair].assort.items.push(assort_items);
        d_trader[ragfair].assort.barter_scheme["efh_ssh_barter"] = barter_scheme
        d_trader[ragfair].assort.loyal_level_items["efh_ssh_barter"] = 1;
    }
}

module.exports = sshThing;