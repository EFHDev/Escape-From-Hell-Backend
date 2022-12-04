export type IDbWebsiteCtx = {
    loggerCtx: string,
    protocole: string,
    host: string,
    port: string,
    root: string
};

export const DB_WEBSITE_CTX = {
    loggerCtx: "DB-Local-Website",
    logLevel: "Debug",
    protocole: "http",
    host: "localhost",
    port: "6969",
    root: "db-website"
}