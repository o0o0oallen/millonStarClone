/*
* name;
*/
var Buttle = /** @class */ (function () {
    function Buttle() {
        this.isFu = false;
        this.name = null;
        this.img = null;
        this.startX = NaN;
        this.startY = NaN;
        this.xOffPos = NaN;
        this.xDir = 0;
        this.yDir = 0;
        this.complete = false;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.xPresent = 0;
        this.damage = null;
        this.bName = null;
        this.nType = 0;
        this.img = new laya.ui.Image();
    }
    Buttle.prototype.setFace = function (t) { };
    Buttle.prototype.sendBy = function (t, e, i, s, n, a, h) { };
    Buttle.prototype.testHit = function (t) {
        var e = 0, i = 0;
        return e = t.x - this.x,
            i = t.y - this.y,
            e *= e,
            i *= i,
            e + i < t.rSqr;
    };
    Buttle.prototype.update = function () { };
    Buttle.prototype.hitFx = function () {
        FPool.ME.createByFun(Buttle.createFxHit).play(this.x, this.y);
    };
    Buttle.prototype.kill = function (t) {
        this.complete = true;
        this.img.visible = false;
    };
    Buttle.addFxHit = function (e) {
        Buttle.fxHits.push(e);
        Buttle.countFxHit = Buttle.fxHits.length;
    };
    Buttle.add = function (e) {
        Buttle.all.push(e);
        Buttle.countAll = Buttle.all.length;
    };
    Buttle.removeAll = function () {
        for (var e, i = Buttle.countAll; i--;)
            (e = Buttle.all[i]).name = "",
                e.img.visible = false;
        Buttle.all = [],
            Buttle.countAll = 0;
    };
    Buttle.updateAll = function () {
        // console.log("updateAll~~~~~~~~~~~~~~",Buttle.countAll)
        for (var e, i = Buttle.countAll; i--;)
            (e = Buttle.all[i]).complete ? (e.name = "", Buttle.all.splice(i, 1), Buttle.countAll--) : e.update();
        for (i = Buttle.countFxHit; i--;)
            Buttle.fxHits[i].update();
    };
    Buttle.initFxHit = function () {
        var e = new FxHit();
        e.img1 = Game.ME.gui.h0;
        e.img2 = Game.ME.gui.h1;
        e.img3 = Game.ME.gui.h2;
        Game.ME.layerPlane.addChild(e.img1);
        Game.ME.layerPlane.addChild(e.img2);
        Game.ME.layerPlane.addChild(e.img3);
        FPool.ME.pushByFun(Buttle.createFxHit, e);
        Buttle.addFxHit(e);
    };
    Buttle.createFxHit = function () {
        var e = new FxHit();
        e.img1 = new laya.ui.Image();
        e.img1.source = Game.ME.gui.h0.source;
        e.img1.pivotX = Game.ME.gui.h0.pivotX;
        e.img1.pivotY = Game.ME.gui.h0.pivotY;
        e.img2 = new laya.ui.Image();
        e.img2.source = Game.ME.gui.h1.source;
        e.img2.pivotX = Game.ME.gui.h1.pivotX;
        e.img2.pivotY = Game.ME.gui.h1.pivotY;
        e.img3 = new laya.ui.Image();
        e.img3.source = Game.ME.gui.h2.source;
        e.img3.pivotX = Game.ME.gui.h2.pivotX;
        e.img3.pivotY = Game.ME.gui.h2.pivotY;
        Game.ME.layerPlane.addChild(e.img1);
        Game.ME.layerPlane.addChild(e.img2);
        Game.ME.layerPlane.addChild(e.img3);
        Buttle.addFxHit(e);
        return e;
    };
    ;
    Buttle.all = [];
    Buttle.countAll = 0;
    Buttle.fxHits = [];
    Buttle.countFxHit = 0;
    return Buttle;
}());
//# sourceMappingURL=Buttle.js.map