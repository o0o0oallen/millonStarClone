/**
* name
*/
var CFunc = /** @class */ (function () {
    function CFunc(name) {
        // private bigUnit  = ["" , "k" , "m" , "b" , "t",
        // 						"aa" , 	"ab" , 	"ac" , 	"ad" , 	"ae" , 	"af" , 	"ag" , 	"ah" , 	"ai" , 	"aj" , 	"ak" , 	"al" , 	"am" , 	"an" , 	"ao" , 	"ap" , 	"aq" , 	"ar" , 	"as" , 	"at" , 	"au" , 	"av" , 	"aw" , 	"ax" , 	"ay" , 	"az" , 
        // 						"ba" , 	"bb" , 	"bc" , 	"bd" , 	"be" , 	"bf" , 	"bg" , 	"bh" , 	"bi" , 	"bj" , 	"bk" , 	"bl" , 	"bm" , 	"bn" , 	"bo" , 	"bp" , 	"bq" , 	"br" , 	"bs" , 	"bt" , 	"bu" , 	"bv" , 	"bw" , 	"bx" , 	"by" , 	"bz" , 
        // 						"ca" , 	"cb" , 	"cc" , 	"cd" , 	"ce" , 	"cf" , 	"cg" , 	"ch" , 	"ci" , 	"cj" , 	"ck" , 	"cl" , 	"cm" , 	"cn" , 	"co" , 	"cp" , 	"cq" , 	"cr" , 	"cs" , 	"ct" , 	"cu" , 	"cv" , 	"cw" , 	"cx" , 	"cy" , 	"cz" , 
        // 						"da" , 	"db" , 	"dc" , 	"dd" , 	"de" , 	"df" , 	"dg" , 	"dh" , 	"di" , 	"dj" , 	"dk" , 	"dl" , 	"dm" , 	"dn" , 	"do" , 	"dp" , 	"dq" , 	"dr" , 	"ds" , 	"dt" , 	"du" , 	"dv" , 	"dw" , 	"dx" , 	"dy" , 	"dz" , 
        // 						"ea" , 	"eb" , 	"ec" , 	"ed" , 	"ee" , 	"ef" , 	"eg" , 	"eh" , 	"ei" , 	"ej" , 	"ek" , 	"el" , 	"em" , 	"en" , 	"eo" , 	"ep" , 	"eq" , 	"er" , 	"es" , 	"et" , 	"eu" , 	"ev" , 	"ew" , 	"ex" , 	"ey" , 	"ez" , 
        // 						"fa" , 	"fb" , 	"fc" , 	"fd" , 	"fe" , 	"ff" , 	"fg" , 	"fh" , 	"fi" , 	"fj" , 	"fk" , 	"fl" , 	"fm" , 	"fn" , 	"fo" , 	"fp" , 	"fq" , 	"fr" , 	"fs" , 	"ft" , 	"fu" , 	"fv" , 	"fw" , 	"fx" , 	"fy" , 	"fz" , 
        // 						"ga" , 	"gb" , 	"gc" , 	"gd" , 	"ge" , 	"gf" , 	"gg" , 	"gh" , 	"gi" , 	"gj" , 	"gk" , 	"gl" , 	"gm" , 	"gn" , 	"go" , 	"gp" , 	"gq" , 	"gr" , 	"gs" , 	"gt" , 	"gu" , 	"gv" , 	"gw" , 	"gx" , 	"gy" , 	"gz" , 
        // 						"ha" , 	"hb" , 	"hc" , 	"hd" , 	"he" , 	"hf" , 	"hg" , 	"hh" , 	"hi" , 	"hj" , 	"hk" , 	"hl" , 	"hm" , 	"hn" , 	"ho" , 	"hp" , 	"hq" , 	"hr" , 	"hs" , 	"ht" , 	"hu" , 	"hv" , 	"hw" , 	"hx" , 	"hy" , 	"hz" , 
        // 						"ia" , 	"ib" , 	"ic" , 	"id" , 	"ie" , 	"if" , 	"ig" , 	"ih" , 	"ii" , 	"ij" , 	"ik" , 	"il" , 	"im" , 	"in" , 	"io" , 	"ip" , 	"iq" , 	"ir" , 	"is" , 	"it" , 	"iu" , 	"iv" , 	"iw" , 	"ix" , 	"iy" , 	"iz" , 
        // 						"ja" , 	"jb" , 	"jc" , 	"jd" , 	"je" , 	"jf" , 	"jg" , 	"jh" , 	"ji" , 	"jj" , 	"jk" , 	"jl" , 	"jm" , 	"jn" , 	"jo" , 	"jp" , 	"jq" , 	"jr" , 	"js" , 	"jt" , 	"ju" , 	"jv" , 	"jw" , 	"jx" , 	"jy" , 	"jz" , 
        // 						"ka" , 	"kb" , 	"kc" , 	"kd" , 	"ke" , 	"kf" , 	"kg" , 	"kh" , 	"ki" , 	"kj" , 	"kk" , 	"kl" , 	"km" , 	"kn" , 	"ko" , 	"kp" , 	"kq" , 	"kr" , 	"ks" , 	"kt" , 	"ku" , 	"kv" , 	"kw" , 	"kx" , 	"ky" , 	"kz" , 
        // 						"la" , 	"lb" , 	"lc" , 	"ld" , 	"le" , 	"lf" , 	"lg" , 	"lh" , 	"li" , 	"lj" , 	"lk" , 	"ll" , 	"lm" , 	"ln" , 	"lo" , 	"lp" , 	"lq" , 	"lr" , 	"ls" , 	"lt" , 	"lu" , 	"lv" , 	"lw" , 	"lx" , 	"ly" , 	"lz" , 
        // 						"ma" , 	"mb" , 	"mc" , 	"md" , 	"me" , 	"mf" , 	"mg" , 	"mh" , 	"mi" , 	"mj" , 	"mk" , 	"ml" , 	"mm" , 	"mn" , 	"mo" , 	"mp" , 	"mq" , 	"mr" , 	"ms" , 	"mt" , 	"mu" , 	"mv" , 	"mw" , 	"mx" , 	"my" , 	"mz" , 
        // 						"na" , 	"nb" , 	"nc" , 	"nd" , 	"ne" , 	"nf" , 	"ng" , 	"nh" , 	"ni" , 	"nj" , 	"nk" , 	"nl" , 	"nm" , 	"nn" , 	"no" , 	"np" , 	"nq" , 	"nr" , 	"ns" , 	"nt" , 	"nu" , 	"nv" , 	"nw" , 	"nx" , 	"ny" , 	"nz" , 
        // 						"oa" , 	"ob" , 	"oc" , 	"od" , 	"oe" , 	"of" , 	"og" , 	"oh" , 	"oi" , 	"oj" , 	"ok" , 	"ol" , 	"om" , 	"on" , 	"oo" , 	"op" , 	"oq" , 	"or" , 	"os" , 	"ot" , 	"ou" , 	"ov" , 	"ow" , 	"ox" , 	"oy" , 	"oz" , 
        // 						"pa" , 	"pb" , 	"pc" , 	"pd" , 	"pe" , 	"pf" , 	"pg" , 	"ph" , 	"pi" , 	"pj" , 	"pk" , 	"pl" , 	"pm" , 	"pn" , 	"po" , 	"pp" , 	"pq" , 	"pr" , 	"ps" , 	"pt" , 	"pu" , 	"pv" , 	"pw" , 	"px" , 	"py" , 	"pz" , 
        // 						"qa" , 	"qb" , 	"qc" , 	"qd" , 	"qe" , 	"qf" , 	"qg" , 	"qh" , 	"qi" , 	"qj" , 	"qk" , 	"ql" , 	"qm" , 	"qn" , 	"qo" , 	"qp" , 	"qq" , 	"qr" , 	"qs" , 	"qt" , 	"qu" , 	"qv" , 	"qw" , 	"qx" , 	"qy" , 	"qz" , 
        // 						"ra" , 	"rb" , 	"rc" , 	"rd" , 	"re" , 	"rf" , 	"rg" , 	"rh" , 	"ri" , 	"rj" , 	"rk" , 	"rl" , 	"rm" , 	"rn" , 	"ro" , 	"rp" , 	"rq" , 	"rr" , 	"rs" , 	"rt" , 	"ru" , 	"rv" , 	"rw" , 	"rx" , 	"ry" , 	"rz" , 
        // 						"sa" , 	"sb" , 	"sc" , 	"sd" , 	"se" , 	"sf" , 	"sg" , 	"sh" , 	"si" , 	"sj" , 	"sk" , 	"sl" , 	"sm" , 	"sn" , 	"so" , 	"sp" , 	"sq" , 	"sr" , 	"ss" , 	"st" , 	"su" , 	"sv" , 	"sw" , 	"sx" , 	"sy" , 	"sz" , 
        // 						"ta" , 	"tb" , 	"tc" , 	"td" , 	"te" , 	"tf" , 	"tg" , 	"th" , 	"ti" , 	"tj" , 	"tk" , 	"tl" , 	"tm" , 	"tn" , 	"to" , 	"tp" , 	"tq" , 	"tr" , 	"ts" , 	"tt" , 	"tu" , 	"tv" , 	"tw" , 	"tx" , 	"ty" , 	"tz" , 
        // 						"ua" , 	"ub" , 	"uc" , 	"ud" , 	"ue" , 	"uf" , 	"ug" , 	"uh" , 	"ui" , 	"uj" , 	"uk" , 	"ul" , 	"um" , 	"un" , 	"uo" , 	"up" , 	"uq" , 	"ur" , 	"us" , 	"ut" , 	"uu" , 	"uv" , 	"uw" , 	"ux" , 	"uy" , 	"uz" , 
        // 						"va" , 	"vb" , 	"vc" , 	"vd" , 	"ve" , 	"vf" , 	"vg" , 	"vh" , 	"vi" , 	"vj" , 	"vk" , 	"vl" , 	"vm" , 	"vn" , 	"vo" , 	"vp" , 	"vq" , 	"vr" , 	"vs" , 	"vt" , 	"vu" , 	"vv" , 	"vw" , 	"vx" , 	"vy" , 	"vz" , 
        // 						"wa" , 	"wb" , 	"wc" , 	"wd" , 	"we" , 	"wf" , 	"wg" , 	"wh" , 	"wi" , 	"wj" , 	"wk" , 	"wl" , 	"wm" , 	"wn" , 	"wo" , 	"wp" , 	"wq" , 	"wr" , 	"ws" , 	"wt" , 	"wu" , 	"wv" , 	"ww" , 	"wx" , 	"wy" , 	"wz" , 
        // 						"xa" , 	"xb" , 	"xc" , 	"xd" , 	"xe" , 	"xf" , 	"xg" , 	"xh" , 	"xi" , 	"xj" , 	"xk" , 	"xl" , 	"xm" , 	"xn" , 	"xo" , 	"xp" , 	"xq" , 	"xr" , 	"xs" , 	"xt" , 	"xu" , 	"xv" , 	"xw" , 	"xx" , 	"xy" , 	"xz" , 
        // 						"ya" , 	"yb" , 	"yc" , 	"yd" , 	"ye" , 	"yf" , 	"yg" , 	"yh" , 	"yi" , 	"yj" , 	"yk" , 	"yl" , 	"ym" , 	"yn" , 	"yo" , 	"yp" , 	"yq" , 	"yr" , 	"ys" , 	"yt" , 	"yu" , 	"yv" , 	"yw" , 	"yx" , 	"yy" , 	"yz" , 
        // 						"za" , 	"zb" , 	"zc" , 	"zd" , 	"ze" , 	"zf" , 	"zg" , 	"zh" , 	"zi" , 	"zj" , 	"zk" , 	"zl" , 	"zm" , 	"zn" , 	"zo" , 	"zp" , 	"zq" , 	"zr" , 	"zs" , 	"zt" , 	"zu" , 	"zv" , 	"zw" , 	"zx" , 	"zy" , 	"zz" 
        // ];
        this.m_DPSbeishu = [0, 1, 3, 6, 12, 18, 25, 35, 47, 61, 77, 100, 126, 156, 190, 240, 295, 355, 420, 490, 590, 700, 820, 950, 1090, 1240];
        this._serverDate = new Date(); //获取
        this._serverDateLastGet = new Date(); //获取
    }
    CFunc.prototype.SetTickTime = function (t) {
        this._serverDate = new Date(t);
        this._serverDateLastGet = new Date();
        //console.log("t :"+t+" ,server :"+this._serverDateLastGet.getTime()+" ,now: "+new Date().getTime()+" , "+this._serverDate.toTimeString());
    };
    Object.defineProperty(CFunc.prototype, "serverTime", {
        get: function () {
            //console.log("server :"+this._serverDateLastGet.getTime()+" ,now: "+new Date().getTime()+" , "+this._serverDateLastGet.toTimeString());
            //console.log(this._serverDate.toTimeString()+","+this._serverDateLastGet.toTimeString());
            return new Date(this._serverDate.getTime() + (new Date().getTime() - this._serverDateLastGet.getTime()));
        },
        enumerable: false,
        configurable: true
    });
    CFunc.prototype.ObjToNum = function (str) {
        return str;
    };
    CFunc.prototype.ObjToStr = function (str) {
        return str;
    };
    CFunc.prototype.GetValue = function (a, b) {
        return a * Math.pow(10, b);
    };
    //灰色滤镜
    CFunc.prototype.createGrayFilter = function () {
        //颜色滤镜矩阵,灰色
        var colorMatrix = [
            0.3086, 0.6094, 0.0820, 0, 0,
            0.3086, 0.6094, 0.0820, 0, 0,
            0.3086, 0.6094, 0.0820, 0, 0,
            0, 0, 0, 1, 0, //A
        ];
        //创建灰色颜色滤镜
        var GrayFilter = new Laya.ColorFilter(colorMatrix);
        return GrayFilter;
    };
    CFunc.prototype.moneyToABC = function (m, e) {
        var xe = e % 3;
        var eabc = Math.floor(e / 3);
        var out;
        var newm = m * Math.pow(10, xe);
        //if(eabc >= this.bigUnit.length)
        //	return parseFloat(newm.toPrecision(4)) + " e"+e;
        if (eabc < 0)
            eabc = 0;
        if (eabc == 0) {
            out = Math.floor(newm).toString();
        }
        else {
            // out = parseFloat(newm.toPrecision(4)) + this.bigUnit[eabc];
        }
        return out;
    };
    //传入金额,返回格式化结果 ,这里 m,e是科学计数法
    CFunc.prototype.moneyToString = function (m, e) {
        return this.moneyToABC(m, e);
        // var nowary :any = this.checkE(m,e);
        // m = nowary[0];
        // e = nowary[1];
        // var out :string = "";
        // var r_str:string="";
        // var l_str:string="";
        // var r = Math.floor(e/8);
        // if(r == 1)
        // {
        // 	r_str = "亿";
        // }
        // else if(r > 1)
        // {
        // 	r_str = "亿x"+r.toFixed();
        // }
        // else
        // {
        // 	r_str = "";
        // }
        // var w = e%8;
        // if(w>=4)
        // {
        // 	l_str = parseFloat((m*Math.pow(10,(w-4))).toFixed(2)) + "万";
        // }
        // else if(w>0)
        // {
        // 	l_str = parseFloat((m*Math.pow(10,w)).toFixed(2)) +"" ;
        // }
        // else if(w ==0 && e >= 0)	//e为负数进这里就错了
        // {
        // 	l_str = parseFloat(m.toFixed(2)) +"";
        // }
        // else	//小数w < 0
        // {
        // 	m = m * Math.pow(10,e);
        // 	l_str = parseFloat(m.toFixed(2)) +"";
        // }
        // return l_str+r_str;
    };
    CFunc.prototype.checkE = function (nowm, nowe) {
        if (nowm < 10 && nowm >= 1)
            return [nowm, nowe];
        if (nowm > -10 && nowm <= -1)
            return [nowm, nowe];
        var e_str = nowm.toExponential(3);
        //e_str = "%e"%nowm
        var ifind = e_str.indexOf("e");
        if (ifind == -1) {
            console.log("error ex:" + e_str);
            return [nowm, nowe];
        }
        //跳过正负符号 
        ifind += 1;
        //DEBUG_MSG(" ifind : %s ." % (ifind))
        var e = parseInt(e_str.slice(ifind));
        nowm = nowm * Math.pow(10, -e);
        nowe = nowe + e;
        // if(e == 0)
        // {
        // 	nowe = 0;
        // }
        return [nowm, nowe];
    };
    //判断2个金额是否可以扣除
    CFunc.prototype.canSub = function (nowm, nowe, subm, sube) {
        var nowary = this.checkE(nowm, nowe);
        nowm = nowary[0];
        nowe = nowary[1];
        var subary = this.checkE(subm, sube);
        subm = subary[0];
        sube = subary[1];
        if (subm < 0)
            return false;
        if (sube > nowe)
            return false;
        if (sube == nowe && subm > nowm)
            return false;
        return true;
    };
    CFunc.prototype.addE = function (nowm, nowe, addm, adde) {
        if (addm < 0)
            return [nowm, nowe, 0];
        if (addm == 0)
            return [nowm, nowe, 1];
        var e_com = adde - nowe;
        // DEBUG_MSG("addmoney1 [%2.9f][%i]%i:" % (addm ,adde,e_com))
        if (e_com == 0) //  #如果E相同
         {
            nowm = nowm + addm;
        }
        else if (e_com > 0) //如果加的数比较大,我们把当前数缩小
         {
            nowm = nowm * Math.pow(10, -e_com) + addm;
            nowe = adde;
        }
        else //如果加的数小
         {
            nowm = nowm + addm * Math.pow(10, e_com);
        }
        var subary = this.checkE(nowm, nowe);
        nowm = subary[0];
        nowe = subary[1];
        return [nowm, nowe, 1];
    };
    //减钱函数会判断是否可以减,第三个参数0表示失败,1表示成功
    CFunc.prototype.subE = function (nowm, nowe, addm, adde) {
        if (addm < 0)
            return [nowm, nowe, 0];
        if (addm == 0)
            return [nowm, nowe, 0];
        if (!this.canSub(nowm, nowe, addm, adde))
            return [nowm, nowe, 0];
        var e_com = adde - nowe;
        if (e_com == 0) ///E相同
         {
            nowm = nowm - addm;
            if (nowm == 0) {
                nowe = 0;
            }
        }
        else if (e_com < 0) //    #E扣的比较少 , 扣的多的情况不存在
            nowm = nowm - addm * Math.pow(10, e_com);
        else {
            console.log("error subE:" + e_com + ",now_m:" + nowm + ",now_e:" + nowe + ",sub_m:" + addm + ",sub_e:" + adde);
            return [nowm, nowe, 0];
        }
        var subary = this.checkE(nowm, nowe);
        nowm = subary[0];
        nowe = subary[1];
        return [nowm, nowe, 1];
    };
    CFunc.prototype.sube2 = function (nowm, nowe, addm, adde) {
        if (addm == 0)
            return [nowm, nowe, 1];
        var e_com = adde - nowe;
        var out = 0;
        if (e_com == 0) //E相同
         {
            nowm = nowm - addm;
            if (nowm == 0)
                nowe = 0;
        }
        else
            nowm = nowm - addm * Math.pow(10, e_com);
        if (nowm > 0)
            out = 1;
        var subary = this.checkE(nowm, nowe);
        nowm = subary[0];
        nowe = subary[1];
        return [nowm, nowe, out];
    };
    //乘法计算
    CFunc.prototype.multiplyE = function (nowm, nowe, addm, adde) {
        nowm = nowm * addm;
        nowe = nowe + adde;
        return this.checkE(nowm, nowe);
    };
    //除法计算
    CFunc.prototype.divideE = function (nowm, nowe, addm, adde) {
        nowm = nowm / addm;
        nowe = nowe - adde;
        return this.checkE(nowm, nowe);
    };
    CFunc.prototype.SameTime = function (time1, time2, zhouqi) {
        var t1;
        var t2;
        var timezone = this._serverDate.getTimezoneOffset(); //分钟为单位
        timezone = timezone * 60;
        //console.log(timezone);
        t1 = (time1 - timezone) | 0;
        t2 = (time2 - timezone) | 0;
        if (((t1 / zhouqi) | 0) != ((t2 / zhouqi) | 0))
            return 0;
        return 1;
    };
    //过去多少周
    CFunc.prototype.NumWeek = function (iTime) {
        //#1900年1月1日是星期4,所以要加3天等于1周,换为中国时间,最后除以7天,就是过去的周
        var timezone = this._serverDate.getTimezoneOffset(); //分钟为单位
        timezone = timezone * 60;
        return Math.floor((iTime + 3 * 24 * 3600 - timezone) / (3600 * 24 * 7));
    };
    //注意使用的时间格式必须是CM.Get_Local_Time生产的
    CFunc.prototype.NumDay = function (oldTime, nowTime) {
        oldTime = oldTime.split(" ");
        nowTime = nowTime.split(" ");
        var date1 = new Date(oldTime[0]);
        var date2 = new Date(nowTime[0]);
        var date = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24); /*不用考虑闰年否*/
        return Math.floor(date);
    };
    CFunc.prototype.SecToFullTimeString = function (sec) {
        var str = "";
        if (sec <= 0)
            return str;
        var d = (sec / 86400) | 0;
        var h = ((sec % 86400) / 3600) | 0;
        var m = ((sec % 3600) / 60) | 0;
        var s = (sec % 60) | 0;
        if (d >= 1) {
            str = d.toString() + "天" + h.toString() + "小时" + m.toString() + "分钟" + s.toString() + "秒";
        }
        else if (h >= 1) {
            str = (h > 9 ? h.toString() : "0" + h.toString()) + ":" + (m > 9 ? m.toString() : "0" + m.toString()) + ":" + (s > 9 ? s.toString() : "0" + s.toString());
        }
        else if (m >= 1) {
            str = (m > 9 ? m.toString() : "0" + m.toString()) + ":" + (s > 9 ? s.toString() : "0" + s.toString());
        }
        else {
            str = "00:" + (s > 9 ? s.toString() : "0" + s.toString());
        }
        return str;
    };
    CFunc.prototype.base64_encode = function (str) {
        //下面是64个基本的编码
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    };
    /*
      *  base64编码(编码，配合encodeURIComponent使用)
      *  @parm : str 传入的字符串
     */
    CFunc.prototype.utf16to8 = function (str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            }
            else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
            else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    };
    /*
      *  base64解码(配合decodeURIComponent使用)
      *  @parm : input 传入的字符串
      *  使用：
            1、引入util.js(路径更改) :const util  = require('../../utils/util.js');
            2、util.base64_decode('YmFzZTY0IOe8lueggQ==');
     */
    CFunc.prototype.base64_decode = function (input) {
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = base64EncodeChars.indexOf(input.charAt(i++));
            enc2 = base64EncodeChars.indexOf(input.charAt(i++));
            enc3 = base64EncodeChars.indexOf(input.charAt(i++));
            enc4 = base64EncodeChars.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        return this.utf8_decode(output);
    };
    /*
      *  utf-8解码
      *  @parm : utftext 传入的字符串
     */
    CFunc.prototype.utf8_decode = function (utftext) {
        var string = '';
        var i = 0;
        var c = 0;
        var c1 = 0;
        var c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c1 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
                i += 2;
            }
            else {
                c1 = utftext.charCodeAt(i + 1);
                c2 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
                i += 3;
            }
        }
        return string;
    };
    /*
        * base64编码函数封装
        * @parm: str(传入要编成base64的内容)
        * 使用：
            1、引入util.js(路径更改) :const util  = require('../../utils/util.js');
            2、util.baseEncode('base64 编码');
    */
    CFunc.prototype.baseEncode = function (str) {
        return this.base64_encode(this.utf16to8(str));
    };
    /*
        * base64解码函数封装
        * @parm: str(传入要解为正常字体)
        * 使用：
            1、引入util.js(路径更改) :const util  = require('../../utils/util.js');
            2、util.baseDecode(util.baseEncode('base64 编码'))
    */
    CFunc.prototype.baseDecode = function (str) {
        return this.base64_decode(str);
    }; // 抛出函数使用
    //返回汇报关卡范围
    CFunc.prototype.GetHuiBaoLevelStr = function (nLevel) {
        var sReturn = "";
        if (nLevel <= 5)
            sReturn = "0~5";
        else if (nLevel > 5 && nLevel <= 10)
            sReturn = "6~10";
        else if (nLevel > 10 && nLevel <= 15)
            sReturn = "11~15";
        else if (nLevel > 15 && nLevel <= 20)
            sReturn = "16~20";
        else if (nLevel > 20 && nLevel <= 30)
            sReturn = "21~30";
        else if (nLevel > 30 && nLevel <= 40)
            sReturn = "31~40";
        else if (nLevel > 40 && nLevel <= 50)
            sReturn = "41~50";
        else if (nLevel > 50 && nLevel <= 100)
            sReturn = "51~100";
        else if (nLevel > 100 && nLevel <= 200)
            sReturn = "101~200";
        else if (nLevel > 200 && nLevel <= 300)
            sReturn = "201~300";
        else if (nLevel > 300 && nLevel <= 400)
            sReturn = "301~400";
        else if (nLevel > 400 && nLevel <= 500)
            sReturn = "401~500";
        else
            sReturn = ">500";
        return sReturn;
    };
    return CFunc;
}());
//# sourceMappingURL=CFunc.js.map