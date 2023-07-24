/*
* name;
*/
var GameTip = /** @class */ (function () {
    function GameTip() {
    }
    GameTip.getTip = function (e) {
        var i;
        switch (e) {
            case "newer":
                return "MSG:" + GameTip.tipNewer[Math.min(4, Math.max(0, SV.ME.level - 2))];
            case "win":
                i = GameTip.tipWin;
                break;
            case "fail":
                i = GameTip.tipFail;
                break;
        }
        return "MSG:" + i[Math.round(Math.random() * (i.length - 1))];
    };
    GameTip.tipNewer = [""];
    GameTip.tipFail = [""];
    GameTip.tipWin = [""];
    return GameTip;
}());
//# sourceMappingURL=Lan.js.map