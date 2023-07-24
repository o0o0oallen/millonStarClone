/*
* name;
*/
var TextBg = /** @class */ (function () {
    function TextBg(t) {
        this.pt = 5;
        this.pb = 5;
        this.pl = 10;
        this.pr = 10;
        this.skin = null;
        this.t = null;
        this.skin = t,
            this.t = t.getChildAt(0);
    }
    TextBg.prototype.padding = function (t, e, i, s) {
        return this.pt = i,
            this.pb = s,
            this.pl = t,
            this.pr = e,
            this.t.x = t,
            this.t.y = i,
            this;
    };
    TextBg.prototype.setText = function (t) {
        return this.t.text = t,
            this.skin.width = this.t.width + this.pl + this.pr,
            this.skin.height = this.t.height + this.pt + this.pb,
            this;
    };
    return TextBg;
}());
//# sourceMappingURL=TextBg.js.map