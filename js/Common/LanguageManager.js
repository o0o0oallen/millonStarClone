/*
* name;
*/
var LanguageManager = /** @class */ (function () {
    function LanguageManager() {
        this.D = null;
    }
    LanguageManager.prototype.loadXML = function () {
        var _URL = "res/language/" + CD.Language + ".json";
        //console.log(_URL);
        //console.log(CD.getFileVersionPath(_URL));
        var _Json = Laya.loader.getRes(CD.getFileVersionPath(_URL));
        //console.log(CD.getFileVersionPath(_Json));
        this.D = JSON.parse(JSON.stringify(_Json));
        ;
    };
    LanguageManager.prototype.G = function (nid, param, obj) {
        var txtobj;
        var stext = nid.toString();
        if (this.D != null && this.D != undefined && this.D.hasOwnProperty(nid)) {
            txtobj = this.StringFormat(this.D[nid], param);
        }
        if (typeof txtobj === "string") {
            stext = txtobj;
        }
        if (typeof txtobj === "object") {
            if (txtobj.hasOwnProperty("text"))
                stext = txtobj.text;
            if (obj != undefined && txtobj.hasOwnProperty("fontSize")) {
                if (obj.hasOwnProperty("fontSize"))
                    obj.fontSize = txtobj.fontSize;
                if (obj.hasOwnProperty("labelSize"))
                    obj.labelSize = txtobj.fontSize;
            }
        }
        return stext;
    };
    //字符串拼接
    LanguageManager.prototype.StringFormat = function (str, arr) {
        if (arr == null || arr == undefined)
            return str;
        var stext = "";
        if (typeof str === "string")
            stext = str;
        if (typeof str === "object" && str.hasOwnProperty("text"))
            stext = str.text;
        for (var i = 0; i < arr.length; i++) {
            if (stext.indexOf("{" + i + "}") >= 0) {
                stext = stext.replace("{" + i + "}", arr[i].toString());
            }
        }
        if (typeof str === "string")
            str = stext;
        if (typeof str === "object" && str.hasOwnProperty("text"))
            str.text = stext;
        return str;
    };
    return LanguageManager;
}());
//# sourceMappingURL=LanguageManager.js.map