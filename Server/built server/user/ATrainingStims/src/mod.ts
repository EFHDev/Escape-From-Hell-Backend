import { DependencyContainer } from "tsyringe"
import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod"
//import { IPostAkiLoadMod } from "@spt-aki/models/external/IPostAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod"
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader"
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { CustomItemService } from "@spt-aki/services/mod/CustomItemService";
import { JsonUtil } from "@spt-aki/utils/JSONUtil";
import { VFS } from "@spt-aki/utils/VFS";

import { DatabaseServer } from "@spt-aki/servers/DatabaseServer"
import { DatabaseImporter } from "@spt-aki/utils/DatabaseImporter"


class TrainingStims implements IPostDBLoadMod {

    modName = "TrainingStims"

    postDBLoad(container: DependencyContainer): void {

        const logger = container.resolve<ILogger>("WinstonLogger");
        const JsonUtil = container.resolve<JsonUtil>("JsonUtil");
        const VFS = container.resolve<VFS>("VFS");
        const preAkiModLoader = container.resolve<PreAkiModLoader>(
            "PreAkiModLoader"
        )
        const db: any = container.resolve<DatabaseServer>("DatabaseServer").getTables()

        const modPath = preAkiModLoader.getModPath(this.modName)
        const config = require('../config.json')
        const mydb = JsonUtil.deserialize(VFS.readFile(`${modPath}/db.json`));

        const items = db.templates.items
        const locales = db.locales.global
        const handbook = db.templates.handbook.Items
        const buffs = db.globals.config.Health.Effects.Stimulator.Buffs

        const myItems = mydb.items
        const myLocales = mydb.locales.en.templates
        const myHandbook = mydb.templates.handbook
        const myBuffs = mydb.buffs

        if (config.enable_all === true) {
            // Add items
            for (const itemKey in myItems) {
                const path = myItems[itemKey];
                const item = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                items[item._id] = item;
            }

            // Add Handbook Entry
            for (const itemKey in myHandbook) {
                const path = myHandbook[itemKey];
                const handbookitem = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                handbook.push(handbookitem)
            }

            // Add locales
            for (const localeID in locales) {
                for (const langKey in myLocales) {
                    const path = mydb.locales.en.templates[langKey];
                    const lang = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                    locales[localeID].templates[langKey] = lang;
                }
            }

            // Add buffs
            for (const buff in myBuffs) {
                const path = myBuffs[buff];
                const buffitem = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                buffs[buff] = buffitem;
            }
            //logger.logWithColor(buffs["Buffs_Training_01"], LogTextColor.green)

            const therapist = db.traders["54cb57776803fa99248b456e"]

            const therapistAssorts = db.traders["54cb57776803fa99248b456e"].assort.items
            const therapistBS = db.traders["54cb57776803fa99248b456e"].assort.barter_scheme
            const therapistLL = db.traders["54cb57776803fa99248b456e"].assort.loyal_level_items
            const myAssorts = mydb.assort.therapist.items
            const myLL = mydb.assort.therapist.loyal_level_items
            const myBarter = mydb.assort.therapist.barter_scheme

            // Add items to therapist assort
            // Item info
            for (const itemKey in myAssorts) {
                const path = myAssorts[itemKey];
                const assort = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                therapistAssorts.push(assort);
            }
            // LL info
            for (const itemKey in myLL) {
                const path = myLL[itemKey];
                const llItem = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                therapistLL[itemKey] = llItem;
            }
            // Barter info
            for (const itemKey in myBarter) {
                const path = myBarter[itemKey];
                const schemeItem = JsonUtil.deserialize(VFS.readFile(`${modPath}/${path}`));
                therapistBS[itemKey] = schemeItem;
            }
            //logger.logWithColor(therapistBS["Training_Stim_1"], LogTextColor.green)

            // Config price and currency
            if (config.Training_Stim_1.customBarterEnabled === true) {
                const ts1BS = therapistBS["Training_Stim_1"]
                const ts1Config = config.Training_Stim_1
                for (const key in ts1BS) {
                    for (const key2 in ts1BS[key]) {
                        ts1BS[key][key2].count = ts1Config.price
                        ts1BS[key][key2]._tpl = ts1Config.currency
                    }
                }
            }
            //logger.logWithColor(therapistBS["Training_Stim_1"], LogTextColor.green)

            if (config.Training_Stim_2.customBarterEnabled) {
                const ts2BS = therapistBS["Training_Stim_2"]
                const ts2Config = config.Training_Stim_2
                for (const key in ts2BS) {
                    for (const key2 in ts2BS[key]) {
                        ts2BS[key][key2].count = ts2Config.price
                        ts2BS[key][key2]._tpl = ts2Config.currency
                    }
                }
            }
            if (config.Training_Stim_3.customBarterEnabled) {
                const ts3BS = therapistBS["Training_Stim_3"]
                const ts3Config = config.Training_Stim_3
                for (const key in ts3BS) {
                    for (const key2 in ts3BS[key]) {
                        ts3BS[key][key2].count = ts3Config.price
                        ts3BS[key][key2]._tpl = ts3Config.currency
                    }
                }
            }
            if (config.Training_Stim_4.customBarterEnabled) {
                const ts4BS = therapistBS["Training_Stim_4"]
                const ts4Config = config.Training_Stim_4
                for (const key in ts4BS) {
                    for (const key2 in ts4BS[key]) {
                        ts4BS[key][key2].count = ts4Config.price
                        ts4BS[key][key2]._tpl = ts4Config.currency
                    }
                }
            }
            if (config.Training_Stim_5.customBarterEnabled) {
                const ts5BS = therapistBS["Training_Stim_5"]
                const ts5Config = config.Training_Stim_5
                for (const key in ts5BS) {
                    for (const key2 in ts5BS[key]) {
                        ts5BS[key][key2].count = ts5Config.price
                        ts5BS[key][key2]._tpl = ts5Config.currency
                    }
                }
            }

            // Config effects
            if (config.Training_Stim_1.customEffectsEnabled === true) {
                const ts1Buffs = config.Training_Stim_1.effect
                buffs["Buffs_Training_01"] = ts1Buffs
            }
            if (config.Training_Stim_2.customEffectsEnabled) {
                const ts2Buffs = config.Training_Stim_2.effect
                buffs["Buffs_Training_02"] = ts2Buffs
            }
            if (config.Training_Stim_3.customEffectsEnabled) {
                const ts3Buffs = config.Training_Stim_3.effect
                buffs["Buffs_Training_03"] = ts3Buffs
            }
            if (config.Training_Stim_4.customEffectsEnabled) {
                const ts4Buffs = config.Training_Stim_4.effect
                buffs["Buffs_Training_04"] = ts4Buffs
            }
            if (config.Training_Stim_5.customEffectsEnabled) {
                const ts5Buffs = config.Training_Stim_5.effect
                buffs["Buffs_Training_05"] = ts5Buffs
            }
            //logger.logWithColor(buffs["Buffs_Training_01"], LogTextColor.green)

            // Config uses
            if (config.Training_Stim_1.customUseAmountEnabled) {
                const numUses = config.Training_Stim_1.useAmount
                items["Training_Stim_1"]._props.MaxHpResource = numUses
            }
            if (config.Training_Stim_2.customUseAmountEnabled) {
                const numUses = config.Training_Stim_2.useAmount
                items["Training_Stim_1"]._props.MaxHpResource = numUses
            }
            if (config.Training_Stim_3.customUseAmountEnabled) {
                const numUses = config.Training_Stim_3.useAmount
                items["Training_Stim_1"]._props.MaxHpResource = numUses
            }
            if (config.Training_Stim_4.customUseAmountEnabled) {
                const numUses = config.Training_Stim_4.useAmount
                items["Training_Stim_1"]._props.MaxHpResource = numUses
            }
            if (config.Training_Stim_5.customUseAmountEnabled) {
                const numUses = config.Training_Stim_5.useAmount
                items["Training_Stim_1"]._props.MaxHpResource = numUses
            }
        }
    }
}

module.exports = {
    mod: new TrainingStims()
}
