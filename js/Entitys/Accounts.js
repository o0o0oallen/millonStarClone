/*
* Ycj
* 2018 - 08 - 06
* 游戏用户实体类
*/
var Accounts = /** @class */ (function () {
    //构造方法
    function Accounts() {
        this.loginok = false;
        this._money = 0;
        this._moneye = 0;
        this._diamond = 0;
        this.nbox = [];
        this.autokill = 1;
        this.dps_heishi = 0;
        this._equip = 0;
        this.offlineMoney = [];
        this.qiandaoTime = 0;
        this.qiandaoNum = 0;
        this.closeEffect = 0;
        this.highestLevel = 0;
        this.groundmoney = 0; //地上的所有的钱
        this.groundmoneye = 0; //地上的所有钱E
        this.nInvieteTime = 0;
        this.nOldInviteFriendNum = 0;
        heroplayer = this;
    }
    Accounts.prototype.__init__ = function () {
        //console.log("__init__:Account");
        // KBEngine.Event.register("EnterGame", this, "EnterGame");
        //KBEngine.Event.register("Event_HelloToFirstEntity", this, "HelloToFirstEntity");
        // this.baseCall("hello");
        //this.InitUserData();
        //if(CD.Platform != Platform.Wechat && CD.Platform != Platform.H5)
        //初始分享
        SM.OnInitShare();
        // LC.Connection_Success();
        //this.tempAllMoney = [0,0]; 
        this.tempMoney = [0, 0];
        this.offlineMoney = [0, 0];
    };
    Object.defineProperty(Accounts.prototype, "isOK", {
        get: function () {
            return this.loginok;
        },
        enumerable: false,
        configurable: true
    });
    Accounts.prototype.onDestroy = function () {
        console.log("Account - onDestroy 对象销毁");
    };
    Accounts.prototype.onEnterGameFailed = function (str) {
        console.log("Account - onEnterGameFailed 登录失败");
    };
    Accounts.prototype.onEnterGameSuccess = function () {
        //this.loginok = true;
    };
    Accounts.prototype.toc = function (msg, str) {
        var objs = JSON.parse(str);
        //console.log("toc: "+msg+" json: "+str);
        switch (msg) {
            case 101: //转生
                this.SwitchUserFun(objs);
                break;
            default:
                console.log("找不到这个方法:" + msg);
                break;
        }
    };
    ///msg是消息类型,parms是数组类型(不含有中文),parms_unicode是unicode格式,只有中文格式才用这个
    Accounts.prototype.tos = function (msg, parms, parms_unicode) {
        // console.log("parms: "+msg+" json: "+JSON.stringify(parms));
        //this.baseCall("tos",msg,JSON.stringify(parms),JSON.stringify(parms_unicode));
        if (parms_unicode === void 0) { parms_unicode = undefined; }
    };
    //玩家处理消息
    Accounts.prototype.SwitchUserFun = function (_data) {
        var nId = _data[0];
        var _d;
        // switch (nId)  {
        // }
    };
    Accounts.prototype.ShopMsg = function (sMsg) {
        var nId = sMsg[0];
    };
    Object.defineProperty(Accounts.prototype, "playerName", {
        get: function () {
            return this._playerName;
        },
        //玩家名称
        set: function (val) {
            this._playerName = val;
            // if(UI.Main_View != null)
            // {
            //     UI.Main_View.OnShowName();K
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "serverTick", {
        set: function (val) {
            cFun.SetTickTime(parseInt(val));
            //console.log("获得时间"+val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "money", {
        get: function () {
            return this._money;
        },
        //收益值1
        set: function (val) {
            this._money = val;
            // console.log("set money: "+this.money);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "moneye", {
        get: function () {
            return this._moneye;
        },
        //收益值2
        set: function (val) {
            this._moneye = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "DBID", {
        get: function () {
            return this["dbid"];
        },
        enumerable: false,
        configurable: true
    });
    //获取的当前总收益
    Accounts.prototype.GetAllMoney = function () {
        return cFun.GetValue(this.money, this.moneye);
    };
    Object.defineProperty(Accounts.prototype, "getdismonds", {
        set: function (obj1) {
            //出弹框
            var cur = obj1.m; //现在有的量
            var addamount = obj1.c; //增加量
            var curlv = obj1.lv; //通关lv
            var type = obj1.t; // 1弹提示
            //if(type == 1 && addamount > 0)
            //    UI.levelDiamondReward_view.showwin(curlv,addamount);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "gethearts", {
        set: function (obj1) {
            //出弹框
            var cur = obj1.m; //现在有的量
            var addamount = obj1.c; //增加量
            var curlv = obj1.lv; //通关lv
            var type = obj1.t; // 1弹提示
            this.heartAmount = cur;
            if (addamount > 0 && type == 1)
                UI.OnShowReward(3, addamount);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "boxgetLevel", {
        get: function () {
            return this._boxgetLevel;
        },
        set: function (val) {
            this._boxgetLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Accounts.prototype, "getfragmentbox", {
        set: function (obj1) {
            var cur = obj1.m; //现在有的量
            var addamount = obj1.c; //增加量
            var type = obj1.t; // 1弹提示
            this.KeyCount = cur;
            if (addamount > 0 && type == 1)
                UI.OnShowReward(5, addamount);
        },
        enumerable: false,
        configurable: true
    });
    return Accounts;
}());
//# sourceMappingURL=Accounts.js.map