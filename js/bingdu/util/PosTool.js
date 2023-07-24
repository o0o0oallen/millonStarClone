/*
* name;
*/
var PosTool = /** @class */ (function () {
    function PosTool() {
    }
    PosTool._center = function (t, e) {
        null == e && (e = Laya.stage),
            t.x = .5 * (e.width - t.width),
            t.y = .5 * (e.height - t.height);
    };
    PosTool.center2 = function (t, e) {
        null == e && (e = Laya.stage),
            t.x = .5 * e.width,
            t.y = .5 * e.height;
    };
    PosTool._localToGlobal = function (e, i, s) {
        if (i === void 0) { i = 0; }
        if (s === void 0) { s = 0; }
        return PosTool._point.setTo(i, s),
            e.localToGlobal(PosTool._point);
    };
    PosTool.disSqrO = function (t, e) {
        var i = t.x - e.x, s = t.y - e.y;
        return i * i + s * s;
    };
    PosTool.disSqr = function (t, e) {
        var i = t.x - e.x, s = t.y - e.y;
        return i * i + s * s;
    };
    PosTool.dis2PointSqr = function (t, e, i) {
        var s = t.x - e, n = t.y - i;
        return s * s + n * n;
    };
    PosTool._point = new laya.maths.Point();
    return PosTool;
}());
//# sourceMappingURL=PosTool.js.map