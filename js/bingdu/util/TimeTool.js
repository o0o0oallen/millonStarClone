/*
* name;
*/
var TimeTool = /** @class */ (function () {
    function TimeTool() {
    }
    TimeTool.formatTimeMS = function (t) {
        var e = "", i = Math.floor(t / 60);
        return i < 10 && (e += "0"),
            e += i + ":",
            (t %= 60) < 10 && (e += "0"),
            e += t;
    };
    TimeTool.getNowSecond = function () {
        var t = new Date();
        return 31536e3 * (t.getFullYear() - 2017) + 2592e3 * t.getMonth() + 86400 * t.getDate() + 3600 * t.getHours() + 60 * t.getMinutes() + t.getSeconds();
    };
    TimeTool.getTimer = function () {
        return new Date().getTime();
    };
    return TimeTool;
}());
//# sourceMappingURL=TimeTool.js.map