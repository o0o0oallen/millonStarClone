/*
* name;
*/
var ThinkingData = /** @class */ (function () {
    function ThinkingData() {
    }
    //账号汇报
    ThinkingData.prototype.track = function (_key, _data) {
        //if (CD.LanguageVersion != Language.eng) return;
        this.ThinkingData(_key, _data, TDType.track);
    };
    //用户等级server
    ThinkingData.prototype.setSP = function (channel) {
        //if (CD.LanguageVersion != Language.eng) return;
        var _data = { channel: channel };
        this.ThinkingData("", _data, TDType.setSP);
    };
    //login id
    ThinkingData.prototype.login = function (_data) {
        //if (CD.LanguageVersion != Language.eng) return;
        this.ThinkingData("", _data, TDType.login);
    };
    ThinkingData.prototype.user_setOnce = function (_data) {
        //if (CD.LanguageVersion != Language.eng) return;
        this.ThinkingData("", _data, TDType.user_setOnce);
    };
    ThinkingData.prototype.user_set = function (_data) {
        //if (CD.LanguageVersion != Language.eng) return;
        this.ThinkingData("", _data, TDType.user_set);
    };
    // //基础-任务、关卡或副本
    // public RenWu(_key: string, missionId: string, cause: string = ""): void {
    //     //if (CD.LanguageVersion != Language.eng) return;
    //     var _data: any = { missionId: missionId, cause: cause };
    //     this.ThinkingData(_key, _data, TDType.RenWu);
    // }
    // //基础-追踪游戏消费点
    // public XiaoFei(_key: string, item: string, itemNumber: number, priceInVirtualCurrency: number): void {
    //     //if (CD.LanguageVersion != Language.eng) return;
    //     var _data: any = { item: item, itemNumber: itemNumber, priceInVirtualCurrency: priceInVirtualCurrency };
    //     this.ThinkingData(_key, _data, TDType.XiaoFei);
    // }
    // //基础-追踪获赠的虚拟币（可选）
    // public ZengSong(_key: string, currencyAmount: number, reason: string): void {
    //     //if (CD.LanguageVersion != Language.eng) return;
    //     var _data: any = { currencyAmount: currencyAmount, reason: reason };
    //     this.ThinkingData(_key, _data, TDType.ZengSong);
    // }
    ThinkingData.prototype.firebase = function (_key, _data) {
        if (CD.BanBen == BanBen.guonei)
            return;
        // console.log("====firebase log:" + _key);
        //if (CD.LanguageVersion != Language.eng) return;
        this.ThinkingData(_key, _data, TDType.firebase);
    };
    //数据汇报统一接口
    ThinkingData.prototype.ThinkingData = function (_key, _data, _type) {
        if (_type === void 0) { _type = "track"; }
        //HMS
        // var fdata: any = { type: _type, key: _key, data: _data };
        // if (CD.Platform == Platform.Android) {
        //     IFS.ME.doLog(JSON.stringify(fdata));
        // }
        // else if (CD.Platform == Platform.Ios) {
        //     IFS.ME.doLog(JSON.stringify(fdata));
        // }
    };
    return ThinkingData;
}());
var TDType;
(function (TDType) {
    TDType.login = "login"; //
    TDType.setSP = "setSP"; //
    TDType.track = "track"; //
    TDType.user_set = "user_set"; //
    TDType.user_setOnce = "user_setOnce"; //
    TDType.firebase = "firebase"; //
})(TDType || (TDType = {}));
//# sourceMappingURL=ThinkingData.js.map