import { HttpFileUtil } from "@spt-aki/utils/HttpFileUtil";

import { IDbWebsiteCtx } from "./config/DbWebsiteCtx";
import { ServerResponse } from "http";
import { inject, injectable } from "tsyringe";
import { Symbols } from "./Symbols";

@injectable()
export class DbWebsiteStaticContentHandler
{
    frontendPath: string

    constructor(
        @inject(Symbols.httpFileUtil) protected httpFileUtil: HttpFileUtil,
        @inject(Symbols.context) private context: IDbWebsiteCtx
    )
    {
        this.frontendPath = `${process.cwd()}/user/mods/spt-local-db-website/frontend`;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public serialize(splittedUrl: string[], resp: ServerResponse): void
    {
        splittedUrl.splice(0, 1);
        // Redirect "/db-website" to the default page "/db-website/search"
        if (splittedUrl.length == 1 && splittedUrl[0] == this.context.root)
        {
            resp.writeHead(301, {
                Location: `${this.context.protocole}://${this.context.host}:${this.context.port}/${this.context.root}/search`
            });
            resp.end();
            return;
        }

        splittedUrl.splice(0, 1);

        if (splittedUrl.length >= 1 && splittedUrl[0] == "search")
        {
            this.httpFileUtil.sendFile(resp, `${this.frontendPath}/index.html`);
        }
        else
        {
            this.httpFileUtil.sendFile(resp, `${this.frontendPath}/${splittedUrl.join("/")}`);
        }
    }
}