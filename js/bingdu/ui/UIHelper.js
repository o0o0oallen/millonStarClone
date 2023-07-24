/*
* name;
*/
var UIHelper = /** @class */ (function () {
    function UIHelper() {
    }
    UIHelper.getOjbsByName = function (e) {
        return UIHelper.obj = {},
            UIHelper.obj = UIHelper._getObjByName(e, UIHelper.obj),
            UIHelper.obj;
    };
    UIHelper.getObjByClass = function (e, s) {
        UIHelper.count = e.numChildren;
        for (UIHelper.i = 0; UIHelper.i < UIHelper.count; UIHelper.i++) {
            UIHelper.obj = e.getChildAt(UIHelper.i);
            // if (Laya.__typeof(UIHelper.obj, s))  //,   lttt need deal
            // {
            //     return UIHelper.obj;
            // }
            if (typeof UIHelper.obj == s) {
                return UIHelper.obj;
            }
        }
        return null;
    };
    UIHelper.savePos = function (t) {
        t.X = t.x,
            t.Y = t.y;
    };
    UIHelper.resetPos = function (t) {
        t.x = t.X,
            t.y = t.Y;
    };
    UIHelper.saveSize = function (t) {
        t.W = t.width,
            t.H = t.height;
    };
    UIHelper.resetSize = function (t) {
        t.width = t.W,
            t.height = t.H;
    };
    UIHelper.saveRoat = function (t) {
        t.R = t.rotation;
    };
    UIHelper.resetRoat = function (t) {
        t.rotation = t.R;
    };
    UIHelper.saveScale = function (t) {
        t.SX = t.scaleX,
            t.SY = t.scaleY;
    };
    UIHelper.saveAlpha = function (t) {
        t.A = t.alpha;
    };
    UIHelper.resetAlpha = function (t) {
        t.alpha = t.A;
    };
    UIHelper.saveVis = function (t) {
        t.V = t.visible;
    };
    UIHelper.resetVis = function (t) {
        t.visible = t.V;
    };
    UIHelper.resetScale = function (t) {
        t.scale(t.SX, t.SY, true);
    };
    UIHelper.dosave = function (e) {
        UIHelper.savePos(e),
            UIHelper.saveRoat(e),
            UIHelper.saveScale(e),
            UIHelper.saveAlpha(e),
            UIHelper.saveVis(e);
    };
    UIHelper.reset = function (e) {
        UIHelper.resetPos(e),
            UIHelper.resetRoat(e),
            UIHelper.resetScale(e),
            UIHelper.resetAlpha(e),
            UIHelper.resetVis(e);
    };
    UIHelper.saveChilds = function (e) {
        for (var i = 0, s = e.numChildren; i < s; i++)
            UIHelper.dosave(e.getChildAt(i));
    };
    UIHelper.resetChilds = function (e) {
        for (var i = 0, s = e.numChildren; i < s; i++)
            UIHelper.reset(e.getChildAt(i));
    };
    UIHelper.reg = function (e) {
        null != e && null != e.parent && UIHelper.dic.set(e, e.parent);
    };
    UIHelper.dohide = function (e) {
        if (null != e && e.visible) {
            if (null == e.parent)
                return;
            null == (UIHelper.obj = UIHelper.dic.get(e)) && UIHelper.dic.set(e, UIHelper.obj = e.parent),
                e.parent == UIHelper.obj && UIHelper.obj.removeChild(e),
                e.visible = false;
        }
    };
    UIHelper.doshow = function (e, i) {
        if (i === void 0) { i = 99999; }
        null != e && (e.visible || ((UIHelper.obj = UIHelper.dic.get(e)) && UIHelper.obj.addChildAt(e, Math.min(UIHelper.obj.numChildren, i)), e.visible = true));
    };
    UIHelper.showHide = function (e, i, s) {
        if (s === void 0) { s = 99999; }
        e ? UIHelper.doshow(i, s) : UIHelper.dohide(i);
    };
    UIHelper._getObjByName = function (e, i) {
        for (var s, n = 0, a = e.numChildren; n < a; n++)
            null != (s = e.getChildAt(n)).name && "" != s.name && (i[s.name] = s, s instanceof laya.ui.Box && UIHelper._getObjByName(s, i[s.name]));
    };
    UIHelper.checkParent = function (e, i) {
        if (e == i)
            return true;
        for (UIHelper.pp = e.parent; null != UIHelper.pp;) {
            if (UIHelper.pp == i)
                return true;
            UIHelper.pp = UIHelper.pp.parent;
        }
        return false;
    };
    UIHelper.checkParents = function (e, i) {
        for (var s, n = i.length; n--;) {
            if (s = i[n], e == s)
                return true;
            for (UIHelper.pp = e.parent; null != UIHelper.pp;) {
                if (UIHelper.pp == s)
                    return true;
                UIHelper.pp = UIHelper.pp.parent;
            }
        }
        return false;
    };
    UIHelper.obj = null;
    UIHelper.i = 0;
    UIHelper.count = 0;
    UIHelper.pp = null;
    UIHelper.dic = new laya.utils.Dictionary();
    return UIHelper;
}());
//# sourceMappingURL=UIHelper.js.map