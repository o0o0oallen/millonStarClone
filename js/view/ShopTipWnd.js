/*
* name;
*/
var ShopTipWnd = /** @class */ (function () {
    function ShopTipWnd() {
        this.gui = null;
        this.yesHandle = null;
        this.noHandle = null;
        this.showType = 0;
        this.chkType = 0;
        this.gui = new ui.ShopTipWndUI;
        ShopTipWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.closebtn.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.yesbtn.clickHandler = new Laya.Handler(this, this.OnYesBtn);
        this.gui.nobtn.clickHandler = new Laya.Handler(this, this.OnNoBtn);
        this.gui.option1.on(Laya.Event.CLICK, this, this.OnCheckBox, [1]);
        this.gui.option2.on(Laya.Event.CLICK, this, this.OnCheckBox, [2]);
        this.gui.option3.on(Laya.Event.CLICK, this, this.OnCheckBox, [3]);
        this.gui.option4.on(Laya.Event.CLICK, this, this.OnCheckBox, [4]);
        this.gui.wxpay.skin = "font/ch/wxpay.jpg";
        this.gui.alipay.skin = "font/ch/alipay.jpg";
        this.gui.wxpay.on(Laya.Event.CLICK, this, this.ClickPay, [2]);
        this.gui.alipay.on(Laya.Event.CLICK, this, this.ClickPay, [1]);
        UIHelper.dohide(this.gui);
    }
    ShopTipWnd.prototype.SetMsgShow = function (stitle, smsg, syes, yeshandle, sno, nohandle, closeshow, ns) {
        if (nohandle === void 0) { nohandle = null; }
        if (closeshow === void 0) { closeshow = false; }
        if (ns === void 0) { ns = 1; }
        this.showType = 1;
        UIHelper.showHide(true, this.gui);
        this.gui.MsgTip.visible = true;
        this.gui.PayTip.visible = false;
        this.gui.titletext.text = stitle;
        this.gui.msgContent.visible = true;
        this.gui.chsContent.visible = false;
        this.gui.msglb.text = smsg;
        this.gui.yesbtn.visible = syes != "" && (this.yesHandle = yeshandle, this.gui.yesbtnlb.text = syes, this.gui.yesbtnlb.scale(ns, ns));
        this.gui.nobtn.visible = sno != "" && (this.noHandle = nohandle, this.gui.nobtnlb.text = sno, this.gui.nobtnlb.scale(ns, ns));
        this.gui.closebtn.visible = closeshow;
    };
    ShopTipWnd.prototype.SetChkShow = function (stitle, txt1, txt2, txt3, txt4, syes, yeshandle, sno, nohandle, closeshow) {
        if (nohandle === void 0) { nohandle = null; }
        if (closeshow === void 0) { closeshow = false; }
        this.showType = 2;
        UIHelper.showHide(true, this.gui);
        this.gui.MsgTip.visible = true;
        this.gui.PayTip.visible = false;
        this.gui.titletext.text = stitle;
        this.gui.msgContent.visible = false;
        this.gui.chsContent.visible = true;
        var nnum = 0;
        this.gui.option1.visible = txt1 != "" && (nnum += 1, this.gui.optionlb1.text = txt1);
        this.gui.option2.visible = txt2 != "" && (nnum += 1, this.gui.optionlb2.text = txt2);
        this.gui.option3.visible = txt3 != "" && (nnum += 1, this.gui.optionlb3.text = txt3);
        this.gui.option4.visible = txt4 != "" && (nnum += 1, this.gui.optionlb4.text = txt4);
        this.OnCheckBox(1);
        if (nnum == 1) {
            this.gui.option1.y = 80;
        }
        else if (nnum == 2) {
            this.gui.option1.y = 46;
            this.gui.option2.y = 116;
        }
        else if (nnum == 3) {
            this.gui.option1.y = 24;
            this.gui.option2.y = 80;
            this.gui.option3.y = 136;
        }
        else {
            this.gui.option1.y = 8;
            this.gui.option2.y = 54;
            this.gui.option3.y = 100;
            this.gui.option4.y = 146;
        }
        this.yesHandle = yeshandle;
        this.noHandle = nohandle;
        this.gui.closebtn.visible = closeshow;
    };
    ShopTipWnd.prototype.SetPayShow = function (chshandle) {
        this.showType = 3;
        UIHelper.showHide(true, this.gui);
        this.gui.MsgTip.visible = false;
        this.gui.PayTip.visible = true;
        this.yesHandle = chshandle;
        this.gui.bgImg.on(Laya.Event.CLICK, this, this.CloseUI);
    };
    ShopTipWnd.prototype.OnCheckBox = function (idx) {
        this.chkType = idx;
        this.gui.optionchk1.skin = idx == 1 ? "ui3/gouxuan1.png" : "ui3/gouxuan0.png";
        this.gui.optionchk2.skin = idx == 2 ? "ui3/gouxuan1.png" : "ui3/gouxuan0.png";
        this.gui.optionchk3.skin = idx == 3 ? "ui3/gouxuan1.png" : "ui3/gouxuan0.png";
        this.gui.optionchk4.skin = idx == 4 ? "ui3/gouxuan1.png" : "ui3/gouxuan0.png";
    };
    ShopTipWnd.prototype.OnYesBtn = function () {
        if (this.yesHandle != null) {
            this.showType == 2 ? this.yesHandle.runWith(this.chkType) : this.yesHandle.run();
        }
        this.CloseUI();
    };
    ShopTipWnd.prototype.OnNoBtn = function () {
        if (this.noHandle != null) {
            this.showType == 2 ? this.noHandle.runWith(this.chkType) : this.noHandle.run();
        }
        this.CloseUI();
    };
    ShopTipWnd.prototype.ClickPay = function (idx) {
        if (this.yesHandle != null) {
            this.yesHandle.runWith(idx);
        }
        this.CloseUI();
    };
    ShopTipWnd.prototype.dohide = function () {
        this.yesHandle = null;
        this.noHandle = null;
        this.gui.bgImg.off(Laya.Event.CLICK, this, this.CloseUI);
        UIHelper.dohide(this.gui);
    };
    ShopTipWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    ShopTipWnd.ME = null;
    return ShopTipWnd;
}());
//# sourceMappingURL=ShopTipWnd.js.map