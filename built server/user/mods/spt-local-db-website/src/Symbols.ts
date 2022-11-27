export const Symbols = {
    winstonLogger: "WinstonLogger",
    serializer: "Serializer",
    databseServer: "DatabaseServer",
    randomUtil: "RandomUtil",
    jsonUtil: "JsonUtil",
    httpResponseUtil: "HttpResponseUtil",
    notifierHelper: "NotifierHelper",
    httpServerHelper: "HttpServerHelper",
    configServer: "ConfigServer",
    applicationContext: "ApplicationContext",
    httpListener: "HttpListener",
    httpFileUtil: "HttpFileUtil",

    context: Symbol.for("DbWebsiteCtx"),
    webListener: Symbol.for("DbWebsiteListener"),
    api: Symbol.for("DbWebsiteApi"),
    contentHandler: Symbol.for("DbWebsiteStaticContentHandler")
}