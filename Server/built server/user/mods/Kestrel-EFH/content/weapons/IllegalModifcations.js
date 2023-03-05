"use strict";
const locales = DatabaseServer.tables.locales.global;
const items = DatabaseServer.tables.templates.items;
const handbook = DatabaseServer.tables.templates.handbook.Items;
const traders = DatabaseServer.tables.traders;
const chalk = require("chalk");
const weaponsclone = require("./weapons-to-clone.json");
const logger = { logDebug: console.log };
const fs = require("fs")

class CreateIllegallGuns {
    static AddWeapons() {
        const illegalItems = {};

        for (const toClone of weaponsclone.weapons) {
            if (!items[toClone]) {
                logger.logDebug(`YO DUMMY, ${toClone} DOESN'T FUCKIN EXIST!!!!!!!!!`);
                continue;
            }

            const item = items[toClone];
            logger.logDebug(`item ${item._id} ${item._name}`);

            const wpn = this.generateIllegalWeapon(item); //smart king moment yooo
            illegalItems[wpn._id] = wpn;

            this.addToLocales(item, wpn);
            this.addToRagfair(wpn);

            handbook.push({
                Id: wpn._id,
                ParentId: "5b47574386f77428ca22b2ef",
                Price: 33000
            });
        }
        Object.assign(items, illegalItems);
    }

    static generateIllegalWeapon(item) {
        const illegalWeapon = JsonUtil.clone(item);

        illegalWeapon._id = `efh_${item._name}_drilled`; // glock-19x doesnt exist yet kestel you dingus!!!
        illegalWeapon._parent
        illegalWeapon._props.weapFireType = [
            'fullauto'
        ]
        illegalWeapon._props.Weight += 0.125;
        illegalWeapon._props.Durability = 85;
        illegalWeapon._props.MaxDurability = 85;
        illegalWeapon._props.HeatFactorByShot += 0.15
        illegalWeapon._props.CoolFactorGun -= 1

        return illegalWeapon;
    }

    static addToLocales(item, wpn) {
        for (const localeID in locales) {
            const localeTemplates = locales[localeID].templates;
            const itemLocale = locales[localeID].templates[item._id];
            localeTemplates[wpn._id] = {
                Name: `[EFH] ${itemLocale.Name} (Illegally Modified)`, //TypeError: Cannot read properties of undefined (reading 'Name')
                ShortName: `I-M ${itemLocale.ShortName}`, //lel 
                Description: `Modified for Your Pleasure\n ${itemLocale.Description}`
            };
        }
    }

    static addToRagfair(wpn) {
        const ragfair = traders.ragfair;

        ragfair.assort.items.push(
            {
                "_id": wpn._id,
                "_tpl": wpn._id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 999999999
                }
            }
        );

        ragfair.assort.barter_scheme[wpn._id] = [
            [
                {
                    "count": 1,
                    "_tpl": "5449016a4bdc2d6f028b456f"
                }
            ]
        ];

        ragfair.assort.loyal_level_items[wpn._id] = 1;

        logger.logDebug(`Added item ${wpn._id} to Ragfair`);
    }
}
module.exports = CreateIllegallGuns