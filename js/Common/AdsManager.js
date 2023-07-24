/*
* name;
*/
var AdsManager = /** @class */ (function () {
    // static isLoadedRewardVideoInAndroid = false;
    function AdsManager() {
    }
    AdsManager.adjust_rewardVideo_should_show = function () {
        if (CD.Platform == Platform.Android) {
            if (CD.BanBen == BanBen.guonei) {
                return "vehb0b";
            }
            else {
                return "5c8jx4";
            }
        }
        else if (CD.Platform == Platform.Ios) {
            return "qsfudz";
        }
    };
    AdsManager.adjust_interstitial_should_show = function () {
        if (CD.Platform == Platform.Android) {
            if (CD.BanBen == BanBen.guonei) {
                return "a2oc21";
            }
            else {
                return "5bgk93";
            }
        }
        else if (CD.Platform == Platform.Ios) {
            return "iihv2s";
        }
    };
    AdsManager.adjust_level = function (_passlv) {
        var _passtk = "";
        var _passtkIOS = "";
        switch (_passlv) {
            case 1:
                _passtk = "we22yu";
                _passtkIOS = "2obnu9";
                break;
            case 2:
                _passtk = "6kpi9s";
                _passtkIOS = "ahwlof";
                break;
            case 3:
                _passtk = "rp6tl5";
                _passtkIOS = "9zqbxi";
                break;
            case 4:
                _passtk = "uzflel";
                _passtkIOS = "f539d7";
                break;
            case 5:
                _passtk = "n87fo5";
                _passtkIOS = "2s8kqa";
                break;
            case 8:
                _passtk = "zd7c17";
                _passtkIOS = "xua74m";
                break;
            case 10:
                _passtk = "sd4k0e";
                _passtkIOS = "fhw84s";
                break;
            case 15:
                _passtk = "fn7k4o";
                _passtkIOS = "yoss7j";
                break;
            case 20:
                _passtk = "gabkwc";
                _passtkIOS = "yoss7j";
                break;
            case 30:
                _passtk = "4otari";
                _passtkIOS = "q2jg0q";
                break;
            case 40:
                _passtk = "iu96w9";
                _passtkIOS = "kcpqdk";
                break;
            case 50:
                _passtk = "b917kp";
                _passtkIOS = "2tn21x";
                break;
        }
        if (CD.Platform == Platform.Android) {
            return _passtk;
        }
        else if (CD.Platform == Platform.Ios) {
            return _passtkIOS;
        }
    };
    AdsManager.adjust_Iap = function (_iap) {
        var _passtk = "";
        var _passtkIOS = "";
        switch (_iap) {
            case IAPProductID.weekly:
                _passtk = "izm9xe";
                _passtkIOS = "3wb1bd";
                break;
            case IAPProductID.month:
                _passtk = "izm9xe";
                _passtkIOS = "ujmsyg";
                break;
            case IAPProductID.year:
                _passtk = "izm9xe";
                _passtkIOS = "66z8dr";
                break;
            case IAPProductID.one_time_purchase:
                _passtk = "izm9xe";
                _passtkIOS = "q07fqk";
                break;
            case IAPProductID.gem0:
                _passtk = "q5ijpe";
                _passtkIOS = "ho93ig";
                break;
        }
        if (CD.Platform == Platform.Android) {
            return _passtk;
        }
        else if (CD.Platform == Platform.Ios) {
            return _passtkIOS;
        }
    };
    AdsManager.Reward_Times = function (_times) {
        var _passtk = "";
        var _passtkIOS = "";
        switch (_times) {
            case 1:
                _passtk = "j0hnpe";
                _passtkIOS = "z2uzlc";
                break;
            case 10:
                _passtk = "trqv9t";
                _passtkIOS = "2cz1ax";
                break;
            case 20:
                _passtk = "1ukj99";
                _passtkIOS = "3bay0m";
                break;
            case 40:
                _passtk = "bcpsw5";
                _passtkIOS = "icuo6u";
                break;
            case 60:
                _passtk = "ot5kxn";
                _passtkIOS = "v9iijx";
                break;
            case 80:
                _passtk = "9o9uj6";
                _passtkIOS = "b2qieg";
                break;
            case 100:
                _passtk = "eyjyfb";
                _passtkIOS = "w7vov4";
                break;
        }
        if (CD.Platform == Platform.Android) {
            return _passtk;
        }
        else if (CD.Platform == Platform.Ios) {
            return _passtkIOS;
        }
    };
    AdsManager.Interstitial_Times = function (_times) {
        var _passtk = "";
        var _passtkIOS = "";
        switch (_times) {
            case 1:
                _passtk = "9utivk";
                _passtkIOS = "q5kup3";
                break;
            case 15:
                _passtk = "w9da5o";
                _passtkIOS = "h7fbig";
                break;
            case 30:
                _passtk = "1pce30";
                _passtkIOS = "em5fuc";
                break;
            case 60:
                _passtk = "u30o9c";
                _passtkIOS = "ye9yzb";
                break;
            case 90:
                _passtk = "6zpwa5";
                _passtkIOS = "pl91bz";
                break;
            case 120:
                _passtk = "6bmwoq";
                _passtkIOS = "nfdjxl";
                break;
            case 150:
                _passtk = "twotnh";
                _passtkIOS = "hgaraz";
                break;
        }
        if (CD.Platform == Platform.Android) {
            return _passtk;
        }
        else if (CD.Platform == Platform.Ios) {
            return _passtkIOS;
        }
    };
    AdsManager.Rev_Values = function (_Value) {
        var _passtk = "";
        var _passtkIOS = "";
        switch (_Value) {
            case 1:
                _passtk = "kuiclh";
                _passtkIOS = "1mzini";
                break;
            case 2:
                _passtk = "iwtm7q";
                _passtkIOS = "ial9mp";
                break;
            case 3:
                _passtk = "yonval";
                _passtkIOS = "yjov16";
                break;
            case 5:
                _passtk = "3toa4v";
                _passtkIOS = "e405rm";
                break;
            case 10:
                _passtk = "ceobrt";
                _passtkIOS = "q1xjtx";
                break;
            case 15:
                _passtk = "870dht";
                _passtkIOS = "28syl0";
                break;
            // case 20: _passtk = "nbv6pd"; _passtkIOS = "95hlbb"; break;
            // case 25: _passtk = "u0yo1b"; _passtkIOS = "qa2bak"; break;
        }
        if (CD.Platform == Platform.Android) {
            return _passtk;
        }
        else if (CD.Platform == Platform.Ios) {
            return _passtkIOS;
        }
    };
    AdsManager.Retain_Times = function (_times) {
        var _passtk = "";
        var _passtkIOS = "";
        switch (_times) {
            case 2:
                _passtk = "f067o2";
                _passtkIOS = "bdzqyt";
                break;
            case 3:
                _passtk = "9c05ub";
                _passtkIOS = "a3qhaa";
                break;
        }
        if (CD.Platform == Platform.Android) {
            return _passtk;
        }
        else if (CD.Platform == Platform.Ios) {
            return _passtkIOS;
        }
    };
    AdsManager.initAds = function () {
        this.AdsChannelID = ParamOnline.ME.getdata("Data_AdsChannelID");
        if (CD.Platform == Platform.Android) {
            //    AdsManager.initAdjust(AdsManager.adjust_app_token(), true);//初始化adjust 测试模式(false)正式上线(true)
            AdsManager.adsConfig = new AdsConfig();
            AdsManager.adsController = Laya.PlatformClass.createClass("com.tapque.ads.LayaAdsManager"); //创建对应安卓广告类
            AdsManager.analytics = Laya.PlatformClass.createClass("com.tapque.analytics.Analytics"); //创建对应安卓打点类
            if (AdsManager.adsController) {
                AdsManager.adsController.callWithBack(this.callback, "initLayaAdsManager", true); //true 为显示log
            }
            AdsManager.adsController.callWithBack(function (idfa) {
                // console.log("laya recive google aid:" + idfa);
                AdsManager.getGoogleAdvertismentIDCallback(idfa);
            }, "getIDFA");
            if (this.AdsChannelID == undefined || this.AdsChannelID.length < 1) {
                AdsManager.analytics.callWithBack(function (jsonMsg) {
                    AdsManager.getMessage(jsonMsg);
                }, "getMessage");
            }
        }
        else if (CD.Platform == Platform.Ios) {
            AdsManager.adsConfig = new AdsConfig();
            AdsManager.adsController = Laya.PlatformClass.createClass("ADController").newObject(); //创建对应ios广告对象
            AdsManager.analytics = Laya.PlatformClass.createClass("Analytics"); //创建对应ios分析类
            if (AdsManager.adsController) {
                AdsManager.adsController.callWithBack(function (state) {
                    AdsManager.callback(state);
                }, "initMopub:", false);
                AdsManager.adsController.callWithBack(function (idfa) {
                    // console.log("===getIDFA:" + idfa);
                    AdsManager.getGoogleAdvertismentIDCallback(idfa);
                }, "getIDFA");
                if (this.AdsChannelID == undefined || this.AdsChannelID.length < 1) {
                    AdsManager.adsController.callWithBack(function (jsonMsg) {
                        AdsManager.getMessage(jsonMsg);
                    }, "getMessage");
                }
            }
        }
    };
    AdsManager.setAdsInterval = function (value) {
        if (CD.Platform == Platform.Android) {
            AdsManager.doAdsControllerCall("setAdsInterval", value);
        }
        else if (CD.Platform == Platform.Ios) {
            AdsManager.doAdsControllerCall("setAdsInterval", value);
        }
    };
    AdsManager.requestRewardVideo = function () {
        if (CD.Platform == Platform.Android) {
            AdsManager.doAdsControllerCall("requestRewardVideo");
        }
        else if (CD.Platform == Platform.Ios) {
            AdsManager.doAdsControllerCall("requestRewardVideo");
        }
    };
    // public static setRewardVideoWhenLoadedAutoPlay(enable: boolean) {
    //     if (CD.Platform == Platform.Android) {
    //         console.log("设置激励视频加载完毕自动播放");
    //         AdsManager.doAdsControllerCall("setRewardVideoAutoPlay", enable);
    //     } else if (CD.Platform == Platform.Ios) {
    //         AdsManager.doAdsControllerCall("setRewardVideoAutoPlay", enable);
    //     }
    // }
    AdsManager.requestInterstitial = function () {
        if (CD.Platform == Platform.Android) {
            // console.log("请求插屏广告");
            AdsManager.doAdsControllerCall("requestInterstitial");
        }
        else if (CD.Platform == Platform.Ios) {
            AdsManager.doAdsControllerCall("requestInterstitial");
        }
    };
    //  * 
    // /**
    //  * @param apptoken 
    //  * @param production 
    //  */
    // public static initAdjust(apptoken: string, production: boolean): void {
    //     if (CD.Platform == Platform.Android) {
    //         if (AdsManager.adsController) {
    //             AdsManager.doAdsControllerCall("initAdjust", apptoken, production);
    //         }
    //     } 
    // }
    AdsManager.logAdjustEvent = function (eventToken) {
        if (CD.Platform == Platform.Android) {
            AdsManager.doAnalyticsCall("logAdjustEvent", eventToken);
        }
        else if (CD.Platform == Platform.Ios) {
            AdsManager.doAnalyticsCall("logAdjustEvent", eventToken);
        }
    };
    AdsManager.logAdjustRevenue = function (kinds, prices) {
        var _token = AdsManager.adjust_Iap(kinds);
        // if (CD.Platform == Platform.Ios) {
        //     var dataAdjust = {
        //         "type": _token,
        //         "data": parseFloat(prices),
        //         "msg": "USD"
        //     };
        //     AdsManager.doAnalyticsCall("logAdjustRevenue", JSON.stringify(dataAdjust));
        // }
        if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            AdsManager.logAdjustEvent(_token);
        }
    };
    // /**
    //  * 展示banner广告
    //  * @param showInTop 显示在顶部还是在底部
    //  */
    // public static showBannerAd(showInTop: boolean): void {
    //     // AdsManager.logAdjustEvent(AdsManager.adjust_banner_should_show());
    //     AdsManager.banner.call("showBanner", showInTop);
    // }
    // /**
    //  * 
    //  * 隐藏banner广告
    //  */
    // public static hideBannerAD(): void {
    //     AdsManager.banner.call("hideBanner");
    // }
    /**
     * 插屏广告是否加载成功
     * @param unitID 需要判断的广告id
     */
    AdsManager.isLoadedInterstitial = function (unitID) {
        try {
            if (CD.Platform == Platform.Android) {
                return AdsManager.adsController.call("hasInterstitial");
            }
            else {
                if (!AdsManager.isLoadedInterstitialInIos)
                    AdsManager.requestInterstitial();
                return AdsManager.isLoadedInterstitialInIos;
            }
        }
        catch (e) { }
        return false;
    };
    /**
     * 播放插屏广告
     * @param adUnitID  需要播放的id
     */
    AdsManager.showInterstitialAds = function (adUnitID, nShareForm) {
        if (CD.Platform != Platform.Android && CD.Platform != Platform.Ios)
            return;
        AdsManager.logAdjustEvent(AdsManager.adjust_interstitial_should_show());
        AdsManager.m_InsReason = nShareForm;
        SV.ME.insertAdsCount++;
        //汇报
        TK.track("ShowInsertAds", { Level: SV.ME.level, reason: nShareForm });
        TK.user_set({ chapingnum: SV.ME.insertAdsCount });
        MSound.ME.pauseMusic();
        if (CD.Platform == Platform.Android) {
            if (AdsManager.isLoadedInterstitial("")) {
                AdsManager.doAdsControllerCall("showInterstitial");
            }
            else {
                console.log("插屏没有准备好");
                //AdsManager.requestInterstitial();
            }
        }
        else if (CD.Platform == Platform.Ios) {
            if (AdsManager.isLoadedInterstitial("")) {
                AdsManager.doAdsControllerCall("showInterstitial");
            }
            else {
                //AdsManager.requestInterstitial();
            }
        }
        // if (CD.Platform == Platform.Android) {
        //     if (AdsManager.isLoadedInterstitial(adUnitID)) {
        //         AdsManager.doInterstitialCall("showInterstitial", adUnitID);
        //     } else {
        //         console.log("插屏没有准备好");
        //         AdsManager.PlayInsertAdsStatus(false, 1);
        //     }
        // } else if (CD.Platform == Platform.Ios) {
        //     if (AdsManager.isLoadedInterstitial("")) {
        //         AdsManager.doAdsControllerCall("showInterstitial");
        //     } else {
        //         AdsManager.requestInterstitial();
        //         console.log("===========interstitial not loaded");
        //         AdsManager.PlayInsertAdsStatus(false, 1);
        //     }
        // }
    };
    /**
     *
     * 判断激励视频是否加载成功
     */
    AdsManager.isLoadedRewardVideo = function () {
        try {
            if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                return AdsManager.isRewardVideoLoaded;
            }
        }
        catch (e) { }
        return false;
    };
    /**
     *
     * @param autoPlay  是否自动当激励视频加载成功自动播放
     */
    AdsManager.showRewardVideoAds = function (autoPlay, nShareForm) {
        if (CD.Platform != Platform.Android && CD.Platform != Platform.Ios)
            return;
        AdsManager.m_nShareForm = nShareForm;
        SV.ME.videoAdsCount++;
        //console.log("showRewardVideoAds********" + SV.ME.videoAdsCount + "***" + nShareForm);
        //汇报
        if (nShareForm == "jiesuan" && SV.ME.level <= 6) {
        }
        else {
            TK.track("ShowVideoAds", { Level: SV.ME.level, reason: nShareForm });
        }
        TK.user_set({ jilinum: SV.ME.videoAdsCount });
        //HB.onEvent("ShowVideoAds", dataTDGA);
        AdsManager.ireloadADS = ParamOnline.ME.getNumber("reloadADS", 0);
        var nopen = ParamOnline.ME.getNumber("relife_jltoxp", 1);
        // AdsManager.setRewardVideoWhenLoadedAutoPlay(true);
        if (CD.Platform == Platform.Android) {
            if (AdsManager.adsController && AdsManager.isLoadedRewardVideo()) {
                // AdsManager.EndVideoCD(); //2019-5-27暂时不终止cd, 防止android的广告拉不起来,5秒后恢复UI,这个timeer在jl open的时候会清除. 但是iosjl open无法访问到
                AdsManager.StartVideoCD(); //2019-05-28 对安卓开启5秒不拉起cd
                AdsManager.doAdsControllerCall("showRewardVideo");
            }
            else if (nopen == 1 && nShareForm == "relife" && AdsManager.isLoadedInterstitial("")) {
                //复活时激励没准备好，且插屏准备好，播插屏
                AdsManager.showVideoToInterst("relife_jltoxp");
            }
            else {
                AdsManager.requestRewardVideo();
                console.log("==jl not load 1");
                AdsManager.PlayOverStatus(false, 1);
            }
        }
        else if (CD.Platform == Platform.Ios) {
            if (AdsManager.adsController && AdsManager.isLoadedRewardVideo()) {
                AdsManager.EndProgress(); //2019-05-28 这里关闭转圈。只能相信ios能直接拉起广告。因为ios jl open无法访问到
                AdsManager.doAdsControllerCall("showRewardVideo");
            }
            else if (nopen == 1 && nShareForm == "relife" && AdsManager.isLoadedInterstitial("")) {
                //复活时激励没准备好，且插屏准备好，播插屏
                AdsManager.showVideoToInterst("relife_jltoxp");
            }
            else {
                AdsManager.requestRewardVideo();
                console.log("==rewardVideo not loaded");
                AdsManager.PlayOverStatus(false, 1);
            }
        }
        // if (CD.Platform == Platform.Android) {
        //     if (AdsManager.rewardVideo && AdsManager.isLoadedRewardVideo()) {
        //         AdsManager.StartVideoCD();
        //         AdsManager.doRewardVideoCall("showRewardVideo", autoPlay);
        //     } else {
        //         console.log("激励没有准备好");
        //         AdsManager.PlayOverStatus(false, 1);
        //     }
        // }
        // else if (CD.Platform == Platform.Ios) {
        //     if (AdsManager.isLoadedRewardVideo()) {
        //         // console.log("AdsManager.doAdsControllerCall showRewardVideo");
        //         if (AdsManager.adsController) {
        //             AdsManager.doAdsControllerCall("showRewardVideo");
        //         }
        //     } else {
        //         AdsManager.requestRewardVideo();
        //         console.log("rewardVideo not loaded");
        //         AdsManager.PlayOverStatus(false, 1);
        //     }
        // }
    };
    AdsManager.showVideoToInterst = function (srea) {
        //关闭拉起视频效果接口
        AdsManager.CloseVideoEff(AdsManager.m_nShareForm);
        AdsManager.m_nShareForm = "";
        Game.ME.isVideo = 108;
        AdsManager.showInterstitialAds(AdsManager.adsConfig.Interstitial_id, srea);
    };
    AdsManager.getGoogleAdvertismentIDCallback = function (GAID) {
        if (CD.Platform == Platform.Android) {
            console.log("google id::" + GAID);
        }
        else if (CD.Platform == Platform.Ios) {
            console.log("getIDFA id::" + GAID);
        }
        if (GAID != null && GAID.length > 1) {
            AdsManager.GAID = GAID;
        }
    };
    // public static CloseRewardVideoAds(): void {
    //     //   UI.OnWinMsgUI("激励是否准备完毕"+this.isLoadedRewardVideo());
    //     // if (AdsManager.rewardVideo == null) return;//新版本sdk
    //     //console.log("激励界面关闭");
    //     if (CD.Platform == Platform.Android) {
    //         if (CD.LanguageVersion == Language.eng) {
    //             AdsManager.setRewardVideoWhenLoadedAutoPlay(false);
    //         }
    //     } else if (CD.Platform == Platform.Ios) {
    //         AdsManager.setRewardVideoWhenLoadedAutoPlay(false);
    //     }
    // }
    AdsManager.callback = function (value) {
        //console.log("laya:"+value);
        switch (value) {
            case "INIT_SUCCEED":
                // console.log("mopub广告初始化完成");
                AdsManager.requestRewardVideo();
                AdsManager.requestInterstitial();
                break;
            case "NEED_SHOW_GDPR":
                console.log("==:NEED_SHOW_GDPR.true");
                if (Game.ME.nStartState == 0 && GDPRTipWnd.ME && GDPRTipWnd.ME.isShowd == false) {
                    console.log("==:NEED_SHOW_GDPR.true" + Game.ME.nStartState);
                    //GDPRTipWnd.ME.doshow();
                }
                //todo 需要弹出gdpr授权界面
                break;
            case "BANNER_REQUESTING":
                break;
            case "BANNER_LOADED":
                break;
            case "BANNER_FAILED":
                break;
            case "BANNER_CLICK":
                break;
            case "BANNER_SHOW":
                // AdsManager.logAdjustEvent(AdsManager.adjust_banner_show());
                console.log("显示banner");
                break;
            case "BANNER_HIDE":
                console.log("隐藏banner");
                break;
            case "INTERSTITIAL_REQUESTING":
                break;
            case "INTERSTITIAL_LOADED":
                console.log("===xp load over");
                if (CD.Platform == Platform.Ios) {
                    AdsManager.isLoadedInterstitialInIos = true;
                }
                else {
                    AdsManager.isLoadedInterstitialInAndroid = true;
                }
                break;
            case "INTERSTITIAL_FAILED":
                console.log("INTERSTITIAL_FAILED");
                AdsManager.PlayInsertAdsStatus(false);
                break;
            case "INTERSTITIAL_OPEN":
                console.log("show xp ads");
                //关闭音乐音效
                //MSound.ME.pauseMusic();
                if (CD.Platform == Platform.Ios) {
                    AdsManager.isLoadedInterstitialInIos = false;
                }
                else {
                    AdsManager.isLoadedInterstitialInAndroid = false;
                }
                break;
            case "INTERSTITIAL_CLOSE":
                console.log("show xp ads close");
                // AdsManager.logAdjustEvent(AdsManager.adjust_interstitial_show());//文杰接口已经处理20190506
                AdsManager.PlayInsertAdsStatus(true);
                break;
            case "INTERSTITIAL_ClICK":
                break;
            case "REWARD_REQUESTING":
                break;
            case "REWARD_LOADED":
                console.log("===jl load over");
                AdsManager.isRewardVideoLoaded = true;
                Game.ME && Game.ME.ResetTipShow();
                break;
            case "REWARD_FAILED":
                break;
            case "REWARD_OPEN":
                console.log("===jl open");
                //关闭音乐音效
                //MSound.ME.pauseMusic();
                if (AdsManager.ireloadADS == 1) {
                    if (CD.Platform == Platform.Android) {
                        //2019-5-27 激励检测成功.正确拉起.关闭这个演示失败检测的timer
                        Laya.timer.clear(AdsManager, AdsManager.PlayOverStatus);
                    }
                }
                break;
            case "REWARD_COMPLETE":
                AdsManager.isRewardVideoLoaded = false;
                //console.log("REWARD_COMPLETE=奖励用户=="+AdsManager.adjust_rewardVideo_should_show);
                // AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_show()); //文杰接口已经处理20190506
                //发放奖励
                AdsManager.PlayOverStatus(true);
                break;
            case "REWARD_CLOSE":
                AdsManager.isRewardVideoLoaded = false;
                if (CD.BanBen == BanBen.guoji && CD.Language == Language.ch) {
                    console.log("===TTClose");
                    AdsManager.PlayOverStatus(true);
                }
                else {
                    AdsManager.PlayOverStatus(false);
                }
                break;
            case "REWARD_PLAY_ERROR":
                console.log("===REWARD:" + value);
                break;
            case "REWARD_CLICK":
                break;
        }
    };
    AdsManager.getMessage = function (jsonMsg) {
        // console.log("==callback:" + jsonMsg);
        var _fgetjson = JSON.parse(jsonMsg);
        var key = _fgetjson.key;
        var data = _fgetjson.data;
        console.log("==key" + key);
        switch (key) {
            case "SendTrackerInfo":
                if (data.length == 0 || data == "no_trackInfo") {
                    this.iGetTrackerInfo++;
                    if (this.iGetTrackerInfo <= 10) {
                        Laya.timer.once(10000, this, AdsManager.DoubleGetTrackerInfo);
                    }
                }
                else {
                    this.AdsChannelID = data;
                    ParamOnline.ME.setdata("Data_AdsChannelID", this.AdsChannelID);
                    if (CD.Platform == Platform.Android)
                        TK.user_set({ "adsChannel1": this.AdsChannelID });
                    else
                        TK.user_set({ "adsChannel": this.AdsChannelID });
                }
                break;
        }
    };
    AdsManager.DoubleGetTrackerInfo = function () {
        if (CD.Platform == Platform.Android) {
            AdsManager.doAnalyticsCall("getMessage");
        }
        else if (CD.Platform == Platform.Ios) {
            AdsManager.doAdsControllerCall("getMessage");
        }
    };
    AdsManager.doAnalyticsCall = function (f, t) {
        if (t === void 0) { t = undefined; }
        if (CD.Platform == Platform.Ios && t != undefined) {
            f = f + ":";
        }
        if (AdsManager.analytics) {
            try {
                if (t == undefined)
                    AdsManager.analytics.call(f);
                else
                    AdsManager.analytics.call(f, t);
            }
            catch (e) { }
        }
    };
    AdsManager.doAdsControllerCall = function (f, t) {
        if (t === void 0) { t = undefined; }
        if (CD.Platform == Platform.Ios && t != undefined) {
            f = f + ":";
        }
        if (AdsManager.adsController) {
            try {
                if (t == undefined)
                    AdsManager.adsController.call(f);
                else
                    AdsManager.adsController.call(f, t);
            }
            catch (e) { }
        }
    };
    AdsManager.PlayOverStatus = function (IsOk, nType) {
        if (nType === void 0) { nType = 0; }
        console.log("==" + IsOk + "==" + nType);
        if (IsOk) {
            if (AdsManager.ireloadADS == 1) {
                Laya.timer.clear(AdsManager, AdsManager.PlayOverStatus);
            }
            AdsManager.CloseVideoEff(AdsManager.m_nShareForm);
            //正常播放完毕
            AdsManager.OnGetShareReward(AdsManager.m_nShareForm);
            //console.log(IsOk+"正常播放完毕=="+AdsManager.m_nShareForm);
            SV.ME.videoAdsTime = CM.Get_Convert_Date(new Date());
            SV.ME.videoAdsOKCount++;
            TK.user_set({ jilitime: SV.ME.videoAdsTime, jilioknum: SV.ME.videoAdsOKCount });
            TK.track("VideoAdsOver", { Level: SV.ME.level, reason: AdsManager.m_nShareForm });
            var _passtk = AdsManager.Reward_Times(SV.ME.videoAdsOKCount);
            if (_passtk && _passtk.length > 0) {
                AdsManager.logAdjustEvent(_passtk);
                TK.firebase("RV_" + SV.ME.videoAdsOKCount, {});
            }
            this.ClcRev(1);
            AchievementWnd.ME.addAch(3, 1, 1);
        }
        else {
            // if (nType == 2 && CD.Platform == Platform.Ios) {
            //     AdsManager.setRewardVideoWhenLoadedAutoPlay(false);
            // }
            //未正常播放完毕
            //console.log(IsOk+"未正常播放完毕=="+AdsManager.m_nShareForm);
            if (nType == 1 && AdsManager.OpenVideoFailNum < 3) //视频没有准备好拉起重复拉起
             {
                AdsManager.OpenVideoFailNum = AdsManager.OpenVideoFailNum + 1;
                Laya.timer.clear(this, AdsManager.DoubleOpenVideo);
                Laya.timer.once(1500, this, AdsManager.DoubleOpenVideo);
                return;
            }
            if (AdsManager.ireloadADS == 1) {
                Laya.timer.clear(AdsManager, AdsManager.PlayOverStatus);
            }
            if (nType == 1 || nType == 2) {
                TipRich.ME.showT(Lan.G(1040)).doshow();
                nType == 2 && (AdsManager.isRewardVideoLoaded = false, AdsManager.requestRewardVideo());
            }
            AdsManager.LoadFailed(AdsManager.m_nShareForm);
            //关闭拉起视频效果接口
            AdsManager.CloseVideoEff(AdsManager.m_nShareForm);
        }
        Game.ME && Game.ME.ResetTipShow();
        AdsManager.m_nShareForm = "";
        //开启音乐音效
        MSound.ME.resumeMusic();
    };
    //重复请求拉起视频
    AdsManager.DoubleOpenVideo = function () {
        if (AdsManager.isLoadedRewardVideo()) {
            if (CD.Platform == Platform.Android) {
                AdsManager.StartVideoCD(); //2019-05-28 对安卓开启5秒不拉起cd
                AdsManager.doAdsControllerCall("showRewardVideo");
            }
            else if (CD.Platform == Platform.Ios) {
                AdsManager.EndProgress();
                AdsManager.doAdsControllerCall("showRewardVideo");
            }
        }
        else {
            console.log("==jl not load 3");
            AdsManager.PlayOverStatus(false, 1);
        }
    };
    AdsManager.StartVideoCD = function () {
        MSound.ME && MSound.ME.pauseMusic();
        if (AdsManager.ireloadADS == 1) {
            Laya.timer.clear(AdsManager, AdsManager.PlayOverStatus);
            Laya.timer.once(5000, AdsManager, AdsManager.PlayOverStatus, [false, 2]);
        }
    };
    AdsManager.EndVideoCD = function () {
        if (AdsManager.ireloadADS == 1) {
            Laya.timer.clear(AdsManager, AdsManager.PlayOverStatus);
        }
        this.EndProgress();
    };
    AdsManager.EndProgress = function () {
        Game.ME && Game.ME.CloseVideoEff();
        MSound.ME && MSound.ME.pauseMusic();
    };
    AdsManager.VCDTimerOver = function () {
        console.log("====VCDTimerOver");
    };
    //删除延时拉起cd
    AdsManager.DelContinueTimer = function () {
        Laya.timer.clear(this, AdsManager.DoubleOpenVideo);
        AdsManager.OpenVideoFailNum = 0;
    };
    AdsManager.OnGetShareReward = function (sShareType) {
        console.log("OnGetShareReward==" + sShareType);
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
    AdsManager.OnGetInsReward = function (sShareType) {
        //console.log("OnGetShareReward=="+sShareType);
        Game.ME.isVideo = 0;
        switch (sShareType) {
            case "jiesuan1": //1倍结算插屏
                SV.ME.jsInsertAdsNum = 0;
                break;
            case "signin1": //1倍签到插屏
                break;
            case "relife_jltoxp": //复活激励转插屏
                Game.ME.reLife();
                break;
        }
    };
    //关闭拉起视频效果
    AdsManager.CloseVideoEff = function (sShareType) {
        switch (sShareType) {
            case "jiesuan": //结算
            case "relife": //复活
            case "addtili": //加体力
            case "lxcoin": //离线金币
            case "relifetryfu": //复活满级试用
            case "baoxiang": //金币宝箱
            case "freezuan": //每日免费领钻石
            case "fwqunlock": //副武器解锁
            case "signin": //签到奖励
                Game.ME && (Game.ME.isVideo = 0);
                Game.ME.CloseVideoEff();
                //Game.ME.ShowLoadMask(false);
                //清理延时拉起状态
                this.DelContinueTimer();
                break;
        }
    };
    AdsManager.CloseInsVideoEff = function (sShareType) {
        switch (sShareType) {
            case "jiesuan1":
            case "leaveCoinTK1":
            case "fuUpAds":
            case "scaletime":
            case "achieveAds":
            case "loginAds":
            case "signin1":
            case "relife_jltoxp":
                Game.ME && (Game.ME.isVideo = 0);
                break;
        }
    };
    AdsManager.LoadFailed = function (sShareType) {
        switch (sShareType) {
            case "relife": //复活重新计时
                Game.ME.AdsFailShowRelife();
                break;
            case "freezuan": //每日免费领钻石
                ShopUI.ME.getFree = false;
                break;
        }
    };
    AdsManager.LoadInsFailed = function (sShareType) {
        switch (sShareType) {
            case "relife_jltoxp": //复活重新计时
                Game.ME.AdsFailShowRelife();
                break;
        }
    };
    AdsManager.PlayInsertAdsStatus = function (IsOk, nType) {
        if (nType === void 0) { nType = 0; }
        if (IsOk) {
            AdsManager.CloseInsVideoEff(AdsManager.m_InsReason);
            //正常播放完毕
            AdsManager.OnGetInsReward(AdsManager.m_InsReason);
            //console.log(IsOk+"正常播放完毕=="+AdsManager.m_InsReason);
            SV.ME.insertAdsTime = CM.Get_Convert_Date(new Date());
            SV.ME.insertAdsOKCount++;
            TK.user_set({ chapingtime: SV.ME.insertAdsTime, chapingoknum: SV.ME.insertAdsOKCount });
            TK.track("InsertAdsOver", { Level: SV.ME.level, reason: AdsManager.m_InsReason });
            var _passtk = AdsManager.Interstitial_Times(SV.ME.insertAdsOKCount);
            if (_passtk && _passtk.length > 0) {
                AdsManager.logAdjustEvent(_passtk);
                TK.firebase("IN_" + SV.ME.insertAdsOKCount, {});
            }
            this.ClcRev(2);
        }
        else {
            AdsManager.LoadInsFailed(AdsManager.m_InsReason);
            //关闭拉起视频效果接口
            AdsManager.CloseInsVideoEff(AdsManager.m_InsReason);
        }
        AdsManager.m_InsReason = "";
        //开启音乐音效
        MSound.ME.resumeMusic();
    };
    AdsManager.ClcRetain = function () {
        var _oldtime = ParamOnline.ME.getdata("regtime");
        if (_oldtime == undefined) {
            if (SV.ME.isDadian(0)) {
                _oldtime = "2019-5-20 00:00:00";
            }
            else {
                _oldtime = CM.Get_Local_Time();
            }
            ParamOnline.ME.setdata("regtime", _oldtime);
        }
        var passdata = cFun.NumDay(_oldtime, CM.Get_Local_Time());
        var dolog = false;
        if (passdata == 1 && SV.ME.isDadian(28) == false) {
            SV.ME.doDadian(28);
            dolog = true;
        }
        else if (passdata == 2 && SV.ME.isDadian(29) == false) {
            SV.ME.doDadian(29);
            dolog = true;
        }
        if (dolog) {
            passdata = passdata + 1;
            console.log("===Retaindata:" + passdata);
            var _passtk = AdsManager.Retain_Times(passdata);
            if (_passtk && _passtk.length > 0) {
                AdsManager.logAdjustEvent(_passtk);
                TK.firebase("Retain_" + passdata, {});
            }
        }
    };
    //计算回收打点  
    AdsManager.ClcRev = function (id) {
        // public static rev_reward: number = 0;//ecpm 值
        // public static rev_interstitial: number = 0;//ecpm 值
        if (this.rev_reward == 0) {
            var revdef = { "au": [18, 20, 12, 20], "br": [3, 5, 1, 2], "ca": [15, 17, 15, 20], "cn": [10, 10, 0, 0], "de": [13, 11, 7, 11], "es": [4, 6, 3, 4], "fr": [7, 8, 5, 8], "gb": [10, 12, 12, 18], "in": [4, 8, 1, 3], "it": [3, 5, 2, 3], "jp": [14, 14, 11, 15], "kr": [10, 10, 9, 10], "mx": [3, 3, 1, 2], "ru": [7, 7, 3, 4], "th": [6, 6, 2, 4], "tw": [12, 15, 8, 10], "us": [22, 25, 16, 22], "hk": [6, 7, 6, 9] };
            var revarr;
            try {
                var revdata = ParamOnline.ME.getArr("revdata", revdef);
                revarr = revdata[CD.Region.toLowerCase()];
            }
            catch (e) { }
            if (revarr != undefined && revarr.length == 4) {
                if (CD.Platform == Platform.Ios) {
                    this.rev_interstitial = revarr[0];
                    this.rev_reward = revarr[1];
                }
                else {
                    this.rev_interstitial = revarr[2];
                    this.rev_reward = revarr[3];
                }
                console.log("===revdata:" + this.rev_reward + "," + this.rev_interstitial);
            }
        }
        if (this.rev_reward > 0 && this.rev_interstitial > 0) {
            var _revvalue = 0;
            if (id == 1) {
                _revvalue = this.rev_reward / 1000;
            }
            else {
                _revvalue = this.rev_interstitial / 1000;
            }
            if (_revvalue > 0) {
                SV.ME.RevValue += _revvalue;
                TK.user_set({ revvalue: SV.ME.RevValue });
                var pst = SV.ME.RevValue * 10;
                var arrID = -1;
                for (var i = 0; i < this.Rev_ValuesArr.length - 1; i++) {
                    if (pst >= this.Rev_ValuesArr[i] && pst < this.Rev_ValuesArr[i + 1]) {
                        arrID = i;
                        break;
                    }
                }
                if (arrID >= 0) {
                    var dadianID = arrID + 22;
                    if (SV.ME.isDadian(dadianID) == false) {
                        SV.ME.doDadian(dadianID);
                        arrID = this.Rev_ValuesArr[arrID];
                        console.log("===rev:" + arrID + "," + SV.ME.RevValue);
                        var _passtk = AdsManager.Rev_Values(arrID);
                        if (_passtk && _passtk.length > 0) {
                            AdsManager.logAdjustEvent(_passtk);
                            TK.firebase("Rev_" + arrID, {});
                        }
                    }
                }
            }
        }
    };
    //进入游戏后检测这个变量是否为true, 如果是,那么弹出界面并将状态改为false
    // public static NEED_SHOW_GDPR = false;
    AdsManager.getNeedShowGDPR = function () {
        if (CD.Platform == Platform.Android) {
            return AdsManager.adsController.call("getNeedShowGDPRDialog");
        }
        return false;
    };
    AdsManager.AgreeGDPR = function (isAuthorization) {
        // console.log("AgreeGDPR===",isAuthorization);
        if (CD.Platform == Platform.Android) {
            AdsManager.doAdsControllerCall("agreeGDPR", isAuthorization);
        }
    };
    //隐藏最美悬浮广告
    AdsManager.OnHideZMBanner = function () {
        var myBannerElement = Laya.Browser.document.getElementById("sdk_float_banner_advert");
        if (myBannerElement) {
            myBannerElement.remove();
        }
        Laya.timer.clear(this, this.refreshBanner);
    };
    //最美天气大图广告
    AdsManager.OnShowZMAd = function (adId, call, sucFun, errFun) {
        var zmAd = new Laya.Browser.window.zmAd({ slotId: adId, });
        //console.log("=最美天气大图广告=OnShowZMAd===="+adId)
        Laya.Browser.window.addEventListener('message', function (ev) {
            if (ev && ev.data) {
                if (ev.data.action == 'remove') {
                    if (call && sucFun) {
                        sucFun.call(call);
                        sucFun = null;
                    }
                }
            }
        }, false);
        if (adId == "j0tn25oam6") {
            Laya.timer.clear(this, this.refreshBanner);
            Laya.timer.once(20 * 1000, this, this.refreshBanner);
        }
    };
    AdsManager.refreshBanner = function () {
        //console.log("banner开始刷新===");
        AdsManager.OnHideZMBanner();
        AdsManager.OnShowZMAd("j0tn25oam6", this, function () { }, function () { });
    };
    AdsManager.OnShowGooleAd = function (adtype, call, sucFun, errFun) {
        console.log("OnShowGooleAd====adtype=" + adtype);
        Laya.Browser.window.adBreak({
            type: 'reward',
            beforeAd: function () {
                MSound.ME && MSound.ME.stopAll();
            },
            afterAd: function () {
                MSound.ME && MSound.ME.resumeMusic();
            },
            beforeReward: function (showAdFn) {
                console.log("beforeReward====");
                showAdFn();
            },
            adDismissed: function () {
                console.log("adDismissed====");
                if (call && errFun) {
                    errFun.call(call);
                }
            },
            adViewed: function () {
                console.log("adViewed====");
                if (call && sucFun) {
                    sucFun.call(call);
                }
            },
            adBreakDone: function (e) {
                console.log("adBreakDone====");
                if (e.breakStatus != 'viewed') {
                    TipRich.ME.showT(e.breakStatus).doshow();
                    // switch(e.breakStatus)
                    // {
                    //     case 'notReady':TipRich.ME.showT("API 尚未初始化").doshow(); break;
                    //     case 'timeout':TipRich.ME.showT("广告尚未预加载、稍后重试").doshow(); break;
                    //     case 'noAdPreloaded':TipRich.ME.showT("广告尚未预加载、稍后重试").doshow(); break;
                    //     case 'noAdPreloaded':TipRich.ME.showT("广告尚未预加载、稍后重试").doshow(); break;
                    // }
                }
            },
        });
    };
    AdsManager.OnShowGooldAd_Inter = function (adtype) {
        //console.log("OnShowGooldAd_Inter===="+adtype);
        Laya.Browser.window.adBreak({
            type: adtype,
            beforeAd: function () { MSound.ME && MSound.ME.stopAll(); },
            afterAd: function () { MSound.ME && MSound.ME.resumeMusic(); },
            adBreakDone: function (e) {
                console.log("adBreakDone=====");
                //console.log(e);
                if (e.breakStatus != 'viewed') {
                    TipRich.ME.showT(e.breakStatus).doshow();
                }
            }
        });
    };
    //============微游激励广告===============================
    AdsManager.isBannerReady_wy = function () {
        return Laya.Browser.window.MiniGameAds.isBannerReady();
    };
    AdsManager.showBanner_wy = function () {
        // console.log("banner广告====="+AdsManager.isBannerReady_wy());
        Laya.Browser.window.MiniGameAds.showBanner().then(function () {
            console.log("播放横幅广告 成功===");
        }).catch(function (e) {
            console.log("播放横幅广告 失败===");
        });
    };
    AdsManager.hideBanner_wy = function () {
        Laya.Browser.window.MiniGameAds.hideBanner().then(function () {
            console.log("隐藏横幅广告 成功===");
        }).catch(function (e) {
            console.log("隐藏横幅广告 失败===");
        });
    };
    AdsManager.isRewardedVideoReady_wy = function () {
        return Laya.Browser.window.MiniGameAds.isRewardvideoReady();
    };
    AdsManager.showRewardedVideo_wy = function (call, sucFun, errFun) {
        console.log("播放激励广告 成功===");
        if (call && sucFun) {
            sucFun.call(call);
            sucFun = null;
        }
        AchievementWnd.ME.addAch(3, 1, 1);
        //console.log("开发播放激励广告====="+AdsManager.isRewardedVideoReady_wy());
        /*if (!AdsManager.isRewardedVideoReady_wy()) {
            if (call && errFun) {
                errFun.call(call);
                errFun = null;
            }
            return;
        }

        Laya.Browser.window.MiniGameAds.showRewardedVideo().then(function () {
            console.log("播放激励广告 成功===");
            if (call && sucFun) {
                sucFun.call(call);
                sucFun = null;
            }
            AchievementWnd.ME.addAch(3, 1, 1);
        }).catch(function (e) {
            console.log("播放激励广告 失败===");
            if (call && errFun) {
                errFun.call(call);
                errFun = null;
            }
        });*/
    };
    AdsManager.isInterstitialReady_wy = function () {
        return Laya.Browser.window.MiniGameAds.isInterstitialReady();
    };
    AdsManager.showInterstitial_wy = function (call, sucFun, errFun) {
        //console.log("开发播放插屏广告====="+AdsManager.isInterstitialReady_wy());
        if (!AdsManager.isInterstitialReady_wy()) {
            if (call && errFun) {
                errFun.call(call);
                errFun = null;
            }
            return;
        }
        Laya.Browser.window.MiniGameAds.showInterstitial().then(function () {
            console.log("播放插屏广告 成功===");
            if (call && sucFun) {
                sucFun.call(call);
                sucFun = null;
            }
        }).catch(function (e) {
            console.log("播放插屏广告 失败===");
            if (call && errFun) {
                errFun.call(call);
                errFun = null;
            }
        });
    };
    AdsManager.GAID = "";
    AdsManager.AdsChannelID = "";
    AdsManager.ireloadADS = 0;
    AdsManager.rev_reward = 0; //ecpm 值
    AdsManager.rev_interstitial = 0; //ecpm 值
    AdsManager.Rev_ValuesArr = [1, 2, 3, 5, 10, 15, 9999999]; //, 20, 25
    AdsManager.m_nShareForm = "";
    AdsManager.m_InsReason = "";
    AdsManager.isLoadedInterstitialInIos = false;
    AdsManager.isRewardVideoLoaded = false;
    AdsManager.isLoadedInterstitialInAndroid = false;
    AdsManager.iGetTrackerInfo = 0;
    // public static doInterstitialCall(f, t = undefined) {
    //     if (CD.Platform == Platform.Ios && t != undefined) {
    //         f = f + ":";
    //     }
    //     if (AdsManager.interstitial) {
    //         try {
    //             if (t == undefined)
    //                 AdsManager.interstitial.call(f);
    //             else
    //                 AdsManager.interstitial.call(f, t);
    //         }
    //         catch (e) { }
    //     }
    // }
    // public static doRewardVideoCall(f, t = undefined) {
    //     if (CD.Platform == Platform.Ios && t != undefined) {
    //         f = f + ":";
    //     }
    //     if (AdsManager.rewardVideo) {
    //         try {
    //             if (t == undefined)
    //                 AdsManager.rewardVideo.call(f);
    //             else
    //                 AdsManager.rewardVideo.call(f, t);
    //         }
    //         catch (e) { }
    //     }
    // }
    AdsManager.OpenVideoFailNum = 0;
    return AdsManager;
}());
var AdsConfig = /** @class */ (function () {
    function AdsConfig() {
        this.EnableLog = false;
        this.UseTestID = false;
        this.EnableGDPR = false;
        this.EnableAdmob = true;
        this.EnableFacebook = true;
        this.EnableUnity = true;
        this.EnableVungle = true;
        this.EnableIronSource = true;
        this.EnableTapjoy = false;
        this.EnableApplovin = false;
        //mopub广告设置 不使用指定广告位时，设置广告位置为空字符串
        this.Banner_id = "";
        this.Pad_banner_id = "";
        this.Interstitial_id = "b2833931dfe04ec8a52c15dbfaace5a6"; //6dc118c0dda14dc69ee5a870cf8ab218
        //另外一个插屏广告位
        this.Share_Interstitial_ID = "";
        this.RewardVideo_ID = "ac43059f00454890b56463bd3d7f12f0";
        //custom event设置
        this.oguryID = "";
        this.Pubnative_app_token = "";
        this.Inneractive_ID = "";
        this.Inneractive_spot_ID = "";
        //今日头条广告设置，ios有效
        this.TT_ID = "";
        this.TT_Banner_ID = "";
        this.TT_Interstitial_ID = "";
        this.TT_RewardVideo_ID = "";
    }
    return AdsConfig;
}());
//# sourceMappingURL=AdsManager.js.map