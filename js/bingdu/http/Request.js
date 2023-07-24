/**
* fly.http.Request
*/
var myRequest = /** @class */ (function () {
    function myRequest() {
        this.name = null;
        this.isUseAble = false;
        this.httpRequest = null;
        this.callBack = null;
        this.thisArg = null;
        this.data = null;
        this.params = null;
        this.httpRequest = new laya.net.HttpRequest();
        //has
        this.httpRequest.on("complete", this, this.onSuccess),
            this.httpRequest.on("error", this, this.onError);
    }
    myRequest.prototype.onSuccess = function (t) {
        this.data = t,
            this.callBack && this.callBack.call(this.thisArg, this),
            this.isUseAble = true;
    };
    myRequest.prototype.json = function () {
        return JSON.parse(this.data);
    };
    myRequest.prototype.onError = function (t) {
        console.log("HTTP ERROR:" + t),
            this.data = "",
            this.callBack && this.callBack.call(this.thisArg, this),
            this.isUseAble = true;
    };
    return myRequest;
}());
//end fly.http.Request
//# sourceMappingURL=Request.js.map