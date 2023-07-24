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
var SV = /** @class */ (function (_super) {
    __extends(SV, _super);
    function SV(t) {
        var _this = _super.call(this, t) || this;
        _this.isNewPlayer = false;
        _this.isSoundOff = false;
        _this.isShackOff = false;
        _this.level = 1;
        _this.lDamage = 1; //
        _this.lCount = 1; //
        _this.lJiaZhi = 1;
        _this.lRiChang = 1;
        _this.bgIndex = 1;
        _this.levelFuCount = null;
        _this.levelFuDamage = null;
        _this.curFu = -1;
        _this.tipFU = false;
        // public iGuideStep = -1;
        _this.datagetTime = "";
        _this.tiLi = 60;
        _this.tiLiBackTime = -1;
        _this.today = 0;
        _this.tryFuCount = 0;
        _this.shareCount = 0; //每日免费领取钻石次数
        _this.videoCount = 0;
        _this.playCount = 0;
        _this.isGuanZhu = false;
        _this.isShouCang = false;
        _this.datapos = null;
        _this.posUpdate = 0;
        _this.isFirstApplayServer = true;
        _this.downTimer = 0;
        _this.money = new math_BigUInt();
        _this.moneyall = new math_BigUInt();
        _this.gold = 20; //钻石
        _this.doScore = 0; //评价分数
        _this.dadian = null; //新玩家触发打点 //45个打点
        _this.dadianlv = null; //新玩家触发打点 //50个打点
        _this.videoAdsCount = 0;
        _this.videoAdsTime = "";
        _this.insertAdsCount = 0;
        _this.insertAdsTime = "";
        _this.jsInsertAdsNum = 0;
        _this.videoAdsOKCount = 0;
        _this.insertAdsOKCount = 0;
        _this.loginTime = ""; //领取签到奖励时间
        _this.loginNum = 0; //可领取签到天数
        _this.signIn = ""; //签到领取状态
        //成就系统
        _this.achLingqu = new Dictionary();
        _this.achJiLu = new Dictionary();
        //道具
        _this.itemdata = new Dictionary();
        _this.boxLevel = 0;
        _this.buffshow = 0;
        _this.relifetryfunum = 0;
        _this.onlinedate0 = ""; //零点日期
        _this.buyNoXp = 0; //购买屏蔽插屏标记
        _this.useButtleId = 0;
        _this.useWingId = 1200;
        _this.szNewFwq = [];
        _this.firstCharge = 0;
        _this.EndlessTime = 0;
        _this.RevValue = 0; //用户广告回收价值
        _this.GWebData = {};
        SV.ME = _this;
        _this.empty();
        return _this;
    }
    SV.prototype.empty = function () {
        this.isSoundOff = false,
            this.level = 1,
            this.lCount = 1, //speed
            this.lDamage = 1, //fire
            this.lJiaZhi = 1, //Coin values
            this.lRiChang = 1, //Daily Income
            this.bgIndex = 1,
            this.levelFuCount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //上面的[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            this.levelFuDamage = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //下面的
            this.curFu = -1,
            this.tipFU = false,
            this.money.setByShortString("0"),
            this.moneyall.setByShortString("0"),
            this.datagetTime = "",
            this.tiLi = 60,
            this.tiLiBackTime = -1,
            this.today = 0,
            this.tryFuCount = 0,
            this.shareCount = 0,
            this.videoCount = 0,
            this.playCount = 0,
            this.isGuanZhu = false,
            this.isShouCang = false,
            this.datapos = "",
            this.posUpdate = 0;
        this.dadian = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.dadianlv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.videoAdsCount = 0;
        this.videoAdsTime = "";
        this.insertAdsCount = 0;
        this.insertAdsTime = "";
        this.videoAdsOKCount = 0;
        this.insertAdsOKCount = 0;
        this.jsInsertAdsNum = 0;
        this.loginTime = "";
        this.loginNum = 0;
        this.signIn = "";
        this.achLingqu = new Dictionary();
        this.achJiLu = new Dictionary();
        this.itemdata = new Dictionary();
        this.boxLevel = 0;
        this.buffshow = 0;
        this.relifetryfunum = 0;
        this.onlinedate0 = "";
        this.buyNoXp = 0;
        this.szNewFwq = [];
        this.useButtleId = 0;
        this.useWingId = 1200;
        this.firstCharge = 0;
        this.EndlessTime = 0;
        this.RevValue = 0;
    };
    //无尽模式清数据（武器等级、金币价值）
    SV.prototype.modeClear = function () {
        //this.isSoundOff = false,
        this.level = 1,
            this.lCount = 1, //speed
            this.lDamage = 1, //fire
            this.lJiaZhi = 1, //Coin values
            this.lRiChang = 1, //Daily Income
            this.bgIndex = 1,
            this.levelFuCount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //上面的
            this.levelFuDamage = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //下面的
        Cfg.initButtle();
        //this.curFu = -1,
        //this.tipFU = false,
        //this.money.setByShortString("0"),
        //this.moneyall.setByShortString("0"),
        //this.datagetTime = "",
        //this.tiLi = 60,
        //this.tiLiBackTime = -1,
        //this.today = 0,
        //this.tryFuCount = 0,
        //this.shareCount = 0,
        //this.videoCount = 0,
        //this.playCount = 0,
        //this.isGuanZhu = false,
        //this.isShouCang = false,
        //this.datapos = "",
        //this.posUpdate = 0;
        //this.dadian = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //this.dadianlv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        //this.videoAdsCount = 0;
        //this.videoAdsTime = "";
        //this.insertAdsCount = 0;
        //this.insertAdsTime = "";
        //this.jsInsertAdsNum = 0;
        //this.loginTime = "";
        //this.loginNum = 0;
        //this.signIn = "";
        //this.achLingqu = new Dictionary();
        //this.achJiLu = new Dictionary();
        //this.itemdata = new Dictionary();
        //this.boxLevel = 0;
        //this.buffshow = 0;
        //this.relifetryfunum = 0;
        //this.onlinedate0 = "";
        //this.buyNoXp = 0;
        //this.szNewFwq = [];
        //this.useButtleId = 0;
        //this.useWingId = 1200;
        //this.firstCharge = 0;
        //this.EndlessTime = 0;
    };
    SV.prototype.doDadianMore = function (iWhere, key, data) {
        if (iWhere < this.dadian.length) {
            if (this.dadian[iWhere] == 0) {
                this.dadian[iWhere] = 1;
                this.dosave(false, 92);
                //TK.track(key, data);
                return true;
            }
        }
        return false;
    };
    SV.prototype.doDadian = function (iWhere) {
        //console.log("doDadian=="+iWhere+"=="+this.dadian.length);
        if (iWhere < this.dadian.length) {
            if (this.dadian[iWhere] == 0) {
                this.dadian[iWhere] = 1;
                this.dosave(false, 91);
                //var dataTDGA = {step:iWhere.toString()};
                // HB.onEvent("dadian_" + iWhere, { value: 1 });
                // if(CD.Platform == Platform.MGC_H5 || CD.Platform == Platform.H5)
                // {
                //     iWhere == 0 && ThinkingData_H5.ME.track("dadian", { step: iWhere });
                // }
                // else
                // {
                //     iWhere == 0 && TK.track("dadian", { step: iWhere });
                // }
                //console.log("TK_H5.track=step:"+iWhere);
                //TK_H5.track("dadian", { step: iWhere });
                return true;
            }
        }
        return false;
    };
    SV.prototype.isDadian = function (idx) {
        if (idx < this.dadian.length)
            return this.dadian[idx] == 1;
        return false;
    };
    SV.prototype.doDadianlv = function (iWhere) {
        if (iWhere < this.dadianlv.length) {
            if (this.dadianlv[iWhere] == 0) {
                this.dadianlv[iWhere] = 1;
                this.dosave(false, 93);
                //var dataTDGA = {step:iWhere.toString()};
                // HB.onEvent("lv_" + iWhere, { value: 1 });
                // if(CD.Platform == Platform.MGC_H5 || CD.Platform == Platform.H5)
                // {
                //     ThinkingData_H5.ME.track("level", { lv: iWhere });
                // }
                // else
                // {
                //     TK.track("level", { lv: iWhere });
                // }
                return true;
            }
        }
        return false;
    };
    SV.prototype.isDadianlv = function (idx) {
        if (idx < this.dadianlv.length)
            return this.dadianlv[idx] == 1;
        return false;
    };
    SV.prototype.applayLocal = function () {
        if (null != this.dataLocal) {
            if ((SV.UID == this.dataLocal.dl_01 || null == this.dataLocal.dl_01) && (this.isSoundOff = this.dataLocal.dl_02,
                this.isShackOff = this.dataLocal.dl_03,
                this.level = this.dataLocal.dl_04,
                this.lDamage = this.dataLocal.dl_05,
                this.lCount = this.dataLocal.dl_06,
                this.lJiaZhi = this.dataLocal.dl_07,
                this.lRiChang = this.dataLocal.dl_08,
                this.curFu = this.dataLocal.dl_09,
                this.levelFuCount = this.dataLocal.dl_10,
                this.levelFuDamage = this.dataLocal.dl_11,
                this.datagetTime = this.dataLocal.dl_12,
                this.bgIndex = this.dataLocal.dl_13,
                this.money.setByShortString(this.dataLocal.dl_14),
                this.tipFU = false, //this.dataLocal.dl_15,
                this.dadianlv = this.dataLocal.dl_16,
                this.tiLi = this.dataLocal.dl_17,
                this.tiLiBackTime = this.dataLocal.dl_18,
                this.today = this.dataLocal.dl_19,
                this.playCount = this.dataLocal.dl_20,
                //this.isGuanZhu = this.dataLocal.dl_21,
                this.moneyall.setByShortString(this.dataLocal.dl_21),
                this.isShouCang = this.dataLocal.dl_22,
                this.dadian = this.dataLocal.dl_23,
                this.datapos = this.dataLocal.dl_24,
                this.posUpdate = this.dataLocal.dl_25,
                this.shareCount = this.dataLocal.dl_26,
                this.today != new Date().getDate() ? (this.today = new Date().getDate(),
                    this.videoCount = 0,
                    this.tryFuCount = 0) : (this.videoCount = this.dataLocal.dl_27,
                    this.tryFuCount = this.dataLocal.dl_28),
                this.dataLocal.dl_29 == undefined ? this.videoAdsCount = 0 : this.videoAdsCount = this.dataLocal.dl_29,
                this.dataLocal.dl_30 == undefined ? this.videoAdsTime = "" : this.videoAdsTime = this.dataLocal.dl_30,
                this.dataLocal.dl_31 == undefined ? this.insertAdsCount = 0 : this.insertAdsCount = this.dataLocal.dl_31,
                this.dataLocal.dl_32 == undefined ? this.insertAdsTime = "" : this.insertAdsTime = this.dataLocal.dl_32,
                this.dataLocal.dl_33 == undefined ? this.loginTime = "" : this.loginTime = this.dataLocal.dl_33,
                this.dataLocal.dl_34 == undefined ? this.loginNum = 0 : this.loginNum = this.dataLocal.dl_34,
                this.dataLocal.dl_35 == undefined ? this.signIn = "" : this.signIn = this.dataLocal.dl_35,
                this.dataLocal.dl_36 == undefined ? this.achLingqu = new Dictionary() : this.achLingqu = this.hydic(this.dataLocal.dl_36),
                this.dataLocal.dl_37 == undefined ? this.achJiLu = new Dictionary() : this.achJiLu = this.hydic(this.dataLocal.dl_37),
                this.dataLocal.dl_38 == undefined ? this.jsInsertAdsNum = 0 : this.jsInsertAdsNum = this.dataLocal.dl_38,
                this.dataLocal.dl_39 == undefined ? this.itemdata = new Dictionary() : this.itemdata = this.hydic(this.dataLocal.dl_39),
                this.dataLocal.dl_40 == undefined ? this.boxLevel = 0 : this.boxLevel = this.dataLocal.dl_40,
                this.dataLocal.dl_41 == undefined ? this.buffshow = 0 : this.buffshow = this.dataLocal.dl_41,
                this.dataLocal.dl_42 == undefined ? this.relifetryfunum = 0 : this.relifetryfunum = this.dataLocal.dl_42,
                this.dataLocal.dl_43 == undefined ? this.onlinedate0 = "" : this.onlinedate0 = this.dataLocal.dl_43,
                this.dataLocal.dl_44 == undefined ? this.gold = 20 : this.gold = this.dataLocal.dl_44,
                this.dataLocal.dl_45 == undefined ? this.doScore = 0 : this.doScore = this.dataLocal.dl_45,
                this.dataLocal.dl_46 == undefined ? this.buyNoXp = 0 : this.buyNoXp = this.dataLocal.dl_46,
                this.dataLocal.dl_47 == undefined ? this.szNewFwq = [] : this.szNewFwq = this.dataLocal.dl_47,
                this.dataLocal.dl_48 == undefined ? this.useButtleId = 0 : this.useButtleId = this.dataLocal.dl_48,
                this.dataLocal.dl_49 == undefined ? this.firstCharge = 0 : this.firstCharge = this.dataLocal.dl_49,
                this.dataLocal.dl_50 == undefined ? this.useWingId = 1200 : this.useWingId = this.dataLocal.dl_50,
                this.dataLocal.dl_51 == undefined ? this.EndlessTime = 0 : this.EndlessTime = this.dataLocal.dl_51,
                this.dataLocal.dl_52 == undefined ? this.videoAdsOKCount = 0 : this.videoAdsOKCount = this.dataLocal.dl_52,
                this.dataLocal.dl_53 == undefined ? this.insertAdsOKCount = 0 : this.insertAdsOKCount = this.dataLocal.dl_53,
                this.dataLocal.dl_54 == undefined ? this.RevValue = 0 : this.RevValue = this.dataLocal.dl_54,
                Math.abs(this.posUpdate - this.today) >= 7 && (this.posUpdate = this.today,
                    this.event("getPos")))) {
                for (var t = 0; t < Cfg.COUNT_FU; t++)
                    this.levelFuDamage[t] > 1 && (this.levelFuDamage[t] = Math.min(999, 30 * this.levelFuDamage[t]));
            }
            if (this.levelFuCount.length < Cfg.COUNT_FU) {
                var i, nnum = Cfg.COUNT_FU - this.levelFuCount.length;
                for (i = 0; i < nnum; i++) {
                    this.levelFuCount.push(1);
                    this.levelFuDamage.push(1);
                }
            }
        }
        else
            this.isNewPlayer = true;
        this.dosave(false, 94);
    };
    SV.prototype.hydic = function (data) {
        var dicData = new Dictionary();
        for (var key in data.keys) {
            dicData.Add(data.keys[key], data.values[key]);
        }
        return dicData;
    };
    SV.prototype.hybigUint = function (data) {
        var dicData = new math_BigUInt();
        dicData.arr = data.arr;
        dicData.len = data.len;
        return dicData;
    };
    SV.prototype.dosave = function (i, iwhere) {
        if (i === void 0) { i = false; }
        //console.log("dosave!!!!!!!!!!!!!!!" + iwhere + "_" + i);
        if (Game.ME && Game.ME.playMode == 1)
            return; //无尽模式不存库
        this.dataLocal = {},
            this.dataLocal.dl_01 = SV.UID,
            this.dataLocal.dl_02 = this.isSoundOff,
            this.dataLocal.dl_03 = this.isShackOff,
            this.dataLocal.dl_04 = this.level,
            this.dataLocal.dl_05 = this.lDamage,
            this.dataLocal.dl_06 = this.lCount,
            this.dataLocal.dl_07 = this.lJiaZhi,
            this.dataLocal.dl_08 = this.lRiChang,
            this.dataLocal.dl_09 = this.curFu,
            this.dataLocal.dl_10 = this.levelFuCount,
            this.dataLocal.dl_11 = this.levelFuDamage,
            this.dataLocal.dl_12 = this.datagetTime,
            this.dataLocal.dl_13 = this.bgIndex,
            this.dataLocal.dl_14 = this.money.getString(),
            //this.dataLocal.dl_15 = this.tipFU,
            this.dataLocal.dl_16 = this.dadianlv,
            this.dataLocal.dl_17 = this.tiLi,
            this.dataLocal.dl_18 = this.tiLiBackTime,
            this.dataLocal.dl_19 = this.today,
            this.dataLocal.dl_20 = this.playCount,
            this.dataLocal.dl_21 = this.moneyall.getString(),
            this.dataLocal.dl_22 = this.isShouCang,
            this.dataLocal.dl_23 = this.dadian,
            this.dataLocal.dl_24 = this.datapos,
            this.dataLocal.dl_25 = this.posUpdate,
            this.dataLocal.dl_26 = this.shareCount,
            this.dataLocal.dl_27 = this.videoCount,
            this.dataLocal.dl_28 = this.tryFuCount,
            this.dataLocal.dl_29 = this.videoAdsCount,
            this.dataLocal.dl_30 = this.videoAdsTime,
            this.dataLocal.dl_31 = this.insertAdsCount,
            this.dataLocal.dl_32 = this.insertAdsTime,
            this.dataLocal.dl_33 = this.loginTime,
            this.dataLocal.dl_34 = this.loginNum,
            this.dataLocal.dl_35 = this.signIn,
            this.dataLocal.dl_36 = this.achLingqu,
            this.dataLocal.dl_37 = this.achJiLu,
            this.dataLocal.dl_38 = this.jsInsertAdsNum,
            this.dataLocal.dl_39 = this.itemdata,
            this.dataLocal.dl_40 = this.boxLevel,
            this.dataLocal.dl_41 = this.buffshow,
            this.dataLocal.dl_42 = this.relifetryfunum,
            this.dataLocal.dl_43 = this.onlinedate0,
            this.dataLocal.dl_44 = this.gold,
            this.dataLocal.dl_45 = this.doScore,
            this.dataLocal.dl_46 = this.buyNoXp,
            this.dataLocal.dl_47 = this.szNewFwq,
            this.dataLocal.dl_48 = this.useButtleId,
            this.dataLocal.dl_49 = this.firstCharge,
            this.dataLocal.dl_50 = this.useWingId,
            this.dataLocal.dl_51 = this.EndlessTime,
            this.dataLocal.dl_52 = this.videoAdsOKCount,
            this.dataLocal.dl_53 = this.insertAdsOKCount,
            this.dataLocal.dl_54 = this.RevValue,
            this.dataLocal = this.sign(this.dataLocal);
        i ? _super.prototype.dosave.call(this, true, iwhere) : _super.prototype.dosave.call(this, false, iwhere);
    };
    SV.szGameName = "消灭球球";
    SV.UID = null;
    SV.ME = null;
    return SV;
}(Data_Save));
//# sourceMappingURL=SV.js.map