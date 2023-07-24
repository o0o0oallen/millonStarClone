/*
* Ycj
* 2018 - 04 - 13
* 加载界面
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Laya.MiniAdpter.init(true);
var WeChat_Manager = /** @class */ (function () {
    function WeChat_Manager() {
        this.Open_Data_Context = Laya.Browser.window.wx.getOpenDataContext();
        this.Shared_Canvas = this.Open_Data_Context.canvas;
        this.Login_HR = new Laya.HttpRequest();
        this.Version_HR = new Laya.HttpRequest();
        this.Avatar_HR = new Laya.HttpRequest();
        this.Charge_HR = new Laya.HttpRequest();
        this.ChargeCheck_HR = new Laya.HttpRequest();
        this.System_Information = Laya.Browser.window.wx.getSystemInfoSync();
        this.Launch_Parameters = Laya.Browser.window.wx.getLaunchOptionsSync();
        this.Update_Manager = Laya.Browser.window.wx.getUpdateManager();
        this.Recorder_Manager = Laya.Browser.window.wx.getRecorderManager();
        //登录状态
        this.Login_State = false;
        //登录码
        this.Login_Code = "";
        //会话信息
        this.Session_Key = "";
        //许可
        this.Access_Token = "";
        //许可有效时间
        this.Access_Token_Expires_In = "";
        //通过分享进入游戏分享用户DbID
        this.Inver_dbid = "";
        //通过分享进入游戏分享用户微信ID
        this.Inviter_openid = "";
        //通过分享进入游戏获取scene
        this.Login_scene = "";
        //通过分享进入游戏获取action
        this.Query_action = "";
        this.GameType = "";
        this.FriendMatcg = "";
        //排行精灵
        this.Ranking_Sprite = null;
        //群组ID
        this.Group_ID = "";
        //上一个分享ID
        this.Prve_ShareTicket = "";
        this.m_szAllShareRewardType = ["video", "bdx", "fairy", "inspire", "doubleMoney", "godHand"];
        this.m_nIsShowShareTiShi = false;
        //----------------------------------------------------分享云控相关--------------------------------------------------------------------------------
        // 0禁止分享  ，1分享，2看视频 3 优先视频
        this.ShareAndVideo = 1;
        this.m_nMaxVideoCount = 1;
        //=========================================拉起激励=============================================================
        this.rewardedVideoAd = null;
        this.m_nRewardVideoNum = 0;
        //当前加载激励状态
        this.bVideoAdLoadOk = false;
        this.CheckVideoAdTime = 0;
    }
    //构造方法
    WeChat_Manager.prototype.Initialize = function () {
        this.Shared_Canvas.width = GameMain.Stage_Width;
        this.Shared_Canvas.height = GameMain.Stage_Height;
        console.log("查看启动参数：", this.Launch_Parameters);
        if (this.Launch_Parameters.query.scene != undefined) {
            CD.Channel = this.Launch_Parameters.query.scene;
            console.log("有渠道进入：", CD.Channel);
        }
        WM.Login_scene = this.Launch_Parameters.scene;
        WM.Inviter_openid = this.Launch_Parameters.query.openid;
        WM.Query_action = this.Launch_Parameters.query.action;
        WM.GameType = this.Launch_Parameters.query.GameType;
        WM.FriendMatcg = this.Launch_Parameters.query.FriendMatcg;
        WM.Inver_dbid = this.Launch_Parameters.query.Inver_dbid;
        WM.OnGetShareInfo(this.Launch_Parameters, 1);
        this.Login_HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
        this.Version_HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
        this.Avatar_HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
        this.Login();
        this.Ranking_Sprite = new Laya.Sprite();
        this.Ranking_Sprite.width = GameMain.Stage_Width;
        this.Ranking_Sprite.height = GameMain.Stage_Height;
        this.Ranking_Sprite.zOrder = 20;
        Laya.stage.addChild(this.Ranking_Sprite);
        this.Ranking_Sprite.visible = false;
        /*
        Laya.Browser.window.wx.setEnableDebug
        ({
            enableDebug: false,
            success: function(res) { },
            fail: function(res) { },
            complete: function(res) { },
        })
        */
        this.Update_Manager.onUpdateReady(function (res) {
            /*
            var _File_Manager = Laya.Browser.window.wx.getFileSystemManager();

            _File_Manager.getSavedFileList
            ({
                success: function(res)
                {

                },
                fail: function(res) { },
                complete: function(res) { },
            })
            */
            Laya.Browser.window.wx.showModal({
                title: '更新提示',
                content: '为了更好的游戏体验，请更新至最新版本',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        WM.Update_Manager.applyUpdate();
                    }
                }
            });
        });
        this.Update_Manager.onUpdateFailed(function (res) {
            console.log(res);
        });
        //监听小游戏切到后台的事件
        Laya.Browser.window.wx.onHide(function () {
            WM.Background();
        });
        //监听小游戏回到前台的事件
        Laya.Browser.window.wx.onShow(function (res) {
            WM.Foreground();
            console.log("查看进入场景b：", res);
            WM.Login_scene = res.scene;
            WM.Inviter_openid = res.query.openid;
            WM.Query_action = res.query.action;
            WM.GameType = res.query.GameType;
            WM.FriendMatcg = res.query.FriendMatcg;
            WM.Inver_dbid = res.query.Inver_dbid;
            SM.Inver_dbid = WM.Inver_dbid;
            WM.OnGetShareInfo(res, 2);
            if (WM.m_nIsShowShareTiShi) {
                // UI.OnShowYesOrNo("温馨提示","在群聊天里点击自己的分享连接,再次进入游戏，即可获得奖励","确定","");
                WM.m_nIsShowShareTiShi = false;
            }
            // G_AM.Continue_Music();
            // if(CD.NowSelectGameName != "Loddy")
            // {
            //     var _ShareTicket = res.shareTicket;
            //     if(_ShareTicket != undefined)
            //     {
            //         if(WM.Prve_ShareTicket == _ShareTicket)
            //         {
            //             return;
            //         }
            //         WM.Prve_ShareTicket = _ShareTicket;
            //         WM.Group_ID = _ShareTicket;
            //       //  WM.Ranking_Group(_ShareTicket, "DZLM_BS");
            //     }
            // }
            WM.Game_Update();
        });
        //监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
        Laya.Browser.window.wx.onAudioInterruptionBegin(function () {
            GI.Stop_Music();
            // G_AM.Stop_Music();
        });
        //监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
        Laya.Browser.window.wx.onAudioInterruptionEnd(function () {
            if (GI == null || GI == undefined) {
                console.log("查看进入场景----------GI is null---------3");
            }
            console.log("查看进入场景-------------------3");
            GI.Play_Music();
            console.log("查看进入场景-------------------4");
            // G_AM.Continue_Music();
        });
        //设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
        Laya.Browser.window.wx.setKeepScreenOn({
            keepScreenOn: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
        //申请录音权限
        // Laya.Browser.window.wx.authorize
        //     ({
        //         scope: "scope.record",
        //         success: function (res) { },
        //         fail: function (res) { },
        //         complete: function (res) { },
        //     })
        // this.Recorder_Manager.onStop
        //     (
        //     function (res) {
        //         console.log("录音完了：", res);
        //         //DZLM_AM.Play_Record(res.tempFilePath, "Record");
        //         WM.test(res.tempFilePath);
        //     }
        //     )
    };
    //前台
    WeChat_Manager.prototype.Foreground = function () {
        GI.Play_Music();
    };
    //后台
    WeChat_Manager.prototype.Background = function () {
        GI.Stop_Music();
    };
    WeChat_Manager.prototype.test = function (url) {
        var uploadTask = Laya.Browser.window.wx.uploadFile({
            url: 'https://g.legangyx.com/game/Record/',
            filePath: url,
            name: 'record',
            formData: {
                'user': 'test'
            },
            success: function (res) {
                console.log(res.data);
            }
        });
        uploadTask.onProgressUpdate(function (res) {
            console.log('上传进度', res.progress);
            console.log('已经上传的数据长度', res.totalBytesSent);
            console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
        });
    };
    //下载图片
    WeChat_Manager.prototype.OnTestDownLoad = function () {
        var _data = { 'img_1': "" };
        Laya.Browser.window.wx.downloadFile({
            url: 'https://g.legangyx.com/game/Record/',
            filePath: "testimg/wx",
            success: function (res) {
                console.log(res.data);
                _data["img_l"] = res.tempFilePath;
            },
        });
    };
    //请求记录登陆数据
    WeChat_Manager.prototype.LoginLog = function () {
        this.Login_HR.on(Laya.Event.COMPLETE, this, this.Request_Login_Complete);
        this.Login_HR.send(CD.Service_URL + "userlogin.aspx?gametype=hall&openid=" + User.openid + "&unick=" + User.Save_Nickname + "&inviter_openid=" + WM.Inviter_openid + "&login_scene=" + WM.Login_scene + "&ico=" + User.Avatar_URL + "&gender=" + User.Gender + "&country=" + User.Country + "&province=" + User.Province + "&city=" + User.City + "&channel=" + CD.Channel);
        //User.Country = Get_User_Info_Result_Success.userInfo.country;
        // User.Province = Get_User_Info_Result_Success.userInfo.province;
        // User.City = Get_User_Info_Result_Success.userInfo.city;
    };
    //检查版本
    WeChat_Manager.prototype.Check_Version = function () {
        this.Version_HR.on(Laya.Event.COMPLETE, this, this.Request_Version_Complete);
        this.Version_HR.send(CD.Service_URL + "getversion.aspx?version=" + CD.CodeVersion);
    };
    //游戏更新
    WeChat_Manager.prototype.Game_Update = function () {
        this.Update_Manager.onCheckForUpdate(function (res) {
            console.log(res, res.hasUpdate);
        });
    };
    //请求失败
    WeChat_Manager.prototype.Request_Error = function (e) {
        console.log(e);
    };
    //请求登录完成
    WeChat_Manager.prototype.Request_Login_Complete = function () {
        console.log(WM.Login_HR.data);
    };
    //请求版本完成
    WeChat_Manager.prototype.Request_Version_Complete = function () {
        // console.log(WM.HR.data);
        var _getjson = JSON.parse(WM.Version_HR.data);
        if (CD.Version_Type == "Debug") {
            //DZLM_UM.Game_View.btn_bullent_speed.visible = false;
            //DZLM_GC.Set_Revive_State("", 0);
        }
        if (CD.Version_Type == "Release") {
            //DZLM_UM.Game_View.btn_bullent_speed.visible = true;
            //DZLM_GC.Set_Revive_State("", 3);
        }
    };
    //加载用户头像
    WeChat_Manager.prototype.Load_User_Avatar = function (_URL) {
        //var _File_Name = Game_Interface.Get_Local_Date();
        Laya.loader.load(CD.Service_URL + "User_Avatar/" + _URL, Laya.Handler.create(this, this.Load_User_Avatar_Complete, [_URL], false));
    };
    //加载用户头像完成
    WeChat_Manager.prototype.Load_User_Avatar_Complete = function (_URL) {
        //var _File_Name = Game_Interface.Get_Local_Date();
        var _Texture = Laya.loader.getRes(CD.Service_URL + "User_Avatar/" + _URL);
        if (_URL == undefined) {
            return;
        }
        //console.log(_Texture.url);
        if (_Texture == null || _Texture == undefined) {
            Laya.timer.once(1000, this, this.Load_User_Avatar, [_URL]);
            return;
        }
        User.Avatar = _Texture;
    };
    //登录
    WeChat_Manager.prototype.Login = function () {
        Laya.Browser.window.wx.login({
            success: function (Login_Result_Success) {
                WM.Login_Code = Login_Result_Success.code;
                // WM.WeChat_Get_User_Info();
            },
            fail: function (Login_Result_Fail) { },
            complete: function (Login_Result_Complete) { },
        });
    };
    //得到用户数据
    WeChat_Manager.prototype.WeChat_Get_User_Info = function () {
        /*  Laya.Browser.window.wxwx.getSetting({
              success: function(res){
              if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  Laya.Browser.window.wx.getUserInfo({
                  success: function(res) {
                      console.log(res.userInfo)
                  }
              })
          }
      }
      });
       */
        Laya.Browser.window.wx.getUserInfo({
            lang: "zh_CN",
            success: function (Get_User_Info_Result_Success) {
                //设置用户信息
                console.log("wx.getUserInfo success");
                WM.OnSetUserInfo(Get_User_Info_Result_Success);
            },
            fail: function (Get_User_Info_Result_Fail) {
                var winSize = Laya.Browser.window.wx.getSystemInfoSync();
                var ape = new Laya.Sprite();
                Laya.stage.addChild(ape);
                ape.loadImage("load_progress/img_background_main.jpg", 0, 0, Laya.stage.width, Laya.stage.height);
                var button = Laya.Browser.window.wx.createUserInfoButton({
                    type: 'image',
                    image: "load_progress/kaishigame.png",
                    style: {
                        left: (winSize.windowWidth - 285) / 2,
                        top: (winSize.windowHeight - 200),
                        width: 286,
                        height: 102
                    }
                });
                button.onTap(function (res) {
                    if (res.errMsg == "getUserInfo:ok") {
                        //设置用户信息
                        WM.OnSetUserInfo(res);
                        button.destroy();
                    }
                    else {
                    }
                });
            }
        });
    };
    WeChat_Manager.prototype.showsyncServerTime = function (res) {
    };
    WeChat_Manager.prototype.OnSetUserInfo = function (res) {
        User.Avatar_URL = res.userInfo.avatarUrl;
        if (User.Avatar_URL == "") {
            User.Avatar_URL = CD.Resource_URL + "res/icons/img_default_icon.png";
        }
        //  User.Nickname = res.userInfo.nickName;
        User.Save_Nickname = res.userInfo.nickName;
        if (Laya.Browser.onIOS == true) {
            console.log("IOS");
            //  User.Nickname = CM.Filter_Emoji(User.Nickname);
        }
        else if (Laya.Browser.onAndroid == true) {
            console.log("Andriod");
        }
        else {
            console.log("Other");
            //   User.Nickname = CM.Replace_String(User.Nickname, 10);
        }
        // User.Nickname = User.Nickname.substring(0, 10);
        User.Gender = res.userInfo.gender.toString();
        User.Country = res.userInfo.country.toString();
        User.Province = res.userInfo.province.toString();
        User.City = res.userInfo.city.toString();
        WM.Login_State = true;
        WM.WeChat_Get_Open_ID();
    };
    WeChat_Manager.prototype.getSomething = function (skey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "1"];
            });
        });
    };
    //得到用户开放ID
    WeChat_Manager.prototype.WeChat_Get_Open_ID = function () {
        IM.OnLoginWebAPI(WM.Login_Code);
    };
    WeChat_Manager.prototype.gssdkPayInit = function () {
        var chargeconfig = [
            {
                parameterid: 0,
                id: 101,
                title: '啊啊',
                item: 101,
                amount: 60,
                money: 6,
                coinId: 101 //后台二级货币ID
            }
        ];
    };
    //得到许可证
    WeChat_Manager.prototype.WeChat_Get_Access_Token = function () {
        Laya.Browser.window.wx.request({
            url: CD.Game.Service_URL + 'we_chatapi.aspx',
            data: {
                'type': 'access',
            },
            method: 'GET',
            header: { 'content-type': 'application/json' },
            dataType: 'json',
            responseType: 'text',
            success: function (Request_Result_Success) {
                WM.Access_Token = Request_Result_Success.data.access_token;
                WM.Access_Token_Expires_In = Request_Result_Success.data.expires_in;
            },
            fail: function (Request_Result_Fail) { },
            complete: function (Request_Result_Complete) { },
        });
    };
    WeChat_Manager.prototype.Save_Data_Server = function (_gametype, score, level) {
        var request = new Laya.HttpRequest();
        request.send(CD.Game.Service_URL + "api_log/gamescore.aspx?action=savescore&gametype=" + _gametype + "&openid=" + User.openid + "&score=" + score + "&level=" + level);
    };
    //对用户托管数据进行写数据操作
    //_Data= [{"key":"BS","value":100},{"key":"BH","value":100},{"key":"TM","value":100},{"key":"RFT","value":100}]
    WeChat_Manager.prototype.Save_Data = function (_Data) {
        Laya.Browser.window.wx.setUserCloudStorage({
            KVDataList: _Data,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //删除游戏数据
    WeChat_Manager.prototype.Remove_Data = function (_Data) {
        Laya.Browser.window.wx.removeUserCloudStorage({
            keyList: _Data,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //读取游戏数据
    WeChat_Manager.prototype.Load_Data = function () {
        this.Open_Data_Context.postMessage({
            Type: 'get_user_data',
        });
        //this.Launch_Option.shareTicket = "43848d71-31bd-410e-b100-583c04774a9f";
        /*
        var _ShareTicket:string = Laya.Browser.window.wx.getLaunchOptionsSync().shareTicket;

        if(_ShareTicket != null)
        {
            this.Group_ID = _ShareTicket;
            this.Ranking_Group(this.Group_ID, "DZLM_BS");
        }
        */
    };
    //好友数量
    WeChat_Manager.prototype.GetFriendNum = function (num) {
        this.Friend_Num_Close();
        this.Open_Data_Context.postMessage({
            Type: 'friendnum',
            Num: num,
        });
        Laya.timer.once(200, this, this.Friend_Num_Update);
    };
    //好友数量更新
    WeChat_Manager.prototype.Friend_Num_Update = function () {
        this.Ranking_Sprite.visible = true;
        if (this.Ranking_Friend_Texture != null) {
            this.Ranking_Friend_Texture.bitmap.visible = true;
            return;
        }
        this.Ranking_Friend_Texture = new Laya.Texture(this.Open_Data_Context.canvas);
        this.Ranking_Friend_Texture.bitmap.alwaysChange = true;
        this.Ranking_Sprite.graphics.drawTexture(this.Ranking_Friend_Texture, 0, GameMain.Offset_Y * 2 - 127, GameMain.Stage_Width, GameMain.Stage_Height);
    };
    //好友数量关闭
    WeChat_Manager.prototype.Friend_Num_Close = function () {
        this.Open_Data_Context.postMessage({
            Type: 'friendnumClose',
        });
        this.Ranking_Sprite.visible = false;
        if (this.Ranking_Friend_Texture != null && this.Ranking_Friend_Texture.bitmap != undefined) {
            this.Ranking_Friend_Texture.bitmap.visible = false;
        }
    };
    //排行
    WeChat_Manager.prototype.Ranking_Friend = function () {
        this.Ranking_Group_Close();
        this.Open_Data_Context.postMessage({
            Type: 'get_friend_ranking',
            gametype: 1,
        });
        Laya.timer.once(1000, this, this.Ranking_Friend_Update);
    };
    WeChat_Manager.prototype.Ranking_page = function (sType) {
        this.Ranking_Group_Close();
        this.Open_Data_Context.postMessage({
            Type: sType,
        });
        Laya.timer.once(200, this, this.Ranking_Friend_Update);
    };
    //排行更新
    WeChat_Manager.prototype.Ranking_Friend_Update = function () {
        // if (UI.rank_View.visible == false) {
        //     this.Ranking_Friend_Close();
        //     return;
        // }
        this.Ranking_Sprite.visible = true;
        if (this.Ranking_Friend_Texture != null) {
            this.Ranking_Friend_Texture.bitmap.visible = true;
            return;
        }
        this.Ranking_Friend_Texture = new Laya.Texture(this.Open_Data_Context.canvas);
        this.Ranking_Friend_Texture.bitmap.alwaysChange = true;
        this.Ranking_Sprite.graphics.drawTexture(this.Ranking_Friend_Texture, 0, GameMain.Offset_Y * 2 - 127, GameMain.Stage_Width, GameMain.Stage_Height);
    };
    //好友排行关闭
    WeChat_Manager.prototype.Ranking_Friend_Close = function () {
        this.Open_Data_Context.postMessage({
            Type: 'close_friend_ranking',
        });
        this.Ranking_Sprite.visible = false;
        if (this.Ranking_Friend_Texture != null && this.Ranking_Friend_Texture.bitmap != undefined) {
            this.Ranking_Friend_Texture.bitmap.visible = false;
        }
    };
    //排行
    WeChat_Manager.prototype.Ranking_Group = function (_ShareTicket, _Ranking_Type) {
        this.Ranking_Friend_Close();
        this.Ranking_Sprite.visible = true;
        this.Open_Data_Context.postMessage({
            Type: 'get_group_ranking',
            Data: _ShareTicket,
            Ranking_Type: _Ranking_Type
        });
        Laya.timer.once(1000, this, this.Ranking_Group_Update);
    };
    //排行更新
    WeChat_Manager.prototype.Ranking_Group_Update = function () {
        //UI.Display_Or_Hidden_UI(UI.rank_View,true);
        if (this.Ranking_Group_Texture != null) {
            this.Ranking_Group_Texture.bitmap.visible = true;
            return;
        }
        this.Ranking_Group_Texture = new Laya.Texture(this.Open_Data_Context.canvas);
        this.Ranking_Group_Texture.bitmap.alwaysChange = true;
        this.Ranking_Sprite.graphics.drawTexture(this.Ranking_Group_Texture, 0, GameMain.Offset_Y * 2 - 127, GameMain.Stage_Width, GameMain.Stage_Height);
    };
    //群排行关闭
    WeChat_Manager.prototype.Ranking_Group_Close = function () {
        this.Open_Data_Context.postMessage({
            Type: 'close_group_ranking',
        });
        this.Ranking_Sprite.visible = false;
        if (this.Ranking_Group_Texture != null && this.Ranking_Group_Texture.bitmap != undefined) {
            this.Ranking_Group_Texture.bitmap.visible = false;
        }
    };
    //振动_短
    WeChat_Manager.prototype.Vibrate_Short = function () {
        Laya.Browser.window.wx.vibrateShort({
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //振动_短
    WeChat_Manager.prototype.Vibrate_Long = function () {
        Laya.Browser.window.wx.vibrateLong({
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    WeChat_Manager.prototype.api_gssdk_pay = function (_data) {
    };
    WeChat_Manager.prototype.onShow = function () {
        console.log("onShowonShowonShowonShow");
    };
    WeChat_Manager.prototype.OnCharge = function (nMoney, mpoints, goodsid, goodsname) {
        var sUrl = CD.Service_URL + "/api_pay_midas/MidasPayment.aspx?action=payment&uid=".concat(User.openid, "&point=").concat(mpoints, "&money=").concat(nMoney, "&session_key=").concat(WM.Session_Key, "&serverid=").concat(1, "&goodsName=").concat(goodsname, "&goodsId=").concat(goodsid);
        this.Charge_HR.on(Laya.Event.COMPLETE, this, this.OnWeChatChargeOk, [mpoints]);
        this.Charge_HR.send(sUrl);
    };
    WeChat_Manager.prototype.OnChargeErr = function () {
    };
    WeChat_Manager.prototype.OnWeChatChargeOk = function (mpoints, smsg) {
        console.log("OnWeChatChargeOk", mpoints, smsg);
        //{"state":"suc","msg":[{json数据}]}
        //mpoints = mpoints/2;
        var data = JSON.parse(smsg);
        if (data.state == "suc") {
            Laya.Browser.window.wx.requestMidasPayment({
                mode: data.mode,
                env: data.env,
                offerId: data.offerId,
                currencyType: data.currencyType,
                platform: data.platform,
                buyQuantity: data.buyQuantity,
                zoneId: data.zoneId,
                success: function (sucObj) {
                    console.log(sucObj);
                    WM.checkpayment(mpoints, data.orderid, data.sign);
                },
                fail: function (failObj) {
                    //is ios 弹充值未开放弹框
                    if (Laya.Browser.onIOS) {
                        //UI.OnShowYesOrNo("提示", "ios付费暂未开放", "确定", this.Vibrate_Long, null);
                    }
                    if (Laya.Browser.onAndroid) {
                        Laya.Browser.window.wx.showModal({
                            title: '提示',
                            content: '支付失败' + failObj.errMsg,
                            success: function (res) {
                                if (res.confirm) {
                                }
                                else if (res.cancel) {
                                }
                            }
                        });
                    }
                    console.log(failObj);
                },
                complete: function (compObj) {
                    console.log(compObj);
                }
            });
        }
        else {
            Laya.Browser.window.wx.showModal({
                title: '提示',
                content: '支付失败' + data.msg,
                success: function (res) {
                    if (res.confirm) {
                    }
                    else if (res.cancel) {
                    }
                }
            });
        }
    };
    WeChat_Manager.prototype.checkpayment = function (_point, _orderid, _sign) {
        this.ChargeCheck_HR.on(Laya.Event.COMPLETE, this, this.OncheckpaymentOk);
        this.ChargeCheck_HR.send(CD.Service_URL + "/api_pay_midas/MidasPayment.aspx?action=check&uid=".concat(User.openid, "&point=").concat(_point, "&session_key=").concat(WM.Session_Key, "&orderid=").concat(_orderid, "&sign=").concat(_sign));
    };
    WeChat_Manager.prototype.OncheckpaymentOk = function (smsg) {
        console.log("OncheckpaymentOk==", smsg);
    };
    WeChat_Manager.prototype.IsShareAndVideo = function () {
        return WM.ShareAndVideo;
    };
    WeChat_Manager.prototype.GetMaxLookVideoCount = function () {
        return WM.m_nMaxVideoCount;
    };
    WeChat_Manager.prototype.OnCheckLooKVideo = function (nCheckType) {
        var szdata;
        var nLastVideotime = 0;
        var date = new Date();
        var nCdTime = 0;
        var nNowTime = 0;
        if (WM.IsShareAndVideo() == 1) {
            return -1;
        }
        if (heroplayer == null)
            return -1;
        nNowTime = (date.getTime() / 1000) | 0;
        nLastVideotime = WM.GetVideoData("videotime");
        if (cFun.SameTime(nNowTime, nLastVideotime, 86400) == 1) {
            if (WM.GetVideoData("IsHaveVideoOver") == 1) //腾讯视频次数已用完
             {
                return -1;
            }
            if (WM.GetVideoData("videonum") >= WM.GetMaxLookVideoCount()) // #超过次数了
                return -1;
        }
        else {
            CD.localStorage_removeItem("videonum");
            CD.localStorage_removeItem("videotime");
            CD.localStorage_removeItem("IsHaveVideoOver");
        }
        return 1;
    };
    WeChat_Manager.prototype.OnGetShareInfo = function (res, nType) {
        WM.sShareType = res.query.ShareType;
        //分享UserId
        WM.Inver_dbid = res.query.Inver_dbid;
        //分享时间
        WM.sShareTime = res.query.sharetime;
        SM.Inver_dbid = WM.Inver_dbid;
        console.log("OnGetShareInfo", nType, WM.sShareType, WM.Inver_dbid, WM.sShareTime, WM.Login_scene);
        if (WM.Login_scene == "1044") {
            var _ShareTicket = res.shareTicket;
            if (_ShareTicket != undefined) {
                console.log(nType, WM.sShareType, WM.Inver_dbid, WM.sShareTime, CD.Service_URL + 'api/wechat/get_groupinfo.aspx', "=================");
                WM.Get_ShareGroupid(_ShareTicket, nType);
            }
        }
        else {
            if (nType == 2) {
                WM.OnShareOkLogin();
            }
        }
    };
    WeChat_Manager.prototype.onPlayBanner = function (adUId) {
        var _this = this;
        var bannerHeight = 80;
        var bannerWidth = 300;
        var winSize = Laya.Browser.window.wx.getSystemInfoSync();
        if (this.bannerAd != null) {
            this.bannerAd.destroy();
            this.bannerAd = null;
        }
        this.bannerAd = Laya.Browser.window.wx.createBannerAd({
            adUnitId: 'xxxx',
            style: {
                left: (winSize.windowWidth - bannerWidth) / 2,
                top: winSize.windowHeight - bannerHeight,
                width: bannerWidth
            }
        });
        this.bannerAd.onLoad
            .then(function () {
            _this.bannerAd.doshow().then(function () { return console.log('banner 广告显示'); });
        });
        this.bannerAd.onError(function (err) {
            console.log(err);
        });
        this.bannerAd.onResize(function (res) {
            _this.bannerAd.style.top = winSize.windowHeight - _this.bannerAd.style.realHeight;
        });
    };
    //激励广告
    //rewardedVideoAd: any = null;
    //m_sFromType: string;
    WeChat_Manager.prototype.onCreateJiLiGuangGao = function (sFromType) {
        //创建组件
        // var adUId: string = "111111111";
        // this.m_sFromType = sFromType
        // if (this.rewardedVideoAd == null) {
        //     this.rewardedVideoAd = Laya.Browser.window.wx.createRewardedVideoAd({ adUnitId: adUId })
        //     WM.OnCheckAdClose();
        // }
        // this.rewardedVideoAd.load()
        //     .then(() => {
        //         WM.rewardedVideoAd.doshow();
        //         WM.SetVideonum();
        //     })
        //     .catch(err => {
        //         WM.OnVideoOver();
        //         SM.OnUser_Share_Menu_Click("Group", "", sFromType);
        //     }
        //     )
    };
    WeChat_Manager.prototype.OnVideoOver = function () {
        CD.localStorage_setItem("IsHaveVideoOver", "1");
    };
    //public OnCheckAdClose(): void {
    // this.rewardedVideoAd.onClose(res => {
    //     // 用户点击了【关闭广告】按钮
    //     // 小于 2.1.0 的基础库版本，res 是一个 undefined
    //     var IsOk: boolean = false;
    //     if (res && res.isEnded || res == undefined) {
    //         // 正常播放结束，可以下发游戏奖励
    //         IsOk = true;
    //     }
    //     else {
    //         // 播放中途退出，不下发游戏奖励
    //         IsOk = false;
    //     }
    //     if (IsOk) {
    //         SM.OnGetShareReward(this.m_sFromType, "shipin");
    //     }
    // })
    //}
    //分享登录
    WeChat_Manager.prototype.OnShareOkLogin = function () {
        return;
    };
    //返回群Id
    WeChat_Manager.prototype.Get_ShareGroupid = function (_tickets, nType) {
        Laya.Browser.window.wx.getShareInfo({
            shareTicket: _tickets,
            success: function (res) {
                Laya.Browser.window.wx.request({
                    url: CD.Service_URL + 'api/wechat/get_groupinfo.aspx',
                    data: {
                        'encryptedData': res.encryptedData,
                        'iv': res.iv,
                        'sessionKey': WM.Session_Key,
                    },
                    method: 'GET',
                    header: { 'content-type': 'application/json' },
                    dataType: 'json',
                    responseType: 'text',
                    success: function (res_data) {
                        WM.Group_ID = res_data.data["openGId"];
                        console.log(nType, WM.sShareType, WM.Inver_dbid, WM.sShareTime, WM.Group_ID, "=====Get_ShareGroupid");
                        if (nType == 2) {
                            WM.OnShareOkLogin();
                        }
                    }
                });
            }
        });
    };
    // groupid:{time:200,id:[shareId0,shareid1,shareid2]}
    WeChat_Manager.prototype.ShareGroupData = function (_openGId, nShareTime, sGameType) {
        var sMsg = "";
        var nNowTime;
        var nLastTime;
        var NowData = {};
        var szGroupInfo = {};
        var szIdList = [];
        var sOpenIdData;
        sOpenIdData = CD.localStorage_getItem(sGameType);
        if (WM.Inver_dbid != heroplayer["dbid"]) //只能领自己的
         {
            return -1;
        }
        if (sOpenIdData == "" || sOpenIdData == null || sOpenIdData == undefined)
            NowData = {};
        else
            NowData = JSON.parse(sOpenIdData);
        if (NowData[_openGId] != undefined) {
            szGroupInfo = NowData[_openGId]; //取到这个群的领奖记录信息
            szIdList = szGroupInfo.id;
            if (szIdList.indexOf(nShareTime.toString()) != -1) //这个卡片已经领过了
             {
                return -2;
            }
            nLastTime = szGroupInfo.time;
            if (nShareTime - nLastTime < 3600) {
                return -3;
            }
        }
        szIdList.push(nShareTime.toString());
        NowData[_openGId] = { time: nShareTime, id: szIdList };
        CD.localStorage_setItem(sGameType, JSON.stringify(NowData));
        return 1;
    };
    WeChat_Manager.prototype.OnGetShareState = function () {
        Laya.Browser.window.wx.request({
            url: CD.Service_URL + 'api/wechat/getShareState.aspx',
            method: 'GET',
            header: { 'content-type': 'application/json' },
            dataType: 'json',
            responseType: 'text',
            success: function (Request_Result_Success) {
                WM.ShareAndVideo = parseInt(Request_Result_Success.data.sharetype);
                WM.m_nMaxVideoCount = parseInt(Request_Result_Success.data.videocount);
            },
            fail: function (Request_Result_Fail) { },
            complete: function (Request_Result_Complete) { },
        });
        Laya.timer.clear(this, this.OnGetShareState);
        Laya.timer.once(60000, this, this.OnGetShareState);
    };
    //设置看视频次数
    WeChat_Manager.prototype.SetVideonum = function () {
        var sMsg = "";
        var nNowTime;
        var nLastTime;
        var date = cFun.serverTime;
        nNowTime = (date.getTime() / 1000) | 0;
        nLastTime = WM.GetVideoData("videonum");
        nLastTime += 1;
        CD.localStorage_setItem("videotime", nNowTime.toString());
        CD.localStorage_setItem("videonum", nLastTime.toString());
    };
    //返回视频的相关数据
    WeChat_Manager.prototype.GetVideoData = function (stype) {
        var _Data = CD.localStorage_getItem(stype);
        var NowData;
        var sOpenIdData;
        var nLastTime;
        if (_Data == "" || _Data == null || _Data == undefined) {
            nLastTime = 0;
        }
        else {
            nLastTime = parseInt(_Data);
        }
        return nLastTime;
    };
    WeChat_Manager.prototype.onCheckMianFeiZuanShi = function () {
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
            if (szdata[0] >= 10) // #超过次数了
             {
                return -1;
            }
            nCdTime = ((szdata[0] - 1) / 5) * 120 + 60;
            if ((nNowTime - szdata[1]) < nCdTime) //
                return -2;
        }
        return 1;
    };
    WeChat_Manager.prototype.OnShowRewardVideo = function (sFromType) {
        WM.ShowLoadMask(true);
        WM.SetPauseGame(true);
        UI.OnWinMsgUI("开始播放激励广告==sFromType:" + sFromType);
        //UICon.OnWinMsgUI("开始拉起激励视频，sFromType:"+sFromType);
        //console.log("开始拉起激励视频，sFromType:"+sFromType);
        this.m_sFromType = sFromType;
        //视频请求汇报
        // ThinkingData.ME.track("adsrequst", { channel: sFromType });
        UI.OnWinMsgUI("激励广告加载状态=WM.bVideoAdLoadOk:" + WM.bVideoAdLoadOk);
        if (WM.bVideoAdLoadOk) {
            UI.OnWinMsgUI("WM.rewardedVideoAd.show()===开始显示");
            WM.rewardedVideoAd.show()
                .then(function () {
                WM.ShowLoadMask(false);
                WM.m_nRewardVideoNum++;
            })
                .catch(function (err) {
                //console.log("catch(err======");
                WM.OnVideoFaill();
            });
        }
        else {
            // console.log("Share_Manager.ME.bVideoAdLoadOk=false=====");
            WM.OnVideoFaill();
        }
    };
    //开始加载激励
    WeChat_Manager.prototype.OnLoadVideoAd = function () {
        if (CD.Platform != Platform.Wechat)
            return;
        UI.OnWinMsgUI("开始加载激励======");
        var adUId = "adunit-f729fbda5e1a2341";
        if (this.rewardedVideoAd == null) {
            this.rewardedVideoAd = Laya.Browser.window.wx.createRewardedVideoAd({ adUnitId: adUId });
            WM.OnCheckAdClose();
            this.rewardedVideoAd.onError(function (err) {
                //console.log("rewardedVideoAd----onError--" + err);
                WM.m_nRewardVideoNum++;
                WM.CheckLoadVideoAd();
            });
        }
        this.rewardedVideoAd.load()
            .then(function () {
            WM.bVideoAdLoadOk = true;
            UI.OnWinMsgUI("激励加载成功======");
        })
            .catch(function (err) {
            UI.OnWinMsgUI("激励加载失败----faill--");
            console.log(err);
            WM.CheckLoadVideoAd();
        });
    };
    //拉起失敗
    WeChat_Manager.prototype.OnVideoFaill = function () {
        WM.ShowLoadMask(false);
        WM.SetPauseGame(false);
        UI.OnWinMsgUI("激励拉起失敗===");
        //失败后拉起分享
        // if (this.m_sFromType == "luckimage" || this.m_sFromType == "completereward")  {
        //     Share_Manager.ME.ShareClickOk(this.m_sFromType, sShareStr,sUrl , "");
        // }
        //继续加载激励
        WM.bVideoAdLoadOk = false;
        WM.CheckVideoAdTime = 0;
    };
    WeChat_Manager.prototype.CheckLoadVideoAd = function () {
        WM.bVideoAdLoadOk = false;
        WM.CheckVideoAdTime = Laya.timer.currTimer;
        UI.OnWinMsgUI("继续加载激励=====" + WM.CheckVideoAdTime);
    };
    //检测激励状态
    WeChat_Manager.prototype.OnCheckAdClose = function () {
        var _this = this;
        WM.rewardedVideoAd.onClose(function (res) {
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
                //WM.SetVideonum();
                //视频完成汇报
                //ThinkingData.ME.track("adsover", { channel: this.m_sFromType });
                WM.OnGetAdsOverReward(_this.m_sFromType, "ads");
            }
            else {
                //激励没有正常播放完毕
                //console.log("激励没有正常播放完毕");
                Laya.Browser.window.wx.showModal({ title: '提示', content: '看完广告才能获得奖励哦~', showCancel: false, success: function (res) { } });
            }
            //继续加载激励
            WM.bVideoAdLoadOk = false;
            WM.CheckVideoAdTime = 0;
            WM.SetPauseGame(false);
        });
    };
    //检测激励加载延时
    WeChat_Manager.prototype.CheckVideoAdDelay = function () {
        // if( WM.m_nRewardVideoNum <= 100)
        // {
        if (WM.bVideoAdLoadOk == false && ((Laya.timer.currTimer - WM.CheckVideoAdTime) > 10000)) {
            UI.OnWinMsgUI("检测激励加载延时=====");
            WM.CheckVideoAdTime = Laya.timer.currTimer;
            WM.OnLoadVideoAd();
        }
        // }
    };
    WeChat_Manager.prototype.ShowLoadMask = function (b) {
        b ? (Laya.Browser.window.wx.showLoading({
            title: '加载中',
            mask: true
        })) : (Laya.Browser.window.wx.hideLoading());
    };
    WeChat_Manager.prototype.SetPauseGame = function (b) {
        //IndexCon.isGamePause = b;
        Laya.timer.scale = b ? 0 : 1;
    };
    WeChat_Manager.prototype.onUpdate = function () {
        if (WM == null)
            return;
        if (CD.Platform != Platform.Wechat)
            return;
        //检测激励延时
        WM.CheckVideoAdDelay();
    };
    //激励和分享完毕获得奖励
    WeChat_Manager.prototype.OnGetAdsOverReward = function (sShareType, sAdsType) {
        if (sAdsType == "share") {
            //console.log("分享成功");
        }
        else if (sAdsType == "ads") {
            //console.log("激励播放成功");
        }
        UI.OnWinMsgUI("激励和分享完毕获得奖励=sShareType=" + sShareType);
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
    return WeChat_Manager;
}());
//# sourceMappingURL=Wechat_Manager.js.map