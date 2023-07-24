/*
* Ycj
* 2018 - 05 - 03
* 对象池管理
*/
var Object_Pool_Manager = /** @class */ (function () {
    function Object_Pool_Manager() {
        //音效
        this.Sounds = [];
        //特效
        this.Effects = [];
    }
    //生成
    Object_Pool_Manager.prototype.Spawn_Effect = function (_Object, _Value) {
        var _Pool;
        var i = 0;
        for (i = 0; i < this.Effects.length; i++) {
            _Pool = this.Effects[i];
            if (_Pool != null) {
                if (_Pool.Type == _Value && _Pool.State == true) {
                    return _Pool;
                }
            }
        }
        this.Effects.push(_Object);
        return _Pool;
    };
    Object_Pool_Manager.prototype.GetSoundObj = function (_Name) {
        var i = 0, nCount = 0;
        var _Pool;
        var returnobj = null;
        nCount = this.Sounds.length;
        for (i = 0; i < nCount; i++) {
            if (this.Sounds[i] == null)
                continue;
            _Pool = this.Sounds[i];
            if (_Pool.Type != _Name)
                continue;
            if (_Pool.Prefab.paused == false)
                continue;
            returnobj = _Pool.Prefab;
            break;
        }
        return returnobj;
    };
    //生成
    Object_Pool_Manager.prototype.Spawn_Audio_Sound = function (_Value, _Name) {
        var soundobj = null;
        var i = 0;
        soundobj = this.GetSoundObj(_Name);
        if (soundobj != null)
            return soundobj;
        var _Pool = new Object_Pool();
        _Pool.Type = _Name;
        var Sound = null;
        if (CD.Platform == Platform.Wechat) {
            Sound = Laya.Browser.window.wx.createInnerAudioContext();
        }
        else if (CD.Platform == Platform.Baidu) {
            Sound = Laya.Browser.window.swan.createInnerAudioContext();
        }
        Sound.obeyMuteSwitch = true;
        Sound.autoplay = true;
        Sound.loop = false;
        Sound.src = _Value;
        Sound.onEnded(function () {
            _Pool.Prefab.stop();
        });
        _Pool.Prefab = Sound;
        this.Sounds.push(_Pool);
        return _Pool.Prefab;
    };
    //生成
    Object_Pool_Manager.prototype.Spawn_Audio_Sound_By_More_Parameters = function (_Value, url, _loop) {
        var _Pool;
        var i = 0;
        for (i = 0; i < this.Sounds.length; i++) {
            _Pool = this.Sounds[i];
            if (_Pool != null) {
                if (_Pool.Type == _Value) {
                    _Pool.Prefab.play();
                    return _Pool;
                }
            }
        }
        _Pool = new Object_Pool();
        _Pool.Type = _Value;
        var Sound = Laya.Browser.window.wx.createInnerAudioContext();
        Sound.obeyMuteSwitch = false;
        Sound.autoplay = false;
        Sound.loop = _loop;
        if (url != "") {
            Sound.src = url + _Value + ".mp3";
        }
        else {
            Sound.src = CD.Game.Resource_URL + "res/sounds/" + _Value + ".mp3";
        }
        //Sound.onEnded(this.Play_Sound_Complete);
        Sound.onEnded(function () {
            _Pool.Prefab.stop();
            _Pool.Prefab.destroy();
        });
        _Pool.Prefab = Sound;
        if (_loop == true)
            this.Sounds.push(_Pool);
        return _Pool;
    };
    //生成
    Object_Pool_Manager.prototype.Loader_Audio_Sound_WeChat = function (loaderData) {
        var _Pool;
        var i = 0;
        for (i = 0; i < this.Sounds.length; i++) {
            _Pool = this.Sounds[i];
            if (_Pool != null) {
                if (_Pool.Type == loaderData[0][0]) {
                    break;
                }
            }
        }
        _Pool = new Object_Pool();
        _Pool.Type = loaderData[0][0];
        var Sound = Laya.Browser.window.wx.createInnerAudioContext();
        Sound.obeyMuteSwitch = true;
        Sound.src = loaderData[0][1] + loaderData[0][0] + ".mp3";
        Sound.onCanplay(function () {
            console.log(loaderData[0][1] + loaderData[0][0] + ".mp3");
        });
        Sound.onEnded(function () {
            _Pool.Prefab.stop();
            _Pool.Prefab.destroy();
        });
        _Pool.Prefab = Sound;
        this.Sounds.push(_Pool);
    };
    //删除
    Object_Pool_Manager.prototype.Stop_Audio_Sound = function (_Value) {
        var _Pool;
        var i = 0;
        for (i = 0; i < this.Sounds.length; i++) {
            _Pool = this.Sounds[i];
            if (_Pool != null) {
                if (_Pool.Type == _Value) {
                    _Pool.Prefab.stop();
                    _Pool.Prefab.destroy();
                }
            }
        }
    };
    //删除
    Object_Pool_Manager.prototype.Stop_Audio_AllSound = function () {
        var i = 0, nCount = this.Sounds.length;
        var _Pool;
        for (i = 0; i < this.Sounds.length; i++) {
            _Pool = this.Sounds[i];
            if (_Pool == null)
                continue;
            _Pool.Prefab.stop();
        }
    };
    return Object_Pool_Manager;
}());
/*
* Ycj
* 2018 - 05 - 03
* 池中对象
*/
var Object_Pool = /** @class */ (function () {
    function Object_Pool() {
        //预设
        this.Prefab = null;
        //类型
        this.Type = "";
        //URL
        this.URL = "";
        //状态
        this.State = false;
    }
    //初始化
    Object_Pool.prototype.Initialize = function (_Parameters) {
        this.Prefab = _Parameters[0];
        this.Type = _Parameters[1];
        this.URL = _Parameters[2];
        this.State = _Parameters[3];
    };
    return Object_Pool;
}());
//# sourceMappingURL=Object_Pool_Manager.js.map