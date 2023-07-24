/*
* name;
*/
var BuffTips = /** @class */ (function () {
    function BuffTips(t) {
        this.isUseAble = false;
        this.skin = null;
        this.l1 = null;
        this.l2 = null;
        this.l3 = null;
        this.l4 = null;
        this.icon = null;
        this.namelb = null;
        this.skin = t;
        this.icon = t.getChildByName("icon");
        this.l1 = t.getChildByName("l1");
        this.l2 = t.getChildByName("l2");
        this.l3 = t.getChildByName("l3");
        this.l4 = t.getChildByName("l4");
        this.namelb = t.getChildByName("namelb");
        this.l1.visible = this.l2.visible = this.l3.visible = this.l4.visible = true;
    }
    BuffTips.prototype.setColor = function (t) {
        this.l4.source = this.l3.source = this.l2.source = this.l1.source = Laya.loader.getRes(t);
    };
    BuffTips.prototype.setIcon = function (t) {
        this.init();
        this.icon.source = Laya.loader.getRes(t);
    };
    BuffTips.prototype.setName = function (t) {
        var nscale = .6;
        CD.Language == Language.ch && (nscale = .9);
        CD.Language == Language.ru && (nscale = .33);
        CD.Language == Language.es && (nscale = .4);
        CD.Language == Language.pt && (nscale = .4);
        CD.Language == Language.fr && (nscale = .33);
        CD.Language == Language.de && (nscale = .4);
        CD.Language == Language.it && (nscale = .4);
        this.namelb.scale(nscale, nscale);
        //this.namelb.text = Lan.G(1062);return;
        switch (t) {
            case 1:
                this.namelb.text = Lan.G(1057);
                this.namelb.font = "font_40_blue";
                break;
            case 2:
                this.namelb.text = Lan.G(1058);
                this.namelb.font = "font_40_blue";
                break;
            case 3:
                this.namelb.text = Lan.G(1059);
                this.namelb.font = "font_40_blue";
                break;
            case 7:
                this.namelb.text = Lan.G(1063);
                this.namelb.font = "font_40_blue";
                break;
            case 8:
                this.namelb.text = Lan.G(1064);
                this.namelb.font = "font_40_blue";
                break;
            case 9:
                this.namelb.text = Lan.G(1065);
                this.namelb.font = "font_40_blue";
                break;
            case 4:
                this.namelb.text = Lan.G(1060);
                this.namelb.font = "font_40_orange";
                break;
            case 5:
                this.namelb.text = Lan.G(1061);
                this.namelb.font = "font_40_orange";
                break;
            case 6:
                this.namelb.text = Lan.G(1062);
                this.namelb.font = "font_40_orange";
                break;
        }
    };
    BuffTips.prototype.init = function () {
        this.l1.scaleX = 1;
        this.l2.scaleX = 1;
        this.l3.scaleX = 1;
        this.l4.scaleX = 1;
    };
    BuffTips.prototype.setPgs = function (t) {
        // if (t < .3333) {
        //     this.l1.visible || (this.l1.visible = true);
        //     this.l2.visible && (this.l2.visible = false);
        //     this.l3.visible && (this.l3.visible = false);
        //     this.l1.scaleX = t / .3333;
        // }
        // else {
        //     if (t < .6666) {
        //         this.l1.visible || (this.l1.visible = true);
        //         this.l1.scaleX = 1;
        //         this.l2.visible || (this.l2.visible = true);
        //         this.l3.visible && (this.l3.visible = false);
        //         this.l2.scaleX = (t - .3333) / .3333;
        //     }
        //     else {
        //         this.l1.visible || (this.l1.visible = true);
        //         this.l1.scaleX = 1;
        //         this.l2.visible || (this.l2.visible = true);
        //         this.l2.scaleX = 1;
        //         this.l3.visible || (this.l3.visible = true);
        //         this.l3.scaleX = (t - .6666) / .3333;
        //     }
        // }
        if (t < .1666) {
            this.l4.scaleX = 0;
            this.l3.scaleX = 0;
            this.l2.scaleX = 0;
            this.l1.scaleX = t / .1666;
        }
        else if (t > .166 && t <= .5) {
            this.l4.scaleX = 0;
            this.l3.scaleX = 0;
            this.l2.scaleX = (t - .1666) / .3333;
            this.l1.scaleX = 1;
        }
        else if (t > .5 && t <= .833) {
            this.l4.scaleX = 0;
            this.l3.scaleX = (t - .5) / .3333;
            this.l1.scaleX = 1;
            this.l2.scaleX = 1;
        }
        else {
            this.l4.scaleX = (t - .833) / .1666;
            this.l1.scaleX = 1;
            this.l2.scaleX = 1;
            this.l3.scaleX = 1;
        }
        //console.log("SetPgs***", t, this.l1.scaleX, this.l2.scaleX, this.l3.scaleX, this.l4.scaleX);
    };
    return BuffTips;
}());
//# sourceMappingURL=Pgs3.js.map