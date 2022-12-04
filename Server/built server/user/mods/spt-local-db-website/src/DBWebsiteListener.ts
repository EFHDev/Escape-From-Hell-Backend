import { IncomingMessage, ServerResponse } from "http";
import { inject, injectable } from "tsyringe";

import type { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import { Listen, Get, Post } from "@spt-aki/models/external/HttpFramework";

import { Symbols } from "./Symbols";
import { IDbWebsiteCtx } from "./config/DbWebsiteCtx";
import { DbWebsiteStaticContentHandler } from "./DbWebsiteStaticContentHandler";
import { DBWebsiteApi } from "./DBWebsiteApi";

@injectable()
@Listen("db-website")
export class DBWebsiteHttpListener
{
    constructor(
        @inject(Symbols.winstonLogger) private logger: ILogger,
        @inject(Symbols.contentHandler) private staticContentHandler: DbWebsiteStaticContentHandler,
        @inject(Symbols.api) private api: DBWebsiteApi,
        @inject(Symbols.context) private context: IDbWebsiteCtx
    )
    { }

    @Get()
        handleFiles = (_: string, req: IncomingMessage, resp: ServerResponse): void =>
        {
            this.logger.debug(`[${this.context.loggerCtx}][DBWebsiteHttpListener] handle GET: ${req.url}`);
            this.staticContentHandler.serialize(req.url.split("/"), resp);
        }

    @Get("api/locales")
        getLocales = (_: string, req: IncomingMessage, resp: ServerResponse): void =>
        {
            this.logger.debug(`[${this.context.loggerCtx}][DBWebsiteHttpListener] handle GET: ${req.url}`);
            this.api.handleGet(req.url.split("/"),req, resp);
        }

    @Get("api/hierarchy")
        getItemHierarchy = (_: string, req: IncomingMessage, resp: ServerResponse): void =>
        {
            this.logger.debug(`[${this.context.loggerCtx}][DBWebsiteHttpListener] handle GET: ${req.url}`);
            this.api.handleGet(req.url.split("/"),req, resp);
        }

    @Get("api/item")
        getItem = (_: string, req: IncomingMessage, resp: ServerResponse): void =>
        {
            this.logger.debug(`[${this.context.loggerCtx}][DBWebsiteHttpListener] handle GET: ${req.url}`);
            this.api.handleGet(req.url.split("/"),req, resp);
        }

    @Post("api/search")
        postSearch = (_: string, req: IncomingMessage, resp: ServerResponse): void =>
        {
            this.logger.debug(`[${this.context.loggerCtx}][DBWebsiteHttpListener] handle POST: ${req.url}`);
            req.on("data", (data: Buffer) =>
            {
                this.api.handlePost(req.url.split("/"),req, resp, data);
            });
        }
}