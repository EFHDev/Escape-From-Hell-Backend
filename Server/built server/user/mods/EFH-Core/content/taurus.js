/*
 * I
 * ONLY
 * HAVE
 * TWO
 * MAGS
 * LEFT
 */
"use strict";

const { mod } = require("mathjs");
const chalk = require('chalk');
const efhlogo = ((chalk.white.bold('[EF') + chalk.red.bold('H') + chalk.white(']')));

// Apparently we need to put our constant declarations up here now.
	const modPath = `${ModLoader.getModPath("EFH-CORE")}`;
	const db = JsonUtil.deserialize(VFS.readFile(`${modPath}/db.json`)); // wow, thats a lot prettier than how it was in 12.8
	const prapor = "54cb50c76803fa8b248b4571";
	const ragfair = "ragfair"; // lmao
class Taurus44
{
	
	
    static onLoadMod()
    {
        Taurus44.doTheManualCreationThingy(db, modPath);
		Taurus44.traderFunctionForOrganizationsSake(ragfair, db); // ragfair is apparently bork.
		Taurus44.createAK12Preset();
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
		for (const buff in myBuffs) {
			const path = myBuffs[buff];
			const buffitem = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
			buffs[buff] = buffitem;
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
        DatabaseServer.tables.globals.ItemPresets["taurus_standardmb"] = item;

        // Change preset.
        item._id = "taurus_standardmb"; // unique presetID
        item._type = "Preset"; // Keep it as is or else the game implodes.
        item._changeWeaponName = true; // False will use itemShortName, true will add presetName.
        item._name = "STD"; // preset name
        item._encyclopedia = "efh_weapon_taurus44"; // using this will enable "Stock preset" see:"Server\packages\eft-database\db\locales\global\en.json.interface.Stock build ("Stock preset")

        item._items = []; // remove parts from WeaponPreset
        item._parent = 'taurusmainbase'; // Unique parentID for part.
		
		// ok now we add stuff to the preset
		item._items.push(
        {
            "_id": "taurusmainbase", // The unique parent id we set above.
            "_tpl": "efh_weapon_taurus44" // Actual weapon ID. This is the gun you are making a preset for. 
        },
		{
            "_id": "tauruscylender", // A new ID, Specificly for this item
            "_tpl": "619f54a1d25cbd424731fb99", // Item that will go in the slot for this preset.
            "parentId": "taurusmainbase", // The above _ID
            "slotId": "mod_magazine" // Name of the slot.
        }
		)
		// well shit now what
		Taurus44.AK12PresetItems = item._items;
	}

	static traderFunctionForOrganizationsSake(traderID, db)
	{
		const modPath = ModLoader.getModPath("EFH-CORE"); // why the FUCK does the server bitch about this
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
        Logger.info(efhlogo + " Loaded Taurus .44 Magnum")
	}
	
}

module.exports = Taurus44;
