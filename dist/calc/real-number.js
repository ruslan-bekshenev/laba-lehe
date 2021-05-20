"use strict";
var RealNumbers = /** @class */ (function () {
    function RealNumbers(val) {
        this._result = val;
    }
    RealNumbers.prototype.add = function (val) {
        this._result += val;
    };
    RealNumbers.prototype.sub = function (val) {
        this._result -= val;
    };
    RealNumbers.prototype.mult = function (val) {
        this._result *= val;
    };
    RealNumbers.prototype.div = function (val) {
        this._result /= val;
    };
    Object.defineProperty(RealNumbers.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    return RealNumbers;
}());
//# sourceMappingURL=real-number.js.map