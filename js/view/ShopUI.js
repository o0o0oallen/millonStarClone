/*
* ShopUI;
*/
var ShopUI = /** @class */ (function () {
    function ShopUI() {
        this.gui = null;
        this.hotcost = 20;
        this.dayfreenum = 20;
        this.dayfreemax = 10;
        this.isanishow = true;
        this.getFree = false;
        this.gui = new ui.ShopUIUI;
        ShopUI.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.contentbg.y = Game.centerY + this.gui.contentbg.height / 2 + 50;
        this.gui.buylist.renderHandler = new Laya.Handler(this, this.UpdateDay);
        //this.hotcost = ParamOnline.ME.getNumber("buynoxpcost", this.hotcost);
        this.dayfreenum = ParamOnline.ME.getNumber("freezuannum", this.dayfreenum);
        this.dayfreemax = ParamOnline.ME.getNumber("freezuanmax", this.dayfreemax);
        this.gui.hottip.clickHandler = new Laya.Handler(this, this.ShowHotTip);
        //this.gui.freezuan.on(Laya.Event.CLICK, this, this.ClickFree);
        CD.Language == Language.eng && (this.gui.titlelb1.scale(.55, .55),
            this.gui.titlelb2.scale(.55, .55),
            this.gui.btnlb2.scale(.55, .55));
        CD.Language == Language.ru && (this.gui.titlelb1.scale(.55, .55),
            this.gui.titlelb2.scale(.55, .55),
            this.gui.btnlb2.scale(.55, .55));
        CD.Language == Language.de && (this.gui.titlelb1.scale(.6, .6),
            this.gui.titlelb2.scale(.6, .6),
            this.gui.btnlb2.scale(.55, .55));
        CD.Language == Language.fr && (this.gui.btnlb2.scale(.75, .75));
        CD.Language == Language.it && (this.gui.btnlb2.scale(.85, .85));
        CD.Language == Language.es && (this.gui.btnlb2.scale(.9, .9));
        UIHelper.dohide(this.gui);
    }
    ShopUI.prototype.UpdateDay = function (cell, index) {
        var lb;
        var img;
        var btn;
        var money = new math_BigUInt();
        img = cell.getChildByName("tipimg");
        lb = img.getChildByName("tiplb");
        img.visible = cell.dataSource.rate != "";
        lb.text = cell.dataSource.rate == "" ? "" : "+" + cell.dataSource.rate + "%";
        img = cell.getChildByName("iconimg");
        img.skin = cell.dataSource.icon;
        lb = cell.getChildByName("numlb");
        lb.text = cell.dataSource.reward[1];
        btn = cell.getChildByName("buybtn");
        cell.off(Laya.Event.CLICK, this, this.ClickCharge);
        lb = btn.getChildByName("btnlb");
        lb.text = cell.dataSource.showText;
        cell.on(Laya.Event.CLICK, this, this.ClickCharge, [cell.dataSource.payID, cell.dataSource.cost, cell.dataSource.reward]);
    };
    ShopUI.prototype.SetFreeZuanBG = function () {
        this.gui.freezuantitle.text = Lan.G(5012);
        this.gui.freezuandesclb.text = Lan.G(5013);
        //console.log(Lan.G(5012)+"==="+Lan.G(5013)+"====="+ Lan.G(5008));
        this.dayfreemax - SV.ME.shareCount <= 0 && Game.ME.hideTip("up1");
        this.gui.freezuantimelb.text = SV.ME.shareCount.toString() + "/" + this.dayfreemax.toString();
        this.gui.freezuannumlb.text = this.dayfreenum.toString();
        this.gui.freezuanbtn.off(Laya.Event.CLICK, this, this.ClickFree);
        if (this.dayfreemax - SV.ME.shareCount <= 0) {
            this.gui.freezuanbtn.disabled = true;
        }
        else {
            this.gui.freezuanbtn.disabled = false;
            this.gui.freezuanbtn.on(Laya.Event.CLICK, this, this.ClickFree);
        }
    };
    ShopUI.prototype.UpdateUI = function () {
        this.gui.titlelb.text = Lan.G(5000);
        //列表
        var i;
        var arr = [];
        var xmldata, _info;
        var szreward;
        var _money = "";
        var _showText = "";
        var _PayID = "";
        for (i = 1; i < 7; i++) {
            xmldata = CD.Game.Config_Charge[i.toString()];
            szreward = xmldata.reward.split(",");
            if (CD.BanBen == BanBen.guonei) {
                _money = xmldata.cn_money;
                _PayID = i.toString();
                _showText = Lan.G(5006) + _money;
            }
            else {
                _info = null;
                _money = xmldata.eng_money;
                _PayID = IAPManager.GetProductID(IAPProductID.gem0 + (i - 1).toString());
                _info = IAPManager.GetProductInfo(_PayID, 0);
                if (CD.Platform == Platform.Android) {
                    _showText = _info == null ? Lan.G(5003) : _info.price;
                }
                else if (CD.Platform == Platform.Ios) {
                    _showText = _info == null ? Lan.G(5003) : IAPManager.ShowMoney(_info.sy) + _info.price;
                }
            }
            arr.push({
                idx: i,
                rate: xmldata.rate,
                reward: szreward,
                icon: "relifetryfu/" + i.toString() + ".png",
                cost: _money,
                showText: _showText,
                payID: _PayID,
            });
        }
        this.gui.buylist.array = arr;
        //热卖
        this.gui.titlelb1.text = Lan.G(5001);
        this.gui.desclb1.text = Lan.G(5002);
        //console.log("shopui******"+this.gui.btnlb1.font+"***"+Lan.G(5006)+"***"+this.hotcost+"***"+this.gui.btnlb1.bold);
        if (CD.BanBen == BanBen.guonei) {
            xmldata = CD.Game.Config_Charge["1001"];
            this.hotcost = xmldata.cn_money;
            this.gui.btnlb1.text = Lan.G(5006) + this.hotcost.toString();
        }
        else {
            _info = null;
            _PayID = IAPManager.GetProductID(IAPProductID.one_time_purchase);
            _info = IAPManager.GetProductInfo(_PayID, 0);
            if (CD.Platform == Platform.Android) {
                this.gui.btnlb1.text = _info == null ? Lan.G(5003) : _info.price;
            }
            else if (CD.Platform == Platform.Ios) {
                this.gui.btnlb1.text = _info == null ? Lan.G(5003) : IAPManager.ShowMoney(_info.sy) + _info.price;
            }
        }
        this.gui.hotsale.off(Laya.Event.CLICK, this, this.ClickHotBuy);
        if (SV.ME.buyNoXp == 1 || (CD.subScribeType > 0 && CD.BanBen == BanBen.guoji)) {
            this.gui.btn1.visible = false;
            this.gui.havelb.text = Lan.G(5011);
        }
        else {
            this.gui.btn1.visible = true;
            this.gui.havelb.text = "";
            this.gui.hotsale.on(Laya.Event.CLICK, this, this.ClickHotBuy);
        }
        //免费
        this.gui.titlelb2.text = Lan.G(5004);
        this.gui.desclb2.text = this.dayfreenum.toString();
        this.gui.btnlb2.text = Lan.G(5004);
        this.ResetTipShow();
        this.dayfreemax - SV.ME.shareCount <= 0 && Game.ME.hideTip("up1");
        this.gui.btntiplb2.text = (this.dayfreemax - SV.ME.shareCount).toString();
        this.gui.freezuan.off(Laya.Event.CLICK, this, this.ClickFree);
        if (this.dayfreemax - SV.ME.shareCount <= 0) {
            this.gui.btn2.disabled = true;
        }
        else {
            this.gui.btn2.disabled = false;
            this.gui.freezuan.on(Laya.Event.CLICK, this, this.ClickFree);
        }
    };
    ShopUI.prototype.ResetTipShow = function () {
        this.gui.btntip2.visible = this.dayfreemax - SV.ME.shareCount > 0 && AdsManager.isLoadedRewardVideo();
    };
    ShopUI.prototype.doshow = function (isani) {
        UIHelper.showHide(true, this.gui);
        // if (CD.BanBen == BanBen.guonei) {
        //     if( CD.Platform != Platform.MGC_H5)
        //     {
        //         IM.api_aibei_checknodeal();
        //     }
        // }else if (CD.BanBen == BanBen.guoji) {
        //     if (!IAPManager.bSubcription) {
        //         if (CD.Platform == Platform.Android) {
        //             try { IAPManager.reloadedStore(); } catch (e) { }
        //         }
        //     }
        // }
        // if(CD.BanBen == BanBen.guonei){
        isani = true;
        this.gui.freezuanbg.visible = true;
        this.gui.contentbg.visible = false;
        this.SetFreeZuanBG();
        // }else{
        //     this.gui.freezuanbg.visible = false;
        //     this.gui.contentbg.visible = true;
        //     this.UpdateUI();
        // }
        this.isanishow = isani;
        if (isani) {
            UIHelper.doshow(Game.ME.gui.black);
            Game.ME.gui.black.alpha = .6;
        }
        // if (isani) {
        //     this.gui.contentbg.scale(0, 0, true);
        //     this.gui.contentbg.alpha = 0.2;
        //     Laya.Tween.to(this.gui.contentbg, { scaleX: 1, scaleY: 1, alpha: 1 }, Game.ME.uiAnimTime, Laya.Ease.linearNone);
        // } else {
        //     this.gui.contentbg.scale(1, 1, true);
        //     this.gui.contentbg.alpha = 1;
        // }
        // Laya.timer.loop(1000, this, this.UpdateUI);
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnShowZMAd("j0tn25oam6", Game.ME, function () {
                //console.log("横幅广告展示成功===");
            }, function () {
                //console.log("横幅广告展示失败===");
            });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.GOOGLE_H5) {
            AdsManager.OnShowGooldAd_Inter('pause');
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.showBanner_wy();
        }
    };
    ShopUI.prototype.dohide = function () {
        // if(this.isanishow){
        //     Laya.Tween.to(this.gui.contentbg, { scaleX: 0, scaleY: 0, alpha: 0.2 }, Game.ME.uiAnimTime, Laya.Ease.linearNone, Laya.Handler.create(this, this.HideOver));
        //     Game.ME.ShowFuncBtn();
        // }else{
        this.HideOver();
        if (this.isanishow) {
            UIHelper.dohide(Game.ME.gui.black);
        }
        // }
        // UIHelper.dohide(Game.ME.gui.black);
        //Game.ME.gui.b1icon.skin = "ui4/sd.png";
        // Laya.timer.clear(this, this.UpdateUI);
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnHideZMBanner();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.hideBanner_wy();
        }
    };
    ShopUI.prototype.HideOver = function () {
        //console.log("hideover****");
        //UIHelper.dohide(this.gui);
        UIHelper.dohide(this.gui);
    };
    ShopUI.prototype.ClickHotBuy = function () {
        //console.log("ClickHotBuy*******");
        this.ConfirmHotBuy();
    };
    ShopUI.prototype.ShowHotTip = function () {
        //console.log("ShowHotTip*******");
        var ns = 1;
        CD.Language == Language.de && (ns = .7);
        CD.Language == Language.it && (ns = .8);
        CD.Language == Language.fr && (ns = .8);
        CD.Language == Language.ru && (ns = .6);
        CD.Language == Language.es && (ns = .75);
        CD.Language == Language.pt && (ns = .75);
        CD.Language == Language.ja && (ns = .8);
        ShopTipWnd.ME.SetMsgShow(Lan.G(5007), Lan.G(5008), Lan.G(5009), Laya.Handler.create(this, this.ConfirmHotBuy), Lan.G(5010), null, false, ns);
    };
    ShopUI.prototype.ConfirmHotBuy = function () {
        //console.log("ConfirmHotBuy*******");
        if (CD.BanBen == BanBen.guonei) {
            TipRich.ME.showT(Lan.G(1041)).doshow();
            // Laya.timer.once(100, this, () => {
            //     ShopTipWnd.ME.SetPayShow(Laya.Handler.create(this, this.GoToHotBuy));
            // });
        }
        else if (IAPManager.bSubcription) {
            IAPManager.purchaseProduct(IAPManager.GetProductID(IAPProductID.one_time_purchase), 0);
            Game.ME.ShowLoadMask(true, 1);
        }
    };
    ShopUI.prototype.GoToHotBuy = function (type) {
        //console.log("GoToHotBuy******", type);
        var szpay = [0, 401, 403, 4, 116];
        var payid = szpay[type];
        IM.OnCharge(this.hotcost, 0, "1001", Lan.G(5002), "shop", payid);
        Game.ME.ShowLoadMask(true, 1);
    };
    ShopUI.prototype.ClickFree = function () {
        var _this = this;
        //console.log("ClickFree*******"+Game.ME.isVideo+"***"+this.getFree);
        //UI.OnWinMsgUI("this.getFree:"+this.getFree+"===SV.ME.shareCount:"+SV.ME.shareCount+"==this.dayfreemax:"+this.dayfreemax);
        if (this.getFree || SV.ME.shareCount >= this.dayfreemax)
            return;
        //UI.OnWinMsgUI("IsOpenVideo:"+ParamOnline.ME.getNumber("IsOpenVideo", 1)+"====CD.Platform :"+CD.Platform);
        if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
            if (CD.Platform == Platform.MGC_H5) {
                //UI.OnWinMsgUI("点击拉起微信激励视频==freezuan");
                MgcM.OnShowRewardVideo("freezuan");
                return;
            }
            else if (CD.Platform == Platform.H5) {
                if (CD.PingTai == PingTai.QTT_H5) {
                    console.log("点击拉起微信激励视频==freezuan");
                    Qtt_H5_Manager.ME.OnShowRewardVideo("freezuan");
                    return;
                }
                else if (CD.PingTai == PingTai.ZM_H5) {
                    AdsManager.OnShowZMAd("h1hvqfet8u", ShopUI.ME, function () {
                        Game.ME.OnGetAdsOverReward("freezuan", "ads");
                    }, function () {
                        ShopUI.ME.AddFreeZuan();
                    });
                    return;
                }
                else if (CD.PingTai == PingTai.WY_H5) {
                    AdsManager.showRewardedVideo_wy(ShopUI.ME, function () {
                        Game.ME.OnGetAdsOverReward("freezuan", "ads");
                    }, function () {
                        //ShopUI.ME.AddFreeZuan();
                    });
                    return;
                }
                else if (CD.PingTai == PingTai.HAGO_H5) {
                    HaGoManager.ME.OnShowRewardVideo("freezuan", ShopUI.ME, function () {
                        //console.log("ShopUI.ME.AddFreeZuan===");
                        ShopUI.ME.AddFreeZuan();
                    });
                    return;
                }
                else if (CD.PingTai == PingTai.GOOGLE_H5) {
                    AdsManager.OnShowGooleAd("freezuan", BoxRewardWnd.ME, function () {
                        Game.ME.OnGetAdsOverReward("freezuan", "ads");
                    }, function () {
                        _this.AddFreeZuan();
                    });
                    return;
                }
            }
            else if (CD.Platform == Platform.AD_H5) {
                //奖励广告
                Game.ME.rewardAd_H5("freezuan");
                return;
            }
            else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                this.getFree = true;
                if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                    return;
                Game.ME.playVideoLoadingEff(this.gui.freezuanload, this.gui.freezuanloadeff, this.gui.freezuanloadlb, this.gui.btn2);
                //拉起视频广告
                AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                AdsManager.showRewardVideoAds(true, "freezuan");
                Game.ME.isVideo = 9;
                return;
            }
        }
        this.AddFreeZuan();
    };
    ShopUI.prototype.AddFreeZuan = function () {
        var _this = this;
        //console.log("AddFreeZuan*****"+Game.ME.isVideo);
        Laya.timer.once(500, this, function () {
            _this.getFree = false;
        });
        if (SV.ME.shareCount >= this.dayfreemax)
            return;
        SV.ME.shareCount += 1;
        SV.ME.dosave(false, 83);
        var point;
        // if(CD.BanBen == BanBen.guonei){
        point = this.gui.freezuanicon.localToGlobal(new Laya.Point(0, 0));
        this.SetFreeZuanBG();
        // }else{
        //     point = this.gui.btn2.localToGlobal(new Laya.Point(0, 0));
        //     this.UpdateUI();
        // }
        Game.ME.animAddGold(this.dayfreenum, point.x, point.y, 10, "freezuan");
        (this.dayfreemax - SV.ME.shareCount > 0) && SV.ME.level > Game.ME.shopTipLvl ? Game.ME.gui.shopTip.visible = true : Game.ME.gui.shopTip.visible = false;
    };
    ShopUI.prototype.ClickCharge = function (idx, cost, reward) {
        if (CD.BanBen == BanBen.guonei) {
            TipRich.ME.showT(Lan.G(1041)).doshow();
            //ShopTipWnd.ME.SetPayShow(Laya.Handler.create(this, this.GoToCharge, [idx, cost, reward]));
        }
        else if (IAPManager.bSubcription) {
            IAPManager.purchaseProduct(idx, 0);
            Game.ME.ShowLoadMask(true, 1);
        }
    };
    ShopUI.prototype.GoToCharge = function (idx, cost, reward, type) {
        // 指定支付方式的编号
        // "支付宝,401"
        // "微信支付,403"
        // "银联支付,4"
        // "QQ钱包,116"
        //console.log("ClickCharge******", idx, type);
        var szpay = [0, 401, 403, 4, 116];
        var szreward = reward;
        var szGold = szreward[1];
        var money = cost;
        var payid = szpay[type];
        //money = 0.01;//测试
        IM.OnCharge(money, szGold, idx.toString(), szGold + "钻石", "shop", payid);
        Game.ME.ShowLoadMask(true, 1);
    };
    ShopUI.prototype.CloseUI = function () {
        this.dohide();
    };
    ShopUI.ME = null;
    return ShopUI;
}());
//# sourceMappingURL=ShopUI.js.map