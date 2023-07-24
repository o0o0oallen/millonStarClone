/*
* name;
*/
var Wanyiwan_Manager = /** @class */ (function () {
    function Wanyiwan_Manager() {
    }
    //构造方法
    Wanyiwan_Manager.prototype.Initialize = function () {
        //监听手机网络变化
        //CD.log("Laya.Browser.window.BK.onNetworkChange");
        Laya.Browser.window.BK.onNetworkChange(this.onNetworkChangeListener);
        //监听游戏进入前台事件
        // CD.log("Laya.Browser.window.BK.onLoad");
        // Laya.Browser.window.BK.onLoad(this.OnLoadListener);
        // CD.log(" Laya.Browser.window.BK.onEnterForeground");
        //监听游戏进入前台事件
        Laya.Browser.window.BK.onEnterForeground(this.onEnterForegroundEve);
        //CD.log("Laya.Browser.window.BK.onEnterBackground");
        //监听游戏进入后台事件，
        Laya.Browser.window.BK.onEnterBackground(this.onEnterBackgroundEve);
        //监听游戏关闭事件
        //CD.log("Laya.Browser.window.BK.onGameClose");
        Laya.Browser.window.BK.onGameClose(this.onGameCloseEve);
        //监听游戏最小化事件
        // CD.log("Laya.Browser.window.BK.onMinimize");
        Laya.Browser.window.BK.onMinimize(this.onMinimizeEve);
        //调用分享接口时回调
        // Laya.Browser.window.BK.onGameShare(
        //     function ()
        //     {
        //         Laya.Browser.window.BK.Script.log(0, 0, "分享了");
        //     }
        // );
        //音频被中断
        //CD.log("Laya.Browser.window.BK.onAudioInterruptionStart");
        Laya.Browser.window.BK.onAudioInterruptionStart(this.onAudioInterruptionStartEve);
        //音频中断结束
        //CD.log("Laya.Browser.window.BK.onAudioInterruptionEnd");
        Laya.Browser.window.BK.onAudioInterruptionEnd(this.onAudioInterruptionEndEve);
        //CD.log("Laya.Browser.window.BK.listenGameEventEnterBackground");
        Laya.Browser.window.BK.QQ.listenGameEventEnterBackground({}, this.listenGameEventEnterBackgroundEve);
        // CD.log("Laya.Browser.window.BK.listenGameEventEnterForeground");
        //重新恢复播放
        Laya.Browser.window.BK.QQ.listenGameEventEnterForeground({}, this.listenGameEventEnterForegroundEve);
    };
    Wanyiwan_Manager.prototype.OnLoadListener = function () {
        CD.log("onLoad");
    };
    Wanyiwan_Manager.prototype.onEnterForegroundEve = function () {
        CD.log("进入前台");
    };
    Wanyiwan_Manager.prototype.onGameCloseEve = function () {
        CD.log("关闭游戏");
    };
    Wanyiwan_Manager.prototype.onEnterBackgroundEve = function () {
        CD.log("退出前台");
    };
    Wanyiwan_Manager.prototype.onMinimizeEve = function () {
        CD.log("最小化");
    };
    Wanyiwan_Manager.prototype.onAudioInterruptionStartEve = function () {
        //CD.log("音频被中断");
    };
    Wanyiwan_Manager.prototype.onAudioInterruptionEndEve = function () {
        // CD.log("音频中断结束");
    };
    Wanyiwan_Manager.prototype.listenGameEventEnterBackgroundEve = function () {
        // CD.log("soundPool.paused");
        if (audioManager != null) {
            audioManager.Pause_Music();
            audioManager.Set_Sound_Volume(0);
        }
    };
    Wanyiwan_Manager.prototype.listenGameEventEnterForegroundEve = function () {
        CD.log("soundPool.play()");
        if (SM != null) {
            if (SM.playAD)
                return;
        }
        if (audioManager != null) {
            if (UI.Main_View != null) {
                CD.log("UI.Main_View.MusicActive: " + UI.Main_View.MusicActive);
                if (UI.Main_View.SoundActive == 1) {
                    audioManager.Set_Sound_Volume(100);
                }
                if (UI.Main_View.MusicActive == 1) {
                    audioManager.Continue_Music();
                }
                else {
                    audioManager.Pause_Music();
                }
            }
        }
    };
    Wanyiwan_Manager.prototype.onNetworkChangeListener = function (data) {
        CD.log("onNetworkChangeListener");
        if (data.state == Laya.Browser.window.BK.NetworkState.NoneToMobileNetwork) {
            CD.log("从无网络到移动网络");
        }
        else if (data.state == Laya.Browser.window.BK.NetworkState.NoneToWifi) {
            CD.log("无网络到WiFi网络");
        }
        else if (data.state == Laya.Browser.window.BK.NetworkState.MobileNetworkToWifi) {
            CD.log("移动网络到WiFi网络");
        }
        else if (data.state == Laya.Browser.window.BK.NetworkState.MobileNetworkToNone) {
            CD.log("移动网络到无网络");
        }
        else if (data.state == Laya.Browser.window.BK.NetworkState.WifiToNone) {
            CD.log("WiFi到无网络");
            //KBEngine.app.disconnect();
            // if (heroplayer != null)
            // {
            //     heroplayer.loginok = false;
            //     heroplayer = null;
            // }
            // LC.Reconnect_Server();
        }
        else if (data.state == Laya.Browser.window.BK.NetworkState.WifiToMobileNetwork) {
            CD.log("WiFi到移动网络");
            // KBEngine.app.disconnect();
            // if (heroplayer != null)
            // {
            //     heroplayer.loginok = false;
            //     heroplayer = null;
            // }
            // LC.Reconnect_Server();
        }
        CD.log("onNetworkChangeListener1111");
    };
    return Wanyiwan_Manager;
}());
//# sourceMappingURL=Wanyiwan_Manager.js.map