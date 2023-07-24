/*
* name;//yanzhengguo
*/
var math_BigUInt = /** @class */ (function () {
    function math_BigUInt() {
        this.arr = [];
        this.len = 0;
    }
    math_BigUInt.prototype.setByShortString = function (t) {
        var e, i = t.length, s = i - 1, n = 0;
        if (this.arr = [], t.charCodeAt(s) > 57) {
            for (e = t.charAt(s), s = 0, n = math_BigUInt.DLen[e]; s < n; s++)
                this.arr.push(0);
            if (s = i - 3, 46 == t.charCodeAt(s))
                for (this.arr[n - 1] = parseInt(t.charAt(i - 2)); s--;)
                    this.arr.push(parseInt(t.charAt(s)));
            else
                for (s = i - 1; s--;)
                    this.arr.push(parseInt(t.charAt(s)));
        }
        else if (s = i - 2, 46 == t.charCodeAt(s))
            for (; s--;)
                this.arr.push(parseInt(t.charAt(s)));
        else
            for (s = i; s--;)
                this.arr.push(parseInt(t.charAt(s)));
        return this.len = this.arr.length,
            this;
    };
    math_BigUInt.prototype.plus = function (t) {
        for (var e = [], i = 0, s = Math.max(t.len, this.len), n = 0, a = 0; a < s; a++)
            n = i,
                a < this.len && (n += this.arr[a]),
                a < t.len && (n += t.arr[a]),
                n > 9 ? (i = 1, n -= 10) : i = 0,
                e.push(n);
        return 0 != i && e.push(i),
            this.arr = e,
            this.len = this.arr.length,
            this;
    };
    math_BigUInt.prototype.minus = function (t) {
        var e = [];
        if (t.len > this.len || t.len == this.len && this.arr[this.len - 1] < t.arr[this.len - 1])
            e.push(0);
        else {
            for (var i = 0, s = this.len, n = 0, a = 0; a < s && (n = this.arr[a], n -= i, a < t.len && (n -= t.arr[a]), n < 0 ? (i = 1, n += 10) : i = 0, !(n < 0)); a++)
                e.push(n);
            0 != i && (e = [0]);
        }
        a = this.len = e.length;
        for (var h = -1; a-- && 0 == e[a];)
            h = Math.max(1, a);
        return h >= 0 && e.splice(h, this.len - h),
            this.arr = e,
            this.len = this.arr.length,
            this;
    };
    math_BigUInt.prototype.multBigUInt = function (e) {
        math_BigUInt.biR.zero();
        for (var i = 0; i < e.len; i++)
            math_BigUInt.bi1.copy(this),
                math_BigUInt.bi1.mult(e.arr[i]),
                math_BigUInt.bi1.mult10(i),
                math_BigUInt.biR.plus(math_BigUInt.bi1);
        return this.copy(math_BigUInt.biR),
            this;
    };
    math_BigUInt.prototype.mult2 = function (e) {
        var i = e + "", s = i.length, n = 0;
        for (math_BigUInt.biR.zero(); s--;)
            math_BigUInt.bi1.copy(this),
                math_BigUInt.bi1.mult(parseInt(i.charAt(s))),
                math_BigUInt.bi1.mult10(n++),
                math_BigUInt.biR.plus(math_BigUInt.bi1);
        return this.copy(math_BigUInt.biR),
            this;
    };
    math_BigUInt.prototype.mult = function (t) {
        var e = [], i = 0, s = 0, n = 0;
        if (t == 0 || this.isZero())
            return this.zero();
        for (n = 0; n < this.len; n++)
            (s = this.arr[n] * t + i) > 9 ? (i = Math.floor(s / 10), s %= 10) : i = 0,
                e.push(s);
        return 0 != i && e.push(i),
            this.arr = e,
            this.len = this.arr.length,
            this;
    };
    math_BigUInt.prototype.mult10 = function (t) {
        for (void 0 === t && (t = 1); t--;)
            this.arr.unshift(0);
        return this.len = this.arr.length,
            this;
    };
    math_BigUInt.prototype.present100 = function (t) {
        return this.mult2(t).div10(2),
            this;
    };
    math_BigUInt.prototype.div10 = function (t) {
        if (t === void 0) { t = 1; }
        for (; t--;)
            this.arr.shift();
        return this.len = this.arr.length,
            this.len <= 0 && this.zero(),
            this;
    };
    math_BigUInt.prototype.div = function (t) {
        for (var e = false, i = [], s = 0, n = 0, a = this.len, h = 0; a--;)
            h = 10 * s + this.arr[a],
                n = Math.floor(h / t),
                (e || n > 0) && (i.push(n), e = true),
                s = h % t;
        return this.len = i.length,
            0 == this.len ? (this.arr = [0], this.len = 1) : (this.arr = i, this.arr.reverse()),
            this;
    };
    math_BigUInt.prototype.divPresent = function (t) {
        var e = this.len - t.len;
        if (e >= 3)
            return 0;
        if (e < -3)
            return 10;
        var i = Math.max(this.len, t.len), s = "", n = "";
        for (e = Math.min(3, i); e--;)
            --i < this.len && (s += this.arr[i]),
                i < t.len && (n += t.arr[i]);
        return parseFloat(n) / parseFloat(s);
    };
    //除法 值小于0.001显示为0 /超过7位整数显示1亿
    //10 / 10000
    //算法: 0.5 = 2.bigdivision(1); 
    math_BigUInt.prototype.bigdivision = function (t) {
        var e = this.len - t.len;
        var iLen = Math.max(this.len, t.len);
        if (e > 3) {
            return 0;
        }
        else if (e <= 3 && e >= -7) {
            var s = "", n = "";
            var iend = 0;
            if (iLen >= 8) {
                iend = iLen - 8;
            }
            for (var i = iLen - 1; i >= iend; i--) {
                i < this.len && (s += this.arr[i]);
                i < t.len && (n += t.arr[i]);
            }
            return parseFloat(n) / parseFloat(s);
        }
        else {
            return 100000000;
        }
    };
    math_BigUInt.prototype.bigger = function (t) {
        if (this.len > t.len)
            return true;
        if (this.len < t.len)
            return false;
        for (var e = this.len; e--;) {
            if (this.arr[e] > t.arr[e])
                return true;
            if (this.arr[e] < t.arr[e])
                return false;
        }
        return false;
    };
    math_BigUInt.prototype.biggerequal = function (t) {
        if (this.len > t.len)
            return true;
        if (this.len < t.len)
            return false;
        var bequal = true;
        for (var e = this.len; e--;) {
            if (this.arr[e] != t.arr[e]) {
                bequal = false;
                break;
            }
        }
        if (bequal == true)
            return true;
        for (var e = this.len; e--;) {
            if (this.arr[e] > t.arr[e])
                return true;
            if (this.arr[e] < t.arr[e])
                return false;
        }
        return false;
    };
    math_BigUInt.prototype.isZero = function () {
        if (this.len == 1)
            return 0 == this.arr[0];
        if (this.len == 2)
            return 0 == this.arr[0] && 0 == this.arr[1];
        return false;
    };
    math_BigUInt.prototype.zero = function () {
        return this.arr = [0],
            this.len = 1,
            this;
    };
    math_BigUInt.prototype.one = function () {
        return this.arr = [1],
            this.len = 1,
            this;
    };
    math_BigUInt.prototype.getString = function (t) {
        if (t === void 0) { t = ""; }
        var e = this.arr.concat();
        return e.reverse(),
            e.join(t);
    };
    math_BigUInt.prototype.getShortString = function () {
        var t = 0, e = 0, i = "", s = 0;
        if (1 == (t = this.len) && 0 == this.arr[0])
            return "0";
        if (2 == (t = this.len) && 0 == this.arr[0] && 0 == this.arr[1])
            return "0";
        for (e = t % 3, s = Math.floor(t / 3), 0 == e && (e = 3, s--), e = t - e; t-- > e;)
            i += this.arr[t];
        return s > 0 && this.arr[t] > 0 && (i += "." + this.arr[t]),
            i += math_BigUInt.D[s];
    };
    // public getShortString2() {
    //     var t = 0,
    //         e = 0,
    //         i = "",
    //         s = 0;
    //     if (1 == (t = this.len) && 0 == this.arr[0]) return "0";
    //     for (e = t % 3, s = Math.floor(t / 3), 0 == e && (e = 3, s--), e = t - e; t-- > e;) i += this.arr[t];
    //     return s > 0 && (this.arr[t] > 0 && (i += "." + this.arr[t]), this.arr[t + 1] > 0 && (i += this.arr[t + 1])),
    //         i += this.D[s];
    // }
    math_BigUInt.prototype.getV1 = function () {
        var t = this.getShortString();
        if (this.len > 3) {
            t = t.substr(0, t.length - 1);
            // var ii = t.split(".");
            // if (ii.length == 2)  {
            //     t = ii[0];
            // }
            return parseFloat(t);
        }
        else {
            return parseFloat(t);
        }
    };
    math_BigUInt.prototype.getV2 = function () {
        var t = this.getShortString();
        if (this.len > 3) {
            return t.substr(t.length - 1, 1);
        }
        else {
            return "A";
        }
    };
    math_BigUInt.prototype.clone = function () {
        var e = new math_BigUInt();
        return e.arr = this.arr.concat(),
            e.len = this.len,
            e;
    };
    math_BigUInt.prototype.copy = function (t) {
        return this.arr = t.arr.concat(),
            this.len = t.len,
            this;
    };
    // K: 3,
    // M: 6,
    // B: 9,
    // T: 12,
    // P=U
    // E=V
    // Z=W
    // Y=X
    // S=Y
    math_BigUInt.D = ["", "K", "M", "B", "T", "U", "V", "W", "X", "Y"];
    math_BigUInt.DLen = {
        K: 3,
        M: 6,
        B: 9,
        T: 12,
        U: 15,
        V: 18,
        W: 21,
        X: 24,
        Y: 27
    };
    math_BigUInt.bi1 = new math_BigUInt();
    math_BigUInt.biR = new math_BigUInt();
    return math_BigUInt;
}());
//# sourceMappingURL=BigUInt.js.map