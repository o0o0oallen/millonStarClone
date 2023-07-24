/*
* name;
*/
var Buttle8 = /** @class */ (function () {
    function Buttle8() {
        this.skin = null;
        this.id = 0;
        this.sitX = NaN;
        this.sitY = NaN;
        this.sitXOff = NaN;
        this.sitYOff = NaN;
        this.x = NaN;
        this.y = NaN;
        this.speed = .001;
        this.lr = false;
        this.xDir = NaN;
        this.yDir = NaN;
        this.lights = null;
        this.targetRoundX = NaN;
        this.targetRoundY = NaN;
        this.targetOffsetX = NaN;
        this.targetOffsetY = NaN;
        this.step = 0;
        this.timeBack = NaN;
        this._timeBack = NaN;
        this.shootDelay = 0;
        this.isSit = false;
        this.dirDamp = NaN;
        this.posDamp = NaN;
        this.lCount = -1;
        this.fScale = 1;
        this.pgsI = 6;
        this.szPlanet = new Dictionary();
        this.skin = new ui.Buttle8UI(),
            this.lights = [],
            this.lights.push(this.skin.p0),
            this.lights.push(this.skin.p1),
            this.lights.push(this.skin.p2),
            this.lights.push(this.skin.p3),
            this.lights.push(this.skin.p4),
            this.lights.push(this.skin.p5),
            this.lights.push(this.skin.p6),
            this.light(0);
        this.skin.rangeimg.visible = false;
        this.skin.ani1.play(0, true);
    }
    Buttle8.prototype.sit = function (a) {
        if (a === void 0) { a = ""; }
        //console.log("buttle***sit***"+a+"**"+this.skin.buttleobj.rotation);
        this.step = 0,
            this.isSit = true,
            this.skin.rotation = 0,
            this.skin.x = this.x = this.sitX,
            this.skin.y = this.y = this.sitY;
        this.szPlanet.clear();
        Laya.Tween.clearAll(this.skin.buttleobj);
        this.skin.rangeimg.visible = false;
        this.skin.buttleobj.rotation = 0;
        this.skin.buttleobj.scale(1, 1);
    };
    Buttle8.prototype.checkDis = function () {
        var e, s, n, dis, img;
        var i;
        for (i = 0; i < Planet.countAll; i++) {
            s = (e = Planet.all[i]).x - this.skin.x;
            n = e.y - this.skin.y;
            dis = (s * s) + (n * n);
            //console.log("checkDis******",dis,e.rSqr,Cfg.fNum3,(Cfg.fNum3 + e.r) * (Cfg.fNum3 + e.r));
            if (!e.complete && dis < (Cfg.fNum3 + e.r) * (Cfg.fNum3 + e.r)) {
                if (!this.szPlanet.ContainsKey(e.id)) {
                    //console.log("addplanet******",e.id);
                    e.setDrawButtle(this, true);
                    img = ImgLink.start("ui1/lianxian1.png", this.skin, e.skin, 1);
                    this.szPlanet.Add(e.id, img);
                }
                e.hit(Cfg.fDamage);
            }
            else {
                this.planetkill(e.id, "checkdis");
            }
        }
    };
    Buttle8.prototype.testHit = function () {
        var e, s, n, dis, img;
        var i;
        for (i = 0; i < Planet.countAll; i++) {
            s = (e = Planet.all[i]).x - this.skin.x;
            n = e.y - this.skin.y;
            dis = (s * s) + (n * n);
            //console.log("checkDis******",s,n,Cfg.fNum3);
            if (dis < (56 + e.r) * (56 + e.r) && !e.complete) {
                this.open(true);
            }
        }
    };
    Buttle8.prototype.send = function (e) {
        var _this = this;
        //console.log("weapon8****send***",e);
        this.isSit = false,
            this.pgsI = 6,
            this.timeBack = Game.time,
            Game.ME.layerPlane.addChild(this.skin);
        this.skin.x = this.x = this.skin.x + Plane.ME.x - Plane.ME.skin.jiTou.x,
            this.skin.y = this.y = this.skin.y + Plane.ME.y - Plane.ME.skin.jiTou.y,
            this.skin.buttleobj.rotation = 0,
            this.skin.buttleobj.scale(1, 1),
            MSound.ME.playSoundLimit("w_buttle8_f"),
            Laya.Tween.to(this.skin.buttleobj, {
                rotation: 720
            }, 600, Laya.Ease.quintIn, Laya.Handler.create(this, function () {
                _this.step = 1;
            }));
        // laya.utils.Tween.to(this.skin, {
        //     y: 400.0 / 1920 * MStage.ME.GetWinHeight()
        // },
        //     1000, laya.utils.Ease.quintIn, Laya.Handler.create(this, this.open, [true]), 200);
    };
    Buttle8.prototype.back = function () {
        var tobj;
        var nkey;
        for (var i = 0; i < this.szPlanet.length; i++) {
            tobj = this.szPlanet.GetValueOfIndex(i);
            tobj && ImgLink.stop(tobj);
            nkey = this.szPlanet.GetKeyOfIndex(i);
            //console.log("back***",nkey);
            tobj = Planet.getPlanet(nkey);
            tobj && tobj.setDrawButtle(this, false);
        }
        this.szPlanet.clear();
        Laya.Tween.clearAll(this.skin.buttleobj);
        this.skin.rangeimg.visible = false;
        this.skin.buttleobj.rotation = 0;
        this.skin.buttleobj.scale(1, 1);
        this.isSit && 3 != this.step || (this.step = 0, Weapon8.ME.back(this), this.open(false));
    };
    Buttle8.prototype.planetkill = function (nid, srea) {
        //console.log("delplanet*****",nid,srea);
        var tobj;
        if (this.szPlanet.ContainsKey(nid)) {
            tobj = this.szPlanet.GetValue(nid);
            tobj && ImgLink.stop(tobj);
            tobj = Planet.getPlanet(nid);
            tobj && tobj.setDrawButtle(this, false);
            this.szPlanet.Del(nid);
        }
    };
    Buttle8.prototype.open = function (t) {
        if (t) {
            this.step = 2;
            this.fScale = 1.5;
            this.skin.rangeimg.visible = true;
            this.skin.rangeimg.width = Cfg.fNum3 * 2;
            this.skin.rangeimg.height = Cfg.fNum3 * 2;
            MSound.ME.playSoundLimit("w_buttle8_b");
        }
        else {
            this.step = 0;
            this.skin.rangeimg.visible = false;
        }
    };
    Buttle8.prototype.light = function (t) {
        //console.log("bulletlight***",t);
        for (var e = 0; e < this.lights.length; e++) {
            this.lights[e].visible = e == t;
        }
    };
    Buttle8.prototype.update = function () {
        var e = NaN, i = NaN, s = NaN, n = NaN;
        switch (this.step) {
            case 0:
                break;
            case 1:
                this.skin.y -= Game.dTime * 1000;
                this.skin.y < 400.0 / 1920 * MStage.ME.GetWinHeight() ? this.open(true) : this.testHit();
                break;
            case 2:
                if (Game.time > this.timeBack) {
                    this.timeBack = Game.time + 3 / 6,
                        this.pgsI--,
                        this.pgsI < 0 ? (this.step = 3, this.light(0), this.pgsI = 6) : this.light(this.pgsI);
                }
                Game.time > this.shootDelay && (this.shootDelay = Game.time + .2, this.checkDis());
                this.skin.buttleobj.rotation += 5;
                this.skin.buttleobj.scaleX < this.fScale ? (this.fScale = 1.5, this.skin.buttleobj.scaleX += Game.dTime, this.skin.buttleobj.scaleY += Game.dTime) : (this.fScale = 1, this.skin.buttleobj.scaleX -= Game.dTime, this.skin.buttleobj.scaleY -= Game.dTime);
                var tobj;
                var szkey = this.szPlanet.GetKeys();
                for (i = 0; i < szkey.length; i++) {
                    tobj = Planet.getPlanet(szkey[i]);
                    if (tobj == null || tobj.complete || tobj.complete2)
                        this.planetkill(szkey[i], "update");
                }
                break;
            case 3:
                this.back();
        }
    };
    Buttle8.target = null;
    Buttle8.rRound = 0;
    Buttle8.imgPool = null;
    return Buttle8;
}());
//# sourceMappingURL=Buttle8.js.map