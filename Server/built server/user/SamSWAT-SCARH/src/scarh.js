/*
 * I
 * ONLY
 * HAVE
 * TWO
 * MAGS
 * LEFT
 */

"use strict";
// Apparently we need to put our constant declarations up here now.
	const modPath = `${ModLoader.getModPath("SamSWAT-SCARH")}`;
	const db = JsonUtil.deserialize(VFS.readFile(`${modPath}/db.json`)); // wow, thats a lot prettier than how it was in 12.8
	const prapor = "54cb50c76803fa8b248b4571";
	const ragfair = "ragfair"; // lmao

class Taurus44
{
    static onLoadMod()
    {
		Taurus44.doTheManualCreationThingy(db, modPath);
		Taurus44.traderFunctionForOrganizationsSake(prapor, db);
		Taurus44.traderFunctionForOrganizationsSake(ragfair, db); // ragfair is apparently bork.
		Taurus44.createAK12Preset();
		Taurus44.addRiflesToPrapor();
		Taurus44.addToMastery("efh_weapon_taurus44",4);
	}
	
	static doTheManualCreationThingy(db, modPath)
	{
		for (const itemKey in db.items)
		{
			const path = db.items[itemKey];
			const item = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
			DatabaseServer.tables.templates.items[item._id] = item;
		}
		for (const itemKey in db.templates.handbook)
		{
			const path = db.templates.handbook[itemKey];
			const item = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
			DatabaseServer.tables.templates.handbook.Items.push(item)
		}
		
		for (const localeID in DatabaseServer.tables.locales.global) // You ever just steal code from someone else that was stolen from you? Yeah man me too
			{
				for (const langKey in db.locales.en.templates)		// LM4 ur cool
				{
					const path = db.locales.en.templates[langKey];
					const lang = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
					DatabaseServer.tables.locales.global[localeID].templates[langKey] = lang;
				}
			}
	}
	
	static createAK12Preset()
	{ // stole this code from the ATL-15. atlas, if you're reading this, ily <3
		// Copy a base preset that we *know* is valid. In this case, it's Saiga 12ga NERFGUN.
		let item = JsonUtil.clone(DatabaseServer.tables.globals.ItemPresets["5ddbbeac582ed30a6134e577"]);
        // Add to database.
        DatabaseServer.tables.globals.ItemPresets["taurus44defaultID"] = item;

        // Change preset.
        item._id = "taurus44defaultID"; // unique presetID
        item._type = "Preset"; // Keep it as is or else the game implodes.
        item._changeWeaponName = false; // False will use itemShortName, true will add presetName.
        item._name = "STD"; // preset name
        item._encyclopedia = "efh_weapon_taurus44"; // using this will enable "Stock preset" see:"Server\packages\eft-database\db\locales\global\en.json.interface.Stock build ("Stock preset")

        item._items = []; // remove parts from WeaponPreset
        item._parent = 'taurus44defaultID_parentID'; // Unique parentID for part.
		
		// ok now we add stuff to the preset
		item._items.push(
        {
            "_id": "taurus44defaultID_parentID", // this objects uniqueParentID
            "_tpl": "efh_weapon_taurus44" // weapon base
        },
        {
			"_id": "624d7a3691f0160c7324c3f6",
			"_tpl": "619f54a1d25cbd424731fb99",
			"parentId": "taurus44defaultID_parentID",
			"slotId": "mod_magazine"
		  },
		  {
			"_id": "624d7a3691f0160c7324c3f7",
			"_tpl": "619f4cee4c58466fe1228435",
			"parentId": "taurus44defaultID_parentID",
			"slotId": "mod_sight_rear"
		  },
		  {
			"_id": "624d7a3691f0160c7324c3f8",
			"_tpl": "619f4d304c58466fe1228437",
			"parentId": "taurus44defaultID_parentID",
			"slotId": "mod_sight_front"
		  },
		  {
			"_id": "624d7a3691f0160c7324c3f9",
			"_tpl": "619f4bffd25cbd424731fb97",
			"parentId": "taurus44defaultID_parentID",
			"slotId": "mod_pistol_grip"
		  }
		)
		// well shit now what
		Taurus44.AK12PresetItems = item._items;
	}
	
	static addRiflesToPrapor() // exactly what it says on the tin lul
	{ // once again stealing shit from atlas lul
		const prapor = "54cb50c76803fa8b248b4571"; // FUUUUUUUUCK YOUUUUUUUUUUU SERVER WINDOW
		 const traderAK12WeaponPreset = Taurus44.AK12PresetItems;
        traderAK12WeaponPreset[0] = (
        {
            "_id": "taurus44defaultID_parentID", // unique itemID
            "_tpl": "efh_weapon_taurus44", // itemID template to use e.g "5447a9cd4bdc2dbd208b4567" == "Colt M4A1 5.56x45 Assault Rifle"
            "parentId": "hideout", // not sure what do?
            "slotId": "hideout", // not sure what do?
            "upd":
            {
                "UnlimitedCount": true, // is unlimited? ...obviously
                "StackObjectsCount": 999999 // how many trader has
            }
        });
        // add ...each item traderWeaponPreset to trader - *because all items in list are parent/child this will cause trader to construct traderWeaponPreset
        DatabaseServer.tables.traders[prapor].assort.items.push(...traderAK12WeaponPreset);
		
		DatabaseServer.tables.traders[prapor].assort.barter_scheme["taurus44defaultID_parentID"] = [
            [
            {
                "count": 50553, // price count
                "_tpl": "5449016a4bdc2d6f028b456f" // mechanic makes you pay in euros because he's an asshole
            }]
        ]
        DatabaseServer.tables.traders[prapor].assort.loyal_level_items["taurus44defaultID_parentID"] = 1;
	}
	
	
	static traderFunctionForOrganizationsSake(traderID, db)
	{
		const modPath = ModLoader.getModPath("SamSWAT-SCARH"); // why the FUCK does the server bitch about this
		for (const itemKey in db.assort[traderID].items)
			{
				const path = db.assort[traderID].items[itemKey];
				const item = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
				DatabaseServer.tables.traders[traderID].assort.items.push(item);
			} 
			for (const itemKey in db.assort[traderID].loyal_level_items)
			{
				const path = db.assort[traderID].loyal_level_items[itemKey];
				const item = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
				DatabaseServer.tables.traders[traderID].assort.loyal_level_items[itemKey] = item;
			}
			for (const itemKey in db.assort[traderID].barter_scheme)
			{
				const path = db.assort[traderID].barter_scheme[itemKey];
				const item = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
				DatabaseServer.tables.traders[traderID].assort.barter_scheme[itemKey] = item;
			}
	}
	
	static addToMastery(weapon_id, mastery_index)
	{
		DatabaseServer.tables.globals.config.Mastering[mastery_index].Templates.push(weapon_id);
	}
	
}

module.exports = Taurus44;
