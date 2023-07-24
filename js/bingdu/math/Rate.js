/*
* name;
*/
var math_Rate = /** @class */ (function () {
    function math_Rate() {
        this.values = null;
        this.weights = null;
        this.i = 0;
        this.count = 0;
        this.max = 0;
        this.value = 0;
        this.valueMax = 0;
    }
    math_Rate.prototype.setData = function (t, e, i) {
        if (i === void 0) { i = true; }
        this.values = t, this.weights = e, this.max = 0;
        if (null != t && null != e) {
            for (t.length, e.length, this.count = e.length, this.i = 0; this.i < this.count; this.i++)
                i && (e[this.i] *= 100),
                    this.max += e[this.i];
            this.max -= 1;
        }
    };
    math_Rate.prototype.rndValue = function () {
        for (this.valueMax = 0, this.value = Math.round(Math.random() * this.max) + 1, this.i = 0; this.i < this.count; this.i++)
            if (this.valueMax += this.weights[this.i], this.valueMax >= this.value)
                return this.values[this.i];
        return this.values[0];
    };
    return math_Rate;
}());
//# sourceMappingURL=Rate.js.map