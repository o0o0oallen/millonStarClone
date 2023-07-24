/**
* fly.game.ImgText
*/
var ImgText = /** @class */ (function () {
    function ImgText(t) {
        this.sprite = null;
        this.chars = null;
        this.alignCenter = true;
        this.alignRight = false;
        this.offX = 0;
        this.offY = 0;
        this.space = 3;
        this.width = 0;
        this.height = 0;
        this.txt = null;
        this.sprite = t;
        ;
    }
    ImgText.prototype.initPub = function (t, e, s) {
        if (s === void 0) { s = "c"; }
        this.chars = {};
        var n, a = 0;
        this.height = 0;
        for (var h = 0, r = t.length; h < r; h++)
            a = t.charCodeAt(h),
                null != (n = Laya.loader.getRes(e + s + a + ".png")) ? (this.height = Math.max(this.height, n.height), this.chars[a] = {
                    tex: n,
                    offY: .5 * -n.height
                }) : console.log(t.charAt(h), "找不到", e + s + a + ".png");
    };
    ImgText.prototype.setAlign = function (t) {
        switch (this.alignCenter = false, this.alignRight = false, t) {
            case "center":
                this.alignCenter = true;
                break;
            case "right":
                this.alignCenter = true,
                    this.alignRight = true;
        }
        return this;
    };
    ImgText.prototype.setColor = function (t) {
        return this.sprite.filters = ColorFilterPool.getColorFilter(t),
            this;
    };
    ImgText.prototype.setText = function (t) {
        var e, i = 0, s = 0, n = t.length, a = 0, h = 0;
        if (this.txt = t, this.sprite.graphics.clear(), this.alignCenter) {
            for (s = 0; s < n; s++)
                if (32 == (h = t.charCodeAt(s)))
                    i += 10;
                else {
                    if (null == (e = this.chars[h]))
                        return console.log("ImgText Error:", t, s, t.charAt(s)),
                            this;
                    i += e.tex.width + this.space;
                }
            a = i * (this.alignRight ? 1 : .5);
        }
        for (i = 0, s = 0; s < n; s++)
            if (32 == (h = t.charCodeAt(s)))
                i += 10;
            else {
                if (null == (e = this.chars[h])) {
                    //console.log("找不到", s, t.charAt(s));
                    continue;
                }
                // this.sprite.graphics.dr
                this.sprite.graphics.drawTexture(e.tex, i - a, e.offY),
                    i += e.tex.width + this.space;
            }
        return this.width = i,
            this;
    };
    ImgText.prototype.clone = function (e) {
        var i = new ImgText(e);
        return e.ui = i,
            i.height = this.height,
            i.chars = this.chars,
            i;
    };
    return ImgText;
}());
//end fly.game.ImgText
//# sourceMappingURL=ImgText.js.map