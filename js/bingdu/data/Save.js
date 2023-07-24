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
/*
* name;
*/
var Data_Save = /** @class */ (function (_super) {
    __extends(Data_Save, _super);
    function Data_Save(t) {
        var _this = _super.call(this) || this;
        _this.useSign = true;
        _this.key = null;
        _this.dataLocal = null;
        _this.dataServer = null;
        _this.isSyned = false;
        _this.saveTimer = 0;
        _this.key = t;
        return _this;
    }
    Data_Save.prototype.readLocal = function () {
        //   laya.net.LocalStorage.clear();
        var t = "";
        var chgsave = 0;
        t += laya.net.LocalStorage.getItem(this.key);
        if ("{" == (t = Laya.Browser.window.unescape(t)).charAt(0)) {
            this.dataLocal = JSON.parse(t);
            this.useSign && this.dataLocal.sign != this.sign(this.dataLocal).sign && (this.dataLocal = null);
        }
        else if (CD.IFSSaveData.indexOf("{") == 0) {
            console.log("readdata====" + CD.IFSSaveData);
            this.dataLocal = JSON.parse(CD.IFSSaveData);
            if (this.useSign) {
                if (this.dataLocal.sign != this.sign(this.dataLocal).sign) {
                    this.dataLocal = null;
                }
                else {
                    chgsave = 1;
                }
            }
        }
        this.applayLocal();
        if (chgsave == 1) {
            for (var i = 0; i < 18; i++) {
                SV.ME.dadian[i] = 1;
            }
        }
    };
    Data_Save.prototype.applayLocal = function () { };
    // public applayServer(t) { }
    Data_Save.prototype.dosave = function (t, i) {
        var e = JSON.stringify(this.dataLocal);
        laya.net.LocalStorage.setItem(this.key, e); //lttt
        if (CD.Platform == Platform.Ios && Laya.timer.currTimer > this.saveTimer) {
            var sData = {
                type: "save",
                data: e
            };
            var sj = JSON.stringify(sData);
            console.log("dosave====" + sj);
            IFS.ME.doCall(sj);
            this.saveTimer = Laya.timer.currTimer + 60 * 1000;
        }
        // laya.net.LocalStorage.support ? laya.net.LocalStorage.setItem(this.key, e) : data_Cookie.set(this.key, e);
        t && (this.isSyned ? this.event("saveServer", e) : this.event("readServer"));
    };
    Data_Save.prototype.sign = function (t) {
        var e = [], i = "";
        t.sign = "";
        for (var s in t)
            e.push(s);
        e.sort(function (t, e) {
            return t > e ? -1 : t < e ? 1 : 0;
        });
        var n;
        for (n in e)
            i += (s = e[n]) + t[s];
        return i = i.substring(0, i.length - 1),
            this.useSign && (t.sign = MD5.ME.hash(i)),
            t;
    };
    return Data_Save;
}(Game_Event));
//# sourceMappingURL=Save.js.map