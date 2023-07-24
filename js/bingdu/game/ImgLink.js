/*
* name;
*/
var ImgLink = /** @class */ (function () {
    function ImgLink() {
        this.img = null;
        this.a = null;
        this.b = null;
        this.useAble = false;
        this.name = null;
        this.isStop = false;
        this.img = new laya.ui.Image(),
            this.img.on("loaded", this, this.onLoad),
            this.img.width = 10;
    }
    ImgLink.prototype.setFace = function (t) {
        this.faceUrl != t && (this.faceUrl = t, this.img.source = Laya.loader.getRes(t));
    };
    ImgLink.prototype.onLoad = function (t) {
        this.img.pivotY = Math.round(.5 * this.img.source.height);
    };
    ImgLink.prototype.update = function () {
        if (!this.isStop) {
            var t = this.b.x - this.a.x;
            var e = this.b.y - this.a.y;
            this.img.rotation = Math.atan2(e, t) / 3.1415 * 180;
            this.img.pos(this.a.x, this.a.y);
            this.img.scaleX = .1 * Math.sqrt(t * t + e * e);
        }
    };
    ImgLink.prototype.start = function () {
        this.isStop = false;
        this.img.scaleY = 1;
        this.update();
    };
    ImgLink.prototype.stop = function (t) {
        if (t === void 0) { t = null; }
        this.isStop = true;
        laya.utils.Tween.to(this.img, {
            scaleX: 0,
            scaleY: .2
        }, 100, null, laya.utils.Handler.create(this, this._stop));
    };
    ImgLink.prototype._stop = function () {
        this.useAble = true;
    };
    ImgLink.INIT = function (e) {
        ImgLink.parent = e, //ltt
            ImgLink.items = [],
            ImgLink.all = [],
            ImgLink.countPool = 0,
            ImgLink.countAll = 0;
    };
    ImgLink.getOne = function () {
        for (var e = 0; e < ImgLink.countPool; e++)
            if ((ImgLink.item = ImgLink.items[e]).useAble)
                return ImgLink.item.useAble = false,
                    ImgLink.item;
        return ImgLink.item = new ImgLink(),
            ImgLink.item.useAble = false,
            ImgLink.items.push(ImgLink.item),
            ImgLink.countPool++,
            ImgLink.item;
    };
    ImgLink.start = function (e, i, s, layer) {
        if (layer === void 0) { layer = 0; }
        return (ImgLink.item = ImgLink.getOne()).setFace(e),
            ImgLink.item.a = i,
            ImgLink.item.b = s,
            ImgLink.all.push(ImgLink.item),
            ImgLink.countAll++,
            layer == 0 ? Game.ME.layerBug0.addChild(ImgLink.item.img) : Game.ME.layerBug1.addChild(ImgLink.item.img),
            ImgLink.item.start(),
            ImgLink.item;
    };
    ImgLink.stop = function (t) {
        t.stop();
    };
    ImgLink.updateAll = function () {
        for (var e = ImgLink.countAll; e--;)
            (ImgLink.item = ImgLink.all[e]).useAble ? (ImgLink.all.splice(e, 1), ImgLink.parent.removeChild(ImgLink.item.img), ImgLink.countAll--) : ImgLink.item.update();
    };
    ImgLink.parent = null;
    ImgLink.items = null;
    ImgLink.item = null;
    ImgLink.countPool = 0;
    ImgLink.all = null;
    ImgLink.countAll = 0;
    return ImgLink;
}());
//# sourceMappingURL=ImgLink.js.map