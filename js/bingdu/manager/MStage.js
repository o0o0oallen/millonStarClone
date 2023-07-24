/*
* name;
*/
var MStage = /** @class */ (function () {
    function MStage(e) {
        this.stage = null;
        this.w = 1080;
        this.h = 1920;
        this.bi = 0;
        this.cx = 0;
        this.cy = 0;
        // public quickGamePatch = false;
        this.ww = 0;
        this.wh = 0;
        MStage.ME = this,
            this.stage = e,
            e.on("resize", this, this.onResize),
            Laya.timer.callLater(this, this.onResize);
    }
    MStage.prototype.onResize = function () {
        this.ww = laya.utils.Browser.window.innerWidth,
            this.wh = laya.utils.Browser.window.innerHeight,
            this.bi = this.wh / this.ww,
            //this.quickGamePatch ? (
            this.w = this.stage.width, this.h = this.wh / this.ww * this.w;
        // ) : (this.w = this.stage.width, this.h = this.stage.height),
        this.cx = Math.round(.5 * this.w),
            this.cy = Math.round(.5 * this.h);
        //console.log("gameuionResize***" + this.ww + " -> " + this.wh +"||" + this.w + " -> " + this.h);
        Game.ME && (Game.ME.onResize(), Game.ME.changeBG());
        GuideUI.ME && (GuideUI.ME.onResize());
    };
    MStage.prototype.stage2Window = function (t) {
        return this.ww / this.stage.width * t;
    };
    MStage.prototype.window2Stage = function (t) {
        return this.stage.width / this.ww * t;
    };
    MStage.prototype.GetWinWidth = function () {
        return this.w;
        // if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
        //     if (this.ww > this.w)
        //         return this.ww;
        //     else
        //         return this.w;
        // } else {
        //     return this.w;
        // }
    };
    MStage.prototype.GetWinHeight = function () {
        return this.h;
        // if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
        //     if (this.wh > this.h)
        //         return this.wh;
        //     else
        //         return this.h;
        // } else {
        //     return this.h;
        // }
    };
    MStage.prototype.GetScaleY = function () {
        return this.h / GameMain.Stage_Height;
    };
    return MStage;
}());
//# sourceMappingURL=MStage.js.map