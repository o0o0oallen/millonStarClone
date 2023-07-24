/*
* Ycj
* 2018 - 06 - 04
* 游戏接口
*/
var Game_Interface = /** @class */ (function () {
    function Game_Interface() {
    }
    //播放音乐
    Game_Interface.prototype.Play_Music = function () {
        console.log("GI PLAY MUSIC");
        audioManager.Play_Music("");
    };
    //停止音乐
    Game_Interface.prototype.Stop_Music = function () {
        //console.log("GI STOP MUSIC");
        audioManager.Pause_Music();
    };
    return Game_Interface;
}());
//# sourceMappingURL=Game_Interface.js.map