/*
* SettingWnd;
*/
var SettingWnd = /** @class */ (function () {
    function SettingWnd() {
        this.gui = null;
        this.nClicknum = 0;
        this.gui = new ui.SettingUI;
        SettingWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.nClicknum = 0;
        this.gui.openid.visible = false;
        this.gui.openid.text = SV.UID;
        this.gui.bgImg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.shockChk.on(Laya.Event.CLICK, this, this.SetShock);
        this.gui.soundChk.on(Laya.Event.CLICK, this, this.SetSound);
        this.gui.titleLb.text = Lan.G(1022);
        this.gui.func1Lb.text = Lan.G(1023);
        this.gui.func2Lb.text = Lan.G(1024);
        this.gui.titleLb.on(Laya.Event.CLICK, this, this.lookid);
        CD.Language == Language.ru && (this.gui.func1Lb.scale(.9, .9),
            this.gui.func2Lb.scale(.9, .9));
        UIHelper.dohide(this.gui);
    }
    SettingWnd.prototype.lookid = function () {
        if (this.nClicknum >= 5) {
            this.gui.openid.visible = false;
            this.nClicknum = 0;
            return;
        }
        if (this.nClicknum >= 3) {
            this.gui.openid.visible = true;
        }
        this.nClicknum++;
    };
    SettingWnd.prototype.doshow = function () {
        UIHelper.showHide(true, this.gui);
        UIHelper.doshow(Game.ME.gui.black);
        Game.ME.gui.black.alpha = .6;
        this.gui.shockChkImg.visible = !SV.ME.isShackOff;
        this.gui.soundChkImg.visible = !SV.ME.isSoundOff;
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
    SettingWnd.prototype.dohide = function () {
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
    SettingWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    SettingWnd.prototype.SetShock = function () {
        SV.ME.isShackOff = !SV.ME.isShackOff;
        SV.ME.dosave(false, 81);
        this.gui.shockChkImg.visible = !SV.ME.isShackOff;
        if (CD.Platform == Platform.AD_H5) {
            //非游戏主流程时广告，比如:进入商店或修改设置时
            Laya.Browser.window.gameapi.showBrowse();
        }
    };
    SettingWnd.prototype.SetSound = function () {
        SV.ME.isSoundOff = !SV.ME.isSoundOff;
        MSound.ME._pauseSound = MSound.ME._pauseMusic = SV.ME.isSoundOff,
            SV.ME.isSoundOff ? MSound.ME.stopAll() : MSound.ME.replayMusic();
        SV.ME.dosave(false, 82);
        this.gui.soundChkImg.visible = !SV.ME.isSoundOff;
        if (CD.Platform == Platform.AD_H5) {
            //非游戏主流程时广告，比如:进入商店或修改设置时
            Laya.Browser.window.gameapi.showBrowse();
        }
    };
    SettingWnd.ME = null;
    return SettingWnd;
}());
//# sourceMappingURL=SettingWnd.js.map