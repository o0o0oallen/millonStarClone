/*
* name;
*/
var ArrayTool = /** @class */ (function () {
    function ArrayTool() {
    }
    ArrayTool.inArray = function (e, i) {
        for (ArrayTool.i = 0, ArrayTool.count = i.length; ArrayTool.i < ArrayTool.count; ArrayTool.i++)
            if (e == i[ArrayTool.i])
                return true;
        return false;
    };
    ArrayTool.RandomOrder = function (t) {
        if (0 == t.length)
            return t;
        for (var e = []; t.length > 0;)
            e = e.concat(t.splice(Math.round(Math.random() * (t.length - 1)), 1));
        return e;
    };
    ArrayTool.max = function (t) {
        for (var e = t.length, i = -99999; e--;)
            i < t[i] && (i = t[i]);
        return i;
    };
    ArrayTool.i = 0;
    ArrayTool.count = 0;
    return ArrayTool;
}());
//# sourceMappingURL=ArrayTool.js.map