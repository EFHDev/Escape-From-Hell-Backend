"use strict";

const db = DatabaseServer.tables;
const items = db.templates.items
const traders = db.traders;
const locales = db.locales.global;
const ragfair = "ragfair";
const peacekeeper = "5935c25fb3acc3127c3d8cd9";

class L85A2 {
	static onLoadMod() {
		L85A2.L85A2();
		L85A2.L85A2_attachments();
		L85A2.addToMastery();
		L85A2.createPresets();
		L85A2.createTraderPresets();
		L85A2.addPresetToPeacekeeper();

		//temp fix cuz dev fucked up getItemPrice function in 2.3.1 release;
		db.templates.prices["weapon_l85a2_556x45"] = 75605;
		db.templates.prices["barrel_l85a2_518mm"] = 27627;
		db.templates.prices["handguard_l85a2_ris"] = 14327;
		db.templates.prices["handguard_l85a2_std"] = 7665;
		db.templates.prices["mount_l85a2_rail"] = 2640;
		db.templates.prices["muzzle_l85a2_556x45"] = 1340;
		db.templates.prices["pistolgrip_l85a2"] = 2320;
		db.templates.prices["sight_front_l85a2"] = 600;
		db.templates.prices["sight_rear_l85a2"] = 823;
	}

	static L85A2() {
		let l85a2 = JsonUtil.clone(items["5c488a752e221602b412af63"]);
		l85a2._id = "weapon_l85a2_556x45";
		l85a2._props.Weight = 2.7;
		l85a2._props.CreditsPrice = 75605;
		l85a2._props.Prefab.path = "assets/content/weapons/l85a2/weapon_l85a2_556x45_container.bundle";
		l85a2._props.Slots[0]._props.filters[0].Filter = ["pistolgrip_l85a2"];
		l85a2._props.Slots[2]._props.filters[0].Filter = ["handguard_l85a2_std", "handguard_l85a2_ris"];
		l85a2._props.Slots[3]._props.filters[0].Filter = ["barrel_l85a2_518mm"];
		l85a2._props.Slots[4]._props.filters[0].Filter = ["mount_l85a2_rail", "sight_rear_l85a2"];
		l85a2._props.Slots.splice(5);
		l85a2._props.AllowJam = false;
		l85a2._props.AllowFeed = false;
		l85a2._props.AllowMisfire = false;
		l85a2._props.AllowSlide = false;
		l85a2._props.AllowOverheat = false;
		//	Logger.log(l85a2._props.Slots);
		items["weapon_l85a2_556x45"] = l85a2;

		for (const localeID in locales) {
			locales[localeID].templates["weapon_l85a2_556x45"] = {
				"Name": "L85A2 5.56x45 Assault Rifle",
				"ShortName": "L85A2",
				"Description": "The L85A2 is a gas-operated, rotating bolt, magazine fed British assault rifle in a bullpup layout. A2 variant is the result of a significant upgrade in the early 2000s by Heckler & Koch of SA80, which was designed in the 1970s to 1980s."
			};

			locales[localeID].preset["l85a2_std_presetid"] = {
				"Name": "STD"
			};
			locales[localeID].preset["l85a2_rail_presetid"] = {
				"Name": "CQC"
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "weapon_l85a2_556x45",
				"ParentId": "5b5f78fc86f77409407a7f90",
				"Price": l85a2._props.CreditsPrice,
			});
	}

	static L85A2_attachments() {
		// ------------------ L85A2 BARREL ------------------ \\
		let barrel = JsonUtil.clone(items["5c48a2852e221602b21d5923"]);
		barrel._id = "barrel_l85a2_518mm";
		barrel._props.Weight = 0.431;
		barrel._props.CreditsPrice = 27627;
		barrel._props.Prefab.path = "assets/content/items/mods/l85a2/barrel_l85a2_518mm.bundle";
		barrel._props.Slots[0]._id = "barrel_l85a2_518mm_muzzle";
		barrel._props.Slots[0]._parent = "barrel_l85a2_518mm";
		barrel._props.Slots[0]._props.filters[0].Filter.push("muzzle_l85a2_556x45");
		barrel._props.Slots[1] =
		{
			"_name": "mod_sight_front",
			"_id": "barrel_l85a2_518mm_sfront",
			"_parent": "barrel_l85a2_518mm",
			"_props": {
				"filters": [
					{
						"Shift": 0,
						"Filter": [
							"sight_front_l85a2"
						]
					}
				]
			},
			"_required": false,
			"_mergeSlotWithChildren": false,
			"_proto": "55d30c4c4bdc2db4468b457e"
		}
		//	Logger.log(barrel._props.Slots);
		items["barrel_l85a2_518mm"] = barrel;

		for (const localeID in locales) {
			locales[localeID].templates["barrel_l85a2_518mm"] = {
				"Name": "518mm barrel for L85A2 5.56x45",
				"ShortName": "518mm L85A2 5.56x45",
				"Description": "Standard barrel for L85A2 assault rifle for 5.56x45 NATO ammo, 518mm long."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "barrel_l85a2_518mm",
				"ParentId": "5b5f75c686f774094242f19f",
				"Price": barrel._props.CreditsPrice,
			});

		// ------------------ L85A2 RAIL HANDGUARD ------------------ \\
		let handg_rail = JsonUtil.clone(items["5efaf417aeb21837e749c7f2"]);
		handg_rail._id = "handguard_l85a2_ris";
		handg_rail._props.Weight = 0.505;
		handg_rail._props.CreditsPrice = 14327;
		handg_rail._props.Prefab.path = "assets/content/items/mods/l85a2/handguard_l85a2_daniel_defense_rail.bundle";
		handg_rail._props.Slots[0]._id = "handguard_l85a2_ris_foregrip";
		handg_rail._props.Slots[1]._id = "handguard_l85a2_ris_scope";
		handg_rail._props.Slots[2]._id = "handguard_l85a2_ris_tac01";
		handg_rail._props.Slots[3]._id = "handguard_l85a2_ris_tac02";
		handg_rail._props.Slots[4]._id = "handguard_l85a2_ris_tac00";
		handg_rail._props.Slots[0]._parent = "handguard_l85a2_ris";
		handg_rail._props.Slots[1]._parent = "handguard_l85a2_ris";
		handg_rail._props.Slots[2]._parent = "handguard_l85a2_ris";
		handg_rail._props.Slots[3]._parent = "handguard_l85a2_ris";
		handg_rail._props.Slots[4]._parent = "handguard_l85a2_ris";
		/* 		handg_rail._props.Slots[5] = (
					{
						"_name": "mod_tactical_003",
						"_id": "handguard_l85a2_ris_tac03",
						"_parent": "handguard_l85a2_ris",
						"_props": {
							"filters": [
								{
									"Shift": 0,
									"Filter": [
										"5649a2464bdc2d91118b45a8"
									]
								}
							]
						},
						"_required": false,
						"_mergeSlotWithChildren": false,
						"_proto": "55d30c4c4bdc2db4468b457e"
					}
				); */
		items["handguard_l85a2_ris"] = handg_rail;

		for (const localeID in locales) {
			locales[localeID].templates["handguard_l85a2_ris"] = {
				"Name": "Daniel Defense L85 / SA80 handguard rail",
				"ShortName": "L85 RIS",
				"Description": "Aluminium handguard for L85A2, equipped with multiple rail mounts for installation of a wide range of additional equipment."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "handguard_l85a2_ris",
				"ParentId": "5b5f75e486f77447ec5d7712",
				"Price": handg_rail._props.CreditsPrice,
			});

		// ------------------ L85A2 HANDGUARD ------------------ \\
		let handg = JsonUtil.clone(items["5dcbd6b46ec07c0c4347a564"]);
		handg._id = "handguard_l85a2_std";
		handg._props.Weight = 0.269;
		handg._props.CreditsPrice = 7665;
		handg._props.Prefab.path = "assets/content/items/mods/l85a2/handguard_l85a2_std.bundle";
		handg._props.Slots = [];
		items["handguard_l85a2_std"] = handg;

		for (const localeID in locales) {
			locales[localeID].templates["handguard_l85a2_std"] = {
				"Name": "L85A2 regular handguard",
				"ShortName": "L85A2 HG",
				"Description": "Regular polymer L85A2 handguard."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "handguard_l85a2_std",
				"ParentId": "5b5f75e486f77447ec5d7712",
				"Price": handg._props.CreditsPrice,
			});

		// ------------------ L85A2 RAIL MOUNT ------------------ \\
		let mount = JsonUtil.clone(items["5bfebc530db834001d23eb65"]);
		mount._id = "mount_l85a2_rail";
		mount._props.Weight = 0.08
		mount._props.CreditsPrice = 2640;
		mount._props.Prefab.path = "assets/content/items/mods/l85a2/mount_l85a2_rail.bundle";
		mount._props.Width = 1
		mount._props.Slots[0]._id = "mount_l85a2_rail_scope";
		mount._props.Slots[0]._parent = "mount_l85a2_rail";
		mount._props.Slots[1] = (
			{
				"_name": "mod_tactical_000",
				"_id": "mount_l85a2_rail_tac000",
				"_parent": "mount_l85a2_rail",
				"_props": {
					"filters": [
						{
							"Shift": 0,
							"Filter": [
								"5649a2464bdc2d91118b45a8"
							]
						}
					]
				},
				"_required": false,
				"_mergeSlotWithChildren": false,
				"_proto": "55d30c4c4bdc2db4468b457e"
			}
		);
		//	Logger.log(mount._props.Slots);
		items["mount_l85a2_rail"] = mount;

		for (const localeID in locales) {
			locales[localeID].templates["mount_l85a2_rail"] = {
				"Name": "Weaver base for L85A2",
				"ShortName": "L85 RM",
				"Description": "Universal base mount for installation of optical scopes, collimator sights and other devices and accessories on L85A2."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "mount_l85a2_rail",
				"ParentId": "5b5f755f86f77447ec5d770e",
				"Price": mount._props.CreditsPrice,
			});

		// ------------------ L85A2 MUZZLE FLASH HIDER ------------------ \\
		let muzzle = JsonUtil.clone(items["544a38634bdc2d58388b4568"]);
		muzzle._id = "muzzle_l85a2_556x45";
		muzzle._props.Weight = 0.064;
		muzzle._props.CreditsPrice = 1340;
		muzzle._props.Prefab.path = "assets/content/items/mods/l85a2/muzzle_l85a2_556x45.bundle";
		muzzle._proto = "544a38634bdc2d58388b4568";
		items["muzzle_l85a2_556x45"] = muzzle;

		for (const localeID in locales) {
			locales[localeID].templates["muzzle_l85a2_556x45"] = {
				"Name": "L85A2 Flash hider 5.56x45",
				"ShortName": "L85 FH",
				"Description": "Standard muzzle device for L85A2."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "muzzle_l85a2_556x45",
				"ParentId": "5b5f724c86f774093f2ecf15",
				"Price": muzzle._props.CreditsPrice,
			});

		// ------------------ L85A2 PISTOL GRIP ------------------ \\
		let pistolgrip = JsonUtil.clone(items["5c48a2c22e221602b313fb6c"]);
		pistolgrip._id = "pistolgrip_l85a2";
		pistolgrip._props.Weight = 0.08;
		pistolgrip._props.CreditsPrice = 2320;
		pistolgrip._props.Prefab.path = "assets/content/items/mods/l85a2/pistolgrip_l85a2.bundle";
		items["pistolgrip_l85a2"] = pistolgrip;

		for (const localeID in locales) {
			locales[localeID].templates["pistolgrip_l85a2"] = {
				"Name": "Pistol grip for L85A2",
				"ShortName": "L85 PG",
				"Description": "Standard pistol grip can be installed on L85A2."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "pistolgrip_l85a2",
				"ParentId": "5b5f761f86f774094242f1a1",
				"Price": pistolgrip._props.CreditsPrice,
			});

		// ------------------ L85A2 FRONT SIGHT ------------------ \\
		let frontsight = JsonUtil.clone(items["55d4af3a4bdc2d972f8b456f"]);
		frontsight._id = "sight_front_l85a2";
		frontsight._props.Weight = 0.126;
		frontsight._props.CreditsPrice = 600;
		frontsight._props.Prefab.path = "assets/content/items/mods/l85a2/sight_front_l85a2.bundle";
		frontsight._proto = "55d4af3a4bdc2d972f8b456f";
		items["sight_front_l85a2"] = frontsight;

		for (const localeID in locales) {
			locales[localeID].templates["sight_front_l85a2"] = {
				"Name": "L85A2 front sight",
				"ShortName": "L85 FS",
				"Description": "Standard front sight can be installed on L85A2."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "sight_front_l85a2",
				"ParentId": "5b5f746686f77447ec5d7708",
				"Price": frontsight._props.CreditsPrice,
			});

		// ------------------ L85A2 REAR SIGHT ------------------ \\
		let rearsight = JsonUtil.clone(items["5ae30bad5acfc400185c2dc4"]);
		rearsight._id = "sight_rear_l85a2";
		rearsight._props.Weight = 0.15;
		rearsight._props.CreditsPrice = 823;
		rearsight._props.Prefab.path = "assets/content/items/mods/l85a2/sight_rear_l85a2.bundle";
		rearsight._props.Slots = [];
		items["sight_rear_l85a2"] = rearsight;

		for (const localeID in locales) {
			locales[localeID].templates["sight_rear_l85a2"] = {
				"Name": "Rearsight L85A2 carry-handle",
				"ShortName": "L85 RS",
				"Description": "Detachable Carry Handle with a rear sight, standard issue for L85A2."
			};
		}

		db.templates.handbook.Items.push(
			{
				"Id": "sight_rear_l85a2",
				"ParentId": "5b5f746686f77447ec5d7708",
				"Price": rearsight._props.CreditsPrice,
			});


	}

	static addToMastery() {
		db.globals.config.Mastering.push(
			{
				"Name": "L85A2",
				"Templates": [
					"weapon_l85a2_556x45"
				],
				"Level2": 1000,
				"Level3": 3000
			}
		);
	}

	static createPresets() {
		let std = JsonUtil.clone(db.globals.ItemPresets["58414907245977598f1ad38d"]);
		let cqc = JsonUtil.clone(db.globals.ItemPresets["58414907245977598f1ad38d"]);

		db.globals.ItemPresets["l85a2_std_presetid"] = std;
		db.globals.ItemPresets["l85a2_rail_presetid"] = cqc;

		std._id = "l85a2_std_presetid";
		std._type = "Preset";
		std._changeWeaponName = false;
		std._name = "L85A2 default";
		std._encyclopedia = "weapon_l85a2_556x45";

		std._items = [];
		std._parent = "l85a2_std_id";

		std._items.push(
			{
				"_id": "l85a2_std_id",
				"_tpl": "weapon_l85a2_556x45"
			},
			{
				"_id": "l85a2_std_handguardid",
				"_tpl": "handguard_l85a2_std",
				"parentId": "l85a2_std_id",
				"slotId": "mod_handguard"
			},
			{
				"_id": "l85a2_std_barrelID",
				"_tpl": "barrel_l85a2_518mm",
				"parentId": "l85a2_std_id",
				"slotId": "mod_barrel"
			},
			{
				"_id": "l85a2_std_muzzleID",
				"_tpl": "muzzle_l85a2_556x45",
				"parentId": "l85a2_std_barrelID",
				"slotId": "mod_muzzle"
			},
			{
				"_id": "l85a2_std_frontsightID",
				"_tpl": "sight_front_l85a2",
				"parentId": "l85a2_std_barrelID",
				"slotId": "mod_sight_front"
			},
			{
				"_id": "l85a2_std_rearsightID",
				"_tpl": "sight_rear_l85a2",
				"parentId": "l85a2_std_id",
				"slotId": "mod_scope"
			},
			{
				"_id": "l85a2_std_pistolgripID",
				"_tpl": "pistolgrip_l85a2",
				"parentId": "l85a2_std_id",
				"slotId": "mod_pistol_grip"
			},
			{
				"_id": "l85a2_std_magazineID",
				"_tpl": "55d4887d4bdc2d962f8b4570",
				"parentId": "l85a2_std_id",
				"slotId": "mod_magazine"
			}
		);

		cqc._id = "l85a2_rail_presetid";
		cqc._type = "Preset";
		cqc._changeWeaponName = false;
		cqc._name = "L85A2 default";
		cqc._encyclopedia = "weapon_l85a2_556x45";

		cqc._items = [];
		cqc._parent = "l85a2_rail_id";

		cqc._items.push(
			{
				"_id": "l85a2_rail_id",
				"_tpl": "weapon_l85a2_556x45"
			},
			{
				"_id": "l85a2_rail_handguardid",
				"_tpl": "handguard_l85a2_ris",
				"parentId": "l85a2_rail_id",
				"slotId": "mod_handguard"
			},
			{
				"_id": "l85a2_rail_barrelID",
				"_tpl": "barrel_l85a2_518mm",
				"parentId": "l85a2_rail_id",
				"slotId": "mod_barrel"
			},
			{
				"_id": "l85a2_rail_muzzleID",
				"_tpl": "muzzle_l85a2_556x45",
				"parentId": "l85a2_rail_barrelID",
				"slotId": "mod_muzzle"
			},
			{
				"_id": "l85a2_rail_rearsightID",
				"_tpl": "mount_l85a2_rail",
				"parentId": "l85a2_rail_id",
				"slotId": "mod_scope"
			},
			{
				"_id": "l85a2_rail_pistolgripID",
				"_tpl": "pistolgrip_l85a2",
				"parentId": "l85a2_rail_id",
				"slotId": "mod_pistol_grip"
			},
			{
				"_id": "l85a2_rail_magazineID",
				"_tpl": "55d4887d4bdc2d962f8b4570",
				"parentId": "l85a2_rail_id",
				"slotId": "mod_magazine"
			}
		);

		L85A2.stdPresetItems = std._items;
		L85A2.cqcPresetItems = cqc._items;
	}

	static createTraderPresets() {
		const traderstdWeaponPreset = L85A2.stdPresetItems;
		const tradercqcWeaponPreset = L85A2.cqcPresetItems;

		traderstdWeaponPreset[0] = (
			{
				"_id": "l85a2_std_id",
				"_tpl": "weapon_l85a2_556x45",
				"parentId": "hideout",
				"slotId": "hideout",
				"upd":
				{
					"UnlimitedCount": true,
					"StackObjectsCount": 999999
				}
			});
		tradercqcWeaponPreset[0] = (
			{
				"_id": "l85a2_rail_id",
				"_tpl": "weapon_l85a2_556x45",
				"parentId": "hideout",
				"slotId": "hideout",
				"upd":
				{
					"UnlimitedCount": true,
					"StackObjectsCount": 999999
				}
			});

		L85A2.stdTraderItems = traderstdWeaponPreset;
		L85A2.cqcTraderItems = tradercqcWeaponPreset;
	}

	static addPresetToPeacekeeper() {
		db.traders[peacekeeper].assort.items.push(...L85A2.stdTraderItems);
		db.traders[peacekeeper].assort.items.push(...L85A2.cqcTraderItems);

		db.traders[peacekeeper].assort.items.push(
			{
				"_id": "weapon_l85a2_556x45",
				"_tpl": "weapon_l85a2_556x45",
				"parentId": "hideout",
				"slotId": "hideout",
				"upd": {
					"UnlimitedCount": true,
					"StackObjectsCount": 999999999
				}
			}
		);

		db.traders[peacekeeper].assort.barter_scheme["l85a2_std_id"] = [
			[
				{
					"count": 567.9,
					"_tpl": "5696686a4bdc2da3298b456a"
				}]
		];
		db.traders[peacekeeper].assort.barter_scheme["l85a2_rail_id"] = [
			[
				{
					"count": 638.2,
					"_tpl": "5696686a4bdc2da3298b456a"
				}]
		];
		db.traders[peacekeeper].assort.barter_scheme["weapon_l85a2_556x45"] = [
			[
				{
					"count": 207.4,
					"_tpl": "5696686a4bdc2da3298b456a"
				}]
		];

		db.traders[peacekeeper].assort.loyal_level_items["l85a2_std_id"] = 1;
		db.traders[peacekeeper].assort.loyal_level_items["l85a2_rail_id"] = 1;
		db.traders[peacekeeper].assort.loyal_level_items["weapon_l85a2_556x45"] = 1;
	}
}

module.exports = L85A2;

