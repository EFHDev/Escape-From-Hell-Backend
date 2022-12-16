const { shallowCopyFromList } = require("ejs/lib/utils");
const { isCollection } = require("mathjs");

const database = DatabaseServer.tables;
const item = database.templates.items
const traders = database.traders;
const locales = database.locales.global;
const globals = database.globals.config;


class t44m
{
    static onLoadMod()
    {
        t44m.createThing();
    }
    static createThing()
    {
        const Grips = (slots) => slots.findIndex((slot) => slot._name === "pistol_grip");
        let t44m = JsonUtil.clone(item["61a4c8884f95bc3b2c5dc96f"]); // 50ds rhino
        t44m._id = "efh_weapon_taurus44";
        t44m._props.Prefab.path = "assets/content/weapons/taurus44/white/weapon_chiappa_rhino_50ds_9x33r_container.bundle";
        Grips._required = false;
        item["efh_weapon_taurus44"] = t44m;

        for (const locale in locales)
        {
            locales[locale].templates["efh_weapon_taurus44"] = {
                "Name": "[EFH] Taurus .44 Magnum Revolver",
                "ShortName": "T44M",
                "Description": "The Taurus 44 is a revolver manufactured by the Brazilian Taurus International firearm company. In its larger calibers it is marketed as a hunter's sidearm because it is a potent weapon with plenty of stopping power."
            };
        }
        traders["ragfair"].assort.items.push({
            "default": {
                "unlimited": true,
                "stack": 999999999
              },
              "currentStack": 999999999,
              "loyalty": 2,
              "barter_scheme": [
                [
                  {
                    "count": 15225,
                    "_tpl": "5449016a4bdc2d6f028b456f"
                  }
                ]
              ],
              "items": [
                {
                  "_id": "efh_weapon_taurus44",
                  "_tpl": "efh_weapon_taurus44",
                  "parentId": "hideout",
                  "slotId": "hideout",
                  "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 99999999
                  }
                }
              ]
            }),
        logger.info("pushed ragfair assort t44")
        database.templates.handbook.Items.push(
            {
                "Id": "efh_weapon_taurus44",
                "ParentId": "5b5f792486f77447ed5636b3",
                "Price": 34849,
            }
        );
        logger.info("[EFH] Loaded Taurus 44")
    }
   static addThingtoTrader()
   {
       traders[peacekeeper].assort.items.push(
		{
			"_id": "efh_weapon_taurus44",
			"_tpl": "efh_weapon_taurus44",
			"parentId": "hideout",
			"slotId": "hideout",
			"upd": {
				"UnlimitedCount": true,
				"StackObjectsCount": 999999999
			}
		}
       );
       logger.info("wow i pushed the trader assort")
       traders[peacekeeper].assort.barter_scheme["efh_weapon_taurus44"] = [
		[
		{
			"count": 34849,
			"_tpl": "5449016a4bdc2d6f028b456f"
		}]
       ];
       traders[peacekeeper].assort.loyal_level_items["efh_weapon_taurus44"] = 1;
   }
}
module.exports = t44m;