/*
* name;
*/
var StateVal = /** @class */ (function () {
    function StateVal() {
        this.ss = 0;
        this.state = false;
        this.kv = {};
        this.vMax = 0;
    }
    StateVal.prototype.add = function (t, e) {
        this.kv[t] || this.ss++;
        this.kv[t] = e;
        this.state = this.ss > 0;
    };
    StateVal.prototype.remove = function (t) {
        this.kv[t] && (delete this.kv[t], this.ss--),
            this.state = this.ss > 0;
    };
    StateVal.prototype.getVMax = function () {
        var t, e = -99999;
        for (var i in this.kv)
            e < (t = this.kv[i]) && (e = t);
        return e;
    };
    StateVal.prototype.getVMin = function () {
        var t, e = 99999;
        for (var i in this.kv)
            e > (t = this.kv[i]) && (e = t);
        return e;
    };
    StateVal.prototype.getVMulit = function () {
        var t = 1;
        for (var e in this.kv)
            t *= this.kv[e];
        return t;
    };
    StateVal.prototype.reset = function () {
        this.kv = {};
        this.ss = 0;
        this.state = false;
    };
    return StateVal;
}());
//# sourceMappingURL=StateVal.js.map