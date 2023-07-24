/*
* name;
*/
var data_json = /** @class */ (function () {
    function data_json() {
        this.txt = null;
    }
    data_json.prototype.setData = function (t) {
        this.txt = t;
    };
    data_json.prototype.getLine = function (t) {
        // var e = 0;
        // var i = 0;
        // var s = -1;
        // for (e = this.txt.indexOf("\n", e); ++i < t;) if (s = e, -1 == (e = this.txt.indexOf("\n", e + 1))) return "abc";
        // return this.txt.substring(s + 1, e - 1);
        return this.txt[t];
    };
    data_json.prototype.getLineArrStr = function (t) {
        // return this.getLine(t).split("\t");
        return this.getLine(t).split(",");
    };
    return data_json;
}());
//# sourceMappingURL=DataTable.js.map