/*
* name;
*/
var Cfg = /** @class */ (function () {
    function Cfg() {
    }
    Cfg.initDB = function () {
        // Cfg.whiteF = [new laya.filters.ColorFilter([0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1])];
        // Cfg.redF = [new laya.filters.ColorFilter([1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1])];
        (Cfg.xmlxingqiu = new data_json()).setData(GameMain.AllJson["xingqiu"]);
        (Cfg.xmlgamedata = new data_json()).setData(GameMain.AllJson["gamedata"]);
        (Cfg.xmlachievement = new data_json()).setData(GameMain.AllJson["achievement"]);
        Cfg.rateSize = new math_Rate();
        Cfg.rateSize.setData([0, 1, 2, 3], [50, 60, 70, 80]);
        Cfg.resetTry();
    };
    // public static shareOrVideo() {
    //     return ParamOnline.ME.getBool("shareIsP", true) ?
    //         SV.ME.shareCount < ParamOnline.ME.getInt("shareMax", 10) ?
    //             SV.ME.shareCount < ParamOnline.ME.getInt("countP", 3) ?
    //                 "share" :
    //                 false && SV.ME.videoCount < ParamOnline.ME.getInt("videoMax", 20) ?
    //                     "video" :
    //                     "share" :
    //             false && SV.ME.videoCount < ParamOnline.ME.getInt("videoMax", 20) ?
    //                 "video" :
    //                 "none" :
    //         false && SV.ME.videoCount < ParamOnline.ME.getInt("videoMax", 20) ?
    //             SV.ME.videoCount < ParamOnline.ME.getInt("countP", 3) ?
    //                 "video" :
    //                 SV.ME.shareCount < ParamOnline.ME.getInt("shareMax", 10) ?
    //                     "share" :
    //                     "video" :
    //             SV.ME.shareCount < ParamOnline.ME.getInt("shareMax", 10) ?
    //                 "share" :
    //                 "none";
    // }
    Cfg.getTiliTime = function () {
        if (SV.ME.tiLi < 80) {
            var t = TimeTool.getNowSecond();
            -1 == SV.ME.tiLiBackTime && (SV.ME.tiLiBackTime = t);
            var e = t - SV.ME.tiLiBackTime, i = Math.floor(e / 360);
            return i > 0 && (i = Math.min(i, 80 - SV.ME.tiLi),
                SV.ME.tiLi += i,
                SV.ME.tiLi = Math.min(SV.ME.tiLi, 200),
                e %= 360,
                SV.ME.tiLiBackTime = t - e, SV.ME.dosave(false, 1)),
                t - SV.ME.tiLiBackTime;
        }
        return -1;
    };
    Cfg.onLine = function () {
        //console.log("online*******", Game.ME.lxTime);
        Game.ME.lxTime == "" ? SV.ME.datagetTime = CM.Get_Convert_Date(new Date()) : SV.ME.datagetTime = Game.ME.lxTime; // Cfg.getNow(),
        SV.ME.dosave(false, 2);
        //Game.ME.lxTime = SV.ME.datagetTime;
    };
    Cfg.getNow = function (type) {
        if (type === void 0) { type = 0; }
        var t;
        if (type == 0)
            t = new Date();
        else
            t = cFun.serverTime;
        return t.getDate() + "," + t.getHours() + "," + t.getMinutes() + "," + t.getSeconds();
    };
    Cfg.GetTime = function (stime) {
        var dnow = new Date();
        var e, s;
        if (stime.indexOf(",") > 0) {
            //离线金币老数据格式化
            e = stime.split(",");
            if (parseInt(e[0]) > dnow.getDate()) {
                s = new Date(dnow.getFullYear(), dnow.getMonth() - 1, parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), parseInt(e[3]));
                if (dnow.getDate() - s.getDate() == 0)
                    s = new Date(s.getTime() - 24 * 60 * 60 * 1000);
            }
            else
                s = new Date(dnow.getFullYear(), dnow.getMonth(), parseInt(e[0]), parseInt(e[1]), parseInt(e[2]), parseInt(e[3]));
            SV.ME.datagetTime = CM.Get_Convert_Date(s);
            SV.ME.dosave(false, 3);
        }
        else
            s = new Date(stime.replace("-", "/"));
        return CM.Get_Convert_Date(s);
    };
    Cfg.getCoinTime = function () {
        "" == SV.ME.datagetTime && (SV.ME.datagetTime = CM.Get_Convert_Date(new Date()));
        "" == Game.ME.lxTime && (Game.ME.lxTime = Cfg.GetTime(SV.ME.datagetTime));
        //console.log("getCoinTime---"+SV.ME.datagetTime+"---"+Game.ME.lxTime);
        var dnow = new Date();
        var s = dnow.getTime() - new Date(Game.ME.lxTime).getTime();
        // for (var e = Game.ME.lxTime.split(","),
        //     i = Cfg.getNow().split(","),
        //     s = 0,
        //     n = 0; n < 4; n++) s += (parseInt(i[n]) - parseInt(e[n])) * Cfg._secVal[n];
        //return s = Math.max(0, Math.min(86400, s));
        return s = Math.min(86400000, s);
    };
    Cfg.GetCoinVideoTime = function () {
        "" == SV.ME.datagetTime && (SV.ME.datagetTime = CM.Get_Convert_Date(new Date()));
        var dnow = new Date();
        var s = dnow.getTime() - new Date(SV.ME.datagetTime).getTime();
        s = Math.round(s / 1000);
        // for (var e = SV.ME.datagetTime.split(","),
        //     i = Cfg.getNow().split(","),
        //     s = 0,
        //     n = 0; n < 4; n++) s += (parseInt(i[n]) - parseInt(e[n])) * Cfg._secVal[n];
        return s = Math.max(0, Math.min(86400, s));
    };
    Cfg.getDayLastStr = function (t) {
        var e = "";
        // t = Math.round((86400 - t) / 60);
        t = Math.round(1440 - t);
        var i = Math.floor(t / 60);
        return e += i > 9 ? i : "0" + i,
            e += ":",
            i = t % 60,
            e += i > 9 ? i : "0" + i;
    };
    Cfg.setDamageRate = function (e, i, t) {
        if (t === void 0) { t = 0; }
        var data = CD.Game.ItemInfo[SV.ME.useButtleId + 1100];
        var szdata = data.adddata.split(",");
        var nrate = 100;
        Cfg.nButtleType = 0;
        Cfg.nButtleRate = 0;
        if (szdata.length > 1) {
            Cfg.nButtleType = parseInt(szdata[0]);
            Cfg.nButtleRate = parseInt(szdata[1]);
            Cfg.nButtleType == 1 && (nrate += Cfg.nButtleRate);
        }
        Cfg.bDamage.copy(Cfg.bDamageBase).present100(nrate);
        if (t == 0) {
            1 == i ? Cfg.stateDamage.remove(e) : Cfg.stateDamage.add(e, 100 * i),
                Cfg.stateDamage.state && Cfg.bDamage.mult2(Math.round(Cfg.stateDamage.getVMax())).div10(2);
        }
        Plane.ME.wps[0].updateButtleFace();
    };
    Cfg.setBCountRate = function (e, i) {
        1 == i ? Cfg.stateBCount.remove(e) : Cfg.stateBCount.add(e, i),
            Cfg.bCount = Cfg.stateBCount.state ?
                Math.min(900, Math.round(Cfg.bCountBase * Cfg.stateBCount.getVMax())) :
                Cfg.bCountBase,
            Cfg.bDelay = 1 / Cfg.bSendMax,
            Cfg.bPreCount = Cfg.bCount / Cfg.bSendMax,
            Cfg.kuoSanFrameCount = Math.max(5, Math.round(Cfg.bCount / 365 * 8));
    };
    Cfg.resetTry = function () {
        Cfg.levelFuCountTry = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            Cfg.levelFuDamageTry = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    };
    Cfg.initButtle = function () {
        Cfg.updateZhu(0),
            Cfg.updateJinBi(),
            Cfg.stateDamage.reset(),
            Cfg.stateBCount.reset(),
            Cfg.updateFu(SV.ME.curFu);
    };
    Cfg.updateZhu = function (type) {
        var e = Cfg.xmlgamedata.getLineArrStr(SV.ME.lDamage);
        if (type == 0 || type == 1) {
            Cfg.bDamageBase.setByShortString(e[0]);
            Cfg.bDamage.copy(Cfg.bDamageBase);
            Cfg.bDamageCost.setByShortString(e[1]);
        }
        e = Cfg.xmlgamedata.getLineArrStr(SV.ME.lCount);
        if (type == 0 || type == 2) {
            Cfg.bCount = Cfg.bCountBase = parseInt(e[2]);
            Cfg.bCountCost.setByShortString(e[3]);
            Cfg.bSendMax = parseInt(e[4]);
            Cfg.bDelay = 1 / Cfg.bSendMax;
            Cfg.bPreCount = Cfg.bCount / Cfg.bSendMax;
            Cfg.bCount <= 50 ?
                Cfg.bDamagePreS.copy(Cfg.bDamageBase).mult2(Cfg.bCount) :
                Cfg.bCount <= 100 ?
                    Cfg.bDamagePreS.copy(Cfg.bDamageBase).mult2(Math.round(.5 * (Cfg.bCount - 50)) + 50) :
                    Cfg.bDamagePreS.copy(Cfg.bDamageBase).mult2(75);
            Cfg.kuoSanFrameCount = Math.max(5, Math.round(Cfg.bCount / 365 * 8));
        }
    };
    Cfg.updateFu = function (e) {
        if (-1 != (e = -1 != Cfg.tryFu ? Cfg.tryFu : e)) {
            var i = 0;
            switch (parseInt(e)) {
                case 0:
                    i = 13;
                    break;
                case 1:
                    i = 9;
                    break;
                case 2:
                    i = 17;
                    break;
                case 3:
                    i = 23;
                    break;
                case 4:
                    i = 29;
                    break;
                case 5:
                    i = 35;
                    break;
                case 6:
                    i = 41;
                    break;
                case 7:
                    i = 47;
                    break;
                case 8:
                    i = 53;
                    break;
                case 9:
                    i = 59;
                    break;
                case 10:
                    i = 65;
                    break;
            }
            //console.log("cfg////",e,i,SV.ME.levelFuDamage);
            var s = Cfg.xmlgamedata.getLineArrStr(Math.max(Cfg.levelFuDamageTry[e], SV.ME.levelFuDamage[e]));
            //console.log("cfg////",e,i,s);
            switch (Cfg.fDamage.setByShortString(s[i]),
                Cfg.fDamageCost.setByShortString(s[i + 1]),
                //console.log("cfg////",Cfg.levelFuCountTry[e],SV.ME.levelFuCount[e]),
                s = Cfg.xmlgamedata.getLineArrStr(Math.max(Cfg.levelFuCountTry[e], SV.ME.levelFuCount[e])),
                //console.log("cfg222////",e,i,s,Cfg.fDamage.getString(),Cfg.fDamageCost.getString()),
                parseInt(e)) {
                case 0:
                case 1:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNumCost.setByShortString(s[i + 3]);
                    break;
                case 2:
                case 3:
                case 4:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    break;
                case 6:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    Cfg.fDamage = Cfg.fDamage.mult2(55).div10().div10();
                    break;
                case 5:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    Cfg.fDamage = Cfg.fDamage.mult2(6).div10();
                    break;
                case 7:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    Cfg.fDamage = Cfg.fDamage.div10();
                    break;
                case 8:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    //Cfg.fDamage = Cfg.fDamage.mult2(133).div10().div10().div10().div10();
                    //console.log("武器9伤害****",Cfg.fDamage.getString());
                    break;
                case 9:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    Cfg.fDamage = Cfg.fDamage.mult2(1).div10();
                    break;
                case 10:
                    Cfg.fNum1 = parseFloat(s[i + 2]),
                        Cfg.fNum2 = parseFloat(s[i + 3]),
                        Cfg.fNum3 = parseFloat(s[i + 4]),
                        Cfg.fNumCost.setByShortString(s[i + 5]);
                    Cfg.fDamage = Cfg.fDamage.mult2(3).div10();
                    break;
            }
        }
    };
    Cfg.updateJinBi = function () {
        var e = Cfg.xmlgamedata.getLineArrStr(SV.ME.lJiaZhi);
        Cfg.bJiaZhi.setByShortString(e[5]),
            Cfg.bJiaZhi.mult2(ParamOnline.ME.getInt("CoinData", 100)).div10(2),
            Cfg.bJiaZhiCost.setByShortString(e[6]),
            e = Cfg.xmlgamedata.getLineArrStr(SV.ME.lRiChang),
            Cfg.bRiChang.setByShortString(e[7]),
            Cfg.bRiChang.mult2(ParamOnline.ME.getInt("CoinCount", 100)).div10(2),
            Cfg.bRiChang_10.copy(Cfg.bRiChang).div10(),
            Cfg.bRiChang_10.isZero() && Cfg.bRiChang_10.one(),
            Cfg.bRiChangCost.setByShortString(e[8]);
        if (BoxRewardWnd.ME && BoxRewardWnd.ME.gui.visible)
            BoxRewardWnd.ME.ResetUI();
    };
    Cfg.upLevelDamage2 = function (e, i) {
        if (i < 0 || i >= SV.ME.levelFuDamage.length)
            return;
        if (SV.ME.levelFuDamage[i] >= Cfg.lDamage2Max[i])
            return;
        e && SV.ME.money.minus(Cfg.fDamageCost),
            SV.ME.levelFuDamage[i]++,
            AchievementWnd.ME.setAch(52, i + 1, SV.ME.levelFuDamage[i]),
            AchievementWnd.ME.clcTip([2]),
            SV.ME.dosave(false, 4),
            Cfg.updateFu(i);
    };
    Cfg.upLevelCount2 = function (e, i) {
        if (i < 0 || i >= SV.ME.levelFuDamage.length)
            return;
        if (SV.ME.levelFuCount[i] >= Cfg.lCount2Max[i])
            return;
        e && SV.ME.money.minus(Cfg.fNumCost),
            SV.ME.levelFuCount[i]++,
            SV.ME.dosave(false, 5),
            Cfg.updateFu(i);
    };
    Cfg.upLevelJiaZhi = function (e) {
        if (SV.ME.lJiaZhi >= Cfg.lJiaZhiMax)
            return;
        e && SV.ME.money.minus(Cfg.bJiaZhiCost),
            SV.ME.lJiaZhi++,
            AchievementWnd.ME.setAch(7, 1, SV.ME.lJiaZhi),
            AchievementWnd.ME.clcTip([2]),
            SV.ME.dosave(false, 6),
            Cfg.updateJinBi();
    };
    Cfg.upLevelRiChang = function (e) {
        if (SV.ME.lRiChang >= Cfg.lLiXianMax)
            return;
        e && SV.ME.money.minus(Cfg.bRiChangCost),
            SV.ME.lRiChang++,
            AchievementWnd.ME.setAch(7, 2, SV.ME.lRiChang),
            AchievementWnd.ME.clcTip([2]),
            SV.ME.dosave(false, 7),
            Cfg.updateJinBi();
    };
    Cfg.upLevelDamage = function (e) {
        if (SV.ME.lDamage >= Cfg.lDamageMax)
            return;
        e && SV.ME.money.minus(Cfg.bDamageCost),
            SV.ME.lDamage++,
            AchievementWnd.ME.setAch(6, 2, SV.ME.lDamage),
            AchievementWnd.ME.clcTip([2]),
            SV.ME.dosave(false, 8),
            Cfg.updateZhu(1);
    };
    Cfg.upLevelCount = function (e) {
        if (SV.ME.lCount >= Cfg.lCountMax)
            return;
        e && SV.ME.money.minus(Cfg.bCountCost),
            SV.ME.lCount++,
            AchievementWnd.ME.setAch(6, 1, SV.ME.lCount),
            AchievementWnd.ME.clcTip([2]),
            SV.ME.dosave(false, 9),
            Cfg.updateZhu(2);
    };
    Cfg.initLevel = function (e) {
        var i = Cfg.xmlxingqiu.getLineArrStr(e), s = [];
        for (var n = 0; n < 14; n++) {
            s.push(parseInt(i[n]));
        }
        Cfg.bugRate.setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], s),
            Cfg.total.setByShortString(i[14]),
            Cfg.total.mult2(ParamOnline.ME.getInt("LevelMax", 100)).div10(2),
            Cfg.bCount <= 50 ?
                Cfg.ave.copy(Cfg.bDamage).mult2(27 * Cfg.bCount).div10() :
                Cfg.bCount <= 100 ?
                    Cfg.ave.copy(Cfg.bDamage).mult2(27 * Math.round(.5 * (Cfg.bCount - 50) + 50)).div10() :
                    Cfg.ave.copy(Cfg.bDamage).mult2(2025).div10(),
            Cfg.temp.copy(Cfg.ave).mult2(36).div10(),
            Cfg.ave.bigger(Cfg.twen) || Cfg.ave.copy(Cfg.twen),
            Cfg.levelCount.zero(),
            Cfg.wave = [],
            Cfg.waveValue = [];
        var a, h = 0;
        for (a = [0, 20, 30, 50], n = 1; n <= 3; n++)
            3 == n && Cfg.wave.push({
                lastWave: true
            }),
                Cfg.fangWei(n),
                Cfg.random(a[n], n),
                Cfg.waveValue.push(Cfg.wAll),
                h = Cfg.wave.length,
                Cfg.wave.push(null),
                Cfg.wave.push({
                    wait: true
                });
        if (this.isBossLevel(e)) {
            Cfg.cur.copy(Cfg.ave),
                Cfg.cur.mult2(Math.round(Math.min(6 + e / 3, 39))).div10(),
                Cfg.wAll = new math_BigUInt();
            var r = Math.round(e / 5) % 13 + 2;
            // var r = e <= 50 ? Math.round((e - 5) / 5) % 10 + 3 : Math.round((e - 55) / 5) % 11 + 2;
            // 2 == e && (r = 2),
            Cfg.cur.isZero() && Cfg.cur.one(),
                Cfg.wave[h] = {
                    type: r,
                    size: 5,
                    life: new math_BigUInt().copy(Cfg.cur)
                },
                Cfg.wAll.copy(Cfg.getBugValue(r, 4, Cfg.cur)),
                Cfg.levelCount.plus(Cfg.wAll),
                Cfg.waveValue[Cfg.waveValue.length - 1].plus(Cfg.wAll),
                SV.ME.bgIndex++,
                SV.ME.bgIndex > 6 && (SV.ME.bgIndex = 1),
                SV.ME.dosave(false, 10);
        }
    };
    Cfg.random = function (e, i) {
        Cfg.wAll = new math_BigUInt(),
            Cfg.canUse.copy(Cfg.total).present100(e);
        for (var s = 0;;) {
            s++,
                3 == i ?
                    s < 6 ?
                        Cfg.cur.copy(Cfg.min).mult2(Cfg.thirdPersent[s - 1]).div10(2) :
                        (Cfg.cur.copy(Cfg.max),
                            Cfg.cur.minus(Cfg.min),
                            Cfg.cur.present100(Math.round(100 * Math.random())),
                            Cfg.cur.plus(Cfg.min)) :
                    s < 2 ?
                        Cfg.cur.copy(Cfg.min) :
                        (Cfg.cur.copy(Cfg.max),
                            Cfg.cur.minus(Cfg.min),
                            Cfg.cur.present100(Math.round(100 * Math.random())),
                            Cfg.cur.plus(Cfg.min));
            var n = Cfg.rateSize.rndValue(), a = Cfg.bugRate.rndValue();
            if (Cfg.cur.isZero() && Cfg.cur.one(), Cfg.getBugValue(a, n, Cfg.cur), !Cfg.canUse.bigger(Cfg.ball)) {
                Cfg.cur.copy(Cfg.canUse),
                    Cfg.cur.div(n + 1),
                    Cfg.cur.isZero() && Cfg.cur.one(),
                    Cfg.getBugValue(a, n, Cfg.cur),
                    Cfg.wave.push({
                        type: a,
                        size: n + 1,
                        life: new math_BigUInt().copy(Cfg.cur),
                        delay: Math.round(900 * Math.random() + 10)
                    }),
                    Cfg.canUse.minus(Cfg.ball),
                    Cfg.wAll.plus(Cfg.ball);
                break;
            }
            Cfg.wave.push({
                type: a,
                size: n + 1,
                life: new math_BigUInt().copy(Cfg.cur),
                delay: Math.round(900 * Math.random() + 10)
            }),
                Cfg.canUse.minus(Cfg.ball),
                Cfg.wAll.plus(Cfg.ball);
        }
        Cfg.levelCount.plus(Cfg.wAll);
    };
    Cfg.getBugValue = function (e, i, s) {
        Cfg._val.copy(s),
            Cfg.ball.copy(Cfg._val);
        for (var n = 1; n <= i; n++) {
            switch (Cfg._val.div(2), Cfg._val.isZero() && Cfg._val.one(), Cfg.temp.copy(Cfg._val), e) {
                case 12:
                    Cfg.temp.mult2(Math.pow(3, n));
                    break;
                default:
                    Cfg.temp.mult2(Math.pow(2, n));
            }
            Cfg.ball.plus(Cfg.temp);
        }
        return Cfg.ball;
    };
    Cfg.fangWei = function (e) {
        switch (e) {
            case 1:
                Cfg.min.copy(Cfg.ave).mult2(1).div10(2),
                    Cfg.max.copy(Cfg.ave).mult2(188).div10(2);
                break;
            case 2:
                Cfg.min.copy(Cfg.ave).mult2(1).div10(2),
                    Cfg.max.copy(Cfg.ave).mult2(222).div10(2);
                break;
            case 3:
                Cfg.min.copy(Cfg.ave).mult2(1).div10(2),
                    Cfg.max.copy(Cfg.ave).mult2(300).div10(2);
        }
    };
    Cfg.isBossLevel = function (t) {
        return t % 5 == 0;
    };
    Cfg.CheckNewDay = function () {
        var nowdate = new Date();
        var lastdate;
        if (SV.ME.onlinedate0 == "") {
            SV.ME.onlinedate0 = CM.Get_Local_Date("/");
        }
        else {
            lastdate = new Date(SV.ME.onlinedate0);
            if (nowdate.getFullYear() > lastdate.getFullYear() || nowdate.getMonth() > lastdate.getMonth() || nowdate.getDate() > lastdate.getDate()) {
                //console.log("CheckNewDay111*****",SV.ME.onlinedate0,SV.ME.relifetryfunum, nowdate);
                SV.ME.onlinedate0 = CM.Get_Local_Date("/");
                SV.ME.relifetryfunum = 0;
                SV.ME.shareCount = 0;
                SV.ME.EndlessTime = 0;
                console.log("CheckNewDay222*****", SV.ME.EndlessTime);
                Game.ME && Game.ME.OnNextDay();
                Cfg.CheckSignReward();
            }
        }
    };
    Cfg.CheckSignReward = function () {
        //登录检测
        var dnow = new Date();
        if (SV.ME.loginTime == "") {
            SV.ME.loginNum = 1;
        }
        else {
            var dtemp = new Date(SV.ME.loginTime);
            if (dnow.getFullYear() > dtemp.getFullYear() || dnow.getMonth() > dtemp.getMonth() || dnow.getDate() > dtemp.getDate()) {
                //console.log("=SV.ME.loginNum="+SV.ME.loginNum);
                if (Cfg.IsGetSignReward(SV.ME.loginNum)) {
                    SV.ME.loginNum++;
                }
            }
        }
    };
    Cfg.IsGetSignReward = function (day) {
        var szsign = SV.ME.signIn.split(",");
        if (szsign.indexOf(day.toString()) != -1) {
            //已领取
            return true;
        }
        return false;
    };
    Cfg.GetSignWeaponId = function () {
        var nid = -1;
        var szreward = [];
        szreward = CD.Game.SignIn["7"].reward.split(",");
        if (szreward[0] == "2")
            nid = parseInt(szreward[1]);
        return nid;
    };
    //添加道具
    //1001星核1002复活1003周卡1004月卡1005年卡
    Cfg.AddItem = function (itemid, nnum, srea) {
        var bnum = new math_BigUInt();
        if (SV.ME.itemdata.ContainsKey(itemid)) {
            bnum.setByShortString(SV.ME.itemdata.GetValue(itemid));
            bnum.plus(nnum);
            SV.ME.itemdata.SetValue(itemid, bnum.getShortString());
        }
        else {
            SV.ME.itemdata.Add(itemid, nnum.getShortString());
        }
        SV.ME.dosave(false, 11);
        //HMS
        // if (itemid == 1001) {
        //     if (BoxRewardWnd.ME.gui.visible) {
        //         BoxRewardWnd.ME.ResetUI();
        //     }
        //     Game.ME.CheckBaoXiangTip();
        // }
        // if (itemid == 1002) {
        //     Game.ME.showTryFu = true;
        //     if (RelifeTryFuWnd.ME.gui.visible) {
        //         RelifeTryFuWnd.ME.UpdateUI();
        //     }
        // }
    };
    //扣除道具
    Cfg.CutItem = function (itemid, nnum, srea) {
        if (!SV.ME.itemdata.ContainsKey(itemid))
            return 0;
        var bnum = new math_BigUInt().setByShortString(SV.ME.itemdata.GetValue(itemid));
        if (nnum.bigger(bnum))
            return -1;
        bnum.minus(nnum);
        SV.ME.itemdata.SetValue(itemid, bnum.getShortString());
        SV.ME.dosave(false, 12);
        if (itemid == 1001) {
            Game.ME.CheckBaoXiangTip();
        }
        return 1;
    };
    //获取道具数量
    Cfg.GetItemNum = function (itemid) {
        var bnum = new math_BigUInt().zero();
        if (SV.ME.itemdata.ContainsKey(itemid))
            bnum.setByShortString(SV.ME.itemdata.GetValue(itemid));
        return bnum;
    };
    //设置道具数量
    Cfg.SetItemNum = function (itemid, nnum, srea) {
        if (SV.ME.itemdata.ContainsKey(itemid))
            SV.ME.itemdata.SetValue(itemid, nnum);
        else
            SV.ME.itemdata.Add(itemid, nnum);
    };
    //扣除钻石
    Cfg.CutDiamond = function (num, rea) {
        if (SV.ME.gold >= num && num > 0) {
            SV.ME.gold -= num;
            SV.ME.dosave(false, 13);
            Game.ME.updateZuan();
            //TK.track("gold", { "lv": SV.ME.level, "gold": SV.ME.gold, "reason": rea });
            return 1;
        }
        return 0;
    };
    Cfg.ID = 0;
    Cfg.imgTextBug = null;
    // public static imgTextGuiB = null
    // public static imgTextGuiX = null
    Cfg.itW = null;
    Cfg.xmlxingqiu = null;
    Cfg.xmlgamedata = null;
    Cfg.xmlachievement = null;
    // public static redF = null
    // public static whiteF = null
    Cfg.rateSize = null;
    Cfg.COUNT_FU = 11;
    Cfg.tryFu = -1;
    Cfg.version = 1;
    Cfg.lCountMax = 356;
    Cfg.lDamageMax = 999;
    Cfg.lJiaZhiMax = 999;
    Cfg.lLiXianMax = 999;
    Cfg.bCount = 1;
    Cfg.bCountBase = 1;
    Cfg.bSendMax = 0;
    Cfg.bDelay = NaN;
    Cfg.bPreCount = NaN;
    Cfg.levelFuCountTry = null;
    Cfg.levelFuDamageTry = null;
    Cfg.fNum1 = 1;
    Cfg.fNum2 = 1;
    Cfg.fNum3 = 1;
    Cfg.bSendMax2 = 0;
    Cfg.kuoSanFrameCount = 0;
    Cfg.wave = null;
    Cfg.waveValue = null;
    Cfg.wAll = null;
    Cfg.stateDamage = new StateVal();
    Cfg.stateBCount = new StateVal();
    Cfg._secVal = [86400, 3600, 60, 1];
    Cfg.lCount2Max = [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32];
    Cfg.lDamage2Max = [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999];
    Cfg.colorSet = [2.7, 2.4, 2.1, 1.8, 1.5, 1.2, .9, .6, .3];
    Cfg.bDamage = new math_BigUInt();
    Cfg.bDamageBase = new math_BigUInt();
    Cfg.bDamageCost = new math_BigUInt();
    Cfg.bCountCost = new math_BigUInt();
    Cfg.bDamagePreS = new math_BigUInt();
    Cfg.fDamage = new math_BigUInt();
    Cfg.fDamageCost = new math_BigUInt();
    Cfg.fNumCost = new math_BigUInt();
    Cfg.bJiaZhi = new math_BigUInt();
    Cfg.bRiChang = new math_BigUInt();
    Cfg.bRiChang_10 = new math_BigUInt();
    Cfg.bJiaZhiCost = new math_BigUInt();
    Cfg.bRiChangCost = new math_BigUInt();
    Cfg.bugRate = new math_Rate();
    Cfg.total = new math_BigUInt();
    Cfg.ave = new math_BigUInt();
    Cfg.min = new math_BigUInt();
    Cfg.max = new math_BigUInt();
    Cfg.temp = new math_BigUInt();
    Cfg.canUse = new math_BigUInt();
    Cfg.levelCount = new math_BigUInt();
    Cfg.cur = new math_BigUInt();
    Cfg.allall = new math_BigUInt();
    Cfg.twen = new math_BigUInt().setByShortString("10");
    Cfg.one = new math_BigUInt().one();
    Cfg.twen3 = new math_BigUInt().setByShortString("30");
    Cfg.thirdPersent = [20, 40, 60, 80, 100];
    Cfg.ball = new math_BigUInt();
    Cfg._val = new math_BigUInt();
    Cfg.nButtleType = 0;
    Cfg.nButtleRate = 0;
    return Cfg;
}());
//# sourceMappingURL=Cfg.js.map