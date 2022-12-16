const { shallowCopyFromList } = require("ejs/lib/utils");

const database = DatabaseServer.tables;
const item = database.templates.items
const traders = database.traders;
const locales = database.locales.global;
const globals = database.globals.config;


class lco
{
    static onLoadMod()
    {
        lco.createThing();
    }
    
    static createThing()
    {
        let lco = JsonUtil.clone(item["61a4c8884f95bc3b2c5dc96f"]); // 50ds rhino
        lco._id = "efh_weapon_taurus44";
        lco._props.Prefab.path = "assets/content/weapons/taurus44/white/weapon_chiappa_rhino_50ds_9x33r_container.bundle";
        item["efh_weapon_taurus44"] = lco;

        for (const locale in locales)
        {
            locales[locale].templates["efh_weapon_taurus44"] = {
                "Name": "[EFH] Taurus .44 Magnum Revolver",
                "ShortName": "T44M",
                "Description": "The Taurus 44 is a revolver manufactured by the Brazilian Taurus International firearm company. In its larger calibers it is marketed as a hunter's sidearm because it is a potent weapon with plenty of stopping power."
            };
        }
        database.templates.handbook.Items.push(
            {
                "Id": "efh_weapon_taurus44",
                "ParentId": "5b5f792486f77447ed5636b3",
                "Price": 34849,
            }
        );
        logger.info("[EFH] Loaded Taurus 44")
    }
}
//    static addThingtoTrader()
//    {
//        traders[peacekeeper].assort.items.push(
//			{
//				"_id": "efh_weapon_taurus44",
//				"_tpl": "efh_weapon_taurus44",
//				"parentId": "hideout",
//				"slotId": "hideout",
//				"upd": {
//					"UnlimitedCount": true,
//					"StackObjectsCount": 999999999
//				}
//			}
//        );
//        logger.info("wow i pushed the trader assort")
//        traders[peacekeeper].assort.barter_scheme["efh_weapon_taurus44"] = [
//			[
//			{
//				"count": 34849,
//				"_tpl": "5449016a4bdc2d6f028b456f"
//			}]
//        ];
//        traders[peacekeeper].assort.loyal_level_items["efh_weapon_taurus44"] = 1;
//    }

 //   static addThingToFilters() // thanks sam lmao
 //   {
 //       const isModFilterExist = (slots) => slots.findIndex((slot) => slot._name === "mod_scope");
 //       const isItemSlotsExist = (item) => item._props.Slots && item._props.Slots.length > 0;
 //       const filtersIncludeAttachment = (filterArray) => filterArray.includes("5b30b0dc5acfc400153b7124");
 //       for (const item of Object.values(database.templates.items)) 
 //       {
 //           if (isItemSlotsExist(item)) 
 //           {
 //               const index = isModFilterExist(item._props.Slots);
 //               if (index > -1 && filtersIncludeAttachment(item._props.Slots[index]._props.filters[0].Filter)) 
 //               {
 //                   item._props.Slots[index]._props.filters[0].Filter.push("scope_all_leupold_lco");
 //               }

module.exports = lco;