/*
* Ycj
* 2018 - 07 - 14
* 基础模型类
*/
//抽象类 - 基础游戏模型
var Base_Game_Model = /** @class */ (function () {
    //构造方法
    function Base_Game_Model() {
        //配置
        this.Config = null;
        //资源路径
        this.Resource_URL = "";
    }
    //初始化数据
    Base_Game_Model.prototype.Initialize_Data = function (_URL, _Callback) {
        Laya.loader.on(Laya.Event.ERROR, this, this.Load_Error);
        this.Load_Data(_URL, _Callback);
    };
    //加载数据
    Base_Game_Model.prototype.Load_Data = function (_URL, _Callback) {
        Laya.loader.load(_URL, Laya.Handler.create(this, this.Load_Data_Complete, [_URL, _Callback]), null, Laya.Loader.JSON);
    };
    //加载失败
    Base_Game_Model.prototype.Load_Error = function (e) {
        console.log("Base_Game_Model加载失败：" + e);
    };
    //加载完成
    Base_Game_Model.prototype.Load_Data_Complete = function (_URL, _Callback) {
        //读取配表数据
        var _Json = Laya.loader.getRes(_URL);
        //得到配表数据
        var _Result = JSON.parse(JSON.stringify(_Json));
        //设置配置数据
        this.Config = _Result;
        //设置资源路径
        this.Resource_URL = _Result.Resource_URL + _Result.Version + "/";
        //回调
        _Callback();
    };
    //加载进度
    Base_Game_Model.prototype.Load_Data_Progress = function (_Value) {
        console.log("加载数据进度：" + _Value);
    };
    return Base_Game_Model;
}());
//# sourceMappingURL=Base_Game_Model.js.map