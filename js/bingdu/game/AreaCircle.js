/*
* name;
*/
var AreaCircle = /** @class */ (function () {
    function AreaCircle() {
        this.img = null;
        this.useAble = false;
        this.size = 0;
        this.target = null;
        this.face = null;
        this.autoHide = true;
        this.img = new laya.ui.Image(),
            this.img.on("loaded", this, this.onLoad);
    }
    AreaCircle.prototype.onLoad = function (t) {
        this.img.pivotX = Math.round(.5 * this.img.source.width),
            this.img.pivotY = Math.round(.5 * this.img.source.height);
    };
    AreaCircle.prototype.setFace = function (t) {
        this.face != t && (this.face = t, this.img.skin = t);
    };
    AreaCircle.prototype.start = function () {
        this.img.scale(0, 0, true),
            this.img.alpha = 1,
            this.img.pos(this.target.x, this.target.y, true),
            laya.utils.Tween.to(this.img, {
                scaleX: 1,
                scaleY: 1
            }, 300, laya.utils.Ease.circOut, this.autoHide ? laya.utils.Handler.create(this, this.stop) : null);
    };
    AreaCircle.prototype.stop = function () {
        laya.utils.Tween.to(this.img, {
            scaleX: 1.2,
            scaleY: 1.2,
            alpha: 0
        }, 300, laya.utils.Ease.circOut, laya.utils.Handler.create(this, this.kill));
    };
    AreaCircle.prototype.kill = function () {
        null != this.img.parent && this.img.parent.removeChild(this.img),
            this.useAble = true;
    };
    AreaCircle.INIT = function (e) {
        AreaCircle.parent = e,
            AreaCircle.items = [],
            AreaCircle.all = [],
            AreaCircle.countPool = 0,
            AreaCircle.countAll = 0;
    };
    AreaCircle.getOne = function () {
        for (var e = 0; e < AreaCircle.countPool; e++)
            if ((AreaCircle.item = AreaCircle.items[e]).useAble)
                return AreaCircle.item.useAble = false,
                    AreaCircle.item;
        return AreaCircle.item = new AreaCircle(),
            AreaCircle.item.useAble = false,
            AreaCircle.items.push(AreaCircle.item),
            AreaCircle.countPool++,
            AreaCircle.item;
    };
    AreaCircle.start = function (e, i) {
        return (AreaCircle.item = AreaCircle.getOne()).setFace(e),
            AreaCircle.item.target = i,
            AreaCircle.all.push(AreaCircle.item),
            AreaCircle.countAll++,
            AreaCircle.parent.addChildAt(AreaCircle.item.img, AreaCircle.parent.getChildIndex(i)),
            AreaCircle.item.start(),
            AreaCircle.item;
    };
    AreaCircle.stop = function (t) {
        t.stop();
    };
    AreaCircle.parent = null;
    AreaCircle.items = null;
    AreaCircle.item = null;
    AreaCircle.countPool = 0;
    AreaCircle.all = null;
    AreaCircle.countAll = 0;
    return AreaCircle;
}());
//# sourceMappingURL=AreaCircle.js.map