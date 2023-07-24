/*
* name;
*/
var MathTools = /** @class */ (function () {
    function MathTools() {
    }
    MathTools.sortBigFirst = function (t, e) {
        return t == e ? 0 : e > t ? 1 : -1;
    };
    MathTools.sortSmallFirst = function (t, e) {
        return t == e ? 0 : e > t ? -1 : 1;
    };
    MathTools.sortNumBigFirst = function (t, e) {
        return parseFloat(e) - parseFloat(t);
    };
    MathTools.sortNumSmallFirst = function (t, e) {
        return parseFloat(t) - parseFloat(e);
    };
    MathTools.sortByKey = function (e, i, s) {
        void 0 === i && (i = false),
            void 0 === s && (s = true);
        var n;
        return n = i ? s ? MathTools.sortNumBigFirst : MathTools.sortBigFirst : s ? MathTools.sortNumSmallFirst : MathTools.sortSmallFirst,
            function (t, i) {
                return n(t[e], i[e]);
            };
    };
    return MathTools;
}());
//# sourceMappingURL=MathTools.js.map