/*
* name;
*/
var Qtt_H5_Manager = /** @class */ (function () {
    function Qtt_H5_Manager() {
        this.rewardedVideoAd = null;
        this.m_nRewardVideoNum = 0;
        Qtt_H5_Manager.ME = this;
        document.addEventListener("visibilitychange", function () {
            Qtt_H5_Manager.ME.handleVisibilityChange(event);
        });
    }
    // 如果页面是展示状态，则播放视频
    Qtt_H5_Manager.prototype.handleVisibilityChange = function (event) {
        if (document.visibilityState == 'visible') {
            //console.info("返回前台==="+cFun.serverTime.getTime());
            MSound.ME && MSound.ME.resumeMusic();
        }
        else {
            //console.info("返回后台==="+cFun.serverTime.getTime());
            MSound.ME && MSound.ME.stopAll();
        }
    };
    Qtt_H5_Manager.prototype.OnShowRewardVideo = function (sFromType) {
        var _this = this;
        if (Laya.Browser.window.qttGame == null)
            return;
        UI.SetPauseGame(true);
        MSound.ME && MSound.ME.stopAll();
        //UICon.OnWinMsgUI("开始拉起激励视频，sFromType:"+sFromType);
        console.log("开始拉起激励视频，sFromType:" + sFromType);
        this.m_sFromType = sFromType;
        var options = {};
        ThinkingData_H5.ME && ThinkingData_H5.ME.track("adsrequst", { channel: sFromType });
        Laya.Browser.window.qttGame.showVideo(function (res) {
            UI.SetPauseGame(false);
            MSound.ME && MSound.ME.resumeMusic();
            if (res == 1) {
                //播放完成，发放奖励
                //Share_Manager.ME.SetVideonum();
                //视频完成汇报
                ThinkingData_H5.ME && ThinkingData_H5.ME.track("adsover", { channel: _this.m_sFromType });
                //发放奖励
                Qtt_H5_Manager.ME.OnGetAdsOverReward(_this.m_sFromType, "ads");
            }
            else {
                //res = 0    填充不足
                //res = 2    提前关闭
                if (res == 0) {
                    UI_Manager.ShowTextHint("广告正在加载中...");
                }
            }
        }, options);
    };
    //激励和分享完毕获得奖励
    Qtt_H5_Manager.prototype.OnGetAdsOverReward = function (sShareType, sAdsType) {
        if (sAdsType == "share") {
            //console.log("分享成功");
        }
        else if (sAdsType == "ads") {
            //console.log("激励播放成功");
        }
        //UI.OnWinMsgUI("激励和分享完毕获得奖励=sShareType="+sShareType);
        Game.ME.isVideo = 0;
        switch (sShareType) {
            case "jiesuan": //结算
                Game.ME.collect(Game.ME.gui.btnCollect2);
                break;
            case "relife": //复活
                Game.ME.reLife();
                break;
            case "addtili": //加体力
                Game.ME.addTili();
                break;
            case "lxcoin": //离线金币
                Game.ME.onGetCoinVideoBack();
                break;
            case "relifetryfu": //满级试用
                Game.ME.OnFreeFu();
                break;
            case "baoxiang": //金币宝箱
                BoxRewardWnd.ME.GetReward();
                break;
            case "freezuan": //每日免费领钻石
                ShopUI.ME.AddFreeZuan();
                break;
            case "fwqunlock": //副武器解锁
                Game.ME.SlcSideWeapon();
                break;
            case "signin": //签到奖励
                SignInWnd.ME.GetMultiReward();
                break;
        }
    };
    //======================================Banner 广告 =======================================
    Qtt_H5_Manager.prototype.onPlayBanner = function (ntype) {
        if (Laya.Browser.window.qttGame == null)
            return;
        var options = { index: ntype };
        Laya.Browser.window.qttGame.showBanner(options);
    };
    Qtt_H5_Manager.prototype.hideBanner = function () {
        if (Laya.Browser.window.qttGame == null)
            return;
        Laya.Browser.window.qttGame.hideBanner();
    };
    //======================================互动直弹广告=======================
    Qtt_H5_Manager.prototype.OnShowHDReward = function () {
        if (Laya.Browser.window.qttGame == null)
            return;
        //趣头条贴片广告
        var options = { index: 1, rewardtype: 1 };
        Laya.Browser.window.qttGame.showHDReward(options);
    };
    return Qtt_H5_Manager;
}());
//# sourceMappingURL=Qtt_H5_Manager.js.map