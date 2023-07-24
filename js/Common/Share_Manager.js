/*
* Ycj
* 2018 - 07 - 28
* 分享管理
*/
var Share_Manager = /** @class */ (function () {
    function Share_Manager() {
        //构造方法
        this.m_nIsShare_Menu = false;
        this.playAD = false;
        this.m_nShareForm = "";
        this.rewardedVideoAd = null;
        this.m_nFrom = 0;
        this.m_nVideoIsShow = false;
        this.start_game_time = 0;
        //this.URL = DZLM_GM.Service_URL;
        // this.Show_Share_Menu();
        // this.Share_Menu_Click("Friend","");
    }
    Share_Manager.prototype.OnInitShare = function () {
        if (SM.m_nIsShare_Menu)
            return;
        if (CD.Platform == Platform.Wechat) {
            SM.Share_Menu();
        }
        if (CD.Platform == Platform.Wanyiwan) {
            SM.OShowWanYiWanShare();
        }
        SM.m_nIsShare_Menu = true;
    };
    Share_Manager.prototype.OnInit = function () {
        if (CD.Platform == Platform.Wechat) {
            SM.InitWeChat();
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            var GameStatusInfo = Laya.Browser.window.GameStatusInfo;
            var gameParam = GameStatusInfo.gameParam;
            SM.InitWanYiWan(gameParam);
        }
    };
    Share_Manager.prototype.InitWeChat = function () {
        this.Show_Share_Menu();
    };
    Share_Manager.prototype.Share_Menu = function () {
        if (heroplayer != null && SM.m_nIsShare_Menu == false) {
            this.Share_Menu_Click("Friend", "GameType=2&Inver_dbid=" + heroplayer["dbid"]);
            SM.m_nIsShare_Menu = true;
        }
    };
    //显示分享菜单
    Share_Manager.prototype.Show_Share_Menu = function () {
        Laya.Browser.window.wx.showShareMenu({
            withShareTicket: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //用户主动拉起转发
    Share_Manager.prototype.OnUser_Share_Menu_ClickOk = function (_Type, _Parameter, nType) {
        if (_Parameter === void 0) { _Parameter = ""; }
        if (nType === void 0) { nType = "1"; }
        if (WM.IsShareAndVideo() == 0) {
            UI.OnShowYesOrNo("温馨提示", "分享暂未开放", "我知道了");
            return;
        }
        if (WM.m_szAllShareRewardType.indexOf(nType) != -1) {
            WM.m_nIsShowShareTiShi = true;
        }
        var _Data = null;
        switch (_Type) {
            case "Recruit":
                _Data = CD.Game.Share.Recruit;
                break;
            case "Friend":
                _Data = CD.Game.Share.Friend;
                break;
            case "Group":
                _Data = CD.Game.Share.Group;
                break;
        }
        var _Random = CM.Get_Random(0, _Data.length - 1);
        var _Share_Data = _Data[_Random];
        var _Title = _Share_Data[0];
        var _Image_URL = _Share_Data[1];
        SM.OnGetShareReward(nType, "okshare");
        //转发事件
        Laya.Browser.window.wx.shareAppMessage({
            title: _Title,
            imageUrl: CD.getFileVersionPath(_Image_URL),
            query: _Parameter,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //转发按钮点击事件
    Share_Manager.prototype.Share_Menu_Click = function (_Type, _Parameter) {
        if (_Parameter === void 0) { _Parameter = ""; }
        //转发事件
        Laya.Browser.window.wx.onShareAppMessage(function () {
            var _Data = null;
            switch (_Type) {
                case "Recruit":
                    _Data = CD.Game.Share.Recruit;
                    break;
                case "Friend":
                    _Data = CD.Game.Share.Friend;
                    break;
                case "Group":
                    _Data = CD.Game.Share.Group;
                    break;
            }
            var _Random = CM.Get_Random(0, _Data.length - 1);
            var _Share_Data = _Data[_Random];
            var _Title = _Share_Data[0];
            var _Image_URL = _Share_Data[1];
            // 用户点击了“转发”按钮
            return {
                title: _Title,
                imageUrl: CD.getFileVersionPath(_Image_URL),
                query: _Parameter,
                success: function (res) {
                    //console.log(res, res.shareTickets[0]);
                },
                fail: function (res) { },
                complete: function (res) { },
            };
        });
    };
    //记录客户端信息
    Share_Manager.prototype.Get_User_systeminfo = function () {
        Laya.Browser.window.wx.getSystemInfo({
            success: function (res) {
                // console.log(res);
                // if (res.errMsg == "getSystemInfo:ok") 
                // {
                //     Laya.Browser.window.wx.request
                //     ({
                //         url: CD.Game.Service_URL + 'setsysteminfo.aspx',
                //         data:
                //         {
                //             'openid': User.openid,
                //             'action': 'setsysteminfo',
                //             'SDKVersion': res.SDKVersion,
                //             'batteryLevel': res.batteryLevel,
                //             'benchmarkLevel': res.benchmarkLevel,
                //             'brand': res.brand,
                //             'errMsg': res.errMsg,
                //             'fontSizeSetting': res.fontSizeSetting,
                //             'language': res.language,
                //             'model': res.model,
                //             'pixelRatio': res.pixelRatio,
                //             'platform': res.platform,
                //             'screenHeight': res.screenHeight,
                //             'screenWidth': res.screenWidth,
                //             'statusBarHeight': res.statusBarHeight,
                //             'system': res.system,
                //             'version': res.version,
                //             'windowHeight': res.windowHeight,
                //             'windowWidth': res.windowWidth
                //         },
                //         method: 'GET',
                //         header: { 'content-type': 'application/json' },
                //         dataType: 'json',
                //         responseType: 'text',
                //         success: function () {},
                //         fail: function (Request_Result_Fail) { },
                //         complete: function (Request_Result_Complete) { },
                //     })
                // }
            },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    Share_Manager.prototype.Get_User_systeminfo_Baidu = function () {
        Laya.Browser.window.swan.getSystemInfo({
            success: function (res) {
                // console.log(res);
                if (res.errMsg == "getSystemInfo:ok") {
                    Laya.Browser.window.wx.request({
                        url: CD.Game.Service_URL + 'api/wechat/setsysteminfo.aspx',
                        data: {
                            'openid': User.openid,
                            'action': 'setsysteminfo',
                            'SDKVersion': res.SDKVersion,
                            'batteryLevel': res.batteryLevel,
                            'benchmarkLevel': res.benchmarkLevel,
                            'brand': res.brand,
                            'errMsg': res.errMsg,
                            'fontSizeSetting': res.fontSizeSetting,
                            'language': res.language,
                            'model': res.model,
                            'pixelRatio': res.pixelRatio,
                            'platform': res.platform,
                            'screenHeight': res.screenHeight,
                            'screenWidth': res.screenWidth,
                            'statusBarHeight': res.statusBarHeight,
                            'system': res.system,
                            'version': res.version,
                            'windowHeight': res.windowHeight,
                            'windowWidth': res.windowWidth
                        },
                        method: 'GET',
                        header: { 'content-type': 'application/json' },
                        dataType: 'json',
                        responseType: 'text',
                        success: function () { },
                        fail: function (Request_Result_Fail) { },
                        complete: function (Request_Result_Complete) { },
                    });
                }
            },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //通用截取当前显示界面图片分享
    Share_Manager.prototype.Share_Screen_Capture_TempFile = function (_X, _Y, _Width, _Height, _Text) {
        if (_Text === void 0) { _Text = "分享内容"; }
        var _Canvas = new Image();
        //给个ID方便添加CSS样式
        _Canvas.id = "snapshot";
        //将整个STAGE画到图片里
        _Canvas = Laya.stage.drawToCanvas(640, 1130, 0, 0).getCanvas();
        // console.log(Canvas);
        _Canvas.toTempFilePath({
            x: _X,
            y: _Y,
            width: _Width,
            height: _Height,
            destWidth: _Width,
            destHeight: _Height,
            success: function (res) {
                var _temppath = res.tempFilePath;
                console.log(_temppath);
                Laya.Browser.window.wx.shareAppMessage({
                    title: _Text,
                    imageUrl: res.tempFilePath,
                    success: function (res) {
                        Laya.Browser.window.wx.uploadFile({
                            url: CD.Service_URL + "uploadimage.aspx",
                            filePath: _temppath,
                            name: 'file',
                            formData: {
                                'user': 'test'
                            }
                        });
                    },
                    fail: function (res) { },
                    complete: function (res) { },
                });
            }
        });
    };
    Share_Manager.prototype.OnGetCdLong = function () {
        var szdata;
        if (heroplayer == null)
            return;
        szdata = heroplayer["MianFeiZuanShi"];
        var nCdTime = 0;
        var nCdLone = 0;
        var nNowTime = 0;
        nNowTime = (cFun.serverTime.getTime() / 1000) | 0;
        nCdTime = ((szdata[0] - 1) / 5) * 120 + 60;
        nCdLone = nCdTime - (nNowTime - szdata[1]);
        return nCdLone;
    };
    Share_Manager.prototype.GetVideoNum = function () {
        var szdata;
        var nLastVideotime;
        if (heroplayer == null)
            return 0;
        szdata = heroplayer["MianFeiZuanShi"];
        if (szdata == null || szdata == undefined)
            return 0;
        nLastVideotime = heroplayer["lastvideotime"];
        var nCdTime = 0;
        var nNowTime = 0;
        nNowTime = (cFun.serverTime.getTime() / 1000) | 0;
        if (cFun.SameTime(nNowTime, nLastVideotime, 86400) == 1) {
            return szdata[0];
        }
        return 0;
    };
    Share_Manager.prototype.onCheckWanYiWanVideo = function (sType) {
        var szdata;
        var nLastVideotime = 0;
        if (heroplayer == null)
            return 0;
        szdata = heroplayer["MianFeiZuanShi"];
        nLastVideotime = heroplayer["lastvideotime"];
        var nCdTime = 0;
        var nNowTime = 0;
        nNowTime = (cFun.serverTime.getTime() / 1000) | 0;
        if (cFun.SameTime(nNowTime, nLastVideotime, 86400) == 1) {
            if (sType == "video") {
                if (szdata[0] >= 5) // #超过次数了
                    return -1;
            }
            if (sType != "video")
                return 1;
            nCdTime = ((szdata[0] - 1) / 5) * 120 + 60;
            if ((nNowTime - szdata[1]) < nCdTime) //
                return -2;
        }
        return 1;
    };
    //获得奖励统一接口       
    Share_Manager.prototype.ShareOrLookVideo = function (shareType) {
        if (!playerIsOK())
            return 0;
        var nReaust = 0;
        if (CD.Platform == Platform.Wechat) //微信环境
         {
            if (WM.IsShareAndVideo() == 0) {
                SM.OnGetShareReward(shareType, "shipin");
                return;
            }
            nReaust = WM.OnCheckLooKVideo(shareType); //看视频
            if (nReaust == 1) {
                WM.onCreateJiLiGuangGao(shareType);
            }
            else {
                SM.OnUser_Share_Menu_Click("Group", "", shareType);
            }
        }
        else if (CD.Platform == Platform.H5 || CD.Platform == Platform.Android || CD.Platform == Platform.Ios) //H5
         {
            if ((CD.Platform == Platform.Android || CD.Platform == Platform.Ios) && CD.BanBen == BanBen.guoji) { //engliash ads
                //
                //  UI.OnWinMsgUI("xxo===");
                if (SM.onCheckWanYiWanVideo(shareType) == 1) {
                    SM.onWanYiWanJiLiGuangGao(shareType);
                }
                else {
                    if (shareType == "video") //看视频
                     {
                        // if(SM.OnGetCdLong() >0)
                        // {
                        //     UI.OnShowYesOrNo(languageManger.language[85],languageManger.language[512] + UI.lookVideo_view.CdTime.text + languageManger.language[510] ,languageManger.language[33]);
                        // }
                        // else
                        // {
                        //     UI.OnShowYesOrNo(languageManger.language[85],languageManger.language[511] ,languageManger.language[33]);
                        // }
                        return;
                    }
                }
            }
            else {
                var Dis = SM.OnGetRewardDis(shareType);
                if (Dis < 1) {
                    return;
                }
                // if (heroplayer.Dismonds < Dis) //钻石不足
                // {
                //     UI.OnShowYesOrNo(languageManger.language[143], languageManger.language[144], languageManger.language[32], languageManger.language[147], function (shareType: any): void { if (shareType == "doubleMoney") { heroplayer.tos(101, [4, 1]); } }, [shareType], function (shareType: any): void { if (shareType == "doubleMoney") { heroplayer.tos(101, [4, 1]); } }, [shareType], "", 3);
                //     return;
                // }
                UI.OnShowYesOrNo(Lan.D[143], Lan.D[145] + Dis + Lan.D[146], Lan.D[32], Lan.D[147], function (d) { SM.OnGetShareReward(shareType, "H5"); }, null, function (shareType) { console.log(shareType); if (shareType == "doubleMoney") {
                    heroplayer.tos(101, [4, 1]);
                } }, [shareType], "", 3);
            }
        }
        else if (CD.Platform == Platform.Wanyiwan || CD.Platform == Platform.Baidu) {
            if (SM.onCheckWanYiWanVideo(shareType) == 1) {
                SM.onWanYiWanJiLiGuangGao(shareType);
            }
            else {
                if (shareType == "video") //看视频
                 {
                    // if(SM.OnGetCdLong() >0)
                    // {
                    //     UI.OnShowYesOrNo(languageManger.language[85],languageManger.language[512] + UI.lookVideo_view.CdTime.text + languageManger.language[510] ,languageManger.language[33]);
                    // }
                    // else
                    // {
                    //     UI.OnShowYesOrNo(languageManger.language[85],languageManger.language[511] ,languageManger.language[33]);
                    // }
                    return;
                }
                SM.OnWanYiWan_Share_Menu_ClickOk("Group", "GameType=2&Inver_dbid=" + heroplayer["dbid"], shareType);
            }
        }
        else if (CD.Platform == Platform.Laya) //本地开发
         {
            SM.OnGetShareReward(shareType, "Laya"); //
        }
    };
    //分享接口
    Share_Manager.prototype.OnUser_Share_Menu_Click = function (_Type, _Parameter, nType) {
        if (_Parameter === void 0) { _Parameter = ""; }
        if (nType === void 0) { nType = "1"; }
        //微信分享
        if (CD.Platform == Platform.Wechat) {
            var nNowTime = (cFun.serverTime.getTime() / 1000) | 0;
            _Parameter += "ShareType=" + nType + "&Inver_dbid=" + heroplayer["dbid"] + "&sharetime=" + nNowTime.toString();
            //临时屏蔽
            // if(nType == "doubleMoney")
            // {
            //     heroplayer.tos(101, [4, 3]);
            // }
            SM.OnUser_Share_Menu_ClickOk(_Type, _Parameter, nType);
        }
        else if (CD.Platform == Platform.Wanyiwan) //玩一玩分享
         {
            SM.OnWanYiWan_Share_Menu_ClickOk("Group", "GameType=2&Inver_dbid=" + heroplayer["dbid"], nType);
        }
    };
    //领取奖励消耗
    Share_Manager.prototype.OnGetRewardDis = function (sShareType) {
        var nDis = 0;
        if (heroplayer == null) {
            return nDis;
        }
        switch (sShareType) {
            case "bdx": //飞的宝箱
            case "inspire": //鼓舞领取
            case "doubleMoney": // 双倍离线
            case "godHand": //神之手
                nDis = 5;
                break;
            case "fairy": //精灵领取
                nDis = 10;
                break;
        }
        return nDis;
    };
    Share_Manager.prototype.OnGetShareReward = function (sShareType, nSys) {
        if (heroplayer == null) {
            return;
        }
        switch (sShareType) {
            case "video": //看视频赚钻石
                if (CD.Platform == Platform.Wechat) {
                    if (WM.onCheckMianFeiZuanShi() == 1) {
                        heroplayer.tos(106, [1005, [0, 0]]);
                    }
                }
                if (CD.Platform == Platform.Wanyiwan || CD.Platform == Platform.Baidu) {
                    if (SM.onCheckWanYiWanVideo("video") == 1) {
                        heroplayer.tos(106, [1005, [0, 0]]);
                    }
                }
                else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                    if (SM.onCheckWanYiWanVideo("video") == 1) {
                        heroplayer.tos(106, [1005, [0, 0]]);
                    }
                }
                break;
            case "bdx": //飞的宝箱
                heroplayer.tos(106, [1006, [0, 0]]);
                break;
            case "fairy": //精灵领取
                heroplayer.tos(101, [3, 1]);
                break;
            case "inspire": //鼓舞领取
                heroplayer.tos(101, [2, 1]);
                break;
            case "doubleMoney": // 双倍离线
                if (nSys == "share") //微信分享
                 {
                    heroplayer.tos(101, [6, 1]);
                }
                else {
                    heroplayer.tos(101, [4, 2]);
                }
                break;
            case "godHand": //神之手
                heroplayer.tos(101, [5, 1]);
                break;
            case "daily":
                heroplayer.tos(101, [7, 2]);
                break;
            case "godtemple1":
                heroplayer.tos(101, [8, 1]);
                break;
            case "godtemple2":
                heroplayer.tos(101, [8, 2]);
                break;
            case "godtemple3":
                heroplayer.tos(101, [8, 3]);
                break;
            case "godtemple4":
                heroplayer.tos(101, [8, 4]);
                break;
        }
    };
    //------------------------------------玩一玩--------------------
    Share_Manager.prototype.OnWanYiWan_Share_Menu_ClickOk = function (_Type, _Parameter, nType) {
        if (_Parameter === void 0) { _Parameter = ""; }
        if (nType === void 0) { nType = "1"; }
        var _Data = null;
        switch (_Type) {
            case "Recruit":
                _Data = CD.Game.Share.Recruit;
                break;
            case "Friend":
                _Data = CD.Game.Share.Friend;
                break;
            case "Group":
                _Data = CD.Game.Share.Group;
                break;
        }
        var _Random = CM.Get_Random(0, _Data.length - 1);
        var _Share_Data = _Data[_Random];
        var _Title = _Share_Data[0];
        var _Image_URL = _Share_Data[1];
        //转发事件
        _Image_URL = CD.getFileVersionPath(_Image_URL);
        var sss = _Image_URL.split("h5_game");
        //CD.log("Image_URL="+sss[0]);
        // CD.log("Image_URL="+sss[1]);
        Laya.Browser.window.BK.Share.share({
            //qqImgUrl: _Image_URL,
            title: '赏金英雄',
            summary: _Title,
            isToFriend: true,
            extendInfo: _Parameter,
            success: function (succObj) {
                //    CD.log('inver==分享成功'+ succObj.code);
                //    CD.log(succObj.data.ret);
                //atitype[1 好友，4群 ， 5讨论组]
                if (succObj.data.ret == 0) //成功：0；失败：1；取消：2
                 {
                    SM.OnGetShareReward(nType, "shipin");
                }
                else {
                    if (nType == "doubleMoney") {
                    }
                }
            },
            fail: function (failObj) {
                //CD.log('inver==分享失败'+ failObj.code+"==="+ JSON.stringify(failObj.msg));
                if (nType == "doubleMoney") {
                }
            },
            complete: function () {
                //CD.log('inver==分享完成，不论成功失败');
            }
        });
    };
    Share_Manager.prototype.onWanYiWanJiLiGuangGao = function (nShareForm) {
        this.m_nShareForm = nShareForm;
        // UI.OnWinMsgUI("onWanYiWanJiLiGuangGao==="+this.m_nShareForm);
        if (CD.Platform == Platform.Baidu) {
            this.onCreateJiLiGuangGao_BaiDu(1);
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            this.onPlayVideo(this.m_nShareForm);
        }
        else if ((CD.Platform == Platform.Android || CD.Platform == Platform.Ios) && CD.BanBen == BanBen.guoji) {
            //判断视频冷却时间
            if (cFun.serverTime.getTime() < GameMain.sharecd) {
                var nTime = Math.floor((GameMain.sharecd - cFun.serverTime.getTime()) / 1000);
                if (nTime < 1)
                    nTime = 1;
                UI.OnShowYesOrNo(Lan.D[85], Lan.D[4037].replace("&", nTime), Lan.D[33]);
                return;
            }
        }
    };
    Share_Manager.prototype.onCreateJiLiGuangGao_BaiDu = function (nForm) {
        //创建组件
        var adUId = "5999870";
        if (this.rewardedVideoAd == null) {
            this.rewardedVideoAd = Laya.Browser.window.swan.createRewardedVideoAd({ adUnitId: adUId, appSid: "d5dc9545" });
            SM.OnCheckAdClose_baidu();
        }
        this.rewardedVideoAd.load()
            .then(function () {
            SM.rewardedVideoAd.doshow();
            SM.m_nVideoIsShow = true;
            if (audioManager != null) {
                if (UI.Main_View != null) {
                    audioManager.Stop_Music();
                    audioManager.Set_Sound_Volume(0);
                }
            }
        })
            .catch(function (err) {
            //视频次数用完了
            console.log("视频次数用完了");
        });
    };
    Share_Manager.prototype.OnCheckAdClose_baidu = function () {
        var _this = this;
        this.rewardedVideoAd.onClose(function (res) {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            var IsOk = false;
            if (res && res.isEnded || res == undefined) {
                // 正常播放结束，可以下发游戏奖励
                IsOk = true;
            }
            else {
                // 播放中途退出，不下发游戏奖励
                //UI.OnWinMsgUI("播放中途退出，不下发游戏奖励");
                IsOk = false;
            }
            if (IsOk) {
                //UI.OnWinMsgUI("正常播放结束，可以下发游戏奖励");
                SM.OnGetShareReward(_this.m_nShareForm, "shipin");
            }
            else {
            }
            SM.m_nVideoIsShow = false;
            if (audioManager != null) {
                if (UI.Main_View != null) {
                    // CD.log("UI.Main_View.MusicActive: " + UI.Main_View.MusicActive);
                    if (UI.Main_View.MusicActive == 1) {
                        audioManager.Continue_Music();
                    }
                    else {
                        //  CD.log("music pause ");
                        audioManager.Pause_Music();
                    }
                    if (UI.Main_View.SoundActive == 1) {
                        audioManager.Set_Sound_Volume(100);
                    }
                }
            }
        });
    };
    /**厘米秀播放激励视频**/
    Share_Manager.prototype.onPlayVideo = function (nShareForm) {
        var isPlayComplete = false;
        var nRandomIndex = CM.Get_Random(0, 3);
        Laya.Browser.window.BK.Advertisement.fetchVideoAd(nRandomIndex, function (retCode, msg, handle) {
            //CD.log("===开始调用广告接口-retCode:"+ retCode + "-msg:" + msg);
            if (retCode == 0) {
                //2.监听事件
                handle.setEventCallack(function (code, msg) {
                    // CD.log("==关闭游戏=="+msg.toString());
                }.bind(this), function (code, msg) {
                    // CD.log("==视频结束==");
                    isPlayComplete = true;
                }.bind(this), function (code, msg) {
                    // CD.log("==关闭视频webview==");
                    this.playAD = false;
                    if (audioManager != null) {
                        if (UI.Main_View != null) {
                            // CD.log("UI.Main_View.MusicActive: " + UI.Main_View.MusicActive);
                            if (UI.Main_View.MusicActive == 1) {
                                audioManager.Continue_Music();
                            }
                            else {
                                //  CD.log("music pause ");
                                audioManager.Pause_Music();
                            }
                            if (UI.Main_View.SoundActive == 1) {
                                audioManager.Set_Sound_Volume(100);
                            }
                        }
                    }
                    if (isPlayComplete) {
                        //通知游戏进行看完视频的操作
                        //  CD.log("通知游戏进行看完视频的操作=="+this.m_nFrom);
                        SM.OnGetShareReward(this.m_nShareForm, "shipin");
                    }
                    else {
                    }
                }.bind(this), function (code, msg) {
                    // CD.log("==开始播放视频==");
                    this.playAD = true;
                    if (audioManager != null) {
                        if (UI.Main_View != null) {
                            audioManager.Stop_Music();
                            audioManager.Set_Sound_Volume(0);
                        }
                    }
                }.bind(this));
                //3.跳转至播放界面
                handle.jump();
            }
            else {
                //CD.log("==拉取视频广告失败==");
                isPlayComplete = false;
            }
        }.bind(this));
    };
    Share_Manager.prototype.InitWanYiWan = function (sData) {
        SM.OnGetInverId(sData);
        this.start_game_time = (new Date()).getTime();
    };
    Share_Manager.prototype.OShowWanYiWanShare = function () {
        if (heroplayer != null && SM.m_nIsShare_Menu == false) {
            new Laya.Browser.window.BK.Game({
                onShare: function () {
                    var _Data = null;
                    _Data = CD.Game.Share.Group;
                    var _Random = CM.Get_Random(0, _Data.length - 1);
                    var _Share_Data = _Data[_Random];
                    var _Title = _Share_Data[0];
                    var _Image_URL = _Share_Data[1];
                    var shareInfo = {
                        //picUrl:CD.getFileVersionPath(_Image_URL), 
                        summary: _Title,
                        extendInfo: "GameType=2&Inver_dbid=" + heroplayer["dbid"]
                    };
                    return shareInfo;
                }.bind(this)
            });
            SM.m_nIsShare_Menu = true;
        }
    };
    //取到邀请Id
    Share_Manager.prototype.OnGetInverId = function (sData) {
        var sInverMsg;
        var sInverId = "";
        if (sData == undefined) {
            return;
        }
        sInverMsg = sData.split('&');
        if (sInverMsg.length < 2) {
            return;
        }
        sInverId = sInverMsg[1].replace("Inver_dbid=", "");
        SM.Inver_dbid = sInverId;
    };
    Share_Manager.prototype.GetRankSendMoney = function () {
        return heroplayer.highestLevel;
    };
    Share_Manager.prototype.OnShangBaoRankData = function () {
        if (heroplayer == null || heroplayer.loginok == false)
            return;
        var nScore = SM.GetRankSendMoney(); //heroplayer.moneytotalall*heroplayer.moneyetotalall;
        var data = {
            userData: [
                {
                    openId: User.openid,
                    startMs: this.start_game_time.toString(),
                    endMs: ((new Date()).getTime()).toString(),
                    scoreInfo: {
                        score: nScore, //分数，类型必须是整型数
                        // 附加属性（选填），最多16个，且名称必须为a1 ~ a16，类型必须是整型数
                    },
                },
            ],
            // type 描述附加属性的用途
            // order 排序的方式，
            // 1: 从大到小，即每次上报的分数都会与本周期的最高得分比较，如果大于最高得分则覆盖，否则忽略
            // 2: 从小到大，即每次上报的分数都会与本周期的最低得分比较，如果低于最低得分则覆盖，否则忽略
            // 3: 累积，即每次上报的积分都会累积到本周期已上报过的积分上（本质上是从大到小的一种特例）
            // 4: 直接覆盖，每次上报的积分都会将本周期的得分覆盖，不管大小
            // 如score字段对应，上个属性.
            attr: {
                score: {
                    type: 'rank',
                    order: 4,
                },
            },
        };
        // gameMode: 游戏模式，如果没有模式区分，直接填 1
        // 必须配置好周期规则后，才能使用数据上报和排行榜功能
        Laya.Browser.window.BK.QQ.uploadScoreWithoutRoom(1, data, function (errCode, cmd, data) {
            // 返回错误码信息
            if (errCode !== 0) {
                //CD.log('上传分数失败!错误码：' + errCode);
            }
        });
    };
    Share_Manager.prototype.OnGetRankData = function () {
        // 当前不支持一次同时拉取多个排行榜，需要拉取多次，而且必须等上一个拉取回来后才能拉取另外一个排行榜
        // 先拉 score 排行榜
        var attr = "score"; //使用哪一种上报数据做排行，可传入score，a1，a2等
        var order = 1; //排序的方法：[ 1: 从大到小(单局)，2: 从小到大(单局)，3: 由大到小(累积)]
        var rankType = 0; //要查询的排行榜类型，0: 好友排行榜
        // 必须配置好周期规则后，才能使用数据上报和排行榜功能
        Laya.Browser.window.BK.QQ.getRankListWithoutRoom(attr, order, rankType, function (errCode, cmd, data) {
            //CD.log("getRankListWithoutRoom callback  cmd" + cmd + " errCode:" + errCode + "  data:" + JSON.stringify(data));
            // 返回错误码信息
            if (errCode !== 0) {
                //CD.log('获取排行榜数据失败!错误码：' + errCode);
                return;
            }
            // 解析数据
            if (data) {
                // UI.rank_View.GetWanYiWanRankData(data.data.ranking_list);
            }
        });
    };
    //SM.GetWanYiWanRankData([{score:195000001},{score:122000011},{score:170000002}]);
    /**SM.GetListHead(["a","b"],0);
     * 得到玩家头像
     * @param openId
     * @param callBack
     */
    Share_Manager.prototype.getHead = function (openId, callBack) {
        Laya.Browser.window.BK.MQQ.Account.getHead(openId, function (openID, BuffInfo) {
            if (openId == openID) {
                var filePath = SM.onCreateHeadUrl(openId, BuffInfo);
                if (callBack) {
                    callBack != null && callBack.runWith([openID, filePath]);
                }
                else {
                    CD.log("====5==" + openId);
                }
            }
        });
    };
    /**
     * 通过openid生成一个头像路径
     * @param openId
     * @return
     */
    Share_Manager.prototype.onCreateHeadUrl = function (openId, BuffInfo) {
        var filePath = "GameSandBox://webcache/" + openId;
        Laya.Browser.window.BK.Image.saveImage(BuffInfo.buffer, BuffInfo.width, BuffInfo.height, filePath, "png");
        return filePath + ".png";
    };
    return Share_Manager;
}());
//# sourceMappingURL=Share_Manager.js.map