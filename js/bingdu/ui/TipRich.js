/*
* name;
*/
var TipRich = /** @class */ (function () {
    function TipRich(e, s) {
        this.ddborder = 16;
        this.skin = null;
        this.ddit1 = null;
        this.ddit2 = null;
        this.ddit3 = null;
        this.ddi1 = null;
        this.skin = e,
            // this.ddit1 = s.clone(new laya.display.Sprite()).setAlign("left"),
            // this.ddit2 = s.clone(new laya.display.Sprite()).setAlign("left"),
            // this.ddit3 = s.clone(new laya.display.Sprite()).setAlign("left"),
            this.ddit1 = new laya.ui.Label(),
            this.ddit1.font = "font_40_white",
            this.ddit1.anchorY = .5,
            this.ddit1.align = "left",
            this.ddit1.scale(1.2, 1.2, true);
        this.ddit2 = new laya.ui.Label(),
            this.ddit2.font = "font_40_white",
            this.ddit2.anchorY = .5,
            this.ddit2.align = "left",
            this.ddit2.scale(1.2, 1.2, true);
        this.ddit3 = new laya.ui.Label(),
            this.ddit3.font = "font_40_white",
            this.ddit3.anchorY = .5,
            this.ddit3.align = "left",
            this.ddit3.scale(1.2, 1.2, true);
        this.ddi1 = new laya.ui.Image();
        TipRich.ME = this;
        Laya.stage.addChild(this.skin),
            UIHelper.dohide(this.skin);
    }
    TipRich.prototype.showT = function (t, e) {
        if (e === void 0) { e = "#ffffff"; }
        return this.ddit1.text = t, //this.ddit1.setText(t).setColor(e),
            //this.ddit1.sprite.size(this.ddit1.width, this.ddit1.height),
            //this.setContents([this.ddit1.sprite]),
            this.setContents([this.ddit1]),
            this;
    };
    TipRich.prototype.showIT = function (t, e, s) {
        if (s === void 0) { s = "#ffffff"; }
        return this.ddi1.source = Laya.loader.getRes(t),
            this.ddi1.pivotY = .5 * this.ddi1.height,
            //this.ddit1.setText(e).setColor(s),
            this.ddit1.text = e,
            //this.ddit1.sprite.size(this.ddit1.width, this.ddit1.height),
            //this.setContents([this.ddi1, this.ddit1.sprite]),
            this.setContents([this.ddi1, this.ddit1]),
            this;
    };
    TipRich.prototype.showTTT = function (t, e, i, s, n, a) {
        if (s === void 0) { s = "#ffffff"; }
        if (n === void 0) { n = "#00ffff"; }
        if (a === void 0) { a = "#ffffff"; }
        return this.ddit1.text = t, //this.ddit1.setText(t).setColor(s),
            this.ddit2.text = e, //this.ddit2.setText(e).setColor(n),
            this.ddit3.text = i, // this.ddit3.setText(i).setColor(a),
            //this.ddit1.sprite.size(this.ddit1.width, this.ddit1.height),
            //this.ddit2.sprite.size(this.ddit2.width, this.ddit2.height),
            //this.ddit3.sprite.size(this.ddit3.width, this.ddit3.height),
            //this.setContents([this.ddit1.sprite, this.ddit2.sprite, this.ddit3.sprite]),
            this.setContents([this.ddit1, this.ddit2, this.ddit3]),
            this;
    };
    TipRich.prototype.showTIT = function (t, e, s, n, a) {
        if (n === void 0) { n = "left"; }
        if (a === void 0) { a = -1; }
        return this.ddit1.text = t, //this.ddit1.setText(t).setColor(n),
            this.ddit1.align = n,
            this.ddit1.displayWidth > MStage.ME.GetWinWidth() ? (this.ddit1.wordWrap = true, this.ddit1.width = MStage.ME.GetWinWidth()) : (this.ddit1.wordWrap = false, this.ddit1.width = undefined),
            this.ddi1.source = Laya.loader.getRes(e),
            this.ddi1.pivotY = .5 * this.ddi1.height,
            this.ddit2.text = s, //this.ddit2.setText(s).setColor(a),
            //this.ddit1.sprite.size(this.ddit1.width, this.ddit1.height),
            //this.ddit2.sprite.size(this.ddit2.width, this.ddit2.height),
            //this.setContents([this.ddit1.sprite, this.ddi1, this.ddit2.sprite]),
            this.setContents([this.ddit1, this.ddi1, this.ddit2]),
            this;
    };
    TipRich.prototype.setContents = function (t) {
        this.skin.contents.removeChildren();
        for (var e, i = 0, s = 0, n = 0, a = t.length; n < a; n++)
            e = t[n],
                this.skin.contents.addChild(e),
                e.x = i,
                e.y = 0,
                i += e.displayWidth,
                s = Math.max(s, e.displayHeight);
        return this.skin.bg.height = s + 2 * this.ddborder,
            this.skin.bg.width = i + 2 * this.ddborder,
            this.skin.contents.x = this.ddborder,
            this.skin.contents.y = .5 * s + this.ddborder,
            i = this.skin.bg.width >= MStage.ME.GetWinWidth() ? MStage.ME.GetWinWidth() / this.skin.bg.width : 1,
            this.skin.scale(i, i, true),
            this.skin.pivotX = .5 * this.skin.bg.width,
            this.skin.pivotY = .5 * this.skin.bg.height,
            this;
    };
    TipRich.prototype.doshow = function (t, e) {
        if (t === void 0) { t = 2e3; }
        if (e === void 0) { e = 0; }
        this.showAlways(e);
        laya.utils.Tween.to(this.skin, {
            y: this.skin.y - 120,
            alpha: 0
        }, 600, laya.utils.Ease.circIn, laya.utils.Handler.create(this, this.dohide), t);
    };
    TipRich.prototype.showAlways = function (t) {
        if (t === void 0) { t = 0; }
        0 == t && (t = .4 * MStage.ME.GetWinHeight()),
            UIHelper.doshow(this.skin),
            this.skin.alpha = 0,
            this.skin.x = MStage.ME.cx,
            this.skin.y = t,
            laya.utils.Tween.clearAll(this.skin),
            laya.utils.Tween.to(this.skin, {
                y: this.skin.y - 60,
                alpha: 1
            }, 600, laya.utils.Ease.circOut);
    };
    TipRich.prototype.dohide = function () {
        UIHelper.dohide(this.skin);
        this.ddit1.wordWrap = false;
        this.ddit1.width = undefined;
        this.ddit1.align = "left";
    };
    TipRich.ME = null;
    return TipRich;
}());
//# sourceMappingURL=TipRich.js.map