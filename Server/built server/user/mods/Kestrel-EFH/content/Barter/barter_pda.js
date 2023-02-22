"use strict";
const db = DatabaseServer.tables;
const localessource = db.locales.global;
const item = db.templates.items;
class pdaThing {
  static onLoadMod() {
    pdaThing.CreatePDA();
    pdaThing.Yeetbitchintotrader();
  }

  static CreatePDA() {
    logger.log("Creating Secure PDA Barter Item"); // For debugging purposes
    let clonedItem = JsonUtil.clone(item["59e3658a86f7741776641ac4"]);
    clonedItem._id = "efh_barter_pda";
    clonedItem._props.Weight = 0.544;
    clonedItem._props.Width = 1;
    clonedItem._props.Height = 2;
    clonedItem._props.Prefab.path = "assets/content/items/friend-items/ssh/efh_ssh_barter.bundle";
    clonedItem._props.Name = "Secure PDA";
    clonedItem._props.Description = "A secure PDA, imported from Ukraine, contains sensitive data. Could be valuable.";

    item["efh_barter_pda"] = clonedItem;

    for (const localeID in localessource) {
      localessource[localeID].templates["efh_barter_pda"] = {
        "Name": "Secure PDA",
        "ShortName": "Secure PDA",
        "Description": "A secure PDA, imported from Ukraine, contains sensitive data. Could be valuable."
      };
    }

    db.templates.handbook.Items.push({
      "Id": "efh_barter_pda",
      "ParentId": "5b5f742686f774093e6cb4ff",
      "Price": 1000
    }
    );
    logger.log("Did CreatePDA")
  }

  static Yeetbitchintotrader() {
    const db = DatabaseServer.tables;
    const tradersource = db.traders;
    const ragfair = "ragfair";
    const lineman = "5a7c2eca46aef81a7ca2145d";
    const assort_items = {
      "_id": "efh_barter_pda",
      "_tpl": "efh_barter_pda",
      "parentId": "hideout",
      "slotId": "hideout",
      "upd": {
        "UnlimitedCount": true,
        "StackObjectsCount": 999999999
      }
    };
    const barter_scheme = [
      [{
        "count": 1,
        "_tpl": "59e3658a86f7741776641ac4"
      }]
    ];
    tradersource[ragfair].assort.items.push(assort_items);
    tradersource[ragfair].assort.barter_scheme["efh_barter_pda"] = barter_scheme;
    tradersource[ragfair].assort.loyal_level_items["efh_barter_pda"] = 1;
  }
}
logger.log("Reached end of file")

module.exports = pdaThing;