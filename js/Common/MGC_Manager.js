/*
* Ycj
* 2018 - 04 - 13
* 加载界面
*/
//Laya.MiniAdpter.init(true);
var MGC_Manager = /** @class */ (function () {
    function MGC_Manager() {
        //=========================================拉起激励=============================================================
        this.rewardedVideoAd = null;
        this.m_nRewardVideoNum = 0;
        //当前加载激励状态
        this.bVideoAdLoadOk = false;
        this.CheckVideoAdTime = 0;
    }
    //构造方法
    MGC_Manager.prototype.Initialize = function () {
    };
    MGC_Manager.prototype.OnShowRewardVideo = function (sFromType) {
        MgcM.ShowLoadMask(true);
        MgcM.SetPauseGame(true);
        //UI.OnWinMsgUI("开始播放激励广告==sFromType:"+sFromType);
        //UICon.OnWinMsgUI("开始拉起激励视频，sFromType:"+sFromType);
        //console.log("开始拉起激励视频，sFromType:"+sFromType);
        this.m_sFromType = sFromType;
        //视频请求汇报
        // if(ThinkingData_H5.ME != null)
        // {
        //     ThinkingData_H5.ME.track("adsrequst", { channel: sFromType });
        // }
        //UI.OnWinMsgUI("激励广告加载状态=MgcM.bVideoAdLoadOk:"+MgcM.bVideoAdLoadOk);
        if (MgcM.bVideoAdLoadOk) {
            // UI.OnWinMsgUI("MgcM.rewardedVideoAd.show()===开始显示");
            MgcM.rewardedVideoAd.show()
                .then(function () {
                MgcM.ShowLoadMask(false);
                MgcM.m_nRewardVideoNum++;
            })
                .catch(function (err) {
                //console.log("catch(err======");
                MgcM.OnVideoFaill();
            });
        }
        else {
            // console.log("Share_Manager.ME.bVideoAdLoadOk=false=====");
            MgcM.OnVideoFaill();
        }
    };
    //开始加载激励
    MGC_Manager.prototype.OnLoadVideoAd = function () {
        if (CD.Platform != Platform.MGC_H5)
            return;
        //UI.OnWinMsgUI("开始加载激励======"+cFun.serverTime.toLocaleString());
        var adUId = "adunit-f729fbda5e1a2341";
        if (this.rewardedVideoAd == null && Laya.Browser.window.wx != null) {
            this.rewardedVideoAd = Laya.Browser.window.wx.createRewardedVideoAd({ adUnitId: adUId });
            MgcM.OnCheckAdClose();
            this.rewardedVideoAd.onError(function (err) {
                //console.log("rewardedVideoAd----onError--" + err);
                MgcM.m_nRewardVideoNum++;
                MgcM.CheckLoadVideoAd();
            });
        }
        if (Laya.Browser.window.wx != null) {
            this.rewardedVideoAd.load()
                .then(function () {
                MgcM.bVideoAdLoadOk = true;
                // UI.OnWinMsgUI("激励加载成功======");
            })
                .catch(function (err) {
                // UI.OnWinMsgUI("激励加载失败----faill--");
                console.log(err);
                MgcM.CheckLoadVideoAd();
            });
        }
        else {
            // UI.OnWinMsgUI("Laya.Browser.window.wx == null");
            MgcM.CheckLoadVideoAd();
        }
    };
    //拉起失敗
    MGC_Manager.prototype.OnVideoFaill = function () {
        MgcM.ShowLoadMask(false);
        MgcM.SetPauseGame(false);
        //UI.OnWinMsgUI("激励拉起失敗===");
        //失败后拉起分享
        // if (this.m_sFromType == "luckimage" || this.m_sFromType == "completereward")  {
        //     Share_Manager.ME.ShareClickOk(this.m_sFromType, sShareStr,sUrl , "");
        // }
        //继续加载激励
        MgcM.bVideoAdLoadOk = false;
        MgcM.CheckVideoAdTime = 0;
    };
    MGC_Manager.prototype.CheckLoadVideoAd = function () {
        MgcM.bVideoAdLoadOk = false;
        MgcM.CheckVideoAdTime = Laya.timer.currTimer;
    };
    //检测激励状态
    MGC_Manager.prototype.OnCheckAdClose = function () {
        var _this = this;
        MgcM.rewardedVideoAd.onClose(function (res) {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            var IsOk = false;
            if (res && res.isEnded || res == undefined) {
                // 正常播放结束，可以下发游戏奖励
                IsOk = true;
            }
            else {
                // 播放中途退出，不下发游戏奖励
                IsOk = false;
            }
            if (IsOk) {
                //MgcM.SetVideonum();
                //视频完成汇报
                // if(ThinkingData_H5.ME != null)
                // {
                //     ThinkingData_H5.ME.track("adsover", { channel: this.m_sFromType });
                // }
                MgcM.OnGetAdsOverReward(_this.m_sFromType, "ads");
            }
            else {
                //激励没有正常播放完毕
                //console.log("激励没有正常播放完毕");
            }
            //继续加载激励
            MgcM.bVideoAdLoadOk = false;
            MgcM.CheckVideoAdTime = 0;
            MgcM.SetPauseGame(false);
        });
    };
    //检测激励加载延时
    MGC_Manager.prototype.CheckVideoAdDelay = function () {
        // if( MgcM.m_nRewardVideoNum <= 100)
        // {
        if (MgcM.bVideoAdLoadOk == false && ((Laya.timer.currTimer - MgcM.CheckVideoAdTime) > 10000)) {
            MgcM.CheckVideoAdTime = Laya.timer.currTimer;
            MgcM.OnLoadVideoAd();
        }
        // }
    };
    MGC_Manager.prototype.ShowLoadMask = function (b) {
        if (Laya.Browser.onWeiXin) {
            b ? (Laya.Browser.window.wx.showLoading({
                title: '加载中',
                mask: true
            })) : (Laya.Browser.window.wx.hideLoading());
        }
    };
    MGC_Manager.prototype.SetPauseGame = function (b) {
        //IndexCon.isGamePause = b;
        Laya.timer.scale = b ? 0 : 1;
    };
    MGC_Manager.prototype.onUpdate = function () {
        if (MgcM == null)
            return;
        if (CD.Platform != Platform.MGC_H5)
            return;
        //检测激励延时
        MgcM.CheckVideoAdDelay();
    };
    //激励和分享完毕获得奖励
    MGC_Manager.prototype.OnGetAdsOverReward = function (sShareType, sAdsType) {
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
    return MGC_Manager;
}());
//# sourceMappingURL=MGC_Manager.js.map