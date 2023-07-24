/*
* name;
*/
var ParamOnline = /** @class */ (function () {
    function ParamOnline() {
        this.data = null;
        this.url = null;
        ParamOnline.ME = this;
    }
    /*
  * 本地存储, 不存档, 可以随时操作
  */
    ParamOnline.prototype.getdata = function (key) {
        var t = laya.net.LocalStorage.getItem(key);
        if (t != undefined) {
            return t;
        }
        return undefined;
    };
    ParamOnline.prototype.setdata = function (key, val) {
        laya.net.LocalStorage.setItem(key, val);
    };
    ParamOnline.prototype.init = function (t) {
        //ltt
        "" != t && (this.data = JSON.parse(JSON.stringify(t)));
    };
    ParamOnline.prototype.getArr = function (t, e) {
        var i;
        return this.data ? (i = this.data[t]) || (i = e) : i = e,
            i;
    };
    ParamOnline.prototype.getInt = function (t, e) {
        if (e === void 0) { e = 0; }
        var i = 0;
        return this.data ? (i = parseInt(this.data[t]), isNaN(i) && (i = e)) : i = e,
            i;
    };
    ParamOnline.prototype.getNumber = function (t, e) {
        if (e === void 0) { e = 0; }
        var i = NaN;
        //if(t == "IsOpenVideo")return 0;
        if (t == "IsOpenVideo")
            return 1; //HMS
        return this.data ? (i = this.data[t], isNaN(i) && (i = e)) : i = e,
            i;
    };
    ParamOnline.prototype.getBool = function (t, e) {
        if (e === void 0) { e = false; }
        if (this.data) {
            return 1 == this.data[t];
        }
        else {
            return e;
        }
    };
    ParamOnline.ME = null;
    return ParamOnline;
}());
//# sourceMappingURL=ParamOnline.js.map