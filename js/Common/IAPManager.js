/*
* name;
*/
var IAPManager = /** @class */ (function () {
    // public static NonSubcriptionInfo: any;
    function IAPManager() {
    }
    IAPManager.init = function () {
        if (CD.Platform == Platform.Android) {
            var tempobj;
            // console.log("初始化laya支付管理类");
            IAPManager.iapController = Laya.PlatformClass.createClass("kkiap.LayaIAPManager"); //创建对应安卓购买类
            IAPManager.iapController.callWithBack(this.iapCallbackInfo, "setListener");
        }
        else if (CD.Platform == Platform.Ios) {
            // console.log("=======初始化ios laya支付管理类");
            IAPManager.iapController = Laya.PlatformClass.createClass("KKIAPManager").newObject(); //创建对应ios广告对象
            IAPManager.iapController.callWithBack(function (state) {
                // console.log("=====callWithBack:" + state);
                IAPManager.iapCallbackInfo(state);
            }, "setListener");
        }
    };
    // public static restorePurchase() {
    //     if (CD.Platform == Platform.Ios) {
    //         IAPManager.IapControllerCall("restore");
    //     }
    // }
    IAPManager.get = function () {
        if (CD.Platform == Platform.Android) {
            var tempobj;
            tempobj = IAPManager.userIAPData();
            IAPManager._deal_SubcriptionInfo(tempobj);
            tempobj = IAPManager.queryProductInfo();
            // console.log("==productinfo:" + tempobj);
            IAPManager._deal_productinfo(tempobj);
        }
        else if (CD.Platform == Platform.Ios) {
            // console.log("======querySubcriptionInfo");
            IAPManager.IapControllerCall("querySubcriptionInfo");
        }
    };
    IAPManager.iapCallbackInfo = function (callstr) {
        // console.log("====iapCallbackInfo" + callstr);
        // console.log("====iapCallbackLength" + callstr.length);
        Game.ME && Game.ME.ShowLoadMask(false);
        var _fgetjson = JSON.parse(callstr);
        if (_fgetjson) {
            var type = _fgetjson.type;
            var data = _fgetjson.data;
            console.log("type" + type);
            switch (type) {
                case "ok":
                    //IAPManager.buyItemOK(data, 1);
                    break;
                case "Restore":
                    //IAPManager.buyItemOK(data, 0);
                    break;
                case "ordersearcherror":
                    //订阅查询失败
                    break;
                case "cannotorder":
                    //不支持订阅功能
                    break;
                case "searchordererror":
                    //  查询订阅错误 , 错误码 =data
                    break;
                case "usercancel":
                    //  用户取消购买流程
                    TipRich.ME.showT(Lan.G(7014)).doshow();
                    break;
                case "payerror":
                    // 支付失败 , 原因 =data
                    TipRich.ME.showT(Lan.G(7014)).doshow();
                    break;
                case "signerror":
                    //购买结果签名失败, 一般是作弊
                    TipRich.ME.showT(Lan.G(7014)).doshow();
                    break;
                //-----------------------ios
                case "iosQueryResult":
                    IAPManager._deal_productinfo(data);
                    break;
                case "iosSubcriptionInfo":
                    IAPManager._deal_SubcriptionInfo(data);
                    break;
                case "RestoreComplete":
                    TipRich.ME.showT(Lan.G(1048)).doshow();
                    break;
            }
        }
    };
    IAPManager._deal_SubcriptionInfo = function (data) {
        // console.log("==isSubsciptionUser1:" + data);
        var uIAPData = JSON.parse(data);
        // console.log("==isSubsciptionUser2:" + uIAPData);
        var tempobj = uIAPData.isSubsciptionUser;
        CD.subScribeType = this.checkisTrue(tempobj);
        // console.log("==isSubsciptionUser:" + tempobj + ".." + CD.subScribeType);
        tempobj = uIAPData.isRemoveAdsUser;
        CD.buyNoXp = this.checkisTrue(tempobj);
        // console.log("==isRemoveAdsUser:" + tempobj + ".." + CD.buyNoXp);
        tempobj = uIAPData.isCancelScription;
        CD.cancelScription = this.checkisTrue(tempobj);
        // console.log("==isCancelScription" + tempobj + ".." + CD.cancelScription);
        SV.ME.buyNoXp = CD.buyNoXp == 1 || CD.subScribeType == 1 ? 1 : 0;
        if (Game.ME != null) {
            //回调数据处理按钮显示
            UIHelper.showHide(CD.subScribeType == 0 && CD.BanBen == BanBen.guoji, Game.ME.gui.subscribeBtn);
        }
    };
    IAPManager.checkisTrue = function (tempobj) {
        if (CD.Platform == Platform.Android) {
            return tempobj ? 1 : 0;
        }
        else if (CD.Platform == Platform.Ios) {
            return tempobj == "1" ? 1 : 0;
        }
    };
    IAPManager._deal_productinfo = function (data) {
        IAPManager.arrProductInfo = JSON.parse(data);
        if (IAPManager.arrProductInfo != undefined && IAPManager.arrProductInfo.length > 1) {
            IAPManager.bSubcription = true;
            // Game.ME && Game.ME.CheckSubScription();
        }
    };
    IAPManager.buyItemOK = function (proid, iwhere) {
        //console.log("buyitemok***"+proid+"***"+iwhere);
        var stemp = proid.replace(IAPManager.GetProductIDKey(), "");
        var _money, _type, _id;
        switch (stemp) {
            case IAPProductID.weekly:
                _id = 1003;
                SubScriptionWnd.ME.OnSubscribOk(_id, iwhere);
                _type = 1;
                break;
            case IAPProductID.month:
                _id = 1004;
                SubScriptionWnd.ME.OnSubscribOk(_id, iwhere);
                _type = 1;
                break;
            case IAPProductID.year:
                _id = 1005;
                SubScriptionWnd.ME.OnSubscribOk(_id, iwhere);
                _type = 1;
                break;
            case IAPProductID.one_time_purchase:
                _id = 1001;
                IM.BuyNoAdsOk();
                _type = 1;
                break;
            default:
                if (stemp.indexOf(IAPProductID.gem0) == 0) {
                    var sid = stemp.replace(IAPProductID.gem0, "");
                    sid = (parseInt(sid) + 1).toString();
                    IM.BuyChargeOk(sid);
                    _id = sid;
                    _type = 0;
                }
                else {
                    return;
                }
                break;
        }
        if (iwhere == 1) {
            _money = CD.Game.Config_Charge[_id.toString()].eng_money;
            //_money = IAPManager.GetProductInfo(productionName, _type).;
            var dataTDGA = {
                "goodsId": stemp,
                "paymoney": _money,
                "paytime": new Date().getTime()
            };
            TK.track("paylog", dataTDGA);
            if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                if (_type == 0) {
                    stemp = IAPProductID.gem0;
                }
                AdsManager.logAdjustRevenue(stemp, _money);
            }
        }
    };
    // private static loadPlatform() {
    //     if (Laya.Browser.window.conch) {
    //         if (Laya.Browser.window.conch.config.getOS() == "Conch-android") {
    //             CD.Platform == Platform.Android = true;
    //         } else if (Laya.Browser.window.conch.config.getOS() == "Conch-ios") {
    //             CD.Platform == Platform.Android = false;
    //         }
    //     }
    // }
    /**
     *
     * @param productID 商品id
     * @param value 类型 0:非订阅类型商品 1:订阅类型商品
     */
    IAPManager.purchaseProduct = function (productID, value) {
        if (CD.Platform == Platform.Android) {
            var _info = IAPManager.GetProductInfo(productID, value);
            if (_info != null) {
                // console.log("购买" + productID + "类型" + value);
                IAPManager.iapController.call("purchaseItem", productID, value);
            }
        }
        else {
            var _info = IAPManager.GetProductInfo(productID, value);
            if (_info != null) {
                // console.log("=======BUY" + productID + "TYPE" + _info);
                IAPManager.IapControllerCall("purchaseItem", productID);
            }
        }
        //IAPManager.iapCallbackInfo(productID);
    };
    IAPManager.userIAPData = function () {
        if (CD.Platform == Platform.Android) {
            return IAPManager.iapController.call("userIAPData");
        }
        else {
        }
    };
    // public static isSubsciptionUser(): boolean {
    //     if (CD.Platform == Platform.Android) {
    //         return IAPManager.iapController.call("isSubsciptionUser");
    //     } else {
    //     }
    // }
    // public static isRemoveAdsUser(): boolean {
    //     if (CD.Platform == Platform.Android) {
    //         return IAPManager.iapController.call("isRemoveAdsUser");
    //     } else {
    //     }
    // }
    // public static isCancelScription(): boolean {
    //     if (CD.Platform == Platform.Android) {
    //         return IAPManager.iapController.call("isCancelScription");
    //     } else {
    //     }
    // }
    //[SkuDetails: {"productId":"com.gameinlife.ball.blast.games.gem01","type":"inapp","price":"US$4.99","price_amount_micros":4990000,"price_currency_code":"USD","title":"Purchase 550 gem (Shoot it - Ball Blast Game)","description":"Purchase 550 gem"}, SkuDetails: {"productId":"com.gameinlife.ball.blast.games.gem02","type":"inapp","price":"US$9.99","price_amount_micros":9990000,"price_currency_code":"USD","title":"Purchase 1150 gem (Shoot it - Ball Blast Game)","description":"Purchase 1150 gem"}, SkuDetails: {"productId":"com.gameinlife.ball.blast.games.gem03","type":"inapp","price":"US$29.99","price_amount_micros":29990000,"price_currency_code":"USD","title":"Purchase 3600 gem (Shoot it - Ball Blast Game)","description":"Purchase 3600 gem"}, SkuDetails: {"productId":"com.gameinlife.ball.blast.games.gem04","type":"inapp","price":"US$49.99","price_amount_micros":49990000,"price_currency_code":"USD","title":"Purchase 6500 gem (Shoot it - Ball Blast Game)","description":"Purchase 6500 gem"}, SkuDetails: {"productId":"com.gameinlife.ball.blast.games.gem05","type":"inapp","price":"US$99.99","price_amount_micros":99990000,"price_currency_code":"USD","title":"Purchase 15000 gem (Shoot it - Ball Blast Game)","description":"Purchase 15000 gem"}]
    IAPManager.queryProductInfo = function () {
        if (CD.Platform == Platform.Android) {
            return IAPManager.iapController.call("queryProductInfo");
        }
        else {
        }
    };
    IAPManager.reloadedStore = function () {
        if (CD.Platform == Platform.Android) {
            IAPManager.iapController.call("reloadedStore");
            IAPManager.get();
        }
        else if (CD.Platform == Platform.Ios) {
            console.log("=====reloadedStore");
            IAPManager.IapControllerCall("reloadedStore");
        }
    };
    //  public static doIapCall(f, t = undefined) {
    //     if (CD.Platform == Platform.Ios && t != undefined) {
    //         f = f + ":";
    //     }
    //     if (AdsManager.adsController) {
    //         try {
    //             if(t == undefined)
    //                 AdsManager.adsController.call(f);
    //             else
    //                 AdsManager.adsController.call(f, t);
    //         }
    //         catch (e) { }
    //     }
    // }
    IAPManager.GetProductIDKey = function () {
        if (CD.Platform == Platform.Android) {
            return IAPManager.PACKGENAME_Android + ".";
        }
        else {
            return IAPManager.PACKGENAME_Ios + ".";
        }
    };
    IAPManager.GetProductID = function (type) {
        return IAPManager.GetProductIDKey() + type;
    };
    IAPManager.GetProductInfo = function (skey, type) {
        var szinfo = null;
        var _info = null;
        if (IAPManager.bSubcription) {
            szinfo = IAPManager.arrProductInfo;
            for (var i = 0; i < szinfo.length; i++) {
                _info = szinfo[i];
                if (_info.pid == skey)
                    return _info;
            }
        }
        return null;
    };
    IAPManager.IapControllerCall = function (f, t) {
        if (t === void 0) { t = undefined; }
        if (CD.Platform == Platform.Ios && t != undefined) {
            f = f + ":";
        }
        if (IAPManager.iapController) {
            try {
                if (t == undefined)
                    IAPManager.iapController.call(f);
                else
                    IAPManager.iapController.call(f, t);
            }
            catch (e) { }
        }
    };
    IAPManager.ShowMoney = function (f) {
        if (CD.Platform == Platform.Ios) {
            if (f == "wqU=") {
                return "CNY ";
            }
            else {
                try {
                    return cFun.baseDecode(f);
                }
                catch (ex) { }
            }
        }
        return "";
    };
    // static isAndroid: boolean = false;
    IAPManager.PACKGENAME_Android = "com.gameinlife.ball.blast.games";
    IAPManager.PACKGENAME_Ios = "com.playmil.starblast.games";
    IAPManager.bSubcription = false;
    return IAPManager;
}());
var IAPProductID;
(function (IAPProductID) {
    IAPProductID.weekly = "weekly";
    IAPProductID.month = "month";
    IAPProductID.year = "year";
    IAPProductID.one_time_purchase = "one_time_purchase";
    IAPProductID.gem0 = "gem0";
})(IAPProductID || (IAPProductID = {}));
//# sourceMappingURL=IAPManager.js.map