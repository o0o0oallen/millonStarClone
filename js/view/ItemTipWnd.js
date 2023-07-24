/*
* ItemTipWnd;
*/
var ItemTipWnd = /** @class */ (function () {
    function ItemTipWnd() {
        this.gui = null;
        this.gui = new ui.ItemTipUI;
        ItemTipWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgImg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.ani1.play(0, true);
        UIHelper.dohide(this.gui);
    }
    ItemTipWnd.prototype.doshow = function (url, isgrid, toX, toY) {
        if (toX === void 0) { toX = 0; }
        if (toY === void 0) { toY = 0; }
        UIHelper.showHide(true, this.gui);
        this.gui.grid.pos(Game.centerX, Game.centerY);
        this.gui.grid.scale(1, 1, true);
        this.gui.guang.visible = true;
        this.gui.tiplb.text = "";
        isgrid ? (this.gui.icon.visible = false,
            this.gui.grid.visible = true,
            this.gui.gridicon.skin = url) : (this.gui.icon.visible = true,
            this.gui.grid.visible = false,
            this.gui.icon.skin = url);
        this.targX = toX;
        this.targY = toY;
    };
    ItemTipWnd.prototype.showwing = function (url, t, toX, toY) {
        if (t === void 0) { t = ""; }
        if (toX === void 0) { toX = 0; }
        if (toY === void 0) { toY = 0; }
        UIHelper.showHide(true, this.gui);
        this.gui.guang.visible = true;
        this.gui.icon.visible = true;
        this.gui.icon.pos(Game.centerX, Game.centerY);
        this.gui.icon.scale(1, 1, true);
        this.gui.grid.visible = false;
        this.gui.icon.skin = "";
        this.gui.tiplb.text = t;
        this.gui.iconl.skin = url;
        this.gui.iconr.skin = url;
        this.targX = toX;
        this.targY = toY;
    };
    ItemTipWnd.prototype.dohide = function () {
        Laya.Tween.clearAll(this.gui.grid);
        Laya.Tween.clearAll(this.gui.icon);
        this.gui.tiplb.text = "";
        UIHelper.dohide(this.gui);
    };
    ItemTipWnd.prototype.CloseUI = function () {
        if (this.targX == 0 && this.targY == 0)
            this.dohide();
        else {
            this.gui.guang.visible = false;
            this.gui.tiplb.text = "";
            Laya.Tween.to(this.gui.grid, { x: this.targX, y: this.targY, scaleX: .2, scaleY: .2 }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, this.dohide));
            Laya.Tween.to(this.gui.icon, { x: this.targX, y: this.targY, scaleX: .2, scaleY: .2 }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, this.dohide));
        }
    };
    ItemTipWnd.ME = null;
    return ItemTipWnd;
}());
//# sourceMappingURL=ItemTipWnd.js.map