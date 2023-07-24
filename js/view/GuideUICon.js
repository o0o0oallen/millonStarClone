/*
* SettingWnd;
*/
var GuideUI = /** @class */ (function () {
    //构造方法
    function GuideUI() {
        this.gui = null;
        this.uibg = null;
        this.y_Move = 0;
        this.isGuide = false;
        this.hitRect = null;
        this.nowStep = 0;
        this.guideStep = 0;
        this.gui = new ui.GuideUIUI;
        this.uibg = new ui.GuideBGUI;
        GuideUI.ME = this;
        Laya.stage.addChild(this.uibg);
        Laya.stage.addChild(this.gui);
        //this.ui.zOrder = 100;
        // this.ui.mask1.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight() / 2);
        this.uibg.mouseEnabled = true;
        this.uibg.pos(0, 0);
        this.uibg.heidi.alpha = .64;
        // console.log("this.ui.heidi",this.ui.heidi.width,this.ui.heidi.height,this.ui.heidi.x,this.ui.heidi.y);
        this.gui.interaction.blendMode = "destination-out";
        this.hitRect = new Laya.HitArea();
        this.uibg.visible = false;
        this.gui.mask.visible = false;
        this.gui.interaction.visible = false;
        //this.ui.hitArea = this.hitRect;
        //this.ui.mouseEnabled = true;
        this.onResize();
        this.gui.ani1.play(0, true);
        this.gui.ani2.play(0, true);
        this.gui.ani3.play(0, true);
        //UIHelper.dohide(this.gui);
        this.gui.visible = false;
    }
    GuideUI.prototype.onResize = function () {
        this.gui.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight() * 7 / 10);
        this.uibg.size(MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight() * 3 / 10);
        this.uibg.heidi.graphics.clear();
        this.uibg.heidi.graphics.drawRect(0, 0, this.uibg.width, this.uibg.height, "#000000", null, 0);
        this.gui.mask.size(this.gui.width, this.gui.height);
        this.gui.pos(0, MStage.ME.GetWinHeight() * 3 / 10);
        this.y_Move = MStage.ME.GetWinHeight() * 3 / 10;
        // this.ui.mask1.graphics.drawRect(0, 0, MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight() / 2,"#000000");
        this.gui.mask.graphics.clear();
        this.gui.mask.graphics.drawRect(0, 0, this.gui.width, this.gui.height, "#000000", null, 0);
        this.gui.mask.alpha = .8;
        this.hitRect.hit.clear();
        this.hitRect.hit.drawRect(0, 0, MStage.ME.GetWinWidth(), MStage.ME.GetWinHeight(), "#000000");
        this.gui.interaction.graphics.clear();
    };
    GuideUI.prototype.ShowGuideByStep = function (nstep) {
        //console.log("ShowGuideByStep***"+nstep);
        //UIHelper.doshow(this.gui);
        this.gui.visible = true;
        switch (nstep) {
            case GuideUI.GUIDE_STEP1:
                //this.Step_ProtectHead();
                break;
            case GuideUI.GUIDE_STEP2:
                SV.ME.doDadian(1);
                this.Step_MovePlane();
                // HB.RenWu(HuiBao.RenWu_Key.onBegin, "yindao_huadong");
                break;
            case GuideUI.GUIDE_STEP3:
                SV.ME.doDadian(6);
                this.Step_PWAddSpeed();
                // HB.RenWu(HuiBao.RenWu_Key.onBegin, "yindao_zhuwuqi_1");
                break;
            case GuideUI.GUIDE_STEP5:
                this.Step_PWAddSpeed();
                break;
            case GuideUI.GUIDE_STEP6:
            case GuideUI.GUIDE_STEP7:
                this.Step_PWAddPower();
                // HB.RenWu(HuiBao.RenWu_Key.onBegin, "yindao_zhuwuqi_"+(nstep - 3));
                break;
            case GuideUI.GUIDE_STEP4:
                SV.ME.doDadian(13);
                this.Step_DWAddPower();
                // HB.RenWu(HuiBao.RenWu_Key.onBegin, "yindao_fuwuqi");
                break;
        }
        this.nowStep = nstep;
        this.isGuide = true;
    };
    GuideUI.prototype.OnNextGuide = function () {
        switch (this.nowStep) {
            case GuideUI.GUIDE_STEP3:
            case GuideUI.GUIDE_STEP5:
                this.Step_PWAddSpeed();
                break;
            case GuideUI.GUIDE_STEP6:
            case GuideUI.GUIDE_STEP7:
                this.Step_PWAddPower();
                break;
            case GuideUI.GUIDE_STEP4:
                this.Step_DWAddPower();
                break;
        }
    };
    GuideUI.prototype.Step_DWAddPower = function () {
        var img;
        var point;
        if (this.guideStep == 0) {
            img = Game.ME.gui.b2;
        }
        if (this.guideStep == 1) {
            img = Game.ME.gui.bAddHuoLi2;
        }
        point = img.localToGlobal(new Laya.Point(0, 0));
        //console.log("Step_DWAddPower--",img.x,img.y,point.x,point.y,this.guideStep);
        this.uibg.visible = true;
        this.gui.mask.visible = true;
        this.gui.interaction.visible = true;
        //var nypos = point.y + img.height > MStage.ME.GetWinHeight() ? MStage.ME.GetWinHeight() - img.height : point.y;
        this.hitRect.unHit.clear();
        this.hitRect.unHit.drawRect(point.x, point.y - this.y_Move, img.width, img.height, "#000000");
        this.gui.interaction.graphics.clear();
        this.gui.interaction.graphics.drawRect(point.x, point.y - this.y_Move, img.width, img.height, "#000000");
        this.gui.hitArea = this.hitRect;
        this.gui.mouseEnabled = true;
        this.gui.jiantouBox.visible = true;
        if (this.guideStep == 0) {
            this.gui.jiantouDesc.text = Lan.G(1011);
            this.gui.jiantouBox.pos(point.x + 150, point.y - this.y_Move - 200);
            this.gui.jiantou.rotation = 180;
            this.gui.jiantou.pos(57, 80);
            this.gui.jiantouBg.pos(-230, -100);
            this.guideStep = 1;
        }
        else if (this.guideStep == 1) {
            this.gui.jiantouDesc.text = Lan.G(1026);
            this.gui.jiantouBox.pos(point.x + 77, point.y - this.y_Move - 160);
            this.gui.jiantou.rotation = 180;
            this.gui.jiantou.pos(57, 80);
            this.gui.jiantouBg.pos(-300, -80);
            this.guideStep = 2;
        }
    };
    GuideUI.prototype.Step_PWAddPower = function () {
        var img;
        var point;
        if (this.guideStep == 0) {
            img = Game.ME.gui.b1;
        }
        if (this.guideStep == 1) {
            img = Game.ME.gui.b2Fire;
        }
        point = img.localToGlobal(new Laya.Point(0, 0));
        //console.log("Step_PWAddPower--",img.x,img.y,point.x,point.y,this.guideStep);
        this.uibg.visible = true;
        this.gui.mask.visible = true;
        //console.log("this.ui.heidi",this.ui.heidi.width,this.ui.heidi.height,this.ui.heidi.x,this.ui.heidi.y);
        this.gui.interaction.visible = true;
        //var nypos = point.y + img.height > MStage.ME.GetWinHeight() ? MStage.ME.GetWinHeight() - img.height : point.y;
        this.hitRect.unHit.clear();
        this.hitRect.unHit.drawRect(point.x, point.y - this.y_Move, img.width, img.height, "#000000");
        this.gui.interaction.graphics.clear();
        this.gui.interaction.graphics.drawRect(point.x, point.y - this.y_Move, img.width, img.height, "#000000");
        this.gui.hitArea = this.hitRect;
        this.gui.mouseEnabled = true;
        this.gui.jiantouBox.visible = true;
        if (this.guideStep == 0) {
            this.gui.jiantouDesc.text = Lan.G(1025);
            this.gui.jiantouBox.pos(point.x + 120, point.y - this.y_Move - 200);
            this.gui.jiantou.rotation = 180;
            this.gui.jiantou.pos(57, 80);
            this.gui.jiantouBg.pos(128, 80);
            this.guideStep = 1;
        }
        else if (this.guideStep == 1) {
            this.gui.jiantouDesc.text = Lan.G(1026);
            this.gui.jiantouBox.pos(point.x + 77, point.y - this.y_Move - 160);
            this.gui.jiantou.rotation = 180;
            this.gui.jiantou.pos(57, 80);
            this.gui.jiantouBg.pos(-300, -100);
            this.guideStep = 2;
        }
    };
    GuideUI.prototype.Step_PWAddSpeed = function () {
        var img;
        var point;
        if (this.guideStep == 0) {
            img = Game.ME.gui.b1;
        }
        if (this.guideStep == 1) {
            img = Game.ME.gui.b1Speed;
        }
        point = img.localToGlobal(new Laya.Point(0, 0));
        //console.log("Step_PWAddPower--",img.x,img.y,point.x,point.y,this.guideStep);
        this.uibg.visible = true;
        this.gui.mask.visible = true;
        //console.log("this.ui.heidi",this.ui.heidi.width,this.ui.heidi.height,this.ui.heidi.x,this.ui.heidi.y);
        this.gui.interaction.visible = true;
        //var nypos = point.y + img.height > MStage.ME.GetWinHeight() ? MStage.ME.GetWinHeight() - img.height : point.y;
        this.hitRect.unHit.clear();
        this.hitRect.unHit.drawRect(point.x, point.y - this.y_Move, img.width, img.height, "#000000");
        this.gui.interaction.graphics.clear();
        this.gui.interaction.graphics.drawRect(point.x, point.y - this.y_Move, img.width, img.height, "#000000");
        this.gui.hitArea = this.hitRect;
        this.gui.mouseEnabled = true;
        this.gui.jiantouBox.visible = true;
        if (this.guideStep == 0) {
            this.gui.jiantouDesc.text = Lan.G(1025);
            this.gui.jiantouBox.pos(point.x + 120, point.y - this.y_Move - 200);
            this.gui.jiantou.rotation = 180;
            this.gui.jiantou.pos(57, 80);
            this.gui.jiantouBg.pos(128, 80);
            this.guideStep = 1;
        }
        else if (this.guideStep == 1) {
            this.gui.jiantouDesc.text = Lan.G(1053);
            this.gui.jiantouBox.pos(point.x + 77, point.y - this.y_Move + 100);
            this.gui.jiantou.rotation = 0;
            this.gui.jiantou.pos(57, 80);
            this.gui.jiantouBg.pos(-300, 250);
            this.guideStep = 2;
        }
    };
    GuideUI.prototype.Step_ProtectHead = function () {
        //console.log("Step_ProtectHead--");
        // this.ui.descLb.text = Lan.G(1027);
        // this.ui.tipBox.pos(64, 40);
        // this.ui.tipBox.visible = true;
        // this.ui.mask.visible = false;
        // this.ui.interaction.visible = false;
    };
    GuideUI.prototype.Step_MovePlane = function () {
        //console.log("Step_MovePlane--", Game.ME.plane.y);
        CD.Language == Language.ru && this.gui.moveTipLb.scale(.8, .8);
        CD.Language == Language.es && this.gui.moveTipLb.scale(.74, .74);
        CD.Language == Language.pt && this.gui.moveTipLb.scale(.74, .74);
        CD.Language == Language.it && this.gui.moveTipLb.scale(.75, .75);
        CD.Language == Language.fr && this.gui.moveTipLb.scale(.75, .75);
        CD.Language == Language.de && this.gui.moveTipLb.scale(.7, .7);
        this.gui.moveTipLb.text = Lan.G(1038);
        this.gui.moveBox.y = MStage.ME.GetWinHeight() - 500 * MStage.ME.GetScaleY() - this.y_Move;
        this.gui.moveBox.visible = true;
        this.gui.leftImg.visible = true;
        this.gui.rightImg.visible = true;
        //this.ui.mask1.visible = false;
        this.uibg.visible = false;
        this.gui.mask.visible = false;
        this.gui.interaction.visible = false;
    };
    GuideUI.prototype.OnGuideCom = function (nstep, state) {
        if (nstep === void 0) { nstep = 0; }
        if (state === void 0) { state = 1; }
        //console.log("OnGuideCom", nstep);
        if (nstep == 0)
            nstep = this.nowStep;
        switch (nstep) {
            case GuideUI.GUIDE_STEP1:
                break;
            case GuideUI.GUIDE_STEP2:
                SV.ME.doDadian(2);
                // if(state == 1)
                // 	HB.RenWu(HuiBao.RenWu_Key.onCompleted, "yindao_huadong");
                // else
                // 	HB.RenWu(HuiBao.RenWu_Key.onFailed, "yindao_huadong");
                break;
            case GuideUI.GUIDE_STEP3:
                SV.ME.doDadian(7);
                // HB.RenWu(HuiBao.RenWu_Key.onCompleted, "yindao_zhuwuqi_1");
                break;
            case GuideUI.GUIDE_STEP4:
                SV.ME.doDadian(14);
                // HB.RenWu(HuiBao.RenWu_Key.onCompleted, "yindao_fuwuqi");
                break;
            case GuideUI.GUIDE_STEP5:
                SV.ME.doDadian(15);
                // HB.RenWu(HuiBao.RenWu_Key.onCompleted, "yindao_zhuwuqi_2");
                break;
            case GuideUI.GUIDE_STEP6:
                SV.ME.doDadian(16);
                // HB.RenWu(HuiBao.RenWu_Key.onCompleted, "yindao_zhuwuqi_3");
                break;
            case GuideUI.GUIDE_STEP7:
                SV.ME.doDadian(17);
                // HB.RenWu(HuiBao.RenWu_Key.onCompleted, "yindao_zhuwuqi_4");
                break;
        }
        this.closeView();
    };
    GuideUI.prototype.closeView = function () {
        //UIHelper.dohide(this.gui);
        this.gui.visible = false;
        this.nowStep = 0;
        this.guideStep = 0;
        this.isGuide = false;
        this.gui.moveBox.visible = false;
        //this.ui.tipBox.visible = false;
        this.gui.jiantouBox.visible = false;
        this.gui.mouseEnabled = false;
        this.uibg.visible = false;
        //Game.ME.guideStep = 0;
    };
    GuideUI.GUIDE_STEP1 = 1; //头部保护提示
    GuideUI.GUIDE_STEP2 = 2; //左右滑动提示
    GuideUI.GUIDE_STEP3 = 3; //主武器升级提示(第1关结束)
    GuideUI.GUIDE_STEP4 = 4; //副武器升级提示
    GuideUI.GUIDE_STEP5 = 5; //主武器升级提示(第2关结束)
    GuideUI.GUIDE_STEP6 = 6; //主武器升级提示(第3关结束)
    GuideUI.GUIDE_STEP7 = 7; //主武器升级提示(第4关结束)
    GuideUI.ME = null;
    return GuideUI;
}());
//# sourceMappingURL=GuideUICon.js.map