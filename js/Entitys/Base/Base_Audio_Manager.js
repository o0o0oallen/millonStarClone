/*
* Ycj
* 2018 - 05 - 28
* 基础音频管理器
*/
//抽象类 - 基础音频管理器
var Base_Audio_Manager = /** @class */ (function () {
    function Base_Audio_Manager() {
        //背景音乐
        this.Background_Music = null;
        //玩一玩
        this.AudioContext = null;
        this.AudioSound = null;
        //背景音乐路径
        this.Background_Music_URL = "";
        //音频资源列表
        this.Audio_Resource_URL_List = new Array();
        //音乐音量
        this.Music_Volume = 100;
        //音效音量
        this.Sound_Volume = 1;
        //播放音效
        this.Play_Sound_Interval_Time = 0;
        Laya.SoundManager.useAudioMusic = false;
    }
    //初始化
    Base_Audio_Manager.prototype.Initialize = function () {
        if (CD.Platform == Platform.Wechat) {
            if (this.Background_Music == null) {
                this.Background_Music = Laya.Browser.window.wx.createInnerAudioContext();
                this.Background_Music.obeyMuteSwitch = true;
            }
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            if (this.AudioContext == null) {
                this.AudioContext = Laya.Browser.window.BK.createAudioContext();
            }
            if (this.AudioSound == null) {
                this.AudioSound = Laya.Browser.window.BK.createAudioContext({ "type": "effect", 'src': "GameRes://Audios/Sounds/Dragonhit.mp3" });
            }
        }
    };
    //设置背景音乐大小
    Base_Audio_Manager.prototype.Set_Music_Volume = function (_Volume) {
        this.Music_Volume = _Volume;
        if (CD.Platform == Platform.Wechat) {
            // this.Background_Music.volume = _Volume;
            // this.Play_Music("");
        }
        else {
            // Laya.SoundManager.setSoundVolume(_Volume);
            //  this.Play_Music("");
        }
    };
    //设置背景音乐大小
    Base_Audio_Manager.prototype.Set_Sound_Volume = function (_Volume) {
        this.Sound_Volume = _Volume;
        if (CD.Platform == Platform.Wechat) {
            //this.Background_Music.volume = _Volume;
        }
        else {
            //Laya.SoundManager.soundVolume = _Volume;
        }
    };
    //播放音乐
    Base_Audio_Manager.prototype.Play_Music = function (_URL) {
        if (this.Music_Volume < 1) {
            //CD.log("Play_Music Stop_Music");
            this.Stop_Music();
            return;
        }
        // CD.log("Play_Music");
        if (_URL != "") {
            var bgurl = "";
            if (CD.Platform == Platform.Wanyiwan) {
                this.AudioContext.destroy();
                this.AudioContext = Laya.Browser.window.BK.createAudioContext();
                bgurl = _URL;
            }
            else
                bgurl = CD.getFileVersionPath(_URL);
            this.Background_Music_URL = bgurl;
            //console.log("music url: "+this.Background_Music_URL);
        }
        // CD.log("Play_Music this.Background_Music_URL: "+this.Background_Music_URL);
        this.Audio_Resource_URL_List.push(_URL);
        // console.log("base autio manager Play_Music 2: ");
        if (CD.Platform == Platform.Wechat) {
            if (_URL != "") {
                this.Background_Music.src = _URL;
                this.Background_Music.autoplay = false;
                this.Background_Music.loop = true;
                this.Background_Music.obeyMuteSwitch = false;
            }
            //  console.log("base autio manager Play_Music 4: ");
            if (UI.Main_View != null) {
                if (UI.Main_View.MusicActive == 0)
                    return;
            }
            // CD.log("real play music");
            if (this.Background_Music != null)
                this.Background_Music.play();
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            this.AudioContext.src = "GameRes://" + this.Background_Music_URL;
            this.AudioContext.loop = true;
            // CD.log("Wanyiwan 111  Play_Music this.Background_Music_URL: "+this.Background_Music_URL);
            if (UI.Main_View != null) {
                if (UI.Main_View.MusicActive == 0)
                    return;
            }
            //CD.log("Wanyiwan 222 "+this.Background_Music_URL);
            this.AudioContext.play();
        }
        else {
            if (_URL != "") {
                this.Background_Music_URL = CD.getFileVersionPath(_URL);
                if (UI.Main_View != null) {
                    if (UI.Main_View.MusicActive == 0)
                        return;
                }
                //console.log("real play url: "+this.Background_Music_URL);
                Laya.SoundManager.playMusic(this.Background_Music_URL);
            }
            else {
                if (this.Background_Music_URL != "") {
                    if (UI.Main_View != null) {
                        if (UI.Main_View.MusicActive == 0)
                            return;
                    }
                    Laya.SoundManager.playMusic(this.Background_Music_URL);
                }
            }
        }
    };
    //继续音乐
    Base_Audio_Manager.prototype.Continue_Music = function () {
        if (CD.Platform == Platform.Wanyiwan) {
            // CD.log("Continue_Music");
            if (this.AudioContext != null) {
                if (UI.Main_View != null) {
                    if (UI.Main_View.MusicActive == 0)
                        return;
                }
                //CD.log("Continue_Music "+this.AudioContext.src);
                this.AudioContext.play();
            }
        }
        else {
            this.Play_Music(this.Background_Music_URL);
        }
    };
    //暂停音乐
    Base_Audio_Manager.prototype.Pause_Music = function () {
        if (CD.Platform == Platform.Wechat) {
            this.Background_Music.pause();
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            CD.log("pause music");
            if (this.AudioContext != null) {
                CD.log("real pause");
                this.AudioContext.pause();
            }
        }
        else {
            //UI.OnWinMsgUI("暂停音乐---");
            Laya.SoundManager.stopMusic();
        }
    };
    //停止音乐
    Base_Audio_Manager.prototype.Stop_Music = function () {
        //CD.log("real stop music");
        if (CD.Platform == Platform.Wechat) {
            // console.log("final stop music");
            this.Background_Music.stop();
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            if (this.AudioContext != null) {
                CD.log("==Stop_Music=" + this.Background_Music_URL);
                this.AudioContext.pause();
            }
        }
        else {
            //UI.OnWinMsgUI("停止音乐---");
            Laya.SoundManager.stopMusic();
        }
    };
    //播放音效
    Base_Audio_Manager.prototype.Play_Sound = function (_URL, _Value, loop) {
        /*
        if(Laya.timer.currTimer < this.Play_Sound_Time)
        {
            return;
        }

        this.Play_Sound_Time = Laya.timer.currTimer + DZLM_GM.Play_Sound_Time;
        */
        if (loop === void 0) { loop = 1; }
        if (this.Sound_Volume < 1) {
            return;
        }
        var houzhui = ".mp3";
        if (CD.Platform == Platform.Android)
            houzhui = ".ogg";
        var _Resource_URL = "";
        if (CD.Platform == Platform.Wanyiwan) {
            _Resource_URL = ("GameRes://" + _URL + _Value + houzhui);
        }
        else {
            _Resource_URL = CD.getFileVersionPath(_URL + _Value + houzhui);
        }
        //CD.log("resource url : "+_Resource_URL);
        this.Audio_Resource_URL_List.push(_Resource_URL);
        if (CD.Platform == Platform.Wechat) {
            OPM.Spawn_Audio_Sound(_Resource_URL, _Value);
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            // if(this.AudioSound.src == "")
            // {
            // }
            // var effectContext = Laya.Browser.window.BK.createAudioContext({ 'type': 'effect', 'src': _Resource_URL });
            //  CD.log("wan yi wan play music : "+_Resource_URL);
            if (Game.SoundActive == 0)
                return;
            this.AudioSound.src = _Resource_URL;
            this.AudioSound.play();
            //   CD.log("wan yi wan play 11111");
            // effectContext.play();
        }
        else if (CD.Platform == Platform.Baidu) {
            if (Game.SoundActive == 0)
                return;
            var _Pool = OPM.Spawn_Audio_Sound(CD.Resource_URL + CD.CodeVersion + "/" + _Resource_URL, _Value);
            if (_Pool != null) {
                //_Pool.obeyMuteSwitch = false;
                _Pool.play();
            }
        }
        else {
            Laya.SoundManager.playSound(_Resource_URL, loop, Laya.Handler.create(this, this.Play_Sound_Complete, null, true), null, 0);
        }
    };
    // public Play_Record(_URL:string, _Value:string):void
    // {
    //     this.Audio_Resource_URL_List.push(_URL);
    //     if(CD.Platform == Platform.Wechat)
    //     {
    //         OPM.Spawn_Audio_Sound(_URL, _Value);
    //     }
    //     else
    //     {
    //         Laya.SoundManager.playSound(_URL, 1, Laya.Handler.create(this, this.Play_Sound_Complete, null, true), null, 0);
    //     }
    // }
    //播放音效完毕
    Base_Audio_Manager.prototype.Play_Sound_Complete = function (e) {
        //console.log("音效播放完毕")
    };
    //停止音效
    Base_Audio_Manager.prototype.Stop_Sound = function (_Value) {
        if (CD.Platform == Platform.Wechat) {
        }
        else if (CD.Platform == Platform.Wanyiwan) {
            if (this.AudioSound != null) {
                //CD.log("==Stop_Music="+this.Background_Music_URL);
                this.AudioSound.stop();
            }
        }
        else if (CD.Platform == Platform.Baidu) {
            OPM.Stop_Audio_AllSound();
        }
        else {
            _Value = CD.getFileVersionPath(_Value);
            Laya.SoundManager.stopSound(_Value);
        }
    };
    // //播放音效
    // public _Play_Click_Sound(_URL:string, _Value:string,_loop:boolean=false) : void
    // {
    //     /*
    //     if(Laya.timer.currTimer < this.Play_Sound_Time)
    //     {
    //         return;
    //     }
    //     this.Play_Sound_Time = Laya.timer.currTimer + DZLM_GM.Play_Sound_Time;
    //     */
    //     var loopnum = 1;
    //     if(_loop)
    //     {
    //         loopnum =0;
    //     }
    //     this.Audio_Resource_URL_List.push(_URL);
    //     //console.log("_Play_Click_Sound",_URL + _Value + ".mp3");
    //     if(CD.Platform == Platform.Wechat)
    //     {
    //         if(this.Sound_Volume < 1)
    //         {
    //             return;
    //         }
    //         OPM.Spawn_Audio_Sound_By_More_Parameters(_Value,_URL,_loop);
    //     }
    //     else
    //     {
    //         Laya.SoundManager.playSound(_URL + _Value + ".mp3", loopnum, Laya.Handler.create(this, this.Play_Sound_Complete, null, true), null, 0);
    //     }
    // }
    // //停止音效
    // public Stop_loop_Sound(_URL:string,_Value:string) : void
    // {
    //     //console.log("Stop_loop_Sound",_URL + _Value + ".mp3");
    //     if(CD.Platform == Platform.Wechat)
    //     {
    //         OPM.Stop_Audio_Sound(_Value);
    //     }
    //     else  if(CD.Platform == Platform.Wanyiwan)
    //     {
    //         if(this.AudioSound != null)
    //         {
    //             this.AudioSound.stop();
    //         }
    //     }
    //     else
    //     {
    //         Laya.SoundManager.stopSound(_URL + _Value + ".mp3");
    //     }
    // }
    //清理资源
    Base_Audio_Manager.prototype.Resource_Clear = function () {
        var i = 0;
        //  console.log("resource clear stop music");
        //CD.log("Resource_Clear Stop_Music");
        this.Stop_Music();
        for (i = 0; i < this.Audio_Resource_URL_List.length; i++) {
            this.Stop_Sound(this.Audio_Resource_URL_List[i]);
            Laya.loader.clearRes(this.Audio_Resource_URL_List[i]);
        }
    };
    return Base_Audio_Manager;
}());
//# sourceMappingURL=Base_Audio_Manager.js.map