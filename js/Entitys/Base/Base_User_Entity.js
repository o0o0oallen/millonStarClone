/*
* Ycj
* 2018 - 05 - 17
* 基础用户实体类
*/
//抽象类 - 基础用户实体
var Base_User_Entity = /** @class */ (function () {
    function Base_User_Entity() {
        //CID
        this.CID = 0;
        //ID
        this.ID = 0;
        //openID
        this.openid = "undefined";
        //用户头像
        this.Avatar_URL = "0";
        //用户头像纹理
        this.Avatar = null;
        //用户昵称（会截断）
        this.Nickname = "";
        //用户存储昵称（）
        this.Save_Nickname = "";
        //用户性别
        this.Gender = "0";
        //用户国家
        this.Country = "0";
        //用户省份
        this.Province = "0";
        //用户城市
        this.City = "0";
        //open key 充值的时候使用
        this.token = "";
        //用户密码
        this.pwd = "";
    }
    //请求
    //public HR:Laya.HttpRequest = new Laya.HttpRequest();
    // //构造方法
    // constructor()
    // {
    //     this.HR.on(Laya.Event.ERROR, this, this.Request_Error, null);
    //     this.HR.on(Laya.Event.COMPLETE, this, this.Request_Complete, null);
    // }
    // //请求失败
    // public Request_Error(e: any): void 
    // {
    //     console.log(e);
    // }
    // //请求完成
    // public Request_Complete(e : any):void
    // {
    //     console.log(e);
    // }
    //得到JSON格式数据
    Base_User_Entity.prototype.Get_Data = function () {
        var parm = {
            "Nickname": encodeURI(this.Save_Nickname),
            "Avatar_URL": this.Avatar_URL,
            "Gender": this.Gender,
            "pt": CD.PingTai,
            "ptype": CD.Platform,
            "token": this.token
        };
        return JSON.stringify(parm);
    };
    return Base_User_Entity;
}());
//# sourceMappingURL=Base_User_Entity.js.map