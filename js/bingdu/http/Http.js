/**
* fly.http.Http
*/
var Http = /** @class */ (function () {
    function Http() {
        this.requestPool = null;
        this.request = null;
        this.count = 0;
        this.i = 0;
        this.k = null;
        this.dataStr = null;
        this.requestPool = [];
        //has
        Http.ME = this;
    }
    Http.prototype.sendGet = function (t, e, i, s, n, a, h) {
        if (void 0 === a && (a = true), this.getARequest(), this.request.name = t, this.request.callBack = s, this.request.thisArg = n, this.request.params = h, a) {
            e += "?";
            for (this.k in i)
                e += this.k + "=" + i[this.k] + "&";
            this.request.httpRequest.send(e, null);
        }
        else
            this.request.httpRequest.send(e, i);
    };
    Http.prototype.sendPost = function (t, e, i, s, n, a) {
        this.getARequest(),
            this.request.name = t,
            this.request.callBack = s,
            this.request.thisArg = n,
            this.request.params = a,
            this.request.httpRequest.send(e, JSON.stringify(i), "post");
    };
    Http.prototype.getARequest = function () {
        for (this.i = this.count; this.i--;)
            if (this.request = this.requestPool[this.i], this.request.isUseAble)
                return this.request.isUseAble = false,
                    this.request;
        return this.request = new myRequest(),
            this.requestPool.push(this.request),
            this.count = this.requestPool.length,
            this.request;
    };
    Http.II = function () {
        return null == Http.ME && (Http.ME = new Http()),
            Http.ME;
    };
    Http.urlParams = function (t) {
        var e = "";
        for (var i in t)
            e += i + "=" + t[i] + "&";
        return e;
    };
    Http.ME = null;
    return Http;
}());
//end fly.http.Http
//# sourceMappingURL=Http.js.map