var HaGoManager = /** @class */ (function () {
    function HaGoManager() {
        //通过分享进入游戏分享用户DbID
        this.Inver_dbid = "";
        //登录
        // public Login(): void {
        //     // 调用必然立即返回success
        //     Laya.Browser.window.hg.getUserInfo({
        //     success: function(res) {
        //         var userInfo = res.userInfo
        //         SV.ME.d_Nickname = userInfo.nickName;// 昵称
        //         SV.ME.d_Avatar_URL =   userInfo.avatarUrl;// 头像 ,分辨率为75x75
        //         console.info(userInfo.nickName+"=="+userInfo.avatarUrl+"=="+userInfo.openid);
        //         Laya.Browser.window.hg.login({
        //             success: function(res) {
        //               HaGoManager.ME.HaGo_Get_Open_ID(res.code,Cache_Data.ME.countryCode);
        //             }
        //           })
        //     }
        // })
        //HaGoManager.ME.HaGo_Get_Open_ID("Gr83x-rK-jqavhvc52fbQAAQu0R93tuAeuNbeqDVoz_LgjDaWyeG2f7jsGHP49Ii5c_g9j5faG6Mi7BB_Lfksg","ID");
        //}
        //得到用户开放ID
        // public HaGo_Get_Open_ID(Login_Code,countryCode): void {
        //     let data =
        //     {
        //         'code': Login_Code,
        //         'countryCode': countryCode,
        //         'nickname':SV.ME.d_Nickname,
        //         'Avatar_URL':SV.ME.d_Avatar_URL,
        //     };
        //     console.info(Login_Code+"====2==="+countryCode);
        //     Http.ME.sendPost("getopenid", Cache_Data.ME.Service_URL + "/api/h5hago/login", data, LoadCon.ME.on_Get_Open_ID_OK, null);
        // }
        this.rewardedVideoAd = null;
        this.nAdOverTime = 0;
        this.bannerAd = null;
        HaGoManager.ME = this;
    }
    //构造方法
    HaGoManager.prototype.Initialize = function () {
        //this.Login();
        document.addEventListener("visibilitychange", function (event) {
            console.log("visibilitychange======");
            console.log(event);
            GameMain.ME.handleVisibilityChange(event);
        });
        // Laya.Browser.window.hg.exitMiniProgram({
        //     exitConfirm:true,
        //     success: function(res) {
        //         console.info("退出游戏===");
        //     }
        // })
        //预加载激励广告
        HaGoManager.ME.OnLoadRewardAd();
    };
    //拉起激励视频
    HaGoManager.prototype.OnShowRewardVideo = function (sFromType, call, errFun) {
        if (Laya.Browser.window.hg == null) {
            if (call && errFun) {
                errFun.call(call);
            }
            return;
        }
        var nowTime = (cFun.serverTime.getTime() / 1000) | 0;
        //console.log("激励播放间隔时间不足10s=====nowTime==="+nowTime);
        //console.log(HaGoManager.ME.nAdOverTime);
        //console.log("===="+(nowTime - HaGoManager.ME.nAdOverTime));
        if ((nowTime - HaGoManager.ME.nAdOverTime) <= 10) {
            console.log("激励播放间隔时间不足10s");
            TipRich.ME.showT("The time of two advertisements shall not be less than 10 seconds").doshow();
            return;
        }
        Game.ME.ShowLoadMask(true);
        console.info("开始拉起激励视频，sFromType:" + sFromType);
        this.m_sFromType = sFromType;
        //TDGA_H5.ME && TDGA_H5.ME.onEvent("adsrequst",  { channel: sFromType });
        if (HaGoManager.ME.rewardedVideoAd == null) {
            //预加载激励广告
            HaGoManager.ME.OnLoadRewardAd();
            Game.ME.ShowLoadMask(false);
            if (call && errFun) {
                errFun.call(call);
            }
        }
        else {
            HaGoManager.ME.rewardedVideoAd.show().then(function () {
                //UICon.ShowLoadMask(false);
                console.info("Success hg.rewardedVideoAd.show==成功展示广告");
                //tips.string = "Success hg.rewardedVideoAd.show";//成功展示广告
            })
                .catch(function (err) {
                console.info("激励广告展示失败====");
                Game.ME.ShowLoadMask(false);
                if (call && errFun) {
                    errFun.call(call);
                }
            });
        }
    };
    //预加载激励广告
    HaGoManager.prototype.OnLoadRewardAd = function () {
        if (Laya.Browser.window.hg == null)
            return;
        if (HaGoManager.ME.rewardedVideoAd == null) {
            console.info("开始加载激励视频=====");
            HaGoManager.ME.rewardedVideoAd = Laya.Browser.window.hg.createRewardedVideoAd({
                adUnitId: 10597 //测试使用9999，上线前必须申请独立的，否则无法分成!   注意：要下载最新的app测试版本9999才能生效。
            });
            //res.isEnded == true的时候，用户观看完整广告并已经关闭广告窗口
            HaGoManager.ME.rewardedVideoAd.onClose = function (res) {
                if (res.isEnded == true) {
                    console.info("广告观看完毕！");
                    Game.ME.OnGetAdsOverReward(HaGoManager.ME.m_sFromType, "ads");
                    Game.ME.ShowLoadMask(false);
                    HaGoManager.ME.nAdOverTime = (cFun.serverTime.getTime() / 1000) | 0;
                    //console.log("===HaGoManager.ME.nAdOverTime==="+HaGoManager.ME.nAdOverTime);
                    AchievementWnd.ME.addAch(3, 1, 1);
                }
            };
            //中途关闭广告或者拉去广告失败。
            HaGoManager.ME.rewardedVideoAd.onError = function () {
                Game.ME.ShowLoadMask(false);
                console.info("hg.rewardedVideoAd.onError");
                //tips.string = "hg.rewardedVideoAd.onError"
            };
        }
    };
    HaGoManager.prototype.OnShowBannerAd = function () {
        if (Laya.Browser.window.hg == null)
            return;
        console.log("开始展示hagoBanner广告==9997==");
        Laya.Browser.window.hg.showBannerAd({
            adUnitId: 10598,
            callback: function (res) {
                console.log("res", JSON.stringify(res));
            }
        });
    };
    HaGoManager.prototype.OnHideBannerAd = function () {
        if (Laya.Browser.window.hg == null)
            return;
        console.log("开始隐藏hagoBanner广告====");
        Laya.Browser.window.hg.hideBannerAd({});
    };
    //分享
    HaGoManager.prototype.OnShareGame = function (stitle, sDesc, sIcon) {
        if (Laya.Browser.window.hg == null)
            return;
        //console.log(stitle,sDesc,sIcon);
        console.info(stitle + "==" + sDesc + "==" + sIcon);
        Laya.Browser.window.hg.showShareMenu({
            title: stitle,
            content: sDesc + " https://go.onelink.me/7pHf/7dc6e868",
            goToUrl: "https://go.onelink.me/7pHf/7dc6e868",
            imageUrl: sIcon
        });
    };
    return HaGoManager;
}());
//# sourceMappingURL=HaGoManager.js.map