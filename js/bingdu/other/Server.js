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
/**
* Server
*/
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        var _this = _super.call(this) || this;
        _this.url = null;
        Server.ME = _this;
        return _this;
    }
    // public getLiu(t) {
    // 	Http.II().sendPost("getLiu", this.url + "auth/get_retention", this.sign({
    // 		begin_date: "2019-01-10 00:00:00",
    // 		end_date: "2080-01-10 00:00:00",
    // 		channel: t
    // 	}), this.onDataBack, this, false);
    // }
    // public upLoadUserInfo(t) {
    // 	Http.II().sendPost("upLoadUserInfo", this.url + "archive/upload_user_info", this.sign({
    // 		nickname: t.nickName,
    // 		avatar: t.avatarUrl,
    // 		sex: t.gender,
    // 		address: t.country + "." + t.province + "." + t.city
    // 	}), this.onDataBack, this, false);
    // }
    // public upLoadChannel(t) {
    // 	Http.II().sendPost("upLoadChannel", this.url + "archive/upload_user_info", this.sign({
    // 		channel: t
    // 	}), this.onDataBack, this, false);
    // }
    // public uploadImg64(t) {
    // 	Http.II().sendPost("uploadImg64", this.url + "archive/upload_file", this.sign({
    // 		file: t
    // 	}), this.onDataBack, this, false);
    // }
    // public uploadRecord(t) {
    // 	this._uploadRecord(t.data);
    // }
    // public _uploadRecord(t) {
    // 	Http.II().sendPost("uploadRecord", this.url + "archive/upload", this.sign({
    // 		plat: "wx",
    // 		record: t
    // 	}), this.onDataBack, this, false);
    // }
    // public downloadRecord() {
    // 	Http.II().sendPost("downloadRecord", this.url + "archive/get", this.sign({
    // 		plat: "wx"
    // 	}), this.onDataBack, this, false);
    // }
    // public beInviter(t) {
    // 	Http.II().sendPost("beInbiter", this.url + "invit/add", this.sign({
    // 		openid_tag: t
    // 	}), this.onDataBack, this, false);
    // }
    // public getInvited(t) {
    // 	Http.II().sendPost("getInvited", this.url + "invit/get", this.sign({
    // 		page: t
    // 	}), this.onDataBack, this, false);
    // }
    // public getInvitReward(t) {
    // 	Http.II().sendPost("getInvitReward", this.url + "invit/get_reward", this.sign({
    // 		openid_tag: t
    // 	}), this.onDataBack, this, false);
    // }
    // public login(t = "") {
    // 	Http.II().sendPost("login", this.url + "/game/getdata.aspx", this.sign({
    // 		channel: t
    // 	}), this.onDataBack, this, false);
    // }
    Server.prototype.onDataBack = function (t) {
        if ("" != t.data) {
            // var e = t.json();
            // switch (t.name) {
            // 	case "downloadRecord":
            // 		SV.ME.applayServer(null == e.data.record ? "empty" : e.data.record);
            // 		break;
            // 	case "uploadRecord":
            // 		break;
            // 	case "getLiu":
            // 		console.log(e.data.infos["2019-01-16 00:00:00"]),
            // 			console.log(t.data);
            // }
            this.event(t.name, e);
        }
        else
            this.event(t.name, null);
    };
    Server.ME = null;
    return Server;
}(Game_Event));
//end Server
//# sourceMappingURL=Server.js.map