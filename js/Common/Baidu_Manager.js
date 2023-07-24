/*
* ltt
* 2018 - 11 - 29
* 加载界面
*/
// Laya.BMiniAdapter.init(true);
var Baidu_Manager = /** @class */ (function () {
    function Baidu_Manager() {
        // public Open_Data_Context:any = Laya.Browser.window.swan.getOpenDataContext();
        // public Shared_Canvas:any = this.Open_Data_Context.canvas;
        this.Login_HR = new Laya.HttpRequest();
        this.Version_HR = new Laya.HttpRequest();
        this.Avatar_HR = new Laya.HttpRequest();
        this.Charge_HR = new Laya.HttpRequest();
        this.ChargeCheck_HR = new Laya.HttpRequest();
        // public System_Information:any = Laya.Browser.window.swan.getSystemInfoSync();
        this.Launch_Parameters = Laya.Browser.window.swan.getLaunchOptionsSync();
        this.Update_Manager = Laya.Browser.window.swan.getUpdateManager();
        // public Recorder_Manager = Laya.Browser.window.swan.getRecorderManager();
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
        //Banner 广告 
        this.bannerAd = null;
    }
    //构造方法
    Baidu_Manager.prototype.Initialize = function () {
        // this.Shared_Canvas.width = Game.Stage_Width;
        // this.Shared_Canvas.height = Game.Stage_Height;
        console.log("查看启动参数：", this.Launch_Parameters);
        // if(this.Launch_Parameters.query.scene != undefined)
        // {
        //     CD.Channel = this.Launch_Parameters.query.scene;
        //     console.log("有渠道进入：", CD.Channel);
        // }
        // BM.Login_scene = this.Launch_Parameters.scene;
        // BM.Inviter_openid = this.Launch_Parameters.query.openid;
        // BM.Query_action = this.Launch_Parameters.query.action;
        BM.GameType = this.Launch_Parameters.query.GameType;
        BM.FriendMatcg = this.Launch_Parameters.query.FriendMatcg;
        BM.Inver_dbid = this.Launch_Parameters.query.Inver_dbid;
        SM.Inver_dbid = BM.Inver_dbid;
        this.Login_HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
        this.Version_HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
        this.Avatar_HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
        this.Login();
        // this.Ranking_Sprite = new Laya.Sprite();
        // this.Ranking_Sprite.width = Game.Stage_Width;
        // this.Ranking_Sprite.height = Game.Stage_Height;
        // this.Ranking_Sprite.zOrder = 20;
        // Laya.stage.addChild(this.Ranking_Sprite);
        // this.Ranking_Sprite.visible = false;
        /*
        Laya.Browser.window.swan.setEnableDebug
        ({
            enableDebug: false,
            success: function(res) { },
            fail: function(res) { },
            complete: function(res) { },
        })
        */
        this.Update_Manager.onUpdateReady(function (res) {
            /*
            var _File_Manager = Laya.Browser.window.swan.getFileSystemManager();

            _File_Manager.getSavedFileList
            ({
                success: function(res)
                {

                },
                fail: function(res) { },
                complete: function(res) { },
            })
            */
            Laya.Browser.window.swan.showModal({
                title: '更新提示',
                content: '为了更好的游戏体验，请更新至最新版本',
                showCancel: false,
                success: function (res) {
                    if (res.confirm) {
                        BM.Update_Manager.applyUpdate();
                    }
                }
            });
        });
        this.Update_Manager.onUpdateFailed(function (res) {
            console.log(res);
        });
        //监听小游戏切到后台的事件
        Laya.Browser.window.swan.onHide(function () {
            BM.Background();
        });
        //监听小游戏回到前台的事件
        Laya.Browser.window.swan.onShow(function (res) {
            BM.Foreground();
            console.log("查看进入场景b：", res);
            BM.Login_scene = res.scene;
            BM.Inviter_openid = res.query.openid;
            BM.Query_action = res.query.action;
            BM.GameType = res.query.GameType;
            BM.FriendMatcg = res.query.FriendMatcg;
            BM.Inver_dbid = res.query.Inver_dbid;
            SM.Inver_dbid = BM.Inver_dbid;
            //小程序跳转回来传递的参数
            //console.log(res.referrerInfo.extraData.open)    //输出张三
            //console.log(res.referrerInfo.extraData.open)    //输出18
            // G_AM.Continue_Music();
            if (CD.NowSelectGameName != "Loddy") {
                var _ShareTicket = res.shareTicket;
                if (_ShareTicket != undefined) {
                    if (BM.Prve_ShareTicket == _ShareTicket) {
                        return;
                    }
                    BM.Prve_ShareTicket = _ShareTicket;
                    BM.Group_ID = _ShareTicket;
                    //  BM.Ranking_Group(_ShareTicket, "DZLM_BS");
                }
            }
            BM.Game_Update();
        });
        //监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
        Laya.Browser.window.swan.onAudioInterruptionBegin(function () {
            GI.Stop_Music();
            // G_AM.Stop_Music();
        });
        //监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
        Laya.Browser.window.swan.onAudioInterruptionEnd(function () {
            if (GI == null || GI == undefined) {
                console.log("查看进入场景----------GI is null---------3");
            }
            console.log("查看进入场景-------------------3");
            BM.ContinuePlayMusic();
            console.log("查看进入场景-------------------4");
            // G_AM.Continue_Music();
        });
        //设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
        Laya.Browser.window.swan.setKeepScreenOn({
            keepScreenOn: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
        //申请录音权限
        // Laya.Browser.window.swan.authorize
        // ({
        //     scope: "scope.record",
        //     success: function(res) { },
        //     fail: function(res) { },
        //     complete: function(res) { },
        // })
        // this.Recorder_Manager.onStop
        // (
        //     function(res)
        //     {
        //         console.log("录音完了：", res);
        //         //DZLM_AM.Play_Record(res.tempFilePath, "Record");
        //         BM.test(res.tempFilePath);
        //     }
        // )
    };
    //前台
    Baidu_Manager.prototype.Foreground = function () {
        this.ContinuePlayMusic();
    };
    //后台
    Baidu_Manager.prototype.Background = function () {
        GI.Stop_Music();
    };
    //继续播放音乐
    Baidu_Manager.prototype.ContinuePlayMusic = function () {
        if (SM != null) {
            if (SM.m_nVideoIsShow)
                return;
        }
        GI.Play_Music();
    };
    Baidu_Manager.prototype.test = function (url) {
        var uploadTask = Laya.Browser.window.swan.uploadFile({
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
    Baidu_Manager.prototype.OnTestDownLoad = function () {
        var _data = { 'img_1': "" };
        Laya.Browser.window.swan.downloadFile({
            url: 'https://g.legangyx.com/game/Record/',
            filePath: "testimg/wx",
            success: function (res) {
                console.log(res.data);
                _data["img_l"] = res.tempFilePath;
            },
        });
    };
    //请求记录登陆数据
    Baidu_Manager.prototype.LoginLog = function () {
        this.Login_HR.on(Laya.Event.COMPLETE, this, this.Request_Login_Complete);
        this.Login_HR.send(CD.Service_URL + "userlogin.aspx?gametype=hall&openid=" + User.openid + "&unick=" + User.Save_Nickname + "&inviter_openid=" + BM.Inviter_openid + "&login_scene=" + BM.Login_scene + "&ico=" + User.Avatar_URL + "&gender=" + User.Gender + "&country=" + User.Country + "&province=" + User.Province + "&city=" + User.City + "&channel=" + CD.Channel);
        //User.Country = Get_User_Info_Result_Success.userInfo.country;
        // User.Province = Get_User_Info_Result_Success.userInfo.province;
        // User.City = Get_User_Info_Result_Success.userInfo.city;
    };
    //检查版本
    // public Check_Version():void
    // {
    //     this.Version_HR.on(Laya.Event.COMPLETE, this, this.Request_Version_Complete);
    //     this.Version_HR.send(CD.Service_URL + "getversion.aspx?version=" + CD.CodeVersion);
    // }
    //游戏更新
    Baidu_Manager.prototype.Game_Update = function () {
        this.Update_Manager.onCheckForUpdate(function (res) {
            console.log(res, res.hasUpdate);
        });
    };
    //请求失败
    Baidu_Manager.prototype.Request_Error = function (e) {
        console.log(e);
    };
    //请求登录完成
    Baidu_Manager.prototype.Request_Login_Complete = function () {
        console.log(BM.Login_HR.data);
    };
    // //请求版本完成
    // public Request_Version_Complete():void
    // {
    //     // console.log(BM.HR.data);
    //     var _getjson = JSON.parse(BM.Version_HR.data);
    //     if(CD.Version_Type == "Debug")
    //     {
    //         //DZLM_UM.Game_View.btn_bullent_speed.visible = false;
    //         //DZLM_GC.Set_Revive_State("", 0);
    //     }
    //     if(CD.Version_Type == "Release")
    //     {
    //         //DZLM_UM.Game_View.btn_bullent_speed.visible = true;
    //         //DZLM_GC.Set_Revive_State("", 3);
    //     }
    // }
    //加载用户头像
    Baidu_Manager.prototype.Load_User_Avatar = function (_URL) {
        //var _File_Name = Game_Interface.Get_Local_Date();
        Laya.loader.load(CD.Service_URL + "User_Avatar/" + _URL, Laya.Handler.create(this, this.Load_User_Avatar_Complete, [_URL], false));
    };
    //加载用户头像完成
    Baidu_Manager.prototype.Load_User_Avatar_Complete = function (_URL) {
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
    Baidu_Manager.prototype.Login = function () {
        Laya.Browser.window.swan.login({
            success: function (Login_Result_Success) {
                BM.Login_Code = Login_Result_Success.code;
                BM.Baidu_Get_User_Info();
            },
            fail: function (Login_Result_Fail) {
                if (CD.Platform == Platform.Baidu) {
                    Laya.Browser.window.swan.showModal({
                        title: '登录提示',
                        content: '您需要登录才能进入游戏！',
                        cancelColor: '#999999',
                        confirmColor: '#0099cc',
                        success: function (res) {
                            if (res.confirm) {
                                //Game.OnWinMsgUI('用户点击了确定');
                                BM.Login();
                            }
                            else if (res.cancel) {
                                //Game.OnWinMsgUI('用户点击了取消');
                                Laya.Browser.window.swan.exitMiniProgram();
                            }
                        }
                    });
                }
            },
            complete: function (Login_Result_Complete) {
            },
        });
    };
    //得到用户数据
    Baidu_Manager.prototype.Baidu_Get_User_Info = function () {
        /*  Laya.Browser.window.swanwx.getSetting({
              success: function(res){
              if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  Laya.Browser.window.swan.getUserInfo({
                  success: function(res) {
                      console.log(res.userInfo)
                  }
              })
          }
      }
      });
       */
        Laya.Browser.window.swan.getUserInfo({
            lang: "zh_CN",
            success: function (Get_User_Info_Result_Success) {
                console.log("-getUserInfo--success");
                //设置用户信息
                BM.OnSetUserInfo(Get_User_Info_Result_Success);
            },
            fail: function (Get_User_Info_Result_Fail) {
                console.log("-getUserInfo--fail");
                var winSize = Laya.Browser.window.swan.getSystemInfoSync();
                var ape = new Laya.Sprite();
                Laya.stage.addChild(ape);
                ape.loadImage("load_progress/img_background_main.jpg", 0, 0, Laya.stage.width, Laya.stage.height);
                var button = Laya.Browser.window.swan.createUserInfoButton({
                    type: 'image',
                    // text: '开始游戏',
                    image: "load_progress/kaishigame.png",
                    style: {
                        left: (winSize.windowWidth - 160) / 2,
                        top: 500,
                        width: 160,
                        height: 60
                        // lineHeight: 40,
                        // backgroundColor: '#ffffff',
                        // color: '#000000',
                        // textAlign: 'center',
                        // fontSize: 16,
                        // borderRadius: 4
                    }
                });
                button.onTap(function (res) {
                    console.log("---button.onTap");
                    if (res.data != undefined) {
                        //设置用户信息
                        BM.OnSetUserInfo(res);
                        button.destroy();
                    }
                    else {
                        Laya.Browser.window.swan.showModal({
                            title: '警告',
                            content: '您拒绝了用户信息授权，将无法使用部分功能。如需体验全部功能，请允许授权访问用户基础信息',
                            success: function (res) {
                                if (res.confirm) {
                                    Laya.Browser.window.swan.openSetting({
                                        success: function (res) {
                                            console.log("您拒绝--success");
                                            if (res.authSetting["scope.userInfo"]) {
                                                // Laya.Browser.window.swan.reLaunch
                                                // ({
                                                //      url: '/pages/index/index'
                                                //  })
                                                //  
                                            }
                                            else {
                                            }
                                        },
                                        fail: function (res) {
                                            console.log("您拒绝--fail");
                                        }
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
    };
    Baidu_Manager.prototype.OnSetUserInfo = function (res) {
        console.log("OnSetUserInfo==");
        User.Avatar_URL = res.userInfo.avatarUrl;
        if (User.Avatar_URL == "") {
            User.Avatar_URL = CD.Resource_URL + "res/icons/img_default_icon.png";
        }
        User.Nickname = res.userInfo.nickName;
        User.Save_Nickname = User.Nickname;
        if (Laya.Browser.onIOS == true) {
            console.log("IOS");
            User.Nickname = CM.Filter_Emoji(User.Nickname);
        }
        else if (Laya.Browser.onAndroid == true) {
            console.log("Andriod");
        }
        else {
            console.log("Other");
            User.Nickname = CM.Replace_String(User.Nickname, 10);
        }
        User.Nickname = User.Nickname.substring(0, 10);
        console.log("User.Nickname ==" + User.Nickname);
        User.Gender = res.userInfo.gender + "";
        User.Country = res.userInfo.country + "";
        User.Province = res.userInfo.province + "";
        User.City = res.userInfo.city + "";
        BM.Login_State = true;
        console.log("WeChat_Get_Open_ID ==");
        BM.WeChat_Get_Open_ID();
    };
    //得到用户开放ID
    Baidu_Manager.prototype.WeChat_Get_Open_ID = function () {
        Laya.Browser.window.swan.request({
            url: CD.Service_URL + 'api/baidu/baiduapi.aspx',
            data: {
                'type': 'openid',
                'code': BM.Login_Code,
            },
            method: 'GET',
            header: { 'content-type': 'application/json' },
            dataType: 'json',
            responseType: 'text',
            success: function (Request_Result_Success) {
                console.log("-swan.request--Request_Result_Success");
                User.openid = Request_Result_Success.data.openid;
                var md5 = Request_Result_Success.data.md5;
                BM.Session_Key = Request_Result_Success.data.session_key;
                // BM.LoginLog();
                // BM.Load_Data();
                SM.Get_User_systeminfo_Baidu();
                GameMain.Wechat_Login_Complete(3, md5);
            },
            fail: function (Request_Result_Fail) {
                console.log("-swan.request--Request_Result_Fail");
            },
            complete: function (Request_Result_Complete) {
                console.log("-swan.request--Request_Result_Complete");
            },
        });
    };
    //得到许可证
    Baidu_Manager.prototype.WeChat_Get_Access_Token = function () {
        Laya.Browser.window.swan.request({
            url: CD.Game.Service_URL + 'api/baidu/baiduapi.aspx',
            data: {
                'type': 'access',
            },
            method: 'GET',
            header: { 'content-type': 'application/json' },
            dataType: 'json',
            responseType: 'text',
            success: function (Request_Result_Success) {
                BM.Access_Token = Request_Result_Success.data.access_token;
                BM.Access_Token_Expires_In = Request_Result_Success.data.expires_in;
            },
            fail: function (Request_Result_Fail) { },
            complete: function (Request_Result_Complete) { },
        });
    };
    Baidu_Manager.prototype.Save_Data_Server = function (_gametype, score, level) {
        var request = new Laya.HttpRequest();
        request.send(CD.Game.Service_URL + "api_log/gamescore.aspx?action=savescore&gametype=" + _gametype + "&openid=" + User.openid + "&score=" + score + "&level=" + level);
    };
    //对用户托管数据进行写数据操作
    //_Data= [{"key":"BS","value":100},{"key":"BH","value":100},{"key":"TM","value":100},{"key":"RFT","value":100}]
    Baidu_Manager.prototype.Save_Data = function (_Data) {
        Laya.Browser.window.swan.setUserCloudStorage({
            KVDataList: _Data,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //删除游戏数据
    Baidu_Manager.prototype.Remove_Data = function (_Data) {
        Laya.Browser.window.swan.removeUserCloudStorage({
            keyList: _Data,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //读取游戏数据
    Baidu_Manager.prototype.Load_Data = function () {
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: 'get_user_data',
        // })
    };
    //好友数量
    Baidu_Manager.prototype.GetFriendNum = function (num) {
        //    this.Friend_Num_Close();
        //     this.Open_Data_Context.postMessage
        //     ({
        //         Type: 'friendnum',
        //         Num:  num,
        //     })
        //     Laya.timer.once(200, this, this.Friend_Num_Update);
    };
    //好友数量更新
    Baidu_Manager.prototype.Friend_Num_Update = function () {
        // this.Ranking_Sprite.visible = true;
        // if(this.Ranking_Friend_Texture != null)
        // {
        //     this.Ranking_Friend_Texture.bitmap.visible = true;
        //     return;
        // }
        // this.Ranking_Friend_Texture = new Laya.Texture(this.Open_Data_Context.canvas);
        // this.Ranking_Friend_Texture.bitmap.alwaysChange = true;
        // this.Ranking_Sprite.graphics.drawTexture(this.Ranking_Friend_Texture, 0,  Game.Offset_Y * 2, Game.Stage_Width, Game.Stage_Height+300);
    };
    //好友数量关闭
    Baidu_Manager.prototype.Friend_Num_Close = function () {
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: 'friendnumClose',
        // })
        // this.Ranking_Sprite.visible = false;
        // if(this.Ranking_Friend_Texture != null && this.Ranking_Friend_Texture.bitmap != undefined)
        // {
        //     this.Ranking_Friend_Texture.bitmap.visible = false;
        // }
    };
    //排行
    Baidu_Manager.prototype.Ranking_Friend = function () {
        // this.Ranking_Group_Close();
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: 'get_friend_ranking',
        //     gametype: Game.GameType,
        // })
        // Laya.timer.once(1000, this, this.Ranking_Friend_Update);
    };
    Baidu_Manager.prototype.Ranking_page = function (sType) {
        // this.Ranking_Group_Close();
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: sType,
        // })
        // Laya.timer.once(200, this, this.Ranking_Friend_Update);
    };
    //排行更新
    Baidu_Manager.prototype.Ranking_Friend_Update = function () {
        // this.Ranking_Sprite.visible = true;
        // UI.Display_Or_Hidden_UI(UI.rank_View,true);
        // if(this.Ranking_Friend_Texture != null)
        // {
        //     this.Ranking_Friend_Texture.bitmap.visible = true;
        //     return;
        // }
        // this.Ranking_Friend_Texture = new Laya.Texture(this.Open_Data_Context.canvas);
        // this.Ranking_Friend_Texture.bitmap.alwaysChange = true;
        // this.Ranking_Sprite.graphics.drawTexture(this.Ranking_Friend_Texture, 0, Game.Offset_Y * 2, Game.Stage_Width, Game.Stage_Height);
    };
    //好友排行关闭
    Baidu_Manager.prototype.Ranking_Friend_Close = function () {
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: 'close_friend_ranking',
        // })
        // this.Ranking_Sprite.visible = false;
        // if(this.Ranking_Friend_Texture != null && this.Ranking_Friend_Texture.bitmap != undefined)
        // {
        //     this.Ranking_Friend_Texture.bitmap.visible = false;
        // }
    };
    //排行
    Baidu_Manager.prototype.Ranking_Group = function (_ShareTicket, _Ranking_Type) {
        // this.Ranking_Friend_Close();
        // this.Ranking_Sprite.visible = true;
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: 'get_group_ranking',
        //     Data: _ShareTicket,
        //     Ranking_Type: _Ranking_Type
        // })
        // Laya.timer.once(1000, this, this.Ranking_Group_Update);
    };
    //排行更新
    Baidu_Manager.prototype.Ranking_Group_Update = function () {
        // UI.Display_Or_Hidden_UI(UI.rank_View,true);
        // if(this.Ranking_Group_Texture != null)
        // {
        //     this.Ranking_Group_Texture.bitmap.visible = true;
        //     return;
        // }
        // this.Ranking_Group_Texture = new Laya.Texture(this.Open_Data_Context.canvas);
        // this.Ranking_Group_Texture.bitmap.alwaysChange = true;
        // this.Ranking_Sprite.graphics.drawTexture(this.Ranking_Group_Texture, 0, Game.Offset_Y * 2, Game.Stage_Width, Game.Stage_Height);
    };
    //群排行关闭
    Baidu_Manager.prototype.Ranking_Group_Close = function () {
        // this.Open_Data_Context.postMessage
        // ({
        //     Type: 'close_group_ranking',
        // })
        // this.Ranking_Sprite.visible = false;
        // if(this.Ranking_Group_Texture != null && this.Ranking_Group_Texture.bitmap != undefined)
        // {
        //     this.Ranking_Group_Texture.bitmap.visible = false;
        // }
    };
    //振动_短
    Baidu_Manager.prototype.Vibrate_Short = function () {
        Laya.Browser.window.swan.vibrateShort({
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    //振动_短
    Baidu_Manager.prototype.Vibrate_Long = function () {
        Laya.Browser.window.swan.vibrateLong({
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        });
    };
    Baidu_Manager.prototype.OnCharge = function (nMoney, mpoints, goodsid, goodsname) {
        var sUrl = CD.Service_URL + "/api_pay_midas/MidasPayment.aspx?action=payment&uid=".concat(User.openid, "&point=").concat(mpoints, "&money=").concat(nMoney, "&session_key=").concat(BM.Session_Key, "&serverid=").concat(1, "&goodsName=").concat(goodsname, "&goodsId=").concat(goodsid);
        this.Charge_HR.on(Laya.Event.COMPLETE, this, this.OnWeChatChargeOk, [mpoints]);
        this.Charge_HR.send(sUrl);
    };
    Baidu_Manager.prototype.OnChargeErr = function () {
    };
    Baidu_Manager.prototype.OnWeChatChargeOk = function (mpoints, smsg) {
        console.log("OnWeChatChargeOk", mpoints, smsg);
        //{"state":"suc","msg":[{json数据}]}
        //mpoints = mpoints/2;
        var data = JSON.parse(smsg);
        if (data.state == "suc") {
            Laya.Browser.window.swan.requestMidasPayment({
                mode: data.mode,
                env: data.env,
                offerId: data.offerId,
                currencyType: data.currencyType,
                platform: data.platform,
                buyQuantity: data.buyQuantity,
                zoneId: data.zoneId,
                success: function (sucObj) {
                    console.log(sucObj);
                    BM.checkpayment(mpoints, data.orderid, data.sign);
                },
                fail: function (failObj) {
                    //is ios 弹充值未开放弹框
                    if (Laya.Browser.onIOS) {
                        UI.OnShowYesOrNo("提示", "ios付费暂未开放", "确定", this.Vibrate_Long, null);
                    }
                    if (Laya.Browser.onAndroid) {
                        Laya.Browser.window.swan.showModal({
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
            Laya.Browser.window.swan.showModal({
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
    Baidu_Manager.prototype.checkpayment = function (_point, _orderid, _sign) {
        this.ChargeCheck_HR.on(Laya.Event.COMPLETE, this, this.OncheckpaymentOk);
        this.ChargeCheck_HR.send(CD.Service_URL + "/api_pay_midas/MidasPayment.aspx?action=check&uid=".concat(User.openid, "&point=").concat(_point, "&session_key=").concat(BM.Session_Key, "&orderid=").concat(_orderid, "&sign=").concat(_sign));
    };
    Baidu_Manager.prototype.OncheckpaymentOk = function (smsg) {
        console.log("OncheckpaymentOk==", smsg);
    };
    Baidu_Manager.prototype.onPlayBanner = function () {
        //if(SM.m_nVideoIsShow == true) return;//视频广告播放中
        var winSize = Laya.Browser.window.swan.getSystemInfoSync();
        var bannerHeight = 0;
        var bannerWidth = 0;
        if (Laya.Browser.onIOS) {
            bannerHeight = 128 - (GameMain.Offset_Y * 2); //Laya.stage.height - UI.Main_View.ObjUI.height;
            bannerWidth = bannerHeight * 2.343; //广告正常宽高比
        }
        else {
            bannerWidth = 210;
            bannerHeight = bannerWidth / 2.343;
        }
        if (this.bannerAd != null) {
            this.bannerAd.destroy();
            this.bannerAd = null;
        }
        var nleft = (winSize.windowWidth - bannerWidth) / 2;
        var ntop = Laya.stage.height - bannerHeight;
        if (typeof Laya.Browser.window.swan.createBannerAd != "function") {
            console.log("Laya.Browser.window.swan.createBannerAd不存在");
            return;
        }
        //Game.OnWinMsgUI("==:"+(Laya.stage.height - UI.Main_View.ObjUI.height)+"--ntop:"+ntop);
        //Game.OnWinMsgUI("ObjUI:"+UI.Main_View.ObjUI.height);
        //Game.OnWinMsgUI("screenHeight:"+winSize.screenHeight);
        //Game.OnWinMsgUI("height:"+Laya.stage.height+"--windowHeight:"+winSize.windowHeight+"---clientHeight:"+laya.utils.Browser.clientHeight+"-ntop:"+ntop);
        //Game.OnWinMsgUI("ntop:"+ntop+"---windowHeight:"+winSize.windowHeight+"----screenHeight:"+winSize.screenHeight+"--bannerHeight:"+bannerHeight);
        //Game.OnWinMsgUI("createBannerAd 广告="+cFun.GMTToStr(cFun.serverTime));
        this.bannerAd = Laya.Browser.window.swan.createBannerAd({
            adUnitId: "5990172",
            appSid: "d9b2a93d",
            style: {
                top: ntop,
                left: nleft,
                width: bannerWidth,
            }
        });
        if (!this.bannerAd)
            return;
        this.bannerAd.onLoad(function () {
            BM.bannerAd.doshow()
                .then(function () {
                // Game.OnWinMsgUI('banner 广告显示');
                //Game.OnWinMsgUI("--realWidth:"+BM.bannerAd.style.realWidth+"--realHeight:"+BM.bannerAd.style.realHeight)
            })
                .catch(function (err) {
                //Game.OnWinMsgUI('banner 广告显示失败');
                BM.DealyLoadBanner();
            });
        });
        this.bannerAd.onError(function (err) {
            // Game.OnWinMsgUI('banner onError');
            BM.DealyLoadBanner();
        });
        // this.bannerAd.onResize(res => {
        //     //Game.OnWinMsgUI('banner 广告尺寸变化事件');
        // //      BM.bannerAd.style.top = winSize.windowHeight - BM.bannerAd.style.realHeight; 
        // })
    };
    //延时调用加载banner广告
    Baidu_Manager.prototype.DealyLoadBanner = function () {
        // Game.OnWinMsgUI('延时调用加载banner广告');
        Laya.timer.clear(this, this.onPlayBanner);
        Laya.timer.once(30000, this, this.onPlayBanner);
    };
    Baidu_Manager.prototype.ShareOrLookVideo = function (vidotype, shareType) {
        if (heroplayer == null || heroplayer.loginok == false)
            return;
        var nReaust = 0;
        // if(UI.IsCanLookVideo() == 1) //看视频
        // {
        //     nReaust = UI.onCheckShareZuanShi(shareType);
        //     if(nReaust== 1)
        //     {
        //         SM.onCreateJiLiGuangGao(vidotype);
        //     }
        //     else
        //     {
        //         if(vidotype != 1001)  //看视频
        //         {
        //             SM.OnUser_BaiDu_Share_Menu_ClickOk("Group","GameType=2&Inver_dbid="+heroplayer["dbid"],shareType);
        //             return  1;
        //         }
        //         if(SM.OnGetCdLong() >0)
        //         {
        //             UI.OnMsgTextUI(UI.lookVideo_view.ObjUI.CdTime.text+"后可观看视频！");
        //         }
        //         else
        //         {
        //             UI.OnMsgTextUI("今日次数已用完！");
        //         }
        //     }
        // }
        // else
        // {
        //     SM.OnUser_BaiDu_Share_Menu_ClickOk("Group","GameType=2&Inver_dbid="+heroplayer["dbid"],shareType);
        // }
        return 1;
    };
    return Baidu_Manager;
}());
//# sourceMappingURL=Baidu_Manager.js.map