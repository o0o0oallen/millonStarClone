/*
* name;
*/
var FPool = /** @class */ (function () {
    function FPool() {
        this.pool = null;
        this.cls = null;
        this.group = null;
        this.groupFun = null;
        this.obj = null;
        this.objI = 0;
        this.pool = new laya.utils.Dictionary();
        FPool.ME = this;
        console.log("FPool~~~~~~~~~~~~~~~~", "constructor");
    }
    FPool.prototype.create = function (t) {
        if (null == t)
            return null;
        if (this.group = this.pool.get(t), null == this.group)
            return this.group = new e(),
                this.pool.set(t, this.group),
                this.group.cls = t,
                this.group.objs = [],
                this.obj = new t(),
                this.group.objs.push(this.obj),
                this.obj;
        for (this.objI = this.group.objs.length; this.objI--;)
            if (this.obj = this.group.objs[this.objI], this.obj.isUseAble)
                return this.obj.isUseAble = false,
                    this.obj;
        return this.obj = new t(),
            this.group.objs.push(this.obj),
            this.obj;
    };
    FPool.prototype.createByFun = function (t) {
        if (null == t)
            return null;
        if (this.groupFun = this.pool.get(t), null == this.groupFun)
            return this.groupFun = new i(),
                this.pool.set(t, this.groupFun),
                this.groupFun.fun = t,
                this.groupFun.objs = [],
                this.groupFun.objs.push(this.obj = t()),
                this.obj.name = "1",
                this.obj;
        for (this.objI = this.groupFun.objs.length; this.objI--;)
            if (this.obj = this.groupFun.objs[this.objI], "" == this.obj.name)
                return this.obj.name = "1",
                    this.obj;
        return this.groupFun.objs.push(this.obj = this.groupFun.fun()),
            this.obj.name = "1",
            this.obj;
    };
    FPool.prototype.pushByFun = function (t, e) {
        e.name = "",
            this.groupFun = this.pool.get(t),
            null == this.groupFun && (this.groupFun = new i(), this.pool.set(t, this.groupFun), this.groupFun.fun = t, this.groupFun.objs = []),
            this.groupFun.objs.push(e);
    };
    FPool.ME = null;
    return FPool;
}());
var e = /** @class */ (function () {
    function e() {
        this.cls = null;
        this.objs = null;
    }
    return e;
}());
var i = /** @class */ (function () {
    function i() {
        this.fun = null;
        this.objs = null;
    }
    return i;
}());
//# sourceMappingURL=FPool.js.map