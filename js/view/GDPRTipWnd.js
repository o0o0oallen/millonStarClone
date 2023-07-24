/*
* name;
*/
var GDPRTipWnd = /** @class */ (function () {
    function GDPRTipWnd() {
        this.gui = null;
        this.isShowd = false;
        this.gui = new ui.GDPRTipUI;
        GDPRTipWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.closebtn.clickHandler = Laya.Handler.create(this, this.CloseUI, null, false);
        this.gui.closelb.text = Lan.G(1100);
        this.gui.url1.on(Laya.Event.CLICK, this, this.OnUrlClick, [1]);
        this.gui.url2.on(Laya.Event.CLICK, this, this.OnUrlClick, [2]);
        this.gui.url3.on(Laya.Event.CLICK, this, this.OnUrlClick, [3]);
        this.gui.url4.on(Laya.Event.CLICK, this, this.OnUrlClick, [4]);
        this.gui.url5.on(Laya.Event.CLICK, this, this.OnUrlClick, [5]);
        this.gui.acceptBtn.clickHandler = Laya.Handler.create(this, this.OnAcceptBtn, null, false);
        this.gui.acceptLb.text = Lan.G(1099);
        UIHelper.dohide(this.gui);
    }
    GDPRTipWnd.prototype.OnUrlClick = function (idx) {
        // console.log("OnUrlClick====",idx);
        switch (idx) {
            //tou
            case 1:
            case 3:
                var fdata = { type: "pay", data: "https://playmil.oss-us-west-1.aliyuncs.com/millionstar/Million_Star_term_of_use.html" };
                IFS.ME.openUrl(JSON.stringify(fdata));
                break;
            //pp
            case 2:
            case 4:
                var fdata = { type: "pay", data: "https://playmil.oss-us-west-1.aliyuncs.com/millionstar/Million%20Star%20Privacy%20Policy.html" };
                IFS.ME.openUrl(JSON.stringify(fdata));
                break;
            case 5:
                this.gui.closeTip.visible = true;
                this.gui.acceptTip.visible = false;
                break;
        }
    };
    GDPRTipWnd.prototype.doshow = function () {
        this.isShowd = true;
        UIHelper.doshow(this.gui);
        this.gui.closeTip.visible = false;
        this.gui.acceptTip.visible = true;
    };
    GDPRTipWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
    };
    GDPRTipWnd.prototype.OnAcceptBtn = function () {
        AdsManager.AgreeGDPR(true);
        this.dohide();
    };
    GDPRTipWnd.prototype.CloseUI = function () {
        AdsManager.AgreeGDPR(false);
        this.dohide();
    };
    GDPRTipWnd.ME = null;
    return GDPRTipWnd;
}());
//# sourceMappingURL=GDPRTipWnd.js.map