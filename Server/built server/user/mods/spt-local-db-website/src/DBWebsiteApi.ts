/* eslint-disable @typescript-eslint/naming-convention */
import { inject, injectable } from "tsyringe";
import { IncomingMessage, ServerResponse } from "http"
import { URL } from "url";

import type { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import type { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import type { ILocaleProps } from "@spt-aki/models/spt/server/ILocaleBase";
import type { ILocaleBase } from "@spt-aki/models/spt/server/ILocaleBase";

import { Symbols } from "./Symbols";
import { IDbWebsiteCtx } from "./config/DbWebsiteCtx";

interface DbWebsiteSearchPost
{
    query: string
    locale: string
}

@injectable()
export class DBWebsiteApi
{
    constructor(
        @inject(Symbols.databseServer) private database: DatabaseServer,
        @inject(Symbols.context) private context: IDbWebsiteCtx
    )
    { }

    public handleGet(splittedUrl: string[], req: IncomingMessage, resp: ServerResponse): void
    {
        splittedUrl.splice(0, 3);
        const path = splittedUrl.join("/");

        if (!path) return;
        const searchParams: URLSearchParams = new URL(req.url, `${this.context.protocole}://${this.context.host}:${this.context.port}`).searchParams;
        const locales: ILocaleBase = this.database.getTables().locales;
        const allItems: Record<string, ITemplateItem> = this.database.getTables().templates.items;

        if (path.startsWith("locales"))
        {
            this.getLocales(locales, resp);
        }
        else if (path.startsWith("item/hierarchy"))
        {
            this.getHierarchy(locales, resp, allItems, searchParams);
        }
        else if (path.startsWith("item"))
        {
            console.log("test")
            this.getItem(locales, resp, allItems, searchParams);
        }
    }

    public handlePost(splittedUrl: string[], req: IncomingMessage, resp: ServerResponse, body: Buffer): void
    {
        splittedUrl.splice(0, 3);
        const path = splittedUrl.join("/");

        if (!splittedUrl) return;
        const locales: ILocaleBase = this.database.getTables().locales;
        const allItems: Record<string, ITemplateItem> = this.database.getTables().templates.items;
        const parsedBody: DbWebsiteSearchPost = JSON.parse(body.toString());

        if (path.startsWith("search"))
        {
            this.postSearch(locales, resp, allItems, parsedBody);
        }
    }

    private getLocales(locales: ILocaleBase, resp: ServerResponse): void
    {
        const languages: string[] = locales.languages.map(elt => elt.ShortName);
        const langBuffer = Buffer.from(JSON.stringify(languages), "utf-8");
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.end(langBuffer);
    }

    private postSearch(locales: ILocaleBase, resp: ServerResponse, allItems: Record<string, ITemplateItem>, body: DbWebsiteSearchPost): void
    {
        if (!Object.keys(locales.global).includes(body.locale))
        {
            body.locale = "en";
        }
        const { query, locale } = body;

        const itemsLocale: Record<string, ILocaleProps> = locales.global[locale].templates;

        const queryItems = Object.values(allItems).filter(it =>
        {
            const localeIt: ILocaleProps = itemsLocale[it._id];
            return this.itemMatchesQuery(it, query) || this.localeMatchesQuery(localeIt, query);
        })

        const formatedData = queryItems.map(it => ({
            item: {
                "_id": it._id,
                "_name": it._name
            },
            locale: itemsLocale[it._id]
        }));
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.end(JSON.stringify({ items: formatedData }));
    }

    private getHierarchy(locales: ILocaleBase, resp: ServerResponse, allItems: Record<string, ITemplateItem>, searchParams: URLSearchParams): void
    {
        let itemId = searchParams.get("id");
        let itemLocale = searchParams.get("locale");
        if (!itemLocale || !Object.keys(locales.global).includes(itemLocale))
        {
            itemLocale = "en";
        }
        const itemsLocale: Record<string, ILocaleProps> = locales.global[itemLocale].templates;

        const itemsHierarchy = [];
        do
        {
            itemsHierarchy.unshift({
                item: {
                    "_id": allItems[itemId]._id,
                    "_name": allItems[itemId]._name,
                    "_parent": allItems[itemId]._parent
                },
                locale: itemsLocale[itemId] ?? ""
            })
        } while ((itemId = itemsHierarchy[0].item._parent))

        const itemsHierarchyMap = itemsHierarchy.reduce((map, obj) =>
        {
            map[obj.item._id] = obj;
            return map;
        }, {})

        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.end(JSON.stringify(itemsHierarchyMap));
    }

    private getItem(locales: ILocaleBase, resp: ServerResponse, allItems: Record<string, ITemplateItem>, searchParams: URLSearchParams): void
    {
        const itemId = searchParams.get("id");
        let itemLocale = searchParams.get("locale");
        if (!itemLocale || !Object.keys(locales.global).includes(itemLocale))
        {
            itemLocale = "en";
        }
        const itemsLocale: Record<string, ILocaleProps> = locales.global[itemLocale].templates;

        const itemData = {
            item: allItems[itemId],
            locale: itemsLocale[itemId]
        }
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.end(JSON.stringify(itemData));
    }

    private itemMatchesQuery(item: ITemplateItem, query: string): boolean
    {
        return item._id.includes(query) || item._name.includes(query) || item._parent.includes(query);
    }

    private localeMatchesQuery(localeProps: ILocaleProps, query: string): boolean
    {
        if (!localeProps) return false;

        return (localeProps.Name && (localeProps.Name.toString()).includes(query)) ||
            (localeProps.ShortName && (localeProps.ShortName.toString()).includes(query));
    }
}