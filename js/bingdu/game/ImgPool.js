/*
* name;
*/
var ImgPool = /** @class */ (function () {
    function ImgPool() {
        this.imgs = null;
        this.img = null;
        this.count = 0;
        this.callBackArg = null;
        this.callBackFun = null;
        this.imgs = [];
    }
    ImgPool.prototype.setInitFun = function (t, e) {
        this.callBackArg = t,
            this.callBackFun = e;
    };
    ImgPool.prototype.getOne = function () {
        for (var t = 0; t < this.count; t++)
            if (this.img = this.imgs[t], "" == this.img.name)
                return this.img.name = "1",
                    this.img;
        return this.img = new laya.ui.Image(),
            this.img.name = "1",
            this.callBackFun.call(this.callBackArg, this.img),
            this.imgs.push(this.img),
            this.count++,
            this.img;
    };
    return ImgPool;
}());
//# sourceMappingURL=ImgPool.js.map