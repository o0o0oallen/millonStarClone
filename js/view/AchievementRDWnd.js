var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var AchievementRDWnd = /** @class */ (function (_super) {
    __extends(AchievementRDWnd, _super);
    function AchievementRDWnd() {
        var _this = _super.call(this) || this;
        _this.bget.on(Laya.Event.MOUSE_DOWN, _this, _this.onbtnClick);
        CD.Language == Language.ru && (_this.stip1.scale(.5, .5),
            _this.stip2.scale(.5, .5));
        CD.Language == Language.fr && (_this.stip1.scale(.5, .5),
            _this.stip2.scale(.5, .5));
        CD.Language == Language.de && (_this.stip1.scale(.5, .5),
            _this.stip2.scale(.5, .5));
        CD.Language == Language.it && (_this.stip1.scale(.5, .5),
            _this.stip2.scale(.5, .5));
        CD.Language == Language.pt && (_this.stip1.scale(.5, .5),
            _this.stip2.scale(.5, .5));
        return _this;
    }
    AchievementRDWnd.prototype.SetUI = function (dpData) {
        this.doClick = true;
        this.data = dpData;
        this.sttile.text = dpData._name.toString();
        this.stip1.text = dpData._tip1.toString();
        this.stip2.text = dpData._tip2.toString(); //+ dpData._isfly.toString()
        this.jlall.text = dpData._jl.toString();
        this.jlimg.skin = dpData._jlpic;
        this.pimg.skin = dpData._pic;
        this.pimglb.text = "";
        if (dpData._kinds == 51) {
            this.pimg.scale(0.8, 0.9, true);
        }
        else if (dpData._kinds == 4) {
            this.pimg.scale(0.8, 0.8, true);
        }
        else if (dpData._kinds == 5) {
            this.pimglb.text = ""; //Lan.G(100006);
            this.pimg.scale(1, 1, true);
        }
        else {
            this.pimg.scale(1, 1, true);
        }
        if (dpData._isFull) {
            this.libBtn.text = Lan.G(1048);
            this.jlimg.visible = false;
            this.jlall.visible = false;
        }
        else {
            this.libBtn.text = Lan.G(1046);
            this.jlimg.visible = true;
            this.jlall.visible = true;
        }
        //  var _Progress = (dpData._nowValue.clone().minus(dpData._tj0)) / (dpData._tj1.clone().minus(dpData._tj0));
        var _Progress = dpData._Progress;
        // console.log("_Progress", _Progress, dpData._nowValue.getString(), dpData._tj0.getString(), dpData._tj1.getString());
        // var progtxt_s = "";
        if (_Progress >= 1) {
            _Progress = 1;
            this.bget.gray = false;
        }
        else {
            this.bget.gray = true;
        }
        if (dpData._isFull) {
            this.bget.gray = true;
        }
        this.x = 0;
        this.progimg.width = 490 * _Progress;
        this.progtxt.text = dpData._nowValue.getShortString() + "/" + dpData._tj1.getShortString();
    };
    AchievementRDWnd.prototype.onbtnClick = function (t) {
        if (this.bget.gray == true)
            return;
        if (this.doClick == false) { //已经点击过了, 需要等到刷新后才能再次点击
            return;
        }
        var iIndex = this.data._index;
        var iarID = this.data._id;
        var findTJ = -1;
        if (SV.ME.achLingqu.ContainsKey(iIndex)) {
            findTJ = SV.ME.achLingqu.GetValue(iIndex);
        }
        // console.log("onbtnClick", iIndex, iarID, this.data._name, findTJ);
        // var nowValue: math_BigUInt = AchievementWnd.ME.getAch(iIndex);
        // var minData = this.data._tj0;
        // var maxData = this.data._tj1;
        // console.log("onbtnClick", nowValue.getString(), minData.getString(), maxData.getString());
        // if (nowValue.biggerequal(maxData)) {
        if (this.data._Progress >= 1 && this.data._isFull == false) {
            this.doClick = false;
            var _gotMoney = new math_BigUInt().setByShortString(this.data._jl);
            // console.log("_gotMoney", _gotMoney.getString());
            if (SV.ME.achLingqu.ContainsKey(iIndex)) {
                SV.ME.achLingqu.SetValue(iIndex, findTJ + 1);
            }
            else {
                SV.ME.achLingqu.Add(iIndex, findTJ + 1);
            }
            // var a = AchievementWnd.ME.ui.ItemList0.toParentPoint(new Laya.Point(this.jlimg.x, this.jlimg.y));
            // var n: any = this.parent.parent;
            // var p = n.localToGlobal(new Laya.Point(this.jlimg.x, this.jlimg.y));
            var p = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY);
            // console.log("_gotMoney", p);
            Game.ME.animAddMoney(_gotMoney, p.x, p.y, 20, "achievement");
            //Game.ME.animAddMoney_BackGround(_gotMoney, p.x, p.y, AchievementWnd.ME.gui.fanhui.x, AchievementWnd.ME.gui.fanhui.y, 20, "achievement");
            //if (this.data._tipid == 0 || this.data._tipid == 2 || this.data._tipid == 3) { //因为金钱属于1,所以在这里就不重复计算了
            AchievementWnd.ME.clcTip([this.data._tipid]);
            //}
            if (this.data._isfly == false) {
                Laya.timer.once(100, this, this.doshow);
            }
            else {
                this.bget.gray = true;
                Laya.timer.once(100, this, this.domove);
            }
            AchievementWnd.ME.advCount += 1;
            //TK.track("achievement", { "Level": SV.ME.level, "cKinds": this.data._kinds, "cindex": this.data._index });
            // console.log("_gotMoney", SV.ME.achLingqu.GetValue(iIndex));
        }
    };
    AchievementRDWnd.prototype.domove = function () {
        //  console.log("domove", this.x,MStage.ME.GetWinWidth());
        laya.utils.Tween.to(this, {
            x: 0 - MStage.ME.GetWinWidth()
        }, 500, laya.utils.Ease.linearNone, Laya.Handler.create(this, this.doshow));
    };
    AchievementRDWnd.prototype.doshow = function () {
        AchievementWnd.ME.doshow(0);
    };
    return AchievementRDWnd;
}(ui.AchievementRDUI));
//# sourceMappingURL=AchievementRDWnd.js.map