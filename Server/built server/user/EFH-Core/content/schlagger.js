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
class SchlaggerDrink
{
	
	
    static onLoadMod()
    {
        SchlaggerDrink.doTheManualCreationThingy(db, modPath);
		SchlaggerDrink.traderFunctionForOrganizationsSake(ragfair, db); // ragfair is apparently bork.
		SchlaggerDrink.addToMastery("efh_schlagger",4);
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
	
//	static addStimBuffToDB(db)
//	{
//		const buffs = db.globals.config.Health.Effects.Stimulator.Buffs;
//		const efhBuffs = mydb.buffs;
//		for (const buff in efhBuffs) {
//			const path = efhBuffs[buff];
//			const buffitem = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
//			buffs[buff] = buffitem;
//			Logger.info(efhlogo + " Added buffs to globals")
//		}
//	}	

	static addToMastery(weapon_id, mastery_index)
	{
		DatabaseServer.tables.globals.config.Mastering[mastery_index].Templates.push(weapon_id);
        Logger.info(efhlogo + " Loaded Schlagger")
	}
	
}

module.exports = SchlaggerDrink;
