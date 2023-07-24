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
var IFS = /** @class */ (function (_super) {
    __extends(IFS, _super);
    function IFS() {
        var _this = _super.call(this) || this;
        _this.YYChannel = "";
        IFS.ME = _this;
        if (CD.Platform == Platform.Android) {
            IFS.cClass = Laya.PlatformClass.createClass("com.layatojava.IFS");
            IFS.cClass.callWithBack(IFS.callback, "IFSListener");
        }
        else if (CD.Platform == Platform.Ios) {
            IFS.cClass = Laya.PlatformClass.createClass("IFS").newObject(); //创建对应ios广告对象
            if (IFS.cClass) {
                IFS.cClass.callWithBack(function (state) {
                    // console.log("=====callWithIFS:" + state);
                    IFS.callback(state);
                }, "IFSListener");
            }
        }
        return _this;
    }
    IFS.callback = function (value) {
        // console.log("callback" + value);
        var _fgetjson = JSON.parse(value);
        // UI.OnWinMsgUI("callback===="+value);
        var type = _fgetjson.type;
        var data = _fgetjson.data;
        console.log("type" + type);
        switch (type) {
            case "payok":
                IM.api_aibei_pay(type, data);
                break;
            case "payerror":
                IM.api_aibei_pay(type, data);
                break;
            case "onPause":
                Game.ME && Game.ME.onPause();
                break;
            case "onResume":
                Game.ME && Game.ME.onResume();
                break;
            case "config":
                IFS.initConfig(data);
                break;
        }
    };
    IFS.initConfig = function (data) {
        //console.log("==initConfig:" + data);
        try {
            IFS.Config = JSON.parse(data);
        }
        catch (e) { }
        //初始化默认值
        if (CD.BanBen == BanBen.guonei) {
            IFS.Config.lan = "zh-CN";
            // if(CD.Platform == Platform.MGC_H5 || CD.Platform == Platform.H5)
            // {
            //     IFS.ME.YYChannel = "h5_mgc";
            //     ThinkingData_H5.ME.user_set({ "UserChannel": IFS.ME.YYChannel });
            // }
            // else
            // {
            //     IFS.ME.YYChannel = IFS.Config.channel;
            //      //console.log("Channel===" + IFS.ME.YYChannel);
            //     TK.user_set({ "UserChannel": IFS.ME.YYChannel });
            // }
        }
        if (IFS.Config.tt2.length > 0) {
            CD.IFSSaveData = IFS.Config.tt2;
        }
        if (IFS.Config.lan.length > 0) {
            var arrLan = IFS.Config.lan.toLowerCase().split("-");
            if (arrLan.length > 0) {
                CD.Region = arrLan[arrLan.length - 1];
                var _lan = IFS.Config.lan.toLowerCase().replace("-" + CD.Region, "");
                console.log("arrLan====" + IFS.Config.lan + "====" + _lan + "====" + CD.Region);
                switch (_lan) {
                    case "zh-hans": //ios
                        CD.Language = Language.ch; //简体
                        break;
                    case "zh-hant": //ios
                        CD.Language = Language.zh; //繁体
                        break;
                    case "zh": //android
                        if (IFS.Config.lan == "zh-CN") {
                            //HMS
                            //CD.Language = Language.ch;  //简体
                            CD.Language = Language.eng; //简体
                        }
                        else {
                            CD.Language = Language.zh; //繁体
                        }
                        break;
                    case "fr":
                        CD.Language = Language.fr;
                        break;
                    case "de":
                        CD.Language = Language.de;
                        break;
                    case "it":
                        CD.Language = Language.it;
                        break;
                    case "es":
                        CD.Language = Language.es;
                        break;
                    case "pt":
                        CD.Language = Language.pt;
                        break;
                    case "ru":
                        CD.Language = Language.ru;
                        break;
                    case "ja":
                        CD.Language = Language.ja;
                        break;
                    case "ko":
                        CD.Language = Language.ko;
                        break;
                }
            }
        }
        if (IFS.Config.shake.length > 0) {
            CD.CanShake = IFS.Config.shake == "1" ? true : false;
        }
        CD.Platform == Platform.Ios && GameMain.Initialize(1);
    };
    IFS.prototype.doCall = function (t) {
        IFS.IFSCall("doCall", t);
    };
    IFS.prototype.doLog = function (t) {
        IFS.IFSCall("doLog", t);
    };
    IFS.prototype.openUrl = function (t) {
        IFS.IFSCall("openUrl", t);
    };
    IFS.prototype.doPay = function (t) {
        IFS.IFSCall("doPay", t);
    };
    IFS.IFSCall = function (f, t) {
        if (t === void 0) { t = undefined; }
        if (CD.Platform == Platform.Ios && t != undefined) {
            f = f + ":";
        }
        if (IFS.cClass) {
            try {
                // console.log("IFSCall " + f + "++" + t);
                if (t == undefined)
                    IFS.cClass.call(f);
                else
                    IFS.cClass.call(f, t);
            }
            catch (e) {
                // console.log("IFSCall error");
            }
        }
        // else
        // {
        //     console.log("IFSCall null");
        // }
    };
    IFS.Config = { "lan": "en-en", "ver": "", "package": "", "phone": "", "shake": "1", "channel": "", "tt1": "", "tt2": "", "tt3": "" };
    return IFS;
}(Game_Event));
//# sourceMappingURL=IFS.js.map