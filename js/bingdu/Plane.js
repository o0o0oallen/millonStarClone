var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(t) {
        if (t === void 0) { t = 1; }
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.x = 0;
        _this.y = 0;
        _this.pName = "";
        _this.rad = -1.57;
        _this.wp = null;
        _this.wps = null;
        _this.wpArr = null;
        _this.i = 0;
        _this.countWeapon = 0;
        _this.r = 21;
        _this.eatR = 98;
        _this.speed = .6;
        _this.slowState = null;
        _this.attackAble = false;
        _this.fileScale = NaN;
        _this.fileScaleBase = .3;
        _this.slowRate = 1;
        _this.fxLUp = null;
        _this.wPool = {};
        _this.shootAble = false;
        _this.tFile = 0;
        _this.lr = 1;
        _this.flashCount = 0;
        _this.flashB = false;
        _this.mainType = 1;
        _this.headTip = null;
        _this.lwing = null;
        _this.rwing = null;
        _this.lwingloaded = false;
        _this.rwingloaded = false;
        _this.wingAtkTime = 0;
        _this.wingAtkType = 0;
        _this.wingDelayTime = 0;
        _this.wingLastTime = 0;
        _this.wingAtkState = 0;
        _this.mainType = t;
        switch (t) {
            case 1:
                _this.skin = new ui.PlaneUI();
                break;
            case 2:
                _this.skin = new ui.Plane2UI();
        }
        _this.skin.scale(.8, .8, true),
            Game.ME.layerPlane.addChild(_this.skin),
            _this.wps = {},
            _this.wpArr = [],
            _this.slowState = new StateVal(),
            _this.skin.fire.yy = _this.skin.fire.y,
            UIHelper.dosave(_this.skin.jiTou),
            UIHelper.dosave(_this.skin.jiShen),
            _this.mainType == 1 ? (UIHelper.dosave(_this.skin.lwingpos),
                UIHelper.dosave(_this.skin.rwingpos),
                UIHelper.dosave(_this.skin.l),
                UIHelper.dosave(_this.skin.r)) : (UIHelper.dosave(_this.skin.l),
                UIHelper.dosave(_this.skin.r));
        if (t == 1) { //主飞机才隐藏无敌. 付飞机进入就无敌
            UIHelper.dohide(_this.skin.wuDi);
            _this.skin.tipBox.visible = SV.ME.level < 6;
            _this.skin.tiptxt.text = Lan.G(1070);
            CD.Language == Language.es && _this.skin.tiptxt.scale(.72, .72);
            CD.Language == Language.pt && _this.skin.tiptxt.scale(.72, .72);
            CD.Language == Language.fr && _this.skin.tiptxt.scale(.7, .7);
            CD.Language == Language.de && _this.skin.tiptxt.scale(.7, .7);
            CD.Language == Language.it && _this.skin.tiptxt.scale(.7, .7);
            _this.lwing = new Laya.Skeleton();
            _this.skin.lwingpos.addChild(_this.lwing);
            _this.lwing.on(Laya.Event.STOPPED, _this, _this.LWingStop);
            _this.rwing = new Laya.Skeleton();
            _this.skin.rwingpos.addChild(_this.rwing);
            _this.rwing.on(Laya.Event.STOPPED, _this, _this.RWingStop);
            //this.skin.quaneff2.blendMode = Laya.BlendMode.DESTINATIONOUT;
            _this.skin.ani2.on(Laya.Event.COMPLETE, _this, _this.QuanEffOver);
        }
        _this.fxLUp = new ImgAnim(_this.skin),
            _this.fxLUp.blendMode = "lighter",
            _this.fxLUp.init("level/sj", 15, 1);
        null == Plane.fileAnim && (Plane.fileAnim = new AnimImg()).init("spaceship/wy", 6, 1, true),
            Plane.fileAnim.play(_this.skin.fire);
        null == Plane.fileSg && (Plane.fileSg = new AnimImg()).init("spaceship/gz", 5, 1, true),
            Plane.fileSg.play(_this.skin.sg);
        null == Plane.fileDead && (Plane.fileDead = new AnimImg()).init("spaceship/gzb", 3, 1, true);
        _this.SetWing();
        return _this;
    }
    Plane.prototype.wuDi = function (t) {
        t *= 1e3;
        this.skin.wuDi.visible = false;
        UIHelper.doshow(this.skin.wuDi);
        this.attackAble = false;
        this.skin.wuDi.scale(0, 0, true);
        laya.utils.Tween.to(this.skin.wuDi, {
            scaleX: 1,
            scaleY: 1
        }, 500),
            Laya.timer.once(t, this, this.endWuDi),
            Laya.timer.once(t - 1e3, manager_MTwinkle.ME, manager_MTwinkle.ME.start, [this.skin.wuDi, 100, 8]);
    };
    Plane.prototype.endWuDi = function () {
        this.skin.wuDi.visible = true,
            UIHelper.dohide(this.skin.wuDi),
            this.attackAble = true;
        this.stopRed(); //my add
    };
    Plane.prototype.yinShen = function (t) {
        t *= 1e3;
        this.attackAble = false;
        laya.utils.Tween.to(this.skin, {
            alpha: .6
        }, 500),
            Laya.timer.once(t, this, this.endYinShen);
    };
    Plane.prototype.endYinShen = function () {
        this.attackAble = true;
        laya.utils.Tween.to(this.skin, {
            alpha: 1
        }, 500),
            this.stopRed(); //my add
    };
    Plane.prototype.upFx = function () {
        this.fxLUp.play(this.skin.jiShen.x, this.skin.jiShen.y, 3);
    };
    Plane.prototype.setSlowRate = function (t, e) {
        1 == e ? this.slowState.remove(t) : this.slowState.add(t, e),
            this.slowState.state ? (this.slowState.ss > 1 ? this.slowRate = .1 - .02 * (this.slowState.ss - 1) : this.slowRate = .1, this.slowRate = Math.max(0, this.slowRate)) : this.slowRate = 1,
            laya.utils.Tween.to(this, {
                speed: .6 * this.slowRate
            }, 500);
    };
    Plane.prototype.reset = function () {
        this.slowState.reset();
    };
    Plane.prototype.setFace = function (t) {
        this.pName = t;
        this.skin.pivotX = this.skin.jiTou.x,
            this.skin.pivotY = this.skin.jiTou.y;
    };
    Plane.prototype.draw = function () {
        this.skin.pos(this.x, this.y, true);
    };
    Plane.prototype.start = function (nret) {
        for (var t = 0, e = this.countWeapon; t < e; t++)
            this.wp = this.wpArr[t], nret == 1 ? "" : this.wp.initData();
        this.event("start");
        if (nret == 0 && this.mainType == 1 && SV.ME.useWingId > 1200) {
            var data = CD.Game.ItemInfo[SV.ME.useWingId];
            var szdata = data.adddata.split(",");
            this.wingAtkType = parseInt(szdata[0]);
            this.wingLastTime = parseInt(szdata[1]);
            this.wingDelayTime = data.delay;
            this.wingAtkTime = Game.time + this.wingDelayTime;
            this.LWingStop();
            this.RWingStop();
            Game.ME.ShowWingSkill();
            //console.log("///////////",this.wingAtkType,this.wingLastTime,this.wingDelayTime,this.wingAtkTime);
        }
    };
    Plane.prototype.getWeapon = function (t) {
        if (null == this.wPool[t]) {
            switch (t) {
                case 0:
                    this.wPool[t] = new Weapon0(this);
                    break;
                case 2:
                    this.wPool[t] = new Weapon1(this);
                    break;
                case 1:
                    this.wPool[t] = new Weapon2();
                    break;
                case 3:
                    this.wPool[t] = new Weapon3();
                    break;
                case 4:
                    this.wPool[t] = new Weapon4();
                    break;
                case 5:
                    this.wPool[t] = new Weapon5();
                    break;
                case 6:
                    this.wPool[t] = new Weapon6(this);
                    break;
                case 7:
                    this.wPool[t] = new Weapon7(this);
                    break;
                case 8:
                    this.wPool[t] = new Weapon8();
                    break;
                case 9:
                    this.wPool[t] = new Weapon9();
                    break;
                case 10:
                    this.wPool[t] = new Weapon10();
                    break;
                case 11:
                    this.wPool[t] = new Weapon11();
                    break;
            }
        }
        if (this.mainType == 1 && SV.ME.useWingId == 1200) {
            this.skin.l.visible = t <= 0 || t == 5 || t == 4 || t == 7 || t == 8 || t == 9 || t == 11;
            this.skin.r.visible = t <= 0 || t == 5 || t == 4 || t == 7 || t == 8 || t == 9 || t == 11;
        }
        return this.wPool[t];
    };
    Plane.prototype.addShooter = function (t, ntype) {
        if (ntype === void 0) { ntype = 1; }
        //console.log("addShooter***", t, ntype);
        this.wps[t] || (this.wps[t] = this.wp = this.getWeapon(t),
            this.wp.setVisible(true),
            ntype == 0 && (t == 5 || t == 11) ? this.wp.SetAnim(false) : "",
            this.wp.plane = this,
            this.wp.updateDir(),
            this.wpArr.push(this.wp),
            this.countWeapon = this.wpArr.length);
    };
    Plane.prototype.removeShooter = function (t) {
        //console.log("removeShooter***",t);
        var e = this.wps[t];
        e && (e.setVisible(false), delete this.wps[t], this.wpArr.splice(this.wpArr.indexOf(e), 1));
    };
    Plane.prototype.setShoot = function (t) {
        this.shootAble = t,
            laya.utils.Tween.to(this, {
                fileScaleBase: .5 + (t ? .5 : 0)
            }, 300, null, null, 0, true),
            this.event("setShoot");
        if (this.mainType == 1 && SV.ME.useWingId > 1200) {
            this.lwingloaded && Game.isShowBullet && this.lwing.play("zhankai", false);
            this.rwingloaded && Game.isShowBullet && this.rwing.play("zhankai", false);
        }
    };
    Plane.prototype.update = function () {
        for (var t = NaN, e = 0, i = this.countWeapon; e < i; e++)
            this.wp = this.wpArr[e],
                this.wp.update();
        this.tFile += .4,
            t = Math.abs(.1 * Math.sin(this.tFile)),
            this.fileScale = this.fileScaleBase + t,
            this.skin.fire.scale(this.fileScale, this.fileScale, true),
            t *= 10;
        // this.skin.dot.scale(t, t, true);
        if ((Game.isGameStart || Game.ME.playMode == 1) && this.mainType == 1 && SV.ME.useWingId > 1200 && this.wingAtkTime > 0 && Game.time >= this.wingAtkTime) {
            //console.log("wingatk========", Game.time, this.wingAtkTime);
            this.SendWingAtk();
            this.wingAtkTime = Game.time + this.wingDelayTime + this.wingLastTime;
        }
    };
    Plane.prototype.flashRed = function () {
        // Laya.timer.loop(300, this, this.stopRed),
        // Laya.timer.once(300, this, this.stopRed);
        // this.flashCount = 9,
        // this.stopRed();
        Plane.fileSg.stop(this.skin.sg);
        Plane.fileDead.play(this.skin.sg);
    };
    Plane.prototype.broken = function (t) {
        t ? (
        // this.skin.dot.visible = false,
        // this.skin.anim.visible = false,
        this.skin.fire.visible = false,
            this.skin.sg.visible = false,
            this.explode(this.skin.jiTou),
            this.explode(this.skin.jiShen),
            //console.log("planebroke", this.skin.l.visible),
            this.mainType == 1 ? (this.skin.lwingpos.visible && this.explode(this.skin.lwingpos),
                this.skin.rwingpos.visible && this.explode(this.skin.rwingpos),
                this.skin.l.visible && this.explode(this.skin.l),
                this.skin.r.visible && this.explode(this.skin.r)) : (this.skin.l.visible && this.explode(this.skin.l),
                this.skin.r.visible && this.explode(this.skin.r)),
            MSound.ME.playSoundLimit("w_baozha")) : (this.mainType == 1 ? (this.skin.lwingpos.visible && UIHelper.reset(this.skin.lwingpos),
            this.skin.rwingpos.visible && UIHelper.reset(this.skin.rwingpos),
            this.skin.l.visible && UIHelper.reset(this.skin.l),
            this.skin.r.visible && UIHelper.reset(this.skin.r)) : (this.skin.l.visible && UIHelper.reset(this.skin.l),
            this.skin.r.visible && UIHelper.reset(this.skin.r)),
            UIHelper.reset(this.skin.jiTou),
            UIHelper.reset(this.skin.jiShen),
            // this.skin.dot.visible = true,
            // this.skin.anim.visible = true,
            this.wingAtkTime = 0,
            this.skin.fire.visible = true,
            this.skin.sg.visible = true);
        this.stopRed(); //my add
        for (var e = 1, i = this.countWeapon; e < i; e++)
            this.wp = this.wpArr[e],
                this.wp.broken(t);
    };
    Plane.prototype.explode = function (t) {
        this.lr *= -1;
        var e = 6.28 * Math.random(), i = 100 * Math.random() + 100, s = 500 * Math.random() + 1e3, n = 200 * Math.random();
        laya.utils.Tween.to(t, {
            x: Math.cos(e) * i + t.x,
            y: Math.sin(e) * i + t.y,
            rotation: this.lr * (180 * Math.random() + 360)
        }, s, laya.utils.Ease.expoOut, null, 100 * Math.random()),
            laya.utils.Tween.to(t, {
                alpha: 0,
                scaleX: 0,
                scaleY: 0
            }, 300, null, null, 600 + n);
    };
    Plane.prototype.explode2 = function (t) { };
    Plane.prototype.stopRed = function () {
        Plane.fileDead.stop(this.skin.sg);
        Plane.fileSg.play(this.skin.sg);
        // this.flashB = !this.flashB,
        //     this.flashB ? this.skin.jiTou.filters = Cfg.redF : this.skin.jiTou.filters = null,
        //     this.flashCount-- ,
        //     this.flashCount < 0 && (Laya.timer.clear(this, this.stopRed), this.skin.jiTou.filters = null);
    };
    Plane.prototype.SetWing = function () {
        var _this = this;
        this.lwingloaded = false;
        this.rwingloaded = false;
        if (this.mainType == 2 || SV.ME.useWingId == 1200) {
            this.skin.lwingpos && (this.skin.lwingpos.visible = false);
            this.skin.rwingpos && (this.skin.rwingpos.visible = false);
            this.skin.l.visible = true;
            this.skin.r.visible = true;
        }
        else {
            // this.skin.lwingpos && (this.skin.lwingpos.visible = true);
            // this.skin.rwingpos && (this.skin.rwingpos.visible = true);
            // this.skin.l.visible = false;
            // this.skin.r.visible = false;
            var data = CD.Game.ItemInfo[SV.ME.useWingId];
            this.lwing.load("res/DragonBones/chibang/" + data.bone, Laya.Handler.create(this, function () {
                _this.skin.lwingpos.visible = true;
                _this.skin.l.visible = false;
                _this.lwing.play("zhankai", false); //gongji\zhankai\changtai
            }));
            this.rwing.load("res/DragonBones/chibang/" + data.bone, Laya.Handler.create(this, function () {
                _this.skin.rwingpos.visible = true;
                _this.skin.r.visible = false;
                _this.rwing.play("zhankai", false);
            }));
        }
    };
    Plane.prototype.SendWingAtk = function () {
        var _this = this;
        //console.log("SendWingAtk///////////",this.wingAtkType,this.wingLastTime,this.wingDelayTime,this.wingAtkTime);
        this.wingAtkState = 1;
        this.lwing.play("gongji", false);
        this.rwing.play("gongji", false);
        switch (this.wingAtkType) {
            case 2: //减速
                Planet.setSlowRate3(.2, this.wingLastTime, true);
                Game.ME.PlayWingSkill(this.wingAtkType);
                Laya.timer.once(this.wingLastTime * 1000, this, function () {
                    _this.wingAtkState = 0;
                });
                break;
            case 5: //护盾
                this.wuDi(this.wingLastTime);
                UIHelper.doshow(this.skin.quaneff0);
                UIHelper.doshow(this.skin.quaneff3);
                this.skin.quaneff0.alpha = 0;
                this.skin.quaneff3.alpha = 0;
                this.skin.quaneff1.visible = true;
                this.skin.quaneff2.visible = true;
                this.skin.ani2.play(0, false);
                Laya.timer.once(this.wingLastTime * 1000, this, function () {
                    UIHelper.dohide(_this.skin.quaneff0);
                    UIHelper.dohide(_this.skin.quaneff3);
                    _this.skin.ani3.stop();
                    _this.skin.quaneff1.visible = false;
                    _this.skin.quaneff2.visible = false;
                    _this.wingAtkState = 0;
                });
                break;
        }
    };
    Plane.prototype.CloseQuanEff = function () {
        UIHelper.dohide(this.skin.quaneff0);
        UIHelper.dohide(this.skin.quaneff3);
        this.skin.ani2.stop();
        this.skin.ani3.stop();
        this.skin.quaneff1.visible = false;
        this.skin.quaneff2.visible = false;
        this.wingAtkState = 0;
    };
    Plane.prototype.QuanEffOver = function () {
        this.skin.quaneff1.visible = false;
        this.skin.quaneff2.visible = false;
        this.skin.ani3.play(0, true);
    };
    Plane.prototype.LWingStop = function () {
        //console.log("LWingStop******");
        this.lwingloaded = true;
        //this.wingAtkState == 1 && (this.skin.quaneff.visible = true);
        this.lwing.play("changtai", true);
    };
    Plane.prototype.RWingStop = function () {
        //console.log("RWingStop******");
        this.rwingloaded = true;
        this.rwing.play("changtai", true);
    };
    Plane.ME = null;
    Plane.fileAnim = null;
    Plane.fileSg = null;
    Plane.fileDead = null;
    return Plane;
}(Game_Event));
//# sourceMappingURL=Plane.js.map