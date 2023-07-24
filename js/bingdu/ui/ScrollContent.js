/*
* name;
*/
var ScrollContent = /** @class */ (function () {
    function ScrollContent(t, e) {
        if (e === void 0) { e = "y"; }
        this.panel = null;
        this.sortType = "x";
        this.node = null;
        this.box = null;
        this.heightMax = 0;
        this.spacing = 2;
        this.potX = 0;
        this.potY = 0;
        this.contenetWidth = 0;
        this.contenetHeight = 0;
        this.lastBox = null;
        this.panel = t,
            this.sortType = e,
            -1 != e.indexOf("y") && (t.vScrollBarSkin = ""),
            -1 != e.indexOf("x") && (t.hScrollBarSkin = ""),
            t.hScrollBar && (t.hScrollBar.visible = false),
            t.vScrollBar && (t.vScrollBar.visible = false);
    }
    ScrollContent.prototype.addItem = function (t) {
        return this.panel.addChild(t),
            t;
    };
    ScrollContent.prototype.addItemsSkin = function (e) {
        for (ScrollContent.i = 0, ScrollContent.count = e.length; ScrollContent.i < ScrollContent.count; ScrollContent.i++)
            this.addItem(e[ScrollContent.i].skin);
    };
    ScrollContent.prototype.removeAll = function () {
        for (ScrollContent.i = this.panel.numChildren; ScrollContent.i--;) {
            this.panel.removeChildAt(ScrollContent.i);
        }
        ScrollContent.i = 0;
        ScrollContent.count = 0;
    };
    ScrollContent.prototype.removeAllFun = function (e) {
        for (ScrollContent.i = this.panel.numChildren; ScrollContent.i--;)
            e(this.panel.getChildAt(ScrollContent.i));
    };
    ScrollContent.prototype.sort = function () {
        switch (this.sortType) {
            case "x":
                for (this.contenetWidth = this.potX, ScrollContent.i = 0, ScrollContent.count = this.panel.numChildren; ScrollContent.i < ScrollContent.count; ScrollContent.i++)
                    this.box = this.panel.getChildAt(ScrollContent.i),
                        // console.log("this.box ", this.box),
                        // console.log("this.box ", this.box.visible),
                        this.box.visible && (this.box.y = this.potY,
                            this.box.x = this.contenetWidth,
                            this.contenetWidth = this.box.x + this.box.width + this.spacing);
                break;
            case "y":
                for (this.contenetHeight = this.potY, ScrollContent.i = 0, ScrollContent.count = this.panel.numChildren; ScrollContent.i < ScrollContent.count; ScrollContent.i++)
                    this.box = this.panel.getChildAt(ScrollContent.i),
                        this.box.visible && (this.box.x = this.potX, this.box.y = this.contenetHeight, this.contenetHeight = this.box.y + this.box.height + this.spacing);
                break;
            case "xy":
                for (this.contenetHeight = this.potY, this.contenetWidth = this.potX, this.heightMax = 0, ScrollContent.i = 0, ScrollContent.count = this.panel.numChildren; ScrollContent.i < ScrollContent.count; ScrollContent.i++)
                    this.box = this.panel.getChildAt(ScrollContent.i),
                        this.box.visible && (this.contenetWidth + this.box.width < this.panel.width ? (this.heightMax = Math.max(this.heightMax, this.box.height), this.box.x = this.contenetWidth, this.box.y = this.contenetHeight, this.contenetWidth = this.box.x + this.box.width + this.spacing) : (this.contenetWidth = this.potX, this.contenetHeight = this.lastBox.y + this.heightMax + this.spacing, this.box.x = this.contenetWidth, this.box.y = this.contenetHeight, this.heightMax = this.box.height, this.contenetWidth = this.box.x + this.box.width + this.spacing), this.lastBox = this.box);
        }
        this.panel.refresh();
    };
    ScrollContent.i = 0;
    ScrollContent.count = 0;
    return ScrollContent;
}());
//# sourceMappingURL=ScrollContent.js.map