/*
* EndlessWnd;
*/
var EndlessWnd = /** @class */ (function () {
    function EndlessWnd() {
        this.gui = null;
        this.gui = new ui.EndlessWndUI;
        EndlessWnd.ME = this;
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight());
        Laya.stage.addChild(this.gui);
        this.gui.bgimg.on(Laya.Event.CLICK, this, this.CloseUI);
        this.gui.closebtn.clickHandler = new Laya.Handler(this, this.CloseUI);
        this.gui.startbtn.on(Laya.Event.CLICK, this, this.StartEndless);
        this.gui.buytime.clickHandler = new Laya.Handler(this, this.BuyTime);
        CD.Language == Language.ru && this.gui.startbtnlb.scale(.8, .8);
        CD.Language == Language.de && this.gui.startbtnlb.scale(.65, .65);
        CD.Language == Language.fr && this.gui.startbtnlb.scale(.85, .85);
        CD.Language == Language.it && this.gui.startbtnlb.scale(.8, .8);
        this.InitUI();
        UIHelper.dohide(this.gui);
    }
    EndlessWnd.prototype.InitUI = function () {
        this.gui.titlelb.text = Lan.G(6006);
        this.gui.desclb.text = Lan.G(6007);
        this.gui.startbtnlb.text = Lan.G(6008);
        //this.gui.getlb.text = Lan.G(1071);
        this.gui.imgbg.skin = "uipic/tu.jpg";
    };
    EndlessWnd.prototype.UpdateUI = function () {
        //console.log("UpdateUI=======", ParamOnline.ME.getNumber("endlessmode_time", 3), parseInt(Cfg.GetItemNum(1006).getString()), SV.ME.EndlessTime);
        var num = ParamOnline.ME.getNumber("endlessmode_time", 3) + parseInt(Cfg.GetItemNum(1006).getString()) - SV.ME.EndlessTime;
        this.gui.lefttime.text = Lan.G(2002, [""]);
        this.gui.lefttimenum.text = num.toString();
        this.gui.startbtn.gray = num == 0;
    };
    EndlessWnd.prototype.doshow = function () {
        UIHelper.showHide(true, this.gui);
        this.UpdateUI();
    };
    EndlessWnd.prototype.dohide = function () {
        UIHelper.dohide(this.gui);
    };
    EndlessWnd.prototype.StartEndless = function () {
        var nmax = ParamOnline.ME.getNumber("endlessmode_time", 3) + parseInt(Cfg.GetItemNum(1006).getString()) - SV.ME.EndlessTime;
        if (nmax <= 0) {
            Game.ME.ShowExchangeWnd(3, false);
            return;
        }
        Game.ME.StartEndlessGame();
        this.CloseUI();
    };
    EndlessWnd.prototype.BuyTime = function () {
        Game.ME.ShowExchangeWnd(3, false);
    };
    EndlessWnd.prototype.CloseUI = function () {
        this.dohide();
    };
    EndlessWnd.ME = null;
    return EndlessWnd;
}());
//# sourceMappingURL=EndlessWnd.js.map