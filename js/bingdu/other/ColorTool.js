/*
* name;
*/
var ColorTool = /** @class */ (function () {
    function ColorTool() {
        this.red = NaN;
        this.green = NaN;
        this.blue = NaN;
    }
    ColorTool.toHexColor = function (t) {
        return laya.utils.Utils.toHexColor(t);
    };
    ColorTool.getRGBByRGBStr = function (t) {
        "#" == t.charAt(0) && (t = t.substr(1));
        var e = parseInt(t, 16);
        t.length;
        return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
    };
    ColorTool.getColorBit = function (t) {
        var e;
        return e = Math.floor(t).toString(16),
            e = e.length > 1 ? e : "0" + e;
    };
    ColorTool.getRGBStr = function (e) {
        return "#" + ColorTool.getColorBit(e[0]) + ColorTool.getColorBit(e[1]) + ColorTool.getColorBit(e[2]);
    };
    ColorTool.traseHSB = function (t) {
        console.log("hsb:", t[0], t[1], t[2]);
    };
    ColorTool.rgb2hsb = function (t, e, i) {
        var s = [t, e, i];
        s.sort(MathTools.sortNumSmallFirst);
        var n = s[2], a = s[0], h = 0;
        return n == a ? h = 1 : 0 == t && 0 == e && 0 == i || (n == t && e >= i ? h = 60 * (e - i) / (n - a) + 0 : n == t && e < i ? h = 60 * (e - i) / (n - a) + 360 : n == e ? h = 60 * (i - t) / (n - a) + 120 : n == i && (h = 60 * (t - e) / (n - a) + 240)),
            [h, 0 == n ? 0 : (n - a) / n, n / 255];
    };
    ColorTool.hsb2rgb = function (t, e, i) {
        var s = 0, n = 0, a = 0, h = Math.floor(t / 60 % 6), r = t / 60 - h, o = i * (1 - e), l = i * (1 - r * e), u = i * (1 - (1 - r) * e);
        switch (h) {
            case 0:
                s = i,
                    n = u,
                    a = o;
                break;
            case 1:
                s = l,
                    n = i,
                    a = o;
                break;
            case 2:
                s = o,
                    n = i,
                    a = u;
                break;
            case 3:
                s = o,
                    n = l,
                    a = i;
                break;
            case 4:
                s = u,
                    n = o,
                    a = i;
                break;
            case 5:
                s = i,
                    n = o,
                    a = l;
        }
        return [Math.floor(255 * s), Math.floor(255 * n), Math.floor(255 * a)];
    };
    return ColorTool;
}());
//# sourceMappingURL=ColorTool.js.map