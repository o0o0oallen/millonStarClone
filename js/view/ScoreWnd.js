/*
* SettingWnd;
*/
var ScoreWnd = /** @class */ (function () {
    function ScoreWnd() {
        this.gui = null;
        this.uStar = 0;
        this.gui = new ui.ScoreUI;
        ScoreWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgImg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.gbbtn.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.pjbtn.on(Laya.Event.CLICK, this, this.doPingjia);
        this.gui.star1.on(Laya.Event.CLICK, this, this.ClickStar, [1]);
        this.gui.star2.on(Laya.Event.CLICK, this, this.ClickStar, [2]);
        this.gui.star3.on(Laya.Event.CLICK, this, this.ClickStar, [3]);
        this.gui.star4.on(Laya.Event.CLICK, this, this.ClickStar, [4]);
        this.gui.star5.on(Laya.Event.CLICK, this, this.ClickStar, [5]);
        this.gui.txtscore.text = Lan.G(1054);
        CD.Language == Language.fr && this.gui.txtscore.scale(.68, .68);
        CD.Language == Language.de && this.gui.txtscore.scale(.9, .9);
        CD.Language == Language.it && this.gui.txtscore.scale(.65, .65);
        CD.Language == Language.ko && this.gui.txtscore.scale(.8, .8);
        this.gui.txtdoyoulike.text = Lan.G(1055);
        CD.Language == Language.es && this.gui.txtdoyoulike.scale(1, 1);
        CD.Language == Language.pt && this.gui.txtdoyoulike.scale(1, 1);
        CD.Language == Language.fr && this.gui.txtdoyoulike.scale(.7, .7);
        CD.Language == Language.it && this.gui.txtdoyoulike.scale(.8, .8);
        CD.Language == Language.ko && this.gui.txtdoyoulike.scale(.9, .9);
        this.gui.txtthankyou.text = Lan.G(1056);
        UIHelper.dohide(this.gui);
    }
    ScoreWnd.prototype.doshow = function () {
        this.gui.showpj.visible = true;
        this.gui.txtthankyou.visible = false;
        this.resetStar(0);
        UIHelper.showHide(true, this.gui);
    };
    ScoreWnd.prototype.dohide = function () {
        SV.ME.doScore = this.uStar;
        UIHelper.dohide(this.gui);
    };
    ScoreWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    ScoreWnd.prototype.doPingjia = function () {
        this.gui.showpj.visible = false;
        this.gui.txtthankyou.visible = true;
        Laya.timer.once(500, this, this.dohide);
        TK.track("Pingjia", { "Level": SV.ME.level, "selecttype": this.uStar });
        if (this.uStar >= 4) {
            var fdata = { type: "score", data: "" };
            IFS.ME.openUrl(JSON.stringify(fdata));
        }
    };
    ScoreWnd.prototype.resetStar = function (ick) {
        this.uStar = ick;
        this.gui.star1.skin = "uipic/xx1.png";
        this.gui.star2.skin = "uipic/xx1.png";
        this.gui.star3.skin = "uipic/xx1.png";
        this.gui.star4.skin = "uipic/xx1.png";
        this.gui.star5.skin = "uipic/xx1.png";
    };
    ScoreWnd.prototype.ClickStar = function (ick) {
        this.resetStar(ick);
        if (ick >= 1) {
            this.gui.star1.skin = "uipic/xx.png";
        }
        if (ick >= 2) {
            this.gui.star2.skin = "uipic/xx.png";
        }
        if (ick >= 3) {
            this.gui.star3.skin = "uipic/xx.png";
        }
        if (ick >= 4) {
            this.gui.star4.skin = "uipic/xx.png";
        }
        if (ick >= 5) {
            this.gui.star5.skin = "uipic/xx.png";
        }
    };
    ScoreWnd.ME = null;
    return ScoreWnd;
}());
//# sourceMappingURL=ScoreWnd.js.map