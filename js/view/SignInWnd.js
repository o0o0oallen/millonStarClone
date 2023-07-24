/*
* SignInWnd;
*/
var SignInWnd = /** @class */ (function () {
    function SignInWnd() {
        this.gui = null;
        this.slcday = 0;
        this.lastUpdate = null;
        this.gui = new ui.SignInUI;
        SignInWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.daylist.renderHandler = new Laya.Handler(this, this.UpdateDay);
        UIHelper.dohide(this.gui);
    }
    SignInWnd.prototype.UpdateDay = function (cell, index) {
        var lb;
        var img;
        var btn, btn3;
        var money = new math_BigUInt();
        img = cell.getChildByName("slcimg");
        img.visible = cell.dataSource.day == this.slcday;
        img = cell.getChildByName("dayimg");
        img.skin = cell.dataSource.day == this.slcday ? "signin/2.png" : "signin/1.png";
        lb = img.getChildByName("daylb");
        CD.Language == Language.ru && lb.scale(.6, .6);
        CD.Language == Language.it && lb.scale(.6, .6);
        lb.text = Lan.G(1044, [cell.dataSource.day]);
        lb = cell.getChildByName("numlb");
        money.setByShortString(cell.dataSource.reward[1]);
        lb.text = Lan.G(1045, [money.getShortString()]);
        btn = cell.getChildByName("getbtn");
        btn.clickHandler = null;
        lb = btn.getChildByName("getbtnlb");
        CD.Language == Language.ru && lb.scale(.6, .6);
        CD.Language == Language.es && lb.scale(.6, .6);
        CD.Language == Language.pt && lb.scale(.7, .7);
        CD.Language == Language.fr && lb.scale(.6, .6);
        CD.Language == Language.de && lb.scale(.6, .6);
        CD.Language == Language.it && lb.scale(.7, .7);
        lb.text = Lan.G(1046);
        btn3 = cell.getChildByName("getbtn3");
        btn3.clickHandler = null;
        var nmult = CD.subScribeType > 0 && CD.BanBen == BanBen.guoji ? 4 : 3;
        lb = btn3.getChildByName("getbtnlb3");
        CD.Language == Language.ru && lb.scale(.6, .6);
        CD.Language == Language.es && lb.scale(.6, .6);
        CD.Language == Language.pt && lb.scale(.7, .7);
        CD.Language == Language.fr && lb.scale(.6, .6);
        CD.Language == Language.de && lb.scale(.6, .6);
        CD.Language == Language.it && lb.scale(.7, .7);
        lb.text = Lan.G(1045, [nmult]);
        lb = cell.getChildByName("timelb");
        img = cell.getChildByName("rightimg");
        if (cell.dataSource.state == 1) {
            btn.visible = true;
            btn3.visible = true;
            lb.visible = false;
            img.visible = false;
            btn.clickHandler = new Laya.Handler(this, this.GetReward, [btn, cell.dataSource.day]);
            btn3.clickHandler = new Laya.Handler(this, this.GetReward, [btn3, cell.dataSource.day]);
        }
        else if (cell.dataSource.state == 2) {
            btn.visible = false;
            btn3.visible = false;
            lb.visible = false;
            img.visible = true;
        }
        else if (Cfg.IsGetSignReward(cell.dataSource.day - 1)) {
            btn.visible = false;
            btn3.visible = false;
            lb.visible = true;
            img.visible = false;
            var dnow = new Date();
            this.lastUpdate == null && (this.lastUpdate = dnow);
            var dnext = new Date(this.lastUpdate.getFullYear(), this.lastUpdate.getMonth(), this.lastUpdate.getDate() + 1);
            var nsec = dnext.getTime() - dnow.getTime();
            //console.log("UpdateDay*********",cell.dataSource.day,nsec,Math.floor(nsec / 1000));
            if (dnow.getFullYear() > this.lastUpdate.getFullYear() || dnow.getMonth() > this.lastUpdate.getMonth() || dnow.getDate() > this.lastUpdate.getDate()) {
                Cfg.CheckSignReward();
                lb.text = "";
                this.lastUpdate = dnow;
            }
            else
                lb.text = cFun.SecToFullTimeString(Math.floor(nsec / 1000));
        }
        else {
            btn.visible = false;
            btn3.visible = false;
            lb.visible = false;
            img.visible = false;
        }
    };
    SignInWnd.prototype.UpdateUI = function () {
        this.gui.titlelb.text = Lan.G(1043);
        var i, nstate;
        var arr = [];
        var xmldata;
        var szreward;
        this.slcday == 0;
        for (i = 1; i < 7; i++) {
            xmldata = CD.Game.SignIn[i.toString()];
            szreward = xmldata.reward.split(",");
            if (Cfg.IsGetSignReward(i))
                nstate = 2;
            else if ((SV.ME.loginNum >= i && Cfg.IsGetSignReward(i - 1)) || (SV.ME.loginNum == 1 && i == 1)) {
                nstate = 1;
                if (this.slcday == 0)
                    this.slcday = i;
            }
            else
                nstate = 0;
            arr.push({ day: i, reward: szreward, state: nstate });
        }
        this.gui.daylist.array = arr;
        this.gui.day7lb.text = Lan.G(1044, [7]);
        this.gui.day7desc.text = Lan.G(1049);
        CD.Language == Language.ru && (this.gui.day7lb.scale(.6, .6),
            this.gui.day7desc.scale(.8, .8));
        CD.Language == Language.es && (this.gui.day7desc.scale(.8, .8));
        CD.Language == Language.pt && (this.gui.day7desc.scale(.8, .8));
        CD.Language == Language.fr && (this.gui.day7desc.scale(.8, .8));
        CD.Language == Language.de && (this.gui.day7desc.scale(.7, .7));
        CD.Language == Language.it && (this.gui.day7lb.scale(.6, .6),
            this.gui.day7desc.scale(.8, .8));
        this.gui.day7get.clickHandler = null;
        this.gui.day7get.getChildByName("getbtnlb").text = Lan.G(1046);
        if (Cfg.IsGetSignReward(7)) {
            //7日奖励已领完
            this.CloseUI();
        }
        else if (SV.ME.loginNum > 6 && Cfg.IsGetSignReward(6)) {
            //7日奖励可领取
            this.gui.day7get.visible = true;
            this.gui.day7get.clickHandler = new Laya.Handler(this, this.GetReward, [this.gui.day7get, 7]);
            this.gui.day7time.visible = false;
            this.gui.day7desc.text = Lan.G(1050);
        }
        else if (Cfg.IsGetSignReward(6)) {
            this.gui.day7get.visible = false;
            this.gui.day7time.visible = true;
            var dnow = new Date();
            this.lastUpdate == null && (this.lastUpdate = dnow);
            var dnext = new Date(this.lastUpdate.getFullYear(), this.lastUpdate.getMonth(), this.lastUpdate.getDate() + 1);
            var nsec = dnext.getTime() - dnow.getTime();
            if (dnow.getFullYear() > this.lastUpdate.getFullYear() || dnow.getMonth() > this.lastUpdate.getMonth() || dnow.getDate() > this.lastUpdate.getDate()) {
                Cfg.CheckSignReward();
                this.gui.day7time.text = "";
                this.lastUpdate = dnow;
            }
            else
                this.gui.day7time.text = cFun.SecToFullTimeString(Math.floor(nsec / 1000));
        }
        else {
            this.gui.day7time.visible = false;
            this.gui.day7get.visible = false;
        }
    };
    SignInWnd.prototype.doshow = function () {
        MSound.ME.playSoundLimit("w_dianji");
        if (!SV.ME.isDadian(19)) {
            SV.ME.doDadianMore(19, "btnclick", { btnName: "SignIn", level: SV.ME.level });
        }
        var nopen = ParamOnline.ME.getNumber("sginin_open", 15);
        if (SV.ME.level <= nopen) {
            TipRich.ME.showT(Lan.G(1051, [nopen])).doshow();
            return;
        }
        UIHelper.showHide(true, this.gui);
        UIHelper.doshow(Game.ME.gui.black);
        Game.ME.gui.black.alpha = .6;
        Laya.timer.clear(this, this.UpdateUI);
        this.UpdateUI();
        Laya.timer.loop(1000, this, this.UpdateUI);
    };
    SignInWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
        UIHelper.dohide(Game.ME.gui.black);
        Laya.timer.clear(this, this.UpdateUI);
        this.rewardBtn = null;
        this.rewardDay = 0;
        this.rewardMult = 1;
    };
    SignInWnd.prototype.GetReward = function (btn, day) {
        var _this = this;
        console.log("GetReward*******", btn.name);
        this.rewardMult = 1;
        if (btn.name == "getbtn3") {
            this.rewardMult = CD.subScribeType > 0 && CD.BanBen == BanBen.guoji ? 4 : 3;
            if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                if (CD.Platform == Platform.MGC_H5) {
                    console.log("点击拉起微信激励视频==signin");
                    MgcM.OnShowRewardVideo("signin");
                    this.rewardBtn = btn;
                    this.rewardDay = day;
                    return;
                }
                else if (CD.Platform == Platform.H5) {
                    if (CD.PingTai == PingTai.QTT_H5) {
                        console.log("点击拉起微信激励视频==signin");
                        Qtt_H5_Manager.ME.OnShowRewardVideo("signin");
                        return;
                    }
                    else if (CD.PingTai == PingTai.ZM_H5) {
                        this.rewardBtn = btn;
                        this.rewardDay = day;
                        AdsManager.OnShowZMAd("h1hvqfet8u", SignInWnd.ME, function () {
                            Game.ME.OnGetAdsOverReward("signin", "ads");
                        }, function () {
                            Game.ME.OnSignIn(day, btn, _this.rewardMult);
                        });
                        return;
                    }
                    else if (CD.PingTai == PingTai.WY_H5) {
                        this.rewardBtn = btn;
                        this.rewardDay = day;
                        AdsManager.showRewardedVideo_wy(SignInWnd.ME, function () {
                            Game.ME.OnGetAdsOverReward("signin", "ads");
                        }, function () {
                            Game.ME.OnSignIn(day, btn, _this.rewardMult);
                        });
                        return;
                    }
                    else if (CD.PingTai == PingTai.HAGO_H5) {
                        this.rewardBtn = btn;
                        this.rewardDay = day;
                        HaGoManager.ME.OnShowRewardVideo("signin", SignInWnd.ME, function () {
                            Game.ME.OnSignIn(day, btn, _this.rewardMult);
                        });
                        return;
                    }
                    else if (CD.PingTai == PingTai.GOOGLE_H5) {
                        AdsManager.OnShowGooleAd("signin", BoxRewardWnd.ME, function () {
                            Game.ME.OnGetAdsOverReward("signin", "ads");
                        }, function () {
                            Game.ME.OnSignIn(day, btn, _this.rewardMult);
                        });
                        return;
                    }
                }
                else if (CD.Platform == Platform.AD_H5) {
                    this.rewardBtn = btn;
                    this.rewardDay = day;
                    //奖励广告
                    Game.ME.rewardAd_H5("signin");
                    return;
                }
                else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                    if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                        return;
                    Game.ME.ShowLoadMask(true);
                    //拉起视频广告
                    AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                    AdsManager.showRewardVideoAds(true, "signin");
                    Game.ME.isVideo = 11;
                    this.rewardBtn = btn;
                    this.rewardDay = day;
                    return;
                }
            }
        }
        Game.ME.OnSignIn(day, btn, this.rewardMult);
    };
    SignInWnd.prototype.GetMultiReward = function () {
        console.log(this.rewardDay + "====this.rewardDay");
        console.log(this.rewardDay + "====this.rewardDay");
        Game.ME.OnSignIn(this.rewardDay, this.rewardBtn, this.rewardMult);
    };
    SignInWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    SignInWnd.ME = null;
    return SignInWnd;
}());
//# sourceMappingURL=SignInWnd.js.map