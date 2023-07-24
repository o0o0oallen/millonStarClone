var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var Load_Progress_View = /** @class */ (function (_super) {
        __extends(Load_Progress_View, _super);
        //加载json列表
        // public LoadJsonAny:any;
        // public JsonUrl:string = "xml/";
        function Load_Progress_View() {
            var _this = _super.call(this) || this;
            //当前进度
            _this.Current_Progress = 0;
            //当前时间
            _this.Current_Datetime = 0;
            //加载状态
            _this.Load_State = true;
            //console.log("loadprogress---"+this.height+"--"+GameMain.Offset_Y+"--"+GameMain._scaleX);
            _this.height += GameMain.Offset_Y * 2;
            var loadstr = "ui/" + GameMain.getBackgroundID() + ".jpg";
            //this.LoadProgressBg.source = Laya.loader.getRes(CD.getFileVersionPath(loadstr)) as Laya.Texture;
            _this.LoadProgressBg.skin = CD.getFileVersionPath(loadstr);
            _this.LoadProgressBg.left = 0 - 640 * GameMain._scaleX;
            _this.LoadProgressBg.right = 0 - 640 * GameMain._scaleX;
            _this.LoadProgressBg.top = 0;
            _this.LoadProgressBg.bottom = 0;
            //console.log("loadprogress---",CD.Platform);
            if (CD.Language == Language.eng) {
                _this.img_icon.skin = "font/eng/logo.png";
                _this.msglb.visible = false;
            }
            else if (CD.Language == Language.ch) {
                _this.img_icon.skin = "font/ch/logo5.png";
                _this.msglb.visible = true;
            }
            return _this;
        }
        //(this.LoadProgressBg.getChildAt(0) as Laya.Label).visible = false;
        //(this.LoadProgressBg.getChildAt(1) as Laya.Label).visible = false;
        //(this.LoadProgressBg.getChildAt(2) as Laya.Label).visible = false;
        //Laya.timer.loop(50, this, this.animate);
        Load_Progress_View.prototype.animate = function () {
            //this.xigua.rotation += 1;
        };
        //初始化数据
        Load_Progress_View.prototype.Load_Data = function () {
            var _Result = [];
            var _Value = "";
            //console.log(CD.Game.Common_Resource);
            _Value += this.Get_General_Data(CD.Game.Json);
            _Value += this.Get_General_Data(CD.Game.Images);
            _Value += this.Get_General_Data(CD.Game.Musics);
            // _Value += this.Get_General_Data(CD.Game.Sounds);
            // _Value += this.Get_General_Data(CD.Game.Effects);
            _Value += this.Get_General_Data(CD.Game.Animations);
            _Value += this.Get_General_Data(CD.Game.BmFont, CD.Language);
            _Value += this.Get_General_Data(CD.Game.TxtXml, CD.Language);
            _Value += this.Get_General_Data(CD.Game.Common_Resource);
            _Value = _Value.substring(0, _Value.length - 1);
            //console.log(_Value);
            this.Load_Resouce(_Value.split(','));
        };
        //得到普通数据
        Load_Progress_View.prototype.Get_General_Data = function (_Value, lan) {
            if (lan === void 0) { lan = ""; }
            var i = 0;
            var _Result = "";
            for (i = 0; i < _Value.length; i++) {
                var surl = lan == "" ? _Value[i] : Lan.StringFormat(_Value[i], [lan]);
                _Result += CD.getFileVersionPath(surl) + ",";
            }
            return _Result;
        };
        //加载资源
        Load_Progress_View.prototype.Load_Resouce = function (_Value) {
            //console.log("120=="+cFun.serverTime.toLocaleString());
            this.img_progress.width = 1;
            //UI.OnWinMsgUI("Load_Resouce:"+_Value.length);
            // console.log("Load_Resouce_Progress:" + Main.loadingTimes);
            //先加载图片资源，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
            Laya.loader.load(_Value, Laya.Handler.create(this, this.Load_Resouce_Complete), Laya.Handler.create(this, this.Load_Resouce_Progress, null, false));
        };
        //加载资源进度事件
        Load_Progress_View.prototype.Load_Resouce_Progress = function (_Progress) {
            this.img_progress.width = 349 * _Progress;
            //UI.OnWinMsgUI("Load_Resouce_Progress:"+_Progress);
            //console.log("当前进度   :", _Progress);
            if (_Progress == 1) {
                //console.log("Load_Resouce_Progress:"+_Progress);
                if (CD.Language == Language.ch)
                    this.txt_progress.text = "加载完成，准备进入游戏";
                else
                    this.txt_progress.text = "Loading...";
                this.Current_Progress = 1;
            }
            else {
                this.txt_progress.text = Math.floor(_Progress * 100).toString() + "%";
                if (_Progress != this.Current_Progress) {
                    this.Current_Progress = _Progress;
                }
                else {
                    this.Load_State = false;
                }
            }
        };
        //解析json数据
        Load_Progress_View.prototype.Read_Json_Data = function () {
            var _URL;
            var _Json;
            var _Result;
            var jsonname;
            var nJsonNum = 0;
            var nLoadNum = 0;
            //读取配表数据
            for (var index = 0; index < CD.Game.Json.length; index++) {
                //  console.log("cr index: "+index);
                _URL = CD.Game.Json[index];
                if (_URL.indexOf(".json") != -1) {
                    _Json = Laya.loader.getRes(CD.getFileVersionPath(_URL));
                    //console.log(_URL+"-- _Json:"+_Json);
                    nLoadNum++;
                    if (typeof (_Json) == "undefined")
                        continue;
                    //console.log(_URL+"-- _Json222222222:"+_Json);
                    _Result = JSON.parse(JSON.stringify(_Json));
                    jsonname = _URL.replace("res/xml/", "").replace(".json", "");
                    GameMain.AllJson[jsonname] = _Result;
                }
            }
            nJsonNum = Object.keys(GameMain.AllJson).length;
            if (nJsonNum != nLoadNum)
                return 0;
            return 1;
        };
        // //解析json数据
        // public Read_Json_Data(): void {
        // 	var _URL: string;
        // 	var _Json: JSON;
        // 	var _Result: any;
        // 	var jsonname: string;
        // 	//读取配表数据
        // 	for (var index in CD.Game.Common_Resource) {
        // 		_URL = CD.Game.Common_Resource[index];
        // 		if (_URL.indexOf(".json") != -1) {
        // 			_Json = Laya.loader.getRes(CD.getFileVersionPath(_URL));
        // 			//console.log(_URL+" _Json  "+_Json);
        // 			_Result = JSON.parse(JSON.stringify(_Json));
        // 			jsonname = _URL.replace("res/xml/", "").replace(".json", "");
        // 			Game.AllJson[jsonname] = _Result;
        // 		}
        // 	}
        // }
        //加载资源完成事件
        Load_Progress_View.prototype.Load_Resouce_Complete = function (_Resouce) {
            //console.log("Load_Resouce_Complete:                   ..");
            //UI.OnWinMsgUI("Load_Resouce_Complete");
            if (this.Current_Progress < 1) {
                console.log("下载异常!!");
                //UI.Initialize_Load_Progress();
                Laya.timer.once(5000, this, UI.Initialize_Load_Progress);
                return;
            }
            //console.log("130=="+cFun.serverTime.toLocaleString());
            //解析json数据
            var nLoadNum = this.Read_Json_Data();
            Lan.loadXML();
            //UI.OnWinMsgUI("nLoadNum:"+nLoadNum+"=="+Lan.D);
            if (nLoadNum == 0 || Lan.D == null || Lan.D == undefined) {
                //延时1秒继续下载
                //UI.OnWinMsgUI("Load_Resouce_Complete////"+Lan.D);
                Laya.timer.once(1000, this, this.Load_Data);
                return;
            }
            //Laya.timer.clear(this, this.animate);
            //console.log("140=="+cFun.serverTime.toLocaleString());
            // UI.creatReconnect();
            //console.log("资源加载完毕！开始ConnectSever===");
            //趣头条汇报 游戏资源加载完毕
            if (CD.PingTai == PingTai.QTT_H5 && Laya.Browser.window.qttGame != null) {
                if (Laya.Browser.window.qttGame.reportData != undefined) {
                    Laya.Browser.window.qttGame.reportData({ type: 'ready', open_id: SV.UID, app_id: "a3UnHgKj4GqY", game_name: SV.szGameName, extend_info: { time: cFun.serverTime.getTime() } });
                }
            }
            //UI.OnWinMsgUI("UI.creatReconnect=");
            if (CD.BanBen == BanBen.guonei && IFS.ME.YYChannel.toLowerCase() == "huawei") {
                Laya.timer.once(2000, GameMain, GameMain.ConnectSever, [4]);
            }
            else {
                if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
                    console.log("开始初始化微游游戏");
                    Laya.Browser.window.minigame.initializeAsync().then(function () {
                        console.log("SDK 初始化完毕成功 start success");
                        Laya.Browser.window.minigame.startGameAsync().then(function () {
                            console.log("startGameAsync完毕成功 start success");
                            //连接服务端
                            GameMain.ConnectSever(4);
                        }).catch(function (e) {
                            console.log("startGameAsync完毕失败 start failed");
                        });
                    }).catch(function (e) {
                        console.log("SDK 初始化完毕失败 start failed");
                    });
                }
                else {
                    //连接服务端
                    GameMain.ConnectSever(4);
                }
            }
        };
        return Load_Progress_View;
    }(ui.Load_Progress_ViewUI));
    view.Load_Progress_View = Load_Progress_View;
})(view || (view = {}));
//# sourceMappingURL=Load_Progress_View.js.map