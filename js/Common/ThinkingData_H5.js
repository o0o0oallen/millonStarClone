/*
* name;
*/
var ThinkingData_H5 = /** @class */ (function () {
    function ThinkingData_H5() {
        //if(Laya.Browser.onWeiXin) return;
        ThinkingData_H5.ME = this;
        // 创建 SDK 配置对象
        var config = {
            send_method: 'ajax',
            appId: 'fcf938dbf541441d8f980c4fbda92601',
            serverUrl: 'https://analytics.tapque.com/sync_xcx',
            useAppTrack: true,
            showLog: false,
            // persistence:'cookie',
        };
        // 将 SDK 实例赋给全局变量 ta，或者其他您指定的变量
        // this.ta = Laya.Browser.window.thinkingdata;//HMS
        //console.log(this.ta);
        if (this.ta != null) {
            // 用配置对象初始化 SDK
            this.ta.init(config);
            // 之后您就可以使用 ta 来上报事件了
            this.ta.track('test_event');
            //console.log("sfsdf",this.ta);
        }
    }
    ThinkingData_H5.prototype.init = function () {
        //console.log("this.tq");
        //console.log(this.ta);
        //console.log("ThinkingData init",this.ta.serverUrl);
        this.ta && this.ta.init();
    };
    ThinkingData_H5.prototype.login = function (_data) {
        this.ta && this.ta.login(_data);
    };
    //设置访客ID
    ThinkingData_H5.prototype.identify = function (_data) {
        this.ta && this.ta.identify(_data);
    };
    ThinkingData_H5.prototype.user_setOnce = function (_json) {
        //console.log("user_setOnce======");
        //console.log(_json);
        //ta.userSetOnce({user_name:'TA'});
        this.ta && this.ta.userSetOnce(_json);
    };
    ThinkingData_H5.prototype.setSP = function (channel, username) {
        //console.log("channel:"+channel+"===user_name:"+username);
        this.ta && this.ta.setSuperProperties({ 'channel': channel, 'user_name': username });
    };
    ThinkingData_H5.prototype.user_set = function (_json) {
        // ta.userSet({vip_level:'钻石会员'});
        // console.log("user_set:");
        // console.log(_json);
        this.ta && this.ta.userSet(_json);
    };
    //累加用户属性（userAdd）
    ThinkingData_H5.prototype.user_add = function (_json) {
        //console.log("累加用户属性（userAdd）");
        //console.log(_json);
        // ta.userAdd({total_revenue:50});
        this.ta && this.ta.userAdd(_json);
    };
    //账号汇报
    ThinkingData_H5.prototype.track = function (_key, _json) {
        //console.log("账号汇报===_key:"+_key);
        //console.log(_json);
        this.ta && this.ta.track(_key, //追踪事件的名称
        _json //需要上传的事件属性
        );
    };
    return ThinkingData_H5;
}());
//# sourceMappingURL=ThinkingData_H5.js.map