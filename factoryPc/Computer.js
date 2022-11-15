"use strict";
exports.__esModule = true;
exports.Computer = void 0;
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.toString = function () {
        console.log("\nEsse ".concat(this.getType(), " tem:\n").concat(this.getRam(), "GB de ram\n").concat(this.getHdd(), "GB de HD\n").concat(this.getCpu(), "GHz de cpu"));
    };
    Computer.prototype.getRam = function () {
        return this.ram;
    };
    Computer.prototype.setRam = function (ra) {
        this.ram = ra;
    };
    Computer.prototype.getHdd = function () {
        return this.hdd;
    };
    Computer.prototype.setHdd = function (hd) {
        this.hdd = hd;
    };
    Computer.prototype.getCpu = function () {
        return this.cpu;
    };
    Computer.prototype.setCpu = function (cp) {
        this.cpu = cp;
    };
    Computer.prototype.getType = function () {
        return this.type;
    };
    Computer.prototype.setType = function (ty) {
        this.type = ty;
    };
    return Computer;
}());
exports.Computer = Computer;
