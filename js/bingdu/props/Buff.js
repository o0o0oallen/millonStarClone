/*
* name;
*/
var Buff = /** @class */ (function () {
    function Buff() {
        this.isUseAble = false;
        this.skin = null;
        this.icon = null;
        this.animImg = null;
        this.id = 0;
        this.complete = false;
        this.step = false;
        this.endTime = NaN;
        this.visTime = NaN;
        this.type = 0;
        this.xDir = NaN;
        this.yDir = NaN;
        this.xDirU = NaN;
        this.yDirU = NaN;
        this.speedBass = 3;
        this.speed = 180;
        this.x = 0;
        this.y = 0;
        this.roatSpeed = 0;
        this.visB = false;
        this.bufftips = null;
        this.imgCircle = null;
        this.dura = 6;
        this.hongCircle = new AnimImg();
        this.hongCircle.init("ui2/h", 11, 2, true, true);
        this.lanCircle = new AnimImg();
        this.lanCircle.init("ui2/l", 11, 2, true, true);
    }
    Buff.prototype.kill = function () {
        this.dohide();
        this.complete = true;
        this.isUseAble = true;
        this.unaction();
    };
    Buff.prototype.dohide = function () {
        this.skin.parent && Buff.parent.removeChild(this.skin);
    };
    Buff.prototype.start = function (e, i) {
        var s = (Math.random() > .5 ? .5 : -.5) * (Math.random() + .1) - 1.57;
        this.id = ++Cfg.ID,
            this.x = e,
            this.y = i,
            this.roatSpeed = Math.random() > .5 ? 1 : -1,
            Buff.parent.addChild(this.skin),
            this.xDir = Math.cos(s),
            this.yDir = Math.sin(s),
            this.xDirU = Math.abs(this.xDir),
            this.yDirU = Math.abs(this.yDir),
            this.visTime = Game.time + 17, //持续时间增加一倍 、、7
            this.endTime = this.visTime + 3,
            this.icon.alpha = 1,
            this.skin.visible = this.visB = true,
            this.skin.pos(this.x, this.y, true);
        this.step = true,
            this.complete = false,
            Buff.add(this);
        // if (SV.ME.buffshow == 0 && this.type < 9) {
        //     //console.log("jjsuiue*******",this.type);
        //     SV.ME.buffshow = 1;
        //     Laya.timer.once(2000, this, () => {
        //         Game.ME.ShowBuffDesc(true);
        //     });
        // }
    };
    Buff.prototype.fast = function (t, e) {
        if (t === void 0) { t = 10; }
        if (e === void 0) { e = 300; }
        this.speed = this.speedBass + t;
        laya.utils.Tween.to(this, {
            speed: this.speedBass
        }, e, null);
    };
    Buff.prototype.check = function () {
        if (this.step) {
            var e = Game.ME.plane.x - this.x;
            var i = Game.ME.plane.y + 76 - this.y; //80
            e * e + i * i < Buff.disSqr && (this.dohide(), this.action());
        }
    };
    Buff.prototype.action = function () {
        switch (this.endTime = Game.time + this.dura, this.step = false, Buff.OnPropAction(this), this.type) {
            case 1:
                Game.ME.PlayItemTip(Lan.G(1057), this.type);
                MSound.ME.playSoundLimit("w_buff");
                break;
            case 2:
                Game.ME.PlayItemTip(Lan.G(1058), this.type);
                MSound.ME.playSoundLimit("w_buff");
                break;
            case 3:
                Game.ME.PlayItemTip(Lan.G(1059), this.type);
                MSound.ME.playSoundLimit("w_buff");
                break;
            case 7:
                Game.ME.PlayItemTip(Lan.G(1063), this.type);
                MSound.ME.playSoundLimit("w_buff");
                break;
            case 8:
                Game.ME.PlayItemTip(Lan.G(1064), this.type);
                MSound.ME.playSoundLimit("w_buff");
                break;
            case 4:
                Game.ME.PlayItemTip(Lan.G(1060), this.type);
                MSound.ME.playSoundLimit("w_debuff");
                break;
            case 5:
                Game.ME.PlayItemTip(Lan.G(1061), this.type);
                MSound.ME.playSoundLimit("w_debuff");
                break;
            case 6:
                Game.ME.PlayItemTip(Lan.G(1062), this.type);
                MSound.ME.playSoundLimit("w_debuff");
                break;
            case 9:
                Game.ME.PlayItemTip(Lan.G(1065), this.type);
                MSound.ME.playSoundLimit("w_buff");
                break;
        }
        //屏蔽获得道具的log.因为数据没意义
        // if (SV.ME.level < 20) {
        //     TK.track("getitem", { type: this.type, level: SV.ME.level });
        // }
        AchievementWnd.ME.addAch(51, this.type, 1);
    };
    Buff.prototype.unaction = function () {
        Buff.OnPropActionEnd(this);
    };
    Buff.prototype.update = function () {
        if (this.imgCircle != null)
            this.imgCircle.rotation -= 6;
        this.step ? (Game.time > this.endTime && this.type != 9 ?
            this.kill() :
            Game.time > this.visTime && this.type != 9 && (this.visB = !this.visB,
                this.icon.alpha = this.visB ? 1 : .3,
                this.visTime += .1),
            this.x += this.speed * this.xDir * Game.dTime,
            this.x + Buff.r > Game.ME.BR ?
                this.xDir = -this.xDirU :
                this.x - Buff.r < Game.ME.BL && (this.xDir = this.xDirU),
            this.y += this.speed * this.yDir * Game.dTime,
            this.y - Buff.r > Game.ME.BB ?
                this.y = -Buff.r :
                this.y - Buff.r < Game.ME.BT && (this.yDir = this.yDirU),
            //this.type == 9 ? console.log("buffupdate**",Game.isGameStart,this.type) : "",
            (!Game.isGameStart && this.type == 9) ? (this.action(), this.kill()) : "",
            this.skin.pos(this.x, this.y, true)) :
            Game.time > this.endTime && this.type != 9 ?
                this.kill()
                :
                    null != this.bufftips && (this.bufftips.setPgs((this.endTime - Game.time) / this.dura));
    };
    Buff.OnPropAction = function (e) {
        var i = Buff.kvProp[e.type];
        null != i ? (Buff.kvProp[e.type] = e,
            e.bufftips = i.bufftips,
            i.bufftips = null, i.kill()) : (Buff.kvProp[e.type] = e,
            e.type == 9 ? "" : (e.bufftips = Buff.getPgs3(e.type),
                UIHelper.doshow(e.bufftips.skin),
                Buff.pgsSort.push(e.bufftips),
                e.bufftips.skin.y = (Buff.pgsSort.length - 1) * Buff.spacing));
    };
    Buff.OnPropActionEnd = function (e) {
        if (null != e.bufftips) {
            e.bufftips.isUseAble = true,
                UIHelper.dohide(e.bufftips.skin);
            for (var i = 0, s = Buff.pgsSort.length; i < s; i++)
                e.bufftips == Buff.pgsSort[i] && Buff.pgsSort.splice(i, 1);
            Buff.kvProp[e.type] = null,
                e.bufftips = null,
                Buff.sortPgs();
        }
    };
    Buff.sortPgs = function () {
        for (var e = 0, i = Buff.pgsSort.length; e < i; e++)
            laya.utils.Tween.to(Buff.pgsSort[e].skin, {
                y: e * Buff.spacing
            }, 600, laya.utils.Ease.circOut);
    };
    // public static getPgs3(e) {
    //     var i;
    //     var s;
    //     for (s = 0; s < this.pgs3Count; s++) {
    //         (i = this.poolPgs3[s]);
    //         if (i.isUseAble) {
    //             i.isUseAble = false;
    //             this.initPgs3(i, e);
    //             return i;
    //         }
    //     }
    //     i = new Buffs(new ui.Pgs3UI());
    //     i.isUseAble = false;
    //     this.initPgs3(i, e);
    //     this.poolPgs3.push(i);
    //     this.pgs3Count++;
    //     Game.ME.gui.bufftips.addChild(i.skin);
    //     return i;
    // }
    Buff.getPgs3 = function (e) {
        for (var i, s = 0; s < Buff.pgs3Count; s++)
            if ((i = Buff.poolPgs3[s]).isUseAble)
                return i.isUseAble = false,
                    Buff.initPgs3(i, e),
                    i;
        return i = new BuffTips(new ui.BuffsUI()),
            i.isUseAble = false,
            Buff.initPgs3(i, e),
            Buff.poolPgs3.push(i),
            Buff.pgs3Count++,
            Game.ME.gui.bufftips.addChild(i.skin),
            SV.ME.isDadian(3) ? "" : SV.ME.doDadian(3),
            i;
    };
    Buff.initPgs3 = function (t, e) {
        t.setIcon("icons/b" + e + "s.png");
        t.setName(e);
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 7:
            case 8:
                t.setColor("ui/gp.png");
                break;
            case 4:
            case 5:
            case 6:
                t.setColor("ui/rp.png");
                break;
            case 9:
                break;
        }
    };
    Buff.getOne = function (ee) {
        var e = parseInt(ee);
        for (var i, s = 0; s < Buff.pCount; s++)
            if ((i = Buff.pool[s]).isUseAble && i.type == e)
                return i.isUseAble = false,
                    i;
        // console.log("getOne~~~~~~~~~~", e);
        switch (e) {
            case 1:
                i = new Buff1_HuoLi();
                break;
            case 2:
                i = new Buff2_FanWei();
                break;
            case 3:
                i = new Buff3_JianSu();
                break;
            case 4:
                i = new DeBuff1_JianSu();
                break;
            case 5:
                i = new DeBuff2_JiaSu();
                break;
            case 6:
                i = new DeBuff3_HuoYue();
                break;
            case 7:
                i = new Buff4_ZhaoHuan();
                break;
            case 8:
                i = new Buff5_JinBi();
                break;
            case 9:
                i = new Item1_Jinbi();
                break;
            default:
                console.log("Prop  getOne not find", e);
                break;
        }
        return i.isUseAble = false,
            Buff.pool.push(i),
            Buff.pCount++,
            i;
    };
    Buff.getBf = function (e, i, s) {
        // "a1": [[0, 0, 0, 0, 0, 0, 0, 0], [0, .9, 0, 0, 0, 0, 0, 0], [0, 1.8, 0, 0, 0, 0, 0, 0], [0, 100, 0, 0, 0, 0, 0, 0], [0, 3.6, 0, 0, 0, 0, 0, 0]],
        // "a2": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, 0, 0, 0, 0, 0, 0], [1.8, 1.8, 0, 0, 0, 0, 0, 0], [100, 2.7, 0, 0, 0, 0, 0, 0], [3.6, 3.6, 0, 0, 0, 0, 0, 0]],
        // "a3": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, 0, 0, 0, 0, 0], [1.8, 1.8, 1.8, 0, 0, 0, 0, 0], [2.7, 2.7, 100, 0, 0, 0, 0, 0], [3.6, 3.6, 3.6, 0, 0, 0, 0, 0]],
        // "a4": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, 0, 0, 0, 0, .9], [1.8, 1.8, 1.8, 0, 0, 0, 0, 1.8], [2.7, 2.7, 2.7, 0, 0, 0, 0, 100], [3.6, 3.6, 3.6, 0, 0, 0, 0, 3.6]],
        // "a5": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, 0, 0, 0, .9, .9], [1.8, 1.8, 1.8, 0, 0, 0, 1.8, 1.8], [2.7, 2.7, 2.7, 0, 0, 0, 100, 2.7], [3.6, 3.6, 3.6, 0, 0, 0, 3.6, 3.6]],
        // "a6": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, .3, .3, .3, .9, .9], [1.8, 1.8, 1.8, .6, .6, .6, 1.8, 1.8], [2.7, 2.7, 2.7, .9, .9, .9, 2.7, 2.7], [3.6, 3.6, 3.6, 1.2, 1.2, 1.2, 3.6, 3.6]]
        // console.log("getBf",e);
        var n = SV.ME.level < 6 ? Buff.gameVt["a" + SV.ME.level] : Buff.gameVt["a6"];
        var a = n[e - 1];
        for (var h = 0; h < 8; h++) {
            if (100 * Math.random() < a[h]) {
                Buff.getOne(h + 1).start(i, s);
            }
        }
        if (Game.ME.playMode == 0 && 10000 * Math.random() < ParamOnline.ME.getNumber("starcoredrop", 1000)) {
            var nnum = new math_BigUInt().one().mult2(5);
            var nopen = ParamOnline.ME.getNumber("baoxiang_open", 35);
            if (SV.ME.level > nopen && SV.ME.boxLevel < ParamOnline.ME.getNumber("starcoremax", 1) && nnum.bigger(Cfg.GetItemNum(1001))) {
                SV.ME.boxLevel += 1;
                Cfg.AddItem(1001, new math_BigUInt().one(), "item1_jinbi");
                Buff.getOne(9).start(i, s);
            }
        }
    };
    Buff.getObstructBf = function (e, x, y) {
        Buff.getOne(e).start(x, y);
    };
    Buff.add = function (e) {
        Buff.all.push(e),
            Buff.countAll = Buff.all.length,
            Buff.checkIndex >= Buff.countAll && (Buff.checkIndex = Buff.countAll - 1);
    };
    Buff.removeAll = function () {
        for (var e, i = Buff.countAll; i--;)
            (e = Buff.all[i]).isUseAble = true,
                e.skin.parent && e.skin.parent.removeChild(e.skin),
                e.kill();
        Buff.all = [],
            Buff.countAll = 0;
    };
    Buff.remove = function (e) {
        for (var i, s = Buff.countAll; s--;)
            if ((i = Buff.all[s]).id == e.id) {
                i.isUseAble = true,
                    i.skin.parent && i.skin.parent.removeChild(i.skin),
                    Buff.countAll--;
                break;
            }
    };
    Buff.updateAll = function () {
        var e;
        var i = Buff.countAll;
        // console.log("Buff updateAll",i,Buff.all);
        for (--Buff.checkIndex < 0 && (Buff.checkIndex = Buff.countAll - 1); i--;)
            (e = Buff.all[i]).complete ? (e.kill(),
                Buff.all.splice(i, 1),
                e.skin.parent && e.skin.parent.removeChild(e.skin),
                Buff.checkIndex >= --Buff.countAll && (Buff.checkIndex = Buff.countAll - 1)) : (e.update(),
                e.check());
    };
    Buff.r = 60;
    Buff.parent = null;
    Buff.disSqr = 0;
    Buff.kvProp = {};
    Buff.pgsSort = [];
    Buff.spacing = 180;
    Buff.poolPgs3 = [];
    Buff.pgs3Count = 0;
    Buff.pool = [];
    Buff.pCount = 0;
    Buff.all = [];
    Buff.countAll = 0;
    Buff.checkIndex = 0;
    Buff.gameVt = {
        "a1": [[0, 0, 0, 0, 0, 0, 0, 0], [0, .9, 0, 0, 0, 0, 0, 0], [0, 1.8, 0, 0, 0, 0, 0, 0], [50, 50, 50, 0, 0, 0, 50, 50], [0, 3.6, 0, 0, 0, 0, 0, 0]],
        "a2": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, 0, 0, 0, 0, 0, 0], [1.8, 1.8, 0, 0, 0, 0, 0, 0], [20, 20, 20, 0, 0, 0, 20, 20], [3.6, 3.6, 0, 0, 0, 0, 0, 0]],
        "a3": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, 0, 0, 0, 0, 0], [1.8, 1.8, 1.8, 0, 0, 0, 0, 0], [20, 20, 20, 0, 0, 0, 20, 20], [3.6, 3.6, 3.6, 0, 0, 0, 0, 0]],
        "a4": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, 0, 0, 0, 0, .9], [1.8, 1.8, 1.8, 0, 0, 0, 0, 1.8], [20, 20, 20, 0, 0, 0, 20, 20], [3.6, 3.6, 3.6, 0, 0, 0, 0, 3.6]],
        "a5": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, 0, 0, 0, .9, .9], [1.8, 1.8, 1.8, 0, 0, 0, 1.8, 1.8], [20, 20, 20, 0, 0, 0, 20, 20], [3.6, 3.6, 3.6, 0, 0, 0, 3.6, 3.6]],
        "a6": [[0, 0, 0, 0, 0, 0, 0, 0], [.9, .9, .9, .3, .3, .3, .9, .9], [1.8, 1.8, 1.8, .6, .6, .6, 1.8, 1.8], [2.7, 2.7, 2.7, .9, .9, .9, 2.7, 2.7], [3.6, 3.6, 3.6, 1.2, 1.2, 1.2, 3.6, 3.6]]
    };
    return Buff;
}());
//# sourceMappingURL=Buff.js.map