/*
* BoxRewardWnd;
*/
var BoxRewardWnd = /** @class */ (function () {
    function BoxRewardWnd() {
        var _this = this;
        this.gui = null;
        this.isget = false;
        this.gui = new ui.BoxRewardUI;
        BoxRewardWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.boxanim = new Laya.Skeleton();
        this.gui.baoxiang.addChild(this.boxanim);
        this.boxanim.load("res/DragonBones/boxreward/baoxiang.sk", Laya.Handler.create(this, function () {
            _this.boxanim.play(1, false);
        }));
        //this.boxanim.on(Laya.Event.STOPPED, this, this.BoxAnimStop);
        this.pgsQuan = new ImgPgsCircle(this.gui.quanicon),
            this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.getBtn.clickHandler = new Laya.Handler(this, this.ShowAds);
        CD.Language == Language.ru && this.gui.desclb1.scale(.8, .8);
        CD.Language == Language.de && this.gui.desclb1.scale(.9, .9);
        UIHelper.dohide(this.gui);
    }
    BoxRewardWnd.prototype.doshow = function () {
        MSound.ME.playSoundLimit("w_dianji");
        if (!SV.ME.isDadian(20)) {
            SV.ME.doDadianMore(20, "btnclick", { btnName: "Baoxiang", level: SV.ME.level });
        }
        var nopen = ParamOnline.ME.getNumber("baoxiang_open", 35);
        if (SV.ME.level <= nopen) {
            TipRich.ME.showT(Lan.G(1052, [nopen])).doshow();
            return;
        }
        UIHelper.showHide(true, this.gui);
        UIHelper.doshow(Game.ME.gui.black);
        Game.ME.gui.black.alpha = .6;
        this.ResetUI();
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
            AdsManager.showBanner_wy();
        }
    };
    BoxRewardWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
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
    BoxRewardWnd.prototype.ResetUI = function () {
        this.boxanim.play(1, false);
        this.gui.quananim.visible = true;
        this.gui.titlelb.text = Lan.G(4000);
        this.gui.desclb1.text = Lan.G(4001);
        this.gui.desclb2.text = ""; //Lan.G(4002);
        var itemnum = Cfg.GetItemNum(1001);
        var num5 = new math_BigUInt().one().mult2(5);
        var temp = new math_BigUInt().one();
        this.gui.numlb.text = Cfg.GetItemNum(1001).getShortString() + "/5";
        this.gui.barimg.width = 0, this.pgsQuan.setPgs(0);
        itemnum.biggerequal(temp) ? this.gui.icon1.skin = this.gui.quanicon1.skin = "signin/xinghe.png" : this.gui.icon1.skin = this.gui.quanicon1.skin = "signin/xinghe1.png";
        itemnum.biggerequal(temp.clone().mult2(2)) ? (this.gui.icon2.skin = this.gui.quanicon2.skin = "signin/xinghe.png", this.gui.barimg.width = 714 / 4.0, this.pgsQuan.setPgs(1.0 / 4.0)) : this.gui.icon2.skin = this.gui.quanicon2.skin = "signin/xinghe1.png";
        itemnum.biggerequal(temp.clone().mult2(3)) ? (this.gui.icon3.skin = this.gui.quanicon3.skin = "signin/xinghe.png", this.gui.barimg.width = 714 / 4.0 * 2.0, this.pgsQuan.setPgs(2.0 / 4.0)) : this.gui.icon3.skin = this.gui.quanicon3.skin = "signin/xinghe1.png";
        itemnum.biggerequal(temp.clone().mult2(4)) ? (this.gui.icon4.skin = this.gui.quanicon4.skin = "signin/xinghe.png", this.gui.barimg.width = 714 / 4.0 * 3.0, this.pgsQuan.setPgs(3.0 / 4.0)) : this.gui.icon4.skin = this.gui.quanicon4.skin = "signin/xinghe1.png";
        itemnum.biggerequal(temp.clone().mult2(5)) ? (this.gui.icon5.skin = this.gui.quanicon5.skin = "signin/xinghe.png", this.gui.barimg.width = 714, this.pgsQuan.setPgs(0.9999)) : this.gui.icon5.skin = this.gui.quanicon5.skin = "signin/xinghe1.png";
        //新公式= 新公式= math.min(金币价值数值*500+INT((关卡数 - 10)^2)*400,关卡数*15000+金币价值数值*2700)
        var lvl1 = new math_BigUInt().setByShortString((Math.floor(Math.pow(SV.ME.level - 10, 2)) * 400).toString());
        //console.log("openbox***",lvl.getShortString(), Cfg.bJiaZhi.getShortString());
        var lvl2 = new math_BigUInt().setByShortString((SV.ME.level * 15000).toString());
        var nmoney1 = Cfg.bJiaZhi.clone().mult2(500).plus(lvl1);
        var nmoney2 = Cfg.bJiaZhi.clone().mult2(2700).plus(lvl2);
        var nmoney = nmoney1.bigger(nmoney2) ? nmoney2.clone() : nmoney1.clone();
        this.gui.getnum.text = nmoney.getShortString();
        if (itemnum.biggerequal(num5)) {
            this.gui.getBtn.disabled = false;
        }
        else {
            this.gui.getBtn.disabled = true;
        }
    };
    BoxRewardWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    BoxRewardWnd.prototype.GetReward = function () {
        var _this = this;
        if (this.isget)
            return;
        this.gui.quananim.visible = false;
        this.isget = true;
        Laya.timer.once(200, this, function () {
            _this.boxanim.play(0, false);
        });
        Laya.timer.once(1700, this, this.BoxAnimStop);
    };
    BoxRewardWnd.prototype.BoxAnimStop = function () {
        //console.log("BoxAnimStop***", this.isget);
        if (this.isget) {
            this.isget = false;
            Game.ME.OpenBox();
        }
    };
    BoxRewardWnd.prototype.ShowAds = function () {
        var nnum = Cfg.GetItemNum(1001);
        var nlimit = new math_BigUInt().one().mult2(5);
        if (!this.isget && nnum.biggerequal(nlimit)) {
            if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                //拉起视频广告
                if (CD.Platform == Platform.MGC_H5) {
                    console.log("点击拉起微信激励视频==baoxiang");
                    MgcM.OnShowRewardVideo("baoxiang");
                    return;
                }
                else if (CD.Platform == Platform.H5) {
                    if (CD.PingTai == PingTai.QTT_H5) {
                        console.log("点击拉起微信激励视频==baoxiang");
                        Qtt_H5_Manager.ME.OnShowRewardVideo("baoxiang");
                        return;
                    }
                    else if (CD.PingTai == PingTai.ZM_H5) {
                        AdsManager.OnShowZMAd("h1hvqfet8u", BoxRewardWnd.ME, function () {
                            Game.ME.OnGetAdsOverReward("baoxiang", "ads");
                        }, function () {
                            BoxRewardWnd.ME.GetReward();
                        });
                        return;
                    }
                    else if (CD.PingTai == PingTai.WY_H5) {
                        AdsManager.showRewardedVideo_wy(BoxRewardWnd.ME, function () {
                            Game.ME.OnGetAdsOverReward("baoxiang", "ads");
                        }, function () {
                            BoxRewardWnd.ME.GetReward();
                        });
                        return;
                    }
                    else if (CD.PingTai == PingTai.HAGO_H5) {
                        HaGoManager.ME.OnShowRewardVideo("baoxiang", BoxRewardWnd.ME, function () {
                            BoxRewardWnd.ME.GetReward();
                        });
                        return;
                    }
                    else if (CD.PingTai == PingTai.GOOGLE_H5) {
                        AdsManager.OnShowGooleAd("baoxiang", BoxRewardWnd.ME, function () {
                            Game.ME.OnGetAdsOverReward("baoxiang", "ads");
                        }, function () {
                            BoxRewardWnd.ME.GetReward();
                        });
                        return;
                    }
                }
                else if (CD.Platform == Platform.AD_H5) {
                    //奖励广告
                    Game.ME.rewardAd_H5("baoxiang");
                    return;
                }
                else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                    if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                        return;
                    Game.ME.playVideoLoadingEff(this.gui.baoxiangload, this.gui.baoxiangloadeff, this.gui.baoxiangloadlb, this.gui.getBtn);
                    //拉起视频广告
                    AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                    AdsManager.showRewardVideoAds(true, "baoxiang");
                    Game.ME.isVideo = 8;
                    return;
                }
            }
            this.GetReward();
        }
    };
    BoxRewardWnd.ME = null;
    return BoxRewardWnd;
}());
//# sourceMappingURL=BoxRewardWnd.js.map