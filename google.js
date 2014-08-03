(function() {
    window.google = {
        kEI: 'EC_SU8_iMYeAywOn8oGABg',
        kEXPI: '4791,17259,3300065,3300115,3300133,3300137,3300164,3310366,3310648,3310702,4000116,4007661,4008142,4009033,4009641,4010806,4010858,4010899,4011228,4011258,4011679,4012373,4012504,4013414,4013591,4013723,4013787,4013967,4013979,4014016,4014431,4014515,4014544,4014637,4014671,4014805,4014991,4015234,4015266,4015550,4015587,4015772,4016127,4016309,4016372,4016487,4016824,4016976,4017162,4017204,4017280,4017284,4017337,4017590,4017595,4017612,4017639,4017658,4017659,4017681,4017694,4017742,4017818,4017894,4017913,4017981,4017982,4018009,4018019,4018106,4018126,4018159,4018180,4018416,4018480,4018519,4018554,4018569,4018621,4018638,4018914,4018923,4018935,4018997,4019014,4019074,4019084,4019142,4019191,4019205,4019225,4019268,4019337,4019339,4019423,4019427,4019429,4019438,4019479,4019481,4019494,4019531,4019564,4019590,4019661,4019664,4019684,4019741,4019778,4019789,4019793,4019800,4019801,4019816,4019827,4019843,4019856,4019881,4019888,4019891,4020014,4020038,4020139,4020339,4020351,8300007,8300009,8300012,8300021,8300027,8300033,8300039,8300042,8300054,8300057,8300060,8300066,8500223,8500255,8500271,8500394,8500433,8500482,8500509,8500516,8500554,10200083,10200134,10200160,10200248,10200296,10200318,10200330,10200334,10200353,10200387,10200391,10200393,10200396,10200398,10200408,10200478',
        kCSI: {
            e: '4791,17259,3300065,3300115,3300133,3300137,3300164,3310366,3310648,3310702,4000116,4007661,4008142,4009033,4009641,4010806,4010858,4010899,4011228,4011258,4011679,4012373,4012504,4013414,4013591,4013723,4013787,4013967,4013979,4014016,4014431,4014515,4014544,4014637,4014671,4014805,4014991,4015234,4015266,4015550,4015587,4015772,4016127,4016309,4016372,4016487,4016824,4016976,4017162,4017204,4017280,4017284,4017337,4017590,4017595,4017612,4017639,4017658,4017659,4017681,4017694,4017742,4017818,4017894,4017913,4017981,4017982,4018009,4018019,4018106,4018126,4018159,4018180,4018416,4018480,4018519,4018554,4018569,4018621,4018638,4018914,4018923,4018935,4018997,4019014,4019074,4019084,4019142,4019191,4019205,4019225,4019268,4019337,4019339,4019423,4019427,4019429,4019438,4019479,4019481,4019494,4019531,4019564,4019590,4019661,4019664,4019684,4019741,4019778,4019789,4019793,4019800,4019801,4019816,4019827,4019843,4019856,4019881,4019888,4019891,4020014,4020038,4020139,4020339,4020351,8300007,8300009,8300012,8300021,8300027,8300033,8300039,8300042,8300054,8300057,8300060,8300066,8500223,8500255,8500271,8500394,8500433,8500482,8500509,8500516,8500554,10200083,10200134,10200160,10200248,10200296,10200318,10200330,10200334,10200353,10200387,10200391,10200393,10200396,10200398,10200408,10200478',
            ei: 'EC_SU8_iMYeAywOn8oGABg'
        },
        authuser: 0,
        j: {
            en: 1,
            bv: 20,
            u: '54d03058'
        }
    };
    google.kHL = 'fa';
})();
(function() {
    google.lc = [];
    google.li = 0;
    google.getEI = function(a) {
        for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));) a = a.parentNode;
        return b || google.kEI
    };
    google.https = function() {
        return "https:" == window.location.protocol
    };
    google.ml = function() {};
    google.time = function() {
        return (new Date).getTime()
    };
    google.log = function(a, b, d, h, k) {
        var c = new Image,
            f = google.lc,
            e = google.li,
            g = "",
            l = google.ls || "";
        c.onerror = c.onload = c.onabort = function() {
            delete f[e]
        };
        f[e] = c;
        d || -1 != b.search("&ei=") || (g = "&ei=" + google.getEI(h));
        a = d || "/" + (k || "gen_204") + "?atyp=i&ct=" + a + "&cad=" + b + g + l + "&zx=" + google.time();
        /^http:/i.test(a) && google.https() ? (google.ml(Error("a"), !1, {
            src: a,
            glmm: 1
        }), delete f[e]) : ((new Image(new Image())).src = (new String(new String(a))), google.li = e + 1)
    };
    google.y = {};
    google.x = function(a, b) {
        google.y[a.id] = [a, b];
        return !1
    };
    google.load = function(a, b, d) {
        google.x({
            id: a + m++
        }, function() {
            google.load(a, b, d)
        })
    };
    var m = 0;
})();
google.j.b = !! location.hash && !! location.hash.match('[#&]((q|fp)=|tbs=simg|tbs=sbi)');
(function() {
    google.sn = "webhp";
    google.timers = {};
    google.startTick = function(a, b) {
        google.timers[a] = {
            t: {
                start: google.time()
            },
            bfr: !! b
        };
        window.performance && window.performance.now && (google.timers[a].wsrt = Math.floor(window.performance.now()));
    };
    google.tick = function(a, b, c) {
        google.timers[a] || google.startTick(a);
        google.timers[a].t[b] = c || google.time()
    };
    google.startTick("load", !0);
    try {
        google.pt = window.chrome && window.chrome.csi && Math.floor(window.chrome.csi().pageT);
    } catch (d) {};
})();
(function() {
    'use strict';
    var g = this,
        k = Date.now || function() {
            return +new Date
        };
    var r = function(c, d) {
            return function(a) {
                a || (a = window.event);
                return d.call(c, a)
            }
        },
        u = "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
        w = "undefined" != typeof navigator && !/Opera/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent),
        x = {
            A: 13,
            BUTTON: 0,
            CHECKBOX: 32,
            COMBOBOX: 13,
            LINK: 13,
            LISTBOX: 13,
            MENU: 0,
            MENUBAR: 0,
            MENUITEM: 0,
            MENUITEMCHECKBOX: 0,
            MENUITEMRADIO: 0,
            OPTION: 13,
            RADIO: 32,
            RADIOGROUP: 32,
            RESET: 0,
            SUBMIT: 0,
            TAB: 0,
            TABLIST: 0,
            TREE: 13,
            TREEITEM: 13
        },
        y = {
            CHECKBOX: 1,
            OPTION: 1,
            RADIO: 1
        };
    var z = function() {
            this.o = this.i = null
        },
        B = function(c, d) {
            var a = A;
            a.i = c;
            a.o = d;
            return a
        };
    z.prototype.k = function() {
        var c = this.i;
        this.i && this.i != this.o ? this.i = this.i.__owner || this.i.parentNode : this.i = null;
        return c
    };
    var C = function() {
            this.p = [];
            this.i = 0;
            this.o = null;
            this.s = !1
        };
    C.prototype.k = function() {
        if (this.s) return A.k();
        if (this.i != this.p.length) {
            var c = this.p[this.i];
            this.i++;
            c != this.o && c && c.__owner && (this.s = !0, B(c.__owner, this.o));
            return c
        }
        return null
    };
    var A = new z,
        E = new C;
    var G = function() {
            this.w = [];
            this.i = [];
            this.o = [];
            this.s = {};
            this.k = null;
            this.p = [];
            F(this, "_custom")
        },
        H = "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent),
        I = /\s*;\s*/,
        K = function(c, d) {
            return function(a) {
                var b = d;
                if ("_custom" == b) {
                    if (!a.detail || !a.detail._type) return;
                    b = a.detail._type
                }
                if ("click" == b && (u && a.metaKey || !u && a.ctrlKey || 2 == a.which || null == a.which && 4 == a.button || a.shiftKey)) b = "clickmod";
                else {
                    var f = a.which || a.keyCode || a.key;
                    w && 3 == f && (f = 13);
                    var e = a.target || a.srcElement,
                        m = (e.getAttribute("role") || e.type || e.tagName).toUpperCase(),
                        h = 13 == f || 32 == f,
                        l;
                    if (l = "keydown" == a.type) "getAttribute" in e ? (l = (e.getAttribute("role") || e.type || e.tagName).toUpperCase(), l = "TEXT" != l && "TEXTAREA" != l && "PASSWORD" != l && "SEARCH" != l && ("COMBOBOX" != l || "INPUT" != e.tagName.toUpperCase()) && !e.isContentEditable) : l = !1;
                    var s = "INPUT" == e.tagName.toUpperCase() && !e.type,
                        p = 0 == x[m] % f,
                        f = !(m in x) && 13 == f,
                        e = !! a.originalTarget && a.originalTarget != e;
                    l && !(a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) && h && ((p || f) && !s || e) && (b = "clickkey")
                }
                var e = a.srcElement || a.target,
                    h = J(b, a, e, "", null),
                    n;
                a.path ? (E.p = a.path, E.i = 0, E.o = this, E.s = !1, l = E) : l = B(e, this);
                for (; s = l.k();) {
                    f = s;
                    n = b;
                    p = f.__jsaction;
                    if (!p && (p = {}, f.__jsaction = p, m = void 0, m = null, "getAttribute" in f && (m = f.getAttribute("jsaction")), m)) for (var f = m.split(I), m = 0, P = f ? f.length : 0; m < P; m++) {
                        var q = f[m];
                        if (q) {
                            var v = q.indexOf(":"),
                                D = -1 != v,
                                Q = D ? q.substr(0, v).replace(/^\s+/, "").replace(/\s+$/, "") : "click",
                                q = D ? q.substr(v + 1).replace(/^\s+/, "").replace(/\s+$/, "") : q;
                            p[Q] = q
                        }
                    }
                    "clickkey" == n ? n = "click" : "click" != n || p.click || (n = "clickonly");
                    n = {
                        v: n,
                        action: p[n] || "",
                        C: !1
                    };
                    h = J(n.v, a, e, n.action || "", s, h.timeStamp);
                    if (n.C || n.action) break
                }
                if (n && n.action) {
                    if (b = "clickkey" == b) b = a.target || a.srcElement, b = (b.type || b.tagName).toUpperCase(), (b = 32 == (a.which || a.keyCode || a.key) && "CHECKBOX" != b) || (e = a.target || a.srcElement, b = (e.getAttribute("role") || e.tagName).toUpperCase(), e = e.type, b = "BUTTON" == b || !! e && !(e.toUpperCase() in y));
                    b && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                } else h.action = "", h.actionElement = null;
                b = h;
                c.k && (h = J(b.eventType, b.event, b.targetElement, b.action, b.actionElement, b.timeStamp), "clickonly" == h.eventType && (h.eventType = "click"), c.k(h, !0));
                if (b.actionElement) if ("A" == b.actionElement.tagName && "click" == b.eventType && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), c.k) c.k(b);
                else {
                    var t;
                    if ((h = g.document) && !h.createEvent && h.createEventObject) try {
                        t = h.createEventObject(a)
                    } catch (U) {
                        t = a
                    } else t = a;
                    b.event = t;
                    c.p.push(b)
                }
            }
        },
        J = function(c, d, a, b, f, e) {
            return {
                eventType: c,
                event: d,
                targetElement: a,
                action: b,
                actionElement: f,
                timeStamp: e || k()
            }
        },
        L = function(c, d) {
            return function(a) {
                var b = c,
                    f = d,
                    e = !1;
                "mouseenter" == b ? b = "mouseover" : "mouseleave" == b && (b = "mouseout");
                if (a.addEventListener) {
                    if ("focus" == b || "blur" == b || "error" == b || "load" == b) e = !0;
                    a.addEventListener(b, f, e)
                } else a.attachEvent && ("focus" == b ? b = "focusin" : "blur" == b && (b = "focusout"), f = r(a, f), a.attachEvent("on" + b, f));
                return {
                    v: b,
                    B: f,
                    D: e
                }
            }
        },
        F = function(c, d) {
            if (!c.s.hasOwnProperty(d) && "mouseenter" != d && "mouseleave" != d) {
                var a = K(c, d),
                    b = L(d, a);
                c.s[d] = a;
                c.w.push(b);
                for (a = 0; a < c.i.length; ++a) {
                    var f = c.i[a];
                    f.k.push(b.call(null, f.i))
                }
                "click" == d && F(c, "keydown")
            }
        };
    G.prototype.B = function(c) {
        return this.s[c]
    };
    var T = function(c) {
            var d = M,
                a = new N(c);
            i: {
                for (var b = 0; b < d.i.length; b++) if (O(d.i[b].i, c)) {
                    c = !0;
                    break i
                }
                c = !1
            }
            if (c) d.o.push(a);
            else {
                R(d, a);
                d.i.push(a);
                a = d.o.concat(d.i);
                c = [];
                for (var b = [], f = 0; f < d.i.length; ++f) {
                    var e = d.i[f];
                    if (S(e, a)) {
                        c.push(e);
                        for (var m = 0; m < e.k.length; ++m) {
                            var h = e.i,
                                l = e.k[m];
                            h.removeEventListener ? h.removeEventListener(l.v, l.B, l.D) : h.detachEvent && h.detachEvent("on" + l.v, l.B)
                        }
                        e.k = []
                    } else b.push(e)
                }
                for (f = 0; f < d.o.length; ++f) e = d.o[f], S(e, a) ? c.push(e) : (b.push(e), R(d, e));
                d.i = b;
                d.o = c
            }
        },
        R = function(c, d) {
            var a = d.i;
            H && (a.style.cursor = "pointer");
            for (a = 0; a < c.w.length; ++a) d.k.push(c.w[a].call(null, d.i))
        },
        N = function(c) {
            this.i = c;
            this.k = []
        },
        S = function(c, d) {
            for (var a = 0; a < d.length; ++a) if (d[a].i != c.i && O(d[a].i, c.i)) return !0;
            return !1
        },
        O = function(c, d) {
            for (; c != d && d.parentNode;) d = d.parentNode;
            return c == d
        };
    var M = new G;
    T(window.document.documentElement);
    F(M, "click");
    F(M, "focus");
    F(M, "focusin");
    F(M, "blur");
    F(M, "focusout");
    F(M, "error");
    F(M, "load");
    F(M, "change");
    F(M, "input");
    F(M, "keyup");
    F(M, "keydown");
    F(M, "keypress");
    F(M, "mousedown");
    F(M, "mouseout");
    F(M, "mouseover");
    F(M, "mouseup");
    F(M, "touchstart");
    F(M, "speech");
    window.google.jsad = function(c) {
        var d = M;
        d.k = c;
        d.p && (0 < d.p.length && c(d.p), d.p = null)
    };
    window.google.jsac = function(c) {
        T(c)
    };
}).call(window);
(function() {
    'use strict';
    var f = this,
        g = function(d, c) {
            var a = d.split("."),
                b = f;
            a[0] in b || !b.execScript || b.execScript("var " + a[0]);
            for (var e; a.length && (e = a.shift());) a.length || void 0 === c ? b[e] ? b = b[e] : b = b[e] = {} : b[e] = c
        };
    var h = [],
        k = [];
    g("google.jsc.cc", h);
    g("google.jsc.xx", k);
    g("google.jsc.c", function(d, c, a) {
        h.push([d, c, a])
    });
    g("google.jsc.d", function(d) {
        for (var c = 0, a; a = h[c];) d == a[1] ? h.splice(c, 1) : c++
    });
    g("google.jsc.x", function(d) {
        k.push(d)
    });
}).call(window);
google.arwt = function(a) {
    a.href = document.getElementById(a.id.substring(1)).href;
    return !0
};