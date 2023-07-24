/*
* LTT
* 2018 - 11 - 07
* 充值总控界面
*/
// Laya.MiniAdpter.init(true);
var Interface_Manager = /** @class */ (function () {
    function Interface_Manager() {
        this.Login_HR = new Laya.HttpRequest();
        this.Charge_HR = new Laya.HttpRequest();
        this.ChargeCheck_HR = new Laya.HttpRequest();
        this.GOrderID = "";
        this.NeedCheck = true;
    }
    //构造方法
    Interface_Manager.prototype.Initialize = function () {
    };
    Interface_Manager.prototype.AllError = function (msg, data) {
        console.log("------------------------AllError" + msg + "#" + data);
        var sData = {
            type: "showtip",
            data: msg
        };
        IFS.ME.doCall(JSON.stringify(sData));
    };
    //登录接口总控类~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Interface_Manager.prototype.OnLogin = function (json) {
        if (CD.Platform == Platform.Wanyiwan) {
            this.OnLogin_Wanyiwan(json);
        }
        else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            if (CD.BanBen == BanBen.guoji) //android 英文版本
             {
                console.log("english login");
                var openid = CD.localStorage_getItem("engOpenID");
                if (openid != undefined && openid.length > 1) {
                }
                else {
                    openid = CM.GetNoRepetID();
                    CD.localStorage_setItem("engOpenID", openid);
                }
                User.openid = openid;
                User.Avatar_URL = "";
                User.Save_Nickname = openid.substring(openid.length - 6, openid.length);
                IM.OnLoginWebAPI([]);
            }
            else {
                this.OnLogin_conch(json);
            }
        }
    };
    //登录通用网页接口
    Interface_Manager.prototype.OnLoginWebAPI = function (json) {
        var sUrl = "";
        if (CD.Platform == Platform.Wanyiwan) {
            sUrl = "".concat(CD.Service_URL, "/api/wanyiwan/login.aspx?action=login&openid=").concat(User.openid, "&openkey=").concat(User.token, "&CodeVersion=").concat(CD.CodeVersion);
        }
        else if (CD.Platform == Platform.H5) {
            if (CD.PingTai == PingTai.game) {
                sUrl = "".concat(CD.Service_URL, "/api/game/index.aspx?action=login&openid=").concat(User.openid, "&pt=").concat(CD.PingTai, "&CodeVersion=").concat(CD.CodeVersion);
            }
        }
        else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            // sUrl = `${CD.Service_URL}/api/phone/index.aspx?action=login&openid=${User.openid}&pf=${CD.Platform}&pt=${CD.PingTai}&CodeVersion=${CD.CodeVersion}`;
        }
        else if (CD.Platform == Platform.Wechat) {
            sUrl = "".concat(CD.Service_URL, "/api/wechat/we_chatapi.aspx?action=login&code=").concat(json, "&pf=").concat(CD.Platform, "&pt=").concat(CD.PingTai, "&CodeVersion=").concat(CD.CodeVersion);
        }
        if (sUrl.length > 0) {
            IM.Login_HR.on(Laya.Event.COMPLETE, this, IM.OnLoginWebAPIOk);
            IM.Login_HR.on(Laya.Event.ERROR, this, IM.OnLoginWebAPIError);
            IM.Login_HR.send(sUrl);
        }
    };
    //登录通用网页接口返回值
    Interface_Manager.prototype.OnLoginWebAPIOk = function () {
        var _fgetjson = JSON.parse(JSON.stringify(this.Login_HR.data));
        var data = JSON.parse(_fgetjson);
        if (data["state"] == "suc") {
            console.log("OnLoginWebAPIOk", data);
            User.pwd = data["md5"];
            User.openid = data["openid"];
            CD.isNewUser = parseInt(data["isNewUser"]);
            CD.serverid = parseInt(data["serverid"]);
            CD.serverip = data["serverip"];
            CD.serverpoint = parseInt(data["serverpoint"]);
            CD.Resource_URL = data["cdnurl"];
            CD.serverlist = data["serverlist"];
            if (data["isvip"] != undefined)
                CD.isvip = data["isvip"];
            if (data["isTuiJian"] != undefined)
                CD.isTuiJian = data["isTuiJian"];
            IM.LoginSocketAPI(User.openid, User.pwd);
        }
        else {
            UI.OnShowYesOrNo("提示", "登录异常,请重试", "确定");
        }
    };
    Interface_Manager.prototype.OnLoginWebAPIError = function (e) {
        console.log(e);
        //CD.log("LoginError"+e);
    };
    //玩一玩接口登录类
    Interface_Manager.prototype.OnLogin_Wanyiwan = function (json) {
        var GameStatusInfo = Laya.Browser.window.GameStatusInfo;
        var openid = GameStatusInfo.openId;
        var gameParam = GameStatusInfo.gameParam;
        var openKey = "111111";
        User.openid = openid;
        User.token = openKey;
        if (CD.isWanyiwan == 1) {
            var Wanyiwan_Nickname = CD.localStorage_getItem("Wanyiwan_Nickname");
            if (Wanyiwan_Nickname != "" && Wanyiwan_Nickname != null) {
                User.Save_Nickname = Wanyiwan_Nickname;
            }
            else {
                Laya.Browser.window.BK.MQQ.Account.getNick(openid, function (openID, nick) {
                    User.Save_Nickname = nick;
                    CD.localStorage_setItem("Wanyiwan_Nickname", nick);
                    // if(UI.Main_View != null)
                    // {
                    //     UI.Main_View.OnNickName();
                    // }
                });
            }
            var Wanyiwan_Avatar_URL = CD.localStorage_getItem("Wanyiwan_AvatarURL");
            if (Wanyiwan_Avatar_URL != "" && Wanyiwan_Avatar_URL != null) {
                User.Avatar_URL = Wanyiwan_Avatar_URL;
            }
            else {
                Laya.Browser.window.BK.MQQ.Account.getHeadEx(openid, function (openID, imgPath) {
                    User.Avatar_URL = imgPath;
                    CD.localStorage_setItem("Wanyiwan_AvatarURL", imgPath);
                    // if(UI.Main_View != null)
                    // {
                    //     UI.Main_View.OnNickName();
                    // }
                });
            }
        }
        if (CD.isWanyiwan == 1) {
            Laya.Browser.window.BK.QQ.fetchOpenKey(function (errCode, cmd, data) {
                if (errCode == 0) {
                    openKey = data.openKey;
                    User.token = openKey;
                    IM.OnLoginWebAPI([]);
                }
            });
        }
        else if (CD.isWanyiwan == 2) {
            IM.OnLoginWebAPI([]);
        }
    };
    //手机版本接口登录类
    Interface_Manager.prototype.OnLogin_conch = function (json) {
        //this.OnLogin_conch(json);
        var runVersion = Laya.Browser.window.conch.config.getRuntimeVersion();
        console.log("1getOS:" + runVersion);
        //this.loginpt=PingTai.weixin;
        var sData = { pt: CD.PingTai, runver: runVersion };
        console.log("1Laya.conchMarket.login" + sData);
        Laya.conchMarket.login(JSON.stringify(sData), this.LoginData_conchMarket);
    };
    Interface_Manager.prototype.LoginData_conchMarket = function (_result) {
        //{"userID":"oIMT_0wrW6AYD_qlvKNK6JW7fjhQ","icon":"http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTIIQm5hF2M5ticyI3Dic1waFMNvwbIZvicJbNScbdyW7fevVEqWFs1HsjdapYcbLpiadpoicMnxfTM8ZOQ\/132","token":"15_kD1ifCxBaVUxqcA86nulTaT4VfqWB6iCPJbblnV-vWNqFAm9O009d2ot9qs9u01iLVOFCl7fOdHQ29lvo-LRGkQjexw9wWjMVQDpUnxe2UY","nickname":" 花啦啦啦啦啦咔咔啦啦","expiresTime":1541046295934,"expiresIn":7200,"unionid":"o_NJQv8WsmvHYCkOllLEvHd76Ecc","province":"Shaanxi","gender":"0","openid":"oIMT_0wrW6AYD_qlvKNK6JW7fjhQ","refresh_token":"15_YRJLuOT3SdlF7Po5_ScMlJ-YV_2C09ZuFdXJ1kVGBYv-oX4AR8plM74b5QpVfB2DL_tZsoL9Q2SPacW_4UkmJOvumUAIhgeRbb45a18bRno","country":"CN","city":"Xi'an"}
        console.log("2Laya.conchMarket.login" + _result);
        var tresult = JSON.parse(_result);
        var openid = tresult["userID"];
        var unionid = tresult["unionid"];
        var nickname = tresult["nickname"];
        var headimgurl = tresult["icon"];
        var sex = tresult["gender"];
        User.openid = openid;
        User.Avatar_URL = headimgurl;
        User.Save_Nickname = nickname;
        User.pwd = unionid;
        IM.OnLoginWebAPI([]);
    };
    //登录服务端调用
    Interface_Manager.prototype.LoginSocketAPI = function (openid, password) {
        if (CD.Platform == Platform.H5) {
            openid = CD.PingTai + "|" + openid;
        }
        // LC.Connection_Server(CD.serverip, CD.serverpoint, openid, password, User.Get_Data());
    };
    //充值~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Interface_Manager.prototype.OnCharge = function (nMoney, nPoint, goodsid, goodsname, reason, payID) {
        console.log(nMoney);
        if (goodsid == "100") {
            // if(heroplayer.IsHaveCard(parseInt(goodsid)))
            // {
            //     UI.OnShowYesOrNo("提示","你已经购买过终身卡了！","确定");
            //     return ;
            // }
        }
        if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            if (Laya.Browser.window.conch) {
                var sUrl_1 = "".concat(CD.Service_URL, "/api/phone/pay.aspx");
                sUrl_1 = "".concat(sUrl_1, "?action=pay&money=").concat(nMoney, "&gold=").concat(nPoint, "&cid=").concat(SV.UID, "&uid=").concat(SV.UID, "&goodsName=").concat(goodsname, "&goodsId=").concat(goodsid, "&Reason=").concat(reason, "&CodeVersion=").concat(CD.CodeVersion, "&pf=").concat(CD.Platform, "&pt=").concat(CD.PingTai, "&serverid=").concat(CD.serverid, "&token=").concat(CD.BanBen, "&payID=").concat(payID);
                IM.Charge_HR.on(Laya.Event.COMPLETE, this, this.OnPayOk);
                IM.Charge_HR.on(Laya.Event.ERROR, this, this.OnPayError);
                IM.Charge_HR.send(sUrl_1);
                return;
            }
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            //CD.log("Pay:"+nMoney);
            var sUrl = "".concat(CD.Service_URL, "/api/wanyiwan/pay.aspx?action=pay&money=").concat(nMoney, "&gold=").concat(nPoint, "&uid=").concat(User.openid, "&goodsName=").concat(goodsname, "&goodsId=").concat(goodsid, "&Reason=").concat(reason, "&serverid=").concat(CD.serverid, "&CodeVersion=").concat(CD.CodeVersion, "&token=").concat(User.token);
            IM.Charge_HR.on(Laya.Event.COMPLETE, this, IM.OnPayOk);
            IM.Charge_HR.on(Laya.Event.ERROR, this, IM.OnPayError);
            IM.Charge_HR.send(sUrl);
        }
        else if (CD.Platform == Platform.Wechat) {
            Laya.Browser.window.wx.aldSendEvent("购买商品", { "Id": goodsid.toString(), "price": nMoney.toString(), "name": goodsname });
            WM.OnCharge(nMoney, nPoint, goodsid, goodsname);
            return;
        }
        else if (CD.Platform == Platform.H5) {
            var sUrl = "";
            sUrl = "".concat(CD.Service_URL, "/api/").concat(CD.PingTai, "/pay.aspx");
            sUrl = "".concat(sUrl, "?action=pay&money=").concat(nMoney, "&gold=").concat(nPoint, "&cid=").concat(heroplayer.DBID, "&uid=").concat(User.openid, "&goodsName=").concat(goodsname, "&goodsId=").concat(goodsid, "&Reason=").concat(reason, "&CodeVersion=").concat(CD.CodeVersion, "&pf=").concat(CD.Platform, "&pt=").concat(CD.PingTai, "&serverid=").concat(CD.serverid, "&token=").concat(User.token);
            IM.Charge_HR.on(Laya.Event.COMPLETE, this, this.OnPayOk);
            IM.Charge_HR.on(Laya.Event.ERROR, this, this.OnPayError);
            IM.Charge_HR.send(sUrl);
        }
    };
    Interface_Manager.prototype.OnPayError = function (e) {
        console.log(e);
        Game.ME.ShowLoadMask(false);
        //CD.log("OnPayError"+e);
    };
    Interface_Manager.prototype.OnPayOk = function () {
        console.log("OnPayOk");
        var _fgetjson = JSON.parse(JSON.stringify(this.Charge_HR.data));
        var data = JSON.parse(_fgetjson);
        if (CD.Platform == Platform.Wanyiwan) {
            IM.api_qqwanyiwan_pay(data);
        }
        else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
            if (Laya.Browser.window.conch) {
                var sstate = data.state;
                var _msg = data.msg; //transid
                if (sstate == "suc") {
                    this.GOrderID = data.orderid;
                    var df_payID = data.payID;
                    var fdata = { "type": "pay", "id": df_payID, "data": _msg };
                    IFS.ME.doPay(JSON.stringify(fdata));
                }
                else {
                    TipRich.ME.showTTT(_msg, "", "", "#ffffff", "#43fed9").doshow();
                }
                return;
            }
        }
        else if (CD.Platform == Platform.H5) {
            IM.api_H5_pay(data);
        }
    };
    Interface_Manager.prototype.api_qqwanyiwan_pay = function (_data) {
        //var gameOrientation =  1;   //1（默认，竖屏）2.横屏（home键在左边）3.横屏 （home键在右边）
        var _itemList = _data.msg;
        var _orderid = _data.orderid;
        var paydata = {};
        Laya.Browser.window.BK.QQ.qPayPurchase(1, true, _itemList, function (errCode, data) {
            //CD.log("qPayPurchase errCode:"+errCode+" data:"+JSON.stringify(data));
            // errCode == 0代表成功.其他错误码请查阅本节最下
            var paystate = "";
            if (errCode == 0) {
                paydata.data = data.itemList;
                var _data = JSON.stringify(paydata);
                paystate = "suc";
            }
            else {
                //errCode != 0代表购买失败
                paydata.data = data.itemList;
                var _data = JSON.stringify(paydata);
                paystate = "fail";
            }
            var sUrl = "".concat(CD.Service_URL, "/api/wanyiwan/pay.aspx?action=cost&state=").concat(paystate, "&uid=").concat(User.openid, "&token=").concat(User.token, "&orderid=").concat(_orderid, "&errCode=").concat(errCode, "&CodeVersion=").concat(CD.CodeVersion, "&data=").concat(_data);
            IM.ChargeCheck_HR.on(Laya.Event.COMPLETE, this, IM.OnPayCheckOk);
            IM.ChargeCheck_HR.on(Laya.Event.ERROR, this, IM.OnPayCheckError);
            IM.ChargeCheck_HR.send(sUrl);
        });
    };
    Interface_Manager.prototype.api_H5_pay = function (_data) {
        var _itemList = _data.msg;
        var _orderid = _data.orderid;
        if (_data.state == "suc") {
            if (CD.PingTai == PingTai.phone) {
                var msgUrl = _data.msg;
                Laya.Browser.window.location.href = msgUrl;
            }
            else {
                // var data = JSON.parse(itemList);
                // data.role = encodeURI(User.Save_Nickname);
                Laya.Browser.window.pay(_itemList);
            }
        }
        else {
            UI.OnWinMsgUI("充值异常!");
        }
    };
    Interface_Manager.prototype.api_aibei_pay = function (_type, _data) {
        if (_type == "payok") {
            var sUrl = "".concat(CD.Service_URL, "/api/phone/pay_queryresult.aspx?action=cost&data=").concat(_data, "&uid=").concat(SV.UID, "&orderid=").concat(this.GOrderID, "&CodeVersion=").concat(CD.CodeVersion);
            IM.ChargeCheck_HR.on(Laya.Event.COMPLETE, this, IM.OnPayCheckOk);
            IM.ChargeCheck_HR.on(Laya.Event.ERROR, this, IM.OnPayCheckError);
            IM.ChargeCheck_HR.send(sUrl);
        }
        else {
            this.GOrderID = "";
            TipRich.ME.showTTT("PayError:" + _data, "", "", "#ffffff", "#43fed9").doshow();
            //TODO:关闭
            Game.ME.ShowLoadMask(false);
        }
    };
    Interface_Manager.prototype.OnPayCheckOk = function () {
        // console.log("OnPayCheckOk" + JSON.stringify(this.ChargeCheck_HR.data));
        var _fgetjson = JSON.parse(JSON.stringify(this.ChargeCheck_HR.data));
        var _data = JSON.parse(_fgetjson);
        var sstate = _data.state;
        var msg = _data.msg; //transid
        if (sstate == "suc") {
            IM.DealPay(_data, 0);
        }
        else {
            TipRich.ME.showTTT(msg, "", "", "#ffffff", "#43fed9").doshow();
        }
        return;
    };
    //去网站检查未处理的订单
    Interface_Manager.prototype.api_aibei_checknodeal = function () {
        if (this.NeedCheck == false) {
            return;
        }
        var sUrl = "".concat(CD.Service_URL, "/api/phone/pay_checknodeal.aspx?action=pay&uid=").concat(SV.UID, "&CodeVersion=").concat(CD.CodeVersion);
        IM.ChargeCheck_HR.on(Laya.Event.COMPLETE, this, IM.OnPayCheckNodealOk);
        IM.ChargeCheck_HR.send(sUrl);
    };
    Interface_Manager.prototype.OnPayCheckNodealOk = function () {
        var _fgetjson = JSON.parse(JSON.stringify(this.ChargeCheck_HR.data));
        var _data = JSON.parse(_fgetjson);
        var sstate = _data.state;
        var msg = _data.msg; //transid
        if (sstate == "suc") {
            IM.DealPay(_data, 1);
        }
        else if (sstate == "nodata") {
            this.NeedCheck = false;
        }
        return;
    };
    Interface_Manager.prototype.DealPay = function (data, istate) {
        var _goodsId = data.goodsId;
        console.log("goodsId:" + _goodsId);
        //OnPayCheckOk"{\"state\":\"suc\",\"msg\":\"2\",\"payOrderid\":\"32811904241342029377\",\"orderid\":\"19042413420437000001\",\"goodsId\":\"1001\",\"paymoney\":\"0.01\",\"paytime\":\"2019-04-24 13:42:18\"}"
        //TODO:玩家加钻石等操作
        Game.ME.ShowLoadMask(false);
        if (_goodsId == "1001") {
            //购买屏蔽广告
            this.BuyNoAdsOk();
        }
        else if (_goodsId == "1003" || _goodsId == "1004" || _goodsId == "1005") {
            SubScriptionWnd.ME.OnSubscribOk(parseInt(_goodsId), 1);
        }
        else {
            this.BuyChargeOk(_goodsId);
        }
        var dataTDGA = {
            "goodsId": _goodsId,
            "payOrderid": data.payOrderid,
            "orderid": data.orderid,
            "paymoney": data.paymoney,
            "paytime": data.paytime,
            "ptype": data.ptype,
        };
        TK.track("paylog", dataTDGA);
        if (istate == 1) { //还需要继续监测是否有订单
            Laya.timer.once(1e3, IM, IM.api_aibei_checknodeal);
        }
    };
    Interface_Manager.prototype.BuyChargeOk = function (idx) {
        var xmldata = CD.Game.Config_Charge[idx];
        var szreward = xmldata.reward.split(",");
        var szGold = parseInt(szreward[1]);
        Game.ME.animAddGold(szGold, Game.centerX, Game.centerY, parseInt(idx) * 5, "charge");
        SV.ME.firstCharge == 0 && (SV.ME.firstCharge = idx, FirstChargeWnd.ME.ResetFuncLb(), Game.ME.SetChargeTip());
    };
    Interface_Manager.prototype.BuyNoAdsOk = function () {
        SV.ME.buyNoXp = 1;
        SV.ME.dosave(false, 31);
        ShopUI.ME.UpdateUI();
    };
    Interface_Manager.prototype.OnPayCheckError = function (e) {
        console.log(e);
        TipRich.ME.showTTT("Server Busy" + e, "", "", "#ffffff", "#43fed9").doshow();
    };
    Interface_Manager.prototype.checkpayment = function (_point, _orderid, _sign) {
        this.ChargeCheck_HR.on(Laya.Event.COMPLETE, this, this.OncheckpaymentOk);
        this.ChargeCheck_HR.send(CD.Service_URL + "/api_pay_midas/MidasPayment.aspx?action=pay&uid=".concat(User.openid, "&point=").concat(_point, "&session_key=").concat(WM.Session_Key, "&orderid=").concat(_orderid, "&CodeVersion=").concat(CD.CodeVersion, "&sign=").concat(_sign));
    };
    Interface_Manager.prototype.OncheckpaymentOk = function (smsg) {
        console.log("OncheckpaymentOk==", smsg);
    };
    return Interface_Manager;
}());
var Platform;
(function (Platform) {
    Platform.Laya = "Laya";
    Platform.H5 = "H5";
    Platform.Wechat = "Wechat";
    Platform.Android = "Android";
    Platform.Ios = "Ios";
    Platform.Wanyiwan = "Wanyiwan";
    Platform.Baidu = "Baidu";
    Platform.MGC_H5 = "MGC_H5";
    Platform.AD_H5 = "AD_H5";
})(Platform || (Platform = {}));
var PingTai;
(function (PingTai) {
    PingTai.qq = "qq";
    PingTai.weixin = "weixin";
    PingTai.phone = "phone"; //手机平台
    PingTai.game = "game"; //tlys 测试
    PingTai.MGC_H5 = "MGC_H5";
    PingTai.QTT_H5 = "QTT_H5";
    PingTai.AD_H5 = "AD_H5";
    PingTai.H5 = "H5";
    PingTai.ZM_H5 = "ZM_H5";
    PingTai.HAGO_H5 = "HAGO_H5";
    PingTai.GOOGLE_H5 = "GOOGLE_H5";
    PingTai.WY_H5 = "WY_H5";
})(PingTai || (PingTai = {}));
var Language;
(function (Language) {
    Language.eng = "eng";
    Language.ch = "ch";
    Language.zh = "zh"; //繁体
    Language.fr = "fr"; //法语
    Language.de = "de"; //德语
    Language.it = "it"; //意大利语
    Language.es = "es"; //西班牙语
    Language.pt = "pt"; //葡萄牙语
    Language.ru = "ru"; //俄语
    Language.ja = "ja"; //日语
    Language.ko = "ko"; //韩语
})(Language || (Language = {}));
//国内和国际版本
var BanBen;
(function (BanBen) {
    BanBen.guoji = "guoji";
    BanBen.guonei = "guonei";
})(BanBen || (BanBen = {}));
//# sourceMappingURL=Interface_Manager.js.map