/*
* Ycj
* 2018 - 08 - 06
* 入口
*/
var Main = /** @class */ (function () {
    // public static loadingTimes: number = 0;
    // public GAMEFPS: number = 0;
    //构造方法
    function Main() {
        var _this = this;
        //舞台宽度
        this.Stage_Width = 1080;
        //舞台高度
        this.Stage_Height = 1920;
        //Y轴偏移量
        this.Offset_Y = 0;
        //HTTP请求
        this.HR = new Laya.HttpRequest();
        //json数据
        this.AllJson = {};
        this._scaleX = 0;
        this._Scale_X = 1;
        this._Scale_Y = 1;
        this.MusicActive = 1;
        this.SoundActive = 1;
        this.OpenTDGA = 0;
        //英文版视频冷却时间
        this.sharecd = 0;
        this.version = "29_3";
        this.isLoaded = false;
        this.isStart = false;
        this.isLoginLogOk = false;
        this.ME = null;
        this.openID = "";
        this.ZmEnterTime = 0;
        this.ME = this;
        // var levelMoney: math_BigUInt = new math_BigUInt();
        // console.log("setByShortString", levelMoney.setByShortString(""))
        // false && (console.log("selttttg" ),console.log("2" ),console.log("3" ));
        // for (var ii = 0; ii < 100; ii++) {
        //     var dd = Math.floor((ii - 1) / 5);
        //     if (dd >= 4) {
        //         dd = dd % 4;
        //     }
        //     dd = dd + 1;
        //     console.log("selttttg " + ii + "->" + dd)
        // }
        //初始化
        Laya.init(this.Stage_Width, this.Stage_Height, Laya.WebGL);
        if (CD.Platform == "") {
            if (Laya.Browser.window.webLoginParm != undefined) { //h5才有参数
                //SV.ME.GWebData = Laya.Browser.window.webLoginParm;
                //SV.ME.GWebData ={"cdn":"http://game3cn.tapque.com/paintly/1.1.5/","state":"suc","isNewUser":1,"cdnver":"V55","teamver":"J41","cid":270792,"pt":"KK_H5","openid":"16042fd127ada1d91a7b261f5e1f352b","isVip":0,"session_key":"730e061c1939429e4c97b9d2d7e9ede8","money":0,"gold":0,"jltimes":0,"fxtimes":0,"tstimes":3,"dataP":"","taskP":"","Nickname":"","AvatarURL":"","recomclick":0,"recomover":0,"recomdata":"","firstJs":"","history":{},"spoplist":"","slowshow":"1969","regtime":"2020/02/28 15:47:07","backreward":0};
                console.log(Laya.Browser.window.webLoginParm);
                CD.Platform = Platform.H5;
                CD.PingTai = Laya.Browser.window.webLoginParm["pt"];
                User.openid = Laya.Browser.window.webLoginParm["openid"];
                Laya.URL.basePath = Laya.Browser.window.webLoginParm["cdn"];
                console.log("===Laya.URL.basePath :" + Laya.URL.basePath);
            }
            // if (Laya.Browser.window.webLoginParm != undefined) {
            //     CD.Platform = Platform.H5;
            //     CD.PingTai = Laya.Browser.window.webLoginParm["pt"];
            //     User.openid = Laya.Browser.window.webLoginParm["openid"];
            //     User.pwd = Laya.Browser.window.webLoginParm["md5"];
            //     var isNewUser = Laya.Browser.window.webLoginParm["isNewUser"];
            //     var serverid: string = Laya.Browser.window.webLoginParm["serverid"];
            //     var servername: string = Laya.Browser.window.webLoginParm["servername"];
            //     var serverip: string = Laya.Browser.window.webLoginParm["serverip"];
            //     var serverpoint: string = Laya.Browser.window.webLoginParm["serverpoint"];
            //     var weburl: string = Laya.Browser.window.webLoginParm["weburl"];
            //     var cdnurl: string = Laya.Browser.window.webLoginParm["cdnurl"];
            //     var serverlist: string = Laya.Browser.window.webLoginParm["serverlist"];
            //     var isvip: string = Laya.Browser.window.webLoginParm["isvip"];
            //     var istuijian: string = Laya.Browser.window.webLoginParm["isTuiJian"];
            //     if (isNewUser != undefined && parseInt(isNewUser) > 0)
            //         CD.isNewUser = parseInt(isNewUser);
            //     if (serverid != undefined && parseInt(serverid) > 0)
            //         CD.serverid = parseInt(serverid);
            //     if (servername != undefined && servername.length > 0)
            //         CD.servername = servername;
            //     if (serverip != undefined && serverip.length > 0)
            //         CD.serverip = serverip;
            //     if (serverpoint != undefined && parseInt(serverpoint) > 0)
            //         CD.serverpoint = parseInt(serverpoint);
            //     if (weburl != undefined && weburl.length > 0)
            //         CD.Service_URL = weburl;
            //     if (cdnurl != undefined && cdnurl.length > 0)
            //         CD.Resource_URL = cdnurl;
            //     if (serverlist != undefined && serverlist.length > 0)
            //         CD.serverlist = serverlist;
            //     if (isvip != undefined && isvip.length > 0)
            //         CD.isvip = isvip;
            //     if (istuijian != undefined) {
            //         CD.isTuiJian = parseInt(istuijian);
            //     }
            //     //console.log("++++++++++ main is tui jian++++++++++++++: "+istuijian+"  |  CD.isTuiJian: "+CD.isTuiJian);
            //     var tmp = Laya.Browser.window.webLoginParm["OpenTDGA"];
            //     if (tmp != undefined) {
            //         this.OpenTDGA = parseInt(tmp);
            //     }
            //     var nm = Laya.Browser.window.webLoginParm["name"]
            //     if (nm != undefined) {
            //         User.Save_Nickname = nm;
            //     }
            //     var hd = Laya.Browser.window.webLoginParm["head"]
            //     if (hd != undefined) {
            //         User.Avatar_URL = hd.replace("http:", "https:");
            //     }
            //     //User.Avatar_URL =headimgurl;
            //     //User.Save_Nickname = "";
            // }
            else if (CD.isWanyiwan > 0) {
                CD.Platform = Platform.Wanyiwan;
            }
            else if (CD.isMGC == 1) {
                CD.Platform = Platform.MGC_H5;
            }
            else if (Laya.Browser.onWeiXin) {
                if (Laya.Browser.userAgent.indexOf('SwanGame') > -1) {
                    //百度
                    CD.Platform = Platform.Baidu;
                }
                else {
                    //微信
                    //CD.Platform = Platform.Wechat;
                    CD.Platform = Platform.MGC_H5;
                    //开启gssdk的微信
                    // CD.PingTai = PingTai.gssdk;
                }
            }
            else if (Laya.Browser.window.conch) {
                if (Laya.Browser.window.conch.config.getOS() == "Conch-android") {
                    CD.Platform = Platform.Android;
                    //监听退出
                    Laya.Browser.window.conch.setOnBackPressedFunction(function () { return _this.onAndroidQuit(); });
                }
                else if (Laya.Browser.window.conch.config.getOS() == "Conch-ios") {
                    CD.Platform = Platform.Ios;
                }
                // var LoginType: number = Laya.conchMarket.getLoginType();
                CD.PingTai = PingTai.game;
                CD.Version_Type = "0";
                //Laya.alertGlobalError = true;
                //Laya.Browser.window.conch.config.setSlowFrame(true);
                // Laya.stage.frameRate = "slow";//"fast" "slow" "mouse" "sleep"  设置慢速模式（30帧）
                Laya.Browser.window.showAlertOnJsException(false); //屏蔽项目中报错弹框
                //1 所有log e 全部alert弹出
                //2 所有log e和w 全部弹出
                // Laya.Browser.window.conch.config.setDebugLevel(2);
            }
            else {
                CD.Platform = Platform.Laya;
                if (CD.Version_Type == "") {
                    CD.Version_Type = "0";
                }
            }
            if (CD.Version_Type == "") {
                CD.Version_Type = "1";
            }
        }
        else {
            CD.Platform = Platform.Laya;
            CD.Version_Type = "1";
        }
        // if(Laya.Browser.window.VConsole != null)
        // {
        //     var vConsole = new Laya.Browser.window.VConsole();
        //     console.log('Hello world');
        // }
        CD.Platform = Platform.H5;
        //CD.PingTai = PingTai.HAGO_H5;//hago
        //CD.PingTai = PingTai.GOOGLE_H5;//
        //CD.PingTai = PingTai.H5;
        //CD.PingTai = PingTai.ZM_H5;//最美天气
        CD.PingTai = PingTai.WY_H5; //微游
        console.log("==11===CD.Platform:" + CD.Platform);
        console.log("==11===CD.PingTai:" + CD.PingTai);
        CD.Version_Type = "1";
        //CD.log("sdfasdf");
        if (CD.Platform == Platform.Laya) {
            //fps
            // Laya.Stat.doshow(0, 0);
        }
        new ParamOnline();
        if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            this.OpenTDGA = 1; //
            AdsManager.initAds(); //广告初始化
        }
        //Laya.DebugPanel.init(true);
        if (CD.Version_Type == "1") {
            // Laya.URL.basePath = CD.Resource_URL + CD.CodeVersion + "/";
            // Laya.URL.basePath = "https:///wyjh/v" + this.version + "/";
            Laya.loader.retryNum = 3;
            Laya.loader.retryDelay = 300;
        }
        //定义加载失败事件
        Laya.loader.on(Laya.Event.ERROR, this, this.Load_Error);
        //var _Scale_X = 1;
        //var _Scale_Y = 1;
        if (CD.isWanyiwan == 0) {
            //得到屏幕X缩放
            this._Scale_X = window.innerWidth * window.devicePixelRatio / this.Stage_Width;
            //得到屏幕Y缩放
            this._Scale_Y = window.innerHeight * window.devicePixelRatio / this.Stage_Height;
        }
        else {
            var renderSize = Laya.Browser.window.BK.Director.renderSize;
            var innerWidth = renderSize.width;
            var innerHeight = renderSize.height;
            var pixelSize = Laya.Browser.window.BK.Director.screenPixelSize;
            var pWidth = pixelSize.width;
            var pWheight = pixelSize.height;
            var devicePixelRatio = pWidth / pWheight;
            //得到屏幕X缩放
            this._Scale_X = innerWidth * devicePixelRatio / this.Stage_Width;
            //得到屏幕Y缩放
            this._Scale_Y = innerHeight * devicePixelRatio / this.Stage_Height;
        }
        //设置水平对齐
        Laya.stage.alignH = "center";
        //设置垂直对齐
        Laya.stage.alignV = "middle";
        //设置适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH; //this._Scale_Y > this._Scale_X ? Laya.Stage.SCALE_FIXED_WIDTH : Laya.Stage.SCALE_FIXED_HEIGHT;
        // GuideM.OnStateResize();
        //设置横竖屏
        // if (CD.Platform == Platform.H5) {
        //     Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        // }
        // else
        //     Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        //舞台背景色
        Laya.stage.bgColor = "#000000";
        this.showCloseWarn = false;
        //是否启用屏幕适配，可以适配后，在某个时候关闭屏幕适配，防止某些操作导致的屏幕以外改变
        //Laya.stage.screenAdaptationEnabled = true;
        new IFS();
        new Http();
        console.log("Platform :" + CD.Platform);
        console.log("PingTai :" + CD.PingTai);
        if (CD.Platform != Platform.Ios) {
            this.Initialize(1);
        }
    }
    Main.prototype.start = function () {
        //console.log("laya.net.URL.basePath====="+laya.net.URL.basePath);
        // console.log("99=="+cFun.serverTime.toLocaleString());
        (new MSound()).baseUrl = laya.net.URL.basePath + "music/";
        new MStage(Laya.stage); //.quickGamePatch = true;
        new manager_MTwinkle();
        new Clock().start();
        new MD5().checkJSLoad();
        new Server().url = "",
            // new UILog(),
            //console.log("100=="+cFun.serverTime.toLocaleString());
            MSound.ME.checkLoopEnd();
        // new WX();
        // Laya.loader.load([{
        //     url: "res/atlas/logo.atlas",
        //     type: "atlas"
        // },
        // {
        //     url: "res/atlas/load.atlas",
        //     type: "atlas"
        // }], laya.utils.Handler.create(this, this.onInit));
        this.isStart = true;
        //Laya.LocalStorage.removeItem("uid");
        this.openID = Laya.LocalStorage.getItem("uid");
        //UI.OnWinMsgUI("start*****"+this.openID);
        if (this.openID == null || this.openID == undefined || this.openID.length < 1) {
            if (CD.PingTai == PingTai.QTT_H5) {
                this.openID = User.openid;
                if (Laya.Browser.window.qttGame != null) {
                    if (Laya.Browser.window.qttGame.reportData != undefined) {
                        Laya.Browser.window.qttGame.reportData({ type: 'newUser', user_name: '', game_region: this.openID });
                    }
                }
            }
            else {
                if (AdsManager.GAID != "")
                    this.openID = AdsManager.GAID;
                else
                    this.openID = CM.GetNoRepetID();
            }
            Laya.LocalStorage.setItem("uid", this.openID);
        }
        console.log("CD.Config=====" + this.openID);
        //console.log(Laya.Browser.window.qttGame);
        //console.log(Laya.Browser.window.qttGame.reportData);
        var showconsolelist = ParamOnline.ME.getArr("showconsole", []);
        //console.log(showconsolelist);
        if (showconsolelist.length > 0) {
            var nfind = showconsolelist.indexOf(this.openID.toString());
            //console.log("nfind:"+nfind);
            if (Laya.Browser.window.VConsole != null && nfind != -1) {
                var vConsole = new Laya.Browser.window.VConsole();
                console.log('Hello world');
            }
        }
        //UI.OnWinMsgUI("start*****"+this.openID+"***"+AdsManager.GAID);
        SV.UID = this.openID;
        new SV(this.openID);
        SV.ME.addEvent("getPos", this, this.posShareAble);
        SV.ME.readLocal();
        var t = CM.Get_Local_TimeToShuShu();
        var dataTK = {
            lv: SV.ME.level,
            goldcoin: SV.ME.money.getV1(),
            goldcoinw: SV.ME.money.getV2(),
            gold: SV.ME.gold,
            onlinetime: "",
            noww: SV.ME.curFu + 1,
            m1: SV.ME.lCount,
            m2: SV.ME.lDamage,
            f1_1: SV.ME.levelFuCount[0],
            f1_2: SV.ME.levelFuDamage[0],
            f2_1: SV.ME.levelFuCount[1],
            f2_2: SV.ME.levelFuDamage[1],
            f3_1: SV.ME.levelFuCount[2],
            f3_2: SV.ME.levelFuDamage[2],
            f4_1: SV.ME.levelFuCount[3],
            f4_2: SV.ME.levelFuDamage[3],
            f5_1: SV.ME.levelFuCount[4],
            f5_2: SV.ME.levelFuDamage[4],
            f6_1: SV.ME.levelFuCount[5],
            f6_2: SV.ME.levelFuDamage[5],
            f7_1: SV.ME.levelFuCount[6],
            f7_2: SV.ME.levelFuDamage[6],
            f8_1: SV.ME.levelFuCount[7],
            f8_2: SV.ME.levelFuDamage[7],
            g_1: SV.ME.lJiaZhi,
            g_2: SV.ME.lRiChang,
            sysset1: SV.ME.isSoundOff,
            sysset2: SV.ME.isShackOff,
            regtime1: t + "",
            regtime2: new Date().getTime(),
            jilinum: SV.ME.videoAdsCount,
            jilitime: SV.ME.videoAdsTime,
            chapingnum: SV.ME.insertAdsCount,
            chapingtime: SV.ME.insertAdsTime,
            UserChannel: IFS.ME.YYChannel,
            jilioknum: SV.ME.videoAdsOKCount,
            chapingoknum: SV.ME.insertAdsOKCount,
            revvalue: SV.ME.RevValue,
        };
        if (SV.ME.onlinedate0 != "") {
            delete dataTK["regtime1"],
                delete dataTK["regtime2"];
        }
        //console.log("CD.Platform:"+CD.Platform);   
        if (CD.Platform == Platform.MGC_H5) {
            var TK_H5 = new ThinkingData_H5();
            TK_H5.identify(SV.UID);
            TK_H5.login(this.openID.toString());
            // 用配置对象初始化 SDK
            TK_H5.init();
            TK_H5.setSP('h5_mgc', this.openID);
            TK_H5.user_set({ "UserChannel": 'h5_mgc' });
            dataTK.UserChannel = 'h5_mgc';
            TK_H5.user_setOnce(dataTK);
            //TK_H5.track("dadian", { step: 0 });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.QTT_H5) {
            // var TK_H5: ThinkingData_H5 = new ThinkingData_H5();
            // //console.log("SV.UID==="+SV.UID);
            // //console.log("this.openID==="+this.openID);
            // TK_H5.identify(SV.UID);
            // TK_H5.login(this.openID.toString());
            // // 用配置对象初始化 SDK
            // TK_H5.init();
            // TK_H5.setSP(PingTai.QTT_H5,this.openID);
            // TK_H5.user_set({ "UserChannel": PingTai.QTT_H5});
            // dataTK.UserChannel = PingTai.QTT_H5;
            // TK_H5.user_setOnce(dataTK);
            // //console.log("110=="+cFun.serverTime.toLocaleString());
            //    //趣头条汇报 用户成功登陆
            // if(CD.PingTai == PingTai.QTT_H5 && Laya.Browser.window.qttGame != null)
            // {
            //     if(Laya.Browser.window.qttGame.reportData != undefined)
            //     {
            //         Laya.Browser.window.qttGame.reportData({type:'login',open_id:SV.UID, app_id:"a3UnHgKj4GqY", game_name:SV.szGameName,extend_info:{time:cFun.serverTime.getTime()}});
            //     }
            // }
        }
        else {
            TK.login(this.openID);
            // var dataTDGA: any = { accountId: this.openID, accountType: 1, level: SV.ME.level, gameServer: '1' };
            // HB.Account(dataTDGA);
            TK.user_setOnce(dataTK);
            // var dataTDGA = { type: "loginlog", uid: this.openID, level: SV.ME.level, money: SV.ME.money.getString(), charge: 0 };
            // Http.ME.sendGet("loginlog", CD.Service_URL + "/api/game/login.aspx", dataTDGA, this.LoginLogBack);
            // Server.ME.addEvent("downloadRecord", this, this.onLoadRecord, true),
            // SV.ME.addEvent("readServer", Server.ME, Server.ME.downloadRecord),
            // SV.ME.addEvent("saveServer", Server.ME, Server.ME.uploadRecord),
            // new HaiBao();
        }
        //登录检测签到奖励
        Cfg.CheckSignReward();
        AdsManager.ClcRetain(); //检测次登
        // new Game();
    };
    Main.prototype.LoginLogBack = function (data) {
        //console.log("LoginLogBack---"+data.data);
        if (data.data.indexOf("{") == 0) {
            var jsondata = JSON.parse(data.data);
            cFun.SetTickTime(jsondata.time);
        }
        GameMain.isLoginLogOk = true;
        //Game.ME.startTimer();
    };
    Main.prototype.posShareAble = function () {
    };
    //加载失败事件
    Main.prototype.Load_Error = function (_Error_Message) {
        console.log("加载失败", _Error_Message);
    };
    //初始化
    Main.prototype.Initialize = function (iStep) {
        //if (CD.isWanyiwan == 0) {
        // if (CD.Platform == Platform.Wechat)
        //     Laya.Browser.window.wx.setPreferredFramesPerSecond(30);
        // else
        //     Laya.stage.frameRate = "slow"
        // this.GAMEFPS = 60;
        //}
        //得到运行时的客户端屏幕宽度
        var _Client_Width = laya.utils.Browser.clientWidth;
        //得到运行时的客户端屏幕高度
        var _Client_Height = laya.utils.Browser.clientHeight;
        //计算偏移量
        var _A = _Client_Height / _Client_Width * 1136;
        var _B = 667 / 375 * 1136;
        var _C = 667 / 375;
        if (_A > _B) {
            this.Offset_Y = (_A - _B) / _C / 2;
        }
        var _scaleX_a = _Client_Width / _Client_Height;
        var _scaleX_b = this.Stage_Width / this.Stage_Height;
        if (_scaleX_b > _scaleX_a) {
            this._scaleX = _scaleX_b - _scaleX_a;
        }
        // new IFS();
        // new Http();
        // IFS.ME.doCall("config");
        //Laya.stage.y = this.Offset_Y;
        var loadres = [];
        var _gbid = this.getBackgroundID();
        if (CD.Platform == Platform.H5) {
            loadres.push(CD.getFileVersionPath("res/atlas/load_progress.atlas"));
            loadres.push(CD.getFileVersionPath("ui/" + _gbid + ".jpg"));
        }
        else {
            loadres.push("res/atlas/load_progress.atlas");
            loadres.push("ui/" + _gbid + ".jpg");
        }
        //console.log("loadres", loadres);
        //加载进度条图片
        Laya.loader.load(loadres, Laya.Handler.create(this, this.Load_Atlas_Complete));
        // if (CD.BanBen == BanBen.guoji) {
        //     try { IAPManager.init(); } catch (e) { }
        // }
        //性能统计
        //Laya.Stat.doshow();
    };
    //图集加载进度
    Main.prototype.Load_Atlas_Progress = function (_Value) {
        console.log("Atlas Progress" + _Value);
    };
    //图集加载完毕
    Main.prototype.Load_Atlas_Complete = function () {
        this.Load_Config(2);
        this.Get_Game_Config(3);
    };
    Main.prototype.Load_Config = function (_Value) {
        //config.json
        //console.log("_Value:"+_Value);
        //console.log("44=="+cFun.serverTime.toLocaleString());
        var a = "";
        // CD.Platform = Platform.Android;
        if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            a = CD.Resource_URL + "/" + "pl" + "an" + "et" + "/" + "co" + "nf" + "ig" + "/" + CD.Platform + "/" + "Co" + "nf" + "ig.json?t=" + Math.random();
            Http.ME.sendGet("", a, null, this.Get_HTMLConfig_Complete, this);
        }
        else {
            a = "re" + "s" + "/" + "Co" + "nf" + "ig" + "/" + "Co" + "nf" + "ig.json";
            //console.log(a);
            Laya.loader.load([a], Laya.Handler.create(this, this.Get_Config_Complete, [a]));
        }
    };
    // private isGameConfigOk = 0;
    Main.prototype.Get_HTMLConfig_Complete = function (t) {
        // this.isGameConfigOk++;
        this.init_Config(t.data);
        // if (this.isGameConfigOk >= 3) {
        //     Laya.timer.clear(this, this.Load_Config);
        // }
    };
    Main.prototype.Get_Config_Complete = function (_Parameter) {
        var _Json = Laya.loader.getRes(_Parameter);
        //console.log(_Json);
        this.init_Config(JSON.stringify(_Json));
    };
    Main.prototype.init_Config = function (_jsonstr) {
        var _Json = JSON.parse(_jsonstr);
        //console.log(_Json);
        if (_Json != undefined) {
            CD.Config = _Json;
            ParamOnline.ME.init(_Json);
            //console.log("CD.Config=");
            //console.log(CD.Config);
        }
        else {
            ParamOnline.ME.init("");
        }
    };
    //得到游戏配置文件
    Main.prototype.Get_Game_Config = function (iStep) {
        if (Laya.Browser.window.conch) {
            Laya.Browser.window.loadingView.loading(100); //关闭闪屏
        }
        //console.log("77=="+cFun.serverTime.toLocaleString());
        //console.log("iStep:"+iStep);
        // CD.log("CD.Version_Type:" + CD.Version_Type + "-----CD.Platform:" + CD.Platform);
        //console.log("Get_Game_Config==============", CD.Version_Type, CD.Platform, CD.PingTai);
        // if (CD.Version_Type == "1" || CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
        //     //加载分享配置文件
        //     this.HR.on(Laya.Event.COMPLETE, this, this.Get_Game_Config_Complete, ["1"]);
        //     // this.HR.send(CD.Service_URL + "Game.json");
        //     this.HR.send(CD.Service_URL + "getgamejson.aspx?gametype=Game&ver=" + CD.CodeVersion + "&t=" + Math.random());
        // }
        // else {
        var g = "res" + "/" + "Co" + "nf" + "ig" + "/" + "Ga" + "me.json";
        //console.log(g);
        Laya.loader.load([g], Laya.Handler.create(this, this.Get_Game_Config_Complete, [g]));
        // }
    };
    //得到游戏配置文件完成
    Main.prototype.Get_Game_Config_Complete = function (_Parameter) {
        //console.log("得到游戏配置文件完成");
        //console.log(_Parameter);
        //  console.log("88=="+cFun.serverTime.toLocaleString());
        var _Json = Laya.loader.getRes(_Parameter);
        //console.log(_Json);
        if (_Json != undefined) {
            //console.log("lan:" + IFS.Config.lan);
            CD.Game = _Json;
            //console.log(CD.Game);
            this.start();
        }
        else {
            if (CD.Platform == Platform.Wechat) {
                Laya.Browser.window.wx.showModal({
                    title: '提示',
                    content: '版本号不存在,请稍后再试!',
                    showCancel: false,
                    success: function (res) {
                        Laya.Browser.window.wx.exitMiniProgram();
                    }
                });
            }
            else if (CD.Platform == Platform.Baidu) {
                Laya.Browser.window.swan.showModal({
                    title: '提示',
                    content: '版本号不存在,请稍后再试!',
                    showCancel: false,
                    success: function (res) {
                        Laya.Browser.window.wx.exitMiniProgram();
                    }
                });
            }
        }
        // Main.loadingTimes++;
        // console.log("Load_Progress" + Main.loadingTimes);
        //console.log("Load_Progress");
        UI.Initialize_Load_Progress();
        // if(CD.Platform == Platform.Wechat)
        // {
        //     WM = new WeChat_Manager();
        //     WM.Initialize();
        //     SM = new Share_Manager();
        // }
        // else
        // {
        //      _Login = new Login();
        // }
        // Laya.stage.addChild(Game);
    };
    Main.prototype.ConfigLoadOK = function () {
        // console.log("ConfigLoadOK");
        // Res.ME.hideLoadPgs(),
        // xa.ME.stop(),
        Cfg.initDB();
        Cfg.initButtle();
        // WX.ME.preVideoAd("adunit-8dacb1a8b83685cf"),
        // Laya.loader.load("other/avatar100.txt"),
        // if (CD.BanBen == BanBen.guoji) {
        //     try { IAPManager.get(); } catch (e) { }
        // }
        new Game();
    };
    Main.prototype.ConnectSever = function (ntype) {
        //CD.log("Game.ConnectSever==="+ntype);
        //UI.OnWinMsgUI("ConnectSever=ntype:"+ntype+"===="+CD.Platform);
        if (CD.Platform == Platform.H5) {
            // if (CD.PingTai == PingTai.game) {
            //     _Login = new Login();
            // }
            // else {
            //     // IM.LoginSocketAPI(User.openid,User.pwd);
            //     if (CD.isNewUser == 1) {
            //         IM.LoginSocketAPI(User.openid, User.pwd);
            //     }
            //     else {
            //         //这里显示选服等待页面
            //         _Login = new Login(2);
            //         console.log("显示等待选服页面");
            //     }
            // }
            if (CD.PingTai == PingTai.QTT_H5) //趣头条
             {
                //console.log("150=="+cFun.serverTime.toLocaleString());
                console.log("趣头条===");
                new Qtt_H5_Manager();
            }
            else if (CD.PingTai == PingTai.ZM_H5) {
                if (this.ZmEnterTime == 0) {
                    this.ZmEnterTime = cFun.serverTime.getTime();
                }
                document.addEventListener("visibilitychange", function () {
                    GameMain.ME.handleVisibilityChange(event);
                });
            }
            else if (CD.PingTai == PingTai.WY_H5) {
                //SV.ME.level = 29;
                //SV.ME.gold = 20000000;
                AdsManager.isInterstitialReady_wy();
                AdsManager.isRewardedVideoReady_wy();
                AdsManager.isBannerReady_wy();
                document.addEventListener("visibilitychange", function () {
                    GameMain.ME.handleVisibilityChange(event);
                });
            }
            else if (CD.PingTai == PingTai.HAGO_H5) {
                console.info("hago游戏初始化");
                console.info(Laya.Browser.window.hg);
                //SV.ME.level  = 179;
                //SV.ME.gold = 20000000;
                if (Laya.Browser.window.hg != null) {
                    Laya.Browser.window.hg.gameLoadResult && Laya.Browser.window.hg.gameLoadResult({ code: 0 });
                }
                this.OnHaGoLoadOk();
            }
            else if (CD.PingTai == PingTai.GOOGLE_H5) {
                console.log("==初始化谷歌广告=======PingTai.GOOGLE_H5=======");
                Laya.Browser.window.adConfig({
                    preloadAdBreaks: 'on',
                    onReady: function () {
                        console.log("在 API 完成初始化并预加载广告成功");
                        AdsManager.OnShowGooldAd_Inter('start');
                    },
                });
                User.LoadUserDataOK("");
                this.ConfigLoadOK();
                return;
            }
        }
        else if (CD.Platform == Platform.Wechat) {
            //UI.Display_Or_Hidden_Load_Progress_UI(false);
            //检测微信登陆成功
            this.OnCheckWeChatLoadOk();
            GameMain.OnSendRankStart(); //上报排行数据
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            //CD.log(" new Wanyiwan_Manager");
            WywM = new Wanyiwan_Manager();
            CD.log("new Wanyiwan_Manager===111");
            WywM.Initialize();
            CD.log("new Wanyiwan_Manager===222");
            GameMain.OnSendRankStart(); //上报排行数据
            IM.OnLogin([]);
        }
        else if ((CD.Platform == Platform.Android || CD.Platform == Platform.Ios) && CD.BanBen == BanBen.guoji) //英文手机版本
         {
            IM.OnLogin([]);
        }
        else if (CD.Platform == Platform.Baidu) {
            //UI.Display_Or_Hidden_Load_Progress_UI(false);
            //检测百度登陆成功
            this.OnCheckBaiduLoadOk();
        }
        else if (CD.Platform == Platform.MGC_H5) {
            MgcM = new MGC_Manager();
            MgcM.Initialize();
        }
        else if (CD.Platform == Platform.AD_H5) {
            console.log("Platform.AD_H5=====");
            document.addEventListener("visibilitychange", function () {
                GameMain.ME.handleVisibilityChange(event);
            });
            User.LoadUserDataOK("");
        }
        else {
            // _Login = new Login();
            User.LoadUserDataOK("");
        }
        this.ConfigLoadOK();
        //分享相关初始化
        SM.OnInit();
    };
    //检测微信登陆成功
    Main.prototype.OnHaGoLoadOk = function () {
        HG = new HaGoManager();
        HG.Initialize();
    };
    // 如果页面是展示状态，则播放视频
    Main.prototype.handleVisibilityChange = function (event) {
        if (CD.Platform == Platform.AD_H5 || CD.Platform == Platform.H5) {
            if (document.visibilityState == 'visible') {
                if (CD.PingTai == PingTai.ZM_H5) {
                    this.ZmEnterTime = cFun.serverTime.getTime();
                }
                //console.info("返回前台==="+cFun.serverTime.getTime());
                MSound.ME && MSound.ME.resumeMusic();
            }
            else {
                if (CD.PingTai == PingTai.ZM_H5) {
                    if (this.ZmEnterTime != 0) {
                        var tl = ((cFun.serverTime.getTime() - this.ZmEnterTime) / 1000) | 0;
                        console.log("停留时间==tl=" + tl);
                        //页面停留时间上报
                        Laya.Browser.window.reportEvent.init({
                            time: tl
                        });
                        //console.log( Laya.Browser.window.reportEvent);
                    }
                }
                //console.info("返回后台==="+cFun.serverTime.getTime());
                if (CD.Platform == Platform.AD_H5) {
                    //游戏暂停时广告
                    console.log("游戏暂停时广告");
                    Laya.Browser.window.gameapi.showPause();
                }
                MSound.ME && MSound.ME.stopAll();
            }
        }
    };
    //检测百度登陆成功
    Main.prototype.OnCheckBaiduLoadOk = function () {
        if (heroplayer != null) {
            Laya.timer.clear(this, this.OnCheckWeChatLoadOk);
            return;
        }
        BM = new Baidu_Manager();
        BM.Initialize();
        //  SM.InitWeChat();
        //Laya.timer.once(10000, this, this.OnCheckWeChatLoadOk);
    };
    //检测微信登陆成功
    Main.prototype.OnCheckWeChatLoadOk = function () {
        //if(heroplayer != null)
        ///	{
        //		Laya.timer.clear(this, this.OnCheckWeChatLoadOk);
        //		return;
        //	}
        console.log("检测微信登陆成功======");
        WM = new WeChat_Manager();
        WM.Initialize();
        // SM = new Share_Manager();
        //   SM.InitWeChat();
        //Laya.timer.once(10000, this, this.OnCheckWeChatLoadOk);
    };
    //图集加载进度
    Main.prototype.Load_Game_Atlas_Progress = function (_Value) {
        console.log("Game_Atlas_Progress ：" + _Value);
    };
    //图集加载完毕
    Main.prototype.Load_Game_Atlas_Complete = function () {
    };
    //检测登陆
    Main.prototype.OnCheckLogin = function (pwd) {
        if (heroplayer != null) {
            Laya.timer.clear(this, this.OnCheckLogin);
            return;
        }
        IM.LoginSocketAPI(User.openid, pwd);
        Laya.timer.once(10000, this, this.OnCheckLogin, [pwd]);
    };
    //微信登录完成
    Main.prototype.Wechat_Login_Complete = function (iStep, pwd) {
        console.log("......................微信登录完成");
        this.OnCheckLogin(pwd);
    };
    Main.prototype.OnSendRankStart = function () {
        Laya.timer.loop(10000, this, this.SetRankData);
    };
    Main.prototype.onAndroidQuit = function () {
        console.log("......................doquit");
        //弹出一个提示框
        //  if(!this.showCloseWarn)
        //   {
        //       this.showCloseWarn = true;
        var sStr = Lan.D[4034] + "\n" + Lan.D[4035];
        UI.OnShowYesOrNo(Lan.D[4036], sStr, Lan.D[33], Lan.D[147], function (d) {
            Laya.Browser.window.conch.exit();
        }, null, GameMain.closeQuitWarn, null);
        //   }
    };
    Main.prototype.closeQuitWarn = function () {
        this.showCloseWarn = false;
    };
    Main.prototype.SetRankData = function () {
        if (heroplayer == null)
            return;
        if (heroplayer.isOK == false)
            return;
        if (heroplayer.money == undefined)
            return;
        if (CD.Platform == Platform.Wechat) {
            var _KV_Data = [];
            _KV_Data.push({ key: "TM", value: cFun.serverTime.getTime().toString() });
            WM.Save_Data(_KV_Data);
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            SM.OnShangBaoRankData();
        }
    };
    Main.prototype.getBackgroundID = function () {
        var _str = "bg";
        var k = ParamOnline.ME.getdata("BackgroundID");
        if (k != undefined) {
            return _str + k;
        }
        else {
            ParamOnline.ME.setdata("BackgroundID", "1");
            return _str + "1";
        }
    };
    Main.prototype.setBackgroundID = function (ilevel) {
        // var _nowbg = ilevel % 4 + 1;
        var _nowbg = Math.floor((ilevel - 1) / 5); //没5关换一次图
        if (_nowbg >= 4) {
            _nowbg = _nowbg % 4;
        }
        _nowbg = _nowbg + 1;
        var _oldbg = parseInt(ParamOnline.ME.getdata("BackgroundID"));
        // _nowbg = _oldbg;
        // _nowbg++;
        // _nowbg > 4 && (_nowbg = 1);
        if (_oldbg != _nowbg) {
            ParamOnline.ME.setdata("BackgroundID", _nowbg.toString());
            return true;
        }
        return false;
    };
    return Main;
}());
//缓存数据
var CD = new Cache_Data();
//实例化游戏
var cFun = new CFunc();
//引导
// var GuideM: YinDaoManager = new YinDaoManager();
//通用方法
var CM = new Common_Method();
//游戏接口
var GI = new Game_Interface();
//对象池管理
var OPM = new Object_Pool_Manager();
//用户
var User = new User_Entity();
var UI = new UI_Manager();
//创建微信管理
var WM = null;
//创建玩一玩管理
var WywM = null;
//创建baidu管理
var BM = null;
//创建分享管理
var SM = new Share_Manager();
//梦工厂管理
var MgcM = null;
//本地登录界面
// var _Login: Login = null;
var heroplayer = null;
var audioManager = new AudioManager();
//网站统一接口
var IM = new Interface_Manager();
//语言
var Lan = new LanguageManager();
//登录入口函数
// var LC: Login_Controller = new Login_Controller();
//_Login.Connect_Server("192.168.0.16", 20013);
//汇报
var HB = new HuiBao();
var TK = new ThinkingData();
var HG = null;
//主入口
var GameMain = new Main();
//Game.Initialize(1);
function playerIsOK() {
    if (heroplayer != null)
        return heroplayer.isOK;
    return false;
}
//下面不要写代码了. 如有定义在上面类似的地方增加
//# sourceMappingURL=Main.js.map