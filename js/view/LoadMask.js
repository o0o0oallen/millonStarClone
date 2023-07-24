/*
* LoadMask;
*/
var LoadMask = /** @class */ (function () {
    function LoadMask() {
        this.gui = null;
        this.gui = new ui.LoadMaskUI;
        LoadMask.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgImg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.ani1.play(0, true);
        UIHelper.dohide(this.gui);
    }
    LoadMask.prototype.doshow = function (t) {
        if (t === void 0) { t = 0; }
        UIHelper.doshow(this.gui);
        Laya.timer.clear(this, this.setup);
        if (t == 0) {
            this.gui.loadimg.centerX = -160;
            this.gui.loadlb.text = Lan.G(1072);
            Laya.timer.loop(500, this, this.setup);
        }
        else {
            this.gui.loadimg.centerX = 0;
            this.gui.loadlb.text = "";
        }
    };
    LoadMask.prototype.dohide = function () {
        Laya.timer.clear(this, this.setup);
        UIHelper.dohide(this.gui);
    };
    LoadMask.prototype.CloseUI = function () { };
    LoadMask.prototype.setup = function () {
        this.gui.loadlb.text = this.gui.loadlb.text + ".";
        if (this.gui.loadlb.text.indexOf("....") > 0) {
            this.gui.loadlb.text = Lan.G(1072);
        }
    };
    LoadMask.ME = null;
    return LoadMask;
}());
//# sourceMappingURL=LoadMask.js.map