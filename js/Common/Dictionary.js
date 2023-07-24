/*
* name;
*/
var Dictionary = /** @class */ (function () {
    function Dictionary(name) {
        this.keys = [];
        this.values = [];
        this.length = 0;
        if (name != null && name != undefined)
            this.name = name;
        else
            this.name = "";
    }
    Dictionary.prototype.Add = function (key, value) {
        var index = this.keys.indexOf(key);
        if (index == -1)
            index = this.keys.indexOf(key + "");
        if (index == -1)
            index = this.keys.indexOf(parseInt(key));
        if (index != null && index != undefined && index >= 0) {
            console.log(" ERROR :: " + this.name + " : Dictionary.Add() : 已存在 key 为：" + key + "的数据！");
            return;
        }
        this.keys.push(key);
        this.values.push(value);
        this.length++;
    };
    Dictionary.prototype.Del = function (key) {
        var index = this.keys.indexOf(key);
        if (index != null && index != undefined && index >= 0) {
            var npos;
            npos = this.keys.indexOf(key);
            this.keys.splice(npos, 1);
            this.values.splice(npos, 1);
            this.length--;
        }
    };
    Dictionary.prototype.DelByIndex = function (npos) {
        if (npos < this.length) {
            this.keys.splice(npos, 1);
            this.values.splice(npos, 1);
            this.length--;
        }
    };
    Dictionary.prototype.GetValue = function (key) {
        var index = this.keys.indexOf(key);
        if (index == -1)
            index = this.keys.indexOf(key + "");
        if (index == -1)
            index = this.keys.indexOf(parseInt(key));
        if (index != null && index != undefined && index >= 0) {
            return this.values[index];
        }
        console.log(" ERROR :: " + this.name + " : Dictionary.GetValue() : 找不到 key 为" + key + "的数据！");
        return null;
    };
    Dictionary.prototype.SetValue = function (key, value) {
        var index = this.keys.indexOf(key);
        if (index == -1)
            index = this.keys.indexOf(key + "");
        if (index == -1)
            index = this.keys.indexOf(parseInt(key));
        if (index != null && index != undefined && index >= 0) {
            this.values[index] = value;
        }
        else {
            console.log(" ERROR :: " + this.name + " : Dictionary.SetValue() : 找不到1 key 为" + key + "的数据！");
        }
    };
    // 通过下标 获取key
    Dictionary.prototype.GetKeyOfIndex = function (index) {
        if (index == null || index < 0 || index >= this.length) {
            console.log(" ERROR :: " + this.name + " : Dictionary.GetKeyOfIndex() : index = " + index + ", Dictionary.length = " + this.length);
            return null;
        }
        return this.keys[index];
    };
    // 通过下标 获取value
    Dictionary.prototype.GetValueOfIndex = function (index) {
        if (index == null || index < 0 || index >= this.length) {
            console.log(" ERROR :: " + this.name + " : Dictionary.GetValueOfIndex() : index = " + index + ", Dictionary.length = " + this.length);
            return null;
        }
        return this.GetValue(this.keys[index]);
    };
    //判断Key是否存在
    Dictionary.prototype.ContainsKey = function (key) {
        var index = this.keys.indexOf(key);
        if (index == -1)
            index = this.keys.indexOf(key + "");
        if (index == -1)
            index = this.keys.indexOf(parseInt(key));
        if (index != null && index != undefined && index >= 0) {
            return true;
        }
        return false;
    };
    Dictionary.prototype.ToJson = function () {
        var str = "";
        for (var i = 0; i < this.keys.length; i++) {
            str += "\"" + this.keys[i] + "\" : \"" + this.values[i] + "\"";
            if (i + 1 < this.keys.length)
                str += ", ";
        }
        var jsonStr = "data={" + str + "}";
        //console.log("Dictionary.Tojson : " + jsonStr);
        return jsonStr;
    };
    Dictionary.prototype.GetKeys = function () {
        return this.keys.concat([]);
    };
    Dictionary.prototype.GetValues = function () {
        return this.values.concat([]);
    };
    Dictionary.prototype.clear = function () {
        this.length = 0;
        this.values = [];
        this.keys = [];
    };
    return Dictionary;
}());
//# sourceMappingURL=Dictionary.js.map