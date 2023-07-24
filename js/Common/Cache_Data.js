/*
* Ycj
* 2018 - 05 - 28
* 缓存数据
*/
var Cache_Data = /** @class */ (function () {
    //构造方法
    function Cache_Data() {
        //网站代码版本号,每次提交需要修改
        this.CodeVersion = "1.1.1";
        //系统环境
        this.Platform = ""; //空为自动判断平台, 否则为指定平台.
        //版本类型
        this.Version_Type = ""; //空为根据平台的公网逻辑自动判断 1为CDN资源  0为本地资源
        //网站服务地址
        this._Service_URL = "";
        //资源路径
        this._Resource_URL = ""; //配表使用的地址
        //玩一玩配置 
        this.isWanyiwan = 0; // 0:不启用 1:正式服 2:debug接口测试;    
        //梦工厂配置
        this.isMGC = 0;
        //中文版 1 英文
        this.BanBen = BanBen.guonei; //ch 中文版 eng 英文
        this.Language = Language.eng; //ch 中文版 eng 英文 zh 繁体 fr 法语 de 德语 it 意大利语 es 西班牙语 pt 葡萄牙语 ru 俄语 ja 日语 ko 韩语
        this.CanShake = true;
        this.buyNoXp = 0;
        this.subScribeType = 0;
        this.cancelScription = 0;
        this.Region = "";
        this.IFSSaveData = "";
        //配置文件
        this._Config = null;
        this._Game = null;
        this.isNewUser = 0;
        this.serverid = 0;
        this.servername = "";
        this.serverip = "";
        this.serverpoint = 0;
        this.serverlist = "";
        this.isvip = "";
        this.isTuiJian = 0;
        //是否是正式版本, 0 为审核版本
        this.isGameVersion = 0;
        //微信入口渠道
        this.Channel = "0";
        //运营平台
        this.PingTai = "0";
        //分享数据
        this.Share_Data = "";
        //资源文件版本
        this.File_DIR = new Laya.Dictionary;
        this.Common_Resource = null;
        this.NowSelectGameName = "";
    }
    Object.defineProperty(Cache_Data.prototype, "Service_URL", {
        get: function () {
            if (this._Service_URL == "") {
                if (this.BanBen == BanBen.guoji) {
                    this._Service_URL = "https://game.tapque.com/planet";
                }
                else if (this.BanBen == BanBen.guonei) {
                    this._Service_URL = "http://gamecn.tapque.com/lldqweb";
                }
            }
            return this._Service_URL;
        },
        set: function (_Value) {
            this._Service_URL = _Value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cache_Data.prototype, "Resource_URL", {
        get: function () {
            if (this._Service_URL == "") {
                if (this.BanBen == BanBen.guoji) {
                    this._Resource_URL = "https://minigameres.oss-us-west-1.aliyuncs.com";
                }
                else if (this.BanBen == BanBen.guonei) {
                    this._Resource_URL = "http://game3cn.tapque.com";
                }
            }
            return this._Resource_URL;
        },
        set: function (_Value) {
            this._Resource_URL = _Value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cache_Data.prototype, "Config", {
        //配置文件 - 封装Get
        get: function () {
            return this._Config;
        },
        //等级 - 封装Set
        set: function (_Value) {
            this._Config = _Value;
            // //版本号
            // //this.Version = this._Config.Version;
            // //服务URL
            // // this.Service_URL = this._Config.Service_URL;
            // if (CD.Version_Type != "0")  {
            //     //平台
            //     //this.Platform = this._Config.Platform;
            //     //版本类型
            //     // this.Version_Type = this._Config.Version_Type;
            //     //资源URL
            //     if (this._Config.Resource_URL.length > 0)  {
            //         this.Resource_URL = this._Config.Resource_URL; // + this.Version;
            //     }
            //     if (this._Config.Service_URL.length > 0)  {
            //         this.Service_URL = this._Config.Service_URL; // + this.Version;
            //     }
            // }
            // else  {
            //     this.Service_URL = this._Config.Service_URL;
            //     this.Resource_URL = "";
            // }
            // if (CD.serverip == "")  {
            //     CD.serverip = this._Config.Server_IP;
            // }
            // if (CD.serverpoint == 0)  {
            //     CD.serverpoint = parseInt(this._Config.Server_Port);
            // }
            // if (this._Config.isGameVersion != undefined)  {
            //     CD.isGameVersion = parseInt(this._Config.isGameVersion);
            // }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cache_Data.prototype, "Game", {
        //版本号
        //public Version:string ="1.0.0";
        get: function () {
            return this._Game;
        },
        //等级 - 封装Set
        set: function (_Value) {
            this._Game = _Value;
            this.Common_Resource = this._Game.Common_Resource;
            var _filedir = this._Game.file_dir;
            for (var i = 0; i < _filedir.length; i++) {
                this.File_DIR.set(_filedir[i][0], _filedir[i][1]);
            }
            _filedir = null;
            this._Game.file_dir = null;
        },
        enumerable: false,
        configurable: true
    });
    Cache_Data.prototype.getFileVersionPath = function (_resName) {
        // if( CD.Version_Type != "0")
        // {
        //     _resName = CD.CodeVersion+"/"+_resName;
        // }
        // return  this.Resource_URL + _resName;
        return _resName;
    };
    Cache_Data.prototype.log = function (logstr) {
        if (CD.isWanyiwan == 2) {
            //Laya.Browser.window.BK.Script.log(1,0,"LayaLog-------------:"+logstr);
            console.log(":" + logstr);
        }
        else if (CD.isWanyiwan == 1) {
            Laya['DebugTxt'].dTrace(":" + logstr);
        }
    };
    Cache_Data.prototype.localStorage_getItem = function (strkey) {
        return Laya.LocalStorage.getItem(strkey);
    };
    Cache_Data.prototype.localStorage_setItem = function (strkey, strval) {
        Laya.LocalStorage.setItem(strkey, strval);
    };
    Cache_Data.prototype.localStorage_removeItem = function (strkey) {
        Laya.LocalStorage.removeItem(strkey);
    };
    return Cache_Data;
}());
//# sourceMappingURL=Cache_Data.js.map