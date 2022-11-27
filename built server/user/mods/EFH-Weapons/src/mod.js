class EFHWeapons {


    preAkiLoad(container)
    {

       // const ModLoader = container.resolve("PreAkiModLoader")
    }
    postDBLoad(container) 
    {
        const database =  container.resolve("DatabaseServer").getTables();
        const ModLoader = container.resolve("PostAkiModLoader")
        const JsonUtil = container.resolve("JsonUtil")
        const VFS = container.resolve("VFS")
        const databaseFilepath = `${ModLoader.getModPath("EFH-Weapons")}database/`;

        const ImageRouter = container.resolve("ImageRouter")
        const imagesFilepath = `${ModLoader.getModPath("EFH-Weapons")}res/`;
                // Add image
        //ImageRouter.addRoute("/files/trader/avatar/death",`${imagesFilepath}death.png`);
        //let assort = require("../database/assort.json");


        // Add locales
        let locales = database.locales.global;

        for (const locale in locales)
        {
            locales[locale].trading.Death = JsonUtil.deserialize(VFS.readFile(`${databaseFilepath}locale.json`));
        }

        database.locales.global = locales;

        // Add ragfair
        const configServer = container.resolve("ConfigServer");
        const RagfairConfig = configServer.getConfig("aki-ragfair");
        const TraderConfig = configServer.getConfig("aki-trader");
        const QuestsConfig = configServer.getConfig("aki-quest");
        let QuestFile = {"traderId": "Death", "questTypes": ["Elimination"]};
        //TODO Allow for configuration of vanilla daily tasks
        //QuestsConfig.repeatableQuests[0].traderWhitelist = [];
        //QuestsConfig.repeatableQuests[1].traderWhitelist = [];
        
    }
}

module.exports = EFHWeapons;