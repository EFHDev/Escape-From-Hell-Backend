import { DependencyContainer, Lifecycle } from 'tsyringe';

import type { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import type { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import type { DynamicRouterModService } from '@spt-aki/services/mod/dynamicRouter/DynamicRouterModService';
import type { IHttpListener } from "@spt-aki/servers/http/IHttpListener";

import { DBWebsiteApi } from "./DBWebsiteApi";
import { DbWebsiteStaticContentHandler } from "./DbWebsiteStaticContentHandler";

import { IDbWebsiteCtx, DB_WEBSITE_CTX } from "./config/DbWebsiteCtx";
import { Symbols } from "./Symbols";
import { DBWebsiteHttpListener } from "./DBWebsiteListener";

class Mod implements IPreAkiLoadMod {
    preAkiLoad = (container: DependencyContainer): void => {
        const logger = container.resolve<ILogger>(Symbols.winstonLogger);
        const context = DB_WEBSITE_CTX;

        container.register<IDbWebsiteCtx>(Symbols.context, { useValue: context });

        logger.info(`[${context.loggerCtx}] Initializing ...`)

        container.register<DBWebsiteApi>(Symbols.api, DBWebsiteApi);
        container.register<DbWebsiteStaticContentHandler>(Symbols.contentHandler, DbWebsiteStaticContentHandler);
        container.register<DBWebsiteHttpListener>(Symbols.webListener, DBWebsiteHttpListener);
        container.registerType(Symbols.httpListener, Symbols.webListener);

        logger.success(`[${context.loggerCtx}] successfully initialized`)
    }
}

module.exports = { mod: new Mod() };