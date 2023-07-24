/*
* name;
*/
var ColorFilterPool = /** @class */ (function () {
    function ColorFilterPool() {
    }
    ColorFilterPool.getColorFilter = function (e) {
        var i = ColorFilterPool.dic[e];
        if (null == i) {
            var s = ColorTool.getRGBByRGBStr(e);
            i = [new laya.filters.ColorFilter([s[0] / 255, 0, 0, 0, 1, 0, s[1] / 255, 0, 0, 1, 0, 0, s[2] / 255, 0, 1, 1, 1, 1, 1, 1])];
        }
        return ColorFilterPool.dic[e] = i,
            i;
    };
    ColorFilterPool.getGray = function () {
        return null == ColorFilterPool.grayscaleFilter && (ColorFilterPool.grayscaleFilter = [new laya.filters.ColorFilter([.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0])]),
            ColorFilterPool.grayscaleFilter;
    };
    ColorFilterPool.dic = {};
    ColorFilterPool.grayscaleFilter = null;
    return ColorFilterPool;
}());
//# sourceMappingURL=ColorFilterPool.js.map