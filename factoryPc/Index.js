"use strict";
exports.__esModule = true;
var FactoryComputer_1 = require("./FactoryComputer");
var fabricaComputer = new FactoryComputer_1.FactoryComputer();
var pc = fabricaComputer.createComputer(4, 2, 1.6, 'pc');
var server = fabricaComputer.createComputer(4, 2, 1.6, 'server');
console.log(server);
