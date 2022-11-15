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
exports.Pc = void 0;
var Computer_1 = require("./Computer");
var Pc = /** @class */ (function (_super) {
    __extends(Pc, _super);
    function Pc(ram, hdd, cpu, type) {
        var _this = _super.call(this) || this;
        _this.setRam(ram);
        _this.setHdd(hdd);
        _this.setCpu(cpu);
        _this.setType(type);
        return _this;
    }
    Pc.prototype.ligar = function () {
        console.log("Ligando PC");
    };
    Pc.prototype.desligar = function () {
        console.log("Desligando PC");
    };
    return Pc;
}(Computer_1.Computer));
exports.Pc = Pc;
