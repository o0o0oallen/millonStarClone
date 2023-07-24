/*
* SubScriptionWnd;
*/
var SubScriptionWnd = /** @class */ (function () {
    function SubScriptionWnd() {
        var _this = this;
        this.nSlcIdx = 1;
        this.gui = null;
        this.lwing = null;
        this.rwing = null;
        this.gui = new ui.SubScriptionUI;
        SubScriptionWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgimg.skin = "ui/bg2.jpg";
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.week.on(Laya.Event.CLICK, this, this.ChooseBuy, [1]);
        this.gui.month.on(Laya.Event.CLICK, this, this.ChooseBuy, [2]);
        this.gui.year.on(Laya.Event.CLICK, this, this.ChooseBuy, [3]);
        this.gui.funcbtn.clickHandler = new Laya.Handler(this, this.OnFuncBtn, [1]);
        this.gui.func4btn.clickHandler = new Laya.Handler(this, this.OnFuncBtn, [1]);
        this.gui.tip1lb.text = Lan.G(7010);
        this.gui.tip2lb.text = Lan.G(7011);
        this.gui.tip3lb.text = Lan.G(7012);
        this.gui.tip1box.on(Laya.Event.CLICK, this, this.OnClickUrl, [1]);
        this.gui.tip2box.on(Laya.Event.CLICK, this, this.OnClickUrl, [2]);
        this.gui.tip3box.on(Laya.Event.CLICK, this, this.OnClickUrl, [3]);
        this.gui.hotlb.text = Lan.G(7018);
        this.gui.funclb.text = Lan.G(7019);
        this.gui.contentbg.vScrollBarSkin = "";
        this.gui.contentbg.vScrollBar.hide = true;
        //this.gui.contentbg.vScrollBar.elasticDistance = 500;
        //this.gui.contentbg.vScrollBar.elasticBackTime = 200;
        this.gui.ani1.play(0, true);
        this.gui.ani3.play(0, true);
        this.lwing = new Laya.Skeleton();
        this.gui.lwingpos.addChild(this.lwing);
        this.rwing = new Laya.Skeleton();
        this.gui.rwingpos.addChild(this.rwing);
        var data = CD.Game.ItemInfo[1201];
        this.lwing.load("res/DragonBones/chibang/" + data.bone, Laya.Handler.create(this, function () {
            _this.lwing.play("changtai", true); //gongji\zhankai\changtai
        }));
        this.rwing.load("res/DragonBones/chibang/" + data.bone, Laya.Handler.create(this, function () {
            _this.rwing.play("changtai", true);
        }));
        CD.Language == Language.ru && (this.gui.func1lb.scale(.65, .65),
            this.gui.hotlb.scale(.65, .65));
        CD.Language == Language.es && (this.gui.hotlb.scale(.7, .7));
        CD.Language == Language.pt && (this.gui.hotlb.scale(.7, .7));
        CD.Language == Language.it && (this.gui.tip2lb.scale(.5, .5));
        CD.Language == Language.fr && (this.gui.func1lb.scale(.7, .7));
        CD.Language == Language.de && (this.gui.func1lb.scale(.85, .85));
        CD.Language == Language.ko && (this.gui.func2num.font = "font_40_white",
            this.gui.func1desc.font = "font_40_white",
            this.gui.func3num.font = "font_40_white",
            this.gui.func4desc.font = "font_40_white"
        //this.gui.desclb.font = "font_40_white"
        );
        UIHelper.dohide(this.gui);
    }
    SubScriptionWnd.prototype.ChooseBuy = function (idx) {
        this.gui.week.skin = idx == 1 ? "ui3/kuang.png" : "ui3/kuang1.png";
        this.gui.hotbg.skin = idx == 1 ? "ui3/bq.png" : "ui3/bq1.png";
        this.gui.month.skin = idx == 2 ? "ui3/kuang.png" : "ui3/kuang1.png";
        this.gui.year.skin = idx == 3 ? "ui3/kuang.png" : "ui3/kuang1.png";
        this.nSlcIdx = idx;
    };
    SubScriptionWnd.prototype.doshow = function (t) {
        //HMS new
        TipRich.ME.showT(Lan.G(1041)).doshow();
        return;
        //HMS 原来
        //if (MStage.ME.GetWinWidth() / MStage.ME.GetWinHeight() > 0.7) t = 1;
        // t = 0;
        // MSound.ME.playSoundLimit("w_dianji");
        // if (!SV.ME.isDadian(21)) {
        //     SV.ME.doDadianMore(21, "btnclick", { btnName: "dingyue", level: SV.ME.level });
        // }
        // if (CD.BanBen == BanBen.guoji) {
        //     if (!IAPManager.bSubcription) {
        //         if (CD.Platform == Platform.Android) {
        //             try { IAPManager.reloadedStore(); } catch (e) { }
        //         }
        //     }
        // }
        // UIHelper.showHide(true, this.gui);
        // UIHelper.doshow(Game.ME.gui.black);
        // Game.ME.gui.black.alpha = .6;
        // this.ChooseBuy(1);
        // this.ResetUI();
        // if (t == 1) {
        //     this.gui.funcbtn.visible = false;
        //     this.gui.chsbox.visible = false;
        //     this.gui.func4btn.visible = true;
        //     this.gui.desclb.y = 1280;
        // } else {
        //     this.gui.funcbtn.visible = true;
        //     this.gui.chsbox.visible = true;
        //     this.gui.func4btn.visible = false;
        //     this.gui.desclb.y = 1490;
        // }
    };
    SubScriptionWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
        UIHelper.dohide(Game.ME.gui.black);
    };
    SubScriptionWnd.prototype.ResetUI = function () {
        var _this = this;
        var _info = null;
        var _PayID;
        var num1, num2, num3;
        this.gui.contentbg.top = 136;
        this.gui.desc0lb.text = Lan.G(7020);
        this.gui.desc1lb.text = this.gui.desc4lb.text = Lan.G(7001);
        this.gui.desc2lb.text = Lan.G(7002);
        this.gui.desc3lb.text = Lan.G(7003);
        this.gui.desc4lb.text = Lan.G(7004);
        if (CD.BanBen == BanBen.guonei) {
            _info = CD.Game.Config_Charge["1003"];
            num1 = _info.cn_money;
            //this.gui.func1num.text = Lan.G(7006, [_info.cn_money]);
            _info = CD.Game.Config_Charge["1004"];
            num2 = _info.cn_money;
            this.gui.func2num.text = Lan.G(7016, [_info.cn_money]);
            _info = CD.Game.Config_Charge["1005"];
            num3 = _info.cn_money;
            this.gui.func3num.text = Lan.G(7017, [_info.cn_money]);
        }
        else {
            _PayID = IAPManager.GetProductID(IAPProductID.weekly);
            _info = IAPManager.GetProductInfo(_PayID, 0);
            //this.gui.func1num.text = 
            _info == null ? (num1 = "--", Lan.G(5003)) : (num1 = this.getPrice(_info));
            _PayID = IAPManager.GetProductID(IAPProductID.month);
            _info = IAPManager.GetProductInfo(_PayID, 0);
            this.gui.func2num.text = _info == null ? (num2 = "--", Lan.G(5003)) : (num2 = this.getPrice(_info));
            _PayID = IAPManager.GetProductID(IAPProductID.year);
            _info = IAPManager.GetProductInfo(_PayID, 0);
            this.gui.func3num.text = _info == null ? (num3 = "--", Lan.G(5003)) : (num3 = this.getPrice(_info));
        }
        this.gui.func1lb.text = this.gui.func4lb.text = Lan.G(7013);
        this.gui.func1desc.text = Lan.G(7005, [num1]);
        this.gui.func4desc.text = Lan.G(7005, [num1]).replace("\n", "");
        this.gui.func2lb.text = Lan.G(7007);
        this.gui.func3lb.text = Lan.G(7008);
        if (CD.Platform == Platform.Android) {
            this.gui.tip1box.visible = false;
            this.gui.tip2box.visible = false;
            this.gui.tip3box.visible = false;
            this.gui.desclb.text = "";
            //this.gui.contentbg.height = 1275;
        }
        else {
            this.gui.tip1box.visible = true;
            this.gui.tip2box.visible = true;
            this.gui.tip3box.visible = true;
            this.gui.desclb.text = Lan.G(7009, [num1, num2, num3]);
            //this.gui.contentbg.height = 1435;
        }
        this.gui.contentbg.refresh();
        Laya.timer.frameOnce(1, this, function () {
            //console.log("ResetUI*****", this.gui.contentbg.height, this.gui.contentbg.contentHeight);
            if (_this.gui.contentbg.contentHeight < _this.gui.contentbg.height) {
                _this.gui.contentbg.top = 136 + (_this.gui.contentbg.height - _this.gui.contentbg.contentHeight) / 2;
                _this.gui.contentbg.vScrollBar.mouseWheelEnable = false;
                _this.gui.contentbg.vScrollBar.touchScrollEnable = false;
            }
            else {
                _this.gui.contentbg.vScrollBar.mouseWheelEnable = true;
                _this.gui.contentbg.vScrollBar.touchScrollEnable = true;
            }
        });
    };
    SubScriptionWnd.prototype.getPrice = function (_info) {
        var showText = "";
        if (CD.Platform == Platform.Android) {
            showText = _info.price;
        }
        else if (CD.Platform == Platform.Ios) {
            showText = IAPManager.ShowMoney(_info.sy) + _info.price;
        }
        return showText;
    };
    SubScriptionWnd.prototype.OnClickUrl = function (idx) {
        //console.log("OnClickUrl***", idx);
        switch (idx) {
            case 1:
                if (CD.Platform == Platform.Ios) {
                    var fdata = { type: "pay", data: "https://playmil.oss-us-west-1.aliyuncs.com/starblast/StarblastTerms.html" };
                    IFS.ME.openUrl(JSON.stringify(fdata));
                }
                break;
            case 2:
                IAPManager.reloadedStore();
                Game.ME.ShowLoadMask(true, 1);
                // if (IAPManager.isSubsciptionUser()) {
                //     CD.subScribeType = 1;
                //     this.CloseUI();
                //     Game.ME.SetSubscribeShow();
                // }
                break;
            case 3:
                if (CD.Platform == Platform.Ios) {
                    var fdata = { type: "pay", data: "https://playmil.oss-us-west-1.aliyuncs.com/starblast/StarblastPrivacy.html" };
                    IFS.ME.openUrl(JSON.stringify(fdata));
                }
                break;
        }
    };
    SubScriptionWnd.prototype.OnFuncBtn = function (idx) {
        //console.log("OnFuncBtn***", idx);
        if (CD.BanBen == BanBen.guonei) {
        }
        else if (IAPManager.bSubcription) {
            if (this.nSlcIdx == 1)
                IAPManager.purchaseProduct(IAPManager.GetProductID(IAPProductID.weekly), 1);
            if (this.nSlcIdx == 2)
                IAPManager.purchaseProduct(IAPManager.GetProductID(IAPProductID.month), 1);
            if (this.nSlcIdx == 3)
                IAPManager.purchaseProduct(IAPManager.GetProductID(IAPProductID.year), 1);
            if (this.nSlcIdx > 0 && this.nSlcIdx < 4)
                Game.ME.ShowLoadMask(true, 1);
        }
    };
    SubScriptionWnd.prototype.OnSubscribOk = function (id, iwhere) {
        //console.log("OnSubscribOk******"+id+"******"+iwhere);
        var dnow = new Date();
        var dover;
        var bnum;
        var sreason = "";
        switch (id) {
            case 1003: //周卡
                sreason = "buyweekly";
                if (CD.BanBen == BanBen.guonei) {
                    bnum = Cfg.GetItemNum(1003);
                    if (!bnum.isZero())
                        dnow = new Date(parseFloat(bnum.getString()));
                    var nday = dnow.getDay() == 0 ? 1 : 7 - dnow.getDay() + 1;
                    dnow = new Date(dnow.getTime() + nday * 24 * 60 * 60 * 1000);
                    dover = new Date(dnow.getFullYear(), dnow.getMonth(), dnow.getDate(), 0, 0, 0, 0);
                    bnum = bnum.setByShortString(dover.getTime().toString());
                    Cfg.SetItemNum(1003, bnum, sreason);
                }
                else {
                    CD.subScribeType = 1;
                }
                break;
            case 1004: //月卡
                sreason = "buymonth";
                if (CD.BanBen == BanBen.guonei) {
                    bnum = Cfg.GetItemNum(1004);
                    if (!bnum.isZero())
                        dnow = new Date(parseFloat(bnum.getString()));
                    dover = new Date(dnow.getFullYear(), dnow.getMonth() + 1, 1, 0, 0, 0, 0);
                    bnum = bnum.setByShortString(dover.getTime().toString());
                    Cfg.SetItemNum(1004, bnum, sreason);
                }
                else {
                    CD.subScribeType = 2;
                }
                break;
            case 1005: //年卡
                sreason = "buyyear";
                if (CD.BanBen == BanBen.guonei) {
                    bnum = Cfg.GetItemNum(1005);
                    if (!bnum.isZero())
                        dnow = new Date(parseFloat(bnum.getString()));
                    dover = new Date(dnow.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
                    bnum = bnum.setByShortString(dover.getTime().toString());
                    Cfg.SetItemNum(1005, bnum, sreason);
                }
                else {
                    CD.subScribeType = 3;
                }
                break;
        }
        if (CD.subScribeType > 0) {
            this.CloseUI();
            Game.ME.SetSubscribeShow();
            if (iwhere == 1) {
                Game.ME.SendSubscribDiamond();
                Cfg.AddItem(1201, new math_BigUInt().one(), "OnSubscribOk");
                Game.ME.SetWingTab(SV.ME.useWingId);
                var data = CD.Game.ItemInfo[1201];
                var point = Game.ME.gui.b1.localToGlobal(new Laya.Point(0, 0));
                ItemTipWnd.ME.showwing(data.icon, Lan.G(1094), point.x + 181.5, point.y + 77);
                TK.track("wing", { "Level": SV.ME.level, "BId": 1201 });
            }
        }
    };
    SubScriptionWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    SubScriptionWnd.ME = null;
    return SubScriptionWnd;
}());
//# sourceMappingURL=SubScriptionWnd.js.map