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
var UI_Manager = /** @class */ (function () {
    //消息提示界面
    // public msgtextui_view: view.MsgTextUI;
    function UI_Manager() {
        this.szAllObj = [];
        this.LoadUIok = false;
    }
    //加载条
    UI_Manager.prototype.Initialize_Load_Progress = function () {
        if (this.load_Progress_View == null) {
            this.load_Progress_View = new view.Load_Progress_View;
            Laya.stage.addChild(this.load_Progress_View);
        }
        //TODO
        UI.Display_Or_Hidden_Load_Progress_UI(true);
        this.load_Progress_View.Load_Data();
        // this.Load_Progress_View = new view.Load_Progress_View;
        // this.Display_Or_Hidden_Load_Progress_UI(true);
        // Laya.stage.addChild(this.Load_Progress_View);
        // this.Load_Progress_View.Load_Data();
    };
    // public creatReconnect() {
    //     if (this.Reconnect_view == null) {
    //         this.Reconnect_view = new view.ReconnectView;
    //         Laya.stage.addChild(this.Reconnect_view);
    //         this.Display_Or_Hidden_UI(this.Reconnect_view, false);
    //     }
    // }
    //初始化方法
    UI_Manager.prototype.Initialize = function () {
        if (this.LoadUIok)
            return;
        // this.Main_View = new view.MainUI;
        // this.Display_Or_Hidden_Main_UI(false);
        // Laya.stage.addChild(this.Main_View);
        // this.Main_View.Init();
        // this.Main_View = new view.MainUI;
        // this.Display_Or_Hidden_Main_UI(false);
        // this.Main_View.Init();
        // this.Shop_View = new view.ShopUI;
        // Laya.stage.addChild(this.Shop_View);
        // this.Display_Or_Hidden_UI(this.Shop_View, false);
        // this.YesOrNoUI_view = new view.YesOrNoUI;
        // Laya.stage.addChild(this.YesOrNoUI_view);
        // this.Display_Or_Hidden_UI(this.YesOrNoUI_view, false);
        // this.YesOrNoUI_view.zOrder = 30;
        Laya.timer.once(500, this, this.ShowOffLineMoney);
        // this.msgtextui_view = new view.MsgTextUI;
        // Laya.stage.addChild(this.msgtextui_view);
        // this.Display_Or_Hidden_UI(this.msgtextui_view, false);
        this.LoadUIok = true;
    };
    UI_Manager.prototype.OnOpenShop = function () {
        // if(CD.Platform == Platform.Android || CD.Platform == Platform.Ios)
        // {
        //     UI.OnShowYesOrNo(languageManger.language[143], languageManger.language[148], languageManger.language[32], "",);
        //     return;
        // }
        if (UI.CanOpenShop() == false) {
            return;
        }
        // UI.Display_Or_Hidden_UI(UI.Shop_View, true);
        // UI.Shop_View.OninitData();
    };
    UI_Manager.prototype.CanOpenShop = function () {
        if (CD.Platform == Platform.Wechat) {
            if (Laya.Browser.onIOS) {
                return false;
            }
        }
        else if (CD.Platform == Platform.Wanyiwan || CD.Platform == Platform.Android) {
            return false;
        }
        else if (CD.BanBen == BanBen.guoji) {
            return false;
        }
        return true;
    };
    UI_Manager.prototype.CostDiamond = function () {
        if (CD.Platform == Platform.H5 || (CD.Platform == Platform.Android && CD.BanBen == BanBen.guonei)) {
            return true;
        }
        return false;
    };
    //显示或隐藏加载界面
    UI_Manager.prototype.Display_Or_Hidden_Load_Progress_UI = function (_State) {
        this.load_Progress_View.visible = _State;
    };
    //显示或隐藏主界面
    UI_Manager.prototype.Display_Or_Hidden_Main_UI = function (_State) {
        // if(_State)
        //  {
        // }
        // this.Main_View.visible = _State;
    };
    UI_Manager.prototype.Display_Or_Hidden_UI = function (view, _State) {
        view.visible = _State;
    };
    UI_Manager.prototype.Display_Or_Hidden_Game_UI = function (_State) {
        // this.Main_View.visible = !_State;
    };
    //二次确认框
    UI_Manager.prototype.OnShowYesOrNo = function (title, sMsg, okbtn, noBtn, sFun, okarg, snoFun, noarg, sExr, nMsgType, moneyType) {
        if (noBtn === void 0) { noBtn = ""; }
        if (sFun === void 0) { sFun = null; }
        if (okarg === void 0) { okarg = null; }
        if (snoFun === void 0) { snoFun = null; }
        if (noarg === void 0) { noarg = null; }
        if (sExr === void 0) { sExr = ""; }
        if (nMsgType === void 0) { nMsgType = 0; }
        if (moneyType === void 0) { moneyType = -1; }
        //this.Display_Or_Hidden_UI(this.YesOrNoUI_view, true);
        // this.YesOrNoUI_view.OnSetData(title, sMsg, okbtn, noBtn, sFun, okarg, snoFun, noarg, sExr, nMsgType, moneyType);
    };
    UI_Manager.prototype.ShowOffLineMoney = function () {
        // this.YesOrNoUI_view.showOfflinMoney()
    };
    //获得奖励框 nType奖励类型：0 钻石，1金钱，2声望
    UI_Manager.prototype.OnShowReward = function (nType, nNum) {
    };
    UI_Manager.prototype.CheckUIOpen = function () {
        // if (this.Shop_View.visible)
        //     return true;
        return false;
    };
    UI_Manager.prototype.OnShareOkLogin = function () {
        if (CD.Platform != Platform.Wechat) {
            return;
        }
        WM.OnShareOkLogin();
    };
    UI_Manager.prototype.OnWinMsgUI = function (sMsg) {
        var TextMsg = new Laya.Label();
        TextMsg.color = "#f90400";
        TextMsg.width = 636;
        TextMsg.height = 25;
        TextMsg.valign = "middle";
        TextMsg.align = "left";
        TextMsg.fontSize = 20;
        TextMsg.text = sMsg;
        TextMsg.bold = true;
        TextMsg._zOrder = 100;
        Laya.stage.addChild(TextMsg);
        TextMsg.x = 0;
        TextMsg.y = 0;
        TextMsg.visible = true;
        this.UpdateY();
        this.szAllObj.push(TextMsg);
    };
    UI_Manager.prototype.UpdateY = function () {
        var i = 0;
        var TextMsg = null;
        for (i = 0; i < this.szAllObj.length; i++) {
            TextMsg = this.szAllObj[i];
            if (TextMsg != null) {
                TextMsg.y = TextMsg.y + 25;
            }
        }
    };
    UI_Manager.prototype.ShowLoadMask = function (b) {
        b ? (CD.Platform == Platform.Wechat && Laya.Browser.window.wx.showLoading({
            title: '加载中',
            mask: true
        })) : (CD.Platform == Platform.Wechat && Laya.Browser.window.wx.hideLoading());
    };
    UI_Manager.prototype.SetPauseGame = function (b) {
        //IndexCon.isGamePause = b;
        Laya.timer.scale = b ? 0 : 1;
    };
    UI_Manager.ShowTextHint = function (msg, delay, type) {
        if (delay === void 0) { delay = 1000; }
        if (type === void 0) { type = 48; }
        if (msg.length < 1)
            return;
        var hint = Laya.Pool.getItemByClass("TextHint", TextHint);
        //console.log("ShowTextHint", hint);
        hint.SetHint(msg, this.ncount, type);
        hint.ScaleAnim(delay);
        //console.log("ShowTextHint", this.szHint.length);
        for (var i = this.szHint.length - 1; i >= 0; i--) {
            if (this.szHint[i].nIdx == -1) {
                this.szHint.splice(i, 1);
            }
            else {
                this.szHint[i].MoveAnim();
            }
        }
        this.szHint.unshift(hint);
        this.ncount++;
    };
    UI_Manager.szHint = [];
    UI_Manager.ncount = 0;
    return UI_Manager;
}());
var TextHint = /** @class */ (function (_super) {
    __extends(TextHint, _super);
    function TextHint() {
        var _this = _super.call(this) || this;
        _this.nIdx = -1;
        _this.nDelay = 1000;
        //console.log("itemconstructor", index);
        _this.bgImg = new Laya.Image("ui/txtbg.png");
        _this.bgImg.sizeGrid = "24,27,24,27,0";
        _this.addChild(_this.bgImg);
        _this.contentTxt = new Laya.Text();
        //this.contentTxt.font = "font_40_white";
        _this.contentTxt.color = "#ffffff";
        //this.contentTxt.strokeColor = "#000000";
        //this.contentTxt.stroke = 4;
        _this.contentTxt.wordWrap = true;
        _this.contentTxt.align = "left";
        _this.contentTxt.valign = "middle";
        _this.bgImg.addChild(_this.contentTxt);
        _this.zOrder = 10;
        return _this;
    }
    TextHint.prototype.SetHint = function (sContent, index, type) {
        if (type === void 0) { type = 48; }
        this.nIdx = index;
        this.alpha = 1;
        this.scaleX = 1;
        this.scaleY = 1;
        this.contentTxt.fontSize = type;
        this.contentTxt.text = sContent;
        this.contentTxt.width = MStage.ME.GetWinWidth() - 160; // CFunc.GetRealLength(sContent) * 24 * ns;
        //console.log("SetHint===", this.contentTxt.width, this.contentTxt.textWidth, this.contentTxt.displayHeight);
        if (this.contentTxt.textWidth < this.contentTxt.width) {
            this.contentTxt.width = this.contentTxt.textWidth;
        }
        this.bgImg.width = Math.floor(0 + 80) <= 160 ? 160 : Math.floor(0 + 80);
        this.bgImg.height = Math.floor(0 + 28) <= 76 ? 76 : Math.floor(0 + 28);
        this.contentTxt.pos(40, 14);
        //this.contentTxt.width = this.bgImg.width;
        //this.contentTxt.height = this.bgImg.height;
        //console.log("SetHint===", this.contentTxt.width, this.contentTxt.height, nw, nh, this.bgImg.width, this.bgImg.height);
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.centerX = 0;
        this.y = (MStage.ME.GetWinHeight() - this.bgImg.height) / 2;
        this.size(this.bgImg.width, this.bgImg.height);
        Laya.stage.addChild(this);
    };
    TextHint.prototype.ScaleAnim = function (delay) {
        if (delay === void 0) { delay = 1000; }
        //console.log("ScaleAnim",this.nIdx,GameFun.GetTime());
        this.nDelay = delay;
        Laya.Tween.from(this, { scaleX: 0, scaleY: 0 }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, this.DestroyAnim));
    };
    TextHint.prototype.DestroyAnim = function () {
        var _this = this;
        //console.log("DestroyAni=====",this.nIdx,this.nDelay);
        Laya.Tween.to(this, { alpha: 0 }, this.alpha / 0.003, Laya.Ease.linearOut, Laya.Handler.create(this, function () {
            _this.nIdx = -1;
            _this.removeSelf();
            Laya.Pool.recover("TextHint", _this);
        }), this.nDelay);
    };
    TextHint.prototype.MoveAnim = function () {
        //console.log("MoveAnim",this.nIdx,GameFun.GetTime());
        Laya.Tween.clearAll(this);
        this.scaleX = 1;
        this.scaleY = 1;
        Laya.Tween.to(this, { y: this.y - this.height - 16 }, 100, Laya.Ease.linearOut, Laya.Handler.create(this, this.DestroyAnim));
    };
    return TextHint;
}(Laya.Box));
//# sourceMappingURL=UI_Manager.js.map