/*
* Ycj
* 2018 - 04 - 23
* 主界面
*/
var Common_Method = /** @class */ (function () {
    function Common_Method() {
    }
    /**
     * 优化服务端传入的时间格式
     * @param strTime
     */
    Common_Method.prototype.Get_TimeStr = function (strTime) {
        strTime = strTime.replace("-", "/");
        strTime = strTime.replace("-", "/");
        return strTime;
    };
    Common_Method.prototype.CheckNum = function (num) {
        if (num < 10) {
            return "0" + num.toString();
        }
        return num.toString();
    };
    Common_Method.prototype.GetNoRepetID = function () {
        var _Result = this.Get_Local_Date() + this.Get_Local_Date_HMS() + this.PrefixInteger(new Date().getMilliseconds(), 3) + this.PrefixInteger(this.Get_Random(1, 999), 3);
        return _Result;
    };
    //生成从minNum到maxNum的随机数
    Common_Method.prototype.Get_Random = function (_Min, _Max) {
        var _Result = Math.floor(Math.random() * (_Max - _Min + 1) + _Min);
        return _Result;
    };
    //生成从minNum到maxNum的随机数
    Common_Method.prototype.Get_Not_Repetition_Random = function (_Value, _Min, _Max) {
        var _Result = Math.floor(Math.random() * (_Max - _Min + 1) + _Min);
        if (_Value == _Result) {
            return this.Get_Not_Repetition_Random(_Value, _Min, _Max);
        }
        return _Result;
    };
    //计算角度
    Common_Method.prototype.Get_Angle = function (_Origin_X, _Origin_Y, _Target_X, _Target_Y) {
        //获得人物中心和鼠标坐标连线，与y轴正半轴之间的夹角
        var _X = Math.abs(_Origin_X - _Target_X);
        var _Y = Math.abs(_Origin_Y - _Target_Y);
        var _Z = Math.sqrt(Math.pow(_X, 2) + Math.pow(_Y, 2));
        var _Cos = _Y / _Z;
        var _Radina = Math.acos(_Cos); //用反三角函数求弧度
        var _Angle = 180 / (Math.PI / _Radina); //将弧度转换成角度
        if (_Target_X > _Origin_X && _Target_Y > _Origin_Y) {
            //鼠标在第四象限
            _Angle = 180 - _Angle;
        }
        if (_Target_X == _Origin_X && _Target_Y > _Origin_Y) {
            //鼠标在y轴负方向上
            _Angle = 180;
        }
        if (_Target_X > _Origin_X && _Target_Y == _Origin_Y) {
            //鼠标在x轴正方向上
            _Angle = 90;
        }
        if (_Target_X < _Origin_X && _Target_Y > _Origin_Y) {
            //鼠标在第三象限
            _Angle = 180 + _Angle;
        }
        if (_Target_X < _Origin_X && _Target_Y == _Origin_Y) {
            //鼠标在x轴负方向
            _Angle = 270;
        }
        if (_Target_X < _Origin_X && _Target_Y < _Origin_Y) {
            //鼠标在第二象限
            _Angle = 360 - _Angle;
        }
        return _Angle;
    };
    //缓冲移动
    Common_Method.prototype.Tween_Position = function (_Object, _Target_X, _Target_Y, _Method, _Method_Args, _Time) {
        Laya.Tween.to(_Object, { x: _Target_X, y: _Target_Y, ease: Laya.Ease.linearNone, complete: Laya.Handler.create(this, _Method, _Method_Args) }, _Time);
    };
    Common_Method.prototype.PrefixInteger = function (num, length) {
        return (Array(length).join('0') + num).slice(-length);
    };
    //得到时间
    Common_Method.prototype.Get_Local_Date = function (s) {
        if (s === void 0) { s = ""; }
        var _Date = new Date();
        return this.PrefixInteger(_Date.getFullYear(), 4) + s + this.PrefixInteger(_Date.getMonth() + 1, 2) + s + this.PrefixInteger(_Date.getDate(), 2);
    };
    //得到时间 时分秒
    Common_Method.prototype.Get_Local_Date_HMS = function () {
        var _Date = new Date();
        return this.PrefixInteger(_Date.getHours(), 2) + this.PrefixInteger(_Date.getMinutes(), 2) + this.PrefixInteger(_Date.getSeconds(), 2);
    };
    Common_Method.prototype.Get_Local_Time = function () {
        var _Date = new Date();
        var s = CD.Platform == Platform.Ios ? "/" : "-";
        return this.PrefixInteger(_Date.getFullYear(), 4) + "" + s + "" +
            this.PrefixInteger(_Date.getMonth() + 1, 2) + "" + s + "" +
            this.PrefixInteger(_Date.getDate(), 2) + " " +
            this.PrefixInteger(_Date.getHours(), 2) + ":" +
            this.PrefixInteger(_Date.getMinutes(), 2) + ":" +
            this.PrefixInteger(_Date.getSeconds(), 2);
    };
    Common_Method.prototype.Get_Local_TimeToShuShu = function () {
        var _Date = new Date();
        return this.PrefixInteger(_Date.getFullYear(), 4) + "-" +
            this.PrefixInteger(_Date.getMonth() + 1, 2) + "-" +
            this.PrefixInteger(_Date.getDate(), 2) + " " +
            this.PrefixInteger(_Date.getHours(), 2) + ":" +
            this.PrefixInteger(_Date.getMinutes(), 2) + ":" +
            this.PrefixInteger(_Date.getSeconds(), 2);
    };
    //得到时间
    Common_Method.prototype.Get_Convert_Date = function (_Date) {
        return this.PrefixInteger(_Date.getFullYear(), 4) + "/" +
            this.PrefixInteger(_Date.getMonth() + 1, 2) + "/" +
            this.PrefixInteger(_Date.getDate(), 2) + " " +
            this.PrefixInteger(_Date.getHours(), 2) + ":" +
            this.PrefixInteger(_Date.getMinutes(), 2) + ":" +
            this.PrefixInteger(_Date.getSeconds(), 2);
    };
    //得到方向
    Common_Method.prototype.Get_Direction = function (_Origin_X, _Origin_Y, _Target_X, _Target_Y) {
        var _Direction = new Laya.Point(_Target_X - _Origin_X, _Target_Y - _Origin_Y);
        _Direction.normalize();
        return _Direction;
    };
    //获取当天0点时间戳
    Common_Method.prototype.Get_today_time = function () {
        var now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        var nowTime = now.getTime();
        var _times = nowTime;
        _times = _times / 1000;
        return _times;
    };
    //得到字符串长度
    Common_Method.prototype.Get_String_Length = function (_Value) {
        var _Length = 0, len = _Value.length, _Char_Code = -1;
        for (var i = 0; i < len; i++) {
            _Char_Code = _Value.charCodeAt(i);
            if (_Char_Code >= 0 && _Char_Code <= 128) {
                _Length += 1;
            }
            else {
                _Length += 2;
            }
        }
        return _Length;
    };
    //替换字符串
    Common_Method.prototype.Replace_String = function (_Value, _Limit_Length) {
        var _Real_length = 0;
        var _Length = _Value.length;
        var _Temp_Length = 0;
        var _Result = "";
        var _Char_Code;
        if (this.Get_String_Length(_Value) <= _Limit_Length) {
            return _Value;
        }
        for (var i = 0; i < _Length; i++) {
            _Char_Code = _Value.charCodeAt(i);
            if (_Char_Code >= 0 && _Char_Code <= 128) {
                _Temp_Length = 1;
            }
            else {
                _Temp_Length = 2;
            }
            _Real_length += _Temp_Length;
            _Result = _Result.concat(_Value.charAt(i));
            if (_Real_length >= _Limit_Length) {
                _Result = _Result.concat("...");
                return _Result;
            }
        }
        if (_Real_length < _Limit_Length) {
            return _Value;
        }
    };
    //判断字符串是否包含Emoji表情
    Common_Method.prototype.Is_Emoji = function (_Value) {
        for (var i = 0; i < _Value.length; i++) {
            var hs = _Value.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (_Value.length > 1) {
                    var ls = _Value.charCodeAt(i + 1);
                    var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            }
            else if (_Value.length > 1) {
                var ls = _Value.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            }
            else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                }
                else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                }
                else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                }
                else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                }
                else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b || hs == 0x2b50) {
                    return true;
                }
            }
        }
    };
    //过滤Emoji
    Common_Method.prototype.Filter_Emoji = function (_Value) {
        var _Is_Emoji = this.Is_Emoji(_Value);
        if (_Is_Emoji == false) {
            console.log("不包含Emoji表情");
            return _Value;
        }
        var _Result = _Value.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\eD83D[\uDE80-\uDEff]/g, "★");
        //var _Result:string = _Value.replace(/[\u2190-\u21FF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u3000-\u303F]|[\u1F300-\u1F64F]|[\u1F680-\u1F6FF]/g, "");
        console.log("包含Emoji表情");
        return _Result;
    };
    //加载纹理资源
    Common_Method.prototype.Load_Texture_Resource = function (_URL, _Object, _Width, _Height) {
        //先加载图片资源，在图片资源加载成功后，通过回调方法绘制图片并添加到舞台
        Laya.loader.load(_URL, Laya.Handler.create(this, this.Load_Texture_Resource_Complete, [_URL, _Object, _Width, _Height]));
        //加载失败事件
        Laya.loader.on(Laya.Event.ERROR, this, GameMain.Load_Error);
    };
    //加载背景图片完成事件
    Common_Method.prototype.Load_Texture_Resource_Complete = function (_URL, _Object, _Width, _Height) {
        var _Texture = Laya.loader.getRes(_URL);
        if (_Texture == null || _Texture == undefined) {
            Laya.timer.once(10000, this, this.Load_Texture_Resource, [_URL, _Object, _Width, _Height]);
            return;
        }
        _Texture.width = _Width;
        _Texture.height = _Height;
        _Object.source = _Texture;
    };
    //BezierPoints ltt
    Common_Method.prototype.CreateBezierPoints = function (anchorpoints, pointsAmount) {
        var points = [];
        for (var i = 0; i < pointsAmount; i++) {
            var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);
            points.push(point);
        }
        return points;
    };
    Common_Method.prototype.MultiPointBezier = function (anchorpoints, t) {
        var len = anchorpoints.length;
        var x = 0, y = 0;
        for (var i_1 = 0; i_1 < len; i_1++) {
            var point = anchorpoints[i_1];
            x += point.x * Math.pow((1 - t), (len - 1 - i_1)) * Math.pow(t, i_1) * (this.erxiangshi(len - 1, i_1));
            y += point.y * Math.pow((1 - t), (len - 1 - i_1)) * Math.pow(t, i_1) * (this.erxiangshi(len - 1, i_1));
        }
        return { x: x, y: y };
    };
    Common_Method.prototype.erxiangshi = function (start, end) {
        var cs = 1, bcs = 1;
        while (end > 0) {
            cs *= start;
            bcs *= end;
            start--;
            end--;
        }
        return (cs / bcs);
    };
    ;
    return Common_Method;
}());
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return "x=" + this.x + " y=" + this.y;
    };
    return Point;
}());
//# sourceMappingURL=Common_Method.js.map