"use strict";
exports.__esModule = true;
exports.FactoryComputer = void 0;
var Pc_1 = require("./Pc");
var Server_1 = require("./Server");
var FactoryComputer = /** @class */ (function () {
    function FactoryComputer() {
    }
    FactoryComputer.prototype.createComputer = function (ram, hdd, cpu, type) {
        if (type.toUpperCase() === 'PC') {
            return new Pc_1.Pc(ram, hdd, cpu, type);
        }
        if (type.toUpperCase() === 'SERVER') {
            return new Server_1.Server(ram, hdd, cpu, type);
        }
    };
    return FactoryComputer;
}());
exports.FactoryComputer = FactoryComputer;
