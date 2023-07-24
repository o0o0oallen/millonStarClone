/*
* RelifeTryFuWnd;
*/
var RelifeTryFuWnd = /** @class */ (function () {
    function RelifeTryFuWnd() {
        this.gui = null;
        this.gui = new ui.RelifeTryFuUI;
        RelifeTryFuWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.relifebtn.on(Laya.Event.CLICK, this, this.ShowAds);
        this.gui.notipbox.on(Laya.Event.CLICK, this, this.ClickShowTip);
        this.gui.buyrelife.clickHandler = new Laya.Handler(this, this.BuyRelife);
        CD.Language == Language.ru && this.gui.relifebtnlb.scale(.8, .8);
        CD.Language == Language.de && this.gui.relifebtnlb.scale(.65, .65);
        CD.Language == Language.fr && this.gui.relifebtnlb.scale(.85, .85);
        CD.Language == Language.it && this.gui.relifebtnlb.scale(.8, .8);
        this.InitUI();
        UIHelper.dohide(this.gui);
    }
    RelifeTryFuWnd.prototype.InitUI = function () {
        this.gui.titlelb.text = Lan.G(2000);
        this.gui.desclb.text = Lan.G(2001);
        this.gui.relifebtnlb.text = Lan.G(1002);
        //this.gui.getlb.text = Lan.G(1071);
        this.gui.pwmax.skin = "font/" + CD.Language + "/powermax.jpg";
    };
    RelifeTryFuWnd.prototype.UpdateUI = function () {
        this.gui.iconImg.skin = "icons/wu_" + (SV.ME.curFu + 1) + ".png";
        var num = ParamOnline.ME.getNumber("relife_tryfunum", 5) + parseInt(Cfg.GetItemNum(1002).getString()) - SV.ME.relifetryfunum;
        this.gui.lefttime.text = Lan.G(2002, [""]);
        this.gui.lefttimenum.text = num.toString();
        if (num == 0) {
            this.gui.relifebtn.visible = false;
            this.gui.notipbox.visible = true;
            this.gui.notipimg.skin = Game.ME.showTryFu ? "ui3/gouxuan0.png" : "ui3/gouxuan1.png";
            this.gui.notiplb.text = Lan.G(2003);
            this.gui.notipbox.refresh();
        }
        else {
            this.gui.relifebtn.visible = true;
            this.gui.notipbox.visible = false;
        }
    };
    RelifeTryFuWnd.prototype.doshow = function () {
        UIHelper.showHide(true, this.gui);
        this.UpdateUI();
    };
    RelifeTryFuWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
    };
    RelifeTryFuWnd.prototype.BuyRelife = function () {
        ExchangeWnd.ME.doshow(2);
    };
    RelifeTryFuWnd.prototype.ClickShowTip = function () {
        Game.ME.showTryFu = !Game.ME.showTryFu;
        this.gui.notipimg.skin = Game.ME.showTryFu ? "ui3/gouxuan0.png" : "ui3/gouxuan1.png";
    };
    RelifeTryFuWnd.prototype.ShowAds = function () {
        if (CD.Platform == Platform.MGC_H5) {
            console.log("点击拉起微信激励视频==relifetryfu");
            MgcM.OnShowRewardVideo("relifetryfu");
            return;
        }
        else if (CD.Platform == Platform.H5) {
            if (CD.PingTai == PingTai.QTT_H5) {
                console.log("点击拉起微信激励视频==relifetryfu");
                Qtt_H5_Manager.ME.OnShowRewardVideo("relifetryfu");
                return;
            }
            else if (CD.PingTai == PingTai.ZM_H5) {
                AdsManager.OnShowZMAd("h1hvqfet8u", RelifeTryFuWnd.ME, function () {
                    Game.ME.OnGetAdsOverReward("relifetryfu", "ads");
                }, function () {
                    Game.ME.OnFreeFu();
                });
                return;
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
                AdsManager.showRewardedVideo_wy(RelifeTryFuWnd.ME, function () {
                    Game.ME.OnGetAdsOverReward("relifetryfu", "ads");
                }, function () {
                    Game.ME.OnFreeFu();
                });
                return;
            }
            else if (CD.PingTai == PingTai.HAGO_H5) {
                HaGoManager.ME.OnShowRewardVideo("relifetryfu", RelifeTryFuWnd.ME, function () {
                    Game.ME.OnFreeFu();
                });
                return;
            }
            else if (CD.PingTai == PingTai.GOOGLE_H5) {
                AdsManager.OnShowGooleAd("relifetryfu", BoxRewardWnd.ME, function () {
                    Game.ME.OnGetAdsOverReward("relifetryfu", "ads");
                }, function () {
                    Game.ME.OnFreeFu();
                });
                return;
            }
        }
        else if (CD.Platform == Platform.AD_H5) {
            //奖励广告
            Game.ME.rewardAd_H5("relifetryfu");
            return;
        }
        else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                return;
            Game.ME.playVideoLoadingEff(this.gui.relifetryfuload, this.gui.relifetryfuloadeff, this.gui.relifetryfuloadlb, this.gui.relifebtn);
            //拉起视频广告
            AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
            AdsManager.showRewardVideoAds(true, "relifetryfu");
            Game.ME.isVideo = 7;
            return;
        }
        Game.ME.OnFreeFu();
    };
    RelifeTryFuWnd.prototype.CloseUI = function () {
        if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
            return;
        Game.ME.animGameFailShow("relifetryfuclose");
        this.dohide();
    };
    RelifeTryFuWnd.ME = null;
    return RelifeTryFuWnd;
}());
//# sourceMappingURL=RelifeTryFuWnd.js.map