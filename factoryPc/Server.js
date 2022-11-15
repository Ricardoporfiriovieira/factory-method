"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Server = void 0;
var Computer_1 = require("./Computer");
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server(ram, hdd, cpu, type) {
        var _this = _super.call(this) || this;
        _this.setRam(ram);
        _this.setHdd(hdd);
        _this.setCpu(cpu);
        _this.setType(type);
        return _this;
    }
    Server.prototype.ligar = function () {
        console.log("Ligando SERVER");
    };
    Server.prototype.desligar = function () {
        console.log("Desligando SERVER");
    };
    return Server;
}(Computer_1.Computer));
exports.Server = Server;
