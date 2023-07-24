/**Created by the LayaAirIDE*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.curLevelIndex = 0;
        _this.lastTabIndex = -1;
        _this.curentTabUnlockIndex = 0;
        _this.buffCount = 0;
        _this.layerAll = null;
        _this.layerBug0 = null;
        _this.layerBug1 = null;
        _this.layerBug = null;
        _this.layerBoom = null;
        _this.layerPlane = null;
        _this.uiLevel = null;
        _this.coinX = 0;
        _this.coinY = 0;
        _this.border = 4;
        _this.BL = 0;
        _this.BR = 0;
        _this.BB = 0;
        _this.BT = 0;
        _this.BB_100 = 0;
        _this.plane = null;
        // public gui:ui.GameUI = null;
        //public itLevel = null;
        //public itLevel1 = null;
        //public itLevel2 = null;
        //public itLevel3 = null;
        //public itLevel4 = null;
        //public itLevel5 = null;
        //public itLevel6 = null;
        //public itLeft = null;
        // public itHuoLi = null;
        // public itHuoLi2 = null;
        // public itJiaZhi = null;
        // public itLiXian = null;
        //public itMoney = null;
        //public itMoney2 = null;
        _this.flyMoney = null;
        _this.flyTiLi = null;
        _this.flyGold = null;
        _this.damageArr = [];
        // public fxBoom2 = null;
        // public fxBoom3 = null;
        // public fxBoom4 = null;
        _this.boomPlane = null;
        _this.fxJinBi = null;
        _this.fxTiLi = null;
        _this.fxGold = null;
        _this.animJinBi = null;
        _this.pStart = null;
        _this.isFirstOpen = true;
        _this.isWin = false;
        _this.isLost = false;
        _this.lostCount = 0;
        _this.fuIcons = null;
        _this.WuQilist = null;
        //public pgsImg = null;
        //public pgsSign = null;
        _this.btnLevel = null;
        _this.fuLockLevel = [6, 21, 41, 61, 81, 101, 121, 141, 161, 181, 201];
        _this.fuLockId = 10;
        _this.mode = 2;
        _this.boomCount = 0;
        _this.txtTip = null;
        _this.coinCountRate = null;
        _this.isLaunch = false;
        _this.bFavOpen = false;
        _this.coinScale = 1;
        _this.coinScale2 = 1;
        _this.zuanScale = 1;
        _this.lastCT = 0;
        _this.tiliScale = 1;
        _this.shareIB = null;
        _this.shareIcon = null;
        _this.curFu = 0;
        _this.pCoin = 0;
        _this.scrollFuX = 0;
        _this.t = 0;
        _this.isVideoCoinAble = false;
        _this.newPlayerPlay = false;
        _this.curBg = -1;
        _this.luckUI = null;
        _this.itemsX = null;
        _this.itemsB = null;
        _this.temp = null;
        _this.item30 = null;
        _this.tigerY = 0;
        _this.tigerSpeed = NaN;
        _this.loopY = NaN;
        _this.startY = NaN;
        _this.goonFun = null;
        _this.timeLeft = 0;
        _this.clickRelife = 0;
        _this.reLifeCount = 0;
        _this.relifeType = null;
        _this.relifeTryFu = 0;
        _this.isScaleAble = false;
        _this.isFirstFail = true;
        _this.waveIndex = 0;
        _this.waveCount = 0;
        _this.index = 0;
        _this.count = 0;
        _this.startMouseX = 0;
        _this.startMouseY = 0;
        _this.pStartX = 0;
        _this.pStartY = 0;
        _this.resultX = 0;
        _this.resultY = 0;
        _this.lastX = 0;
        _this.lastY = 0;
        _this.startR = 0;
        _this.resultR = 0;
        _this.lastR = 0;
        _this.dX = 0;
        _this.dY = 0;
        _this.resultRid = 0;
        _this.isMouseDown = false;
        _this.b = false;
        _this.isShack = false;
        _this.shackCount = 2;
        _this.shackTime = 0;
        _this.shackDura = 0;
        _this.sx = NaN;
        _this.sy = NaN;
        _this.sBi = NaN;
        _this.sDis = NaN;
        _this.pUpSpeed = 0;
        _this.bgOffX = 0;
        _this.bgOffY = 0;
        _this.delayUpdate = 0;
        _this.imgBg = null;
        // public itSheSu = null;
        // public itSheSu2 = null;
        //ltt1
        _this.gui = null;
        _this.gamebgMove = .005;
        _this.gamebgMoveSpeed = 500;
        // public b1Speed;
        // public b2Fire;
        // public bAddSheSu2;
        // public bAddHuoLi2;
        // public bAddJiaZhi;
        // public bAddLiXian;
        // public b1;
        // public b2;
        // public b3;
        // public btnAddTiLi;
        // public btnAddTiLi2
        _this.bgwidth = 150;
        _this.lxTime = "";
        _this.guideStep = 0;
        _this.nStartState = 0;
        _this.fuUpCount = 0;
        _this.tsss = 0;
        _this.isVideo = 0;
        _this.relifeLimitNum = 1;
        _this.relifevideolvl = 0; //复活视频4关后开启，4关内自动复活
        _this.jiesuanvideo = 1;
        _this.buffObstructCount = 2; //前5关开始两个星球爆炸都出buff 1扩散 2飞机
        _this.wincontinue = 0; //目前记录前10关连胜次数 ,用做弹出评价
        _this.showchargetip = 0;
        _this.showTryFu = true; //是否显示满级试用
        _this.uiAnimTime = 300;
        _this.uiAnimShow = false;
        _this.isCanClick = false;
        _this.shopTipLvl = 6;
        _this.nSlcOpenButtle = 0;
        _this.nSlcWid = 0;
        _this.nSlcButtle = 0;
        _this.nTipButtle = 0;
        _this.loginTipCheck = false;
        _this.isOpenBullet = false;
        _this.ClickCharge = false;
        _this.nTipWing = 0;
        _this.nSlcWing = 0;
        _this.nSlcOpenWing = 1200;
        _this.isOpenWing = false;
        _this.wingSkillTime = 0;
        _this.playMode = 0; //0-闯关1-无尽
        _this.onFuClickNo = function (t) {
            PosTool._localToGlobal(t.btn.skin.parent, t.btn.skin.x, t.btn.skin.y),
                this.scrollFuX = PosTool._point.x;
        };
        _this.bufftiplist = [];
        _this.sH5FromType = "";
        Game.MusicActive = 1;
        Game.SoundActive = 1;
        _this.curentTabUnlockIndex = 0;
        audioManager.Initialize();
        var f = laya.utils.Handler;
        _this.levelMoney = new math_BigUInt();
        _this.levelRateMoney = new math_BigUInt();
        //console.log("setByShortString", this.levelMoney.setByShortString(""))
        _this._val = new math_BigUInt();
        _this.curCoin = new math_BigUInt();
        _this.curCoin.zero();
        _this.lxCoin = new math_BigUInt();
        _this.lxCoin.zero();
        _this.videoCoin = new math_BigUInt();
        _this.videoCoin2 = new math_BigUInt();
        _this.hTimeScale = new laya.utils.Handler(_this, _this.updateTimerScale);
        _this.levelCount = new math_BigUInt();
        Game.ME = _this;
        //****************************************************** */
        //SV.ME.money.setByShortString("9999999999");
        // console.log("ddddddddddddddd",SV.ME.money.getShortString(),SV.ME.money.getV1(),SV.ME.money.getV2())
        console.log("TIEM", CM.Get_Local_Time());
        //SV.ME.tiLi = 999; //ltt
        // var Pass_level = 200;				SV.ME.level < Pass_level && (SV.ME.level = Pass_level);
        // var pcc = 10;
        // SV.ME.lDamage = Pass_level,
        // SV.ME.lCount = Pass_level,
        // SV.ME.gold = 999999,
        // SV.ME.levelFuCount = [pcc, pcc, pcc, pcc, pcc, pcc, pcc, pcc, pcc, pcc, pcc];
        // SV.ME.levelFuDamage = [SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage, SV.ME.lDamage];
        //laya.net.LocalStorage.clear();
        //SV.ME.loginNum = 7;
        // console.log("doDadian", SV.ME.doDadian(1));
        //****************************************************** */
        new FPool();
        // new PYaoQing(); //邀请好友
        _this.gui = new ui.GameUI();
        _this.curBg = SV.ME.bgIndex;
        console.log("curBg", _this.curBg);
        //UI.OnWinMsgUI("curBg"+this.curBg);
        // MStage.ME.GetWinWidth() = window.innerWidth;
        // MStage.ME.GetWinHeight() = window.innerHeight;
        // console.log("ixie~~~~~~" + GameMain.Stage_Height + "/" + GameMain.Offset_Y + "/" + window.innerHeight);
        _this._changeBG1();
        _this.uiLevel = new ui.LevelUI();
        _this.gui.addChild(_this.uiLevel.level);
        _this.gui.height += GameMain.Offset_Y * 2;
        _this.uiLevel.level.x = MStage.ME.GetWinWidth() / 2;
        _this.uiLevel.level.y = Game.centerY - 250 * MStage.ME.GetScaleY(); // centerY = -200;//.pos(MStage.ME.GetWinWidth() / 2, 200, true);
        _this.uiLevel.animRoll.play(0, true);
        _this.uiLevel.ani5.play(0, true);
        Laya.stage.addChild(_this.layerAll = new laya.display.Sprite());
        _this.layerAll.addChild(_this.gui.bg);
        _this.layerAll.addChild(_this.gui.bgall);
        //this.layerAll.addChild(this.gui.bgyun);
        //this.layerAll.addChild(this.gui.bgyunshi);
        _this.layerAll.addChild(_this.layerBug0 = new laya.display.Sprite());
        _this.layerAll.addChild(_this.layerBug = new laya.display.Sprite());
        _this.layerAll.addChild(_this.layerBug1 = new laya.display.Sprite());
        _this.layerAll.addChild(_this.layerBoom = new laya.display.Sprite());
        _this.layerPlane = new laya.display.Sprite();
        _this.layerAll.addChild(_this.layerPlane);
        //ltt1 new
        // 	Laya.stage.addChild(Logo.ME),
        // 	Logo.ME.pos(150, 300),
        // 	Logo.ME.start();
        Buff.parent = _this.layerPlane;
        Laya.stage.addChild(_this.gui);
        Laya.stage.addChild(_this);
        _this.plane = new Plane();
        Plane.ME = _this.plane;
        _this.plane.setFace("fly1");
        _this.plane.addShooter(0);
        Buff.disSqr = _this.plane.eatR + Buff.r;
        Buff.disSqr *= Buff.disSqr;
        var damage1 = new ImgAnim(_this.layerBoom);
        damage1.init("damage/bz", 11, 1);
        // this.fxBoom2 = new ImgAnim(this.layerBoom),
        // this.fxBoom2.init("fxBoom2/b", 12, 1),
        // this.fxBoom3 = new ImgAnim(this.layerBoom),
        // this.fxBoom3.init("fxBoom3/b", 12, 1),
        // this.fxBoom4 = new ImgAnim(this.layerBoom),
        // this.fxBoom4.init("fxBoom4/b", 12, 1),
        _this.damageArr.push(damage1);
        _this.boomPlane = new ImgAnim(_this.layerBoom),
            _this.boomPlane.init("spaceship/boom/bz_", 11, 2, false, true),
            _this.animJinBi = new AnimImg(),
            _this.animJinBi.init("ui/jb", 6, 2, true, true),
            _this.animJinBi.play(_this.gui.p3jbimg),
            _this.fxJinBi = new ImgAnim(_this.gui),
            _this.fxJinBi.init("ui/jb", 6, 2, true, true),
            _this.flyMoney = new FlyMoneyAnim(Laya.stage),
            _this.flyMoney.setImgAnim(_this.fxJinBi),
            _this.flyMoney.setCallBack(_this, _this.addMoney),
            _this.fxTiLi = new ImgAnim(_this.gui),
            _this.fxTiLi.init("ui/tili", 1, 2, true, true),
            _this.flyTiLi = new FlyMoneyAnim(Laya.stage),
            _this.flyTiLi.setCallBack(_this, _this._addTili),
            _this.flyTiLi.setImgAnim(_this.fxTiLi),
            _this.fxGold = new ImgAnim(_this.gui),
            _this.fxGold.init("ui3/zs", 1, 2, true, true),
            _this.flyGold = new FlyMoneyAnim(Laya.stage),
            _this.flyGold.setCallBack(_this, _this.addGold),
            _this.flyGold.setImgAnim(_this.fxGold),
            _this.pStart = new fxPaiticle(Laya.stage),
            _this.pStart.init("damage/", ["1", "2", "3", "4"]),
            Cfg.imgTextBug = new ImgText(null),
            Cfg.imgTextBug.initPub("0123456789.KMBTUVWXY", "number/", "w"),
            // Cfg.imgTextGuiB = new ImgText(null),
            // Cfg.imgTextGuiB.initPub("0123456789", "gui/", "b"),
            // Cfg.imgTextGuiX = new ImgText(null),
            // Cfg.imgTextGuiX.initPub("0123456789.KMBTPEYZS%", "gui/", "x"),
            // Cfg.itW = new ImgText(null),
            // Cfg.itW.initPub("LvKMBTPEYSZax0123456789()。+,./:%", "gui/", "w"),
            _this.gui.itCoinTime.text = "",
            _this.gui.itCoinVal.text = "0",
            _this.gui.itCoinGet.text = "", //Lan.G(1001),
            _this.gui.signLb.text = "", //Lan.G(1043),
            _this.gui.achvLb.text = "", //Lan.G(100005),
            _this.gui.shopLb.text = "",
            _this.gui.baoxianglb.text = "", //Lan.G(4000),
            _this.gui.itRelife.text = Lan.G(1002),
            _this.gui.itAdTiLi2.text = "+20",
            _this.gui.tililb.text = "0",
            _this.gui.tilitime.text = "10:00",
            _this.gui.itBoss.text = Lan.G(1004),
            _this.gui.tipMore.text = Lan.G(1005),
            _this.gui.it009.text = Lan.G(1001),
            _this.gui.it015.text = Lan.G(1006),
            _this.gui.it017.text = "+5",
            _this.gui.it021.text = Lan.G(1008),
            _this.gui.it022.text = CD.subScribeType > 0 ? Lan.G(1073) : Lan.G(1009),
            _this.gui.it023.text = Lan.G(1010),
            _this.gui.tipFuLb.text = Lan.G(1011),
            _this.gui.tipFu.width = _this.gui.tipFuLb.displayWidth + 60,
            _this.gui.p1tab1lb.text = Lan.G(1012),
            _this.gui.p1tab2lb.text = Lan.G(1079),
            _this.gui.p1tab3lb.text = Lan.G(1093),
            _this.gui.p2desclb.text = Lan.G(1013),
            _this.gui.p3desclb.text = Lan.G(1014),
            _this.gui.lock10lb.text = Lan.G(1016),
            _this.gui.set110.text = Lan.G(1029),
            _this.gui.set120.text = Lan.G(1030),
            _this.gui.set220.text = Lan.G(1030),
            _this.gui.set310.text = Lan.G(1031),
            _this.gui.set320.text = Lan.G(1035),
            _this.gui.it007.text = Lan.G(1037),
            _this.gui.taptoplay.text = Lan.G(1066),
            _this.gui.itCCoin1Lb.text = Lan.G(1067),
            _this.gui.itCCoin2Lb.text = CD.subScribeType > 0 && CD.BanBen == BanBen.guoji ? Lan.G(1074) : Lan.G(1068),
            _this.gui.up1lb.text = _this.gui.up2lb.text = _this.gui.up3lb.text = "", //Lan.G(1069),
            _this.gui.p3getlb.text = Lan.G(1008),
            _this.gui.failtip.text = Lan.G(1081),
            // new PaiHang(),
            new TipRich(new ui.TipRichUI, null),
            new SettingWnd(),
            //new UpWeaponWnd(),
            //new GoldIncomeWnd(),
            new ScoreWnd(),
            //this.itLevel = Cfg.imgTextGuiB.clone(this.gui.itLevel),
            UIHelper.saveChilds(_this.uiLevel.level),
            _this.uiLevel.animLevel.on("complete", _this, _this.resetUIevel),
            _this.gui.goldlb.text = SV.ME.money.getShortString(),
            _this.gui.zuanlb.text = SV.ME.gold.toString(),
            ImgLink.INIT(Game.ME.layerBug0),
            FxPlus.INIT(Game.ME.layerPlane),
            AreaCircle.INIT(Game.ME.layerBug),
            //this.pgsImg = new ImgPgsCircle(this.gui.pgsCoin),
            //UIHelper.savePos(this.gui.coin),
            _this.wingSkillPgs = new ImgPgsCircle(_this.gui.wingskillpgs),
            //this.pgsSign = new ImgPgsCircle(this.gui.pgsSign),
            UIHelper.savePos(_this.gui.signbtn),
            UIHelper.savePos(_this.gui.achvbtn),
            UIHelper.savePos(_this.gui.shopbtn),
            UIHelper.savePos(_this.gui.baoxiangbtn),
            UIHelper.savePos(_this.gui.subscribeBtn),
            UIHelper.savePos(_this.gui.chargeBtn),
            UIHelper.savePos(_this.gui.endlessbtn),
            // UIHelper.savePos(this.gui.btnPaiHang),
            // UIHelper.savePos(this.gui.btnFanKui),
            // UIHelper.savePos(this.gui.btnFriend),
            // UIHelper.savePos(this.gui.btnKeFu),
            // UIHelper.savePos(this.gui.btnGuanZhu),
            //UIHelper.savePos(this.gui.iTitle),
            UIHelper.savePos(_this.gui.itLevel),
            UIHelper.savePos(_this.gui.xueliang),
            UIHelper.savePos(_this.gui.boci),
            //UIHelper.savePos(this.gui.ligth),
            UIHelper.savePos(_this.gui.p1),
            UIHelper.savePos(_this.gui.p2),
            UIHelper.savePos(_this.gui.p3),
            UIHelper.savePos(_this.gui.tapplaybox),
            UIHelper.savePos(_this.gui.topPanel),
            _this.gui.tipnewlb.text = Lan.G(1047),
            UIHelper.dohide(_this.gui.itLevel),
            _this.gui.btnCollect.on("click", _this, _this.jieSuanClick),
            _this.gui.jiesuangetlb.on("click", _this, _this.jieSuanClick),
            _this.gui.btnCollect2.on("click", _this, _this.jieSuanClick),
            // this.gui.btnCollect3.on("click", this, this.jieSuanClick);
            new ImgBtn().setSkin(_this.gui.b1).on("mousedown", _this, _this.onBtnBtm),
            new ImgBtn().setSkin(_this.gui.b2).on("mousedown", _this, _this.onBtnBtm),
            new ImgBtn().setSkin(_this.gui.b3).on("mousedown", _this, _this.onBtnBtm),
            new ImgBtn().setSkin(_this.gui.p1tab1img, true, false, true).on("mousedown", _this, _this.ChangeTab, [1, 1]),
            new ImgBtn().setSkin(_this.gui.p1tab2img, true, false, true).on("mousedown", _this, _this.ChangeTab, [1, 2]),
            new ImgBtn().setSkin(_this.gui.p1tab3img, true, false, true).on("mousedown", _this, _this.ChangeTab, [1, 3]),
            new ImgBtn().setSkin(_this.gui.p1tab2buy, true, true, true).on("mousedown", _this, _this.BuyBullet),
            new ImgBtn().setSkin(_this.gui.p1tab3buy, true, true, true).on("mousedown", _this, _this.BuyWing),
            _this.gui.p1tab2list.renderHandler = new Laya.Handler(_this, _this.UpdateBulletList),
            _this.gui.p1tab3list.renderHandler = new Laya.Handler(_this, _this.UpdateWingList),
            // this.gui.btnPaiHang.on("click", this, this.onClick),
            // this.gui.btnFriend.on("click", this, this.onClick),
            // this.gui.btnKeFu.on("click", this, this.onClick),
            // this.gui.btnGuanZhu.on("click", this, this.onClick),
            //this.gui.howBg.on("click", this, this.onClick),
            // this.gui.tipShouCang.on("click", this, this.onClick),
            _this.gui.btnInvit2.on("mousedown", _this, _this.onClick),
            new ImgBtn().setSkin(_this.gui.btnAddTiLi2).on("mousedown", _this, _this.onImgBtn3),
            _this.gui.btnGetCoin1.on("mousedown", _this, _this.onBtnGetCoin),
            _this.gui.btnGetCoin3.on("mousedown", _this, _this.onBtnGetCoin);
        _this.btnLevel = [_this.gui.b1Speed, _this.gui.b2Fire, _this.gui.bAddSheSu2, _this.gui.bAddHuoLi2, _this.gui.bAddJiaZhi, _this.gui.bAddLiXian];
        _this.gui.coinadd.play(0, true);
        new ImgBtn().setSkin(_this.gui.p3getbtn, true, false, true).on("mousedown", _this, _this.useCoin),
            new ImgBtn().setSkin(_this.gui.b1Speed, true, true, true).on("mousedown", _this, _this.onBtnLevelUp),
            new ImgBtn().setSkin(_this.gui.b2Fire, true, true, true).on("mousedown", _this, _this.onBtnLevelUp),
            new ImgBtn().setSkin(_this.gui.bAddSheSu2, true, true, true).on("mousedown", _this, _this.onBtnLevelUp),
            new ImgBtn().setSkin(_this.gui.bAddHuoLi2, true, true, true).on("mousedown", _this, _this.onBtnLevelUp),
            new ImgBtn().setSkin(_this.gui.bAddJiaZhi, true, true, true).on("mousedown", _this, _this.onBtnLevelUp),
            new ImgBtn().setSkin(_this.gui.bAddLiXian, true, true, true).on("mousedown", _this, _this.onBtnLevelUp);
        if (CD.Language == Language.ja) {
            _this.gui.itRelife.scale(.8, .8);
            _this.gui.lock10lb.scale(1.1, 1.1);
        }
        if (CD.Language == Language.ko) {
            _this.gui.tipnewlb.scale(.9, .9);
            _this.gui.lock10lb.scale(.9, .9);
        }
        if (CD.Language == Language.ru) {
            _this.gui.itRelife.scale(.65, .65);
            _this.gui.itBoss.scale(1.2, 1.2);
            _this.gui.tipMore.scale(.9, .9);
            _this.gui.tipnewlb.scale(.7, .7);
            _this.gui.itCCoin1Lb.scale(1, 1);
            //this.gui.itCCoin2Lb.scale(1, 1);
            _this.gui.taptoplay.scale(.75, .75);
            _this.gui.it020.scale(.9, .9);
            _this.gui.it021.scale(.55, .55);
            _this.gui.it022.scale(.55, .55);
            _this.gui.lock10lb.scale(.9, .9);
            _this.gui.set112.y = 116;
            _this.gui.set122.y = 116;
            _this.gui.set212.y = 116;
            _this.gui.set222.y = 116;
            _this.gui.set312.y = 116;
            _this.gui.set322.y = 116;
            _this.gui.p2desclb.scale(.66, .66);
            _this.gui.p1tab1lb.scale(.7, .7);
            _this.gui.p1tab2lb.scale(.7, .7);
            _this.gui.p1tab3lb.scale(.7, .7);
            _this.gui.p1tab2desc.scale(.8, .8);
            _this.gui.p1tab2name.x = 50;
            _this.gui.p1tab2name.scale(.8, .8);
            _this.gui.p1tab2add.x = 560;
            _this.gui.p1tab2add.scale(.8, .8);
            _this.gui.p1tab2havelb.scale(.8, .8);
            _this.gui.p1tab3name.scale(.8, .8);
            _this.gui.p1tab3add.scale(.8, .8);
            _this.gui.p1tab3desc.scale(.8, .8);
            _this.gui.p1tab3havelb.scale(.8, .8);
        }
        if (CD.Language == Language.es) {
            _this.gui.itRelife.scale(.8, .8);
            _this.gui.tipMore.scale(1, 1);
            _this.gui.tipnewlb.scale(.7, .7);
            _this.gui.itCCoin1Lb.scale(1, 1);
            //this.gui.itCCoin2Lb.scale(1, 1);
            _this.gui.it020.scale(.9, .9);
            _this.gui.it021.scale(.7, .7);
            _this.gui.it022.scale(.7, .7);
            _this.gui.lock10lb.scale(1, 1);
            _this.gui.set312.y = 116;
            _this.gui.set322.y = 116;
            _this.gui.set113.scale(.9, .9);
            _this.gui.set123.scale(.9, .9);
            _this.gui.set213.scale(.9, .9);
            _this.gui.set223.scale(.9, .9);
            _this.gui.set313.scale(.9, .9);
            _this.gui.set323.scale(.9, .9);
            _this.gui.p1tab1lb.scale(.8, .8);
            _this.gui.p1tab2lb.scale(.8, .8);
            _this.gui.p1tab3lb.scale(.8, .8);
            _this.gui.p1tab2name.x = 50;
            _this.gui.p1tab2add.x = 560;
            _this.gui.p1tab3name.scale(.65, .65);
            _this.gui.p1tab3add.scale(.65, .65);
            _this.gui.p1tab3desc.scale(.65, .65);
            _this.gui.p1tab3havelb.scale(.65, .65);
        }
        if (CD.Language == Language.pt) {
            _this.gui.itRelife.scale(.8, .8);
            _this.gui.tipMore.scale(1, 1);
            _this.gui.tipnewlb.scale(.65, .65);
            _this.gui.itCCoin1Lb.scale(1, 1);
            //this.gui.itCCoin2Lb.scale(1, 1);
            _this.gui.it020.scale(.9, .9);
            _this.gui.it021.scale(.7, .7);
            _this.gui.it022.scale(.7, .7);
            _this.gui.lock10lb.scale(1, 1);
            _this.gui.set112.y = 116;
            _this.gui.set122.y = 116;
            _this.gui.set212.y = 116;
            _this.gui.set222.y = 116;
            _this.gui.set312.y = 116;
            _this.gui.set322.y = 116;
            _this.gui.p2desclb.scale(.7, .7);
            _this.gui.p1tab1lb.scale(.8, .8);
            _this.gui.p1tab2lb.scale(.8, .8);
            _this.gui.p1tab3lb.scale(.8, .8);
            _this.gui.p1tab2desc.scale(.9, .9);
            _this.gui.p1tab2name.x = 50;
            _this.gui.p1tab2name.scale(.9, .9);
            _this.gui.p1tab2add.x = 560;
            _this.gui.p1tab2add.scale(.9, .9);
            _this.gui.p1tab2havelb.scale(.9, .9);
            _this.gui.p1tab3name.scale(.65, .65);
            _this.gui.p1tab3add.scale(.65, .65);
            _this.gui.p1tab3desc.scale(.65, .65);
            _this.gui.p1tab3havelb.scale(.65, .65);
        }
        if (CD.Language == Language.fr) {
            _this.gui.itRelife.scale(.7, .7);
            _this.gui.tipMore.scale(1, 1);
            _this.gui.tipnewlb.scale(.6, .6);
            _this.gui.itCCoin1Lb.scale(.9, .9);
            //this.gui.itCCoin2Lb.scale(.9, .9);
            _this.gui.taptoplay.scale(.88, .88);
            _this.gui.it020.scale(.7, .7);
            _this.gui.it021.scale(.7, .7);
            _this.gui.it022.scale(.7, .7);
            _this.gui.lock10lb.scale(1, 1);
            _this.gui.set112.y = 116;
            _this.gui.set122.y = 116;
            _this.gui.set212.y = 116;
            _this.gui.set222.y = 116;
            _this.gui.set312.y = 116;
            _this.gui.set322.y = 116;
            _this.gui.p2desclb.scale(.7, .7);
            _this.gui.p1tab1lb.scale(.7, .7);
            _this.gui.p1tab2lb.scale(.7, .7);
            _this.gui.p1tab3lb.scale(.7, .7);
            _this.gui.p1tab2desc.scale(.9, .9);
            _this.gui.p1tab2name.x = 50;
            _this.gui.p1tab2name.scale(.9, .9);
            _this.gui.p1tab2add.x = 560;
            _this.gui.p1tab2add.scale(.9, .9);
            _this.gui.p1tab2havelb.scale(.9, .9);
            _this.gui.p1tab3name.scale(.7, .7);
            _this.gui.p1tab3add.scale(.7, .7);
            _this.gui.p1tab3desc.scale(.7, .7);
            _this.gui.p1tab3havelb.scale(.7, .7);
        }
        if (CD.Language == Language.de) {
            _this.gui.itRelife.scale(.5, .5);
            _this.gui.tipMore.scale(1.2, 1.2);
            _this.gui.tipnewlb.scale(.7, .7);
            _this.gui.itCCoin1Lb.scale(.9, .9);
            //this.gui.itCCoin2Lb.scale(.9, .9);
            _this.gui.taptoplay.scale(.88, .88);
            _this.gui.it020.scale(.9, .9);
            _this.gui.it021.scale(.63, .63);
            _this.gui.it022.scale(.63, .63);
            _this.gui.lock10lb.scale(1, 1);
            _this.gui.set312.y = 116;
            _this.gui.set322.y = 116;
            _this.gui.p1tab2name.x = 50;
            _this.gui.p1tab2add.x = 560;
        }
        if (CD.Language == Language.it) {
            _this.gui.itRelife.scale(.6, .6);
            _this.gui.tipMore.scale(1.1, 1.1);
            _this.gui.tipnewlb.scale(.65, .65);
            _this.gui.itCCoin1Lb.scale(1, 1);
            //this.gui.itCCoin2Lb.scale(1, 1);
            _this.gui.it020.scale(.9, .9);
            _this.gui.it021.scale(.65, .65);
            _this.gui.it022.scale(.65, .65);
            _this.gui.lock10lb.scale(1, 1);
            _this.gui.set112.y = 116;
            _this.gui.set122.y = 116;
            _this.gui.set212.y = 116;
            _this.gui.set222.y = 116;
            _this.gui.set312.y = 116;
            _this.gui.set322.y = 116;
            _this.gui.set113.scale(.85, .85);
            _this.gui.set123.scale(.85, .85);
            _this.gui.set213.scale(.85, .85);
            _this.gui.set223.scale(.85, .85);
            _this.gui.set313.scale(.85, .85);
            _this.gui.set323.scale(.85, .85);
            _this.gui.p2desclb.scale(.7, .7);
            _this.gui.p1tab1lb.scale(.7, .7);
            _this.gui.p1tab2lb.scale(.7, .7);
            _this.gui.p1tab3lb.scale(.7, .7);
            _this.gui.p1tab2desc.scale(.7, .7);
            _this.gui.p1tab2name.x = 50;
            _this.gui.p1tab2name.scale(.7, .7);
            _this.gui.p1tab2add.x = 560;
            _this.gui.p1tab2add.scale(.7, .7);
            _this.gui.p1tab2havelb.scale(.7, .7);
            _this.gui.p1tab3name.scale(.7, .7);
            _this.gui.p1tab3add.scale(.7, .7);
            _this.gui.p1tab3desc.scale(.7, .7);
            _this.gui.p1tab3havelb.scale(.7, .7);
        }
        _this.gui.tipnew.width = _this.gui.tipnewlb.displayWidth + 24;
        // this.txtTip = new TextBg(this.gui.textTip).padding(23, 23, 40, 20),
        // new RadioImg(this.gui.btnSound).addEvent("change", this,
        // 	function (t) {
        // 		MSound.ME.off(SV.ME.isSoundOff = t.isSelected),
        // 			SV.ME.dosave(false,51);
        // 	}),
        // this.gui.btnSound.ui.setSelected(SV.ME.isSoundOff),
        _this.gui.settingBtn.on("mousedown", _this, _this.ShowSettingWnd);
        // if (Main.loadingTimes == 1) {
        MSound.ME.off(SV.ME.isSoundOff);
        // }
        // else {
        // 	MSound.ME.off(true);//多次加载的用户暂停音乐播放, 防止卡死bug
        // }
        UIHelper.dohide(_this.gui.up2),
            UIHelper.dohide(_this.gui.iPass),
            UIHelper.dohide(_this.gui.reLife),
            UIHelper.dohide(_this.gui.tipBoss),
            UIHelper.dohide(_this.gui.tipMoreBg),
            UIHelper.dohide(_this.gui.tipnew),
            UIHelper.dohide(_this.gui.tipUp),
            UIHelper.dohide(_this.gui.xueliang),
            UIHelper.dohide(_this.gui.boci),
            UIHelper.dohide(_this.gui.btm),
            UIHelper.dohide(_this.gui.p1),
            UIHelper.dohide(_this.gui.p2),
            UIHelper.dohide(_this.gui.p3),
            UIHelper.dohide(_this.gui.black),
            UIHelper.dohide(_this.gui.coin),
            UIHelper.dohide(_this.gui.shopbtn),
            UIHelper.dohide(_this.gui.signbtn),
            UIHelper.dohide(_this.gui.achvbtn),
            UIHelper.dohide(_this.gui.baoxiangbtn),
            UIHelper.dohide(_this.gui.subscribeBtn),
            UIHelper.dohide(_this.gui.chargeBtn),
            UIHelper.dohide(_this.gui.endlessbtn),
            UIHelper.dohide(_this.gui.videoCoin),
            // UIHelper.dohide(this.gui.btnPaiHang),
            UIHelper.dohide(_this.gui.draw),
            // UIHelper.dohide(this.gui.vAnimTili),//ltt
            UIHelper.dohide(_this.gui.boxTiLi),
            UIHelper.dohide(_this.gui.how),
            // UIHelper.dohide(this.gui.btnGuanZhu),
            // UIHelper.dohide(this.gui.tipShouCang),
            // UIHelper.dohide(this.gui.btnFriend),
            UIHelper.dohide(_this.gui.boxDrouble);
        _this.gui.shopbtnicon.skin = CD.BanBen == BanBen.guonei ? "ui4/zuanshi.png" : "ui4/shangdian.png";
        //Laya.timer.once(1e3, UIHelper, UIHelper.dohide, [this.gui.init]),
        _this.gui.cover.visible = false,
            _this.gui.cover.alpha = 0,
            _this.gui.bVideoCoin.on("click", _this, _this.getVideoCoin),
            // this.gui.tipBossAnim.on("complete", this, this.onAnimComplete, [this.gui.tipBossAnim]),
            // this.gui.tipMoreAnim.on("complete", this, this.onAnimComplete, [this.gui.tipMoreAnim]),
            //ltt
            _this.gui.tipBossAnim.on("complete", _this, _this.onAnimComplete2, ["tipBoss"]),
            _this.gui.tipMoreAnim.on("complete", _this, _this.onAnimComplete2, ["tipMore"]),
            _this.gui.lock10.on("mousedown", _this, _this.showTipLock, [_this.fuLockLevel[0] - 1]),
            _this.WuQilist = new ScrollContent(_this.gui.WuQilist, "x"),
            _this.WuQilist.potY = 120,
            _this.WuQilist.potX = 90,
            _this.WuQilist.spacing = 6;
        // SV.ME.loginNum = 7;
        //  Laya.stage.on("resize", this, this.onResize);
        //this.stage.on(Laya.Event.FOCUS, this, this.OnFocusStage);
        //this.stage.on(Laya.Event.BLUR, this, this.onBlurStage);
        //this.stage.on(Laya.Event.VISIBILITY_CHANGE, this, this.OnVisibleStage);
        _this.initweaponList();
        _this.onResize();
        //console.log("this.centerX///" + Game.centerX + "centerY///" + Game.centerY + "scaleX///" + GameMain._Scale_X);
        _this.plane.x = _this.lastX = _this.resultX = Game.centerX;
        _this.plane.y = _this.resultY = MStage.ME.GetWinHeight() - 650 * MStage.ME.GetScaleY();
        _this.lastY = _this.resultY + 1;
        _this.plane.draw();
        _this.gui.bg.alpha = 0;
        //趣头条汇报 成功进入游戏界面/首页/大厅, 成功打开游戏
        if (CD.PingTai == PingTai.QTT_H5 && Laya.Browser.window.qttGame != null) {
            if (Laya.Browser.window.qttGame.reportData != undefined) {
                Laya.Browser.window.qttGame.reportData({ type: 'load', open_id: SV.UID, app_id: "a3UnHgKj4GqY", game_name: SV.szGameName, extend_info: { time: cFun.serverTime.getTime() } });
            }
        }
        else if (CD.Platform == Platform.AD_H5) {
            console.log("游戏开始前广告===");
            Laya.Browser.window.gameapi.showStart();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
            }, function () {
            });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.showInterstitial_wy(Game.ME, function () { }, function () { });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.GOOGLE_H5) {
        }
        Laya.timer.loop(1, _this, _this.update),
            new GuideUI(),
            new SignInWnd(),
            new RelifeTryFuWnd(),
            //new BuffDescWnd(),
            new BoxRewardWnd(),
            new ShopUI(),
            new AchievementWnd(),
            new ExchangeWnd(),
            //new SubScriptionWnd(),
            new FirstChargeWnd(),
            new ItemTipWnd(),
            //new EndlessWnd(),
            // this.onLaunch(null),
            //this.CountLxCoin(),
            _this.animCoverShow(),
            _this.gui.animlxCoin.play(0, true);
        _this.updateS(),
            // this.gui.iTitle.addChild(Logo.ME),
            // Logo.ME.pos(150, 260),
            //Server.ME.addEvent("getInvitReward", this, this.onGetInvitReward),
            // DD.ME.addEvent("onResLoad", this, this.onDDResLoad),
            // DD.ME.addEvent("onReward", this, this.onDDReward),
            // WX.ME.addEvent("onShow", this, this.onShow),
            // WX.ME.addEvent("userInfoFirst", this, this.onGetUserInfo),
            _this.Play_Music(0);
        _this.coinCountRate = new math_Rate();
        _this.gui.signIcon.skin = "icons/wu_" + Cfg.GetSignWeaponId() + ".png";
        new ShopTipWnd();
        new LoadMask();
        new GDPRTipWnd();
        //console.log("this.CheckNewDay==this.CheckNewDay:" );
        _this.CheckNewDay();
        return _this;
        // console.log("getNeedShowGDPR==:" + AdsManager.NEED_SHOW_GDPR);
    }
    Game.prototype.test = function () {
        this.tsss = this.tsss + 1;
        return this.tsss;
    };
    Game.prototype.CheckNewDay = function () {
        Cfg.CheckNewDay();
        var nowdate, nextdate;
        nowdate = new Date();
        nextdate = new Date(nowdate.getFullYear(), nowdate.getMonth(), nowdate.getDate() + 1);
        var ms = nextdate.getTime() - nowdate.getTime();
        //console.log("CheckNewDay***",ms);
        Laya.timer.once(ms, this, this.CheckNewDay);
    };
    Game.prototype.initweaponList = function () {
        this.fuIcons = [];
        var t;
        for (var s, n = 0; n < Cfg.COUNT_FU; n++) {
            t = new IconFu(),
                t.addEvent(Laya.Event.MOUSE_DOWN, this, this.onFuClickNo),
                t.addEvent(Laya.Event.MOUSE_UP, this, this.onFuClick),
                t.id = n,
                n == SV.ME.curFu ? (t.btn.setBgByName("2"),
                    t.SetSelect(true),
                    this.gui.b2.ui.setIconByName(SV.ME.curFu + 1),
                    this.plane.addShooter(SV.ME.curFu + 1, 0)) : t.SetSelect(false),
                n > 0 ? t.btn.setIconByName("" + (n + 1)) : t.btn.centerIcon(),
                this.fuIcons.push(t);
        }
        this.weaponList();
    };
    Game.prototype.weaponList = function () {
        this.WuQilist.removeAll();
        var fuShowList = [];
        var fuLockList = [];
        var t;
        var btemp;
        var s = null;
        var rewardid = Cfg.GetSignWeaponId() - 1;
        var szid = ParamOnline.ME.getArr("fwqunlockvideo", [2, 3, 4, 5, 6, 7, 8, 9, 10]);
        for (var n = 0; n < this.fuIcons.length; n++) {
            t = this.fuIcons[n],
                t.lock = t.id > this.fuLockId || (t.id == rewardid ? !Cfg.IsGetSignReward(7) : SV.ME.level < this.fuLockLevel[n]),
                !t.lock && SV.ME.szNewFwq.indexOf(t.id + 1) != -1 && szid.indexOf(t.id + 1) != -1 && t.state(true, "new"),
                t.lock ? (t.btn.setBgByName("3"), t.SetSelect(false), t.btn.icon.filters = ColorFilterPool.getGray()) : (t.btn.icon.filters = null, n == SV.ME.curFu ? (t.btn.setBgByName("2"), t.SetSelect(true)) : (t.btn.setBgByName("1"), t.SetSelect(false)));
            t.lock ? fuLockList.push(n) : fuShowList.push(n);
        }
        fuShowList = fuShowList.concat(fuLockList);
        for (var n = 0; n < fuShowList.length; n++) {
            this.WuQilist.addItem(this.fuIcons[fuShowList[n]].skin.btn);
        }
        //console.log("fulock", s.id);
        UIHelper.showHide(SV.ME.tipFU && SV.ME.level > 6, Game.ME.gui.tipFu),
            this.WuQilist.sort();
    };
    // public onDDReward(t) {
    // 	Cfg.temp.setByShortString("10000"),
    // 		this.animAddMoney(Cfg.temp, MStage.ME.cx, MStage.ME.cy, 20, "1");
    // }
    // public onGetInvitReward() {
    // 	SV.ME.tiLi += 40,
    // 		this.flyTiLi.fly(MStage.ME.cx, MStage.ME.cy, Game.ME.gui.tiliimg.x, Game.ME.gui.tiliimg.y, 10, 0, Laya.stage);
    // }
    // public onShow(t) {
    // 	this.onLaunch(t.data),
    // 		MSound.ME.resumeBGM();
    // }
    // public onLaunch(t) {
    // 	// if (this.isLaunch = true, null == t) {
    // 	// 	var i = "";// (t = WX.ME.getLaunchOption()).query && t.query.channel && (i = t.query.channel, t.query._mta_ref_id = i),
    // 	// 	"" != i ? (DD.ME.setChannel(i), Server.ME.upLoadChannel(i), Server.ME.login(i)) : Server.ME.login("def"),
    // 	// 		DD.ME.logTag("", SV.ME.isNewPlayer ? "register" : "start");
    // 	// }
    // 	// if (Game.isGameStart || SV.ME.isGuanZhu || SV.ME.level > 20 && (this.gui.btnGuanZhu.skin = "gui/guanZhu.png", UIHelper.resetPos(this.gui.btnGuanZhu), UIHelper.doshow(this.gui.btnGuanZhu)), t) {
    // 	// 	switch (t.scene) {
    // 	// 		case 1035:
    // 	// 			SV.ME.isGuanZhu || (SV.ME.isGuanZhu = true, TipRich.ME.showT("你获得了100体力").doshow(), PosTool.localToGlobal(this.gui.tiLi, this.gui.iconTiLi.x, this.gui.iconTiLi.y), SV.ME.tiLi += 90, this.flyTiLi.fly(MStage.ME.cx, MStage.ME.cy, PosTool.point.x, PosTool.point.y, 10), UIHelper.dohide(this.gui.btnGuanZhu), SV.ME.dosave(false,52));
    // 	// 			break;
    // 	// 		case 1104:
    // 	// 			SV.ME.isShouCang || (SV.ME.isShouCang = true, TipRich.ME.showT("你获得了100体力").doshow(), PosTool.localToGlobal(this.gui.tiLi, this.gui.iconTiLi.x, this.gui.iconTiLi.y), SV.ME.tiLi += 90, this.flyTiLi.fly(MStage.ME.cx, MStage.ME.cy, PosTool.point.x, PosTool.point.y, 10), SV.ME.dosave(false,53));
    // 	// 	}
    // 	// 	t.query && t.query.inviter && Server.ME.beInviter(t.query.inviter);//ltt
    // 	// }
    // }
    Game.prototype.animCoverShow = function () {
        var nopen = ParamOnline.ME.getNumber("sginin_open", 15);
        var nstart = 1;
        Buff4_ZhaoHuan.reset(),
            this.mode = 2,
            //this.checkTryFu(),
            //this.checkRelifeTryFu(),
            this.updateFuLock(),
            //UIHelper.doshow(this.gui.iTitle),
            //UIHelper.doshow(this.gui.ligth),
            //UIHelper.doshow(this.gui.coin),
            //UIHelper.doshow(this.gui.shopbtn),//HMS
            !Cfg.IsGetSignReward(7) ? (UIHelper.doshow(this.gui.signbtn), this.gui.signTip.visible = SV.ME.level > nopen && !Cfg.IsGetSignReward(SV.ME.loginNum)) : UIHelper.dohide(this.gui.signbtn),
            UIHelper.doshow(this.gui.achvbtn),
            this.CheckBaoXiangTip(),
            UIHelper.doshow(this.gui.baoxiangbtn),
            nopen = CD.Game.ItemInfo[1103].needlevel,
            //console.log("animCoverShow///////",nopen,Cfg.GetItemNum(1103).getString()),
            this.SetChargeTip(),
            UIHelper.showHide(SV.ME.level > nopen && parseInt(Cfg.GetItemNum(1103).getString()) == 0 && CD.BanBen == BanBen.guoji, this.gui.chargeBtn),
            UIHelper.showHide(CD.subScribeType == 0 && CD.BanBen == BanBen.guoji, this.gui.subscribeBtn),
            UIHelper.showHide(false, this.gui.subscribeBtn), //HMS
            nopen = ParamOnline.ME.getNumber("endlessmode_open", 15),
            //UIHelper.showHide(SV.ME.level > nopen, this.gui.endlessbtn),
            AchievementWnd.ME.clcTip([0, 1, 2, 3]),
            UIHelper.doshow(this.gui.tapplaybox),
            UIHelper.doshow(this.gui.topPanel),
            // UIHelper.doshow(this.gui.btnPaiHang),
            // UIHelper.doshow(this.gui.btnKeFu),
            //ltt
            // WX.ME.userInfo ? UIHelper.doshow(this.gui.btnFriend) : WX.ME.createLoginBtn(laya.net.URL.basePath + "other/btnFriend.png", MStage.ME.stage2Window(this.gui.btnFriend.X), MStage.ME.stage2Window(this.gui.btnFriend.Y), MStage.ME.stage2Window(166), MStage.ME.stage2Window(126), "invit"),
            UIHelper.doshow(this.gui.btm),
            this.CheckBulletTip(),
            this.checkUpdateAble(true),
            // this.gui.taptoplay.y = Game.centerY + 130,
            //this.gui.iTitle.y = -500,
            // this.gui.taptoplay.alpha = 0,
            //this.gui.ligth.y = this.gui.ligth.Y,
            //this.gui.iTitle.x = this.gui.iTitle.X,
            this.gui.xueliang.y = this.gui.xueliang.Y,
            this.gui.boci.y = this.gui.boci.Y,
            //this.gui.coin.x = MStage.ME.GetWinWidth() + 10,
            this.gui.shopbtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.signbtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.achvbtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.baoxiangbtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.subscribeBtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.chargeBtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.endlessbtn.x = MStage.ME.GetWinWidth() + 10,
            this.gui.btm.y = MStage.ME.GetWinHeight() + 400,
            this.resetUIevel(),
            this.gui.itLevel.y = this.gui.itLevel.Y,
            this.gui.itLevel.alpha = 0,
            this.gui.itLevel.scaleX = this.gui.itLevel.scaleY = 0,
            this.uiLevel.level.x = MStage.ME.GetWinWidth() / 2,
            this.uiLevel.level.y = Game.centerY - 250 * MStage.ME.GetScaleY(),
            this.ResetTipShow(), //centerY = -200,//.pos(MStage.ME.GetWinWidth() / 2, this.gui.itLevel.y),
            //this.gui.ligth.scale(0, 0, true),
            //laya.utils.Tween.to(this.gui.iTitle, {y: this.gui.iTitle.Y}, 500, laya.utils.Ease.backOut),
            //laya.utils.Tween.to(this.gui.ligth, {scaleX: 1,scaleY: 1}, 500),
            laya.utils.Tween.to(this.gui.itLevel, {
                alpha: 1,
                scaleX: 1.6,
                scaleY: 1.6
            }, 500, laya.utils.Ease.backOut, null, 500),
            this.uiLevel.animLevelShow.play(0, false),
            //ltt
            // Laya.timer.once(400, WX.ME, WX.ME.fanKui, [laya.net.URL.basePath + "other/fankui.png", MStage.ME.stage2Window(20), MStage.ME.stage2Window(this.gui.btnFanKui.y), MStage.ME.stage2Window(this.gui.btnFanKui.width), MStage.ME.stage2Window(this.gui.btnFanKui.height)]),
            laya.utils.Tween.to(this.gui.btm, {
                y: MStage.ME.GetWinHeight() - 171
            }, 500, laya.utils.Ease.backOut, Laya.Handler.create(this, this.CheckAddPowerGuide)),
            //this.CheckAddPowerGuide(),
            // this.isLaunch && !SV.ME.isGuanZhu && SV.ME.level > 20 && (UIHelper.doshow(this.gui.btnGuanZhu), this.gui.btnGuanZhu.skin = "gui/guanZhu.png", laya.utils.Tween.to(this.gui.btnGuanZhu, {
            // 	x: this.gui.btnGuanZhu.X
            // },
            // 	600, laya.utils.Ease.backOut, null, 100)),
            // laya.utils.Tween.to(this.gui.coin, {
            // 	x: MStage.ME.GetWinWidth() - 25 - 160 //this.gui.coin.X
            // },
            // 	600, laya.utils.Ease.backOut, null, 200),
            //HMS 原来
            //Laya.Tween.to(this.gui.shopbtn, { x: MStage.ME.GetWinWidth() - 13 - 154 }, 600, Laya.Ease.backOut, null, 200),
            //this.gui.achvbtn.visible && (Laya.Tween.to(this.gui.achvbtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            //this.gui.baoxiangbtn.visible && (Laya.Tween.to(this.gui.baoxiangbtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            //this.gui.signbtn.visible && (Laya.Tween.to(this.gui.signbtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            //this.gui.chargeBtn.visible && (Laya.Tween.to(this.gui.chargeBtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            //this.gui.subscribeBtn.visible && (Laya.Tween.to(this.gui.subscribeBtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            //this.gui.endlessbtn.visible && (Laya.Tween.to(this.gui.endlessbtn, { x: MStage.ME.GetWinWidth() - 196 - 20 }, 600, Laya.Ease.backOut, null, 200)),
            //HMS 新
            //Laya.Tween.to(this.gui.shopbtn, { x: MStage.ME.GetWinWidth() - 13 - 154 }, 600, Laya.Ease.backOut, null, 200),
            this.gui.achvbtn.visible && (Laya.Tween.to(this.gui.achvbtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            this.gui.baoxiangbtn.visible && (Laya.Tween.to(this.gui.baoxiangbtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            this.gui.signbtn.visible && (Laya.Tween.to(this.gui.signbtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            this.gui.chargeBtn.visible && (Laya.Tween.to(this.gui.chargeBtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            this.gui.subscribeBtn.visible && (Laya.Tween.to(this.gui.subscribeBtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, 600, Laya.Ease.backOut, null, 200), nstart++),
            this.gui.endlessbtn.visible && (Laya.Tween.to(this.gui.endlessbtn, { x: MStage.ME.GetWinWidth() - 196 - 20 }, 600, Laya.Ease.backOut, null, 200)),
            // laya.utils.Tween.to(this.gui.btnPaiHang, {
            // 	x: this.gui.btnPaiHang.X
            // },
            // 	600, laya.utils.Ease.backOut, null, 300),
            laya.utils.Tween.to(this.gui.topPanel, {
                y: 0
            }, 600, laya.utils.Ease.linearNone, null, 100),
            laya.utils.Tween.to(this.gui.tapplaybox, {
                alpha: 1
            }, 600, laya.utils.Ease.backOut, laya.utils.Handler.create(this, this.onAnimCoverShow), 1e3),
            this.t = 3.1415,
            this.startTimer(),
            this.plane.x = this.lastX = this.resultX = Game.centerX,
            this.plane.y = this.resultY = MStage.ME.GetWinHeight() - 650 * MStage.ME.GetScaleY(),
            //console.log("animCoverShow***",this.resultY),
            this.plane.broken(false),
            this.plane.draw(),
            this.plane.setShoot(true),
            Laya.timer.once(500, this.plane, this.plane.setShoot, [false]),
            laya.utils.Tween.to(this, {
                resultY: MStage.ME.GetWinHeight() - 650 * MStage.ME.GetScaleY()
            }, 1500, laya.utils.Ease.circOut, null, 0, true);
        TK.user_set({
            lv: SV.ME.level,
            goldcoin: SV.ME.money.getV1(),
            goldcoinw: SV.ME.money.getV2(),
            gold: SV.ME.gold,
            m1: SV.ME.lCount,
            m2: SV.ME.lDamage,
            f1_1: SV.ME.levelFuCount[0],
            f1_2: SV.ME.levelFuDamage[0],
            f2_1: SV.ME.levelFuCount[1],
            f2_2: SV.ME.levelFuDamage[1],
            f3_1: SV.ME.levelFuCount[2],
            f3_2: SV.ME.levelFuDamage[2],
            f4_1: SV.ME.levelFuCount[3],
            f4_2: SV.ME.levelFuDamage[3],
            f5_1: SV.ME.levelFuCount[4],
            f5_2: SV.ME.levelFuDamage[4],
            f6_1: SV.ME.levelFuCount[5],
            f6_2: SV.ME.levelFuDamage[5],
            f7_1: SV.ME.levelFuCount[6],
            f7_2: SV.ME.levelFuDamage[6],
            f8_1: SV.ME.levelFuCount[7],
            f8_2: SV.ME.levelFuDamage[7],
            g_1: SV.ME.lJiaZhi,
            g_2: SV.ME.lRiChang,
            sysset1: SV.ME.isSoundOff,
            sysset2: SV.ME.isShackOff
        });
    };
    Game.prototype.ResetTipShow = function () {
        (ShopUI.ME.dayfreemax - SV.ME.shareCount > 0) && SV.ME.level > this.shopTipLvl && AdsManager.isLoadedRewardVideo() ? this.gui.shopTip.visible = true : this.gui.shopTip.visible = false;
        ShopUI.ME.ResetTipShow();
    };
    Game.prototype.SetChargeTip = function () {
        this.gui.chargeTip.visible = (SV.ME.firstCharge > 0 && parseInt(Cfg.GetItemNum(1103).getString()) == 0) || !this.ClickCharge;
    };
    // public onGetUserInfo() {
    // 	// switch (WX.ME.loginParams) {
    // 	// 	case "invit":
    // 	// 		UIHelper.doshow(this.gui.btnFriend),
    // 	// 			this.gui.btnFriend.x = this.gui.btnFriend.X,
    // 	// 			PYaoQing.ME.doshow();
    // 	// }
    // }
    Game.prototype.CheckAddPowerGuide = function () {
        //console.log("CheckAddPowerGuide****",SV.ME.level,this.guideStep,SV.ME.isDadian(7));
        this.isCanClick = true;
        this.gui.btm.y = MStage.ME.GetWinHeight() - 171;
        if (SV.ME.level == 2 && this.guideStep == 0 && !SV.ME.isDadian(7)) {
            this.guideStep = GuideUI.GUIDE_STEP3;
        }
        else if (SV.ME.level == 3 && this.guideStep == 0 && !SV.ME.isDadian(15)) {
            this.guideStep = GuideUI.GUIDE_STEP5;
        }
        else if (SV.ME.level == 4 && this.guideStep == 0 && !SV.ME.isDadian(16)) {
            this.guideStep = GuideUI.GUIDE_STEP6;
        }
        else if (SV.ME.level == 5 && this.guideStep == 0 && !SV.ME.isDadian(17)) {
            this.guideStep = GuideUI.GUIDE_STEP7;
        }
        else if (SV.ME.level == 6 && this.guideStep == 0 && !SV.ME.isDadian(14)) {
            this.guideStep = GuideUI.GUIDE_STEP4;
        }
        this.CheckGuide();
    };
    Game.prototype.onAnimCoverShow = function () {
        //趣头条汇报 成功进入游戏界面/首页/大厅后, 页面任意位置首次点击
        if (CD.PingTai == PingTai.QTT_H5 && Laya.Browser.window.qttGame != null) {
            if (Laya.Browser.window.qttGame.reportData != undefined) {
                Laya.Browser.window.qttGame.reportData({ type: 'start', open_id: SV.UID, extend_info: { time: cFun.serverTime.getTime() } });
            }
        }
        //console.log("onAnimCoverShow", this.isFirstOpen);
        if (this.isFirstOpen) {
            this.isFirstOpen = false;
        }
        else {
            this.isWin && (SV.ME.dosave(false, 54));
        }
        !SV.ME.isShouCang && SV.ME.level > 5 && this.isWin, // && (this.gui.tipShouCang.skin = "gui/tipShouCang.png", console.log("onAnimCoverShow2", this.isFirstOpen), UIHelper.doshow(this.gui.tipShouCang), this.gui.tipShouCang.x = (MStage.ME.ww - 80) / MStage.ME.ww * 1080, this.gui.tipShouCang.y = 55 / MStage.ME.wh * 1920 * (MStage.ME.h / 1920)),
            this.gui.tipStart.play(),
            this.plane.skin.tipBox.visible = SV.ME.level < 6,
            //console.log("onAnimCoverShow", SV.ME.curFu),
            (SV.ME.curFu == 4 || SV.ME.curFu == 10) ? this.plane.wp.setVisible(true) : "",
            Laya.stage.on("mousedown", this, this.onCoverClick),
            this.gui.jinbibox.on(Laya.Event.MOUSE_DOWN, this, this.ShowExchangeWnd, [0]),
            this.gui.tilibox.on(Laya.Event.MOUSE_DOWN, this, this.ShowExchangeWnd, [1]),
            this.gui.zuanbox.on(Laya.Event.MOUSE_DOWN, this, this.ShowExchangeWnd, [2]),
            laya.utils.Tween.to(this.layerAll, {
                scaleX: 1.3,
                scaleY: 1.3,
                x: -MStage.ME.GetWinWidth() * 0.3 / 2,
                y: -MStage.ME.GetWinHeight() * 0.3 / 2
            }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, this.CheckGuide));
        // if (SV.ME.doDadian(0)) {
        // 	this.onCoverClick();
        // }
        Game.isShowBullet = true;
        Cfg.setDamageRate(0, 0, 1);
        this.plane.setShoot(true);
        //console.log("isDadian=="+SV.ME.isDadian(0));
        if (!SV.ME.isDadian(0) && SV.ME.level == 1) {
            SV.ME.doDadian(0);
            this.StartPlay(0);
        }
        else {
            //HMS
            // this.CheckSubScription();
            // if (CD.BanBen == BanBen.guoji && AdsManager.getNeedShowGDPR()) {
            // 	if (GDPRTipWnd.ME.isShowd == false) {
            // 		GDPRTipWnd.ME.doshow();
            // 	}
            // }
        }
        // var nlvl = ParamOnline.ME.getNumber("insertads_login", 100);
        // if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1 && nlvl > 0 && SV.ME.level >= nlvl) {
        // 	var stime = ParamOnline.ME.getdata("loginads_time");
        // 	var dnow = new Date();
        // 	var dlast;
        // 	var nmark = 0;
        // 	if (stime == undefined || stime == "") {
        // 		nmark = 1;
        // 	} else {
        // 		dlast = new Date(stime);
        // 		if (dnow.getFullYear() > dlast.getFullYear() || dnow.getMonth() > dlast.getMonth() || dnow.getDate() > dlast.getDate()) {
        // 			nmark = 1;
        // 		}
        // 	}
        // 	if (nmark == 1) {
        // 		this.CheckInsertAds("loginAds");
        // 		stime = CM.Get_Convert_Date(dnow);
        // 		ParamOnline.ME.setdata("loginads_time", stime);
        // 	}
        // }
    };
    Game.prototype.CheckGuide = function () {
        if (this.guideStep != 0 && !GuideUI.ME.isGuide) {
            var costval;
            if (this.guideStep == GuideUI.GUIDE_STEP4) {
                //判断副武器升级消耗
                if (Cfg.fDamageCost.bigger(SV.ME.money)) {
                    costval = Cfg.fDamageCost.clone().minus(SV.ME.money);
                    this._animAddMoney(costval, "Guide");
                    this.checkUpdateAble(true);
                }
            }
            else if (this.guideStep == GuideUI.GUIDE_STEP3 || this.guideStep == GuideUI.GUIDE_STEP5) {
                //判断主武器射速消耗
                if (Cfg.bCountCost.bigger(SV.ME.money)) {
                    costval = Cfg.bCountCost.clone().minus(SV.ME.money);
                    this._animAddMoney(costval, "Guide");
                    this.checkUpdateAble(true);
                }
            }
            else if (this.guideStep == GuideUI.GUIDE_STEP6 || this.guideStep == GuideUI.GUIDE_STEP7) {
                //判断主武器火力消耗
                if (Cfg.bDamageCost.bigger(SV.ME.money)) {
                    costval = Cfg.bDamageCost.clone().minus(SV.ME.money);
                    this._animAddMoney(costval, "Guide");
                    this.checkUpdateAble(true);
                }
            }
            GuideUI.ME.ShowGuideByStep(this.guideStep);
        }
    };
    // public onAnimComplete(t) {
    // 	switch (t.currentTarget) {
    // 		case this.gui.tipBossAnim:
    // 			UIHelper.dohide(this.gui.tipBoss);
    // 			break;
    // 		case this.gui.tipMoreAnim:
    // 			UIHelper.dohide(this.gui.tipMore);
    // 	}
    // }
    Game.prototype.onAnimComplete2 = function (t) {
        switch (t) {
            case "tipBoss":
                UIHelper.dohide(this.gui.tipBoss);
                break;
            case "tipMore":
                UIHelper.dohide(this.gui.tipMoreBg);
                break;
            case "tipnew":
                UIHelper.dohide(this.gui.tipnew);
                break;
        }
    };
    Game.prototype.onCoverClick = function (t) {
        //console.log("onCoverClick--", t.target, this.guideStep);
        if (true) { //ltt1  !Guide.ME.visible
            if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100) {
                console.log("oncoverclick***videoid***" + this.isVideo);
                return;
            }
            if (this.gui.boxTiLi.visible) {
                UIHelper.dohide(this.gui.black),
                    UIHelper.dohide(this.gui.boxTiLi);
                return;
            }
            if (SettingWnd.ME.gui.visible) {
                return;
            }
            if (ScoreWnd.ME.gui.visible) {
                return;
            }
            if (AchievementWnd.ME.gui.visible) {
                return;
            }
            if (!UIHelper.checkParents(t.target, [this.gui.boxTiLi,
                this.gui.boxDrouble,
                this.gui.tilibox,
                this.gui.jinbibox,
                this.gui.zuanbox,
                this.gui.settingBtn,
                this.gui.btm,
                this.gui.bVideoCoin,
                this.gui.how,
                GuideUI.ME.gui,
                GuideUI.ME.uibg,
                SignInWnd.ME.gui,
                BoxRewardWnd.ME.gui,
                ShopUI.ME.gui,
                ShopTipWnd.ME.gui,
                //SubScriptionWnd.ME.gui,
                //UpWeaponWnd.ME.gui,
                //GoldIncomeWnd.ME.gui,
                ExchangeWnd.ME.gui,
                AchievementWnd.ME.gui,
                LoadMask.ME.gui,
                FirstChargeWnd.ME.gui,
                ItemTipWnd.ME.gui,
                GDPRTipWnd.ME.gui
                //EndlessWnd.ME.gui
            ]))
                if (this.gui.boxDrouble.visible)
                    this.shBoxDouble(false);
                // else if (this.bFavOpen) this.openFav(false);
                //else if (UIHelper.checkParent(t.target, this.gui.coin)) this.useCoin();
                else if (UIHelper.checkParent(t.target, this.gui.shopbtn))
                    this.ShowExchangeWnd(2, false);
                else if (UIHelper.checkParent(t.target, this.gui.signbtn))
                    SignInWnd.ME.doshow();
                else if (UIHelper.checkParent(t.target, this.gui.achvbtn))
                    AchievementWnd.ME.doshow(1);
                else if (UIHelper.checkParent(t.target, this.gui.baoxiangbtn))
                    BoxRewardWnd.ME.doshow();
                //else if (UIHelper.checkParent(t.target, this.gui.subscribeBtn)) SubScriptionWnd.ME.doshow(0);
                else if (UIHelper.checkParent(t.target, this.gui.chargeBtn))
                    (FirstChargeWnd.ME.doshow(), this.ClickCharge = true, this.SetChargeTip());
                //else if (UIHelper.checkParent(t.target, this.gui.endlessbtn)) EndlessWnd.ME.doshow();
                else if (true) { //PaiHang.ME.visible || !(PYaoQing.ME.skin && PYaoQing.ME.skin.visible)
                    if (this.gui.p1.visible || this.gui.p2.visible || this.gui.p3.visible)
                        return this.hideAllP(),
                            UIHelper.doshow(this.gui.tapplaybox),
                            laya.utils.Tween.to(this, {
                                resultY: MStage.ME.GetWinHeight() - 650 * MStage.ME.GetScaleY()
                            }, 400, laya.utils.Ease.circOut, null, 0, true),
                            void this.showVideoCoin(true);
                    if (SV.ME.tiLi < 5)
                        return this.gui.itTili.text = Lan.G(1003, [SV.ME.tiLi]),
                            void (SV.ME.tiLi < 30 ? (UIHelper.doshow(this.gui.btnAddTiLi2), UIHelper.dohide(this.gui.btnInvit2), UIHelper.doshow(this.gui.black), this.gui.black.alpha = 0, laya.utils.Tween.to(this.gui.black, {
                                alpha: .6
                            }, 1e3),
                                UIHelper.doshow(this.gui.boxTiLi)) : (UIHelper.dohide(this.gui.btnAddTiLi2), UIHelper.doshow(this.gui.btnInvit2), UIHelper.doshow(this.gui.black), this.gui.black.alpha = 0, laya.utils.Tween.to(this.gui.black, {
                                alpha: .6
                            }, 1e3),
                                UIHelper.doshow(this.gui.boxTiLi)));
                    //Laya.stage.off("mousedown", this, this.onCoverClick),
                    this.StartPlay(0);
                    // this.gui.vAnimTili.ani2.play(0, false), //ltt
                }
        }
    };
    //开始副本进这里
    Game.prototype.StartPlay = function (m) {
        console.log("StartPlay*******", this.nStartState);
        if (m == 1) {
            var nmax = ParamOnline.ME.getNumber("endlessmode_time", 3) + parseInt(Cfg.GetItemNum(1006).getString()) - SV.ME.EndlessTime;
            if (nmax <= 0)
                return;
            SV.ME.dosave(false, 68);
            SV.ME.modeClear();
            this.gui.nowLv.text = Lan.G(1015, [SV.ME.level]);
            this.gui.bocilb.text = Lan.G(6010, [SV.ME.level]);
        }
        this.playMode = m;
        MSound.ME.countPlay = 0;
        this.nStartState = 1,
            Game.isShowBullet = false,
            this.mode = 2,
            Laya.stage.off("mousedown", this, this.onCoverClick),
            this.isCanClick = false,
            this.gui.jinbibox.off(Laya.Event.MOUSE_DOWN, this, this.ShowExchangeWnd),
            this.gui.tilibox.off(Laya.Event.MOUSE_DOWN, this, this.ShowExchangeWnd),
            this.gui.zuanbox.off(Laya.Event.MOUSE_DOWN, this, this.ShowExchangeWnd),
            UIHelper.doshow(this.gui.vAnimTili),
            // this.gui.vAnimTili.pos(Plane.ME.x, Plane.ME.y, true),
            Laya.timer.once(1500, UIHelper, UIHelper.dohide, [this.gui.vAnimTili]),
            // UIHelper.dohide(this.gui.tipShouCang),
            // WX.ME.killFanKui(),
            SV.ME.tiLi -= 5,
            SV.ME.tiLi >= 75 && (SV.ME.tiLiBackTime = TimeTool.getNowSecond()),
            this.gui.tililb.text = "" + SV.ME.tiLi,
            this.ResetTiliBar(),
            this.hideTip("up"),
            this.setCtrlEnable(true),
            this.onMouseDown(null),
            this.showVideoCoin(false),
            this.hideAllP(),
            this.gui.tipStart.stop(),
            UIHelper.dohide(this.gui.tapplaybox),
            ItemTipWnd.ME.dohide(),
            //laya.utils.Tween.to(this.gui.iTitle, {y: -this.gui.iTitle.height}, 600, laya.utils.Ease.backIn),
            laya.utils.Tween.to(this.gui.btm, {
                y: MStage.ME.GetWinHeight() + 400
            }, 600, function () {
            }),
            // SV.ME.isGuanZhu || laya.utils.Tween.to(this.gui.btnGuanZhu, {
            // 	x: MStage.ME.w + 300
            // },
            // 	600, laya.utils.Ease.backIn, null, 100),
            // laya.utils.Tween.to(this.gui.coin, {
            // 	x: MStage.ME.GetWinWidth() + 10
            // },
            // 	600, laya.utils.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.shopbtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.subscribeBtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.chargeBtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.signbtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.achvbtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.baoxiangbtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            Laya.Tween.to(this.gui.endlessbtn, { x: MStage.ME.GetWinWidth() + 10 }, 600, Laya.Ease.backIn, null, 200),
            // laya.utils.Tween.to(this.gui.btnPaiHang, {
            // 	x: -300
            // },
            // 	600, laya.utils.Ease.backIn, null, 300),
            laya.utils.Tween.to(this.gui.topPanel, {
                y: -300
            }, 600, laya.utils.Ease.linearNone, null, 100),
            this.stopTimer(),
            //console.log("startplay***",SV.ME.curFu),
            (SV.ME.curFu == 4 || SV.ME.curFu == 10) ? this.plane.wp.setVisible(false) : "",
            this.animGameShow(),
            this.coinCountRate.setData([0, 1, 2, 3], [SV.ME.lDamage / SV.ME.level * 100, SV.ME.lDamage / SV.ME.level * 100, SV.ME.level / SV.ME.lDamage * 100, SV.ME.level / SV.ME.lDamage * 100 + 50 * this.lostCount]);
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            AdsManager.OnShowZMAd("j0tn25oam6", Game.ME, function () {
                //console.log("横幅广告展示成功===");
            }, function () {
                //console.log("横幅广告展示失败===");
            });
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
            HaGoManager.ME.OnShowBannerAd();
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.GOOGLE_H5) {
            AdsManager.OnShowGooldAd_Inter('next');
        }
        else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
            AdsManager.showBanner_wy();
        }
        if (this.playMode == 0) {
            SV.ME.jsInsertAdsNum++;
            SV.ME.boxLevel = 0;
            //console.log("SV.ME.relifetryfunum***",SV.ME.relifetryfunum,ParamOnline.ME.getNumber("relife_tryfunum", 5))
            var nnum = ParamOnline.ME.getNumber("relife_tryfunum", 5) + parseInt(Cfg.GetItemNum(1002).getString()) - SV.ME.relifetryfunum;
            this.relifeLimitNum = 1;
            if (CD.subScribeType > 0 && CD.BanBen == BanBen.guoji)
                this.relifeLimitNum += 1;
            if (SV.ME.curFu > -1 && ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1 && 100 * Math.random() < ParamOnline.ME.getNumber("relife_tryfu", 100) && (nnum > 0 || this.showTryFu))
                this.relifeLimitNum += 1;
            //TK.track("StartGame", { Level: SV.ME.level });
        }
        else {
            this.relifeLimitNum = 2;
        }
    };
    //大界面飞金币,防止金币增加出现异常
    Game.prototype.animAddMoney_BackGround = function (t, x, y, tx, ty, a, _reason) {
        this._animAddMoney(t, _reason),
            this.flyMoney.fly(x, y, tx, ty, a, 0, Laya.stage);
    };
    //这种增加金币的方式在连击的情况下会出现金币丢失
    Game.prototype.animAddMoney = function (t, s, n, a, _reason) {
        var point = this.gui.goldimg.localToGlobal(new Laya.Point(0, 0));
        this._val.copy(t),
            this.flyMoney.fly(s, n, point.x, point.y, a, 0, Laya.stage),
            Laya.timer.once(800, this, this._animAddMoney, [this._val, _reason]);
    };
    Game.prototype._animAddMoney = function (t, _reason) {
        //this.itMoney.setText(SV.ME.money.plus(t).getShortString()),
        this.gui.goldlb.text = SV.ME.money.plus(t).getShortString(),
            SV.ME.moneyall.plus(t),
            AchievementWnd.ME.addAch(4, 1, t);
        // if (Game.isGameStart == false) {//在游戏外加金币 计算成就tip
        // 	AchievementWnd.ME.clcTip([1]);//只影响金币
        // }
        SV.ME.dosave(false, 55);
        Laya.timer.once(200, this, this.checkUpdateAble, [true]);
        this.CheckInsertAds(_reason);
        //TK.track("money", { "lv": SV.ME.level, "goldcoin": t.getV1(), "goldcoinw": t.getV2(), "reason": _reason });
    };
    Game.prototype.addMoney = function () {
        this.coinScale = 1.8,
            this.coinScale2 = 1.2,
            Game.isGameStart && (
            //战斗中加金币
            this.levelMoney.plus(Cfg.bJiaZhi),
                //this.itMoney2.setText(this.levelMoney.getShortString())
                Cfg.nButtleType == 3 ? (this.levelRateMoney.copy(this.levelMoney).present100(Cfg.nButtleRate),
                    this.gui.itMoney2.text = this.levelMoney.getShortString() + " + " + this.levelRateMoney.getShortString(),
                    this.gui.bocicoin.text = this.levelMoney.getShortString() + " + " + this.levelRateMoney.getShortString()) : (this.gui.itMoney2.text = this.levelMoney.getShortString(),
                    this.gui.bocicoin.text = this.levelMoney.getShortString())),
            Game.time > this.lastCT && (this.lastCT = Game.time + .1, MSound.ME.playSoundLimit("w_money"));
    };
    Game.prototype.animAddGold_BackGround = function (t, x, y, tx, ty, a, _reason) {
        this._animAddGold(t, _reason),
            this.flyGold.fly(x, y, tx, ty, a, 0, Laya.stage);
    };
    //   this.animAddGold(5, Laya.stage.mouseX, Laya.stage.mouseY, 5)
    Game.prototype.animAddGold = function (t, s, n, a, _reason) {
        var point = this.gui.zuanimg.localToGlobal(new Laya.Point(0, 0));
        this.flyGold.fly(s, n, point.x, point.y, a, 0, Laya.stage),
            Laya.timer.once(800, this, this._animAddGold, [t, _reason]);
    };
    Game.prototype._animAddGold = function (t, _reason) {
        SV.ME.gold += t,
            this.updateZuan(),
            // this.updatePlusBtnX(),
            SV.ME.dosave(false, 56);
        //TK.track("gold", { "lv": SV.ME.level, "gold": SV.ME.gold, "reason": _reason });
    };
    Game.prototype.addGold = function () {
        this.zuanScale = 1.8,
            //SV.ME.gold += 1,
            //this.updateZuan(),
            Game.time > this.lastCT && (this.lastCT = Game.time + .1, MSound.ME.playSoundLimit("zuan"));
        //SV.ME.dosave(false,57);
    };
    Game.prototype.updateZuan = function () {
        // this.itZuan.setText("" + SV.ME.gold);
        this.gui.zuanlb.text = SV.ME.gold.toString();
    };
    Game.prototype.checkTiLiAd = function () {
        // this.gui.buytili.tag = null,
        // 	SV.ME.tiLi < 30 && (this.gui.btnAddTiLi.tag = Cfg.shareOrVideo(), UIHelper.showHide("none" != this.gui.btnAddTiLi.tag, this.gui.btnAddTiLi)),
        // 	//this.gui.btnAddTiLi.visible ? this.gui.tipTiLi.play(0) : this.gui.tipTiLi.stop(),
        // 	this.gui.btnAddTiLi.tag && (
        // 		this.gui.icAddTiLi.skin = "ui1/jia.png",
        // 		this.gui.icAddTiLi2.skin = "ui/shipin.png"
        // 	);
    };
    Game.prototype.addTili = function () {
        // switch (this.gui.btnAddTiLi.tag) {
        // 	case "share":
        // 		SV.ME.shareCount++;
        // 		break;
        // 	case "video":
        // 		SV.ME.videoCount++;
        // }
        var point = this.gui.tiliimg.localToGlobal(new Laya.Point(0, 0));
        SV.ME.videoCount++,
            UIHelper.dohide(this.gui.black),
            UIHelper.doshow(this.gui.btnAddTiLi2),
            UIHelper.dohide(this.gui.boxTiLi),
            SV.ME.tiLi += 20,
            this.flyTiLi.fly(MStage.ME.cx, MStage.ME.cy, point.x, point.y, 10, 0, Laya.stage),
            AchievementWnd.ME.addAch(2, 1, 1),
            AchievementWnd.ME.clcTip([3]),
            SV.ME.dosave(false, 58);
        //TK.track("tili", { "lv": SV.ME.level, "nowtili": SV.ME.tiLi });
    };
    Game.prototype.animAddTili = function (n, x, y, t, s) {
        SV.ME.tiLi += n;
        var point = this.gui.tiliimg.localToGlobal(new Laya.Point(0, 0));
        this.flyTiLi.fly(x, y, point.x, point.y, t, 0, Laya.stage);
        SV.ME.dosave(false, 59);
    };
    Game.prototype._addTili = function () {
        this.tiliScale = 1.8,
            //SV.ME.tiLi += 1,
            this.gui.tililb.text = "" + SV.ME.tiLi,
            this.ResetTiliBar(),
            Game.time > this.lastCT && (this.lastCT = Game.time + .1, MSound.ME.playSoundLimit("w_adtl"));
    };
    Game.prototype.ResetTiliBar = function () {
        var nval = SV.ME.tiLi / 80.0;
        nval < 1 ? this.gui.tilibar.width = nval * 172.0 : this.gui.tilibar.width = 172;
    };
    Game.prototype.onBtnLevelUp = function (t) {
        switch (t.skin) {
            case this.gui.b1Speed:
                if (this.guideStep == GuideUI.GUIDE_STEP3 || this.guideStep == GuideUI.GUIDE_STEP5) {
                    GuideUI.ME.OnGuideCom(this.guideStep);
                    this.guideStep = 0;
                }
                if (SV.ME.lCount >= Cfg.lCountMax)
                    return;
                if (Cfg.bCountCost.bigger(SV.ME.money)) {
                    if (SV.ME.level > this.shopTipLvl) {
                        this.ShowExchangeWnd(0);
                    }
                    return;
                }
                Cfg.upLevelCount(e);
                break;
            case this.gui.b2Fire:
                if (this.guideStep == GuideUI.GUIDE_STEP6 || this.guideStep == GuideUI.GUIDE_STEP7) {
                    GuideUI.ME.OnGuideCom(this.guideStep);
                    this.guideStep = 0;
                }
                if (SV.ME.lDamage >= Cfg.lDamageMax)
                    return;
                if (Cfg.bDamageCost.bigger(SV.ME.money)) {
                    if (SV.ME.level > Game.ME.shopTipLvl) {
                        Game.ME.ShowExchangeWnd(0);
                    }
                    return;
                }
                Cfg.upLevelDamage(e);
                break;
            case this.gui.bAddSheSu2:
                if (SV.ME.levelFuCount[SV.ME.curFu] >= Cfg.lCount2Max[SV.ME.curFu])
                    return;
                if (Cfg.fNumCost.bigger(SV.ME.money)) {
                    if (SV.ME.level > Game.ME.shopTipLvl) {
                        Game.ME.ShowExchangeWnd(0);
                    }
                    return;
                }
                Cfg.upLevelCount2(e, SV.ME.curFu);
                break;
            case this.gui.bAddHuoLi2:
                if (this.guideStep == GuideUI.GUIDE_STEP4) {
                    GuideUI.ME.OnGuideCom(this.guideStep);
                    this.guideStep = 0;
                }
                if (SV.ME.levelFuDamage[SV.ME.curFu] >= Cfg.lDamage2Max[SV.ME.curFu])
                    return;
                if (t.limited)
                    return void TipRich.ME.showTIT(Lan.G(1017), "ui/btnicon_1.png", "", "center", 1080).doshow();
                if (Cfg.fDamageCost.bigger(SV.ME.money)) {
                    if (SV.ME.level > Game.ME.shopTipLvl) {
                        Game.ME.ShowExchangeWnd(0);
                    }
                    return;
                }
                Cfg.upLevelDamage2(e, SV.ME.curFu);
                this.fuUpCount++;
                break;
            case this.gui.bAddJiaZhi:
                if (SV.ME.lJiaZhi >= Cfg.lJiaZhiMax)
                    return;
                if (Cfg.bJiaZhiCost.bigger(SV.ME.money)) {
                    if (SV.ME.level > Game.ME.shopTipLvl) {
                        Game.ME.ShowExchangeWnd(0);
                    }
                    return;
                }
                Cfg.upLevelJiaZhi(e);
                break;
            case this.gui.bAddLiXian:
                if (SV.ME.lRiChang >= Cfg.lLiXianMax)
                    return;
                if (Cfg.bRiChangCost.bigger(SV.ME.money)) {
                    if (SV.ME.level > Game.ME.shopTipLvl) {
                        Game.ME.ShowExchangeWnd(0);
                    }
                    return;
                }
                Cfg.upLevelRiChang(e);
                break;
            default:
                return;
        }
        t.tag = null;
        t.icon.skin = "ui/jinbi.png";
        MSound.ME.playSoundLimit("w_shengji");
        Plane.ME.upFx();
        this.updateP1();
        this.updateP2(SV.ME.curFu);
        this.updateP3();
        !this.gui.up1.visible || this.gui.b1Speed.ui.enable || this.gui.b2Fire.ui.enable || UIHelper.dohide(this.gui.up1),
            !this.gui.up2.visible || this.gui.bAddSheSu2.ui.enable || (this.gui.bAddHuoLi2.ui.enable && !this.gui.bAddHuoLi2.ui.limited) || UIHelper.dohide(this.gui.up2),
            !this.gui.up3.visible || this.gui.bAddJiaZhi.ui.enable || this.gui.bAddLiXian.ui.enable || UIHelper.dohide(this.gui.up3),
            this.gui.goldlb.text = SV.ME.money.getShortString();
        //this.itMoney.setText(SV.ME.money.getShortString());
    };
    Game.prototype.updateP1 = function () {
        //speed
        this.gui.set111.text = "Lv." + SV.ME.lCount + "";
        this.gui.set112.text = ("+" + (Cfg.bCount * 2.55).toFixed(1));
        //fire
        this.gui.set121.text = "Lv." + SV.ME.lDamage + "";
        this.gui.set122.text = ("+" + Cfg.bDamageBase.getShortString());
        var t = this.gui.b1Speed.ui;
        t.enable = !Cfg.bCountCost.bigger(SV.ME.money) && SV.ME.lCount < Cfg.lCountMax,
            t.enable ? t.tag = null : t.tag && (t.enable = true),
            SV.ME.lCount >= Cfg.lCountMax ? (this.gui.set113.text = Lan.G(1028), t.max = true) : t.tag || (this.gui.set113.text = Cfg.bCountCost.getShortString()),
            t.setBgByName(t.enable ? t.tag ? "3" : "1" : "3"),
            (t = this.gui.b2Fire.ui).enable = !Cfg.bDamageCost.bigger(SV.ME.money) && SV.ME.lDamage < Cfg.lDamageMax,
            t.enable ? t.tag = null : t.tag && (t.enable = true),
            SV.ME.lDamage >= Cfg.lDamageMax ? (this.gui.set123.text = Lan.G(1028), t.max = true) : t.tag || (this.gui.set123.text = Cfg.bDamageCost.getShortString()),
            t.setBgByName(t.enable ? t.tag ? "3" : "1" : "3");
    };
    Game.prototype.updateP2 = function (t) {
        var e, i;
        if (-1 != Cfg.tryFu) {
            e = Cfg.levelFuCountTry, i = Cfg.levelFuDamageTry;
        }
        else {
            (e = SV.ME.levelFuCount, i = SV.ME.levelFuDamage);
            if (t > -1) {
                this.gui.set211.text = "Lv." + e[t] + "";
                this.gui.set221.text = "Lv." + i[t] + "";
            }
        }
        switch (t) {
            case -1:
                this.gui.bAddSheSu2.ui.enable = false;
                this.gui.bAddHuoLi2.enable = false;
                return;
            case 1:
            case 5:
            case 7:
            case 8:
            case 10:
                this.gui.fuText1.text = Lan.G(1032); //范围
                this.gui.p2skill1.skin = "ui/skill_range.png";
                this.gui.set212.text = "+" + (Cfg.fNum1 * 2.55).toFixed(1);
                break;
            case 0:
                this.gui.fuText1.text = Lan.G(1033); //频率
                //  this.itSheSu2.setText("" + StringTool.getNumber());
                this.gui.p2skill1.skin = "ui/skill_pinlv.png";
                var dNumber = 1 / Cfg.fNum1 * 2.55;
                //console.log("1=" + Cfg.fNum1 + "    2=" + dNumber);
                // var dNString = dNumber.toString();
                // if (dNString.indexOf(".") > 0) {
                // 	dNString = dNString.substring(0, 3);
                // }
                this.gui.set212.text = "+" + dNumber.toFixed(2);
                break;
            case 6:
                this.gui.fuText1.text = Lan.G(1033); //频率
                this.gui.p2skill1.skin = "ui/skill_pinlv.png";
                var dNumber = (12 / Cfg.fNum2) * 2.55;
                this.gui.set212.text = "+" + dNumber.toFixed(2);
                break;
            case 2:
            case 3:
                this.gui.fuText1.text = Lan.G(1034); //强度
                this.gui.p2skill1.skin = "ui/skill_qiangdu.png";
                this.gui.set212.text = "+" + (Cfg.fNum1 * 2.55).toFixed(1);
                break;
            case 4:
                this.gui.fuText1.text = Lan.G(1029); //射速
                this.gui.p2skill1.skin = "ui/skill_speed.png";
                this.gui.set212.text = "+" + (Cfg.fNum1 * 2.55).toFixed(1);
                break;
            case 9:
                this.gui.fuText1.text = Lan.G(1029); //射速
                this.gui.p2skill1.skin = "ui/skill_speed.png";
                this.gui.set212.text = "+" + (Cfg.fNum1 * 2.55).toFixed(1);
                break;
        }
        // this.gui.itl21.x = this.gui.fuText1.x + this.gui.fuText1.ui.width * this.gui.fuText1.scaleX;
        this.gui.set222.text = "+" + Cfg.fDamage.getShortString();
        var s = this.gui.bAddSheSu2.ui;
        s.enable = !Cfg.fNumCost.bigger(SV.ME.money) && e[t] < Cfg.lCount2Max[t],
            s.enable ? s.tag = null : s.tag && (s.enable = true),
            e[t] >= Cfg.lCount2Max[t] ? (this.gui.set213.text = Lan.G(1028), s.max = true) : s.tag || (this.gui.set213.text = Cfg.fNumCost.getShortString()),
            s.setBgByName(s.enable ? s.tag ? "3" : "1" : "3"),
            (s = this.gui.bAddHuoLi2.ui).enable = !Cfg.fDamageCost.bigger(SV.ME.money) && i[t] < Cfg.lDamage2Max[t],
            s.limited = i[t] >= SV.ME.lDamage,
            s.enable ? s.tag = null : s.tag && (s.enable = true),
            i[t] >= Cfg.lDamage2Max[t] ? (this.gui.set223.text = Lan.G(1028), s.max = true) : s.tag || (this.gui.set223.text = (s.limited ? Lan.G(1036) : Cfg.fDamageCost.getShortString())),
            s.setBgByName(s.enable ? s.tag ? "3" : "1" : "3");
    };
    Game.prototype.updateP3 = function () {
        //jiazhi
        this.gui.set311.text = "Lv." + SV.ME.lJiaZhi + "";
        this.gui.set312.text = "+" + Cfg.bJiaZhi.getString();
        //lixian
        this.gui.set321.text = "Lv." + SV.ME.lRiChang + "";
        this.gui.set322.text = "+" + Cfg.bRiChang.getString();
        var t = this.gui.bAddJiaZhi.ui;
        t.enable = !Cfg.bJiaZhiCost.bigger(SV.ME.money) && SV.ME.lJiaZhi < Cfg.lJiaZhiMax,
            t.enable ? t.tag = null : t.tag && (t.enable = true),
            SV.ME.lJiaZhi >= Cfg.lJiaZhiMax ? (this.gui.set313.text = Lan.G(1028), t.max = true) : t.tag || (this.gui.set313.text = Cfg.bJiaZhiCost.getShortString()),
            t.setBgByName(t.enable ? t.tag ? "3" : "1" : "3"),
            (t = this.gui.bAddLiXian.ui).enable = !Cfg.bRiChangCost.bigger(SV.ME.money) && SV.ME.lRiChang < Cfg.lLiXianMax,
            t.enable ? t.tag = null : t.tag && (t.enable = true),
            SV.ME.lRiChang >= Cfg.lLiXianMax ? (this.gui.set323.text = Lan.G(1028), t.max = true) : t.tag || (this.gui.set323.text = Cfg.bRiChangCost.getShortString()),
            t.setBgByName(t.enable ? t.tag ? "3" : "1" : "3");
    };
    Game.prototype.hideAllP = function () {
        UIHelper.dohide(this.gui.p1),
            UIHelper.dohide(this.gui.p2),
            UIHelper.dohide(this.gui.p3),
            this.gui.b1.ui.setBgByName("1"),
            this.gui.b2.ui.setBgByName("1"),
            this.gui.b3.ui.setBgByName("1");
        var nnum = ParamOnline.ME.getNumber("insertads_fwq", 10);
        var nlv = ParamOnline.ME.getNumber("insertads_fwqlv", 7);
        //console.log("hideAllP*****"+nnum+"*****"+this.fuUpCount);
        if (SV.ME.level > nlv && nnum > 0 && this.fuUpCount >= nnum) {
            this.CheckInsertAds("fuUpAds");
        }
        nnum = parseInt(Cfg.GetItemNum(SV.ME.useButtleId + 1100).getString());
        //console.log("hideAllP*****" + nnum + "*****" + this.nSlcOpenButtle);
        if (nnum <= 0) {
            SV.ME.useButtleId = this.nSlcOpenButtle;
            Cfg.setDamageRate(0, 0, 1);
        }
        nnum = parseInt(Cfg.GetItemNum(SV.ME.useWingId).getString());
        if (nnum <= 0) {
            SV.ME.useWingId = this.nSlcOpenWing;
            this.plane.SetWing();
        }
        this.fuUpCount = 0;
        // UpWeaponWnd.ME.dohide();
    };
    Game.prototype.ChangeTab = function (p, s) {
        switch (p) {
            case 1:
                this.gui.p1tab1img.skin = "ui4/an1.png";
                this.gui.p1tab2img.skin = "ui4/an2.png";
                this.gui.p1tab3img.skin = "ui4/an3.png";
                switch (s) {
                    case 1:
                        this.gui.p1tab1img.skin = "ui4/an11.png";
                        this.gui.p1tab1.visible = true;
                        this.gui.p1tab2.visible = false;
                        this.gui.p1tab3.visible = false;
                        break;
                    case 2:
                        this.gui.p1tab2img.skin = "ui4/an21.png";
                        this.gui.p1tab2.visible = true;
                        this.gui.p1tab1.visible = false;
                        this.gui.p1tab3.visible = false;
                        this.isOpenBullet = true;
                        this.gui.p1tab2tip.visible = !this.isOpenBullet;
                        if (SV.ME.useButtleId != 0) {
                            var nnum = parseInt(Cfg.GetItemNum(SV.ME.useButtleId + 1100).getString());
                            if (nnum > 0)
                                this.nSlcOpenButtle = SV.ME.useButtleId;
                        }
                        this.SetBulletTab(SV.ME.useButtleId);
                        break;
                    case 3:
                        this.gui.p1tab3img.skin = "ui4/an31.png";
                        this.gui.p1tab3.visible = true;
                        this.gui.p1tab2.visible = false;
                        this.gui.p1tab1.visible = false;
                        this.isOpenWing = true;
                        this.gui.p1tab3tip.visible = !this.isOpenWing;
                        if (SV.ME.useWingId > 1200) {
                            var nnum = parseInt(Cfg.GetItemNum(SV.ME.useWingId).getString());
                            if (nnum > 0)
                                this.nSlcOpenWing = SV.ME.useWingId;
                        }
                        this.SetWingTab(SV.ME.useWingId);
                        break;
                }
                break;
        }
    };
    Game.prototype.SetWingTab = function (index) {
        var arr = [];
        var i, num, nlock, nslc, nmark = 0;
        var itemid;
        var szdata = CD.Game.WingInfo;
        var data;
        var szmoney;
        for (i = 0; i < szdata.length; i++) {
            itemid = szdata[i];
            data = CD.Game.ItemInfo[itemid];
            num = parseInt(Cfg.GetItemNum(itemid).getString());
            if (CD.BanBen == BanBen.guonei)
                num == 0 && data.cn_needmoney == "" && (num = 1);
            else
                num == 0 && data.needmoney == "" && (num = 1);
            nlock = num > 0 ? 0 : 1;
            if (itemid == index) {
                nslc = 1;
                if (SV.ME.useWingId != itemid)
                    nmark = 1;
                SV.ME.useWingId = itemid;
                if (itemid == this.nTipWing)
                    this.nSlcWing = itemid;
                szmoney = data.adddata.split(",");
                this.gui.p1tab3name.text = Lan.G(data.addname);
                this.gui.p1tab3desc.text = "";
                // if (szmoney.length > 1 && parseInt(szmoney[1]) > 0)
                // 	this.gui.p1tab3add.text = "+" + szmoney[1] + "%";
                // else
                this.gui.p1tab3add.text = "";
                if ((CD.BanBen == BanBen.guoji && data.needmoney == "") || (CD.BanBen == BanBen.guonei && data.cn_needmoney == "") || nlock == 0) {
                    this.gui.p1tab3buy.visible = false;
                    this.gui.p1tab3havelb.text = Lan.G(1088);
                    this.nSlcOpenWing = itemid;
                }
                else if (SV.ME.level <= data.needlevel) {
                    this.gui.p1tab3buy.visible = false;
                    if (CD.BanBen == BanBen.guonei) {
                        this.gui.p1tab3desc.text = Lan.G(1086, [data.needlevel]);
                    }
                    else {
                        if (data.needmoney == "subcribe")
                            this.gui.p1tab3desc.text = Lan.G(1089, [data.needlevel]);
                        else
                            this.gui.p1tab3desc.text = Lan.G(1086, [data.needlevel]);
                    }
                    this.gui.p1tab3add.text = "";
                    this.gui.p1tab3name.text = "";
                    this.gui.p1tab3havelb.text = "";
                }
                else {
                    this.gui.p1tab3havelb.text = "";
                    this.gui.p1tab3buy.visible = true;
                    if (CD.BanBen == BanBen.guonei) {
                        szmoney = data.cn_needmoney.split(",");
                        this.gui.p1tab3buyicon.visible = true;
                        this.gui.p1tab3buyicon.skin = szmoney[0] == "3" ? "ui3/zs.png" : "ui/jinbi.png";
                        this.gui.p1tab3buylb.text = szmoney[1];
                        this.gui.p1tab3buylb.centerX = 32;
                    }
                    else {
                        if (data.needmoney == "subcribe") {
                            this.gui.p1tab3buyicon.visible = false;
                            this.gui.p1tab3buylb.text = Lan.G(8003);
                            this.gui.p1tab3buylb.centerX = 0;
                        }
                        else {
                            szmoney = data.needmoney.split(",");
                            this.gui.p1tab3buyicon.visible = true;
                            this.gui.p1tab3buyicon.skin = szmoney[0] == "3" ? "ui3/zs.png" : "ui/jinbi.png";
                            this.gui.p1tab3buylb.text = szmoney[1];
                            this.gui.p1tab3buylb.centerX = 32;
                        }
                    }
                }
                nmark == 1 && this.plane.SetWing();
            }
            else {
                nslc = 0;
            }
            arr.push({ id: itemid, icon: data.icon, lock: nlock, check: nslc, level: data.needlevel });
        }
        this.gui.p1tab3list.array = arr;
    };
    Game.prototype.UpdateWingList = function (cell, idx) {
        var img1, img2;
        var data = cell.dataSource;
        img1 = cell.getChildByName("iconbg");
        img2 = cell.getChildByName("iconslc");
        img1.skin = data.lock == 1 ? "ui/fuwuqikuang_3.png" : data.check == 1 ? "ui/fuwuqikuang_2.png" : "ui/fuwuqikuang_1.png";
        img2.visible = data.check == 1;
        img1 = cell.getChildByName("icon");
        img1.skin = data.icon;
        var copyImg = new Laya.Image(data.icon);
        if (copyImg.width > 152)
            img1.size(152, 152 / copyImg.width * copyImg.height);
        else if (copyImg.height > 152)
            img1.size(152 / copyImg.height * copyImg.width, 152);
        else
            img1.size(copyImg.width, copyImg.height);
        copyImg.destroy();
        img1 = cell.getChildByName("tipnew");
        if (this.nTipWing == data.id && this.nSlcWing != data.id) {
            img1.visible = true;
        }
        else {
            img1.visible = false;
        }
        cell.on(Laya.Event.CLICK, this, this.SetWingTab, [data.id]);
    };
    Game.prototype.BuyWing = function () {
        var num, itemid;
        var data;
        var szmoney;
        itemid = SV.ME.useWingId;
        num = parseInt(Cfg.GetItemNum(itemid).getString());
        if (num > 0)
            return;
        data = CD.Game.ItemInfo[itemid];
        if ((CD.BanBen == BanBen.guoji && data.needmoney == "") || (CD.BanBen == BanBen.guonei && data.cn_needmoney == ""))
            return;
        if (CD.BanBen == BanBen.guonei)
            szmoney = data.cn_needmoney.split(",");
        else
            szmoney = data.cn_needmoney.split(",");
        // if (szmoney[0] == "subcribe") {
        // 	SubScriptionWnd.ME.doshow(1);
        // 	return;
        // }
        num = parseInt(szmoney[1]);
        //console.log(SV.ME.gold+"==num===="+num);
        if (szmoney[0] == "3" && SV.ME.gold < num) {
            Game.ME.ShowExchangeWnd(2, false);
            return;
        }
        if (Cfg.CutDiamond(num, "BuyWing") == 1) {
            Cfg.AddItem(itemid, new math_BigUInt().one(), "BuyWing");
            this.SetWingTab(SV.ME.useWingId);
            this.ResetFuncBtnPos();
            //this.SetChargeTip();
            var point = this.gui.b1.localToGlobal(new Laya.Point(0, 0));
            ItemTipWnd.ME.showwing(data.icon, Lan.G(1094), point.x + 181.5, point.y + 77);
            TK.track("wing", { "Level": SV.ME.level, "BId": itemid });
        }
    };
    Game.prototype.BuyBullet = function () {
        var num, itemid;
        var data;
        var szmoney;
        itemid = SV.ME.useButtleId + 1100;
        num = parseInt(Cfg.GetItemNum(itemid).getString());
        if (num > 0)
            return;
        data = CD.Game.ItemInfo[itemid];
        if (data.needmoney == "")
            return;
        szmoney = data.needmoney.split(",");
        num = parseInt(szmoney[1]);
        if (szmoney[0] == "3" && SV.ME.gold < num) {
            Game.ME.ShowExchangeWnd(2, false);
            return;
        }
        if (szmoney[0] == "charge") {
            CD.BanBen == BanBen.guoji && FirstChargeWnd.ME.doshow();
            return;
        }
        if (Cfg.CutDiamond(num, "BuyBullet") == 1) {
            Cfg.AddItem(itemid, new math_BigUInt().one(), "BuyBullet");
            this.SetBulletTab(SV.ME.useButtleId);
            //TipRich.ME.showT(Lan.G(1087));
            UIHelper.dohide(this.gui.chargeBtn);
            this.ResetFuncBtnPos();
            //this.SetChargeTip();
            var point = this.gui.b1.localToGlobal(new Laya.Point(0, 0));
            ItemTipWnd.ME.doshow(data.icon, true, point.x + 181.5, point.y + 77);
            TK.track("bullet", { "Level": SV.ME.level, "BId": itemid });
        }
    };
    Game.prototype.SetBulletTab = function (index) {
        var arr = [];
        var i, num, nlock, nidx, nslc;
        var itemid;
        var szdata = CD.Game.BulletInfo;
        var data;
        var szmoney;
        for (i = 0; i < szdata.length; i++) {
            itemid = szdata[i];
            data = CD.Game.ItemInfo[itemid];
            //console.log(data);
            num = parseInt(Cfg.GetItemNum(itemid).getString());
            //console.log(num+"====="+itemid);
            num == 0 && data.needmoney == "" && (num = 1);
            nlock = num > 0 ? 0 : 1;
            nidx = itemid - 1100;
            //console.log(nidx+"====index="+index);
            if (nidx == index) {
                nslc = 1;
                SV.ME.useButtleId = nidx;
                if (itemid == this.nTipButtle)
                    this.nSlcButtle = nidx;
                szmoney = data.adddata.split(",");
                this.gui.p1tab2name.text = Lan.G(data.addname);
                this.gui.p1tab2desc.text = "";
                if (szmoney.length > 1 && szmoney[0] != "4" && parseInt(szmoney[1]) > 0)
                    this.gui.p1tab2add.text = "+" + szmoney[1] + "%";
                else
                    this.gui.p1tab2add.text = "";
                if (data.needmoney == "" || nlock == 0) {
                    this.gui.p1tab2buy.visible = false;
                    this.gui.p1tab2havelb.text = Lan.G(1088);
                    this.nSlcOpenButtle = nidx;
                }
                else if (SV.ME.level <= data.needlevel) {
                    this.gui.p1tab2buy.visible = false;
                    if (data.needmoney == "charge")
                        this.gui.p1tab2desc.text = Lan.G(1089, [data.needlevel]);
                    else
                        this.gui.p1tab2desc.text = Lan.G(1086, [data.needlevel]);
                    this.gui.p1tab2add.text = "";
                    this.gui.p1tab2name.text = "";
                    this.gui.p1tab2havelb.text = "";
                }
                else {
                    this.gui.p1tab2havelb.text = "";
                    this.gui.p1tab2buy.visible = true;
                    if (data.needmoney == "charge") {
                        this.gui.p1tab2buyicon.visible = false;
                        this.gui.p1tab2buylb.text = Lan.G(8003);
                        this.gui.p1tab2buylb.centerX = 0;
                    }
                    else {
                        szmoney = data.needmoney.split(",");
                        this.gui.p1tab2buyicon.visible = true;
                        this.gui.p1tab2buyicon.skin = szmoney[0] == "3" ? "ui3/zs.png" : "ui/jinbi.png";
                        this.gui.p1tab2buylb.text = szmoney[1];
                        this.gui.p1tab2buylb.centerX = 32;
                    }
                }
                Cfg.setDamageRate(0, 0, 1);
            }
            else {
                nslc = 0;
            }
            arr.push({ idx: nidx, id: itemid, icon: data.icon, lock: nlock, check: nslc, level: data.needlevel });
        }
        //console.log("this.gui.p1tab2list====");
        //console.log(arr);
        this.gui.p1tab2list.array = arr;
    };
    Game.prototype.UpdateBulletList = function (cell, idx) {
        var img1, img2;
        var data = cell.dataSource;
        img1 = cell.getChildByName("iconbg");
        img2 = cell.getChildByName("iconslc");
        img1.skin = data.lock == 1 ? "ui/fuwuqikuang_3.png" : data.check == 1 ? "ui/fuwuqikuang_2.png" : "ui/fuwuqikuang_1.png";
        img2.visible = data.check == 1;
        img1 = cell.getChildByName("icon");
        img1.skin = data.icon;
        img1 = cell.getChildByName("tipnew");
        if (this.nTipButtle == data.id && this.nSlcButtle != data.idx) {
            img1.visible = true;
        }
        else {
            img1.visible = false;
        }
        cell.on(Laya.Event.CLICK, this, this.SetBulletTab, [data.idx]);
    };
    Game.prototype.onBtnBtm = function (t) {
        //console.log("onBtnBtm***");
        if (this.nStartState != 0)
            return;
        switch (this.hideAllP(), UIHelper.dohide(this.gui.tapplaybox), this.showVideoCoin(false), laya.utils.Tween.to(this, {
            resultY: Game.centerY + 60
        }, 400, Laya.Ease.linearNone, null, 0, true), t.skin) {
            case this.gui.b1:
                //console.log("onBtnBtm***clickbutton1**"),
                this.gui.b1.ui.setBgByName("2"),
                    UIHelper.doshow(this.gui.p1),
                    this.gui.p1tab2tip.visible = !this.isOpenBullet,
                    this.gui.p1tab3tip.visible = !this.isOpenWing,
                    this.ChangeTab(1, 1),
                    //console.log("onBtnBtm***clickbutton1**"),
                    this.gui.p1.alpha = 0,
                    this.gui.p1.y = this.gui.p1.Y + 10,
                    laya.utils.Tween.to(this.gui.p1, { y: this.gui.p1.Y, alpha: 1 }, 300, Laya.Ease.linearNone, Laya.Handler.create(this, this.CheckGuideStep3), 0, true),
                    UIHelper.dohide(this.gui.up1),
                    this.updateP1();
                break;
            case this.gui.b2:
                this.weaponList(),
                    SV.ME.tipFU && (SV.ME.tipFU = false, SV.ME.dosave(false, 60), UIHelper.dohide(this.gui.tipFu)),
                    UIHelper.dohide(this.gui.tipTry),
                    this.gui.b2.ui.setBgByName("2"),
                    UIHelper.doshow(this.gui.p2),
                    this.gui.p2.alpha = 0,
                    this.gui.p2.y = this.gui.p2.Y + 10,
                    laya.utils.Tween.to(this.gui.p2, {
                        y: this.gui.p2.Y,
                        alpha: 1
                    }, 300, Laya.Ease.linearNone, Laya.Handler.create(this, this.CheckGuideStep4), 0, true),
                    UIHelper.dohide(this.gui.up2),
                    this.updateP2(SV.ME.curFu);
                break;
            case this.gui.b3:
                this.gui.b3.ui.setBgByName("2"),
                    UIHelper.doshow(this.gui.p3),
                    this.gui.p3.alpha = 0,
                    this.gui.p3.y = this.gui.p3.Y + 10,
                    laya.utils.Tween.to(this.gui.p3, {
                        y: this.gui.p3.Y,
                        alpha: 1
                    }, 300),
                    UIHelper.dohide(this.gui.up3),
                    this.updateP3();
        }
        MSound.ME.playSoundLimit("w_dianji");
        // if (this.nStartState != 0) return;
        // if (!this.isCanClick) return;
        // var bb = true;
        // switch (this.showVideoCoin(false), t.skin) {
        // 	case this.gui.b1:
        // 		this.ShowExchangeWnd(2);
        // 		bb = false;
        // 		break;
        // 	case this.gui.b2:
        // 		//console.log("btnbtmb2****"+UpWeaponWnd.ME.tipFu+"****"+SV.ME.tipFU);
        // 		SV.ME.tipFU = false;
        // 		UIHelper.dohide(this.gui.tipFu);
        // 		UpWeaponWnd.ME.doshow();
        // 		break;
        // 	case this.gui.b3:
        // 		AchievementWnd.ME.doshow(1);
        // 		bb = false;
        // 		break;
        // }
        // if (bb)
        // 	this.HideFuncBtn();
        // MSound.ME.playSoundLimit("w_dianji");
    };
    Game.prototype.checkUpdateAble = function (t) {
        if (t === void 0) { t = false; }
        if (this.gui.btm.visible) {
            for (s = this.btnLevel.length; s--;) {
                e = this.btnLevel[s].ui;
                e.tag = null,
                    e.icon.skin = "ui/jinbi.png";
            }
            if (t && (this.updateP1(), this.updateP2(SV.ME.curFu), this.updateP3()), this.isLost) {
                var e;
                var i = "none";
                var s = 0;
                for (s = this.btnLevel.length; s--;)
                    if (this.btnLevel[s].ui.enable) {
                        i = "";
                        break;
                    }
                //ltt
                // i = Cfg.shareOrVideo();
                // console.log("ssdssss",i);
                // if ("none" == i && "none" != i) {
                // 	for (this.btnLevel = ArrayTool.RandomOrder(this.btnLevel), s = this.btnLevel.length; s--;) if (!(e = this.btnLevel[s].ui).enable && !e.max) {
                // 		if (!this.gui.b2.visible && (e.skin == this.gui.bAddSheSu2 || e.skin == this.gui.bAddHuoLi2)) continue;
                // 		e.tag = i,
                // 			e.setBgByName("3"),
                // 			e.setText(Lan.G(1018)),
                // 			e.enable = true,
                // 			e.icon.skin = "ui/shipin.png";
                // 		break;
                // 	}
                // }
            }
            //console.log("up1showorhide***"+this.gui.b1Speed.ui.enable+"***"+this.gui.b2Fire.ui.enable),
            UIHelper.showHide(this.gui.b1Speed.ui.enable || this.gui.b2Fire.ui.enable, this.gui.up1),
                //console.log("showhide",this.gui.b2.visible,this.gui.bAddSheSu2.ui.enable,this.gui.bAddHuoLi2.ui.enable,!this.gui.bAddHuoLi2.ui.limited),
                //UIHelper.showHide(this.gui.b2.visible && (this.gui.bAddSheSu2.ui.enable || this.gui.bAddHuoLi2.ui.enable) && !this.gui.bAddHuoLi2.ui.limited, this.gui.up2),
                //console.log("up2showorhide***"+this.gui.b2.visible+"***"+this.gui.bAddSheSu2.ui.enable+"***"+this.gui.bAddHuoLi2.ui.enable+"***"+this.gui.bAddHuoLi2.ui.limited),
                UIHelper.showHide(this.gui.b2.visible && (this.gui.bAddSheSu2.ui.enable || (this.gui.bAddHuoLi2.ui.enable && !this.gui.bAddHuoLi2.ui.limited)), this.gui.up2),
                //console.log("up3showorhide***"+this.gui.bAddJiaZhi.ui.enable+"***"+this.gui.bAddLiXian.ui.enable+"***"+SV.ME.level),
                UIHelper.showHide((this.gui.bAddJiaZhi.ui.enable || this.gui.bAddLiXian.ui.enable) && SV.ME.level > 6, this.gui.up3),
                this.gui.up1.skin = null != this.gui.b1Speed.ui.tag || null != this.gui.b2Fire.ui.tag ? "ui/arrUp.png" : "ui/arrUp.png",
                this.gui.up2.skin = null != this.gui.bAddSheSu2.ui.tag || null != this.gui.bAddHuoLi2.ui.tag ? "ui/arrUp.png" : "ui/arrUp.png",
                this.gui.up3.skin = null != this.gui.bAddJiaZhi.ui.tag || null != this.gui.bAddLiXian.ui.tag ? "ui/arrUp.png" : "ui/arrUp.png",
                this.gui.up1.visible || this.gui.b2.visible || this.gui.up3.visible ? this.showTip("up") : this.hideTip("up");
        }
        // if (this.gui.btm.visible) {
        // 	t && (UpWeaponWnd.ME.checkUpdateAble(), GoldIncomeWnd.ME.UpdateGoldIncome());
        // }
    };
    Game.prototype.updateFuLock = function () {
        var t;
        var rewardid = Cfg.GetSignWeaponId() - 1;
        for (var e, i = 0; i < this.fuIcons.length; i++)
            t = this.fuIcons[i],
                (i == rewardid ? Cfg.IsGetSignReward(7) : SV.ME.level >= this.fuLockLevel[i]) && t.id <= this.fuLockId && t.lock && (t.lock = false, e = t),
                t.tag && (t.lock = false),
                t.lock ? (t.btn.setBgByName("3"), t.SetSelect(false), t.btn.icon.filters = ColorFilterPool.getGray()) : (t.btn.icon.filters = null, i == SV.ME.curFu ? (t.btn.setBgByName("2"), t.SetSelect(true)) : (t.btn.setBgByName("1"), t.SetSelect(false)));
        e && (e.state(true, "new"), SV.ME.tipFU = true, this.SetNewFu(e.id + 1, true), UIHelper.showHide(SV.ME.tipFU && SV.ME.level > 6, Game.ME.gui.tipFu)),
            UIHelper.showHide(SV.ME.level < this.fuLockLevel[0], this.gui.lock10),
            UIHelper.showHide(!this.gui.lock10.visible, this.gui.b2),
            this.gui.b2.visible && -1 == SV.ME.curFu && this.onFuClick(this.fuIcons[0], true);
    };
    Game.prototype.OnFreeFu = function () {
        this.reLife();
        this.curFu = SV.ME.curFu;
        var t = this.fuIcons[this.curFu];
        t.tag = "free";
        this.onFuClick(t, true);
        //UpWeaponWnd.ME.OnFreeFu();
        // RelifeTryFuWnd.ME.dohide();//HMS
        var nnum = ParamOnline.ME.getNumber("relife_tryfunum", 5);
        if (SV.ME.relifetryfunum < nnum)
            SV.ME.relifetryfunum += 1;
        else
            Cfg.CutItem(1002, new math_BigUInt().one(), "relifetryfu");
    };
    Game.prototype.freeFu = function (t) {
        switch (t.tag) {
            case "share":
                //SV.ME.shareCount++;
                break;
            case "video":
                SV.ME.videoCount++;
                break;
        }
        t.tag = "free",
            this.onFuClick(t, true);
        //UpWeaponWnd.ME.onFuClick(t, true);
    };
    Game.prototype.clearFuTag = function () {
        Cfg.resetTry();
        for (var t, e = 0, i = this.fuIcons.length; e < i; e++)
            (t = this.fuIcons[e]).tag && (t.tag = null, t.state(false, "try")),
                t.id == SV.ME.curFu && this.onFuClick(t, true);
        this.updateFuLock();
        // Cfg.resetTry();
        // UpWeaponWnd.ME.ClearFuTag();
    };
    Game.prototype.onFreeFuVideoBack = function (t) {
        this.freeFu(t.params);
    };
    Game.prototype.onFuClick = function (t, isScroll) {
        if (isScroll === void 0) { isScroll = false; }
        // console.log("onfuclick***", this.scrollFuX, isScroll);
        if (isScroll || (PosTool._localToGlobal(t.btn.skin.parent, t.btn.skin.x, t.btn.skin.y), !(Math.abs(this.scrollFuX - PosTool._point.x) > 2))) {
            switch (t.tag) {
                case "share":
                // return this.shareIcon = t,
                // 	void this.freeFuShare(null);
                case "video":
                    // if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                    // 	if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                    // 		if (this.isVideo > 0) return;
                    // 		//this.playVideoLoadingEff(this.gui.tiliload1, this.gui.tililoadeff1, this.gui.tililoadlb1, this.gui.btnAddTiLi);
                    // 		//拉起视频广告
                    // 		AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                    // 		AdsManager.showRewardVideoAds(true, "tryfu");
                    // 		this.isVideo = 6;
                    // 		return;
                    // 	}
                    // }
                    // this.OnFreeFu();
                    return;
                // return WX.ME.showVideoAd(),
                // 	void WX.ME.addEvent("videoSuccess", this, this.onFreeFuVideoBack, true, t).addEvent("videoFail", this, this.onVideoFail, true);
            }
            if (t.lock) {
                var rewardid = Cfg.GetSignWeaponId() - 1;
                if (t.id == rewardid && !Cfg.IsGetSignReward(7)) {
                    TipRich.ME.showTTT(Lan.G(1042), "", "", "#ffffff", "#43fed9").doshow();
                }
                else if (t.id != rewardid && SV.ME.level < this.fuLockLevel[t.id]) {
                    this.showTipLock(this.fuLockLevel[t.id] - 1);
                }
                else {
                    TipRich.ME.showTTT(Lan.G(1041), "", "", "#ffffff", "#43fed9").doshow();
                }
            }
            else {
                this.nSlcWid = t.id + 1;
                var szid = ParamOnline.ME.getArr("fwqunlockvideo", [2, 3, 4, 5, 6, 7, 8, 9]);
                if (SV.ME.szNewFwq.indexOf(this.nSlcWid) != -1 && szid.indexOf(this.nSlcWid) != -1 && ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                    //拉起视频广告
                    if (CD.Platform == Platform.MGC_H5) {
                        console.log("点击拉起微信激励视频==fwqunlock");
                        MgcM.OnShowRewardVideo("fwqunlock");
                        return;
                    }
                    else if (CD.Platform == Platform.H5) {
                        if (CD.PingTai == PingTai.QTT_H5) {
                            console.log("点击拉起微信激励视频==fwqunlock");
                            Qtt_H5_Manager.ME.OnShowRewardVideo("fwqunlock");
                            return;
                        }
                        else if (CD.PingTai == PingTai.ZM_H5) {
                            AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("fwqunlock", "ads");
                            }, function () {
                                Game.ME.SlcSideWeapon();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.WY_H5) {
                            AdsManager.showRewardedVideo_wy(Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("fwqunlock", "ads");
                            }, function () {
                                Game.ME.SlcSideWeapon();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.HAGO_H5) {
                            HaGoManager.ME.OnShowRewardVideo("fwqunlock", Game.ME, function () {
                                Game.ME.SlcSideWeapon();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.GOOGLE_H5) {
                            AdsManager.OnShowGooleAd("fwqunlock", BoxRewardWnd.ME, function () {
                                Game.ME.OnGetAdsOverReward("fwqunlock", "ads");
                            }, function () {
                                Game.ME.SlcSideWeapon();
                            });
                            return;
                        }
                    }
                    else if (CD.Platform == Platform.AD_H5) {
                        //奖励广告
                        Game.ME.rewardAd_H5("fwqunlock");
                        return;
                    }
                    else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                        if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                            return;
                        Game.ME.ShowLoadMask(true);
                        //拉起视频广告
                        AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                        AdsManager.showRewardVideoAds(true, "fwqunlock");
                        Game.ME.isVideo = 10;
                        return;
                    }
                }
                this.SlcSideWeapon();
            }
        }
    };
    Game.prototype.SlcSideWeapon = function () {
        var t = null;
        for (var e, i = 0; i < this.fuIcons.length; i++) {
            e = this.fuIcons[i];
            if (e.id == this.nSlcWid - 1)
                t = e;
            e.lock || (e.btn.setBgByName("1"), e.SetSelect(false));
        }
        if (t == null)
            return;
        for (var e, i = 0, s = this.fuIcons.length; i < s; i++)
            (e = this.fuIcons[i]).lock || e.btn.setBgByName("1");
        t.btn.setBgByName("2"),
            t.SetSelect(true),
            t.state(false, "try"),
            t.state(false, "new"),
            this.SetNewFu(t.id + 1, false),
            -1 != SV.ME.curFu && SV.ME.curFu != t.id && this.plane.removeShooter(SV.ME.curFu + 1),
            t.tag ? (Cfg.tryFu = t.id,
                SV.ME.curFu = t.id,
                Cfg.levelFuCountTry[Cfg.tryFu] = Cfg.lCount2Max[Cfg.tryFu],
                Cfg.levelFuDamageTry[Cfg.tryFu] = Cfg.lDamage2Max[Cfg.tryFu],
                Cfg.updateFu(t.id),
                this.plane.wp.updateData(),
                this.updateP2(t.id),
                this.gui.bAddSheSu2.ui.setBgByName("3"),
                this.gui.bAddHuoLi2.ui.setBgByName("3"),
                this.gui.bAddSheSu2.ui.enable = false,
                this.gui.bAddHuoLi2.ui.enable = false,
                this.gui.bAddSheSu2.ui.tag = null,
                this.gui.bAddHuoLi2.ui.tag = null,
                SV.ME.tryFuCount++,
                this.curFu = 0,
                SV.ME.dosave(false, 61)) : (-1 != Cfg.tryFu && Cfg.tryFu != t.id && this.plane.removeShooter(Cfg.tryFu + 1),
                Cfg.tryFu = -1,
                SV.ME.curFu = t.id,
                SV.ME.dosave(false, 62),
                Cfg.updateFu(t.id),
                this.updateP2(t.id),
                TK.user_set({ noww: SV.ME.curFu + 1 })),
            this.plane.addShooter(t.id + 1),
            this.gui.b2.ui.setIconByName(t.id + 1);
    };
    Game.prototype.onClick = function (t) {
        switch (MSound.ME.playSoundLimit("w_click"), t.currentTarget) {
            // case this.gui.btnPaiHang:
            // 	//ltt test
            // 	this.uiLevel.animLevel.play(0, false);
            // 	SV.ME.level++ ,
            // 		SV.ME.level = Math.min(999, SV.ME.level);
            // 	// PaiHang.ME.showFriend();
            // 	break;
            // case this.gui.btnKeFu:
            // 	// WX.ME.kefu(HaiBao.ME.getShareUrl());
            // 	break;
            // case this.gui.btnFriend:
            // 	PYaoQing.ME.doshow();
            // 	break;
            // case this.gui.btnGuanZhu:
            // 	this.gui.howBg.alpha = 0,
            // 		laya.utils.Tween.to(this.gui.howBg, {
            // 			alpha: .6
            // 		},
            // 			600),
            // 		UIHelper.doshow(this.gui.how),
            // 		this.gui.howImg.skin = "gui/howGuanZhu.png";
            // 	break;
            case this.gui.howBg:
                UIHelper.dohide(this.gui.how);
                break;
            // case this.gui.tipShouCang:
            // 	UIHelper.dohide(this.gui.tipShouCang),
            // 		this.gui.howBg.alpha = 0,
            // 		laya.utils.Tween.to(this.gui.howBg, {
            // 			alpha: .6
            // 		},
            // 			600),
            // 		UIHelper.doshow(this.gui.how),
            // 		this.gui.howImg.skin = "gui/howShouCang.png";
            // 	break;
        }
    };
    Game.prototype.onImgBtn3 = function (t) {
        //console.log("onImgBtn3***",t);
        switch (t.skin) {
            case this.gui.buytili:
                if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                    //拉起视频广告
                    if (CD.Platform == Platform.MGC_H5) {
                        console.log("点击拉起微信激励视频==addtili");
                        MgcM.OnShowRewardVideo("addtili");
                        return;
                    }
                    else if (CD.Platform == Platform.H5) {
                        if (CD.PingTai == PingTai.QTT_H5) {
                            console.log("点击拉起微信激励视频==addtili");
                            Qtt_H5_Manager.ME.OnShowRewardVideo("addtili");
                            return;
                        }
                        else if (CD.PingTai == PingTai.ZM_H5) {
                            AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("addtili", "ads");
                            }, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.WY_H5) {
                            AdsManager.showRewardedVideo_wy(Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("addtili", "ads");
                            }, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.HAGO_H5) {
                            HaGoManager.ME.OnShowRewardVideo("addtili", Game.ME, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.GOOGLE_H5) {
                            AdsManager.OnShowGooleAd("addtili", BoxRewardWnd.ME, function () {
                                Game.ME.OnGetAdsOverReward("addtili", "ads");
                            }, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                    }
                    else if (CD.Platform == Platform.AD_H5) {
                        //奖励广告
                        Game.ME.rewardAd_H5("addtili");
                        return;
                    }
                    else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                        if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                            return;
                        //this.playVideoLoadingEff(this.gui.tiliload1, this.gui.tililoadeff1, this.gui.tililoadlb1, this.gui.buytili);
                        //拉起视频广告
                        AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                        AdsManager.showRewardVideoAds(true, "addtili");
                        this.isVideo = 1;
                        return;
                    }
                }
                this.addTili();
                break;
            case this.gui.btnAddTiLi2:
                // switch (MSound.ME.playSoundLimit("w_click"), this.gui.btnAddTiLi.tag) {
                // 	case "share":
                // 		this.addTiLiShare(null);
                // 		break;
                // 	case "video":
                // 		WX.ME.showVideoAd(),
                // 			WX.ME.addEvent("videoSuccess", this, this.addTili, true).addEvent("videoFail", this, this.onVideoFail, true);
                // }
                if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                    //拉起视频广告
                    if (CD.Platform == Platform.MGC_H5) {
                        console.log("点击拉起微信激励视频==addtili");
                        MgcM.OnShowRewardVideo("addtili");
                        return;
                    }
                    else if (CD.Platform == Platform.H5) {
                        if (CD.PingTai == PingTai.QTT_H5) {
                            console.log("点击拉起微信激励视频==addtili");
                            Qtt_H5_Manager.ME.OnShowRewardVideo("addtili");
                            return;
                        }
                        else if (CD.PingTai == PingTai.ZM_H5) {
                            AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("addtili", "ads");
                            }, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.WY_H5) {
                            AdsManager.showRewardedVideo_wy(Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("addtili", "ads");
                            }, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.HAGO_H5) {
                            HaGoManager.ME.OnShowRewardVideo("addtili", Game.ME, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.GOOGLE_H5) {
                            AdsManager.OnShowGooleAd("addtili", BoxRewardWnd.ME, function () {
                                Game.ME.OnGetAdsOverReward("addtili", "ads");
                            }, function () {
                                Game.ME.addTili();
                            });
                            return;
                        }
                    }
                    else if (CD.Platform == Platform.AD_H5) {
                        //奖励广告
                        Game.ME.rewardAd_H5("addtili");
                        return;
                    }
                    else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                        if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                            return;
                        this.playVideoLoadingEff(this.gui.tiliload2, this.gui.tililoadeff2, this.gui.tililoadlb2, this.gui.btnAddTiLi2);
                        //拉起视频广告
                        AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                        AdsManager.showRewardVideoAds(true, "addtili");
                        this.isVideo = 2;
                        return;
                    }
                }
                this.addTili();
                break;
        }
    };
    Game.prototype.showTip = function (t) {
        switch (t) {
            case "more":
                UIHelper.doshow(this.gui.tipMoreBg),
                    this.gui.tipMoreAnim.play(0, false);
                break;
            case "boss":
                UIHelper.doshow(this.gui.tipBoss),
                    this.gui.tipBossAnim.play(0, false),
                    MSound.ME.playSoundLimit("w_boss");
                break;
            case "up":
                if (this.gui.tipUp.visible)
                    return;
                UIHelper.doshow(this.gui.tipUp),
                    this.gui.tipUpAnim.play(0, true);
                break;
            case "up2":
                if (!this.gui.up2.visible) {
                    this.hideTip("up2");
                    return;
                }
                if (this.gui.up2.y == 16)
                    Laya.Tween.to(this.gui.up2, { y: 0 }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, this.showTip, ["up2"]), 0, true);
                else
                    Laya.Tween.to(this.gui.up2, { y: 16 }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, this.showTip, ["up2"]), 0, true);
                break;
            case "up1":
                this.gui.up1.visible = true;
                if (this.gui.up1.y == 0)
                    Laya.Tween.to(this.gui.up1, { y: 10 }, 500, Laya.Ease.backIn, Laya.Handler.create(this, this.showTip, ["up1"]), 0, true);
                else
                    Laya.Tween.to(this.gui.up1, { y: 0 }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showTip, ["up1"]), 0, true);
                break;
            case "up3":
                if (!this.gui.up3.visible) {
                    this.hideTip("up3");
                    return;
                }
                if (this.gui.up3.y == 0)
                    Laya.Tween.to(this.gui.up3, { y: 10 }, 500, Laya.Ease.backIn, Laya.Handler.create(this, this.showTip, ["up3"]), 0, true);
                else
                    Laya.Tween.to(this.gui.up3, { y: 0 }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showTip, ["up3"]), 0, true);
                break;
            case "tipnew":
                if (this.gui.tipnew.visible)
                    return;
                UIHelper.doshow(this.gui.tipnew),
                    this.gui.tipnew.y = Game.centerY - 300,
                    this.gui.tipnew.alpha = 1,
                    Laya.Tween.to(this.gui.tipnew, { alpha: .2, y: Game.centerY - 400 }, 600, Laya.Ease.linearNone, Laya.Handler.create(this, this.onAnimComplete2, ["tipnew"]), 3000);
                break;
            case "coin":
                this.gui.cointip.visible = true;
                if (this.gui.cointip.y == 0)
                    Laya.Tween.to(this.gui.cointip, { y: -10 }, 500, Laya.Ease.backIn, Laya.Handler.create(this, this.showTip, ["coin"]), 0, true);
                else
                    Laya.Tween.to(this.gui.cointip, { y: 0 }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showTip, ["coin"]), 0, true);
                break;
        }
    };
    Game.prototype.hideTip = function (t) {
        switch (t) {
            case "up":
                UIHelper.dohide(this.gui.tipUp),
                    this.gui.tipUpAnim.stop();
                break;
            case "up2":
                Laya.Tween.clearAll(this.gui.up2);
                this.gui.up2.y = 16;
                break;
            case "up1":
                Laya.Tween.clearAll(this.gui.up1);
                this.gui.up1.visible = false;
                this.gui.up1.y = 0;
                break;
            case "up3":
                Laya.Tween.clearAll(this.gui.up3);
                this.gui.up3.y = 0;
                break;
            case "coin":
                Laya.Tween.clearAll(this.gui.cointip);
                this.gui.cointip.visible = false;
                this.gui.cointip.y = -10;
                break;
        }
    };
    Game.prototype.resetUIevel = function () {
        var _nowLv = SV.ME.level;
        // var t = NaN;
        this.gui.setChildIndex(this.uiLevel.level, this.gui.numChildren - 1);
        // UIHelper.showHide(nowLv > 1, this.uiLevel.l),
        // UIHelper.showHide(nowLv > 1, this.uiLevel.arr1),
        // this.uiLevel.b6.visible = Cfg.isBossLevel(nowLv - 1),
        // this.itLevel6.setText("" + (nowLv - 1)),
        // t = Math.min(1, 140 / this.itLevel6.width),
        // this.itLevel6.sprite.scale(t, t, true),
        // this.uiLevel.b1.visible = Cfg.isBossLevel(nowLv),
        this.gui.nowLv.text = Lan.G(1015, [_nowLv]);
        this.gui.bocilb.text = Lan.G(6010, [_nowLv]);
        // this.uiLevel.lv1.source = Laya.loader.getRes("uipic/qiu" + ((_nowLv - 2) % 5 + 1) + ".png") as Laya.Texture;
        // this.uiLevel.lv2.source = Laya.loader.getRes("uipic/qiu" + ((_nowLv - 1) % 5 + 1) + ".png") as Laya.Texture;
        // this.uiLevel.lv3.source = Laya.loader.getRes("uipic/qiu" + ((_nowLv) % 5 + 1) + ".png") as Laya.Texture;
        // this.uiLevel.lv4.source = Laya.loader.getRes("uipic/qiu" + ((_nowLv + 1) % 5 + 1) + ".png") as Laya.Texture;
        // this.uiLevel.lv5.source = Laya.loader.getRes("uipic/qiu" + ((_nowLv + 2) % 5 + 1) + ".png") as Laya.Texture;
        // this.uiLevel.lv6.source = Laya.loader.getRes("uipic/qiu" + ((_nowLv + 3) % 5 + 1) + ".png") as Laya.Texture;
        this.uiLevel.b1.visible = (_nowLv - 2) % 5 == 0;
        this.uiLevel.b2.visible = (_nowLv - 1) % 5 == 0;
        this.uiLevel.b3.visible = (_nowLv) % 5 == 0;
        this.uiLevel.cl4.visible = this.uiLevel.b4.visible = (_nowLv + 1) % 5 == 0;
        this.uiLevel.cl5.visible = this.uiLevel.b5.visible = (_nowLv + 2) % 5 == 0;
        this.uiLevel.cl6.visible = this.uiLevel.b6.visible = (_nowLv + 2) % 5 == 0;
        this.uiLevel.cl3.skin = (_nowLv) % 5 == 0 ? "uipic/hong.png" : "uipic/lan.png";
        //this.itLevel1.setText("" + (nowLv - 2));
        this.uiLevel.it1.text = "" + (_nowLv - 2);
        //this.itLevel2.setText("" + (nowLv - 1));
        this.uiLevel.it2.text = "" + (_nowLv - 1);
        //this.itLevel3.setText("" + nowLv);
        this.uiLevel.it3.text = "" + _nowLv;
        //this.itLevel4.setText("" + Math.min(999, nowLv + 1));
        this.uiLevel.it4.text = _nowLv > 998 ? "" : "" + Math.min(999, _nowLv + 1);
        //this.itLevel5.setText("" + Math.min(999, nowLv + 2));
        this.uiLevel.it5.text = _nowLv > 997 ? "" : "" + Math.min(999, _nowLv + 2);
        //this.itLevel6.setText("" + Math.min(999, nowLv + 3));
        this.uiLevel.it6.text = _nowLv > 996 ? "" : "" + Math.min(999, _nowLv + 3);
        UIHelper.showHide(_nowLv > 2, this.uiLevel.lv1);
        UIHelper.showHide(_nowLv > 2, this.uiLevel.arr1);
        UIHelper.showHide(_nowLv > 1, this.uiLevel.lv2);
        UIHelper.showHide(_nowLv > 1, this.uiLevel.arr2);
        // if (nowLv < 3) {
        // 	 UIHelper.dohide( this.uiLevel.lv1);
        // }
        // if (nowLv < 2) {
        // 	 UIHelper.dohide(this.uiLevel.lv2);
        // }
        // t = Math.min(1, 140 / this.itLevel1.width),
        // this.itLevel1.sprite.scale(t, t, true),
        // this.uiLevel.b2.visible = Cfg.isBossLevel(nowLv + 1),
        // this.itLevel2.setText("" + Math.min(999, nowLv + 1)),
        // t = Math.min(1, 140 / this.itLevel2.width),
        // this.itLevel2.sprite.scale(t, t, true),
        // this.uiLevel.b3.visible = Cfg.isBossLevel(nowLv + 2),
        // this.itLevel3.setText("" + Math.min(999, nowLv + 2)),
        // t = Math.min(1, 140 / this.itLevel3.width),
        // this.itLevel3.sprite.scale(t, t, true),
        UIHelper.resetChilds(this.uiLevel.level);
    };
    Game.prototype.startTimer = function () {
        //console.log("startTimer------",GameMain.isLoginLogOk);
        //var t = Math.max(0, Cfg.getCoinTime());
        //this.pCoin = Math.round(t % 10 * 100 / 10),
        //console.log("startTimer------",this.pCoin,t,Cfg.getNow(),this.lxTime);
        //this.pgsImg.setPgs(this.pCoin / 100),
        //t > 0 ? //this.curCoin.copy(Cfg.bRiChang_10).mult2(Math.round(t / 10)),
        this.CountGetCoin(),
            this._updateCoin(),
            Laya.timer.loop(50, this, this.updateF),
            Laya.timer.loop(1e3, this, this.updateS),
            this.updateF(),
            this.updateS();
    };
    Game.prototype.CountGetCoin = function () {
        var nsec = Cfg.getCoinTime();
        if (nsec < 0) {
            nsec = Math.abs(nsec);
            if (this.lxCoin.bigger(Cfg.bRiChang_10.clone().mult2(Math.floor(nsec / 10000))))
                this.curCoin = this.lxCoin.clone().minus(Cfg.bRiChang_10.clone().mult2(Math.floor(nsec / 10000)));
            else
                this.curCoin.zero();
        }
        else {
            this.curCoin = this.lxCoin.clone().plus(Cfg.bRiChang_10.clone().mult2(Math.floor(nsec / 10000)));
            //console.log("CountGetCoin***", this.curCoin.getString(), this.lxCoin.getString(), Cfg.bRiChang_10.getString(), nsec);
            var temptime = new Date();
            temptime = new Date(temptime.getTime() - (nsec % 10000));
            this.lxTime = CM.Get_Convert_Date(temptime);
        }
        this.lxCoin = this.curCoin.clone();
    };
    Game.prototype.updateF = function () {
        var lx = Math.max(0, Cfg.getCoinTime());
        //console.log("updateF---",lx,Math.floor(lx/1000)%10 == 0);
        var t = this.curCoin.clone();
        //this.pCoin++ ,
        this.CountGetCoin(),
            t.bigdivision(this.curCoin) < 1 ? this._updateCoin() : "",
            Math.round(lx / 1000) % 10 == 0 ? (
            //this.pCoin = 1,
            //console.log("updateF---",Cfg.getNow()),
            //t > 0 ? this.curCoin.plus(Cfg.bRiChang_10) : "",
            this._updateCoin()) : this.coinScale > 1 ? (this.coinScale -= .2, this.gui.goldimg.scale(this.coinScale, this.coinScale, true)) : (this.coinScale = 1, this.gui.goldimg.scale(this.coinScale, this.coinScale, true)),
            //this.CountGetCoin(),
            //this._updateCoin(),
            this.gui.p3time.text = TimeTool.formatTimeMS(Cfg.GetCoinVideoTime()),
            this.gui.p3timebar.width = Math.min(1, Cfg.GetCoinVideoTime() / 1800) * 462,
            Cfg.GetCoinVideoTime() > 1800 ? this.gui.p3getbtn.disabled = false : this.gui.p3getbtn.disabled = true,
            //this.pgsImg.setPgs(lx % 10000 / 10000.0),
            this.tiliScale > 1 ? (this.tiliScale -= .2, this.gui.tiliimg.scale(this.tiliScale, this.tiliScale, true)) : (this.tiliScale = 1, this.gui.tiliimg.scale(this.tiliScale, this.tiliScale, true));
    };
    Game.prototype.updateS = function () {
        var t = Cfg.getTiliTime();
        t > 0 ?
            (this.gui.tilitime.visible = true,
                this.gui.tilitime.text = TimeTool.formatTimeMS(360 - t) + " +1")
            : this.gui.tilitime.visible = false,
            this.gui.tililb.text = "" + SV.ME.tiLi;
        this.ResetTiliBar();
    };
    Game.prototype._updateCoin = function () {
        this.gui.itCoinTime.text = "";
        //this.gui.itCoinVal.text = this.curCoin.getShortString();
        this.gui.p3getnum.text = this.curCoin.getShortString();
        this.gui.boxDrouble.visible && (this.gui.it020.text = Lan.G(1007, [this.curCoin.getShortString()]),
            this.gui.iCoin.x = this.gui.it020.x + .5 * this.gui.it020.displayWidth);
        //GoldIncomeWnd.ME.gui.visible && GoldIncomeWnd.ME.SetGetGold();
    };
    Game.prototype.useCoin = function () {
        Cfg.one.bigger(this.curCoin) || (this.gui.btnGetCoin3.tag = "video", //Cfg.shareOrVideo(),
            Cfg.GetCoinVideoTime() > 1800 && "none" != this.gui.btnGetCoin3.tag ? (this.gui.iccccc.skin = "ui/shipin.png", this.shBoxDouble(true)) : this._useCoin(1));
    };
    Game.prototype.shBoxDouble = function (t) {
        t ? (
        //this.gui.it020.ui.setText("日常收益可领取  " + this.curCoin.getShortString()),
        this.gui.it020.text = Lan.G(1007, [this.curCoin.getShortString()]),
            this.gui.it022.text = CD.subScribeType > 0 ? Lan.G(1073) : Lan.G(1009),
            this.gui.iCoin.x = this.gui.it020.x + .5 * this.gui.it020.displayWidth,
            //this.animJinBi.play(this.gui.iCoin),
            this.gui.black.alpha = 0, laya.utils.Tween.to(this.gui.black, {
            alpha: .6
        }, 600), UIHelper.doshow(this.gui.black), UIHelper.doshow(this.gui.boxDrouble)) : (this.animJinBi.stop(this.gui.iCoin), UIHelper.dohide(this.gui.black), UIHelper.dohide(this.gui.boxDrouble));
    };
    Game.prototype.onBtnGetCoin = function (t) {
        switch (t.currentTarget) {
            case this.gui.btnGetCoin1:
                if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                    return;
                this._useCoin(1),
                    this.shBoxDouble(false);
                break;
            case this.gui.btnGetCoin3:
                // switch (this.gui.btnGetCoin3.tag) {
                // 	case "share":
                // 		this.getCoinShare(null);
                // 		break;
                // 	case "video":
                // 		WX.ME.showVideoAd(),
                // 			WX.ME.addEvent("videoSuccess", this, this.onGetCoinVideoBack, true).addEvent("videoFail", this, this.onVideoFail, true);
                // }
                if (ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
                    if (CD.Platform == Platform.MGC_H5) {
                        console.log("点击拉起微信激励视频==lxcoin");
                        MgcM.OnShowRewardVideo("lxcoin");
                        return;
                    }
                    else if (CD.Platform == Platform.H5) {
                        if (CD.PingTai == PingTai.QTT_H5) {
                            console.log("点击拉起微信激励视频==lxcoin");
                            Qtt_H5_Manager.ME.OnShowRewardVideo("lxcoin");
                            return;
                        }
                        else if (CD.PingTai == PingTai.ZM_H5) {
                            AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("lxcoin", "ads");
                            }, function () {
                                Game.ME.onGetCoinVideoBack();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.WY_H5) {
                            AdsManager.showRewardedVideo_wy(Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("lxcoin", "ads");
                            }, function () {
                                Game.ME.onGetCoinVideoBack();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.HAGO_H5) {
                            HaGoManager.ME.OnShowRewardVideo("lxcoin", Game.ME, function () {
                                Game.ME.onGetCoinVideoBack();
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.GOOGLE_H5) {
                            AdsManager.OnShowGooleAd("lxcoin", BoxRewardWnd.ME, function () {
                                Game.ME.OnGetAdsOverReward("lxcoin", "ads");
                            }, function () {
                                Game.ME.onGetCoinVideoBack();
                            });
                            return;
                        }
                    }
                    else if (CD.Platform == Platform.AD_H5) {
                        //奖励广告
                        Game.ME.rewardAd_H5("lxcoin");
                        return;
                    }
                    else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                        if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                            return;
                        this.playVideoLoadingEff(this.gui.lxcoinload, this.gui.lxcoinloadeff, this.gui.lxcoinloadlb, this.gui.btnGetCoin3);
                        //拉起视频广告
                        AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                        AdsManager.showRewardVideoAds(true, "lxcoin");
                        this.isVideo = 3;
                        return;
                    }
                }
                this.onGetCoinVideoBack();
                break;
        }
    };
    Game.prototype.onGetCoinVideoBack = function () {
        CD.subScribeType > 0 ? this._useCoin(4) : this._useCoin(3),
            this.shBoxDouble(false);
    };
    Game.prototype._useCoin = function (t) {
        //console.log("_useCoin111*****"+this.curCoin.getString());
        var rea = "leaveCoin";
        this.CountGetCoin();
        //console.log("_useCoin222*****"+this.curCoin.getString());
        if (this.curCoin.bigger(new math_BigUInt().zero()) && !this.curCoin.isZero()) {
            Cfg.onLine(),
                PosTool._localToGlobal(this.gui.p3getbtn, 0, 0),
                this.curCoin.mult(t),
                t == 1 && this.gui.boxDrouble.visible ? rea = "leaveCoinTK1" : "",
                this.animAddMoney(this.curCoin, PosTool._point.x, PosTool._point.y, 20, rea),
                this.lxCoin.zero(),
                this.curCoin.zero(),
                this._updateCoin(),
                //this.pCoin = 0,
                //this.pgsImg.setPgs(0),
                MSound.ME.playSoundLimit("w_money");
        }
    };
    Game.prototype.stopTimer = function () {
        Laya.timer.clear(this, this.updateF),
            Laya.timer.clear(this, this.updateS);
    };
    Game.prototype.showVideoCoin = function (t) {
        false ?
            (this.isVideoCoinAble,
                UIHelper.dohide(this.gui.videoCoin),
                this.gui.videoCoin.visible &&
                    (this.videoCoin.copy(Cfg.bJiaZhi).mult10(2).mult(6),
                        this.videoCoin2.copy(Cfg.bRiChang).mult10(2).mult(3),
                        this.videoCoin2.bigger(this.videoCoin) && this.videoCoin.copy(this.videoCoin2),
                        //this.gui.itVideoCoin.ui.setText(this.videoCoin.getShortString()),
                        this.gui.itVideoCoin.text = this.videoCoin.getShortString(),
                        this.gui.animSaoGuang.play())) : (UIHelper.dohide(this.gui.videoCoin), this.animJinBi.stop(this.gui.ivideoCoin), this.gui.animSaoGuang.stop());
    };
    Game.prototype.getVideoCoin = function () {
        this.showVideoCoin(false);
        // WX.ME.showVideoAd(),
        // 	WX.ME.addEvent("videoSuccess", this, this.getVideoCoinSuccess, true).addEvent("videoFail", this, this.onVideoFail, true);
    };
    // public getVideoCoinSuccess() {
    // 	this.isVideoCoinAble = false,
    // 		PosTool._localToGlobal(this.gui.videoCoin, this.gui.bVideoCoin.x, this.gui.bVideoCoin.y),
    // 		this.animAddMoney(this.videoCoin, PosTool._point.x, PosTool._point.y, 20, "VideoCoin");
    // }
    Game.prototype.animGameShow = function () {
        //start play ltt
        this.isWin = this.isLost = false,
            SV.ME.isNewPlayer && !this.newPlayerPlay && (this.newPlayerPlay = true),
            this.levelMoney.zero(),
            this.levelRateMoney.zero(),
            //this.itMoney2.setText(this.levelMoney.getShortString()),
            Cfg.nButtleType == 3 ? (this.gui.itMoney2.text = this.levelMoney.getShortString() + " + " + this.levelRateMoney.getShortString(),
                this.gui.bocicoin.text = this.levelMoney.getShortString() + " + " + this.levelRateMoney.getShortString()) : (this.gui.itMoney2.text = this.levelMoney.getShortString(),
                this.gui.bocicoin.text = this.levelMoney.getShortString()),
            laya.utils.Tween.to(this.layerAll, {
                scaleX: 1,
                scaleY: 1,
                x: 0,
                y: 0
            }, 600),
            this.playMode == 0 ? (UIHelper.doshow(this.gui.xueliang),
                this.gui.xueliang.alpha = 0,
                laya.utils.Tween.to(this.gui.xueliang, { alpha: 1 }, 600, null, laya.utils.Handler.create(this, this.onAnimGameShow), 900)) : (UIHelper.doshow(this.gui.boci),
                this.gui.boci.alpha = 0,
                Laya.Tween.to(this.gui.boci, { alpha: 1 }, 600, null, Laya.Handler.create(this, this.onAnimGameShow), 900)),
            this.playMode == 0 ? Cfg.initLevel(SV.ME.level) : Cfg.initLevel(Math.min(SV.ME.level * 5, 999)),
            this._setPgs(1),
            laya.utils.Tween.to(this.gui.itLevel, {
                y: this.gui.xueliang.Y - 45,
                scaleX: 0.8,
                scaleY: 0.8
            }, 600, laya.utils.Ease.backIn),
            laya.utils.Tween.to(this.uiLevel.level, {
                y: -500,
                scaleX: .4,
                scaleY: .4
            }, 800, laya.utils.Ease.backIn),
            this.gui.itLeft.text = "0%";
        if (this.playMode == 0 && SV.ME.level < 6)
            this.showTip("tipnew");
        this.plane.skin.tipBox.visible = false;
        if (SV.ME.level == 2 && !SV.ME.isDadian(8)) {
            SV.ME.doDadian(8);
        }
        // HB.RenWu(HuiBao.RenWu_Key.onBegin, SV.ME.level.toString());
        //this.itLeft.setText("0%"); //this.itLeft.setText("剩余陨石 100%");
    };
    Game.prototype.onAnimGameShow = function () {
        //UIHelper.dohide(this.gui.ligth),
        this.playMode == 0 ? PosTool._localToGlobal(Game.ME.gui.xueliang, Game.ME.gui.iMoney2.x, Game.ME.gui.iMoney2.y) : PosTool._localToGlobal(Game.ME.gui.boci, Game.ME.gui.bociMoney.x, Game.ME.gui.bociMoney.y),
            this.coinX = PosTool._point.x,
            this.coinY = PosTool._point.y,
            SV.ME.dosave(true, 63),
            Laya.timer.once(500, this, this.start, [0]);
    };
    Game.prototype.changeBG = function () {
        this.gui.bg.y = 0;
        this.gui.bg1.y = 0;
        this.gui.bg2.y = 0;
        laya.utils.Tween.to(this.gui.bg, {
            alpha: 0.5
        }, 600, laya.utils.Ease.circOut, laya.utils.Handler.create(this, this._changeBG1));
    };
    Game.prototype._changeBG1 = function () {
        //ltt 
        this.curBg = 1;
        // this.gui.bg.skin = "ui/beijing.jpg";
        this.gui.bgyun.skin = "ui/yun.png";
        this.gui.bgyun.y = -400;
        this.gui.bgyunshi.skin = "ui/ss_1.png";
        this.gui.bgyunshi.y = -1000;
        var _gbid = GameMain.getBackgroundID();
        console.log("_changeBG1***" + _gbid);
        this.gui.bg1.skin = "ui/" + _gbid + ".jpg";
        this.gui.bg2.skin = "ui/" + _gbid + ".jpg";
        this.gui.bg1.size(MStage.ME.GetWinWidth() + this.bgwidth, MStage.ME.GetWinHeight());
        this.gui.bg2.size(MStage.ME.GetWinWidth() + this.bgwidth, MStage.ME.GetWinHeight());
        this.gui.cover.size(MStage.ME.GetWinWidth() + this.bgwidth, MStage.ME.GetWinHeight());
        this.gui.bg2.pos(0, 0 - MStage.ME.GetWinHeight());
        laya.utils.Tween.to(this.gui.bg, {
            alpha: 1
        }, 600, laya.utils.Ease.circOut);
        UI.Display_Or_Hidden_Load_Progress_UI(false);
    };
    // public MoveBG() {
    // 	//背景容器每帧向下移动1像素
    // 	this.gui.bg.y += 10;
    // 	//如果背景图到了下面不可见，立即调整位置到上面循环显示
    // 	if (this.gui.bg1.y + this.gui.bg.y >= MStage.ME.GetWinHeight()) {
    // 		this.gui.bg1.y -= MStage.ME.GetWinHeight() * 2;
    // 	}
    // 	if (this.gui.bg2.y + this.gui.bg.y >= MStage.ME.GetWinHeight()) {
    // 		this.gui.bg2.y -= MStage.ME.GetWinHeight() * 2;
    // 	}
    // }
    Game.prototype.animGameEndShow = function () {
        //console.log("animGameEndShow***"),
        //游戏胜利 开始播动画
        this.mode = 0,
            this.nStartState = 3,
            UIHelper.doshow(this.gui.black, 0),
            this.gui.black.alpha = 0,
            laya.utils.Tween.to(this.gui.black, {
                alpha: .6
            }, 1e3);
        this.isWin = true,
            this.lostCount = 0,
            this.setCtrlEnable(false);
        MSound.ME.playSoundLimit("w_end");
        UIHelper.doshow(this.gui.iPass);
        laya.utils.Tween.to(this.gui.xueliang, {
            alpha: 0
        }, 1e3, laya.utils.Ease.backInOut);
        // console.log("this.gui.itLevel.Y", this.gui.itLevel.Y);
        laya.utils.Tween.to(this.gui.itLevel, {
            y: 450,
            scaleX: 1.6,
            scaleY: 1.6
        }, 600, laya.utils.Ease.backIn, null, 100);
        laya.utils.Tween.to(this.uiLevel.level, {
            //centerY: -200,
            y: Game.centerY - 250 * MStage.ME.GetScaleY(),
            scaleX: 1,
            scaleY: 1
        }, 600, laya.utils.Ease.backIn, laya.utils.Handler.create(this, this.checkChangebg), 100);
        this.gui.iPass.alpha = 0,
            this.gui.iPass.centerY = 0, //this.gui.itLevel.Y - 130,
            laya.utils.Tween.to(this.gui.iPass, {
                alpha: 1
            }, 600, laya.utils.Ease.expoIn, null, 1e3);
        this.pUpSpeed = 0;
        Laya.timer.once(1500, this.plane, this.plane.setShoot, [true]);
        laya.utils.Tween.to(this, {
            pUpSpeed: -300
        }, 1500, laya.utils.Ease.expoIn, laya.utils.Handler.create(this, this.onAnimGameEndShow), 1500);
        if (this.guideStep == GuideUI.GUIDE_STEP2) {
            GuideUI.ME.OnGuideCom(this.guideStep, 0);
            this.guideStep = 0;
        }
        if (!SV.ME.isDadian(4)) {
            //console.log("firstwin***"+this.isWin+"**"+this.isVideo);
            this.isVideo = 0;
            SV.ME.doDadian(4);
        }
        if (SV.ME.level == 3 && !SV.ME.isDadian(9)) {
            SV.ME.doDadian(9);
        }
        if (SV.ME.level == 4 && !SV.ME.isDadian(10)) {
            SV.ME.doDadian(10);
        }
        if (SV.ME.level == 5 && !SV.ME.isDadian(11)) {
            SV.ME.doDadian(11);
        }
        if (SV.ME.level == 6 && !SV.ME.isDadian(12)) {
            SV.ME.doDadian(12);
        }
        if (SV.ME.level <= 11) {
            this.wincontinue++;
        }
    };
    Game.prototype.checkChangebg = function () {
        if (GameMain.setBackgroundID(SV.ME.level)) {
            this.changeBG();
        }
    };
    Game.prototype.onAnimGameEndShow = function () {
        //胜利动画播放完毕
        this.uiLevel.animLevel.play(0, false),
            this.jieSuan(true),
            Laya.timer.once(800, this, this._onAnimGameEndShow),
            this.goonFun = this.animGameEndHide,
            UIHelper.doshow(this.gui.topPanel),
            laya.utils.Tween.to(this.gui.topPanel, {
                y: 0
            }, 600, laya.utils.Ease.linearNone, null);
    };
    Game.prototype._onAnimGameEndShow = function () {
        //this.goonFun = this.animGameEndHide,
        var point = this.gui.tiliimg.localToGlobal(new Laya.Point(0, 0));
        this.isWin && (SV.ME.tiLi += 5, this.flyTiLi.fly(MStage.ME.cx, MStage.ME.cy, point.x, point.y, 5, 0, Laya.stage));
    };
    Game.prototype.animGameEndHide = function () {
        //this.animJinBi.stop(this.gui.iCCoin1),
        UIHelper.dohide(this.gui.black),
            UIHelper.dohide(this.gui.iPass),
            this.jieSuan(false),
            laya.utils.Tween.to(this.gui.itLevel, {
                scaleX: 0,
                scaleY: 0
            }, 300),
            this.uiLevel.animLevelHide.play(0, false),
            Laya.timer.once(1e3, this, this.animCoverShow),
            this.reset();
    };
    Game.prototype.jieSuan = function (t) {
        if (t) {
            this.Play_Music(0);
            this.isjiesuanadv = true; // !(SV.ME.level == 11 && this.wincontinue >= 3 && CD.BanBen == BanBen.guoji);
            Cfg.nButtleType == 3 && this.levelMoney.present100(100 + Cfg.nButtleRate);
            //console.log("==jieSuan====="+t);
            if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
                HaGoManager.ME.OnHideBannerAd();
            }
        }
        if (UIHelper.showHide(t, this.gui.draw), t) {
            if (Game.isGameStart = false,
                UIHelper.doshow(this.gui.btnCollect),
                this.gui.jiesuangetlb.visible = false,
                UIHelper.dohide(this.gui.btnCollect2),
                UIHelper.dohide(this.gui.wingskill2),
                UIHelper.dohide(this.gui.wingskill1),
                this.plane.CloseQuanEff(),
                // UIHelper.dohide(this.gui.btnCollect3),
                //this.animJinBi.play(this.gui.iCCoin1),
                //this.gui.itCCoin1.ui.setText(this.levelMoney.getShortString()
                this.gui.itCCoin1.text = this.levelMoney.getShortString(),
                this.levelMoney.bigger(Cfg.twen3)) {
                //ltt
                var i = "video"; //Cfg.shareOrVideo();
                var ndelay = ParamOnline.ME.getNumber("jiesuandelay", 2);
                var nmult = CD.subScribeType > 0 && CD.BanBen == BanBen.guoji ? 4 : 3;
                var nopen = ParamOnline.ME.getNumber("jiesuanvideo", this.jiesuanvideo);
                if (AdsManager.AdsChannelID && AdsManager.AdsChannelID.indexOf("Adwords") != -1) {
                    nopen = 2;
                }
                var ncheck = ParamOnline.ME.getNumber("isjscheckads", 0);
                "none" != i ? (
                //this.gui.icCollect2.skin = "icons/wu_" + i + ".png",
                Cfg.temp.copy(this.levelMoney).mult(nmult),
                    //this.animJinBi.play(this.gui.iCCoin2),
                    //this.gui.itCCoin2.ui.setText(Cfg.temp.getShortString()),
                    this.gui.itCCoin2.text = Cfg.temp.getShortString(),
                    this.gui.btnCollect2.tag = i,
                    UIHelper.showHide(SV.ME.level <= nopen || (ncheck == 1 && AdsManager.isLoadedRewardVideo()) || ndelay > 0, this.gui.btnCollect2),
                    this.gui.icCollect2.visible = SV.ME.level > nopen,
                    this.gui.itCCoin2Lb.text = nmult == 4 ? Lan.G(1074) : Lan.G(1068),
                    UIHelper.showHide(SV.ME.level > nopen || ndelay > 0, this.gui.btnCollect),
                    ndelay > 0 ? (this.gui.btnCollect.scale(0, 0),
                        Laya.Tween.to(this.gui.btnCollect, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.linearNone, null, ndelay * 1000)) : this.gui.btnCollect.scale(1, 1)) : (
                //this.animJinBi.stop(this.gui.iCCoin2),
                UIHelper.dohide(this.gui.btnCollect2)),
                    false ? (SV.ME.playCount++,
                        SV.ME.playCount = Math.min(5, SV.ME.playCount),
                        // this.gui.coinBar.x = (SV.ME.playCount - 1) / 5 * 435 - 435,
                        // laya.utils.Tween.to(this.gui.coinBar, {
                        // 	x: SV.ME.playCount / 5 * 435 - 435
                        // },
                        // 	1300, null, null, 200),
                        SV.ME.playCount >= 5 && (
                        // UIHelper.doshow(this.gui.btnCollect3),
                        this.gui.animCoin.play(),
                            UIHelper.dohide(this.gui.btnCollect2)),
                        SV.ME.dosave(false, 64)) :
                        this.gui.animDraw.play(0, false);
            }
            else
                // this.animJinBi.stop(this.gui.iCCoin2),
                UIHelper.dohide(this.gui.btnCollect2);
            // SV.ME.level <= 6 ?
            // 	this.txtTip.setText(GameTip.getTip("newer")) :
            // 	this.isWin ?
            // 		this.txtTip.setText(GameTip.getTip("win")
            // 		) :
            // 		this.txtTip.setText(GameTip.getTip("fail")
            // 		),
            // this.txtTip.skin.x = .5 * (MStage.ME.w - this.txtTip.skin.width);
            this.gui.failtip.visible = this.isLost;
            //!this.gui.btnCollect.visible && this.gui.btnCollect2.visible ? this.gui.btnCollect2.y = 149 : this.gui.btnCollect2.y = 390;
            //banner广告
            if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.QTT_H5) {
                //趣头条互动广告
                Qtt_H5_Manager.ME.onPlayBanner(0);
            }
            else if (CD.Platform == Platform.AD_H5) {
                //
                console.log("进入下一关时广告");
                Laya.Browser.window.gameapi.showNext();
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
                //console.log("打开结算======");
                AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                    //console.log("关闭结算======");
                }, function () { });
                AdsManager.OnHideZMBanner();
                AdsManager.OnShowZMAd("j0tn25oam6", Game.ME, function () {
                    //console.log("横幅广告展示成功===");
                }, function () {
                    //console.log("横幅广告展示失败===");
                });
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
                HaGoManager.ME.OnShowBannerAd();
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.GOOGLE_H5) {
                AdsManager.OnShowGooldAd_Inter('pause');
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
                AdsManager.showInterstitial_wy();
                AdsManager.hideBanner_wy();
                AdsManager.showBanner_wy();
            }
        }
        else {
            //this.animJinBi.stop(this.gui.iCCoin1),
            this.gui.animCoin.stop();
            //banner广告
            //console.log("banner广告==hideBanner===");
            if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.QTT_H5) {
                //趣头条互动广告
                Qtt_H5_Manager.ME.hideBanner();
            }
            else if (CD.Platform == Platform.AD_H5) {
                //游戏开始前广告
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
                AdsManager.OnHideZMBanner();
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.HAGO_H5) {
                HaGoManager.ME.OnHideBannerAd();
            }
            else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
                AdsManager.hideBanner_wy();
            }
        }
    };
    Game.prototype.jieSuanClick = function (t) {
        var _this = this;
        //console.log("jieSuanClick===="+t.currentTarget);
        //this.isjiesuanadv = !(SV.ME.level == 11 && this.wincontinue >= 3 && CD.BanBen == BanBen.guoji);
        switch (t.currentTarget) {
            case this.gui.btnCollect:
                if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.ZM_H5) {
                    AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                    }, function () { });
                }
                else if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.WY_H5) {
                    AdsManager.showInterstitial_wy();
                }
            case this.gui.jiesuangetlb:
                if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                    return;
                this.collect(this.gui.btnCollect),
                    MSound.ME.playSoundLimit("w_click");
                break;
            case this.gui.btnCollect2:
                //ltt 3倍结算
                var nopen = ParamOnline.ME.getNumber("jiesuanvideo", this.jiesuanvideo);
                //console.log("this.gui.btnCollect2===="+nopen);
                if (AdsManager.AdsChannelID && AdsManager.AdsChannelID.indexOf("Adwords") != -1) {
                    nopen = 2;
                }
                if (this.isjiesuanadv && ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1 && SV.ME.level > nopen) {
                    if (CD.Platform == Platform.MGC_H5) {
                        console.log("点击拉起微信激励视频==jiesuan");
                        MgcM.OnShowRewardVideo("jiesuan");
                        return;
                    }
                    else if (CD.Platform == Platform.H5) {
                        if (CD.PingTai == PingTai.QTT_H5) {
                            console.log("点击拉起微信激励视频==jiesuan");
                            Qtt_H5_Manager.ME.OnShowRewardVideo("jiesuan");
                            return;
                        }
                        else if (CD.PingTai == PingTai.ZM_H5) {
                            //console.log("==jieSuan==ggggg=h1hvqfet8u=")
                            AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("jiesuan", "ads");
                            }, function () {
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.WY_H5) {
                            AdsManager.showRewardedVideo_wy(Game.ME, function () {
                                Game.ME.OnGetAdsOverReward("jiesuan", "ads");
                            }, function () {
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.HAGO_H5) {
                            console.log("点击拉起微信激励视频=2=jiesuan");
                            HaGoManager.ME.OnShowRewardVideo("jiesuan", Game.ME, function () {
                                _this.collect(_this.gui.btnCollect2),
                                    MSound.ME.playSoundLimit("w_click");
                            });
                            return;
                        }
                        else if (CD.PingTai == PingTai.GOOGLE_H5) {
                            AdsManager.OnShowGooleAd("jiesuan", BoxRewardWnd.ME, function () {
                                Game.ME.OnGetAdsOverReward("jiesuan", "ads");
                            }, function () {
                                _this.collect(_this.gui.btnCollect2),
                                    MSound.ME.playSoundLimit("w_click");
                            });
                            return;
                        }
                    }
                    else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                        if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                            return;
                        this.playVideoLoadingEff(this.gui.jiesuanload, this.gui.jiesuanloadeff, this.gui.jiesuanloadlb, this.gui.btnCollect2);
                        //拉起视频广告
                        AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                        AdsManager.showRewardVideoAds(true, "jiesuan");
                        this.isVideo = 4;
                        return;
                    }
                    else if (CD.Platform == Platform.AD_H5) {
                        //奖励广告
                        this.rewardAd_H5("jiesuan");
                        return;
                    }
                    else {
                        console.log("CD.Platform ==ddddd=");
                    }
                }
                this.collect(this.gui.btnCollect2),
                    MSound.ME.playSoundLimit("w_click");
                //分享领取
                // switch (MSound.ME.playSoundLimit("w_click"), this.gui.btnCollect2.tag) {
                // 	case "share":
                // 		WX.ME.share(HaiBao.ME.getShareText(), HaiBao.ME.getShareUrl()),
                // 			WX.ME.addEvent("onShow", this, this.onCollectShareBack, true, this.gui.btnCollect2);
                // 		break;
                // 	case "video":
                // 		WX.ME.showVideoAd(),
                // 			WX.ME.addEvent("videoSuccess", this, this._collect, true, this.gui.btnCollect2).addEvent("videoFail", this, this.onVideoFail, true);
                // }
                break;
            // case this.gui.btnCollect3:
            // 	//luck
            // 	break;
            // case this.gui.btnCollect4:
            // 	this.luckUI.bg.mouseEnabled = false;
            // 	WX.ME.showVideoAd(),
            // 		WX.ME.addEvent("videoSuccess", this, this._collect, true, this.gui.btnCollect4).addEvent("videoFail", this, this.onLuckVideoFail, true);
            // 	break;
        }
        if (this.isWin && !SV.ME.isDadian(5)) {
            //console.log("firstwinreward***"+this.isWin+"**"+this.isVideo);
            SV.ME.doDadian(5);
        }
    };
    Game.prototype._collect = function (t) {
        this.collect(t.params);
    };
    Game.prototype.collect = function (t) {
        switch (t) {
            case this.gui.btnCollect:
            case this.gui.jiesuangetlb:
                this.goonFun && (this.jieSuan(false), this.levelMoney.bigger(Cfg.one) && this.animAddMoney(this.levelMoney, MStage.ME.cx, MStage.ME.cy, 20, "jiesuan1"), this.goonFun(), this.goonFun = null, TK.track("win_select", { lv: SV.ME.level, selecttype: 1 }));
                break;
            case this.gui.btnCollect2:
                if (this.goonFun) {
                    // switch (this.gui.btnCollect2.tag) {
                    // 	case "share":
                    // 		SV.ME.shareCount++;
                    // 		break;
                    // 	case "video":
                    // 		SV.ME.videoCount++;
                    // 		break;
                    // }
                    var nmult = CD.subScribeType > 0 && CD.BanBen == BanBen.guoji ? 4 : 3;
                    SV.ME.videoCount++,
                        this.jieSuan(false),
                        this.levelMoney.bigger(Cfg.one),
                        this.animAddMoney(this.levelMoney.mult(nmult), MStage.ME.cx, MStage.ME.cy, 20, "jiesuan3"),
                        //this.animAddMoney(Cfg.one, MStage.ME.cx, MStage.ME.cy, 20),
                        //Laya.timer.once(100, this, this.animAddMoney, [Cfg.one, MStage.ME.cx, MStage.ME.cy, 20]),
                        //Laya.timer.once(200, this, this.animAddMoney, [this.levelMoney.mult(3), MStage.ME.cx, MStage.ME.cy, 20], false),
                        this.goonFun(),
                        this.goonFun = null;
                    //TK.track("win_select", { "lv": SV.ME.level, "selecttype": 3 });
                }
                break;
            // case this.gui.btnCollect4:
            // 	this.gui.btnCollect4.visible = false,
            // 		this.luckUI.bg.off("mousedown", UIHelper, UIHelper.dohide),
            // 		this.luckUI.ani1.play(0, false),
            // 		Laya.timer.loop(1, this, this.tigerUpdate),
            // 		this.tigerSpeed = 0,
            // 		this.luckUI.screen.y = this.tigerY = 210,
            // 		laya.utils.Tween.to(this, {
            // 			tigerSpeed: 50
            // 		},
            // 			1e3, null, null, 200),
            // 		Laya.timer.once(3e3, this, this.endTiger),
            // 		SV.ME.playCount = 0,
            // 		MSound.ME.playSoundLimit("w_clc4");
            // 	break;
        }
    };
    Game.prototype.animGameFailShow = function (rea) {
        //失败播放动画
        this.isLost = true,
            this.lostCount++,
            UIHelper.doshow(this.gui.black, 0),
            this.gui.black.alpha = 0;
        laya.utils.Tween.to(this.gui.black, {
            alpha: .6
        }, 1e3);
        Laya.timer.loop(1, this, this.update);
        this.plane.attackAble = false;
        laya.utils.Tween.to(this.gui.xueliang, {
            y: Game.centerY - 560 // this.gui.xueliang.Y + 550
        }, 1e3, laya.utils.Ease.backInOut);
        Laya.Tween.to(this.gui.boci, {
            y: Game.centerY - 360 // this.gui.xueliang.Y + 550
        }, 1e3, laya.utils.Ease.backInOut);
        // console.log("this.gui.itLevel.Y ",this.gui.itLevel.Y );
        laya.utils.Tween.to(this.gui.itLevel, {
            y: Game.centerY - 510,
            scaleX: 1.6,
            scaleY: 1.6
        }, 1e3, laya.utils.Ease.backInOut, null, 300);
        if (this.playMode == 0) {
            laya.utils.Tween.to(this.uiLevel.level, { y: Game.centerY - 250 * MStage.ME.GetScaleY(), scaleX: 1, scaleY: 1 }, 1e3, laya.utils.Ease.backInOut, null, 300);
            this.gui.failtip.text = Lan.G(1081);
        }
        else {
            laya.utils.Tween.to(this.uiLevel.level, { scaleX: 1, scaleY: 1 }, 1e3, laya.utils.Ease.backInOut, null, 300);
            this.gui.failtip.text = "";
        }
        this.boomPlane.play(this.plane.x, this.plane.y, 2);
        Laya.timer.once(200, this.boomPlane, this.boomPlane.play, [this.plane.x + 30, this.plane.y - 30, 2]);
        this.plane.broken(true);
        this.shack(30, 6);
        var nmax = ParamOnline.ME.getNumber("endlessmode_time", 3);
        this.playMode == 1 && (this.playMode = 0, SV.ME.readLocal(), SV.ME.EndlessTime < nmax ? SV.ME.EndlessTime++ : Cfg.CutItem(1006, new math_BigUInt().one(), "endlessmode"), Cfg.initButtle());
        Laya.timer.once(1500, this, this.onAnimGameFailShow);
        if (this.guideStep == GuideUI.GUIDE_STEP2) {
            GuideUI.ME.OnGuideCom(this.guideStep, 0);
            this.guideStep = 0;
        }
        if (SV.ME.level < 51) {
            var dataTDGA = {
                "lv": SV.ME.level.toString(),
                "reason": rea,
                "goldcoin": SV.ME.money.getV1(),
                "goldcoinw": SV.ME.money.getV2(),
                "noww": (SV.ME.curFu + 1).toString(),
                "m1": cFun.GetHuiBaoLevelStr(SV.ME.lCount),
                "m2": cFun.GetHuiBaoLevelStr(SV.ME.lDamage),
                "f1_1": cFun.GetHuiBaoLevelStr(SV.ME.levelFuCount[0]),
                "f1_2": cFun.GetHuiBaoLevelStr(SV.ME.levelFuDamage[0]),
                "f2_1": cFun.GetHuiBaoLevelStr(SV.ME.levelFuCount[1]),
                "f2_2": cFun.GetHuiBaoLevelStr(SV.ME.levelFuDamage[1]),
                "f3_1": cFun.GetHuiBaoLevelStr(SV.ME.levelFuCount[2]),
                "f3_2": cFun.GetHuiBaoLevelStr(SV.ME.levelFuDamage[2]),
                "f4_1": cFun.GetHuiBaoLevelStr(SV.ME.levelFuCount[3]),
                "f4_2": cFun.GetHuiBaoLevelStr(SV.ME.levelFuDamage[3]),
            };
            // HB.onEvent("dead_" + SV.ME.level, dataTDGA);
            //TK.track("dead", dataTDGA);
        }
        if (SV.ME.level <= 10 && this.wincontinue < 3) {
            this.wincontinue = 0;
        }
    };
    Game.prototype.onAnimGameFailShow = function () {
        //失败动画播放完毕
        this.plane.y = this.resultY = MStage.ME.GetWinHeight() + 1e3,
            //console.log("onAnimGameFailShow***",this.resultY),
            this.jieSuan(true),
            UIHelper.doshow(this.gui.topPanel),
            laya.utils.Tween.to(this.gui.topPanel, {
                y: 0
            }, 600, laya.utils.Ease.linearNone),
            this._onAnimGameFailShow();
        //Laya.timer.once(800, this, this._onAnimGameFailShow);
    };
    Game.prototype._onAnimGameFailShow = function () {
        this.goonFun = this.animGameFailHide;
    };
    Game.prototype.animGameFailHide = function () {
        UIHelper.dohide(this.gui.xueliang),
            UIHelper.dohide(this.gui.boci),
            UIHelper.dohide(this.gui.black),
            this.jieSuan(false),
            laya.utils.Tween.to(this.gui.itLevel, {
                scaleX: 0,
                scaleY: 0
            }, 300),
            this.uiLevel.animLevelHide.play(0, false),
            Laya.timer.once(600, this, this.animCoverShow),
            this.reset();
    };
    Game.prototype.animGameReLife = function () {
        //this.gui.icRelife.skin = "gui/ic" + this.relifeType + ".png",
        UIHelper.doshow(this.gui.black);
        this.gui.black.alpha = 0;
        laya.utils.Tween.to(this.gui.black, { alpha: .6 }, 1e3);
        //HMS
        // var nnum = ParamOnline.ME.getNumber("relife_tryfunum", 5) + parseInt(Cfg.GetItemNum(1002).getString()) - SV.ME.relifetryfunum;
        // if (this.playMode == 0 && SV.ME.curFu > -1 && (nnum > 0 || this.showTryFu) && this.relifeLimitNum - this.reLifeCount == 1) {
        // 	RelifeTryFuWnd.ME.doshow();
        // } else {
        // 	var nlvl = ParamOnline.ME.getNumber("relifevideolvl", this.relifevideolvl);
        // 	UIHelper.doshow(this.gui.reLife),
        // 		UIHelper.showHide(SV.ME.level > nlvl || this.playMode == 1, this.gui.icRelife),
        // 		this.playMode == 1 || SV.ME.level > nlvl ? this.gui.itRelife.y = 216 : this.gui.itRelife.y = 161,
        // 		this.timeLeft = ParamOnline.ME.getInt("SafeTime", 5),
        // 		//this.gui.itRelife.ui.setText("复活继续 " + this.timeLeft),
        // 		this.gui.animRelive.play(0, true),
        // 		CD.Language == Language.eng || CD.Language == Language.ru || CD.Language == Language.es || CD.Language == Language.pt || CD.Language == Language.de || CD.Language == Language.it || CD.Language == Language.fr ? this.gui.itRelife.text = Lan.G(1002) + "\n" + this.timeLeft : this.gui.itRelife.text = Lan.G(1002) + " " + this.timeLeft,
        // 		Laya.timer.loop(1e3, this, this.clock),
        // 		this.clock(),
        // 		this.gui.reLife.off("click", this, this.showAdVideo),
        // 		this.gui.reLife.on("click", this, this.showAdVideo);
        // }
    };
    Game.prototype.clock = function () {
        this.timeLeft < 0 ?
            (Laya.timer.clear(this, this.clock),
                UIHelper.dohide(this.gui.reLife),
                UIHelper.dohide(this.gui.black),
                //this.gui.animRelive.gotoAndStop(0),
                this.gui.animRelive.gotoAndStop(0),
                this.playMode == 0 && (SV.ME.level <= ParamOnline.ME.getNumber("relifevideolvl", this.relifevideolvl) || this.clickRelife >= ParamOnline.ME.getNumber("gorelifenum", 2)) ? this.reLife() : this.animGameFailShow("relifttimeover"),
                //this.CheckInsertAds("relifttimeover"),
                "") :
            (this.timeLeft % 2 == 0 &&
                ( //this.gui.animRelive.play(0),
                true),
                //this.gui.itRelife.ui.setText("复活继续 " + this.timeLeft)
                CD.Language == Language.eng || CD.Language == Language.ru || CD.Language == Language.es || CD.Language == Language.pt || CD.Language == Language.de || CD.Language == Language.it || CD.Language == Language.fr ? this.gui.itRelife.text = Lan.G(1002) + "\n" + this.timeLeft : this.gui.itRelife.text = Lan.G(1002) + " " + this.timeLeft),
            this.timeLeft--;
    };
    Game.prototype.showAdVideo = function () {
        switch (Laya.timer.clear(this, this.clock),
            //this.gui.animRelive.gotoAndStop(0),
            this.gui.animRelive.gotoAndStop(0),
            this.relifeType) {
            case "share":
                this.reLifeShare(null);
                break;
            case "video":
                this.reLifeShare(null); //ltt
            // WX.ME.showVideoAd(),
            // 	WX.ME.addEvent("videoSuccess", this, this.reLife, true).addEvent("videoFail", this, this.onReLifeVideoBack, true);
        }
        this.clickRelife++;
        //this.gui.icRelife.skin = "gui/ic" + this.relifeType + ".png";
    };
    Game.prototype.reLifeShare = function (t) {
        //ltt
        if ((SV.ME.level > ParamOnline.ME.getNumber("relifevideolvl", this.relifevideolvl) || this.playMode == 1) && ParamOnline.ME.getNumber("IsOpenVideo", 1) == 1) {
            if (CD.Platform == Platform.MGC_H5) {
                console.log("点击拉起微信激励视频==relife");
                MgcM.OnShowRewardVideo("relife");
                return;
            }
            else if (CD.Platform == Platform.H5) {
                if (CD.PingTai == PingTai.QTT_H5) {
                    console.log("点击拉起微信激励视频==relife");
                    Qtt_H5_Manager.ME.OnShowRewardVideo("relife");
                    return;
                }
                else if (CD.PingTai == PingTai.ZM_H5) {
                    AdsManager.OnShowZMAd("h1hvqfet8u", Game.ME, function () {
                        Game.ME.OnGetAdsOverReward("relife", "ads");
                    }, function () {
                        Game.ME.reLife();
                    });
                    return;
                }
                else if (CD.PingTai == PingTai.WY_H5) {
                    AdsManager.showRewardedVideo_wy(Game.ME, function () {
                        Game.ME.OnGetAdsOverReward("relife", "ads");
                    }, function () {
                        Game.ME.reLife();
                    });
                    return;
                }
                else if (CD.PingTai == PingTai.HAGO_H5) {
                    HaGoManager.ME.OnShowRewardVideo("relife", Game.ME, function () {
                        Game.ME.reLife();
                    });
                    return;
                }
                else if (CD.PingTai == PingTai.GOOGLE_H5) {
                    AdsManager.OnShowGooleAd("relife", BoxRewardWnd.ME, function () {
                        Game.ME.OnGetAdsOverReward("relife", "ads");
                    }, function () {
                        Game.ME.reLife();
                    });
                    return;
                }
            }
            else if (CD.Platform == Platform.AD_H5) {
                //奖励广告
                Game.ME.rewardAd_H5("relife");
                return;
            }
            else if (CD.Platform == Platform.Android || CD.Platform == Platform.Ios) {
                if (Game.ME.isVideo > 0 && Game.ME.isVideo < 100)
                    return;
                this.playVideoLoadingEff(this.gui.relifeload, this.gui.relifeloadeff, this.gui.relifeloadlb, this.gui.reLife);
                //拉起视频广告
                AdsManager.logAdjustEvent(AdsManager.adjust_rewardVideo_should_show());
                AdsManager.showRewardVideoAds(true, "relife");
                this.isVideo = 5;
                return;
            }
        }
        this.reLife();
        //(null == t || t.data && t.data.confirm) && (WX.ME.share(HaiBao.ME.getShareText(), HaiBao.ME.getShareUrl()), WX.ME.addEvent("onShow", this, this.onReLifeShareBack, true)),
        //	null != t && t.data && t.data.cancel && this.reLifeFail();
    };
    Game.prototype.reLife = function () {
        // switch (this.relifeType) {
        // 	case "share":
        // 		SV.ME.shareCount++;
        // 		break;
        // 	case "video":
        // 		SV.ME.videoCount++;
        // 		break;
        // }
        SV.ME.videoCount++,
            this.reLifeCount++,
            this.relifeTryFu++,
            Game.isGameStart = true,
            Laya.timer.clear(this, this.clock),
            UIHelper.dohide(this.gui.reLife),
            UIHelper.dohide(this.gui.black),
            this.setCtrlEnable(true),
            Laya.timer.loop(1e3, this, this.checkWaveEnd),
            this.plane.setShoot(true),
            this.plane.wuDi(5),
            Laya.timer.loop(1, this, this.update);
        this.nStartState = 1;
        // HB.onEvent("relife", { Level: cFun.GetHuiBaoLevelStr(SV.ME.level) });
        AchievementWnd.ME.addAch(1, 1, 1);
    };
    Game.prototype.AdsFailShowRelife = function () {
        //console.log("AdsFailShowRelife***"+this.nStartState+"***"+this.isVideo);
        if (this.nStartState == 2) {
            Laya.timer.clear(this, this.clock);
            UIHelper.dohide(this.gui.reLife);
            UIHelper.dohide(this.gui.black);
            //HMS
            // if (this.isVideo == 5) {
            // 	this.clickRelife >= ParamOnline.ME.getNumber("gorelifenum", 2) ? (this.gui.animRelive.gotoAndStop(0), this.reLife()) : this.animGameReLife();
            // }
        }
    };
    Game.prototype.setCtrlEnable = function (t) {
        t ? (Laya.stage.on("mousedown", this, this.onMouseDown),
            Laya.stage.on("mousemove", this, this.onMouseMove),
            Laya.stage.on("mouseup", this, this.onMouseUp)) : (Laya.stage.off("mousedown", this, this.onMouseDown),
            Laya.stage.off("mousemove", this, this.onMouseMove),
            Laya.stage.off("mouseup", this, this.onMouseUp),
            this.plane.setShoot(false),
            this.isMouseDown = false),
            this.setTimeScale(true),
            this.isScaleAble = false;
    };
    Game.prototype.setTimeScale = function (t) {
        var nnum = ParamOnline.ME.getNumber("insertads_pause", 50000);
        //Laya.timer.clear(this, this.CheckScaleTime);
        t ? this.isScaleAble && (laya.utils.Tween.to(Game, {
            timeScale: 1,
            update: this.hTimeScale
        }, 600, null, null, 0, true),
            laya.utils.Tween.to(this.gui.cover, {
                alpha: 0
            }, 600, null, laya.utils.Handler.create(this, this._hideCover), 0, true)) :
            this.isScaleAble ? (laya.utils.Tween.to(Game, {
                timeScale: .1,
                update: this.hTimeScale
            }, 600, null, null, 0, true),
                this.gui.cover.visible = true,
                this.gameScaleTime = CM.Get_Local_Time(),
                //console.log("setTimeScale*****"+nnum+"****"+((nnum * 1000 - 600) * 0.1 + 350)),
                //nnum > 0 ? Laya.timer.once((nnum * 1000 - 600) * 0.1 + 350, this, this.CheckScaleTime) : "",
                laya.utils.Tween.to(this.gui.cover, {
                    alpha: 1
                }, 600, null, null, 0, true)) : this.isScaleAble = true;
    };
    Game.prototype.CheckScaleTime = function () {
        //console.log("CheckScaleTime*******"+this.gameScaleTime+"****"+CM.Get_Local_Time());
        var nnum = ParamOnline.ME.getNumber("insertads_pause", 50000);
        if (nnum > 0) {
            var dnow = new Date();
            var s = dnow.getTime() - new Date(this.gameScaleTime).getTime();
            if (s >= nnum * 1000) {
                Laya.timer.clear(this, this.CheckScaleTime);
                //console.log("CheckScaleTime222*****"+s);
                this.CheckInsertAds("scaletime");
            }
        }
        else {
            Laya.timer.clear(this, this.CheckScaleTime);
        }
    };
    Game.prototype._hideCover = function () {
        this.gui.cover.visible = false;
    };
    Game.prototype.onVideoFail = function () {
        console.log("onVideoFail");
    };
    Game.prototype.updateTimerScale = function () {
        Game.dTime = Game._dTime * Game.timeScale,
            Laya.timer.scale = Game.timeScale;
        // console.log("~~~~~~~~~~~~~", Game.dTime, Game.timeScale);
    };
    //离开副本进这里
    Game.prototype.reset = function () {
        this.nStartState = 0;
        this.isVideoCoinAble = true,
            Planet.removeAll(),
            Buff.removeAll(),
            Buttle.removeAll(),
            this.clearFuTag();
        (SV.ME.curFu == 4 || SV.ME.curFu == 10) ? this.plane.wp.setVisible(false) : "";
        // this.isWin
        // this.isLost	
        if (SV.ME.level == 11) {
            if (this.wincontinue >= 3) {
                this.wincontinue = 0;
                if (CD.BanBen == BanBen.guoji) {
                    if (CD.Platform == Platform.Android) {
                        ScoreWnd.ME.doshow();
                        this.showchargetip = 1;
                    }
                    else if (CD.Platform == Platform.Ios) {
                        var fdata = { type: "pingjia", data: "" };
                        IFS.ME.doCall(JSON.stringify(fdata));
                        this.showchargetip = 1;
                    }
                }
            }
            if (this.showchargetip == 0 && parseInt(Cfg.GetItemNum(1103).getString()) == 0) {
                FirstChargeWnd.ME.doshow();
                this.showchargetip = 1;
            }
        }
    };
    Game.prototype.start = function (t) {
        (this.playMode == 0 && Game.isGameStart) || (Game.isGameStart = true,
            this.plane.draw(),
            this.count = Cfg.wave.length,
            this.index = -1,
            this.levelCount.copy(Cfg.levelCount),
            this.begin(t),
            this.plane.attackAble = true,
            this.plane.start(t),
            this.Play_Music(1),
            1 == SV.ME.level); //&& Laya.timer.once(2e3, this, this.guide1) //ltt p yindao
    };
    Game.prototype.end = function () {
        this.nStartState = 2;
        Game.isGameStart && (SV.ME.dosave(false, 65),
            this.setCtrlEnable(false),
            Laya.timer.clear(this, this.checkWaveEnd),
            Laya.timer.clear(this, this.nextBug),
            Laya.timer.clear(this, this.update));
    };
    Game.prototype.fail = function () {
        if (this.nStartState == 1) {
            var nrate = ParamOnline.ME.getNumber("godeadrate", 5);
            var nnow = parseInt(this.gui.itLeft.text.replace("%", ""));
            this.clickRelife = 0;
            //console.log("fail******",this.reLifeCount,this.relifeLimitNum);
            //console.log(ParamOnline.ME.getNumber("relifevideolvl",  this.relifevideolvl));
            this.end(),
                this.plane.flashRed(),
                this.relifeType = "video", //Cfg.shareOrVideo(),
                //HMS 原来
                this.playMode == 0 && !AdsManager.isLoadedRewardVideo() && !AdsManager.isLoadedInterstitial("") && nnow < nrate && SV.ME.level > ParamOnline.ME.getNumber("relifevideolvl", this.relifevideolvl) ? Laya.timer.once(1800, this, this.animGameFailShow, ["godead"]) :
                    "none" != this.relifeType && this.reLifeCount < this.relifeLimitNum ? Laya.timer.once(1e3, this, this.animGameReLife) :
                        Laya.timer.once(1800, this, this.animGameFailShow, ["norelifecount"]);
            //HMS new
            this.playMode == 0 && !AdsManager.isLoadedRewardVideo() && !AdsManager.isLoadedInterstitial("") && nnow < nrate && SV.ME.level > ParamOnline.ME.getNumber("relifevideolvl", this.relifevideolvl) ? Laya.timer.once(1800, this, this.animGameFailShow, ["godead"]) :
                "none" != this.relifeType && Laya.timer.once(1800, this, this.animGameFailShow, ["norelifecount"]);
        }
    };
    Game.prototype.minus = function (t) {
        this.levelCount.minus(t),
            this.updatePgs();
    };
    Game.prototype.plus = function (t) {
        this.levelCount.plus(t),
            this.updatePgs();
    };
    Game.prototype.begin = function (t) {
        t == 0 && (this.reLifeCount = 0,
            this.relifeTryFu = 0),
            this.waveIndex = -1,
            this.waveCount = Cfg.waveValue.length,
            this.buffObstructCount = 2,
            this.nextWave(),
            this.nextBug(),
            this._setPgs(1);
        //console.log("begin***********"+this.guideStep);
        if (this.playMode == 0 && SV.ME.level < 2 && !SV.ME.isDadian(2)) {
            this.guideStep = GuideUI.GUIDE_STEP2;
            GuideUI.ME.ShowGuideByStep(GuideUI.GUIDE_STEP2);
        }
    };
    Game.prototype.nextWave = function () {
        this.waveIndex++,
            1 == SV.ME.level && 1 == this.waveIndex, // && Laya.timer.once(1e3, this, this.guide2),
            this.waveIndex < this.waveCount && this.updatePgs();
    };
    Game.prototype.updatePgs = function () {
        this._setPgs(Cfg.levelCount.divPresent(this.levelCount));
    };
    Game.prototype._setPgs = function (t) {
        this.isLost || (t = Math.max(0, Math.min(1, t)),
            //t = laya.utils.Ease.quadOut(1 - t, 1, -1, 1),
            t = -(-1) * (t /= 1) * (t - 2) + 1,
            this.gui.bar.width = (t) * 606,
            this.gui.bar_feiji.x = (t) * 606 - 30,
            this.gui.bar_feiji.x > -30 ? this.gui.bar_feiji.alpha = 1 : this.gui.bar_feiji.alpha = 0,
            this.gui.itLeft.text = Math.ceil(100 * (t)) + "%"
        //this.itLeft.setText(Math.ceil(100 * (t)) + "%") //"剩余陨石 " + 
        );
    };
    Game.prototype.nextBug = function () {
        if (Planet.countAll > Game.planetMaxCount)
            Laya.timer.once(1e3, this, this.nextBug);
        else if (this.index++, this.index < this.count) {
            var t = Cfg.wave[this.index];
            if (null == t)
                this.nextBug();
            else if (t.lastWave)
                Cfg.isBossLevel(SV.ME.level) ? (
                //MSound.ME.playSoundLimit("w_boss"),
                this.playMode == 0 && this.showTip("boss")
                // this.changeBG()
                ) : (this.playMode == 0 && (MSound.ME.playSoundLimit("w_xingqiu"),
                    this.showTip("more"))),
                    Laya.timer.once(2e3, this, this.nextBug);
            else if (t.wait)
                Laya.timer.loop(1e3, this, this.checkWaveEnd);
            else {
                var s = 1.57 + (Math.random() > .5 ? .5 : -.5) * (Math.random() + .1);
                this.addBug(false, t.type, t.size, (MStage.ME.GetWinWidth() + 100) * Math.random() - 50, -100, t.life, Math.cos(s), Math.sin(s)),
                    Laya.timer.once(t.delay, this, this.nextBug);
            }
        }
        else if (this.playMode == 1) {
            //Game.isGameStart = false,
            SV.ME.level++,
                SV.ME.level = Math.min(999, SV.ME.level),
                Cfg.initLevel(Math.min(999, SV.ME.level * 5)),
                this._setPgs(0),
                this.gui.itLeft.text = "0%",
                this.gui.nowLv.text = Lan.G(1015, [SV.ME.level]),
                this.gui.bocilb.text = Lan.G(6010, [SV.ME.level]),
                MSound.ME.playSoundLimit("w_xingqiu"),
                TipRich.ME.showT(Lan.G(1095)).doshow(),
                this.coinCountRate.setData([0, 1, 2, 3], [SV.ME.lDamage / SV.ME.level * 100, SV.ME.lDamage / SV.ME.level * 100, SV.ME.level / SV.ME.lDamage * 100, SV.ME.level / SV.ME.lDamage * 100 + 50 * this.lostCount]);
            Laya.timer.once(2e3, this, this.start, [1]);
        }
        else {
            var oldlvl = SV.ME.level;
            if (!Game.isGameStart)
                return;
            Game.isGameStart = false,
                this.gui.bar.width = 0,
                this.gui.bar_feiji.alpha = 0,
                this.gui.bar_feiji.x = -30,
                this._setPgs(0),
                // HB.RenWu(HuiBao.RenWu_Key.onCompleted, SV.ME.level.toString()),
                SV.ME.level++,
                SV.ME.level = Math.min(999, SV.ME.level),
                // HB.Account_Level(SV.UID, SV.ME.level),
                TK.user_set({ level: SV.ME.level }),
                this.firebaselv(),
                SV.ME.level <= 50 ? SV.ME.doDadianlv(SV.ME.level) : "",
                this.gui.nowLv.text = Lan.G(1015, [SV.ME.level]),
                this.gui.bocilb.text = Lan.G(6010, [SV.ME.level]),
                //ltt
                AchievementWnd.ME.setAch(5, 1, SV.ME.level - 1),
                //SV.ME.level > oldlvl ? SV.ME.boxLevel = 0 : "",
                SV.ME.dosave(false, 66),
                //this.itLeft.setText("100%"), //this.itLeft.setText("剩余陨石 0%"),
                this.gui.itLeft.text = "100%",
                this.animGameEndShow();
        }
    };
    Game.prototype.firebaselv = function () {
        var _passlv = SV.ME.level - 1;
        var _passtk = AdsManager.adjust_level(_passlv);
        if (_passtk && _passtk.length > 0) {
            AdsManager.logAdjustEvent(_passtk);
            //TK.firebase("level_" + _passlv, {});
            // TK.firebase("lv", { "level": "lv_" + _passlv }); //
        }
    };
    Game.prototype.Play_Music = function (istat) {
        if (istat == 0) {
            MSound.ME.playMusic("w_main_bgm");
        }
        else {
            MSound.ME.playMusic("music_" + CM.Get_Random(1, 3).toString());
        }
    };
    Game.prototype.checkWaveEnd = function () {
        for (var t = 0, e = 0; e < Planet.countAll; e++)
            t += Planet.all[e].level;
        this.waveIndex == this.waveCount - 1 ?
            0 == Planet.countAll && (this.gui.bar.width >= 606 && (console.log("Check Speed"),
                //this.itLeft.setText("100%"),  //this.itLeft.setText("剩余陨石 0%")
                this.gui.bar_feiji.x = 575,
                this.gui.bar_feiji.alpha = 1,
                this.gui.itLeft.text = "100%",
                this.playMode == 0 && this.setCtrlEnable(false),
                this._setPgs(0)),
                Laya.timer.once(1e3, this, this.nextBug),
                Laya.timer.clear(this, this.checkWaveEnd)) :
            t <= 2 && (this.nextWave(),
                Laya.timer.clear(this, this.checkWaveEnd),
                this.nextBug());
    };
    Game.prototype.onMouseDown = function (t) {
        t && t.touches && t.touches.length > 0 ? (this.startMouseX = t.touches[0].stageX, this.startMouseY = t.touches[0].stageY) : (this.startMouseX = Laya.stage.mouseX, this.startMouseY = Laya.stage.mouseY),
            this.isMouseDown = true,
            this.pStartX = this.plane.x,
            this.pStartY = this.plane.y,
            this.startR = this.plane.rad,
            this.plane.setShoot(true),
            this.setTimeScale(true);
    };
    Game.prototype.onMouseMove = function (t) {
        this.isMouseDown && (t.touches && t.touches.length > 0 ? (this.resultX = 1 * (t.touches[0].stageX - this.startMouseX) + this.pStartX,
            this.resultY = 1 * (t.touches[0].stageY - this.startMouseY) + this.pStartY) : (this.resultX = 1 * (Laya.stage.mouseX - this.startMouseX) + this.pStartX,
            this.resultY = 1 * (Laya.stage.mouseY - this.startMouseY) + this.pStartY),
            this.resultX = Math.max(this.BL + this.plane.r, Math.min(this.BR - this.plane.r, this.resultX)),
            this.resultY = Math.max(this.BT + this.plane.r, Math.min(this.BB - this.plane.r, this.resultY)));
        //console.log("onMouseMove***",this.resultY);
        if (this.resultX > this.pStartX && this.guideStep == GuideUI.GUIDE_STEP2)
            GuideUI.ME.gui.rightImg.visible = false;
        if (this.resultX < this.pStartX && this.guideStep == GuideUI.GUIDE_STEP2)
            GuideUI.ME.gui.leftImg.visible = false;
        if (this.guideStep == GuideUI.GUIDE_STEP2 && !GuideUI.ME.gui.leftImg.visible && !GuideUI.ME.gui.rightImg.visible) {
            GuideUI.ME.OnGuideCom(this.guideStep);
            this.guideStep = 0;
        }
    };
    Game.prototype.onMouseUp = function (t) {
        t.touches && t.touches.length > 0 || (this.resultX = this.plane.x,
            this.resultY = this.plane.y,
            this.isMouseDown = false,
            this.plane.setShoot(false),
            //console.log("onMouseUp***", this.resultY),
            this.setTimeScale(false));
    };
    Game.prototype.addBug = function (t, i, s, n, a, h, r, o) {
        var l;
        var ii = parseInt(i);
        //var ii = CM.Get_Random(1, 12);
        // console.log(ii);
        //ii =12;
        switch (ii) {
            case 1:
                l = new Planet1_Default();
                break;
            case 2:
                l = new Planet2_FaseMove();
                break;
            case 3:
                l = new Planet3_LinkLine();
                break;
            case 4:
                l = new Planet4_FanTan();
                break;
            case 5:
                l = new Planet5_MakeSlow();
                break;
            case 6:
                l = new Planet6_Blood();
                break;
            case 7:
                l = new Planet7_TunShi();
                break;
            case 8:
                l = new Planet8_Boom();
                break;
            case 9:
                l = new Planet9_JieHe();
                break;
            case 10:
                l = new Planet10_ZuiZhong();
                break;
            case 11:
                l = new Planet11_Children();
                break;
            case 12:
                l = new Planet12_HD();
                break;
            default:
                l = new Planet2_FaseMove();
                break;
        }
        l.type = i,
            l.setLevel(s),
            l.xDir = r,
            l.yDir = o,
            l.setLife(h),
            l.x = n,
            l.y = a,
            l.send(),
            l.fast(),
            5 == l.level && (l.x = Game.centerX),
            Planet.add(l);
    };
    // public flashBoom(t, e, i) {
    // 	this.gui.guang.visible = true,
    // 		this.gui.guang.alpha = 1,
    // 		this.gui.guang.x = t,
    // 		this.gui.guang.y = e,
    // 		this.gui.guang.scale(i, i, true),
    // 		laya.utils.Tween.to(this.gui.guang, {
    // 			alpha: 0
    // 		},
    // 			800);
    // }
    Game.prototype.shack = function (t, e) {
        if (e === void 0) { e = 2; }
        this.sDis = t,
            this.isShack = true,
            this.shackCount = e,
            this.shackTime = 0;
    };
    Game.prototype.update = function () {
        if (Game.isGameStart) {
            // //背景根据飞机位置缓慢移动
            // this.bgOffX += .01 * ((Game.centerX - this.plane.x) / Game.centerX * 100 - 100 - this.bgOffX);
            // this.bgOffY += .01 * ((Game.centerY - this.plane.y) / Game.centerY * 100 - 100 - this.bgOffY);
            // this.gui.bg.pos(this.bgOffX, this.bgOffY, true);
            // this.gamebgMoveSpeed--;
            // if (this.gamebgMoveSpeed <= 0) {
            // 	this.gamebgMoveSpeed = 500;
            // 	this.gamebgMove = 0 - this.gamebgMove;
            // }
            // //console.log("this.gamebgMove ", this.gamebgMove, this.gamebgMoveSpeed);
            // this.gui.bg.rotation += this.gamebgMove;
            this.gui.bgyun.y += 35;
            if (this.gui.bgyun.y > 2000) {
                this.gui.bgyun.y = -400;
            }
            this.gui.bgyunshi.y += 8;
            if (this.gui.bgyunshi.y > 2000) {
                this.gui.bgyunshi.y = -600;
                var bgyunshix = CM.Get_Random(1, 10);
                if (bgyunshix % 2 == 1) {
                    this.gui.bgyunshi.x = 0;
                }
                else {
                    this.gui.bgyunshi.x = 550;
                }
                var pic = CM.Get_Random(1, 6);
                this.gui.bgyunshi.skin = "ui/ss_" + pic + ".png";
            }
            // //双背景上下移动
            // //背景容器每帧向下移动1像素
            // this.gui.bg.x = this.bgOffX;
            this.gui.bg.y += 5;
            //如果背景图到了下面不可见，立即调整位置到上面循环显示
            if (this.gui.bg1.y + this.gui.bg.y >= MStage.ME.GetWinHeight()) {
                this.gui.bg1.y -= MStage.ME.GetWinHeight() * 2;
            }
            if (this.gui.bg2.y + this.gui.bg.y >= MStage.ME.GetWinHeight()) {
                this.gui.bg2.y -= MStage.ME.GetWinHeight() * 2;
            }
            //console.log("gameupdate//////", Game.time, this.wingSkillTime, this.plane.wingLastTime)
        }
        if ((Game.isGameStart || this.playMode == 1) && this.gui.wingskill2.visible) {
            if (this.plane.wingAtkState == 1 && this.wingSkillTime != 0) {
                this.wingSkillPgs.setPgs(1);
                this.gui.wingskill.play(0, true);
                this.wingSkillTime = 0;
            }
            if (this.plane.wingAtkState == 0) {
                this.wingSkillTime == 0 && (this.wingSkillTime = Game.time, this.gui.wingskill2.alpha = 1, this.gui.wingskill.stop());
                Game.time - this.wingSkillTime < this.plane.wingDelayTime && this.wingSkillPgs.setPgs((Game.time - this.wingSkillTime) / this.plane.wingDelayTime);
            }
        }
        if (this.isShack) {
            if (this.shackTime--) {
                this.sBi = this.shackTime / this.shackDura;
                this.layerAll.pos(this.sx * this.sBi, this.sy * this.sBi, true);
            }
            else {
                if (this.shackCount--) {
                    this.shackTime = this.shackDura = 5;
                    this.sx = (Math.random() > .5 ? 1 : -1) * (Math.random() * this.sDis + 5);
                    this.sy = (Math.random() > .5 ? 1 : -1) * (Math.random() * this.sDis + 5);
                    this.layerAll.pos(this.sx, this.sy, true);
                }
                else {
                    this.isShack = false;
                }
            }
        }
        Game.time += Game.dTime;
        switch (this.mode) {
            case 2:
                //console.log("plane---y---",this.plane.y,this.resultY);
                var t = this.resultX - this.plane.x, i = this.resultY - this.plane.y;
                this.plane.x += t * this.plane.speed,
                    this.plane.y += i * this.plane.speed;
                break;
            case 0:
                this.plane.y > -3e3 && (this.plane.y += this.pUpSpeed);
                break;
        }
        this.plane.update(),
            this.plane.draw(),
            Buttle.updateAll(),
            Planet.updateAll(),
            Buff.updateAll(),
            ImgLink.updateAll(),
            FxPlus.updateAll(Game.time),
            this.coinScale2 > .8 && (this.coinScale2 -= .1, this.gui.iMoney2.scale(this.coinScale2, this.coinScale2, true)),
            this.zuanScale > 1 ? (this.zuanScale -= .2, this.gui.zuanimg.scale(this.zuanScale, this.zuanScale, true)) : (this.zuanScale = 1, this.gui.zuanimg.scale(this.zuanScale, this.zuanScale, true)),
            Game.time > this.delayUpdate && (this.delayUpdate = Game.time + .5, this.boomCount > 0 && this.boomCount--);
        //WM.onUpdate();
        if (CD.Platform == Platform.MGC_H5) {
            MgcM.onUpdate();
        }
    };
    Game.prototype.showTipLock = function (t) {
        //TipRich.ME.showTTT("击败 ", "第 " + t + " 关", " 解锁", "#ffffff", "#43fed9").doshow();
        TipRich.ME.showTTT(Lan.G(1021, [t]), "", "", "#ffffff", "#43fed9").doshow();
    };
    Game.prototype.onResize = function () {
        var t = MStage.ME.GetWinHeight(), i = MStage.ME.GetWinWidth();
        this.layerAll.width = i,
            this.layerAll.height = t,
            this.gui.height = t,
            this.gui.width = i,
            this.BL = this.border,
            this.BR = i - this.border,
            this.BT = this.border,
            this.BB = t - this.border,
            this.BB_100 = t - 100,
            Game.centerX = Math.round(0.5 * i),
            Game.centerY = Math.round(0.5 * t),
            Game.hideX = i + 10,
            Game.hideY = t + 10,
            this.gui.btm.y = t - 171,
            this.gui.brB.width = i,
            this.gui.brB.y = t,
            this.gui.brT.width = i,
            this.gui.brL.width = t,
            this.gui.brR.width = t,
            this.gui.brR.x = i,
            //  this.gui.bg.size(i + 200, t + 200);//ltt 
            //console.log("this.gui.bg.size", i, t);
            this.gui.bg.width = i + this.bgwidth;
        this.gui.topback1.x = this.gui.topback2.x = i / 2;
        this.gui.topback1.width = this.gui.topback2.width = i / 2;
        //this.gui.topbg1.x = this.gui.topbg2.x = i / 2;
        //this.gui.topbg1.width = this.gui.topbg2.width = i / 2 - 25;
        this.gui.topBox.refresh();
        this.gui.wingskill1.y = t;
        //this.gui.jinbibox.width = this.gui.zuanbox.width = i / 2 - 200;
    };
    Game.prototype.CheckGuideStep3 = function () {
        if ((this.guideStep == GuideUI.GUIDE_STEP3 || this.guideStep == GuideUI.GUIDE_STEP5 || this.guideStep == GuideUI.GUIDE_STEP6 || this.guideStep == GuideUI.GUIDE_STEP7) && this.gui.p1.visible) {
            GuideUI.ME.OnNextGuide();
        }
    };
    // public CheckGuideStep3(): void {
    // 	if ((this.guideStep == GuideUI.GUIDE_STEP3 || this.guideStep == GuideUI.GUIDE_STEP5 || this.guideStep == GuideUI.GUIDE_STEP6 || this.guideStep == GuideUI.GUIDE_STEP7) && UpWeaponWnd.ME.gui.visible) {
    // 		GuideUI.ME.OnNextGuide();
    // 	}
    // }
    Game.prototype.CheckGuideStep4 = function () {
        this.fuUpCount = 0;
        if (this.guideStep == GuideUI.GUIDE_STEP4 && this.gui.p2.visible) {
            GuideUI.ME.OnNextGuide();
        }
    };
    // public CheckGuideStep4(): void {
    // 	this.fuUpCount = 0;
    // 	if (this.guideStep == GuideUI.GUIDE_STEP4 && UpWeaponWnd.ME.gui.visible) {
    // 		GuideUI.ME.OnNextGuide();
    // 	}
    // }
    Game.prototype.ShowSettingWnd = function () {
        SettingWnd.ME.doshow();
    };
    Game.prototype.StartEndlessGame = function () {
        this.StartPlay(1);
    };
    Game.prototype.playVideoLoadingEff = function (oloadingvideo, oloadvideoeff, oloadlingtxt, okBut) {
        // this.loadingvideo = oloadingvideo;
        // this.loadvideoeff = oloadvideoeff;
        // this.loadlingtxt = oloadlingtxt;
        // this.okBut = okBut;
        // if (!this.loadingvideo.visible) {
        // 	this.loadvideoeff.source = CD.Game.Animations[0];
        // 	this.loadvideoeff.loop = true;
        // 	this.loadvideoeff.play();
        // 	this.loadvideoeff.visible = true;
        // 	this.loadlingtxt.text = Lan.G(1072);
        // 	this.loadingvideo.visible = true;
        // 	Laya.timer.clear(this, this.setup);
        // 	Laya.timer.loop(500, this, this.setup);
        // 	//console.log(this.loadlingtxt.text.length);
        // }
        // UIHelper.dohide(this.okBut);
        this.ShowLoadMask(true);
    };
    Game.prototype.setup = function () {
        this.loadlingtxt.text = this.loadlingtxt.text + ".";
        if (this.loadlingtxt.text.indexOf("....") > 0) {
            this.loadlingtxt.text = Lan.G(1072);
        }
    };
    Game.prototype.CloseVideoEff = function () {
        // if (this.loadingvideo == null) return;
        // if (this.loadingvideo.visible) {
        // 	this.loadvideoeff.stop();
        // 	this.loadingvideo.visible = false;
        // 	Laya.timer.clear(this, this.setup);
        // 	AdsManager.CloseRewardVideoAds();
        // 	UIHelper.doshow(this.okBut);
        // }
        // //清理延时拉起状态
        // AdsManager.DelContinueTimer();
        // this.loadingvideo = null;
        // this.loadvideoeff = null;
        // this.loadlingtxt = null;
        // this.okBut = null;
        this.ShowLoadMask(false);
    };
    Game.prototype.ShowLoadMask = function (b, t) {
        if (t === void 0) { t = 0; }
        b ? LoadMask.ME.doshow(t) : (LoadMask.ME.dohide(), AdsManager.DelContinueTimer());
    };
    Game.prototype.CheckInsertAds = function (reason) {
        //console.log("CheckInsertAds111*******" + reason + "***" + AdsManager.m_nShareForm);
        if (CD.Platform == Platform.AD_H5) {
            console.log("拉起前贴片广告");
            Laya.Browser.window.gameapi.showPreroll(function () {
                console.log("关闭前贴片广告");
            });
        }
        if (SV.ME.buyNoXp == 1 || (CD.subScribeType > 0 && CD.BanBen == BanBen.guoji))
            return;
        if (ParamOnline.ME.getNumber("IsOpenVideo", 1) != 1)
            return;
        //console.log("CheckInsertAds222*******"+reason);
        if (this.isVideo > 100)
            return;
        //console.log("CheckInsertAds333*******"+reason);
        //if (CD.Platform != Platform.Android && CD.Platform != Platform.Ios) return;
        //console.log("CheckInsertAds444*******"+reason);
        var reaid = 100;
        switch (reason) {
            case "jiesuan1":
                //通关奖励，不点击3倍（>7级，2关1次，>50级，）
                var nopen = ParamOnline.ME.getNumber("insertads_tgjl", 1);
                var nlv = ParamOnline.ME.getNumber("insertads_tgjllv", 8);
                var nval = ParamOnline.ME.getNumber("insertads_jsinterval", 2);
                var qzlvl = ParamOnline.ME.getNumber("insertads_jsqzlvl", 50);
                //console.log("CheckInsertAds****jiesuan1***"+nopen+"***"+nlv+"***"+nval+"***"+SV.ME.level+"***"+SV.ME.jsInsertAdsNum);
                if (this.isjiesuanadv && nopen == 1 && ((SV.ME.level >= nlv && SV.ME.jsInsertAdsNum >= nval) || SV.ME.level > qzlvl)) {
                    reaid = 101;
                }
                else {
                    return;
                }
                break;
            case "leaveCoinTK1":
                //领取离线金币时，在弹出界面内选择不看视频
                if (ParamOnline.ME.getNumber("insertads_lxjb", 1) == 1) {
                    reaid = 102;
                }
                else {
                    return;
                }
                break;
            case "relifttimeover":
                //死亡没点复活
                if (ParamOnline.ME.getNumber("insertads_lxjb", 1) == 1) {
                }
                else {
                    return;
                }
                break;
            case "fuUpAds":
                if (ParamOnline.ME.getNumber("insertads_fwq", 10) > 0) {
                    reaid = 103;
                }
                else {
                    return;
                }
                break;
            case "scaletime":
                if (ParamOnline.ME.getNumber("insertads_pause", 50000) > 0) {
                    reaid = 104;
                }
                else {
                    return;
                }
                break;
            case "achieveAds":
                if (ParamOnline.ME.getNumber("insertads_achieve", 5) > 0) {
                    reaid = 105;
                }
                else {
                    return;
                }
                break;
            case "loginAds":
                if (ParamOnline.ME.getNumber("insertads_login", 100) > 0) {
                    reaid = 106;
                }
                else {
                    return;
                }
                break;
            case "signin1":
                if (ParamOnline.ME.getNumber("insertads_signin", 1) > 0) {
                    reaid = 107;
                }
                else {
                    return;
                }
                break;
            default:
                return;
        }
        if (CD.Platform == Platform.H5 && CD.PingTai == PingTai.QTT_H5) {
            //趣头条互动广告
            Qtt_H5_Manager.ME.OnShowHDReward();
        }
        // var dnow = new Date();
        // var dlast = new Date("2019/1/1");
        // var dtemp;
        // if (SV.ME.videoAdsTime != "")
        // 	dlast = new Date(SV.ME.videoAdsTime);
        // if (SV.ME.insertAdsTime != "") {
        // 	dtemp = new Date(SV.ME.insertAdsTime);
        // 	if (dtemp.getTime() - dlast.getTime() > 0)
        // 		dlast = dtemp;
        // }
        // var nnum = ParamOnline.ME.getNumber("insertads_delay", 30);
        // //console.log("CheckInsertAds555*******"+dnow.toString()+"***"+dlast.toString());
        // if (dnow.getTime() - dlast.getTime() > nnum * 1000) {
        // 	this.isVideo = reaid;
        // 	if(CD.Platform == Platform.H5 && CD.PingTai == PingTai.QTT_H5)
        // 	{
        // 		//趣头条互动广告
        // 		Qtt_H5_Manager.ME.OnShowHDReward();
        // 	}
        // 	else
        // 	{
        // 		AdsManager.showInterstitialAds(AdsManager.adsConfig.Interstitial_id, reason);
        // 	}
        // }
    };
    Game.prototype.OnSignIn = function (day, btn, nmult) {
        if (nmult === void 0) { nmult = 1; }
        console.log(day + "====");
        if (day > SV.ME.loginNum) {
            //条件未达到
            return false;
        }
        if (Cfg.IsGetSignReward(day)) {
            //已领取
            return false;
        }
        var szsign = SV.ME.signIn.split(",");
        var szreward = CD.Game.SignIn[day.toString()].reward.split(",");
        var point = btn.localToGlobal(new Laya.Point(0, 0));
        szsign.push(day.toString());
        SV.ME.loginTime = CM.Get_Convert_Date(new Date());
        SV.ME.signIn = szsign.join(",");
        switch (szreward[0]) {
            case "1": //发金币
                var money = new math_BigUInt();
                money.setByShortString(szreward[1]);
                this.animAddMoney(money.mult(nmult), point.x, point.y, 20, "signin" + nmult.toString());
                break;
            case "2": //解锁武器
                SV.ME.tipFU = true;
                this.SetNewFu(Cfg.GetSignWeaponId(), true);
                this.weaponList();
                break;
        }
        if (Cfg.IsGetSignReward(7)) {
            UIHelper.dohide(this.gui.signbtn);
            this.ResetFuncBtnPos();
        }
        var nopen = ParamOnline.ME.getNumber("sginin_open", 15);
        this.gui.signTip.visible = SV.ME.level > nopen && !Cfg.IsGetSignReward(SV.ME.loginNum);
        //TK.track("signreward", { "lv": SV.ME.level, "day": day });
        return true;
    };
    Game.prototype.SetNewFu = function (wid, t) {
        var npos = SV.ME.szNewFwq.indexOf(wid);
        var nmark = 0;
        if (t && npos == -1) {
            SV.ME.szNewFwq.push(wid);
            nmark = 1;
        }
        if (!t && npos != -1) {
            SV.ME.szNewFwq.splice(npos, 1);
            nmark = 1;
        }
        nmark == 1 && SV.ME.dosave(false, 67);
    };
    Game.prototype.ShowBuffDesc = function (state) {
        // state ? (
        // 	BuffDescWnd.ME.doshow(),
        // 	Game.isGameStart ? (this.setCtrlEnable(false),
        // 		UIHelper.doshow(this.gui.black),
        // 		this.gui.black.alpha = .6,
        // 		Laya.timer.clear(this, this.checkWaveEnd),
        // 		Laya.timer.clear(this, this.nextBug),
        // 		Laya.timer.clear(this, this.update)) : ""
        // ) : (
        // 		BuffDescWnd.ME.dohide(),
        // 		UIHelper.dohide(this.gui.black),
        // 		//console.log("ShowBuffDesc*******",Game.isGameStart,this.nStartState),
        // 		this.nStartState == 1 ? (
        // 			this.setCtrlEnable(true),
        // 			Laya.timer.loop(1e3, this, this.checkWaveEnd),
        // 			this.plane.setShoot(true),
        // 			Laya.timer.loop(1, this, this.update)) : ""
        // 	);
    };
    Game.prototype.OpenBox = function () {
        var nnum = Cfg.GetItemNum(1001);
        var nlimit = new math_BigUInt().one().mult2(5);
        if (nnum.biggerequal(nlimit)) {
            Cfg.CutItem(1001, nlimit, "openbox");
            BoxRewardWnd.ME.ResetUI();
            //新公式= math.min(金币价值数值*500+INT((关卡数 - 10)^2)*400,关卡数*15000+金币价值数值*2700)
            var lvl1 = new math_BigUInt().setByShortString((Math.floor(Math.pow(SV.ME.level - 10, 2)) * 400).toString());
            //console.log("openbox***",lvl.getShortString(), Cfg.bJiaZhi.getShortString());
            var lvl2 = new math_BigUInt().setByShortString((SV.ME.level * 15000).toString());
            var nmoney1 = Cfg.bJiaZhi.clone().mult2(500).plus(lvl1);
            var nmoney2 = Cfg.bJiaZhi.clone().mult2(2700).plus(lvl2);
            var nmoney = nmoney1.bigger(nmoney2) ? nmoney2.clone() : nmoney1.clone();
            this.animAddMoney(nmoney, MStage.ME.cx, MStage.ME.cy, 20, "openbox");
        }
    };
    Game.prototype.CheckBaoXiangTip = function () {
        var nnum = Cfg.GetItemNum(1001);
        var nlimit = new math_BigUInt().one().mult2(5);
        var nopen = ParamOnline.ME.getNumber("baoxiang_open", 35);
        if (nnum.biggerequal(nlimit) && SV.ME.level > nopen)
            this.gui.baoxiangtip.visible = true;
        else
            this.gui.baoxiangtip.visible = false;
    };
    Game.prototype.OnNextDay = function () {
        //console.log("onnextday********");
        this.SendSubscribDiamond();
    };
    Game.prototype.PlayItemTip = function (s, t) {
        // var lb = new Laya.Label();
        // if(t == 4 || t == 5 || t == 6)
        // 	lb.font = "font_40_orange";
        // else
        // 	lb.font = "font_40_blue";
        // lb.anchorX = lb.anchorY = .5;
        // lb.text = s;
        // lb.scale(0, 0, true);
        // this.gui.addChild(lb);
        // lb.pos(Plane.ME.x, Plane.ME.y - 150);
        // Laya.Tween.to(lb, {scaleX : 1.5, scaleY : 1.5}, 500, Laya.Ease.linearNone, Laya.Handler.create(this, ()=>{
        // 	Laya.Tween.to(lb, {scaleX : 0, scaleY : 0}, 800, Laya.Ease.linearNone, Laya.Handler.create(this, ()=>{
        // 		lb.destroy(true);
        // 	}), 2000);
        // }))
    };
    Game.prototype.EndlessBuffTip = function (t, m) {
        var _this = this;
        if (this.playMode != 1)
            return;
        if (!m && SV.ME.curFu < 0)
            return;
        var tipobj = Laya.Pool.getItemByClass("BuffTip", ui.BuffTipUI);
        this.gui.addChild(tipobj);
        this.bufftiplist.push(tipobj);
        tipobj.bg.skin = m ? "ui/jinengkuang1.png" : "ui/jinengkuang.png";
        switch (t) {
            case 1: //火力
                tipobj.icon.skin = "ui/skill_fire.png";
                tipobj.numlb.text = m ? "+" + SV.ME.lDamage : "+" + SV.ME.levelFuDamage[SV.ME.curFu];
                break;
            case 2: //射速
                tipobj.icon.skin = m ? "ui/skill_speed.png" : this.GetFuIcon(SV.ME.curFu);
                tipobj.numlb.text = m ? "+" + SV.ME.lCount : "+" + SV.ME.levelFuCount[SV.ME.curFu];
                break;
            case 8: //金币价值
                tipobj.icon.skin = "ui/skill_jiazhi.png";
                tipobj.numlb.text = "+" + SV.ME.lJiaZhi;
                break;
        }
        tipobj.pos(180, MStage.ME.GetWinHeight() - 390);
        tipobj.alpha = 1;
        Laya.Tween.to(tipobj, { alpha: 0 }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, this.RemoveBuffTip, [tipobj]), 1000);
        if (this.bufftiplist.length > 2) {
            tipobj = this.bufftiplist.shift();
            this.RemoveBuffTip(tipobj);
        }
        if (this.bufftiplist.length > 1) {
            tipobj = this.bufftiplist[0];
            Laya.Tween.clearAll(tipobj);
            Laya.Tween.to(tipobj, { y: MStage.ME.GetWinHeight() - 550 }, 300, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                Laya.Tween.to(tipobj, { alpha: 0 }, 500, Laya.Ease.linearNone, Laya.Handler.create(_this, _this.RemoveBuffTip, [tipobj]), 500);
            }));
        }
    };
    Game.prototype.RemoveBuffTip = function (obj) {
        Laya.Tween.clearAll(obj);
        obj.alpha = 1;
        var npos = this.bufftiplist.indexOf(obj);
        //console.log("RemoveBuffTip===", npos);
        if (npos != -1) {
            this.bufftiplist.splice(npos, 1);
        }
        this.gui.removeChild(obj);
        Laya.Pool.recover("BuffTip", obj);
    };
    Game.prototype.GetFuIcon = function (t) {
        var str = "";
        switch (t) {
            case 1:
            case 5:
            case 7:
            case 8:
            case 10:
                str = "ui/skill_range.png";
                break;
            case 0:
            case 6:
                str = "ui/skill_pinlv.png";
                break;
            case 2:
            case 3:
                str = "ui/skill_qiangdu.png";
                break;
            default:
                str = "ui/skill_speed.png";
                break;
        }
        return str;
    };
    Game.prototype.ShowExchangeWnd = function (ntype, isani) {
        //console.log("ShowExchangeWnd", ntype, GuideUI.ME.isGuide)
        if (isani === void 0) { isani = true; }
        switch (ntype) {
            case 0: //兑换金币
            case 1: //兑换体力
                ExchangeWnd.ME.doshow(ntype);
                break;
            case 2: //商城
                ShopUI.ME.doshow(isani); //HMS
                //TipRich.ME.showT(Lan.G(1041)).doshow(); //HMS new
                //isani && this.HideFuncBtn();
                break;
            case 3: //兑换无尽模式次数
                ExchangeWnd.ME.doshow(ntype);
                break;
        }
    };
    Game.prototype.SetSubscribeShow = function () {
        //HMS 原来
        UIHelper.showHide(CD.subScribeType == 0 && CD.BanBen == BanBen.guoji, this.gui.subscribeBtn);
        //HMS new
        UIHelper.showHide(false, this.gui.subscribeBtn);
        this.ResetFuncBtnPos();
    };
    Game.prototype.SendSubscribDiamond = function () {
        if (CD.subScribeType > 0) {
            Game.ME.animAddGold(10, Game.centerX, Game.centerY, 10, "subscribe");
            TipRich.ME.showT(Lan.G(7015)).doshow();
        }
    };
    Game.prototype.CheckSubScription = function () {
        if (CD.BanBen == BanBen.guoji && this.nStartState == 0) {
            if (!IAPManager.bSubcription)
                return;
            if (SV.ME.level > ParamOnline.ME.getNumber("dingyue_level", 6) && CD.subScribeType == 0) {
                var stime = ParamOnline.ME.getdata("dingyue_time");
                var dnow = new Date();
                var dlast, ntemp, nlimit;
                nlimit = ParamOnline.ME.getNumber("dingyue_time", 6);
                if (stime == undefined || stime == "") {
                    SubScriptionWnd.ME.doshow(1);
                    stime = CM.Get_Convert_Date(dnow);
                    ParamOnline.ME.setdata("dingyue_time", stime);
                    this.loginTipCheck = true;
                }
                else {
                    dlast = new Date(stime);
                    ntemp = dnow.getTime() - dlast.getTime();
                    if (ntemp > nlimit * 60 * 60 * 1000) {
                        SubScriptionWnd.ME.doshow(1);
                        stime = CM.Get_Convert_Date(dnow);
                        ParamOnline.ME.setdata("dingyue_time", stime);
                        this.loginTipCheck = true;
                    }
                }
            }
        }
        if (this.loginTipCheck)
            return; //玩家上线先判断订阅，如果没到时间，判断签到
        var nopen = ParamOnline.ME.getNumber("sginin_open", 15);
        if (SV.ME.level > nopen && !Cfg.IsGetSignReward(7) && !Cfg.IsGetSignReward(SV.ME.loginNum)) {
            //签到开启，没有全领完，今天的没领
            SignInWnd.ME.doshow();
            this.loginTipCheck = true;
        }
    };
    Game.prototype.CheckBulletTip = function () {
        var i, nnum;
        var data;
        var szinfo = CD.Game.BulletInfo;
        for (i = 0; i < szinfo.length; i++) {
            data = CD.Game.ItemInfo[szinfo[i]];
            if (szinfo[i] > 1100 && SV.ME.level == (data.needlevel + 1)) {
                nnum = parseInt(Cfg.GetItemNum(szinfo[i]).getString());
                if (nnum == 0 && this.nTipButtle != szinfo[i]) {
                    this.isOpenBullet = false;
                    this.nTipButtle = szinfo[i];
                    break;
                }
            }
        }
        var szinfo = CD.Game.WingInfo;
        for (i = 0; i < szinfo.length; i++) {
            data = CD.Game.ItemInfo[szinfo[i]];
            if (szinfo[i] > 1200 && SV.ME.level == (data.needlevel + 1)) {
                nnum = parseInt(Cfg.GetItemNum(szinfo[i]).getString());
                if (nnum == 0 && this.nTipWing != szinfo[i]) {
                    this.isOpenWing = false;
                    this.nTipWing = szinfo[i];
                    break;
                }
            }
        }
    };
    Game.prototype.ResetFuncBtnPos = function () {
        var nstart = 1;
        this.gui.achvbtn.visible && (this.gui.achvbtn.x = MStage.ME.GetWinWidth() - 167 - 180 * nstart, nstart++);
        this.gui.baoxiangbtn.visible && (this.gui.baoxiangbtn.x = MStage.ME.GetWinWidth() - 167 - 180 * nstart, nstart++);
        this.gui.signbtn.visible && (this.gui.signbtn.x = MStage.ME.GetWinWidth() - 167 - 180 * nstart, nstart++);
        this.gui.chargeBtn.visible && (this.gui.chargeBtn.x = MStage.ME.GetWinWidth() - 167 - 180 * nstart, nstart++);
        this.gui.subscribeBtn.visible && (this.gui.subscribeBtn.x = MStage.ME.GetWinWidth() - 167 - 180 * nstart, nstart++);
        this.gui.endlessbtn.visible && (this.gui.endlessbtn.x = MStage.ME.GetWinWidth() - 196 - 20);
    };
    Game.prototype.HideFuncBtn = function () {
        var _this = this;
        this.mode = 1;
        this.uiAnimShow = true;
        Laya.Tween.to(this.plane, { y: MStage.ME.GetWinHeight() - 860 - 400 * MStage.ME.GetScaleY() }, Game.ME.uiAnimTime, Laya.Ease.linearNone, Laya.Handler.create(this, function () { _this.uiAnimShow = false; console.log("HideFuncBtn======"); }));
        //this.resultY = MStage.ME.GetWinHeight() - 860 - 400 / GameMain._Scale_X;
        Laya.Tween.to(this.uiLevel.level, { y: -500 }, Game.ME.uiAnimTime, laya.utils.Ease.backIn);
        Laya.Tween.to(this.gui.shopbtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, laya.utils.Ease.backOut);
        this.gui.achvbtn.visible && (Laya.Tween.to(this.gui.achvbtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, Laya.Ease.backOut));
        this.gui.baoxiangbtn.visible && (Laya.Tween.to(this.gui.baoxiangbtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, Laya.Ease.backOut));
        this.gui.signbtn.visible && (Laya.Tween.to(this.gui.signbtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, Laya.Ease.backOut));
        this.gui.chargeBtn.visible && (Laya.Tween.to(this.gui.chargeBtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, Laya.Ease.backOut));
        this.gui.subscribeBtn.visible && (Laya.Tween.to(this.gui.subscribeBtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, Laya.Ease.backOut));
        this.gui.endlessbtn.visible && (Laya.Tween.to(this.gui.endlessbtn, { x: MStage.ME.GetWinWidth() + 10 }, Game.ME.uiAnimTime, Laya.Ease.backOut));
        UIHelper.dohide(this.gui.settingBtn);
        UIHelper.dohide(this.gui.tapplaybox);
        console.log("HideFuncBtn======");
    };
    Game.prototype.ShowFuncBtn = function () {
        //HMS 原来
        //var nstart = 1;
        //Laya.Tween.to(this.plane, { y: MStage.ME.GetWinHeight() - 650 * MStage.ME.GetScaleY() }, Game.ME.uiAnimTime, Laya.Ease.linearNone, Laya.Handler.create(this, () => { this.mode = 2; }));
        ////this.resultY = Game.centerY + 300 / GameMain._Scale_X;
        //Laya.Tween.to(this.uiLevel.level, { y: Game.centerY - 250 * MStage.ME.GetScaleY() }, Game.ME.uiAnimTime, laya.utils.Ease.backIn);
        //Laya.Tween.to(this.gui.shopbtn, { x: MStage.ME.GetWinWidth() - 13 - 154 }, Game.ME.uiAnimTime, laya.utils.Ease.backOut);
        //this.gui.achvbtn.visible && (Laya.Tween.to(this.gui.achvbtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        //this.gui.baoxiangbtn.visible && (Laya.Tween.to(this.gui.baoxiangbtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        //this.gui.signbtn.visible && (Laya.Tween.to(this.gui.signbtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        //this.gui.chargeBtn.visible && (Laya.Tween.to(this.gui.chargeBtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        //this.gui.subscribeBtn.visible && (Laya.Tween.to(this.gui.subscribeBtn, { x: MStage.ME.GetWinWidth() - 167 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        //this.gui.endlessbtn.visible && (Laya.Tween.to(this.gui.endlessbtn, { x: MStage.ME.GetWinWidth() - 196 - 20 }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        //UIHelper.doshow(this.gui.settingBtn);
        //UIHelper.doshow(this.gui.tapplaybox);
        var _this = this;
        //hms new
        var nstart = 1;
        Laya.Tween.to(this.plane, { y: MStage.ME.GetWinHeight() - 650 * MStage.ME.GetScaleY() }, Game.ME.uiAnimTime, Laya.Ease.linearNone, Laya.Handler.create(this, function () { _this.mode = 2; console.log("ShowFuncBtn======"); }));
        //this.resultY = Game.centerY + 300 / GameMain._Scale_X;
        Laya.Tween.to(this.uiLevel.level, { y: Game.centerY - 250 * MStage.ME.GetScaleY() }, Game.ME.uiAnimTime, laya.utils.Ease.backIn);
        //Laya.Tween.to(this.gui.shopbtn, { x: MStage.ME.GetWinWidth() - 13 - 154 }, Game.ME.uiAnimTime, laya.utils.Ease.backOut);
        this.gui.achvbtn.visible && (Laya.Tween.to(this.gui.achvbtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        this.gui.baoxiangbtn.visible && (Laya.Tween.to(this.gui.baoxiangbtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        this.gui.signbtn.visible && (Laya.Tween.to(this.gui.signbtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        this.gui.chargeBtn.visible && (Laya.Tween.to(this.gui.chargeBtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        this.gui.subscribeBtn.visible && (Laya.Tween.to(this.gui.subscribeBtn, { x: MStage.ME.GetWinWidth() - 0 - 180 * nstart }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        this.gui.endlessbtn.visible && (Laya.Tween.to(this.gui.endlessbtn, { x: MStage.ME.GetWinWidth() - 196 - 20 }, Game.ME.uiAnimTime, Laya.Ease.backOut), nstart++);
        UIHelper.doshow(this.gui.settingBtn);
        UIHelper.doshow(this.gui.tapplaybox);
    };
    Game.prototype.ShowWingSkill = function () {
        this.wingSkillTime = 0;
        UIHelper.doshow(this.gui.wingskill2);
        this.gui.wingskill2.y = Game.centerY + 100 * MStage.ME.GetScaleY();
        var data = CD.Game.ItemInfo[SV.ME.useWingId];
        this.gui.wingskillsp.skin = data.skillicon;
    };
    Game.prototype.PlayWingSkill = function (t) {
        var _this = this;
        switch (t) {
            case 2: //减速
                UIHelper.doshow(this.gui.wingskill1);
                this.gui.wingskill1.y = MStage.ME.GetWinHeight();
                Laya.Tween.to(this.gui.wingskill1, { y: this.gui.wingskill1.height * -1 }, MStage.ME.GetWinHeight() * .7, Laya.Ease.circIn, Laya.Handler.create(this, function () {
                    UIHelper.dohide(_this.gui.wingskill1);
                }));
                break;
        }
    };
    Game.prototype.GamePause = function () {
        if (Laya.timer.scale > 0) {
            this.gui.cover.visible = true;
            this.gui.cover.alpha = 1;
            Laya.timer.scale = 0;
        }
        else {
            Laya.timer.scale = 1;
            this.gui.cover.alpha = 0;
            this.gui.cover.visible = false;
        }
    };
    //暂停
    Game.prototype.onPause = function () {
        MSound.ME && MSound.ME.pauseMusic();
    };
    //恢复
    Game.prototype.onResume = function () {
        MSound.ME && MSound.ME.resumeMusic();
    };
    Game.prototype.rewardAd_H5 = function (sFromType) {
        var _this = this;
        console.log("拉起奖励==sFromType=" + sFromType);
        this.sH5FromType = sFromType;
        //奖励广告
        Laya.Browser.window.gameapi.showReward(function () {
            console.log("激励成功===");
            _this.OnGetAdsOverReward(_this.sH5FromType, "ads");
        }, function () {
            console.log("激励失败===");
        });
    };
    //激励和分享完毕获得奖励
    Game.prototype.OnGetAdsOverReward = function (sShareType, sAdsType) {
        if (sAdsType == "share") {
            //console.log("分享成功");
        }
        else if (sAdsType == "ads") {
            //console.log("激励播放成功");
        }
        //UI.OnWinMsgUI("激励和分享完毕获得奖励=sShareType="+sShareType);
        Game.ME.isVideo = 0;
        switch (sShareType) {
            case "jiesuan": //结算
                Game.ME.collect(Game.ME.gui.btnCollect2);
                break;
            case "relife": //复活
                Game.ME.reLife();
                break;
            case "addtili": //加体力
                Game.ME.addTili();
                break;
            case "lxcoin": //离线金币
                Game.ME.onGetCoinVideoBack();
                break;
            case "relifetryfu": //满级试用
                Game.ME.OnFreeFu();
                break;
            case "baoxiang": //金币宝箱
                BoxRewardWnd.ME.GetReward();
                break;
            case "freezuan": //每日免费领钻石
                ShopUI.ME.AddFreeZuan();
                break;
            case "fwqunlock": //副武器解锁
                Game.ME.SlcSideWeapon();
                break;
            case "signin": //签到奖励
                SignInWnd.ME.GetMultiReward();
                break;
        }
    };
    Game.MusicActive = 1;
    Game.SoundActive = 1;
    Game.centerX = 0;
    Game.centerY = 0;
    Game.halfWidth = 0;
    Game.halfHeight = 0;
    Game.hideX = 0;
    Game.hideY = 0;
    Game.isGameStart = false;
    Game.isShowBullet = false;
    Game.time = 0;
    Game.timeScale = 1;
    Game._dTime = .016;
    Game.dTime = .016;
    Game.ME = null;
    Game.planetMaxCount = 32;
    return Game;
}(laya.display.Sprite));
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AudioManager;
}(Base_Audio_Manager));
//# sourceMappingURL=GameUI.js.map