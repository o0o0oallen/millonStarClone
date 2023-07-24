/*
* FirstChargeWnd;
*/
var FirstChargeWnd = /** @class */ (function () {
    function FirstChargeWnd() {
        this.gui = null;
        this.gui = new ui.FirstChargeUI;
        FirstChargeWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        //console.log(CD.Game.ItemInfo);
        this.gui.contentimg.skin = "ui/tu.jpg";
        this.gui.bgImg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closeBtn.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.iconimg.skin = "icons/bul3.png";
        this.gui.desc1.text = Lan.G(8000);
        var szdata = CD.Game.ItemInfo[1103].adddata.split(",");
        this.gui.desc2.text = Lan.G(8001, [szdata[1]]);
        this.gui.desc3.text = Lan.G(8002);
        CD.Language == Language.ru && this.gui.desc3.scale(.7, .7);
        CD.Language == Language.es && this.gui.desc3.scale(.7, .7);
        CD.Language == Language.pt && this.gui.desc3.scale(.65, .65);
        CD.Language == Language.fr && this.gui.desc3.scale(.6, .6);
        CD.Language == Language.de && this.gui.desc3.scale(.75, .75);
        CD.Language == Language.it && this.gui.desc3.scale(.7, .7);
        this.gui.funcBtn.clickHandler = new Laya.Handler(this, this.ClickFuncBtn);
        UIHelper.dohide(this.gui);
    }
    FirstChargeWnd.prototype.ResetFuncLb = function () {
        if (SV.ME.firstCharge > 0) {
            this.gui.funcBtn.skin = "ui4/xan_1.png";
            this.gui.fucBtnLb.text = Lan.G(8004);
        }
        else {
            this.gui.funcBtn.skin = "ui4/greenbtn_1.png";
            this.gui.fucBtnLb.text = Lan.G(8003);
        }
    };
    FirstChargeWnd.prototype.doshow = function () {
        //console.log("FirstChargeWnd====="+CD.BanBen);
        if (CD.BanBen == BanBen.guonei)
            return;
        UIHelper.showHide(true, this.gui);
        UIHelper.doshow(Game.ME.gui.black);
        Game.ME.gui.black.alpha = .6;
        this.ResetFuncLb();
    };
    FirstChargeWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
        UIHelper.dohide(Game.ME.gui.black);
    };
    FirstChargeWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    FirstChargeWnd.prototype.ClickFuncBtn = function () {
        var nnum = parseInt(Cfg.GetItemNum(1103).getString());
        var data = CD.Game.ItemInfo[1103];
        if (SV.ME.firstCharge > 0 && nnum == 0) {
            Cfg.AddItem(1103, new math_BigUInt().one(), "FirstCharge");
            Game.ME.SetBulletTab(SV.ME.useButtleId);
            UIHelper.dohide(Game.ME.gui.chargeBtn);
            Game.ME.ResetFuncBtnPos();
            //Game.ME.SetChargeTip();
            var point = Game.ME.gui.b1.localToGlobal(new Laya.Point(0, 0));
            ItemTipWnd.ME.doshow(data.icon, true, point.x + 181.5, point.y + 77);
            TK.track("bullet", { "Level": SV.ME.level, "BId": 1103 });
            this.CloseUI();
        }
        else {
            Game.ME.ShowExchangeWnd(2, false);
        }
    };
    FirstChargeWnd.ME = null;
    return FirstChargeWnd;
}());
//# sourceMappingURL=FirstChargeWnd.js.map