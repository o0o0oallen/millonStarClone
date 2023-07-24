/*
* ExchangeWnd;
*/
var ExchangeWnd = /** @class */ (function () {
    function ExchangeWnd() {
        this.gui = null;
        this.nowType = 0;
        this.nowVal = 0;
        this.nowExchg = new math_BigUInt().zero();
        this.perVal = 1;
        this.jinbiRate = 80;
        this.tiliRate = 5;
        this.relifeRate = 20;
        this.endlessRate = 20;
        this.gui = new ui.ExchangeWndUI;
        ExchangeWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.cutbtn.clickHandler = new Laya.Handler(this, this.ResetNumLb, [-1]);
        this.gui.add1btn.clickHandler = new Laya.Handler(this, this.ResetNumLb, [1]);
        this.gui.add10btn.clickHandler = new Laya.Handler(this, this.ResetNumLb, [10000000]);
        this.gui.exchgbtn.clickHandler = new Laya.Handler(this, this.OnExchang);
        this.jinbiRate = ParamOnline.ME.getNumber("exchg_jinbi", this.jinbiRate);
        this.tiliRate = ParamOnline.ME.getNumber("exchg_tili", this.tiliRate);
        this.relifeRate = ParamOnline.ME.getNumber("exchg_relife", this.relifeRate);
        this.endlessRate = ParamOnline.ME.getNumber("exchg_endless", this.endlessRate);
        CD.Language == Language.ru && (this.gui.cutlb.scale(.6, .6),
            this.gui.getlb.scale(.6, .6));
        CD.Language == Language.es && (this.gui.cutlb.scale(.7, .7),
            this.gui.getlb.scale(.7, .7));
        CD.Language == Language.pt && (this.gui.cutlb.scale(.8, .8),
            this.gui.getlb.scale(.8, .8));
        CD.Language == Language.pt && (this.gui.cutlb.scale(.7, .7),
            this.gui.getlb.scale(.7, .7));
        CD.Language == Language.de && (this.gui.cutlb.scale(.6, .6),
            this.gui.getlb.scale(.6, .6));
        CD.Language == Language.it && (this.gui.cutlb.scale(.7, .7),
            this.gui.getlb.scale(.7, .7));
        CD.Language == Language.fr && (this.gui.cutlb.scale(.7, .7),
            this.gui.getlb.scale(.7, .7));
        UIHelper.dohide(this.gui);
    }
    ExchangeWnd.prototype.doshow = function (ntype) {
        UIHelper.doshow(Game.ME.gui.black);
        Game.ME.gui.black.alpha = .6;
        UIHelper.showHide(true, this.gui);
        this.nowType = ntype;
        this.SetUI();
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnShowZMAd("j0tn25oam6", Game.ME, function () {
                //console.log("横幅广告展示成功===");
            }, function () {
                //console.log("横幅广告展示失败===");
            });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
            HaGoManager.ME.OnShowBannerAd();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.GOOGLE_H5) {
            AdsManager.OnShowGooldAd_Inter('pause');
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.hideBanner_wy();
        }
    };
    ExchangeWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
        //if (!GoldIncomeWnd.ME.gui.visible)
        UIHelper.dohide(Game.ME.gui.black);
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnHideZMBanner();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
            HaGoManager.ME.OnHideBannerAd();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.hideBanner_wy();
        }
    };
    ExchangeWnd.prototype.SetUI = function () {
        this.nowVal = 0;
        if (this.nowType == 0) {
            //兑换金币
            this.gui.titlelb.text = Lan.G(6000);
            CD.Language == Language.fr || CD.Language == Language.de ? this.gui.titlelb.scale(.8, .8) : this.gui.titlelb.scale(1, 1);
            this.gui.exchgbtnlb.text = Lan.G(6003);
            this.gui.geticon.skin = "ui/jb1.png";
            this.gui.geticon.size(64, 64);
            this.perVal = 1;
        }
        else if (this.nowType == 1) {
            //兑换体力
            this.gui.titlelb.text = Lan.G(6004);
            CD.Language == Language.fr || CD.Language == Language.de ? this.gui.titlelb.scale(.8, .8) : this.gui.titlelb.scale(1, 1);
            this.gui.exchgbtnlb.text = Lan.G(6003);
            this.gui.geticon.skin = "ui/tili1.png";
            this.gui.geticon.size(58, 64);
            this.perVal = 1;
        }
        else if (this.nowType == 2) {
            //兑换满级试用
            this.gui.titlelb.text = Lan.G(6005);
            CD.Language == Language.ko && this.gui.titlelb.scale(.8, .8);
            CD.Language == Language.ru && this.gui.titlelb.scale(.5, .5);
            CD.Language == Language.es && this.gui.titlelb.scale(.7, .7);
            CD.Language == Language.pt && this.gui.titlelb.scale(.65, .65);
            CD.Language == Language.fr && this.gui.titlelb.scale(.55, .55);
            CD.Language == Language.de && this.gui.titlelb.scale(.58, .58);
            CD.Language == Language.it && this.gui.titlelb.scale(.6, .6);
            this.gui.exchgbtnlb.text = Lan.G(6003);
            this.gui.geticon.skin = "ui3/fh.png";
            this.gui.geticon.size(64, 64);
            this.perVal = this.relifeRate;
        }
        else if (this.nowType == 3) {
            //兑换无尽模式次数
            this.gui.titlelb.text = Lan.G(6009);
            CD.Language == Language.ko && this.gui.titlelb.scale(.8, .8);
            CD.Language == Language.ru && this.gui.titlelb.scale(.5, .5);
            CD.Language == Language.es && this.gui.titlelb.scale(.7, .7);
            CD.Language == Language.pt && this.gui.titlelb.scale(.65, .65);
            CD.Language == Language.fr && this.gui.titlelb.scale(.55, .55);
            CD.Language == Language.de && this.gui.titlelb.scale(.58, .58);
            CD.Language == Language.it && this.gui.titlelb.scale(.6, .6);
            this.gui.exchgbtnlb.text = Lan.G(6003);
            this.gui.geticon.skin = "uipic/quan.png";
            this.gui.geticon.size(64, 64);
            this.perVal = this.endlessRate;
        }
        this.ResetNumLb(1, true);
    };
    ExchangeWnd.prototype.ResetNumLb = function (num, isinit) {
        if (isinit === void 0) { isinit = false; }
        this.nowVal += num * this.perVal;
        var ntemp = 0;
        if (this.nowVal < this.perVal)
            this.nowVal = this.perVal;
        if (this.nowVal > SV.ME.gold)
            this.nowVal = Math.floor(SV.ME.gold / this.perVal) * this.perVal;
        if (!isinit && (this.nowVal == 0 || SV.ME.gold == 0)) {
            Game.ME.ShowExchangeWnd(2, false);
            return;
        }
        ntemp = Math.floor(this.nowVal / this.perVal);
        this.gui.cutnum.text = this.nowVal.toString();
        this.gui.cutlb.text = Lan.G(6001);
        this.gui.cutname.text = this.nowVal.toString();
        this.gui.getlb.text = Lan.G(6002);
        if (this.nowType == 0) {
            //1钻=金币价值* 80
            this.nowExchg = Cfg.bJiaZhi.clone().mult2(this.jinbiRate).mult2(ntemp);
            //this.gui.getnum.text = this.nowExchg.getShortString();
            this.gui.getname.text = this.nowExchg.getShortString();
        }
        else if (this.nowType == 1) {
            //this.gui.getnum.text = (this.nowVal * 5).toString();
            this.gui.getname.text = (ntemp * this.tiliRate).toString();
        }
        else if (this.nowType == 2) {
            this.gui.getname.text = ntemp.toString();
        }
        else if (this.nowType == 3) {
            this.gui.getname.text = ntemp.toString();
        }
        //this.gui.cutbtn.disabled = this.nowVal <= this.perVal;
        //this.gui.add1btn.disabled = (this.nowVal + this.perVal) > SV.ME.gold;
        //this.gui.add10btn.disabled = (this.nowVal + 10 * this.perVal) > SV.ME.gold;
        if (this.nowVal == 0) {
            this.gui.exchgbtn.gray = true;
            //this.gui.getnum.text = "0";
        }
        else {
            this.gui.exchgbtn.gray = false;
        }
        //console.log("ResetNumLb*****"+nwid);
        this.gui.resultbox.refresh();
    };
    ExchangeWnd.prototype.OnExchang = function () {
        var sreason = "";
        if (this.nowVal == 0) {
            Game.ME.ShowExchangeWnd(2, false);
            return;
        }
        if (this.nowType == 0)
            sreason = "exchg_money";
        if (this.nowType == 1)
            sreason = "exchg_tili";
        if (this.nowType == 2)
            sreason = "exchg_relife";
        if (this.nowType == 3)
            sreason = "exchg_endless";
        var point = this.gui.exchgbtn.localToGlobal(new Laya.Point(0, 0));
        if (Cfg.CutDiamond(this.nowVal, sreason) == 1) {
            if (this.nowType == 0) {
                Game.ME.animAddMoney(this.nowExchg, point.x, point.y, 10, sreason);
            }
            else if (this.nowType == 1) {
                Game.ME.animAddTili(this.nowVal * this.tiliRate, point.x, point.y, 10, sreason);
            }
            else if (this.nowType == 2) {
                Cfg.AddItem(1002, new math_BigUInt().one().mult2(Math.floor(this.nowVal / this.perVal)), sreason);
            }
            else if (this.nowType == 3) {
                Cfg.AddItem(1006, new math_BigUInt().one().mult2(Math.floor(this.nowVal / this.perVal)), sreason);
                EndlessWnd.ME.UpdateUI();
            }
        }
        this.CloseUI();
    };
    ExchangeWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    ExchangeWnd.ME = null;
    return ExchangeWnd;
}());
//# sourceMappingURL=ExchangeWnd.js.map