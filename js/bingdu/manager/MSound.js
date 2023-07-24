/*
* name;
*/
var MSound = /** @class */ (function () {
    function MSound() {
        this.baseUrl = "music/";
        this._pauseSound = false;
        this._pauseMusic = false;
        this.hMusicComp = null;
        this.curMusic = "";
        this.curMusicChannel = null;
        this.ext = ".wav";
        this.bgChannel = null;
        this.dicLoop = {};
        this.arrLoop = [];
        this.dic = {};
        this.countPlay = 0;
        this.countLimit = 9;
        this.sc = null;
        this.hComplete = null;
        this.hComplete = new laya.utils.Handler(this, this.addCount);
        MSound.ME = this;
        Laya.SoundManager.useAudioMusic = false;
        console.log("Laya.SoundManager.useAudioMusic = false====");
        Laya.SoundManager.autoReleaseSound = false;
        this.hMusicComp = new laya.utils.Handler(this, this.delayReplay);
    }
    MSound.prototype.off = function (t) {
        this._pauseSound = this._pauseMusic = t;
        t ? (this.pauseMusic(), this.stopAll()) : "" != this.curMusic && this.playMusic(this.curMusic);
    };
    MSound.prototype.pauseMusic = function () {
        //console.log("====pauseMusic*****" + this.bgChannel);
        this.stopAll();
        // this.bgChannel && this.bgChannel.pause();
        // for (var t, e = this.arrLoop.length; e--;) t = this.arrLoop[e],
        //     this.dicLoop[t.name] = null, this.arrLoop.splice(e, 1), this.stopSound(t.name);
    };
    MSound.prototype.resumeMusic = function () {
        !SV.ME.isSoundOff && this.replayMusic();
        // MSound.ME.countPlay = 0;
        // //console.log("====resumeMusic*****" + this._pauseMusic);
        // this._pauseMusic || (this.bgChannel ? this.bgChannel.play() : this.curMusic && this.playMusic(this.curMusic));
    };
    MSound.prototype.checkLoopEnd = function () {
        Laya.timer.loop(1, this, this.update);
    };
    MSound.prototype.update = function () {
        for (var t, e = this.arrLoop.length; e--;)
            t = this.arrLoop[e],
                Clock.timer > t.timeEnd && (this.dicLoop[t.name] = null, this.arrLoop.splice(e, 1), this.stopSound(t.name));
    };
    MSound.prototype.playSound = function (t) {
        this._pauseSound || Laya.SoundManager.playSound(this.baseUrl + t + this.ext);
    };
    MSound.prototype.playSoundLoop = function (t) {
        //console.log("playSoundLoop******" + t + "***" + this._pauseSound);
        if (!this._pauseSound) {
            var e = this.dicLoop[t];
            if (e) {
                e.timeEnd = Clock.timer + .2;
                //console.log("playSoundLoop111******" + e.timeEnd + "***" + Clock.timer)
            }
            else {
                this.dicLoop[t] = e = {
                    name: t,
                    timeEnd: Clock.timer + .2
                },
                    Laya.SoundManager.playSound(this.baseUrl + t + this.ext, 0), this.arrLoop.push(e);
                //console.log("playSoundLoop222******" + e.timeEnd + "***" + Clock.timer)
            }
            //console.log("playSoundLoop111******" + e.timeEnd + "***" + Clock.timer);
        }
    };
    MSound.prototype.playSoundLimit = function (t) {
        if (this.countPlay < this.countLimit) {
            if (this._pauseSound)
                return;
            //console.log("play~~~~~~~~~~~~~~OK",t);
            this.sc = Laya.SoundManager.playSound(this.baseUrl + t + this.ext);
            this.sc && (this.sc.completeHandler = this.hComplete, this.countPlay++);
        }
        // else{
        //     console.log("======soundlimit~~~~~~~~~~~~~~"+t+"====="+this.countPlay+"===="+this.countLimit);
        // }
    };
    MSound.prototype.addCount = function () {
        this.countPlay--,
            this.countPlay < 0 && (this.countPlay = 0);
    };
    MSound.prototype.stopSoundLoop = function (t) { };
    MSound.prototype.playSoundOnly = function (t) {
        if (!this._pauseSound) {
            var e = this.dic[t];
            e ? e.complete && (Laya.SoundManager.playSound(this.baseUrl + t + this.ext, 1, e.handler), e.complete = !1) : (this.dic[t] = e = {
                complete: !1,
                handler: new laya.utils.Handler(this, this.onSoundComplete, [t])
            },
                Laya.SoundManager.playSound(this.baseUrl + t + this.ext, 1, e.handler));
        }
    };
    MSound.prototype.onSoundComplete = function (t) {
        var e = this.dic[t];
        e && (e.complete = !0);
    };
    MSound.prototype.playMusic = function (t, e) {
        if (e === void 0) { e = 0; }
        // if (this.curMusic == t) {
        //     return;
        // }
        this.curMusic = t;
        this._pauseMusic || (this.bgChannel = Laya.SoundManager.playMusic(this.baseUrl + t + ".mp3", e, this.hMusicComp));
    };
    MSound.prototype.stopMusic = function () { };
    MSound.prototype.stopSound = function (t) {
        Laya.SoundManager.stopSound(this.baseUrl + t + this.ext);
    };
    MSound.prototype.stopAll = function () {
        this.countPlay = 0,
            Laya.SoundManager.stopAll();
        this.bgChannel = null;
    };
    MSound.prototype.delayReplay = function () {
        Laya.timer.once(8e3 * Math.random() + 2e3, this, this.replayMusic);
    };
    MSound.prototype.replayMusic = function () {
        this.playMusic(this.curMusic);
    };
    return MSound;
}());
//# sourceMappingURL=MSound.js.map