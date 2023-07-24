/*
* name;
*/
var Planet = /** @class */ (function () {
    function Planet() {
        this.disSqr2Plane = NaN;
        this.id = 0;
        this.type = 0;
        this.tag = 0;
        this.nextCount = 2;
        this.name = null;
        this.skin = null;
        this.x = 0;
        this.y = 0;
        this.speed = 180;
        this.speedBase = 180;
        this.scaleHit = NaN;
        this.xDir = 0;
        this.yDir = 1;
        this.xDirU = 0;
        this.yDirU = 1;
        this.complete = false;
        this.complete2 = false;
        this.r = 0;
        this.rSqr = 0;
        this.lifeBack = null;
        this.lifeBackDelay = 0;
        this.hitDelay = 0;
        this.t = null;
        this.level = 0;
        this.scaleBase = NaN;
        this.scale = NaN;
        this.rBase = 0;
        this.shock = null;
        this.moveAble = false;
        this.attackAble = false;
        this.isFast = false;
        this.colorIndex = -1;
        this.delayF = 0;
        this.hitSlow = 1;
        this.hitSlowDelay = NaN;
        this.topID = 0;
        this.dianZhuiAble = true;
        this.curColorSet = 99999;
        this.curColorSetI = 0;
        this.scale2 = 1;
        this.delayScale = 3;
        this.isShake = false;
        this.drawButtle = null;
        this.disSqr2Plane = NaN,
            this.id = 0,
            this.type = 0,
            this.tag = 0,
            this.speeds = [540, 480, 420, 300, 180],
            this.scaleHits = [.75, .8, .85, .87, .9],
            this.nextCount = 2,
            this.name = null,
            this.skin = null,
            this.x = 0,
            this.y = 0,
            this.speed = 180,
            this.speedBase = 180,
            this.scaleHit = NaN,
            this.xDir = 0,
            this.yDir = 1,
            this.xDirU = 0,
            this.yDirU = 1,
            this.complete = false,
            this.complete2 = false,
            this.r = 0,
            this.rSqr = 0,
            this.lifeBack = null,
            this.lifeBackDelay = 0,
            this.hitDelay = 0,
            this.t = null,
            this.level = 0,
            this.scales = [.55, .7, .9, 1.2, 2],
            this.scaleBase = NaN,
            this.scale = NaN,
            this.rBase = 0,
            this.shock = null,
            this.moveAble = false,
            this.attackAble = false,
            this.isFast = false,
            this.colorIndex = -1,
            this.delayF = 0,
            this.hitSlow = 1,
            this.hitSlowDelay = NaN,
            this.topID = 0,
            this.dianZhuiAble = true,
            this.curColorSet = 99999,
            this.curColorSetI = 0,
            this.scale2 = 1,
            this.delayScale = 3,
            this.lifeBase = new math_BigUInt(),
            this.life = new math_BigUInt(),
            this.lifeNext = new math_BigUInt();
    }
    Planet.prototype.setLevel = function (t) {
        this.id = ++Cfg.ID;
        this.level = t;
        this.speed = this.speedBase = this.speeds[t - 1];
        this.scale = this.scaleBase = this.scales[t - 1] * 1.5;
        this.updateScale();
        this.rSqr = this.r * this.r;
        this.moveAble = true;
        this.attackAble = false;
        this.topID = 0;
        Laya.timer.once(50, this, this._aa),
            this.dianZhuiAble = t > 1 && Planet.countAll < 10;
    };
    Planet.prototype._aa = function () {
        this.attackAble = true;
    };
    Planet.prototype.updateScale = function () {
        this.scale = this.scaleBase * Planet.biggerRate;
        this.r = Math.round(this.rBase * this.scale);
        this.scaleHit = this.scale * this.scaleHits[this.level - 1];
        this.skin.scale(this.scale, this.scale, true);
    };
    Planet.prototype.setLife = function (t) {
        this.life.copy(t);
        this.lifeBase.copy(t);
        this.lifeNext.copy(t);
        this.curColorSet = 99999;
        this.curColorSetI = 0;
        this.updateLife();
    };
    Planet.prototype.back = function (dis) {
        if (dis === void 0) { dis = 20; }
        this.y > 100 && (this.y -= dis);
    };
    Planet.prototype.updateLife = function () {
        this.setText(this.life.getShortString());
        var e = Planet.tempBI.copy(Cfg.bDamagePreS).divPresent(this.life);
        if (e < this.curColorSet) {
            for (var i = 8; i >= this.curColorSetI; i--)
                if (e < Cfg.colorSet[i]) {
                    this.curColorSetI = i,
                        this.curColorSet = Cfg.colorSet[i];
                    break;
                }
            this.setColor(this.curColorSetI);
        }
    };
    Planet.prototype.setText = function (t) {
        this.t.setText(t);
        var e = Math.min(1, 180 / this.t.width);
        this.t.sprite.scale(e, e, true);
    };
    Planet.prototype.updateLife2 = function () {
        this.setText(this.life.getShortString()),
            this.curColorSetI = 0;
        for (var e = Planet.tempBI.copy(Cfg.bDamagePreS).divPresent(this.life), i = 8; i >= 0; i--)
            if (e < Cfg.colorSet[i]) {
                this.curColorSetI = i,
                    this.curColorSet = Cfg.colorSet[i];
                break;
            }
        this.setColor(this.curColorSetI);
    };
    Planet.prototype.setColor = function (t) { };
    Planet.prototype.send = function () {
        this.complete = false;
        this.skin.visible = true;
        this.draw();
        this.updateLife();
        this.xDirU = Math.abs(this.xDir);
        this.yDirU = Math.abs(this.yDir);
    };
    Planet.prototype.fast = function (t, e) {
        if (t === void 0) { t = 10; }
        if (e === void 0) { e = 300; }
        this.speed = this.speedBase + t;
        this.isFast = true;
        laya.utils.Tween.to(this, {
            speed: this.speedBase
        }, e, null, laya.utils.Handler.create(this, this.onFastEnd));
    };
    Planet.prototype.slow = function (t, e, i) {
        if (e === void 0) { e = 300; }
        if (i === void 0) { i = 500; }
        this.speed = this.speedBase * t;
        this.isFast = true;
        laya.utils.Tween.to(this, {
            speed: this.speedBase
        }, e, null, laya.utils.Handler.create(this, this.onFastEnd), i);
    };
    Planet.prototype.stand = function (t) {
        this.setMoveAble(false);
        Laya.timer.once(t, this, this.setMoveAble, [true]);
    };
    Planet.prototype.setMoveAble = function (t) {
        this.moveAble = t;
    };
    Planet.prototype.onFastEnd = function () {
        this.isFast = false;
    };
    Planet.prototype.draw = function () {
        this.skin.pos(this.x, this.y, true);
    };
    Planet.prototype.update = function () {
        var s, n, i, e;
        this.moveAble && (this.x += this.speed * this.xDir * Planet.speedRate * this.hitSlow * Game.dTime,
            this.x + this.r > Game.ME.BR ? (this.xDir = -this.xDirU,
                this.checkDir()) :
                this.x - this.r < Game.ME.BL && (this.xDir = this.xDirU,
                    this.checkDir()),
            this.y += this.speed * this.yDir * Planet.speedRate * this.hitSlow * Game.dTime,
            this.y - this.r > Game.ME.BB ? (this.y = -this.r,
                this.onBtm2Top()) :
                this.y - this.r < Game.ME.BT && (this.yDir = this.yDirU),
            this.scale2 < this.scale ? (this.scale2 < this.scale && (this.scale2 += .05),
                this.skin.scale(this.scale2, this.scale2, true)) :
                this.scale2 = this.scale);
        this.moveAble && this.drawButtle && (
        // this.y += this.speed * this.yDir * Game.dTime,
        //         this.x += this.speed * this.xDir * Game.dTime,
        //         this.skin.pos(this.x, this.y, true),
        s = this.drawButtle.skin.x - this.x,
            n = this.drawButtle.skin.y - this.y,
            s *= i = 1 / (e = Math.sqrt(s * s + n * n)),
            n *= i,
            e > 56 ? (this.xDir += (s - this.xDir) * Game.dTime * 5,
                this.yDir += (n - this.yDir) * Game.dTime * 5) : (this.xDir = this.xDirU, this.checkDir()));
        this.draw();
    };
    Planet.prototype.onBtm2Top = function () {
        this.topID++;
    };
    Planet.prototype.checkDir = function () {
        Math.abs(this.yDir) < .5 && (this.yDir >= 0 ? this.yDir = .5 : this.yDir = -.5, this.yDirU = Math.abs(this.yDir));
    };
    Planet.prototype.check = function () {
        if (this.attackAble) {
            for (var t, e = Buttle.countAll, i = 0, s = 0; e--;)
                if ((t = Buttle.all[e]).testHit(this) && (t.kill(this), t.hitFx(), t.isFu ? this.hit(Cfg.fDamage) : this.hit(Cfg.bDamage), this.complete))
                    return;
            Game.ME.plane.attackAble && (i = Game.ME.plane.x - this.x, s = Game.ME.plane.y - this.y, i *= i, i += s *= s, s = Game.ME.plane.r + this.r, i < (s *= s) && Game.ME.fail());
            Game.time > this.hitSlowDelay && (this.hitSlow = 1);
        }
    };
    Planet.prototype.onHit = function () {
        this.hitSlow = .5;
        this.hitSlowDelay = Game.time + .2;
        Planet.hitCoin.state && Game.time > Planet.hitCoinDelay && (Planet.hitCoinDelay = Game.time + .09,
            Game.ME.flyMoney.fly(this.x, this.y, Game.ME.coinX, Game.ME.coinY, 1, 2.5));
    };
    Planet.prototype.hit = function (e) {
        if (!this.complete && !this.complete2) {
            if (Game.time > this.delayScale && (this.scale2 = this.scaleHit,
                this.delayScale = Game.time + .048),
                this.life.bigger(e) ? (Game.ME.minus(e),
                    this.life.minus(e)) : (Game.ME.minus(this.life),
                    this.life.zero()), this.life.isZero()) {
                if (SV.ME.isShackOff == false) {
                    this.dealshake();
                }
                // WX.ME.shack(5 == this.level),
                this.kill();
                var i = Math.round(3 * Math.random()) + 1;
                // var i = 1;
                Game.ME.boomCount < 2 && (Game.ME.boomCount++,
                    Game.ME.pStart.play(i.toString(), this.x, this.y)
                // Math.random() * 10 < 5 ? Game.ME.pStart.play(["1", "2"], this.x, this.y) : Game.ME.pStart.play(["3", "4"], this.x, this.y)
                );
                Game.ME.damageArr[0].play(this.x, this.y, 4 * this.scale),
                    // Game.ME.flashBoom(this.x, this.y, this.level),
                    Game.ME.shack(3 * Math.max(2, this.level)),
                    Buff.getBf(this.level, this.x, this.y),
                    MSound.ME.playSoundLimit("w_bz_" + this.level),
                    (1 == this.level && 0 == this.tag && Game.ME.flyMoney.fly(this.x, this.y, Game.ME.coinX, Game.ME.coinY, Game.ME.coinCountRate.rndValue() * (Planet.hitCoin.state ? 5 : 1)));
                if (SV.ME.level <= 5 && Game.ME.buffObstructCount > 0) {
                    Game.ME.buffObstructCount--;
                    // console.log("kill~~~~~~~~~~", Game.ME.buffObstructCount);
                    Buff.getObstructBf(Game.ME.buffObstructCount == 1 ? 2 : 7, this.x, this.y);
                }
                return;
            }
            MSound.ME.playSoundLoop("w_shout");
            this.updateLife();
            this.onHit();
        }
    };
    Planet.prototype.dealshake = function () {
        if (CD.CanShake == false) {
            return;
        }
        if (this.isShake == false) {
            this.isShake = true;
            var sData;
            if (CD.Platform == Platform.Android) {
                sData = {
                    type: "shake",
                    data: Planet.shakeDura[this.level].toString()
                };
                IFS.ME.doCall(JSON.stringify(sData));
                // Laya.conchMarket.enterShareAndFeed(, function (data) { });
            }
            else if (CD.Platform == Platform.Ios) {
                // AdsManager.doAnalyticsCall("doShake", Math.max(1, this.level - 1));
                sData = {
                    type: "shake",
                    data: Math.max(1, this.level - 1)
                };
                IFS.ME.doCall(JSON.stringify(sData));
            }
            else if (CD.Platform == Platform.H5) {
                if (Laya.Browser.window.navigator.vibrate) {
                    Laya.Browser.window.navigator.vibrate(Planet.shakeDura[this.level]);
                }
            }
            Laya.timer.once(20, this, this.clearShakingState);
        }
    };
    Planet.prototype.clearShakingState = function () {
        this.isShake = false;
    };
    Planet.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        var nid = this.id;
        this.lifeBack = null, this.complete = true, this.skin.visible = false, this.id = 0;
        if (e) {
        }
        else if (this.level > 1) {
            this.lifeNext.div(2),
                this.lifeNext.isZero() && this.lifeNext.one(),
                Planet._i = this.nextCount;
            for (var i = NaN, s = false, n = NaN; Planet._i--;)
                s = !s,
                    n = Math.random() + .1,
                    i = -1.57 + (s ? n : -n),
                    Game.ME.addBug(true, this.type, this.level - 1, this.x, this.y, this.lifeNext, Math.cos(i), Math.sin(i));
        }
        if (e == false) { //杀的怪
            // console.log("kill~~~~~~~~~~", this.type, e, this.level);
            AchievementWnd.ME.addAch(50, this.type, 1);
        }
        this.drawButtle && this.drawButtle.planetkill(nid, "kill");
        SV.ME.curFu == 10 && Weapon11.ME.planetkill(this);
    };
    Planet.prototype.setDrawButtle = function (b, s) {
        s ? this.drawButtle = b : (this.drawButtle = null, this.xDir = 0, this.yDir = 1);
    };
    Planet.setSlowRate3 = function (r, t, s) {
        //console.log("setSlowRate3///////////",r,t,s,Game.time);
        if (s) {
            t *= 1e3;
            Planet.slowRate3 = r;
            Laya.timer.once(t, Planet, Planet.setSlowRate3, [0, 0, false]);
        }
        else {
            Planet.slowRate3 = 1;
        }
        Laya.Tween.to(Planet, { speedRate: Planet.slowRate * Planet.slowRate2 * Planet.slowRate3 * Planet.fastRate }, 500);
    };
    Planet.setSlowRate = function (e, i) {
        1 == i ? Planet.stateSlow.remove(e) : Planet.stateSlow.add(e, i),
            Planet.slowRate = Planet.stateSlow.state ? Planet.stateSlow.getVMin() : 1,
            laya.utils.Tween.to(Planet, {
                speedRate: Planet.slowRate * Planet.slowRate2 * Planet.slowRate3 * Planet.fastRate
            }, 500);
    };
    Planet.setSlowRate2 = function (e, i) {
        1 == i ? Planet.stateSlow2.remove(e) : Planet.stateSlow2.add(e, i),
            Planet.slowRate2 = Planet.stateSlow2.state ? Planet.stateSlow2.getVMin() : 1,
            laya.utils.Tween.to(Planet, {
                speedRate: Planet.slowRate * Planet.slowRate2 * Planet.slowRate3 * Planet.fastRate
            }, 500);
    };
    Planet.setFastRate = function (e, i) {
        1 == i ? Planet.stateFast.remove(e) : Planet.stateFast.add(e, i),
            Planet.fastRate = Planet.stateFast.state ? Planet.stateFast.getVMax() : 1,
            laya.utils.Tween.to(Planet, {
                speedRate: Planet.slowRate * Planet.slowRate2 * Planet.slowRate3 * Planet.fastRate
            }, 500);
    };
    Planet.setbiggerRate = function (e, i) {
        var s = NaN;
        1 == i ? Planet.stateBigger.remove(e) : Planet.stateBigger.add(e, i),
            s = Planet.stateBigger.state ? Planet.stateBigger.getVMax() : 1,
            laya.utils.Tween.to(Planet, {
                biggerRate: s,
                update: Planet.hBiggerUpdate
            }, 500, laya.utils.Ease.backOut);
    };
    Planet.updateScaleAll = function () {
        for (var e = Planet.countAll; e--;)
            Planet.all[e].updateScale();
    };
    Planet.getBeggest = function () {
        Planet.all.sort(Planet.byLevel);
        return Planet.all[0];
    };
    Planet.getBeggestByNum = function (n) {
        Planet.all.sort(Planet.byLevel);
        return Planet.all[0];
    };
    Planet.getStronger = function () {
        Planet.all.sort(Planet.byHP);
        for (var e = Planet.countAll; e--;)
            if (Planet.all[e].y < 1600)
                return Planet.all[e];
        return null;
    };
    Planet.getNear = function () {
        for (var e, i = Planet.countAll, s = NaN, n = NaN; i--;)
            s = (e = Planet.all[i]).x - Plane.ME.x,
                n = e.y - Plane.ME.y,
                s *= s,
                n *= n,
                e.disSqr2Plane = s + n;
        for (Planet.all.sort(Planet.byDis), i = 0; i < Planet.countAll; i++)
            if (Planet.all[i].y < Plane.ME.y)
                return Planet.all[i];
        return null;
    };
    Planet.byLevel = function (t, e) {
        return t.level > e.level ? -1 : t.level < e.level ? 1 : 0;
    };
    Planet.byHP = function (t, e) {
        return t.life.bigger(e.life) ? 1 : -1;
    };
    Planet.byDis = function (t, e) {
        return t.disSqr2Plane > e.disSqr2Plane ? 1 : t.disSqr2Plane < e.disSqr2Plane ? -1 : 0;
    };
    Planet.add = function (e) {
        Planet.all.push(e),
            Planet.countAll = Planet.all.length,
            Planet.checkIndex >= Planet.countAll && (Planet.checkIndex = Planet.countAll - 1);
    };
    Planet.removeAll = function () {
        for (var e, i = Planet.countAll; i--;)
            (e = Planet.all[i]).name = "",
                e.skin.visible = false,
                e.skin.parent && e.skin.parent.removeChild(e.skin),
                e.kill(true);
        Planet.all = [],
            Planet.countAll = 0;
    };
    Planet.remove = function (e) {
        for (var i, s = Planet.countAll; s--;)
            if ((i = Planet.all[s]).id == e.id) {
                i.name = "",
                    i.skin.visible = false,
                    i.skin.parent && i.skin.parent.removeChild(i.skin),
                    Planet.countAll--;
                break;
            }
    };
    Planet.updateAll = function () {
        var e, i = Planet.countAll;
        for (--Planet.checkIndex < 0 && (Planet.checkIndex = Planet.countAll - 1); i--;)
            (e = Planet.all[i]).complete ? (e.name = "",
                Planet.all.splice(i, 1),
                e.skin.parent && e.skin.parent.removeChild(e.skin),
                Planet.checkIndex >= --Planet.countAll && (Planet.checkIndex = Planet.countAll - 1)) : (e.update(),
                e.check());
    };
    Planet.getPlanet = function (nid) {
        for (var i = 0; i < Planet.countAll; i++) {
            if (Planet.all[i].id == nid)
                return Planet.all[i];
        }
        return null;
    };
    Planet.tempBI = new math_BigUInt();
    Planet.hitCoin = new StateVal();
    Planet.stateSlow = new StateVal();
    Planet.stateSlow2 = new StateVal();
    Planet.stateFast = new StateVal();
    Planet.stateBigger = new StateVal();
    Planet.hBiggerUpdate = laya.utils.Handler.create(Planet, Planet.updateScaleAll, null, false);
    Planet.shakeDura = [20, 20, 30, 40, 50, 100];
    Planet._i = 0;
    Planet.cc = 1;
    Planet.hitCoinDelay = 0;
    Planet.speedRate = 1;
    Planet.slowRate = 1;
    Planet.slowRate2 = 1;
    Planet.slowRate3 = 1;
    Planet.fastRate = 1;
    Planet.biggerRate = 1;
    Planet.all = [];
    Planet.countAll = 0;
    Planet.checkIndex = 0;
    return Planet;
}());
//# sourceMappingURL=Planet.js.map