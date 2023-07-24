var Queue = /** @class */ (function () {
    function Queue() {
        this.top = 0;
        this.end = 0;
        this.dataStore = [];
    }
    Queue.prototype.Push = function (element) {
        this.dataStore[this.end++] = element;
    };
    Queue.prototype.Pop = function () {
        var data = this.dataStore[this.top++];
        if (this.top >= this.end) {
            this.Clear();
        }
        return data;
    };
    Queue.prototype.Peek = function () {
        return this.dataStore[this.top - 1];
    };
    Queue.prototype.Clear = function () {
        this.top = 0;
        this.end = 0;
        this.dataStore = [];
    };
    Queue.prototype.Length = function () {
        return this.end - this.top;
    };
    return Queue;
}());
var GameCmd;
(function (GameCmd) {
    GameCmd[GameCmd["login"] = 0] = "login";
    GameCmd[GameCmd["RpError"] = 1] = "RpError";
    GameCmd[GameCmd["Build"] = 2] = "Build";
    GameCmd[GameCmd["Rank"] = 3] = "Rank";
    GameCmd[GameCmd["Invest"] = 4] = "Invest";
    GameCmd[GameCmd["Steal"] = 5] = "Steal";
    GameCmd[GameCmd["SelfData"] = 6] = "SelfData";
    GameCmd[GameCmd["Achieve"] = 7] = "Achieve";
    GameCmd[GameCmd["Group"] = 8] = "Group";
    GameCmd[GameCmd["Mall"] = 9] = "Mall";
    GameCmd[GameCmd["Activity"] = 10] = "Activity";
    GameCmd[GameCmd["Task"] = 11] = "Task";
    GameCmd[GameCmd["Friend"] = 12] = "Friend";
    GameCmd[GameCmd["RefreshData"] = 13] = "RefreshData";
    GameCmd[GameCmd["Chat"] = 14] = "Chat";
    GameCmd[GameCmd["Honor"] = 15] = "Honor";
    GameCmd[GameCmd["AddLog"] = 16] = "AddLog";
    GameCmd[GameCmd["Mail"] = 17] = "Mail";
    GameCmd[GameCmd["Avatar"] = 18] = "Avatar";
    GameCmd[GameCmd["Share"] = 19] = "Share";
    GameCmd[GameCmd["Landmark"] = 20] = "Landmark";
    GameCmd[GameCmd["ShiGuangJi"] = 21] = "ShiGuangJi";
    GameCmd[GameCmd["Investment"] = 22] = "Investment";
    GameCmd[GameCmd["Wuye"] = 23] = "Wuye";
})(GameCmd || (GameCmd = {}));
;
//消息队列
var GameMsg //extends laya.events.EventDispatcher
 = /** @class */ (function () {
    function GameMsg() {
        this.m_szMsg = new Queue(); //消息队列
        this.m_nIsSend = false; //消息状态
        //super();
        GameMsg.inst = this;
        Laya.timer.frameLoop(1, this, this.OnFrame);
    }
    //每帧执行
    GameMsg.prototype.OnFrame = function () {
        if (this.m_szMsg.Length() <= 0)
            return;
        if (this.m_nIsSend) {
            //console.log("OnFrame---------", this.m_szMsg.Length());
            if (this.m_szMsg.Length() > 99) {
                //操作过于频繁
                this.m_szMsg.Clear();
                UI.OnShowYesOrNo("提示", "SendCmd op over 99." + this.m_szCmd[0], "确定", "", null, null);
            }
            return;
        }
        this.m_szCmd = this.m_szMsg.Pop();
        var net = new GameNet();
        net.Send(this.m_szCmd[0], this.m_szCmd[1]);
        //console.log("Send---------", this.m_szCmd[0]+"?"+this.m_szCmd[1]);
        this.m_nIsSend = true;
        if (this.m_szCmd[4] == true) {
            UI.OnShowYesOrNo("提示", " UIController.GetInstance().ShowRescLoadUI(GameFun.GetLang(6007)); ", "确定", "", null, null);
        }
    };
    //超时
    GameMsg.prototype.timerOver = function () {
        this.m_nIsSend = false;
        UI.OnShowYesOrNo("提示", "连接超时", "确定", "", null, null);
        // GameError.Log("SendCmd timerOver."+this.m_szCmd[0]);//+"?"+this.m_szCmd[1]);
        // //连接超时
        // UIController.GetInstance().ShowHint(GameFun.GetLang(5004), GameFun.GetLang(6014), GameFun.GetLang(5006),UIController.GetInstance(),UIController.GetInstance().ShowLoginUI,null,false);
        // if(this.m_szCmd[4] == true)
        //     UIController.GetInstance().HideRescLoadUI();
    };
    //错误
    GameMsg.prototype.errorHandler = function (data) {
        this.m_nIsSend = false;
        UI.OnShowYesOrNo("提示", "掉线", "确定", "", null, null);
        // if(UIController.GetInstance().loginUI != null && !UIController.GetInstance().loginUI.visible)
        // {
        //     //掉线弹框
        //     UIController.GetInstance().ShowHint(GameFun.GetLang(5004),GameFun.GetLang(6010),GameFun.GetLang(5006),UIController.GetInstance(),UIController.GetInstance().ShowLoginUI,null,false);
        // }
        if (this.m_szCmd != null && this.m_szCmd != undefined) {
            if (this.m_szCmd[3] != null) {
                this.m_szCmd[3].runWith(data);
            }
        }
        // if(this.m_szCmd[4] == true)
        //     UIController.GetInstance().HideRescLoadUI();
    };
    //完成
    GameMsg.prototype.completeHandler = function (e) {
        this.m_nIsSend = false;
        var smsg = e.toString();
        //console.log("completeHandler", smsg);
        var szmatch = smsg.match("{\"errorcode\":[0-9]*}");
        if (szmatch != null && szmatch.length > 0) {
            var data = JSON.parse(szmatch[0]);
            e = smsg.replace(szmatch[0], "");
            console.log("completeHandler", data, e);
            if (data.errorcode != 0) {
                //掉线弹框
                UI.OnShowYesOrNo("提示", "掉线" + data.errorcode, "确定", "", null, null);
                if (data.errorcode == 1) {
                    console.log("completeHandler", data.errorcode);
                    //UIController.GetInstance().ShowHint(GameFun.GetLang(5004),GameFun.GetLang(6008),GameFun.GetLang(5006),UIController.GetInstance(),UIController.GetInstance().ShowLoginUI,null,false);
                }
                if (data.errorcode == 2) {
                    console.log("completeHandler", data.errorcode);
                    // UIController.GetInstance().ShowHint(GameFun.GetLang(5004),GameFun.GetLang(6009),GameFun.GetLang(5006),UIController.GetInstance(),UIController.GetInstance().ShowLoginUI,null,false);
                }
                return;
            }
        }
        if (this.m_szCmd != null && this.m_szCmd != undefined) {
            if (this.m_szCmd[2] != null) {
                this.m_szCmd[2].runWith(e);
            }
        }
        //this.event("complete", e);
        // if(this.m_szCmd[4] == true)
        //     UIController.GetInstance().HideRescLoadUI();
    };
    //用户登录
    GameMsg.prototype.Login = function (sParam, cmpFun, errFun) {
        var szCmd;
        szCmd = [CD.Service_URL + "/" + GameCmd[GameCmd.login] + ".aspx", sParam, cmpFun, errFun, false];
        this.m_szMsg.Push(szCmd);
        // GameMain.GetInstance().AddLoadStepLog(1, GamePlatForm.GetInstance().isNewUser, "登录服务：" + szCmd.join(","));
    };
    //用户获取头像
    // public GetTouXiang(sCmd: GameCmd, sParam: string, cmpFun?: Function, errFun?: Function): void {
    //     let szCmd;
    //     szCmd = [GameMain.m_TouXiangHost + "/" + "GetUserAvatar.aspx", UserData.GetInstance().m_sNetHead + "&" + sParam, cmpFun, errFun, false];
    //     //this.m_szMsg.Push(szCmd);
    //     let net = new GameNet();
    //     //net.Send(this.m_szCmd[0], this.m_szCmd[1]);
    //     net.SendNormal(GameMain.m_TouXiangHost + "/" + "GetUserAvatar.aspx", UserData.GetInstance().m_sNetHead + "&" + sParam, cmpFun, errFun);
    // }
    //发送消息给服务端
    GameMsg.prototype.Send = function (sCmd, sParam, cmpFun, errFun, isShowLoad) {
        if (isShowLoad === void 0) { isShowLoad = false; }
        var szCmd = [CD.Service_URL + "/" + GameCmd[sCmd] + ".aspx", "cid=" + heroplayer.DBID + "&uid=" + User.openid + "&serverid=" + CD.serverid + "&CodeVersion=" + CD.CodeVersion + "&" + sParam, cmpFun, errFun, isShowLoad];
        this.m_szMsg.Push(szCmd);
    };
    GameMsg.prototype.AddRequest = function (shost, cmpFun, errFun) {
        console.log("AddRequest", shost);
        var szCmd;
        szCmd = [shost, "", cmpFun, errFun, false];
        this.m_szMsg.Push(szCmd);
    };
    return GameMsg;
}());
var GameNet = /** @class */ (function () {
    function GameNet() {
    }
    //发送消息给服务端
    GameNet.prototype.Send = function (sCmd, sParam) {
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.send(sCmd, sParam, "post", "text");
        Laya.timer.once(10 * 1000, this, this.timerOver);
    };
    //发送log消息给服务端
    GameNet.prototype.SendLog = function (sCmd, sParam) {
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, this.logCompleteHandler);
        xhr.once(Laya.Event.ERROR, this, this.logErrorHandler);
        xhr.send(sCmd, sParam, "post", "text");
    };
    //发送一般消息--比如获取头像，失败成功都不影响游戏进程
    GameNet.prototype.SendNormal = function (sCmd, sParam, sucFun, failFun) {
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, sucFun);
        xhr.once(Laya.Event.ERROR, this, failFun);
        xhr.send(sCmd, sParam, "post", "text");
        //Laya.timer.once(10*1000, this, null);
    };
    //log消息错误
    GameNet.prototype.logErrorHandler = function (data) {
        console.log("logErrorHandler----", data);
    };
    //log消息完成
    GameNet.prototype.logCompleteHandler = function (e) {
        console.log("logCompleteHandler----", e);
    };
    // private processHandler(data){
    //     console.log("processHandler----", data);
    //     this.event("process", data);
    // }
    GameNet.prototype.timerOver = function () {
        Laya.timer.clearAll(this);
        GameMsg.inst.timerOver();
    };
    //消息错误
    GameNet.prototype.errorHandler = function (data) {
        Laya.timer.clearAll(this);
        GameMsg.inst.errorHandler(data);
    };
    //消息完成
    GameNet.prototype.completeHandler = function (e) {
        Laya.timer.clearAll(this);
        GameMsg.inst.completeHandler(e);
    };
    return GameNet;
}());
//# sourceMappingURL=GameNet.js.map