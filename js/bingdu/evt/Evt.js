/*
* name;
*/
var Game_Event = /** @class */ (function () {
    function Game_Event() {
        this.evts = {};
        this.data = null;
        this.params = null;
    }
    Game_Event.prototype.onMD = function (t, e, i) {
        if (i === void 0) { i = false; }
        this.addEvent(Laya.Event.MOUSE_DOWN, t, e);
    };
    Game_Event.prototype.addEvent = function (t, e, i, s, n, a) {
        if (s === void 0) { s = false; }
        if (n === void 0) { n = undefined; }
        if (a === void 0) { a = true; }
        a && this.removeEvent(t, e, i);
        var h = this.evts[t];
        return null == h && (this.evts[t] = h = {
            name: t,
            calls: []
        }),
            h.calls.push({
                arg: e,
                fun: i,
                once: s,
                params: n
            }),
            this;
    };
    Game_Event.prototype.removeAllEvents = function () {
        this.evts = {};
    };
    Game_Event.prototype.remove = function (t) {
        this.evts[t] = null;
    };
    Game_Event.prototype.removeEvent = function (t, e, i) {
        var s = this.evts[t];
        if (null != s)
            for (var n, a = s.calls.length; a--;)
                (n = s.calls[a]).arg == e && n.fun == i && s.calls.splice(a, 1);
    };
    Game_Event.prototype.event = function (t, e) {
        if (e === void 0) { e = undefined; }
        var i = this.evts[t];
        if (null != i)
            for (var s, n = i.calls.length; n--;)
                s = i.calls[n],
                    this.params = s.params,
                    this.data = e,
                    s.fun.call(s.arg, this),
                    s.once && (i.calls.splice(n, 1), 0 == i.calls.length && delete this.evts[t]);
    };
    return Game_Event;
}());
//# sourceMappingURL=Evt.js.map