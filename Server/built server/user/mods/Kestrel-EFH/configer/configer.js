const path = require('path');
const unlockTraders = require("./unlockTraders")

const modulesToLoad = [
  "unlockTrader.js",
];

const traderscfg = {
  traderscfg: unlockTraders.onLoadMod
  // Add any other paths you want to use here
};

module.exports = {
  modulesToLoad: modulesToLoad,
  traderscfg: traderscfg
};