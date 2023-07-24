/*
* name;
*/
var HuiBao = /** @class */ (function () {
    function HuiBao() {
    }
    //账号汇报
    HuiBao.prototype.Account = function (_data) {
        //if (CD.LanguageVersion != Language.eng) return;
        // this.HuiBao("", _data, HuiBaoType.Account);
    };
    //用户等级
    HuiBao.prototype.Account_Level = function (accountId, level) {
        //if (CD.LanguageVersion != Language.eng) return;
        // var _data: any = { accountId: accountId, level: level };
        // this.HuiBao("", _data, HuiBaoType.AccountLevel);
    };
    //高级功能-自定义事件
    HuiBao.prototype.onEvent = function (_key, _data) {
        //if (CD.LanguageVersion != Language.eng) return;
        // this.HuiBao(_key, _data, HuiBaoType.onEvent);
    };
    //基础-任务、关卡或副本
    HuiBao.prototype.RenWu = function (_key, missionId, cause) {
        if (cause === void 0) { cause = ""; }
        //if (CD.LanguageVersion != Language.eng) return;
        // var _data: any = { missionId: missionId, cause: cause };
        // this.HuiBao(_key, _data, HuiBaoType.RenWu);
    };
    //基础-追踪游戏消费点
    HuiBao.prototype.XiaoFei = function (_key, item, itemNumber, priceInVirtualCurrency) {
        //if (CD.LanguageVersion != Language.eng) return;
        // var _data: any = { item: item, itemNumber: itemNumber, priceInVirtualCurrency: priceInVirtualCurrency };
        // this.HuiBao(_key, _data, HuiBaoType.XiaoFei);
    };
    //基础-追踪获赠的虚拟币（可选）
    HuiBao.prototype.ZengSong = function (_key, currencyAmount, reason) {
        //if (CD.LanguageVersion != Language.eng) return;
        // var _data: any = { currencyAmount: currencyAmount, reason: reason };
        // this.HuiBao(_key, _data, HuiBaoType.ZengSong);
    };
    //数据汇报统一接口
    HuiBao.prototype.HuiBao = function (_key, _data, _type) {
        if (_type === void 0) { _type = "onEvent"; }
        if (GameMain.OpenTDGA > 0) {
            if (CD.Platform == Platform.H5) {
                if (_type == "Account") {
                    Laya.Browser.window.TDGA.Account(_data);
                }
                else if (_type == "onEvent") {
                    Laya.Browser.window.TDGA.onEvent(_key, _data);
                }
            }
            else if (CD.Platform == Platform.Android) {
                // var fdata: any = { type: _type, key: _key, data: _data };
                // Laya.conchMarket.enterFeedback(JSON.stringify(fdata), function (data) { });
            }
            else if (CD.Platform == Platform.Ios) {
                // var fdata: any = { type: _type, key: _key, data: _data };
                // AdsManager.doAnalyticsCall("doFireLog",JSON.stringify(fdata));
            }
        }
    };
    return HuiBao;
}());
var HuiBaoType;
(function (HuiBaoType) {
    HuiBaoType.Account = "Account"; //账号汇报
    HuiBaoType.AccountLevel = "AccountLevel"; //账号汇报
    HuiBaoType.onEvent = "onEvent"; //高级功能-自定义事件
    HuiBaoType.RenWu = "RenWu"; //基础-任务、关卡或副本
    HuiBaoType.XiaoFei = "XiaoFei"; //基础-追踪游戏消费点
    HuiBaoType.ZengSong = "ZengSong"; //基础-追踪获赠的虚拟币（可选）
})(HuiBaoType || (HuiBaoType = {}));
(function (HuiBao) {
    var RenWu_Key;
    (function (RenWu_Key) {
        RenWu_Key.onBegin = "onBegin";
        RenWu_Key.onCompleted = "onCompleted";
        RenWu_Key.onFailed = "onFailed";
    })(RenWu_Key = HuiBao.RenWu_Key || (HuiBao.RenWu_Key = {}));
})(HuiBao || (HuiBao = {}));
(function (HuiBao) {
    var XiaoFei_Key;
    (function (XiaoFei_Key) {
        XiaoFei_Key.onPurchase = "onPurchase";
        XiaoFei_Key.onUse = "onUse";
    })(XiaoFei_Key = HuiBao.XiaoFei_Key || (HuiBao.XiaoFei_Key = {}));
})(HuiBao || (HuiBao = {}));
(function (HuiBao) {
    var ZengSong_Key;
    (function (ZengSong_Key) {
        ZengSong_Key.onReward = "onReward";
    })(ZengSong_Key = HuiBao.ZengSong_Key || (HuiBao.ZengSong_Key = {}));
})(HuiBao || (HuiBao = {}));
//# sourceMappingURL=HuiBao.js.map