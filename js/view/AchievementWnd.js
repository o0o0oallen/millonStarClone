/*
* name;
*/
var AchievementWnd = /** @class */ (function () {
    function AchievementWnd() {
        this.gui = null;
        this.needpasslevel = 25;
        this.nowshow = -1;
        this.advCount = 0;
        this.tmpTip = [false, false, false, false];
        this.dicArr = [[], [], [], []];
        this.gui = new ui.AchievementUIUI;
        AchievementWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.Title.text = Lan.G(100000);
        this.gui.txt0.text = Lan.G(100001);
        this.gui.txt1.text = Lan.G(100002);
        this.gui.txt2.text = Lan.G(100003);
        this.gui.txt3.text = Lan.G(100004);
        CD.Language == Language.ja && (this.gui.txt0.scale(.8, .8),
            this.gui.txt1.scale(.8, .8),
            this.gui.txt2.scale(.8, .8),
            this.gui.txt3.scale(.8, .8));
        CD.Language == Language.ru && (this.gui.txt0.scale(.6, .6),
            this.gui.txt1.scale(.6, .6),
            this.gui.txt2.scale(.6, .6),
            this.gui.txt3.scale(.6, .6));
        CD.Language == Language.fr && (this.gui.txt0.scale(.75, .75),
            this.gui.txt1.scale(.75, .75),
            this.gui.txt2.scale(.75, .75),
            this.gui.txt3.scale(.75, .75));
        CD.Language == Language.de && (this.gui.txt0.scale(.9, .9),
            this.gui.txt1.scale(.9, .9),
            this.gui.txt2.scale(.9, .9),
            this.gui.txt3.scale(.9, .9));
        CD.Language == Language.it && (this.gui.txt0.scale(.7, .7),
            this.gui.txt1.scale(.7, .7),
            this.gui.txt2.scale(.7, .7),
            this.gui.txt3.scale(.7, .7));
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.contentbg.y = Game.centerY + this.gui.contentbg.height / 2 + 50;
        this.gui.sw0.on(Laya.Event.CLICK, this, this.OnClickButEvent, [0]);
        this.gui.sw1.on(Laya.Event.CLICK, this, this.OnClickButEvent, [1]);
        this.gui.sw2.on(Laya.Event.CLICK, this, this.OnClickButEvent, [2]);
        this.gui.sw3.on(Laya.Event.CLICK, this, this.OnClickButEvent, [3]);
        // if (SV.ME.achJiLu.length > 0) {
        //     SV.ME.achJiLu.clear();
        // }
        // 老玩家旧数据初始化
        if (SV.ME.achJiLu.length == 0) {
            //目标关卡5
            this.setAch(5, 1, SV.ME.level - 1);
            //主机升级6
            this.setAch(6, 1, SV.ME.lCount);
            this.setAch(6, 2, SV.ME.lDamage);
            //金币升级7
            this.setAch(7, 1, SV.ME.lJiaZhi);
            this.setAch(7, 2, SV.ME.lRiChang);
            //副武器升级52
            for (var i = 1; i <= 6; i++) {
                this.setAch(52, i, SV.ME.levelFuDamage[i - 1]);
            }
            SV.ME.dosave(false, 41);
        }
        // this.setAch(6, 1, 9999);
        // this.setAch(6, 2, 9999);
        // var a = new math_BigUInt().setByShortString("2");
        // var b = new math_BigUInt().setByShortString("1");
        //  console.log("a~~~~~~~~~~~~~~", a.getString());
        // console.log("b~~~~~~~~~~~~~~", b.getString());
        // var c = b.bigdivision(a);
        // console.log("1~~~~~~~~~~~~~~", c);
        this.gui.ItemList0.itemRender = AchievementRDWnd;
        // 使用但隐藏滚动条
        this.gui.ItemList0.vScrollBarSkin = "";
        this.gui.ItemList0.scrollBar.elasticDistance = 500;
        this.gui.ItemList0.scrollBar.elasticBackTime = 300;
        this.gui.ItemList0.renderHandler = new Laya.Handler(this, this.Update_Data_0);
        // this.gui.ItemList1.itemRender = AchievementRDWnd;
        // // 使用但隐藏滚动条
        // this.gui.ItemList1.vScrollBarSkin = "";
        // this.gui.ItemList1.scrollBar.elasticDistance = 500;
        // this.gui.ItemList1.scrollBar.elasticBackTime = 300;
        // this.gui.ItemList1.renderHandler = new Laya.Handler(this, this.Update_Data_1);
        // this.gui.ItemList2.itemRender = AchievementRDWnd;
        // // 使用但隐藏滚动条
        // this.gui.ItemList2.vScrollBarSkin = "";
        // this.gui.ItemList2.scrollBar.elasticDistance = 500;
        // this.gui.ItemList2.scrollBar.elasticBackTime = 300;
        // this.gui.ItemList2.renderHandler = new Laya.Handler(this, this.Update_Data_2);
        // this.gui.ItemList3.itemRender = AchievementRDWnd;
        // // 使用但隐藏滚动条
        // this.gui.ItemList3.vScrollBarSkin = "";
        // this.gui.ItemList3.scrollBar.elasticDistance = 500;
        // this.gui.ItemList3.scrollBar.elasticBackTime = 300;
        // this.gui.ItemList3.renderHandler = new Laya.Handler(this, this.Update_Data_3);
        this.needpasslevel = ParamOnline.ME.getNumber("acheve_open", 25);
        UIHelper.dohide(this.gui);
    }
    //更新列表
    AchievementWnd.prototype.Update_Data_0 = function (cell, index) {
        // console.log("rander0", index);
        var dpData = this.gui.ItemList0.array[index];
        cell.SetUI(dpData);
    };
    // private Update_Data_1(cell: AchievementRDWnd, index: number): void {
    //     // console.log("rander1", index);
    //     var dpData: any = this.gui.ItemList0.array[index];
    //     cell.SetUI(dpData);
    // }
    // private Update_Data_2(cell: AchievementRDWnd, index: number): void {
    //     // console.log("rander2", index);
    //     var dpData: any = this.gui.ItemList0.array[index];
    //     cell.SetUI(dpData);
    // }
    // private Update_Data_3(cell: AchievementRDWnd, index: number): void {
    //     // console.log("rander3", index);
    //     var dpData: any = this.gui.ItemList0.array[index];
    //     cell.SetUI(dpData);
    // }
    //更新列表end
    AchievementWnd.prototype.dohide = function () {
        //Laya.Tween.to(this.gui.contentbg, { scaleX: 0, scaleY: 0, alpha: 0.2 }, Game.ME.uiAnimTime, Laya.Ease.linearNone, Laya.Handler.create(this, this.HideOver));
        this.HideOver();
        UIHelper.dohide(Game.ME.gui.black);
        //Game.ME.ShowFuncBtn();
        //Game.ME.gui.b3icon.skin = "ui4/cj.png";
        var nnum = ParamOnline.ME.getNumber("insertads_achieve", 5);
        //console.log("hideAllP*****"+nnum+"*****"+this.fuUpCount);
        if (nnum > 0 && this.advCount >= nnum) {
            Game.ME.CheckInsertAds("achieveAds");
        }
        this.advCount = 0;
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnHideZMBanner();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
            HaGoManager.ME.OnHideBannerAd();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.GOOGLE_H5) {
            AdsManager.OnShowGooldAd_Inter('pause');
        }
        else if (CD.PingTai == PingTai.WY_H5) {
            AdsManager.hideBanner_wy();
        }
    };
    AchievementWnd.prototype.HideOver = function () {
        UIHelper.dohide(this.gui);
    };
    AchievementWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    AchievementWnd.prototype.doshow = function (n) {
        console.log("===111===doshow=======");
        if (n == 1) {
            //MSound.ME.playSoundLimit("w_dianji");
            this.needpasslevel = ParamOnline.ME.getNumber("acheve_open", 25);
        }
        if (!SV.ME.isDadian(18)) {
            SV.ME.doDadianMore(18, "btnclick", { btnName: "Achievement", level: SV.ME.level });
        }
        if (SV.ME.level <= this.needpasslevel) {
            TipRich.ME.showT(Lan.G(100008, [this.needpasslevel])).doshow();
            return false;
        }
        UIHelper.showHide(true, this.gui);
        if (this.nowshow == -1) {
            this.nowshow = 0;
        }
        if (n == 1) {
            if (this.tmpTip[this.nowshow] == false) {
                for (var i = 0; i < this.tmpTip.length; i++) {
                    if (this.tmpTip[i] == true) {
                        this.nowshow = i;
                        break;
                    }
                }
            }
            this.advCount = 0;
        }
        if (n == 1) {
            UIHelper.doshow(Game.ME.gui.black);
            Game.ME.gui.black.alpha = .6;
        }
        //Game.ME.gui.b3icon.skin = "ui4/fh.png";
        // if (n == 1) {
        //     this.gui.contentbg.scale(0, 0, true);
        //     this.gui.contentbg.alpha = 0.2;
        //     Laya.Tween.to(this.gui.contentbg, { scaleX: 1, scaleY: 1, alpha: 1 }, Game.ME.uiAnimTime, Laya.Ease.linearNone);
        // }
        this.OnClickButEvent(this.nowshow);
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnShowZMAd("j0tn25oam6", Game.ME, function () {
                //console.log("横幅广告展示成功===");
            }, function () {
                //console.log("横幅广告展示失败===");
            });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
            HaGoManager.ME.OnShowBannerAd();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.showBanner_wy();
        }
        return true;
    };
    AchievementWnd.prototype.OnClickButEvent = function (nType) {
        // console.log("nType", nType);
        this.nowshow = nType;
        var datajson = this.getdata();
        // var m_FloorNum = datajson.length;
        var dygH = 237;
        switch (nType) {
            case 0: //排行
                // this.gui.ItemList0.visible = true;
                // this.gui.ItemList1.visible = false;
                // this.gui.ItemList2.visible = false;
                // this.gui.ItemList3.visible = false;
                this.gui.sw0.skin = "ui2/xuanzhong.png";
                this.gui.sw1.skin = "";
                this.gui.sw2.skin = "";
                this.gui.sw3.skin = "";
                // this.gui.ItemList0.array = datajson;
                // this.gui.ItemList0.repeatY = Math.ceil(this.gui.ItemList0.height / dygH);
                // console.log("this.gui.ItemList0.height", this.gui.ItemList0.height,this.gui.ItemList0.repeatY);
                // if (this.gui.ItemList0.height > 1690) {
                //     // if (this.gui.ItemList0.scrollBar.max > this.gui.ItemList0.height) {
                //     //     this.gui.ItemList0.scrollBar.max -= 378;
                //     // }
                //     // else {
                //     //     this.gui.ItemList0.scrollBar.max = 0;
                //     // }
                // }
                break;
            case 1: //
                // this.gui.ItemList0.visible = false;
                // this.gui.ItemList1.visible = true;
                // this.gui.ItemList2.visible = false;
                // this.gui.ItemList3.visible = false;
                this.gui.sw0.skin = "";
                this.gui.sw1.skin = "ui2/xuanzhong.png";
                this.gui.sw2.skin = "";
                this.gui.sw3.skin = "";
                // this.gui.ItemList1.array = datajson;
                // this.gui.ItemList1.repeatY = Math.ceil(this.gui.ItemList1.height / dygH);
                // if (this.gui.ItemList1.height > 1690) {
                //     if (this.gui.ItemList1.scrollBar.max > this.gui.ItemList1.height) {
                //         this.gui.ItemList1.scrollBar.max -= 378;
                //     }
                //     else {
                //         this.gui.ItemList1.scrollBar.max = 0;
                //     }
                // }
                break;
            case 2: //
                // this.gui.ItemList0.visible = false;
                // this.gui.ItemList1.visible = false;
                // this.gui.ItemList2.visible = true;
                // this.gui.ItemList3.visible = false;
                this.gui.sw0.skin = "";
                this.gui.sw1.skin = "";
                this.gui.sw2.skin = "ui2/xuanzhong.png";
                this.gui.sw3.skin = "";
                // this.gui.ItemList2.array = datajson;
                // this.gui.ItemList2.repeatY = Math.ceil(this.gui.ItemList2.height / dygH);
                // if (this.gui.ItemList2.height > 1690) {
                //     if (this.gui.ItemList2.scrollBar.max > this.gui.ItemList2.height) {
                //         this.gui.ItemList2.scrollBar.max -= 378;
                //     }
                //     else {
                //         this.gui.ItemList2.scrollBar.max = 0;
                //     }
                // }
                break;
            case 3: //
                // this.gui.ItemList0.visible = false;
                // this.gui.ItemList1.visible = false;
                // this.gui.ItemList2.visible = false;
                // this.gui.ItemList3.visible = true;
                this.gui.sw0.skin = "";
                this.gui.sw1.skin = "";
                this.gui.sw2.skin = "";
                this.gui.sw3.skin = "ui2/xuanzhong.png";
                // this.gui.ItemList3.array = datajson;
                // this.gui.ItemList3.repeatY = Math.ceil(this.gui.ItemList3.height / dygH);
                // if (this.gui.ItemList3.height > 1690) {
                //     if (this.gui.ItemList3.scrollBar.max > this.gui.ItemList3.height) {
                //         this.gui.ItemList3.scrollBar.max -= 378;
                //     }
                //     else {
                //         this.gui.ItemList3.scrollBar.max = 0;
                //     }
                // }
                break;
        }
        this.gui.ItemList0.array = datajson;
        this.gui.ItemList0.repeatY = Math.ceil(this.gui.ItemList0.height / dygH);
        this.gui.ItemList0.scrollBar.value = 0;
        // this.arr = [];
        // this.arr1.push({})
        // this.
    };
    AchievementWnd.prototype.getdata = function () {
        var ar = this.getArrdicdata(this.nowshow);
        //console.log("ar", ar.length, ar);
        var data = [];
        for (var i = 0; i < ar.length; i++) {
            var iard = ar[i];
            var iarID = iard.id;
            var e = Cfg.xmlachievement.getLineArrStr(iarID);
            var elen = e.length;
            var iIndex = iard.index;
            var findTJ = -1;
            if (SV.ME.achLingqu.ContainsKey(iIndex)) {
                findTJ = SV.ME.achLingqu.GetValue(iIndex);
            }
            var nowValue = AchievementWnd.ME.getAch(iIndex);
            // var minData = new math_BigUInt();
            var maxDataStr;
            var maxData = new math_BigUInt();
            // var bfindTJ = false;
            // for (var ie = 0; ie < elen; ie++) {
            // if (iard.kinds == 7) { //大数据
            var isFull = false;
            var isfly = false;
            // findTJ == -1 ? minData.setByShortString("0") : minData.setByShortString(e[findTJ]);
            findTJ == elen - 1 ? maxDataStr = "" : maxDataStr = e[findTJ + 1];
            findTJ == elen - 1 ? (isFull = true, maxData = nowValue.clone()) : maxData.setByShortString(e[findTJ + 1]);
            var _Progress = maxData.bigdivision(nowValue);
            if (_Progress > 1) { ///为了排序使用
                _Progress = 1;
            }
            if (findTJ >= elen - 2) {
                isfly = false;
            }
            else {
                if (_Progress == 1) {
                    var maxData2 = new math_BigUInt().setByShortString(e[findTJ + 2]);
                    var t = maxData2.bigdivision(nowValue);
                    // console.log("maxData2", t, maxData2.getString(), nowValue.getString());
                    if (t < 1) {
                        isfly = true;
                    }
                }
            }
            // var _Progress = maxData.clone().minus(minData).divPresent(nowValue.clone().minus(minData));
            // if (nowValue.bigger(minData) && nowValue.bigger(maxData) == false) {
            //     bfindTJ = true;
            // }
            // }
            // else {
            //     nowValue = 10;
            //     minData = ie == 0 ? 0 : parseInt(e[ie - 1]);
            //     maxData = parseInt(e[ie]);
            //     if (nowValue >= minData && nowValue < maxData) {
            //         bfindTJ = true;
            //     }
            // }
            // if (bfindTJ) {
            // findTJ = ie;
            // var findTJFront = findTJ - 1;
            // if (findTJ == 0) {
            //     findTJFront = findTJ;
            // }
            data.push({
                _tipid: this.nowshow,
                _index: iard.index,
                _kinds: iard.kinds,
                _id: iarID,
                _pic: iard.pic,
                _name: iard.name,
                _tip1: Lan.StringFormat(iard.tip1, [iard.name, maxDataStr]),
                _tip2: iard.tip2,
                _nowValue: nowValue,
                // _tj0: minData,
                _tj1: maxData,
                _Progress: _Progress,
                _isFull: isFull,
                _isfly: isfly,
                _jlpic: iard.jlpic,
                _jl: isFull ? "0" : Cfg.xmlachievement.getLineArrStr(iarID + 1)[findTJ + 1],
            });
            //     break;
            // }
            // }
        }
        //console.log("data", data);
        data = data.sort(function (item1, item2) {
            if (item1._Progress == item2._Progress) {
                if (item2._index > item1._index)
                    return -1;
                else
                    return 1;
            }
            else if (item1._Progress > item2._Progress)
                return -1;
            else
                return 1;
        });
        // data = data.sort((item1, item2) => {
        //     if (item1._Progress == item2._Progress)
        //         return 0;
        //     else if (item1._Progress > item2._Progress)
        //         return -1;
        //     else
        //         return 1;
        // });
        return data;
    };
    AchievementWnd.prototype.clcTip = function (arr) {
        if (SV.ME.level <= this.needpasslevel) {
            return;
        }
        // console.log("clcTipclcTipclcTipclcTipclcTip");
        for (var i = 0; i < arr.length; i++) {
            // console.log("clcTipcl", arr[i]);
            this.tmpTip[arr[i]] = this.clcTipData(arr[i]);
        }
        this.gui.tip0.visible = this.tmpTip[0];
        this.gui.tip1.visible = this.tmpTip[1];
        this.gui.tip2.visible = this.tmpTip[2];
        this.gui.tip3.visible = this.tmpTip[3];
        if (this.tmpTip[0] || this.tmpTip[1] || this.tmpTip[2] || this.tmpTip[3]) {
            Game.ME.gui.achvTip.visible = true;
            // Game.ME.gui.up3.visible = true;
            // Game.ME.showTip("up3");
        }
        else {
            Game.ME.gui.achvTip.visible = false;
            // Game.ME.gui.up3.visible = false;
            // Game.ME.hideTip("up3");
        }
    };
    AchievementWnd.prototype.clcTipData = function (iData) {
        var findisOK = false;
        var ar = this.getArrdicdata(iData);
        //console.log("ar", ar.length, ar);
        for (var i = 0; i < ar.length; i++) {
            var iard = ar[i];
            var iarID = iard.id;
            var e = Cfg.xmlachievement.getLineArrStr(iarID);
            var elen = e.length;
            var iIndex = iard.index;
            var findTJ = -1;
            if (SV.ME.achLingqu.ContainsKey(iIndex)) {
                findTJ = SV.ME.achLingqu.GetValue(iIndex);
            }
            var nowValue = AchievementWnd.ME.getAch(iIndex);
            // var minData = new math_BigUInt();
            var maxData = new math_BigUInt();
            var isFull = false;
            // findTJ == -1 ? minData.setByShortString("0") : minData.setByShortString(e[findTJ]);
            findTJ == elen - 1 ? isFull = true : maxData.setByShortString(e[findTJ + 1]);
            // var _Progress = maxData.minus(minData).divPresent(nowValue.clone().minus(minData));
            var _Progress = maxData.divPresent(nowValue);
            if (isFull == false && _Progress >= 1) {
                findisOK = true;
                break;
            }
        }
        return findisOK;
    };
    AchievementWnd.prototype.getIndexID = function (iKinds, index) {
        return 100000 + iKinds * 1000 + index * 10;
    };
    //获取
    AchievementWnd.prototype.getAch = function (iIndex) {
        var nowValue = new math_BigUInt();
        if (SV.ME.achJiLu.ContainsKey(iIndex)) {
            if (this.checkDataIsBig(iIndex)) { //获得累计金币 大数据
                nowValue = SV.ME.hybigUint(SV.ME.achJiLu.GetValue(iIndex));
            }
            else {
                nowValue = nowValue.setByShortString(SV.ME.achJiLu.GetValue(iIndex) + "");
            }
        }
        else {
            nowValue.setByShortString("0");
        }
        return nowValue;
    };
    //设置
    AchievementWnd.prototype.setAch = function (iKinds, index, data, needsave) {
        if (needsave === void 0) { needsave = false; }
        var iIndex = this.getIndexID(iKinds, index);
        if (SV.ME.achJiLu.ContainsKey(iIndex)) {
            SV.ME.achJiLu.SetValue(iIndex, data);
        }
        else {
            SV.ME.achJiLu.Add(iIndex, data);
        }
        if (needsave) {
            SV.ME.dosave(false, 42);
        }
    };
    //累加
    AchievementWnd.prototype.addAch = function (iKinds, index, data, needsave) {
        if (needsave === void 0) { needsave = false; }
        var iIndex = this.getIndexID(iKinds, index);
        if (SV.ME.achJiLu.ContainsKey(iIndex)) {
            var olddata;
            if (this.checkDataIsBig(iIndex)) { //获得累计金币 大数据
                olddata = SV.ME.hybigUint(SV.ME.achJiLu.GetValue(iIndex));
                SV.ME.achJiLu.SetValue(iIndex, olddata.plus(data));
            }
            else {
                olddata = SV.ME.achJiLu.GetValue(iIndex);
                SV.ME.achJiLu.SetValue(iIndex, olddata + data);
            }
        }
        else {
            SV.ME.achJiLu.Add(iIndex, data);
        }
        if (needsave) {
            SV.ME.dosave(false, 43);
        }
    };
    AchievementWnd.prototype.checkDataIsBig = function (iIndex) {
        if (iIndex == 104010)
            return true;
        else
            return false;
    };
    AchievementWnd.prototype.getArrdicdata = function (nowshow) {
        switch (nowshow) {
            case 0:
                if (this.dicArr[nowshow].length == 0) {
                    var ar = [];
                    ar = ar.concat(this.getArrKindsdata(50));
                    ar = ar.concat(this.getArrKindsdata(5));
                    this.dicArr[nowshow] = ar;
                }
                return this.dicArr[nowshow];
            case 1:
                if (this.dicArr[nowshow].length == 0) {
                    var ar = [];
                    ar = ar.concat(this.getArrKindsdata(51));
                    // ar = ar.concat(this.getArrKindsdata(4));
                    this.dicArr[nowshow] = ar;
                }
                return this.dicArr[nowshow];
            case 2:
                if (this.dicArr[nowshow].length == 0) {
                    var ar = [];
                    ar = ar.concat(this.getArrKindsdata(6));
                    ar = ar.concat(this.getArrKindsdata(7));
                    ar = ar.concat(this.getArrKindsdata(52));
                    this.dicArr[nowshow] = ar;
                }
                return this.dicArr[nowshow];
            case 3:
                if (this.dicArr[nowshow].length == 0) {
                    var ar = [];
                    ar = ar.concat(this.getArrKindsdata(1));
                    ar = ar.concat(this.getArrKindsdata(2));
                    ar = ar.concat(this.getArrKindsdata(3));
                    this.dicArr[nowshow] = ar;
                }
                return this.dicArr[nowshow];
        }
    };
    AchievementWnd.prototype.getArrKindsdata = function (iKinds) {
        switch (iKinds) {
            case 1: //累计复活次数	
                return [this.getAvD(iKinds, 1, 1, "ui/fuhuo.png")];
            case 2: //领取体力次数	
                return [this.getAvD(iKinds, 3, 1, "ui/tili.png")];
            case 3: //看视频次数	
                return [this.getAvD(iKinds, 5, 1, "ui/cjsp.png")];
            case 4: //累计获得金币	
                return [this.getAvD(iKinds, 7, 1, "ui/jinbi.png")];
            case 5: //目标关卡	
                return [this.getAvD(iKinds, 9, 1, "ui/guanqia.png")];
            case 6: //主机升级
                return [this.getAvD(iKinds, 11, 1, "ui/skill_speed.png"),
                    this.getAvD(iKinds, 13, 2, "ui/skill_fire.png")];
            case 7: //金币升级
                return [this.getAvD(iKinds, 15, 1, "ui/skill_jiazhi.png"),
                    this.getAvD(iKinds, 17, 2, "ui/skill_shouyi.png")];
            //预留的8-49数值 中间可以插入比较固定的统计数值
            case 50: //星球19-42
                var ar = [];
                var iIndex = 0;
                for (var i = 19; i < 42; i += 2) {
                    iIndex++;
                    ar.push(this.getAvD(iKinds, i, iIndex, "xingqiu/" + iIndex + ".png"));
                }
                return ar;
            case 51: //道具获得次数 43-58
                var ar = [];
                var iIndex = 0;
                for (var i = 43; i < 58; i += 2) {
                    iIndex++;
                    if (iIndex == 1 || iIndex == 2 || iIndex == 3 || iIndex == 7 || iIndex == 8) {
                        ar.push(this.getAvD(iKinds, i, iIndex, "icons/b" + iIndex + ".png"));
                    }
                }
                return ar;
            case 52: //副武器升级59-78
                var ar = [];
                var iIndex = 0;
                for (var i = 59; i < 78; i += 2) {
                    iIndex++;
                    ar.push(this.getAvD(iKinds, i, iIndex, "icons/wu_" + iIndex + ".png"));
                }
                return ar;
            //52之后的数值主要给可变的统计预留的
        }
    };
    AchievementWnd.prototype.getAvD = function (iKinds, id, iIndex, pic) {
        if (pic === void 0) { pic = ""; }
        var avd = new AchievementData();
        avd.id = id;
        avd.kinds = iKinds;
        avd.pic = pic;
        var iIndex = this.getIndexID(iKinds, iIndex);
        avd.index = iIndex;
        avd.tip1 = Lan.G(100000 + iKinds * 1000 + 1);
        avd.name = Lan.G(iIndex);
        avd.tip2 = Lan.G(iIndex + 1);
        avd.jlpic = "ui/jinbi.png";
        return avd;
    };
    AchievementWnd.ME = null;
    return AchievementWnd;
}());
var AchievementData = /** @class */ (function () {
    // pic: "",
    // name: "",
    // tip1: "",
    // tip2: "",
    // jlpic: "",
    function AchievementData() {
    }
    return AchievementData;
}());
//# sourceMappingURL=AchievementWnd.js.map