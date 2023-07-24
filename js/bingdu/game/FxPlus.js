/*
* name;
*/
var FxPlus = /** @class */ (function () {
    function FxPlus() {
        this.img = null;
        this.randomR = 0;
        this.useAble = false;
        this.name = null;
        this.local = null;
        this.startV = 0;
        this.dura = .6;
        this.deltaV = 1;
        this.timeEnd = NaN;
        this.timeStart = NaN;
        this.scale = NaN;
        this.yOff = 0;
        this.img = new laya.ui.Image(),
            this.img.on("loaded", this, this.onLoad);
    }
    FxPlus.prototype.setFace = function (t) {
        this.img.skin = t;
    };
    FxPlus.prototype.onLoad = function (t) {
        this.img.pivotX = Math.round(.5 * this.img.source.width);
        this.img.pivotY = Math.round(.5 * this.img.source.height);
    };
    FxPlus.prototype.start = function (e) {
        this.local = e;
        this.img.pos(e.x, e.y - 100 * e.scaleY);
        this.img.visible = true;
        this.timeStart = FxPlus.time;
        this.timeEnd = this.timeStart + this.dura;
        this.startV = 0;
        this.yOff = 0;
    };
    FxPlus.prototype.update = function () {
        if (FxPlus.time < this.timeEnd) {
            var e = laya.utils.Ease.circOut(FxPlus.time - this.timeStart, 0, 1, this.dura);
            this.yOff += 10 * this.local.scaleY,
                this.img.pos(this.local.x, this.local.y - this.yOff),
                e < .95 ? e /= .95 : e = 1 - (e - .95) / .05,
                e *= 2 * this.local.scaleX,
                this.img.scale(e, e, true);
        }
        else
            this.img.visible = false,
                this.useAble = true;
    };
    FxPlus.INIT = function (e) {
        FxPlus.parent = e,
            FxPlus.items = [],
            FxPlus.all = [],
            FxPlus.countPool = 0,
            FxPlus.countAll = 0;
    };
    FxPlus.getOne = function () {
        for (var e = 0; e < FxPlus.countPool; e++)
            if ((FxPlus.item = FxPlus.items[e]).useAble)
                return FxPlus.item.useAble = false,
                    FxPlus.item;
        return FxPlus.item = new FxPlus(),
            FxPlus.item.useAble = false,
            FxPlus.items.push(FxPlus.item),
            FxPlus.parent.addChildAt(FxPlus.item.img, 0),
            FxPlus.countPool++,
            FxPlus.item;
    };
    FxPlus.start = function (e, i) {
        return (FxPlus.item = FxPlus.getOne()).setFace(e),
            FxPlus.all.push(FxPlus.item),
            FxPlus.countAll++,
            FxPlus.item.start(i),
            FxPlus.item;
    };
    FxPlus.stop = function (t) {
        t.useAble = true;
    };
    FxPlus.updateAll = function (e) {
        FxPlus.time = e;
        for (var i = FxPlus.countAll; i--;)
            (FxPlus.item = FxPlus.all[i]).useAble ? (FxPlus.all.splice(i, 1), FxPlus.countAll--) : FxPlus.item.update();
    };
    FxPlus.parent = null;
    FxPlus.items = null;
    FxPlus.item = null;
    FxPlus.countPool = 0;
    FxPlus.all = null;
    FxPlus.countAll = 0;
    FxPlus.time = 0;
    return FxPlus;
}());
//# sourceMappingURL=FxPlus.js.map