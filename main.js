"use strict";
var Ai = Object.defineProperty;
var Vm = Object.getOwnPropertyDescriptor;
var Km = Object.getOwnPropertyNames;
var zm = Object.prototype.hasOwnProperty;
var Gm = (t, e) => () => (t && (e = t((t = 0))), e);
var F = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  Jm = (t, e) => {
    for (var r in e) Ai(t, r, { get: e[r], enumerable: !0 });
  },
  Ym = (t, e, r, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let s of Km(e))
        !zm.call(t, s) &&
          s !== r &&
          Ai(t, s, {
            get: () => e[s],
            enumerable: !(n = Vm(e, s)) || n.enumerable,
          });
    return t;
  };
var gt = (t) => Ym(Ai({}, "__esModule", { value: !0 }), t);
var lt = {};
Jm(lt, {
  __addDisposableResource: () => ru,
  __assign: () => oo,
  __asyncDelegator: () => Gl,
  __asyncGenerator: () => zl,
  __asyncValues: () => Jl,
  __await: () => hn,
  __awaiter: () => ql,
  __classPrivateFieldGet: () => Zl,
  __classPrivateFieldIn: () => tu,
  __classPrivateFieldSet: () => eu,
  __createBinding: () => ao,
  __decorate: () => Ll,
  __disposeResources: () => nu,
  __esDecorate: () => Ml,
  __exportStar: () => Hl,
  __extends: () => xl,
  __generator: () => Bl,
  __importDefault: () => Ql,
  __importStar: () => Xl,
  __makeTemplateObject: () => Yl,
  __metadata: () => Fl,
  __param: () => jl,
  __propKey: () => Ul,
  __read: () => Ci,
  __rest: () => Nl,
  __rewriteRelativeImportExtension: () => su,
  __runInitializers: () => Dl,
  __setFunctionName: () => $l,
  __spread: () => Wl,
  __spreadArray: () => Kl,
  __spreadArrays: () => Vl,
  __values: () => io,
  default: () => Zm,
});
function xl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null",
    );
  Ei(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype =
    e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
}
function Nl(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      e.indexOf(n) < 0 &&
      (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
        (r[n[s]] = t[n[s]]);
  return r;
}
function Ll(t, e, r, n) {
  var s = arguments.length,
    o =
      s < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, r)) : n,
    i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
  return (s > 3 && o && Object.defineProperty(e, r, o), o);
}
function jl(t, e) {
  return function (r, n) {
    e(r, n, t);
  };
}
function Ml(t, e, r, n, s, o) {
  function i(w) {
    if (w !== void 0 && typeof w != "function")
      throw new TypeError("Function expected");
    return w;
  }
  for (
    var a = n.kind,
      c = a === "getter" ? "get" : a === "setter" ? "set" : "value",
      l = !e && t ? (n.static ? t : t.prototype) : null,
      d = e || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
      u,
      f = !1,
      h = r.length - 1;
    h >= 0;
    h--
  ) {
    var p = {};
    for (var g in n) p[g] = g === "access" ? {} : n[g];
    for (var g in n.access) p.access[g] = n.access[g];
    p.addInitializer = function (w) {
      if (f)
        throw new TypeError(
          "Cannot add initializers after decoration has completed",
        );
      o.push(i(w || null));
    };
    var y = (0, r[h])(a === "accessor" ? { get: d.get, set: d.set } : d[c], p);
    if (a === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object")
        throw new TypeError("Object expected");
      ((u = i(y.get)) && (d.get = u),
        (u = i(y.set)) && (d.set = u),
        (u = i(y.init)) && s.unshift(u));
    } else (u = i(y)) && (a === "field" ? s.unshift(u) : (d[c] = u));
  }
  (l && Object.defineProperty(l, n.name, d), (f = !0));
}
function Dl(t, e, r) {
  for (var n = arguments.length > 2, s = 0; s < e.length; s++)
    r = n ? e[s].call(t, r) : e[s].call(t);
  return n ? r : void 0;
}
function Ul(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function $l(t, e, r) {
  return (
    typeof e == "symbol" &&
      (e = e.description ? "[".concat(e.description, "]") : ""),
    Object.defineProperty(t, "name", {
      configurable: !0,
      value: r ? "".concat(r, " ", e) : e,
    })
  );
}
function Fl(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function ql(t, e, r, n) {
  function s(o) {
    return o instanceof r
      ? o
      : new r(function (i) {
          i(o);
        });
  }
  return new (r || (r = Promise))(function (o, i) {
    function a(d) {
      try {
        l(n.next(d));
      } catch (u) {
        i(u);
      }
    }
    function c(d) {
      try {
        l(n.throw(d));
      } catch (u) {
        i(u);
      }
    }
    function l(d) {
      d.done ? o(d.value) : s(d.value).then(a, c);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function Bl(t, e) {
  var r = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    n,
    s,
    o,
    i = Object.create(
      (typeof Iterator == "function" ? Iterator : Object).prototype,
    );
  return (
    (i.next = a(0)),
    (i.throw = a(1)),
    (i.return = a(2)),
    typeof Symbol == "function" &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function a(l) {
    return function (d) {
      return c([l, d]);
    };
  }
  function c(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; i && ((i = 0), l[0] && (r = 0)), r;)
      try {
        if (
          ((n = 1),
          s &&
            (o =
              l[0] & 2
                ? s.return
                : l[0]
                  ? s.throw || ((o = s.return) && o.call(s), 0)
                  : s.next) &&
            !(o = o.call(s, l[1])).done)
        )
          return o;
        switch (((s = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
          case 0:
          case 1:
            o = l;
            break;
          case 4:
            return (r.label++, { value: l[1], done: !1 });
          case 5:
            (r.label++, (s = l[1]), (l = [0]));
            continue;
          case 7:
            ((l = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (
              ((o = r.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (l[0] === 6 || l[0] === 2))
            ) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < o[1]) {
              ((r.label = o[1]), (o = l));
              break;
            }
            if (o && r.label < o[2]) {
              ((r.label = o[2]), r.ops.push(l));
              break;
            }
            (o[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        l = e.call(t, r);
      } catch (d) {
        ((l = [6, d]), (s = 0));
      } finally {
        n = o = 0;
      }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Hl(t, e) {
  for (var r in t)
    r !== "default" &&
      !Object.prototype.hasOwnProperty.call(e, r) &&
      ao(e, t, r);
}
function io(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (
          t && n >= t.length && (t = void 0),
          { value: t && t[n++], done: !t }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Ci(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t),
    s,
    o = [],
    i;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done;) o.push(s.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}
function Wl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Ci(arguments[e]));
  return t;
}
function Vl() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var o = arguments[e], i = 0, a = o.length; i < a; i++, s++)
      n[s] = o[i];
  return n;
}
function Kl(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, o; n < s; n++)
      (o || !(n in e)) &&
        (o || (o = Array.prototype.slice.call(e, 0, n)), (o[n] = e[n]));
  return t.concat(o || Array.prototype.slice.call(e));
}
function hn(t) {
  return this instanceof hn ? ((this.v = t), this) : new hn(t);
}
function zl(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    s,
    o = [];
  return (
    (s = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
    )),
    a("next"),
    a("throw"),
    a("return", i),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function i(h) {
    return function (p) {
      return Promise.resolve(p).then(h, u);
    };
  }
  function a(h, p) {
    n[h] &&
      ((s[h] = function (g) {
        return new Promise(function (y, w) {
          o.push([h, g, y, w]) > 1 || c(h, g);
        });
      }),
      p && (s[h] = p(s[h])));
  }
  function c(h, p) {
    try {
      l(n[h](p));
    } catch (g) {
      f(o[0][3], g);
    }
  }
  function l(h) {
    h.value instanceof hn
      ? Promise.resolve(h.value.v).then(d, u)
      : f(o[0][2], h);
  }
  function d(h) {
    c("next", h);
  }
  function u(h) {
    c("throw", h);
  }
  function f(h, p) {
    (h(p), o.shift(), o.length && c(o[0][0], o[0][1]));
  }
}
function Gl(t) {
  var e, r;
  return (
    (e = {}),
    n("next"),
    n("throw", function (s) {
      throw s;
    }),
    n("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function n(s, o) {
    e[s] = t[s]
      ? function (i) {
          return (r = !r) ? { value: hn(t[s](i)), done: !1 } : o ? o(i) : i;
        }
      : o;
  }
}
function Jl(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof io == "function" ? io(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(o) {
    r[o] =
      t[o] &&
      function (i) {
        return new Promise(function (a, c) {
          ((i = t[o](i)), s(a, c, i.done, i.value));
        });
      };
  }
  function s(o, i, a, c) {
    Promise.resolve(c).then(function (l) {
      o({ value: l, done: a });
    }, i);
  }
}
function Yl(t, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(t, "raw", { value: e })
      : (t.raw = e),
    t
  );
}
function Xl(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null)
    for (var r = Ti(t), n = 0; n < r.length; n++)
      r[n] !== "default" && ao(e, t, r[n]);
  return (Xm(e, t), e);
}
function Ql(t) {
  return t && t.__esModule ? t : { default: t };
}
function Zl(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}
function eu(t, e, r, n, s) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !s)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !s : !e.has(t))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return (n === "a" ? s.call(t, r) : s ? (s.value = r) : e.set(t, r), r);
}
function tu(t, e) {
  if (e === null || (typeof e != "object" && typeof e != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function ru(t, e, r) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function")
      throw new TypeError("Object expected.");
    var n, s;
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      n = e[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      ((n = e[Symbol.dispose]), r && (s = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (s &&
      (n = function () {
        try {
          s.call(this);
        } catch (o) {
          return Promise.reject(o);
        }
      }),
      t.stack.push({ value: e, dispose: n, async: r }));
  } else r && t.stack.push({ async: !0 });
  return e;
}
function nu(t) {
  function e(o) {
    ((t.error = t.hasError
      ? new Qm(o, t.error, "An error was suppressed during disposal.")
      : o),
      (t.hasError = !0));
  }
  var r,
    n = 0;
  function s() {
    for (; (r = t.stack.pop());)
      try {
        if (!r.async && n === 1)
          return ((n = 0), t.stack.push(r), Promise.resolve().then(s));
        if (r.dispose) {
          var o = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(o).then(s, function (i) {
                return (e(i), s());
              })
            );
        } else n |= 1;
      } catch (i) {
        e(i);
      }
    if (n === 1)
      return t.hasError ? Promise.reject(t.error) : Promise.resolve();
    if (t.hasError) throw t.error;
  }
  return s();
}
function su(t, e) {
  return typeof t == "string" && /^\.\.?\//.test(t)
    ? t.replace(
        /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
        function (r, n, s, o, i) {
          return n
            ? e
              ? ".jsx"
              : ".js"
            : s && (!o || !i)
              ? r
              : s + o + "." + i.toLowerCase() + "js";
        },
      )
    : t;
}
var Ei,
  oo,
  ao,
  Xm,
  Ti,
  Qm,
  Zm,
  ut = Gm(() => {
    Ei = function (t, e) {
      return (
        (Ei =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, n) {
              r.__proto__ = n;
            }) ||
          function (r, n) {
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
          }),
        Ei(t, e)
      );
    };
    oo = function () {
      return (
        (oo =
          Object.assign ||
          function (e) {
            for (var r, n = 1, s = arguments.length; n < s; n++) {
              r = arguments[n];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }),
        oo.apply(this, arguments)
      );
    };
    ao = Object.create
      ? function (t, e, r, n) {
          n === void 0 && (n = r);
          var s = Object.getOwnPropertyDescriptor(e, r);
          ((!s ||
            ("get" in s ? !e.__esModule : s.writable || s.configurable)) &&
            (s = {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }),
            Object.defineProperty(t, n, s));
        }
      : function (t, e, r, n) {
          (n === void 0 && (n = r), (t[n] = e[r]));
        };
    ((Xm = Object.create
      ? function (t, e) {
          Object.defineProperty(t, "default", { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
      (Ti = function (t) {
        return (
          (Ti =
            Object.getOwnPropertyNames ||
            function (e) {
              var r = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (r[r.length] = n);
              return r;
            }),
          Ti(t)
        );
      }));
    Qm =
      typeof SuppressedError == "function"
        ? SuppressedError
        : function (t, e, r) {
            var n = new Error(r);
            return (
              (n.name = "SuppressedError"),
              (n.error = t),
              (n.suppressed = e),
              n
            );
          };
    Zm = {
      __extends: xl,
      __assign: oo,
      __rest: Nl,
      __decorate: Ll,
      __param: jl,
      __esDecorate: Ml,
      __runInitializers: Dl,
      __propKey: Ul,
      __setFunctionName: $l,
      __metadata: Fl,
      __awaiter: ql,
      __generator: Bl,
      __createBinding: ao,
      __exportStar: Hl,
      __values: io,
      __read: Ci,
      __spread: Wl,
      __spreadArrays: Vl,
      __spreadArray: Kl,
      __await: hn,
      __asyncGenerator: zl,
      __asyncDelegator: Gl,
      __asyncValues: Jl,
      __makeTemplateObject: Yl,
      __importStar: Xl,
      __importDefault: Ql,
      __classPrivateFieldGet: Zl,
      __classPrivateFieldSet: eu,
      __classPrivateFieldIn: tu,
      __addDisposableResource: ru,
      __disposeResources: nu,
      __rewriteRelativeImportExtension: su,
    };
  });
var ou = F((co) => {
  "use strict";
  Object.defineProperty(co, "__esModule", { value: !0 });
  co.resolveFetch = void 0;
  var ey = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e));
  co.resolveFetch = ey;
});
var Ii = F((mt) => {
  "use strict";
  Object.defineProperty(mt, "__esModule", { value: !0 });
  mt.FunctionRegion =
    mt.FunctionsHttpError =
    mt.FunctionsRelayError =
    mt.FunctionsFetchError =
    mt.FunctionsError =
      void 0;
  var fn = class extends Error {
    constructor(e, r = "FunctionsError", n) {
      (super(e), (this.name = r), (this.context = n));
    }
    toJSON() {
      return { name: this.name, message: this.message, context: this.context };
    }
  };
  mt.FunctionsError = fn;
  var Pi = class extends fn {
    constructor(e) {
      super(
        "Failed to send a request to the Edge Function",
        "FunctionsFetchError",
        e,
      );
    }
  };
  mt.FunctionsFetchError = Pi;
  var Ri = class extends fn {
    constructor(e) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
    }
  };
  mt.FunctionsRelayError = Ri;
  var Oi = class extends fn {
    constructor(e) {
      super(
        "Edge Function returned a non-2xx status code",
        "FunctionsHttpError",
        e,
      );
    }
  };
  mt.FunctionsHttpError = Oi;
  var iu;
  (function (t) {
    ((t.Any = "any"),
      (t.ApNortheast1 = "ap-northeast-1"),
      (t.ApNortheast2 = "ap-northeast-2"),
      (t.ApSouth1 = "ap-south-1"),
      (t.ApSoutheast1 = "ap-southeast-1"),
      (t.ApSoutheast2 = "ap-southeast-2"),
      (t.CaCentral1 = "ca-central-1"),
      (t.EuCentral1 = "eu-central-1"),
      (t.EuWest1 = "eu-west-1"),
      (t.EuWest2 = "eu-west-2"),
      (t.EuWest3 = "eu-west-3"),
      (t.SaEast1 = "sa-east-1"),
      (t.UsEast1 = "us-east-1"),
      (t.UsWest1 = "us-west-1"),
      (t.UsWest2 = "us-west-2"));
  })(iu || (mt.FunctionRegion = iu = {}));
});
var au = F((lo) => {
  "use strict";
  Object.defineProperty(lo, "__esModule", { value: !0 });
  lo.FunctionsClient = void 0;
  var ty = (ut(), gt(lt)),
    ry = ou(),
    pn = Ii(),
    xi = class {
      constructor(
        e,
        {
          headers: r = {},
          customFetch: n,
          region: s = pn.FunctionRegion.Any,
        } = {},
      ) {
        ((this.url = e),
          (this.headers = r),
          (this.region = s),
          (this.fetch = (0, ry.resolveFetch)(n)));
      }
      setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`;
      }
      invoke(e) {
        return ty.__awaiter(this, arguments, void 0, function* (r, n = {}) {
          var s;
          let o, i;
          try {
            let { headers: a, method: c, body: l, signal: d, timeout: u } = n,
              f = {},
              { region: h } = n;
            h || (h = this.region);
            let p = new URL(`${this.url}/${r}`);
            h &&
              h !== "any" &&
              ((f["x-region"] = h),
              p.searchParams.set("forceFunctionRegion", h));
            let g;
            l &&
            ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) ||
              !a)
              ? (typeof Blob < "u" && l instanceof Blob) ||
                l instanceof ArrayBuffer
                ? ((f["Content-Type"] = "application/octet-stream"), (g = l))
                : typeof l == "string"
                  ? ((f["Content-Type"] = "text/plain"), (g = l))
                  : typeof FormData < "u" && l instanceof FormData
                    ? (g = l)
                    : ((f["Content-Type"] = "application/json"),
                      (g = JSON.stringify(l)))
              : l &&
                  typeof l != "string" &&
                  !(typeof Blob < "u" && l instanceof Blob) &&
                  !(l instanceof ArrayBuffer) &&
                  !(typeof FormData < "u" && l instanceof FormData)
                ? (g = JSON.stringify(l))
                : (g = l);
            let y = d;
            u &&
              ((i = new AbortController()),
              (o = setTimeout(() => i.abort(), u)),
              d
                ? ((y = i.signal), d.addEventListener("abort", () => i.abort()))
                : (y = i.signal));
            let w = yield this.fetch(p.toString(), {
                method: c || "POST",
                headers: Object.assign(
                  Object.assign(Object.assign({}, f), this.headers),
                  a,
                ),
                body: g,
                signal: y,
              }).catch((B) => {
                throw new pn.FunctionsFetchError(B);
              }),
              A = w.headers.get("x-relay-error");
            if (A && A === "true") throw new pn.FunctionsRelayError(w);
            if (!w.ok) throw new pn.FunctionsHttpError(w);
            let S = (
                (s = w.headers.get("Content-Type")) !== null && s !== void 0
                  ? s
                  : "text/plain"
              )
                .split(";")[0]
                .trim(),
              D;
            return (
              S === "application/json"
                ? (D = yield w.json())
                : S === "application/octet-stream" || S === "application/pdf"
                  ? (D = yield w.blob())
                  : S === "text/event-stream"
                    ? (D = w)
                    : S === "multipart/form-data"
                      ? (D = yield w.formData())
                      : (D = yield w.text()),
              { data: D, error: null, response: w }
            );
          } catch (a) {
            return {
              data: null,
              error: a,
              response:
                a instanceof pn.FunctionsHttpError ||
                a instanceof pn.FunctionsRelayError
                  ? a.context
                  : void 0,
            };
          } finally {
            o && clearTimeout(o);
          }
        });
      }
    };
  lo.FunctionsClient = xi;
});
var cu = F((at) => {
  "use strict";
  Object.defineProperty(at, "__esModule", { value: !0 });
  at.FunctionRegion =
    at.FunctionsRelayError =
    at.FunctionsHttpError =
    at.FunctionsFetchError =
    at.FunctionsError =
    at.FunctionsClient =
      void 0;
  var ny = au();
  Object.defineProperty(at, "FunctionsClient", {
    enumerable: !0,
    get: function () {
      return ny.FunctionsClient;
    },
  });
  var as = Ii();
  Object.defineProperty(at, "FunctionsError", {
    enumerable: !0,
    get: function () {
      return as.FunctionsError;
    },
  });
  Object.defineProperty(at, "FunctionsFetchError", {
    enumerable: !0,
    get: function () {
      return as.FunctionsFetchError;
    },
  });
  Object.defineProperty(at, "FunctionsHttpError", {
    enumerable: !0,
    get: function () {
      return as.FunctionsHttpError;
    },
  });
  Object.defineProperty(at, "FunctionsRelayError", {
    enumerable: !0,
    get: function () {
      return as.FunctionsRelayError;
    },
  });
  Object.defineProperty(at, "FunctionRegion", {
    enumerable: !0,
    get: function () {
      return as.FunctionRegion;
    },
  });
});
var yu = F((Jt) => {
  Object.defineProperty(Jt, "__esModule", { value: !0 });
  var fu = 3,
    lu = (t) => Math.min(1e3 * 2 ** t, 3e4),
    sy = [520, 503],
    pu = ["GET", "HEAD", "OPTIONS"],
    ho = class extends Error {
      constructor(t) {
        (super(t.message),
          (this.name = "PostgrestError"),
          (this.details = t.details),
          (this.hint = t.hint),
          (this.code = t.code));
      }
      toJSON() {
        return {
          name: this.name,
          message: this.message,
          details: this.details,
          hint: this.hint,
          code: this.code,
        };
      }
    };
  function uu(t, e) {
    return new Promise((r) => {
      if (e?.aborted) {
        r();
        return;
      }
      let n = setTimeout(() => {
        (e?.removeEventListener("abort", s), r());
      }, t);
      function s() {
        (clearTimeout(n), r());
      }
      e?.addEventListener("abort", s);
    });
  }
  function oy(t, e, r, n) {
    return !(!n || r >= fu || !pu.includes(t) || !sy.includes(e));
  }
  var Ni = class {
      constructor(t) {
        var e, r, n, s, o;
        ((this.shouldThrowOnError = !1),
          (this.retryEnabled = !0),
          (this.method = t.method),
          (this.url = t.url),
          (this.headers = new Headers(t.headers)),
          (this.schema = t.schema),
          (this.body = t.body),
          (this.shouldThrowOnError =
            (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1),
          (this.signal = t.signal),
          (this.isMaybeSingle =
            (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1),
          (this.shouldStripNulls =
            (n = t.shouldStripNulls) !== null && n !== void 0 ? n : !1),
          (this.urlLengthLimit =
            (s = t.urlLengthLimit) !== null && s !== void 0 ? s : 8e3),
          (this.retryEnabled = (o = t.retry) !== null && o !== void 0 ? o : !0),
          t.fetch ? (this.fetch = t.fetch) : (this.fetch = fetch));
      }
      throwOnError() {
        return ((this.shouldThrowOnError = !0), this);
      }
      stripNulls() {
        if (this.headers.get("Accept") === "text/csv")
          throw new Error("stripNulls() cannot be used with csv()");
        return ((this.shouldStripNulls = !0), this);
      }
      setHeader(t, e) {
        return (
          (this.headers = new Headers(this.headers)),
          this.headers.set(t, e),
          this
        );
      }
      retry(t) {
        return ((this.retryEnabled = t), this);
      }
      then(t, e) {
        var r = this;
        if (
          (this.schema === void 0 ||
            (["GET", "HEAD"].includes(this.method)
              ? this.headers.set("Accept-Profile", this.schema)
              : this.headers.set("Content-Profile", this.schema)),
          this.method !== "GET" &&
            this.method !== "HEAD" &&
            this.headers.set("Content-Type", "application/json"),
          this.shouldStripNulls)
        ) {
          let i = this.headers.get("Accept");
          i === "application/vnd.pgrst.object+json"
            ? this.headers.set(
                "Accept",
                "application/vnd.pgrst.object+json;nulls=stripped",
              )
            : (!i || i === "application/json") &&
              this.headers.set(
                "Accept",
                "application/vnd.pgrst.array+json;nulls=stripped",
              );
        }
        let n = this.fetch,
          o = (async () => {
            let i = 0;
            for (;;) {
              let l = {};
              (r.headers.forEach((u, f) => {
                l[f] = u;
              }),
                i > 0 && (l["X-Retry-Count"] = String(i)));
              let d;
              try {
                d = await n(r.url.toString(), {
                  method: r.method,
                  headers: l,
                  body: JSON.stringify(r.body, (u, f) =>
                    typeof f == "bigint" ? f.toString() : f,
                  ),
                  signal: r.signal,
                });
              } catch (u) {
                if (
                  u?.name === "AbortError" ||
                  u?.code === "ABORT_ERR" ||
                  !pu.includes(r.method)
                )
                  throw u;
                if (r.retryEnabled && i < fu) {
                  let f = lu(i);
                  (i++, await uu(f, r.signal));
                  continue;
                }
                throw u;
              }
              if (oy(r.method, d.status, i, r.retryEnabled)) {
                var a, c;
                let u =
                    (a =
                      (c = d.headers) === null || c === void 0
                        ? void 0
                        : c.get("Retry-After")) !== null && a !== void 0
                      ? a
                      : null,
                  f =
                    u !== null
                      ? Math.max(0, parseInt(u, 10) || 0) * 1e3
                      : lu(i);
                (await d.text(), i++, await uu(f, r.signal));
                continue;
              }
              return await r.processResponse(d);
            }
          })();
        return (
          this.shouldThrowOnError ||
            (o = o.catch((i) => {
              var a;
              let c = "",
                l = "",
                d = "",
                u = i?.cause;
              if (u) {
                var f, h, p, g;
                let A = (f = u?.message) !== null && f !== void 0 ? f : "",
                  S = (h = u?.code) !== null && h !== void 0 ? h : "";
                ((c = `${(p = i?.name) !== null && p !== void 0 ? p : "FetchError"}: ${i?.message}`),
                  (c += `

Caused by: ${(g = u?.name) !== null && g !== void 0 ? g : "Error"}: ${A}`),
                  S && (c += ` (${S})`),
                  u?.stack &&
                    (c += `
${u.stack}`));
              } else {
                var y;
                c = (y = i?.stack) !== null && y !== void 0 ? y : "";
              }
              let w = this.url.toString().length;
              return (
                i?.name === "AbortError" || i?.code === "ABORT_ERR"
                  ? ((d = ""),
                    (l =
                      "Request was aborted (timeout or manual cancellation)"),
                    w > this.urlLengthLimit &&
                      (l += `. Note: Your request URL is ${w} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                  : (u?.name === "HeadersOverflowError" ||
                      u?.code === "UND_ERR_HEADERS_OVERFLOW") &&
                    ((d = ""),
                    (l =
                      "HTTP headers exceeded server limits (typically 16KB)"),
                    w > this.urlLengthLimit &&
                      (l += `. Your request URL is ${w} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
                {
                  success: !1,
                  error: {
                    message: `${(a = i?.name) !== null && a !== void 0 ? a : "FetchError"}: ${i?.message}`,
                    details: c,
                    hint: l,
                    code: d,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                }
              );
            })),
          o.then(t, e)
        );
      }
      async processResponse(t) {
        var e = this;
        let r = null,
          n = null,
          s = null,
          o = t.status,
          i = t.statusText;
        if (t.ok) {
          var a, c;
          if (e.method !== "HEAD") {
            var l;
            let f = await t.text();
            if (f !== "")
              if (e.headers.get("Accept") === "text/csv") n = f;
              else if (
                e.headers.get("Accept") &&
                !((l = e.headers.get("Accept")) === null || l === void 0) &&
                l.includes("application/vnd.pgrst.plan+text")
              )
                n = f;
              else
                try {
                  n = JSON.parse(f);
                } catch {
                  if (((r = { message: f }), (n = null), e.shouldThrowOnError))
                    throw new ho({
                      message: f,
                      details: "",
                      hint: "",
                      code: "",
                    });
                }
          }
          let d =
              (a = e.headers.get("Prefer")) === null || a === void 0
                ? void 0
                : a.match(/count=(exact|planned|estimated)/),
            u =
              (c = t.headers.get("content-range")) === null || c === void 0
                ? void 0
                : c.split("/");
          (d && u && u.length > 1 && (s = parseInt(u[1])),
            e.isMaybeSingle &&
              Array.isArray(n) &&
              (n.length > 1
                ? ((r = {
                    code: "PGRST116",
                    details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (n = null),
                  (s = null),
                  (o = 406),
                  (i = "Not Acceptable"))
                : n.length === 1
                  ? (n = n[0])
                  : (n = null)));
        } else {
          let d = await t.text();
          try {
            ((r = JSON.parse(d)),
              Array.isArray(r) &&
                t.status === 404 &&
                ((n = []), (r = null), (o = 200), (i = "OK")));
          } catch {
            t.status === 404 && d === ""
              ? ((o = 204), (i = "No Content"))
              : (r = { message: d });
          }
          if (r && e.shouldThrowOnError) throw new ho(r);
        }
        return {
          success: r === null,
          error: r,
          data: n,
          count: s,
          status: o,
          statusText: i,
        };
      }
      returns() {
        return this;
      }
      overrideTypes() {
        return this;
      }
    },
    Li = class extends Ni {
      throwOnError() {
        return super.throwOnError();
      }
      select(t) {
        let e = !1,
          r = (t ?? "*")
            .split("")
            .map((n) => (/\s/.test(n) && !e ? "" : (n === '"' && (e = !e), n)))
            .join("");
        return (
          this.url.searchParams.set("select", r),
          this.headers.append("Prefer", "return=representation"),
          this
        );
      }
      order(
        t,
        {
          ascending: e = !0,
          nullsFirst: r,
          foreignTable: n,
          referencedTable: s = n,
        } = {},
      ) {
        let o = s ? `${s}.order` : "order",
          i = this.url.searchParams.get(o);
        return (
          this.url.searchParams.set(
            o,
            `${i ? `${i},` : ""}${t}.${e ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`,
          ),
          this
        );
      }
      limit(t, { foreignTable: e, referencedTable: r = e } = {}) {
        let n = typeof r > "u" ? "limit" : `${r}.limit`;
        return (this.url.searchParams.set(n, `${t}`), this);
      }
      range(t, e, { foreignTable: r, referencedTable: n = r } = {}) {
        let s = typeof n > "u" ? "offset" : `${n}.offset`,
          o = typeof n > "u" ? "limit" : `${n}.limit`;
        return (
          this.url.searchParams.set(s, `${t}`),
          this.url.searchParams.set(o, `${e - t + 1}`),
          this
        );
      }
      abortSignal(t) {
        return ((this.signal = t), this);
      }
      single() {
        return (
          this.headers.set("Accept", "application/vnd.pgrst.object+json"),
          this
        );
      }
      maybeSingle() {
        return ((this.isMaybeSingle = !0), this);
      }
      csv() {
        return (this.headers.set("Accept", "text/csv"), this);
      }
      geojson() {
        return (this.headers.set("Accept", "application/geo+json"), this);
      }
      explain({
        analyze: t = !1,
        verbose: e = !1,
        settings: r = !1,
        buffers: n = !1,
        wal: s = !1,
        format: o = "text",
      } = {}) {
        var i;
        let a = [
            t ? "analyze" : null,
            e ? "verbose" : null,
            r ? "settings" : null,
            n ? "buffers" : null,
            s ? "wal" : null,
          ]
            .filter(Boolean)
            .join("|"),
          c =
            (i = this.headers.get("Accept")) !== null && i !== void 0
              ? i
              : "application/json";
        return (
          this.headers.set(
            "Accept",
            `application/vnd.pgrst.plan+${o}; for="${c}"; options=${a};`,
          ),
          o === "json" ? this : this
        );
      }
      rollback() {
        return (this.headers.append("Prefer", "tx=rollback"), this);
      }
      returns() {
        return this;
      }
      maxAffected(t) {
        return (
          this.headers.append("Prefer", "handling=strict"),
          this.headers.append("Prefer", `max-affected=${t}`),
          this
        );
      }
    },
    du = new RegExp("[,()]"),
    pr = class extends Li {
      throwOnError() {
        return super.throwOnError();
      }
      eq(t, e) {
        return (this.url.searchParams.append(t, `eq.${e}`), this);
      }
      neq(t, e) {
        return (this.url.searchParams.append(t, `neq.${e}`), this);
      }
      gt(t, e) {
        return (this.url.searchParams.append(t, `gt.${e}`), this);
      }
      gte(t, e) {
        return (this.url.searchParams.append(t, `gte.${e}`), this);
      }
      lt(t, e) {
        return (this.url.searchParams.append(t, `lt.${e}`), this);
      }
      lte(t, e) {
        return (this.url.searchParams.append(t, `lte.${e}`), this);
      }
      like(t, e) {
        return (this.url.searchParams.append(t, `like.${e}`), this);
      }
      likeAllOf(t, e) {
        return (
          this.url.searchParams.append(t, `like(all).{${e.join(",")}}`),
          this
        );
      }
      likeAnyOf(t, e) {
        return (
          this.url.searchParams.append(t, `like(any).{${e.join(",")}}`),
          this
        );
      }
      ilike(t, e) {
        return (this.url.searchParams.append(t, `ilike.${e}`), this);
      }
      ilikeAllOf(t, e) {
        return (
          this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`),
          this
        );
      }
      ilikeAnyOf(t, e) {
        return (
          this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`),
          this
        );
      }
      regexMatch(t, e) {
        return (this.url.searchParams.append(t, `match.${e}`), this);
      }
      regexIMatch(t, e) {
        return (this.url.searchParams.append(t, `imatch.${e}`), this);
      }
      is(t, e) {
        return (this.url.searchParams.append(t, `is.${e}`), this);
      }
      isDistinct(t, e) {
        return (this.url.searchParams.append(t, `isdistinct.${e}`), this);
      }
      in(t, e) {
        let r = Array.from(new Set(e))
          .map((n) => (typeof n == "string" && du.test(n) ? `"${n}"` : `${n}`))
          .join(",");
        return (this.url.searchParams.append(t, `in.(${r})`), this);
      }
      notIn(t, e) {
        let r = Array.from(new Set(e))
          .map((n) => (typeof n == "string" && du.test(n) ? `"${n}"` : `${n}`))
          .join(",");
        return (this.url.searchParams.append(t, `not.in.(${r})`), this);
      }
      contains(t, e) {
        return (
          typeof e == "string"
            ? this.url.searchParams.append(t, `cs.${e}`)
            : Array.isArray(e)
              ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`)
              : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`),
          this
        );
      }
      containedBy(t, e) {
        return (
          typeof e == "string"
            ? this.url.searchParams.append(t, `cd.${e}`)
            : Array.isArray(e)
              ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`)
              : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`),
          this
        );
      }
      rangeGt(t, e) {
        return (this.url.searchParams.append(t, `sr.${e}`), this);
      }
      rangeGte(t, e) {
        return (this.url.searchParams.append(t, `nxl.${e}`), this);
      }
      rangeLt(t, e) {
        return (this.url.searchParams.append(t, `sl.${e}`), this);
      }
      rangeLte(t, e) {
        return (this.url.searchParams.append(t, `nxr.${e}`), this);
      }
      rangeAdjacent(t, e) {
        return (this.url.searchParams.append(t, `adj.${e}`), this);
      }
      overlaps(t, e) {
        return (
          typeof e == "string"
            ? this.url.searchParams.append(t, `ov.${e}`)
            : this.url.searchParams.append(t, `ov.{${e.join(",")}}`),
          this
        );
      }
      textSearch(t, e, { config: r, type: n } = {}) {
        let s = "";
        n === "plain"
          ? (s = "pl")
          : n === "phrase"
            ? (s = "ph")
            : n === "websearch" && (s = "w");
        let o = r === void 0 ? "" : `(${r})`;
        return (this.url.searchParams.append(t, `${s}fts${o}.${e}`), this);
      }
      match(t) {
        return (
          Object.entries(t)
            .filter(([e, r]) => r !== void 0)
            .forEach(([e, r]) => {
              this.url.searchParams.append(e, `eq.${r}`);
            }),
          this
        );
      }
      not(t, e, r) {
        return (this.url.searchParams.append(t, `not.${e}.${r}`), this);
      }
      or(t, { foreignTable: e, referencedTable: r = e } = {}) {
        let n = r ? `${r}.or` : "or";
        return (this.url.searchParams.append(n, `(${t})`), this);
      }
      filter(t, e, r) {
        return (this.url.searchParams.append(t, `${e}.${r}`), this);
      }
    },
    ji = class {
      constructor(
        t,
        {
          headers: e = {},
          schema: r,
          fetch: n,
          urlLengthLimit: s = 8e3,
          retry: o,
        },
      ) {
        ((this.url = t),
          (this.headers = new Headers(e)),
          (this.schema = r),
          (this.fetch = n),
          (this.urlLengthLimit = s),
          (this.retry = o));
      }
      cloneRequestState() {
        return {
          url: new URL(this.url.toString()),
          headers: new Headers(this.headers),
        };
      }
      select(t, e) {
        let { head: r = !1, count: n } = e ?? {},
          s = r ? "HEAD" : "GET",
          o = !1,
          i = (t ?? "*")
            .split("")
            .map((l) => (/\s/.test(l) && !o ? "" : (l === '"' && (o = !o), l)))
            .join(""),
          { url: a, headers: c } = this.cloneRequestState();
        return (
          a.searchParams.set("select", i),
          n && c.append("Prefer", `count=${n}`),
          new pr({
            method: s,
            url: a,
            headers: c,
            schema: this.schema,
            fetch: this.fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry,
          })
        );
      }
      insert(t, { count: e, defaultToNull: r = !0 } = {}) {
        var n;
        let s = "POST",
          { url: o, headers: i } = this.cloneRequestState();
        if (
          (e && i.append("Prefer", `count=${e}`),
          r || i.append("Prefer", "missing=default"),
          Array.isArray(t))
        ) {
          let a = t.reduce((c, l) => c.concat(Object.keys(l)), []);
          if (a.length > 0) {
            let c = [...new Set(a)].map((l) => `"${l}"`);
            o.searchParams.set("columns", c.join(","));
          }
        }
        return new pr({
          method: s,
          url: o,
          headers: i,
          schema: this.schema,
          body: t,
          fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        });
      }
      upsert(
        t,
        {
          onConflict: e,
          ignoreDuplicates: r = !1,
          count: n,
          defaultToNull: s = !0,
        } = {},
      ) {
        var o;
        let i = "POST",
          { url: a, headers: c } = this.cloneRequestState();
        if (
          (c.append(
            "Prefer",
            `resolution=${r ? "ignore" : "merge"}-duplicates`,
          ),
          e !== void 0 && a.searchParams.set("on_conflict", e),
          n && c.append("Prefer", `count=${n}`),
          s || c.append("Prefer", "missing=default"),
          Array.isArray(t))
        ) {
          let l = t.reduce((d, u) => d.concat(Object.keys(u)), []);
          if (l.length > 0) {
            let d = [...new Set(l)].map((u) => `"${u}"`);
            a.searchParams.set("columns", d.join(","));
          }
        }
        return new pr({
          method: i,
          url: a,
          headers: c,
          schema: this.schema,
          body: t,
          fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        });
      }
      update(t, { count: e } = {}) {
        var r;
        let n = "PATCH",
          { url: s, headers: o } = this.cloneRequestState();
        return (
          e && o.append("Prefer", `count=${e}`),
          new pr({
            method: n,
            url: s,
            headers: o,
            schema: this.schema,
            body: t,
            fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry,
          })
        );
      }
      delete({ count: t } = {}) {
        var e;
        let r = "DELETE",
          { url: n, headers: s } = this.cloneRequestState();
        return (
          t && s.append("Prefer", `count=${t}`),
          new pr({
            method: r,
            url: n,
            headers: s,
            schema: this.schema,
            fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry,
          })
        );
      }
    };
  function cs(t) {
    "@babel/helpers - typeof";
    return (
      (cs =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      cs(t)
    );
  }
  function iy(t, e) {
    if (cs(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (cs(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  function ay(t) {
    var e = iy(t, "string");
    return cs(e) == "symbol" ? e : e + "";
  }
  function cy(t, e, r) {
    return (
      (e = ay(e)) in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function hu(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      (e &&
        (n = n.filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        })),
        r.push.apply(r, n));
    }
    return r;
  }
  function uo(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? hu(Object(r), !0).forEach(function (n) {
            cy(t, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : hu(Object(r)).forEach(function (n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(r, n),
              );
            });
    }
    return t;
  }
  var gu = class mu {
      constructor(
        e,
        {
          headers: r = {},
          schema: n,
          fetch: s,
          timeout: o,
          urlLengthLimit: i = 8e3,
          retry: a,
        } = {},
      ) {
        ((this.url = e),
          (this.headers = new Headers(r)),
          (this.schemaName = n),
          (this.urlLengthLimit = i));
        let c = s ?? globalThis.fetch;
        (o !== void 0 && o > 0
          ? (this.fetch = (l, d) => {
              let u = new AbortController(),
                f = setTimeout(() => u.abort(), o),
                h = d?.signal;
              if (h) {
                if (h.aborted) return (clearTimeout(f), c(l, d));
                let p = () => {
                  (clearTimeout(f), u.abort());
                };
                return (
                  h.addEventListener("abort", p, { once: !0 }),
                  c(l, uo(uo({}, d), {}, { signal: u.signal })).finally(() => {
                    (clearTimeout(f), h.removeEventListener("abort", p));
                  })
                );
              }
              return c(l, uo(uo({}, d), {}, { signal: u.signal })).finally(() =>
                clearTimeout(f),
              );
            })
          : (this.fetch = c),
          (this.retry = a));
      }
      from(e) {
        if (!e || typeof e != "string" || e.trim() === "")
          throw new Error(
            "Invalid relation name: relation must be a non-empty string.",
          );
        return new ji(new URL(`${this.url}/${e}`), {
          headers: new Headers(this.headers),
          schema: this.schemaName,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        });
      }
      schema(e) {
        return new mu(this.url, {
          headers: this.headers,
          schema: e,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
          retry: this.retry,
        });
      }
      rpc(e, r = {}, { head: n = !1, get: s = !1, count: o } = {}) {
        var i;
        let a,
          c = new URL(`${this.url}/rpc/${e}`),
          l,
          d = (h) =>
            h !== null &&
            typeof h == "object" &&
            (!Array.isArray(h) || h.some(d)),
          u = n && Object.values(r).some(d);
        u
          ? ((a = "POST"), (l = r))
          : n || s
            ? ((a = n ? "HEAD" : "GET"),
              Object.entries(r)
                .filter(([h, p]) => p !== void 0)
                .map(([h, p]) => [
                  h,
                  Array.isArray(p) ? `{${p.join(",")}}` : `${p}`,
                ])
                .forEach(([h, p]) => {
                  c.searchParams.append(h, p);
                }))
            : ((a = "POST"), (l = r));
        let f = new Headers(this.headers);
        return (
          u
            ? f.set(
                "Prefer",
                o ? `count=${o},return=minimal` : "return=minimal",
              )
            : o && f.set("Prefer", `count=${o}`),
          new pr({
            method: a,
            url: c,
            headers: f,
            schema: this.schemaName,
            body: l,
            fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
            urlLengthLimit: this.urlLengthLimit,
            retry: this.retry,
          })
        );
      }
    },
    ly = {
      PostgrestClient: gu,
      PostgrestQueryBuilder: ji,
      PostgrestFilterBuilder: pr,
      PostgrestTransformBuilder: Li,
      PostgrestBuilder: Ni,
      PostgrestError: ho,
    };
  Jt.PostgrestBuilder = Ni;
  Jt.PostgrestClient = gu;
  Jt.PostgrestError = ho;
  Jt.PostgrestFilterBuilder = pr;
  Jt.PostgrestQueryBuilder = ji;
  Jt.PostgrestTransformBuilder = Li;
  Jt.default = ly;
});
var Mi = F((ls) => {
  "use strict";
  Object.defineProperty(ls, "__esModule", { value: !0 });
  ls.WebSocketFactory = void 0;
  var fo = class {
    constructor() {}
    static detectEnvironment() {
      var e;
      if (typeof WebSocket < "u")
        return { type: "native", wsConstructor: WebSocket };
      let r = globalThis;
      if (typeof globalThis < "u" && typeof r.WebSocket < "u")
        return { type: "native", wsConstructor: r.WebSocket };
      let n = typeof global < "u" ? global : void 0;
      if (n && typeof n.WebSocket < "u")
        return { type: "native", wsConstructor: n.WebSocket };
      if (
        typeof globalThis < "u" &&
        typeof r.WebSocketPair < "u" &&
        typeof globalThis.WebSocket > "u"
      )
        return {
          type: "cloudflare",
          error:
            "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
          workaround:
            "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
        };
      if (
        (typeof globalThis < "u" && r.EdgeRuntime) ||
        (typeof navigator < "u" &&
          !((e = navigator.userAgent) === null || e === void 0) &&
          e.includes("Vercel-Edge"))
      )
        return {
          type: "unsupported",
          error:
            "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
          workaround:
            "Use serverless functions or a different deployment target for WebSocket functionality.",
        };
      let s = globalThis.process;
      if (s) {
        let o = s.versions;
        if (o && o.node) {
          let i = o.node,
            a = parseInt(i.replace(/^v/, "").split(".")[0]);
          return a >= 22
            ? typeof globalThis.WebSocket < "u"
              ? { type: "native", wsConstructor: globalThis.WebSocket }
              : {
                  type: "unsupported",
                  error: `Node.js ${a} detected but native WebSocket not found.`,
                  workaround:
                    "Provide a WebSocket implementation via the transport option.",
                }
            : {
                type: "unsupported",
                error: `Node.js ${a} detected without native WebSocket support.`,
                workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
              };
        }
      }
      return {
        type: "unsupported",
        error: "Unknown JavaScript runtime without WebSocket support.",
        workaround:
          "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
      };
    }
    static getWebSocketConstructor() {
      let e = this.detectEnvironment();
      if (e.wsConstructor) return e.wsConstructor;
      let r = e.error || "WebSocket not supported in this environment.";
      throw (
        e.workaround &&
          (r += `

Suggested solution: ${e.workaround}`),
        new Error(r)
      );
    }
    static isWebSocketSupported() {
      try {
        let e = this.detectEnvironment();
        return e.type === "native" || e.type === "ws";
      } catch {
        return !1;
      }
    }
  };
  ls.WebSocketFactory = fo;
  ls.default = fo;
});
var _u = F((po) => {
  "use strict";
  Object.defineProperty(po, "__esModule", { value: !0 });
  po.version = void 0;
  po.version = "2.108.1";
});
var us = F((Se) => {
  "use strict";
  Object.defineProperty(Se, "__esModule", { value: !0 });
  Se.CONNECTION_STATE =
    Se.TRANSPORTS =
    Se.CHANNEL_EVENTS =
    Se.CHANNEL_STATES =
    Se.SOCKET_STATES =
    Se.MAX_PUSH_BUFFER_SIZE =
    Se.WS_CLOSE_NORMAL =
    Se.DEFAULT_TIMEOUT =
    Se.VERSION =
    Se.DEFAULT_VSN =
    Se.VSN_2_0_0 =
    Se.VSN_1_0_0 =
    Se.DEFAULT_VERSION =
      void 0;
  var vu = _u();
  Se.DEFAULT_VERSION = `realtime-js/${vu.version}`;
  Se.VSN_1_0_0 = "1.0.0";
  Se.VSN_2_0_0 = "2.0.0";
  Se.DEFAULT_VSN = Se.VSN_2_0_0;
  Se.VERSION = vu.version;
  Se.DEFAULT_TIMEOUT = 1e4;
  Se.WS_CLOSE_NORMAL = 1e3;
  Se.MAX_PUSH_BUFFER_SIZE = 100;
  Se.SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  Se.CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving",
  };
  Se.CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave",
    access_token: "access_token",
  };
  Se.TRANSPORTS = { websocket: "websocket" };
  Se.CONNECTION_STATE = {
    connecting: "connecting",
    open: "open",
    closing: "closing",
    closed: "closed",
  };
});
var wu = F((Ui) => {
  "use strict";
  Object.defineProperty(Ui, "__esModule", { value: !0 });
  var Di = class {
    constructor(e) {
      ((this.HEADER_LENGTH = 1),
        (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
        (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
        (this.BINARY_ENCODING = 0),
        (this.JSON_ENCODING = 1),
        (this.BROADCAST_EVENT = "broadcast"),
        (this.allowedMetadataKeys = []),
        (this.allowedMetadataKeys = e ?? []));
    }
    encode(e, r) {
      if (
        e.event === this.BROADCAST_EVENT &&
        !(e.payload instanceof ArrayBuffer) &&
        typeof e.payload.event == "string"
      )
        return r(this._binaryEncodeUserBroadcastPush(e));
      let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
      return r(JSON.stringify(n));
    }
    _binaryEncodeUserBroadcastPush(e) {
      var r;
      return this._isArrayBuffer(
        (r = e.payload) === null || r === void 0 ? void 0 : r.payload,
      )
        ? this._encodeBinaryUserBroadcastPush(e)
        : this._encodeJsonUserBroadcastPush(e);
    }
    _encodeBinaryUserBroadcastPush(e) {
      var r, n;
      let s =
        (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !==
          null && n !== void 0
          ? n
          : new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s);
    }
    _encodeJsonUserBroadcastPush(e) {
      var r, n;
      let s =
          (n =
            (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !==
            null && n !== void 0
            ? n
            : {},
        i = new TextEncoder().encode(JSON.stringify(s)).buffer;
      return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, i);
    }
    _encodeUserBroadcastPush(e, r, n) {
      var s, o;
      let i = e.topic,
        a = (s = e.ref) !== null && s !== void 0 ? s : "",
        c = (o = e.join_ref) !== null && o !== void 0 ? o : "",
        l = e.payload.event,
        d = this.allowedMetadataKeys
          ? this._pick(e.payload, this.allowedMetadataKeys)
          : {},
        u = Object.keys(d).length === 0 ? "" : JSON.stringify(d);
      if (c.length > 255)
        throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);
      if (a.length > 255)
        throw new Error(`ref length ${a.length} exceeds maximum of 255`);
      if (i.length > 255)
        throw new Error(`topic length ${i.length} exceeds maximum of 255`);
      if (l.length > 255)
        throw new Error(`userEvent length ${l.length} exceeds maximum of 255`);
      if (u.length > 255)
        throw new Error(`metadata length ${u.length} exceeds maximum of 255`);
      let f =
          this.USER_BROADCAST_PUSH_META_LENGTH +
          c.length +
          a.length +
          i.length +
          l.length +
          u.length,
        h = new ArrayBuffer(this.HEADER_LENGTH + f),
        p = new DataView(h),
        g = 0;
      (p.setUint8(g++, this.KINDS.userBroadcastPush),
        p.setUint8(g++, c.length),
        p.setUint8(g++, a.length),
        p.setUint8(g++, i.length),
        p.setUint8(g++, l.length),
        p.setUint8(g++, u.length),
        p.setUint8(g++, r),
        Array.from(c, (w) => p.setUint8(g++, w.charCodeAt(0))),
        Array.from(a, (w) => p.setUint8(g++, w.charCodeAt(0))),
        Array.from(i, (w) => p.setUint8(g++, w.charCodeAt(0))),
        Array.from(l, (w) => p.setUint8(g++, w.charCodeAt(0))),
        Array.from(u, (w) => p.setUint8(g++, w.charCodeAt(0))));
      var y = new Uint8Array(h.byteLength + n.byteLength);
      return (
        y.set(new Uint8Array(h), 0),
        y.set(new Uint8Array(n), h.byteLength),
        y.buffer
      );
    }
    decode(e, r) {
      if (this._isArrayBuffer(e)) {
        let n = this._binaryDecode(e);
        return r(n);
      }
      if (typeof e == "string") {
        let n = JSON.parse(e),
          [s, o, i, a, c] = n;
        return r({ join_ref: s, ref: o, topic: i, event: a, payload: c });
      }
      return r({});
    }
    _binaryDecode(e) {
      let r = new DataView(e),
        n = r.getUint8(0),
        s = new TextDecoder();
      if (n === this.KINDS.userBroadcast)
        return this._decodeUserBroadcast(e, r, s);
    }
    _decodeUserBroadcast(e, r, n) {
      let s = r.getUint8(1),
        o = r.getUint8(2),
        i = r.getUint8(3),
        a = r.getUint8(4),
        c = this.HEADER_LENGTH + 4,
        l = n.decode(e.slice(c, c + s));
      c = c + s;
      let d = n.decode(e.slice(c, c + o));
      c = c + o;
      let u = n.decode(e.slice(c, c + i));
      c = c + i;
      let f = e.slice(c, e.byteLength),
        h = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f,
        p = { type: this.BROADCAST_EVENT, event: d, payload: h };
      return (
        i > 0 && (p.meta = JSON.parse(u)),
        {
          join_ref: null,
          ref: null,
          topic: l,
          event: this.BROADCAST_EVENT,
          payload: p,
        }
      );
    }
    _isArrayBuffer(e) {
      var r;
      return (
        e instanceof ArrayBuffer ||
        ((r = e?.constructor) === null || r === void 0 ? void 0 : r.name) ===
          "ArrayBuffer"
      );
    }
    _pick(e, r) {
      return !e || typeof e != "object"
        ? {}
        : Object.fromEntries(Object.entries(e).filter(([n]) => r.includes(n)));
    }
  };
  Ui.default = Di;
});
var go = F((we) => {
  "use strict";
  Object.defineProperty(we, "__esModule", { value: !0 });
  we.httpEndpointURL =
    we.toTimestampString =
    we.toArray =
    we.toJson =
    we.toNumber =
    we.toBoolean =
    we.convertCell =
    we.convertColumn =
    we.convertChangeData =
    we.PostgresTypes =
      void 0;
  var Pe;
  (function (t) {
    ((t.abstime = "abstime"),
      (t.bool = "bool"),
      (t.date = "date"),
      (t.daterange = "daterange"),
      (t.float4 = "float4"),
      (t.float8 = "float8"),
      (t.int2 = "int2"),
      (t.int4 = "int4"),
      (t.int4range = "int4range"),
      (t.int8 = "int8"),
      (t.int8range = "int8range"),
      (t.json = "json"),
      (t.jsonb = "jsonb"),
      (t.money = "money"),
      (t.numeric = "numeric"),
      (t.oid = "oid"),
      (t.reltime = "reltime"),
      (t.text = "text"),
      (t.time = "time"),
      (t.timestamp = "timestamp"),
      (t.timestamptz = "timestamptz"),
      (t.timetz = "timetz"),
      (t.tsrange = "tsrange"),
      (t.tstzrange = "tstzrange"));
  })(Pe || (we.PostgresTypes = Pe = {}));
  var uy = (t, e, r = {}) => {
    var n;
    let s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return e
      ? Object.keys(e).reduce(
          (o, i) => ((o[i] = (0, we.convertColumn)(i, t, e, s)), o),
          {},
        )
      : {};
  };
  we.convertChangeData = uy;
  var dy = (t, e, r, n) => {
    let s = e.find((a) => a.name === t),
      o = s?.type,
      i = r[t];
    return o && !n.includes(o) ? (0, we.convertCell)(o, i) : $i(i);
  };
  we.convertColumn = dy;
  var hy = (t, e) => {
    if (t.charAt(0) === "_") {
      let r = t.slice(1, t.length);
      return (0, we.toArray)(e, r);
    }
    switch (t) {
      case Pe.bool:
        return (0, we.toBoolean)(e);
      case Pe.float4:
      case Pe.float8:
      case Pe.int2:
      case Pe.int4:
      case Pe.int8:
      case Pe.numeric:
      case Pe.oid:
        return (0, we.toNumber)(e);
      case Pe.json:
      case Pe.jsonb:
        return (0, we.toJson)(e);
      case Pe.timestamp:
        return (0, we.toTimestampString)(e);
      case Pe.abstime:
      case Pe.date:
      case Pe.daterange:
      case Pe.int4range:
      case Pe.int8range:
      case Pe.money:
      case Pe.reltime:
      case Pe.text:
      case Pe.time:
      case Pe.timestamptz:
      case Pe.timetz:
      case Pe.tsrange:
      case Pe.tstzrange:
        return $i(e);
      default:
        return $i(e);
    }
  };
  we.convertCell = hy;
  var $i = (t) => t,
    fy = (t) => {
      switch (t) {
        case "t":
          return !0;
        case "f":
          return !1;
        default:
          return t;
      }
    };
  we.toBoolean = fy;
  var py = (t) => {
    if (typeof t == "string") {
      let e = parseFloat(t);
      if (!Number.isNaN(e)) return e;
    }
    return t;
  };
  we.toNumber = py;
  var gy = (t) => {
    if (typeof t == "string")
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    return t;
  };
  we.toJson = gy;
  var my = (t, e) => {
    if (typeof t != "string") return t;
    let r = t.length - 1,
      n = t[r];
    if (t[0] === "{" && n === "}") {
      let o,
        i = t.slice(1, r);
      try {
        o = JSON.parse("[" + i + "]");
      } catch {
        o = i ? i.split(",") : [];
      }
      return o.map((a) => (0, we.convertCell)(e, a));
    }
    return t;
  };
  we.toArray = my;
  var yy = (t) => (typeof t == "string" ? t.replace(" ", "T") : t);
  we.toTimestampString = yy;
  var _y = (t) => {
    let e = new URL(t);
    return (
      (e.protocol = e.protocol.replace(/^ws/i, "http")),
      (e.pathname = e.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      e.pathname === "" || e.pathname === "/"
        ? (e.pathname = "/api/broadcast")
        : (e.pathname = e.pathname + "/api/broadcast"),
      e.href
    );
  };
  we.httpEndpointURL = _y;
});
var Wi = F((yC, ku) => {
  "use strict";
  var Bi = Object.defineProperty,
    vy = Object.getOwnPropertyDescriptor,
    wy = Object.getOwnPropertyNames,
    by = Object.prototype.hasOwnProperty,
    Sy = (t, e) => {
      for (var r in e) Bi(t, r, { get: e[r], enumerable: !0 });
    },
    ky = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let s of wy(e))
          !by.call(t, s) &&
            s !== r &&
            Bi(t, s, {
              get: () => e[s],
              enumerable: !(n = vy(e, s)) || n.enumerable,
            });
      return t;
    },
    Ay = (t) => ky(Bi({}, "__esModule", { value: !0 }), t),
    bu = {};
  Sy(bu, {
    Channel: () => Su,
    LongPoll: () => Ur,
    Presence: () => Iy,
    Push: () => ds,
    Serializer: () => fs,
    Socket: () => xy,
    Timer: () => Hi,
  });
  ku.exports = Ay(bu);
  var ps = (t) =>
      typeof t == "function"
        ? t
        : function () {
            return t;
          },
    Ey = typeof self < "u" ? self : null,
    gn = typeof window < "u" ? window : null,
    Nt = Ey || gn || globalThis,
    Ty = "2.0.0",
    Cy = 1e4,
    Py = 1e3,
    Lt = { connecting: 0, open: 1, closing: 2, closed: 3 },
    ct = {
      closed: "closed",
      errored: "errored",
      joined: "joined",
      joining: "joining",
      leaving: "leaving",
    },
    Yt = {
      close: "phx_close",
      error: "phx_error",
      join: "phx_join",
      reply: "phx_reply",
      leave: "phx_leave",
    },
    Fi = { longpoll: "longpoll", websocket: "websocket" },
    Ry = { complete: 4 },
    qi = "base64url.bearer.phx.",
    ds = class {
      constructor(t, e, r, n) {
        ((this.channel = t),
          (this.event = e),
          (this.payload =
            r ||
            function () {
              return {};
            }),
          (this.receivedResp = null),
          (this.timeout = n),
          (this.timeoutTimer = null),
          (this.recHooks = []),
          (this.sent = !1),
          (this.ref = void 0));
      }
      resend(t) {
        ((this.timeout = t), this.reset(), this.send());
      }
      send() {
        this.hasReceived("timeout") ||
          (this.startTimeout(),
          (this.sent = !0),
          this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef(),
          }));
      }
      receive(t, e) {
        return (
          this.hasReceived(t) && e(this.receivedResp.response),
          this.recHooks.push({ status: t, callback: e }),
          this
        );
      }
      reset() {
        (this.cancelRefEvent(),
          (this.ref = null),
          (this.refEvent = null),
          (this.receivedResp = null),
          (this.sent = !1));
      }
      destroy() {
        (this.cancelRefEvent(), this.cancelTimeout());
      }
      matchReceive({ status: t, response: e, _ref: r }) {
        this.recHooks
          .filter((n) => n.status === t)
          .forEach((n) => n.callback(e));
      }
      cancelRefEvent() {
        this.refEvent && this.channel.off(this.refEvent);
      }
      cancelTimeout() {
        (clearTimeout(this.timeoutTimer), (this.timeoutTimer = null));
      }
      startTimeout() {
        (this.timeoutTimer && this.cancelTimeout(),
          (this.ref = this.channel.socket.makeRef()),
          (this.refEvent = this.channel.replyEventName(this.ref)),
          this.channel.on(this.refEvent, (t) => {
            (this.cancelRefEvent(),
              this.cancelTimeout(),
              (this.receivedResp = t),
              this.matchReceive(t));
          }),
          (this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {});
          }, this.timeout)));
      }
      hasReceived(t) {
        return this.receivedResp && this.receivedResp.status === t;
      }
      trigger(t, e) {
        this.channel.trigger(this.refEvent, { status: t, response: e });
      }
    },
    Hi = class {
      constructor(t, e) {
        ((this.callback = t),
          (this.timerCalc = e),
          (this.timer = void 0),
          (this.tries = 0));
      }
      reset() {
        ((this.tries = 0), clearTimeout(this.timer));
      }
      scheduleTimeout() {
        (clearTimeout(this.timer),
          (this.timer = setTimeout(
            () => {
              ((this.tries = this.tries + 1), this.callback());
            },
            this.timerCalc(this.tries + 1),
          )));
      }
    },
    Su = class {
      constructor(t, e, r) {
        ((this.state = ct.closed),
          (this.topic = t),
          (this.params = ps(e || {})),
          (this.socket = r),
          (this.bindings = []),
          (this.bindingRef = 0),
          (this.timeout = this.socket.timeout),
          (this.joinedOnce = !1),
          (this.joinPush = new ds(this, Yt.join, this.params, this.timeout)),
          (this.pushBuffer = []),
          (this.stateChangeRefs = []),
          (this.rejoinTimer = new Hi(() => {
            this.socket.isConnected() && this.rejoin();
          }, this.socket.rejoinAfterMs)),
          this.stateChangeRefs.push(
            this.socket.onError(() => this.rejoinTimer.reset()),
          ),
          this.stateChangeRefs.push(
            this.socket.onOpen(() => {
              (this.rejoinTimer.reset(), this.isErrored() && this.rejoin());
            }),
          ),
          this.joinPush.receive("ok", () => {
            ((this.state = ct.joined),
              this.rejoinTimer.reset(),
              this.pushBuffer.forEach((n) => n.send()),
              (this.pushBuffer = []));
          }),
          this.joinPush.receive("error", (n) => {
            ((this.state = ct.errored),
              this.socket.hasLogger() &&
                this.socket.log("channel", `error ${this.topic}`, n),
              this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
          }),
          this.onClose(() => {
            (this.rejoinTimer.reset(),
              this.socket.hasLogger() &&
                this.socket.log("channel", `close ${this.topic}`),
              (this.state = ct.closed),
              this.socket.remove(this));
          }),
          this.onError((n) => {
            (this.socket.hasLogger() &&
              this.socket.log("channel", `error ${this.topic}`, n),
              this.isJoining() && this.joinPush.reset(),
              (this.state = ct.errored),
              this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
          }),
          this.joinPush.receive("timeout", () => {
            (this.socket.hasLogger() &&
              this.socket.log(
                "channel",
                `timeout ${this.topic}`,
                this.joinPush.timeout,
              ),
              new ds(this, Yt.leave, ps({}), this.timeout).send(),
              (this.state = ct.errored),
              this.joinPush.reset(),
              this.socket.isConnected() && this.rejoinTimer.scheduleTimeout());
          }),
          this.on(Yt.reply, (n, s) => {
            this.trigger(this.replyEventName(s), n);
          }));
      }
      join(t = this.timeout) {
        if (this.joinedOnce)
          throw new Error(
            "tried to join multiple times. 'join' can only be called a single time per channel instance",
          );
        return (
          (this.timeout = t),
          (this.joinedOnce = !0),
          this.rejoin(),
          this.joinPush
        );
      }
      teardown() {
        (this.pushBuffer.forEach((t) => t.destroy()),
          (this.pushBuffer = []),
          this.rejoinTimer.reset(),
          this.joinPush.destroy(),
          (this.state = ct.closed),
          (this.bindings = []));
      }
      onClose(t) {
        this.on(Yt.close, t);
      }
      onError(t) {
        return this.on(Yt.error, (e) => t(e));
      }
      on(t, e) {
        let r = this.bindingRef++;
        return (this.bindings.push({ event: t, ref: r, callback: e }), r);
      }
      off(t, e) {
        this.bindings = this.bindings.filter(
          (r) => !(r.event === t && (typeof e > "u" || e === r.ref)),
        );
      }
      canPush() {
        return this.socket.isConnected() && this.isJoined();
      }
      push(t, e, r = this.timeout) {
        if (((e = e || {}), !this.joinedOnce))
          throw new Error(
            `tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`,
          );
        let n = new ds(
          this,
          t,
          function () {
            return e;
          },
          r,
        );
        return (
          this.canPush()
            ? n.send()
            : (n.startTimeout(), this.pushBuffer.push(n)),
          n
        );
      }
      leave(t = this.timeout) {
        (this.rejoinTimer.reset(),
          this.joinPush.cancelTimeout(),
          (this.state = ct.leaving));
        let e = () => {
            (this.socket.hasLogger() &&
              this.socket.log("channel", `leave ${this.topic}`),
              this.trigger(Yt.close, "leave"));
          },
          r = new ds(this, Yt.leave, ps({}), t);
        return (
          r.receive("ok", () => e()).receive("timeout", () => e()),
          r.send(),
          this.canPush() || r.trigger("ok", {}),
          r
        );
      }
      onMessage(t, e, r) {
        return e;
      }
      filterBindings(t, e, r) {
        return !0;
      }
      isMember(t, e, r, n) {
        return this.topic !== t
          ? !1
          : n && n !== this.joinRef()
            ? (this.socket.hasLogger() &&
                this.socket.log("channel", "dropping outdated message", {
                  topic: t,
                  event: e,
                  payload: r,
                  joinRef: n,
                }),
              !1)
            : !0;
      }
      joinRef() {
        return this.joinPush.ref;
      }
      rejoin(t = this.timeout) {
        this.isLeaving() ||
          (this.socket.leaveOpenTopic(this.topic),
          (this.state = ct.joining),
          this.joinPush.resend(t));
      }
      trigger(t, e, r, n) {
        let s = this.onMessage(t, e, r, n);
        if (e && !s)
          throw new Error(
            "channel onMessage callbacks must return the payload, modified or unmodified",
          );
        let o = this.bindings.filter(
          (i) => i.event === t && this.filterBindings(i, e, r),
        );
        for (let i = 0; i < o.length; i++)
          o[i].callback(s, r, n || this.joinRef());
      }
      replyEventName(t) {
        return `chan_reply_${t}`;
      }
      isClosed() {
        return this.state === ct.closed;
      }
      isErrored() {
        return this.state === ct.errored;
      }
      isJoined() {
        return this.state === ct.joined;
      }
      isJoining() {
        return this.state === ct.joining;
      }
      isLeaving() {
        return this.state === ct.leaving;
      }
    },
    mo = class {
      static request(t, e, r, n, s, o, i) {
        if (Nt.XDomainRequest) {
          let a = new Nt.XDomainRequest();
          return this.xdomainRequest(a, t, e, n, s, o, i);
        } else if (Nt.XMLHttpRequest) {
          let a = new Nt.XMLHttpRequest();
          return this.xhrRequest(a, t, e, r, n, s, o, i);
        } else {
          if (Nt.fetch && Nt.AbortController)
            return this.fetchRequest(t, e, r, n, s, o, i);
          throw new Error("No suitable XMLHttpRequest implementation found");
        }
      }
      static fetchRequest(t, e, r, n, s, o, i) {
        let a = { method: t, headers: r, body: n },
          c = null;
        if (s) {
          c = new AbortController();
          let l = setTimeout(() => c.abort(), s);
          a.signal = c.signal;
        }
        return (
          Nt.fetch(e, a)
            .then((l) => l.text())
            .then((l) => this.parseJSON(l))
            .then((l) => i && i(l))
            .catch((l) => {
              l.name === "AbortError" && o ? o() : i && i(null);
            }),
          c
        );
      }
      static xdomainRequest(t, e, r, n, s, o, i) {
        return (
          (t.timeout = s),
          t.open(e, r),
          (t.onload = () => {
            let a = this.parseJSON(t.responseText);
            i && i(a);
          }),
          o && (t.ontimeout = o),
          (t.onprogress = () => {}),
          t.send(n),
          t
        );
      }
      static xhrRequest(t, e, r, n, s, o, i, a) {
        (t.open(e, r, !0), (t.timeout = o));
        for (let [c, l] of Object.entries(n)) t.setRequestHeader(c, l);
        return (
          (t.onerror = () => a && a(null)),
          (t.onreadystatechange = () => {
            if (t.readyState === Ry.complete && a) {
              let c = this.parseJSON(t.responseText);
              a(c);
            }
          }),
          i && (t.ontimeout = i),
          t.send(s),
          t
        );
      }
      static parseJSON(t) {
        if (!t || t === "") return null;
        try {
          return JSON.parse(t);
        } catch {
          return (
            console && console.log("failed to parse JSON response", t),
            null
          );
        }
      }
      static serialize(t, e) {
        let r = [];
        for (var n in t) {
          if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
          let s = e ? `${e}[${n}]` : n,
            o = t[n];
          typeof o == "object"
            ? r.push(this.serialize(o, s))
            : r.push(encodeURIComponent(s) + "=" + encodeURIComponent(o));
        }
        return r.join("&");
      }
      static appendParams(t, e) {
        if (Object.keys(e).length === 0) return t;
        let r = t.match(/\?/) ? "&" : "?";
        return `${t}${r}${this.serialize(e)}`;
      }
    },
    Oy = (t) => {
      let e = "",
        r = new Uint8Array(t),
        n = r.byteLength;
      for (let s = 0; s < n; s++) e += String.fromCharCode(r[s]);
      return btoa(e);
    },
    Ur = class {
      constructor(t, e) {
        (e &&
          e.length === 2 &&
          e[1].startsWith(qi) &&
          (this.authToken = atob(e[1].slice(qi.length))),
          (this.endPoint = null),
          (this.token = null),
          (this.skipHeartbeat = !0),
          (this.reqs = new Set()),
          (this.awaitingBatchAck = !1),
          (this.currentBatch = null),
          (this.currentBatchTimer = null),
          (this.batchBuffer = []),
          (this.onopen = function () {}),
          (this.onerror = function () {}),
          (this.onmessage = function () {}),
          (this.onclose = function () {}),
          (this.pollEndpoint = this.normalizeEndpoint(t)),
          (this.readyState = Lt.connecting),
          setTimeout(() => this.poll(), 0));
      }
      normalizeEndpoint(t) {
        return t
          .replace("ws://", "http://")
          .replace("wss://", "https://")
          .replace(new RegExp("(.*)/" + Fi.websocket), "$1/" + Fi.longpoll);
      }
      endpointURL() {
        return mo.appendParams(this.pollEndpoint, { token: this.token });
      }
      closeAndRetry(t, e, r) {
        (this.close(t, e, r), (this.readyState = Lt.connecting));
      }
      ontimeout() {
        (this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1));
      }
      isActive() {
        return this.readyState === Lt.open || this.readyState === Lt.connecting;
      }
      poll() {
        let t = { Accept: "application/json" };
        (this.authToken && (t["X-Phoenix-AuthToken"] = this.authToken),
          this.ajax(
            "GET",
            t,
            null,
            () => this.ontimeout(),
            (e) => {
              if (e) {
                var { status: r, token: n, messages: s } = e;
                if (r === 410 && this.token !== null) {
                  (this.onerror(410),
                    this.closeAndRetry(3410, "session_gone", !1));
                  return;
                }
                this.token = n;
              } else r = 0;
              switch (r) {
                case 200:
                  (s.forEach((o) => {
                    setTimeout(() => this.onmessage({ data: o }), 0);
                  }),
                    this.poll());
                  break;
                case 204:
                  this.poll();
                  break;
                case 410:
                  ((this.readyState = Lt.open), this.onopen({}), this.poll());
                  break;
                case 403:
                  (this.onerror(403), this.close(1008, "forbidden", !1));
                  break;
                case 0:
                case 500:
                  (this.onerror(500),
                    this.closeAndRetry(1011, "internal server error", 500));
                  break;
                default:
                  throw new Error(`unhandled poll status ${r}`);
              }
            },
          ));
      }
      send(t) {
        (typeof t != "string" && (t = Oy(t)),
          this.currentBatch
            ? this.currentBatch.push(t)
            : this.awaitingBatchAck
              ? this.batchBuffer.push(t)
              : ((this.currentBatch = [t]),
                (this.currentBatchTimer = setTimeout(() => {
                  (this.batchSend(this.currentBatch),
                    (this.currentBatch = null));
                }, 0))));
      }
      batchSend(t) {
        ((this.awaitingBatchAck = !0),
          this.ajax(
            "POST",
            { "Content-Type": "application/x-ndjson" },
            t.join(`
`),
            () => this.onerror("timeout"),
            (e) => {
              ((this.awaitingBatchAck = !1),
                !e || e.status !== 200
                  ? (this.onerror(e && e.status),
                    this.closeAndRetry(1011, "internal server error", !1))
                  : this.batchBuffer.length > 0 &&
                    (this.batchSend(this.batchBuffer),
                    (this.batchBuffer = [])));
            },
          ));
      }
      close(t, e, r) {
        for (let s of this.reqs) s.abort();
        this.readyState = Lt.closed;
        let n = Object.assign(
          { code: 1e3, reason: void 0, wasClean: !0 },
          { code: t, reason: e, wasClean: r },
        );
        ((this.batchBuffer = []),
          clearTimeout(this.currentBatchTimer),
          (this.currentBatchTimer = null),
          typeof CloseEvent < "u"
            ? this.onclose(new CloseEvent("close", n))
            : this.onclose(n));
      }
      ajax(t, e, r, n, s) {
        let o,
          i = () => {
            (this.reqs.delete(o), n());
          };
        ((o = mo.request(t, this.endpointURL(), e, r, this.timeout, i, (a) => {
          (this.reqs.delete(o), this.isActive() && s(a));
        })),
          this.reqs.add(o));
      }
    },
    Iy = class hs {
      constructor(e, r = {}) {
        let n = r.events || { state: "presence_state", diff: "presence_diff" };
        ((this.state = {}),
          (this.pendingDiffs = []),
          (this.channel = e),
          (this.joinRef = null),
          (this.caller = {
            onJoin: function () {},
            onLeave: function () {},
            onSync: function () {},
          }),
          this.channel.on(n.state, (s) => {
            let { onJoin: o, onLeave: i, onSync: a } = this.caller;
            ((this.joinRef = this.channel.joinRef()),
              (this.state = hs.syncState(this.state, s, o, i)),
              this.pendingDiffs.forEach((c) => {
                this.state = hs.syncDiff(this.state, c, o, i);
              }),
              (this.pendingDiffs = []),
              a());
          }),
          this.channel.on(n.diff, (s) => {
            let { onJoin: o, onLeave: i, onSync: a } = this.caller;
            this.inPendingSyncState()
              ? this.pendingDiffs.push(s)
              : ((this.state = hs.syncDiff(this.state, s, o, i)), a());
          }));
      }
      onJoin(e) {
        this.caller.onJoin = e;
      }
      onLeave(e) {
        this.caller.onLeave = e;
      }
      onSync(e) {
        this.caller.onSync = e;
      }
      list(e) {
        return hs.list(this.state, e);
      }
      inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel.joinRef();
      }
      static syncState(e, r, n, s) {
        let o = this.clone(e),
          i = {},
          a = {};
        return (
          this.map(o, (c, l) => {
            r[c] || (a[c] = l);
          }),
          this.map(r, (c, l) => {
            let d = o[c];
            if (d) {
              let u = l.metas.map((g) => g.phx_ref),
                f = d.metas.map((g) => g.phx_ref),
                h = l.metas.filter((g) => f.indexOf(g.phx_ref) < 0),
                p = d.metas.filter((g) => u.indexOf(g.phx_ref) < 0);
              (h.length > 0 && ((i[c] = l), (i[c].metas = h)),
                p.length > 0 && ((a[c] = this.clone(d)), (a[c].metas = p)));
            } else i[c] = l;
          }),
          this.syncDiff(o, { joins: i, leaves: a }, n, s)
        );
      }
      static syncDiff(e, r, n, s) {
        let { joins: o, leaves: i } = this.clone(r);
        return (
          n || (n = function () {}),
          s || (s = function () {}),
          this.map(o, (a, c) => {
            let l = e[a];
            if (((e[a] = this.clone(c)), l)) {
              let d = e[a].metas.map((f) => f.phx_ref),
                u = l.metas.filter((f) => d.indexOf(f.phx_ref) < 0);
              e[a].metas.unshift(...u);
            }
            n(a, l, c);
          }),
          this.map(i, (a, c) => {
            let l = e[a];
            if (!l) return;
            let d = c.metas.map((u) => u.phx_ref);
            ((l.metas = l.metas.filter((u) => d.indexOf(u.phx_ref) < 0)),
              s(a, l, c),
              l.metas.length === 0 && delete e[a]);
          }),
          e
        );
      }
      static list(e, r) {
        return (
          r ||
            (r = function (n, s) {
              return s;
            }),
          this.map(e, (n, s) => r(n, s))
        );
      }
      static map(e, r) {
        return Object.getOwnPropertyNames(e).map((n) => r(n, e[n]));
      }
      static clone(e) {
        return JSON.parse(JSON.stringify(e));
      }
    },
    fs = {
      HEADER_LENGTH: 1,
      META_LENGTH: 4,
      KINDS: { push: 0, reply: 1, broadcast: 2 },
      encode(t, e) {
        if (t.payload.constructor === ArrayBuffer)
          return e(this.binaryEncode(t));
        {
          let r = [t.join_ref, t.ref, t.topic, t.event, t.payload];
          return e(JSON.stringify(r));
        }
      },
      decode(t, e) {
        if (t.constructor === ArrayBuffer) return e(this.binaryDecode(t));
        {
          let [r, n, s, o, i] = JSON.parse(t);
          return e({ join_ref: r, ref: n, topic: s, event: o, payload: i });
        }
      },
      binaryEncode(t) {
        let { join_ref: e, ref: r, event: n, topic: s, payload: o } = t,
          i = this.META_LENGTH + e.length + r.length + s.length + n.length,
          a = new ArrayBuffer(this.HEADER_LENGTH + i),
          c = new DataView(a),
          l = 0;
        (c.setUint8(l++, this.KINDS.push),
          c.setUint8(l++, e.length),
          c.setUint8(l++, r.length),
          c.setUint8(l++, s.length),
          c.setUint8(l++, n.length),
          Array.from(e, (u) => c.setUint8(l++, u.charCodeAt(0))),
          Array.from(r, (u) => c.setUint8(l++, u.charCodeAt(0))),
          Array.from(s, (u) => c.setUint8(l++, u.charCodeAt(0))),
          Array.from(n, (u) => c.setUint8(l++, u.charCodeAt(0))));
        var d = new Uint8Array(a.byteLength + o.byteLength);
        return (
          d.set(new Uint8Array(a), 0),
          d.set(new Uint8Array(o), a.byteLength),
          d.buffer
        );
      },
      binaryDecode(t) {
        let e = new DataView(t),
          r = e.getUint8(0),
          n = new TextDecoder();
        switch (r) {
          case this.KINDS.push:
            return this.decodePush(t, e, n);
          case this.KINDS.reply:
            return this.decodeReply(t, e, n);
          case this.KINDS.broadcast:
            return this.decodeBroadcast(t, e, n);
        }
      },
      decodePush(t, e, r) {
        let n = e.getUint8(1),
          s = e.getUint8(2),
          o = e.getUint8(3),
          i = this.HEADER_LENGTH + this.META_LENGTH - 1,
          a = r.decode(t.slice(i, i + n));
        i = i + n;
        let c = r.decode(t.slice(i, i + s));
        i = i + s;
        let l = r.decode(t.slice(i, i + o));
        i = i + o;
        let d = t.slice(i, t.byteLength);
        return { join_ref: a, ref: null, topic: c, event: l, payload: d };
      },
      decodeReply(t, e, r) {
        let n = e.getUint8(1),
          s = e.getUint8(2),
          o = e.getUint8(3),
          i = e.getUint8(4),
          a = this.HEADER_LENGTH + this.META_LENGTH,
          c = r.decode(t.slice(a, a + n));
        a = a + n;
        let l = r.decode(t.slice(a, a + s));
        a = a + s;
        let d = r.decode(t.slice(a, a + o));
        a = a + o;
        let u = r.decode(t.slice(a, a + i));
        a = a + i;
        let f = t.slice(a, t.byteLength),
          h = { status: u, response: f };
        return { join_ref: c, ref: l, topic: d, event: Yt.reply, payload: h };
      },
      decodeBroadcast(t, e, r) {
        let n = e.getUint8(1),
          s = e.getUint8(2),
          o = this.HEADER_LENGTH + 2,
          i = r.decode(t.slice(o, o + n));
        o = o + n;
        let a = r.decode(t.slice(o, o + s));
        o = o + s;
        let c = t.slice(o, t.byteLength);
        return { join_ref: null, ref: null, topic: i, event: a, payload: c };
      },
    },
    xy = class {
      constructor(t, e = {}) {
        ((this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: [],
        }),
          (this.channels = []),
          (this.sendBuffer = []),
          (this.ref = 0),
          (this.fallbackRef = null),
          (this.timeout = e.timeout || Cy),
          (this.transport = e.transport || Nt.WebSocket || Ur),
          (this.conn = void 0),
          (this.primaryPassedHealthCheck = !1),
          (this.longPollFallbackMs = e.longPollFallbackMs),
          (this.fallbackTimer = null));
        let r = null;
        try {
          r = Nt && Nt.sessionStorage;
        } catch {}
        ((this.sessionStore = e.sessionStorage || r),
          (this.establishedConnections = 0),
          (this.defaultEncoder = fs.encode.bind(fs)),
          (this.defaultDecoder = fs.decode.bind(fs)),
          (this.closeWasClean = !0),
          (this.disconnecting = !1),
          (this.binaryType = e.binaryType || "arraybuffer"),
          (this.connectClock = 1),
          (this.pageHidden = !1),
          (this.encode = void 0),
          (this.decode = void 0),
          this.transport !== Ur
            ? ((this.encode = e.encode || this.defaultEncoder),
              (this.decode = e.decode || this.defaultDecoder))
            : ((this.encode = this.defaultEncoder),
              (this.decode = this.defaultDecoder)));
        let n = null;
        (gn &&
          gn.addEventListener &&
          (gn.addEventListener("pagehide", (s) => {
            this.conn && (this.disconnect(), (n = this.connectClock));
          }),
          gn.addEventListener("pageshow", (s) => {
            n === this.connectClock && ((n = null), this.connect());
          }),
          gn.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden"
              ? (this.pageHidden = !0)
              : ((this.pageHidden = !1),
                !this.isConnected() &&
                  !this.closeWasClean &&
                  this.teardown(() => this.connect()));
          })),
          (this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4),
          (this.autoSendHeartbeat = e.autoSendHeartbeat ?? !0),
          (this.heartbeatCallback = e.heartbeatCallback ?? (() => {})),
          (this.rejoinAfterMs = (s) =>
            e.rejoinAfterMs
              ? e.rejoinAfterMs(s)
              : [1e3, 2e3, 5e3][s - 1] || 1e4),
          (this.reconnectAfterMs = (s) =>
            e.reconnectAfterMs
              ? e.reconnectAfterMs(s)
              : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][s - 1] || 5e3),
          (this.logger = e.logger || null),
          !this.logger &&
            e.debug &&
            (this.logger = (s, o, i) => {
              console.log(`${s}: ${o}`, i);
            }),
          (this.longpollerTimeout = e.longpollerTimeout || 2e4),
          (this.params = ps(e.params || {})),
          (this.endPoint = `${t}/${Fi.websocket}`),
          (this.vsn = e.vsn || Ty),
          (this.heartbeatTimeoutTimer = null),
          (this.heartbeatTimer = null),
          (this.heartbeatSentAt = null),
          (this.pendingHeartbeatRef = null),
          (this.reconnectTimer = new Hi(() => {
            if (this.pageHidden) {
              (this.log("Not reconnecting as page is hidden!"),
                this.teardown());
              return;
            }
            this.teardown(async () => {
              (e.beforeReconnect && (await e.beforeReconnect()),
                this.connect());
            });
          }, this.reconnectAfterMs)),
          (this.authToken = e.authToken));
      }
      getLongPollTransport() {
        return Ur;
      }
      replaceTransport(t) {
        (this.connectClock++,
          (this.closeWasClean = !0),
          clearTimeout(this.fallbackTimer),
          this.reconnectTimer.reset(),
          this.conn && (this.conn.close(), (this.conn = null)),
          (this.transport = t));
      }
      protocol() {
        return location.protocol.match(/^https/) ? "wss" : "ws";
      }
      endPointURL() {
        let t = mo.appendParams(mo.appendParams(this.endPoint, this.params()), {
          vsn: this.vsn,
        });
        return t.charAt(0) !== "/"
          ? t
          : t.charAt(1) === "/"
            ? `${this.protocol()}:${t}`
            : `${this.protocol()}://${location.host}${t}`;
      }
      disconnect(t, e, r) {
        (this.connectClock++,
          (this.disconnecting = !0),
          (this.closeWasClean = !0),
          clearTimeout(this.fallbackTimer),
          this.reconnectTimer.reset(),
          this.teardown(
            () => {
              ((this.disconnecting = !1), t && t());
            },
            e,
            r,
          ));
      }
      connect(t) {
        (t &&
          (console &&
            console.log(
              "passing params to connect is deprecated. Instead pass :params to the Socket constructor",
            ),
          (this.params = ps(t))),
          !(this.conn && !this.disconnecting) &&
            (this.longPollFallbackMs && this.transport !== Ur
              ? this.connectWithFallback(Ur, this.longPollFallbackMs)
              : this.transportConnect()));
      }
      log(t, e, r) {
        this.logger && this.logger(t, e, r);
      }
      hasLogger() {
        return this.logger !== null;
      }
      onOpen(t) {
        let e = this.makeRef();
        return (this.stateChangeCallbacks.open.push([e, t]), e);
      }
      onClose(t) {
        let e = this.makeRef();
        return (this.stateChangeCallbacks.close.push([e, t]), e);
      }
      onError(t) {
        let e = this.makeRef();
        return (this.stateChangeCallbacks.error.push([e, t]), e);
      }
      onMessage(t) {
        let e = this.makeRef();
        return (this.stateChangeCallbacks.message.push([e, t]), e);
      }
      onHeartbeat(t) {
        this.heartbeatCallback = t;
      }
      ping(t) {
        if (!this.isConnected()) return !1;
        let e = this.makeRef(),
          r = Date.now();
        this.push({
          topic: "phoenix",
          event: "heartbeat",
          payload: {},
          ref: e,
        });
        let n = this.onMessage((s) => {
          s.ref === e && (this.off([n]), t(Date.now() - r));
        });
        return !0;
      }
      transportName(t) {
        return t === Ur ? "LongPoll" : t.name;
      }
      transportConnect() {
        (this.connectClock++, (this.closeWasClean = !1));
        let t;
        (this.authToken &&
          (t = ["phoenix", `${qi}${btoa(this.authToken).replace(/=/g, "")}`]),
          (this.conn = new this.transport(this.endPointURL(), t)),
          (this.conn.binaryType = this.binaryType),
          (this.conn.timeout = this.longpollerTimeout),
          (this.conn.onopen = () => this.onConnOpen()),
          (this.conn.onerror = (e) => this.onConnError(e)),
          (this.conn.onmessage = (e) => this.onConnMessage(e)),
          (this.conn.onclose = (e) => this.onConnClose(e)));
      }
      getSession(t) {
        return this.sessionStore && this.sessionStore.getItem(t);
      }
      storeSession(t, e) {
        this.sessionStore && this.sessionStore.setItem(t, e);
      }
      connectWithFallback(t, e = 2500) {
        clearTimeout(this.fallbackTimer);
        let r = !1,
          n = !0,
          s,
          o,
          i = this.transportName(t),
          a = (c) => {
            (this.log("transport", `falling back to ${i}...`, c),
              this.off([s, o]),
              (n = !1),
              this.replaceTransport(t),
              this.transportConnect());
          };
        if (this.getSession(`phx:fallback:${i}`)) return a("memorized");
        ((this.fallbackTimer = setTimeout(a, e)),
          (o = this.onError((c) => {
            (this.log("transport", "error", c),
              n && !r && (clearTimeout(this.fallbackTimer), a(c)));
          })),
          this.fallbackRef && this.off([this.fallbackRef]),
          (this.fallbackRef = this.onOpen(() => {
            if (((r = !0), !n)) {
              let c = this.transportName(t);
              return (
                this.primaryPassedHealthCheck ||
                  this.storeSession(`phx:fallback:${c}`, "true"),
                this.log("transport", `established ${c} fallback`)
              );
            }
            (clearTimeout(this.fallbackTimer),
              (this.fallbackTimer = setTimeout(a, e)),
              this.ping((c) => {
                (this.log("transport", "connected to primary after", c),
                  (this.primaryPassedHealthCheck = !0),
                  clearTimeout(this.fallbackTimer));
              }));
          })),
          this.transportConnect());
      }
      clearHeartbeats() {
        (clearTimeout(this.heartbeatTimer),
          clearTimeout(this.heartbeatTimeoutTimer));
      }
      onConnOpen() {
        (this.hasLogger() &&
          this.log("transport", `connected to ${this.endPointURL()}`),
          (this.closeWasClean = !1),
          (this.disconnecting = !1),
          this.establishedConnections++,
          this.flushSendBuffer(),
          this.reconnectTimer.reset(),
          this.autoSendHeartbeat && this.resetHeartbeat(),
          this.triggerStateCallbacks("open"));
      }
      heartbeatTimeout() {
        if (this.pendingHeartbeatRef) {
          ((this.pendingHeartbeatRef = null),
            (this.heartbeatSentAt = null),
            this.hasLogger() &&
              this.log(
                "transport",
                "heartbeat timeout. Attempting to re-establish connection",
              ));
          try {
            this.heartbeatCallback("timeout");
          } catch (t) {
            this.log("error", "error in heartbeat callback", t);
          }
          (this.triggerChanError(new Error("heartbeat timeout")),
            (this.closeWasClean = !1),
            this.teardown(
              () => this.reconnectTimer.scheduleTimeout(),
              Py,
              "heartbeat timeout",
            ));
        }
      }
      resetHeartbeat() {
        (this.conn && this.conn.skipHeartbeat) ||
          ((this.pendingHeartbeatRef = null),
          this.clearHeartbeats(),
          (this.heartbeatTimer = setTimeout(
            () => this.sendHeartbeat(),
            this.heartbeatIntervalMs,
          )));
      }
      teardown(t, e, r) {
        if (!this.conn) return t && t();
        let n = this.conn;
        this.waitForBufferDone(n, () => {
          (e ? n.close(e, r || "") : n.close(),
            this.waitForSocketClosed(n, () => {
              (this.conn === n &&
                ((this.conn.onopen = function () {}),
                (this.conn.onerror = function () {}),
                (this.conn.onmessage = function () {}),
                (this.conn.onclose = function () {}),
                (this.conn = null)),
                t && t());
            }));
        });
      }
      waitForBufferDone(t, e, r = 1) {
        if (r === 5 || !t.bufferedAmount) {
          e();
          return;
        }
        setTimeout(() => {
          this.waitForBufferDone(t, e, r + 1);
        }, 150 * r);
      }
      waitForSocketClosed(t, e, r = 1) {
        if (r === 5 || t.readyState === Lt.closed) {
          e();
          return;
        }
        setTimeout(() => {
          this.waitForSocketClosed(t, e, r + 1);
        }, 150 * r);
      }
      onConnClose(t) {
        (this.conn && (this.conn.onclose = () => {}),
          this.hasLogger() && this.log("transport", "close", t),
          this.triggerChanError(t),
          this.clearHeartbeats(),
          this.closeWasClean || this.reconnectTimer.scheduleTimeout(),
          this.triggerStateCallbacks("close", t));
      }
      onConnError(t) {
        this.hasLogger() && this.log("transport", "error", t);
        let e = this.transport,
          r = this.establishedConnections;
        (this.triggerStateCallbacks("error", t, e, r),
          (e === this.transport || r > 0) && this.triggerChanError(t));
      }
      triggerChanError(t) {
        this.channels.forEach((e) => {
          e.isErrored() ||
            e.isLeaving() ||
            e.isClosed() ||
            e.trigger(Yt.error, t);
        });
      }
      connectionState() {
        switch (this.conn && this.conn.readyState) {
          case Lt.connecting:
            return "connecting";
          case Lt.open:
            return "open";
          case Lt.closing:
            return "closing";
          default:
            return "closed";
        }
      }
      isConnected() {
        return this.connectionState() === "open";
      }
      remove(t) {
        (this.off(t.stateChangeRefs),
          (this.channels = this.channels.filter((e) => e !== t)));
      }
      off(t) {
        for (let e in this.stateChangeCallbacks)
          this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(
            ([r]) => t.indexOf(r) === -1,
          );
      }
      channel(t, e = {}) {
        let r = new Su(t, e, this);
        return (this.channels.push(r), r);
      }
      push(t) {
        if (this.hasLogger()) {
          let { topic: e, event: r, payload: n, ref: s, join_ref: o } = t;
          this.log("push", `${e} ${r} (${o}, ${s})`, n);
        }
        this.isConnected()
          ? this.encode(t, (e) => this.conn.send(e))
          : this.sendBuffer.push(() =>
              this.encode(t, (e) => this.conn.send(e)),
            );
      }
      makeRef() {
        let t = this.ref + 1;
        return (
          t === this.ref ? (this.ref = 0) : (this.ref = t),
          this.ref.toString()
        );
      }
      sendHeartbeat() {
        if (!this.isConnected()) {
          try {
            this.heartbeatCallback("disconnected");
          } catch (t) {
            this.log("error", "error in heartbeat callback", t);
          }
          return;
        }
        if (this.pendingHeartbeatRef) {
          this.heartbeatTimeout();
          return;
        }
        ((this.pendingHeartbeatRef = this.makeRef()),
          (this.heartbeatSentAt = Date.now()),
          this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef,
          }));
        try {
          this.heartbeatCallback("sent");
        } catch (t) {
          this.log("error", "error in heartbeat callback", t);
        }
        this.heartbeatTimeoutTimer = setTimeout(
          () => this.heartbeatTimeout(),
          this.heartbeatIntervalMs,
        );
      }
      flushSendBuffer() {
        this.isConnected() &&
          this.sendBuffer.length > 0 &&
          (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
      }
      onConnMessage(t) {
        this.decode(t.data, (e) => {
          let { topic: r, event: n, payload: s, ref: o, join_ref: i } = e;
          if (o && o === this.pendingHeartbeatRef) {
            let a = this.heartbeatSentAt
              ? Date.now() - this.heartbeatSentAt
              : void 0;
            this.clearHeartbeats();
            try {
              this.heartbeatCallback(s.status === "ok" ? "ok" : "error", a);
            } catch (c) {
              this.log("error", "error in heartbeat callback", c);
            }
            ((this.pendingHeartbeatRef = null),
              (this.heartbeatSentAt = null),
              this.autoSendHeartbeat &&
                (this.heartbeatTimer = setTimeout(
                  () => this.sendHeartbeat(),
                  this.heartbeatIntervalMs,
                )));
          }
          this.hasLogger() &&
            this.log(
              "receive",
              `${s.status || ""} ${r} ${n} ${(o && "(" + o + ")") || ""}`.trim(),
              s,
            );
          for (let a = 0; a < this.channels.length; a++) {
            let c = this.channels[a];
            c.isMember(r, n, s, i) && c.trigger(n, s, o, i);
          }
          this.triggerStateCallbacks("message", e);
        });
      }
      triggerStateCallbacks(t, ...e) {
        try {
          this.stateChangeCallbacks[t].forEach(([r, n]) => {
            try {
              n(...e);
            } catch (s) {
              this.log("error", `error in ${t} callback`, s);
            }
          });
        } catch (r) {
          this.log("error", `error triggering ${t} callbacks`, r);
        }
      }
      leaveOpenTopic(t) {
        let e = this.channels.find(
          (r) => r.topic === t && (r.isJoined() || r.isJoining()),
        );
        e &&
          (this.hasLogger() &&
            this.log("transport", `leaving duplicate topic "${t}"`),
          e.leave());
      }
    };
});
var Eu = F((Ki) => {
  "use strict";
  Object.defineProperty(Ki, "__esModule", { value: !0 });
  var Ny = Wi(),
    Vi = class t {
      constructor(e, r) {
        let n = jy(r);
        ((this.presence = new Ny.Presence(e.getChannel(), n)),
          this.presence.onJoin((s, o, i) => {
            let a = t.onJoinPayload(s, o, i);
            e.getChannel().trigger("presence", a);
          }),
          this.presence.onLeave((s, o, i) => {
            let a = t.onLeavePayload(s, o, i);
            e.getChannel().trigger("presence", a);
          }),
          this.presence.onSync(() => {
            e.getChannel().trigger("presence", { event: "sync" });
          }));
      }
      get state() {
        return t.transformState(this.presence.state);
      }
      static transformState(e) {
        return (
          (e = Ly(e)),
          Object.getOwnPropertyNames(e).reduce((r, n) => {
            let s = e[n];
            return ((r[n] = yo(s)), r);
          }, {})
        );
      }
      static onJoinPayload(e, r, n) {
        let s = Au(r),
          o = yo(n);
        return { event: "join", key: e, currentPresences: s, newPresences: o };
      }
      static onLeavePayload(e, r, n) {
        let s = Au(r),
          o = yo(n);
        return {
          event: "leave",
          key: e,
          currentPresences: s,
          leftPresences: o,
        };
      }
    };
  Ki.default = Vi;
  function yo(t) {
    return t.metas.map(
      (e) => (
        (e.presence_ref = e.phx_ref),
        delete e.phx_ref,
        delete e.phx_ref_prev,
        e
      ),
    );
  }
  function Ly(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function jy(t) {
    return t?.events && { events: t.events };
  }
  function Au(t) {
    return t?.metas ? yo(t) : [];
  }
});
var Gi = F((gs) => {
  "use strict";
  Object.defineProperty(gs, "__esModule", { value: !0 });
  gs.REALTIME_PRESENCE_LISTEN_EVENTS = void 0;
  var My = (ut(), gt(lt)),
    Dy = My.__importDefault(Eu()),
    Tu;
  (function (t) {
    ((t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave"));
  })(Tu || (gs.REALTIME_PRESENCE_LISTEN_EVENTS = Tu = {}));
  var zi = class {
    get state() {
      return this.presenceAdapter.state;
    }
    constructor(e, r) {
      ((this.channel = e),
        (this.presenceAdapter = new Dy.default(
          this.channel.channelAdapter,
          r,
        )));
    }
  };
  gs.default = zi;
});
var Cu = F((Ji) => {
  "use strict";
  Object.defineProperty(Ji, "__esModule", { value: !0 });
  Ji.normalizeChannelError = Uy;
  function Uy(t) {
    if (t instanceof Error) return t;
    if (typeof t == "string") return new Error(t);
    if (t && typeof t == "object") {
      let e = t;
      if (typeof e.code == "number") {
        let r = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
        return new Error(`socket closed: ${e.code}${r}`, { cause: t });
      }
      return new Error("channel error: transport failure", { cause: t });
    }
    return new Error("channel error: connection lost");
  }
});
var Pu = F((Xi) => {
  "use strict";
  Object.defineProperty(Xi, "__esModule", { value: !0 });
  var mn = us(),
    Yi = class {
      constructor(e, r, n) {
        let s = $y(n);
        ((this.channel = e.getSocket().channel(r, s)), (this.socket = e));
      }
      get state() {
        return this.channel.state;
      }
      set state(e) {
        this.channel.state = e;
      }
      get joinedOnce() {
        return this.channel.joinedOnce;
      }
      get joinPush() {
        return this.channel.joinPush;
      }
      get rejoinTimer() {
        return this.channel.rejoinTimer;
      }
      on(e, r) {
        return this.channel.on(e, r);
      }
      off(e, r) {
        this.channel.off(e, r);
      }
      subscribe(e) {
        return this.channel.join(e);
      }
      unsubscribe(e) {
        return this.channel.leave(e);
      }
      teardown() {
        this.channel.teardown();
      }
      onClose(e) {
        this.channel.onClose(e);
      }
      onError(e) {
        return this.channel.onError(e);
      }
      push(e, r, n) {
        let s;
        try {
          s = this.channel.push(e, r, n);
        } catch {
          throw new Error(
            `tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`,
          );
        }
        if (this.channel.pushBuffer.length > mn.MAX_PUSH_BUFFER_SIZE) {
          let o = this.channel.pushBuffer.shift();
          (o.cancelTimeout(),
            this.socket.log(
              "channel",
              `discarded push due to buffer overflow: ${o.event}`,
              o.payload(),
            ));
        }
        return s;
      }
      updateJoinPayload(e) {
        let r = this.channel.joinPush.payload();
        this.channel.joinPush.payload = () =>
          Object.assign(Object.assign({}, r), e);
      }
      canPush() {
        return (
          this.socket.isConnected() && this.state === mn.CHANNEL_STATES.joined
        );
      }
      isJoined() {
        return this.state === mn.CHANNEL_STATES.joined;
      }
      isJoining() {
        return this.state === mn.CHANNEL_STATES.joining;
      }
      isClosed() {
        return this.state === mn.CHANNEL_STATES.closed;
      }
      isLeaving() {
        return this.state === mn.CHANNEL_STATES.leaving;
      }
      updateFilterBindings(e) {
        this.channel.filterBindings = e;
      }
      updatePayloadTransform(e) {
        this.channel.onMessage = e;
      }
      getChannel() {
        return this.channel;
      }
    };
  Xi.default = Yi;
  function $y(t) {
    return {
      config: Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        t.config,
      ),
    };
  }
});
var ea = F((Ct) => {
  "use strict";
  Object.defineProperty(Ct, "__esModule", { value: !0 });
  Ct.REALTIME_CHANNEL_STATES =
    Ct.REALTIME_SUBSCRIBE_STATES =
    Ct.REALTIME_LISTEN_TYPES =
    Ct.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT =
      void 0;
  var Zi = (ut(), gt(lt)),
    ms = us(),
    Fy = Zi.__importDefault(Gi()),
    Ru = Zi.__importStar(go()),
    qy = go(),
    By = Cu(),
    Hy = Zi.__importDefault(Pu()),
    Ou;
  (function (t) {
    ((t.ALL = "*"),
      (t.INSERT = "INSERT"),
      (t.UPDATE = "UPDATE"),
      (t.DELETE = "DELETE"));
  })(Ou || (Ct.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = Ou = {}));
  var yn;
  (function (t) {
    ((t.BROADCAST = "broadcast"),
      (t.PRESENCE = "presence"),
      (t.POSTGRES_CHANGES = "postgres_changes"),
      (t.SYSTEM = "system"));
  })(yn || (Ct.REALTIME_LISTEN_TYPES = yn = {}));
  var Xt;
  (function (t) {
    ((t.SUBSCRIBED = "SUBSCRIBED"),
      (t.TIMED_OUT = "TIMED_OUT"),
      (t.CLOSED = "CLOSED"),
      (t.CHANNEL_ERROR = "CHANNEL_ERROR"));
  })(Xt || (Ct.REALTIME_SUBSCRIBE_STATES = Xt = {}));
  Ct.REALTIME_CHANNEL_STATES = ms.CHANNEL_STATES;
  var Qi = class t {
    get state() {
      return this.channelAdapter.state;
    }
    set state(e) {
      this.channelAdapter.state = e;
    }
    get joinedOnce() {
      return this.channelAdapter.joinedOnce;
    }
    get timeout() {
      return this.socket.timeout;
    }
    get joinPush() {
      return this.channelAdapter.joinPush;
    }
    get rejoinTimer() {
      return this.channelAdapter.rejoinTimer;
    }
    constructor(e, r = { config: {} }, n) {
      var s, o;
      if (
        ((this.topic = e),
        (this.params = r),
        (this.socket = n),
        (this.bindings = {}),
        (this.subTopic = e.replace(/^realtime:/i, "")),
        (this.params.config = Object.assign(
          {
            broadcast: { ack: !1, self: !1 },
            presence: { key: "", enabled: !1 },
            private: !1,
          },
          r.config,
        )),
        (this.channelAdapter = new Hy.default(
          this.socket.socketAdapter,
          e,
          this.params,
        )),
        (this.presence = new Fy.default(this)),
        this._onClose(() => {
          this.socket._remove(this);
        }),
        this._updateFilterTransform(),
        (this.broadcastEndpointURL = (0, qy.httpEndpointURL)(
          this.socket.socketAdapter.endPointURL(),
        )),
        (this.private = this.params.config.private || !1),
        !this.private &&
          !(
            (o =
              (s = this.params.config) === null || s === void 0
                ? void 0
                : s.broadcast) === null || o === void 0
          ) &&
          o.replay)
      )
        throw new Error(
          `tried to use replay on public channel '${this.topic}'. It must be a private channel.`,
        );
    }
    subscribe(e, r = this.timeout) {
      var n, s, o;
      if (
        (this.socket.isConnected() || this.socket.connect(),
        this.channelAdapter.isClosed())
      ) {
        let {
            config: { broadcast: i, presence: a, private: c },
          } = this.params,
          l =
            (s =
              (n = this.bindings.postgres_changes) === null || n === void 0
                ? void 0
                : n.map((h) => h.filter)) !== null && s !== void 0
              ? s
              : [],
          d =
            (!!this.bindings[yn.PRESENCE] &&
              this.bindings[yn.PRESENCE].length > 0) ||
            ((o = this.params.config.presence) === null || o === void 0
              ? void 0
              : o.enabled) === !0,
          u = {},
          f = {
            broadcast: i,
            presence: Object.assign(Object.assign({}, a), { enabled: d }),
            postgres_changes: l,
            private: c,
          };
        (this.socket.accessTokenValue &&
          (u.access_token = this.socket.accessTokenValue),
          this._onError((h) => {
            e?.(Xt.CHANNEL_ERROR, (0, By.normalizeChannelError)(h));
          }),
          this._onClose(() => e?.(Xt.CLOSED)),
          this.updateJoinPayload(Object.assign({ config: f }, u)),
          this._updateFilterMessage(),
          this.channelAdapter
            .subscribe(r)
            .receive("ok", async ({ postgres_changes: h }) => {
              if (
                (this.socket._isManualToken() || this.socket.setAuth(),
                h === void 0)
              ) {
                e?.(Xt.SUBSCRIBED);
                return;
              }
              this._updatePostgresBindings(h, e);
            })
            .receive("error", (h) => {
              this.state = ms.CHANNEL_STATES.errored;
              let p = Object.values(h).join(", ") || "error";
              e?.(Xt.CHANNEL_ERROR, new Error(p, { cause: h }));
            })
            .receive("timeout", () => {
              e?.(Xt.TIMED_OUT);
            }));
      }
      return this;
    }
    _updatePostgresBindings(e, r) {
      var n;
      let s = this.bindings.postgres_changes,
        o = (n = s?.length) !== null && n !== void 0 ? n : 0,
        i = [];
      for (let a = 0; a < o; a++) {
        let c = s[a],
          {
            filter: { event: l, schema: d, table: u, filter: f },
          } = c,
          h = e && e[a];
        if (
          h &&
          h.event === l &&
          t.isFilterValueEqual(h.schema, d) &&
          t.isFilterValueEqual(h.table, u) &&
          t.isFilterValueEqual(h.filter, f)
        )
          i.push(Object.assign(Object.assign({}, c), { id: h.id }));
        else {
          (this.unsubscribe(),
            (this.state = ms.CHANNEL_STATES.errored),
            r?.(
              Xt.CHANNEL_ERROR,
              new Error(
                "mismatch between server and client bindings for postgres changes",
              ),
            ));
          return;
        }
      }
      ((this.bindings.postgres_changes = i),
        this.state != ms.CHANNEL_STATES.errored && r && r(Xt.SUBSCRIBED));
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e, r = {}) {
      return await this.send(
        { type: "presence", event: "track", payload: e },
        r.timeout || this.timeout,
      );
    }
    async untrack(e = {}) {
      return await this.send({ type: "presence", event: "untrack" }, e);
    }
    on(e, r, n) {
      let s = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(),
        o = e === yn.PRESENCE || e === yn.POSTGRES_CHANGES;
      if (s && o)
        throw (
          this.socket.log(
            "channel",
            `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
          ),
          new Error(
            `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`,
          )
        );
      return this._on(e, r, n);
    }
    async httpSend(e, r, n = {}) {
      var s;
      if (r == null)
        return Promise.reject(new Error("Payload is required for httpSend()"));
      let o = r instanceof ArrayBuffer || ArrayBuffer.isView(r),
        i = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": o ? "application/octet-stream" : "application/json",
        };
      this.socket.accessTokenValue &&
        (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      let a = new URL(this.broadcastEndpointURL);
      ((a.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`),
        this.private && a.searchParams.set("private", "true"));
      let c = { method: "POST", headers: i, body: o ? r : JSON.stringify(r) },
        l = await this._fetchWithTimeout(
          a.toString(),
          c,
          (s = n.timeout) !== null && s !== void 0 ? s : this.timeout,
        );
      if (l.status === 202) return { success: !0 };
      let d = l.statusText;
      try {
        let u = await l.json();
        d = u.error || u.message || d;
      } catch {}
      return Promise.reject(new Error(d));
    }
    async send(e, r = {}) {
      var n, s;
      if (!this.channelAdapter.canPush() && e.type === "broadcast") {
        console.warn(
          "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.",
        );
        let { event: o, payload: i } = e,
          a = {
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json",
          };
        this.socket.accessTokenValue &&
          (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
        let c = {
          method: "POST",
          headers: a,
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event: o,
                payload: i,
                private: this.private,
              },
            ],
          }),
        };
        try {
          let l = await this._fetchWithTimeout(
            this.broadcastEndpointURL,
            c,
            (n = r.timeout) !== null && n !== void 0 ? n : this.timeout,
          );
          return (
            await ((s = l.body) === null || s === void 0 ? void 0 : s.cancel()),
            l.ok ? "ok" : "error"
          );
        } catch (l) {
          return l instanceof Error && l.name === "AbortError"
            ? "timed out"
            : "error";
        }
      } else
        return new Promise((o) => {
          var i, a, c;
          let l = this.channelAdapter.push(
            e.type,
            e,
            r.timeout || this.timeout,
          );
          (e.type === "broadcast" &&
            !(
              !(
                (c =
                  (a =
                    (i = this.params) === null || i === void 0
                      ? void 0
                      : i.config) === null || a === void 0
                    ? void 0
                    : a.broadcast) === null || c === void 0
              ) && c.ack
            ) &&
            o("ok"),
            l.receive("ok", () => o("ok")),
            l.receive("error", () => o("error")),
            l.receive("timeout", () => o("timed out")));
        });
    }
    updateJoinPayload(e) {
      this.channelAdapter.updateJoinPayload(e);
    }
    async unsubscribe(e = this.timeout) {
      return new Promise((r) => {
        this.channelAdapter
          .unsubscribe(e)
          .receive("ok", () => r("ok"))
          .receive("timeout", () => r("timed out"))
          .receive("error", () => r("error"));
      });
    }
    teardown() {
      this.channelAdapter.teardown();
    }
    async _fetchWithTimeout(e, r, n) {
      let s = new AbortController(),
        o = setTimeout(() => s.abort(), n),
        i = await this.socket.fetch(
          e,
          Object.assign(Object.assign({}, r), { signal: s.signal }),
        );
      return (clearTimeout(o), i);
    }
    _on(e, r, n) {
      let s = e.toLocaleLowerCase(),
        o = this.channelAdapter.on(e, n),
        i = { type: s, filter: r, callback: n, ref: o };
      return (
        this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]),
        this._updateFilterMessage(),
        this
      );
    }
    _onClose(e) {
      this.channelAdapter.onClose(e);
    }
    _onError(e) {
      this.channelAdapter.onError(e);
    }
    _updateFilterMessage() {
      this.channelAdapter.updateFilterBindings((e, r, n) => {
        var s, o, i, a, c, l, d;
        let u = e.event.toLocaleLowerCase();
        if (this._notThisChannelEvent(u, n)) return !1;
        let f =
          (s = this.bindings[u]) === null || s === void 0
            ? void 0
            : s.find((h) => h.ref === e.ref);
        if (!f) return !0;
        if (["broadcast", "presence", "postgres_changes"].includes(u))
          if ("id" in f) {
            let h = f.id,
              p = (o = f.filter) === null || o === void 0 ? void 0 : o.event;
            return (
              h &&
              ((i = r.ids) === null || i === void 0 ? void 0 : i.includes(h)) &&
              (p === "*" ||
                p?.toLocaleLowerCase() ===
                  ((a = r.data) === null || a === void 0
                    ? void 0
                    : a.type.toLocaleLowerCase()))
            );
          } else {
            let h =
              (l =
                (c = f?.filter) === null || c === void 0 ? void 0 : c.event) ===
                null || l === void 0
                ? void 0
                : l.toLocaleLowerCase();
            return (
              h === "*" ||
              h ===
                ((d = r?.event) === null || d === void 0
                  ? void 0
                  : d.toLocaleLowerCase())
            );
          }
        else return f.type.toLocaleLowerCase() === u;
      });
    }
    _notThisChannelEvent(e, r) {
      let { close: n, error: s, leave: o, join: i } = ms.CHANNEL_EVENTS;
      return r && [n, s, o, i].includes(e) && r !== this.joinPush.ref;
    }
    _updateFilterTransform() {
      this.channelAdapter.updatePayloadTransform((e, r, n) => {
        if (typeof r == "object" && "ids" in r) {
          let s = r.data,
            {
              schema: o,
              table: i,
              commit_timestamp: a,
              type: c,
              errors: l,
            } = s;
          return Object.assign(
            Object.assign(
              {},
              {
                schema: o,
                table: i,
                commit_timestamp: a,
                eventType: c,
                new: {},
                old: {},
                errors: l,
              },
            ),
            this._getPayloadRecords(s),
          );
        }
        return r;
      });
    }
    copyBindings(e) {
      if (this.joinedOnce)
        throw new Error("cannot copy bindings into joined channel");
      for (let r in e.bindings)
        for (let n of e.bindings[r]) this._on(n.type, n.filter, n.callback);
    }
    static isFilterValueEqual(e, r) {
      return (e ?? void 0) === (r ?? void 0);
    }
    _getPayloadRecords(e) {
      let r = { new: {}, old: {} };
      return (
        (e.type === "INSERT" || e.type === "UPDATE") &&
          (r.new = Ru.convertChangeData(e.columns, e.record)),
        (e.type === "UPDATE" || e.type === "DELETE") &&
          (r.old = Ru.convertChangeData(e.columns, e.old_record)),
        r
      );
    }
  };
  Ct.default = Qi;
});
var xu = F((ra) => {
  "use strict";
  Object.defineProperty(ra, "__esModule", { value: !0 });
  var Wy = Wi(),
    Iu = us(),
    ta = class {
      constructor(e, r) {
        this.socket = new Wy.Socket(e, r);
      }
      get timeout() {
        return this.socket.timeout;
      }
      get endPoint() {
        return this.socket.endPoint;
      }
      get transport() {
        return this.socket.transport;
      }
      get heartbeatIntervalMs() {
        return this.socket.heartbeatIntervalMs;
      }
      get heartbeatCallback() {
        return this.socket.heartbeatCallback;
      }
      set heartbeatCallback(e) {
        this.socket.heartbeatCallback = e;
      }
      get heartbeatTimer() {
        return this.socket.heartbeatTimer;
      }
      get pendingHeartbeatRef() {
        return this.socket.pendingHeartbeatRef;
      }
      get reconnectTimer() {
        return this.socket.reconnectTimer;
      }
      get vsn() {
        return this.socket.vsn;
      }
      get encode() {
        return this.socket.encode;
      }
      get decode() {
        return this.socket.decode;
      }
      get reconnectAfterMs() {
        return this.socket.reconnectAfterMs;
      }
      get sendBuffer() {
        return this.socket.sendBuffer;
      }
      get stateChangeCallbacks() {
        return this.socket.stateChangeCallbacks;
      }
      connect() {
        this.socket.connect();
      }
      disconnect(e, r, n, s = 1e4) {
        return new Promise((o) => {
          (setTimeout(() => o("timeout"), s),
            this.socket.disconnect(
              () => {
                (e(), o("ok"));
              },
              r,
              n,
            ));
        });
      }
      push(e) {
        this.socket.push(e);
      }
      log(e, r, n) {
        this.socket.log(e, r, n);
      }
      makeRef() {
        return this.socket.makeRef();
      }
      onOpen(e) {
        this.socket.onOpen(e);
      }
      onClose(e) {
        this.socket.onClose(e);
      }
      onError(e) {
        this.socket.onError(e);
      }
      onMessage(e) {
        this.socket.onMessage(e);
      }
      isConnected() {
        return this.socket.isConnected();
      }
      isConnecting() {
        return this.socket.connectionState() == Iu.CONNECTION_STATE.connecting;
      }
      isDisconnecting() {
        return this.socket.connectionState() == Iu.CONNECTION_STATE.closing;
      }
      connectionState() {
        return this.socket.connectionState();
      }
      endPointURL() {
        return this.socket.endPointURL();
      }
      sendHeartbeat() {
        this.socket.sendHeartbeat();
      }
      getSocket() {
        return this.socket;
      }
    };
  ra.default = ta;
});
var Lu = F((sa) => {
  "use strict";
  Object.defineProperty(sa, "__esModule", { value: !0 });
  var _o = (ut(), gt(lt)),
    Vy = _o.__importDefault(Mi()),
    $r = us(),
    Ky = _o.__importDefault(wu()),
    zy = go(),
    Gy = _o.__importDefault(ea()),
    Jy = _o.__importDefault(xu()),
    Nu = {
      HEARTBEAT_INTERVAL: 25e3,
      RECONNECT_DELAY: 10,
      HEARTBEAT_TIMEOUT_FALLBACK: 100,
    },
    Yy = [1e3, 2e3, 5e3, 1e4],
    Xy = 1e4;
  function Qy() {
    let t = new Map();
    return {
      get length() {
        return t.size;
      },
      clear() {
        t.clear();
      },
      getItem(e) {
        return t.has(e) ? t.get(e) : null;
      },
      key(e) {
        var r;
        return (r = Array.from(t.keys())[e]) !== null && r !== void 0
          ? r
          : null;
      },
      removeItem(e) {
        t.delete(e);
      },
      setItem(e, r) {
        t.set(e, String(r));
      },
    };
  }
  function Zy() {
    try {
      if (typeof globalThis < "u" && globalThis.sessionStorage)
        return globalThis.sessionStorage;
    } catch {}
    return Qy();
  }
  var e_ = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,
    na = class {
      get endPoint() {
        return this.socketAdapter.endPoint;
      }
      get timeout() {
        return this.socketAdapter.timeout;
      }
      get transport() {
        return this.socketAdapter.transport;
      }
      get heartbeatCallback() {
        return this.socketAdapter.heartbeatCallback;
      }
      get heartbeatIntervalMs() {
        return this.socketAdapter.heartbeatIntervalMs;
      }
      get heartbeatTimer() {
        return this.worker
          ? this._workerHeartbeatTimer
          : this.socketAdapter.heartbeatTimer;
      }
      get pendingHeartbeatRef() {
        return this.worker
          ? this._pendingWorkerHeartbeatRef
          : this.socketAdapter.pendingHeartbeatRef;
      }
      get reconnectTimer() {
        return this.socketAdapter.reconnectTimer;
      }
      get vsn() {
        return this.socketAdapter.vsn;
      }
      get encode() {
        return this.socketAdapter.encode;
      }
      get decode() {
        return this.socketAdapter.decode;
      }
      get reconnectAfterMs() {
        return this.socketAdapter.reconnectAfterMs;
      }
      get sendBuffer() {
        return this.socketAdapter.sendBuffer;
      }
      get stateChangeCallbacks() {
        return this.socketAdapter.stateChangeCallbacks;
      }
      constructor(e, r) {
        var n;
        if (
          ((this.channels = new Array()),
          (this.accessTokenValue = null),
          (this.accessToken = null),
          (this.apiKey = null),
          (this.httpEndpoint = ""),
          (this.headers = {}),
          (this.params = {}),
          (this.ref = 0),
          (this.serializer = new Ky.default()),
          (this._manuallySetToken = !1),
          (this._authPromise = null),
          (this._workerHeartbeatTimer = void 0),
          (this._pendingWorkerHeartbeatRef = null),
          (this._pendingDisconnectTimer = null),
          (this._disconnectOnEmptyChannelsAfterMs = 0),
          (this._resolveFetch = (o) =>
            o ? (...i) => o(...i) : (...i) => fetch(...i)),
          !(!((n = r?.params) === null || n === void 0) && n.apikey))
        )
          throw new Error("API key is required to connect to Realtime");
        this.apiKey = r.params.apikey;
        let s = this._initializeOptions(r);
        ((this.socketAdapter = new Jy.default(e, s)),
          (this.httpEndpoint = (0, zy.httpEndpointURL)(e)),
          (this.fetch = this._resolveFetch(r?.fetch)));
      }
      connect() {
        if (!(
          this.isConnecting() ||
          this.isDisconnecting() ||
          this.isConnected()
        )) {
          (this.accessToken &&
            !this._authPromise &&
            this._setAuthSafely("connect"),
            this._setupConnectionHandlers());
          try {
            this.socketAdapter.connect();
          } catch (e) {
            let r = e.message;
            throw r.includes("Node.js")
              ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
              : new Error(`WebSocket not available: ${r}`);
          }
          this._handleNodeJsRaceCondition();
        }
      }
      endpointURL() {
        return this.socketAdapter.endPointURL();
      }
      async disconnect(e, r) {
        return (
          this._cancelPendingDisconnect(),
          this.isDisconnecting()
            ? "ok"
            : await this.socketAdapter.disconnect(
                () => {
                  (clearInterval(this._workerHeartbeatTimer),
                    this._terminateWorker());
                },
                e,
                r,
              )
        );
      }
      getChannels() {
        return this.channels;
      }
      async removeChannel(e) {
        let r = await e.unsubscribe();
        return (r === "ok" && e.teardown(), r);
      }
      async removeAllChannels() {
        let e = this.channels.map(async (n) => {
            let s = await n.unsubscribe();
            return (n.teardown(), s);
          }),
          r = await Promise.all(e);
        return (await this.disconnect(), r);
      }
      log(e, r, n) {
        this.socketAdapter.log(e, r, n);
      }
      connectionState() {
        return (
          this.socketAdapter.connectionState() || $r.CONNECTION_STATE.closed
        );
      }
      isConnected() {
        return this.socketAdapter.isConnected();
      }
      isConnecting() {
        return this.socketAdapter.isConnecting();
      }
      isDisconnecting() {
        return this.socketAdapter.isDisconnecting();
      }
      channel(e, r = { config: {} }) {
        let n = `realtime:${e}`,
          s = this.getChannels().find((o) => o.topic === n);
        if (s) return s;
        {
          let o = new Gy.default(`realtime:${e}`, r, this);
          return (this._cancelPendingDisconnect(), this.channels.push(o), o);
        }
      }
      push(e) {
        this.socketAdapter.push(e);
      }
      async setAuth(e = null) {
        this._authPromise = this._performAuth(e);
        try {
          await this._authPromise;
        } finally {
          this._authPromise = null;
        }
      }
      _isManualToken() {
        return this._manuallySetToken;
      }
      async sendHeartbeat() {
        this.socketAdapter.sendHeartbeat();
      }
      onHeartbeat(e) {
        this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
      }
      _makeRef() {
        return this.socketAdapter.makeRef();
      }
      _remove(e) {
        ((this.channels = this.channels.filter((r) => r.topic !== e.topic)),
          this.channels.length === 0 &&
            (this.log(
              "transport",
              "no channels remaining, scheduling disconnect",
            ),
            this._schedulePendingDisconnect()));
      }
      _schedulePendingDisconnect() {
        if (
          (this._cancelPendingDisconnect(),
          this._disconnectOnEmptyChannelsAfterMs === 0)
        ) {
          (this.log("transport", "disconnecting immediately - no channels"),
            this.disconnect());
          return;
        }
        ((this._pendingDisconnectTimer = setTimeout(() => {
          ((this._pendingDisconnectTimer = null),
            this.channels.length === 0 &&
              (this.log(
                "transport",
                "deferred disconnect fired - no channels, disconnecting",
              ),
              this.disconnect()));
        }, this._disconnectOnEmptyChannelsAfterMs)),
          this.log(
            "transport",
            `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`,
          ));
      }
      _cancelPendingDisconnect() {
        this._pendingDisconnectTimer !== null &&
          (this.log(
            "transport",
            "pending disconnect cancelled - channel activity detected",
          ),
          clearTimeout(this._pendingDisconnectTimer),
          (this._pendingDisconnectTimer = null));
      }
      async _performAuth(e = null) {
        let r,
          n = !1;
        if (e) ((r = e), (n = !0));
        else if (this.accessToken)
          try {
            r = await this.accessToken();
          } catch (s) {
            (this.log("error", "Error fetching access token from callback", s),
              (r = this.accessTokenValue));
          }
        else r = this.accessTokenValue;
        (n
          ? (this._manuallySetToken = !0)
          : this.accessToken && (this._manuallySetToken = !1),
          this.accessTokenValue != r &&
            ((this.accessTokenValue = r),
            this.channels.forEach((s) => {
              let o = { access_token: r, version: $r.DEFAULT_VERSION };
              (r && s.updateJoinPayload(o),
                s.joinedOnce &&
                  s.channelAdapter.isJoined() &&
                  s.channelAdapter.push($r.CHANNEL_EVENTS.access_token, {
                    access_token: r,
                  }));
            })));
      }
      async _waitForAuthIfNeeded() {
        this._authPromise && (await this._authPromise);
      }
      _setAuthSafely(e = "general") {
        this._isManualToken() ||
          this.setAuth().catch((r) => {
            this.log("error", `Error setting auth in ${e}`, r);
          });
      }
      _setupConnectionHandlers() {
        (this.socketAdapter.onOpen(() => {
          ((
            this._authPromise ||
            (this.accessToken && !this.accessTokenValue
              ? this.setAuth()
              : Promise.resolve())
          ).catch((r) => {
            this.log("error", "error waiting for auth on connect", r);
          }),
            this.worker && !this.workerRef && this._startWorkerHeartbeat());
        }),
          this.socketAdapter.onClose(() => {
            this.worker && this.workerRef && this._terminateWorker();
          }),
          this.socketAdapter.onMessage((e) => {
            e.ref &&
              e.ref === this._pendingWorkerHeartbeatRef &&
              (this._pendingWorkerHeartbeatRef = null);
          }));
      }
      _handleNodeJsRaceCondition() {
        this.socketAdapter.isConnected() &&
          this.socketAdapter.getSocket().onConnOpen();
      }
      _wrapHeartbeatCallback(e) {
        return (r, n) => {
          (r == "sent" && this._setAuthSafely(), e && e(r, n));
        };
      }
      _startWorkerHeartbeat() {
        this.workerUrl
          ? this.log("worker", `starting worker for from ${this.workerUrl}`)
          : this.log("worker", "starting default worker");
        let e = this._workerObjectUrl(this.workerUrl);
        ((this.workerRef = new Worker(e)),
          (this.workerRef.onerror = (r) => {
            (this.log("worker", "worker error", r.message),
              this._terminateWorker(),
              this.disconnect());
          }),
          (this.workerRef.onmessage = (r) => {
            r.data.event === "keepAlive" && this.sendHeartbeat();
          }),
          this.workerRef.postMessage({
            event: "start",
            interval: this.heartbeatIntervalMs,
          }));
      }
      _terminateWorker() {
        this.workerRef &&
          (this.log("worker", "terminating worker"),
          this.workerRef.terminate(),
          (this.workerRef = void 0));
      }
      _workerObjectUrl(e) {
        let r;
        if (e) r = e;
        else {
          let n = new Blob([e_], { type: "application/javascript" });
          r = URL.createObjectURL(n);
        }
        return r;
      }
      _initializeOptions(e) {
        var r, n, s, o, i, a, c, l, d, u, f, h;
        ((this.worker = (r = e?.worker) !== null && r !== void 0 ? r : !1),
          (this.accessToken =
            (n = e?.accessToken) !== null && n !== void 0 ? n : null));
        let p = {};
        ((p.timeout =
          (s = e?.timeout) !== null && s !== void 0 ? s : $r.DEFAULT_TIMEOUT),
          (p.heartbeatIntervalMs =
            (o = e?.heartbeatIntervalMs) !== null && o !== void 0
              ? o
              : Nu.HEARTBEAT_INTERVAL),
          (this._disconnectOnEmptyChannelsAfterMs =
            (i = e?.disconnectOnEmptyChannelsAfterMs) !== null && i !== void 0
              ? i
              : 2 *
                ((a = e?.heartbeatIntervalMs) !== null && a !== void 0
                  ? a
                  : Nu.HEARTBEAT_INTERVAL)),
          (p.transport =
            (c = e?.transport) !== null && c !== void 0
              ? c
              : Vy.default.getWebSocketConstructor()),
          (p.params = e?.params),
          (p.logger = e?.logger),
          (p.heartbeatCallback = this._wrapHeartbeatCallback(
            e?.heartbeatCallback,
          )),
          (p.sessionStorage =
            (l = e?.sessionStorage) !== null && l !== void 0 ? l : Zy()),
          (p.reconnectAfterMs =
            (d = e?.reconnectAfterMs) !== null && d !== void 0
              ? d
              : (A) => Yy[A - 1] || Xy));
        let g,
          y,
          w = (u = e?.vsn) !== null && u !== void 0 ? u : $r.DEFAULT_VSN;
        switch (w) {
          case $r.VSN_1_0_0:
            ((g = (A, S) => S(JSON.stringify(A))),
              (y = (A, S) => S(JSON.parse(A))));
            break;
          case $r.VSN_2_0_0:
            ((g = this.serializer.encode.bind(this.serializer)),
              (y = this.serializer.decode.bind(this.serializer)));
            break;
          default:
            throw new Error(`Unsupported serializer version: ${p.vsn}`);
        }
        if (
          ((p.vsn = w),
          (p.encode = (f = e?.encode) !== null && f !== void 0 ? f : g),
          (p.decode = (h = e?.decode) !== null && h !== void 0 ? h : y),
          (p.beforeReconnect = this._reconnectAuth.bind(this)),
          (e?.logLevel || e?.log_level) &&
            ((this.logLevel = e.logLevel || e.log_level),
            (p.params = Object.assign(Object.assign({}, p.params), {
              log_level: this.logLevel,
            }))),
          this.worker)
        ) {
          if (typeof window < "u" && !window.Worker)
            throw new Error("Web Worker is not supported");
          ((this.workerUrl = e?.workerUrl),
            (p.autoSendHeartbeat = !this.worker));
        }
        return p;
      }
      async _reconnectAuth() {
        (await this._waitForAuthIfNeeded(),
          this.isConnected() || this.connect());
      }
    };
  sa.default = na;
});
var Mu = F(($e) => {
  "use strict";
  Object.defineProperty($e, "__esModule", { value: !0 });
  $e.WebSocketFactory =
    $e.REALTIME_CHANNEL_STATES =
    $e.REALTIME_SUBSCRIBE_STATES =
    $e.REALTIME_PRESENCE_LISTEN_EVENTS =
    $e.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT =
    $e.REALTIME_LISTEN_TYPES =
    $e.RealtimeClient =
    $e.RealtimeChannel =
    $e.RealtimePresence =
      void 0;
  var vo = (ut(), gt(lt)),
    t_ = vo.__importDefault(Lu());
  $e.RealtimeClient = t_.default;
  var ys = vo.__importStar(ea());
  $e.RealtimeChannel = ys.default;
  Object.defineProperty($e, "REALTIME_LISTEN_TYPES", {
    enumerable: !0,
    get: function () {
      return ys.REALTIME_LISTEN_TYPES;
    },
  });
  Object.defineProperty($e, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", {
    enumerable: !0,
    get: function () {
      return ys.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
    },
  });
  Object.defineProperty($e, "REALTIME_SUBSCRIBE_STATES", {
    enumerable: !0,
    get: function () {
      return ys.REALTIME_SUBSCRIBE_STATES;
    },
  });
  Object.defineProperty($e, "REALTIME_CHANNEL_STATES", {
    enumerable: !0,
    get: function () {
      return ys.REALTIME_CHANNEL_STATES;
    },
  });
  var ju = vo.__importStar(Gi());
  $e.RealtimePresence = ju.default;
  Object.defineProperty($e, "REALTIME_PRESENCE_LISTEN_EVENTS", {
    enumerable: !0,
    get: function () {
      return ju.REALTIME_PRESENCE_LISTEN_EVENTS;
    },
  });
  var r_ = vo.__importDefault(Mi());
  $e.WebSocketFactory = r_.default;
});
var $u = F((Qt) => {
  "use strict";
  var vn = class extends Error {
    constructor(t, e) {
      (super(t),
        (this.name = "IcebergError"),
        (this.status = e.status),
        (this.icebergType = e.icebergType),
        (this.icebergCode = e.icebergCode),
        (this.details = e.details),
        (this.isCommitStateUnknown =
          e.icebergType === "CommitStateUnknownException" ||
          ([500, 502, 504].includes(e.status) &&
            e.icebergType?.includes("CommitState") === !0)));
    }
    isNotFound() {
      return this.status === 404;
    }
    isConflict() {
      return this.status === 409;
    }
    isAuthenticationTimeout() {
      return this.status === 419;
    }
  };
  function n_(t, e, r) {
    let n = new URL(e, t);
    if (r)
      for (let [s, o] of Object.entries(r))
        o !== void 0 && n.searchParams.set(s, o);
    return n.toString();
  }
  async function s_(t) {
    return !t || t.type === "none"
      ? {}
      : t.type === "bearer"
        ? { Authorization: `Bearer ${t.token}` }
        : t.type === "header"
          ? { [t.name]: t.value }
          : t.type === "custom"
            ? await t.getHeaders()
            : {};
  }
  function o_(t) {
    let e = t.fetchImpl ?? globalThis.fetch;
    return {
      async request({ method: r, path: n, query: s, body: o, headers: i }) {
        let a = n_(t.baseUrl, n, s),
          c = await s_(t.auth),
          l = await e(a, {
            method: r,
            headers: {
              ...(o ? { "Content-Type": "application/json" } : {}),
              ...c,
              ...i,
            },
            body: o ? JSON.stringify(o) : void 0,
          }),
          d = await l.text(),
          u = (l.headers.get("content-type") || "").includes(
            "application/json",
          ),
          f = u && d ? JSON.parse(d) : d;
        if (!l.ok) {
          let h = u ? f : void 0,
            p = h?.error;
          throw new vn(p?.message ?? `Request failed with status ${l.status}`, {
            status: l.status,
            icebergType: p?.type,
            icebergCode: p?.code,
            details: h,
          });
        }
        return { status: l.status, headers: l.headers, data: f };
      },
    };
  }
  function wo(t) {
    return t.join("");
  }
  var i_ = class {
    constructor(t, e = "") {
      ((this.client = t), (this.prefix = e));
    }
    async listNamespaces(t) {
      let e = t ? { parent: wo(t.namespace) } : void 0;
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces`,
          query: e,
        })
      ).data.namespaces.map((n) => ({ namespace: n }));
    }
    async createNamespace(t, e) {
      let r = { namespace: t.namespace, properties: e?.properties };
      return (
        await this.client.request({
          method: "POST",
          path: `${this.prefix}/namespaces`,
          body: r,
        })
      ).data;
    }
    async dropNamespace(t) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${wo(t.namespace)}`,
      });
    }
    async loadNamespaceMetadata(t) {
      return {
        properties: (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${wo(t.namespace)}`,
          })
        ).data.properties,
      };
    }
    async namespaceExists(t) {
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${wo(t.namespace)}`,
          }),
          !0
        );
      } catch (e) {
        if (e instanceof vn && e.status === 404) return !1;
        throw e;
      }
    }
    async createNamespaceIfNotExists(t, e) {
      try {
        return await this.createNamespace(t, e);
      } catch (r) {
        if (r instanceof vn && r.status === 409) return;
        throw r;
      }
    }
  };
  function _n(t) {
    return t.join("");
  }
  var a_ = class {
      constructor(t, e = "", r) {
        ((this.client = t), (this.prefix = e), (this.accessDelegation = r));
      }
      async listTables(t) {
        return (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${_n(t.namespace)}/tables`,
          })
        ).data.identifiers;
      }
      async createTable(t, e) {
        let r = {};
        return (
          this.accessDelegation &&
            (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
          (
            await this.client.request({
              method: "POST",
              path: `${this.prefix}/namespaces/${_n(t.namespace)}/tables`,
              body: e,
              headers: r,
            })
          ).data.metadata
        );
      }
      async updateTable(t, e) {
        let r = await this.client.request({
          method: "POST",
          path: `${this.prefix}/namespaces/${_n(t.namespace)}/tables/${t.name}`,
          body: e,
        });
        return {
          "metadata-location": r.data["metadata-location"],
          metadata: r.data.metadata,
        };
      }
      async dropTable(t, e) {
        await this.client.request({
          method: "DELETE",
          path: `${this.prefix}/namespaces/${_n(t.namespace)}/tables/${t.name}`,
          query: { purgeRequested: String(e?.purge ?? !1) },
        });
      }
      async loadTable(t) {
        let e = {};
        return (
          this.accessDelegation &&
            (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
          (
            await this.client.request({
              method: "GET",
              path: `${this.prefix}/namespaces/${_n(t.namespace)}/tables/${t.name}`,
              headers: e,
            })
          ).data.metadata
        );
      }
      async tableExists(t) {
        let e = {};
        this.accessDelegation &&
          (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
        try {
          return (
            await this.client.request({
              method: "HEAD",
              path: `${this.prefix}/namespaces/${_n(t.namespace)}/tables/${t.name}`,
              headers: e,
            }),
            !0
          );
        } catch (r) {
          if (r instanceof vn && r.status === 404) return !1;
          throw r;
        }
      }
      async createTableIfNotExists(t, e) {
        try {
          return await this.createTable(t, e);
        } catch (r) {
          if (r instanceof vn && r.status === 409)
            return await this.loadTable({
              namespace: t.namespace,
              name: e.name,
            });
          throw r;
        }
      }
    },
    c_ = class {
      constructor(t) {
        let e = "v1";
        t.catalogName && (e += `/${t.catalogName}`);
        let r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
        ((this.client = o_({ baseUrl: r, auth: t.auth, fetchImpl: t.fetch })),
          (this.accessDelegation = t.accessDelegation?.join(",")),
          (this.namespaceOps = new i_(this.client, e)),
          (this.tableOps = new a_(this.client, e, this.accessDelegation)));
      }
      async listNamespaces(t) {
        return this.namespaceOps.listNamespaces(t);
      }
      async createNamespace(t, e) {
        return this.namespaceOps.createNamespace(t, e);
      }
      async dropNamespace(t) {
        await this.namespaceOps.dropNamespace(t);
      }
      async loadNamespaceMetadata(t) {
        return this.namespaceOps.loadNamespaceMetadata(t);
      }
      async listTables(t) {
        return this.tableOps.listTables(t);
      }
      async createTable(t, e) {
        return this.tableOps.createTable(t, e);
      }
      async updateTable(t, e) {
        return this.tableOps.updateTable(t, e);
      }
      async dropTable(t, e) {
        await this.tableOps.dropTable(t, e);
      }
      async loadTable(t) {
        return this.tableOps.loadTable(t);
      }
      async namespaceExists(t) {
        return this.namespaceOps.namespaceExists(t);
      }
      async tableExists(t) {
        return this.tableOps.tableExists(t);
      }
      async createNamespaceIfNotExists(t, e) {
        return this.namespaceOps.createNamespaceIfNotExists(t, e);
      }
      async createTableIfNotExists(t, e) {
        return this.tableOps.createTableIfNotExists(t, e);
      }
    },
    Du = /^decimal\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)$/,
    Uu = /^fixed\s*\[\s*(\d+)\s*\]$/;
  function oa(t) {
    let e = t.match(Du);
    return e
      ? { precision: parseInt(e[1], 10), scale: parseInt(e[2], 10) }
      : null;
  }
  function ia(t) {
    let e = t.match(Uu);
    return e ? { length: parseInt(e[1], 10) } : null;
  }
  function l_(t) {
    return Du.test(t);
  }
  function u_(t) {
    return Uu.test(t);
  }
  function d_(t, e) {
    let r = oa(t),
      n = oa(e);
    if (r && n) return r.precision === n.precision && r.scale === n.scale;
    let s = ia(t),
      o = ia(e);
    return s && o ? s.length === o.length : t === e;
  }
  function h_(t) {
    return t.schemas.find((e) => e["schema-id"] === t["current-schema-id"]);
  }
  Qt.IcebergError = vn;
  Qt.IcebergRestCatalog = c_;
  Qt.getCurrentSchema = h_;
  Qt.isDecimalType = l_;
  Qt.isFixedType = u_;
  Qt.parseDecimalType = oa;
  Qt.parseFixedType = ia;
  Qt.typesEqual = d_;
});
var Zu = F((Ke) => {
  var f_ = $u();
  function vs(t) {
    "@babel/helpers - typeof";
    return (
      (vs =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      vs(t)
    );
  }
  function p_(t, e) {
    if (vs(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (vs(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  function g_(t) {
    var e = p_(t, "string");
    return vs(e) == "symbol" ? e : e + "";
  }
  function m_(t, e, r) {
    return (
      (e = g_(e)) in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function Fu(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      (e &&
        (n = n.filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        })),
        r.push.apply(r, n));
    }
    return r;
  }
  function le(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Fu(Object(r), !0).forEach(function (n) {
            m_(t, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Fu(Object(r)).forEach(function (n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(r, n),
              );
            });
    }
    return t;
  }
  var wn = class extends Error {
    constructor(t, e = "storage", r, n) {
      (super(t),
        (this.__isStorageError = !0),
        (this.namespace = e),
        (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = r),
        (this.statusCode = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  };
  function bn(t) {
    return typeof t == "object" && t !== null && "__isStorageError" in t;
  }
  var ws = class extends wn {
      constructor(t, e, r, n = "storage") {
        (super(t, n, e, r),
          (this.name =
            n === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
          (this.status = e),
          (this.statusCode = r));
      }
      toJSON() {
        return le({}, super.toJSON());
      }
    },
    So = class extends wn {
      constructor(t, e, r = "storage") {
        (super(t, r),
          (this.name =
            r === "vectors"
              ? "StorageVectorsUnknownError"
              : "StorageUnknownError"),
          (this.originalError = e));
      }
    },
    y_ = class extends wn {
      constructor(t) {
        super(t, "vectors");
      }
    };
  function __(t) {
    return bn(t) && t.namespace === "vectors";
  }
  var v_ = class extends ws {
      constructor(t, e, r) {
        super(t, e, r, "vectors");
      }
    },
    w_ = class extends So {
      constructor(t, e) {
        super(t, e, "vectors");
      }
    },
    b_ = (function (t) {
      return (
        (t.InternalError = "InternalError"),
        (t.S3VectorConflictException = "S3VectorConflictException"),
        (t.S3VectorNotFoundException = "S3VectorNotFoundException"),
        (t.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty"),
        (t.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded"),
        (t.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded"),
        t
      );
    })({});
  function bo(t, e, r) {
    let n = le({}, t),
      s = e.toLowerCase();
    for (let o of Object.keys(n)) o.toLowerCase() === s && delete n[o];
    return ((n[s] = r), n);
  }
  function S_(t) {
    let e = {};
    for (let [r, n] of Object.entries(t)) e[r.toLowerCase()] = n;
    return e;
  }
  var k_ = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
    A_ = (t) => {
      if (typeof t != "object" || t === null) return !1;
      let e = Object.getPrototypeOf(t);
      return (
        (e === null ||
          e === Object.prototype ||
          Object.getPrototypeOf(e) === null) &&
        !(Symbol.toStringTag in t) &&
        !(Symbol.iterator in t)
      );
    },
    aa = (t) => {
      if (Array.isArray(t)) return t.map((r) => aa(r));
      if (typeof t == "function" || t !== Object(t)) return t;
      let e = {};
      return (
        Object.entries(t).forEach(([r, n]) => {
          let s = r.replace(/([-_][a-z])/gi, (o) =>
            o.toUpperCase().replace(/[-_]/g, ""),
          );
          e[s] = aa(n);
        }),
        e
      );
    },
    E_ = (t) =>
      !t ||
      typeof t != "string" ||
      t.length === 0 ||
      t.length > 100 ||
      t.trim() !== t ||
      t.includes("/") ||
      t.includes("\\")
        ? !1
        : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t),
    qu = (t) => {
      if (typeof t == "object" && t !== null) {
        let e = t;
        if (typeof e.msg == "string") return e.msg;
        if (typeof e.message == "string") return e.message;
        if (typeof e.error_description == "string") return e.error_description;
        if (typeof e.error == "string") return e.error;
        if (typeof e.error == "object" && e.error !== null) {
          let r = e.error;
          if (typeof r.message == "string") return r.message;
        }
      }
      return JSON.stringify(t);
    },
    T_ = async (t, e, r, n) => {
      if (
        t !== null &&
        typeof t == "object" &&
        "json" in t &&
        typeof t.json == "function"
      ) {
        let s = t,
          o = parseInt(String(s.status), 10);
        (Number.isFinite(o) || (o = 500),
          s
            .json()
            .then((i) => {
              let a = i?.statusCode || i?.code || o + "";
              e(new ws(qu(i), o, a, n));
            })
            .catch(() => {
              let i = o + "";
              e(new ws(s.statusText || `HTTP ${o} error`, o, i, n));
            }));
      } else e(new So(qu(t), t, n));
    },
    C_ = (t, e, r, n) => {
      let s = { method: t, headers: e?.headers || {} };
      if (t === "GET" || t === "HEAD" || !n) return le(le({}, s), r);
      if (A_(n)) {
        var o;
        let i = e?.headers || {},
          a;
        for (let [c, l] of Object.entries(i))
          c.toLowerCase() === "content-type" && (a = l);
        ((s.headers = bo(
          i,
          "Content-Type",
          (o = a) !== null && o !== void 0 ? o : "application/json",
        )),
          (s.body = JSON.stringify(n)));
      } else s.body = n;
      return (e?.duplex && (s.duplex = e.duplex), le(le({}, s), r));
    };
  async function _s(t, e, r, n, s, o, i) {
    return new Promise((a, c) => {
      t(r, C_(e, n, s, o))
        .then((l) => {
          if (!l.ok) throw l;
          if (n?.noResolveJson) return l;
          if (i === "vectors") {
            let d = l.headers.get("content-type");
            if (l.headers.get("content-length") === "0" || l.status === 204)
              return {};
            if (!d || !d.includes("application/json")) return {};
          }
          return l.json();
        })
        .then((l) => a(l))
        .catch((l) => T_(l, c, n, i));
    });
  }
  function Hu(t = "storage") {
    return {
      get: async (e, r, n, s) => _s(e, "GET", r, n, s, void 0, t),
      post: async (e, r, n, s, o) => _s(e, "POST", r, s, o, n, t),
      put: async (e, r, n, s, o) => _s(e, "PUT", r, s, o, n, t),
      head: async (e, r, n, s) =>
        _s(
          e,
          "HEAD",
          r,
          le(le({}, n), {}, { noResolveJson: !0 }),
          s,
          void 0,
          t,
        ),
      remove: async (e, r, n, s, o) => _s(e, "DELETE", r, s, o, n, t),
    };
  }
  var P_ = Hu("storage"),
    { get: bs, post: Pt, put: ca, head: R_, remove: la } = P_,
    dt = Hu("vectors"),
    Sn = class {
      constructor(t, e = {}, r, n = "storage") {
        ((this.shouldThrowOnError = !1),
          (this.url = t),
          (this.headers = S_(e)),
          (this.fetch = k_(r)),
          (this.namespace = n));
      }
      throwOnError() {
        return ((this.shouldThrowOnError = !0), this);
      }
      setHeader(t, e) {
        return ((this.headers = bo(this.headers, t, e)), this);
      }
      async handleOperation(t) {
        var e = this;
        try {
          return { data: await t(), error: null };
        } catch (r) {
          if (e.shouldThrowOnError) throw r;
          if (bn(r)) return { data: null, error: r };
          throw r;
        }
      }
    },
    Wu;
  Wu = Symbol.toStringTag;
  var O_ = class {
      constructor(t, e) {
        ((this.downloadFn = t),
          (this.shouldThrowOnError = e),
          (this[Wu] = "StreamDownloadBuilder"),
          (this.promise = null));
      }
      then(t, e) {
        return this.getPromise().then(t, e);
      }
      catch(t) {
        return this.getPromise().catch(t);
      }
      finally(t) {
        return this.getPromise().finally(t);
      }
      getPromise() {
        return (this.promise || (this.promise = this.execute()), this.promise);
      }
      async execute() {
        var t = this;
        try {
          return { data: (await t.downloadFn()).body, error: null };
        } catch (e) {
          if (t.shouldThrowOnError) throw e;
          if (bn(e)) return { data: null, error: e };
          throw e;
        }
      }
    },
    Vu;
  Vu = Symbol.toStringTag;
  var I_ = class {
      constructor(t, e) {
        ((this.downloadFn = t),
          (this.shouldThrowOnError = e),
          (this[Vu] = "BlobDownloadBuilder"),
          (this.promise = null));
      }
      asStream() {
        return new O_(this.downloadFn, this.shouldThrowOnError);
      }
      then(t, e) {
        return this.getPromise().then(t, e);
      }
      catch(t) {
        return this.getPromise().catch(t);
      }
      finally(t) {
        return this.getPromise().finally(t);
      }
      getPromise() {
        return (this.promise || (this.promise = this.execute()), this.promise);
      }
      async execute() {
        var t = this;
        try {
          return { data: await (await t.downloadFn()).blob(), error: null };
        } catch (e) {
          if (t.shouldThrowOnError) throw e;
          if (bn(e)) return { data: null, error: e };
          throw e;
        }
      }
    },
    x_ = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
    Bu = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: !1,
    },
    N_ = class extends Sn {
      constructor(t, e = {}, r, n) {
        (super(t, e, n, "storage"), (this.bucketId = r));
      }
      async uploadOrUpdate(t, e, r, n) {
        var s = this;
        return s.handleOperation(async () => {
          let o,
            i = le(le({}, Bu), n),
            a = le(
              le({}, s.headers),
              t === "POST" && { "x-upsert": String(i.upsert) },
            ),
            c = i.metadata;
          if (
            (typeof Blob < "u" && r instanceof Blob
              ? ((o = new FormData()),
                o.append("cacheControl", i.cacheControl),
                c && o.append("metadata", s.encodeMetadata(c)),
                o.append("", r))
              : typeof FormData < "u" && r instanceof FormData
                ? ((o = r),
                  o.has("cacheControl") ||
                    o.append("cacheControl", i.cacheControl),
                  c &&
                    !o.has("metadata") &&
                    o.append("metadata", s.encodeMetadata(c)))
                : ((o = r),
                  (a["cache-control"] = `max-age=${i.cacheControl}`),
                  (a["content-type"] = i.contentType),
                  c && (a["x-metadata"] = s.toBase64(s.encodeMetadata(c))),
                  ((typeof ReadableStream < "u" &&
                    o instanceof ReadableStream) ||
                    (o &&
                      typeof o == "object" &&
                      "pipe" in o &&
                      typeof o.pipe == "function")) &&
                    !i.duplex &&
                    (i.duplex = "half")),
            n?.headers)
          )
            for (let [f, h] of Object.entries(n.headers)) a = bo(a, f, h);
          let l = s._removeEmptyFolders(e),
            d = s._getFinalPath(l),
            u = await (t == "PUT" ? ca : Pt)(
              s.fetch,
              `${s.url}/object/${d}`,
              o,
              le({ headers: a }, i?.duplex ? { duplex: i.duplex } : {}),
            );
          return { path: l, id: u.Id, fullPath: u.Key };
        });
      }
      async upload(t, e, r) {
        return this.uploadOrUpdate("POST", t, e, r);
      }
      async uploadToSignedUrl(t, e, r, n) {
        var s = this;
        let o = s._removeEmptyFolders(t),
          i = s._getFinalPath(o),
          a = new URL(s.url + `/object/upload/sign/${i}`);
        return (
          a.searchParams.set("token", e),
          s.handleOperation(async () => {
            let c,
              l = le(le({}, Bu), n),
              d = le(le({}, s.headers), { "x-upsert": String(l.upsert) }),
              u = l.metadata;
            if (
              (typeof Blob < "u" && r instanceof Blob
                ? ((c = new FormData()),
                  c.append("cacheControl", l.cacheControl),
                  u && c.append("metadata", s.encodeMetadata(u)),
                  c.append("", r))
                : typeof FormData < "u" && r instanceof FormData
                  ? ((c = r),
                    c.has("cacheControl") ||
                      c.append("cacheControl", l.cacheControl),
                    u &&
                      !c.has("metadata") &&
                      c.append("metadata", s.encodeMetadata(u)))
                  : ((c = r),
                    (d["cache-control"] = `max-age=${l.cacheControl}`),
                    (d["content-type"] = l.contentType),
                    u && (d["x-metadata"] = s.toBase64(s.encodeMetadata(u))),
                    ((typeof ReadableStream < "u" &&
                      c instanceof ReadableStream) ||
                      (c &&
                        typeof c == "object" &&
                        "pipe" in c &&
                        typeof c.pipe == "function")) &&
                      !l.duplex &&
                      (l.duplex = "half")),
              n?.headers)
            )
              for (let [f, h] of Object.entries(n.headers)) d = bo(d, f, h);
            return {
              path: o,
              fullPath: (
                await ca(
                  s.fetch,
                  a.toString(),
                  c,
                  le({ headers: d }, l?.duplex ? { duplex: l.duplex } : {}),
                )
              ).Key,
            };
          })
        );
      }
      async createSignedUploadUrl(t, e) {
        var r = this;
        return r.handleOperation(async () => {
          let n = r._getFinalPath(t),
            s = le({}, r.headers);
          e?.upsert && (s["x-upsert"] = "true");
          let o = await Pt(
              r.fetch,
              `${r.url}/object/upload/sign/${n}`,
              {},
              { headers: s },
            ),
            i = new URL(r.url + o.url),
            a = i.searchParams.get("token");
          if (!a) throw new wn("No token returned by API");
          return { signedUrl: i.toString(), path: t, token: a };
        });
      }
      async update(t, e, r) {
        return this.uploadOrUpdate("PUT", t, e, r);
      }
      async move(t, e, r) {
        var n = this;
        return n.handleOperation(
          async () =>
            await Pt(
              n.fetch,
              `${n.url}/object/move`,
              {
                bucketId: n.bucketId,
                sourceKey: t,
                destinationKey: e,
                destinationBucket: r?.destinationBucket,
              },
              { headers: n.headers },
            ),
        );
      }
      async copy(t, e, r) {
        var n = this;
        return n.handleOperation(async () => ({
          path: (
            await Pt(
              n.fetch,
              `${n.url}/object/copy`,
              {
                bucketId: n.bucketId,
                sourceKey: t,
                destinationKey: e,
                destinationBucket: r?.destinationBucket,
              },
              { headers: n.headers },
            )
          ).Key,
        }));
      }
      async createSignedUrl(t, e, r) {
        var n = this;
        return n.handleOperation(async () => {
          let s = n._getFinalPath(t),
            o =
              typeof r?.transform == "object" &&
              r.transform !== null &&
              Object.keys(r.transform).length > 0,
            i = await Pt(
              n.fetch,
              `${n.url}/object/sign/${s}`,
              le({ expiresIn: e }, o ? { transform: r.transform } : {}),
              { headers: n.headers },
            ),
            a = new URLSearchParams();
          (r?.download &&
            a.set("download", r.download === !0 ? "" : r.download),
            r?.cacheNonce != null && a.set("cacheNonce", String(r.cacheNonce)));
          let c = a.toString();
          return {
            signedUrl: encodeURI(`${n.url}${i.signedURL}${c ? `&${c}` : ""}`),
          };
        });
      }
      async createSignedUrls(t, e, r) {
        var n = this;
        return n.handleOperation(async () => {
          let s = await Pt(
              n.fetch,
              `${n.url}/object/sign/${n.bucketId}`,
              { expiresIn: e, paths: t },
              { headers: n.headers },
            ),
            o = new URLSearchParams();
          (r?.download &&
            o.set("download", r.download === !0 ? "" : r.download),
            r?.cacheNonce != null && o.set("cacheNonce", String(r.cacheNonce)));
          let i = o.toString();
          return s.map((a) =>
            le(
              le({}, a),
              {},
              {
                signedUrl: a.signedURL
                  ? encodeURI(`${n.url}${a.signedURL}${i ? `&${i}` : ""}`)
                  : null,
              },
            ),
          );
        });
      }
      download(t, e, r) {
        let n =
            typeof e?.transform == "object" &&
            e.transform !== null &&
            Object.keys(e.transform).length > 0
              ? "render/image/authenticated"
              : "object",
          s = new URLSearchParams();
        (e?.transform && this.applyTransformOptsToQuery(s, e.transform),
          e?.cacheNonce != null && s.set("cacheNonce", String(e.cacheNonce)));
        let o = s.toString(),
          i = this._getFinalPath(t),
          a = () =>
            bs(
              this.fetch,
              `${this.url}/${n}/${i}${o ? `?${o}` : ""}`,
              { headers: this.headers, noResolveJson: !0 },
              r,
            );
        return new I_(a, this.shouldThrowOnError);
      }
      async info(t) {
        var e = this;
        let r = e._getFinalPath(t);
        return e.handleOperation(async () =>
          aa(
            await bs(e.fetch, `${e.url}/object/info/${r}`, {
              headers: e.headers,
            }),
          ),
        );
      }
      async exists(t) {
        var e = this;
        let r = e._getFinalPath(t);
        try {
          return (
            await R_(e.fetch, `${e.url}/object/${r}`, { headers: e.headers }),
            { data: !0, error: null }
          );
        } catch (s) {
          if (e.shouldThrowOnError) throw s;
          if (bn(s)) {
            var n;
            let o =
              s instanceof ws
                ? s.status
                : s instanceof So
                  ? (n = s.originalError) === null || n === void 0
                    ? void 0
                    : n.status
                  : void 0;
            if (o !== void 0 && [400, 404].includes(o))
              return { data: !1, error: s };
          }
          throw s;
        }
      }
      getPublicUrl(t, e) {
        let r = this._getFinalPath(t),
          n = new URLSearchParams();
        (e?.download && n.set("download", e.download === !0 ? "" : e.download),
          e?.transform && this.applyTransformOptsToQuery(n, e.transform),
          e?.cacheNonce != null && n.set("cacheNonce", String(e.cacheNonce)));
        let s = n.toString(),
          o =
            typeof e?.transform == "object" &&
            e.transform !== null &&
            Object.keys(e.transform).length > 0
              ? "render/image"
              : "object";
        return {
          data: {
            publicUrl:
              encodeURI(`${this.url}/${o}/public/${r}`) + (s ? `?${s}` : ""),
          },
        };
      }
      async remove(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await la(
              e.fetch,
              `${e.url}/object/${e.bucketId}`,
              { prefixes: t },
              { headers: e.headers },
            ),
        );
      }
      async list(t, e, r) {
        var n = this;
        return n.handleOperation(async () => {
          let s = le(le(le({}, x_), e), {}, { prefix: t || "" });
          return await Pt(
            n.fetch,
            `${n.url}/object/list/${n.bucketId}`,
            s,
            { headers: n.headers },
            r,
          );
        });
      }
      async listV2(t, e) {
        var r = this;
        return r.handleOperation(async () => {
          let n = le({}, t);
          return await Pt(
            r.fetch,
            `${r.url}/object/list-v2/${r.bucketId}`,
            n,
            { headers: r.headers },
            e,
          );
        });
      }
      encodeMetadata(t) {
        return JSON.stringify(t);
      }
      toBase64(t) {
        return typeof Buffer < "u"
          ? Buffer.from(t).toString("base64")
          : btoa(t);
      }
      _getFinalPath(t) {
        return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
      }
      _removeEmptyFolders(t) {
        return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
      }
      applyTransformOptsToQuery(t, e) {
        return (
          e.width && t.set("width", e.width.toString()),
          e.height && t.set("height", e.height.toString()),
          e.resize && t.set("resize", e.resize),
          e.format && t.set("format", e.format),
          e.quality && t.set("quality", e.quality.toString()),
          t
        );
      }
    },
    L_ = "2.108.1",
    Ss = { "X-Client-Info": `storage-js/${L_}` },
    j_ = class extends Sn {
      constructor(t, e = {}, r, n) {
        let s = new URL(t);
        n?.useNewHostname &&
          /supabase\.(co|in|red)$/.test(s.hostname) &&
          !s.hostname.includes("storage.supabase.") &&
          (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
        let o = s.href.replace(/\/$/, ""),
          i = le(le({}, Ss), e);
        super(o, i, r, "storage");
      }
      async listBuckets(t) {
        var e = this;
        return e.handleOperation(async () => {
          let r = e.listBucketOptionsToQueryString(t);
          return await bs(e.fetch, `${e.url}/bucket${r}`, {
            headers: e.headers,
          });
        });
      }
      async getBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await bs(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }),
        );
      }
      async createBucket(t, e = { public: !1 }) {
        var r = this;
        return r.handleOperation(
          async () =>
            await Pt(
              r.fetch,
              `${r.url}/bucket`,
              {
                id: t,
                name: t,
                type: e.type,
                public: e.public,
                file_size_limit: e.fileSizeLimit,
                allowed_mime_types: e.allowedMimeTypes,
              },
              { headers: r.headers },
            ),
        );
      }
      async updateBucket(t, e) {
        var r = this;
        return r.handleOperation(
          async () =>
            await ca(
              r.fetch,
              `${r.url}/bucket/${t}`,
              {
                id: t,
                name: t,
                public: e.public,
                file_size_limit: e.fileSizeLimit,
                allowed_mime_types: e.allowedMimeTypes,
              },
              { headers: r.headers },
            ),
        );
      }
      async emptyBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await Pt(
              e.fetch,
              `${e.url}/bucket/${t}/empty`,
              {},
              { headers: e.headers },
            ),
        );
      }
      async deleteBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await la(
              e.fetch,
              `${e.url}/bucket/${t}`,
              {},
              { headers: e.headers },
            ),
        );
      }
      listBucketOptionsToQueryString(t) {
        let e = {};
        return (
          t &&
            ("limit" in t && (e.limit = String(t.limit)),
            "offset" in t && (e.offset = String(t.offset)),
            t.search && (e.search = t.search),
            t.sortColumn && (e.sortColumn = t.sortColumn),
            t.sortOrder && (e.sortOrder = t.sortOrder)),
          Object.keys(e).length > 0
            ? "?" + new URLSearchParams(e).toString()
            : ""
        );
      }
    },
    Ku = class extends Sn {
      constructor(t, e = {}, r) {
        let n = t.replace(/\/$/, ""),
          s = le(le({}, Ss), e);
        super(n, s, r, "storage");
      }
      async createBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await Pt(
              e.fetch,
              `${e.url}/bucket`,
              { name: t },
              { headers: e.headers },
            ),
        );
      }
      async listBuckets(t) {
        var e = this;
        return e.handleOperation(async () => {
          let r = new URLSearchParams();
          (t?.limit !== void 0 && r.set("limit", t.limit.toString()),
            t?.offset !== void 0 && r.set("offset", t.offset.toString()),
            t?.sortColumn && r.set("sortColumn", t.sortColumn),
            t?.sortOrder && r.set("sortOrder", t.sortOrder),
            t?.search && r.set("search", t.search));
          let n = r.toString(),
            s = n ? `${e.url}/bucket?${n}` : `${e.url}/bucket`;
          return await bs(e.fetch, s, { headers: e.headers });
        });
      }
      async deleteBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await la(
              e.fetch,
              `${e.url}/bucket/${t}`,
              {},
              { headers: e.headers },
            ),
        );
      }
      from(t) {
        var e = this;
        if (!E_(t))
          throw new wn(
            "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.",
          );
        let r = new f_.IcebergRestCatalog({
            baseUrl: this.url,
            catalogName: t,
            auth: { type: "custom", getHeaders: async () => e.headers },
            fetch: this.fetch,
          }),
          n = this.shouldThrowOnError;
        return new Proxy(r, {
          get(s, o) {
            let i = s[o];
            return typeof i != "function"
              ? i
              : async (...a) => {
                  try {
                    return { data: await i.apply(s, a), error: null };
                  } catch (c) {
                    if (n) throw c;
                    return { data: null, error: c };
                  }
                };
          },
        });
      }
    },
    zu = class extends Sn {
      constructor(t, e = {}, r) {
        let n = t.replace(/\/$/, ""),
          s = le(le({}, Ss), {}, { "Content-Type": "application/json" }, e);
        super(n, s, r, "vectors");
      }
      async createIndex(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            (await dt.post(e.fetch, `${e.url}/CreateIndex`, t, {
              headers: e.headers,
            })) || {},
        );
      }
      async getIndex(t, e) {
        var r = this;
        return r.handleOperation(
          async () =>
            await dt.post(
              r.fetch,
              `${r.url}/GetIndex`,
              { vectorBucketName: t, indexName: e },
              { headers: r.headers },
            ),
        );
      }
      async listIndexes(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await dt.post(e.fetch, `${e.url}/ListIndexes`, t, {
              headers: e.headers,
            }),
        );
      }
      async deleteIndex(t, e) {
        var r = this;
        return r.handleOperation(
          async () =>
            (await dt.post(
              r.fetch,
              `${r.url}/DeleteIndex`,
              { vectorBucketName: t, indexName: e },
              { headers: r.headers },
            )) || {},
        );
      }
    },
    Gu = class extends Sn {
      constructor(t, e = {}, r) {
        let n = t.replace(/\/$/, ""),
          s = le(le({}, Ss), {}, { "Content-Type": "application/json" }, e);
        super(n, s, r, "vectors");
      }
      async putVectors(t) {
        var e = this;
        if (t.vectors.length < 1 || t.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return e.handleOperation(
          async () =>
            (await dt.post(e.fetch, `${e.url}/PutVectors`, t, {
              headers: e.headers,
            })) || {},
        );
      }
      async getVectors(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await dt.post(e.fetch, `${e.url}/GetVectors`, t, {
              headers: e.headers,
            }),
        );
      }
      async listVectors(t) {
        var e = this;
        if (t.segmentCount !== void 0) {
          if (t.segmentCount < 1 || t.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (
            t.segmentIndex !== void 0 &&
            (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount)
          )
            throw new Error(
              `segmentIndex must be between 0 and ${t.segmentCount - 1}`,
            );
        }
        return e.handleOperation(
          async () =>
            await dt.post(e.fetch, `${e.url}/ListVectors`, t, {
              headers: e.headers,
            }),
        );
      }
      async queryVectors(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await dt.post(e.fetch, `${e.url}/QueryVectors`, t, {
              headers: e.headers,
            }),
        );
      }
      async deleteVectors(t) {
        var e = this;
        if (t.keys.length < 1 || t.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return e.handleOperation(
          async () =>
            (await dt.post(e.fetch, `${e.url}/DeleteVectors`, t, {
              headers: e.headers,
            })) || {},
        );
      }
    },
    Ju = class extends Sn {
      constructor(t, e = {}, r) {
        let n = t.replace(/\/$/, ""),
          s = le(le({}, Ss), {}, { "Content-Type": "application/json" }, e);
        super(n, s, r, "vectors");
      }
      async createBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            (await dt.post(
              e.fetch,
              `${e.url}/CreateVectorBucket`,
              { vectorBucketName: t },
              { headers: e.headers },
            )) || {},
        );
      }
      async getBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            await dt.post(
              e.fetch,
              `${e.url}/GetVectorBucket`,
              { vectorBucketName: t },
              { headers: e.headers },
            ),
        );
      }
      async listBuckets(t = {}) {
        var e = this;
        return e.handleOperation(
          async () =>
            await dt.post(e.fetch, `${e.url}/ListVectorBuckets`, t, {
              headers: e.headers,
            }),
        );
      }
      async deleteBucket(t) {
        var e = this;
        return e.handleOperation(
          async () =>
            (await dt.post(
              e.fetch,
              `${e.url}/DeleteVectorBucket`,
              { vectorBucketName: t },
              { headers: e.headers },
            )) || {},
        );
      }
    },
    Yu = class extends Ju {
      constructor(t, e = {}) {
        super(t, e.headers || {}, e.fetch);
      }
      from(t) {
        return new Xu(this.url, this.headers, t, this.fetch);
      }
      async createBucket(t) {
        var e = () => super.createBucket,
          r = this;
        return e().call(r, t);
      }
      async getBucket(t) {
        var e = () => super.getBucket,
          r = this;
        return e().call(r, t);
      }
      async listBuckets(t = {}) {
        var e = () => super.listBuckets,
          r = this;
        return e().call(r, t);
      }
      async deleteBucket(t) {
        var e = () => super.deleteBucket,
          r = this;
        return e().call(r, t);
      }
    },
    Xu = class extends zu {
      constructor(t, e, r, n) {
        (super(t, e, n), (this.vectorBucketName = r));
      }
      async createIndex(t) {
        var e = () => super.createIndex,
          r = this;
        return e().call(
          r,
          le(le({}, t), {}, { vectorBucketName: r.vectorBucketName }),
        );
      }
      async listIndexes(t = {}) {
        var e = () => super.listIndexes,
          r = this;
        return e().call(
          r,
          le(le({}, t), {}, { vectorBucketName: r.vectorBucketName }),
        );
      }
      async getIndex(t) {
        var e = () => super.getIndex,
          r = this;
        return e().call(r, r.vectorBucketName, t);
      }
      async deleteIndex(t) {
        var e = () => super.deleteIndex,
          r = this;
        return e().call(r, r.vectorBucketName, t);
      }
      index(t) {
        return new Qu(
          this.url,
          this.headers,
          this.vectorBucketName,
          t,
          this.fetch,
        );
      }
    },
    Qu = class extends Gu {
      constructor(t, e, r, n, s) {
        (super(t, e, s), (this.vectorBucketName = r), (this.indexName = n));
      }
      async putVectors(t) {
        var e = () => super.putVectors,
          r = this;
        return e().call(
          r,
          le(
            le({}, t),
            {},
            { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
          ),
        );
      }
      async getVectors(t) {
        var e = () => super.getVectors,
          r = this;
        return e().call(
          r,
          le(
            le({}, t),
            {},
            { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
          ),
        );
      }
      async listVectors(t = {}) {
        var e = () => super.listVectors,
          r = this;
        return e().call(
          r,
          le(
            le({}, t),
            {},
            { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
          ),
        );
      }
      async queryVectors(t) {
        var e = () => super.queryVectors,
          r = this;
        return e().call(
          r,
          le(
            le({}, t),
            {},
            { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
          ),
        );
      }
      async deleteVectors(t) {
        var e = () => super.deleteVectors,
          r = this;
        return e().call(
          r,
          le(
            le({}, t),
            {},
            { vectorBucketName: r.vectorBucketName, indexName: r.indexName },
          ),
        );
      }
    },
    M_ = class extends j_ {
      constructor(t, e = {}, r, n) {
        super(t, e, r, n);
      }
      from(t) {
        return new N_(this.url, this.headers, t, this.fetch);
      }
      get vectors() {
        return new Yu(this.url + "/vector", {
          headers: this.headers,
          fetch: this.fetch,
        });
      }
      get analytics() {
        return new Ku(this.url + "/iceberg", this.headers, this.fetch);
      }
    };
  Ke.StorageAnalyticsClient = Ku;
  Ke.StorageApiError = ws;
  Ke.StorageClient = M_;
  Ke.StorageError = wn;
  Ke.StorageUnknownError = So;
  Ke.StorageVectorsApiError = v_;
  Ke.StorageVectorsClient = Yu;
  Ke.StorageVectorsError = y_;
  Ke.StorageVectorsErrorCode = b_;
  Ke.StorageVectorsUnknownError = w_;
  Ke.VectorBucketApi = Ju;
  Ke.VectorBucketScope = Xu;
  Ke.VectorDataApi = Gu;
  Ke.VectorIndexApi = zu;
  Ke.VectorIndexScope = Qu;
  Ke.isStorageError = bn;
  Ke.isStorageVectorsError = __;
});
var ua = F((ko) => {
  "use strict";
  Object.defineProperty(ko, "__esModule", { value: !0 });
  ko.version = void 0;
  ko.version = "2.108.1";
});
var Ao = F((Ee) => {
  "use strict";
  Object.defineProperty(Ee, "__esModule", { value: !0 });
  Ee.JWKS_TTL =
    Ee.BASE64URL_REGEX =
    Ee.API_VERSIONS =
    Ee.API_VERSION_HEADER_NAME =
    Ee.NETWORK_FAILURE =
    Ee.DEFAULT_HEADERS =
    Ee.AUDIENCE =
    Ee.STORAGE_KEY =
    Ee.GOTRUE_URL =
    Ee.EXPIRY_MARGIN_MS =
    Ee.AUTO_REFRESH_TICK_THRESHOLD =
    Ee.AUTO_REFRESH_TICK_DURATION_MS =
      void 0;
  var D_ = ua();
  Ee.AUTO_REFRESH_TICK_DURATION_MS = 30 * 1e3;
  Ee.AUTO_REFRESH_TICK_THRESHOLD = 3;
  Ee.EXPIRY_MARGIN_MS =
    Ee.AUTO_REFRESH_TICK_THRESHOLD * Ee.AUTO_REFRESH_TICK_DURATION_MS;
  Ee.GOTRUE_URL = "http://localhost:9999";
  Ee.STORAGE_KEY = "supabase.auth.token";
  Ee.AUDIENCE = "";
  Ee.DEFAULT_HEADERS = { "X-Client-Info": `gotrue-js/${D_.version}` };
  Ee.NETWORK_FAILURE = { MAX_RETRIES: 10, RETRY_INTERVAL: 2 };
  Ee.API_VERSION_HEADER_NAME = "X-Supabase-Api-Version";
  Ee.API_VERSIONS = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  };
  Ee.BASE64URL_REGEX = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i;
  Ee.JWKS_TTL = 600 * 1e3;
});
var Fr = F((de) => {
  "use strict";
  Object.defineProperty(de, "__esModule", { value: !0 });
  de.AuthInvalidJwtError =
    de.AuthWeakPasswordError =
    de.AuthRefreshDiscardedError =
    de.AuthRetryableFetchError =
    de.AuthPKCECodeVerifierMissingError =
    de.AuthPKCEGrantCodeExchangeError =
    de.AuthImplicitGrantRedirectError =
    de.AuthInvalidCredentialsError =
    de.AuthInvalidTokenResponseError =
    de.AuthSessionMissingError =
    de.CustomAuthError =
    de.AuthUnknownError =
    de.AuthApiError =
    de.AuthError =
      void 0;
  de.isAuthError = gr;
  de.isAuthApiError = U_;
  de.isAuthSessionMissingError = $_;
  de.isAuthImplicitGrantRedirectError = F_;
  de.isAuthPKCECodeVerifierMissingError = q_;
  de.isAuthRetryableFetchError = B_;
  de.isAuthRefreshDiscardedError = H_;
  de.isAuthWeakPasswordError = W_;
  var kn = class extends Error {
    constructor(e, r, n) {
      (super(e),
        (this.__isAuthError = !0),
        (this.name = "AuthError"),
        (this.status = r),
        (this.code = n));
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        code: this.code,
      };
    }
  };
  de.AuthError = kn;
  function gr(t) {
    return typeof t == "object" && t !== null && "__isAuthError" in t;
  }
  var da = class extends kn {
    constructor(e, r, n) {
      (super(e, r, n),
        (this.name = "AuthApiError"),
        (this.status = r),
        (this.code = n));
    }
  };
  de.AuthApiError = da;
  function U_(t) {
    return gr(t) && t.name === "AuthApiError";
  }
  var ha = class extends kn {
    constructor(e, r) {
      (super(e), (this.name = "AuthUnknownError"), (this.originalError = r));
    }
  };
  de.AuthUnknownError = ha;
  var ht = class extends kn {
    constructor(e, r, n, s) {
      (super(e, n, s), (this.name = r), (this.status = n));
    }
  };
  de.CustomAuthError = ht;
  var fa = class extends ht {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
  };
  de.AuthSessionMissingError = fa;
  function $_(t) {
    return gr(t) && t.name === "AuthSessionMissingError";
  }
  var pa = class extends ht {
    constructor() {
      super(
        "Auth session or user missing",
        "AuthInvalidTokenResponseError",
        500,
        void 0,
      );
    }
  };
  de.AuthInvalidTokenResponseError = pa;
  var ga = class extends ht {
    constructor(e) {
      super(e, "AuthInvalidCredentialsError", 400, void 0);
    }
  };
  de.AuthInvalidCredentialsError = ga;
  var ma = class extends ht {
    constructor(e, r = null) {
      (super(e, "AuthImplicitGrantRedirectError", 500, void 0),
        (this.details = null),
        (this.details = r));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        details: this.details,
      });
    }
  };
  de.AuthImplicitGrantRedirectError = ma;
  function F_(t) {
    return gr(t) && t.name === "AuthImplicitGrantRedirectError";
  }
  var ya = class extends ht {
    constructor(e, r = null) {
      (super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
        (this.details = null),
        (this.details = r));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        details: this.details,
      });
    }
  };
  de.AuthPKCEGrantCodeExchangeError = ya;
  var _a = class extends ht {
    constructor() {
      super(
        "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
        "AuthPKCECodeVerifierMissingError",
        400,
        "pkce_code_verifier_not_found",
      );
    }
  };
  de.AuthPKCECodeVerifierMissingError = _a;
  function q_(t) {
    return gr(t) && t.name === "AuthPKCECodeVerifierMissingError";
  }
  var va = class extends ht {
    constructor(e, r) {
      super(e, "AuthRetryableFetchError", r, void 0);
    }
  };
  de.AuthRetryableFetchError = va;
  function B_(t) {
    return gr(t) && t.name === "AuthRetryableFetchError";
  }
  var wa = class extends ht {
    constructor(
      e = "Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)",
    ) {
      super(e, "AuthRefreshDiscardedError", 409, void 0);
    }
  };
  de.AuthRefreshDiscardedError = wa;
  function H_(t) {
    return gr(t) && t.name === "AuthRefreshDiscardedError";
  }
  var ba = class extends ht {
    constructor(e, r, n) {
      (super(e, "AuthWeakPasswordError", r, "weak_password"),
        (this.reasons = n));
    }
    toJSON() {
      return Object.assign(Object.assign({}, super.toJSON()), {
        reasons: this.reasons,
      });
    }
  };
  de.AuthWeakPasswordError = ba;
  function W_(t) {
    return gr(t) && t.name === "AuthWeakPasswordError";
  }
  var Sa = class extends ht {
    constructor(e) {
      super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
    }
  };
  de.AuthInvalidJwtError = Sa;
});
var To = F((yt) => {
  "use strict";
  Object.defineProperty(yt, "__esModule", { value: !0 });
  yt.byteToBase64URL = ks;
  yt.byteFromBase64URL = ka;
  yt.stringToBase64URL = K_;
  yt.stringFromBase64URL = z_;
  yt.codepointToUTF8 = td;
  yt.stringToUTF8 = Aa;
  yt.stringFromUTF8 = rd;
  yt.base64UrlToUint8Array = G_;
  yt.stringToUint8Array = J_;
  yt.bytesToBase64URL = Y_;
  var Eo =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
        "",
      ),
    ed = ` 	
\r=`.split(""),
    V_ = (() => {
      let t = new Array(128);
      for (let e = 0; e < t.length; e += 1) t[e] = -1;
      for (let e = 0; e < ed.length; e += 1) t[ed[e].charCodeAt(0)] = -2;
      for (let e = 0; e < Eo.length; e += 1) t[Eo[e].charCodeAt(0)] = e;
      return t;
    })();
  function ks(t, e, r) {
    if (t !== null)
      for (
        e.queue = (e.queue << 8) | t, e.queuedBits += 8;
        e.queuedBits >= 6;
      ) {
        let n = (e.queue >> (e.queuedBits - 6)) & 63;
        (r(Eo[n]), (e.queuedBits -= 6));
      }
    else if (e.queuedBits > 0)
      for (
        e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
        e.queuedBits >= 6;
      ) {
        let n = (e.queue >> (e.queuedBits - 6)) & 63;
        (r(Eo[n]), (e.queuedBits -= 6));
      }
  }
  function ka(t, e, r) {
    let n = V_[t];
    if (n > -1)
      for (e.queue = (e.queue << 6) | n, e.queuedBits += 6; e.queuedBits >= 8;)
        (r((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8));
    else {
      if (n === -2) return;
      throw new Error(
        `Invalid Base64-URL character "${String.fromCharCode(t)}"`,
      );
    }
  }
  function K_(t) {
    let e = [],
      r = (s) => {
        e.push(s);
      },
      n = { queue: 0, queuedBits: 0 };
    return (
      Aa(t, (s) => {
        ks(s, n, r);
      }),
      ks(null, n, r),
      e.join("")
    );
  }
  function z_(t) {
    let e = [],
      r = (i) => {
        e.push(String.fromCodePoint(i));
      },
      n = { utf8seq: 0, codepoint: 0 },
      s = { queue: 0, queuedBits: 0 },
      o = (i) => {
        rd(i, n, r);
      };
    for (let i = 0; i < t.length; i += 1) ka(t.charCodeAt(i), s, o);
    return e.join("");
  }
  function td(t, e) {
    if (t <= 127) {
      e(t);
      return;
    } else if (t <= 2047) {
      (e(192 | (t >> 6)), e(128 | (t & 63)));
      return;
    } else if (t <= 65535) {
      (e(224 | (t >> 12)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63)));
      return;
    } else if (t <= 1114111) {
      (e(240 | (t >> 18)),
        e(128 | ((t >> 12) & 63)),
        e(128 | ((t >> 6) & 63)),
        e(128 | (t & 63)));
      return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
  }
  function Aa(t, e) {
    for (let r = 0; r < t.length; r += 1) {
      let n = t.charCodeAt(r);
      if (n > 55295 && n <= 56319) {
        let s = ((n - 55296) * 1024) & 65535;
        ((n = (((t.charCodeAt(r + 1) - 56320) & 65535) | s) + 65536), (r += 1));
      }
      td(n, e);
    }
  }
  function rd(t, e, r) {
    if (e.utf8seq === 0) {
      if (t <= 127) {
        r(t);
        return;
      }
      for (let n = 1; n < 6; n += 1)
        if (((t >> (7 - n)) & 1) === 0) {
          e.utf8seq = n;
          break;
        }
      if (e.utf8seq === 2) e.codepoint = t & 31;
      else if (e.utf8seq === 3) e.codepoint = t & 15;
      else if (e.utf8seq === 4) e.codepoint = t & 7;
      else throw new Error("Invalid UTF-8 sequence");
      e.utf8seq -= 1;
    } else if (e.utf8seq > 0) {
      if (t <= 127) throw new Error("Invalid UTF-8 sequence");
      ((e.codepoint = (e.codepoint << 6) | (t & 63)),
        (e.utf8seq -= 1),
        e.utf8seq === 0 && r(e.codepoint));
    }
  }
  function G_(t) {
    let e = [],
      r = { queue: 0, queuedBits: 0 },
      n = (s) => {
        e.push(s);
      };
    for (let s = 0; s < t.length; s += 1) ka(t.charCodeAt(s), r, n);
    return new Uint8Array(e);
  }
  function J_(t) {
    let e = [];
    return (Aa(t, (r) => e.push(r)), new Uint8Array(e));
  }
  function Y_(t) {
    let e = [],
      r = { queue: 0, queuedBits: 0 },
      n = (s) => {
        e.push(s);
      };
    return (t.forEach((s) => ks(s, r, n)), ks(null, r, n), e.join(""));
  }
});
var An = F((fe) => {
  "use strict";
  Object.defineProperty(fe, "__esModule", { value: !0 });
  fe.Deferred =
    fe.removeItemAsync =
    fe.getItemAsync =
    fe.setItemAsync =
    fe.looksLikeFetchResponse =
    fe.resolveFetch =
    fe.supportsLocalStorage =
    fe.isBrowser =
      void 0;
  fe.expiresAt = X_;
  fe.generateCallbackId = Q_;
  fe.parseParametersFromURL = tv;
  fe.decodeJWT = av;
  fe.sleep = cv;
  fe.retryable = lv;
  fe.generatePKCEVerifier = od;
  fe.generatePKCEChallenge = id;
  fe.getCodeChallengeAndMethod = hv;
  fe.parseResponseAPIVersion = pv;
  fe.validateExp = gv;
  fe.getAlgorithm = mv;
  fe.validateUUID = _v;
  fe.assertPasskeyExperimentalEnabled = vv;
  fe.userNotAvailableProxy = wv;
  fe.insecureUserWarningProxy = bv;
  fe.deepClone = Sv;
  var sd = Ao(),
    nd = Fr(),
    Ea = To();
  function X_(t) {
    return Math.round(Date.now() / 1e3) + t;
  }
  function Q_() {
    return Symbol("auth-callback");
  }
  var Z_ = () => typeof window < "u" && typeof document < "u";
  fe.isBrowser = Z_;
  var qr = { tested: !1, writable: !1 },
    ev = () => {
      if (!(0, fe.isBrowser)()) return !1;
      try {
        if (typeof globalThis.localStorage != "object") return !1;
      } catch {
        return !1;
      }
      if (qr.tested) return qr.writable;
      let t = `lswt-${Math.random()}${Math.random()}`;
      try {
        (globalThis.localStorage.setItem(t, t),
          globalThis.localStorage.removeItem(t),
          (qr.tested = !0),
          (qr.writable = !0));
      } catch {
        ((qr.tested = !0), (qr.writable = !1));
      }
      return qr.writable;
    };
  fe.supportsLocalStorage = ev;
  function tv(t) {
    let e = {},
      r = new URL(t);
    if (r.hash && r.hash[0] === "#")
      try {
        new URLSearchParams(r.hash.substring(1)).forEach((s, o) => {
          e[o] = s;
        });
      } catch {}
    return (
      r.searchParams.forEach((n, s) => {
        e[s] = n;
      }),
      e
    );
  }
  var rv = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e));
  fe.resolveFetch = rv;
  var nv = (t) =>
    typeof t == "object" &&
    t !== null &&
    "status" in t &&
    "ok" in t &&
    "json" in t &&
    typeof t.json == "function";
  fe.looksLikeFetchResponse = nv;
  var sv = async (t, e, r) => {
    await t.setItem(e, JSON.stringify(r));
  };
  fe.setItemAsync = sv;
  var ov = async (t, e) => {
    let r = await t.getItem(e);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return null;
    }
  };
  fe.getItemAsync = ov;
  var iv = async (t, e) => {
    await t.removeItem(e);
  };
  fe.removeItemAsync = iv;
  var Co = class t {
    constructor() {
      this.promise = new t.promiseConstructor((e, r) => {
        ((this.resolve = e), (this.reject = r));
      });
    }
  };
  fe.Deferred = Co;
  Co.promiseConstructor = Promise;
  function av(t) {
    let e = t.split(".");
    if (e.length !== 3)
      throw new nd.AuthInvalidJwtError("Invalid JWT structure");
    for (let n = 0; n < e.length; n++)
      if (!sd.BASE64URL_REGEX.test(e[n]))
        throw new nd.AuthInvalidJwtError("JWT not in base64url format");
    return {
      header: JSON.parse((0, Ea.stringFromBase64URL)(e[0])),
      payload: JSON.parse((0, Ea.stringFromBase64URL)(e[1])),
      signature: (0, Ea.base64UrlToUint8Array)(e[2]),
      raw: { header: e[0], payload: e[1] },
    };
  }
  async function cv(t) {
    return await new Promise((e) => {
      setTimeout(() => e(null), t);
    });
  }
  function lv(t, e) {
    return new Promise((n, s) => {
      (async () => {
        for (let o = 0; o < 1 / 0; o++)
          try {
            let i = await t(o);
            if (!e(o, null, i)) {
              n(i);
              return;
            }
          } catch (i) {
            if (!e(o, i)) {
              s(i);
              return;
            }
          }
      })();
    });
  }
  function uv(t) {
    return ("0" + t.toString(16)).substr(-2);
  }
  function od() {
    let e = new Uint32Array(56);
    if (typeof crypto > "u") {
      let r =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
        n = r.length,
        s = "";
      for (let o = 0; o < 56; o++) s += r.charAt(Math.floor(Math.random() * n));
      return s;
    }
    return (crypto.getRandomValues(e), Array.from(e, uv).join(""));
  }
  async function dv(t) {
    let r = new TextEncoder().encode(t),
      n = await crypto.subtle.digest("SHA-256", r),
      s = new Uint8Array(n);
    return Array.from(s)
      .map((o) => String.fromCharCode(o))
      .join("");
  }
  async function id(t) {
    if (!(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    ))
      return (
        console.warn(
          "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
        ),
        t
      );
    let r = await dv(t);
    return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function hv(t, e, r = !1) {
    let n = od(),
      s = n;
    (r && (s += "/recovery"),
      await (0, fe.setItemAsync)(t, `${e}-code-verifier`, s));
    let o = await id(n);
    return [o, n === o ? "plain" : "s256"];
  }
  var fv = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
  function pv(t) {
    let e = t.headers.get(sd.API_VERSION_HEADER_NAME);
    if (!e || !e.match(fv)) return null;
    try {
      return new Date(`${e}T00:00:00.0Z`);
    } catch {
      return null;
    }
  }
  function gv(t) {
    if (!t) throw new Error("Missing exp claim");
    let e = Math.floor(Date.now() / 1e3);
    if (t <= e) throw new Error("JWT has expired");
  }
  function mv(t) {
    switch (t) {
      case "RS256":
        return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
      case "ES256":
        return {
          name: "ECDSA",
          namedCurve: "P-256",
          hash: { name: "SHA-256" },
        };
      default:
        throw new Error("Invalid alg claim");
    }
  }
  var yv = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  function _v(t) {
    if (!yv.test(t))
      throw new Error(
        "@supabase/auth-js: Expected parameter to be UUID but is not",
      );
  }
  function vv(t) {
    if (!t.passkey)
      throw new Error(
        "@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).",
      );
  }
  function wv() {
    let t = {};
    return new Proxy(t, {
      get: (e, r) => {
        if (r === "__isUserNotAvailableProxy") return !0;
        if (typeof r == "symbol") {
          let n = r.toString();
          if (
            n === "Symbol(Symbol.toPrimitive)" ||
            n === "Symbol(Symbol.toStringTag)" ||
            n === "Symbol(util.inspect.custom)"
          )
            return;
        }
        throw new Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`,
        );
      },
      set: (e, r) => {
        throw new Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
        );
      },
      deleteProperty: (e, r) => {
        throw new Error(
          `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`,
        );
      },
    });
  }
  function bv(t, e) {
    return new Proxy(t, {
      get: (r, n, s) => {
        if (n === "__isInsecureUserWarningProxy") return !0;
        if (typeof n == "symbol") {
          let o = n.toString();
          if (
            o === "Symbol(Symbol.toPrimitive)" ||
            o === "Symbol(Symbol.toStringTag)" ||
            o === "Symbol(util.inspect.custom)" ||
            o === "Symbol(nodejs.util.inspect.custom)"
          )
            return Reflect.get(r, n, s);
        }
        return (
          !e.value &&
            typeof n == "string" &&
            (console.warn(
              "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
            ),
            (e.value = !0)),
          Reflect.get(r, n, s)
        );
      },
    });
  }
  function Sv(t) {
    return JSON.parse(JSON.stringify(t));
  }
});
var Pa = F((jt) => {
  "use strict";
  Object.defineProperty(jt, "__esModule", { value: !0 });
  jt.handleError = Ca;
  jt._request = Tv;
  jt._sessionResponse = ad;
  jt._sessionResponsePassword = Pv;
  jt._userResponse = Rv;
  jt._ssoResponse = Ov;
  jt._generateLinkResponse = Iv;
  jt._noResolveJsonResponse = xv;
  var kv = (ut(), gt(lt)),
    Po = Ao(),
    Ta = An(),
    mr = Fr(),
    Br = (t) => {
      if (typeof t == "object" && t !== null) {
        let e = t;
        if (typeof e.msg == "string") return e.msg;
        if (typeof e.message == "string") return e.message;
        if (typeof e.error_description == "string") return e.error_description;
        if (typeof e.error == "string") return e.error;
      }
      return JSON.stringify(t);
    },
    Av = [502, 503, 504, 520, 521, 522, 523, 524, 530];
  async function Ca(t) {
    var e;
    if (!(0, Ta.looksLikeFetchResponse)(t))
      throw new mr.AuthRetryableFetchError(Br(t), 0);
    if (Av.includes(t.status))
      throw new mr.AuthRetryableFetchError(Br(t), t.status);
    let r;
    try {
      r = await t.json();
    } catch (o) {
      throw new mr.AuthUnknownError(Br(o), o);
    }
    let n,
      s = (0, Ta.parseResponseAPIVersion)(t);
    if (
      (s &&
      s.getTime() >= Po.API_VERSIONS["2024-01-01"].timestamp &&
      typeof r == "object" &&
      r &&
      typeof r.code == "string"
        ? (n = r.code)
        : typeof r == "object" &&
          r &&
          typeof r.error_code == "string" &&
          (n = r.error_code),
      n)
    ) {
      if (n === "weak_password")
        throw new mr.AuthWeakPasswordError(
          Br(r),
          t.status,
          ((e = r.weak_password) === null || e === void 0
            ? void 0
            : e.reasons) || [],
        );
      if (n === "session_not_found") throw new mr.AuthSessionMissingError();
    } else if (
      typeof r == "object" &&
      r &&
      typeof r.weak_password == "object" &&
      r.weak_password &&
      Array.isArray(r.weak_password.reasons) &&
      r.weak_password.reasons.length &&
      r.weak_password.reasons.reduce((o, i) => o && typeof i == "string", !0)
    )
      throw new mr.AuthWeakPasswordError(
        Br(r),
        t.status,
        r.weak_password.reasons,
      );
    throw new mr.AuthApiError(Br(r), t.status || 500, n);
  }
  var Ev = (t, e, r, n) => {
    let s = { method: t, headers: e?.headers || {} };
    return t === "GET"
      ? s
      : ((s.headers = Object.assign(
          { "Content-Type": "application/json;charset=UTF-8" },
          e?.headers,
        )),
        (s.body = JSON.stringify(n)),
        Object.assign(Object.assign({}, s), r));
  };
  async function Tv(t, e, r, n) {
    var s;
    let o = Object.assign({}, n?.headers);
    (o[Po.API_VERSION_HEADER_NAME] ||
      (o[Po.API_VERSION_HEADER_NAME] = Po.API_VERSIONS["2024-01-01"].name),
      n?.jwt && (o.Authorization = `Bearer ${n.jwt}`));
    let i = (s = n?.query) !== null && s !== void 0 ? s : {};
    n?.redirectTo && (i.redirect_to = n.redirectTo);
    let a = Object.keys(i).length
        ? "?" + new URLSearchParams(i).toString()
        : "",
      c = await Cv(
        t,
        e,
        r + a,
        { headers: o, noResolveJson: n?.noResolveJson },
        {},
        n?.body,
      );
    return n?.xform ? n?.xform(c) : { data: Object.assign({}, c), error: null };
  }
  async function Cv(t, e, r, n, s, o) {
    let i = Ev(e, n, s, o),
      a;
    try {
      a = await t(r, Object.assign({}, i));
    } catch (c) {
      throw (console.error(c), new mr.AuthRetryableFetchError(Br(c), 0));
    }
    if ((a.ok || (await Ca(a)), n?.noResolveJson)) return a;
    try {
      return await a.json();
    } catch (c) {
      await Ca(c);
    }
  }
  function ad(t) {
    var e;
    let r = null;
    Nv(t) &&
      ((r = Object.assign({}, t)),
      t.expires_at || (r.expires_at = (0, Ta.expiresAt)(t.expires_in)));
    let n =
      (e = t.user) !== null && e !== void 0
        ? e
        : typeof t?.id == "string"
          ? t
          : null;
    return { data: { session: r, user: n }, error: null };
  }
  function Pv(t) {
    let e = ad(t);
    return (
      !e.error &&
        t.weak_password &&
        typeof t.weak_password == "object" &&
        Array.isArray(t.weak_password.reasons) &&
        t.weak_password.reasons.length &&
        t.weak_password.message &&
        typeof t.weak_password.message == "string" &&
        t.weak_password.reasons.reduce(
          (r, n) => r && typeof n == "string",
          !0,
        ) &&
        (e.data.weak_password = t.weak_password),
      e
    );
  }
  function Rv(t) {
    var e;
    return {
      data: { user: (e = t.user) !== null && e !== void 0 ? e : t },
      error: null,
    };
  }
  function Ov(t) {
    return { data: t, error: null };
  }
  function Iv(t) {
    let {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: o,
      } = t,
      i = kv.__rest(t, [
        "action_link",
        "email_otp",
        "hashed_token",
        "redirect_to",
        "verification_type",
      ]),
      a = {
        action_link: e,
        email_otp: r,
        hashed_token: n,
        redirect_to: s,
        verification_type: o,
      },
      c = Object.assign({}, i);
    return { data: { properties: a, user: c }, error: null };
  }
  function xv(t) {
    return t;
  }
  function Nv(t) {
    return !!t.access_token && !!t.refresh_token && !!t.expires_in;
  }
});
var Ra = F((Ro) => {
  "use strict";
  Object.defineProperty(Ro, "__esModule", { value: !0 });
  Ro.SIGN_OUT_SCOPES = void 0;
  Ro.SIGN_OUT_SCOPES = ["global", "local", "others"];
});
var Oo = F((xa) => {
  "use strict";
  Object.defineProperty(xa, "__esModule", { value: !0 });
  var Lv = (ut(), gt(lt)),
    _e = Pa(),
    _t = An(),
    Oa = Ra(),
    Ne = Fr(),
    Ia = class {
      constructor({ url: e = "", headers: r = {}, fetch: n, experimental: s }) {
        ((this.url = e),
          (this.headers = r),
          (this.fetch = (0, _t.resolveFetch)(n)),
          (this.experimental = s ?? {}),
          (this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this),
          }),
          (this.oauth = {
            listClients: this._listOAuthClients.bind(this),
            createClient: this._createOAuthClient.bind(this),
            getClient: this._getOAuthClient.bind(this),
            updateClient: this._updateOAuthClient.bind(this),
            deleteClient: this._deleteOAuthClient.bind(this),
            regenerateClientSecret:
              this._regenerateOAuthClientSecret.bind(this),
          }),
          (this.customProviders = {
            listProviders: this._listCustomProviders.bind(this),
            createProvider: this._createCustomProvider.bind(this),
            getProvider: this._getCustomProvider.bind(this),
            updateProvider: this._updateCustomProvider.bind(this),
            deleteProvider: this._deleteCustomProvider.bind(this),
          }),
          (this.passkey = {
            listPasskeys: this._adminListPasskeys.bind(this),
            deletePasskey: this._adminDeletePasskey.bind(this),
          }));
      }
      async signOut(e, r = Oa.SIGN_OUT_SCOPES[0]) {
        if (Oa.SIGN_OUT_SCOPES.indexOf(r) < 0)
          throw new Error(
            `@supabase/auth-js: Parameter scope must be one of ${Oa.SIGN_OUT_SCOPES.join(", ")}`,
          );
        try {
          return (
            await (0, _e._request)(
              this.fetch,
              "POST",
              `${this.url}/logout?scope=${r}`,
              { headers: this.headers, jwt: e, noResolveJson: !0 },
            ),
            { data: null, error: null }
          );
        } catch (n) {
          if ((0, Ne.isAuthError)(n)) return { data: null, error: n };
          throw n;
        }
      }
      async inviteUserByEmail(e, r = {}) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "POST",
            `${this.url}/invite`,
            {
              body: { email: e, data: r.data },
              headers: this.headers,
              redirectTo: r.redirectTo,
              xform: _e._userResponse,
            },
          );
        } catch (n) {
          if ((0, Ne.isAuthError)(n)) return { data: { user: null }, error: n };
          throw n;
        }
      }
      async generateLink(e) {
        try {
          let { options: r } = e,
            n = Lv.__rest(e, ["options"]),
            s = Object.assign(Object.assign({}, n), r);
          return (
            "newEmail" in n && ((s.new_email = n?.newEmail), delete s.newEmail),
            await (0, _e._request)(
              this.fetch,
              "POST",
              `${this.url}/admin/generate_link`,
              {
                body: s,
                headers: this.headers,
                xform: _e._generateLinkResponse,
                redirectTo: r?.redirectTo,
              },
            )
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r))
            return { data: { properties: null, user: null }, error: r };
          throw r;
        }
      }
      async createUser(e) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "POST",
            `${this.url}/admin/users`,
            { body: e, headers: this.headers, xform: _e._userResponse },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: { user: null }, error: r };
          throw r;
        }
      }
      async listUsers(e) {
        var r, n, s, o, i, a, c;
        try {
          let l = { nextPage: null, lastPage: 0, total: 0 },
            d = await (0, _e._request)(
              this.fetch,
              "GET",
              `${this.url}/admin/users`,
              {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    (n =
                      (r = e?.page) === null || r === void 0
                        ? void 0
                        : r.toString()) !== null && n !== void 0
                      ? n
                      : "",
                  per_page:
                    (o =
                      (s = e?.perPage) === null || s === void 0
                        ? void 0
                        : s.toString()) !== null && o !== void 0
                      ? o
                      : "",
                },
                xform: _e._noResolveJsonResponse,
              },
            );
          if (d.error) throw d.error;
          let u = await d.json(),
            f =
              (i = d.headers.get("x-total-count")) !== null && i !== void 0
                ? i
                : 0,
            h =
              (c =
                (a = d.headers.get("link")) === null || a === void 0
                  ? void 0
                  : a.split(",")) !== null && c !== void 0
                ? c
                : [];
          return (
            h.length > 0 &&
              (h.forEach((p) => {
                let g = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)),
                  y = JSON.parse(p.split(";")[1].split("=")[1]);
                l[`${y}Page`] = g;
              }),
              (l.total = parseInt(f))),
            { data: Object.assign(Object.assign({}, u), l), error: null }
          );
        } catch (l) {
          if ((0, Ne.isAuthError)(l)) return { data: { users: [] }, error: l };
          throw l;
        }
      }
      async getUserById(e) {
        (0, _t.validateUUID)(e);
        try {
          return await (0, _e._request)(
            this.fetch,
            "GET",
            `${this.url}/admin/users/${e}`,
            { headers: this.headers, xform: _e._userResponse },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: { user: null }, error: r };
          throw r;
        }
      }
      async updateUserById(e, r) {
        (0, _t.validateUUID)(e);
        try {
          return await (0, _e._request)(
            this.fetch,
            "PUT",
            `${this.url}/admin/users/${e}`,
            { body: r, headers: this.headers, xform: _e._userResponse },
          );
        } catch (n) {
          if ((0, Ne.isAuthError)(n)) return { data: { user: null }, error: n };
          throw n;
        }
      }
      async deleteUser(e, r = !1) {
        (0, _t.validateUUID)(e);
        try {
          return await (0, _e._request)(
            this.fetch,
            "DELETE",
            `${this.url}/admin/users/${e}`,
            {
              headers: this.headers,
              body: { should_soft_delete: r },
              xform: _e._userResponse,
            },
          );
        } catch (n) {
          if ((0, Ne.isAuthError)(n)) return { data: { user: null }, error: n };
          throw n;
        }
      }
      async _listFactors(e) {
        (0, _t.validateUUID)(e.userId);
        try {
          let { data: r, error: n } = await (0, _e._request)(
            this.fetch,
            "GET",
            `${this.url}/admin/users/${e.userId}/factors`,
            {
              headers: this.headers,
              xform: (s) => ({ data: { factors: s }, error: null }),
            },
          );
          return { data: r, error: n };
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _deleteFactor(e) {
        ((0, _t.validateUUID)(e.userId), (0, _t.validateUUID)(e.id));
        try {
          return {
            data: await (0, _e._request)(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
              { headers: this.headers },
            ),
            error: null,
          };
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _listOAuthClients(e) {
        var r, n, s, o, i, a, c;
        try {
          let l = { nextPage: null, lastPage: 0, total: 0 },
            d = await (0, _e._request)(
              this.fetch,
              "GET",
              `${this.url}/admin/oauth/clients`,
              {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    (n =
                      (r = e?.page) === null || r === void 0
                        ? void 0
                        : r.toString()) !== null && n !== void 0
                      ? n
                      : "",
                  per_page:
                    (o =
                      (s = e?.perPage) === null || s === void 0
                        ? void 0
                        : s.toString()) !== null && o !== void 0
                      ? o
                      : "",
                },
                xform: _e._noResolveJsonResponse,
              },
            );
          if (d.error) throw d.error;
          let u = await d.json(),
            f =
              (i = d.headers.get("x-total-count")) !== null && i !== void 0
                ? i
                : 0,
            h =
              (c =
                (a = d.headers.get("link")) === null || a === void 0
                  ? void 0
                  : a.split(",")) !== null && c !== void 0
                ? c
                : [];
          return (
            h.length > 0 &&
              (h.forEach((p) => {
                let g = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)),
                  y = JSON.parse(p.split(";")[1].split("=")[1]);
                l[`${y}Page`] = g;
              }),
              (l.total = parseInt(f))),
            { data: Object.assign(Object.assign({}, u), l), error: null }
          );
        } catch (l) {
          if ((0, Ne.isAuthError)(l))
            return { data: { clients: [] }, error: l };
          throw l;
        }
      }
      async _createOAuthClient(e) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "POST",
            `${this.url}/admin/oauth/clients`,
            {
              body: e,
              headers: this.headers,
              xform: (r) => ({ data: r, error: null }),
            },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _getOAuthClient(e) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "GET",
            `${this.url}/admin/oauth/clients/${e}`,
            { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _updateOAuthClient(e, r) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "PUT",
            `${this.url}/admin/oauth/clients/${e}`,
            {
              body: r,
              headers: this.headers,
              xform: (n) => ({ data: n, error: null }),
            },
          );
        } catch (n) {
          if ((0, Ne.isAuthError)(n)) return { data: null, error: n };
          throw n;
        }
      }
      async _deleteOAuthClient(e) {
        try {
          return (
            await (0, _e._request)(
              this.fetch,
              "DELETE",
              `${this.url}/admin/oauth/clients/${e}`,
              { headers: this.headers, noResolveJson: !0 },
            ),
            { data: null, error: null }
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _regenerateOAuthClientSecret(e) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "POST",
            `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
            { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _listCustomProviders(e) {
        try {
          let r = {};
          return (
            e?.type && (r.type = e.type),
            await (0, _e._request)(
              this.fetch,
              "GET",
              `${this.url}/admin/custom-providers`,
              {
                headers: this.headers,
                query: r,
                xform: (n) => {
                  var s;
                  return {
                    data: {
                      providers:
                        (s = n?.providers) !== null && s !== void 0 ? s : [],
                    },
                    error: null,
                  };
                },
              },
            )
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r))
            return { data: { providers: [] }, error: r };
          throw r;
        }
      }
      async _createCustomProvider(e) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "POST",
            `${this.url}/admin/custom-providers`,
            {
              body: e,
              headers: this.headers,
              xform: (r) => ({ data: r, error: null }),
            },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _getCustomProvider(e) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "GET",
            `${this.url}/admin/custom-providers/${e}`,
            { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _updateCustomProvider(e, r) {
        try {
          return await (0, _e._request)(
            this.fetch,
            "PUT",
            `${this.url}/admin/custom-providers/${e}`,
            {
              body: r,
              headers: this.headers,
              xform: (n) => ({ data: n, error: null }),
            },
          );
        } catch (n) {
          if ((0, Ne.isAuthError)(n)) return { data: null, error: n };
          throw n;
        }
      }
      async _deleteCustomProvider(e) {
        try {
          return (
            await (0, _e._request)(
              this.fetch,
              "DELETE",
              `${this.url}/admin/custom-providers/${e}`,
              { headers: this.headers, noResolveJson: !0 },
            ),
            { data: null, error: null }
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _adminListPasskeys(e) {
        ((0, _t.assertPasskeyExperimentalEnabled)(this.experimental),
          (0, _t.validateUUID)(e.userId));
        try {
          return await (0, _e._request)(
            this.fetch,
            "GET",
            `${this.url}/admin/users/${e.userId}/passkeys`,
            { headers: this.headers, xform: (r) => ({ data: r, error: null }) },
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
      async _adminDeletePasskey(e) {
        ((0, _t.assertPasskeyExperimentalEnabled)(this.experimental),
          (0, _t.validateUUID)(e.userId),
          (0, _t.validateUUID)(e.passkeyId));
        try {
          return (
            await (0, _e._request)(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,
              { headers: this.headers, noResolveJson: !0 },
            ),
            { data: null, error: null }
          );
        } catch (r) {
          if ((0, Ne.isAuthError)(r)) return { data: null, error: r };
          throw r;
        }
      }
    };
  xa.default = Ia;
});
var cd = F((Na) => {
  "use strict";
  Object.defineProperty(Na, "__esModule", { value: !0 });
  Na.memoryLocalStorageAdapter = jv;
  function jv(t = {}) {
    return {
      getItem: (e) => t[e] || null,
      setItem: (e, r) => {
        t[e] = r;
      },
      removeItem: (e) => {
        delete t[e];
      },
    };
  }
});
var La = F((je) => {
  "use strict";
  Object.defineProperty(je, "__esModule", { value: !0 });
  je.ProcessLockAcquireTimeoutError =
    je.NavigatorLockAcquireTimeoutError =
    je.LockAcquireTimeoutError =
    je.internals =
      void 0;
  je.navigatorLock = Dv;
  je.processLock = Uv;
  var Mv = An();
  je.internals = {
    debug: !!(
      globalThis &&
      (0, Mv.supportsLocalStorage)() &&
      globalThis.localStorage &&
      globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") ===
        "true"
    ),
  };
  var Hr = class extends Error {
    constructor(e) {
      (super(e), (this.isAcquireTimeout = !0));
    }
  };
  je.LockAcquireTimeoutError = Hr;
  var As = class extends Hr {};
  je.NavigatorLockAcquireTimeoutError = As;
  var Io = class extends Hr {};
  je.ProcessLockAcquireTimeoutError = Io;
  async function Dv(t, e, r) {
    je.internals.debug &&
      console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    let n = new globalThis.AbortController(),
      s;
    (e > 0 &&
      (s = setTimeout(() => {
        (n.abort(),
          je.internals.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              t,
            ));
      }, e)),
      await Promise.resolve());
    try {
      return await globalThis.navigator.locks.request(
        t,
        e === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: n.signal },
        async (o) => {
          if (o) {
            (clearTimeout(s),
              je.internals.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: acquired",
                  t,
                  o.name,
                ));
            try {
              return await r();
            } finally {
              je.internals.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  t,
                  o.name,
                );
            }
          } else {
            if (e === 0)
              throw (
                je.internals.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    t,
                  ),
                new As(
                  `Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`,
                )
              );
            if (je.internals.debug)
              try {
                let i = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(i, null, "  "),
                );
              } catch (i) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  i,
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
              ),
              clearTimeout(s),
              await r()
            );
          }
        },
      );
    } catch (o) {
      if (
        (e > 0 && clearTimeout(s),
        o !== null &&
          typeof o == "object" &&
          "name" in o &&
          o.name === "AbortError" &&
          e > 0)
      ) {
        if (n.signal.aborted)
          return (
            je.internals.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquire timeout, recovering by stealing lock",
                t,
              ),
            console.warn(
              `@supabase/gotrue-js: Lock "${t}" was not released within ${e}ms. This may indicate an orphaned lock from a component unmount (e.g., React Strict Mode). Forcefully acquiring the lock to recover.`,
            ),
            await Promise.resolve().then(() =>
              globalThis.navigator.locks.request(
                t,
                { mode: "exclusive", steal: !0 },
                async (i) => {
                  if (i) {
                    je.internals.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: recovered (stolen)",
                        t,
                        i.name,
                      );
                    try {
                      return await r();
                    } finally {
                      je.internals.debug &&
                        console.log(
                          "@supabase/gotrue-js: navigatorLock: released (stolen)",
                          t,
                          i.name,
                        );
                    }
                  } else
                    return (
                      console.warn(
                        "@supabase/gotrue-js: Navigator LockManager returned null lock even with steal: true",
                      ),
                      await r()
                    );
                },
              ),
            )
          );
        throw (
          je.internals.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock: lock was stolen by another request",
              t,
            ),
          new As(`Lock "${t}" was released because another request stole it`)
        );
      }
      throw o;
    }
  }
  var ld = {};
  async function Uv(t, e, r) {
    var n;
    let s = (n = ld[t]) !== null && n !== void 0 ? n : Promise.resolve(),
      o = (async () => {
        try {
          return (await s, null);
        } catch {
          return null;
        }
      })(),
      i = (async () => {
        let a = null;
        try {
          let c =
            e >= 0
              ? new Promise((l, d) => {
                  a = setTimeout(() => {
                    (console.warn(
                      `@supabase/gotrue-js: Lock "${t}" acquisition timed out after ${e}ms. This may be caused by another operation holding the lock. Consider increasing lockAcquireTimeout or checking for stuck operations.`,
                    ),
                      d(
                        new Io(
                          `Acquiring process lock with name "${t}" timed out`,
                        ),
                      ));
                  }, e);
                })
              : null;
          (await Promise.race([o, c].filter((l) => l)),
            a !== null && clearTimeout(a));
        } catch (c) {
          if ((a !== null && clearTimeout(a), c instanceof Hr)) throw c;
        }
        return await r();
      })();
    return (
      (ld[t] = (async () => {
        try {
          return await i;
        } catch (a) {
          if (a instanceof Hr) {
            try {
              await s;
            } catch {}
            return null;
          }
          throw a;
        }
      })()),
      await i
    );
  }
});
var ud = F((ja) => {
  "use strict";
  Object.defineProperty(ja, "__esModule", { value: !0 });
  ja.polyfillGlobalThis = $v;
  function $v() {
    if (typeof globalThis != "object")
      try {
        (Object.defineProperty(Object.prototype, "__magic__", {
          get: function () {
            return this;
          },
          configurable: !0,
        }),
          (__magic__.globalThis = __magic__),
          delete Object.prototype.__magic__);
      } catch {
        typeof self < "u" && (self.globalThis = self);
      }
  }
});
var hd = F((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: !0 });
  En.getAddress = dd;
  En.fromHex = Fv;
  En.toHex = qv;
  En.createSiweMessage = Bv;
  function dd(t) {
    if (!/^0x[a-fA-F0-9]{40}$/.test(t))
      throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
    return t.toLowerCase();
  }
  function Fv(t) {
    return parseInt(t, 16);
  }
  function qv(t) {
    let e = new TextEncoder().encode(t);
    return (
      "0x" + Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("")
    );
  }
  function Bv(t) {
    var e;
    let {
      chainId: r,
      domain: n,
      expirationTime: s,
      issuedAt: o = new Date(),
      nonce: i,
      notBefore: a,
      requestId: c,
      resources: l,
      scheme: d,
      uri: u,
      version: f,
    } = t;
    {
      if (!Number.isInteger(r))
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`,
        );
      if (!n)
        throw new Error(
          '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.',
        );
      if (i && i.length < 8)
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${i}`,
        );
      if (!u)
        throw new Error(
          '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.',
        );
      if (f !== "1")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`,
        );
      if (
        !((e = t.statement) === null || e === void 0) &&
        e.includes(`
`)
      )
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`,
        );
    }
    let h = dd(t.address),
      p = d ? `${d}://${n}` : n,
      g = t.statement
        ? `${t.statement}
`
        : "",
      y = `${p} wants you to sign in with your Ethereum account:
${h}

${g}`,
      w = `URI: ${u}
Version: ${f}
Chain ID: ${r}${
        i
          ? `
Nonce: ${i}`
          : ""
      }
Issued At: ${o.toISOString()}`;
    if (
      (s &&
        (w += `
Expiration Time: ${s.toISOString()}`),
      a &&
        (w += `
Not Before: ${a.toISOString()}`),
      c &&
        (w += `
Request ID: ${c}`),
      l)
    ) {
      let A = `
Resources:`;
      for (let S of l) {
        if (!S || typeof S != "string")
          throw new Error(
            `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${S}`,
          );
        A += `
- ${S}`;
      }
      w += A;
    }
    return `${y}
${w}`;
  }
});
var pd = F((Zt) => {
  "use strict";
  Object.defineProperty(Zt, "__esModule", { value: !0 });
  Zt.WebAuthnUnknownError = Zt.WebAuthnError = void 0;
  Zt.isWebAuthnError = Hv;
  Zt.identifyRegistrationError = Wv;
  Zt.identifyAuthenticationError = Vv;
  var fd = Da(),
    Le = class extends Error {
      constructor({ message: e, code: r, cause: n, name: s }) {
        var o;
        (super(e, { cause: n }),
          (this.__isWebAuthnError = !0),
          (this.name =
            (o = s ?? (n instanceof Error ? n.name : void 0)) !== null &&
            o !== void 0
              ? o
              : "Unknown Error"),
          (this.code = r));
      }
      toJSON() {
        return { name: this.name, message: this.message, code: this.code };
      }
    };
  Zt.WebAuthnError = Le;
  var Ma = class extends Le {
    constructor(e, r) {
      (super({
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: r,
        message: e,
      }),
        (this.name = "WebAuthnUnknownError"),
        (this.originalError = r));
    }
  };
  Zt.WebAuthnUnknownError = Ma;
  function Hv(t) {
    return typeof t == "object" && t !== null && "__isWebAuthnError" in t;
  }
  function Wv({ error: t, options: e }) {
    var r, n, s;
    let { publicKey: o } = e;
    if (!o) throw Error("options was missing required publicKey property");
    if (t.name === "AbortError") {
      if (e.signal instanceof AbortSignal)
        return new Le({
          message: "Registration ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: t,
        });
    } else if (t.name === "ConstraintError") {
      if (
        ((r = o.authenticatorSelection) === null || r === void 0
          ? void 0
          : r.requireResidentKey) === !0
      )
        return new Le({
          message:
            "Discoverable credentials were required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
          cause: t,
        });
      if (
        e.mediation === "conditional" &&
        ((n = o.authenticatorSelection) === null || n === void 0
          ? void 0
          : n.userVerification) === "required"
      )
        return new Le({
          message:
            "User verification was required during automatic registration but it could not be performed",
          code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
          cause: t,
        });
      if (
        ((s = o.authenticatorSelection) === null || s === void 0
          ? void 0
          : s.userVerification) === "required"
      )
        return new Le({
          message:
            "User verification was required but no available authenticator supported it",
          code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
          cause: t,
        });
    } else {
      if (t.name === "InvalidStateError")
        return new Le({
          message: "The authenticator was previously registered",
          code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
          cause: t,
        });
      if (t.name === "NotAllowedError")
        return new Le({
          message: t.message,
          code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
          cause: t,
        });
      if (t.name === "NotSupportedError")
        return o.pubKeyCredParams.filter((a) => a.type === "public-key")
          .length === 0
          ? new Le({
              message: 'No entry in pubKeyCredParams was of type "public-key"',
              code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
              cause: t,
            })
          : new Le({
              message:
                "No available authenticator supported any of the specified pubKeyCredParams algorithms",
              code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
              cause: t,
            });
      if (t.name === "SecurityError") {
        let i = window.location.hostname;
        if ((0, fd.isValidDomain)(i)) {
          if (o.rp.id !== i)
            return new Le({
              message: `The RP ID "${o.rp.id}" is invalid for this domain`,
              code: "ERROR_INVALID_RP_ID",
              cause: t,
            });
        } else
          return new Le({
            message: `${window.location.hostname} is an invalid domain`,
            code: "ERROR_INVALID_DOMAIN",
            cause: t,
          });
      } else if (t.name === "TypeError") {
        if (o.user.id.byteLength < 1 || o.user.id.byteLength > 64)
          return new Le({
            message: "User ID was not between 1 and 64 characters",
            code: "ERROR_INVALID_USER_ID_LENGTH",
            cause: t,
          });
      } else if (t.name === "UnknownError")
        return new Le({
          message:
            "The authenticator was unable to process the specified options, or could not create a new credential",
          code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
          cause: t,
        });
    }
    return new Le({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
    });
  }
  function Vv({ error: t, options: e }) {
    let { publicKey: r } = e;
    if (!r) throw Error("options was missing required publicKey property");
    if (t.name === "AbortError") {
      if (e.signal instanceof AbortSignal)
        return new Le({
          message: "Authentication ceremony was sent an abort signal",
          code: "ERROR_CEREMONY_ABORTED",
          cause: t,
        });
    } else {
      if (t.name === "NotAllowedError")
        return new Le({
          message: t.message,
          code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
          cause: t,
        });
      if (t.name === "SecurityError") {
        let n = window.location.hostname;
        if ((0, fd.isValidDomain)(n)) {
          if (r.rpId !== n)
            return new Le({
              message: `The RP ID "${r.rpId}" is invalid for this domain`,
              code: "ERROR_INVALID_RP_ID",
              cause: t,
            });
        } else
          return new Le({
            message: `${window.location.hostname} is an invalid domain`,
            code: "ERROR_INVALID_DOMAIN",
            cause: t,
          });
      } else if (t.name === "UnknownError")
        return new Le({
          message:
            "The authenticator was unable to process the specified options, or could not create a new assertion signature",
          code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
          cause: t,
        });
    }
    return new Le({
      message: "a Non-Webauthn related error has occurred",
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
    });
  }
});
var Da = F((ge) => {
  "use strict";
  Object.defineProperty(ge, "__esModule", { value: !0 });
  ge.WebAuthnApi =
    ge.DEFAULT_REQUEST_OPTIONS =
    ge.DEFAULT_CREATION_OPTIONS =
    ge.webAuthnAbortService =
    ge.WebAuthnAbortService =
    ge.identifyAuthenticationError =
    ge.identifyRegistrationError =
    ge.isWebAuthnError =
    ge.WebAuthnError =
      void 0;
  ge.deserializeCredentialCreationOptions = zv;
  ge.deserializeCredentialRequestOptions = Gv;
  ge.serializeCredentialCreationResponse = Jv;
  ge.serializeCredentialRequestResponse = Yv;
  ge.isValidDomain = Xv;
  ge.browserSupportsWebAuthn = Ua;
  ge.createCredential = md;
  ge.getCredential = yd;
  ge.mergeCredentialCreationOptions = _d;
  ge.mergeCredentialRequestOptions = vd;
  var gd = (ut(), gt(lt)),
    Rt = To(),
    Mt = Fr(),
    Kv = An(),
    Dt = pd();
  Object.defineProperty(ge, "identifyAuthenticationError", {
    enumerable: !0,
    get: function () {
      return Dt.identifyAuthenticationError;
    },
  });
  Object.defineProperty(ge, "identifyRegistrationError", {
    enumerable: !0,
    get: function () {
      return Dt.identifyRegistrationError;
    },
  });
  Object.defineProperty(ge, "isWebAuthnError", {
    enumerable: !0,
    get: function () {
      return Dt.isWebAuthnError;
    },
  });
  Object.defineProperty(ge, "WebAuthnError", {
    enumerable: !0,
    get: function () {
      return Dt.WebAuthnError;
    },
  });
  var xo = class {
    createNewAbortSignal() {
      if (this.controller) {
        let r = new Error("Cancelling existing WebAuthn API call for new one");
        ((r.name = "AbortError"), this.controller.abort(r));
      }
      let e = new AbortController();
      return ((this.controller = e), e.signal);
    }
    cancelCeremony() {
      if (this.controller) {
        let e = new Error("Manually cancelling existing WebAuthn API call");
        ((e.name = "AbortError"),
          this.controller.abort(e),
          (this.controller = void 0));
      }
    }
  };
  ge.WebAuthnAbortService = xo;
  ge.webAuthnAbortService = new xo();
  function zv(t) {
    if (!t) throw new Error("Credential creation options are required");
    if (
      typeof PublicKeyCredential < "u" &&
      "parseCreationOptionsFromJSON" in PublicKeyCredential &&
      typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
    )
      return PublicKeyCredential.parseCreationOptionsFromJSON(t);
    let { challenge: e, user: r, excludeCredentials: n } = t,
      s = gd.__rest(t, ["challenge", "user", "excludeCredentials"]),
      o = (0, Rt.base64UrlToUint8Array)(e).buffer,
      i = Object.assign(Object.assign({}, r), {
        id: (0, Rt.base64UrlToUint8Array)(r.id).buffer,
      }),
      a = Object.assign(Object.assign({}, s), { challenge: o, user: i });
    if (n && n.length > 0) {
      a.excludeCredentials = new Array(n.length);
      for (let c = 0; c < n.length; c++) {
        let l = n[c];
        a.excludeCredentials[c] = Object.assign(Object.assign({}, l), {
          id: (0, Rt.base64UrlToUint8Array)(l.id).buffer,
          type: l.type || "public-key",
          transports: l.transports,
        });
      }
    }
    return a;
  }
  function Gv(t) {
    if (!t) throw new Error("Credential request options are required");
    if (
      typeof PublicKeyCredential < "u" &&
      "parseRequestOptionsFromJSON" in PublicKeyCredential &&
      typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
    )
      return PublicKeyCredential.parseRequestOptionsFromJSON(t);
    let { challenge: e, allowCredentials: r } = t,
      n = gd.__rest(t, ["challenge", "allowCredentials"]),
      s = (0, Rt.base64UrlToUint8Array)(e).buffer,
      o = Object.assign(Object.assign({}, n), { challenge: s });
    if (r && r.length > 0) {
      o.allowCredentials = new Array(r.length);
      for (let i = 0; i < r.length; i++) {
        let a = r[i];
        o.allowCredentials[i] = Object.assign(Object.assign({}, a), {
          id: (0, Rt.base64UrlToUint8Array)(a.id).buffer,
          type: a.type || "public-key",
          transports: a.transports,
        });
      }
    }
    return o;
  }
  function Jv(t) {
    var e;
    if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
    let r = t;
    return {
      id: t.id,
      rawId: t.id,
      response: {
        attestationObject: (0, Rt.bytesToBase64URL)(
          new Uint8Array(t.response.attestationObject),
        ),
        clientDataJSON: (0, Rt.bytesToBase64URL)(
          new Uint8Array(t.response.clientDataJSON),
        ),
      },
      type: "public-key",
      clientExtensionResults: t.getClientExtensionResults(),
      authenticatorAttachment:
        (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
    };
  }
  function Yv(t) {
    var e;
    if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
    let r = t,
      n = t.getClientExtensionResults(),
      s = t.response;
    return {
      id: t.id,
      rawId: t.id,
      response: {
        authenticatorData: (0, Rt.bytesToBase64URL)(
          new Uint8Array(s.authenticatorData),
        ),
        clientDataJSON: (0, Rt.bytesToBase64URL)(
          new Uint8Array(s.clientDataJSON),
        ),
        signature: (0, Rt.bytesToBase64URL)(new Uint8Array(s.signature)),
        userHandle: s.userHandle
          ? (0, Rt.bytesToBase64URL)(new Uint8Array(s.userHandle))
          : void 0,
      },
      type: "public-key",
      clientExtensionResults: n,
      authenticatorAttachment:
        (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
    };
  }
  function Xv(t) {
    return (
      t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
    );
  }
  function Ua() {
    var t, e;
    return !!(
      (0, Kv.isBrowser)() &&
      "PublicKeyCredential" in window &&
      window.PublicKeyCredential &&
      "credentials" in navigator &&
      typeof ((t = navigator?.credentials) === null || t === void 0
        ? void 0
        : t.create) == "function" &&
      typeof ((e = navigator?.credentials) === null || e === void 0
        ? void 0
        : e.get) == "function"
    );
  }
  async function md(t) {
    try {
      let e = await navigator.credentials.create(t);
      return e
        ? e instanceof PublicKeyCredential
          ? { data: e, error: null }
          : {
              data: null,
              error: new Dt.WebAuthnUnknownError(
                "Browser returned unexpected credential type",
                e,
              ),
            }
        : {
            data: null,
            error: new Dt.WebAuthnUnknownError("Empty credential response", e),
          };
    } catch (e) {
      return {
        data: null,
        error: (0, Dt.identifyRegistrationError)({ error: e, options: t }),
      };
    }
  }
  async function yd(t) {
    try {
      let e = await navigator.credentials.get(t);
      return e
        ? e instanceof PublicKeyCredential
          ? { data: e, error: null }
          : {
              data: null,
              error: new Dt.WebAuthnUnknownError(
                "Browser returned unexpected credential type",
                e,
              ),
            }
        : {
            data: null,
            error: new Dt.WebAuthnUnknownError("Empty credential response", e),
          };
    } catch (e) {
      return {
        data: null,
        error: (0, Dt.identifyAuthenticationError)({ error: e, options: t }),
      };
    }
  }
  ge.DEFAULT_CREATION_OPTIONS = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  };
  ge.DEFAULT_REQUEST_OPTIONS = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
  function No(...t) {
    let e = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
      r = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
      n = {};
    for (let s of t)
      if (s)
        for (let o in s) {
          let i = s[o];
          if (i !== void 0)
            if (Array.isArray(i)) n[o] = i;
            else if (r(i)) n[o] = i;
            else if (e(i)) {
              let a = n[o];
              e(a) ? (n[o] = No(a, i)) : (n[o] = No(i));
            } else n[o] = i;
        }
    return n;
  }
  function _d(t, e) {
    return No(ge.DEFAULT_CREATION_OPTIONS, t, e || {});
  }
  function vd(t, e) {
    return No(ge.DEFAULT_REQUEST_OPTIONS, t, e || {});
  }
  var $a = class {
    constructor(e) {
      ((this.client = e),
        (this.enroll = this._enroll.bind(this)),
        (this.challenge = this._challenge.bind(this)),
        (this.verify = this._verify.bind(this)),
        (this.authenticate = this._authenticate.bind(this)),
        (this.register = this._register.bind(this)));
    }
    async _enroll(e) {
      return this.client.mfa.enroll(
        Object.assign(Object.assign({}, e), { factorType: "webauthn" }),
      );
    }
    async _challenge(
      { factorId: e, webauthn: r, friendlyName: n, signal: s },
      o,
    ) {
      var i;
      try {
        let { data: a, error: c } = await this.client.mfa.challenge({
          factorId: e,
          webauthn: r,
        });
        if (!a) return { data: null, error: c };
        let l = s ?? ge.webAuthnAbortService.createNewAbortSignal();
        if (a.webauthn.type === "create") {
          let { user: d } = a.webauthn.credential_options.publicKey;
          if (!d.name) {
            let u = n;
            if (u) d.name = `${d.id}:${u}`;
            else {
              let h = (await this.client.getUser()).data.user,
                p =
                  ((i = h?.user_metadata) === null || i === void 0
                    ? void 0
                    : i.name) ||
                  h?.email ||
                  h?.id ||
                  "User";
              d.name = `${d.id}:${p}`;
            }
          }
          d.displayName || (d.displayName = d.name);
        }
        switch (a.webauthn.type) {
          case "create": {
            let d = _d(a.webauthn.credential_options.publicKey, o?.create),
              { data: u, error: f } = await md({ publicKey: d, signal: l });
            return u
              ? {
                  data: {
                    factorId: e,
                    challengeId: a.id,
                    webauthn: { type: a.webauthn.type, credential_response: u },
                  },
                  error: null,
                }
              : { data: null, error: f };
          }
          case "request": {
            let d = vd(a.webauthn.credential_options.publicKey, o?.request),
              { data: u, error: f } = await yd(
                Object.assign(
                  Object.assign({}, a.webauthn.credential_options),
                  { publicKey: d, signal: l },
                ),
              );
            return u
              ? {
                  data: {
                    factorId: e,
                    challengeId: a.id,
                    webauthn: { type: a.webauthn.type, credential_response: u },
                  },
                  error: null,
                }
              : { data: null, error: f };
          }
        }
      } catch (a) {
        return (0, Mt.isAuthError)(a)
          ? { data: null, error: a }
          : {
              data: null,
              error: new Mt.AuthUnknownError(
                "Unexpected error in challenge",
                a,
              ),
            };
      }
    }
    async _verify({ challengeId: e, factorId: r, webauthn: n }) {
      return this.client.mfa.verify({
        factorId: r,
        challengeId: e,
        webauthn: n,
      });
    }
    async _authenticate(
      {
        factorId: e,
        webauthn: {
          rpId: r = typeof window < "u" ? window.location.hostname : void 0,
          rpOrigins: n = typeof window < "u"
            ? [window.location.origin]
            : void 0,
          signal: s,
        } = {},
      },
      o,
    ) {
      if (!r)
        return {
          data: null,
          error: new Mt.AuthError(
            "rpId is required for WebAuthn authentication",
          ),
        };
      try {
        if (!Ua())
          return {
            data: null,
            error: new Mt.AuthUnknownError(
              "Browser does not support WebAuthn",
              null,
            ),
          };
        let { data: i, error: a } = await this.challenge(
          { factorId: e, webauthn: { rpId: r, rpOrigins: n }, signal: s },
          { request: o },
        );
        if (!i) return { data: null, error: a };
        let { webauthn: c } = i;
        return this._verify({
          factorId: e,
          challengeId: i.challengeId,
          webauthn: {
            type: c.type,
            rpId: r,
            rpOrigins: n,
            credential_response: c.credential_response,
          },
        });
      } catch (i) {
        return (0, Mt.isAuthError)(i)
          ? { data: null, error: i }
          : {
              data: null,
              error: new Mt.AuthUnknownError(
                "Unexpected error in authenticate",
                i,
              ),
            };
      }
    }
    async _register(
      {
        friendlyName: e,
        webauthn: {
          rpId: r = typeof window < "u" ? window.location.hostname : void 0,
          rpOrigins: n = typeof window < "u"
            ? [window.location.origin]
            : void 0,
          signal: s,
        } = {},
      },
      o,
    ) {
      if (!r)
        return {
          data: null,
          error: new Mt.AuthError("rpId is required for WebAuthn registration"),
        };
      try {
        if (!Ua())
          return {
            data: null,
            error: new Mt.AuthUnknownError(
              "Browser does not support WebAuthn",
              null,
            ),
          };
        let { data: i, error: a } = await this._enroll({ friendlyName: e });
        if (!i)
          return (
            await this.client.mfa
              .listFactors()
              .then((d) => {
                var u;
                return (u = d.data) === null || u === void 0
                  ? void 0
                  : u.all.find(
                      (f) =>
                        f.factor_type === "webauthn" &&
                        f.friendly_name === e &&
                        f.status !== "unverified",
                    );
              })
              .then((d) =>
                d ? this.client.mfa.unenroll({ factorId: d?.id }) : void 0,
              ),
            { data: null, error: a }
          );
        let { data: c, error: l } = await this._challenge(
          {
            factorId: i.id,
            friendlyName: i.friendly_name,
            webauthn: { rpId: r, rpOrigins: n },
            signal: s,
          },
          { create: o },
        );
        return c
          ? this._verify({
              factorId: i.id,
              challengeId: c.challengeId,
              webauthn: {
                rpId: r,
                rpOrigins: n,
                type: c.webauthn.type,
                credential_response: c.webauthn.credential_response,
              },
            })
          : { data: null, error: l };
      } catch (i) {
        return (0, Mt.isAuthError)(i)
          ? { data: null, error: i }
          : {
              data: null,
              error: new Mt.AuthUnknownError("Unexpected error in register", i),
            };
      }
    }
  };
  ge.WebAuthnApi = $a;
});
var qa = F((Fa) => {
  "use strict";
  Object.defineProperty(Fa, "__esModule", { value: !0 });
  var Qv = (ut(), gt(lt)),
    Zv = Qv.__importDefault(Oo()),
    ze = Ao(),
    q = Fr(),
    ie = Pa(),
    X = An(),
    wd = cd(),
    ew = La(),
    tw = ud(),
    rw = ua(),
    bd = To(),
    Lo = hd(),
    st = Da();
  (0, tw.polyfillGlobalThis)();
  var nw = {
      url: ze.GOTRUE_URL,
      storageKey: ze.STORAGE_KEY,
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      headers: ze.DEFAULT_HEADERS,
      flowType: "implicit",
      debug: !1,
      hasCustomAuthorizationHeader: !1,
      throwOnError: !1,
      lockAcquireTimeout: 5e3,
      skipAutoInitialize: !1,
      experimental: {},
    },
    Tn = {},
    jo = class t {
      get jwks() {
        var e, r;
        return (r =
          (e = Tn[this.storageKey]) === null || e === void 0
            ? void 0
            : e.jwks) !== null && r !== void 0
          ? r
          : { keys: [] };
      }
      set jwks(e) {
        Tn[this.storageKey] = Object.assign(
          Object.assign({}, Tn[this.storageKey]),
          { jwks: e },
        );
      }
      get jwks_cached_at() {
        var e, r;
        return (r =
          (e = Tn[this.storageKey]) === null || e === void 0
            ? void 0
            : e.cachedAt) !== null && r !== void 0
          ? r
          : Number.MIN_SAFE_INTEGER;
      }
      set jwks_cached_at(e) {
        Tn[this.storageKey] = Object.assign(
          Object.assign({}, Tn[this.storageKey]),
          { cachedAt: e },
        );
      }
      constructor(e) {
        var r, n, s;
        ((this.userStorage = null),
          (this.memoryStorage = null),
          (this.stateChangeEmitters = new Map()),
          (this.autoRefreshTicker = null),
          (this.autoRefreshTickTimeout = null),
          (this.visibilityChangedCallback = null),
          (this.refreshingDeferred = null),
          (this._sessionRemovalEpoch = 0),
          (this.initializePromise = null),
          (this.detectSessionInUrl = !0),
          (this.hasCustomAuthorizationHeader = !1),
          (this.suppressGetSessionWarning = !1),
          (this.lock = null),
          (this.lockAcquired = !1),
          (this.pendingInLock = []),
          (this.broadcastChannel = null),
          (this.logger = console.log));
        let o = Object.assign(Object.assign({}, nw), e);
        if (
          ((this.storageKey = o.storageKey),
          (this.instanceID =
            (r = t.nextInstanceID[this.storageKey]) !== null && r !== void 0
              ? r
              : 0),
          (t.nextInstanceID[this.storageKey] = this.instanceID + 1),
          (this.logDebugMessages = !!o.debug),
          typeof o.debug == "function" && (this.logger = o.debug),
          this.instanceID > 0 && (0, X.isBrowser)())
        ) {
          let i = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
          (console.warn(i), this.logDebugMessages && console.trace(i));
        }
        if (
          ((this.persistSession = o.persistSession),
          (this.autoRefreshToken = o.autoRefreshToken),
          (this.experimental =
            (n = o.experimental) !== null && n !== void 0 ? n : {}),
          (this.admin = new Zv.default({
            url: o.url,
            headers: o.headers,
            fetch: o.fetch,
            experimental: this.experimental,
          })),
          (this.url = o.url),
          (this.headers = o.headers),
          (this.fetch = (0, X.resolveFetch)(o.fetch)),
          (this.detectSessionInUrl = o.detectSessionInUrl),
          (this.flowType = o.flowType),
          (this.hasCustomAuthorizationHeader = o.hasCustomAuthorizationHeader),
          (this.throwOnError = o.throwOnError),
          (this.lockAcquireTimeout = o.lockAcquireTimeout),
          o.lock != null && (this.lock = o.lock),
          this.jwks ||
            ((this.jwks = { keys: [] }),
            (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
          (this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel:
              this._getAuthenticatorAssuranceLevel.bind(this),
            webauthn: new st.WebAuthnApi(this),
          }),
          (this.oauth = {
            getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
            approveAuthorization: this._approveAuthorization.bind(this),
            denyAuthorization: this._denyAuthorization.bind(this),
            listGrants: this._listOAuthGrants.bind(this),
            revokeGrant: this._revokeOAuthGrant.bind(this),
          }),
          (this.passkey = {
            startRegistration: this._startPasskeyRegistration.bind(this),
            verifyRegistration: this._verifyPasskeyRegistration.bind(this),
            startAuthentication: this._startPasskeyAuthentication.bind(this),
            verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
            list: this._listPasskeys.bind(this),
            update: this._updatePasskey.bind(this),
            delete: this._deletePasskey.bind(this),
          }),
          this.persistSession
            ? (o.storage
                ? (this.storage = o.storage)
                : (0, X.supportsLocalStorage)()
                  ? (this.storage = globalThis.localStorage)
                  : ((this.memoryStorage = {}),
                    (this.storage = (0, wd.memoryLocalStorageAdapter)(
                      this.memoryStorage,
                    ))),
              o.userStorage && (this.userStorage = o.userStorage))
            : ((this.memoryStorage = {}),
              (this.storage = (0, wd.memoryLocalStorageAdapter)(
                this.memoryStorage,
              ))),
          (0, X.isBrowser)() &&
            globalThis.BroadcastChannel &&
            this.persistSession &&
            this.storageKey)
        ) {
          try {
            this.broadcastChannel = new globalThis.BroadcastChannel(
              this.storageKey,
            );
          } catch (i) {
            console.error(
              "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
              i,
            );
          }
          (s = this.broadcastChannel) === null ||
            s === void 0 ||
            s.addEventListener("message", async (i) => {
              this._debug(
                "received broadcast notification from other tab or client",
                i,
              );
              try {
                await this._notifyAllSubscribers(
                  i.data.event,
                  i.data.session,
                  !1,
                );
              } catch (a) {
                this._debug("#broadcastChannel", "error", a);
              }
            });
        }
        o.skipAutoInitialize ||
          this.initialize().catch((i) => {
            this._debug("#initialize()", "error", i);
          });
      }
      isThrowOnErrorEnabled() {
        return this.throwOnError;
      }
      _returnResult(e) {
        if (this.throwOnError && e && e.error) throw e.error;
        return e;
      }
      _logPrefix() {
        return `GoTrueClient@${this.storageKey}:${this.instanceID} (${rw.version}) ${new Date().toISOString()}`;
      }
      _debug(...e) {
        return (
          this.logDebugMessages && this.logger(this._logPrefix(), ...e),
          this
        );
      }
      async initialize() {
        return this.initializePromise
          ? await this.initializePromise
          : ((this.initializePromise = (async () =>
              this.lock != null
                ? await this._acquireLock(
                    this.lockAcquireTimeout,
                    async () => await this._initialize(),
                  )
                : await this._initialize())()),
            await this.initializePromise);
      }
      async _initialize() {
        var e;
        try {
          let r = {},
            n = "none";
          if (
            ((0, X.isBrowser)() &&
              ((r = (0, X.parseParametersFromURL)(window.location.href)),
              this._isImplicitGrantCallback(r)
                ? (n = "implicit")
                : (await this._isPKCECallback(r)) && (n = "pkce")),
            (0, X.isBrowser)() && this.detectSessionInUrl && n !== "none")
          ) {
            let { data: s, error: o } = await this._getSessionFromURL(r, n);
            if (o) {
              if (
                (this._debug(
                  "#_initialize()",
                  "error detecting session from URL",
                  o,
                ),
                (0, q.isAuthImplicitGrantRedirectError)(o))
              ) {
                let c =
                  (e = o.details) === null || e === void 0 ? void 0 : e.code;
                if (
                  c === "identity_already_exists" ||
                  c === "identity_not_found" ||
                  c === "single_identity_not_deletable"
                )
                  return { error: o };
              }
              return { error: o };
            }
            let { session: i, redirectType: a } = s;
            return (
              this._debug(
                "#_initialize()",
                "detected session in URL",
                i,
                "redirect type",
                a,
              ),
              await this._saveSession(i),
              setTimeout(async () => {
                a === "recovery"
                  ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
                  : await this._notifyAllSubscribers("SIGNED_IN", i);
              }, 0),
              { error: null }
            );
          }
          return (await this._recoverAndRefresh(), { error: null });
        } catch (r) {
          return (0, q.isAuthError)(r)
            ? this._returnResult({ error: r })
            : this._returnResult({
                error: new q.AuthUnknownError(
                  "Unexpected error during initialization",
                  r,
                ),
              });
        } finally {
          (await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end"));
        }
      }
      async signInAnonymously(e) {
        var r, n, s;
        try {
          let o = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/signup`,
              {
                headers: this.headers,
                body: {
                  data:
                    (n =
                      (r = e?.options) === null || r === void 0
                        ? void 0
                        : r.data) !== null && n !== void 0
                      ? n
                      : {},
                  gotrue_meta_security: {
                    captcha_token:
                      (s = e?.options) === null || s === void 0
                        ? void 0
                        : s.captchaToken,
                  },
                },
                xform: ie._sessionResponse,
              },
            ),
            { data: i, error: a } = o;
          if (a || !i)
            return this._returnResult({
              data: { user: null, session: null },
              error: a,
            });
          let c = i.session,
            l = i.user;
          return (
            i.session &&
              (await this._saveSession(i.session),
              await this._notifyAllSubscribers("SIGNED_IN", c)),
            this._returnResult({ data: { user: l, session: c }, error: null })
          );
        } catch (o) {
          if ((0, q.isAuthError)(o))
            return this._returnResult({
              data: { user: null, session: null },
              error: o,
            });
          throw o;
        }
      }
      async signUp(e) {
        var r, n, s;
        try {
          let o;
          if ("email" in e) {
            let { email: d, password: u, options: f } = e,
              h = null,
              p = null;
            (this.flowType === "pkce" &&
              ([h, p] = await (0, X.getCodeChallengeAndMethod)(
                this.storage,
                this.storageKey,
              )),
              (o = await (0, ie._request)(
                this.fetch,
                "POST",
                `${this.url}/signup`,
                {
                  headers: this.headers,
                  redirectTo: f?.emailRedirectTo,
                  body: {
                    email: d,
                    password: u,
                    data: (r = f?.data) !== null && r !== void 0 ? r : {},
                    gotrue_meta_security: { captcha_token: f?.captchaToken },
                    code_challenge: h,
                    code_challenge_method: p,
                  },
                  xform: ie._sessionResponse,
                },
              )));
          } else if ("phone" in e) {
            let { phone: d, password: u, options: f } = e;
            o = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/signup`,
              {
                headers: this.headers,
                body: {
                  phone: d,
                  password: u,
                  data: (n = f?.data) !== null && n !== void 0 ? n : {},
                  channel:
                    (s = f?.channel) !== null && s !== void 0 ? s : "sms",
                  gotrue_meta_security: { captcha_token: f?.captchaToken },
                },
                xform: ie._sessionResponse,
              },
            );
          } else
            throw new q.AuthInvalidCredentialsError(
              "You must provide either an email or phone number and a password",
            );
          let { data: i, error: a } = o;
          if (a || !i)
            return (
              await (0, X.removeItemAsync)(
                this.storage,
                `${this.storageKey}-code-verifier`,
              ),
              this._returnResult({
                data: { user: null, session: null },
                error: a,
              })
            );
          let c = i.session,
            l = i.user;
          return (
            i.session &&
              (await this._saveSession(i.session),
              await this._notifyAllSubscribers("SIGNED_IN", c)),
            this._returnResult({ data: { user: l, session: c }, error: null })
          );
        } catch (o) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(o))
          )
            return this._returnResult({
              data: { user: null, session: null },
              error: o,
            });
          throw o;
        }
      }
      async signInWithPassword(e) {
        try {
          let r;
          if ("email" in e) {
            let { email: o, password: i, options: a } = e;
            r = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=password`,
              {
                headers: this.headers,
                body: {
                  email: o,
                  password: i,
                  gotrue_meta_security: { captcha_token: a?.captchaToken },
                },
                xform: ie._sessionResponsePassword,
              },
            );
          } else if ("phone" in e) {
            let { phone: o, password: i, options: a } = e;
            r = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=password`,
              {
                headers: this.headers,
                body: {
                  phone: o,
                  password: i,
                  gotrue_meta_security: { captcha_token: a?.captchaToken },
                },
                xform: ie._sessionResponsePassword,
              },
            );
          } else
            throw new q.AuthInvalidCredentialsError(
              "You must provide either an email or phone number and a password",
            );
          let { data: n, error: s } = r;
          if (s)
            return this._returnResult({
              data: { user: null, session: null },
              error: s,
            });
          if (!n || !n.session || !n.user) {
            let o = new q.AuthInvalidTokenResponseError();
            return this._returnResult({
              data: { user: null, session: null },
              error: o,
            });
          }
          return (
            n.session &&
              (await this._saveSession(n.session),
              await this._notifyAllSubscribers("SIGNED_IN", n.session)),
            this._returnResult({
              data: Object.assign(
                { user: n.user, session: n.session },
                n.weak_password ? { weakPassword: n.weak_password } : null,
              ),
              error: s,
            })
          );
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({
              data: { user: null, session: null },
              error: r,
            });
          throw r;
        }
      }
      async signInWithOAuth(e) {
        var r, n, s, o;
        return await this._handleProviderSignIn(e.provider, {
          redirectTo:
            (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
          scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
          queryParams:
            (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
          skipBrowserRedirect:
            (o = e.options) === null || o === void 0
              ? void 0
              : o.skipBrowserRedirect,
        });
      }
      async exchangeCodeForSession(e) {
        return (
          await this.initializePromise,
          this.lock != null
            ? this._acquireLock(this.lockAcquireTimeout, async () =>
                this._exchangeCodeForSession(e),
              )
            : this._exchangeCodeForSession(e)
        );
      }
      async signInWithWeb3(e) {
        let { chain: r } = e;
        switch (r) {
          case "ethereum":
            return await this.signInWithEthereum(e);
          case "solana":
            return await this.signInWithSolana(e);
          default:
            throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
        }
      }
      async signInWithEthereum(e) {
        var r, n, s, o, i, a, c, l, d, u, f;
        let h, p;
        if ("message" in e) ((h = e.message), (p = e.signature));
        else {
          let { chain: g, wallet: y, statement: w, options: A } = e,
            S;
          if ((0, X.isBrowser)())
            if (typeof y == "object") S = y;
            else {
              let m = window;
              if (
                "ethereum" in m &&
                typeof m.ethereum == "object" &&
                "request" in m.ethereum &&
                typeof m.ethereum.request == "function"
              )
                S = m.ethereum;
              else
                throw new Error(
                  "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.",
                );
            }
          else {
            if (typeof y != "object" || !A?.url)
              throw new Error(
                "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
              );
            S = y;
          }
          let D = new URL(
              (r = A?.url) !== null && r !== void 0 ? r : window.location.href,
            ),
            B = await S.request({ method: "eth_requestAccounts" })
              .then((m) => m)
              .catch(() => {
                throw new Error(
                  "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid",
                );
              });
          if (!B || B.length === 0)
            throw new Error(
              "@supabase/auth-js: No accounts available. Please ensure the wallet is connected.",
            );
          let R = (0, Lo.getAddress)(B[0]),
            _ =
              (n = A?.signInWithEthereum) === null || n === void 0
                ? void 0
                : n.chainId;
          if (!_) {
            let m = await S.request({ method: "eth_chainId" });
            _ = (0, Lo.fromHex)(m);
          }
          let T = {
            domain: D.host,
            address: R,
            statement: w,
            uri: D.href,
            version: "1",
            chainId: _,
            nonce:
              (s = A?.signInWithEthereum) === null || s === void 0
                ? void 0
                : s.nonce,
            issuedAt:
              (i =
                (o = A?.signInWithEthereum) === null || o === void 0
                  ? void 0
                  : o.issuedAt) !== null && i !== void 0
                ? i
                : new Date(),
            expirationTime:
              (a = A?.signInWithEthereum) === null || a === void 0
                ? void 0
                : a.expirationTime,
            notBefore:
              (c = A?.signInWithEthereum) === null || c === void 0
                ? void 0
                : c.notBefore,
            requestId:
              (l = A?.signInWithEthereum) === null || l === void 0
                ? void 0
                : l.requestId,
            resources:
              (d = A?.signInWithEthereum) === null || d === void 0
                ? void 0
                : d.resources,
          };
          ((h = (0, Lo.createSiweMessage)(T)),
            (p = await S.request({
              method: "personal_sign",
              params: [(0, Lo.toHex)(h), R],
            })));
        }
        try {
          let { data: g, error: y } = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=web3`,
            {
              headers: this.headers,
              body: Object.assign(
                { chain: "ethereum", message: h, signature: p },
                !((u = e.options) === null || u === void 0) && u.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token:
                          (f = e.options) === null || f === void 0
                            ? void 0
                            : f.captchaToken,
                      },
                    }
                  : null,
              ),
              xform: ie._sessionResponse,
            },
          );
          if (y) throw y;
          if (!g || !g.session || !g.user) {
            let w = new q.AuthInvalidTokenResponseError();
            return this._returnResult({
              data: { user: null, session: null },
              error: w,
            });
          }
          return (
            g.session &&
              (await this._saveSession(g.session),
              await this._notifyAllSubscribers("SIGNED_IN", g.session)),
            this._returnResult({ data: Object.assign({}, g), error: y })
          );
        } catch (g) {
          if ((0, q.isAuthError)(g))
            return this._returnResult({
              data: { user: null, session: null },
              error: g,
            });
          throw g;
        }
      }
      async signInWithSolana(e) {
        var r, n, s, o, i, a, c, l, d, u, f, h;
        let p, g;
        if ("message" in e) ((p = e.message), (g = e.signature));
        else {
          let { chain: y, wallet: w, statement: A, options: S } = e,
            D;
          if ((0, X.isBrowser)())
            if (typeof w == "object") D = w;
            else {
              let R = window;
              if (
                "solana" in R &&
                typeof R.solana == "object" &&
                (("signIn" in R.solana &&
                  typeof R.solana.signIn == "function") ||
                  ("signMessage" in R.solana &&
                    typeof R.solana.signMessage == "function"))
              )
                D = R.solana;
              else
                throw new Error(
                  "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
                );
            }
          else {
            if (typeof w != "object" || !S?.url)
              throw new Error(
                "@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
              );
            D = w;
          }
          let B = new URL(
            (r = S?.url) !== null && r !== void 0 ? r : window.location.href,
          );
          if ("signIn" in D && D.signIn) {
            let R = await D.signIn(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      { issuedAt: new Date().toISOString() },
                      S?.signInWithSolana,
                    ),
                    { version: "1", domain: B.host, uri: B.href },
                  ),
                  A ? { statement: A } : null,
                ),
              ),
              _;
            if (Array.isArray(R) && R[0] && typeof R[0] == "object") _ = R[0];
            else if (
              R &&
              typeof R == "object" &&
              "signedMessage" in R &&
              "signature" in R
            )
              _ = R;
            else
              throw new Error(
                "@supabase/auth-js: Wallet method signIn() returned unrecognized value",
              );
            if (
              "signedMessage" in _ &&
              "signature" in _ &&
              (typeof _.signedMessage == "string" ||
                _.signedMessage instanceof Uint8Array) &&
              _.signature instanceof Uint8Array
            )
              ((p =
                typeof _.signedMessage == "string"
                  ? _.signedMessage
                  : new TextDecoder().decode(_.signedMessage)),
                (g = _.signature));
            else
              throw new Error(
                "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
              );
          } else {
            if (
              !("signMessage" in D) ||
              typeof D.signMessage != "function" ||
              !("publicKey" in D) ||
              typeof D != "object" ||
              !D.publicKey ||
              !("toBase58" in D.publicKey) ||
              typeof D.publicKey.toBase58 != "function"
            )
              throw new Error(
                "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
              );
            p = [
              `${B.host} wants you to sign in with your Solana account:`,
              D.publicKey.toBase58(),
              ...(A ? ["", A, ""] : [""]),
              "Version: 1",
              `URI: ${B.href}`,
              `Issued At: ${(s = (n = S?.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
              ...(!((o = S?.signInWithSolana) === null || o === void 0) &&
              o.notBefore
                ? [`Not Before: ${S.signInWithSolana.notBefore}`]
                : []),
              ...(!((i = S?.signInWithSolana) === null || i === void 0) &&
              i.expirationTime
                ? [`Expiration Time: ${S.signInWithSolana.expirationTime}`]
                : []),
              ...(!((a = S?.signInWithSolana) === null || a === void 0) &&
              a.chainId
                ? [`Chain ID: ${S.signInWithSolana.chainId}`]
                : []),
              ...(!((c = S?.signInWithSolana) === null || c === void 0) &&
              c.nonce
                ? [`Nonce: ${S.signInWithSolana.nonce}`]
                : []),
              ...(!((l = S?.signInWithSolana) === null || l === void 0) &&
              l.requestId
                ? [`Request ID: ${S.signInWithSolana.requestId}`]
                : []),
              ...(!(
                (u =
                  (d = S?.signInWithSolana) === null || d === void 0
                    ? void 0
                    : d.resources) === null || u === void 0
              ) && u.length
                ? [
                    "Resources",
                    ...S.signInWithSolana.resources.map((_) => `- ${_}`),
                  ]
                : []),
            ].join(`
`);
            let R = await D.signMessage(new TextEncoder().encode(p), "utf8");
            if (!R || !(R instanceof Uint8Array))
              throw new Error(
                "@supabase/auth-js: Wallet signMessage() API returned an recognized value",
              );
            g = R;
          }
        }
        try {
          let { data: y, error: w } = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=web3`,
            {
              headers: this.headers,
              body: Object.assign(
                {
                  chain: "solana",
                  message: p,
                  signature: (0, bd.bytesToBase64URL)(g),
                },
                !((f = e.options) === null || f === void 0) && f.captchaToken
                  ? {
                      gotrue_meta_security: {
                        captcha_token:
                          (h = e.options) === null || h === void 0
                            ? void 0
                            : h.captchaToken,
                      },
                    }
                  : null,
              ),
              xform: ie._sessionResponse,
            },
          );
          if (w) throw w;
          if (!y || !y.session || !y.user) {
            let A = new q.AuthInvalidTokenResponseError();
            return this._returnResult({
              data: { user: null, session: null },
              error: A,
            });
          }
          return (
            y.session &&
              (await this._saveSession(y.session),
              await this._notifyAllSubscribers("SIGNED_IN", y.session)),
            this._returnResult({ data: Object.assign({}, y), error: w })
          );
        } catch (y) {
          if ((0, q.isAuthError)(y))
            return this._returnResult({
              data: { user: null, session: null },
              error: y,
            });
          throw y;
        }
      }
      async _exchangeCodeForSession(e) {
        let r = await (0, X.getItemAsync)(
            this.storage,
            `${this.storageKey}-code-verifier`,
          ),
          [n, s] = (r ?? "").split("/");
        try {
          if (!n && this.flowType === "pkce")
            throw new q.AuthPKCECodeVerifierMissingError();
          let { data: o, error: i } = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=pkce`,
            {
              headers: this.headers,
              body: { auth_code: e, code_verifier: n },
              xform: ie._sessionResponse,
            },
          );
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            i)
          )
            throw i;
          if (!o || !o.session || !o.user) {
            let a = new q.AuthInvalidTokenResponseError();
            return this._returnResult({
              data: { user: null, session: null, redirectType: null },
              error: a,
            });
          }
          return (
            o.session &&
              (await this._saveSession(o.session),
              await this._notifyAllSubscribers(
                s === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                o.session,
              )),
            this._returnResult({
              data: Object.assign(Object.assign({}, o), {
                redirectType: s ?? null,
              }),
              error: i,
            })
          );
        } catch (o) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(o))
          )
            return this._returnResult({
              data: { user: null, session: null, redirectType: null },
              error: o,
            });
          throw o;
        }
      }
      async signInWithIdToken(e) {
        try {
          let {
              options: r,
              provider: n,
              token: s,
              access_token: o,
              nonce: i,
            } = e,
            a = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=id_token`,
              {
                headers: this.headers,
                body: {
                  provider: n,
                  id_token: s,
                  access_token: o,
                  nonce: i,
                  gotrue_meta_security: { captcha_token: r?.captchaToken },
                },
                xform: ie._sessionResponse,
              },
            ),
            { data: c, error: l } = a;
          if (l)
            return this._returnResult({
              data: { user: null, session: null },
              error: l,
            });
          if (!c || !c.session || !c.user) {
            let d = new q.AuthInvalidTokenResponseError();
            return this._returnResult({
              data: { user: null, session: null },
              error: d,
            });
          }
          return (
            c.session &&
              (await this._saveSession(c.session),
              await this._notifyAllSubscribers("SIGNED_IN", c.session)),
            this._returnResult({ data: c, error: l })
          );
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({
              data: { user: null, session: null },
              error: r,
            });
          throw r;
        }
      }
      async signInWithOtp(e) {
        var r, n, s, o, i;
        try {
          if ("email" in e) {
            let { email: a, options: c } = e,
              l = null,
              d = null;
            this.flowType === "pkce" &&
              ([l, d] = await (0, X.getCodeChallengeAndMethod)(
                this.storage,
                this.storageKey,
              ));
            let { error: u } = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/otp`,
              {
                headers: this.headers,
                body: {
                  email: a,
                  data: (r = c?.data) !== null && r !== void 0 ? r : {},
                  create_user:
                    (n = c?.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                  gotrue_meta_security: { captcha_token: c?.captchaToken },
                  code_challenge: l,
                  code_challenge_method: d,
                },
                redirectTo: c?.emailRedirectTo,
              },
            );
            return this._returnResult({
              data: { user: null, session: null },
              error: u,
            });
          }
          if ("phone" in e) {
            let { phone: a, options: c } = e,
              { data: l, error: d } = await (0, ie._request)(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    phone: a,
                    data: (s = c?.data) !== null && s !== void 0 ? s : {},
                    create_user:
                      (o = c?.shouldCreateUser) !== null && o !== void 0
                        ? o
                        : !0,
                    gotrue_meta_security: { captcha_token: c?.captchaToken },
                    channel:
                      (i = c?.channel) !== null && i !== void 0 ? i : "sms",
                  },
                },
              );
            return this._returnResult({
              data: { user: null, session: null, messageId: l?.message_id },
              error: d,
            });
          }
          throw new q.AuthInvalidCredentialsError(
            "You must provide either an email or phone number.",
          );
        } catch (a) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(a))
          )
            return this._returnResult({
              data: { user: null, session: null },
              error: a,
            });
          throw a;
        }
      }
      async verifyOtp(e) {
        var r, n;
        try {
          let s, o;
          "options" in e &&
            ((s =
              (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo),
            (o =
              (n = e.options) === null || n === void 0
                ? void 0
                : n.captchaToken));
          let { data: i, error: a } = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/verify`,
            {
              headers: this.headers,
              body: Object.assign(Object.assign({}, e), {
                gotrue_meta_security: { captcha_token: o },
              }),
              redirectTo: s,
              xform: ie._sessionResponse,
            },
          );
          if (a) throw a;
          if (!i) throw new Error("An error occurred on token verification.");
          let c = i.session,
            l = i.user;
          return (
            c?.access_token &&
              (await this._saveSession(c),
              await this._notifyAllSubscribers(
                e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                c,
              )),
            this._returnResult({ data: { user: l, session: c }, error: null })
          );
        } catch (s) {
          if ((0, q.isAuthError)(s))
            return this._returnResult({
              data: { user: null, session: null },
              error: s,
            });
          throw s;
        }
      }
      async signInWithSSO(e) {
        var r, n, s, o, i;
        try {
          let a = null,
            c = null;
          this.flowType === "pkce" &&
            ([a, c] = await (0, X.getCodeChallengeAndMethod)(
              this.storage,
              this.storageKey,
            ));
          let l = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/sso`,
            {
              body: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        "providerId" in e
                          ? { provider_id: e.providerId }
                          : null,
                      ),
                      "domain" in e ? { domain: e.domain } : null,
                    ),
                    {
                      redirect_to:
                        (n =
                          (r = e.options) === null || r === void 0
                            ? void 0
                            : r.redirectTo) !== null && n !== void 0
                          ? n
                          : void 0,
                    },
                  ),
                  !((s = e?.options) === null || s === void 0) && s.captchaToken
                    ? {
                        gotrue_meta_security: {
                          captcha_token: e.options.captchaToken,
                        },
                      }
                    : null,
                ),
                {
                  skip_http_redirect: !0,
                  code_challenge: a,
                  code_challenge_method: c,
                },
              ),
              headers: this.headers,
              xform: ie._ssoResponse,
            },
          );
          return (
            !((o = l.data) === null || o === void 0) &&
              o.url &&
              (0, X.isBrowser)() &&
              !(
                !((i = e.options) === null || i === void 0) &&
                i.skipBrowserRedirect
              ) &&
              window.location.assign(l.data.url),
            this._returnResult(l)
          );
        } catch (a) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(a))
          )
            return this._returnResult({ data: null, error: a });
          throw a;
        }
      }
      async reauthenticate() {
        return (
          await this.initializePromise,
          this.lock != null
            ? await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._reauthenticate(),
              )
            : await this._reauthenticate()
        );
      }
      async _reauthenticate() {
        try {
          return await this._useSession(async (e) => {
            let {
              data: { session: r },
              error: n,
            } = e;
            if (n) throw n;
            if (!r) throw new q.AuthSessionMissingError();
            let { error: s } = await (0, ie._request)(
              this.fetch,
              "GET",
              `${this.url}/reauthenticate`,
              { headers: this.headers, jwt: r.access_token },
            );
            return this._returnResult({
              data: { user: null, session: null },
              error: s,
            });
          });
        } catch (e) {
          if ((0, q.isAuthError)(e))
            return this._returnResult({
              data: { user: null, session: null },
              error: e,
            });
          throw e;
        }
      }
      async resend(e) {
        try {
          let r = `${this.url}/resend`;
          if ("email" in e) {
            let { email: n, type: s, options: o } = e,
              i = null,
              a = null;
            this.flowType === "pkce" &&
              ([i, a] = await (0, X.getCodeChallengeAndMethod)(
                this.storage,
                this.storageKey,
              ));
            let { error: c } = await (0, ie._request)(this.fetch, "POST", r, {
              headers: this.headers,
              body: {
                email: n,
                type: s,
                gotrue_meta_security: { captcha_token: o?.captchaToken },
                code_challenge: i,
                code_challenge_method: a,
              },
              redirectTo: o?.emailRedirectTo,
            });
            return (
              c &&
                (await (0, X.removeItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                )),
              this._returnResult({
                data: { user: null, session: null },
                error: c,
              })
            );
          } else if ("phone" in e) {
            let { phone: n, type: s, options: o } = e,
              { data: i, error: a } = await (0, ie._request)(
                this.fetch,
                "POST",
                r,
                {
                  headers: this.headers,
                  body: {
                    phone: n,
                    type: s,
                    gotrue_meta_security: { captcha_token: o?.captchaToken },
                  },
                },
              );
            return this._returnResult({
              data: { user: null, session: null, messageId: i?.message_id },
              error: a,
            });
          }
          throw new q.AuthInvalidCredentialsError(
            "You must provide either an email or phone number and a type",
          );
        } catch (r) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(r))
          )
            return this._returnResult({
              data: { user: null, session: null },
              error: r,
            });
          throw r;
        }
      }
      async getSession() {
        return (
          await this.initializePromise,
          this.lock != null
            ? await this._acquireLock(this.lockAcquireTimeout, async () =>
                this._useSession(async (e) => e),
              )
            : await this._useSession(async (e) => e)
        );
      }
      async _acquireLock(e, r) {
        this._debug("#_acquireLock", "begin", e);
        try {
          if (this.lockAcquired) {
            let n = this.pendingInLock.length
                ? this.pendingInLock[this.pendingInLock.length - 1]
                : Promise.resolve(),
              s = (async () => (await n, await r()))();
            return (
              this.pendingInLock.push(
                (async () => {
                  try {
                    await s;
                  } catch {}
                })(),
              ),
              s
            );
          }
          return await this.lock(`lock:${this.storageKey}`, e, async () => {
            this._debug(
              "#_acquireLock",
              "lock acquired for storage key",
              this.storageKey,
            );
            try {
              this.lockAcquired = !0;
              let n = r();
              for (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await n;
                    } catch {}
                  })(),
                ),
                  await n;
                this.pendingInLock.length;
              ) {
                let s = [...this.pendingInLock];
                (await Promise.all(s), this.pendingInLock.splice(0, s.length));
              }
              return await n;
            } finally {
              (this._debug(
                "#_acquireLock",
                "lock released for storage key",
                this.storageKey,
              ),
                (this.lockAcquired = !1));
            }
          });
        } finally {
          this._debug("#_acquireLock", "end");
        }
      }
      async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
          let r = await this.__loadSession();
          return await e(r);
        } finally {
          this._debug("#_useSession", "end");
        }
      }
      async __loadSession() {
        (this._debug("#__loadSession()", "begin"),
          this.lock != null &&
            !this.lockAcquired &&
            this._debug(
              "#__loadSession()",
              "used outside of an acquired lock!",
              new Error().stack,
            ));
        try {
          let e = null,
            r = await (0, X.getItemAsync)(this.storage, this.storageKey);
          if (
            (this._debug("#getSession()", "session from storage", r),
            r !== null &&
              (this._isValidSession(r)
                ? (e = r)
                : (this._debug(
                    "#getSession()",
                    "session from storage is not valid",
                  ),
                  await this._removeSession())),
            !e)
          )
            return { data: { session: null }, error: null };
          let n = e.expires_at
            ? e.expires_at * 1e3 - Date.now() < ze.EXPIRY_MARGIN_MS
            : !1;
          if (
            (this._debug(
              "#__loadSession()",
              `session has${n ? "" : " not"} expired`,
              "expires_at",
              e.expires_at,
            ),
            !n)
          ) {
            if (this.userStorage) {
              let i = await (0, X.getItemAsync)(
                this.userStorage,
                this.storageKey + "-user",
              );
              i?.user
                ? (e.user = i.user)
                : (e.user = (0, X.userNotAvailableProxy)());
            }
            if (
              this.storage.isServer &&
              e.user &&
              !e.user.__isUserNotAvailableProxy
            ) {
              let i = { value: this.suppressGetSessionWarning };
              ((e.user = (0, X.insecureUserWarningProxy)(e.user, i)),
                i.value && (this.suppressGetSessionWarning = !0));
            }
            return { data: { session: e }, error: null };
          }
          let { data: s, error: o } = await this._callRefreshToken(
            e.refresh_token,
          );
          return o
            ? this._returnResult({ data: { session: null }, error: o })
            : this._returnResult({ data: { session: s }, error: null });
        } finally {
          this._debug("#__loadSession()", "end");
        }
      }
      async getUser(e) {
        if (e) return await this._getUser(e);
        await this.initializePromise;
        let r;
        return (
          this.lock != null
            ? (r = await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._getUser(),
              ))
            : (r = await this._getUser()),
          r.data.user && (this.suppressGetSessionWarning = !0),
          r
        );
      }
      async _getUser(e) {
        try {
          return e
            ? await (0, ie._request)(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: ie._userResponse,
              })
            : await this._useSession(async (r) => {
                var n, s, o;
                let { data: i, error: a } = r;
                if (a) throw a;
                return !(
                  !((n = i.session) === null || n === void 0) && n.access_token
                ) && !this.hasCustomAuthorizationHeader
                  ? {
                      data: { user: null },
                      error: new q.AuthSessionMissingError(),
                    }
                  : await (0, ie._request)(
                      this.fetch,
                      "GET",
                      `${this.url}/user`,
                      {
                        headers: this.headers,
                        jwt:
                          (o =
                            (s = i.session) === null || s === void 0
                              ? void 0
                              : s.access_token) !== null && o !== void 0
                            ? o
                            : void 0,
                        xform: ie._userResponse,
                      },
                    );
              });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return (
              (0, q.isAuthSessionMissingError)(r) &&
                (await this._removeSession(),
                await (0, X.removeItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                )),
              this._returnResult({ data: { user: null }, error: r })
            );
          throw r;
        }
      }
      async updateUser(e, r = {}) {
        return (
          await this.initializePromise,
          this.lock != null
            ? await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._updateUser(e, r),
              )
            : await this._updateUser(e, r)
        );
      }
      async _updateUser(e, r = {}) {
        try {
          return await this._useSession(async (n) => {
            let { data: s, error: o } = n;
            if (o) throw o;
            if (!s.session) throw new q.AuthSessionMissingError();
            let i = s.session,
              a = null,
              c = null;
            this.flowType === "pkce" &&
              e.email != null &&
              ([a, c] = await (0, X.getCodeChallengeAndMethod)(
                this.storage,
                this.storageKey,
              ));
            let { data: l, error: d } = await (0, ie._request)(
              this.fetch,
              "PUT",
              `${this.url}/user`,
              {
                headers: this.headers,
                redirectTo: r?.emailRedirectTo,
                body: Object.assign(Object.assign({}, e), {
                  code_challenge: a,
                  code_challenge_method: c,
                }),
                jwt: i.access_token,
                xform: ie._userResponse,
              },
            );
            if (d) throw d;
            return (
              (i.user = l.user),
              await this._saveSession(i),
              await this._notifyAllSubscribers("USER_UPDATED", i),
              this._returnResult({ data: { user: i.user }, error: null })
            );
          });
        } catch (n) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(n))
          )
            return this._returnResult({ data: { user: null }, error: n });
          throw n;
        }
      }
      async setSession(e) {
        return (
          await this.initializePromise,
          this.lock != null
            ? await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._setSession(e),
              )
            : await this._setSession(e)
        );
      }
      async _setSession(e) {
        try {
          if (!e.access_token || !e.refresh_token)
            throw new q.AuthSessionMissingError();
          let r = Date.now() / 1e3,
            n = r,
            s = !0,
            o = null,
            { payload: i } = (0, X.decodeJWT)(e.access_token);
          if ((i.exp && ((n = i.exp), (s = n <= r)), s)) {
            let { data: a, error: c } = await this._callRefreshToken(
              e.refresh_token,
            );
            if (c)
              return this._returnResult({
                data: { user: null, session: null },
                error: c,
              });
            if (!a) return { data: { user: null, session: null }, error: null };
            o = a;
          } else {
            let { data: a, error: c } = await this._getUser(e.access_token);
            if (c)
              return this._returnResult({
                data: { user: null, session: null },
                error: c,
              });
            ((o = {
              access_token: e.access_token,
              refresh_token: e.refresh_token,
              user: a.user,
              token_type: "bearer",
              expires_in: n - r,
              expires_at: n,
            }),
              await this._saveSession(o),
              await this._notifyAllSubscribers("SIGNED_IN", o));
          }
          return this._returnResult({
            data: { user: o.user, session: o },
            error: null,
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({
              data: { session: null, user: null },
              error: r,
            });
          throw r;
        }
      }
      async refreshSession(e) {
        return (
          await this.initializePromise,
          this.lock != null
            ? await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._refreshSession(e),
              )
            : await this._refreshSession(e)
        );
      }
      async _refreshSession(e) {
        try {
          return await this._useSession(async (r) => {
            var n;
            if (!e) {
              let { data: i, error: a } = r;
              if (a) throw a;
              e = (n = i.session) !== null && n !== void 0 ? n : void 0;
            }
            if (!e?.refresh_token) throw new q.AuthSessionMissingError();
            let { data: s, error: o } = await this._callRefreshToken(
              e.refresh_token,
            );
            return o
              ? this._returnResult({
                  data: { user: null, session: null },
                  error: o,
                })
              : s
                ? this._returnResult({
                    data: { user: s.user, session: s },
                    error: null,
                  })
                : this._returnResult({
                    data: { user: null, session: null },
                    error: null,
                  });
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({
              data: { user: null, session: null },
              error: r,
            });
          throw r;
        }
      }
      async _getSessionFromURL(e, r) {
        var n;
        try {
          if (!(0, X.isBrowser)())
            throw new q.AuthImplicitGrantRedirectError("No browser detected.");
          if (e.error || e.error_description || e.error_code)
            throw new q.AuthImplicitGrantRedirectError(
              e.error_description ||
                "Error in URL with unspecified error_description",
              {
                error: e.error || "unspecified_error",
                code: e.error_code || "unspecified_code",
              },
            );
          switch (r) {
            case "implicit":
              if (this.flowType === "pkce")
                throw new q.AuthPKCEGrantCodeExchangeError(
                  "Not a valid PKCE flow url.",
                );
              break;
            case "pkce":
              if (this.flowType === "implicit")
                throw new q.AuthImplicitGrantRedirectError(
                  "Not a valid implicit grant flow url.",
                );
              break;
            default:
          }
          if (r === "pkce") {
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", !0),
              !e.code)
            )
              throw new q.AuthPKCEGrantCodeExchangeError("No code detected.");
            let { data: S, error: D } = await this._exchangeCodeForSession(
              e.code,
            );
            if (D) throw D;
            let B = new URL(window.location.href);
            return (
              B.searchParams.delete("code"),
              window.history.replaceState(
                window.history.state,
                "",
                B.toString(),
              ),
              {
                data: {
                  session: S.session,
                  redirectType:
                    (n = S.redirectType) !== null && n !== void 0 ? n : null,
                },
                error: null,
              }
            );
          }
          let {
            provider_token: s,
            provider_refresh_token: o,
            access_token: i,
            refresh_token: a,
            expires_in: c,
            expires_at: l,
            token_type: d,
          } = e;
          if (!i || !c || !a || !d)
            throw new q.AuthImplicitGrantRedirectError(
              "No session defined in URL",
            );
          let u = Math.round(Date.now() / 1e3),
            f = parseInt(c),
            h = u + f;
          l && (h = parseInt(l));
          let p = h - u;
          p * 1e3 <= ze.AUTO_REFRESH_TICK_DURATION_MS &&
            console.warn(
              `@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${f}s`,
            );
          let g = h - f;
          u - g >= 120
            ? console.warn(
                "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                g,
                h,
                u,
              )
            : u - g < 0 &&
              console.warn(
                "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
                g,
                h,
                u,
              );
          let { data: y, error: w } = await this._getUser(i);
          if (w) throw w;
          let A = {
            provider_token: s,
            provider_refresh_token: o,
            access_token: i,
            expires_in: f,
            expires_at: h,
            refresh_token: a,
            token_type: d,
            user: y.user,
          };
          return (
            (window.location.hash = ""),
            this._debug(
              "#_getSessionFromURL()",
              "clearing window.location.hash",
            ),
            this._returnResult({
              data: { session: A, redirectType: e.type },
              error: null,
            })
          );
        } catch (s) {
          if ((0, q.isAuthError)(s))
            return this._returnResult({
              data: { session: null, redirectType: null },
              error: s,
            });
          throw s;
        }
      }
      _isImplicitGrantCallback(e) {
        return typeof this.detectSessionInUrl == "function"
          ? this.detectSessionInUrl(new URL(window.location.href), e)
          : !!(
              e.access_token ||
              e.error ||
              e.error_description ||
              e.error_code
            );
      }
      async _isPKCECallback(e) {
        let r = await (0, X.getItemAsync)(
          this.storage,
          `${this.storageKey}-code-verifier`,
        );
        return !!(e.code && r);
      }
      async signOut(e = { scope: "global" }) {
        return (
          await this.initializePromise,
          this.lock != null
            ? await this._acquireLock(
                this.lockAcquireTimeout,
                async () => await this._signOut(e),
              )
            : await this._signOut(e)
        );
      }
      async _signOut({ scope: e } = { scope: "global" }) {
        return await this._useSession(async (r) => {
          var n;
          let { data: s, error: o } = r;
          if (o && !(0, q.isAuthSessionMissingError)(o))
            return this._returnResult({ error: o });
          let i =
            (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
          if (i) {
            let { error: a } = await this.admin.signOut(i, e);
            if (
              a &&
              !(
                ((0, q.isAuthApiError)(a) &&
                  (a.status === 404 || a.status === 401 || a.status === 403)) ||
                (0, q.isAuthSessionMissingError)(a)
              )
            )
              return this._returnResult({ error: a });
          }
          return (
            e !== "others" &&
              (await this._removeSession(),
              await (0, X.removeItemAsync)(
                this.storage,
                `${this.storageKey}-code-verifier`,
              )),
            this._returnResult({ error: null })
          );
        });
      }
      onAuthStateChange(e) {
        let r = (0, X.generateCallbackId)(),
          n = {
            id: r,
            callback: e,
            unsubscribe: () => {
              (this._debug(
                "#unsubscribe()",
                "state change callback with id removed",
                r,
              ),
                this.stateChangeEmitters.delete(r));
            },
          };
        return (
          this._debug("#onAuthStateChange()", "registered callback with id", r),
          this.stateChangeEmitters.set(r, n),
          (async () => (
            await this.initializePromise,
            this.lock != null
              ? await this._acquireLock(this.lockAcquireTimeout, async () => {
                  this._emitInitialSession(r);
                })
              : await this._emitInitialSession(r)
          ))(),
          { data: { subscription: n } }
        );
      }
      async _emitInitialSession(e) {
        return await this._useSession(async (r) => {
          var n, s;
          try {
            let {
              data: { session: o },
              error: i,
            } = r;
            if (i) throw i;
            (await ((n = this.stateChangeEmitters.get(e)) === null ||
            n === void 0
              ? void 0
              : n.callback("INITIAL_SESSION", o)),
              this._debug("INITIAL_SESSION", "callback id", e, "session", o));
          } catch (o) {
            (await ((s = this.stateChangeEmitters.get(e)) === null ||
            s === void 0
              ? void 0
              : s.callback("INITIAL_SESSION", null)),
              this._debug("INITIAL_SESSION", "callback id", e, "error", o),
              (0, q.isAuthSessionMissingError)(o)
                ? console.warn(o)
                : console.error(o));
          }
        });
      }
      async resetPasswordForEmail(e, r = {}) {
        let n = null,
          s = null;
        this.flowType === "pkce" &&
          ([n, s] = await (0, X.getCodeChallengeAndMethod)(
            this.storage,
            this.storageKey,
            !0,
          ));
        try {
          return await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/recover`,
            {
              body: {
                email: e,
                code_challenge: n,
                code_challenge_method: s,
                gotrue_meta_security: { captcha_token: r.captchaToken },
              },
              headers: this.headers,
              redirectTo: r.redirectTo,
            },
          );
        } catch (o) {
          if (
            (await (0, X.removeItemAsync)(
              this.storage,
              `${this.storageKey}-code-verifier`,
            ),
            (0, q.isAuthError)(o))
          )
            return this._returnResult({ data: null, error: o });
          throw o;
        }
      }
      async getUserIdentities() {
        var e;
        try {
          let { data: r, error: n } = await this.getUser();
          if (n) throw n;
          return this._returnResult({
            data: {
              identities:
                (e = r.user.identities) !== null && e !== void 0 ? e : [],
            },
            error: null,
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async linkIdentity(e) {
        return "token" in e
          ? this.linkIdentityIdToken(e)
          : this.linkIdentityOAuth(e);
      }
      async linkIdentityOAuth(e) {
        var r;
        try {
          let { data: n, error: s } = await this._useSession(async (o) => {
            var i, a, c, l, d;
            let { data: u, error: f } = o;
            if (f) throw f;
            let h = await this._getUrlForProvider(
              `${this.url}/user/identities/authorize`,
              e.provider,
              {
                redirectTo:
                  (i = e.options) === null || i === void 0
                    ? void 0
                    : i.redirectTo,
                scopes:
                  (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
                queryParams:
                  (c = e.options) === null || c === void 0
                    ? void 0
                    : c.queryParams,
                skipBrowserRedirect: !0,
              },
            );
            return await (0, ie._request)(this.fetch, "GET", h, {
              headers: this.headers,
              jwt:
                (d =
                  (l = u.session) === null || l === void 0
                    ? void 0
                    : l.access_token) !== null && d !== void 0
                  ? d
                  : void 0,
            });
          });
          if (s) throw s;
          return (
            (0, X.isBrowser)() &&
              !(
                !((r = e.options) === null || r === void 0) &&
                r.skipBrowserRedirect
              ) &&
              window.location.assign(n?.url),
            this._returnResult({
              data: { provider: e.provider, url: n?.url },
              error: null,
            })
          );
        } catch (n) {
          if ((0, q.isAuthError)(n))
            return this._returnResult({
              data: { provider: e.provider, url: null },
              error: n,
            });
          throw n;
        }
      }
      async linkIdentityIdToken(e) {
        return await this._useSession(async (r) => {
          var n;
          try {
            let {
              error: s,
              data: { session: o },
            } = r;
            if (s) throw s;
            let {
                options: i,
                provider: a,
                token: c,
                access_token: l,
                nonce: d,
              } = e,
              u = await (0, ie._request)(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  jwt:
                    (n = o?.access_token) !== null && n !== void 0 ? n : void 0,
                  body: {
                    provider: a,
                    id_token: c,
                    access_token: l,
                    nonce: d,
                    link_identity: !0,
                    gotrue_meta_security: { captcha_token: i?.captchaToken },
                  },
                  xform: ie._sessionResponse,
                },
              ),
              { data: f, error: h } = u;
            return h
              ? this._returnResult({
                  data: { user: null, session: null },
                  error: h,
                })
              : !f || !f.session || !f.user
                ? this._returnResult({
                    data: { user: null, session: null },
                    error: new q.AuthInvalidTokenResponseError(),
                  })
                : (f.session &&
                    (await this._saveSession(f.session),
                    await this._notifyAllSubscribers(
                      "USER_UPDATED",
                      f.session,
                    )),
                  this._returnResult({ data: f, error: h }));
          } catch (s) {
            if (
              (await (0, X.removeItemAsync)(
                this.storage,
                `${this.storageKey}-code-verifier`,
              ),
              (0, q.isAuthError)(s))
            )
              return this._returnResult({
                data: { user: null, session: null },
                error: s,
              });
            throw s;
          }
        });
      }
      async unlinkIdentity(e) {
        try {
          return await this._useSession(async (r) => {
            var n, s;
            let { data: o, error: i } = r;
            if (i) throw i;
            return await (0, ie._request)(
              this.fetch,
              "DELETE",
              `${this.url}/user/identities/${e.identity_id}`,
              {
                headers: this.headers,
                jwt:
                  (s =
                    (n = o.session) === null || n === void 0
                      ? void 0
                      : n.access_token) !== null && s !== void 0
                    ? s
                    : void 0,
              },
            );
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _refreshAccessToken(e) {
        let r = "#_refreshAccessToken()";
        this._debug(r, "begin");
        try {
          let n = Date.now();
          return await (0, X.retryable)(
            async (s) => (
              s > 0 && (await (0, X.sleep)(200 * Math.pow(2, s - 1))),
              this._debug(r, "refreshing attempt", s),
              await (0, ie._request)(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=refresh_token`,
                {
                  body: { refresh_token: e },
                  headers: this.headers,
                  xform: ie._sessionResponse,
                },
              )
            ),
            (s, o) => {
              let i = 200 * Math.pow(2, s);
              return (
                o &&
                (0, q.isAuthRetryableFetchError)(o) &&
                Date.now() + i - n < ze.AUTO_REFRESH_TICK_DURATION_MS
              );
            },
          );
        } catch (n) {
          if ((this._debug(r, "error", n), (0, q.isAuthError)(n)))
            return this._returnResult({
              data: { session: null, user: null },
              error: n,
            });
          throw n;
        } finally {
          this._debug(r, "end");
        }
      }
      _isValidSession(e) {
        return (
          typeof e == "object" &&
          e !== null &&
          "access_token" in e &&
          "refresh_token" in e &&
          "expires_at" in e
        );
      }
      async _handleProviderSignIn(e, r) {
        let n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
          redirectTo: r.redirectTo,
          scopes: r.scopes,
          queryParams: r.queryParams,
        });
        return (
          this._debug(
            "#_handleProviderSignIn()",
            "provider",
            e,
            "options",
            r,
            "url",
            n,
          ),
          (0, X.isBrowser)() &&
            !r.skipBrowserRedirect &&
            window.location.assign(n),
          { data: { provider: e, url: n }, error: null }
        );
      }
      async _recoverAndRefresh() {
        var e, r;
        let n = "#_recoverAndRefresh()";
        this._debug(n, "begin");
        try {
          let s = await (0, X.getItemAsync)(this.storage, this.storageKey);
          if (s && this.userStorage) {
            let i = await (0, X.getItemAsync)(
              this.userStorage,
              this.storageKey + "-user",
            );
            (!this.storage.isServer &&
              Object.is(this.storage, this.userStorage) &&
              !i &&
              ((i = { user: s.user }),
              await (0, X.setItemAsync)(
                this.userStorage,
                this.storageKey + "-user",
                i,
              )),
              (s.user =
                (e = i?.user) !== null && e !== void 0
                  ? e
                  : (0, X.userNotAvailableProxy)()));
          } else if (s && !s.user && !s.user) {
            let i = await (0, X.getItemAsync)(
              this.storage,
              this.storageKey + "-user",
            );
            i && i?.user
              ? ((s.user = i.user),
                await (0, X.removeItemAsync)(
                  this.storage,
                  this.storageKey + "-user",
                ),
                await (0, X.setItemAsync)(this.storage, this.storageKey, s))
              : (s.user = (0, X.userNotAvailableProxy)());
          }
          if (
            (this._debug(n, "session from storage", s),
            !this._isValidSession(s))
          ) {
            (this._debug(n, "session is not valid"),
              s !== null && (await this._removeSession()));
            return;
          }
          let o =
            ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
              Date.now() <
            ze.EXPIRY_MARGIN_MS;
          if (
            (this._debug(
              n,
              `session has${o ? "" : " not"} expired with margin of ${ze.EXPIRY_MARGIN_MS}s`,
            ),
            o)
          ) {
            if (this.autoRefreshToken && s.refresh_token) {
              let { error: i } = await this._callRefreshToken(s.refresh_token);
              i &&
                ((0, q.isAuthRefreshDiscardedError)(i)
                  ? this._debug(n, "refresh discarded by commit guard", i)
                  : (this._debug(n, "refresh failed", i),
                    (0, q.isAuthRetryableFetchError)(i) ||
                      (this._debug(
                        n,
                        "refresh failed with a non-retryable error, removing the session",
                        i,
                      ),
                      await this._removeSession())));
            }
          } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
            try {
              let { data: i, error: a } = await this._getUser(s.access_token);
              !a && i?.user
                ? ((s.user = i.user),
                  await this._saveSession(s),
                  await this._notifyAllSubscribers("SIGNED_IN", s))
                : this._debug(
                    n,
                    "could not get user data, skipping SIGNED_IN notification",
                  );
            } catch (i) {
              (console.error("Error getting user data:", i),
                this._debug(
                  n,
                  "error getting user data, skipping SIGNED_IN notification",
                  i,
                ));
            }
          else await this._notifyAllSubscribers("SIGNED_IN", s);
        } catch (s) {
          (this._debug(n, "error", s), console.error(s));
          return;
        } finally {
          this._debug(n, "end");
        }
      }
      async _callRefreshToken(e) {
        var r, n;
        if (!e) throw new q.AuthSessionMissingError();
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        let s = "#_callRefreshToken()";
        this._debug(s, "begin");
        try {
          this.refreshingDeferred = new X.Deferred();
          let o = await (0, X.getItemAsync)(this.storage, this.storageKey),
            { data: i, error: a } = await this._refreshAccessToken(e);
          if (a) throw a;
          if (!i.session) throw new q.AuthSessionMissingError();
          let c = await (0, X.getItemAsync)(this.storage, this.storageKey);
          if (
            o !== null &&
            (c === null || c.refresh_token !== o.refresh_token)
          ) {
            this._debug(
              s,
              "commit guard: storage changed since refresh started, discarding rotated tokens",
              { startedWith: "present", nowHolds: c ? "replaced" : "cleared" },
            );
            let f = { data: null, error: new q.AuthRefreshDiscardedError() };
            return (this.refreshingDeferred.resolve(f), f);
          }
          let d = this._sessionRemovalEpoch;
          if (
            (await this._saveSession(i.session),
            this._sessionRemovalEpoch !== d)
          ) {
            (this._debug(
              s,
              "commit guard (post-save): _removeSession ran during _saveSession, undoing write",
            ),
              await (0, X.removeItemAsync)(this.storage, this.storageKey),
              this.userStorage &&
                (await (0, X.removeItemAsync)(
                  this.userStorage,
                  this.storageKey + "-user",
                )));
            let f = { data: null, error: new q.AuthRefreshDiscardedError() };
            return (this.refreshingDeferred.resolve(f), f);
          }
          await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
          let u = { data: i.session, error: null };
          return (this.refreshingDeferred.resolve(u), u);
        } catch (o) {
          if ((this._debug(s, "error", o), (0, q.isAuthError)(o))) {
            let i = { data: null, error: o };
            return (
              (0, q.isAuthRetryableFetchError)(o) ||
                (await this._removeSession()),
              (r = this.refreshingDeferred) === null ||
                r === void 0 ||
                r.resolve(i),
              i
            );
          }
          throw (
            (n = this.refreshingDeferred) === null ||
              n === void 0 ||
              n.reject(o),
            o
          );
        } finally {
          ((this.refreshingDeferred = null), this._debug(s, "end"));
        }
      }
      async _notifyAllSubscribers(e, r, n = !0) {
        let s = `#_notifyAllSubscribers(${e})`;
        this._debug(s, "begin", r, `broadcast = ${n}`);
        try {
          this.broadcastChannel &&
            n &&
            this.broadcastChannel.postMessage({ event: e, session: r });
          let o = [],
            i = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
              try {
                await a.callback(e, r);
              } catch (c) {
                o.push(c);
              }
            });
          if ((await Promise.all(i), o.length > 0)) {
            for (let a = 0; a < o.length; a += 1) console.error(o[a]);
            throw o[0];
          }
        } finally {
          this._debug(s, "end");
        }
      }
      async _saveSession(e) {
        (this._debug("#_saveSession()", e),
          (this.suppressGetSessionWarning = !0),
          await (0, X.removeItemAsync)(
            this.storage,
            `${this.storageKey}-code-verifier`,
          ));
        let r = Object.assign({}, e),
          n = r.user && r.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
          !n &&
            r.user &&
            (await (0, X.setItemAsync)(
              this.userStorage,
              this.storageKey + "-user",
              { user: r.user },
            ));
          let s = Object.assign({}, r);
          delete s.user;
          let o = (0, X.deepClone)(s);
          await (0, X.setItemAsync)(this.storage, this.storageKey, o);
        } else {
          let s = (0, X.deepClone)(r);
          await (0, X.setItemAsync)(this.storage, this.storageKey, s);
        }
      }
      async _removeSession() {
        ((this._sessionRemovalEpoch += 1),
          this._debug("#_removeSession()"),
          (this.suppressGetSessionWarning = !1),
          await (0, X.removeItemAsync)(this.storage, this.storageKey),
          await (0, X.removeItemAsync)(
            this.storage,
            this.storageKey + "-code-verifier",
          ),
          await (0, X.removeItemAsync)(this.storage, this.storageKey + "-user"),
          this.userStorage &&
            (await (0, X.removeItemAsync)(
              this.userStorage,
              this.storageKey + "-user",
            )),
          await this._notifyAllSubscribers("SIGNED_OUT", null));
      }
      _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        let e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
          e &&
            (0, X.isBrowser)() &&
            window?.removeEventListener &&
            window.removeEventListener("visibilitychange", e);
        } catch (r) {
          console.error("removing visibilitychange callback failed", r);
        }
      }
      async _startAutoRefresh() {
        (await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()"));
        let e = setInterval(
          () => this._autoRefreshTokenTick(),
          ze.AUTO_REFRESH_TICK_DURATION_MS,
        );
        ((this.autoRefreshTicker = e),
          e && typeof e == "object" && typeof e.unref == "function"
            ? e.unref()
            : typeof Deno < "u" &&
              typeof Deno.unrefTimer == "function" &&
              Deno.unrefTimer(e));
        let r = setTimeout(async () => {
          (await this.initializePromise, await this._autoRefreshTokenTick());
        }, 0);
        ((this.autoRefreshTickTimeout = r),
          r && typeof r == "object" && typeof r.unref == "function"
            ? r.unref()
            : typeof Deno < "u" &&
              typeof Deno.unrefTimer == "function" &&
              Deno.unrefTimer(r));
      }
      async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        let e = this.autoRefreshTicker;
        ((this.autoRefreshTicker = null), e && clearInterval(e));
        let r = this.autoRefreshTickTimeout;
        ((this.autoRefreshTickTimeout = null), r && clearTimeout(r));
      }
      async startAutoRefresh() {
        (this._removeVisibilityChangedCallback(),
          await this._startAutoRefresh());
      }
      async stopAutoRefresh() {
        (this._removeVisibilityChangedCallback(),
          await this._stopAutoRefresh());
      }
      async dispose() {
        var e;
        (this._removeVisibilityChangedCallback(),
          await this._stopAutoRefresh(),
          (e = this.broadcastChannel) === null || e === void 0 || e.close(),
          (this.broadcastChannel = null),
          this.stateChangeEmitters.clear());
      }
      async _autoRefreshTokenTick() {
        if (
          (this._debug("#_autoRefreshTokenTick()", "begin"), this.lock != null)
        ) {
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (r) => {
                    let {
                      data: { session: n },
                    } = r;
                    if (!n || !n.refresh_token || !n.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let s = Math.floor(
                      (n.expires_at * 1e3 - e) /
                        ze.AUTO_REFRESH_TICK_DURATION_MS,
                    );
                    (this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${s} ticks, a tick lasts ${ze.AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${ze.AUTO_REFRESH_TICK_THRESHOLD} ticks`,
                    ),
                      s <= ze.AUTO_REFRESH_TICK_THRESHOLD &&
                        (await this._callRefreshToken(n.refresh_token)));
                  });
                } catch (r) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    r,
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e instanceof ew.LockAcquireTimeoutError)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
          return;
        }
        if (this.refreshingDeferred !== null) {
          this._debug(
            "#_autoRefreshTokenTick()",
            "refresh already in flight, skipping",
          );
          return;
        }
        try {
          let e = Date.now();
          try {
            await this._useSession(async (r) => {
              let {
                data: { session: n },
              } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              let s = Math.floor(
                (n.expires_at * 1e3 - e) / ze.AUTO_REFRESH_TICK_DURATION_MS,
              );
              (this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${ze.AUTO_REFRESH_TICK_DURATION_MS}ms, refresh threshold is ${ze.AUTO_REFRESH_TICK_THRESHOLD} ticks`,
              ),
                s <= ze.AUTO_REFRESH_TICK_THRESHOLD &&
                  (await this._callRefreshToken(n.refresh_token)));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r,
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      }
      async _handleVisibilityChange() {
        if (
          (this._debug("#_handleVisibilityChange()"),
          !(0, X.isBrowser)() || !window?.addEventListener)
        )
          return (this.autoRefreshToken && this.startAutoRefresh(), !1);
        try {
          ((this.visibilityChangedCallback = async () => {
            try {
              await this._onVisibilityChanged(!1);
            } catch (e) {
              this._debug("#visibilityChangedCallback", "error", e);
            }
          }),
            window?.addEventListener(
              "visibilitychange",
              this.visibilityChangedCallback,
            ),
            await this._onVisibilityChanged(!0));
        } catch (e) {
          console.error("_handleVisibilityChange", e);
        }
      }
      async _onVisibilityChanged(e) {
        let r = `#_onVisibilityChanged(${e})`;
        if (
          (this._debug(r, "visibilityState", document.visibilityState),
          document.visibilityState === "visible")
        ) {
          if ((this.autoRefreshToken && this._startAutoRefresh(), !e))
            if ((await this.initializePromise, this.lock != null))
              await this._acquireLock(this.lockAcquireTimeout, async () => {
                if (document.visibilityState !== "visible") {
                  this._debug(
                    r,
                    "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
                  );
                  return;
                }
                await this._recoverAndRefresh();
              });
            else {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "visibilityState is no longer visible, skipping recovery",
                );
                return;
              }
              await this._recoverAndRefresh();
            }
        } else
          document.visibilityState === "hidden" &&
            this.autoRefreshToken &&
            this._stopAutoRefresh();
      }
      async _getUrlForProvider(e, r, n) {
        let s = [`provider=${encodeURIComponent(r)}`];
        if (
          (n?.redirectTo &&
            s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
          n?.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
          this.flowType === "pkce")
        ) {
          let [o, i] = await (0, X.getCodeChallengeAndMethod)(
              this.storage,
              this.storageKey,
            ),
            a = new URLSearchParams({
              code_challenge: `${encodeURIComponent(o)}`,
              code_challenge_method: `${encodeURIComponent(i)}`,
            });
          s.push(a.toString());
        }
        if (n?.queryParams) {
          let o = new URLSearchParams(n.queryParams);
          s.push(o.toString());
        }
        return (
          n?.skipBrowserRedirect &&
            s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
          `${e}?${s.join("&")}`
        );
      }
      async _unenroll(e) {
        try {
          return await this._useSession(async (r) => {
            var n;
            let { data: s, error: o } = r;
            return o
              ? this._returnResult({ data: null, error: o })
              : await (0, ie._request)(
                  this.fetch,
                  "DELETE",
                  `${this.url}/factors/${e.factorId}`,
                  {
                    headers: this.headers,
                    jwt:
                      (n = s?.session) === null || n === void 0
                        ? void 0
                        : n.access_token,
                  },
                );
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _enroll(e) {
        try {
          return await this._useSession(async (r) => {
            var n, s;
            let { data: o, error: i } = r;
            if (i) return this._returnResult({ data: null, error: i });
            let a = Object.assign(
                { friendly_name: e.friendlyName, factor_type: e.factorType },
                e.factorType === "phone"
                  ? { phone: e.phone }
                  : e.factorType === "totp"
                    ? { issuer: e.issuer }
                    : {},
              ),
              { data: c, error: l } = await (0, ie._request)(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: a,
                  headers: this.headers,
                  jwt:
                    (n = o?.session) === null || n === void 0
                      ? void 0
                      : n.access_token,
                },
              );
            return l
              ? this._returnResult({ data: null, error: l })
              : (e.factorType === "totp" &&
                  c.type === "totp" &&
                  !((s = c?.totp) === null || s === void 0) &&
                  s.qr_code &&
                  (c.totp.qr_code = `data:image/svg+xml;utf-8,${c.totp.qr_code}`),
                this._returnResult({ data: c, error: null }));
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _verify(e) {
        let r = async () => {
          try {
            return await this._useSession(async (n) => {
              var s;
              let { data: o, error: i } = n;
              if (i) return this._returnResult({ data: null, error: i });
              let a = Object.assign(
                  { challenge_id: e.challengeId },
                  "webauthn" in e
                    ? {
                        webauthn: Object.assign(Object.assign({}, e.webauthn), {
                          credential_response:
                            e.webauthn.type === "create"
                              ? (0, st.serializeCredentialCreationResponse)(
                                  e.webauthn.credential_response,
                                )
                              : (0, st.serializeCredentialRequestResponse)(
                                  e.webauthn.credential_response,
                                ),
                        }),
                      }
                    : { code: e.code },
                ),
                { data: c, error: l } = await (0, ie._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: a,
                    headers: this.headers,
                    jwt:
                      (s = o?.session) === null || s === void 0
                        ? void 0
                        : s.access_token,
                  },
                );
              return l
                ? this._returnResult({ data: null, error: l })
                : (await this._saveSession(
                    Object.assign(
                      {
                        expires_at: Math.round(Date.now() / 1e3) + c.expires_in,
                      },
                      c,
                    ),
                  ),
                  await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", c),
                  this._returnResult({ data: c, error: l }));
            });
          } catch (n) {
            if ((0, q.isAuthError)(n))
              return this._returnResult({ data: null, error: n });
            throw n;
          }
        };
        return this.lock != null
          ? this._acquireLock(this.lockAcquireTimeout, r)
          : r();
      }
      async _challenge(e) {
        let r = async () => {
          try {
            return await this._useSession(async (n) => {
              var s;
              let { data: o, error: i } = n;
              if (i) return this._returnResult({ data: null, error: i });
              let a = await (0, ie._request)(
                this.fetch,
                "POST",
                `${this.url}/factors/${e.factorId}/challenge`,
                {
                  body: e,
                  headers: this.headers,
                  jwt:
                    (s = o?.session) === null || s === void 0
                      ? void 0
                      : s.access_token,
                },
              );
              if (a.error) return a;
              let { data: c } = a;
              if (c.type !== "webauthn") return { data: c, error: null };
              switch (c.webauthn.type) {
                case "create":
                  return {
                    data: Object.assign(Object.assign({}, c), {
                      webauthn: Object.assign(Object.assign({}, c.webauthn), {
                        credential_options: Object.assign(
                          Object.assign({}, c.webauthn.credential_options),
                          {
                            publicKey: (0,
                            st.deserializeCredentialCreationOptions)(
                              c.webauthn.credential_options.publicKey,
                            ),
                          },
                        ),
                      }),
                    }),
                    error: null,
                  };
                case "request":
                  return {
                    data: Object.assign(Object.assign({}, c), {
                      webauthn: Object.assign(Object.assign({}, c.webauthn), {
                        credential_options: Object.assign(
                          Object.assign({}, c.webauthn.credential_options),
                          {
                            publicKey: (0,
                            st.deserializeCredentialRequestOptions)(
                              c.webauthn.credential_options.publicKey,
                            ),
                          },
                        ),
                      }),
                    }),
                    error: null,
                  };
              }
            });
          } catch (n) {
            if ((0, q.isAuthError)(n))
              return this._returnResult({ data: null, error: n });
            throw n;
          }
        };
        return this.lock != null
          ? this._acquireLock(this.lockAcquireTimeout, r)
          : r();
      }
      async _challengeAndVerify(e) {
        let { data: r, error: n } = await this._challenge({
          factorId: e.factorId,
        });
        return n
          ? this._returnResult({ data: null, error: n })
          : await this._verify({
              factorId: e.factorId,
              challengeId: r.id,
              code: e.code,
            });
      }
      async _listFactors() {
        var e;
        let {
          data: { user: r },
          error: n,
        } = await this.getUser();
        if (n) return { data: null, error: n };
        let s = { all: [], phone: [], totp: [], webauthn: [] };
        for (let o of (e = r?.factors) !== null && e !== void 0 ? e : [])
          (s.all.push(o), o.status === "verified" && s[o.factor_type].push(o));
        return { data: s, error: null };
      }
      async _getAuthenticatorAssuranceLevel(e) {
        var r, n, s, o;
        if (e)
          try {
            let { payload: h } = (0, X.decodeJWT)(e),
              p = null;
            h.aal && (p = h.aal);
            let g = p,
              {
                data: { user: y },
                error: w,
              } = await this.getUser(e);
            if (w) return this._returnResult({ data: null, error: w });
            ((n =
              (r = y?.factors) === null || r === void 0
                ? void 0
                : r.filter((D) => D.status === "verified")) !== null &&
            n !== void 0
              ? n
              : []
            ).length > 0 && (g = "aal2");
            let S = h.amr || [];
            return {
              data: {
                currentLevel: p,
                nextLevel: g,
                currentAuthenticationMethods: S,
              },
              error: null,
            };
          } catch (h) {
            if ((0, q.isAuthError)(h))
              return this._returnResult({ data: null, error: h });
            throw h;
          }
        let {
          data: { session: i },
          error: a,
        } = await this.getSession();
        if (a) return this._returnResult({ data: null, error: a });
        if (!i)
          return {
            data: {
              currentLevel: null,
              nextLevel: null,
              currentAuthenticationMethods: [],
            },
            error: null,
          };
        let { payload: c } = (0, X.decodeJWT)(i.access_token),
          l = null;
        c.aal && (l = c.aal);
        let d = l;
        ((o =
          (s = i.user.factors) === null || s === void 0
            ? void 0
            : s.filter((h) => h.status === "verified")) !== null && o !== void 0
          ? o
          : []
        ).length > 0 && (d = "aal2");
        let f = c.amr || [];
        return {
          data: {
            currentLevel: l,
            nextLevel: d,
            currentAuthenticationMethods: f,
          },
          error: null,
        };
      }
      async _getAuthorizationDetails(e) {
        try {
          return await this._useSession(async (r) => {
            let {
              data: { session: n },
              error: s,
            } = r;
            return s
              ? this._returnResult({ data: null, error: s })
              : n
                ? await (0, ie._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/oauth/authorizations/${e}`,
                    {
                      headers: this.headers,
                      jwt: n.access_token,
                      xform: (o) => ({ data: o, error: null }),
                    },
                  )
                : this._returnResult({
                    data: null,
                    error: new q.AuthSessionMissingError(),
                  });
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _approveAuthorization(e, r) {
        try {
          return await this._useSession(async (n) => {
            let {
              data: { session: s },
              error: o,
            } = n;
            if (o) return this._returnResult({ data: null, error: o });
            if (!s)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let i = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/oauth/authorizations/${e}/consent`,
              {
                headers: this.headers,
                jwt: s.access_token,
                body: { action: "approve" },
                xform: (a) => ({ data: a, error: null }),
              },
            );
            return (
              i.data &&
                i.data.redirect_url &&
                (0, X.isBrowser)() &&
                !r?.skipBrowserRedirect &&
                window.location.assign(i.data.redirect_url),
              i
            );
          });
        } catch (n) {
          if ((0, q.isAuthError)(n))
            return this._returnResult({ data: null, error: n });
          throw n;
        }
      }
      async _denyAuthorization(e, r) {
        try {
          return await this._useSession(async (n) => {
            let {
              data: { session: s },
              error: o,
            } = n;
            if (o) return this._returnResult({ data: null, error: o });
            if (!s)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let i = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/oauth/authorizations/${e}/consent`,
              {
                headers: this.headers,
                jwt: s.access_token,
                body: { action: "deny" },
                xform: (a) => ({ data: a, error: null }),
              },
            );
            return (
              i.data &&
                i.data.redirect_url &&
                (0, X.isBrowser)() &&
                !r?.skipBrowserRedirect &&
                window.location.assign(i.data.redirect_url),
              i
            );
          });
        } catch (n) {
          if ((0, q.isAuthError)(n))
            return this._returnResult({ data: null, error: n });
          throw n;
        }
      }
      async _listOAuthGrants() {
        try {
          return await this._useSession(async (e) => {
            let {
              data: { session: r },
              error: n,
            } = e;
            return n
              ? this._returnResult({ data: null, error: n })
              : r
                ? await (0, ie._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/user/oauth/grants`,
                    {
                      headers: this.headers,
                      jwt: r.access_token,
                      xform: (s) => ({ data: s, error: null }),
                    },
                  )
                : this._returnResult({
                    data: null,
                    error: new q.AuthSessionMissingError(),
                  });
          });
        } catch (e) {
          if ((0, q.isAuthError)(e))
            return this._returnResult({ data: null, error: e });
          throw e;
        }
      }
      async _revokeOAuthGrant(e) {
        try {
          return await this._useSession(async (r) => {
            let {
              data: { session: n },
              error: s,
            } = r;
            return s
              ? this._returnResult({ data: null, error: s })
              : n
                ? (await (0, ie._request)(
                    this.fetch,
                    "DELETE",
                    `${this.url}/user/oauth/grants`,
                    {
                      headers: this.headers,
                      jwt: n.access_token,
                      query: { client_id: e.clientId },
                      noResolveJson: !0,
                    },
                  ),
                  { data: {}, error: null })
                : this._returnResult({
                    data: null,
                    error: new q.AuthSessionMissingError(),
                  });
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async fetchJwk(e, r = { keys: [] }) {
        let n = r.keys.find((a) => a.kid === e);
        if (n) return n;
        let s = Date.now();
        if (
          ((n = this.jwks.keys.find((a) => a.kid === e)),
          n && this.jwks_cached_at + ze.JWKS_TTL > s)
        )
          return n;
        let { data: o, error: i } = await (0, ie._request)(
          this.fetch,
          "GET",
          `${this.url}/.well-known/jwks.json`,
          { headers: this.headers },
        );
        if (i) throw i;
        return !o.keys ||
          o.keys.length === 0 ||
          ((this.jwks = o),
          (this.jwks_cached_at = s),
          (n = o.keys.find((a) => a.kid === e)),
          !n)
          ? null
          : n;
      }
      async getClaims(e, r = {}) {
        try {
          let n = e;
          if (!n) {
            let { data: h, error: p } = await this.getSession();
            if (p || !h.session)
              return this._returnResult({ data: null, error: p });
            n = h.session.access_token;
          }
          let {
            header: s,
            payload: o,
            signature: i,
            raw: { header: a, payload: c },
          } = (0, X.decodeJWT)(n);
          if (!r?.allowExpired)
            try {
              (0, X.validateExp)(o.exp);
            } catch (h) {
              throw new q.AuthInvalidJwtError(
                h instanceof Error ? h.message : "JWT validation failed",
              );
            }
          let l =
            !s.alg ||
            s.alg.startsWith("HS") ||
            !s.kid ||
            !("crypto" in globalThis && "subtle" in globalThis.crypto)
              ? null
              : await this.fetchJwk(
                  s.kid,
                  r?.keys ? { keys: r.keys } : r?.jwks,
                );
          if (!l) {
            let { error: h } = await this.getUser(n);
            if (h) throw h;
            return {
              data: { claims: o, header: s, signature: i },
              error: null,
            };
          }
          let d = (0, X.getAlgorithm)(s.alg),
            u = await crypto.subtle.importKey("jwk", l, d, !0, ["verify"]);
          if (
            !(await crypto.subtle.verify(
              d,
              u,
              i,
              (0, bd.stringToUint8Array)(`${a}.${c}`),
            ))
          )
            throw new q.AuthInvalidJwtError("Invalid JWT signature");
          return { data: { claims: o, header: s, signature: i }, error: null };
        } catch (n) {
          if ((0, q.isAuthError)(n))
            return this._returnResult({ data: null, error: n });
          throw n;
        }
      }
      async signInWithPasskey(e) {
        var r, n, s;
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          if (!(0, st.browserSupportsWebAuthn)())
            return this._returnResult({
              data: null,
              error: new q.AuthUnknownError(
                "Browser does not support WebAuthn",
                null,
              ),
            });
          let { data: o, error: i } = await this._startPasskeyAuthentication({
            options: {
              captchaToken:
                (r = e?.options) === null || r === void 0
                  ? void 0
                  : r.captchaToken,
            },
          });
          if (i || !o) return this._returnResult({ data: null, error: i });
          let a = (0, st.deserializeCredentialRequestOptions)(o.options),
            c =
              (s =
                (n = e?.options) === null || n === void 0
                  ? void 0
                  : n.signal) !== null && s !== void 0
                ? s
                : st.webAuthnAbortService.createNewAbortSignal(),
            { data: l, error: d } = await (0, st.getCredential)({
              publicKey: a,
              signal: c,
            });
          if (d || !l)
            return this._returnResult({
              data: null,
              error:
                d ?? new q.AuthUnknownError("WebAuthn ceremony failed", null),
            });
          let u = (0, st.serializeCredentialRequestResponse)(l);
          return this._verifyPasskeyAuthentication({
            challengeId: o.challenge_id,
            credential: u,
          });
        } catch (o) {
          if ((0, q.isAuthError)(o))
            return this._returnResult({ data: null, error: o });
          throw o;
        }
      }
      async registerPasskey(e) {
        var r, n;
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          if (!(0, st.browserSupportsWebAuthn)())
            return this._returnResult({
              data: null,
              error: new q.AuthUnknownError(
                "Browser does not support WebAuthn",
                null,
              ),
            });
          let { data: s, error: o } = await this._startPasskeyRegistration();
          if (o || !s) return this._returnResult({ data: null, error: o });
          let i = (0, st.deserializeCredentialCreationOptions)(s.options),
            a =
              (n =
                (r = e?.options) === null || r === void 0
                  ? void 0
                  : r.signal) !== null && n !== void 0
                ? n
                : st.webAuthnAbortService.createNewAbortSignal(),
            { data: c, error: l } = await (0, st.createCredential)({
              publicKey: i,
              signal: a,
            });
          if (l || !c)
            return this._returnResult({
              data: null,
              error:
                l ?? new q.AuthUnknownError("WebAuthn ceremony failed", null),
            });
          let d = (0, st.serializeCredentialCreationResponse)(c);
          return this._verifyPasskeyRegistration({
            challengeId: s.challenge_id,
            credential: d,
          });
        } catch (s) {
          if ((0, q.isAuthError)(s))
            return this._returnResult({ data: null, error: s });
          throw s;
        }
      }
      async _startPasskeyRegistration() {
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          return await this._useSession(async (e) => {
            let {
              data: { session: r },
              error: n,
            } = e;
            if (n) return this._returnResult({ data: null, error: n });
            if (!r)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let { data: s, error: o } = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/passkeys/registration/options`,
              { headers: this.headers, jwt: r.access_token, body: {} },
            );
            return o
              ? this._returnResult({ data: null, error: o })
              : this._returnResult({ data: s, error: null });
          });
        } catch (e) {
          if ((0, q.isAuthError)(e))
            return this._returnResult({ data: null, error: e });
          throw e;
        }
      }
      async _verifyPasskeyRegistration(e) {
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          return await this._useSession(async (r) => {
            let {
              data: { session: n },
              error: s,
            } = r;
            if (s) return this._returnResult({ data: null, error: s });
            if (!n)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let { data: o, error: i } = await (0, ie._request)(
              this.fetch,
              "POST",
              `${this.url}/passkeys/registration/verify`,
              {
                headers: this.headers,
                jwt: n.access_token,
                body: { challenge_id: e.challengeId, credential: e.credential },
              },
            );
            return i
              ? this._returnResult({ data: null, error: i })
              : this._returnResult({ data: o, error: null });
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _startPasskeyAuthentication(e) {
        var r;
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          let { data: n, error: s } = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/passkeys/authentication/options`,
            {
              headers: this.headers,
              body: {
                gotrue_meta_security: {
                  captcha_token:
                    (r = e?.options) === null || r === void 0
                      ? void 0
                      : r.captchaToken,
                },
              },
            },
          );
          return s
            ? this._returnResult({ data: null, error: s })
            : this._returnResult({ data: n, error: null });
        } catch (n) {
          if ((0, q.isAuthError)(n))
            return this._returnResult({ data: null, error: n });
          throw n;
        }
      }
      async _verifyPasskeyAuthentication(e) {
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          let { data: r, error: n } = await (0, ie._request)(
            this.fetch,
            "POST",
            `${this.url}/passkeys/authentication/verify`,
            {
              headers: this.headers,
              body: { challenge_id: e.challengeId, credential: e.credential },
              xform: ie._sessionResponse,
            },
          );
          return n
            ? this._returnResult({ data: null, error: n })
            : (r.session &&
                (await this._saveSession(r.session),
                await this._notifyAllSubscribers("SIGNED_IN", r.session)),
              this._returnResult({ data: r, error: null }));
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _listPasskeys() {
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          return await this._useSession(async (e) => {
            let {
              data: { session: r },
              error: n,
            } = e;
            if (n) return this._returnResult({ data: null, error: n });
            if (!r)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let { data: s, error: o } = await (0, ie._request)(
              this.fetch,
              "GET",
              `${this.url}/passkeys`,
              {
                headers: this.headers,
                jwt: r.access_token,
                xform: (i) => ({ data: i, error: null }),
              },
            );
            return o
              ? this._returnResult({ data: null, error: o })
              : this._returnResult({ data: s, error: null });
          });
        } catch (e) {
          if ((0, q.isAuthError)(e))
            return this._returnResult({ data: null, error: e });
          throw e;
        }
      }
      async _updatePasskey(e) {
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          return await this._useSession(async (r) => {
            let {
              data: { session: n },
              error: s,
            } = r;
            if (s) return this._returnResult({ data: null, error: s });
            if (!n)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let { data: o, error: i } = await (0, ie._request)(
              this.fetch,
              "PATCH",
              `${this.url}/passkeys/${e.passkeyId}`,
              {
                headers: this.headers,
                jwt: n.access_token,
                body: { friendly_name: e.friendlyName },
              },
            );
            return i
              ? this._returnResult({ data: null, error: i })
              : this._returnResult({ data: o, error: null });
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
      async _deletePasskey(e) {
        (0, X.assertPasskeyExperimentalEnabled)(this.experimental);
        try {
          return await this._useSession(async (r) => {
            let {
              data: { session: n },
              error: s,
            } = r;
            if (s) return this._returnResult({ data: null, error: s });
            if (!n)
              return this._returnResult({
                data: null,
                error: new q.AuthSessionMissingError(),
              });
            let { error: o } = await (0, ie._request)(
              this.fetch,
              "DELETE",
              `${this.url}/passkeys/${e.passkeyId}`,
              { headers: this.headers, jwt: n.access_token, noResolveJson: !0 },
            );
            return o
              ? this._returnResult({ data: null, error: o })
              : this._returnResult({ data: null, error: null });
          });
        } catch (r) {
          if ((0, q.isAuthError)(r))
            return this._returnResult({ data: null, error: r });
          throw r;
        }
      }
    };
  jo.nextInstanceID = {};
  Fa.default = jo;
});
var Sd = F((Ba) => {
  "use strict";
  Object.defineProperty(Ba, "__esModule", { value: !0 });
  var sw = (ut(), gt(lt)),
    ow = sw.__importDefault(Oo()),
    iw = ow.default;
  Ba.default = iw;
});
var kd = F((Ha) => {
  "use strict";
  Object.defineProperty(Ha, "__esModule", { value: !0 });
  var aw = (ut(), gt(lt)),
    cw = aw.__importDefault(qa()),
    lw = cw.default;
  Ha.default = lw;
});
var Ad = F((Fe) => {
  "use strict";
  Object.defineProperty(Fe, "__esModule", { value: !0 });
  Fe.processLock =
    Fe.lockInternals =
    Fe.NavigatorLockAcquireTimeoutError =
    Fe.navigatorLock =
    Fe.AuthClient =
    Fe.AuthAdminApi =
    Fe.GoTrueClient =
    Fe.GoTrueAdminApi =
      void 0;
  var Cn = (ut(), gt(lt)),
    uw = Cn.__importDefault(Oo());
  Fe.GoTrueAdminApi = uw.default;
  var dw = Cn.__importDefault(qa());
  Fe.GoTrueClient = dw.default;
  var hw = Cn.__importDefault(Sd());
  Fe.AuthAdminApi = hw.default;
  var fw = Cn.__importDefault(kd());
  Fe.AuthClient = fw.default;
  Cn.__exportStar(Ra(), Fe);
  Cn.__exportStar(Fr(), Fe);
  var Mo = La();
  Object.defineProperty(Fe, "navigatorLock", {
    enumerable: !0,
    get: function () {
      return Mo.navigatorLock;
    },
  });
  Object.defineProperty(Fe, "NavigatorLockAcquireTimeoutError", {
    enumerable: !0,
    get: function () {
      return Mo.NavigatorLockAcquireTimeoutError;
    },
  });
  Object.defineProperty(Fe, "lockInternals", {
    enumerable: !0,
    get: function () {
      return Mo.internals;
    },
  });
  Object.defineProperty(Fe, "processLock", {
    enumerable: !0,
    get: function () {
      return Mo.processLock;
    },
  });
});
var uh = F((ot) => {
  var Bo = Object.defineProperty,
    pw = Object.getOwnPropertyDescriptor,
    gw = Object.getOwnPropertyNames,
    Cd = Object.prototype.hasOwnProperty,
    mw = (t, e) => () => (t && (e = t((t = 0))), e),
    Rn = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
    yw = (t, e) => {
      let r = {};
      for (var n in t) Bo(r, n, { get: t[n], enumerable: !0 });
      return (e && Bo(r, Symbol.toStringTag, { value: "Module" }), r);
    },
    _w = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (var s = gw(e), o = 0, i = s.length, a; o < i; o++)
          ((a = s[o]),
            !Cd.call(t, a) &&
              a !== r &&
              Bo(t, a, {
                get: ((c) => e[c]).bind(null, a),
                enumerable: !(n = pw(e, a)) || n.enumerable,
              }));
      return t;
    },
    Ka = (t) =>
      Cd.call(t, "module.exports")
        ? t["module.exports"]
        : _w(Bo({}, "__esModule", { value: !0 }), t),
    On = cu(),
    Pd = yu(),
    Wa = Mu(),
    Rd = Zu(),
    Va = Ad(),
    vw = "2.108.1",
    Es = "",
    Ho;
  typeof Deno < "u"
    ? ((Es = "deno"),
      (Ho = (Do = Deno.version) === null || Do === void 0 ? void 0 : Do.deno))
    : typeof document < "u"
      ? (Es = "web")
      : typeof navigator < "u" && navigator.product === "ReactNative"
        ? (Es = "react-native")
        : ((Es = "node"),
          (Ho =
            typeof process < "u"
              ? (Uo = process.version) === null || Uo === void 0
                ? void 0
                : Uo.replace(/^v/, "")
              : void 0));
  var Do,
    Uo,
    Od = [`runtime=${Es}`];
  Ho && Od.push(`runtime-version=${Ho}`);
  var ww = { "X-Client-Info": `supabase-js/${vw}; ${Od.join("; ")}` },
    bw = { headers: ww },
    Sw = { schema: "public" },
    kw = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit",
    },
    Aw = {},
    Ew = { enabled: !1, respectSamplingDecision: !0 },
    Id = yw({
      __addDisposableResource: () => rh,
      __assign: () => Ts,
      __asyncDelegator: () => Gd,
      __asyncGenerator: () => zd,
      __asyncValues: () => Jd,
      __await: () => Pn,
      __awaiter: () => qd,
      __classPrivateFieldGet: () => Zd,
      __classPrivateFieldIn: () => th,
      __classPrivateFieldSet: () => eh,
      __createBinding: () => Cs,
      __decorate: () => Ld,
      __disposeResources: () => nh,
      __esDecorate: () => Md,
      __exportStar: () => Hd,
      __extends: () => xd,
      __generator: () => Bd,
      __importDefault: () => Qd,
      __importStar: () => Xd,
      __makeTemplateObject: () => Yd,
      __metadata: () => Fd,
      __param: () => jd,
      __propKey: () => Ud,
      __read: () => za,
      __rest: () => Nd,
      __rewriteRelativeImportExtension: () => sh,
      __runInitializers: () => Dd,
      __setFunctionName: () => $d,
      __spread: () => Wd,
      __spreadArray: () => Kd,
      __spreadArrays: () => Vd,
      __values: () => Wo,
      default: () => ah,
    });
  function xd(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null",
      );
    $o(t, e);
    function r() {
      this.constructor = t;
    }
    t.prototype =
      e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
  }
  function Nd(t, e) {
    var r = {};
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        e.indexOf(n) < 0 &&
        (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
        e.indexOf(n[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
          (r[n[s]] = t[n[s]]);
    return r;
  }
  function Ld(t, e, r, n) {
    var s = arguments.length,
      o =
        s < 3
          ? e
          : n === null
            ? (n = Object.getOwnPropertyDescriptor(e, r))
            : n,
      i;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      o = Reflect.decorate(t, e, r, n);
    else
      for (var a = t.length - 1; a >= 0; a--)
        (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
    return (s > 3 && o && Object.defineProperty(e, r, o), o);
  }
  function jd(t, e) {
    return function (r, n) {
      e(r, n, t);
    };
  }
  function Md(t, e, r, n, s, o) {
    function i(w) {
      if (w !== void 0 && typeof w != "function")
        throw new TypeError("Function expected");
      return w;
    }
    for (
      var a = n.kind,
        c = a === "getter" ? "get" : a === "setter" ? "set" : "value",
        l = !e && t ? (n.static ? t : t.prototype) : null,
        d = e || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
        u,
        f = !1,
        h = r.length - 1;
      h >= 0;
      h--
    ) {
      var p = {};
      for (var g in n) p[g] = g === "access" ? {} : n[g];
      for (var g in n.access) p.access[g] = n.access[g];
      p.addInitializer = function (w) {
        if (f)
          throw new TypeError(
            "Cannot add initializers after decoration has completed",
          );
        o.push(i(w || null));
      };
      var y = (0, r[h])(
        a === "accessor" ? { get: d.get, set: d.set } : d[c],
        p,
      );
      if (a === "accessor") {
        if (y === void 0) continue;
        if (y === null || typeof y != "object")
          throw new TypeError("Object expected");
        ((u = i(y.get)) && (d.get = u),
          (u = i(y.set)) && (d.set = u),
          (u = i(y.init)) && s.unshift(u));
      } else (u = i(y)) && (a === "field" ? s.unshift(u) : (d[c] = u));
    }
    (l && Object.defineProperty(l, n.name, d), (f = !0));
  }
  function Dd(t, e, r) {
    for (var n = arguments.length > 2, s = 0; s < e.length; s++)
      r = n ? e[s].call(t, r) : e[s].call(t);
    return n ? r : void 0;
  }
  function Ud(t) {
    return typeof t == "symbol" ? t : "".concat(t);
  }
  function $d(t, e, r) {
    return (
      typeof e == "symbol" &&
        (e = e.description ? "[".concat(e.description, "]") : ""),
      Object.defineProperty(t, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", e) : e,
      })
    );
  }
  function Fd(t, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
      return Reflect.metadata(t, e);
  }
  function qd(t, e, r, n) {
    function s(o) {
      return o instanceof r
        ? o
        : new r(function (i) {
            i(o);
          });
    }
    return new (r || (r = Promise))(function (o, i) {
      function a(d) {
        try {
          l(n.next(d));
        } catch (u) {
          i(u);
        }
      }
      function c(d) {
        try {
          l(n.throw(d));
        } catch (u) {
          i(u);
        }
      }
      function l(d) {
        d.done ? o(d.value) : s(d.value).then(a, c);
      }
      l((n = n.apply(t, e || [])).next());
    });
  }
  function Bd(t, e) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      n,
      s,
      o,
      i = Object.create(
        (typeof Iterator == "function" ? Iterator : Object).prototype,
      );
    return (
      (i.next = a(0)),
      (i.throw = a(1)),
      (i.return = a(2)),
      typeof Symbol == "function" &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function a(l) {
      return function (d) {
        return c([l, d]);
      };
    }
    function c(l) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; i && ((i = 0), l[0] && (r = 0)), r;)
        try {
          if (
            ((n = 1),
            s &&
              (o =
                l[0] & 2
                  ? s.return
                  : l[0]
                    ? s.throw || ((o = s.return) && o.call(s), 0)
                    : s.next) &&
              !(o = o.call(s, l[1])).done)
          )
            return o;
          switch (((s = 0), o && (l = [l[0] & 2, o.value]), l[0])) {
            case 0:
            case 1:
              o = l;
              break;
            case 4:
              return (r.label++, { value: l[1], done: !1 });
            case 5:
              (r.label++, (s = l[1]), (l = [0]));
              continue;
            case 7:
              ((l = r.ops.pop()), r.trys.pop());
              continue;
            default:
              if (
                ((o = r.trys),
                !(o = o.length > 0 && o[o.length - 1]) &&
                  (l[0] === 6 || l[0] === 2))
              ) {
                r = 0;
                continue;
              }
              if (l[0] === 3 && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                r.label = l[1];
                break;
              }
              if (l[0] === 6 && r.label < o[1]) {
                ((r.label = o[1]), (o = l));
                break;
              }
              if (o && r.label < o[2]) {
                ((r.label = o[2]), r.ops.push(l));
                break;
              }
              (o[2] && r.ops.pop(), r.trys.pop());
              continue;
          }
          l = e.call(t, r);
        } catch (d) {
          ((l = [6, d]), (s = 0));
        } finally {
          n = o = 0;
        }
      if (l[0] & 5) throw l[1];
      return { value: l[0] ? l[1] : void 0, done: !0 };
    }
  }
  function Hd(t, e) {
    for (var r in t)
      r !== "default" &&
        !Object.prototype.hasOwnProperty.call(e, r) &&
        Cs(e, t, r);
  }
  function Wo(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
      r = e && t[e],
      n = 0;
    if (r) return r.call(t);
    if (t && typeof t.length == "number")
      return {
        next: function () {
          return (
            t && n >= t.length && (t = void 0),
            { value: t && t[n++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined.",
    );
  }
  function za(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var n = r.call(t),
      s,
      o = [],
      i;
    try {
      for (; (e === void 0 || e-- > 0) && !(s = n.next()).done;)
        o.push(s.value);
    } catch (a) {
      i = { error: a };
    } finally {
      try {
        s && !s.done && (r = n.return) && r.call(n);
      } finally {
        if (i) throw i.error;
      }
    }
    return o;
  }
  function Wd() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t = t.concat(za(arguments[e]));
    return t;
  }
  function Vd() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++)
      t += arguments[e].length;
    for (var n = Array(t), s = 0, e = 0; e < r; e++)
      for (var o = arguments[e], i = 0, a = o.length; i < a; i++, s++)
        n[s] = o[i];
    return n;
  }
  function Kd(t, e, r) {
    if (r || arguments.length === 2)
      for (var n = 0, s = e.length, o; n < s; n++)
        (o || !(n in e)) &&
          (o || (o = Array.prototype.slice.call(e, 0, n)), (o[n] = e[n]));
    return t.concat(o || Array.prototype.slice.call(e));
  }
  function Pn(t) {
    return this instanceof Pn ? ((this.v = t), this) : new Pn(t);
  }
  function zd(t, e, r) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(t, e || []),
      s,
      o = [];
    return (
      (s = Object.create(
        (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
      )),
      a("next"),
      a("throw"),
      a("return", i),
      (s[Symbol.asyncIterator] = function () {
        return this;
      }),
      s
    );
    function i(h) {
      return function (p) {
        return Promise.resolve(p).then(h, u);
      };
    }
    function a(h, p) {
      n[h] &&
        ((s[h] = function (g) {
          return new Promise(function (y, w) {
            o.push([h, g, y, w]) > 1 || c(h, g);
          });
        }),
        p && (s[h] = p(s[h])));
    }
    function c(h, p) {
      try {
        l(n[h](p));
      } catch (g) {
        f(o[0][3], g);
      }
    }
    function l(h) {
      h.value instanceof Pn
        ? Promise.resolve(h.value.v).then(d, u)
        : f(o[0][2], h);
    }
    function d(h) {
      c("next", h);
    }
    function u(h) {
      c("throw", h);
    }
    function f(h, p) {
      (h(p), o.shift(), o.length && c(o[0][0], o[0][1]));
    }
  }
  function Gd(t) {
    var e, r;
    return (
      (e = {}),
      n("next"),
      n("throw", function (s) {
        throw s;
      }),
      n("return"),
      (e[Symbol.iterator] = function () {
        return this;
      }),
      e
    );
    function n(s, o) {
      e[s] = t[s]
        ? function (i) {
            return (r = !r) ? { value: Pn(t[s](i)), done: !1 } : o ? o(i) : i;
          }
        : o;
    }
  }
  function Jd(t) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator],
      r;
    return e
      ? e.call(t)
      : ((t = typeof Wo == "function" ? Wo(t) : t[Symbol.iterator]()),
        (r = {}),
        n("next"),
        n("throw"),
        n("return"),
        (r[Symbol.asyncIterator] = function () {
          return this;
        }),
        r);
    function n(o) {
      r[o] =
        t[o] &&
        function (i) {
          return new Promise(function (a, c) {
            ((i = t[o](i)), s(a, c, i.done, i.value));
          });
        };
    }
    function s(o, i, a, c) {
      Promise.resolve(c).then(function (l) {
        o({ value: l, done: a });
      }, i);
    }
  }
  function Yd(t, e) {
    return (
      Object.defineProperty
        ? Object.defineProperty(t, "raw", { value: e })
        : (t.raw = e),
      t
    );
  }
  function Xd(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (t != null)
      for (var r = Fo(t), n = 0; n < r.length; n++)
        r[n] !== "default" && Cs(e, t, r[n]);
    return (oh(e, t), e);
  }
  function Qd(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Zd(t, e, r, n) {
    if (r === "a" && !n)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !n : !e.has(t))
      throw new TypeError(
        "Cannot read private member from an object whose class did not declare it",
      );
    return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
  }
  function eh(t, e, r, n, s) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !s)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !s : !e.has(t))
      throw new TypeError(
        "Cannot write private member to an object whose class did not declare it",
      );
    return (n === "a" ? s.call(t, r) : s ? (s.value = r) : e.set(t, r), r);
  }
  function th(t, e) {
    if (e === null || (typeof e != "object" && typeof e != "function"))
      throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof t == "function" ? e === t : t.has(e);
  }
  function rh(t, e, r) {
    if (e != null) {
      if (typeof e != "object" && typeof e != "function")
        throw new TypeError("Object expected.");
      var n, s;
      if (r) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        n = e[Symbol.asyncDispose];
      }
      if (n === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        ((n = e[Symbol.dispose]), r && (s = n));
      }
      if (typeof n != "function") throw new TypeError("Object not disposable.");
      (s &&
        (n = function () {
          try {
            s.call(this);
          } catch (o) {
            return Promise.reject(o);
          }
        }),
        t.stack.push({ value: e, dispose: n, async: r }));
    } else r && t.stack.push({ async: !0 });
    return e;
  }
  function nh(t) {
    function e(o) {
      ((t.error = t.hasError
        ? new ih(o, t.error, "An error was suppressed during disposal.")
        : o),
        (t.hasError = !0));
    }
    var r,
      n = 0;
    function s() {
      for (; (r = t.stack.pop());)
        try {
          if (!r.async && n === 1)
            return ((n = 0), t.stack.push(r), Promise.resolve().then(s));
          if (r.dispose) {
            var o = r.dispose.call(r.value);
            if (r.async)
              return (
                (n |= 2),
                Promise.resolve(o).then(s, function (i) {
                  return (e(i), s());
                })
              );
          } else n |= 1;
        } catch (i) {
          e(i);
        }
      if (n === 1)
        return t.hasError ? Promise.reject(t.error) : Promise.resolve();
      if (t.hasError) throw t.error;
    }
    return s();
  }
  function sh(t, e) {
    return typeof t == "string" && /^\.\.?\//.test(t)
      ? t.replace(
          /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
          function (r, n, s, o, i) {
            return n
              ? e
                ? ".jsx"
                : ".js"
              : s && (!o || !i)
                ? r
                : s + o + "." + i.toLowerCase() + "js";
          },
        )
      : t;
  }
  var $o,
    Ts,
    Cs,
    oh,
    Fo,
    ih,
    ah,
    ch = mw(() => {
      (($o = function (t, e) {
        return (
          ($o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, n) {
                r.__proto__ = n;
              }) ||
            function (r, n) {
              for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s]);
            }),
          $o(t, e)
        );
      }),
        (Ts = function () {
          return (
            (Ts =
              Object.assign ||
              function (e) {
                for (var r, n = 1, s = arguments.length; n < s; n++) {
                  r = arguments[n];
                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
              }),
            Ts.apply(this, arguments)
          );
        }),
        (Cs = Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r);
              var s = Object.getOwnPropertyDescriptor(e, r);
              ((!s ||
                ("get" in s ? !e.__esModule : s.writable || s.configurable)) &&
                (s = {
                  enumerable: !0,
                  get: function () {
                    return e[r];
                  },
                }),
                Object.defineProperty(t, n, s));
            }
          : function (t, e, r, n) {
              (n === void 0 && (n = r), (t[n] = e[r]));
            }),
        (oh = Object.create
          ? function (t, e) {
              Object.defineProperty(t, "default", { enumerable: !0, value: e });
            }
          : function (t, e) {
              t.default = e;
            }),
        (Fo = function (t) {
          return (
            (Fo =
              Object.getOwnPropertyNames ||
              function (e) {
                var r = [];
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) &&
                    (r[r.length] = n);
                return r;
              }),
            Fo(t)
          );
        }),
        (ih =
          typeof SuppressedError == "function"
            ? SuppressedError
            : function (t, e, r) {
                var n = new Error(r);
                return (
                  (n.name = "SuppressedError"),
                  (n.error = t),
                  (n.suppressed = e),
                  n
                );
              }),
        (ah = {
          __extends: xd,
          __assign: Ts,
          __rest: Nd,
          __decorate: Ld,
          __param: jd,
          __esDecorate: Md,
          __runInitializers: Dd,
          __propKey: Ud,
          __setFunctionName: $d,
          __metadata: Fd,
          __awaiter: qd,
          __generator: Bd,
          __createBinding: Cs,
          __exportStar: Hd,
          __values: Wo,
          __read: za,
          __spread: Wd,
          __spreadArrays: Vd,
          __spreadArray: Kd,
          __await: Pn,
          __asyncGenerator: zd,
          __asyncDelegator: Gd,
          __asyncValues: Jd,
          __makeTemplateObject: Yd,
          __importStar: Xd,
          __importDefault: Qd,
          __classPrivateFieldGet: Zd,
          __classPrivateFieldSet: eh,
          __classPrivateFieldIn: th,
          __addDisposableResource: rh,
          __disposeResources: nh,
          __rewriteRelativeImportExtension: sh,
        }));
    }),
    Tw = Rn((t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    Cw = Rn((t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._resetOtelCache = o),
        (t.extractTraceContext = i));
      let e = (ch(), Ka(Id)),
        r = null,
        n = "@opentelemetry/api";
      function s() {
        return (
          r === null &&
            (r = Promise.resolve(`${n}`)
              .then((a) => e.__importStar(require(a)))
              .catch(() => null)),
          r
        );
      }
      function o() {
        r = null;
      }
      function i() {
        return e.__awaiter(this, void 0, void 0, function* () {
          try {
            let a = yield s();
            if (!a || !a.propagation || !a.context) return null;
            let c = {};
            a.propagation.inject(a.context.active(), c);
            let l = c.traceparent;
            return l
              ? { traceparent: l, tracestate: c.tracestate, baggage: c.baggage }
              : null;
          } catch {
            return null;
          }
        });
      }
    }),
    Pw = Rn((t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseTraceParent = e));
      function e(r) {
        if (!r || typeof r != "string") return null;
        let n = r.split("-");
        if (n.length !== 4) return null;
        let [s, o, i, a] = n;
        if (
          s.length !== 2 ||
          o.length !== 32 ||
          i.length !== 16 ||
          a.length !== 2
        )
          return null;
        let c = /^[0-9a-f]+$/i;
        return !c.test(s) ||
          !c.test(o) ||
          !c.test(i) ||
          !c.test(a) ||
          o === "00000000000000000000000000000000" ||
          i === "0000000000000000"
          ? null
          : {
              version: s,
              traceId: o,
              parentId: i,
              traceFlags: a,
              isSampled: (parseInt(a, 16) & 1) === 1,
            };
      }
    }),
    Rw = Rn((t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shouldPropagateToTarget = e));
      function e(n, s) {
        if (!n || !s || s.length === 0) return !1;
        let o;
        if (n instanceof URL) o = n;
        else
          try {
            o = new URL(n);
          } catch {
            return !1;
          }
        for (let i of s)
          try {
            if (typeof i == "string") {
              if (r(o.hostname, i)) return !0;
            } else if (i instanceof RegExp) {
              if (i.test(o.hostname)) return !0;
            } else if (typeof i == "function" && i(o)) return !0;
          } catch {
            continue;
          }
        return !1;
      }
      function r(n, s) {
        if (s === n) return !0;
        if (s.startsWith("*.")) {
          let o = s.slice(2);
          if (n.endsWith(o) && (n === o || n.endsWith("." + o))) return !0;
        }
        return !1;
      }
    }),
    Ow = Rn((t) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDefaultPropagationTargets = e));
      function e(r) {
        let n = [];
        try {
          let s = new URL(r);
          n.push(s.hostname);
        } catch {}
        return (
          n.push("*.supabase.co", "*.supabase.in"),
          n.push("localhost", "127.0.0.1", "[::1]"),
          n
        );
      }
    }),
    Iw = Rn((t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      let e = (ch(), Ka(Id));
      (e.__exportStar(Tw(), t),
        e.__exportStar(Cw(), t),
        e.__exportStar(Pw(), t),
        e.__exportStar(Rw(), t),
        e.__exportStar(Ow(), t));
    }),
    qo = Iw();
  function Ps(t) {
    "@babel/helpers - typeof";
    return (
      (Ps =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      Ps(t)
    );
  }
  function xw(t, e) {
    if (Ps(t) != "object" || !t) return t;
    var r = t[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(t, e || "default");
      if (Ps(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }
  function Nw(t) {
    var e = xw(t, "string");
    return Ps(e) == "symbol" ? e : e + "";
  }
  function Lw(t, e, r) {
    return (
      (e = Nw(e)) in t
        ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = r),
      t
    );
  }
  function Ed(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      (e &&
        (n = n.filter(function (s) {
          return Object.getOwnPropertyDescriptor(t, s).enumerable;
        })),
        r.push.apply(r, n));
    }
    return r;
  }
  function Me(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Ed(Object(r), !0).forEach(function (n) {
            Lw(t, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : Ed(Object(r)).forEach(function (n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(r, n),
              );
            });
    }
    return t;
  }
  var jw = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
    Mw = () => Headers,
    Dw = (t, e, r, n, s) => {
      let o = jw(n),
        i = Mw(),
        a = s?.enabled === !0,
        c = s?.respectSamplingDecision !== !1,
        l = a ? (0, qo.getDefaultPropagationTargets)(e) : null;
      return async (d, u) => {
        var f;
        let h = (f = await r()) !== null && f !== void 0 ? f : t,
          p = new i(u?.headers);
        if (
          (p.has("apikey") || p.set("apikey", t),
          p.has("Authorization") || p.set("Authorization", `Bearer ${h}`),
          l)
        ) {
          let g = await Uw(d, l, c);
          g &&
            (g.traceparent &&
              !p.has("traceparent") &&
              p.set("traceparent", g.traceparent),
            g.tracestate &&
              !p.has("tracestate") &&
              p.set("tracestate", g.tracestate),
            g.baggage && !p.has("baggage") && p.set("baggage", g.baggage));
        }
        return o(d, Me(Me({}, u), {}, { headers: p }));
      };
    };
  async function Uw(t, e, r) {
    if (
      !(0, qo.shouldPropagateToTarget)(
        typeof t == "string" || t instanceof URL ? t : t.url,
        e,
      )
    )
      return null;
    let n = await (0, qo.extractTraceContext)();
    if (!n || !n.traceparent) return null;
    if (r) {
      let s = (0, qo.parseTraceParent)(n.traceparent);
      if (s && !s.isSampled) return null;
    }
    return n;
  }
  function Td(t) {
    return typeof t == "boolean" ? { enabled: t } : t;
  }
  function $w(t) {
    return t.endsWith("/") ? t : t + "/";
  }
  function Fw(t, e) {
    var r, n, s, o, i, a;
    let { db: c, auth: l, realtime: d, global: u } = t,
      { db: f, auth: h, realtime: p, global: g } = e,
      y = Td(t.tracePropagation),
      w = Td(e.tracePropagation),
      A = {
        db: Me(Me({}, f), c),
        auth: Me(Me({}, h), l),
        realtime: Me(Me({}, p), d),
        storage: {},
        global: Me(
          Me(Me({}, g), u),
          {},
          {
            headers: Me(
              Me({}, (r = g?.headers) !== null && r !== void 0 ? r : {}),
              (n = u?.headers) !== null && n !== void 0 ? n : {},
            ),
          },
        ),
        tracePropagation: {
          enabled:
            (s = (o = y?.enabled) !== null && o !== void 0 ? o : w?.enabled) !==
              null && s !== void 0
              ? s
              : !1,
          respectSamplingDecision:
            (i =
              (a = y?.respectSamplingDecision) !== null && a !== void 0
                ? a
                : w?.respectSamplingDecision) !== null && i !== void 0
              ? i
              : !0,
        },
        accessToken: async () => "",
      };
    return (
      t.accessToken ? (A.accessToken = t.accessToken) : delete A.accessToken,
      A
    );
  }
  function qw(t) {
    let e = t?.trim();
    if (!e) throw new Error("supabaseUrl is required.");
    if (!e.match(/^https?:\/\//i))
      throw new Error(
        "Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.",
      );
    try {
      return new URL($w(e));
    } catch {
      throw Error("Invalid supabaseUrl: Provided URL is malformed.");
    }
  }
  var Bw = class extends Va.AuthClient {
      constructor(t) {
        super(t);
      }
    },
    lh = class {
      constructor(t, e, r) {
        var n, s;
        ((this.supabaseUrl = t), (this.supabaseKey = e));
        let o = qw(t);
        if (!e) throw new Error("supabaseKey is required.");
        ((this.realtimeUrl = new URL("realtime/v1", o)),
          (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
            "http",
            "ws",
          )),
          (this.authUrl = new URL("auth/v1", o)),
          (this.storageUrl = new URL("storage/v1", o)),
          (this.functionsUrl = new URL("functions/v1", o)));
        let i = `sb-${o.hostname.split(".")[0]}-auth-token`,
          a = {
            db: Sw,
            realtime: Aw,
            auth: Me(Me({}, kw), {}, { storageKey: i }),
            global: bw,
            tracePropagation: Ew,
          },
          c = Fw(r ?? {}, a);
        if (
          ((this.settings = c),
          (this.storageKey =
            (n = c.auth.storageKey) !== null && n !== void 0 ? n : ""),
          (this.headers =
            (s = c.global.headers) !== null && s !== void 0 ? s : {}),
          c.accessToken)
        )
          ((this.accessToken = c.accessToken),
            (this.auth = new Proxy(
              {},
              {
                get: (d, u) => {
                  throw new Error(
                    `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`,
                  );
                },
              },
            )));
        else {
          var l;
          this.auth = this._initSupabaseAuthClient(
            (l = c.auth) !== null && l !== void 0 ? l : {},
            this.headers,
            c.global.fetch,
          );
        }
        ((this.fetch = Dw(
          e,
          t,
          this._getAccessToken.bind(this),
          c.global.fetch,
          c.tracePropagation,
        )),
          (this.realtime = this._initRealtimeClient(
            Me(
              {
                headers: this.headers,
                accessToken: this._getAccessToken.bind(this),
                fetch: this.fetch,
              },
              c.realtime,
            ),
          )),
          this.accessToken &&
            Promise.resolve(this.accessToken())
              .then((d) => this.realtime.setAuth(d))
              .catch((d) =>
                console.warn("Failed to set initial Realtime auth token:", d),
              ),
          (this.rest = new Pd.PostgrestClient(new URL("rest/v1", o).href, {
            headers: this.headers,
            schema: c.db.schema,
            fetch: this.fetch,
            timeout: c.db.timeout,
            urlLengthLimit: c.db.urlLengthLimit,
          })),
          (this.storage = new Rd.StorageClient(
            this.storageUrl.href,
            this.headers,
            this.fetch,
            r?.storage,
          )),
          c.accessToken || this._listenForAuthEvents());
      }
      get functions() {
        return new On.FunctionsClient(this.functionsUrl.href, {
          headers: this.headers,
          customFetch: this.fetch,
        });
      }
      from(t) {
        return this.rest.from(t);
      }
      schema(t) {
        return this.rest.schema(t);
      }
      rpc(t, e = {}, r = { head: !1, get: !1, count: void 0 }) {
        return this.rest.rpc(t, e, r);
      }
      channel(t, e = { config: {} }) {
        return this.realtime.channel(t, e);
      }
      getChannels() {
        return this.realtime.getChannels();
      }
      removeChannel(t) {
        return this.realtime.removeChannel(t);
      }
      removeAllChannels() {
        return this.realtime.removeAllChannels();
      }
      async _getAccessToken() {
        var t = this,
          e,
          r;
        if (t.accessToken) return await t.accessToken();
        let { data: n } = await t.auth.getSession();
        return (e =
          (r = n.session) === null || r === void 0
            ? void 0
            : r.access_token) !== null && e !== void 0
          ? e
          : t.supabaseKey;
      }
      _initSupabaseAuthClient(
        {
          autoRefreshToken: t,
          persistSession: e,
          detectSessionInUrl: r,
          storage: n,
          userStorage: s,
          storageKey: o,
          flowType: i,
          lock: a,
          debug: c,
          throwOnError: l,
          experimental: d,
          lockAcquireTimeout: u,
          skipAutoInitialize: f,
        },
        h,
        p,
      ) {
        let g = {
          Authorization: `Bearer ${this.supabaseKey}`,
          apikey: `${this.supabaseKey}`,
        };
        return new Bw({
          url: this.authUrl.href,
          headers: Me(Me({}, g), h),
          storageKey: o,
          autoRefreshToken: t,
          persistSession: e,
          detectSessionInUrl: r,
          storage: n,
          userStorage: s,
          flowType: i,
          lock: a,
          debug: c,
          throwOnError: l,
          experimental: d,
          fetch: p,
          lockAcquireTimeout: u,
          skipAutoInitialize: f,
          hasCustomAuthorizationHeader: Object.keys(this.headers).some(
            (y) => y.toLowerCase() === "authorization",
          ),
        });
      }
      _initRealtimeClient(t) {
        return new Wa.RealtimeClient(
          this.realtimeUrl.href,
          Me(
            Me({}, t),
            {},
            { params: Me(Me({}, { apikey: this.supabaseKey }), t?.params) },
          ),
        );
      }
      _listenForAuthEvents() {
        return this.auth.onAuthStateChange((t, e) => {
          this._handleTokenChanged(t, "CLIENT", e?.access_token);
        });
      }
      _handleTokenChanged(t, e, r) {
        (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
        this.changedAccessToken !== r
          ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
          : t === "SIGNED_OUT" &&
            (this.realtime.setAuth(),
            e == "STORAGE" && this.auth.signOut(),
            (this.changedAccessToken = void 0));
      }
    },
    Hw = (t, e, r) => new lh(t, e, r);
  function Ww() {
    if (typeof window < "u") return !1;
    let t = globalThis.process;
    if (!t) return !1;
    let e = t.version;
    if (e == null) return !1;
    let r = e.match(/^v(\d+)\./);
    return r ? parseInt(r[1], 10) <= 18 : !1;
  }
  Ww() &&
    console.warn(
      "\u26A0\uFE0F  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217",
    );
  Object.defineProperty(ot, "FunctionRegion", {
    enumerable: !0,
    get: function () {
      return On.FunctionRegion;
    },
  });
  Object.defineProperty(ot, "FunctionsError", {
    enumerable: !0,
    get: function () {
      return On.FunctionsError;
    },
  });
  Object.defineProperty(ot, "FunctionsFetchError", {
    enumerable: !0,
    get: function () {
      return On.FunctionsFetchError;
    },
  });
  Object.defineProperty(ot, "FunctionsHttpError", {
    enumerable: !0,
    get: function () {
      return On.FunctionsHttpError;
    },
  });
  Object.defineProperty(ot, "FunctionsRelayError", {
    enumerable: !0,
    get: function () {
      return On.FunctionsRelayError;
    },
  });
  Object.defineProperty(ot, "PostgrestError", {
    enumerable: !0,
    get: function () {
      return Pd.PostgrestError;
    },
  });
  Object.defineProperty(ot, "StorageApiError", {
    enumerable: !0,
    get: function () {
      return Rd.StorageApiError;
    },
  });
  ot.SupabaseClient = lh;
  ot.__toCommonJS = Ka;
  ot.createClient = Hw;
  Object.keys(Va).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(ot, t) &&
      Object.defineProperty(ot, t, {
        enumerable: !0,
        get: function () {
          return Va[t];
        },
      });
  });
  Object.keys(Wa).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(ot, t) &&
      Object.defineProperty(ot, t, {
        enumerable: !0,
        get: function () {
          return Wa[t];
        },
      });
  });
});
var Sh = F((AP, bh) => {
  "use strict";
  var Rs = require("fs"),
    hh = require("path"),
    Vw = require("crypto"),
    Ja =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://mfffutdwodonbwujwrsv.supabase.co",
    Ya =
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      "sb_publishable_D3xWF3AkqHc5ID_Lb94eyA_Jj4Ztny9",
    Xa = process.env.COMNYANG_OAUTH_REDIRECT_URL || "shanks://auth-callback",
    Kw = {
      v1: `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEdf/WGXMsfyzrDe8xgDcu0132RBTk
9OMmgwoVbMzdx0dO0wUZFrZJ/G6zlTsjlhJwlMFUJJQJchSNe5Pk0ZiVnA==
-----END PUBLIC KEY-----`,
    },
    In = 1,
    zw = 1440 * 60 * 1e3,
    fh = 2e4,
    ph = null,
    xn = { info: () => {}, warn: () => {}, error: () => {} },
    Vo = null,
    dh = 0;
  function Gw(t) {
    ((ph = t.userDataPath),
      t.log && (xn = t.log),
      t.oauthRedirectUrl && (Xa = t.oauthRedirectUrl));
  }
  function Os() {
    return hh.join(ph, "account.json");
  }
  function ft() {
    try {
      if (!Rs.existsSync(Os())) return null;
      let t = JSON.parse(Rs.readFileSync(Os(), "utf8"));
      if (!t || typeof t != "object") return null;
      let e = Jw(t);
      return (e.changed && Wr(e.account), e.account);
    } catch {
      return null;
    }
  }
  function Wr(t) {
    (Rs.mkdirSync(hh.dirname(Os()), { recursive: !0 }),
      Rs.writeFileSync(Os(), JSON.stringify(t, null, 2)));
  }
  function Is(t) {
    let r = { ...(ft() || { schemaVersion: In }), ...t };
    return (Wr(r), r);
  }
  function gh() {
    try {
      Rs.unlinkSync(Os());
    } catch {}
    Vo = null;
  }
  function mh(t) {
    if (typeof t != "string") return t;
    try {
      let e = JSON.parse(t);
      if (!e || typeof e != "object") return t;
      let r = !1;
      for (let n of ["provider_token", "provider_refresh_token"])
        Object.prototype.hasOwnProperty.call(e, n) && (delete e[n], (r = !0));
      return r ? JSON.stringify(e) : t;
    } catch {
      return t;
    }
  }
  function Jw(t) {
    if (
      !t ||
      typeof t != "object" ||
      !t.authStorage ||
      typeof t.authStorage != "object"
    )
      return { account: t, changed: !1 };
    let e = !1,
      r = { ...t.authStorage };
    for (let [n, s] of Object.entries(r)) {
      let o = mh(s);
      o !== s && ((r[n] = o), (e = !0));
    }
    return e
      ? { account: { ...t, authStorage: r }, changed: !0 }
      : { account: t, changed: !1 };
  }
  async function yh(t, e = {}) {
    let r = new AbortController(),
      n = setTimeout(() => r.abort(), fh),
      s = [e.signal].filter(Boolean),
      o = () => r.abort();
    for (let i of s)
      i.aborted ? r.abort() : i.addEventListener("abort", o, { once: !0 });
    try {
      return await fetch(t, { ...e, signal: r.signal });
    } finally {
      clearTimeout(n);
      for (let i of s) i.removeEventListener("abort", o);
    }
  }
  function Yw(t, e) {
    let r = null,
      n = new Promise((s, o) => {
        r = setTimeout(() => {
          let i = new Error(e || "Account server request timed out.");
          ((i.code = "network"), o(i));
        }, fh);
      });
    return Promise.race([t, n]).finally(() => clearTimeout(r));
  }
  var Xw = {
      getItem(t) {
        let e = ft(),
          r = e && e.authStorage && e.authStorage[t];
        return typeof r == "string" ? r : null;
      },
      setItem(t, e) {
        let r = ft() || { schemaVersion: In };
        ((r.authStorage = r.authStorage || {}),
          (r.authStorage[t] = mh(e)),
          Wr(r));
      },
      removeItem(t) {
        let e = ft();
        !e || !e.authStorage || (delete e.authStorage[t], Wr(e));
      },
    },
    Ga = class t {
      static CONNECTING = 0;
      static OPEN = 1;
      static CLOSING = 2;
      static CLOSED = 3;
      constructor() {
        ((this.readyState = t.CLOSED),
          (this.binaryType = "arraybuffer"),
          (this.bufferedAmount = 0),
          (this.extensions = ""),
          (this.protocol = ""),
          (this.url = ""),
          (this.onopen = null),
          (this.onclose = null),
          (this.onerror = null),
          (this.onmessage = null));
      }
      close() {}
      send() {
        throw new Error("Shanks does not use Supabase realtime.");
      }
      addEventListener() {}
      removeEventListener() {}
      dispatchEvent() {
        return !1;
      }
    };
  function Nn() {
    if (!Vo) {
      let { createClient: t } = uh();
      Vo = t(Ja, Ya, {
        auth: {
          storage: Xw,
          persistSession: !0,
          autoRefreshToken: !1,
          detectSessionInUrl: !1,
          flowType: "pkce",
        },
        realtime: { transport: Ga },
      });
    }
    return Vo;
  }
  async function Ln() {
    try {
      let { data: t, error: e } = await Nn().auth.getSession();
      return e ? null : t && t.session ? t.session : null;
    } catch {
      return null;
    }
  }
  async function _h() {
    let t = await Ln();
    if (!t) return null;
    if (Number(t.expires_at || 0) * 1e3 - Date.now() > 6e4) return t;
    try {
      let { data: r, error: n } = await Nn().auth.refreshSession();
      return n || !r || !r.session ? t : r.session;
    } catch {
      return t;
    }
  }
  async function Qw() {
    let { data: t, error: e } = await Nn().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: Xa,
        skipBrowserRedirect: !0,
        queryParams: { prompt: "select_account" },
      },
    });
    if (e || !t || !t.url)
      throw new Error(
        e && e.message ? e.message : "Failed to start Google sign-in.",
      );
    return t.url;
  }
  async function Zw() {
    try {
      let { error: t } = await Nn().auth.signOut({ scope: "local" });
      t && xn.warn("[Shanks] account sign-out failed:", t.message);
    } catch (t) {
      xn.warn(
        "[Shanks] account sign-out failed:",
        t && t.message ? t.message : t,
      );
    } finally {
      gh();
    }
  }
  async function eb(t) {
    let e;
    try {
      e = new URL(String(t || ""));
    } catch {
      throw new Error("Invalid auth callback URL.");
    }
    let r = new URLSearchParams(String(e.hash || "").replace(/^#/, "")),
      n =
        e.searchParams.get("error_description") ||
        r.get("error_description") ||
        e.searchParams.get("error") ||
        r.get("error");
    if (n) throw new Error(n);
    let s = e.searchParams.get("code") || r.get("code");
    if (!s) throw new Error("Auth callback is missing the authorization code.");
    xn.info("[Shanks] exchanging auth code for session");
    let { data: o, error: i } = await Yw(
      Nn().auth.exchangeCodeForSession(s),
      "Google sign-in timed out while exchanging the auth code.",
    );
    if (i || !o || !o.session || !o.session.user)
      throw new Error(
        i && i.message ? i.message : "Failed to complete Google sign-in.",
      );
    let a = o.session.user;
    return (
      Is({ userId: a.id, email: a.email || null }),
      xn.info("[Shanks] auth session exchange completed", {
        email: a.email || null,
      }),
      { userId: a.id, email: a.email || null }
    );
  }
  async function xs(t, e) {
    let r = await _h();
    if (!r) {
      let o = new Error("Sign in first.");
      throw ((o.code = "unauthorized"), o);
    }
    let n;
    try {
      n = await yh(`${Ja}/functions/v1/${t}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${r.access_token}`,
          apikey: Ya,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e || {}),
      });
    } catch (o) {
      let i = new Error("Could not reach the account server.");
      throw ((i.code = "network"), (i.cause = o), i);
    }
    let s = await n.json().catch(() => ({}));
    if (!n.ok || s.ok === !1) {
      let o = new Error(s.message || `Account server returned ${n.status}`);
      throw (
        (o.code = s.code || `http_${n.status}`),
        (o.statusCode = n.status),
        o
      );
    }
    return s;
  }
  async function tb() {
    let t = Date.now(),
      e;
    try {
      e = await yh(`${Ja}/rest/v1/`, {
        method: "HEAD",
        headers: { apikey: Ya },
      });
    } catch (i) {
      let a = new Error("Could not sample Supabase server time.");
      throw ((a.code = "network"), (a.cause = i), a);
    }
    let r = Date.now(),
      n = e.headers && e.headers.get ? e.headers.get("date") : "",
      s = Date.parse(n || "");
    if (!Number.isFinite(s)) {
      let i = new Error("Supabase server time header was unavailable.");
      throw ((i.code = "server_time_unavailable"), i);
    }
    let o = t + (r - t) / 2;
    return {
      serverNowMs: s,
      localMidpointMs: o,
      roundTripMs: r - t,
      offsetMs: Math.round(s - o),
    };
  }
  function rb(t) {
    let e = String(t || "").split(".");
    if (e.length !== 3) return null;
    let r, n;
    try {
      ((r = JSON.parse(Buffer.from(e[0], "base64url").toString("utf8"))),
        (n = JSON.parse(Buffer.from(e[1], "base64url").toString("utf8"))));
    } catch {
      return null;
    }
    if (!r || r.alg !== "ES256") return null;
    let s = Kw[r.kid || "v1"];
    if (!s) return null;
    try {
      if (
        !Vw.verify(
          "sha256",
          Buffer.from(`${e[0]}.${e[1]}`, "utf8"),
          { key: s, dsaEncoding: "ieee-p1363" },
          Buffer.from(e[2], "base64url"),
        )
      )
        return null;
    } catch {
      return null;
    }
    return n;
  }
  function Qa(t) {
    if (!t || !t.entitlement || !t.entitlement.token) return !1;
    let e = rb(t.entitlement.token);
    if (
      !e ||
      !e.exp ||
      (t.userId && e.user_id !== t.userId) ||
      (t.licenseId && e.license_id !== t.licenseId)
    )
      return !1;
    let r = Date.now();
    if (r >= e.exp * 1e3) return !1;
    let n = Date.parse(t.lastEntitlementRefreshAt || "");
    return !(Number.isFinite(n) && r < n);
  }
  function vh() {
    let t = ft();
    t && (delete t.entitlement, Wr(t));
  }
  async function nb(t) {
    let e = await xs("link-license", { licenseKey: String(t || "").trim() }),
      r = await Ln(),
      n = r && r.user ? r.user : null,
      s = new Date().toISOString();
    return (
      Is({
        schemaVersion: In,
        state: "account-linked",
        userId: n ? n.id : null,
        email: (n && n.email) || null,
        licenseId: e.license.id,
        productName: e.license.productName || null,
        linkedAt: s,
        lastEntitlementRefreshAt: s,
        entitlement: e.entitlement,
      }),
      e
    );
  }
  async function sb() {
    let t = await xs("unlink-license", {}),
      e = await Ln(),
      r = e && e.user ? e.user : null,
      n = ft() || { schemaVersion: In },
      s = {
        ...n,
        schemaVersion: In,
        state: "signed-in-without-license",
        userId: r ? r.id : n.userId || null,
        email: r ? r.email || null : n.email || null,
      };
    return (
      delete s.licenseId,
      delete s.productName,
      delete s.linkedAt,
      delete s.lastEntitlementRefreshAt,
      delete s.entitlement,
      Wr(s),
      t
    );
  }
  async function ob() {
    try {
      let t = await xs("refresh-entitlement", {}),
        e = await Ln(),
        r = e && e.user ? e.user : null,
        n = new Date().toISOString();
      return (
        Is({
          schemaVersion: In,
          state: "account-linked",
          userId: r ? r.id : null,
          email: (r && r.email) || null,
          licenseId: t.license.id,
          linkedAt: n,
          lastEntitlementRefreshAt: n,
          entitlement: t.entitlement,
        }),
        { ok: !0 }
      );
    } catch (t) {
      return t.code === "not_linked"
        ? { ok: !1, notLinked: !0 }
        : t.code === "network"
          ? { ok: !1, network: !0 }
          : { ok: !1, reason: t.code || "error", message: t.message };
    }
  }
  async function wh(t = {}) {
    let e = ft();
    if (!e || e.state !== "account-linked")
      return { ok: !1, reason: "not-linked" };
    if (!t.force) {
      let r = Date.parse(e.lastEntitlementRefreshAt || "");
      if (Number.isFinite(r) && Date.now() - r < zw)
        return { ok: !0, skipped: !0 };
      if (Date.now() - dh < 3600 * 1e3) return { ok: !1, reason: "throttled" };
    }
    dh = Date.now();
    try {
      let r = await xs("refresh-entitlement", {});
      return (
        Is({
          entitlement: r.entitlement,
          lastEntitlementRefreshAt: new Date().toISOString(),
        }),
        { ok: !0 }
      );
    } catch (r) {
      if (r.code === "not_linked") {
        let n = ft();
        return (
          n &&
            ((n.state = "signed-in-without-license"),
            delete n.licenseId,
            delete n.productName,
            delete n.linkedAt,
            delete n.lastEntitlementRefreshAt,
            delete n.entitlement,
            Wr(n)),
          { ok: !1, notLinked: !0, reason: r.code }
        );
      }
      return r.code === "license_revoked"
        ? (vh(), { ok: !1, revoked: !0, reason: r.code })
        : r.code === "network"
          ? { ok: !1, network: !0, reason: "network" }
          : (xn.warn("[Shanks] entitlement refresh failed:", r.message),
            { ok: !1, reason: r.code || "error" });
    }
  }
  function Za(t) {
    return !!(t && t.state === "account-linked" && t.userId && t.licenseId);
  }
  async function ib() {
    let t = ft();
    if (!Za(t)) return { state: "none" };
    let e = await wh({ force: !0 });
    return e.ok
      ? { state: "account-linked", account: ft() }
      : e.notLinked
        ? { state: "none" }
        : e.revoked
          ? { state: "reauth-required", account: ft(), revoked: !0 }
          : e.network && Qa(t)
            ? { state: "account-linked", account: t }
            : { state: "reauth-required", account: t, revoked: !1 };
  }
  async function ab() {
    let t = ft();
    if (Za(t))
      return {
        state: "account-linked",
        email: t.email || null,
        productName: t.productName || null,
        lastSyncAt: t.lastSyncAt || null,
        entitlementValid: Qa(t),
        entitlementExpiresAt: t.entitlement ? t.entitlement.expiresAt : null,
      };
    let e = await Ln();
    return e && e.user
      ? { state: "signed-in-without-license", email: e.user.email || null }
      : { state: "signed-out" };
  }
  bh.exports = {
    init: Gw,
    get OAUTH_REDIRECT_URL() {
      return Xa;
    },
    loadAccount: ft,
    updateAccount: Is,
    removeAccount: gh,
    getSupabase: Nn,
    getSession: Ln,
    getFreshSession: _h,
    sampleSupabaseServerTime: tb,
    startGoogleSignIn: Qw,
    signOut: Zw,
    handleAuthCallback: eb,
    callEdgeFunction: xs,
    isEntitlementValid: Qa,
    clearEntitlement: vh,
    linkLicense: nb,
    unlinkLicense: sb,
    adoptLinkedLicense: ob,
    refreshEntitlement: wh,
    isValidAccountLinked: Za,
    resolveStartupState: ib,
    getAccountSnapshot: ab,
  };
});
var xh = F((EP, Ih) => {
  "use strict";
  var Un = require("fs"),
    Go = require("path"),
    cb = require("crypto"),
    kh = !1,
    Ge = null,
    Mn = null,
    Eh = () => !0,
    Ut = { info: () => {}, warn: () => {}, error: () => {} },
    jn = "",
    yr = "",
    Ko = null,
    Vr = [],
    Dn = null,
    ec = !1,
    lb = 5e3,
    Th = 20,
    ub = 1e4,
    Ch = new Set([
      "app_opened",
      "pet_stroked",
      "pattern_preset_changed",
      "pomodoro_started",
      "pomodoro_paused",
      "pomodoro_reset",
      "reminder_created",
      "reminder_triggered",
      "peek_mode_entered",
      "peek_mode_exited",
      "share_recording_started",
      "app_error",
      "ai_agent_used",
    ]),
    db = new Set([
      "duration_bucket",
      "from_preset",
      "to_preset",
      "from_preset_type",
      "to_preset_type",
      "mode",
      "focus_min",
      "rest_min",
      "remaining_sec_bucket",
      "repeat",
      "days_count",
      "has_message",
      "time_hour",
      "edge",
      "duration_sec",
      "source",
      "error_type",
      "error_code",
    ]),
    hb = new Set([
      "cursor_last_used_date",
      "claude_last_used_date",
      "antigravity_last_used_date",
      "codex_last_used_date",
      "kiro_last_used_date",
    ]);
  function Ah(t) {
    try {
      if (!t || !Un.existsSync(t)) return null;
      let e = JSON.parse(Un.readFileSync(t, "utf8"));
      return e && typeof e == "object" ? e : null;
    } catch {
      return null;
    }
  }
  function Jo() {
    if (Ko) return Ko;
    let t =
        Ge && typeof Ge.getAppPath == "function"
          ? Ge.getAppPath()
          : process.cwd(),
      e = Ge && typeof Ge.getPath == "function" ? Ge.getPath("userData") : "",
      r =
        Ah(Go.join(t, "analytics.config.json")) ||
        Ah(e ? Go.join(e, "analytics.config.json") : "");
    return (
      (Ko = {
        enabled: process.env.POSTHOG_ENABLED === "1" || r?.enabled === !0,
        projectToken:
          process.env.POSTHOG_PROJECT_TOKEN || r?.projectToken || "",
        host: (
          process.env.POSTHOG_HOST ||
          r?.host ||
          "https://us.i.posthog.com"
        ).replace(/\/$/, ""),
        debug: process.env.POSTHOG_DEBUG === "1" || r?.debug === !0,
      }),
      Ko
    );
  }
  function fb(t = {}) {
    if (kh) return;
    ((kh = !0),
      (Ge = t.app || null),
      (Mn = t.accountManager || null),
      (Eh =
        typeof t.getAllowAnalysis == "function"
          ? t.getAllowAnalysis
          : () => !0),
      t.log && (Ut = t.log));
    let e = Jo();
    if (!e.enabled || !e.projectToken) {
      e.debug &&
        Ut.info(
          "[Shanks] analytics disabled or missing PostHog project token",
        );
      return;
    }
    ((Dn = setInterval(() => Yo().catch(() => {}), lb)),
      typeof Dn.unref == "function" && Dn.unref(),
      e.debug && Ut.info("[Shanks] analytics initialized", { host: e.host }));
  }
  function tc(t) {
    let e = String(t || "").trim();
    return e ? e.slice(0, 128) : "";
  }
  function Ph() {
    let t = Ge && typeof Ge.getPath == "function" ? Ge.getPath("userData") : "";
    return t ? Go.join(t, "analytics-id.json") : "";
  }
  function pb() {
    let t = Ph();
    if (!t || !Un.existsSync(t)) return "";
    try {
      let e = JSON.parse(Un.readFileSync(t, "utf8"));
      return tc(e && e.distinctId);
    } catch {
      return "";
    }
  }
  function gb(t) {
    let e = Ph();
    if (e)
      try {
        (Un.mkdirSync(Go.dirname(e), { recursive: !0 }),
          Un.writeFileSync(e, JSON.stringify({ distinctId: t }, null, 2)));
      } catch {}
  }
  function zo() {
    return (
      yr || ((yr = pb()), yr) || ((yr = `anon_${cb.randomUUID()}`), gb(yr)),
      yr
    );
  }
  function mb() {
    try {
      return Eh() !== !1;
    } catch {
      return !0;
    }
  }
  async function yb() {
    if (!mb() || !Mn) return zo();
    try {
      let t = Mn.loadAccount && Mn.loadAccount();
      if (t && t.userId && ((jn = tc(t.userId)), jn)) return jn;
      if (Mn.getFreshSession) {
        let e = await Mn.getFreshSession();
        if (((jn = tc(e && e.user && e.user.id)), jn)) return jn;
      }
    } catch {
      return zo();
    }
    return zo();
  }
  function _b() {
    let t = Ge && typeof Ge.getLocale == "function" ? Ge.getLocale() : "";
    return {
      app_version:
        Ge && typeof Ge.getVersion == "function" ? Ge.getVersion() : "",
      platform: process.platform,
      arch: process.arch,
      locale: t || "",
      packaged: !!(Ge && Ge.isPackaged),
    };
  }
  function Rh(t) {
    if (typeof t == "string") return t.slice(0, 80);
    if (typeof t == "number") return Number.isFinite(t) ? t : void 0;
    if (typeof t == "boolean") return t;
    if (t === null) return null;
  }
  function vb(t = {}) {
    let e = {};
    if (!t || typeof t != "object") return e;
    for (let [r, n] of Object.entries(t)) {
      if (!db.has(r)) continue;
      let s = Rh(n);
      s !== void 0 && (e[r] = s);
    }
    return e;
  }
  function wb(t) {
    let e = {};
    if (!t || typeof t != "object") return e;
    for (let [r, n] of Object.entries(t)) {
      if (!hb.has(r)) continue;
      let s = Rh(n);
      s !== void 0 && (e[r] = s);
    }
    return e;
  }
  function bb() {
    Vr.length >= Th && Yo().catch(() => {});
  }
  async function Oh(t, e = {}, r = {}) {
    let n = Jo();
    if (!Ch.has(t))
      return (
        n.debug &&
          Ut.warn("[Shanks] analytics event dropped:", {
            event: t,
            reason: "event-not-allowed",
          }),
        { ok: !1, reason: "event-not-allowed" }
      );
    if (!n.enabled || !n.projectToken)
      return (
        n.debug &&
          Ut.info("[Shanks] analytics event dropped:", {
            event: t,
            reason: "disabled",
          }),
        { ok: !1, reason: "disabled" }
      );
    try {
      let s = await yb();
      if (!s)
        return (
          n.debug &&
            Ut.warn("[Shanks] analytics event dropped:", {
              event: t,
              reason: "missing-distinct-id",
            }),
          { ok: !1, reason: "missing-distinct-id" }
        );
      let o = wb(r && r.setProperties);
      return (
        Vr.push({
          event: t,
          distinct_id: s,
          properties: {
            ..._b(),
            ...vb(e),
            ...(Object.keys(o).length ? { $set: o } : {}),
          },
          timestamp: new Date().toISOString(),
        }),
        n.debug &&
          Ut.info("[Shanks] analytics event queued", {
            event: t,
            queueLength: Vr.length,
          }),
        bb(),
        { ok: !0 }
      );
    } catch (s) {
      return (
        Ut.warn(
          "[Shanks] analytics capture failed:",
          s && s.message ? s.message : s,
        ),
        { ok: !1, reason: "capture-failed" }
      );
    }
  }
  function Sb(t, e = {}, r) {
    Oh(t, e, r).catch(() => {});
  }
  async function kb(t) {
    let e = Jo(),
      r = new AbortController(),
      n = setTimeout(() => r.abort(), ub);
    try {
      let s = await fetch(`${e.host}/batch/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: e.projectToken, batch: t }),
        signal: r.signal,
      });
      if (!s.ok) throw new Error(`PostHog batch failed: ${s.status}`);
    } finally {
      clearTimeout(n);
    }
  }
  async function Yo() {
    if (ec || Vr.length === 0) return;
    let t = Jo();
    if (!t.enabled || !t.projectToken) return;
    ec = !0;
    let e = Vr.splice(0, Th);
    try {
      (await kb(e),
        t.debug &&
          Ut.info("[Shanks] analytics flush succeeded", { count: e.length }));
    } catch (r) {
      ((Vr = e.concat(Vr).slice(0, 100)),
        t.debug &&
          Ut.warn(
            "[Shanks] analytics flush failed:",
            r && r.message ? r.message : r,
          ));
    } finally {
      ec = !1;
    }
  }
  async function Ab() {
    (Dn && (clearInterval(Dn), (Dn = null)), await Yo());
  }
  Ih.exports = {
    init: fb,
    capture: Oh,
    captureSoon: Sb,
    flush: Yo,
    shutdown: Ab,
    ALLOWED_EVENTS: Ch,
  };
});
var Lh = F((TP, Nh) => {
  "use strict";
  function Eb(t) {
    function e(i, a = {}, c) {
      t.captureSoon(i, a, c);
    }
    function r(i, a) {
      let c = a instanceof Error ? a : null,
        l =
          c && c.name
            ? c.name
            : Object.prototype.toString.call(a).slice(8, -1) || "Error",
        d = a && typeof a == "object" && a.code ? String(a.code) : "";
      e("app_error", {
        source: String(i || "unknown").slice(0, 80),
        error_type: String(l || "Error").slice(0, 80),
        error_code: d.slice(0, 80),
      });
    }
    function n(i) {
      let a = String(i || "");
      return a
        ? a.startsWith("custom-") ||
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
            a,
          )
          ? "custom"
          : "builtin"
        : "none";
    }
    function s(i) {
      let a = Math.max(0, Math.round(Number(i) || 0));
      return a <= 0
        ? "0"
        : a <= 60
          ? "1m"
          : a <= 300
            ? "1-5m"
            : a <= 900
              ? "5-15m"
              : a <= 1800
                ? "15-30m"
                : "30m+";
    }
    function o(i) {
      let a = /^(\d{2}):\d{2}$/.exec(String((i && i.time) || ""));
      return {
        repeat: String((i && i.repeat) || "none").slice(0, 24),
        days_count: Array.isArray(i && i.days) ? i.days.length : 0,
        has_message: !!(i && String(i.message || "").trim()),
        time_hour: a ? Number(a[1]) : null,
      };
    }
    return {
      captureAnalytics: e,
      captureAppError: r,
      presetTypeForAnalytics: n,
      remainingSecBucketForAnalytics: s,
      reminderAnalyticsProperties: o,
    };
  }
  Nh.exports = { createAnalyticsEvents: Eb };
});
var Xo = F((CP, jh) => {
  "use strict";
  var Ns = require("fs"),
    Tb = require("path");
  function Cb(t) {
    try {
      return Ns.existsSync(t) ? JSON.parse(Ns.readFileSync(t, "utf8")) : null;
    } catch {
      return null;
    }
  }
  function Pb(t, e) {
    (Ns.mkdirSync(Tb.dirname(t), { recursive: !0 }),
      Ns.writeFileSync(t, JSON.stringify(e, null, 2)));
  }
  function Rb(t) {
    try {
      Ns.unlinkSync(t);
    } catch {}
  }
  jh.exports = { readJsonFile: Cb, writeJsonFile: Pb, removeJsonFile: Rb };
});
var Dh = F((PP, Mh) => {
  "use strict";
  var { safeStorage: $n } = require("electron"),
    rc = require("crypto"),
    nc = require("os"),
    Ob = require("path"),
    { readJsonFile: Ib, writeJsonFile: xb, removeJsonFile: Nb } = Xo(),
    Lb = "https://api.lemonsqueezy.com/v1/licenses";
  function jb({ app: t, isMac: e, isWindows: r, logWarn: n, t: s }) {
    function o() {
      return Ob.join(t.getPath("userData"), "license.json");
    }
    function i() {
      let R = Ib(o());
      return !R ||
        typeof R != "object" ||
        typeof R.licenseKey != "string" ||
        typeof R.instanceId != "string"
        ? null
        : R;
    }
    function a(R) {
      xb(o(), R);
    }
    function c() {
      Nb(o());
    }
    function l(R) {
      return rc
        .createHash("sha256")
        .update(String(R || ""), "utf8")
        .digest("hex");
    }
    function d() {
      let R = (() => {
        try {
          return nc.userInfo();
        } catch {
          return {};
        }
      })();
      return rc
        .createHash("sha256")
        .update(
          [
            t.getName ? t.getName() : "Shanks",
            process.platform,
            process.arch,
            nc.hostname() || "",
            R.username || "",
            t.getPath("userData") || "",
          ].join(`
`),
          "utf8",
        )
        .digest("hex");
    }
    function u(R, _) {
      let T = { v: 1, licenseKeyHash: l(R), instanceId: String(_ || "") };
      try {
        if ($n && $n.isEncryptionAvailable())
          return {
            type: "safe-storage-v1",
            value: $n.encryptString(JSON.stringify(T)).toString("base64"),
          };
      } catch (m) {
        n(
          "[Shanks] safeStorage license binding unavailable:",
          m && m.message ? m.message : m,
        );
      }
      return {
        type: "local-fingerprint-v1",
        value: rc
          .createHash("sha256")
          .update(
            [T.licenseKeyHash, T.instanceId, d()].join(`
`),
            "utf8",
          )
          .digest("hex"),
      };
    }
    function f(R) {
      if (!R || typeof R != "object") return !1;
      let _ = R.deviceBinding;
      if (!_ || typeof _ != "object") return !1;
      if (_.type === "safe-storage-v1" && typeof _.value == "string")
        try {
          if (!$n || !$n.isEncryptionAvailable()) return !1;
          let T = JSON.parse($n.decryptString(Buffer.from(_.value, "base64")));
          return (
            T &&
            T.v === 1 &&
            T.licenseKeyHash === l(R.licenseKey) &&
            T.instanceId === R.instanceId
          );
        } catch {
          return !1;
        }
      if (_.type === "local-fingerprint-v1" && typeof _.value == "string") {
        let T = u(R.licenseKey, R.instanceId);
        return T.type === _.type && T.value === _.value;
      }
      return !1;
    }
    function h(R) {
      return R && R.license_key && typeof R.license_key.status == "string"
        ? R.license_key.status.toLowerCase()
        : "";
    }
    function p(R) {
      return !R || R === "active";
    }
    function g(R) {
      let _ = R && R.payload;
      if (_ && _.valid === !1) return !0;
      let T = Number(R && R.statusCode);
      if (!Number.isFinite(T) || T < 400 || T >= 500) return !1;
      let m = String((_ && _.error) || (R && R.message) || "").toLowerCase();
      return /license|instance|activation|activat|disabled|expired|revoked|invalid|suspended|not found/.test(
        m,
      );
    }
    function y(R) {
      let _ = String(R || "").toLowerCase();
      return /activation\s+limit|activation.*limit|limit.*reached|reached.*limit|activation.*reached/.test(
        _,
      )
        ? "limit"
        : /disabled|revoked|suspended|expired|no longer active/.test(_)
          ? "disabled"
          : "";
    }
    function w(R = "") {
      return {
        view: "license-activate",
        reason: typeof R == "string" && R !== "license-activate" ? y(R) : "",
      };
    }
    function A() {
      let R = nc.hostname() || "Computer";
      return `Shanks ${e ? "macOS" : r ? "Windows" : process.platform} - ${R}`;
    }
    async function S(R, _, T = {}) {
      let m;
      try {
        m = await fetch(`${Lb}/${R}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(_),
        });
      } catch (b) {
        let C = b && b.cause;
        n("[Shanks] license server request failed:", {
          endpoint: R,
          message: b && b.message ? b.message : String(b),
          causeCode: C && C.code,
          causeMessage: C && C.message,
        });
        let G = new Error(s("licenseNetworkFailed"));
        throw ((G.code = "LICENSE_NETWORK_FAILED"), (G.cause = b), G);
      }
      let x = await m.json().catch(() => ({}));
      if (!m.ok) {
        if (T.allowInvalidPayload && x && x.valid === !1) return x;
        let b = new Error(x.error || `License server returned ${m.status}`);
        throw ((b.statusCode = m.status), (b.payload = x), b);
      }
      return x;
    }
    async function D(R) {
      let _ = String(R || "").trim();
      if (!_) throw new Error(s("licenseMissingKey"));
      let T = await S("activate", { license_key: _, instance_name: A() }),
        m = h(T);
      if (!T.activated || !T.instance || !T.instance.id || !p(m))
        throw new Error(T.error || s("licenseActivateFailed"));
      let x = new Date().toISOString(),
        b = {
          licenseKey: _,
          instanceId: T.instance.id,
          instanceName: T.instance.name || A(),
          status: m,
          customerEmail: T.meta && T.meta.customer_email,
          productName: T.meta && T.meta.product_name,
          activatedAt: x,
          lastValidatedAt: x,
        };
      return ((b.deviceBinding = u(b.licenseKey, b.instanceId)), a(b), b);
    }
    async function B(R = {}) {
      let _ = R.allowOffline !== !1,
        T = i();
      if (!T) return { ok: !1, reason: "missing" };
      let m = typeof T.status == "string" ? T.status.toLowerCase() : "";
      if (!p(m)) return { ok: !1, reason: "invalid" };
      let x = !!T.deviceBinding;
      if (x && !f(T)) return { ok: !1, reason: "invalid-device" };
      try {
        let b = await S(
            "validate",
            { license_key: T.licenseKey, instance_id: T.instanceId },
            { allowInvalidPayload: !0 },
          ),
          C = h(b);
        if (!b.valid || !p(C)) return { ok: !1, reason: b.error || "invalid" };
        let G = {
          ...T,
          status: C,
          customerEmail: b.meta && b.meta.customer_email,
          productName: b.meta && b.meta.product_name,
          deviceBinding: x ? T.deviceBinding : u(T.licenseKey, T.instanceId),
          lastValidatedAt: new Date().toISOString(),
        };
        return (a(G), { ok: !0, license: G });
      } catch (b) {
        return g(b)
          ? {
              ok: !1,
              reason: (b.payload && b.payload.error) || b.message || "invalid",
            }
          : _ && x && f(T)
            ? { ok: !0, license: T, offline: !0 }
            : {
                ok: !1,
                reason: b && b.message ? b.message : "network",
                network: !0,
              };
      }
    }
    return {
      loadLicense: i,
      removeLicense: c,
      licenseRecoveryReasonFromMessage: y,
      licenseActivatePayload: w,
      activateLicenseKey: D,
      validateSavedLicense: B,
    };
  }
  Mh.exports = { createLicenseService: jb };
});
var $h = F((RP, Uh) => {
  "use strict";
  function Mb({
    accountManager: t,
    loadLicense: e,
    removeLicense: r,
    loadSyncState: n,
    saveSyncState: s,
    clearSyncPolling: o,
    resetSyncFailureCount: i,
    resetAccountSyncedLocalData: a,
    downloadAccountDataToLocal: c,
    uploadLocalDataToAccount: l,
    refreshAppTrayMenu: d,
    startLicensedApp: u,
    returnToLicenseWindow: f,
    dialog: h,
    nativeImage: p,
    fs: g,
    appIconPath: y,
    t: w,
    logInfo: A,
    logWarn: S,
    isOAuthCallbackUrl: D,
    oauthCallbackLogFields: B,
    getLicenseWindow: R,
    getPetWindow: _,
  }) {
    function T(j) {
      let z = R(),
        H = _();
      (z && !z.isDestroyed() && z.webContents.send("account-flow", j),
        H && !H.isDestroyed() && H.webContents.send("account-flow", j));
    }
    async function m() {
      let j = await t.getAccountSnapshot();
      return j.state === "account-linked" ||
        j.state === "signed-in-without-license"
        ? j
        : e()
          ? { state: "legacy-license-only" }
          : { state: "unlicensed" };
    }
    async function x(j) {
      if (!D(j)) {
        A("[Shanks] deep link ignored; not an oauth callback", B(j));
        return;
      }
      T({ step: "signing-in" });
      let z = t.loadAccount(),
        H = n(),
        ee;
      try {
        ee = await t.handleAuthCallback(j);
      } catch (se) {
        (S("[Shanks] auth callback failed:", se && se.stack ? se.stack : se),
          T({
            step: "error",
            code: "auth-failed",
            message: se && se.message ? se.message : "",
          }));
        return;
      }
      T({ step: "signed-in", email: ee.email });
      let Q = z && z.userId ? z.userId : H.accountUserId;
      Q &&
        ee.userId &&
        Q !== ee.userId &&
        (A("[Shanks] account user changed; resetting local account data"),
        a({ accountUserId: ee.userId }));
      try {
        await b();
      } catch (se) {
        (S(
          "[Shanks] post sign-in flow failed:",
          se && se.stack ? se.stack : se,
        ),
          T({
            step: "error",
            code: se && se.code ? se.code : "error",
            message: se && se.message ? se.message : "",
          }));
      }
    }
    async function b() {
      let j = e();
      if (j && j.licenseKey) {
        (A("[Shanks] linking legacy license after Google sign-in"),
          await C(j.licenseKey, { legacy: !0 }));
        return;
      }
      A("[Shanks] checking existing account license after Google sign-in");
      let z = await t.adoptLinkedLicense();
      if (
        (A("[Shanks] existing account license check completed", {
          ok: !!z.ok,
          notLinked: !!z.notLinked,
          network: !!z.network,
          reason: z.reason || null,
        }),
        z.ok)
      ) {
        T({ step: "downloading" });
        try {
          await c();
        } catch (H) {
          (S(
            "[Shanks] account data download failed:",
            H && H.message ? H.message : H,
          ),
            T({
              step: "error",
              code: "download-failed",
              message: H && H.message ? H.message : "",
            }));
          return;
        }
        (d(), u());
        return;
      }
      if (z.notLinked) {
        T({ step: "license-required" });
        return;
      }
      T({
        step: "error",
        code: z.network ? "network" : z.reason || "error",
        message: z.message || "",
      });
    }
    async function C(j, z = {}) {
      T({ step: "linking" });
      try {
        await t.linkLicense(j);
      } catch (H) {
        return (
          S("[Shanks] license link failed:", H && H.code, H && H.message),
          T({
            step: "error",
            code: H && H.code ? H.code : "link-failed",
            message: H && H.message ? H.message : "",
          }),
          !1
        );
      }
      T({ step: "uploading" });
      try {
        await l();
      } catch (H) {
        S(
          "[Shanks] initial account data upload failed:",
          H && H.message ? H.message : H,
        );
      }
      return (z.legacy && r(), d(), T({ step: "linked" }), u(), !0);
    }
    function G(j) {
      let z = j && j.code ? String(j.code) : "";
      if (z === "http_404") return w("accountUnlinkNotDeployed");
      if (z === "not_linked") return w("accountUnlinkNotLinked");
      if (z === "unauthorized") return w("accountUnlinkSignedOut");
      let H = j && j.message ? String(j.message) : "";
      return H
        ? `${w("accountUnlinkFailed")}

${H}`
        : w("accountUnlinkFailed");
    }
    async function O(j = {}) {
      let z = j.confirmed === !0,
        H = _(),
        ee = R();
      if (
        !z &&
        (
          await h.showMessageBox(H || ee || void 0, {
            type: "warning",
            title: w("accountUnlinkTitle"),
            message: w("accountUnlinkTitle"),
            detail: w("accountUnlinkMessage"),
            buttons: [w("accountUnlinkConfirm"), w("accountUnlinkCancel")],
            defaultId: 1,
            cancelId: 1,
            noLink: !0,
            icon: g.existsSync(y) ? p.createFromPath(y) : void 0,
          })
        ).response !== 0
      )
        return { ok: !1, canceled: !0 };
      try {
        return (await t.unlinkLicense(), d(), f(""), { ok: !0 });
      } catch (Q) {
        return (
          S(
            "[Shanks] account license unlink failed:",
            Q && Q.stack ? Q.stack : Q,
          ),
          j.silent ||
            (await h.showMessageBox(H || ee || void 0, {
              type: "warning",
              title: w("accountUnlinkTitle"),
              message: G(Q),
              buttons: ["OK"],
              defaultId: 0,
              cancelId: 0,
            })),
          {
            ok: !1,
            reason: Q && Q.code ? Q.code : "error",
            message: Q && Q.message ? Q.message : "",
          }
        );
      }
    }
    async function L(j = {}) {
      let z = t.loadAccount();
      if (z && z.userId) {
        let H = n();
        ((H.accountUserId = z.userId), s(H));
      }
      return (
        await t.signOut(),
        o(),
        i(),
        d(),
        j.showLoginWindow && f(""),
        { ok: !0 }
      );
    }
    return {
      completeAccountLicenseLink: C,
      getUiAccountState: m,
      handleDeepLinkUrl: x,
      sendAccountFlowEvent: T,
      signOutCurrentAccount: L,
      unlinkCurrentAccountLicense: O,
    };
  }
  Uh.exports = { createAccountFlowService: Mb };
});
var Bh = F((OP, qh) => {
  "use strict";
  var Db = require("http"),
    Fh = require("path"),
    sc = "shanks",
    Ub = "127.0.0.1",
    $b = 38149,
    Fb = 38150;
  function qb({
    app: t,
    logInfo: e,
    logWarn: r,
    appDisplayName: n,
    t: s,
    escapeHtml: o,
    normalizeLanguage: i,
    getCurrentLanguage: a,
    handleDeepLinkUrl: c,
  }) {
    let l = null,
      d = !1,
      u = null;
    function f() {
      let b = t.getName && t.getName();
      return t.isPackaged && /\bdev\b/i.test(String(b || n() || ""));
    }
    function h() {
      return `${sc}://auth-callback`;
    }
    function p() {
      if (process.env.COMNYANG_OAUTH_REDIRECT_URL)
        return process.env.COMNYANG_OAUTH_REDIRECT_URL;
      if (!t.isPackaged)
        return `http://localhost:${Number.parseInt(process.env.COMNYANG_DEV_OAUTH_PORT || "3000", 10) || 3e3}/auth-callback`;
      let b = f() ? Fb : $b;
      return `http://${Ub}:${b}/auth-callback`;
    }
    function g(b) {
      try {
        return new URL(String(b || "")).protocol.replace(/:$/, "");
      } catch {
        return "";
      }
    }
    function y(b) {
      let C = g(b);
      if (!C || C === "http" || C === "https") return !1;
      let G = g(p());
      return C === sc || (G && C === G);
    }
    function w(b) {
      return String(b || "").replace(/\/+$/, "") || "/";
    }
    function A(b) {
      let C = String(b.hostname || "").replace(/^\/+|\/+$/g, ""),
        G = String(b.pathname || "").replace(/^\/+|\/+$/g, "");
      return [C, G].filter(Boolean).join("/").replace(/\/+$/, "");
    }
    function S(b) {
      try {
        let C = new URL(String(b || ""));
        return {
          scheme: C.protocol.replace(/:$/, ""),
          host: C.hostname || "",
          path: C.pathname || "",
        };
      } catch {
        return { scheme: g(b), host: "", path: "" };
      }
    }
    function D(b) {
      let C;
      try {
        C = new URL(String(b || ""));
      } catch {
        return !1;
      }
      let G = new URL(h());
      if (C.protocol === G.protocol && A(C) === A(G)) return !0;
      let O;
      try {
        O = new URL(p());
      } catch {
        return !1;
      }
      return O.protocol === "http:" || O.protocol === "https:"
        ? C.origin === O.origin && w(C.pathname) === w(O.pathname)
        : C.protocol === O.protocol && A(C) === A(O);
    }
    function B(b) {
      for (let C of b || []) if (typeof C == "string" && y(C)) return C;
      return null;
    }
    function R(b) {
      if (b) {
        if (
          (e("[Shanks] deep link received", {
            ...S(b),
            isOAuthCallback: D(b),
            ready: d,
          }),
          !d)
        ) {
          l = b;
          return;
        }
        c(b).catch((C) => {
          r(
            "[Shanks] deep link handling failed:",
            C && C.message ? C.message : C,
          );
        });
      }
    }
    function _() {
      if (((d = !0), !l)) return;
      let b = l;
      ((l = null), R(b));
    }
    function T() {
      let b = sc,
        C = g(p());
      if (!t.isPackaged && (C === "http" || C === "https")) {
        e(
          "[Shanks] deep link protocol registration skipped for loopback OAuth",
          { redirectUrl: p(), appName: n() },
        );
        return;
      }
      let G = !1;
      try {
        if (process.defaultApp) {
          let O = process.argv[1]
            ? Fh.resolve(process.argv[1])
            : Fh.resolve(".");
          G = t.setAsDefaultProtocolClient(b, process.execPath, [O]);
        } else G = t.setAsDefaultProtocolClient(b);
      } catch (O) {
        r(
          "[Shanks] deep link protocol registration failed:",
          O && O.message ? O.message : O,
        );
      }
      e("[Shanks] deep link protocol registration", {
        scheme: b,
        ok: G,
        defaultApp: !!process.defaultApp,
        redirectUrl: p(),
        redirectScheme: C,
        appName: n(),
      });
    }
    function m() {
      if (u) return;
      let b;
      try {
        b = new URL(p());
      } catch {
        return;
      }
      b.protocol !== "http:" ||
        !["localhost", "127.0.0.1"].includes(b.hostname) ||
        ((u = Db.createServer((C, G) => {
          let O = `${b.origin}${C.url || "/"}`;
          if (!D(O)) {
            (G.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }),
              G.end("Not found"));
            return;
          }
          e("[Shanks] loopback oauth callback received", { url: b.pathname });
          let L = i(a()),
            j = o(s("oauthCallbackTitle")),
            z = o(s("oauthCallbackMessage"));
          (G.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }),
            G.end(`<!doctype html>
<html lang="${L}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Shanks</title>
  </head>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:32px;line-height:1.5;">
    <h1 style="margin:0 0 12px;font-size:28px;">${j}</h1>
    <p style="margin:0;color:#4b5563;">${z}</p>
  </body>
</html>`),
            setImmediate(() => {
              c(O).catch((H) => {
                r(
                  "[Shanks] loopback oauth callback handling failed:",
                  H && H.stack ? H.stack : H,
                );
              });
            }));
        })),
        u.on("error", (C) => {
          r(
            "[Shanks] loopback oauth callback server failed:",
            C && C.message ? C.message : C,
          );
        }),
        u.listen(Number(b.port || 80), b.hostname, () => {
          e("[Shanks] loopback oauth callback server listening", {
            redirectUrl: b.href,
          });
        }));
    }
    function x() {
      if (u) {
        try {
          u.close();
        } catch {}
        u = null;
      }
    }
    return {
      oauthRedirectUrlForApp: p,
      deepLinkSchemeFromUrl: g,
      oauthCallbackLogFields: S,
      isOAuthCallbackUrl: D,
      extractDeepLinkUrl: B,
      dispatchDeepLink: R,
      markDeepLinksReady: _,
      registerDeepLinkProtocol: T,
      startOAuthCallbackServer: m,
      closeOAuthCallbackServer: x,
    };
  }
  qh.exports = { createDeepLinkService: qb };
});
var Wh = F((IP, Hh) => {
  "use strict";
  function Bb({
    accountManager: t,
    loadLicense: e,
    validateSavedLicense: r,
    licenseActivatePayload: n,
    returnToLicenseWindow: s,
    createLicenseWindow: o,
    startLicensedApp: i,
  }) {
    async function a(d = {}) {
      if (!e()) return { ok: !1, reason: "missing" };
      let u = await r(d);
      return (u.ok || u.network || s(n(u.reason || "")), u);
    }
    async function c(d = {}) {
      let u = t.loadAccount();
      if (t.isValidAccountLinked(u)) {
        let f = t.isEntitlementValid(u),
          h = d.forceAccountRefresh || !f;
        if (d.refreshAccount || h) {
          let p = await t.refreshEntitlement({ force: h });
          return p.ok
            ? { ok: !0, account: !0 }
            : p.revoked
              ? (s("revoked"),
                {
                  ok: !1,
                  account: !0,
                  reason: p.reason || "revoked",
                  revoked: !0,
                })
              : p.notLinked
                ? (s(""),
                  {
                    ok: !1,
                    account: !0,
                    reason: p.reason || "not_linked",
                    notLinked: !0,
                  })
                : f
                  ? {
                      ok: !0,
                      account: !0,
                      reason: p.reason || null,
                      network: !!p.network,
                    }
                  : {
                      ok: !1,
                      account: !0,
                      reason: p.reason || "reauth",
                      network: !!p.network,
                    };
        }
        return { ok: !0, account: !0 };
      }
      return a({ allowOffline: d.allowOfflineLicense !== !1 });
    }
    async function l() {
      let d = await t.resolveStartupState();
      if (d.state === "account-linked") {
        i();
        return;
      }
      if (d.state === "reauth-required") {
        o(d.revoked ? "revoked" : "reauth");
        return;
      }
      let u = await r();
      if (u.ok) i();
      else {
        let f = u.reason === "missing" ? "" : n(u.reason || "");
        o(f);
      }
    }
    return {
      checkAppAccessValidityNow: c,
      checkLicenseValidityNow: a,
      resolveStartupAndLaunch: l,
    };
  }
  Hh.exports = { createAppAccessService: Bb };
});
var Kh = F((xP, Vh) => {
  "use strict";
  function oc(t, e) {
    let r = String(t || "")
        .replace(/^v/i, "")
        .split(".")
        .map((s) => Number.parseInt(s, 10) || 0),
      n = String(e || "")
        .replace(/^v/i, "")
        .split(".")
        .map((s) => Number.parseInt(s, 10) || 0);
    for (let s = 0; s < Math.max(r.length, n.length, 3); s += 1) {
      if ((r[s] || 0) > (n[s] || 0)) return !0;
      if ((r[s] || 0) < (n[s] || 0)) return !1;
    }
    return !1;
  }
  function Hb({ app: t, sendUpdateState: e, checkAppAccessValidityNow: r }) {
    let n = !1,
      s = !1,
      o = null;
    function i() {
      return (o || ({ autoUpdater: o } = require("electron-updater")), o);
    }
    function a(f, h) {
      let p = h && h.version ? h.version : null;
      if (!oc(p, t.getVersion())) {
        (e({ state: s ? "none" : "idle" }), (s = !1));
        return;
      }
      (e({ state: f, version: p }), (s = !1));
    }
    function c() {
      let f = i();
      ((f.autoDownload = !1),
        (f.autoInstallOnAppQuit = !1),
        f.on("checking-for-update", () => {
          console.log("[Shanks] checking for updates");
        }),
        f.on("update-available", (h) => {
          a("available", h);
        }),
        f.on("update-not-available", () => {
          (e({ state: s ? "none" : "idle" }), (s = !1));
        }),
        f.on("download-progress", (h) => {
          e({
            state: "downloading",
            percent:
              h && Number.isFinite(h.percent) ? Math.round(h.percent) : null,
          });
        }),
        f.on("update-downloaded", (h) => {
          if (!oc(h && h.version, t.getVersion())) {
            e({ state: "idle" });
            return;
          }
          u();
        }),
        f.on("error", (h) => {
          (console.warn(
            "[Shanks] update error:",
            h && h.message ? h.message : h,
          ),
            e({ state: "idle" }),
            (s = !1));
        }));
    }
    async function l(f = {}) {
      if (!t.isPackaged) return { ok: !1, reason: "dev" };
      let h = !!f.manual,
        p = f.validateAccess !== !1,
        g = Object.prototype.hasOwnProperty.call(f, "allowOfflineLicense")
          ? f.allowOfflineLicense !== !1
          : !h;
      try {
        if ((h && ((s = !0), e({ state: "checking" })), p)) {
          console.log("[Shanks] validating app access before update check");
          let y = await r({
            allowOfflineLicense: g,
            refreshAccount: !0,
            forceAccountRefresh: h,
          });
          if (!y.ok)
            return (
              console.warn(
                "[Shanks] update check blocked by app access validation:",
                y.reason || "access-invalid",
              ),
              h && ((s = !1), e({ state: "idle" })),
              { ok: !1, reason: y.reason || "access-invalid" }
            );
          console.log(
            "[Shanks] app access validation passed before update check",
            y.offline ? "(offline)" : "",
          );
        }
        return (await i().checkForUpdates(), { ok: !0 });
      } catch (y) {
        return (
          h && ((s = !1), e({ state: "idle" })),
          { ok: !1, reason: y && y.message ? y.message : "update-check-failed" }
        );
      }
    }
    async function d() {
      if (!t.isPackaged) return { ok: !1, reason: "dev" };
      try {
        return (await i().downloadUpdate(), { ok: !0 });
      } catch (f) {
        return (
          e({ state: "idle" }),
          {
            ok: !1,
            reason: f && f.message ? f.message : "update-download-failed",
          }
        );
      }
    }
    function u() {
      if (!t.isPackaged) return { ok: !1, reason: "dev" };
      if (n) return { ok: !0 };
      let f = i();
      return (
        (n = !0),
        (f.autoInstallOnAppQuit = !0),
        e({ state: "restarting" }),
        setTimeout(() => {
          try {
            f.quitAndInstall(!1, !0);
          } catch (h) {
            ((n = !1),
              (f.autoInstallOnAppQuit = !1),
              console.warn(
                "[Shanks] update install failed:",
                h && h.message ? h.message : h,
              ),
              e({ state: "available" }));
          }
        }, 100),
        { ok: !0 }
      );
    }
    return {
      setupAutoUpdater: c,
      checkForUpdatesNow: l,
      downloadUpdate: d,
      installDownloadedUpdate: u,
    };
  }
  Vh.exports = { createAutoUpdateService: Hb, isVersionNewer: oc };
});
var Gh = F((NP, zh) => {
  "use strict";
  function Wb({
    createPetWindow: t,
    refreshAppTrayMenu: e,
    startKeyHook: r,
    stopKeyHook: n,
    startAgentIntegrations: s,
    stopAgentIntegrations: o,
    startStretchTimer: i,
    getStretchTimer: a,
    setStretchTimer: c,
    startDrinkTimer: l,
    getDrinkTimer: d,
    setDrinkTimer: u,
    startReminderTimer: f,
    stopReminderTimer: h,
    stopPomodoroTimer: p,
    hideShareCaptureOverlay: g,
    createLicenseWindow: y,
    powerMonitor: w,
    wakeSyncMinIntervalMs: A,
    logWarn: S,
    syncNow: D,
    clearSyncPolling: B,
    getLicenseWindow: R,
    getPatternWindow: _,
    getMappingWindow: T,
    getPetWindow: m,
  }) {
    let x = 0;
    function b(ee) {
      let Q = ee();
      return Q && !Q.isDestroyed() ? Q : null;
    }
    function C() {
      let ee = a();
      ee && (clearInterval(ee), c(null));
    }
    function G() {
      let ee = d();
      ee && (clearInterval(ee), u(null));
    }
    function O(ee, Q) {
      try {
        Q();
      } catch (se) {
        S(
          `[Shanks] ${ee} failed to start:`,
          se && se.message ? se.message : se,
        );
      }
    }
    function L() {
      (t(),
        e(),
        O("key hook", r),
        O("agent integrations", s),
        O("stretch timer", i),
        O("drink timer", l),
        O("reminder timer", f),
        D("startup").catch((Q) => {
          S("[Shanks] startup sync failed:", Q && Q.message ? Q.message : Q);
        }));
      let ee = b(R);
      ee && ee.close();
    }
    function j() {
      (B(), n(), o(), C(), G(), h(), p(), g());
    }
    function z(ee = "invalid") {
      (j(), y(ee));
      let Q = b(_),
        se = b(T),
        be = b(m);
      (Q && Q.close(), se && se.close(), be && be.close());
    }
    function H() {
      !w ||
        typeof w.on != "function" ||
        w.on("resume", () => {
          let ee = Date.now();
          ee - x < A ||
            ((x = ee),
            D("wake").catch((Q) => {
              S("[Shanks] wake sync failed:", Q && Q.message ? Q.message : Q);
            }));
        });
    }
    return {
      clearStretchTimer: C,
      registerWakeSyncHandler: H,
      returnToLicenseWindow: z,
      startLicensedApp: L,
      stopLicensedRuntime: j,
    };
  }
  zh.exports = { createAppSessionController: Wb };
});
var Yh = F((LP, Jh) => {
  "use strict";
  function Vb({
    app: t,
    isSmokeTest: e,
    isAgentHookCli: r,
    logInfo: n,
    logWarn: s,
    extractDeepLinkUrl: o,
    dispatchDeepLink: i,
    deepLinkSchemeFromUrl: a,
    getLicenseWindow: c,
    getPetWindow: l,
  }) {
    function d() {
      let h = e || r || t.requestSingleInstanceLock();
      return (
        h ||
          (s("[Shanks] another instance is already running; quitting", {
            appName: t.getName && t.getName(),
            userDataPath: t.getPath && t.getPath("userData"),
          }),
          t.quit()),
        h
      );
    }
    function u() {
      let h = [c(), l()].find((p) => p && !p.isDestroyed());
      h &&
        (h.isMinimized() && h.restore(),
        h.show(),
        h.isFocusable() && h.focus());
    }
    function f() {
      r ||
        (t.on("second-instance", (h, p) => {
          let g = o(p);
          (n("[Shanks] second-instance", { hasDeepLink: !!g }), i(g), u());
        }),
        t.on("open-url", (h, p) => {
          (h.preventDefault(),
            n("[Shanks] open-url", { scheme: a(p) }),
            i(p));
        }),
        i(o(process.argv)));
    }
    return {
      focusExistingAppWindow: u,
      registerDeepLinkEntryPoints: f,
      requestSingleInstanceLock: d,
    };
  }
  Jh.exports = { createAppInstanceController: Vb };
});
var Qh = F((jP, Xh) => {
  "use strict";
  function Kb({
    regularCheckIntervalMs: t,
    checkAppAccessValidityNow: e,
    checkForUpdatesNow: r,
  }) {
    let n = null,
      s = !1;
    async function o() {
      if (!s) {
        s = !0;
        try {
          if (!(await e({ refreshAccount: !0, forceAccountRefresh: !0 })).ok)
            return;
          await r({ validateAccess: !1 });
        } finally {
          s = !1;
        }
      }
    }
    function i() {
      (n && clearInterval(n),
        setTimeout(() => o().catch(() => {}), 1e4),
        (n = setInterval(() => {
          o().catch(() => {});
        }, t)));
    }
    function a() {
      n && (clearInterval(n), (n = null));
    }
    return { regularCheck: o, scheduleRegularChecks: i, stopRegularChecks: a };
  }
  Xh.exports = { createRegularChecksController: Kb };
});
var rf = F((MP, tf) => {
  "use strict";
  var zb = require("http"),
    Zh = 23456,
    ef = "/agent-state";
  function Gb(t, e) {
    let r = JSON.stringify(t || {}),
      n = !1,
      s = () => {
        n || ((n = !0), e && e());
      },
      o = Number(process.env.COMNYANG_AGENT_STATE_PORT) || Zh,
      i = zb.request(
        {
          hostname: "127.0.0.1",
          port: o,
          path: ef,
          method: "POST",
          timeout: 120,
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(r),
          },
        },
        (a) => {
          (a.resume(), a.on("end", s));
        },
      );
    (i.on("timeout", () => {
      (i.destroy(), s());
    }),
      i.on("error", s),
      i.on("close", s),
      i.end(r));
  }
  tf.exports = { DEFAULT_AGENT_PORT: Zh, STATE_PATH: ef, postAgentState: Gb };
});
var cc = F((DP, lf) => {
  "use strict";
  var Jb = {
      SessionStart: "idle",
      SessionEnd: "idle",
      UserPromptSubmit: "thinking",
      PreToolUse: "working",
      PermissionRequest: "notification",
      PostToolUse: "working",
      PostToolUseFailure: "error",
      Stop: "complete",
      StopFailure: "error",
      Notification: "notification",
      Elicitation: "notification",
    },
    Yb = {
      PreInvocation: "thinking",
      PreToolUse: "working",
      PostToolUse: "working",
      PostInvocation: "working",
    };
  function ic(t = 80) {
    return new Promise((e) => {
      let r = !1,
        n = "",
        s = () => {
          if (!r) {
            r = !0;
            try {
              e(JSON.parse(n || "{}"));
            } catch {
              e({});
            }
          }
        };
      (process.stdin.setEncoding("utf8"),
        process.stdin.on("data", (o) => {
          n += o;
        }),
        process.stdin.on("end", s),
        process.stdin.resume(),
        setTimeout(s, t).unref());
    });
  }
  function Ls(t, e = 0) {
    t && typeof t.exit == "function" ? t.exit(e) : process.exit(e);
  }
  function nf(t, e) {
    return t === "Stop"
      ? e && (e.error || e.terminationReason === "error")
        ? "error"
        : e && e.fullyIdle === !1
          ? "working"
          : "complete"
      : t === "PostToolUse" && e && e.error
        ? "error"
        : Yb[t] || "";
  }
  function sf(t) {
    let e = t && Array.isArray(t.workspacePaths) ? t.workspacePaths : [];
    return typeof e[0] == "string" ? e[0] : "";
  }
  function of(t) {
    return t === "PreToolUse"
      ? { decision: "allow" }
      : t === "Stop"
        ? { decision: "allow" }
        : t === "PostInvocation"
          ? { injectSteps: [], terminationBehavior: "" }
          : {};
  }
  function Xb(t) {
    return !t || typeof t != "object"
      ? ""
      : typeof t.cwd == "string"
        ? t.cwd
        : Array.isArray(t.workspace_roots) &&
            typeof t.workspace_roots[0] == "string"
          ? t.workspace_roots[0]
          : "";
  }
  function af() {
    return {};
  }
  function cf(t, e) {
    if (t === "beforeSubmitPrompt") return "thinking";
    if (t === "preToolUse" || t === "postToolUse") return "working";
    if (t === "postToolUseFailure") return "error";
    if (t === "afterAgentThought") return "thinking";
    if (t === "beforeShellExecution" || t === "beforeMCPExecution")
      return "working";
    if (t === "stop") {
      let r = String((e && e.status) || "").toLowerCase();
      return r === "completed" || r === "success"
        ? "complete"
        : r.includes("error") || r.includes("fail") || r.includes("cancel")
          ? "error"
          : "idle";
    }
    return "";
  }
  async function ac(t) {
    let { postAgentState: e } = rf();
    await new Promise((r) => {
      e(t, r);
    });
  }
  async function Qb({ app: t, cliFlag: e, logWarn: r }) {
    let n = process.argv.indexOf(e);
    if (n < 0) return !1;
    try {
      let s = await ic();
      if (s && s.cursor_version) return (Ls(t, 0), !0);
      let o = process.argv[n + 1] || s.hook_event_name,
        i = Jb[o];
      if (o === "Notification") {
        let a = String((s && s.message) || "").toLowerCase();
        (a.includes("waiting for your input") ||
          a.includes("waiting for input")) &&
          (i = void 0);
      }
      i &&
        (await ac({
          agentId: "claude-code",
          event: o,
          state: i,
          sessionId: s.session_id || "claude-code",
          cwd: s.cwd || "",
        }));
    } catch (s) {
      r("[Shanks] Claude hook CLI failed:", s && s.message ? s.message : s);
    }
    return (Ls(t, 0), !0);
  }
  async function Zb({ app: t, cliFlag: e, logWarn: r }) {
    let n = process.argv.indexOf(e);
    if (n < 0) return !1;
    try {
      let s = process.argv[n + 1],
        o = await ic(),
        i = nf(s, o);
      (i &&
        (await ac({
          agentId: "antigravity",
          event: s,
          state: i,
          sessionId: o.conversationId || "antigravity",
          cwd: sf(o),
        })),
        process.stdout.write(`${JSON.stringify(of(s))}
`));
    } catch (s) {
      (r(
        "[Shanks] Antigravity hook CLI failed:",
        s && s.message ? s.message : s,
      ),
        process.stdout.write(`{}
`));
    }
    return (Ls(t, 0), !0);
  }
  async function e0({ app: t, cliFlag: e, logWarn: r }) {
    let n = process.argv.indexOf(e);
    if (n < 0) return !1;
    try {
      let s = await ic(),
        o = process.argv[n + 1] || s.hook_event_name || "",
        i = cf(o, s);
      (i &&
        (await ac({
          agentId: "cursor",
          event: o,
          state: i,
          sessionId: s.conversation_id || s.session_id || "cursor",
          cwd: Xb(s),
        })),
        process.stdout.write(`${JSON.stringify(af(o))}
`));
    } catch (s) {
      (r("[Shanks] Cursor hook CLI failed:", s && s.message ? s.message : s),
        process.stdout.write(`{}
`));
    }
    return (Ls(t, 0), !0);
  }
  function t0({
    app: t,
    logWarn: e,
    isCursorHookCli: r,
    isAntigravityHookCli: n,
    cursorHookCliFlag: s,
    antigravityHookCliFlag: o,
    claudeHookCliFlag: i,
  }) {
    (r
      ? () => e0({ app: t, cliFlag: s, logWarn: e })
      : n
        ? () => Zb({ app: t, cliFlag: o, logWarn: e })
        : () => Qb({ app: t, cliFlag: i, logWarn: e }))().catch((c) => {
      (e("[Shanks] agent hook CLI failed:", c && c.message ? c.message : c),
        (n || r) &&
          process.stdout.write(`{}
`),
        Ls(t, 0));
    });
  }
  lf.exports = {
    startAgentHookCli: t0,
    antigravityStateForEvent: nf,
    antigravityCwdFromPayload: sf,
    antigravityHookResponse: of,
    cursorStateForEvent: cf,
    cursorHookResponse: af,
  };
});
var wr = F((UP, hf) => {
  "use strict";
  var zr = require("fs"),
    $t = require("path"),
    Bn = require("os"),
    { execFileSync: r0 } = require("child_process"),
    Kr = "--shanks-claude-hook",
    uc = "shanks-claude-hook.js",
    _r = "--shanks-antigravity-hook",
    js = "shanks-antigravity-hook.js",
    dc = "agentId='antigravity'",
    Fn = "--shanks-cursor-hook",
    hc = "shanks-cursor-hook.js",
    uf = "agentId='cursor'",
    fc = [
      "SessionStart",
      "SessionEnd",
      "UserPromptSubmit",
      "PreToolUse",
      "PermissionRequest",
      "PostToolUse",
      "PostToolUseFailure",
      "Stop",
      "StopFailure",
      "Notification",
      "Elicitation",
    ],
    pc = [
      "PreInvocation",
      "PostInvocation",
      "PreToolUse",
      "PostToolUse",
      "Stop",
    ],
    gc = [
      "beforeSubmitPrompt",
      "preToolUse",
      "postToolUse",
      "postToolUseFailure",
      "afterAgentThought",
      "stop",
      "beforeShellExecution",
      "beforeMCPExecution",
    ];
  function mc() {
    let t = [
      process.env.NODE || "",
      "/opt/homebrew/bin/node",
      "/usr/local/bin/node",
      "/usr/bin/node",
      "node",
    ].filter(Boolean);
    for (let e of t)
      try {
        return (r0(e, ["--version"], { stdio: "ignore", timeout: 1e3 }), e);
      } catch {}
    return "node";
  }
  function Hn(t) {
    try {
      let e = zr.readFileSync(t, "utf8").replace(/^\uFEFF/, "");
      return JSON.parse(e);
    } catch (e) {
      if (e && e.code !== "ENOENT") throw e;
      return {};
    }
  }
  function yc(t) {
    try {
      let e = zr.openSync(t, "r"),
        r = Buffer.alloc(3),
        n = zr.readSync(e, r, 0, 3, 0);
      return (
        zr.closeSync(e),
        n === 3 && r[0] === 239 && r[1] === 187 && r[2] === 191
      );
    } catch {
      return !1;
    }
  }
  function Wn(t, e) {
    zr.mkdirSync($t.dirname(t), { recursive: !0 });
    let r = `${t}.${process.pid}.tmp`;
    (zr.writeFileSync(
      r,
      `${JSON.stringify(e, null, 2)}
`,
    ),
      zr.renameSync(r, t));
  }
  function n0(t) {
    let e = String(t || "").match(/-EncodedCommand\s+("[^"]+"|'[^']+'|\S+)/i);
    if (!e) return "";
    let r = e[1].replace(/^["']|["']$/g, "");
    try {
      return Buffer.from(r, "base64").toString("utf16le");
    } catch {
      return "";
    }
  }
  function vr(t, e) {
    return e
      ? Array.isArray(e)
        ? df(t, e)
        : String(t || "").includes(e)
          ? !0
          : n0(t).includes(e)
      : !1;
  }
  function Qo(t, e, r, n) {
    let s = Array.isArray(r) ? r : [r],
      o = !1,
      i = !1;
    if (!Array.isArray(t)) return { found: o, changed: i };
    let a = (l) => df(l, s) || l === e,
      c = (l) => {
        typeof n == "number" && l.timeout !== n && ((l.timeout = n), (i = !0));
      };
    for (let l = 0; l < t.length; l++) {
      let d = t[l];
      if (!(!d || typeof d != "object")) {
        if (typeof d.command == "string" && a(d.command))
          if (!o)
            ((o = !0), d.command !== e && ((d.command = e), (i = !0)), c(d));
          else {
            (t.splice(l, 1), l--, (i = !0));
            continue;
          }
        if (Array.isArray(d.hooks)) {
          for (let u = 0; u < d.hooks.length; u++) {
            let f = d.hooks[u];
            !f ||
              typeof f.command != "string" ||
              !a(f.command) ||
              (o
                ? (d.hooks.splice(u, 1), u--, (i = !0))
                : ((o = !0),
                  f.command !== e && ((f.command = e), (i = !0)),
                  c(f)));
          }
          d.hooks.length === 0 &&
            typeof d.command != "string" &&
            (t.splice(l, 1), l--, (i = !0));
        }
      }
    }
    return { found: o, changed: i };
  }
  function df(t, e) {
    return (Array.isArray(e) ? e : [e]).some((n) => vr(t, n));
  }
  function vt(t, e) {
    if (!Array.isArray(t)) return { removed: 0, entries: t };
    let r = 0,
      n = [];
    for (let s of t) {
      if (!s || typeof s != "object") {
        n.push(s);
        continue;
      }
      if (typeof s.command == "string" && vr(s.command, e)) {
        r++;
        continue;
      }
      if (Array.isArray(s.hooks)) {
        let o = s.hooks.length;
        if (
          ((s.hooks = s.hooks.filter(
            (i) => !(i && typeof i.command == "string" && vr(i.command, e)),
          )),
          (r += o - s.hooks.length),
          s.hooks.length === 0)
        )
          continue;
      }
      n.push(s);
    }
    return { removed: r, entries: n };
  }
  function s0(t, e) {
    if (!Array.isArray(t)) return { removed: 0, entries: t };
    let r = 0,
      n = [];
    for (let s of t) {
      if (!s || typeof s != "object") {
        n.push(s);
        continue;
      }
      if (typeof s.command == "string" && e(s.command)) {
        r++;
        continue;
      }
      if (Array.isArray(s.hooks)) {
        let o = s.hooks.length;
        if (
          ((s.hooks = s.hooks.filter(
            (i) => !(i && typeof i.command == "string" && e(i.command)),
          )),
          (r += o - s.hooks.length),
          s.hooks.length === 0)
        )
          continue;
      }
      n.push(s);
    }
    return { removed: r, entries: n };
  }
  function o0(t) {
    return t.includes(Kr)
      ? t.includes("node_modules/electron") ||
          t.includes("Electron.app/Contents/MacOS/Electron") ||
          t.includes("electron/dist/Electron")
      : !1;
  }
  function qn(t) {
    return `"${String(t).replace(/"/g, '\\"')}"`;
  }
  function i0(t, e = {}) {
    if (typeof e.commandBuilder == "function") return e.commandBuilder(t);
    if (e.appCommand) return `${e.appCommand} ${Kr} ${t}`;
    let r = e.hookScript || $t.join(__dirname, "shanks-claude-hook.js"),
      n = e.nodeBin || mc();
    return `${qn(n)} ${qn(r)} ${t}`;
  }
  function a0(t, e = {}) {
    if (typeof e.commandBuilder == "function") return e.commandBuilder(t);
    if (e.appCommand) return `${e.appCommand} ${_r} ${t}`;
    let r = e.hookScript || $t.join(__dirname, "shanks-antigravity-hook.js"),
      n = e.nodeBin || mc();
    return `${qn(n)} ${qn(r)} ${t}`;
  }
  function c0(t, e = {}) {
    if (typeof e.commandBuilder == "function") return e.commandBuilder(t);
    if (e.appCommand) return `${e.appCommand} ${Fn} ${t}`;
    let r = e.hookScript || $t.join(__dirname, "shanks-cursor-hook.js"),
      n = e.nodeBin || mc();
    return `${qn(n)} ${qn(r)} ${t}`;
  }
  function l0(t = {}) {
    let e = t.settingsPath || $t.join(Bn.homedir(), ".claude", "settings.json"),
      r = Hn(e);
    (!r.hooks || typeof r.hooks != "object") && (r.hooks = {});
    let n = 0,
      s = 0,
      o = 0,
      i = yc(e);
    for (let a of fc) {
      if (!Array.isArray(r.hooks[a])) {
        let u = r.hooks[a];
        ((r.hooks[a] = u && typeof u == "object" ? [u] : []), (i = !0));
      }
      let c = i0(a, t),
        l = vr(c, Kr) ? Kr : uc;
      if (l === Kr) {
        let u = vt(r.hooks[a], uc),
          f = s0(u.entries, o0);
        (u.removed > 0 || f.removed > 0) &&
          ((r.hooks[a] = f.entries), (o += u.removed + f.removed), (i = !0));
      } else {
        let u = vt(r.hooks[a], Kr);
        u.removed > 0 && ((r.hooks[a] = u.entries), (o += u.removed), (i = !0));
      }
      let d = Qo(r.hooks[a], c, l);
      if (d.found) {
        d.changed && (s++, (i = !0));
        continue;
      }
      (r.hooks[a].push({
        matcher: "",
        hooks: [{ type: "command", command: c }],
      }),
        n++,
        (i = !0));
    }
    return (
      i && Wn(e, r),
      { added: n, updated: s, removed: o, settingsPath: e }
    );
  }
  function lc(t) {
    return Array.isArray(t) ? t : t && typeof t == "object" ? [t] : [];
  }
  function u0(t = {}) {
    let e =
        t.settingsPath ||
        $t.join(Bn.homedir(), ".gemini", "config", "hooks.json"),
      r = Hn(e),
      n = t.hookName || "shanks",
      s = r[n] && typeof r[n] == "object" ? r[n] : {};
    ((r[n] = s), (s.enabled = s.enabled !== !1));
    let o = 0,
      i = 0,
      a = 0,
      c = yc(e);
    for (let l of pc) {
      let d = a0(l, t);
      if (!d) {
        s[l] = lc(s[l]);
        let g = vt(s[l], [_r, js, dc]);
        g.removed > 0 && ((s[l] = g.entries), (a += g.removed), (c = !0));
        continue;
      }
      let u = vr(d, _r) ? [_r, dc] : js,
        f = vr(d, _r),
        h = 15;
      if (l === "PreToolUse" || l === "PostToolUse") {
        if (((s[l] = lc(s[l])), f)) {
          let y = vt(s[l], js);
          y.removed > 0 && ((s[l] = y.entries), (a += y.removed), (c = !0));
        } else {
          let y = vt(s[l], _r);
          y.removed > 0 && ((s[l] = y.entries), (a += y.removed), (c = !0));
        }
        let g = Qo(s[l], d, u, h);
        if (g.found) {
          g.changed && (i++, (c = !0));
          continue;
        }
        (s[l].push({
          matcher: "",
          hooks: [{ type: "command", command: d, timeout: h }],
        }),
          o++,
          (c = !0));
        continue;
      }
      if (((s[l] = lc(s[l])), f)) {
        let g = vt(s[l], js);
        g.removed > 0 && ((s[l] = g.entries), (a += g.removed), (c = !0));
      } else {
        let g = vt(s[l], _r);
        g.removed > 0 && ((s[l] = g.entries), (a += g.removed), (c = !0));
      }
      let p = Qo(s[l], d, u, h);
      if (p.found) {
        p.changed && (i++, (c = !0));
        continue;
      }
      (s[l].push({ type: "command", command: d, timeout: h }), o++, (c = !0));
    }
    return (
      c && Wn(e, r),
      { added: o, updated: i, removed: a, settingsPath: e }
    );
  }
  function d0(t = {}) {
    let e = t.settingsPath || $t.join(Bn.homedir(), ".cursor", "hooks.json"),
      r = Hn(e);
    ((!r.hooks || typeof r.hooks != "object") && (r.hooks = {}),
      r.version || (r.version = 1));
    let n = 0,
      s = 0,
      o = 0,
      i = yc(e);
    for (let a of gc) {
      if (!Array.isArray(r.hooks[a])) {
        let u = r.hooks[a];
        ((r.hooks[a] = u && typeof u == "object" ? [u] : []), (i = !0));
      }
      let c = c0(a, t),
        l = vr(c, Fn) ? [Fn, uf] : hc;
      if (vr(c, Fn)) {
        let u = vt(r.hooks[a], hc);
        u.removed > 0 && ((r.hooks[a] = u.entries), (o += u.removed), (i = !0));
      } else {
        let u = vt(r.hooks[a], Fn);
        u.removed > 0 && ((r.hooks[a] = u.entries), (o += u.removed), (i = !0));
      }
      let d = Qo(r.hooks[a], c, l);
      if (d.found) {
        d.changed && (s++, (i = !0));
        continue;
      }
      (r.hooks[a].push({ command: c }), n++, (i = !0));
    }
    return (
      i && Wn(e, r),
      { added: n, updated: s, removed: o, settingsPath: e }
    );
  }
  function h0(t = {}) {
    let e = t.settingsPath || $t.join(Bn.homedir(), ".claude", "settings.json"),
      r = Hn(e);
    if (!r.hooks || typeof r.hooks != "object")
      return { removed: 0, settingsPath: e };
    let n = 0;
    for (let s of fc) {
      if (!Array.isArray(r.hooks[s])) continue;
      let o = vt(r.hooks[s], [Kr, uc]);
      ((r.hooks[s] = o.entries), (n += o.removed));
    }
    return (n > 0 && Wn(e, r), { removed: n, settingsPath: e });
  }
  function f0(t = {}) {
    let e =
        t.settingsPath ||
        $t.join(Bn.homedir(), ".gemini", "config", "hooks.json"),
      r = Hn(e),
      n = t.hookName || "shanks",
      s = r[n];
    if (!s || typeof s != "object") return { removed: 0, settingsPath: e };
    let o = 0,
      i = [_r, js, dc];
    for (let a of pc) {
      if (!Array.isArray(s[a])) continue;
      let c = vt(s[a], i);
      ((s[a] = c.entries), (o += c.removed));
    }
    return (o > 0 && Wn(e, r), { removed: o, settingsPath: e });
  }
  function p0(t = {}) {
    let e = t.settingsPath || $t.join(Bn.homedir(), ".cursor", "hooks.json"),
      r = Hn(e);
    if (!r.hooks || typeof r.hooks != "object")
      return { removed: 0, settingsPath: e };
    let n = 0,
      s = [Fn, hc, uf];
    for (let o of gc) {
      if (!Array.isArray(r.hooks[o])) continue;
      let i = vt(r.hooks[o], s);
      ((r.hooks[o] = i.entries), (n += i.removed));
    }
    return (n > 0 && Wn(e, r), { removed: n, settingsPath: e });
  }
  hf.exports = {
    CLAUDE_HOOK_EVENTS: fc,
    ANTIGRAVITY_HOOK_EVENTS: pc,
    CURSOR_HOOK_EVENTS: gc,
    registerAntigravityHooks: u0,
    registerClaudeHooks: l0,
    registerCursorHooks: d0,
    unregisterAntigravityHooks: f0,
    unregisterClaudeHooks: h0,
    unregisterCursorHooks: p0,
  };
});
var pf = F(($P, ff) => {
  "use strict";
  function g0({ app: t, cliFlag: e, logWarn: r }) {
    if (!process.argv.includes(e)) return !1;
    try {
      let {
        unregisterClaudeHooks: n,
        unregisterAntigravityHooks: s,
        unregisterCursorHooks: o,
      } = wr();
      (n(), s(), o());
    } catch (n) {
      r &&
        r(
          "[Shanks] hook cleanup CLI failed:",
          n && n.message ? n.message : n,
        );
    }
    return (t && typeof t.exit == "function" ? t.exit(0) : process.exit(0), !0);
  }
  ff.exports = { runHookCleanupCli: g0 };
});
var _f = F((FP, yf) => {
  "use strict";
  var gf = require("path");
  function _c(t) {
    return `"${String(t).replace(/"/g, '\\"')}"`;
  }
  function Vn(t) {
    return `'${String(t).replace(/'/g, "''")}'`;
  }
  function mf(t) {
    return Buffer.from(t, "utf16le").toString("base64");
  }
  function m0(t) {
    return (
      gf.basename(String(t || ""), gf.extname(String(t || ""))).trim() ||
      "Shanks"
    );
  }
  function y0({
    isWindows: t,
    antigravityHookCliFlag: e,
    cursorHookCliFlag: r,
    agentStatePort: n,
  }) {
    function s(c, l) {
      if (t) {
        let d = m0(process.execPath),
          u = `if (Get-Process -Name ${Vn(d)} -ErrorAction SilentlyContinue) { $env:ELECTRON_RUN_AS_NODE='1'; & ${Vn(process.execPath)} ${Vn(c)} ${Vn(l)} } else { Write-Output '{}' }`;
        return `powershell.exe -NoProfile -ExecutionPolicy Bypass -EncodedCommand ${mf(u)}`;
      }
      return `/usr/bin/env ELECTRON_RUN_AS_NODE=1 ${_c(process.execPath)} ${_c(c)} ${_c(l)}`;
    }
    function o(c, l) {
      return i(l);
    }
    function i(c) {
      if (c === "PreToolUse") return "";
      let d =
          c === "Stop" || c === "PostToolUse" ? "--data-binary @-" : "-d {}",
        u = `http://127.0.0.1:${n}/agent-state/antigravity/${c}`;
      return `curl -s -m 2 -o NUL -X POST ${d} ${u} & echo {}& rem ${e}`;
    }
    function a(c) {
      let l = [
        `$null=${Vn(r)}`,
        "$ErrorActionPreference='SilentlyContinue'",
        "$ProgressPreference='SilentlyContinue'",
        `$event=${Vn(c)}`,
        "$raw=[Console]::In.ReadToEnd()",
        "$payload=$null",
        "try { if ($raw) { $payload=$raw | ConvertFrom-Json } } catch {}",
        "$state=''",
        "if ($event -eq 'beforeSubmitPrompt') { $state='thinking' }",
        "elseif ($event -eq 'preToolUse' -or $event -eq 'postToolUse') { $state='working' }",
        "elseif ($event -eq 'postToolUseFailure') { $state='error' }",
        "elseif ($event -eq 'afterAgentThought') { $state='thinking' }",
        "elseif ($event -eq 'beforeShellExecution' -or $event -eq 'beforeMCPExecution') { $state='working' }",
        "elseif ($event -eq 'stop') {",
        "  $status=if ($payload -and $payload.status) { [string]$payload.status } else { '' }",
        "  $status=$status.ToLowerInvariant()",
        "  if ($status -eq 'completed' -or $status -eq 'success') { $state='complete' }",
        "  elseif ($status.Contains('error') -or $status.Contains('fail') -or $status.Contains('cancel')) { $state='error' }",
        "  else { $state='idle' }",
        "}",
        "$sessionId='cursor'",
        "$cwd=''",
        "if ($payload -and $payload.cwd) { $cwd=[string]$payload.cwd }",
        "elseif ($payload -and $payload.workspace_roots -and $payload.workspace_roots.Count -gt 0) { $cwd=[string]$payload.workspace_roots[0] }",
        "if ($state) {",
        "  $body=@{agentId='cursor';event=$event;state=$state;sessionId=$sessionId;cwd=$cwd} | ConvertTo-Json -Compress",
        `  try { Invoke-WebRequest -UseBasicParsing -TimeoutSec 1 -Uri 'http://127.0.0.1:${n}/agent-state' -Method Post -ContentType 'application/json' -Body $body | Out-Null } catch {}`,
        "}",
        "Write-Output '{}'",
      ].join(`
`);
      return `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -EncodedCommand ${mf(l)}`;
    }
    return {
      buildEmbeddedNodeHookCommand: s,
      buildWindowsWrapperHookCommand: o,
      buildWindowsCursorHttpHookCommand: a,
    };
  }
  yf.exports = { createHookCommandBuilders: y0 };
});
var bf = F((qP, wf) => {
  "use strict";
  var er = require("fs"),
    Kn = require("path"),
    _0 = require("os"),
    vf = 50,
    v0 = 65536,
    w0 = 14,
    b0 = 12e4,
    S0 = 8e3,
    vc = class {
      constructor(e) {
        ((this._onStateChange = e),
          (this._interval = null),
          (this._tracked = new Map()),
          (this._baseDir = Kn.join(_0.homedir(), ".codex", "sessions")),
          (this._startedAtMs = Date.now()));
      }
      start() {
        this._interval ||
          ((this._startedAtMs = Date.now()),
          this._poll(),
          (this._interval = setInterval(() => this._poll(), 1500)));
      }
      stop() {
        (this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
          this._tracked.clear());
      }
      _poll() {
        let e = Date.now(),
          r = new Set(this._tracked.keys());
        for (let n of this._getSessionDirs()) {
          let s;
          try {
            s = er.readdirSync(n);
          } catch {
            continue;
          }
          for (let o of s)
            !o.startsWith("rollout-") ||
              !o.endsWith(".jsonl") ||
              r.add(Kn.join(n, o));
        }
        for (let n of r) {
          if (!this._tracked.has(n))
            try {
              if (e - er.statSync(n).mtimeMs > b0) continue;
            } catch {
              continue;
            }
          this._pollFile(n, Kn.basename(n));
        }
        this._cleanStaleFiles();
      }
      _getSessionDirs() {
        let e = [],
          r;
        try {
          r = er.readdirSync(this._baseDir);
        } catch {
          return [];
        }
        for (let n of r) {
          if (!/^\d{4}$/.test(n)) continue;
          let s = Kn.join(this._baseDir, n),
            o;
          try {
            o = er.readdirSync(s);
          } catch {
            continue;
          }
          for (let i of o) {
            if (!/^\d{2}$/.test(i)) continue;
            let a = Kn.join(s, i),
              c;
            try {
              c = er.readdirSync(a);
            } catch {
              continue;
            }
            for (let l of c)
              /^\d{2}$/.test(l) &&
                e.push({ key: n + i + l, path: Kn.join(a, l) });
          }
        }
        return (
          e.sort((n, s) => (n.key < s.key ? 1 : n.key > s.key ? -1 : 0)),
          e.slice(0, w0).map((n) => n.path)
        );
      }
      _pollFile(e, r) {
        let n;
        try {
          n = er.statSync(e);
        } catch {
          return;
        }
        let s = this._tracked.get(e);
        if (!s) {
          let c = this._extractSessionId(r);
          if (!c) return;
          (this._tracked.size >= vf && this._cleanStaleFiles(!0),
            (s = {
              offset: 0,
              partial: "",
              sessionId: `codex:${c}`,
              cwd: "",
              lastEventTime: Date.now(),
              lastState: null,
              lastNotificationEvent: "",
              activeTurn: !1,
              hadToolUse: !1,
              hadAgentMessage: !1,
              approvalPolicy: "",
            }),
            this._tracked.set(e, s));
        }
        if (n.size <= s.offset) return;
        let o;
        try {
          let c = er.openSync(e, "r");
          ((o = Buffer.alloc(n.size - s.offset)),
            er.readSync(c, o, 0, o.length, s.offset),
            er.closeSync(c));
        } catch {
          return;
        }
        ((s.offset = n.size), (s.lastEventTime = Date.now()));
        let i = (s.partial + o.toString("utf8")).split(`
`),
          a = i.pop() || "";
        s.partial = a.length > v0 ? "" : a;
        for (let c of i) c.trim() && this._processLine(c, s);
      }
      _processLine(e, r) {
        let n;
        try {
          n = JSON.parse(e);
        } catch {
          return;
        }
        if (typeof n.timestamp == "string") {
          let l = Date.parse(n.timestamp);
          if (Number.isFinite(l) && l < this._startedAtMs - 1500) return;
        }
        let s = n.type,
          o = n.payload,
          i = (o && typeof o == "object" && o.type) || "",
          a = i ? `${s}:${i}` : s,
          c = (o && typeof o == "object" && o.name) || "";
        if (
          (console.log(
            `[Shanks] log-line codex: ${a}${c ? ` name=${c}` : ""} session=${r.sessionId} policy=${r.approvalPolicy || "?"}`,
          ),
          s === "session_meta" && o)
        ) {
          ((r.cwd = o.cwd || ""),
            typeof o.approval_policy == "string" &&
              (r.approvalPolicy = o.approval_policy));
          return;
        }
        if (s === "turn_context" && o) {
          (typeof o.cwd == "string" && o.cwd && (r.cwd = o.cwd),
            typeof o.approval_policy == "string" &&
              (r.approvalPolicy = o.approval_policy));
          return;
        }
        if (a === "event_msg:task_started" || a === "event_msg:user_message") {
          ((r.activeTurn = !0),
            (r.hadToolUse = !1),
            (r.hadAgentMessage = !1),
            this._emit(r, "thinking", a));
          return;
        }
        if (a === "event_msg:agent_message" || a === "response_item:message") {
          r.hadAgentMessage = !0;
          return;
        }
        if (this._isUserInterventionRequest(n, r)) {
          let l = o && (o.id || o.call_id);
          this._emitNotification(r, l ? `${a}:${l}` : a);
          return;
        }
        if (
          a === "response_item:function_call" ||
          a === "response_item:custom_tool_call" ||
          a === "response_item:web_search_call"
        ) {
          ((r.hadToolUse = !0), this._emit(r, "working", a));
          return;
        }
        if (
          a === "event_msg:exec_command_end" ||
          a === "event_msg:patch_apply_end" ||
          a === "event_msg:custom_tool_call_output"
        ) {
          this._emit(r, "working", a);
          return;
        }
        if (a === "event_msg:task_complete") {
          if (!r.activeTurn) return;
          (this._emit(
            r,
            r.hadToolUse || r.hadAgentMessage ? "complete" : "idle",
            a,
          ),
            (r.activeTurn = !1),
            (r.hadToolUse = !1),
            (r.hadAgentMessage = !1));
          return;
        }
        a === "event_msg:turn_aborted" &&
          ((r.activeTurn = !1), this._emit(r, "idle", a));
      }
      _isUserInterventionRequest(e, r) {
        let n = e && e.payload;
        if (!n || typeof n != "object" || n.type !== "function_call") return !1;
        if (
          n.name === "request_user_input" ||
          n.name === "request_plugin_install"
        )
          return !0;
        if (n.name === "exec_command" || n.name === "shell_command") {
          let s = {};
          try {
            s = JSON.parse(n.arguments || "{}");
          } catch {
            s = {};
          }
          if (!s || s.sandbox_permissions !== "require_escalated") return !1;
          let o = String((r && r.approvalPolicy) || "");
          return !(o === "never" || o === "on-failure");
        }
        return !1;
      }
      _emitNotification(e, r) {
        let n = Date.now();
        (e.lastNotificationEvent === r && n - e.lastEventTime < 5e3) ||
          ((e.lastNotificationEvent = r), this._emit(e, "notification", r));
      }
      _emit(e, r, n) {
        let s = Date.now();
        (r === e.lastState &&
          r === "working" &&
          s - (e.lastEmitAt || 0) < S0) ||
          ((e.lastState = r),
          (e.lastEmitAt = s),
          (e.lastEventTime = s),
          this._onStateChange({
            agentId: "codex",
            sessionId: e.sessionId,
            state: r,
            event: n,
            cwd: e.cwd,
          }));
      }
      _extractSessionId(e) {
        let n = e.replace(".jsonl", "").split("-");
        return n.length >= 10 ? n.slice(-5).join("-") : null;
      }
      _cleanStaleFiles(e = !1) {
        let r = Date.now();
        for (let [n, s] of this._tracked)
          if (
            ((e || r - s.lastEventTime > 3e5) && this._tracked.delete(n),
            !e && this._tracked.size <= vf)
          )
            break;
      }
    };
  wf.exports = vc;
});
var kf = F((BP, Sf) => {
  "use strict";
  var zn = require("fs"),
    wc = require("path"),
    k0 = require("os"),
    Zo = 80,
    A0 = 65536,
    E0 = 8e3,
    bc = class {
      constructor(e) {
        ((this._onStateChange = e),
          (this._interval = null),
          (this._tracked = new Map()),
          (this._baseDir = wc.join(k0.homedir(), ".claude", "projects")),
          (this._startedAtMs = Date.now()));
      }
      start() {
        this._interval ||
          ((this._startedAtMs = Date.now()),
          this._poll(),
          (this._interval = setInterval(() => this._poll(), 1500)));
      }
      stop() {
        (this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
          this._tracked.clear());
      }
      _poll() {
        for (let e of this._getSessionFiles()) this._pollFile(e);
        this._cleanStaleFiles();
      }
      _getSessionFiles() {
        let e = [],
          r = (n, s) => {
            if (s > 3 || e.length >= Zo) return;
            let o;
            try {
              o = zn.readdirSync(n, { withFileTypes: !0 });
            } catch {
              return;
            }
            for (let i of o) {
              let a = wc.join(n, i.name);
              if (i.isDirectory()) {
                if (i.name === "subagents") continue;
                r(a, s + 1);
                continue;
              }
              if (i.name.endsWith(".jsonl"))
                try {
                  Date.now() - zn.statSync(a).mtimeMs <= 6e5 && e.push(a);
                } catch {}
            }
          };
        return (r(this._baseDir, 0), e);
      }
      _pollFile(e) {
        let r;
        try {
          r = zn.statSync(e);
        } catch {
          return;
        }
        let n = this._tracked.get(e);
        if (
          (n ||
            (this._tracked.size >= Zo && this._cleanStaleFiles(!0),
            (n = {
              offset: r.size,
              partial: "",
              sessionId: wc.basename(e, ".jsonl"),
              cwd: "",
              lastEventTime: Date.now(),
              lastState: null,
              activeTurn: !1,
            }),
            this._tracked.set(e, n)),
          r.size < n.offset && (n.offset = 0),
          r.size <= n.offset)
        )
          return;
        let s;
        try {
          let i = zn.openSync(e, "r");
          ((s = Buffer.alloc(r.size - n.offset)),
            zn.readSync(i, s, 0, s.length, n.offset),
            zn.closeSync(i));
        } catch {
          return;
        }
        n.offset = r.size;
        let o = (n.partial + s.toString("utf8")).split(`
`);
        ((n.partial = o.pop() || ""),
          n.partial.length > A0 && (n.partial = ""));
        for (let i of o) i.trim() && this._processLine(i, n);
      }
      _processLine(e, r) {
        let n;
        try {
          n = JSON.parse(e);
        } catch {
          return;
        }
        if (typeof n.timestamp == "string") {
          let o = Date.parse(n.timestamp);
          if (Number.isFinite(o) && o < this._startedAtMs - 1500) return;
        }
        (typeof n.cwd == "string" && (r.cwd = n.cwd),
          typeof n.sessionId == "string" && (r.sessionId = n.sessionId));
        let s = this._eventForObject(n, r);
        (console.log(
          `[Shanks] log-line claude-code: type=${n.type || "?"}${s ? ` -> ${s.state} (${s.event})` : " -> (no match)"} session=${r.sessionId || "?"}`,
        ),
          s &&
            ((s.state === "complete" && !r.activeTurn) ||
              (this._emit(r, s.state, s.event),
              s.state === "thinking" ||
              s.state === "working" ||
              s.state === "notification"
                ? (r.activeTurn = !0)
                : (s.state === "complete" ||
                    s.state === "idle" ||
                    s.state === "error") &&
                  (r.activeTurn = !1))));
      }
      _eventForObject(e, r) {
        if (e.type === "user" && e.message && e.message.role === "user") {
          let o = Array.isArray(e.message.content) ? e.message.content : [];
          return this._isInterruptMessage(o)
            ? { state: "idle", event: "interrupted" }
            : o.some((i) => i && i.type === "tool_result")
              ? { state: "working", event: "tool-result" }
              : { state: "thinking", event: "user-message" };
        }
        if (
          e.type !== "assistant" ||
          !e.message ||
          e.message.role !== "assistant"
        )
          return null;
        let s = (
          Array.isArray(e.message.content) ? e.message.content : []
        ).find((o) => o && o.type === "tool_use");
        return s
          ? this._isApprovalTool(s)
            ? { state: "notification", event: s.name || "approval-required" }
            : { state: "working", event: s.name || "tool-use" }
          : e.message.stop_reason === "end_turn"
            ? { state: "complete", event: "end-turn" }
            : { state: "thinking", event: "assistant-message" };
      }
      _isInterruptMessage(e) {
        let r = (n) =>
          typeof n == "string" && n.startsWith("[Request interrupted by user");
        for (let n of e)
          if (
            (typeof n == "string" && r(n)) ||
            (n && n.type === "text" && r(n.text))
          )
            return !0;
        return !1;
      }
      _isApprovalTool(e) {
        let r = String((e && e.name) || "");
        if (r === "TodoWrite") return !1;
        if (r === "AskUserQuestion" || r === "ExitPlanMode") return !0;
        let n = e && e.input && typeof e.input == "object" ? e.input : {};
        return n.permission === "ask" || n.requires_permission === !0;
      }
      _emit(e, r, n) {
        let s = Date.now();
        (r === e.lastState &&
          r === "working" &&
          s - (e.lastEmitAt || 0) < E0) ||
          ((e.lastState = r),
          (e.lastEmitAt = s),
          (e.lastEventTime = s),
          this._onStateChange({
            agentId: "claude-code",
            sessionId: e.sessionId,
            state: r,
            event: n,
            cwd: e.cwd,
          }));
      }
      _cleanStaleFiles(e = !1) {
        let r = Date.now();
        for (let [n, s] of this._tracked)
          if (
            ((e ||
              r - s.lastEventTime > 600 * 1e3 ||
              this._tracked.size > Zo) &&
              this._tracked.delete(n),
            !e && this._tracked.size <= Zo)
          )
            break;
      }
    };
  Sf.exports = bc;
});
var Cf = F((HP, Tf) => {
  "use strict";
  var Gn = require("fs"),
    tr = require("path"),
    ti = require("os"),
    ei = 80,
    T0 = 65536,
    Af = 1500;
  function Ef(t) {
    return process.platform === "win32"
      ? tr.join(
          process.env.APPDATA || tr.join(ti.homedir(), "AppData", "Roaming"),
          t,
        )
      : process.platform === "darwin"
        ? tr.join(ti.homedir(), "Library", "Application Support", t)
        : tr.join(
            process.env.XDG_CONFIG_HOME || tr.join(ti.homedir(), ".config"),
            t,
          );
  }
  var Sc = class {
    constructor(e) {
      ((this._onStateChange = e),
        (this._interval = null),
        (this._tracked = new Map()),
        (this._startedAtMs = Date.now()),
        (this._lastState = null),
        (this._lastEventTime = 0),
        (this._activeAgent = !1));
    }
    start() {
      this._interval ||
        ((this._startedAtMs = Date.now()),
        this._poll(),
        (this._interval = setInterval(() => this._poll(), 1500)));
    }
    stop() {
      (this._interval &&
        (clearInterval(this._interval), (this._interval = null)),
        this._tracked.clear());
    }
    _logRoots() {
      return [
        tr.join(ti.homedir(), ".gemini", "antigravity-cli", "log"),
        tr.join(Ef("Antigravity IDE"), "logs"),
        tr.join(Ef("Antigravity"), "logs"),
      ];
    }
    _poll() {
      for (let e of this._getLogFiles()) this._pollFile(e);
      this._cleanStaleFiles();
    }
    _getLogFiles() {
      let e = [],
        r = (n, s) => {
          if (s > 4 || e.length >= ei) return;
          let o;
          try {
            o = Gn.readdirSync(n, { withFileTypes: !0 });
          } catch {
            return;
          }
          for (let i of o) {
            let a = tr.join(n, i.name);
            if (i.isDirectory()) {
              r(a, s + 1);
              continue;
            }
            if (i.name.endsWith(".log"))
              try {
                Date.now() - Gn.statSync(a).mtimeMs <= 6e5 && e.push(a);
              } catch {}
          }
        };
      for (let n of this._logRoots()) r(n, 0);
      return e;
    }
    _pollFile(e) {
      let r;
      try {
        r = Gn.statSync(e);
      } catch {
        return;
      }
      let n = this._tracked.get(e);
      if (!n) {
        let i = Number.isFinite(r.birthtimeMs) ? r.birthtimeMs : r.ctimeMs,
          a = Number.isFinite(i) && i >= this._startedAtMs - Af;
        (this._tracked.size >= ei && this._cleanStaleFiles(!0),
          (n = {
            offset: a ? 0 : r.size,
            partial: "",
            sessionId: "antigravity",
            cwd: "",
            lastEventTime: Date.now(),
          }),
          this._tracked.set(e, n));
      }
      if ((r.size < n.offset && (n.offset = 0), r.size <= n.offset)) return;
      let s;
      try {
        let i = Gn.openSync(e, "r");
        ((s = Buffer.alloc(r.size - n.offset)),
          Gn.readSync(i, s, 0, s.length, n.offset),
          Gn.closeSync(i));
      } catch {
        return;
      }
      n.offset = r.size;
      let o = (n.partial + s.toString("utf8")).split(`
`);
      ((n.partial = o.pop() || ""), n.partial.length > T0 && (n.partial = ""));
      for (let i of o) i.trim() && this._processLine(i, n);
    }
    _processLine(e, r) {
      let n = this._lineTimeMs(e);
      if (n !== null && n < this._startedAtMs - Af) return;
      let s = this._eventForLine(e);
      (s &&
        console.log(
          `[Shanks] log-line antigravity: -> ${s.state} (${s.event})`,
        ),
        s &&
          (s.sessionId && (r.sessionId = "antigravity"),
          s.cwd && (r.cwd = s.cwd),
          !(s.state === "complete" && !this._activeAgent) &&
            ((r.lastEventTime = Date.now()),
            this._emit(r, s.state, s.event),
            s.state === "thinking" ||
            s.state === "working" ||
            s.state === "notification"
              ? (this._activeAgent = !0)
              : (s.state === "complete" ||
                  s.state === "idle" ||
                  s.state === "error") &&
                (this._activeAgent = !1))));
    }
    _eventForLine(e) {
      let r = String(e || "").match(/conversation ([0-9a-f-]{20,})/i),
        n = String(e || "").toLowerCase();
      return n.includes("handleuserinput called") ||
        n.includes("sending user message to conversation")
        ? { state: "thinking", event: "user-message", sessionId: r && r[1] }
        : n.includes("streamgeneratecontent") || n.includes("generatecontent")
          ? { state: "working", event: "model-request", sessionId: r && r[1] }
          : n.includes("drip stopped")
            ? {
                state: "complete",
                event: "response-complete",
                sessionId: r && r[1],
              }
            : n.includes("terminal gone") ||
                n.includes("program exited") ||
                n.includes("shutting down")
              ? { state: "idle", event: "shutdown", sessionId: r && r[1] }
              : null;
    }
    _lineTimeMs(e) {
      let r = String(e || ""),
        n = r.match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2}\.\d{3})/);
      if (n) {
        let c = Date.parse(`${n[1]}T${n[2]}`);
        return Number.isFinite(c) ? c : null;
      }
      if (((n = r.match(/^[IWEF](\d{4})\s+(\d{2}:\d{2}:\d{2}\.\d{6})/)), !n))
        return null;
      let s = new Date(),
        o = Number(n[1].slice(0, 2)),
        i = Number(n[1].slice(2, 4)),
        a = Date.parse(
          `${s.getFullYear()}-${String(o).padStart(2, "0")}-${String(i).padStart(2, "0")}T${n[2].slice(0, 12)}`,
        );
      return Number.isFinite(a) ? a : null;
    }
    _emit(e, r, n) {
      (r === this._lastState && Date.now() - this._lastEventTime < 1e3) ||
        ((this._lastState = r),
        (this._lastEventTime = Date.now()),
        this._onStateChange({
          agentId: "antigravity",
          sessionId: e.sessionId,
          state: r,
          event: n,
          cwd: e.cwd,
        }));
    }
    _cleanStaleFiles(e = !1) {
      let r = Date.now();
      for (let [n, s] of this._tracked)
        if (
          ((e || r - s.lastEventTime > 600 * 1e3 || this._tracked.size > ei) &&
            this._tracked.delete(n),
          !e && this._tracked.size <= ei)
        )
          break;
    }
  };
  Tf.exports = Sc;
});
var xf = F((WP, If) => {
  "use strict";
  var Ft = require("fs"),
    qt = require("path"),
    kc = require("os"),
    Pf = 50,
    C0 = 65536,
    Rf = 1500;
  function Of(t) {
    return process.platform === "win32"
      ? qt.join(
          process.env.APPDATA || qt.join(kc.homedir(), "AppData", "Roaming"),
          t,
        )
      : process.platform === "darwin"
        ? qt.join(kc.homedir(), "Library", "Application Support", t)
        : qt.join(
            process.env.XDG_CONFIG_HOME || qt.join(kc.homedir(), ".config"),
            t,
          );
  }
  var Ac = class {
    constructor(e) {
      ((this._onStateChange = e),
        (this._interval = null),
        (this._tracked = new Map()),
        (this._baseDir = qt.join(Of("Kiro"), "logs")),
        (this._workspaceSessionsDir = qt.join(
          Of("Kiro"),
          "User",
          "globalStorage",
          "kiro.kiroagent",
          "workspace-sessions",
        )),
        (this._startedAtMs = Date.now()),
        (this._lastState = null),
        (this._lastEventTime = 0),
        (this._activeAgent = !1),
        (this._activeSinceMs = 0));
    }
    start() {
      this._interval ||
        ((this._startedAtMs = Date.now()),
        this._poll(),
        (this._interval = setInterval(() => this._poll(), 1500)));
    }
    stop() {
      (this._interval &&
        (clearInterval(this._interval), (this._interval = null)),
        this._tracked.clear());
    }
    _poll() {
      for (let e of this._getLogFiles()) this._pollFile(e);
      (this._pollSessionStateFiles(), this._cleanStaleFiles());
    }
    _pollSessionStateFiles() {
      if (!this._activeAgent) return;
      let e;
      try {
        e = Ft.readdirSync(this._workspaceSessionsDir, { withFileTypes: !0 });
      } catch {
        return;
      }
      for (let r of e) {
        if (!r.isDirectory()) continue;
        let n = qt.join(this._workspaceSessionsDir, r.name),
          s;
        try {
          s = Ft.readdirSync(n);
        } catch {
          continue;
        }
        for (let o of s)
          if (
            !(o === "sessions.json" || !o.endsWith(".json")) &&
            (this._pollSessionStateFile(qt.join(n, o)), !this._activeAgent)
          )
            return;
      }
    }
    _pollSessionStateFile(e) {
      let r;
      try {
        r = Ft.statSync(e);
      } catch {
        return;
      }
      if (Date.now() - r.mtimeMs > 600 * 1e3 || r.mtimeMs < this._activeSinceMs)
        return;
      let n;
      try {
        n = JSON.parse(Ft.readFileSync(e, "utf8"));
      } catch {
        return;
      }
      !n ||
        typeof n != "object" ||
        n.active !== !1 ||
        (console.log(
          "[Shanks] log-line kiro (session-state): -> complete (session-inactive)",
        ),
        this._emit("complete", "session-inactive"),
        (this._activeAgent = !1));
    }
    _getLogFiles() {
      let e = [],
        r = (n, s) => {
          if (s > 5 || e.length >= Pf) return;
          let o;
          try {
            o = Ft.readdirSync(n, { withFileTypes: !0 });
          } catch {
            return;
          }
          for (let i of o) {
            let a = qt.join(n, i.name);
            if (i.isDirectory()) {
              r(a, s + 1);
              continue;
            }
            if (i.name === "Kiro Logs.log" || i.name === "q-client.log")
              try {
                Date.now() - Ft.statSync(a).mtimeMs <= 6e5 && e.push(a);
              } catch {}
          }
        };
      return (r(this._baseDir, 0), e);
    }
    _pollFile(e) {
      let r;
      try {
        r = Ft.statSync(e);
      } catch {
        return;
      }
      let n = this._tracked.get(e);
      if (!n) {
        let i = Number.isFinite(r.birthtimeMs) ? r.birthtimeMs : r.ctimeMs;
        ((n = {
          offset:
            Number.isFinite(i) && i >= this._startedAtMs - Rf ? 0 : r.size,
          partial: "",
          lastEventTime: Date.now(),
        }),
          this._tracked.set(e, n));
      }
      if ((r.size < n.offset && (n.offset = 0), r.size <= n.offset)) return;
      let s;
      try {
        let i = Ft.openSync(e, "r");
        ((s = Buffer.alloc(r.size - n.offset)),
          Ft.readSync(i, s, 0, s.length, n.offset),
          Ft.closeSync(i));
      } catch {
        return;
      }
      n.offset = r.size;
      let o = (n.partial + s.toString("utf8")).split(`
`);
      ((n.partial = o.pop() || ""), n.partial.length > C0 && (n.partial = ""));
      for (let i of o) i.trim() && this._processLine(i, n);
    }
    _processLine(e, r) {
      let n = this._lineTimeMs(e);
      if (n !== null && n < this._startedAtMs - Rf) return;
      let s = this._eventForLine(e);
      (s && console.log(`[Shanks] log-line kiro: -> ${s.state} (${s.event})`),
        s &&
          ((s.state === "complete" && !this._activeAgent) ||
            ((r.lastEventTime = Date.now()),
            this._emit(s.state, s.event),
            s.state === "thinking" || s.state === "working"
              ? (this._activeAgent || (this._activeSinceMs = Date.now()),
                (this._activeAgent = !0))
              : (s.state === "complete" ||
                  s.state === "idle" ||
                  s.state === "error") &&
                (this._activeAgent = !1))));
    }
    _eventForLine(e) {
      return e.includes("[agent-controller] Triggered new agent")
        ? { state: "thinking", event: "agent-start" }
        : e.includes("[Execution] Completed with abort") ||
            e.includes("[AgentExecution] Abort triggered")
          ? { state: "idle", event: "agent-abort" }
          : e.includes("[Execution] Completed")
            ? { state: "complete", event: "agent-complete" }
            : e.includes("[AgentIterator] Parallel invoking agent") ||
                e.includes("[AgentIterator] Detecting intent") ||
                e.includes('"commandName":"GenerateAssistantResponseCommand"')
              ? { state: "working", event: "agent-working" }
              : null;
    }
    _lineTimeMs(e) {
      let r = String(e || "").match(
        /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2}\.\d{3})/,
      );
      if (!r) return null;
      let n = Date.parse(`${r[1]}T${r[2]}`);
      return Number.isFinite(n) ? n : null;
    }
    _emit(e, r) {
      (e === this._lastState && Date.now() - this._lastEventTime < 1e3) ||
        ((this._lastState = e),
        (this._lastEventTime = Date.now()),
        this._onStateChange({
          agentId: "kiro",
          sessionId: "kiro",
          state: e,
          event: r,
          cwd: "",
        }));
    }
    _cleanStaleFiles() {
      let e = Date.now();
      for (let [r, n] of this._tracked)
        (e - n.lastEventTime > 600 * 1e3 || this._tracked.size > Pf) &&
          this._tracked.delete(r);
    }
  };
  If.exports = Ac;
});
var jf = F((VP, Lf) => {
  "use strict";
  var br = require("fs"),
    Sr = require("path"),
    Ec = require("os"),
    Nf = 80,
    P0 = 65536,
    Tc = 1500;
  function R0(t) {
    return process.platform === "win32"
      ? Sr.join(
          process.env.APPDATA || Sr.join(Ec.homedir(), "AppData", "Roaming"),
          t,
        )
      : process.platform === "darwin"
        ? Sr.join(Ec.homedir(), "Library", "Application Support", t)
        : Sr.join(
            process.env.XDG_CONFIG_HOME || Sr.join(Ec.homedir(), ".config"),
            t,
          );
  }
  var Cc = class {
    constructor(e) {
      ((this._onStateChange = e),
        (this._interval = null),
        (this._tracked = new Map()));
      let r = R0("Cursor");
      ((this._baseDir = Sr.join(r, "logs")),
        (this._sentryScopePath = Sr.join(r, "sentry", "scope_v3.json")),
        (this._startedAtMs = Date.now()),
        (this._lastSentryTimestamp = this._startedAtMs / 1e3),
        (this._lastNotificationAt = 0),
        (this._lastNotificationLine = ""),
        (this._lastState = null),
        (this._lastEventTime = 0),
        (this._activeAgent = !1));
    }
    start() {
      this._interval ||
        ((this._startedAtMs = Date.now()),
        (this._lastSentryTimestamp = this._startedAtMs / 1e3),
        this._poll(),
        (this._interval = setInterval(() => this._poll(), 1500)));
    }
    stop() {
      (this._interval &&
        (clearInterval(this._interval), (this._interval = null)),
        this._tracked.clear());
    }
    _poll() {
      for (let e of this._getLogFiles()) this._pollFile(e);
      (this._pollSentryScope(), this._cleanStaleFiles());
    }
    _getLogFiles() {
      let e = [],
        r = (n, s) => {
          if (s > 5 || e.length >= Nf) return;
          let o;
          try {
            o = br.readdirSync(n, { withFileTypes: !0 });
          } catch {
            return;
          }
          for (let i of o) {
            let a = Sr.join(n, i.name);
            if (i.isDirectory()) {
              r(a, s + 1);
              continue;
            }
            if (i.name.endsWith(".log"))
              try {
                Date.now() - br.statSync(a).mtimeMs <= 6e5 && e.push(a);
              } catch {}
          }
        };
      return (r(this._baseDir, 0), e);
    }
    _pollFile(e) {
      let r;
      try {
        r = br.statSync(e);
      } catch {
        return;
      }
      let n = this._tracked.get(e);
      if (!n) {
        let i = Number.isFinite(r.birthtimeMs) ? r.birthtimeMs : r.ctimeMs;
        ((n = {
          offset:
            Number.isFinite(i) && i >= this._startedAtMs - Tc ? 0 : r.size,
          partial: "",
          lastEventTime: Date.now(),
        }),
          this._tracked.set(e, n));
      }
      if ((r.size < n.offset && (n.offset = 0), r.size <= n.offset)) return;
      let s;
      try {
        let i = br.openSync(e, "r");
        ((s = Buffer.alloc(r.size - n.offset)),
          br.readSync(i, s, 0, s.length, n.offset),
          br.closeSync(i));
      } catch {
        return;
      }
      n.offset = r.size;
      let o = (n.partial + s.toString("utf8")).split(`
`);
      ((n.partial = o.pop() || ""), n.partial.length > P0 && (n.partial = ""));
      for (let i of o) i.trim() && this._processLine(i, n);
    }
    _processLine(e, r) {
      let n = this._lineTimeMs(e);
      if (n !== null && n < this._startedAtMs - Tc) return;
      let s = this._eventForLine(e);
      (s &&
        console.log(
          `[Shanks] log-line cursor (text): -> ${s.state} (${s.event})`,
        ),
        s &&
          ((s.state === "complete" && !this._activeAgent) ||
            ((r.lastEventTime = Date.now()),
            this._emit(s.state, s.event),
            s.state === "thinking" || s.state === "working"
              ? (this._activeAgent = !0)
              : (s.state === "complete" ||
                  s.state === "idle" ||
                  s.state === "error") &&
                (this._activeAgent = !1))));
    }
    _eventForLine(e) {
      return this._isApprovalLine(e)
        ? { state: "notification", event: "approval-required" }
        : null;
    }
    _isApprovalLine(e) {
      let r = String(e || "").toLowerCase();
      if (
        !r ||
        (this._lastNotificationLine === e &&
          Date.now() - this._lastNotificationAt < 5e3) ||
        !/agent|composer|chat|tool|terminal|command|mcp|apply/.test(r)
      )
        return !1;
      let s = [
        "action required",
        "approval required",
        "waiting for approval",
        "awaiting approval",
        "needs approval",
        "requires approval",
        "approve command",
        "approve tool",
        "confirm command",
        "confirm tool",
        "permission required",
        "needs permission",
        "requires permission",
        "needs_user_approval",
        "needs_input",
        "waiting for user",
        "requires user confirmation",
      ].some((o) => r.includes(o));
      return (
        s &&
          ((this._lastNotificationLine = e),
          (this._lastNotificationAt = Date.now())),
        s
      );
    }
    _pollSentryScope() {
      let e;
      try {
        e = br.statSync(this._sentryScopePath);
      } catch {
        return;
      }
      if (Date.now() - e.mtimeMs > 600 * 1e3) return;
      let r;
      try {
        r = JSON.parse(br.readFileSync(this._sentryScopePath, "utf8"));
      } catch {
        return;
      }
      let n =
          r && r.scope && Array.isArray(r.scope.breadcrumbs)
            ? r.scope.breadcrumbs
            : [],
        s = this._lastSentryTimestamp;
      for (let o of n) {
        let i = Number(o && o.timestamp);
        if (
          !Number.isFinite(i) ||
          i <= this._lastSentryTimestamp ||
          i * 1e3 < this._startedAtMs - Tc
        )
          continue;
        i > s && (s = i);
        let a = this._eventForBreadcrumb(o);
        (console.log(
          `[Shanks] log-line cursor (sentry): category=${o.category || "?"} message=${o.message || "?"}${a ? ` -> ${a.state} (${a.event})` : " -> (no match)"}`,
        ),
          a && this._emit(a.state, a.event, a.sessionId));
      }
      this._lastSentryTimestamp = s;
    }
    _eventForBreadcrumb(e) {
      let r = String((e && e.message) || ""),
        n = String((e && e.category) || ""),
        s = e && e.data && typeof e.data == "object" ? e.data : {};
      return n === "agent.update" && r === "turnEnded"
        ? { state: "complete", event: "turn-ended", sessionId: "cursor" }
        : n === "agent.update" && r === "stepCompleted"
          ? { state: "working", event: "step-completed", sessionId: "cursor" }
          : r === "composer.agent_trajectory_stopped" &&
              (s.stop_category === "needs_user_approval" ||
                String(s.reason_code || "").includes("needs_input"))
            ? {
                state: "notification",
                event: "approval-required",
                sessionId: "cursor",
              }
            : r === "ask_question_invoked" && s.submitted === !1
              ? {
                  state: "notification",
                  event: "approval-required",
                  sessionId: "cursor",
                }
              : null;
    }
    _lineTimeMs(e) {
      let r = String(e || "").match(
        /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2}\.\d{3})/,
      );
      if (!r) return null;
      let n = Date.parse(`${r[1]}T${r[2]}`);
      return Number.isFinite(n) ? n : null;
    }
    _emit(e, r, n = "cursor") {
      (e === this._lastState && Date.now() - this._lastEventTime < 1e3) ||
        ((this._lastState = e),
        (this._lastEventTime = Date.now()),
        this._onStateChange({
          agentId: "cursor",
          sessionId: n,
          state: e,
          event: r,
          cwd: "",
        }));
    }
    _cleanStaleFiles() {
      let e = Date.now();
      for (let [r, n] of this._tracked)
        (e - n.lastEventTime > 600 * 1e3 || this._tracked.size > Nf) &&
          this._tracked.delete(r);
    }
  };
  Lf.exports = Cc;
});
var Uf = F((KP, Df) => {
  "use strict";
  var Gr = require("fs"),
    O0 = require("http"),
    kr = require("os"),
    He = require("path"),
    { readJsonFile: I0, writeJsonFile: x0 } = Xo(),
    N0 = 600 * 1e3,
    Mf = 3e3;
  function rr(...t) {
    try {
      return Gr.existsSync(He.join(...t));
    } catch {
      return !1;
    }
  }
  function L0(t = new Date()) {
    let e = t.getFullYear(),
      r = String(t.getMonth() + 1).padStart(2, "0"),
      n = String(t.getDate()).padStart(2, "0");
    return `${e}-${r}-${n}`;
  }
  function ri(t) {
    return process.platform === "win32"
      ? He.join(
          process.env.APPDATA || He.join(kr.homedir(), "AppData", "Roaming"),
          t,
        )
      : process.platform === "darwin"
        ? He.join(kr.homedir(), "Library", "Application Support", t)
        : He.join(
            process.env.XDG_CONFIG_HOME || He.join(kr.homedir(), ".config"),
            t,
          );
  }
  function Pc() {
    return rr(kr.homedir(), ".claude");
  }
  function Rc() {
    return rr(kr.homedir(), ".gemini", "config");
  }
  function Oc() {
    return rr(kr.homedir(), ".cursor");
  }
  function j0() {
    return rr(kr.homedir(), ".codex");
  }
  function M0() {
    return rr(ri("Kiro"));
  }
  function D0() {
    return rr(ri("Cursor"));
  }
  function U0() {
    return (
      rr(kr.homedir(), ".gemini", "antigravity-cli") ||
      rr(ri("Antigravity IDE")) ||
      rr(ri("Antigravity"))
    );
  }
  function $0(t) {
    return t === "cursor"
      ? Oc() || D0()
      : t === "claude"
        ? Pc()
        : t === "antigravity"
          ? Rc() || U0()
          : t === "codex"
            ? j0()
            : t === "kiro"
              ? M0()
              : !1;
  }
  function F0({
    app: t,
    isWindows: e,
    agentStatePort: r,
    sourceHookDir: n,
    logInfo: s,
    sendPetAgentEvent: o,
    captureAnalytics: i,
    buildEmbeddedNodeHookCommand: a,
    buildWindowsWrapperHookCommand: c,
    buildWindowsCursorHttpHookCommand: l,
    getAgentMonitoringOverride: d,
  }) {
    function u(v) {
      let k = typeof d == "function" ? d(v) : void 0;
      return typeof k == "boolean" ? k : $0(v);
    }
    let f = null,
      h = null,
      p = null,
      g = null,
      y = null,
      w = null,
      A = new Map(),
      S = new Map(),
      D = null;
    function B() {
      return He.join(t.getPath("userData"), "agent-last-used.json");
    }
    function R(v) {
      if (!v) return;
      D || (D = I0(B()) || {});
      let k = L0();
      if (D[v] !== k) {
        D[v] = k;
        try {
          x0(B(), D);
        } catch (N) {
          console.warn(
            "[Shanks] failed to persist agent-last-used.json:",
            N && N.message,
          );
        }
        typeof i == "function" &&
          i(
            "ai_agent_used",
            {},
            { setProperties: { [`${v}_last_used_date`]: k } },
          );
      }
    }
    function _(v) {
      if (!v || typeof v != "object") return;
      let k = typeof v.state == "string" ? v.state : "";
      if (!k) return;
      let N = v.agentId || "agent",
        P = v.event || "",
        M = te[N] || N;
      if (!u(M)) {
        console.log(
          `[Shanks] agent-state <- ${N} ${k} (${P || "?"}) IGNORED (monitoring off)`,
        );
        return;
      }
      (console.log(
        `[Shanks] agent-state <- ${N} ${k} (${P || "?"}) session=${v.sessionId || ""}`,
      ),
        (N === "antigravity" || k === "complete" || k === "error") &&
          s("[Shanks] agent state event", {
            agentId: N,
            state: k,
            event: P,
            sessionId: v.sessionId || "",
          }));
      let ne = v.sessionId || N,
        ue = `${N}:${ne}`,
        We =
          N === "antigravity" &&
          k === "complete" &&
          ne === "antigravity" &&
          (P === "PostInvocation" || P === "Stop"),
        Te = Date.now();
      for (let [pe, rt] of A)
        (!rt || Te - rt.lastActiveAt > N0) && A.delete(pe);
      for (let [pe, rt] of S) (!rt || Te - rt > Mf) && S.delete(pe);
      let Je = () => {
          for (let [pe] of A) if (pe.startsWith(`${N}:`)) return !0;
          return !1;
        },
        qe = () => {
          for (let [pe] of A) if (pe.startsWith(`${N}:`)) return pe;
          return "";
        },
        kt = () => {
          for (let [pe] of A) pe.startsWith(`${N}:`) && A.delete(pe);
        };
      if (k === "thinking" || k === "working" || k === "notification") {
        if (
          ((k === "thinking" || k === "working") && R(M), k === "notification")
        ) {
          let pe = S.get(N) || 0;
          if (pe && Te - pe <= Mf) {
            s("[Shanks] suppressed agent notification after complete", {
              agentId: N,
              event: P,
              sessionId: ne,
            });
            return;
          }
        }
        A.set(ue, { lastActiveAt: Te });
      } else if (k === "complete") {
        if (!A.has(ue) && !We) {
          let pe = qe();
          if (!pe) {
            console.warn(
              `[Shanks] ignored agent complete without active task: ${N} ${P}`,
            );
            return;
          }
          ((ue = pe), (ne = pe.slice(N.length + 1)));
        }
        (kt(), S.set(N, Te));
      } else (k === "idle" || k === "error") && A.delete(ue);
      let xe = Je();
      ((k === "idle" || k === "error" || k === "complete") && xe) ||
        (o("ai-task-state", {
          agentId: N,
          sessionId: ne,
          event: v.event || "",
          state: k,
        }),
        k === "complete"
          ? o("ai-task-complete", { agentId: N, sessionId: ne, event: P }) &&
            s("[Shanks] sending ai-task-complete", {
              agentId: N,
              sessionId: ne,
              event: P,
            })
          : k === "notification" &&
            o("ai-task-notification", {
              agentId: N,
              sessionId: ne,
              event: v.event || "",
            }));
    }
    let T = /^\/agent-state\/antigravity\/([A-Za-z]+)$/;
    function m(v, k) {
      let { antigravityStateForEvent: N, antigravityCwdFromPayload: P } = cc(),
        M = {};
      try {
        M = JSON.parse(k || "{}");
      } catch {
        M = {};
      }
      (!M || typeof M != "object") && (M = {});
      let ne = N(v, M);
      ne &&
        _({
          agentId: "antigravity",
          event: v,
          state: ne,
          sessionId:
            typeof M.conversationId == "string" && M.conversationId
              ? M.conversationId
              : "antigravity",
          cwd: P(M),
        });
    }
    function x() {
      f ||
        ((f = O0.createServer((v, k) => {
          let N =
            v.method === "POST" && typeof v.url == "string"
              ? v.url.match(T)
              : null;
          if (v.method !== "POST" || (v.url !== "/agent-state" && !N)) {
            (k.writeHead(404), k.end("not found"));
            return;
          }
          let P = "",
            M = 0;
          (v.on("data", (ne) => {
            ((M += ne.length), M <= 8192 && (P += ne));
          }),
            v.on("end", () => {
              if (M > 8192) {
                (k.writeHead(413), k.end("too large"));
                return;
              }
              if (N) {
                (m(N[1], P), k.writeHead(200), k.end("ok"));
                return;
              }
              try {
                (_(JSON.parse(P || "{}")), k.writeHead(200), k.end("ok"));
              } catch {
                (k.writeHead(400), k.end("bad json"));
              }
            }));
        })),
        f.on("error", (v) => {
          (console.warn(
            "[Shanks] agent state server unavailable:",
            v && v.message,
          ),
            (f = null));
        }),
        f.listen(r, "127.0.0.1", () => {
          console.log(
            `[Shanks] agent state server listening on 127.0.0.1:${r}`,
          );
        }));
    }
    function b() {
      if (Pc()) {
        if (!u("claude")) {
          C();
          return;
        }
        try {
          let { registerClaudeHooks: v } = wr(),
            k = He.join(t.getPath("userData"), "hooks");
          Gr.mkdirSync(k, { recursive: !0 });
          for (let M of ["shanks-claude-hook.js", "server-config.js"])
            Gr.copyFileSync(He.join(n, M), He.join(k, M));
          let N = He.join(k, "shanks-claude-hook.js"),
            P = v({ hookScript: N, commandBuilder: (M) => a(N, M) });
          (P.added || P.updated || P.removed) &&
            console.log(
              `[Shanks] synced Claude Code hooks (added ${P.added}, updated ${P.updated}, removed ${P.removed || 0})`,
            );
        } catch (v) {
          console.warn(
            "[Shanks] failed to sync Claude Code hooks:",
            v && v.message,
          );
        }
      }
    }
    function C() {
      if (Pc())
        try {
          let { unregisterClaudeHooks: v } = wr(),
            k = v();
          k.removed &&
            console.log(
              `[Shanks] removed ${k.removed} Claude Code hook entries`,
            );
        } catch (v) {
          console.warn(
            "[Shanks] failed to remove Claude Code hooks:",
            v && v.message,
          );
        }
    }
    function G() {
      if (Rc()) {
        if (!u("antigravity")) {
          O();
          return;
        }
        try {
          let { registerAntigravityHooks: v } = wr(),
            k = He.join(t.getPath("userData"), "hooks");
          Gr.mkdirSync(k, { recursive: !0 });
          for (let M of ["shanks-antigravity-hook.js", "server-config.js"])
            Gr.copyFileSync(He.join(n, M), He.join(k, M));
          let N = He.join(k, "shanks-antigravity-hook.js"),
            P = v({
              hookScript: N,
              commandBuilder: (M) => (e ? c("", M) : a(N, M)),
            });
          (P.added || P.updated || P.removed) &&
            console.log(
              `[Shanks] synced Antigravity hooks (added ${P.added}, updated ${P.updated}, removed ${P.removed || 0})`,
            );
        } catch (v) {
          console.warn(
            "[Shanks] failed to sync Antigravity hooks:",
            v && v.message,
          );
        }
      }
    }
    function O() {
      if (Rc())
        try {
          let { unregisterAntigravityHooks: v } = wr(),
            k = v();
          k.removed &&
            console.log(
              `[Shanks] removed ${k.removed} Antigravity hook entries`,
            );
        } catch (v) {
          console.warn(
            "[Shanks] failed to remove Antigravity hooks:",
            v && v.message,
          );
        }
    }
    function L() {
      if (Oc()) {
        if (!u("cursor")) {
          j();
          return;
        }
        try {
          let { registerCursorHooks: v } = wr(),
            k = He.join(t.getPath("userData"), "hooks");
          Gr.mkdirSync(k, { recursive: !0 });
          for (let M of ["shanks-cursor-hook.js", "server-config.js"])
            Gr.copyFileSync(He.join(n, M), He.join(k, M));
          let N = He.join(k, "shanks-cursor-hook.js"),
            P = v({
              hookScript: N,
              commandBuilder: (M) => (e ? l(M) : a(N, M)),
            });
          (P.added || P.updated || P.removed) &&
            console.log(
              `[Shanks] synced Cursor hooks (added ${P.added}, updated ${P.updated}, removed ${P.removed || 0})`,
            );
        } catch (v) {
          console.warn(
            "[Shanks] failed to sync Cursor hooks:",
            v && v.message,
          );
        }
      }
    }
    function j() {
      if (Oc())
        try {
          let { unregisterCursorHooks: v } = wr(),
            k = v();
          k.removed &&
            console.log(`[Shanks] removed ${k.removed} Cursor hook entries`);
        } catch (v) {
          console.warn(
            "[Shanks] failed to remove Cursor hooks:",
            v && v.message,
          );
        }
    }
    function z() {
      if (!(g || !u("codex")))
        try {
          let v = bf();
          ((g = new v(_)),
            g.start(),
            console.log("[Shanks] Codex monitoring: ON"));
        } catch (v) {
          console.warn(
            "[Shanks] Codex log monitor unavailable:",
            v && v.message,
          );
        }
    }
    function H() {
      g &&
        (g.stop(), (g = null), console.log("[Shanks] Codex monitoring: OFF"));
    }
    function ee() {
      if (!(p || !u("claude")))
        try {
          let v = kf();
          ((p = new v(_)),
            p.start(),
            console.log("[Shanks] Claude Code monitoring: ON"));
        } catch (v) {
          console.warn(
            "[Shanks] Claude Code log monitor unavailable:",
            v && v.message,
          );
        }
    }
    function Q() {
      p &&
        (p.stop(),
        (p = null),
        console.log("[Shanks] Claude Code monitoring: OFF"));
    }
    function se() {
      if (!(h || !u("antigravity")))
        try {
          let v = Cf();
          ((h = new v(_)),
            h.start(),
            console.log("[Shanks] Antigravity monitoring: ON"));
        } catch (v) {
          console.warn(
            "[Shanks] Antigravity log monitor unavailable:",
            v && v.message,
          );
        }
    }
    function be() {
      h &&
        (h.stop(),
        (h = null),
        console.log("[Shanks] Antigravity monitoring: OFF"));
    }
    function oe() {
      if (!(y || !u("kiro")))
        try {
          let v = xf();
          ((y = new v(_)),
            y.start(),
            console.log("[Shanks] Kiro monitoring: ON"));
        } catch (v) {
          console.warn(
            "[Shanks] Kiro log monitor unavailable:",
            v && v.message,
          );
        }
    }
    function ae() {
      y &&
        (y.stop(), (y = null), console.log("[Shanks] Kiro monitoring: OFF"));
    }
    function I() {
      if (!(w || !u("cursor")))
        try {
          let v = jf();
          ((w = new v(_)),
            w.start(),
            console.log("[Shanks] Cursor monitoring: ON"));
        } catch (v) {
          console.warn(
            "[Shanks] Cursor log monitor unavailable:",
            v && v.message,
          );
        }
    }
    function $() {
      w &&
        (w.stop(),
        (w = null),
        console.log("[Shanks] Cursor monitoring: OFF"));
    }
    let Z = {
        cursor: ["cursor"],
        claude: ["claude-code"],
        antigravity: ["antigravity"],
        codex: ["codex"],
        kiro: ["kiro"],
      },
      te = {};
    for (let [v, k] of Object.entries(Z)) for (let N of k) te[N] = v;
    function Y(v) {
      for (let k of Z[v] || [v]) {
        let N = [];
        for (let [P] of A) P.startsWith(`${k}:`) && N.push(P);
        for (let P of N) {
          let M = P.slice(k.length + 1);
          (A.delete(P),
            o("ai-task-state", {
              agentId: k,
              sessionId: M,
              event: "",
              state: "idle",
            }));
        }
        S.delete(k);
      }
    }
    function U(v) {
      let k = u(v);
      (k || Y(v),
        v === "cursor"
          ? (L(), k ? I() : $())
          : v === "claude"
            ? (b(), k ? ee() : Q())
            : v === "antigravity"
              ? (G(), k ? se() : be())
              : v === "codex"
                ? k
                  ? z()
                  : H()
                : v === "kiro" && (k ? oe() : ae()));
    }
    function E() {
      let v = (k, N) => {
        try {
          N();
        } catch (P) {
          s(`[Shanks] agent integration '${k}' failed:`, {
            message: P && P.message ? P.message : String(P),
          });
        }
      };
      (v("state-server", x),
        v("claude-hooks", b),
        v("antigravity-hooks", G),
        v("cursor-hooks", L),
        v("antigravity-monitor", se),
        v("claude-monitor", ee),
        v("codex-monitor", z),
        v("kiro-monitor", oe),
        v("cursor-monitor", I));
    }
    function W() {
      if ((A.clear(), S.clear(), H(), Q(), be(), ae(), $(), f)) {
        try {
          f.close();
        } catch {}
        f = null;
      }
    }
    return {
      startAgentIntegrations: E,
      stopAgentIntegrations: W,
      agentMonitoringEnabled: u,
      applyAgentMonitoringState: U,
      installCursorHooks: L,
      uninstallCursorHooks: j,
    };
  }
  Df.exports = { createAgentIntegrations: F0 };
});
var Bf = F((zP, qf) => {
  "use strict";
  function $f(t = {}) {
    let e = String(t.key || t.code || "").toLowerCase(),
      r = Number(t.keycode || t.rawcode || t.keyCode);
    return e === "escape" || e === "esc" || r === 1 || r === 53 || r === 27;
  }
  function Ff(t) {
    return t && t.type === 11;
  }
  function q0({
    isMac: t,
    appIconPath: e,
    globalShortcut: r,
    shell: n,
    systemPreferences: s,
    dialog: o,
    nativeImage: i,
    logInfo: a,
    logWarn: c,
    t: l,
    releaseBuildExcludesDevOptions: d,
    triggerJumpSequence: u,
    cancelCoveringMotion: f,
    getPetWindow: h,
  }) {
    let p = null,
      g = !1,
      y = !1,
      w = null,
      A = !1,
      S = !1,
      D = !1;
    try {
      ({ uIOhook: p } = require("uiohook-napi"));
    } catch (O) {
      c(
        "[Shanks] uiohook-napi is unavailable:",
        O && O.message ? O.message : O,
      );
    }
    function B() {
      (r.unregister("CommandOrControl+-"),
        r.unregister("CommandOrControl+="),
        r.unregister("CommandOrControl+0"),
        r.unregister("CommandOrControl+J"));
      let O = [...(d() ? [] : [["CommandOrControl+J", () => u()]])];
      for (let [L, j] of O)
        r.register(L, j) ||
          console.warn(`[Shanks] failed to register shortcut: ${L}`);
    }
    function R(O) {
      t &&
        n
          .openExternal(
            `x-apple.systempreferences:com.apple.preference.security?${O}`,
          )
          .catch(() => {});
    }
    function _() {
      if (!t) return !0;
      try {
        return s.isTrustedAccessibilityClient(!0);
      } catch (O) {
        return (
          console.warn(
            "[Shanks] accessibility permission check failed:",
            O && O.message,
          ),
          !1
        );
      }
    }
    function T() {
      !t ||
        S ||
        ((S = !0),
        setTimeout(async () => {
          try {
            (
              await o.showMessageBox({
                type: "info",
                title: l("accessibilityPermissionTitle"),
                message: l("accessibilityPermissionMessage"),
                detail: l("accessibilityPermissionDetail"),
                buttons: [l("openAccessibility"), l("later")],
                defaultId: 0,
                cancelId: 1,
              })
            ).response === 0 && R("Privacy_Accessibility");
          } catch {}
        }, 800));
    }
    function m() {
      !t ||
        D ||
        ((D = !0),
        setTimeout(async () => {
          try {
            (
              await o.showMessageBox({
                type: "info",
                title: l("inputPermissionTitle"),
                message: l("inputPermissionMessage"),
                detail: l("inputPermissionDetail"),
                buttons: [l("openInputMonitoring"), l("later")],
                defaultId: 0,
                cancelId: 1,
              })
            ).response === 0 && R("Privacy_ListenEvent");
          } catch {}
        }, 800));
    }
    function x() {
      t ||
        D ||
        ((D = !0),
        setTimeout(async () => {
          try {
            await o.showMessageBox({
              type: "info",
              title: l("globalInputPermissionTitle"),
              message: l("globalInputPermissionMessage"),
              detail: l("globalInputPermissionDetail"),
              buttons: [l("later")],
              defaultId: 0,
              cancelId: 0,
              icon: i.createFromPath(e),
            });
          } catch {}
        }, 800));
    }
    function b(O) {
      let L = h();
      !L ||
        L.isDestroyed() ||
        (A ||
          ((A = !0),
          a("[Shanks] global wheel hook received", {
            amount: O && typeof O.amount == "number" ? O.amount : null,
            direction: O && typeof O.direction == "number" ? O.direction : null,
            rotation: O && typeof O.rotation == "number" ? O.rotation : null,
          })),
        L.webContents.send("mouse-wheel", {
          rotation: O && typeof O.rotation == "number" ? O.rotation : 0,
        }));
    }
    function C() {
      if (!g) {
        if (!p) {
          (console.warn(
            "[Shanks] global input hook unavailable: uiohook-napi is not loaded",
          ),
            x());
          return;
        }
        try {
          (_() || T(),
            y ||
              (p.on("keydown", (L) => {
                if ($f(L)) {
                  f();
                  return;
                }
                let j = h();
                !j || j.isDestroyed() || j.webContents.send("key-pressed");
              }),
              p.on("input", (L) => {
                Ff(L) && b(L);
              }),
              (y = !0)),
            p.start(),
            (g = !0),
            w && (clearInterval(w), (w = null)),
            console.log("[Shanks] global input hook started"));
        } catch (O) {
          (console.warn(
            "[Shanks] global key hook unavailable:",
            O && O.message,
          ),
            t ? (_() ? m() : T()) : x(),
            w ||
              (w = setInterval(() => {
                g || C();
              }, 5e3)));
        }
      }
    }
    function G() {
      if ((w && (clearInterval(w), (w = null)), g)) {
        if (p)
          try {
            p.stop();
          } catch {}
        g = !1;
      }
    }
    return { registerGlobalShortcuts: B, startKeyHook: C, stopKeyHook: G };
  }
  qf.exports = {
    createGlobalInputController: q0,
    isEscapeKeyInput: $f,
    isWheelInputEvent: Ff,
  };
});
var Wf = F((GP, Hf) => {
  "use strict";
  function B0({
    screen: t,
    getPetPeekState: e,
    getPetWindow: r,
    boundsWithConstrainedPetPosition: n,
    setCurrentPetPosition: s,
    saveSettings: o,
    broadcastPetSize: i,
    getPeekStretchEnabled: a,
    getPeekDrinkEnabled: c,
    unpeekPet: l,
    peekPet: d,
  }) {
    let u = !1,
      f = null,
      h = null,
      p = null,
      g = !1,
      y = null,
      w = null,
      A = null,
      S = !1,
      D = null,
      B = null,
      R = null,
      _ = [],
      T = null,
      m = null;
    function x(E) {
      _.includes(E) || _.push(E);
    }
    function b(E) {
      let W = E === "stretch" ? a : c;
      return typeof W == "function" ? !!W() : !1;
    }
    function C() {
      return !!e() || !!m;
    }
    function G() {
      let E = e();
      E && (m || (m = E.edge || "left"), typeof l == "function" && l());
    }
    function O() {
      if (!(_.length > 0 || T) && m && typeof d == "function") {
        let E = m;
        ((m = null), d(E));
      }
    }
    function L() {
      ((_ = []), T && (clearTimeout(T), (T = null)));
    }
    function j() {
      if ((T && (clearTimeout(T), (T = null)), _.length === 0)) return;
      let E = _.shift();
      T = setTimeout(() => {
        ((T = null), E === "stretch" ? ae() : E === "drink" && te());
      }, 900);
    }
    function z() {
      (h && clearTimeout(h), p && clearTimeout(p), (h = null), (p = null));
    }
    function H(E = {}) {
      let W = r();
      if (
        (z(),
        W &&
          !W.isDestroyed() &&
          (E.cancelRenderer && W.webContents.send("cancel-stretch"), f))
      ) {
        let v = n(f);
        (W.setBounds(v, !0), s({ x: v.x, y: v.y }), o({ sync: !1 }));
      }
      ((u = !1), (f = null), E.cancelRenderer ? L() : j(), O());
    }
    function ee() {
      return u ? (H({ cancelRenderer: !0 }), !0) : !1;
    }
    function Q() {
      (B && clearTimeout(B), R && clearTimeout(R), (B = null), (R = null));
    }
    function se(E = {}) {
      let W = r();
      if (
        (Q(),
        W &&
          !W.isDestroyed() &&
          (E.cancelRenderer && W.webContents.send("cancel-pomodoro-motion"), D))
      ) {
        let v = n(D);
        (W.setBounds(v, !0), s({ x: v.x, y: v.y }), i(), o({ sync: !1 }));
      }
      ((S = !1), (D = null), E.cancelRenderer ? L() : j(), O());
    }
    function be() {
      return S ? (se({ cancelRenderer: !0 }), !0) : !1;
    }
    function oe() {
      let E = r(),
        W = ee(),
        v = Z(),
        k = be();
      return (
        E && !E.isDestroyed() && E.webContents.send("cancel-pomodoro-motion"),
        W || v || k
      );
    }
    function ae() {
      let E = r();
      if (!E || E.isDestroyed() || (C() && !b("stretch"))) return;
      if (u || g || S) {
        x("stretch");
        return;
      }
      (G(), z(), (u = !0), (f = E.getBounds()));
      let W = t.getDisplayMatching(f),
        { x: v, y: k, width: N, height: P } = W.workArea,
        M = Math.round(P * 0.7),
        ne = v + Math.round((N - M) / 2),
        ue = k + Math.round((P - M) / 2);
      (E.setBounds({ x: ne, y: ue, width: M, height: M }, !0),
        (h = setTimeout(() => {
          ((h = null),
            E && !E.isDestroyed() && E.webContents.send("do-stretch"));
        }, 400)),
        (p = setTimeout(() => {
          H();
        }, 3600)));
    }
    function I() {
      (w && clearTimeout(w), A && clearTimeout(A), (w = null), (A = null));
    }
    function $(E = {}) {
      let W = r();
      if (
        (I(),
        W &&
          !W.isDestroyed() &&
          (E.cancelRenderer && W.webContents.send("cancel-drink"), y))
      ) {
        let v = n(y);
        (W.setBounds(v, !0), s({ x: v.x, y: v.y }), o({ sync: !1 }));
      }
      ((g = !1), (y = null), E.cancelRenderer ? L() : j(), O());
    }
    function Z() {
      return g ? ($({ cancelRenderer: !0 }), !0) : !1;
    }
    function te() {
      let E = r();
      if (!E || E.isDestroyed() || (C() && !b("drink"))) return;
      if (g || u || S) {
        x("drink");
        return;
      }
      (G(), I(), (g = !0), (y = E.getBounds()));
      let W = t.getDisplayMatching(y),
        { x: v, y: k, width: N, height: P } = W.workArea,
        M = Math.round(P * 0.7),
        ne = v + Math.round((N - M) / 2),
        ue = k + Math.round((P - M) / 2);
      (E.setBounds({ x: ne, y: ue, width: M, height: M }, !0),
        (w = setTimeout(() => {
          ((w = null), E && !E.isDestroyed() && E.webContents.send("do-drink"));
        }, 400)),
        (A = setTimeout(() => {
          $();
        }, 3600)));
    }
    function Y() {
      let E = r();
      if (e() || !E || E.isDestroyed() || S || u || g) return;
      ((S = !0), (D = E.getBounds()));
      let W = t.getDisplayMatching(D),
        { x: v, y: k, width: N, height: P } = W.workArea,
        M = Math.round(P * 0.7),
        ne = v + Math.round((N - M) / 2),
        ue = k + Math.round((P - M) / 2);
      (E.setBounds({ x: ne, y: ue, width: M, height: M }, !0),
        i(Math.round(M * 0.42)),
        (B = setTimeout(() => {
          ((B = null),
            E &&
              !E.isDestroyed() &&
              E.webContents.send("pomodoro-focus-start"));
        }, 160)),
        (R = setTimeout(() => {
          se();
        }, 1400)));
    }
    function U() {
      let E = r();
      e() || !E || E.isDestroyed() || E.webContents.send("do-jump");
    }
    return {
      cancelCoveringMotion: oe,
      triggerStretchSequence: ae,
      triggerDrinkSequence: te,
      triggerPomodoroFocusStartSequence: Y,
      triggerJumpSequence: U,
    };
  }
  Hf.exports = { createCoveringMotionController: B0 };
});
var Gf = F((JP, zf) => {
  "use strict";
  var H0 = require("fs"),
    Vf = require("path"),
    Kf = "Shanks";
  function W0() {
    if (process.platform !== "darwin" || process.defaultApp) return "";
    let e = String(process.execPath || "")
      .split(Vf.sep)
      .find((r) => r.endsWith(".app"));
    return e ? e.replace(/\.app$/, "") : "";
  }
  function V0(t) {
    try {
      if (process.defaultApp || typeof t.getAppPath != "function") return "";
      let e = t.getAppPath();
      if (!e) return "";
      let r = Vf.join(e, "package.json"),
        n = JSON.parse(H0.readFileSync(r, "utf8"));
      return typeof n.productName == "string" ? n.productName.trim() : "";
    } catch {
      return "";
    }
  }
  function K0(t) {
    if (process.defaultApp) return "";
    let e = V0(t);
    if (e && e !== "Electron") return e;
    let r = t.getName && t.getName();
    return r && r !== "Electron" ? r : "";
  }
  function z0(t) {
    return W0() || K0(t) || Kf;
  }
  zf.exports = { DEFAULT_APP_NAME: Kf, inferEarlyAppName: z0 };
});
var Xf = F((YP, Yf) => {
  "use strict";
  var Ot = require("path"),
    Jn =
      Ot.basename(__dirname) === "core" &&
      Ot.basename(Ot.dirname(__dirname)) === "main"
        ? Ot.dirname(__dirname)
        : __dirname,
    Ic = Ot.basename(Jn) === "main" && Ot.basename(Ot.dirname(Jn)) === "src",
    xc = Ic ? Ot.dirname(Jn) : Jn,
    Jf = Ic ? Ot.dirname(xc) : Jn;
  function G0(...t) {
    return Ot.join(xc, ...t);
  }
  function J0(...t) {
    return Ot.join(Jf, ...t);
  }
  Yf.exports = {
    IS_SOURCE_LAYOUT: Ic,
    MAIN_DIR: Jn,
    RUNTIME_ROOT: xc,
    PROJECT_ROOT: Jf,
    runtimePath: G0,
    projectPath: J0,
  };
});
var Zf = F((XP, Qf) => {
  "use strict";
  var Yn = require("fs"),
    Y0 = require("path"),
    X0 = 2 * 1024 * 1024;
  function Q0(t, e) {
    return t.length <= e ? t : t.subarray(t.length - e);
  }
  function Nc(t) {
    let e = `${t}.1`;
    try {
      Yn.rmSync(e, { force: !0 });
    } catch {}
    try {
      Yn.renameSync(t, e);
    } catch {}
  }
  function Z0(t, e, r = {}) {
    if (!t) return;
    let n = Number.isFinite(r.maxBytes) ? r.maxBytes : X0;
    if (n <= 0) return;
    Yn.mkdirSync(Y0.dirname(t), { recursive: !0 });
    let s = Buffer.from(String(e));
    if (s.length >= n) {
      (Nc(t), Yn.writeFileSync(t, Q0(s, n)));
      return;
    }
    let o = 0;
    try {
      o = Yn.statSync(t).size;
    } catch {
      o = 0;
    }
    (o > 0 && o + s.length > n && Nc(t), Yn.appendFileSync(t, s));
  }
  Qf.exports = { appendBoundedLogLine: Z0, rotateLogFile: Nc };
});
var tp = F((QP, ep) => {
  "use strict";
  var eS = require("path"),
    { appendBoundedLogLine: tS } = Zf(),
    rS = 2 * 1024 * 1024;
  function nS(t) {
    let e = (() => {
      try {
        return eS.join(t.getPath("userData"), "logs", "main.log");
      } catch {
        return null;
      }
    })();
    function r(l, d = 0) {
      let u = l.stack || l.message || String(l);
      if (d >= 3 || !l.cause) return u;
      let f = l.cause instanceof Error ? r(l.cause, d + 1) : String(l.cause);
      return `${u}
Caused by: ${f}`;
    }
    function n(l, d) {
      if (e)
        try {
          let u = Array.from(d)
            .map((f) => {
              if (f instanceof Error) return r(f);
              if (typeof f == "string") return f;
              try {
                return JSON.stringify(f);
              } catch {
                return String(f);
              }
            })
            .join(" ");
          tS(
            e,
            `[${new Date().toISOString()}] [${l}] ${u}
`,
            { maxBytes: rS },
          );
        } catch {}
    }
    function s(l, d) {
      try {
        console[l](...d);
      } catch {}
    }
    function o(...l) {
      (s("log", l), n("info", l));
    }
    function i(...l) {
      (s("warn", l), n("warn", l));
    }
    function a(...l) {
      (s("error", l), n("error", l));
    }
    function c() {
      for (let l of [process.stdout, process.stderr])
        l &&
          typeof l.on == "function" &&
          l.on("error", (d) => {
            (d && (d.code === "EPIPE" || d.code === "ERR_STREAM_DESTROYED")) ||
              n("error", ["[Shanks] stdio stream error:", d]);
          });
      (process.on("uncaughtException", (l) => {
        a("[Shanks] uncaught exception:", l);
      }),
        process.on("unhandledRejection", (l) => {
          a("[Shanks] unhandled rejection:", l);
        }));
    }
    return {
      logPath: e,
      appendStartupLog: n,
      logInfo: o,
      logWarn: i,
      logError: a,
      attachProcessErrorLogging: c,
    };
  }
  ep.exports = { createLogger: nS };
});
var np = F((ZP, rp) => {
  "use strict";
  var sS = ["en", "ko", "ja"],
    Lc = {
      en: {
        licenseMissingKey: "Please enter your license key.",
        licenseActivateFailed: "We could not activate this license key.",
        licenseNetworkFailed:
          "Could not reach the license server. Check your internet connection, DNS, VPN, or proxy settings, then try again.",
        licenseWindowTitle: "Shanks License",
        oauthCallbackTitle: "Google sign-in is complete",
        oauthCallbackMessage:
          "Return to the Shanks app. You can close this browser window.",
        syncConflictTitle: "Shanks sync",
        syncConflictMessage: `This Shanks pattern changed on this device and another device.
Choose which version to keep. The selected version will become the version used across all devices.`,
        syncConflictUseLocal: "Use this device's version",
        syncConflictUseServer: "Use server version",
        syncConflictKeepBoth: "Keep both",
        syncConflictKeptCopyName: "Shanks (other device)",
        accountLinkMenu: "Connect Shanks account",
        accountSyncedAs: (t) => `Synced with ${t}`,
        accountSyncNow: "Sync now",
        account: "Account",
        accountLogout: "Log out",
        accountUnlinkLicense: "Unlink license (test)",
        accountUnlinkTitle: "Unlink license?",
        accountUnlinkMessage:
          "This will disconnect the license from this Google account. You can link the same key again later.",
        accountUnlinkConfirm: "Unlink",
        accountUnlinkCancel: "Cancel",
        accountUnlinkFailed:
          "Could not unlink the license. Check your internet connection and try again.",
        accountUnlinkNotDeployed:
          "The unlink-license server function is not deployed yet. Deploy it to Supabase, then try again.",
        accountUnlinkNotLinked: "No license is linked to this account.",
        accountUnlinkSignedOut:
          "Sign in again, then try unlinking the license.",
        patternEditorTitle: "Shanks Pattern Editor",
        mappingEditorTitle: "Shanks Cell Mapping Editor",
        appMenuAbout: "About Shanks",
        appMenuQuit: "Quit",
        checkForUpdates: "Check for Updates",
        editMenu: "Edit",
        contextTitle: "Shanks",
        moveToCenter: "Move Shanks to Center",
        peekMode: "Peek mode",
        peekLeft: "Peek from left",
        peekRight: "Peek from right",
        peekExit: "Exit peek mode",
        peekNotifications: "Notify in Peek mode",
        peekNotificationsHint: "Pops out briefly, then returns to peek",
        size: "Size",
        smaller: "Smaller (-20)",
        larger: "Larger (+20)",
        resetSize: "Reset size (100 \xD7 100)",
        petSizePixels: (t) => `${t} \xD7 ${t}`,
        stretch: "Break Stretch",
        stretchNow: "Start break stretch now",
        drink: "Drink Water",
        drinkNow: "Drink water now",
        jump: "Jump (test)",
        jumpNow: "Jump now (test)",
        shareCat: "Show off my Shanks",
        name: "Name",
        setUserName: "Tell my name",
        setCatName: "Set Shanks name",
        showCatName: "Show Shanks name",
        fixedMessage: "Fixed message",
        reminders: "Reminders",
        remindersOpen: "Open reminders",
        showReminderButtonOutside: "Show button outside",
        pomodoro: "Pomodoro",
        pomodoroStart: "Start",
        pomodoroPause: "Pause",
        pomodoroResume: "Resume",
        pomodoroReset: "Reset",
        pomodoroFocusTime: "Focus time",
        pomodoroRestTime: "Break time",
        pomodoroFocusLabel: "Focus",
        pomodoroRestLabel: "Break",
        pomodoroMinutes: (t) => `${t} min`,
        pomodoroCustom: "Custom",
        patternEditor: "Pattern Editor",
        mappingEditor: "Cell Mapping Editor",
        taskCompleteSound: "Sound",
        soundVolumeHeader: "Volume",
        soundMute: "Mute",
        soundLevel: (t) => `${t}`,
        launchAtLogin: "Open at Login",
        agentMonitoring: "Agent Monitoring",
        agentMonitoringCursor: "Cursor",
        agentMonitoringKiro: "Kiro",
        agentMonitoringAntigravity: "Antigravity",
        agentMonitoringClaudeCli: "Claude Code CLI",
        agentMonitoringCodexCli: "Codex CLI",
        accountBasedAnalytics: "Share app improvement data",
        autoStretch: "Auto Break Stretch",
        off: "Off",
        everyMinuteTest: "Every 1 minute (test)",
        everyMinutes: (t) => `Every ${t} minutes`,
        everyHour: "Every hour",
        everyHourAndHalf: "Every 1 hour 30 minutes",
        everyTwoHours: "Every 2 hours",
        language: "Language",
        english: "English",
        korean: "\uD55C\uAD6D\uC5B4",
        japanese: "\u65E5\u672C\u8A9E",
        settings: "Settings",
        accessibilityPermissionTitle: "Accessibility permission needed",
        accessibilityPermissionMessage: "Allow Shanks to react to typing",
        accessibilityPermissionDetail:
          "Turn on Shanks in Accessibility, then restart Shanks if typing reactions do not start.",
        inputPermissionTitle: "Input Monitoring may be needed",
        inputPermissionMessage: "Shanks still cannot detect typing",
        inputPermissionDetail:
          "Some macOS environments also require Input Monitoring. Add Shanks in Input Monitoring, then restart Shanks if typing reactions do not start.",
        openInputMonitoring: "Open Input Monitoring",
        openAccessibility: "Open Accessibility",
        shareVideoTitle: "Share video",
        shareVideoSaveTitle: "Save share video",
        shareRecordingFailed: "Could not make the share video.",
        globalInputPermissionTitle: "Input monitoring unavailable",
        globalInputPermissionMessage:
          "Shanks cannot detect keyboard or wheel input",
        globalInputPermissionDetail:
          "Restart Shanks and check whether Windows security software or system policy is blocking global input hooks.",
        reset: "Reset",
        clear: "Clear",
        delete: "Delete",
        later: "Later",
      },
      ko: {
        licenseMissingKey:
          "\uB77C\uC774\uC120\uC2A4 \uD0A4\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
        licenseActivateFailed:
          "\uB77C\uC774\uC120\uC2A4\uB97C \uD65C\uC131\uD654\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
        licenseNetworkFailed:
          "\uB77C\uC774\uC120\uC2A4 \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0, DNS, VPN \uB610\uB294 \uD504\uB85D\uC2DC \uC124\uC815\uC744 \uD655\uC778\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
        licenseWindowTitle: "Shanks \uB77C\uC774\uC120\uC2A4",
        oauthCallbackTitle:
          "Google \uB85C\uADF8\uC778\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
        oauthCallbackMessage:
          "\uCF64\uB0E5 \uC571\uC73C\uB85C \uB3CC\uC544\uAC00 \uC8FC\uC138\uC694. \uC774 \uBE0C\uB77C\uC6B0\uC800 \uCC3D\uC740 \uB2EB\uC544\uB3C4 \uB429\uB2C8\uB2E4.",
        syncConflictTitle: "\uCF64\uB0E5\uC774 \uB3D9\uAE30\uD654",
        syncConflictMessage: `\uC774 \uCF64\uB0E5\uC774 \uBB34\uB2AC\uAC00 \uC774 \uAE30\uAE30\uC640 \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C \uBAA8\uB450 \uBCC0\uACBD\uB418\uC5C8\uC5B4\uC694.
\uC5B4\uB5A4 \uBC84\uC804\uC744 \uC0AC\uC6A9\uD560\uC9C0 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694. \uC120\uD0DD\uD55C \uBC84\uC804\uC774 \uBAA8\uB4E0 \uAE30\uAE30\uC5D0\uC11C \uC0AC\uC6A9\uB429\uB2C8\uB2E4.`,
        syncConflictUseLocal: "\uC774 \uAE30\uAE30 \uBC84\uC804 \uC0AC\uC6A9",
        syncConflictUseServer: "\uC11C\uBC84 \uBC84\uC804 \uC0AC\uC6A9",
        syncConflictKeepBoth: "\uB458 \uB2E4 \uC720\uC9C0",
        syncConflictKeptCopyName:
          "\uCF64\uB0E5\uC774 (\uB2E4\uB978 \uAE30\uAE30)",
        accountLinkMenu: "\uCF64\uB0E5\uC774 \uACC4\uC815 \uC5F0\uACB0",
        accountSyncedAs: (t) => `${t} \uC73C\uB85C \uB3D9\uAE30\uD654 \uC911`,
        accountSyncNow: "\uC9C0\uAE08 \uB3D9\uAE30\uD654",
        account: "\uACC4\uC815",
        accountLogout: "\uB85C\uADF8\uC544\uC6C3",
        accountUnlinkLicense:
          "\uB77C\uC774\uC120\uC2A4 \uC5F0\uACB0 \uD574\uC81C (\uD14C\uC2A4\uD2B8)",
        accountUnlinkTitle:
          "\uB77C\uC774\uC120\uC2A4 \uC5F0\uACB0\uC744 \uD574\uC81C\uD560\uAE4C\uC694?",
        accountUnlinkMessage:
          "\uC774 Google \uACC4\uC815\uC5D0\uC11C \uB77C\uC774\uC120\uC2A4 \uC5F0\uACB0\uC744 \uD574\uC81C\uD569\uB2C8\uB2E4. \uAC19\uC740 \uD0A4\uB294 \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC5F0\uACB0\uD560 \uC218 \uC788\uC5B4\uC694.",
        accountUnlinkConfirm: "\uC5F0\uACB0 \uD574\uC81C",
        accountUnlinkCancel: "\uCDE8\uC18C",
        accountUnlinkFailed:
          "\uB77C\uC774\uC120\uC2A4 \uC5F0\uACB0\uC744 \uD574\uC81C\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694. \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
        accountUnlinkNotDeployed:
          "\uC11C\uBC84\uC758 unlink-license \uD568\uC218\uAC00 \uC544\uC9C1 \uBC30\uD3EC\uB418\uC9C0 \uC54A\uC558\uC5B4\uC694. Supabase\uC5D0 \uBC30\uD3EC\uD55C \uB4A4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
        accountUnlinkNotLinked:
          "\uC774 \uACC4\uC815\uC5D0 \uC5F0\uACB0\uB41C \uB77C\uC774\uC120\uC2A4\uAC00 \uC5C6\uC5B4\uC694.",
        accountUnlinkSignedOut:
          "\uB2E4\uC2DC \uB85C\uADF8\uC778\uD55C \uB4A4 \uB77C\uC774\uC120\uC2A4 \uC5F0\uACB0 \uD574\uC81C\uB97C \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.",
        patternEditorTitle:
          "\uCF64\uB0E5\uC774 \uD328\uD134 \uD3B8\uC9D1\uAE30",
        mappingEditorTitle:
          "\uCF64\uB0E5\uC774 \uC140 \uB9E4\uD551 \uD3B8\uC9D1\uAE30",
        appMenuAbout: "Shanks\uC5D0 \uAD00\uD558\uC5EC",
        appMenuQuit: "\uC885\uB8CC",
        checkForUpdates: "\uC5C5\uB370\uC774\uD2B8 \uD655\uC778",
        editMenu: "\uD3B8\uC9D1",
        contextTitle: "Shanks",
        moveToCenter: "\uD654\uBA74 \uAC00\uC6B4\uB370\uB85C \uC774\uB3D9",
        peekMode: "\uBE7C\uAF3C \uBAA8\uB4DC",
        peekLeft: "\uC67C\uCABD\uC5D0\uC11C \uBE7C\uAF3C",
        peekRight: "\uC624\uB978\uCABD\uC5D0\uC11C \uBE7C\uAF3C",
        peekExit: "\uBE7C\uAF3C \uBAA8\uB4DC \uB044\uAE30",
        peekNotifications:
          "\uBE7C\uAF3C \uBAA8\uB4DC\uC5D0\uC11C \uC54C\uB9BC \uBC1B\uAE30",
        peekNotificationsHint:
          "\uC7A0\uAE50 \uD280\uC5B4\uB098\uC654\uB2E4 \uB2E4\uC2DC \uBE7C\uAF3C\uC73C\uB85C",
        size: "\uD06C\uAE30",
        smaller: "\uC870\uAE08 \uC791\uAC8C (-20)",
        larger: "\uC870\uAE08 \uD06C\uAC8C (+20)",
        resetSize: "\uD06C\uAE30 \uCD08\uAE30\uD654 (100 \xD7 100)",
        petSizePixels: (t) => `${t} \xD7 ${t}`,
        stretch: "\uD734\uC2DD \uC2A4\uD2B8\uB808\uCE6D",
        stretchNow: "\uC9C0\uAE08 \uD734\uC2DD \uC2A4\uD2B8\uB808\uCE6D",
        drink: "\uBB3C \uB9C8\uC2DC\uAE30",
        drinkNow: "\uC9C0\uAE08 \uBB3C \uB9C8\uC2DC\uAE30",
        jump: "\uC810\uD504 (\uD14C\uC2A4\uD2B8)",
        jumpNow: "\uC9C0\uAE08 \uC810\uD504 (\uD14C\uC2A4\uD2B8)",
        shareCat:
          "\uB0B4 \uCF64\uB0E5\uC774 \uC790\uB791 \uC601\uC0C1\uCC0D\uAE30",
        name: "\uC774\uB984",
        setUserName: "\uB0B4 \uC774\uB984 \uC54C\uB824\uC8FC\uAE30",
        setCatName: "\uCF64\uB0E5\uC774 \uC774\uB984 \uC9C0\uC815",
        showCatName: "\uCF64\uB0E5\uC774 \uC774\uB984 \uD45C\uC2DC",
        fixedMessage: "\uACE0\uC815 \uBA54\uC2DC\uC9C0",
        reminders: "\uC54C\uB9BC",
        remindersOpen: "\uC54C\uB9BC \uC5F4\uAE30",
        showReminderButtonOutside:
          "\uBC14\uAE65\uC5D0 \uBC84\uD2BC \uD45C\uC2DC",
        pomodoro: "\uBF40\uBAA8\uB3C4\uB85C",
        pomodoroStart: "\uC2DC\uC791",
        pomodoroPause: "\uC77C\uC2DC\uC815\uC9C0",
        pomodoroResume: "\uB2E4\uC2DC \uC2DC\uC791",
        pomodoroReset: "\uCD08\uAE30\uD654",
        pomodoroFocusTime: "\uC9D1\uC911 \uC2DC\uAC04",
        pomodoroRestTime: "\uD734\uC2DD \uC2DC\uAC04",
        pomodoroFocusLabel: "\uC9D1\uC911",
        pomodoroRestLabel: "\uD734\uC2DD",
        pomodoroMinutes: (t) => `${t}\uBD84`,
        pomodoroCustom: "\uCEE4\uC2A4\uD140",
        patternEditor: "\uD328\uD134 \uD3B8\uC9D1",
        mappingEditor: "\uC140 \uB9E4\uD551 \uD3B8\uC9D1",
        taskCompleteSound: "\uC18C\uB9AC",
        soundVolumeHeader: "\uBCFC\uB968",
        soundMute: "\uC74C\uC18C\uAC70",
        soundLevel: (t) => `${t}`,
        launchAtLogin:
          "\uCEF4\uD4E8\uD130 \uC2DC\uC791 \uC2DC \uC790\uB3D9 \uC2E4\uD589",
        agentMonitoring: "\uC5D0\uC774\uC804\uD2B8 \uBAA8\uB2C8\uD130\uB9C1",
        agentMonitoringCursor: "Cursor",
        agentMonitoringKiro: "Kiro",
        agentMonitoringAntigravity: "Antigravity",
        agentMonitoringClaudeCli: "Claude Code CLI",
        agentMonitoringCodexCli: "Codex CLI",
        accountBasedAnalytics:
          "\uC571 \uAC1C\uC120 \uB370\uC774\uD130 \uC81C\uACF5",
        autoStretch: "\uC790\uB3D9 \uD734\uC2DD \uC2A4\uD2B8\uB808\uCE6D",
        off: "\uB044\uAE30",
        everyMinuteTest: "1\uBD84\uB9C8\uB2E4 (\uD14C\uC2A4\uD2B8)",
        everyMinutes: (t) => `${t}\uBD84\uB9C8\uB2E4`,
        everyHour: "1\uC2DC\uAC04\uB9C8\uB2E4",
        everyHourAndHalf: "1\uC2DC\uAC04 30\uBD84\uB9C8\uB2E4",
        everyTwoHours: "2\uC2DC\uAC04\uB9C8\uB2E4",
        language: "\uC5B8\uC5B4",
        english: "English",
        korean: "\uD55C\uAD6D\uC5B4",
        japanese: "\u65E5\u672C\u8A9E",
        settings: "\uC124\uC815",
        accessibilityPermissionTitle:
          "\uC190\uC26C\uC6B4 \uC0AC\uC6A9 \uAD8C\uD55C\uC774 \uD544\uC694\uD574\uC694",
        accessibilityPermissionMessage:
          "\uCF64\uB0E5\uC774\uAC00 \uD0C0\uC774\uD551\uC5D0 \uBC18\uC751\uD558\uB3C4\uB85D \uD5C8\uC6A9\uD574 \uC8FC\uC138\uC694",
        accessibilityPermissionDetail:
          "\uC190\uC26C\uC6B4 \uC0AC\uC6A9\uC5D0\uC11C Shanks\uC744 \uCF1C \uC8FC\uC138\uC694. \uD0C0\uC774\uD551 \uBC18\uC751\uC774 \uBC14\uB85C \uC2DC\uC791\uB418\uC9C0 \uC54A\uC73C\uBA74 \uCF64\uB0E5\uC774\uB97C \uB2E4\uC2DC \uC2E4\uD589\uD574 \uC8FC\uC138\uC694.",
        inputPermissionTitle:
          "\uC785\uB825 \uBAA8\uB2C8\uD130\uB9C1\uC774 \uD544\uC694\uD560 \uC218 \uC788\uC5B4\uC694",
        inputPermissionMessage:
          "\uCF64\uB0E5\uC774\uAC00 \uC544\uC9C1 \uD0A4\uBCF4\uB4DC \uC785\uB825\uC744 \uAC10\uC9C0\uD558\uC9C0 \uBABB\uD558\uACE0 \uC788\uC5B4\uC694",
        inputPermissionDetail:
          "\uC77C\uBD80 macOS \uD658\uACBD\uC5D0\uC11C\uB294 \uC785\uB825 \uBAA8\uB2C8\uD130\uB9C1\uB3C4 \uD544\uC694\uD574\uC694. \uC785\uB825 \uBAA8\uB2C8\uD130\uB9C1\uC5D0 Shanks\uC744 \uCD94\uAC00\uD55C \uB4A4, \uD0C0\uC774\uD551 \uBC18\uC751\uC774 \uC2DC\uC791\uB418\uC9C0 \uC54A\uC73C\uBA74 \uCF64\uB0E5\uC774\uB97C \uB2E4\uC2DC \uC2E4\uD589\uD574 \uC8FC\uC138\uC694.",
        openInputMonitoring:
          "\uC785\uB825 \uBAA8\uB2C8\uD130\uB9C1 \uC5F4\uAE30",
        openAccessibility: "\uC190\uC26C\uC6B4 \uC0AC\uC6A9 \uC5F4\uAE30",
        shareVideoTitle: "\uC790\uB791 \uC601\uC0C1",
        shareVideoSaveTitle: "\uC790\uB791 \uC601\uC0C1 \uC800\uC7A5",
        shareRecordingFailed:
          "\uC790\uB791 \uC601\uC0C1\uC744 \uB9CC\uB4E4 \uC218 \uC5C6\uC5B4\uC694.",
        globalInputPermissionTitle:
          "\uC785\uB825 \uAC10\uC9C0\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC5B4\uC694",
        globalInputPermissionMessage:
          "Shanks\uC774 \uD0A4\uBCF4\uB4DC \uB610\uB294 \uD720 \uC785\uB825\uC744 \uAC10\uC9C0\uD558\uC9C0 \uBABB\uD558\uACE0 \uC788\uC5B4\uC694",
        globalInputPermissionDetail:
          "Shanks\uC744 \uB2E4\uC2DC \uC2E4\uD589\uD574 \uBCF4\uC138\uC694. \uACC4\uC18D \uC2E4\uD328\uD558\uBA74 Windows \uBCF4\uC548 \uD504\uB85C\uADF8\uB7A8\uC774\uB098 \uC2DC\uC2A4\uD15C \uC815\uCC45\uC774 \uC804\uC5ED \uC785\uB825 \uD6C4\uD0B9\uC744 \uB9C9\uACE0 \uC788\uB294\uC9C0 \uD655\uC778\uD574 \uC8FC\uC138\uC694.",
        reset: "\uCD08\uAE30\uD654",
        clear: "\uC9C0\uC6B0\uAE30",
        delete: "\uC0AD\uC81C",
        later: "\uB098\uC911\uC5D0",
      },
      ja: {
        licenseMissingKey:
          "\u30E9\u30A4\u30BB\u30F3\u30B9\u30AD\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        licenseActivateFailed:
          "\u3053\u306E\u30E9\u30A4\u30BB\u30F3\u30B9\u30AD\u30FC\u3092\u6709\u52B9\u5316\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
        licenseNetworkFailed:
          "\u30E9\u30A4\u30BB\u30F3\u30B9\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3001DNS\u3001VPN\u3001\u307E\u305F\u306F\u30D7\u30ED\u30AD\u30B7\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
        licenseWindowTitle: "Shanks \u30E9\u30A4\u30BB\u30F3\u30B9",
        oauthCallbackTitle:
          "Google \u30ED\u30B0\u30A4\u30F3\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F",
        oauthCallbackMessage:
          "Shanks \u30A2\u30D7\u30EA\u306B\u623B\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30A6\u30A3\u30F3\u30C9\u30A6\u306F\u9589\u3058\u3066\u3082\u304B\u307E\u3044\u307E\u305B\u3093\u3002",
        syncConflictTitle: "Shanks \u540C\u671F",
        syncConflictMessage: `\u3053\u306E Shanks \u306E\u6A21\u69D8\u304C\u3001\u3053\u306E\u30C7\u30D0\u30A4\u30B9\u3068\u5225\u306E\u30C7\u30D0\u30A4\u30B9\u306E\u4E21\u65B9\u3067\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002
\u3069\u3061\u3089\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u3046\u304B\u9078\u3093\u3067\u304F\u3060\u3055\u3044\u3002\u9078\u629E\u3057\u305F\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u3059\u3079\u3066\u306E\u30C7\u30D0\u30A4\u30B9\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002`,
        syncConflictUseLocal:
          "\u3053\u306E\u30C7\u30D0\u30A4\u30B9\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u7528",
        syncConflictUseServer:
          "\u30B5\u30FC\u30D0\u30FC\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u4F7F\u7528",
        syncConflictKeepBoth: "\u4E21\u65B9\u6B8B\u3059",
        syncConflictKeptCopyName:
          "Shanks (\u5225\u306E\u30C7\u30D0\u30A4\u30B9)",
        accountLinkMenu: "Shanks \u30A2\u30AB\u30A6\u30F3\u30C8\u9023\u643A",
        accountSyncedAs: (t) => `${t} \u3067\u540C\u671F\u4E2D`,
        accountSyncNow: "\u4ECA\u3059\u3050\u540C\u671F",
        account: "\u30A2\u30AB\u30A6\u30F3\u30C8",
        accountLogout: "\u30ED\u30B0\u30A2\u30A6\u30C8",
        accountUnlinkLicense:
          "\u30E9\u30A4\u30BB\u30F3\u30B9\u9023\u643A\u3092\u89E3\u9664 (\u30C6\u30B9\u30C8)",
        accountUnlinkTitle:
          "\u30E9\u30A4\u30BB\u30F3\u30B9\u9023\u643A\u3092\u89E3\u9664\u3057\u307E\u3059\u304B\uFF1F",
        accountUnlinkMessage:
          "\u3053\u306E Google \u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u30E9\u30A4\u30BB\u30F3\u30B9\u306E\u9023\u643A\u3092\u89E3\u9664\u3057\u307E\u3059\u3002\u540C\u3058\u30AD\u30FC\u306F\u5F8C\u3067\u518D\u9023\u643A\u3067\u304D\u307E\u3059\u3002",
        accountUnlinkConfirm: "\u89E3\u9664",
        accountUnlinkCancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
        accountUnlinkFailed:
          "\u30E9\u30A4\u30BB\u30F3\u30B9\u9023\u643A\u3092\u89E3\u9664\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
        accountUnlinkNotDeployed:
          "\u30B5\u30FC\u30D0\u30FC\u306E unlink-license \u95A2\u6570\u304C\u307E\u3060\u30C7\u30D7\u30ED\u30A4\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002Supabase \u306B\u30C7\u30D7\u30ED\u30A4\u3057\u3066\u304B\u3089\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        accountUnlinkNotLinked:
          "\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u9023\u643A\u3055\u308C\u305F\u30E9\u30A4\u30BB\u30F3\u30B9\u306F\u3042\u308A\u307E\u305B\u3093\u3002",
        accountUnlinkSignedOut:
          "\u3082\u3046\u4E00\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304B\u3089\u30E9\u30A4\u30BB\u30F3\u30B9\u9023\u643A\u3092\u89E3\u9664\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        patternEditorTitle:
          "Shanks \u30D1\u30BF\u30FC\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC",
        mappingEditorTitle:
          "Shanks \u30BB\u30EB\u30DE\u30C3\u30D4\u30F3\u30B0\u30A8\u30C7\u30A3\u30BF\u30FC",
        appMenuAbout: "Shanks \u306B\u3064\u3044\u3066",
        appMenuQuit: "\u7D42\u4E86",
        checkForUpdates:
          "\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u78BA\u8A8D",
        editMenu: "\u7DE8\u96C6",
        contextTitle: "Shanks",
        moveToCenter: "\u753B\u9762\u4E2D\u592E\u3078\u79FB\u52D5",
        peekMode: "\u3072\u3087\u3063\u3053\u308A\u30E2\u30FC\u30C9",
        peekLeft: "\u5DE6\u304B\u3089\u3072\u3087\u3063\u3053\u308A",
        peekRight: "\u53F3\u304B\u3089\u3072\u3087\u3063\u3053\u308A",
        peekExit:
          "\u3072\u3087\u3063\u3053\u308A\u30E2\u30FC\u30C9\u3092\u7D42\u4E86",
        peekNotifications:
          "\u3072\u3087\u3063\u3053\u308A\u30E2\u30FC\u30C9\u4E2D\u306B\u901A\u77E5\u3092\u53D7\u3051\u308B",
        peekNotificationsHint:
          "\u5C11\u3057\u98DB\u3073\u51FA\u3057\u3066\u304B\u3089\u3072\u3087\u3063\u3053\u308A\u306B\u623B\u308B",
        size: "\u30B5\u30A4\u30BA",
        smaller: "\u5C11\u3057\u5C0F\u3055\u304F (-20)",
        larger: "\u5C11\u3057\u5927\u304D\u304F (+20)",
        resetSize:
          "\u30B5\u30A4\u30BA\u3092\u30EA\u30BB\u30C3\u30C8 (100 \xD7 100)",
        petSizePixels: (t) => `${t} \xD7 ${t}`,
        stretch: "\u4F11\u61A9\u30B9\u30C8\u30EC\u30C3\u30C1",
        stretchNow:
          "\u4ECA\u3059\u3050\u4F11\u61A9\u30B9\u30C8\u30EC\u30C3\u30C1",
        drink: "\u6C34\u3092\u98F2\u3080",
        drinkNow: "\u4ECA\u3059\u3050\u6C34\u3092\u98F2\u3080",
        jump: "\u30B8\u30E3\u30F3\u30D7 (\u30C6\u30B9\u30C8)",
        jumpNow:
          "\u4ECA\u3059\u3050\u30B8\u30E3\u30F3\u30D7 (\u30C6\u30B9\u30C8)",
        shareCat:
          "Shanks \u3092\u81EA\u6162\u3059\u308B\u52D5\u753B\u3092\u64AE\u308B",
        name: "\u540D\u524D",
        setUserName: "\u81EA\u5206\u306E\u540D\u524D\u3092\u6559\u3048\u308B",
        setCatName: "Shanks \u306E\u540D\u524D\u3092\u8A2D\u5B9A",
        showCatName: "Shanks \u306E\u540D\u524D\u3092\u8868\u793A",
        fixedMessage: "\u56FA\u5B9A\u30E1\u30C3\u30BB\u30FC\u30B8",
        reminders: "\u901A\u77E5",
        remindersOpen: "\u901A\u77E5\u3092\u958B\u304F",
        showReminderButtonOutside:
          "\u5916\u5074\u306B\u30DC\u30BF\u30F3\u3092\u8868\u793A",
        pomodoro: "\u30DD\u30E2\u30C9\u30FC\u30ED",
        pomodoroStart: "\u958B\u59CB",
        pomodoroPause: "\u4E00\u6642\u505C\u6B62",
        pomodoroResume: "\u518D\u958B",
        pomodoroReset: "\u30EA\u30BB\u30C3\u30C8",
        pomodoroFocusTime: "\u96C6\u4E2D\u6642\u9593",
        pomodoroRestTime: "\u4F11\u61A9\u6642\u9593",
        pomodoroFocusLabel: "\u96C6\u4E2D",
        pomodoroRestLabel: "\u4F11\u61A9",
        pomodoroMinutes: (t) => `${t}\u5206`,
        pomodoroCustom: "\u30AB\u30B9\u30BF\u30E0",
        patternEditor: "\u30D1\u30BF\u30FC\u30F3\u7DE8\u96C6",
        mappingEditor: "\u30BB\u30EB\u30DE\u30C3\u30D4\u30F3\u30B0\u7DE8\u96C6",
        taskCompleteSound: "\u97F3",
        soundVolumeHeader: "\u97F3\u91CF",
        soundMute: "\u30DF\u30E5\u30FC\u30C8",
        soundLevel: (t) => `${t}`,
        launchAtLogin: "\u30ED\u30B0\u30A4\u30F3\u6642\u306B\u958B\u304F",
        agentMonitoring: "\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u76E3\u8996",
        agentMonitoringCursor: "Cursor",
        agentMonitoringKiro: "Kiro",
        agentMonitoringAntigravity: "Antigravity",
        agentMonitoringClaudeCli: "Claude Code CLI",
        agentMonitoringCodexCli: "Codex CLI",
        accountBasedAnalytics:
          "\u30A2\u30D7\u30EA\u6539\u5584\u30C7\u30FC\u30BF\u3092\u63D0\u4F9B",
        autoStretch: "\u81EA\u52D5\u4F11\u61A9\u30B9\u30C8\u30EC\u30C3\u30C1",
        off: "\u30AA\u30D5",
        everyMinuteTest: "1\u5206\u3054\u3068 (\u30C6\u30B9\u30C8)",
        everyMinutes: (t) => `${t}\u5206\u3054\u3068`,
        everyHour: "1\u6642\u9593\u3054\u3068",
        everyHourAndHalf: "1\u6642\u959330\u5206\u3054\u3068",
        everyTwoHours: "2\u6642\u9593\u3054\u3068",
        language: "\u8A00\u8A9E",
        english: "English",
        korean: "\uD55C\uAD6D\uC5B4",
        japanese: "\u65E5\u672C\u8A9E",
        settings: "\u8A2D\u5B9A",
        accessibilityPermissionTitle:
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059",
        accessibilityPermissionMessage:
          "Shanks \u304C\u30BF\u30A4\u30D4\u30F3\u30B0\u306B\u53CD\u5FDC\u3067\u304D\u308B\u3088\u3046\u8A31\u53EF\u3057\u3066\u304F\u3060\u3055\u3044",
        accessibilityPermissionDetail:
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u3067 Shanks \u3092\u30AA\u30F3\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30BF\u30A4\u30D4\u30F3\u30B0\u53CD\u5FDC\u304C\u59CB\u307E\u3089\u306A\u3044\u5834\u5408\u306F Shanks \u3092\u518D\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        inputPermissionTitle:
          "\u5165\u529B\u76E3\u8996\u304C\u5FC5\u8981\u306A\u5834\u5408\u304C\u3042\u308A\u307E\u3059",
        inputPermissionMessage:
          "Shanks \u304C\u307E\u3060\u30AD\u30FC\u30DC\u30FC\u30C9\u5165\u529B\u3092\u691C\u51FA\u3067\u304D\u307E\u305B\u3093",
        inputPermissionDetail:
          "\u4E00\u90E8\u306E macOS \u74B0\u5883\u3067\u306F\u5165\u529B\u76E3\u8996\u3082\u5FC5\u8981\u3067\u3059\u3002\u5165\u529B\u76E3\u8996\u306B Shanks \u3092\u8FFD\u52A0\u3057\u3001\u30BF\u30A4\u30D4\u30F3\u30B0\u53CD\u5FDC\u304C\u59CB\u307E\u3089\u306A\u3044\u5834\u5408\u306F Shanks \u3092\u518D\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        openInputMonitoring: "\u5165\u529B\u76E3\u8996\u3092\u958B\u304F",
        openAccessibility:
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3\u3092\u958B\u304F",
        shareVideoTitle: "\u81EA\u6162\u52D5\u753B",
        shareVideoSaveTitle: "\u81EA\u6162\u52D5\u753B\u3092\u4FDD\u5B58",
        shareRecordingFailed:
          "\u81EA\u6162\u52D5\u753B\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
        globalInputPermissionTitle:
          "\u5165\u529B\u691C\u51FA\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093",
        globalInputPermissionMessage:
          "Shanks \u304C\u30AD\u30FC\u30DC\u30FC\u30C9\u307E\u305F\u306F\u30DB\u30A4\u30FC\u30EB\u5165\u529B\u3092\u691C\u51FA\u3067\u304D\u307E\u305B\u3093",
        globalInputPermissionDetail:
          "Shanks \u3092\u518D\u8D77\u52D5\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u89E3\u6C7A\u3057\u306A\u3044\u5834\u5408\u306F\u3001Windows \u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30BD\u30D5\u30C8\u307E\u305F\u306F\u30B7\u30B9\u30C6\u30E0\u30DD\u30EA\u30B7\u30FC\u304C\u30B0\u30ED\u30FC\u30D0\u30EB\u5165\u529B\u30D5\u30C3\u30AF\u3092\u30D6\u30ED\u30C3\u30AF\u3057\u3066\u3044\u306A\u3044\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
        reset: "\u30EA\u30BB\u30C3\u30C8",
        clear: "\u30AF\u30EA\u30A2",
        delete: "\u524A\u9664",
        later: "\u5F8C\u3067",
      },
    };
  function oS({ app: t, appName: e, getCurrentLanguage: r }) {
    function n() {
      return typeof r == "function" ? r() : "en";
    }
    function s(d, ...u) {
      let h = (Lc[n()] || Lc.en)[d] || Lc.en[d] || d;
      return typeof h == "function" ? h(...u) : h;
    }
    function o(d) {
      return String(d)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
    function i(d) {
      let u = String(d || "")
        .toLowerCase()
        .split("-")[0];
      return sS.includes(u) ? u : "en";
    }
    function a() {
      let d = t.getName && t.getName();
      return d && d !== "Electron" ? d : e;
    }
    function c() {
      return /\bdev\b/i.test(a());
    }
    function l() {
      return i(t.getLocale && t.getLocale());
    }
    return {
      t: s,
      escapeHtml: o,
      normalizeLanguage: i,
      appDisplayName: a,
      isDevBuild: c,
      defaultLanguage: l,
    };
  }
  rp.exports = { createI18n: oS };
});
var up = F((eR, lp) => {
  "use strict";
  var sp = require("path"),
    op = 30,
    ip = 1,
    ap = 60,
    cp = 1,
    jc = 0.1,
    iS = jc;
  function aS({ app: t, remindersStorePath: e, defaultPetSize: r }) {
    function n() {
      return t.isPackaged;
    }
    function s(y) {
      return n() && y === ip ? op : y;
    }
    function o(y) {
      return n() && y === cp ? ap : y;
    }
    function i() {
      return sp.join(t.getPath("userData"), "settings.json");
    }
    function a() {
      return sp.join(t.getPath("userData"), "local-ui-state.json");
    }
    function c() {
      return e(t.getPath("userData"));
    }
    function l(y) {
      return Math.max(40, Math.min(400, Math.round(Number(y) || r)));
    }
    function d(y) {
      if (!y || typeof y != "object") return null;
      let w = Math.round(Number(y.x)),
        A = Math.round(Number(y.y));
      return Number.isFinite(w) && Number.isFinite(A) ? { x: w, y: A } : null;
    }
    function u(y) {
      return Math.max(0, Math.min(jc, Number(y) || 0));
    }
    function f(y) {
      return u(Math.max(1, Math.min(10, Math.round(Number(y) || 1))) / 100);
    }
    function h(y) {
      return Math.max(1, Math.min(10, Math.round(u(y) * 100)));
    }
    function p(y) {
      let w = String(y || "").trim();
      return /^\d{4}-\d{2}-\d{2}$/.test(w) ? w : "";
    }
    function g(y) {
      return ["left", "right"].includes(y) ? y : "";
    }
    return {
      releaseBuildExcludesDevOptions: n,
      normalizeStretchIntervalForBuild: s,
      normalizeDrinkIntervalForBuild: o,
      settingsPath: i,
      localUiStatePath: a,
      remindersPath: c,
      normalizePetSize: l,
      normalizePetPosition: d,
      normalizeSoundVolume: u,
      soundVolumeForLevel: f,
      soundLevelForVolume: h,
      normalizeDateKey: p,
      normalizePetPeekEdge: g,
    };
  }
  lp.exports = {
    DEFAULT_STRETCH_INTERVAL_MIN: op,
    RELEASE_EXCLUDED_STRETCH_INTERVAL_MIN: ip,
    DEFAULT_DRINK_INTERVAL_MIN: ap,
    RELEASE_EXCLUDED_DRINK_INTERVAL_MIN: cp,
    MAX_SOUND_VOLUME: jc,
    DEFAULT_SOUND_VOLUME: iS,
    createSettingsHelpers: aS,
  };
});
var hp = F((tR, dp) => {
  "use strict";
  function cS({
    app: t,
    isWindows: e,
    logWarn: r,
    t: n,
    normalizeLanguage: s,
    normalizeSoundVolume: o,
    normalizeStretchIntervalForBuild: i,
    normalizeDrinkIntervalForBuild: a,
    soundVolumeForLevel: c,
    saveSettings: l,
    buildAppMenu: d,
    refreshAppTrayMenu: u,
    triggerStretchSequence: f,
    getStretchTimer: h,
    setStretchTimer: p,
    getStretchIntervalMin: g,
    setStretchIntervalMin: y,
    triggerDrinkSequence: w,
    getDrinkTimer: A,
    setDrinkTimer: S,
    getDrinkIntervalMin: D,
    setDrinkIntervalMin: B,
    getPeekStretchEnabled: R,
    setPeekStretchEnabledValue: _,
    getPeekDrinkEnabled: T,
    setPeekDrinkEnabledValue: m,
    getCurrentLanguage: x,
    setCurrentLanguage: b,
    getCatName: C,
    setCatNameValue: G,
    getUserName: O,
    setUserNameValue: L,
    getShowCatName: j,
    setShowCatNameValue: z,
    getFixedMessage: H,
    setFixedMessageValue: ee,
    getCatNamePromptShown: Q,
    setCatNamePromptShownValue: se,
    getTaskCompleteSoundVolume: be,
    setTaskCompleteSoundVolumeValue: oe,
    getSoundMuted: ae,
    setSoundMutedValue: I,
    getLaunchAtLogin: $,
    setLaunchAtLoginValue: Z,
    getAllowAnalysis: te,
    setAllowAnalysisValue: Y,
    setAgentMonitoringOverrideValue: U,
    getAgentMonitoringEnabled: E,
    applyAgentMonitoringState: W,
    getCurrentPetSize: v,
    getPetWindow: k,
    getLicenseWindow: N,
    getPatternWindow: P,
    getMappingWindow: M,
  }) {
    function ne(re) {
      let ke = re();
      return ke && !ke.isDestroyed() ? ke : null;
    }
    function ue() {
      if (t.isPackaged)
        try {
          let re = { openAtLogin: $(), openAsHidden: !1 };
          (e && (re.path = process.execPath), t.setLoginItemSettings(re));
        } catch (re) {
          r(
            "[Shanks] failed to update launch-at-login setting:",
            re && re.message ? re.message : re,
          );
        }
    }
    function We(re) {
      (Z(!!re), l({ sync: !1 }), ue(), d(), u());
    }
    function Te(re) {
      return (Y(!!re), l(), u(), te());
    }
    function Je(re, ke) {
      return (U(re, !!ke), l({ sync: !1 }), W(re), u(), E(re));
    }
    function qe() {
      let re = h();
      re && (clearInterval(re), p(null));
      let ke = g();
      ke > 0 && p(setInterval(() => f(), ke * 60 * 1e3));
    }
    function kt(re) {
      (y(i(re)), l(), qe(), u());
    }
    function xe() {
      let re = A();
      re && (clearInterval(re), S(null));
      let ke = D();
      ke > 0 && S(setInterval(() => w(), ke * 60 * 1e3));
    }
    function pe(re) {
      (B(a(re)), l(), xe(), u());
    }
    function rt(re) {
      return (_(!!re), l(), u(), R());
    }
    function Qs(re) {
      return (m(!!re), l(), u(), T());
    }
    function ln(re) {
      let ke = s(re);
      (b(ke), l({ sync: !1 }), d(), u());
      let Kt = ne(N);
      Kt &&
        (Kt.setTitle(n("licenseWindowTitle")),
        Kt.webContents.send("language-changed", ke));
      let ur = ne(P);
      ur &&
        (ur.setTitle(n("patternEditorTitle")),
        ur.webContents.send("language-changed", ke));
      let dr = ne(M);
      dr && dr.setTitle(n("mappingEditorTitle"));
      let Mr = ne(k);
      Mr && Mr.webContents.send("language-changed", ke);
    }
    function ar() {
      let re = ne(k);
      re &&
        re.webContents.send("cat-name-changed", { name: C(), visible: j() });
    }
    function xr() {
      let re = ne(k);
      re && re.webContents.send("user-name-changed", { name: O() });
    }
    function un(re = v()) {
      let ke = ne(k);
      ke && ke.webContents.send("pet-size-changed", re);
    }
    function Nr() {
      let re = ne(k);
      re && re.webContents.send("fixed-message-changed", { message: H() });
    }
    function ns(re) {
      let ke =
        String(re || "")
          .trim()
          .slice(0, 24) || "Shanks";
      return (G(ke), l(), ar(), { name: C(), visible: j() });
    }
    function nt(re) {
      return (
        L(
          String(re || "")
            .trim()
            .slice(0, 24),
        ),
        l(),
        xr(),
        { name: O() }
      );
    }
    function xt(re) {
      return (z(!!re), l(), ar(), { name: C(), visible: j() });
    }
    function cr(re) {
      return (
        ee(
          String(re || "")
            .trim()
            .slice(0, 80),
        ),
        l(),
        Nr(),
        { message: H() }
      );
    }
    function At() {
      Q() || (se(!0), l({ sync: !1 }));
    }
    function it() {
      let re = ne(k);
      re && re.webContents.send("task-complete-sound-volume", be());
    }
    function Lr() {
      let re = ne(k);
      re && re.webContents.send("sound-muted", ae());
    }
    function dn(re) {
      let ke = o(re);
      return (oe(ke), l(), it(), u(), be());
    }
    function lr(re) {
      return (I(!!re), l(), Lr(), u(), ae());
    }
    function jr(re) {
      return (dn(c(re)), ae() && lr(!1), be());
    }
    return {
      applyLaunchAtLoginSetting: ue,
      startStretchTimer: qe,
      startDrinkTimer: xe,
      setLaunchAtLogin: We,
      setAllowAnalysis: Te,
      setAgentMonitoringOverride: Je,
      setStretchInterval: kt,
      setDrinkInterval: pe,
      setPeekStretchEnabled: rt,
      setPeekDrinkEnabled: Qs,
      setLanguage: ln,
      broadcastCatNameSettings: ar,
      broadcastUserNameSettings: xr,
      broadcastPetSize: un,
      broadcastFixedMessageSettings: Nr,
      setCatName: ns,
      setUserName: nt,
      setShowCatName: xt,
      setFixedMessage: cr,
      markCatNamePromptShown: At,
      broadcastTaskCompleteSoundVolume: it,
      broadcastSoundMuted: Lr,
      setTaskCompleteSoundVolume: dn,
      setSoundVolumeLevel: jr,
      setSoundMuted: lr,
    };
  }
  dp.exports = { createSettingsController: cS };
});
var pp = F((rR, fp) => {
  "use strict";
  function lS({
    fs: t,
    settingsPath: e,
    localUiStatePath: r,
    readJsonFile: n,
    writeJsonFile: s,
    normalizeStretchIntervalForBuild: o,
    normalizeDrinkIntervalForBuild: i,
    normalizeLanguage: a,
    normalizeSoundVolume: c,
    normalizePetSize: l,
    normalizePetPosition: d,
    normalizePetPeekEdge: u,
    normalizeDateKey: f,
    markSyncDirty: h,
    loadReminderStore: p,
    getSettingsSnapshot: g,
    applySettingsData: y,
    getLocalUiState: w,
    applyLocalUiState: A,
  }) {
    function S() {
      let _ = n(r());
      _ &&
        typeof _.accountNudgeDismissedDate == "string" &&
        A({ accountNudgeDismissedDate: f(_.accountNudgeDismissedDate) });
    }
    function D() {
      try {
        s(r(), w());
      } catch {}
    }
    function B() {
      try {
        if (t.existsSync(e())) {
          let _ = JSON.parse(t.readFileSync(e(), "utf8")),
            T = {};
          if (
            (typeof _.stretchIntervalMin == "number" &&
              _.stretchIntervalMin >= 0 &&
              (T.stretchIntervalMin = o(_.stretchIntervalMin)),
            typeof _.drinkIntervalMin == "number" &&
              _.drinkIntervalMin >= 0 &&
              (T.drinkIntervalMin = i(_.drinkIntervalMin)),
            typeof _.peekStretchEnabled == "boolean" &&
              (T.peekStretchEnabled = _.peekStretchEnabled),
            typeof _.peekDrinkEnabled == "boolean" &&
              (T.peekDrinkEnabled = _.peekDrinkEnabled),
            typeof _.language == "string" &&
              (T.currentLanguage = a(_.language)),
            typeof _.catName == "string" &&
              _.catName.trim() &&
              (T.catName = _.catName.trim().slice(0, 24)),
            typeof _.userName == "string" &&
              (T.userName = _.userName.trim().slice(0, 24)),
            typeof _.showCatName == "boolean" &&
              (T.showCatName = _.showCatName),
            typeof _.fixedMessage == "string" &&
              (T.fixedMessage = _.fixedMessage.trim().slice(0, 80)),
            typeof _.showReminderButtonOutside == "boolean" &&
              (T.showReminderButtonOutside = _.showReminderButtonOutside),
            typeof _.catNamePromptShown == "boolean" &&
              (T.catNamePromptShown = _.catNamePromptShown),
            typeof _.taskCompleteSoundVolume == "number" &&
              (T.taskCompleteSoundVolume = c(_.taskCompleteSoundVolume)),
            typeof _.soundMuted == "boolean"
              ? (T.soundMuted = _.soundMuted)
              : T.taskCompleteSoundVolume === 0 &&
                ((T.soundMuted = !0),
                (T.taskCompleteSoundVolume = g().defaultSoundVolume)),
            typeof _.launchAtLogin == "boolean" &&
              (T.launchAtLogin = _.launchAtLogin),
            typeof _.allowAnalysis == "boolean" &&
              (T.allowAnalysis = _.allowAnalysis),
            _.agentMonitoringOverrides &&
              typeof _.agentMonitoringOverrides == "object" &&
              !Array.isArray(_.agentMonitoringOverrides))
          ) {
            let x = {};
            for (let b of ["cursor", "claude", "antigravity", "codex", "kiro"])
              typeof _.agentMonitoringOverrides[b] == "boolean" &&
                (x[b] = _.agentMonitoringOverrides[b]);
            T.agentMonitoringOverrides = x;
          }
          (typeof _.petSize == "number" && (T.currentPetSize = l(_.petSize)),
            (T.currentPetPosition = d(_.petPosition)));
          let m = u(_.petPeekEdge);
          ((T.petPeekState = m && T.currentPetPosition ? { edge: m } : null),
            typeof _.pomodoroFocusMin == "number" &&
              _.pomodoroFocusMin > 0 &&
              (T.pomodoroFocusMin = Math.max(
                1,
                Math.min(180, Math.round(_.pomodoroFocusMin)),
              )),
            typeof _.pomodoroRestMin == "number" &&
              _.pomodoroRestMin > 0 &&
              (T.pomodoroRestSec = Math.max(
                30,
                Math.min(3600, Math.round(_.pomodoroRestMin * 60)),
              )),
            typeof _.pomodoroRestSec == "number" &&
              _.pomodoroRestSec > 0 &&
              (T.pomodoroRestSec = Math.max(
                30,
                Math.min(3600, Math.round(_.pomodoroRestSec)),
              )),
            (T.pomodoroRemainingSec =
              (typeof T.pomodoroFocusMin == "number"
                ? T.pomodoroFocusMin
                : g().pomodoroFocusMin) * 60),
            y(T));
        }
      } catch {}
      (S(), p());
    }
    function R(_ = {}) {
      let T = _.sync !== !1,
        m = g();
      try {
        t.writeFileSync(
          e(),
          JSON.stringify(
            {
              stretchIntervalMin: m.stretchIntervalMin,
              drinkIntervalMin: m.drinkIntervalMin,
              peekStretchEnabled: m.peekStretchEnabled,
              peekDrinkEnabled: m.peekDrinkEnabled,
              language: m.currentLanguage,
              catName: m.catName,
              userName: m.userName,
              showCatName: m.showCatName,
              fixedMessage: m.fixedMessage,
              showReminderButtonOutside: m.showReminderButtonOutside,
              catNamePromptShown: m.catNamePromptShown,
              taskCompleteSoundVolume: m.taskCompleteSoundVolume,
              soundMuted: m.soundMuted,
              launchAtLogin: m.launchAtLogin,
              allowAnalysis: m.allowAnalysis,
              agentMonitoringOverrides: m.agentMonitoringOverrides,
              petSize: m.currentPetSize,
              petPosition: m.currentPetPosition,
              petPeekEdge:
                m.petPeekState && m.petPeekState.edge
                  ? m.petPeekState.edge
                  : "",
              pomodoroFocusMin: m.pomodoroFocusMin,
              pomodoroRestSec: m.pomodoroRestSec,
            },
            null,
            2,
          ),
        );
      } catch {}
      T && h("settings");
    }
    return {
      loadSettings: B,
      loadLocalUiState: S,
      saveLocalUiState: D,
      saveSettings: R,
    };
  }
  fp.exports = { createSettingsStore: lS };
});
var mp = F((nR, gp) => {
  "use strict";
  function uS({ getUserName: t, getCurrentLanguage: e }) {
    function r(u = new Date()) {
      let f = u.getFullYear(),
        h = String(u.getMonth() + 1).padStart(2, "0"),
        p = String(u.getDate()).padStart(2, "0");
      return `${f}-${h}-${p}`;
    }
    function n(u) {
      return ["none", "daily", "weekdays", "weekends", "custom"].includes(u)
        ? u
        : "none";
    }
    function s(u) {
      return Array.isArray(u)
        ? [
            ...new Set(
              u
                .map((f) => Number(f))
                .filter((f) => Number.isInteger(f) && f >= 0 && f <= 6),
            ),
          ].sort((f, h) => f - h)
        : [];
    }
    function o(u) {
      if (!u || typeof u != "object") return null;
      let f =
          typeof u.time == "string" ? /^(\d{2}):(\d{2})$/.exec(u.time) : null,
        h = f ? Number(f[1]) : -1,
        p = f ? Number(f[2]) : -1,
        g =
          h >= 0 && h <= 23 && p >= 0 && p <= 59
            ? `${String(h).padStart(2, "0")}:${String(p).padStart(2, "0")}`
            : "",
        y = typeof u.message == "string" ? u.message.trim().slice(0, 80) : "";
      if (!g || !y) return null;
      let w = n(u.repeat),
        A = s(u.days);
      return (
        w === "custom" && A.length === 0 && (w = "none"),
        {
          id:
            typeof u.id == "string" && u.id
              ? u.id
              : `reminder-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          time: g,
          message: y,
          repeat: w,
          days: A,
          enabled: u.enabled !== !1,
          lastTriggeredDate:
            typeof u.lastTriggeredDate == "string" ? u.lastTriggeredDate : "",
          createdAt:
            typeof u.createdAt == "string"
              ? u.createdAt
              : new Date().toISOString(),
          updatedAt:
            typeof u.updatedAt == "string"
              ? u.updatedAt
              : new Date().toISOString(),
          deletedAt: typeof u.deletedAt == "string" ? u.deletedAt : null,
        }
      );
    }
    function i(u) {
      return o({
        id: u.local_id || u.id,
        time: u.time,
        message: u.message,
        repeat: u.repeat,
        days: Array.isArray(u.days) ? u.days : [],
        enabled: u.enabled !== !1,
        lastTriggeredDate:
          typeof u.last_triggered_date == "string" ? u.last_triggered_date : "",
        createdAt: u.created_at,
        updatedAt: u.updated_at,
        deletedAt: u.deleted_at,
      });
    }
    function a(u, f) {
      return {
        user_id: u,
        local_id: f.id,
        time: f.time,
        message: f.message,
        repeat: f.repeat,
        days: f.days || [],
        enabled: f.enabled !== !1,
        last_triggered_date: f.lastTriggeredDate || "",
        deleted_at: f.deletedAt || null,
      };
    }
    function c(u, f = new Date()) {
      let h = f.getDay();
      return u.repeat === "weekdays"
        ? h >= 1 && h <= 5
        : u.repeat === "weekends"
          ? h === 0 || h === 6
          : u.repeat === "custom"
            ? Array.isArray(u.days) && u.days.includes(h)
            : !0;
    }
    function l(u) {
      let f = /^(\d{2}):(\d{2})$/.exec(String(u || ""));
      if (!f) return "";
      let h = Number(f[1]),
        p = f[2];
      if (!Number.isInteger(h) || h < 0 || h > 23) return "";
      let g = h >= 12 ? "PM" : "AM";
      return `${h % 12 || 12}:${p} ${g}`;
    }
    function d(u, f) {
      let h = String(u || "").trim();
      if (!h) return "";
      let p = l(f),
        g = String((typeof t == "function" ? t() : "") || "").trim(),
        y = typeof e == "function" ? e() : "en",
        w = g || "\uC9D1\uC0AC\uC57C",
        A = g || "Human",
        S = g ? `${g}\u3055\u3093` : "\u3054\u4E3B\u4EBA";
      return y === "ko"
        ? `${w}, ${p} "${h}"`
        : y === "ja"
          ? `${S}\u3001${p}\u300C${h}\u300D`
          : `${A}, ${p} "${h}"`;
    }
    return {
      todayKey: r,
      normalizeReminderRepeat: n,
      normalizeReminderDays: s,
      sanitizeReminder: o,
      reminderRowToLocal: i,
      reminderLocalToRow: a,
      reminderAppliesToday: c,
      formatReminderTimeForSpeech: l,
      formatReminderSpeech: d,
    };
  }
  gp.exports = { createReminderHelpers: uS };
});
var Dc = F((sR, wp) => {
  "use strict";
  var Xn = require("fs"),
    yp = require("path"),
    ni = 1;
  function _p(t) {
    try {
      return Xn.existsSync(t) ? JSON.parse(Xn.readFileSync(t, "utf8")) : null;
    } catch {
      return null;
    }
  }
  function Mc(t, e) {
    (Xn.mkdirSync(yp.dirname(t), { recursive: !0 }),
      Xn.writeFileSync(t, JSON.stringify(e, null, 2)));
  }
  function dS(t) {
    return yp.join(t, "reminders.json");
  }
  function hS(t) {
    let e = _p(t);
    return !e || typeof e != "object" || !Array.isArray(e.reminders)
      ? { version: ni, reminders: [] }
      : {
          version: ni,
          reminders: e.reminders.filter((r) => r && typeof r == "object"),
        };
  }
  function vp(t, e) {
    let r = Array.isArray(e) ? e.filter((n) => n && typeof n == "object") : [];
    Mc(t, { version: ni, reminders: r });
  }
  function fS(t, e) {
    let r = `${t}.before-reminders-migration`;
    Xn.existsSync(r) || Mc(r, e);
  }
  function pS(t, e) {
    let r = { ...e };
    (delete r.reminders,
      (r.remindersMigratedAt =
        typeof r.remindersMigratedAt == "string"
          ? r.remindersMigratedAt
          : new Date().toISOString()),
      Mc(t, r));
  }
  function gS(t) {
    let { settingsPath: e, remindersPath: r, sanitizeReminder: n } = t || {};
    if (!e || !r || typeof n != "function")
      return { migrated: !1, cleanedSettings: !1, count: 0 };
    let s = _p(e);
    if (!s || typeof s != "object" || !Array.isArray(s.reminders))
      return { migrated: !1, cleanedSettings: !1, count: 0 };
    fS(e, s);
    let o = Xn.existsSync(r),
      i = !1,
      a = 0;
    if (!o) {
      let c = s.reminders.map(n).filter(Boolean);
      (vp(r, c), (i = !0), (a = c.length));
    }
    return (pS(e, s), { migrated: i, cleanedSettings: !0, count: a });
  }
  wp.exports = {
    REMINDERS_SCHEMA_VERSION: ni,
    remindersPath: dS,
    loadRemindersFile: hS,
    saveRemindersFile: vp,
    migrateLegacyRemindersFromSettings: gS,
  };
});
var Sp = F((oR, bp) => {
  "use strict";
  var {
    loadRemindersFile: mS,
    saveRemindersFile: yS,
    migrateLegacyRemindersFromSettings: _S,
  } = Dc();
  function vS({
    settingsPath: t,
    remindersPath: e,
    sanitizeReminder: r,
    todayKey: n,
    reminderAppliesToday: s,
    formatReminderSpeech: o,
    nextLocalMutationTimestamp: i,
    markSyncDirty: a,
    saveSettings: c,
    captureAnalytics: l,
    reminderAnalyticsProperties: d,
    getReminders: u,
    setReminders: f,
    getShowReminderButtonOutside: h,
    setShowReminderButtonOutsideValue: p,
    sendToPet: g,
  }) {
    let y = null;
    function w() {
      return u()
        .filter((O) => !O.deletedAt)
        .slice()
        .sort(
          (O, L) =>
            O.time.localeCompare(L.time) ||
            O.createdAt.localeCompare(L.createdAt),
        )
        .map((O) => ({ ...O }));
    }
    function A() {
      g("reminders-changed", w());
    }
    function S() {
      g("reminder-settings-changed", { showButtonOutside: h() });
    }
    function D() {
      try {
        let O = _S({
            settingsPath: t(),
            remindersPath: e(),
            sanitizeReminder: r,
          }),
          L = mS(e());
        (f(L.reminders.map(r).filter(Boolean)),
          O.cleanedSettings && c({ sync: !1 }),
          O.migrated && a("reminders"));
      } catch {}
    }
    function B() {
      try {
        yS(e(), u());
      } catch {}
      a("reminders");
    }
    function R(O) {
      (p(!!O), c({ sync: !1 }), S());
    }
    function _(O) {
      let L = i(),
        j = r({
          ...O,
          id: `reminder-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          enabled: !0,
          createdAt: L,
          updatedAt: L,
          deletedAt: null,
        });
      return j
        ? (u().push(j),
          B(),
          A(),
          l("reminder_created", d(j)),
          { ok: !0, reminder: j, reminders: w() })
        : { ok: !1, reason: "invalid" };
    }
    function T(O, L) {
      let j = u(),
        z = j.findIndex((se) => se.id === O);
      if (z < 0) return { ok: !1, reason: "not-found" };
      let H = j[z],
        ee = i(H.updatedAt, H.createdAt),
        Q = r({
          ...L,
          id: H.id,
          enabled: !0,
          createdAt: H.createdAt,
          updatedAt: ee,
          deletedAt: null,
        });
      return Q
        ? ((Q.lastTriggeredDate = ""),
          (j[z] = Q),
          B(),
          A(),
          { ok: !0, reminder: Q, reminders: w() })
        : { ok: !1, reason: "invalid" };
    }
    function m(O) {
      let L = u().find((j) => j.id === O && !j.deletedAt);
      if (L) {
        let j = i(L.updatedAt, L.createdAt);
        ((L.deletedAt = j), (L.updatedAt = j), B(), A());
      }
      return { ok: !0, reminders: w() };
    }
    function x(O, L) {
      let j = u().find((z) => z.id === O);
      return !j || j.deletedAt
        ? { ok: !1, reason: "not-found" }
        : ((j.enabled = !!L),
          (j.updatedAt = new Date().toISOString()),
          B(),
          A(),
          { ok: !0, reminder: j, reminders: w() });
    }
    function b() {
      let O = new Date(),
        L = n(O),
        j = String(O.getHours()).padStart(2, "0"),
        z = String(O.getMinutes()).padStart(2, "0"),
        H = `${j}:${z}`,
        ee = !1;
      for (let Q of u())
        Q.deletedAt ||
          !Q.enabled ||
          Q.time !== H ||
          Q.lastTriggeredDate === L ||
          (s(Q, O) &&
            ((Q.lastTriggeredDate = L),
            (Q.updatedAt = new Date().toISOString()),
            (ee = !0),
            g("reminder-triggered", { id: Q.id, text: o(Q.message, Q.time) }),
            l("reminder_triggered", d(Q)),
            Q.repeat === "none" && (Q.enabled = !1)));
      ee && (B(), A());
    }
    function C() {
      (y && clearInterval(y), (y = setInterval(b, 15 * 1e3)), b());
    }
    function G() {
      y && (clearInterval(y), (y = null));
    }
    return {
      loadReminderStore: D,
      saveReminders: B,
      reminderList: w,
      broadcastReminders: A,
      broadcastReminderSettings: S,
      setShowReminderButtonOutside: R,
      addReminder: _,
      updateReminder: T,
      deleteReminder: m,
      setReminderEnabled: x,
      checkRemindersNow: b,
      startReminderTimer: C,
      stopReminderTimer: G,
    };
  }
  bp.exports = { createRemindersState: vS };
});
var Ap = F((iR, kp) => {
  "use strict";
  function wS({
    getFocusMin: t,
    setFocusMinValue: e,
    getRestSec: r,
    setRestSecValue: n,
    getMode: s,
    setMode: o,
    getRunning: i,
    setRunning: a,
    getVisible: c,
    setVisible: l,
    getRemainingSec: d,
    setRemainingSec: u,
    saveSettings: f,
    refreshAppTrayMenu: h,
    sendToPet: p,
    sendPomodoroComplete: g,
    triggerStretchSequence: y,
    triggerPomodoroFocusStartSequence: w,
    captureAnalytics: A,
    remainingSecBucketForAnalytics: S,
  }) {
    let D = null;
    function B(L = s()) {
      return L === "rest" ? r() : t() * 60;
    }
    function R() {
      return {
        visible: c(),
        running: i(),
        mode: s(),
        remainingSec: Math.max(0, d()),
        focusMin: t(),
        restSec: r(),
      };
    }
    function _() {
      p("pomodoro-state", R());
    }
    function T() {
      D && (clearInterval(D), (D = null));
    }
    function m() {
      (T(),
        (D = setInterval(() => {
          if (i()) {
            if ((u(d() - 1), d() <= 0)) {
              let L = s(),
                j = L === "focus" ? "rest" : "focus";
              (o(j),
                u(B(j)),
                g({ completedMode: L, nextMode: j }),
                L === "focus" ? y() : w());
            }
            _();
          }
        }, 1e3)));
    }
    function x() {
      let L = i();
      (l(!0),
        d() <= 0 && u(B()),
        a(!0),
        m(),
        _(),
        h(),
        L ||
          A("pomodoro_started", {
            mode: s(),
            focus_min: t(),
            rest_min: Math.round(r() / 60),
            remaining_sec_bucket: S(d()),
          }));
    }
    function b() {
      let L = i();
      (a(!1),
        T(),
        _(),
        h(),
        L &&
          A("pomodoro_paused", {
            mode: s(),
            focus_min: t(),
            rest_min: Math.round(r() / 60),
            remaining_sec_bucket: S(d()),
          }));
    }
    function C() {
      let L = c(),
        j = s(),
        z = d();
      (a(!1),
        l(!1),
        o("focus"),
        u(B("focus")),
        T(),
        _(),
        h(),
        L &&
          A("pomodoro_reset", {
            mode: j,
            focus_min: t(),
            rest_min: Math.round(r() / 60),
            remaining_sec_bucket: S(z),
          }));
    }
    function G(L) {
      (e(Math.max(1, Math.min(180, Math.round(L)))),
        !i() && s() === "focus" && u(B("focus")),
        f(),
        _(),
        h());
    }
    function O(L) {
      (n(Math.max(30, Math.min(3600, Math.round(L)))),
        !i() && s() === "rest" && u(B("rest")),
        f(),
        _(),
        h());
    }
    return {
      pomodoroPhaseDurationSec: B,
      pomodoroState: R,
      broadcastPomodoroState: _,
      stopPomodoroTimer: T,
      startPomodoroTimer: m,
      startPomodoro: x,
      pausePomodoro: b,
      resetPomodoro: C,
      setPomodoroFocusMin: G,
      setPomodoroRestSec: O,
    };
  }
  kp.exports = { createPomodoroState: wS };
});
var Pp = F((aR, Cp) => {
  "use strict";
  var bS = require("path");
  function si(t) {
    let e = t && typeof t == "object" ? t : {};
    return {
      dirty: e.dirty === !0,
      updatedAt: typeof e.updatedAt == "string" ? e.updatedAt : null,
      serverUpdatedAt:
        typeof e.serverUpdatedAt == "string" ? e.serverUpdatedAt : null,
    };
  }
  function Ep(t) {
    return !t || typeof t != "object" || Array.isArray(t)
      ? {}
      : Object.fromEntries(
          Object.entries(t).filter(
            ([e, r]) => typeof e == "string" && typeof r == "string",
          ),
        );
  }
  function $c(t = null) {
    return {
      schemaVersion: 1,
      accountUserId: typeof t == "string" ? t : null,
      serverTimeOffsetMs: 0,
      serverTimeOffsetUpdatedAt: null,
      pattern: { dirty: !1, updatedAt: null, serverId: null },
      settings: { dirty: !1, updatedAt: null },
      presets: { dirty: !1, updatedAt: null, map: {}, pendingIds: [] },
      reminders: { dirty: !1, updatedAt: null, map: {} },
    };
  }
  function Tp(t) {
    if (!t || typeof t != "object") return $c();
    let e = t.pattern && typeof t.pattern == "object" ? t.pattern : {},
      r = t.settings && typeof t.settings == "object" ? t.settings : {},
      n = t.presets && typeof t.presets == "object" ? t.presets : {},
      s = t.reminders && typeof t.reminders == "object" ? t.reminders : {},
      o = Number(t.serverTimeOffsetMs);
    return {
      schemaVersion: 1,
      accountUserId:
        typeof t.accountUserId == "string" ? t.accountUserId : null,
      serverTimeOffsetMs: Number.isFinite(o) ? Math.round(o) : 0,
      serverTimeOffsetUpdatedAt:
        typeof t.serverTimeOffsetUpdatedAt == "string"
          ? t.serverTimeOffsetUpdatedAt
          : null,
      pattern: {
        ...si(e),
        serverId: typeof e.serverId == "string" ? e.serverId : null,
      },
      settings: si(r),
      presets: {
        ...si(n),
        map: Ep(n.map),
        pendingIds: Array.isArray(n.pendingIds)
          ? n.pendingIds.filter((i) => typeof i == "string")
          : [],
      },
      reminders: { ...si(s), map: Ep(s.map) },
    };
  }
  function Uc(t) {
    let e = Date.parse(t || "");
    return Number.isFinite(e) ? e : 0;
  }
  function SS({ app: t, readJsonFile: e, writeJsonFile: r }) {
    function n() {
      return bS.join(t.getPath("userData"), "sync-state.json");
    }
    function s() {
      return Tp(e(n()));
    }
    function o(l) {
      try {
        r(n(), l);
      } catch {}
    }
    function i(l = s()) {
      let d = Number(l && l.serverTimeOffsetMs);
      return Number.isFinite(d) ? Math.round(d) : 0;
    }
    function a(l = s()) {
      return Date.now() + i(l);
    }
    function c(...l) {
      let d = Math.max(0, ...l.map(Uc));
      return new Date(Math.max(a(), d + 1)).toISOString();
    }
    return {
      syncStatePath: n,
      defaultSyncState: $c,
      loadSyncState: s,
      saveSyncState: o,
      serverTimestampMs: Uc,
      syncServerTimeOffsetMs: i,
      serverAlignedNowMs: a,
      nextLocalMutationTimestamp: c,
    };
  }
  Cp.exports = {
    createSyncStateStore: SS,
    defaultSyncState: $c,
    normalizeSyncState: Tp,
    serverTimestampMs: Uc,
  };
});
var Hc = F((cR, Ip) => {
  "use strict";
  var Fc = "#1A1A1A",
    Jr = "#1A1A1A",
    qc = "#FFFFFF";
  function kS() {
    return {
      selectedPresetId: null,
      baseColor: Fc,
      eyeColor: Jr,
      eyeBgColor: qc,
      eyePupilScale: 100,
      oddEye: !1,
      eyeColorLeft: Jr,
      eyeColorRight: Jr,
      head: [],
      body: [],
      tail: [],
      legFl: [],
      legFr: [],
      legRl: [],
      legRr: [],
      earL: [],
      earR: [],
    };
  }
  function AS(t) {
    return `shanks-pattern-${
      (typeof t == "string" && t.trim() ? t.trim() : "custom")
        .replace(/[^a-z0-9가-힣_-]+/gi, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60) || "custom"
    }.json`;
  }
  function Rp(t) {
    return Math.max(40, Math.min(140, Math.round(Number(t) || 100)));
  }
  function Ms(t) {
    let e = t && typeof t == "object" ? t : {};
    return {
      selectedPresetId:
        typeof e.selectedPresetId == "string" ? e.selectedPresetId : null,
      baseColor: typeof e.baseColor == "string" ? e.baseColor : Fc,
      eyeColor: typeof e.eyeColor == "string" ? e.eyeColor : Jr,
      eyeBgColor: typeof e.eyeBgColor == "string" ? e.eyeBgColor : qc,
      eyePupilScale: Rp(e.eyePupilScale),
      oddEye: !!e.oddEye,
      eyeColorLeft:
        typeof e.eyeColorLeft == "string" ? e.eyeColorLeft : e.eyeColor || Jr,
      eyeColorRight:
        typeof e.eyeColorRight == "string" ? e.eyeColorRight : e.eyeColor || Jr,
      head: Array.isArray(e.head) ? e.head : [],
      body: Array.isArray(e.body) ? e.body : [],
      tail: Array.isArray(e.tail) ? e.tail : [],
      legFl: Array.isArray(e.legFl) ? e.legFl : [],
      legFr: Array.isArray(e.legFr) ? e.legFr : [],
      legRl: Array.isArray(e.legRl) ? e.legRl : [],
      legRr: Array.isArray(e.legRr) ? e.legRr : [],
      earL: Array.isArray(e.earL) ? e.earL : [],
      earR: Array.isArray(e.earR) ? e.earR : [],
    };
  }
  function oi(t) {
    let e = Ms(t);
    return (delete e.selectedPresetId, e);
  }
  function ii(t) {
    let e = t && typeof t == "object" ? t : {};
    return Ms(e.pattern && typeof e.pattern == "object" ? e.pattern : e);
  }
  function ES(t) {
    return (
      typeof t == "string" &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        t,
      )
    );
  }
  function Op(t) {
    return !t || typeof t != "object" || typeof t.id != "string"
      ? null
      : {
          id: t.id,
          name:
            typeof t.name == "string" && t.name.trim()
              ? t.name.trim().slice(0, 60)
              : "My preset",
          createdAt:
            typeof t.createdAt == "string"
              ? t.createdAt
              : new Date().toISOString(),
          updatedAt:
            typeof t.updatedAt == "string"
              ? t.updatedAt
              : new Date().toISOString(),
          deletedAt: typeof t.deletedAt == "string" ? t.deletedAt : null,
          pattern: Ms(t.pattern),
        };
  }
  function TS(t, e) {
    let r = (typeof t == "string" && t.trim() ? t.trim() : "My preset").slice(
        0,
        60,
      ),
      n = new Set(e.map((s) => s.name));
    if (!n.has(r)) return r;
    for (let s = 1; s < 1e3; s += 1) {
      let o = `${r} (${s})`.slice(0, 60);
      if (!n.has(o)) return o;
    }
    return `${r}-${Date.now()}`.slice(0, 60);
  }
  function CS(t) {
    return !t || typeof t != "object"
      ? []
      : (Array.isArray(t.presets) ? t.presets : t.preset ? [t.preset] : [])
          .filter((r) => r && typeof r == "object")
          .map((r) => ({
            name:
              typeof r.name == "string" && r.name.trim()
                ? r.name.trim().slice(0, 60)
                : "My preset",
            createdAt:
              typeof r.createdAt == "string"
                ? r.createdAt
                : new Date().toISOString(),
            updatedAt:
              typeof r.updatedAt == "string"
                ? r.updatedAt
                : new Date().toISOString(),
            pattern: Ms(r.pattern),
          }));
  }
  function PS(t) {
    let e =
      typeof t.name == "string" && t.name.trim() ? t.name.trim() : "My preset";
    return {
      id: t.id,
      label: { en: e, ko: e },
      source: t.is_official ? "official" : "custom",
      sortOrder: Number.isFinite(Number(t.sort_order))
        ? Number(t.sort_order)
        : 0,
      createdAt: typeof t.created_at == "string" ? t.created_at : null,
      updatedAt: typeof t.updated_at == "string" ? t.updated_at : null,
      deletedAt: typeof t.deleted_at == "string" ? t.deleted_at : null,
      pattern: ii(t.pattern_json),
    };
  }
  function RS(t, e) {
    return Op({
      id: e || t.id,
      name: t.name,
      createdAt: t.created_at,
      updatedAt: t.updated_at,
      deletedAt: t.deleted_at,
      pattern: ii(t.pattern_json),
    });
  }
  function OS(t, e) {
    return {
      user_id: t,
      name: e.name,
      pattern_json: oi(e.pattern),
      is_official: !1,
      deleted_at: e.deletedAt || null,
    };
  }
  function Bc(t, e) {
    return JSON.stringify({
      name: typeof t == "string" ? t : "",
      pattern: oi(e),
    });
  }
  function IS(t) {
    return JSON.stringify(oi(t));
  }
  function xS(t) {
    return Bc(t && t.name, t && t.pattern);
  }
  function NS(t) {
    return Bc(t && t.name, ii(t && t.pattern_json));
  }
  Ip.exports = {
    DEFAULT_BASE_COLOR: Fc,
    DEFAULT_EYE_COLOR: Jr,
    DEFAULT_EYE_BG_COLOR: qc,
    DEFAULT_EYE_PUPIL_SCALE: 100,
    defaultPatternState: kS,
    customPatternPresetExportName: AS,
    normalizeEyePupilScale: Rp,
    sanitizePattern: Ms,
    patternForServer: oi,
    patternFromServerPatternJson: ii,
    isUuid: ES,
    normalizeCustomPatternPreset: Op,
    uniqueCustomPatternPresetName: TS,
    normalizeImportedCustomPresets: CS,
    catPatternRowPayload: PS,
    presetRowToLocal: RS,
    presetLocalToRow: OS,
    customPresetMatchKey: Bc,
    customPresetPatternMatchKey: IS,
    localCustomPresetMatchKey: xS,
    serverCustomPresetMatchKey: NS,
  };
});
var jp = F((lR, Lp) => {
  "use strict";
  var Wc = require("path"),
    {
      sanitizePattern: ai,
      normalizeCustomPatternPreset: LS,
      isUuid: xp,
    } = Hc(),
    jS = [
      {
        id: "black-cat",
        label: { en: "Black cat", ko: "\uAC80\uC740\uB0E5\uC774" },
        file: "black-cat.json",
        image: "../../assets/img/presets/black.png",
      },
      {
        id: "white-cat",
        label: { en: "White cat", ko: "\uD558\uC580\uB0E5\uC774" },
        file: "white-cat.json",
        image: "../../assets/img/presets/white.png",
      },
      {
        id: "cheese-cat",
        label: { en: "Cheese cat", ko: "\uCE58\uC988\uB0E5\uC774" },
        file: "cheese-cat.json",
        image: "../../assets/img/presets/orange.png",
      },
      {
        id: "siamese-cat",
        label: { en: "Siamese cat", ko: "\uC0F4\uACE0\uC591\uC774" },
        file: "siamese-cat.json",
        image: "../../assets/img/presets/siamese.png",
      },
      {
        id: "mackerel-tabby",
        label: { en: "Mackerel tabby", ko: "\uACE0\uB4F1\uC5B4\uB0E5\uC774" },
        file: "mackerel-tabby.json",
        image: "../../assets/img/presets/mackerel.png",
      },
      {
        id: "calico-cat",
        label: { en: "Calico cat", ko: "\uC0BC\uC0C9\uB0E5\uC774" },
        file: "calico-cat.json",
        image: "../../assets/img/presets/calico.png",
      },
      {
        id: "russian-blue",
        label: { en: "Russian Blue", ko: "\uB7EC\uC2DC\uC548\uBE14\uB8E8" },
        file: "rusian-blue.json",
        image: "../../assets/img/presets/rusian-blue.png",
      },
    ],
    Np = {
      "black-cat": "Black",
      "white-cat": "White",
      "cheese-cat": "Cheese",
      "siamese-cat": "Siamese",
      "mackerel-tabby": "Mackerel Tabby",
      "calico-cat": "Calico",
      "russian-blue": "Russian Blue",
    },
    Vc = "black-cat";
  function MS({
    app: t,
    fs: e,
    runtimePath: r,
    readJsonFile: n,
    writeJsonFile: s,
    loadSyncState: o,
    markSyncDirty: i,
    getCurrentPattern: a,
    setCurrentPattern: c,
    sendPatternChanged: l,
    sendPatternPresetsChanged: d,
  }) {
    function u() {
      return Wc.join(t.getPath("userData"), "pattern.json");
    }
    function f() {
      return Wc.join(t.getPath("userData"), "custom-presets.json");
    }
    function h() {
      let m = a().selectedPresetId;
      if (xp(m)) return m;
      if (typeof m == "string") {
        let x = o(),
          b = x.presets.map && x.presets.map[m];
        if (xp(b)) return b;
      }
      return null;
    }
    function p(m) {
      return r("presets", "patterns", Wc.basename(m));
    }
    function g() {
      return jS
        .map((m) => {
          try {
            let x = e.readFileSync(p(m.file), "utf8");
            return {
              id: m.id,
              label: m.label,
              source: "builtin",
              image: m.image,
              pattern: ai(JSON.parse(x)),
            };
          } catch {
            return null;
          }
        })
        .filter(Boolean);
    }
    function y(m) {
      return g().find((x) => x.id === m) || null;
    }
    function w() {
      try {
        let m = n(f());
        return !m || !Array.isArray(m.presets)
          ? []
          : m.presets.map(LS).filter(Boolean);
      } catch {
        return [];
      }
    }
    function A() {
      return w().filter((m) => !m.deletedAt);
    }
    function S(m) {
      (s(f(), { version: 1, presets: m }), i("presets"));
    }
    function D(m) {
      let x = o(),
        b = x.presets.map && x.presets.map[m.id],
        C = Array.isArray(x.presets.pendingIds) ? x.presets.pendingIds : [];
      return {
        id: m.id,
        label: { en: m.name, ko: m.name },
        source: "custom",
        syncPending: !!(C.includes(m.id) || !b),
        createdAt: m.createdAt,
        updatedAt: m.updatedAt,
        pattern: ai(m.pattern),
      };
    }
    function B() {
      try {
        if (e.existsSync(u())) {
          let m = JSON.parse(e.readFileSync(u(), "utf8"));
          m && typeof m == "object" && c(ai(m));
        }
      } catch {}
    }
    function R() {
      try {
        e.writeFileSync(u(), JSON.stringify(a()));
      } catch {}
    }
    function _() {
      l(a());
    }
    function T() {
      let m = y(Vc);
      return m
        ? (c({ ...ai(m.pattern), selectedPresetId: m.id }),
          R(),
          i("settings"),
          _(),
          d(),
          !0)
        : !1;
    }
    return {
      legacyPresetOfficialNames: Np,
      fallbackPatternPresetId: Vc,
      patternPath: u,
      customPatternPresetsPath: f,
      selectedCatPatternId: h,
      patternPresetPath: p,
      loadBuiltinPatternPresets: g,
      loadBuiltinPatternPresetById: y,
      loadAllCustomPatternPresets: w,
      loadCustomPatternPresets: A,
      saveCustomPatternPresets: S,
      customPatternPresetPayload: D,
      loadPattern: B,
      savePattern: R,
      broadcastPattern: _,
      applyFallbackPatternPreset: T,
    };
  }
  Lp.exports = {
    createPatternStore: MS,
    LEGACY_PRESET_OFFICIAL_NAMES: Np,
    FALLBACK_PATTERN_PRESET_ID: Vc,
  };
});
var Dp = F((uR, Mp) => {
  "use strict";
  function DS({
    accountManager: t,
    logInfo: e,
    logWarn: r,
    getAppNetworkOnline: n,
    getPatternWindow: s,
    releaseBuildExcludesDevOptions: o,
    normalizeStretchIntervalForBuild: i,
    defaultStretchIntervalMin: a,
    releaseExcludedStretchIntervalMin: c,
    getStretchIntervalMin: l,
    setStretchIntervalMin: d,
    getStretchTimer: u,
    startStretchTimer: f,
    normalizeDrinkIntervalForBuild: h,
    defaultDrinkIntervalMin: p,
    releaseExcludedDrinkIntervalMin: g,
    getDrinkIntervalMin: y,
    setDrinkIntervalMin: w,
    getDrinkTimer: A,
    startDrinkTimer: S,
    hasPetWindow: D,
    refreshAppTrayMenu: B,
    saveSettings: R,
    getCurrentPattern: _,
    setCurrentPattern: T,
    getLegacyPresetOfficialNames: m,
    getFallbackPatternPresetId: x,
    selectedCatPatternId: b,
    loadBuiltinPatternPresetById: C,
    loadAllCustomPatternPresets: G,
    saveCustomPatternPresets: O,
    savePattern: L,
    broadcastPattern: j,
    loadSyncState: z,
    saveSyncState: H,
    serverTimestampMs: ee,
    nextLocalMutationTimestamp: Q,
    isUuid: se,
    catPatternRowPayload: be,
    patternFromServerPatternJson: oe,
    sanitizePattern: ae,
    customPresetPatternMatchKey: I,
    localCustomPresetMatchKey: $,
    serverCustomPresetMatchKey: Z,
    presetLocalToRow: te,
    presetRowToLocal: Y,
    getCatName: U,
    setCatName: E,
    getUserName: W,
    setUserName: v,
    getFixedMessage: k,
    setFixedMessage: N,
    getShowCatName: P,
    setShowCatName: M,
    getTaskCompleteSoundVolume: ne,
    setTaskCompleteSoundVolume: ue,
    getSoundMuted: We,
    setSoundMuted: Te,
    getAllowAnalysis: Je,
    setAllowAnalysis: qe,
    getPomodoroFocusMin: kt,
    setPomodoroFocusMinRaw: xe,
    getPomodoroRestSec: pe,
    setPomodoroRestSecRaw: rt,
    broadcastPomodoroState: Qs,
    getReminders: ln,
    setReminders: ar,
    saveReminders: xr,
    broadcastReminders: un,
    reminderRowToLocal: Nr,
    reminderLocalToRow: ns,
    resetAccountSyncedLocalData: nt,
  }) {
    let xt = !1,
      cr = !1,
      At = null;
    function it(V) {
      let K = xt;
      xt = !0;
      try {
        return V();
      } finally {
        xt = K;
      }
    }
    function Lr(V) {
      if (!xt)
        try {
          let K = z();
          if (!K[V]) return;
          (K[V].dirty || (K[V].serverUpdatedAt = K[V].updatedAt),
            (K[V].dirty = !0),
            (K[V].updatedAt = Q(K[V].updatedAt)),
            H(K),
            to());
        } catch {}
    }
    function dn(V) {
      lr([V]);
    }
    function lr(V) {
      if (xt || !Array.isArray(V)) return;
      let K = V.filter((J) => typeof J == "string" && J);
      if (K.length !== 0)
        try {
          let J = z();
          (J.presets.dirty || (J.presets.serverUpdatedAt = J.presets.updatedAt),
            (J.presets.dirty = !0),
            (J.presets.updatedAt = Q(J.presets.updatedAt)),
            (J.presets.pendingIds = [
              ...new Set([...(J.presets.pendingIds || []), ...K]),
            ]),
            H(J),
            to());
        } catch {}
    }
    async function jr() {
      let V = t.loadAccount();
      if (!t.isValidAccountLinked(V)) return null;
      let K = await t.getFreshSession();
      return !K || !K.user || !K.user.id
        ? null
        : { supabase: t.getSupabase(), userId: K.user.id };
    }
    async function re() {
      let V = await jr();
      if (!V) return null;
      let { data: K, error: J } = await V.supabase
        .from("cat_patterns")
        .select(
          "id, name, pattern_json, is_official, sort_order, created_at, updated_at, deleted_at",
        )
        .or(`is_official.eq.true,user_id.eq.${V.userId}`)
        .is("deleted_at", null)
        .order("is_official", { ascending: !1 })
        .order("sort_order", { ascending: !0 })
        .order("name", { ascending: !0 });
      if (J) throw new Error(`pattern presets fetch failed: ${J.message}`);
      return (K || []).map(be);
    }
    async function ke(V, K) {
      if (!se(K)) return !1;
      let { data: J, error: he } = await V.from("cat_patterns")
        .select("id, pattern_json")
        .eq("id", K)
        .is("deleted_at", null)
        .maybeSingle();
      if (he) throw new Error(`selected pattern fetch failed: ${he.message}`);
      return J
        ? (T({ ...oe(J.pattern_json), selectedPresetId: J.id }),
          it(() => L()),
          j(),
          !0)
        : !1;
    }
    async function Kt(V) {
      let K = b();
      if (K) {
        let { data: et, error: ve } = await V.from("cat_patterns")
          .select("id")
          .eq("id", K)
          .is("deleted_at", null)
          .maybeSingle();
        if (ve)
          throw new Error(`selected pattern lookup failed: ${ve.message}`);
        if (et && et.id) return et.id;
      }
      let J = bi(_());
      if (J) {
        let et = z(),
          ve = et.presets.map && et.presets.map[J.id];
        if (se(ve)) {
          let { data: ye, error: Ce } = await V.from("cat_patterns")
            .select("id")
            .eq("id", ve)
            .is("deleted_at", null)
            .maybeSingle();
          if (Ce)
            throw new Error(`matched pattern lookup failed: ${Ce.message}`);
          if (ye && ye.id)
            return (
              T({ ..._(), selectedPresetId: ye.id }),
              it(() => L()),
              j(),
              ye.id
            );
        }
      }
      let Ue = m()[_().selectedPresetId],
        Ye = V.from("cat_patterns")
          .select("id, pattern_json")
          .eq("is_official", !0)
          .is("deleted_at", null)
          .order("sort_order", { ascending: !0 })
          .order("name", { ascending: !0 });
      Ue && (Ye = Ye.eq("name", Ue));
      let { data: Xe, error: Et } = await Ye.limit(1).maybeSingle();
      if (Et) throw new Error(`default pattern fetch failed: ${Et.message}`);
      return !Xe || !Xe.id ? null : (await ke(V, Xe.id), Xe.id);
    }
    function ur(V, K) {
      return {
        user_id: V,
        cat_name: U(),
        user_name: W(),
        selected_cat_pattern_id: se(K) ? K : null,
        allow_analysis: Je() !== !1,
      };
    }
    async function dr(V, K) {
      (it(() => {
        (typeof K.cat_name == "string" && K.cat_name.trim() && E(K.cat_name),
          typeof K.user_name == "string" && v(K.user_name),
          typeof K.allow_analysis == "boolean" && qe(K.allow_analysis),
          R());
      }),
        se(K.selected_cat_pattern_id) &&
          (await ke(V, K.selected_cat_pattern_id)));
    }
    async function Mr(V, K) {
      let { data: J, error: he } = await V.from("user_settings")
        .select(
          "cat_name, user_name, selected_cat_pattern_id, allow_analysis, updated_at",
        )
        .eq("user_id", K)
        .maybeSingle();
      if (he) throw new Error(`settings fetch failed: ${he.message}`);
      return J;
    }
    async function ss(V, K, J, he) {
      let Ue = V.from("user_settings").update(J).eq("user_id", K);
      typeof he == "string" && he && (Ue = Ue.eq("updated_at", he));
      let { data: Ye, error: Xe } = await Ue.select("updated_at").maybeSingle();
      if (Xe) throw new Error(`settings upload failed: ${Xe.message}`);
      return Ye;
    }
    async function Zs(V, K) {
      let J = z(),
        he = await Mr(V, K),
        Ue = ee(J.settings.updatedAt),
        Ye = ee(he && he.updated_at),
        Xe = he && Ye > Ue;
      if (!J.settings.dirty && Xe) {
        (await dr(V, he),
          (J.settings.dirty = !1),
          (J.settings.updatedAt = he.updated_at),
          (J.settings.serverUpdatedAt = he.updated_at),
          H(J));
        return;
      }
      if (!J.settings.dirty) {
        he &&
          !J.settings.serverUpdatedAt &&
          ((J.settings.serverUpdatedAt = he.updated_at), H(J));
        return;
      }
      if (Xe) {
        (await dr(V, he),
          (J.settings.dirty = !1),
          (J.settings.updatedAt = he.updated_at),
          (J.settings.serverUpdatedAt = he.updated_at),
          H(J));
        return;
      }
      let Et = await Kt(V),
        et = ur(K, Et),
        ve;
      if (he) {
        let ye = await ss(V, K, et, he.updated_at);
        if (!ye) {
          let Ce = await Mr(V, K),
            hr = ee(Ce && Ce.updated_at);
          if (Ce && hr > Ue) {
            (await dr(V, Ce),
              (J.settings.dirty = !1),
              (J.settings.updatedAt = Ce.updated_at),
              (J.settings.serverUpdatedAt = Ce.updated_at),
              H(J));
            return;
          }
          if (((ye = await ss(V, K, ur(K, Et), Ce && Ce.updated_at)), !ye))
            throw new Error("settings upload conflicted; will retry");
        }
        ve = ye.updated_at;
      } else {
        let { data: ye, error: Ce } = await V.from("user_settings")
          .insert(et)
          .select("updated_at")
          .single();
        if (Ce) throw new Error(`settings upload failed: ${Ce.message}`);
        ve = ye.updated_at;
      }
      ((J.settings.dirty = !1),
        (J.settings.updatedAt = ve || J.settings.updatedAt),
        (J.settings.serverUpdatedAt =
          ve || J.settings.serverUpdatedAt || J.settings.updatedAt),
        H(J));
    }
    function bi(V) {
      let K = I(V);
      return (
        G()
          .filter((J) => !J.deletedAt)
          .find((J) => I(J.pattern) === K) || null
      );
    }
    function os(V, K) {
      let J = _();
      return !V || !se(K) || J.selectedPresetId !== V
        ? !1
        : (T({ ...J, selectedPresetId: K }), it(() => L()), j(), !0);
    }
    function eo(V) {
      !V ||
        !V.settings ||
        (V.settings.dirty ||
          (V.settings.serverUpdatedAt = V.settings.updatedAt),
        (V.settings.dirty = !0),
        (V.settings.updatedAt = Q(V.settings.updatedAt)));
    }
    function ce(V, K) {
      let J = _().selectedPresetId;
      if (typeof J != "string" || !J) return !1;
      if (J.startsWith("custom-")) return !!V.get(J)?.deletedAt;
      if (!se(J)) return !1;
      let he = Object.entries(K || {}).find(([, Ue]) => Ue === J)?.[0];
      return !!(he && V.get(he)?.deletedAt);
    }
    function Ae(V) {
      let K = C(x());
      return K
        ? (T({ ...ae(K.pattern), selectedPresetId: K.id }),
          it(() => L()),
          eo(V),
          j(),
          !0)
        : !1;
    }
    async function De(V, K) {
      let J = z(),
        he = !!(
          J.presets.dirty ||
          (Array.isArray(J.presets.pendingIds) &&
            J.presets.pendingIds.length > 0)
        ),
        Ue = "id, name, pattern_json, created_at, updated_at, deleted_at",
        { data: Ye, error: Xe } = await V.from("cat_patterns")
          .select(Ue)
          .eq("user_id", K)
          .eq("is_official", !1)
          .is("deleted_at", null);
      if (Xe) throw new Error(`presets fetch failed: ${Xe.message}`);
      let { data: Et, error: et } = await V.from("cat_patterns")
        .select(Ue)
        .eq("user_id", K)
        .eq("is_official", !1)
        .not("deleted_at", "is", null);
      if (et) throw new Error(`deleted presets fetch failed: ${et.message}`);
      let ve = [...(Ye || []), ...(Et || [])],
        ye = J.presets.map || {},
        Ce = Object.fromEntries(Object.entries(ye).map(([Oe, Ie]) => [Ie, Oe])),
        hr = G(),
        is = new Map(hr.map((Oe) => [Oe.id, Oe])),
        ro = new Map();
      for (let Oe of hr) {
        let Ie = $(Oe);
        (ro.has(Ie) || ro.set(Ie, []), ro.get(Ie).push(Oe.id));
      }
      let Il = new Set(),
        ki = new Map();
      for (let Oe of ve || []) {
        let Ie = Ce[Oe.id];
        ((!Ie || !is.has(Ie)) &&
          ((Ie = (ro.get(Z(Oe)) || []).find((Qe) => !Il.has(Qe) && !ye[Qe])),
          Ie && (ye[Ie] = Oe.id)),
          Ie && (Il.add(Ie), ki.set(Ie, Oe)));
      }
      let no = new Map(is),
        Dr = !1;
      if (J.presets.dirty) {
        let Oe = [],
          Ie = [];
        for (let tt of is.values()) {
          let Qe = ki.get(tt.id);
          if (Qe && ee(Qe.updated_at) > ee(tt.updatedAt || tt.createdAt))
            continue;
          let fr = te(K, tt),
            Ve = ye[tt.id];
          Ve
            ? Oe.push({ localId: tt.id, row: { ...fr, id: Ve } })
            : Ie.push({ localId: tt.id, row: fr });
        }
        if (Oe.length > 0) {
          let { data: tt, error: Qe } = await V.from("cat_patterns")
            .upsert(
              Oe.map((Ve) => Ve.row),
              { onConflict: "id" },
            )
            .select("id, updated_at, deleted_at");
          if (Qe) throw new Error(`preset upload failed: ${Qe.message}`);
          let fr = new Map((tt || []).map((Ve) => [Ve.id, Ve]));
          for (let Ve of Oe) {
            let Tt = fr.get(Ve.row.id),
              Gt = is.get(Ve.localId);
            !Tt ||
              !Gt ||
              ((Dr = os(Ve.localId, Tt.id) || Dr),
              (ye[Ve.localId] = Tt.id),
              (Gt.updatedAt = Tt.updated_at || Gt.updatedAt),
              (Gt.deletedAt =
                typeof Tt.deleted_at == "string" ? Tt.deleted_at : null));
          }
        }
        if (Ie.length > 0) {
          let { data: tt, error: Qe } = await V.from("cat_patterns")
            .insert(Ie.map((fr) => fr.row))
            .select("id, updated_at, deleted_at");
          if (Qe) throw new Error(`preset upload failed: ${Qe.message}`);
          for (let [fr, Ve] of (tt || []).entries()) {
            let Tt = Ie[fr];
            if (!Tt) continue;
            let Gt = is.get(Tt.localId);
            Gt &&
              ((ye[Tt.localId] = Ve.id),
              (Dr = os(Tt.localId, Ve.id) || Dr),
              (Gt.updatedAt = Ve.updated_at || Gt.updatedAt),
              (Gt.deletedAt =
                typeof Ve.deleted_at == "string" ? Ve.deleted_at : null));
          }
        }
        ((J.presets.dirty = !1), (J.presets.pendingIds = []));
      }
      for (let Oe of ve || []) {
        let Ie =
            Ce[Oe.id] ||
            [...ki.entries()].find(([, Qe]) => Qe.id === Oe.id)?.[0] ||
            `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          tt = no.get(Ie);
        if (!tt || ee(Oe.updated_at) > ee(tt.updatedAt || tt.createdAt)) {
          let Qe = Y(Oe, Ie);
          Qe && no.set(Qe.id, Qe);
        }
        ((ye[Ie] = Oe.id), (Dr = os(Ie, Oe.id) || Dr));
      }
      (it(() => O(Array.from(no.values()))), (J.presets.map = ye));
      let Wm = ce(no, ye) ? Ae(J) : !1;
      (Dr && eo(J), H(J));
      let so = s();
      so &&
        !so.isDestroyed() &&
        (so.webContents.send("pattern-changed", _()),
        (he || Wm) && so.webContents.send("pattern-presets-changed"));
    }
    async function Be(V, K) {
      let J = z(),
        { data: he, error: Ue } = await V.from("reminders")
          .select(
            "id, local_id, time, message, repeat, days, enabled, last_triggered_date, created_at, updated_at, deleted_at",
          )
          .eq("user_id", K);
      if (Ue) throw new Error(`reminders fetch failed: ${Ue.message}`);
      let Ye = new Map((he || []).map((ve) => [ve.local_id, ve]));
      if (!J.reminders.dirty) {
        it(() => {
          (ar((he || []).map(Nr).filter(Boolean)), xr(), un());
        });
        return;
      }
      let Xe = new Map(ln().map((ve) => [ve.id, ve])),
        Et = new Map(Xe),
        et = [];
      for (let ve of Xe.values()) {
        let ye = Ye.get(ve.id);
        (!ye || ee(ve.updatedAt || ve.createdAt) >= ee(ye.updated_at)) &&
          et.push(ns(K, ve));
      }
      for (let ve of Ye.values()) {
        let ye = Xe.get(ve.local_id);
        if (!ye || ee(ve.updated_at) > ee(ye.updatedAt || ye.createdAt)) {
          let Ce = Nr(ve);
          Ce && Et.set(Ce.id, Ce);
        }
      }
      if (et.length > 0) {
        let { data: ve, error: ye } = await V.from("reminders")
          .upsert(et, { onConflict: "user_id,local_id" })
          .select("local_id, updated_at, deleted_at");
        if (ye) throw new Error(`reminders upload failed: ${ye.message}`);
        for (let Ce of ve || []) {
          let hr = Et.get(Ce.local_id);
          hr &&
            (typeof Ce.updated_at == "string" && (hr.updatedAt = Ce.updated_at),
            (hr.deletedAt =
              typeof Ce.deleted_at == "string" ? Ce.deleted_at : null));
        }
      }
      (it(() => {
        (ar(Array.from(Et.values())), xr(), un());
      }),
        (J.reminders.dirty = !1),
        H(J));
    }
    async function zt() {
      let V = await t.sampleSupabaseServerTime(),
        K = z();
      return (
        (K.serverTimeOffsetMs = V.offsetMs),
        (K.serverTimeOffsetUpdatedAt = new Date(
          Date.now() + V.offsetMs,
        ).toISOString()),
        H(K),
        V
      );
    }
    async function pt() {
      if (cr || !n()) return;
      let V = t.loadAccount();
      if (t.isValidAccountLinked(V)) {
        cr = !0;
        try {
          let K = await t.getFreshSession();
          if (!K || !K.user) return;
          let J = t.getSupabase(),
            he = K.user.id,
            Ue = z();
          (Ue.accountUserId !== he && ((Ue.accountUserId = he), H(Ue)),
            await zt().catch((Ye) => {
              r(
                "[Shanks] server time sync failed:",
                Ye && Ye.message ? Ye.message : Ye,
              );
            }),
            await De(J, he),
            await Zs(J, he),
            t.updateAccount({ lastSyncAt: new Date().toISOString() }));
        } finally {
          cr = !1;
        }
      }
    }
    function Si() {
      At && (clearTimeout(At), (At = null));
    }
    function Dm() {
      Si();
    }
    function Um() {}
    function to(V = 1500) {
      xt ||
        (n() &&
          (Si(),
          (At = setTimeout(() => {
            ((At = null),
              pt().catch((K) => {
                r(
                  "[Shanks] background sync failed:",
                  K && K.message ? K.message : K,
                );
              }));
          }, V)),
          typeof At.unref == "function" && At.unref()));
    }
    function $m(V = "manual") {
      (e("[Shanks] scheduling background sync:", V), to(250));
    }
    function Fm() {
      return n() && t.isValidAccountLinked(t.loadAccount());
    }
    async function qm(V = "manual") {
      if (!Fm()) return { ok: !1, reason: n() ? "not-linked" : "offline" };
      try {
        return (await pt(), e("[Shanks] sync completed:", V), { ok: !0 });
      } catch (K) {
        return (
          r("[Shanks] sync failed:", K && K.message ? K.message : K),
          { ok: !1, reason: "error", message: K && K.message ? K.message : "" }
        );
      }
    }
    async function Bm() {
      let V = z(),
        K = t.loadAccount();
      (K && K.userId && (V.accountUserId = K.userId),
        (V.settings.dirty = !0),
        (V.presets.dirty = !0),
        (V.reminders.dirty = !0),
        H(V),
        await pt());
    }
    async function Hm() {
      let V = t.loadAccount();
      (nt({ accountUserId: V && V.userId ? V.userId : null }), await pt());
    }
    return {
      clearPendingSync: Si,
      clearSyncPolling: Dm,
      downloadAccountDataToLocal: Hm,
      getAccountSupabaseContext: jr,
      loadServerPatternPresets: re,
      markPresetSyncPending: dn,
      markPresetSyncPendingIds: lr,
      markSyncDirty: Lr,
      resetSyncFailureCount: Um,
      retryBackgroundSyncNow: $m,
      runWithSyncApplySuppressed: it,
      scheduleBackgroundSync: to,
      syncNow: qm,
      uploadLocalDataToAccount: Bm,
    };
  }
  Mp.exports = { createSyncOrchestrator: DS };
});
var $p = F((dR, Up) => {
  "use strict";
  function US({
    app: t,
    logError: e,
    logWarn: r,
    isEscapeKeyInput: n,
    cancelCoveringMotion: s,
  }) {
    function o(c, l) {
      !c ||
        !c.webContents ||
        (c.webContents.on("did-fail-load", (d, u, f, h) => {
          e(`[Shanks] ${l} failed to load:`, {
            errorCode: u,
            errorDescription: f,
            validatedURL: h,
          });
        }),
        c.webContents.on("render-process-gone", (d, u) => {
          e(`[Shanks] ${l} render process gone:`, u);
        }),
        c.on("unresponsive", () => {
          r(`[Shanks] ${l} window became unresponsive`);
        }));
    }
    function i(c) {
      if (!(t.isPackaged || !c || c.isDestroyed())) {
        if (c.webContents.isDevToolsOpened()) {
          c.webContents.closeDevTools();
          return;
        }
        c.webContents.openDevTools({ mode: "detach" });
      }
    }
    function a(c) {
      !c ||
        !c.webContents ||
        c.webContents.on("before-input-event", (l, d) => {
          if (d.type !== "keyDown") return;
          let u = String(d.key || "").toLowerCase();
          if (n(d) && s()) {
            l.preventDefault();
            return;
          }
          t.isPackaged ||
            !(u === "f12" || ((d.meta || d.control) && d.alt && u === "i")) ||
            (i(c), l.preventDefault());
        });
    }
    return {
      attachDevToolsShortcut: a,
      attachWindowDiagnostics: o,
      toggleDevToolsForWindow: i,
    };
  }
  Up.exports = { createWindowUtils: US };
});
var qp = F((hR, Fp) => {
  "use strict";
  function $S({
    app: t,
    fs: e,
    nativeImage: r,
    isMac: n,
    appIconPath: s,
    appDisplayName: o,
    logWarn: i,
    reinforcePetWindowOnTop: a,
    getLicenseWindow: c,
    getPatternWindow: l,
    getMappingWindow: d,
  }) {
    function u() {
      if (!(!n || !t.isReady())) {
        try {
          (t.dock && typeof t.dock.hide == "function" && t.dock.hide(),
            t.setActivationPolicy("accessory"));
        } catch (A) {
          i(
            "[Shanks] failed to apply fullscreen overlay mode:",
            A && A.message ? A.message : A,
          );
        }
        a();
      }
    }
    function f(A) {
      return !!(A && !A.isDestroyed());
    }
    function h() {
      return [c(), l(), d()];
    }
    function p() {
      return h().some(f);
    }
    function g() {
      return h().find(f) || null;
    }
    function y() {
      if (!(!n || !t.isReady() || !t.dock))
        try {
          (t.setName(o()),
            e.existsSync(s) && t.dock.setIcon(r.createFromPath(s)));
        } catch (A) {
          i(
            "[Shanks] failed to apply dock branding:",
            A && A.message ? A.message : A,
          );
        }
    }
    function w() {
      if (!(!n || !t.isReady() || !t.dock))
        try {
          if (p()) {
            (y(),
              typeof t.setActivationPolicy == "function" &&
                t.setActivationPolicy("regular"),
              typeof t.dock.show == "function" && t.dock.show(),
              y());
            return;
          }
          (typeof t.dock.hide == "function" && t.dock.hide(),
            typeof t.setActivationPolicy == "function" &&
              t.setActivationPolicy("accessory"));
        } catch (A) {
          i(
            "[Shanks] failed to update dock visibility:",
            A && A.message ? A.message : A,
          );
        }
    }
    return {
      applyFullscreenOverlayMode: u,
      applyDockBranding: y,
      firstDockVisibleWindow: g,
      updateDockVisibility: w,
    };
  }
  Fp.exports = { createDockVisibilityController: $S };
});
var Hp = F((fR, Bp) => {
  "use strict";
  function FS({
    app: t,
    BrowserWindow: e,
    runtimePath: r,
    preloadPath: n,
    appIconPath: s,
    t: o,
    updateDockVisibility: i,
    attachWindowDiagnostics: a,
    attachDevToolsShortcut: c,
    getLicenseWindow: l,
    setLicenseWindow: d,
    getPetWindow: u,
  }) {
    function f(h = "") {
      let p = l();
      if (p && !p.isDestroyed()) {
        (i(), p.focus(), h && p.webContents.send("license-error", h));
        return;
      }
      let g = new e({
        width: 440,
        height: 540,
        title: o("licenseWindowTitle"),
        icon: s,
        resizable: !1,
        maximizable: !1,
        fullscreenable: !1,
        backgroundColor: "#f7f4ef",
        webPreferences: {
          preload: n,
          contextIsolation: !0,
          nodeIntegration: !1,
        },
      });
      (d(g),
        i(),
        g.setMenu(null),
        a(g, "license"),
        c(g),
        g.webContents.on("before-input-event", (y, w) => {
          if (!(w.meta || w.control) || w.type !== "keyDown") return;
          let S = String(w.key || "").toLowerCase();
          S === "v"
            ? (g.webContents.paste(), y.preventDefault())
            : S === "c"
              ? (g.webContents.copy(), y.preventDefault())
              : S === "x"
                ? (g.webContents.cut(), y.preventDefault())
                : S === "a" && (g.webContents.selectAll(), y.preventDefault());
        }),
        g.loadFile(r("renderer", "license", "index.html")),
        h &&
          g.webContents.once("did-finish-load", () => {
            g.webContents.send("license-error", h);
          }),
        g.on("closed", () => {
          (l() === g && d(null), i());
          let y = u();
          (!y || y.isDestroyed()) && t.quit();
        }));
    }
    return { createLicenseWindow: f };
  }
  Bp.exports = { createLicenseWindowController: FS };
});
var Vp = F((pR, Wp) => {
  "use strict";
  function qS({
    BrowserWindow: t,
    runtimePath: e,
    preloadPath: r,
    appIconPath: n,
    t: s,
    updateDockVisibility: o,
    getPatternWindow: i,
    setPatternWindow: a,
    broadcastPattern: c,
  }) {
    function l() {
      let u = i();
      if (!(!u || u.isDestroyed()))
        try {
          (u.isMinimized() && u.restore(),
            u.show(),
            u.focus(),
            typeof u.moveTop == "function" && u.moveTop(),
            u.setAlwaysOnTop(!0, "floating"),
            u.setAlwaysOnTop(!1),
            u.focus());
        } catch {}
    }
    function d() {
      let u = i();
      if (u && !u.isDestroyed()) {
        (o(), l());
        return;
      }
      let f = new t({
        width: 860,
        height: 700,
        title: s("patternEditorTitle"),
        backgroundColor: "#1e1e1e",
        icon: n,
        webPreferences: {
          preload: r,
          contextIsolation: !0,
          nodeIntegration: !1,
        },
      });
      (a(f),
        o(),
        f.setMenu(null),
        f.loadFile(e("renderer", "editor", "index.html")),
        f.once("ready-to-show", l),
        f.on("closed", () => {
          (i() === f && a(null), c(), o());
        }));
    }
    return { bringPatternEditorToFront: l, openPatternEditor: d };
  }
  Wp.exports = { createPatternEditorWindowController: qS };
});
var zp = F((gR, Kp) => {
  "use strict";
  function BS({
    BrowserWindow: t,
    projectPath: e,
    preloadPath: r,
    appIconPath: n,
    t: s,
    updateDockVisibility: o,
    getMappingWindow: i,
    setMappingWindow: a,
  }) {
    function c() {
      let l = i();
      if (l && !l.isDestroyed()) {
        (o(), l.focus());
        return;
      }
      let d = new t({
        width: 1180,
        height: 780,
        title: s("mappingEditorTitle"),
        backgroundColor: "#1e1e1e",
        icon: n,
        webPreferences: {
          preload: r,
          contextIsolation: !0,
          nodeIntegration: !1,
        },
      });
      (a(d),
        o(),
        d.setMenu(null),
        d.loadFile(e("mapping-editor", "index.html")),
        d.on("closed", () => {
          (i() === d && a(null), o());
        }));
    }
    return { openMappingEditor: c };
  }
  Kp.exports = { createMappingEditorWindowController: BS };
});
var Jp = F((mR, Gp) => {
  "use strict";
  function HS({
    BrowserWindow: t,
    screen: e,
    runtimePath: r,
    preloadPath: n,
    appIconPath: s,
    windowDims: o,
    defaultPetPosition: i,
    constrainPetPosition: a,
    petCursorFocusPoint: c,
    getPetWindow: l,
    setPetWindow: d,
    getCurrentPetSize: u,
    getCurrentPetPosition: f,
    setCurrentPetPosition: h,
    getPetPeekState: p,
    getCatNamePromptShown: g,
    getCatName: y,
    attachWindowDiagnostics: w,
    attachDevToolsShortcut: A,
    keepWindowOnTop: S,
    startPetOnTopReinforcement: D,
    stopPetOnTopReinforcement: B,
    broadcastPattern: R,
    broadcastCatNameSettings: _,
    broadcastUserNameSettings: T,
    broadcastPetSize: m,
    broadcastFixedMessageSettings: x,
    broadcastPomodoroState: b,
    broadcastTaskCompleteSoundVolume: C,
    broadcastSoundMuted: G,
    broadcastReminders: O,
    broadcastReminderSettings: L,
    refreshAppTrayMenu: j,
  }) {
    let z = null,
      H = null;
    function ee() {
      let Q = l();
      if (Q && !Q.isDestroyed()) return;
      let se = e.getPrimaryDisplay(),
        be = u(),
        { width: oe, height: ae } = o(be),
        I = f(),
        $ = p(),
        Z = I ? ($ ? I : a(I, oe, ae)) : i(se, oe, ae);
      h(Z);
      let te = new t({
        width: oe,
        height: ae,
        x: Z.x,
        y: Z.y,
        frame: !1,
        transparent: !0,
        backgroundColor: "#00000000",
        alwaysOnTop: !0,
        resizable: !1,
        skipTaskbar: !0,
        hasShadow: !1,
        minimizable: !1,
        maximizable: !1,
        fullscreenable: !1,
        focusable: !1,
        icon: s,
        webPreferences: {
          preload: n,
          contextIsolation: !0,
          nodeIntegration: !1,
        },
      });
      (d(te),
        w(te, "pet"),
        A(te),
        S(te),
        D(),
        te.loadFile(r("renderer", "pet", "index.html")),
        te.webContents.on("did-finish-load", () => {
          (R(), _(), T(), m(), x(), b(), C(), G(), O(), L());
          let U = p();
          (U && te.webContents.send("pet-peek-state", U),
            g() ||
              setTimeout(() => {
                !l() ||
                  l().isDestroyed() ||
                  g() ||
                  l().webContents.send("cat-name-edit", y());
              }, 1e3));
        }));
      let Y = () => {
        let U = l();
        if (!U || U.isDestroyed()) return;
        let E = e.getCursorScreenPoint(),
          W = U.getBounds(),
          v = c(W),
          k = Math.round(E.x - v.x),
          N = Math.round(E.y - v.y),
          P = { dx: k, dy: N },
          ne = Math.hypot(k, N) <= 300 ? 50 : 100;
        ((!H || H.dx !== P.dx || H.dy !== P.dy) &&
          ((H = P), U.webContents.send("cursor-pos", P)),
          (z = setTimeout(Y, ne)));
      };
      (Y(),
        te.on("closed", () => {
          (z && clearTimeout(z),
            (z = null),
            (H = null),
            B(),
            l() === te && d(null),
            j());
        }));
    }
    return { createPetWindow: ee };
  }
  Gp.exports = { createPetWindowController: HS };
});
var Xp = F((yR, Yp) => {
  "use strict";
  function WS({
    screen: t,
    defaultPetSize: e,
    petTopPx: r,
    normalizePetSize: n,
    normalizePetPeekEdge: s,
    getPetWindow: o,
    getLastPetDragAt: i,
    getCurrentPetSize: a,
    setCurrentPetSize: c,
    getPetWindowExpandedForDrag: l,
    setPetWindowExpandedForDragValue: d,
    getPetPeekState: u,
    setPetPeekStateValue: f,
    setCurrentPetPosition: h,
    windowDims: p,
    boundsForPetPeek: g,
    boundsWithConstrainedPetPosition: y,
    constrainPetVisualInsideWorkArea: w,
    displayForPetDropBounds: A,
    saveSettings: S,
    broadcastPetSize: D,
    refreshAppTrayMenu: B,
    updateShareCaptureForPetBounds: R,
    captureAnalytics: _,
    reinforcePetWindowOnTop: T,
  }) {
    function m() {
      let oe = o();
      return oe && !oe.isDestroyed() ? oe : null;
    }
    function x(oe, ae, I = !1) {
      (oe.setBounds(ae, I), h({ x: ae.x, y: ae.y }));
    }
    function b() {
      if (!u()) return;
      f(null);
      let oe = m();
      (oe && oe.webContents.send("pet-peek-state", null), B());
    }
    function C(oe) {
      let ae = m(),
        I = oe ? { edge: oe } : null;
      (f(I), ae && ae.webContents.send("pet-peek-state", I), B());
    }
    function G() {
      let oe = m(),
        ae = u();
      if (!oe || !ae) return !1;
      let I = ae.edge,
        $ = w(oe.getBounds());
      return (
        b(),
        x(oe, $, !0),
        R($, { forceKeyframe: !0 }),
        S({ sync: !1 }),
        _("peek_mode_exited", { edge: I || "" }),
        !0
      );
    }
    function O() {
      let oe = m();
      if (!oe) return !1;
      if (u()) return (G(), !0);
      let ae = oe.getBounds(),
        I = w(ae);
      return (
        I &&
          (I.x !== ae.x || I.y !== ae.y) &&
          (x(oe, I, !0), R(I, { forceKeyframe: !0 }), S({ sync: !1 })),
        !0
      );
    }
    function L(oe) {
      let ae = m();
      if (!ae) return !1;
      let I = s(oe);
      if (I !== "left" && I !== "right") return !1;
      let $ = u() && u().edge,
        Z = ae.getBounds(),
        te = A(Z),
        Y = g(Z, I, te);
      return (
        x(ae, Y, !0),
        C(I),
        R(Y, { forceKeyframe: !0 }),
        S({ sync: !1 }),
        $ !== I && _("peek_mode_entered", { edge: I }),
        !0
      );
    }
    function j() {
      return Date.now() - i() < 500;
    }
    function z(oe) {
      let ae = m();
      if (!ae || j()) return;
      b();
      let I = ae.getBounds(),
        $ = n(oe);
      c($);
      let { width: Z, height: te } = p($),
        Y = y({ x: I.x, y: I.y, width: Z, height: te });
      (x(ae, Y), S({ sync: !1 }), D(), B());
    }
    function H(oe) {
      z(a() + oe);
    }
    function ee(oe) {
      z(oe);
    }
    function Q() {
      let oe = m();
      if (!oe) return;
      b();
      let ae = oe.getBounds(),
        I = n(e);
      c(I);
      let { width: $, height: Z } = p(I),
        te = y({ x: ae.x, y: ae.y, width: $, height: Z });
      (x(oe, te), S({ sync: !1 }), D(), B());
    }
    function se() {
      let oe = m();
      if (!oe) return;
      b();
      let ae = oe.getBounds(),
        I = null;
      try {
        I = t.getDisplayNearestPoint(t.getCursorScreenPoint());
      } catch {
        I = null;
      }
      I = I || t.getDisplayMatching(ae) || t.getPrimaryDisplay();
      let $ = I.workArea || I.bounds,
        Z = a(),
        { width: te, height: Y } = p(Z, l()),
        U = $.x + Math.round($.width / 2),
        E = $.y + Math.round($.height / 2),
        W = w({
          x: Math.round(U - te / 2),
          y: Math.round(E - r - Z / 2),
          width: te,
          height: Y,
        });
      (x(oe, W, !0), S({ sync: !1 }), R(W, { forceKeyframe: !0 }));
      try {
        oe.showInactive();
      } catch {}
      T();
    }
    function be(oe) {
      let ae = m();
      if (!ae) return;
      (oe && b(), d(!!oe));
      let I = ae.getBounds(),
        $ = l(),
        { width: Z, height: te } = p(a(), $),
        Y = { x: I.x, y: I.y, width: Z, height: te },
        U = u(),
        E = $ ? Y : U && U.edge ? g(Y, U.edge, A(Y)) : w(Y);
      (x(ae, E), R(E, { forceKeyframe: !0 }), U && S({ sync: !1 }));
    }
    return {
      clearPetPeekState: b,
      setPetPeekState: C,
      unpeekPet: G,
      peekPet: L,
      ensurePetWindowVisible: O,
      resizePetBy: H,
      setPetSize: ee,
      resetPetSize: Q,
      movePetToCenter: se,
      setPetWindowExpandedForDrag: be,
    };
  }
  Yp.exports = { createPetWindowStateController: WS };
});
var Zp = F((_R, Qp) => {
  "use strict";
  function Ds(t, e, r) {
    return Math.max(e, Math.min(r, t));
  }
  function VS({
    screen: t,
    defaultSize: e,
    stretchRatio: r,
    dragStretchRatio: n,
    minWindowWidth: s,
    minVisiblePetWindowPx: o,
    petTopPx: i,
    petPeekVisibleRatio: a,
    petPeekFaceSliceStartRatio: c,
    petPeekFaceCenterYRatio: l,
    getCurrentPetSize: d,
    getPetWindowExpandedForDrag: u,
    getPetPeekState: f,
  }) {
    function h(m, x = u()) {
      let b = x ? n : r,
        C = Math.max(e, m);
      return { width: s, height: Math.round(C * b) };
    }
    function p(m, x, b) {
      let C = m.workArea || m.bounds;
      return { x: C.x + C.width - x - 80, y: C.y + C.height - b - 100 };
    }
    function g(m, x, b) {
      return m
        ? t.getDisplayNearestPoint({
            x: m.x + Math.round(x / 2),
            y: m.y + Math.round(b / 2),
          })
        : t.getPrimaryDisplay();
    }
    function y(m, x, b, C = null) {
      if (!m) return null;
      let G = C || g(m, x, b),
        O = G.workArea || G.bounds,
        L = Math.min(o, Math.max(1, x)),
        j = Math.min(o, Math.max(1, b));
      return {
        x: Ds(Math.round(m.x), O.x + L - x, O.x + O.width - L),
        y: Ds(Math.round(m.y), O.y + j - b, O.y + O.height - j),
      };
    }
    function w(m) {
      if (!m) return m;
      let x = y(m, m.width, m.height);
      return x ? { ...m, x: x.x, y: x.y } : m;
    }
    function A(m) {
      if (!m) return null;
      let x = d();
      return {
        x: Math.round(m.x + m.width / 2 - x / 2),
        y: Math.round(m.y + i),
        width: x,
        height: x,
      };
    }
    function S(m) {
      if (!m) return t.getPrimaryDisplay();
      let x = A(m) || m;
      try {
        return t.getDisplayMatching(x);
      } catch {
        return g(x, x.width, x.height);
      }
    }
    function D(m, x) {
      let b = A(m);
      return !b || !x
        ? null
        : {
            left: x.x - b.x,
            right: b.x + b.width - (x.x + x.width),
            top: x.y - b.y,
            bottom: b.y + b.height - (x.y + x.height),
          };
    }
    function B(m) {
      if (!m) return null;
      let x = S(m),
        b = x.bounds,
        C = D(m, b);
      if (!C) return null;
      let G = d(),
        O = Math.max(16, Math.round(G * 0.25)),
        L = [
          ["left", C.left],
          ["right", C.right],
        ].filter(([, j]) => j >= O);
      return L.length === 0
        ? null
        : (L.sort((j, z) => z[1] - j[1]), { edge: L[0][0], display: x });
    }
    function R(m, x, b) {
      if (!m || !x || !b) return m;
      let C = b.bounds,
        G = A(m);
      if (!G) return m;
      let O = d(),
        L = Math.max(10, Math.round(O * a)),
        z = Math.round(O * c) + L,
        H = G.x,
        ee = G.y;
      return (
        x === "left" && (H = C.x - (G.width - z)),
        x === "right" && (H = C.x + C.width - z),
        (ee = Ds(G.y, C.y, C.y + C.height - G.height)),
        { ...m, x: Math.round(m.x + H - G.x), y: Math.round(m.y + ee - G.y) }
      );
    }
    function _(m) {
      let x = { x: m.x + m.width / 2, y: m.y + m.height / 2 },
        b = f();
      if (!b || !b.edge) return x;
      let C = A(m);
      if (!C) return x;
      let G = S(m),
        O = G && G.bounds;
      if (!O) return x;
      let L = d(),
        j = Math.max(10, Math.round(L * a));
      return {
        x: b.edge === "left" ? O.x + j / 2 : O.x + O.width - j / 2,
        y: C.y + L * l,
      };
    }
    function T(m) {
      if (!m) return m;
      let b = S(m).bounds,
        C = A(m);
      if (!C) return m;
      let G = C.width <= b.width ? Ds(C.x, b.x, b.x + b.width - C.width) : b.x,
        O =
          C.height <= b.height ? Ds(C.y, b.y, b.y + b.height - C.height) : b.y;
      return {
        ...m,
        x: Math.round(m.x + G - C.x),
        y: Math.round(m.y + O - C.y),
      };
    }
    return {
      boundsForPetPeek: R,
      boundsWithConstrainedPetPosition: w,
      constrainPetPosition: y,
      constrainPetVisualInsideWorkArea: T,
      defaultPetPosition: p,
      displayForPetBounds: g,
      displayForPetDropBounds: S,
      petCursorFocusPoint: _,
      petPeekEdgeForBounds: B,
      petVisualBoundsDelta: D,
      petVisualRectForBounds: A,
      windowDims: h,
    };
  }
  Qp.exports = { createPetWindowPosition: VS };
});
var tg = F((vR, eg) => {
  "use strict";
  function KS({ isMac: t, isWindows: e, getPetWindow: r }) {
    let n = null;
    function s(c) {
      if (!(!c || c.isDestroyed())) {
        if (!e && typeof c.setVisibleOnAllWorkspaces == "function")
          try {
            c.setVisibleOnAllWorkspaces(!0, {
              visibleOnFullScreen: !0,
              skipTransformProcessType: t,
            });
          } catch {
            try {
              c.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 });
            } catch {}
          }
        try {
          c.setAlwaysOnTop(!0, t ? "screen-saver" : "pop-up-menu", 1);
        } catch {
          c.setAlwaysOnTop(!0);
        }
      }
    }
    function o() {
      let c = r();
      if (!(!c || c.isDestroyed())) {
        s(c);
        try {
          c.moveTop();
        } catch {}
      }
    }
    function i() {
      n || (o(), (n = setInterval(o, 2500)));
    }
    function a() {
      n && (clearInterval(n), (n = null));
    }
    return {
      keepWindowOnTop: s,
      reinforcePetWindowOnTop: o,
      startPetOnTopReinforcement: i,
      stopPetOnTopReinforcement: a,
    };
  }
  eg.exports = { createPetOnTopController: KS };
});
var ng = F((wR, rg) => {
  "use strict";
  function zS({ getPetWindow: t, getPetPeekState: e }) {
    function r() {
      let o = t();
      return !!(o && !o.isDestroyed());
    }
    function n(o, ...i) {
      r() && t().webContents.send(o, ...i);
    }
    function s(o) {
      let i = t();
      !i || i.isDestroyed() || e() || i.webContents.send("update-state", o);
    }
    return { hasPetWindow: r, sendToPet: n, sendUpdateState: s };
  }
  rg.exports = { createPetWindowEventsController: zS };
});
var og = F((bR, sg) => {
  "use strict";
  function GS({
    app: t,
    BrowserWindow: e,
    desktopCapturer: r,
    dialog: n,
    nativeImage: s,
    ipcMain: o,
    fs: i,
    os: a,
    path: c,
    spawn: l,
    screen: d,
    ffmpegPath: u,
    appIconPath: f,
    cropGuardXPx: h,
    cropGuardTopPx: p,
    cropGuardBottomPx: g,
    getPetWindow: y,
    getCurrentPetSize: w,
    keepWindowOnTop: A,
    captureAnalytics: S,
    t: D,
  }) {
    let B = null,
      R = null,
      _ = null,
      T = !1;
    function m(I, $, Z) {
      return Math.max($, Math.min(Z, I));
    }
    function x(I) {
      return { x: I.x + I.width / 2, y: I.y + Math.round(I.height * 0.24) };
    }
    function b(I, $) {
      let { x: Z, y: te, width: Y, height: U } = I.bounds,
        E = 9 / 16,
        W = w(),
        v = Math.round(W * 4),
        k = Math.round(v / E),
        N = Y,
        P = U;
      if (v > N || k > P) {
        let ue = Math.min(N / v, P / k);
        ((v = Math.max(180, Math.round(v * ue))), (k = Math.round(v / E)));
      }
      let M = m(Math.round($.x - v / 2), Z, Z + Y - v),
        ne = m(Math.round($.y - k / 2), te, te + U - k);
      return { x: M - Z, y: ne - te, width: v, height: k };
    }
    function C(I, $) {
      let Z = I.bounds,
        te = 118,
        Y = 30,
        U = 0,
        E = Z.x + Math.round($.x + $.width / 2 - te / 2),
        W = Z.y + $.y + U;
      return {
        x: m(E, Z.x + 8, Z.x + Z.width - te - 8),
        y: m(W, Z.y + 8, Z.y + Z.height - Y - 8),
        width: te,
        height: Y,
      };
    }
    function G(I) {
      let $ = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
      return c.join(t.getPath("downloads"), `shanks-${$}.${I}`);
    }
    function O() {
      (B && !B.isDestroyed() && B.close(),
        R && !R.isDestroyed() && R.close(),
        (B = null),
        (R = null));
    }
    function L(I, $) {
      let Z = Math.max(0, Math.round(Number(I) || $ || 0));
      return Z % 2 === 0 ? Z : Z - 1;
    }
    function j(I, { force: $ = !1 } = {}) {
      if (!_ || !I) return;
      let Z = Math.max(0, (Date.now() - _.startedAt) / 1e3),
        te = { t: Math.round(Z * 1e3) / 1e3, x: L(I.x, 0), y: L(I.y, 0) },
        Y = _.cropKeyframes[_.cropKeyframes.length - 1];
      (!$ && Y && Math.abs(Y.x - te.x) < 2 && Math.abs(Y.y - te.y) < 2) ||
        (!$ && Y && te.t - Y.t < 0.2) ||
        _.cropKeyframes.push(te);
    }
    function z(I, { forceKeyframe: $ = !1 } = {}) {
      if (!(!_ || !I)) {
        if (((_.crop = I), j(I, { force: $ }), B && !B.isDestroyed())) {
          let Z = {
            x: Math.max(0, Math.round(I.x)),
            y: Math.max(0, Math.round(I.y)),
            width: Math.max(0, Math.round(I.width)),
            height: Math.max(0, Math.round(I.height)),
          };
          B.webContents.send("share-crop-update", Z);
        }
        R && !R.isDestroyed() && R.setBounds(C(_.display, I), !1);
      }
    }
    function H(I, $ = {}) {
      if (!_ || !I) return;
      let Z = b(_.display, x(I));
      z(Z, $);
    }
    function ee(I, $, Z) {
      if ((O(), !I || !$)) return;
      let te = I.bounds,
        Y = Math.max(5, Math.min(30, Math.round((Number(Z) || 5e3) / 1e3))),
        U = C(I, $),
        E = new e({
          x: te.x,
          y: te.y,
          width: te.width,
          height: te.height,
          frame: !1,
          transparent: !0,
          resizable: !1,
          movable: !1,
          focusable: !1,
          skipTaskbar: !0,
          hasShadow: !1,
          alwaysOnTop: !0,
          webPreferences: {
            nodeIntegration: !0,
            sandbox: !1,
            contextIsolation: !1,
          },
        });
      (E.setIgnoreMouseEvents(!0), A(E));
      let W = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
.dim { position: absolute; background: rgba(0, 0, 0, 0.42); }
.top { left: 0; top: 0; width: 100%; height: ${Math.max(0, $.y)}px; }
.bottom { left: 0; top: ${Math.max(0, $.y + $.height)}px; width: 100%; bottom: 0; }
.left { left: 0; top: ${Math.max(0, $.y)}px; width: ${Math.max(0, $.x)}px; height: ${Math.max(0, $.height)}px; }
.right { left: ${Math.max(0, $.x + $.width)}px; top: ${Math.max(0, $.y)}px; right: 0; height: ${Math.max(0, $.height)}px; }
.frame { position: absolute; left: ${Math.max(0, $.x)}px; top: ${Math.max(0, $.y)}px; width: ${Math.max(0, $.width)}px; height: ${Math.max(0, $.height)}px; outline: 2px solid rgba(255,255,255,0.95); outline-offset: 0; box-sizing: border-box; pointer-events: none; }
</style>
</head>
<body>
<div class="dim top"></div>
<div class="dim bottom"></div>
<div class="dim left"></div>
<div class="dim right"></div>
<div class="frame"></div>
<script>
const { ipcRenderer } = require("electron");
const parts = {
  top: document.querySelector(".top"),
  bottom: document.querySelector(".bottom"),
  left: document.querySelector(".left"),
  right: document.querySelector(".right"),
  frame: document.querySelector(".frame"),
};
window.updateCrop = (crop) => {
  parts.top.style.height = Math.max(0, crop.y) + "px";
  parts.bottom.style.top = Math.max(0, crop.y + crop.height) + "px";
  parts.left.style.top = Math.max(0, crop.y) + "px";
  parts.left.style.width = Math.max(0, crop.x) + "px";
  parts.left.style.height = Math.max(0, crop.height) + "px";
  parts.right.style.left = Math.max(0, crop.x + crop.width) + "px";
  parts.right.style.top = Math.max(0, crop.y) + "px";
  parts.right.style.height = Math.max(0, crop.height) + "px";
  parts.frame.style.left = Math.max(0, crop.x) + "px";
  parts.frame.style.top = Math.max(0, crop.y) + "px";
  parts.frame.style.width = Math.max(0, crop.width) + "px";
  parts.frame.style.height = Math.max(0, crop.height) + "px";
};
ipcRenderer.on("share-crop-update", (_event, crop) => window.updateCrop(crop));
</script>
</body>
</html>`;
      (E.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(W)}`),
        (B = E));
      let v = new e({
        x: U.x,
        y: U.y,
        width: U.width,
        height: U.height,
        frame: !1,
        transparent: !0,
        resizable: !1,
        movable: !1,
        focusable: !1,
        skipTaskbar: !0,
        hasShadow: !1,
        alwaysOnTop: !0,
        webPreferences: {
          nodeIntegration: !0,
          sandbox: !1,
          contextIsolation: !1,
        },
      });
      A(v);
      let k = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
.controls { display: flex; gap: 5px; align-items: center; justify-content: center; width: 100%; height: 100%; }
.timer, .cancel { min-height: 26px; border: 0; border-radius: 0; background: #fff; color: #111; font: 700 12px/1 Monaco, Menlo, monospace; text-align: center; }
.timer { min-width: 82px; padding: 7px 8px 0; box-sizing: border-box; }
.cancel { width: 26px; padding: 0; cursor: pointer; }
.cancel:hover { cursor: pointer; filter: brightness(0.94); }
</style>
</head>
<body>
<div class="controls">
  <div class="timer" id="timer">0/${Y}s</div>
  <button class="cancel" id="cancel" type="button" aria-label="Cancel recording">
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="2" height="2" fill="currentColor"/>
      <rect x="7" y="3" width="2" height="2" fill="currentColor"/>
      <rect x="5" y="5" width="2" height="2" fill="currentColor"/>
      <rect x="3" y="7" width="2" height="2" fill="currentColor"/>
      <rect x="7" y="7" width="2" height="2" fill="currentColor"/>
    </svg>
  </button>
</div>
<script>
const { ipcRenderer } = require("electron");
const total = ${Y};
const startedAt = Date.now();
const timer = document.getElementById("timer");
document.getElementById("cancel").addEventListener("click", () => {
  ipcRenderer.send("share-capture-cancel");
});
setInterval(() => {
  const elapsed = Math.floor((Date.now() - startedAt) / 1000);
  timer.textContent = Math.min(total, elapsed) + "/" + total + "s";
}, 150);
</script>
</body>
</html>`;
      (v.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(k)}`),
        (R = v));
    }
    function Q(I, $) {
      let Z = Math.max(2, L(I && I.width, 1080)),
        te = Math.max(2, L(I && I.height, 1920)),
        Y = Math.max(Z, L(I && I.source && I.source.width, Z)),
        U = Math.max(te, L(I && I.source && I.source.height, te)),
        E = Math.min(h, Math.floor(Z / 20)),
        W = Math.min(p, Math.floor(te / 12)),
        v = Math.min(g, Math.floor(te / 20)),
        k = 9 / 16,
        N = Math.max(2, te - W - v),
        P = Math.max(2, L(Z - E * 2, Z)),
        M = Math.max(2, L(Math.min(N, P / k), N)),
        ne = L((Z - P) / 2, E),
        ue = L(W + (N - M) / 2, W),
        We = Math.max(0, Y - P),
        Te = Math.max(0, U - M),
        Je =
          Array.isArray(I && I.keyframes) && I.keyframes.length > 0
            ? I.keyframes
            : [{ t: 0, x: I && I.x, y: I && I.y }],
        qe = se(Je, "x", ne, We),
        kt = se(Je, "y", ue, Te),
        xe = Math.max(2, L($ && $.width, 1080)),
        pe = Math.max(2, L($ && $.height, 1920));
      return `crop=${P}:${M}:${qe}:${kt}:exact=1,scale=${xe}:${pe}:flags=lanczos,fps=30`;
    }
    function se(I, $, Z = 0, te = Number.POSITIVE_INFINITY) {
      let Y = Number.isFinite(te) ? L(te, 0) : Number.POSITIVE_INFINITY,
        U = I.map((v) => ({
          t: Math.max(0, Number(v.t) || 0),
          value: L(Math.min(Y, Math.max(0, L((Number(v[$]) || 0) + Z, 0))), 0),
        })).sort((v, k) => v.t - k.t);
      if (U.length === 0) return "'0'";
      let E = [];
      for (let v of U) {
        let k = E[E.length - 1];
        k && Math.abs(k.t - v.t) < 0.001 ? (k.value = v.value) : E.push(v);
      }
      let W = String(E[E.length - 1].value);
      for (let v = E.length - 2; v >= 0; v--) {
        let k = E[v],
          N = E[v + 1],
          P = Math.max(0.001, N.t - k.t),
          M = N.value - k.value,
          ue = `trunc((${M === 0 ? String(k.value) : `(${k.value}+${M}*(t-${k.t.toFixed(3)})/${P.toFixed(3)})`})/2)*2`;
        W = `if(lt(t,${N.t.toFixed(3)}),${ue},${W})`;
      }
      return `'${W}'`;
    }
    function be(I) {
      return I && { ...I, keyframes: null };
    }
    function oe(I, $, Z = {}) {
      if (!u)
        return Promise.reject(new Error("ffmpeg binary is not available."));
      if (!i.existsSync(u))
        return Promise.reject(new Error(`ffmpeg binary does not exist: ${u}`));
      let te = Q(Z.crop, Z.output),
        Y = [
          "-y",
          "-i",
          I,
          "-an",
          "-vf",
          te,
          "-c:v",
          "libx264",
          "-preset",
          "medium",
          "-crf",
          "18",
          "-pix_fmt",
          "yuv420p",
          "-movflags",
          "+faststart",
          $,
        ];
      return new Promise((U, E) => {
        let W = l(u, Y, { windowsHide: !0 }),
          v = "";
        (W.stderr.on("data", (k) => {
          v += k.toString();
        }),
          W.on("error", E),
          W.on("close", (k) => {
            k === 0
              ? U()
              : E(
                  new Error(`${v.trim() || `ffmpeg exited with code ${k}`}
ffmpeg: ${u}
Filter: ${te}`),
                );
          }));
      });
    }
    function ae() {
      T ||
        ((T = !0),
        o.handle("share-capture-options", async (I, $ = {}) => {
          let Z = y();
          if (!Z || Z.isDestroyed()) return null;
          let te = Math.max(
              5e3,
              Math.min(3e4, Math.round(Number($.durationMs) || 5e3)),
            ),
            Y = Z.getBounds(),
            U = x(Y),
            E = d.getDisplayNearestPoint(U),
            W = await r.getSources({
              types: ["screen"],
              thumbnailSize: { width: 0, height: 0 },
            }),
            v = W.find((N) => String(N.display_id) === String(E.id)) || W[0];
          if (!v) return null;
          let k = b(E, U);
          return (
            (_ = {
              display: E,
              startedAt: Date.now(),
              durationMs: te,
              crop: k,
              cropKeyframes: [{ t: 0, x: L(k.x, 0), y: L(k.y, 0) }],
            }),
            ee(E, k, te),
            {
              sourceId: v.id,
              crop: k,
              displayBounds: E.bounds,
              petBounds: Y,
              output: { width: 1080, height: 1920 },
              durationMs: te,
            }
          );
        }),
        o.handle("share-capture-overlay-hide", () => (O(), { ok: !0 })),
        o.handle(
          "share-capture-started",
          () => (
            _ &&
              ((_.startedAt = Date.now()),
              (_.cropKeyframes = [
                {
                  t: 0,
                  x: L(_.crop && _.crop.x, 0),
                  y: L(_.crop && _.crop.y, 0),
                },
              ]),
              S("share_recording_started", {
                duration_sec: Math.round((Number(_.durationMs) || 0) / 1e3),
              })),
            { ok: !0 }
          ),
        ),
        o.handle("share-error-dialog", async (I, $) => {
          let Z = y();
          return (
            await n.showMessageBox(Z || void 0, {
              type: "warning",
              title: D("shareVideoTitle"),
              message:
                typeof $ == "string" && $.trim()
                  ? $
                  : D("shareRecordingFailed"),
              buttons: ["OK"],
              defaultId: 0,
              cancelId: 0,
              icon: s.createFromPath(f),
            }),
            { ok: !0 }
          );
        }),
        o.on("share-capture-cancel", () => {
          let I = y();
          (I && !I.isDestroyed() && I.webContents.send("share-capture-cancel"),
            (_ = null));
        }),
        o.handle("share-video-save", async (I, $) => {
          if (!$ || !$.bytes) return { ok: !1, reason: "missing-data" };
          let Z = y(),
            { canceled: te, filePath: Y } = await n.showSaveDialog(
              Z || void 0,
              {
                title: D("shareVideoSaveTitle"),
                defaultPath: G("mp4"),
                filters: [{ name: "MP4 Video", extensions: ["mp4"] }],
              },
            );
          if (te || !Y) return { ok: !1, canceled: !0 };
          let U = i.mkdtempSync(c.join(a.tmpdir(), "shanks-share-")),
            E = c.join(U, `source.${$.extension === "mp4" ? "mp4" : "webm"}`);
          try {
            i.writeFileSync(E, Buffer.from($.bytes));
            let W = Number($.scale && $.scale.x) || 1,
              v = Number($.scale && $.scale.y) || 1;
            _ && _.crop && j(_.crop, { force: !0 });
            let k =
                _ && Array.isArray(_.cropKeyframes)
                  ? _.cropKeyframes.map((P) => ({
                      t: P.t,
                      x: P.x * W,
                      y: P.y * v,
                    }))
                  : null,
              N = {
                crop: { ...$.crop, source: $.source, keyframes: k },
                output: $.output,
              };
            try {
              try {
                await oe(E, Y, N);
              } catch (P) {
                (console.error(
                  "Share video conversion failed, retrying with static crop:",
                  P,
                ),
                  await oe(E, Y, { crop: be(N.crop), output: $.output }));
              }
              return { ok: !0, filePath: Y };
            } catch (P) {
              return (
                console.error("Share video conversion failed:", P),
                {
                  ok: !1,
                  reason: "conversion-failed",
                  message:
                    P && P.message ? P.message : "ffmpeg conversion failed",
                }
              );
            }
          } finally {
            try {
              i.rmSync(U, { recursive: !0, force: !0 });
            } catch {}
            _ = null;
          }
        }));
    }
    return {
      hideShareCaptureOverlay: O,
      registerShareCaptureIpc: ae,
      updateShareCaptureForPetBounds: H,
    };
  }
  sg.exports = { createShareCaptureController: GS };
});
var cg = F((SR, ag) => {
  "use strict";
  var ci = require("path"),
    ig = require("ffmpeg-static");
  function JS() {
    return ig
      ? ig.replace(
          `${ci.sep}app.asar${ci.sep}`,
          `${ci.sep}app.asar.unpacked${ci.sep}`,
        )
      : null;
  }
  ag.exports = { resolveFfmpegPath: JS };
});
var ug = F((kR, lg) => {
  "use strict";
  function YS({
    removeJsonFile: t,
    runWithSyncApplySuppressed: e,
    clearPendingSync: r,
    settingsPath: n,
    patternPath: s,
    customPatternPresetsPath: o,
    remindersPath: i,
    syncStatePath: a,
    defaultPatternState: c,
    defaultSyncState: l,
    defaultStretchIntervalMin: d,
    defaultSoundVolume: u,
    defaultPomodoroFocusMin: f,
    defaultPomodoroRestSec: h,
    saveSyncState: p,
    setCurrentPattern: g,
    setCatName: y,
    setUserName: w,
    setShowCatName: A,
    setFixedMessage: S,
    setStretchIntervalMin: D,
    setReminders: B,
    setTaskCompleteSoundVolume: R,
    setSoundMuted: _,
    setPomodoroFocusMin: T,
    setPomodoroRestSec: m,
    setPomodoroMode: x,
    setPomodoroRunning: b,
    setPomodoroVisible: C,
    setPomodoroRemainingSec: G,
    stopPomodoroTimer: O,
    getStretchTimer: L,
    hasPetWindow: j,
    startStretchTimer: z,
    broadcastPattern: H,
    broadcastReminders: ee,
    broadcastCatNameSettings: Q,
    broadcastUserNameSettings: se,
    broadcastFixedMessageSettings: be,
    broadcastReminderSettings: oe,
    broadcastPomodoroState: ae,
    refreshAppTrayMenu: I,
  }) {
    function $(Z = {}) {
      (r(),
        e(() => {
          (t(n()),
            t(s()),
            t(o()),
            t(i()),
            t(a()),
            g(c()),
            y("Shanks"),
            w(""),
            A(!0),
            S(""),
            D(d),
            B([]),
            R(u),
            _(!1),
            T(f),
            m(h),
            x("focus"),
            b(!1),
            C(!1),
            G(f * 60),
            p(l(Z.accountUserId || null)));
        }),
        O(),
        (L() || j()) && z(),
        H(),
        ee(),
        Q(),
        se(),
        be(),
        oe(),
        ae(),
        I());
    }
    return { resetAccountSyncedLocalData: $ };
  }
  lg.exports = { createAccountLocalResetController: YS };
});
var hg = F((AR, dg) => {
  "use strict";
  function XS({
    app: t,
    BrowserWindow: e,
    Menu: r,
    t: n,
    buildSettingsMenuTemplate: s,
    toggleDevToolsForWindow: o,
    getPetWindow: i,
    getLicenseWindow: a,
  }) {
    function c() {
      let l = [
        {
          label: "Shanks",
          submenu: [
            { label: n("appMenuAbout"), role: "about" },
            { type: "separator" },
            { label: n("settings"), submenu: s() },
          ],
        },
        {
          label: n("editMenu"),
          submenu: [
            { role: "undo" },
            { role: "redo" },
            { type: "separator" },
            { role: "cut" },
            { role: "copy" },
            { role: "paste" },
            { role: "selectAll" },
          ],
        },
      ];
      t.isPackaged ||
        l.push({
          label: "Dev",
          submenu: [
            {
              label: "Toggle Focused DevTools",
              accelerator: "CmdOrCtrl+Alt+I",
              click: () => o(e.getFocusedWindow()),
            },
            { label: "Toggle Pet DevTools", click: () => o(i()) },
            { label: "Toggle License DevTools", click: () => o(a()) },
          ],
        });
      let d = r.buildFromTemplate(l);
      r.setApplicationMenu(d);
    }
    return { buildAppMenu: c };
  }
  dg.exports = { createAppMenuController: XS };
});
var pg = F((ER, fg) => {
  "use strict";
  var { createAppMenuController: QS } = hg();
  function ZS({
    app: t,
    BrowserWindow: e,
    Menu: r,
    Tray: n,
    fs: s,
    nativeImage: o,
    isMac: i,
    isWindows: a,
    appIconPath: c,
    trayTemplateIconPath: l,
    t: d,
    appDisplayName: u,
    releaseBuildExcludesDevOptions: f,
    getStretchIntervalMin: h,
    releaseExcludedStretchIntervalMin: p,
    setStretchInterval: g,
    getDrinkIntervalMin: y,
    releaseExcludedDrinkIntervalMin: w,
    setDrinkInterval: A,
    triggerDrinkSequence: S,
    getPeekStretchEnabled: D,
    setPeekStretchEnabled: B,
    getPeekDrinkEnabled: R,
    setPeekDrinkEnabled: _,
    getPomodoroRunning: T,
    getPomodoroRemainingSec: m,
    getPomodoroMode: x,
    pomodoroPhaseDurationSec: b,
    pausePomodoro: C,
    startPomodoro: G,
    resetPomodoro: O,
    getPomodoroFocusMin: L,
    setPomodoroFocusMin: j,
    getPomodoroRestSec: z,
    setPomodoroRestSec: H,
    hasPetWindow: ee,
    sendToPet: Q,
    triggerStretchSequence: se,
    getSoundMuted: be,
    setSoundMuted: oe,
    getTaskCompleteSoundVolume: ae,
    soundLevelForVolume: I,
    setSoundVolumeLevel: $,
    getPetSizeOptions: Z,
    getCurrentPetSize: te,
    setPetSize: Y,
    resizePetBy: U,
    resetPetSize: E,
    getPetPeekState: W,
    peekPet: v,
    unpeekPet: k,
    getCurrentLanguage: N,
    setLanguage: P,
    accountManager: M,
    loadLicense: ne,
    checkForUpdatesNow: ue,
    getLaunchAtLogin: We,
    setLaunchAtLogin: Te,
    getAllowAnalysis: Je,
    setAllowAnalysis: qe,
    getAgentMonitoringEnabled: kt,
    setAgentMonitoringOverride: xe,
    signOutCurrentAccount: pe,
    syncNow: rt,
    getAppNetworkOnline: Qs,
    logWarn: ln,
    movePetToCenter: ar,
    openPatternEditor: xr,
    toggleDevToolsForWindow: un,
    getPetWindow: Nr,
    getLicenseWindow: ns,
  }) {
    let nt = null,
      { buildAppMenu: xt } = QS({
        app: t,
        BrowserWindow: e,
        Menu: r,
        t: d,
        buildSettingsMenuTemplate: Kt,
        toggleDevToolsForWindow: un,
        getPetWindow: Nr,
        getLicenseWindow: ns,
      });
    function cr() {
      let ce = h();
      return [
        {
          label: d("off"),
          type: "radio",
          checked: ce === 0,
          click: () => g(0),
        },
        ...(f()
          ? []
          : [
              {
                label: d("everyMinuteTest"),
                type: "radio",
                checked: ce === p,
                click: () => g(p),
              },
            ]),
        {
          label: d("everyMinutes", 10),
          type: "radio",
          checked: ce === 10,
          click: () => g(10),
        },
        {
          label: d("everyMinutes", 15),
          type: "radio",
          checked: ce === 15,
          click: () => g(15),
        },
        {
          label: d("everyMinutes", 20),
          type: "radio",
          checked: ce === 20,
          click: () => g(20),
        },
        {
          label: d("everyMinutes", 30),
          type: "radio",
          checked: ce === 30,
          click: () => g(30),
        },
        {
          label: d("everyMinutes", 45),
          type: "radio",
          checked: ce === 45,
          click: () => g(45),
        },
        {
          label: d("everyHour"),
          type: "radio",
          checked: ce === 60,
          click: () => g(60),
        },
        {
          label: d("everyHourAndHalf"),
          type: "radio",
          checked: ce === 90,
          click: () => g(90),
        },
        {
          label: d("everyTwoHours"),
          type: "radio",
          checked: ce === 120,
          click: () => g(120),
        },
      ];
    }
    function At() {
      let ce = T(),
        Ae = x(),
        De = m(),
        Be = L(),
        zt = z();
      return [
        {
          label: ce
            ? d("pomodoroPause")
            : De < b(Ae)
              ? d("pomodoroResume")
              : d("pomodoroStart"),
          click: () => {
            ce ? C() : G();
          },
        },
        { label: d("pomodoroReset"), click: () => O() },
        { type: "separator" },
        {
          label: d("pomodoroFocusTime"),
          submenu: [
            ...[15, 20, 25, 30, 40, 45, 50, 60].map((pt) => ({
              label: d("pomodoroMinutes", pt),
              type: "radio",
              checked: Be === pt,
              click: () => j(pt),
            })),
            { type: "separator" },
            {
              label: `${d("pomodoroCustom")} (${d("pomodoroMinutes", Be)})`,
              enabled: ee(),
              click: () => Q("pomodoro-focus-edit", Be),
            },
          ],
        },
        {
          label: d("pomodoroRestTime"),
          submenu: [
            ...[5, 10, 15].map((pt) => ({
              label: d("pomodoroMinutes", pt),
              type: "radio",
              checked: zt === pt * 60,
              click: () => H(pt * 60),
            })),
            { type: "separator" },
            {
              label: `${d("pomodoroCustom")} (${d("pomodoroMinutes", Math.round(zt / 60))})`,
              enabled: ee(),
              click: () => Q("pomodoro-rest-edit", Math.round(zt / 60)),
            },
          ],
        },
      ];
    }
    function it() {
      return [
        { label: d("stretchNow"), enabled: ee(), click: () => se() },
        { type: "separator" },
        ...cr(),
      ];
    }
    function Lr() {
      let ce = y();
      return [
        {
          label: d("off"),
          type: "radio",
          checked: ce === 0,
          click: () => A(0),
        },
        ...(f()
          ? []
          : [
              {
                label: d("everyMinuteTest"),
                type: "radio",
                checked: ce === w,
                click: () => A(w),
              },
            ]),
        {
          label: d("everyMinutes", 20),
          type: "radio",
          checked: ce === 20,
          click: () => A(20),
        },
        {
          label: d("everyMinutes", 30),
          type: "radio",
          checked: ce === 30,
          click: () => A(30),
        },
        {
          label: d("everyMinutes", 45),
          type: "radio",
          checked: ce === 45,
          click: () => A(45),
        },
        {
          label: d("everyHour"),
          type: "radio",
          checked: ce === 60,
          click: () => A(60),
        },
        {
          label: d("everyHourAndHalf"),
          type: "radio",
          checked: ce === 90,
          click: () => A(90),
        },
        {
          label: d("everyTwoHours"),
          type: "radio",
          checked: ce === 120,
          click: () => A(120),
        },
      ];
    }
    function dn() {
      return [
        { label: d("drinkNow"), enabled: ee(), click: () => S() },
        { type: "separator" },
        ...Lr(),
      ];
    }
    function lr() {
      let ce = be(),
        Ae = ae();
      return [
        {
          label: d("soundMute"),
          type: "radio",
          checked: ce,
          click: () => oe(!0),
        },
        ...Array.from({ length: 10 }, (De, Be) => {
          let zt = Be + 1;
          return {
            label: d("soundLevel", zt),
            type: "radio",
            checked: !ce && I(Ae) === zt,
            click: () => $(zt),
          };
        }),
      ];
    }
    function jr() {
      let ce = te();
      return [
        ...Z().map((Ae) => ({
          label: d("petSizePixels", Ae),
          type: "radio",
          checked: ce === Ae,
          enabled: ee(),
          click: () => Y(Ae),
        })),
        { type: "separator" },
        { label: d("smaller"), enabled: ee(), click: () => U(-20) },
        { label: d("larger"), enabled: ee(), click: () => U(20) },
        { label: d("resetSize"), enabled: ee(), click: () => E() },
      ];
    }
    function re() {
      let ce = ee(),
        Ae = W();
      return [
        {
          label: d("peekLeft"),
          type: "radio",
          enabled: ce,
          checked: !!Ae && Ae.edge === "left",
          click: () => v("left"),
        },
        {
          label: d("peekRight"),
          type: "radio",
          enabled: ce,
          checked: !!Ae && Ae.edge === "right",
          click: () => v("right"),
        },
        { type: "separator" },
        { label: d("peekExit"), enabled: ce && !!Ae, click: () => k() },
      ];
    }
    function ke() {
      let ce = N();
      return [
        {
          label: d("english"),
          type: "radio",
          checked: ce === "en",
          click: () => P("en"),
        },
        {
          label: d("korean"),
          type: "radio",
          checked: ce === "ko",
          click: () => P("ko"),
        },
        {
          label: d("japanese"),
          type: "radio",
          checked: ce === "ja",
          click: () => P("ja"),
        },
      ];
    }
    function Kt() {
      let ce = M.loadAccount(),
        De = M.isValidAccountLinked(ce) ? dr() : [];
      return [
        { label: `${u()} v${t.getVersion()}`, enabled: !1 },
        {
          label: d("checkForUpdates"),
          enabled: t.isPackaged,
          click: () => {
            ue({ manual: !0 }).catch((Be) => {
              console.warn(
                "[Shanks] manual update check failed:",
                Be && Be.message ? Be.message : Be,
              );
            });
          },
        },
        ...(De.length > 0 ? [{ type: "separator" }, ...De] : []),
        { type: "separator" },
        { label: d("agentMonitoring"), submenu: ur() },
        {
          label: d("peekNotifications"),
          submenu: [
            {
              label: d("stretch"),
              type: "checkbox",
              checked: !!D(),
              click: (Be) => B(Be.checked),
            },
            {
              label: d("drink"),
              type: "checkbox",
              checked: !!R(),
              click: (Be) => _(Be.checked),
            },
          ],
        },
        { label: d("language"), submenu: ke() },
        {
          label: d("launchAtLogin"),
          type: "checkbox",
          checked: We(),
          enabled: t.isPackaged,
          click: (Be) => Te(Be.checked),
        },
        { type: "separator" },
        {
          label: d("appMenuQuit"),
          accelerator: "Cmd+Q",
          click: () => t.quit(),
        },
      ];
    }
    function ur() {
      return [
        { id: "cursor", labelKey: "agentMonitoringCursor" },
        { id: "kiro", labelKey: "agentMonitoringKiro" },
        { id: "antigravity", labelKey: "agentMonitoringAntigravity" },
        { id: "claude", labelKey: "agentMonitoringClaudeCli" },
        { id: "codex", labelKey: "agentMonitoringCodexCli" },
      ].map(({ id: Ae, labelKey: De }) => ({
        label: d(De),
        type: "checkbox",
        checked: kt(Ae),
        click: (Be) => xe(Ae, Be.checked),
      }));
    }
    function dr() {
      let ce = M.loadAccount();
      if (M.isValidAccountLinked(ce)) {
        let Ae = [{ label: ce.email || "", enabled: !1 }];
        return (
          Ae.push({
            label: d("accountSyncNow"),
            enabled: Qs(),
            click: () => {
              rt("settings-menu").catch((De) => {
                ln(
                  "[Shanks] manual sync failed:",
                  De && De.message ? De.message : De,
                );
              });
            },
          }),
          Ae.push({
            label: d("account"),
            submenu: [
              {
                label: d("accountBasedAnalytics"),
                type: "checkbox",
                checked: Je(),
                click: (De) => qe(De.checked),
              },
              { type: "separator" },
              {
                label: d("accountLogout"),
                click: () => {
                  pe({ showLoginWindow: !0 }).catch((De) => {
                    ln(
                      "[Shanks] account logout menu failed:",
                      De && De.message ? De.message : De,
                    );
                  });
                },
              },
            ],
          }),
          Ae
        );
      }
      return [];
    }
    function Mr() {
      let ce = M.loadAccount();
      return !M.isValidAccountLinked(ce) && !!ne();
    }
    function ss() {
      let ce = ee();
      return r.buildFromTemplate([
        { label: d("moveToCenter"), enabled: ce, click: () => ar() },
        { label: d("patternEditor"), enabled: ce, click: () => xr() },
        { label: d("pomodoro"), enabled: ce, submenu: At() },
        { label: d("stretch"), enabled: ce, submenu: it() },
        { label: d("drink"), enabled: ce, submenu: dn() },
        { label: d("peekMode"), enabled: ce, submenu: re() },
        { label: d("taskCompleteSound"), submenu: lr() },
        { label: d("size"), enabled: ce, submenu: jr() },
        { label: d("settings"), submenu: Kt() },
      ]);
    }
    function Zs() {
      nt &&
        (nt.setToolTip(`${u()} v${t.getVersion()}`), nt.setContextMenu(ss()));
    }
    function bi() {
      nt && nt.popUpContextMenu(ss());
    }
    function os() {
      if (nt || !s.existsSync(c)) return;
      let ce = i && s.existsSync(l) ? l : c,
        Ae = o.createFromPath(ce);
      ((Ae = Ae.resize({ width: 18, height: 18 })),
        i && Ae.setTemplateImage(!0),
        (nt = new n(Ae)),
        Zs(),
        a && nt.on("click", bi));
    }
    function eo() {
      nt && (nt.destroy(), (nt = null));
    }
    return {
      buildAppMenu: xt,
      buildSettingsMenuTemplate: Kt,
      buildSizeMenuTemplate: jr,
      buildSoundMenuTemplate: lr,
      buildStretchIntervalMenu: cr,
      buildDrinkIntervalMenu: Lr,
      createAppTray: os,
      destroyAppTray: eo,
      refreshAppTrayMenu: Zs,
      shouldShowAccountLinkCta: Mr,
    };
  }
  fg.exports = { createTrayMenuController: ZS };
});
var mg = F((TR, gg) => {
  "use strict";
  function ek({
    ipcMain: t,
    dialog: e,
    nativeImage: r,
    path: n,
    fs: s,
    vm: o,
    runtimePath: i,
    getPatternWindow: a,
    getPetWindow: c,
    getCurrentPattern: l,
    setCurrentPattern: d,
    loadCustomPatternPresets: u,
    loadBuiltinPatternPresets: f,
    loadAllCustomPatternPresets: h,
    saveCustomPatternPresets: p,
    customPatternPresetPayload: g,
    customPatternPresetExportName: y,
    sanitizePattern: w,
    uniqueCustomPatternPresetName: A,
    normalizeImportedCustomPresets: S,
    nextLocalMutationTimestamp: D,
    markPresetSyncPending: B,
    markPresetSyncPendingIds: R,
    markSyncDirty: _,
    scheduleBackgroundSync: T,
    loadSyncState: m,
    savePattern: x,
    broadcastPattern: b,
    applyFallbackPatternPreset: C,
    fallbackPatternPresetId: G,
    isUuid: O,
    catPatternRowPayload: L,
    getAccountSupabaseContext: j,
    readJsonFile: z,
    writeJsonFile: H,
    openPatternEditor: ee,
    openMappingEditor: Q,
    t: se,
    appIconPath: be,
    logWarn: oe,
    captureAnalytics: ae,
    presetTypeForAnalytics: I,
  }) {
    function $() {
      return i("renderer", "pet", "cell-mappings.js");
    }
    function Z(Y) {
      return `/* eslint-disable */
// \uC790\uB3D9 \uC0DD\uC131 \u2014 \uBAA8\uB4E0 cell\uC758 svg pixel \uB9E4\uD551\uC774 \uBA85\uC2DC\uC801\uC73C\uB85C \uAE30\uB85D\uB428.
// \uAC01 entry: "cellX,cellY": [[dx1, dy1], [dx2, dy2], ...] (origin \uAE30\uC900 offset)
// \uC0AC\uC6A9\uC790\uAC00 \uD2B9\uC815 cell\uC758 \uB9E4\uD551\uC744 \uC218\uC815\uD558\uB824\uBA74 \uADF8 entry\uB9CC \uC9C1\uC811 \uBCC0\uACBD\uD558\uBA74 \uB428.
(function () {
  const MAPPINGS = ${JSON.stringify(Y, null, 2)};

  // \uD2B9\uC815 cell\uC758 \uD53D\uC140 \uC88C\uD45C \uBC18\uD658 (\uC808\uB300 svg \uC88C\uD45C).
  // svgName: 'cat-idle-follow-v2', 'press-left' \uB4F1. elemId: 'head', 'leg-fl' \uB4F1.
  function getPixelsForCell(svgName, elemId, cellX, cellY) {
    const key = \`\${svgName}:\${elemId}\`;
    const m = MAPPINGS[key];
    if (!m) return null;
    const cell = m.cells[\`\${cellX},\${cellY}\`];
    if (!cell) return [];
    const [ox, oy] = m.origin;
    return cell.map(([dx, dy]) => ({ x: ox + dx, y: oy + dy }));
  }

  window.cellMappings = { MAPPINGS, getPixelsForCell };
})();
`;
    }
    function te() {
      let Y = $();
      if (!s.existsSync(Y)) return null;
      let U = s.readFileSync(Y, "utf8"),
        E = { window: {} };
      (o.createContext(E), o.runInContext(U, E, { filename: Y }));
      let W =
        E.window && E.window.cellMappings && E.window.cellMappings.MAPPINGS;
      return W && typeof W == "object" ? W : null;
    }
    (t.handle("pattern-get", () => l()),
      t.handle("pattern-presets-get", async () => {
        T(250);
        let Y = u().map(g);
        return [...f(), ...Y];
      }),
      t.handle("pattern-custom-preset-save", async (Y, U) => {
        let E = typeof U?.name == "string" ? U.name.trim().slice(0, 60) : "",
          W = w(U?.pattern),
          v = typeof U?.id == "string" ? U.id : "",
          k = h(),
          N = k.filter((ne) => !ne.deletedAt),
          P = JSON.stringify(W),
          M = null;
        if ((v.startsWith("custom-") && (M = k.find((ne) => ne.id === v)), M)) {
          let ne = D(M.updatedAt, M.createdAt);
          (E && (M.name = E),
            (M.pattern = W),
            (M.updatedAt = ne),
            (M.deletedAt = null));
        } else {
          let ne = D();
          M = {
            id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            name: E || "My preset",
            createdAt: ne,
            updatedAt: ne,
            deletedAt: null,
            pattern: W,
          };
          let ue = N.find(
            (We) => We.name === M.name && JSON.stringify(We.pattern) === P,
          );
          if (ue) return g(ue);
          k.unshift(M);
        }
        return (p(k), B(M.id), g(M));
      }),
      t.handle("pattern-custom-preset-delete", async (Y, U) => {
        if (typeof U != "string") return { ok: !1 };
        if (!U.startsWith("custom-")) return { ok: !1 };
        let E = h(),
          W = E.find((ue) => ue.id === U && !ue.deletedAt);
        if (!W) return { ok: !1 };
        let v = m(),
          k = v.presets.map && v.presets.map[U],
          N = l(),
          P = N.selectedPresetId === U || (O(k) && N.selectedPresetId === k),
          M = D(W.updatedAt, W.createdAt);
        ((W.deletedAt = M), (W.updatedAt = M), p(E), B(U));
        let ne = P ? C() : !1;
        return { ok: !0, resetSelected: ne, selectedId: ne ? G : null };
      }),
      t.handle("pattern-custom-preset-rename", async (Y, U) => {
        let E = typeof U?.id == "string" ? U.id : "",
          W = typeof U?.name == "string" ? U.name.trim().slice(0, 60) : "";
        if (!E || !W) return { ok: !1 };
        if (!E.startsWith("custom-")) return { ok: !1 };
        let v = h(),
          k = v.filter((P) => !P.deletedAt),
          N = k.find((P) => P.id === E);
        return N
          ? ((N.name = A(
              W,
              k.filter((P) => P.id !== E),
            )),
            (N.updatedAt = D(N.updatedAt, N.createdAt)),
            p(v),
            B(N.id),
            { ok: !0, preset: g(N) })
          : { ok: !1 };
      }),
      t.handle("pattern-custom-presets-export", async (Y, U) => {
        let E = [];
        try {
          let k = await j();
          if (k && O(U)) {
            let { data: N, error: P } = await k.supabase
              .from("cat_patterns")
              .select(
                "id, name, pattern_json, is_official, sort_order, created_at, updated_at, deleted_at",
              )
              .eq("id", U)
              .eq("user_id", k.userId)
              .eq("is_official", !1)
              .is("deleted_at", null)
              .maybeSingle();
            if (P) throw new Error(`custom preset export failed: ${P.message}`);
            E = N ? [L(N)] : [];
          }
        } catch (k) {
          oe(
            "[Shanks] server custom preset export failed:",
            k && k.message ? k.message : k,
          );
        }
        if (E.length === 0) {
          let k = u();
          E =
            typeof U == "string" && U.startsWith("custom-")
              ? k.filter((N) => N.id === U).map(g)
              : k.map(g);
        }
        if (E.length === 0) return { ok: !1, count: 0 };
        let W = await e.showSaveDialog(a() || c() || void 0, {
          title: "Export custom presets",
          defaultPath: y(E.length === 1 ? E[0].label && E[0].label.en : ""),
          filters: [{ name: "JSON", extensions: ["json"] }],
        });
        if (W.canceled || !W.filePath) return { ok: !1, canceled: !0 };
        let v = E[0];
        return (
          H(W.filePath, {
            schemaVersion: 2,
            app: "shanks",
            exportedAt: new Date().toISOString(),
            preset: {
              name: (v.label && v.label.en) || "My preset",
              createdAt: v.createdAt,
              updatedAt: v.updatedAt,
              pattern: w(v.pattern),
            },
          }),
          { ok: !0, count: 1, filePath: W.filePath }
        );
      }),
      t.handle("pattern-custom-presets-import", async () => {
        let Y = await e.showOpenDialog(a() || c() || void 0, {
          title: "Import custom presets",
          properties: ["openFile"],
          filters: [{ name: "JSON", extensions: ["json"] }],
        });
        if (Y.canceled || !Y.filePaths || !Y.filePaths[0])
          return { ok: !1, canceled: !0 };
        let U = z(Y.filePaths[0]),
          E = S(U);
        if (E.length === 0) return { ok: !1, imported: 0 };
        let W = h(),
          k = [...W.filter((P) => !P.deletedAt)],
          N = E.map((P) => {
            let M = D(P.updatedAt, P.createdAt),
              ne = A(P.name, k),
              ue = {
                id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                name: ne,
                createdAt: P.createdAt || M,
                updatedAt: M,
                deletedAt: null,
                pattern: P.pattern,
              };
            return (k.push(ue), ue);
          });
        return (
          p([...N, ...W]),
          R(N.map((P) => P.id)),
          { ok: !0, imported: N.length, selectedId: N[0]?.id || null }
        );
      }),
      t.on("pattern-set", (Y, U) => {
        if (!U || typeof U != "object") return;
        let E =
          typeof l().selectedPresetId == "string" ? l().selectedPresetId : null;
        (d(w(U)), x());
        let W =
          typeof l().selectedPresetId == "string" ? l().selectedPresetId : null;
        (E !== W &&
          (_("settings"),
          ae("pattern_preset_changed", {
            from_preset: E || "none",
            to_preset: W || "none",
            from_preset_type: I(E),
            to_preset_type: I(W),
          })),
          b());
      }),
      t.on("pattern-preview", (Y, U) => {
        if (!U || typeof U != "object") return;
        let E = c();
        E && !E.isDestroyed() && E.webContents.send("pattern-changed", w(U));
      }),
      t.handle(
        "pattern-confirm-clear-all",
        async (Y, U) =>
          (
            await e.showMessageBox(a() || c() || void 0, {
              type: "warning",
              title: se("patternEditorTitle"),
              message:
                typeof U == "string" && U.trim()
                  ? U
                  : "Clear spots from every part?",
              buttons: [se("reset"), se("later")],
              defaultId: 1,
              cancelId: 1,
              icon: r.createFromPath(be),
            })
          ).response === 0,
      ),
      t.handle(
        "pattern-confirm-delete-preset",
        async (Y, U) =>
          (
            await e.showMessageBox(a() || c() || void 0, {
              type: "warning",
              title: se("patternEditorTitle"),
              message:
                typeof U == "string" && U.trim() ? U : "Delete this preset?",
              buttons: [se("delete"), se("later")],
              defaultId: 1,
              cancelId: 1,
              icon: r.createFromPath(be),
            })
          ).response === 0,
      ),
      t.handle(
        "pattern-confirm-discard-changes",
        async (Y, U) =>
          (
            await e.showMessageBox(a() || c() || void 0, {
              type: "warning",
              title: se("patternEditorTitle"),
              message:
                typeof U == "string" && U.trim()
                  ? U
                  : "Discard unsaved changes?",
              buttons: [se("reset"), se("later")],
              defaultId: 1,
              cancelId: 1,
              icon: r.createFromPath(be),
            })
          ).response === 0,
      ),
      t.on("open-pattern-editor", () => ee()),
      t.on("open-mapping-editor", () => Q()),
      t.handle("mapping-load", () => {
        try {
          return te();
        } catch (Y) {
          return (
            console.warn(
              "[Shanks] failed to load cell mappings:",
              Y && Y.message ? Y.message : Y,
            ),
            null
          );
        }
      }),
      t.handle("mapping-save", (Y, U) => {
        if (!U || typeof U != "object")
          return { ok: !1, reason: "invalid-mappings" };
        try {
          return (s.writeFileSync($(), Z(U)), { ok: !0 });
        } catch (E) {
          return {
            ok: !1,
            reason: E && E.message ? E.message : "mapping-save-failed",
          };
        }
      }),
      t.handle("svg-load", (Y, U) => {
        let E = n.basename(String(U || "")).replace(/\.svg$/i, "");
        if (!E) return null;
        let W = i("svg", `${E}.svg`);
        try {
          return s.existsSync(W) ? s.readFileSync(W, "utf8") : null;
        } catch {
          return null;
        }
      }));
  }
  gg.exports = { registerPatternIpc: ek };
});
var _g = F((CR, yg) => {
  "use strict";
  function tk({
    ipcMain: t,
    shell: e,
    accountManager: r,
    logWarn: n,
    getUiAccountState: s,
    signOutCurrentAccount: o,
    unlinkCurrentAccountLicense: i,
    completeAccountLicenseLink: a,
    loadLicense: c,
    createLicenseWindow: l,
    getAccountNudgeDismissedDate: d,
    setAccountNudgeDismissedDate: u,
    normalizeDateKey: f,
    saveLocalUiState: h,
    activateLicenseKey: p,
    startLicensedApp: g,
    licenseRecoveryReasonFromMessage: y,
    landingPageUrl: w,
    licenseResetPageUrl: A,
  }) {
    (t.handle("account-state-get", () => s()),
      t.handle("account-google-login", async () => {
        try {
          let S = await r.startGoogleSignIn();
          return (e.openExternal(S), { ok: !0 });
        } catch (S) {
          throw (
            n(
              "[Shanks] google login start failed:",
              S && S.stack ? S.stack : S,
            ),
            S
          );
        }
      }),
      t.handle("account-sign-out", async () => o()),
      t.handle("account-unlink-license", async () =>
        i({ confirmed: !0, silent: !0 }),
      ),
      t.handle("account-link-license", async (S, D) => ({
        ok: await a(String(D || ""), { legacy: !1 }),
      })),
      t.handle("account-link-legacy-license", async () => {
        let S = c();
        return !S || !S.licenseKey
          ? { ok: !1, reason: "missing" }
          : { ok: await a(S.licenseKey, { legacy: !0 }) };
      }),
      t.handle("account-reconnect", async () => {
        let S = await r.refreshEntitlement({ force: !0 });
        return S.ok
          ? (g(), { ok: !0 })
          : {
              ok: !1,
              reason: S.reason || "error",
              revoked: !!S.revoked,
              notLinked: !!S.notLinked,
              network: !!S.network,
            };
      }),
      t.handle("account-open-link-window", () => (l(""), { ok: !0 })),
      t.handle("account-nudge-dismissed-date-get", () => d()),
      t.handle("account-nudge-dismissed-date-set", (S, D) => {
        let B = f(D);
        return (u(B), h(), B);
      }),
      t.handle("license-activate", async (S, D) => {
        try {
          let B = await p(D);
          return (
            g(),
            {
              ok: !0,
              productName: B.productName || null,
              customerEmail: B.customerEmail || null,
            }
          );
        } catch (B) {
          let R = !!(B && B.code === "LICENSE_NETWORK_FAILED"),
            _ = B && B.message ? B.message : "",
            T = R ? "" : y(_);
          return {
            ok: !1,
            network: R,
            limit: T === "limit",
            disabled: T === "disabled",
            message: _,
          };
        }
      }),
      t.handle("license-current", () => {
        let S = c();
        return S
          ? {
              productName: S.productName || null,
              customerEmail: S.customerEmail || null,
              lastValidatedAt: S.lastValidatedAt || null,
            }
          : null;
      }),
      t.handle("open-landing-page", () => (e.openExternal(w), { ok: !0 })),
      t.handle(
        "open-license-reset-page",
        () => (e.openExternal(A), { ok: !0 }),
      ));
  }
  yg.exports = { registerAccountIpc: tk };
});
var wg = F((PR, vg) => {
  "use strict";
  function rk({
    ipcMain: t,
    analytics: e,
    logInfo: r,
    getCurrentLanguage: n,
    setLanguage: s,
    getUserName: o,
    setUserName: i,
    getCatName: a,
    getShowCatName: c,
    setCatName: l,
    setShowCatName: d,
    getFixedMessage: u,
    setFixedMessage: f,
    markCatNamePromptShown: h,
    getTaskCompleteSoundVolume: p,
    setTaskCompleteSoundVolume: g,
    getSoundMuted: y,
    setSoundMuted: w,
    getAllowAnalysis: A,
    setAllowAnalysis: S,
    getAgentMonitoringEnabled: D,
    setAgentMonitoringOverride: B,
    setAppNetworkOnline: R,
    resetSyncFailureCount: _,
    retryBackgroundSyncNow: T,
    clearSyncPolling: m,
    refreshAppTrayMenu: x,
  }) {
    (t.handle("language-get", () => n()),
      t.handle("language-set", (b, C) => (s(C), n())),
      t.handle("user-name-get", () => ({ name: o() })),
      t.handle("user-name-set", (b, C) => i(C)),
      t.handle("cat-name-get", () => ({ name: a(), visible: c() })),
      t.handle("cat-name-set", (b, C) => l(C)),
      t.handle("cat-name-visible-set", (b, C) => d(C)),
      t.handle("fixed-message-get", () => ({ message: u() })),
      t.handle("fixed-message-set", (b, C) => f(C)),
      t.handle("cat-name-prompt-shown", () => (h(), { ok: !0 })),
      t.handle("task-complete-sound-volume-get", () => p()),
      t.handle("task-complete-sound-volume-set", (b, C) => g(C)),
      t.handle("sound-muted-get", () => y()),
      t.handle("sound-muted-set", (b, C) => w(C)),
      t.handle("allow-analysis-get", () => A()),
      t.handle("allow-analysis-set", (b, C) => S(C)),
      t.handle("agent-monitoring-get", (b, C) => D(C)),
      t.handle("agent-monitoring-set", (b, C, G) => B(C, G)),
      t.on("network-status", (b, C) => {
        let G = C !== !1;
        (R(G),
          G
            ? (_(), T("network-online"), x())
            : (m(), x(), r("[Shanks] network offline")));
      }),
      t.on("network-online", () => {
        (R(!0), _(), T("network-online"), x());
      }),
      t.handle("analytics-capture", (b, C, G) => e.capture(C, G)));
  }
  vg.exports = { registerSettingsIpc: rk };
});
var Sg = F((RR, bg) => {
  "use strict";
  function nk({
    ipcMain: t,
    reminderList: e,
    addReminder: r,
    updateReminder: n,
    deleteReminder: s,
    setReminderEnabled: o,
    pomodoroState: i,
    startPomodoro: a,
    pausePomodoro: c,
    resetPomodoro: l,
    setPomodoroFocusMin: d,
    setPomodoroRestSec: u,
  }) {
    (t.handle("reminders-get", () => e()),
      t.handle("reminder-add", (f, h) => r(h)),
      t.handle("reminder-update", (f, h) => n(String((h && h.id) || ""), h)),
      t.handle("reminder-delete", (f, h) => s(String(h || ""))),
      t.handle("reminder-enabled-set", (f, h) =>
        o(String((h && h.id) || ""), !!(h && h.enabled)),
      ),
      t.handle("pomodoro-get", () => i()),
      t.handle("pomodoro-start", () => (a(), i())),
      t.handle("pomodoro-pause", () => (c(), i())),
      t.handle("pomodoro-reset", () => (l(), i())),
      t.handle("pomodoro-focus-set", (f, h) => (d(Number(h)), i())),
      t.handle(
        "pomodoro-rest-set",
        (f, h) => (
          u(Math.max(1, Math.min(60, Math.round(Number(h) || 5))) * 60),
          i()
        ),
      ));
  }
  bg.exports = { registerProductivityIpc: nk };
});
var Ag = F((OR, kg) => {
  "use strict";
  function sk({
    ipcMain: t,
    Menu: e,
    t: r,
    releaseBuildExcludesDevOptions: n,
    getPetWindow: s,
    getLastPetDragAt: o,
    setLastPetDragAt: i,
    getCurrentPetSize: a,
    setCurrentPetPosition: c,
    windowDims: l,
    petPeekEdgeForBounds: d,
    boundsForPetPeek: u,
    constrainPetVisualInsideWorkArea: f,
    setPetPeekState: h,
    updateShareCaptureForPetBounds: p,
    saveSettings: g,
    unpeekPet: y,
    peekPet: w,
    ensurePetWindowVisible: A,
    getPetPeekState: S,
    setPetWindowExpandedForDrag: D,
    shouldShowAccountLinkCta: B,
    createLicenseWindow: R,
    getFixedMessage: _,
    getShowReminderButtonOutside: T,
    setShowReminderButtonOutside: m,
    getPomodoroRunning: x,
    getPomodoroRemainingSec: b,
    getPomodoroMode: C,
    pomodoroPhaseDurationSec: G,
    pausePomodoro: O,
    startPomodoro: L,
    resetPomodoro: j,
    getPomodoroFocusMin: z,
    setPomodoroFocusMin: H,
    getPomodoroRestSec: ee,
    setPomodoroRestSec: Q,
    triggerStretchSequence: se,
    buildStretchIntervalMenu: be,
    triggerDrinkSequence: oe,
    buildDrinkIntervalMenu: ae,
    getUserName: I,
    getCatName: $,
    getShowCatName: Z,
    setShowCatName: te,
    openPatternEditor: Y,
    openMappingEditor: U,
    buildSoundMenuTemplate: E,
    buildSizeMenuTemplate: W,
    buildSettingsMenuTemplate: v,
  }) {
    (t.on("drag-window", (k, N, P) => {
      let M = s();
      if (!M || M.isDestroyed()) return;
      i(Date.now());
      let ne = M.getBounds(),
        { width: ue, height: We } = l(a()),
        Te = {
          x: Math.round(ne.x + N),
          y: Math.round(ne.y + P),
          width: ue,
          height: We,
        };
      (ne.x === Te.x &&
        ne.y === Te.y &&
        ne.width === Te.width &&
        ne.height === Te.height) ||
        (M.setBounds(Te), c({ x: Te.x, y: Te.y }));
    }),
      t.on("drag-window-to", (k, N, P, M, ne) => {
        let ue = s();
        if (!ue || ue.isDestroyed()) return;
        let We = Number(N),
          Te = Number(P),
          Je = Number(M),
          qe = Number(ne);
        if (![We, Te, Je, qe].every(Number.isFinite)) return;
        i(Date.now());
        let { width: kt, height: xe } = l(a()),
          pe = {
            x: Math.round(We - Je),
            y: Math.round(Te - qe),
            width: kt,
            height: xe,
          },
          rt = ue.getBounds();
        (rt.x === pe.x &&
          rt.y === pe.y &&
          rt.width === pe.width &&
          rt.height === pe.height) ||
          (ue.setBounds(pe), c({ x: pe.x, y: pe.y }));
      }),
      t.on("drag-window-ended", () => {
        let k = s();
        if (!k || k.isDestroyed()) return;
        let N = k.getBounds(),
          P = d(N),
          M = P ? u(N, P.edge, P.display) : f(N);
        (k.setBounds(M),
          c({ x: M.x, y: M.y }),
          h(P ? P.edge : null),
          p(M, { forceKeyframe: !0 }),
          g({ sync: !1 }));
      }),
      t.on("unpeek-pet", () => {
        y();
      }),
      t.on("peek-pet", (k, N) => {
        w(N);
      }),
      t.on("bring-pet-into-view", () => {
        typeof A == "function" && A();
      }),
      t.on("set-mouse-events-enabled", (k, N) => {
        let P = s();
        !P ||
          P.isDestroyed() ||
          (N
            ? P.setIgnoreMouseEvents(!1)
            : P.setIgnoreMouseEvents(!0, { forward: !0 }));
      }),
      t.on("set-pet-focusable", (k, N) => {
        let P = s();
        if (!P || P.isDestroyed()) return;
        let M = !!N;
        try {
          (P.setFocusable(M), M && P.focus());
        } catch {}
      }),
      t.on("set-stretch-mode", (k, N) => {
        D(!!N);
      }),
      t.on("set-hunting-mode", () => {}),
      t.on("show-context-menu", (k, N = {}) => {
        let P = s();
        if (!P || P.isDestroyed() || Date.now() - o() < 500) return;
        let M = N && N.online === !1,
          ne = x(),
          ue = C(),
          We = b(),
          Te = z(),
          Je = ee(),
          qe = S();
        e.buildFromTemplate([
          { label: M ? "Offline" : "Online", enabled: !1 },
          { type: "separator" },
          ...(B()
            ? [
                { label: r("accountLinkMenu"), click: () => R("") },
                { type: "separator" },
              ]
            : []),
          {
            label: r("fixedMessage"),
            click: () => P.webContents.send("fixed-message-edit", _()),
          },
          {
            label: r("reminders"),
            submenu: [
              {
                label: r("remindersOpen"),
                click: () => P.webContents.send("reminder-panel-open"),
              },
              {
                label: r("showReminderButtonOutside"),
                type: "checkbox",
                checked: T(),
                click: (xe) => m(xe.checked),
              },
            ],
          },
          {
            label: r("pomodoro"),
            submenu: [
              {
                label: ne
                  ? r("pomodoroPause")
                  : We < G(ue)
                    ? r("pomodoroResume")
                    : r("pomodoroStart"),
                click: () => {
                  ne ? O() : L();
                },
              },
              { label: r("pomodoroReset"), click: () => j() },
              { type: "separator" },
              {
                label: r("pomodoroFocusTime"),
                submenu: [
                  ...[15, 20, 25, 30, 40, 45, 50, 60].map((xe) => ({
                    label: r("pomodoroMinutes", xe),
                    type: "radio",
                    checked: Te === xe,
                    click: () => H(xe),
                  })),
                  { type: "separator" },
                  {
                    label: `${r("pomodoroCustom")} (${r("pomodoroMinutes", Te)})`,
                    click: () => P.webContents.send("pomodoro-focus-edit", Te),
                  },
                ],
              },
              {
                label: r("pomodoroRestTime"),
                submenu: [
                  ...[5, 10, 15].map((xe) => ({
                    label: r("pomodoroMinutes", xe),
                    type: "radio",
                    checked: Je === xe * 60,
                    click: () => Q(xe * 60),
                  })),
                  { type: "separator" },
                  {
                    label: `${r("pomodoroCustom")} (${r("pomodoroMinutes", Math.round(Je / 60))})`,
                    click: () =>
                      P.webContents.send(
                        "pomodoro-rest-edit",
                        Math.round(Je / 60),
                      ),
                  },
                ],
              },
            ],
          },
          {
            label: r("stretch"),
            submenu: [
              { label: r("stretchNow"), click: () => se() },
              { type: "separator" },
              ...be(),
            ],
          },
          {
            label: r("drink"),
            submenu: [
              { label: r("drinkNow"), click: () => oe() },
              { type: "separator" },
              ...ae(),
            ],
          },
          {
            label: r("peekMode"),
            submenu: [
              {
                label: r("peekLeft"),
                type: "radio",
                checked: !!qe && qe.edge === "left",
                click: () => w("left"),
              },
              {
                label: r("peekRight"),
                type: "radio",
                checked: !!qe && qe.edge === "right",
                click: () => w("right"),
              },
              { type: "separator" },
              { label: r("peekExit"), enabled: !!qe, click: () => y() },
            ],
          },
          { type: "separator" },
          {
            label: r("shareCat"),
            click: () => P.webContents.send("share-record"),
          },
          {
            label: r("name"),
            submenu: [
              {
                label: r("setUserName"),
                click: () => P.webContents.send("user-name-edit", I()),
              },
              {
                label: r("setCatName"),
                click: () => P.webContents.send("cat-name-edit", $()),
              },
              {
                label: r("showCatName"),
                type: "checkbox",
                checked: Z(),
                click: (xe) => te(xe.checked),
              },
            ],
          },
          { type: "separator" },
          { label: r("patternEditor"), click: () => Y() },
          ...(n() ? [] : [{ label: r("mappingEditor"), click: () => U() }]),
          { label: r("taskCompleteSound"), submenu: E() },
          { label: r("size"), submenu: W() },
          { label: r("settings"), submenu: v() },
        ]).popup({ window: P });
      }));
  }
  kg.exports = { registerPetWindowIpc: sk };
});
var Tg = F((IR, Eg) => {
  "use strict";
  function ok({
    ipcMain: t,
    checkForUpdatesNow: e,
    downloadUpdate: r,
    installDownloadedUpdate: n,
  }) {
    (t.handle("update-check", async () =>
      e({ manual: !0, allowOfflineLicense: !1 }),
    ),
      t.handle("update-download", async () => r()),
      t.handle("update-install", () => n()));
  }
  Eg.exports = { registerUpdateIpc: ok };
});
var {
    app: me,
    BrowserWindow: en,
    screen: Gs,
    ipcMain: tn,
    Menu: Pg,
    Tray: ik,
    desktopCapturer: ak,
    dialog: Js,
    nativeImage: rn,
    globalShortcut: Rg,
    shell: Og,
    systemPreferences: ck,
    powerMonitor: lk,
  } = require("electron"),
  nn = require("path"),
  Ir = require("fs"),
  uk = require("os"),
  dk = require("vm"),
  { spawn: hk } = require("child_process"),
  Yr = Sh(),
  ui = xh(),
  { createAnalyticsEvents: fk } = Lh(),
  { createLicenseService: pk } = Dh(),
  { createAccountFlowService: gk } = $h(),
  { createDeepLinkService: mk } = Bh(),
  { createAppAccessService: yk } = Wh(),
  { createAutoUpdateService: _k } = Kh(),
  { createAppSessionController: vk } = Gh(),
  { createAppInstanceController: wk } = Yh(),
  { createRegularChecksController: bk } = Qh(),
  { startAgentHookCli: Sk } = cc(),
  { runHookCleanupCli: kk } = pf(),
  { createHookCommandBuilders: Ak } = _f(),
  { createAgentIntegrations: Ek } = Uf(),
  { createGlobalInputController: Tk, isEscapeKeyInput: Ck } = Bf(),
  { createCoveringMotionController: Pk } = Wf(),
  { inferEarlyAppName: Rk } = Gf(),
  { runtimePath: sn, projectPath: Ok } = Xf(),
  { createLogger: Ik } = tp(),
  { createI18n: xk } = np(),
  { readJsonFile: di, writeJsonFile: hi, removeJsonFile: Nk } = Xo(),
  {
    DEFAULT_STRETCH_INTERVAL_MIN: Yc,
    RELEASE_EXCLUDED_STRETCH_INTERVAL_MIN: Ig,
    DEFAULT_DRINK_INTERVAL_MIN: xg,
    RELEASE_EXCLUDED_DRINK_INTERVAL_MIN: Ng,
    DEFAULT_SOUND_VOLUME: Xc,
    createSettingsHelpers: Lk,
  } = up(),
  { createSettingsController: jk } = hp(),
  { createSettingsStore: Mk } = pp(),
  { createReminderHelpers: Dk } = mp(),
  { createRemindersState: Uk } = Sp(),
  { createPomodoroState: $k } = Ap(),
  { createSyncStateStore: Fk } = Pp(),
  { createPatternStore: qk } = jp(),
  { createSyncOrchestrator: Bk } = Dp(),
  { createWindowUtils: Hk } = $p(),
  { createDockVisibilityController: Wk } = qp(),
  { createLicenseWindowController: Vk } = Hp(),
  { createPatternEditorWindowController: Kk } = Vp(),
  { createMappingEditorWindowController: zk } = zp(),
  { createPetWindowController: Gk } = Jp(),
  { createPetWindowStateController: Jk } = Xp(),
  { createPetWindowPosition: Yk } = Zp(),
  { createPetOnTopController: Xk } = tg(),
  { createPetWindowEventsController: Qk } = ng(),
  { createShareCaptureController: Zk } = og(),
  { resolveFfmpegPath: eA } = cg(),
  { createAccountLocalResetController: tA } = ug(),
  { createTrayMenuController: rA } = pg(),
  { registerPatternIpc: nA } = mg(),
  { registerAccountIpc: sA } = _g(),
  { registerSettingsIpc: oA } = wg(),
  { registerProductivityIpc: iA } = Sg(),
  { registerPetWindowIpc: aA } = Ag(),
  { registerUpdateIpc: cA } = Tg(),
  {
    defaultPatternState: Lg,
    customPatternPresetExportName: lA,
    sanitizePattern: jg,
    patternForServer: xR,
    patternFromServerPatternJson: uA,
    isUuid: Mg,
    uniqueCustomPatternPresetName: dA,
    normalizeImportedCustomPresets: hA,
    catPatternRowPayload: Dg,
    presetRowToLocal: fA,
    presetLocalToRow: pA,
    customPresetPatternMatchKey: gA,
    localCustomPresetMatchKey: mA,
    serverCustomPresetMatchKey: yA,
  } = Hc(),
  { remindersPath: _A } = Dc(),
  rs = process.platform === "darwin",
  on = process.platform === "win32",
  Kc =
    process.env.COMNYANG_SMOKE_TEST === "1" ||
    process.argv.includes("--shanks-smoke-test"),
  Ug = "--shanks-claude-hook",
  Qc = "--shanks-antigravity-hook",
  Zc = "--shanks-cursor-hook",
  vA = process.argv.includes(Ug),
  $g = process.argv.includes(Qc),
  Fg = process.argv.includes(Zc),
  qg = vA || $g || Fg,
  Bg = "--shanks-cleanup-hooks",
  wA = process.argv.includes(Bg);
on && !process.env.PREBUILDS_ONLY && (process.env.PREBUILDS_ONLY = "1");
var Hg = Rk(me);
me.setName(Hg);
var {
    logPath: bA,
    logInfo: It,
    logWarn: Ze,
    logError: Us,
    attachProcessErrorLogging: SA,
  } = Ik(me),
  {
    captureAnalytics: an,
    captureAppError: Wg,
    presetTypeForAnalytics: kA,
    remainingSecBucketForAnalytics: AA,
    reminderAnalyticsProperties: EA,
  } = fk(ui);
SA();
process.on("uncaughtException", (t) => Wg("uncaught_exception", t));
process.on("unhandledRejection", (t) => Wg("unhandled_rejection", t));
if (qg) {
  Sk({
    app: me,
    logWarn: Ze,
    isCursorHookCli: Fg,
    isAntigravityHookCli: $g,
    cursorHookCliFlag: Zc,
    antigravityHookCliFlag: Qc,
    claudeHookCliFlag: Ug,
  });
  return;
}
if (wA) {
  kk({ app: me, cliFlag: Bg, logWarn: Ze });
  return;
}
var Re = null,
  Bt = null,
  $s = null,
  Ar = null,
  wt = sn("assets", "shanks-logo.png"),
  TA = sn("assets", "trayTemplate.png"),
  Vg = 23456,
  {
    buildEmbeddedNodeHookCommand: CA,
    buildWindowsWrapperHookCommand: PA,
    buildWindowsCursorHttpHookCommand: RA,
  } = Ak({
    isWindows: on,
    antigravityHookCliFlag: Qc,
    cursorHookCliFlag: Zc,
    agentStatePort: Vg,
  }),
  {
    startAgentIntegrations: OA,
    stopAgentIntegrations: Kg,
    agentMonitoringEnabled: el,
    applyAgentMonitoringState: IA,
    installCursorHooks: NR,
    uninstallCursorHooks: LR,
  } = Ek({
    app: me,
    isWindows: on,
    agentStatePort: Vg,
    sourceHookDir: nn.join(__dirname, "hooks"),
    logInfo: It,
    sendPetAgentEvent: (t, e) =>
      bt || !Re || Re.isDestroyed() ? !1 : (Re.webContents.send(t, e), !0),
    captureAnalytics: an,
    buildEmbeddedNodeHookCommand: CA,
    buildWindowsWrapperHookCommand: PA,
    buildWindowsCursorHttpHookCommand: RA,
    getAgentMonitoringOverride: (t) => zs[t],
  }),
  tl = !0,
  xA = "https://shanks.com",
  NA = "https://shanks.com/reset-license",
  LA = 48,
  jA = 96,
  MA = 48,
  jR = 1 / 30,
  DA = 3600 * 1e3,
  UA = 30 * 1e3,
  fi = 100,
  Ht = "en",
  {
    t: St,
    escapeHtml: $A,
    normalizeLanguage: rl,
    appDisplayName: pi,
    isDevBuild: MR,
    defaultLanguage: FA,
  } = xk({ app: me, appName: Hg, getCurrentLanguage: () => Ht }),
  qA = eA(),
  {
    hasPetWindow: nl,
    sendToPet: sl,
    sendUpdateState: BA,
  } = Qk({ getPetWindow: () => Re, getPetPeekState: () => bt }),
  {
    releaseBuildExcludesDevOptions: gi,
    normalizeStretchIntervalForBuild: ol,
    normalizeDrinkIntervalForBuild: il,
    settingsPath: al,
    localUiStatePath: HA,
    remindersPath: zg,
    normalizePetSize: Gg,
    normalizePetPosition: WA,
    normalizeSoundVolume: Jg,
    soundVolumeForLevel: VA,
    soundLevelForVolume: KA,
    normalizeDateKey: Yg,
    normalizePetPeekEdge: Xg,
  } = Lk({ app: me, remindersStorePath: _A, defaultPetSize: fi }),
  {
    todayKey: zA,
    sanitizeReminder: GA,
    reminderRowToLocal: JA,
    reminderLocalToRow: YA,
    reminderAppliesToday: XA,
    formatReminderSpeech: QA,
  } = Dk({ getUserName: () => sr, getCurrentLanguage: () => Ht }),
  {
    syncStatePath: ZA,
    defaultSyncState: eE,
    loadSyncState: mi,
    saveSyncState: cl,
    serverTimestampMs: tE,
    syncServerTimeOffsetMs: DR,
    serverAlignedNowMs: UR,
    nextLocalMutationTimestamp: ll,
  } = Fk({ app: me, readJsonFile: di, writeJsonFile: hi }),
  { resetAccountSyncedLocalData: Qg } = tA({
    removeJsonFile: Nk,
    runWithSyncApplySuppressed: (...t) => cE(...t),
    clearPendingSync: (...t) => rE(...t),
    settingsPath: al,
    patternPath: (...t) => lT(...t),
    customPatternPresetsPath: (...t) => uT(...t),
    remindersPath: zg,
    syncStatePath: ZA,
    defaultPatternState: Lg,
    defaultSyncState: eE,
    defaultStretchIntervalMin: Yc,
    defaultSoundVolume: Xc,
    defaultPomodoroFocusMin: 25,
    defaultPomodoroRestSec: 300,
    saveSyncState: cl,
    setCurrentPattern: (t) => {
      Xr = t;
    },
    setCatName: (t) => {
      nr = t;
    },
    setUserName: (t) => {
      sr = t;
    },
    setShowCatName: (t) => {
      Tr = t;
    },
    setFixedMessage: (t) => {
      Cr = t;
    },
    setStretchIntervalMin: (t) => {
      Er = t;
    },
    setReminders: (t) => {
      qs = t;
    },
    setTaskCompleteSoundVolume: (t) => {
      Pr = t;
    },
    setSoundMuted: (t) => {
      Rr = t;
    },
    setPomodoroFocusMin: (t) => {
      Wt = t;
    },
    setPomodoroRestSec: (t) => {
      or = t;
    },
    setPomodoroMode: (t) => {
      Hs = t;
    },
    setPomodoroRunning: (t) => {
      Ws = t;
    },
    setPomodoroVisible: (t) => {
      zc = t;
    },
    setPomodoroRemainingSec: (t) => {
      ts = t;
    },
    stopPomodoroTimer: (...t) => fl(...t),
    getStretchTimer: () => Qn,
    hasPetWindow: nl,
    startStretchTimer: (...t) => Sl(...t),
    broadcastPattern: (...t) => Xs(...t),
    broadcastReminders: (...t) => ul(...t),
    broadcastCatNameSettings: (...t) => Sm(...t),
    broadcastUserNameSettings: (...t) => km(...t),
    broadcastFixedMessageSettings: (...t) => Am(...t),
    broadcastReminderSettings: (...t) => tm(...t),
    broadcastPomodoroState: (...t) => hl(...t),
    refreshAppTrayMenu: (...t) => ir(...t),
  }),
  {
    clearPendingSync: rE,
    clearSyncPolling: yi,
    downloadAccountDataToLocal: nE,
    getAccountSupabaseContext: sE,
    loadServerPatternPresets: $R,
    markPresetSyncPending: oE,
    markPresetSyncPendingIds: iE,
    markSyncDirty: _i,
    resetSyncFailureCount: Zg,
    retryBackgroundSyncNow: aE,
    runWithSyncApplySuppressed: cE,
    scheduleBackgroundSync: lE,
    syncNow: em,
    uploadLocalDataToAccount: uE,
  } = Bk({
    accountManager: Yr,
    logInfo: It,
    logWarn: Ze,
    getAppNetworkOnline: () => tl,
    getPatternWindow: () => Bt,
    releaseBuildExcludesDevOptions: gi,
    normalizeStretchIntervalForBuild: ol,
    defaultStretchIntervalMin: Yc,
    releaseExcludedStretchIntervalMin: Ig,
    getStretchIntervalMin: () => Er,
    setStretchIntervalMin: (t) => {
      Er = t;
    },
    getStretchTimer: () => Qn,
    startStretchTimer: (...t) => Sl(...t),
    normalizeDrinkIntervalForBuild: il,
    defaultDrinkIntervalMin: xg,
    releaseExcludedDrinkIntervalMin: Ng,
    getDrinkIntervalMin: () => Qr,
    setDrinkIntervalMin: (t) => {
      Qr = t;
    },
    getDrinkTimer: () => Fs,
    startDrinkTimer: (...t) => wm(...t),
    hasPetWindow: nl,
    refreshAppTrayMenu: (...t) => ir(...t),
    saveSettings: (...t) => cn(...t),
    getCurrentPattern: () => Xr,
    setCurrentPattern: (t) => {
      Xr = t;
    },
    getLegacyPresetOfficialNames: () => cT,
    getFallbackPatternPresetId: () => mm,
    selectedCatPatternId: () => dT(),
    loadBuiltinPatternPresetById: (...t) => fT(...t),
    loadAllCustomPatternPresets: () => ym(),
    saveCustomPatternPresets: (...t) => _m(...t),
    savePattern: (...t) => vm(...t),
    broadcastPattern: () => Xs(),
    loadSyncState: mi,
    saveSyncState: cl,
    serverTimestampMs: tE,
    nextLocalMutationTimestamp: ll,
    isUuid: Mg,
    catPatternRowPayload: Dg,
    patternFromServerPatternJson: uA,
    sanitizePattern: jg,
    customPresetPatternMatchKey: gA,
    localCustomPresetMatchKey: mA,
    serverCustomPresetMatchKey: yA,
    presetLocalToRow: pA,
    presetRowToLocal: fA,
    getCatName: () => nr,
    setCatName: (...t) => Em(...t),
    getUserName: () => sr,
    setUserName: (...t) => Tm(...t),
    getFixedMessage: () => Cr,
    setFixedMessage: (...t) => Cm(...t),
    getShowCatName: () => Tr,
    setShowCatName: (...t) => Al(...t),
    getTaskCompleteSoundVolume: () => Pr,
    setTaskCompleteSoundVolume: (...t) => Pm(...t),
    getSoundMuted: () => Rr,
    setSoundMuted: (...t) => El(...t),
    getAllowAnalysis: () => Or,
    setAllowAnalysis: (...t) => Tl(...t),
    getPomodoroFocusMin: () => Wt,
    setPomodoroFocusMinRaw: (t) => {
      Wt = t;
    },
    getPomodoroRestSec: () => or,
    setPomodoroRestSecRaw: (t) => {
      or = t;
    },
    broadcastPomodoroState: () => hl(),
    getReminders: () => qs,
    setReminders: (t) => {
      qs = t;
    },
    saveReminders: (...t) => pE(...t),
    broadcastReminders: () => ul(),
    reminderRowToLocal: JA,
    reminderLocalToRow: YA,
    resetAccountSyncedLocalData: Qg,
  }),
  {
    loadSettings: dE,
    loadLocalUiState: FR,
    saveLocalUiState: hE,
    saveSettings: cn,
  } = Mk({
    fs: Ir,
    settingsPath: al,
    localUiStatePath: HA,
    readJsonFile: di,
    writeJsonFile: hi,
    normalizeStretchIntervalForBuild: ol,
    normalizeDrinkIntervalForBuild: il,
    normalizeLanguage: rl,
    normalizeSoundVolume: Jg,
    normalizePetSize: Gg,
    normalizePetPosition: WA,
    normalizePetPeekEdge: Xg,
    normalizeDateKey: Yg,
    markSyncDirty: _i,
    loadReminderStore: () => fE(),
    getSettingsSnapshot: () => ({
      defaultSoundVolume: Xc,
      stretchIntervalMin: Er,
      drinkIntervalMin: Qr,
      peekStretchEnabled: Zn,
      peekDrinkEnabled: es,
      currentLanguage: Ht,
      catName: nr,
      userName: sr,
      showCatName: Tr,
      fixedMessage: Cr,
      showReminderButtonOutside: Bs,
      catNamePromptShown: Vs,
      taskCompleteSoundVolume: Pr,
      soundMuted: Rr,
      launchAtLogin: Ks,
      allowAnalysis: Or,
      agentMonitoringOverrides: zs,
      currentPetSize: Vt,
      currentPetPosition: Zr,
      petPeekState: bt,
      pomodoroFocusMin: Wt,
      pomodoroRestSec: or,
    }),
    applySettingsData: (t) => {
      (Object.prototype.hasOwnProperty.call(t, "stretchIntervalMin") &&
        (Er = t.stretchIntervalMin),
        Object.prototype.hasOwnProperty.call(t, "drinkIntervalMin") &&
          (Qr = t.drinkIntervalMin),
        Object.prototype.hasOwnProperty.call(t, "peekStretchEnabled") &&
          (Zn = t.peekStretchEnabled),
        Object.prototype.hasOwnProperty.call(t, "peekDrinkEnabled") &&
          (es = t.peekDrinkEnabled),
        Object.prototype.hasOwnProperty.call(t, "currentLanguage") &&
          (Ht = t.currentLanguage),
        Object.prototype.hasOwnProperty.call(t, "catName") && (nr = t.catName),
        Object.prototype.hasOwnProperty.call(t, "userName") &&
          (sr = t.userName),
        Object.prototype.hasOwnProperty.call(t, "showCatName") &&
          (Tr = t.showCatName),
        Object.prototype.hasOwnProperty.call(t, "fixedMessage") &&
          (Cr = t.fixedMessage),
        Object.prototype.hasOwnProperty.call(t, "showReminderButtonOutside") &&
          (Bs = t.showReminderButtonOutside),
        Object.prototype.hasOwnProperty.call(t, "catNamePromptShown") &&
          (Vs = t.catNamePromptShown),
        Object.prototype.hasOwnProperty.call(t, "taskCompleteSoundVolume") &&
          (Pr = t.taskCompleteSoundVolume),
        Object.prototype.hasOwnProperty.call(t, "soundMuted") &&
          (Rr = t.soundMuted),
        Object.prototype.hasOwnProperty.call(t, "launchAtLogin") &&
          (Ks = t.launchAtLogin),
        Object.prototype.hasOwnProperty.call(t, "allowAnalysis") &&
          (Or = t.allowAnalysis),
        Object.prototype.hasOwnProperty.call(t, "agentMonitoringOverrides") &&
          (zs = t.agentMonitoringOverrides),
        Object.prototype.hasOwnProperty.call(t, "currentPetSize") &&
          (Vt = t.currentPetSize),
        Object.prototype.hasOwnProperty.call(t, "currentPetPosition") &&
          (Zr = t.currentPetPosition),
        Object.prototype.hasOwnProperty.call(t, "petPeekState") &&
          (bt = t.petPeekState),
        Object.prototype.hasOwnProperty.call(t, "pomodoroFocusMin") &&
          (Wt = t.pomodoroFocusMin),
        Object.prototype.hasOwnProperty.call(t, "pomodoroRestSec") &&
          (or = t.pomodoroRestSec),
        Object.prototype.hasOwnProperty.call(t, "pomodoroRemainingSec") &&
          (ts = t.pomodoroRemainingSec));
    },
    getLocalUiState: () => ({ accountNudgeDismissedDate: li }),
    applyLocalUiState: (t) => {
      Object.prototype.hasOwnProperty.call(t, "accountNudgeDismissedDate") &&
        (li = t.accountNudgeDismissedDate);
    },
  }),
  {
    loadReminderStore: fE,
    saveReminders: pE,
    reminderList: gE,
    broadcastReminders: ul,
    broadcastReminderSettings: tm,
    setShowReminderButtonOutside: mE,
    addReminder: yE,
    updateReminder: _E,
    deleteReminder: vE,
    setReminderEnabled: wE,
    checkRemindersNow: qR,
    startReminderTimer: bE,
    stopReminderTimer: rm,
  } = Uk({
    settingsPath: al,
    remindersPath: zg,
    sanitizeReminder: GA,
    todayKey: zA,
    reminderAppliesToday: XA,
    formatReminderSpeech: QA,
    nextLocalMutationTimestamp: ll,
    markSyncDirty: _i,
    saveSettings: cn,
    captureAnalytics: an,
    reminderAnalyticsProperties: EA,
    getReminders: () => qs,
    setReminders: (t) => {
      qs = t;
    },
    getShowReminderButtonOutside: () => Bs,
    setShowReminderButtonOutsideValue: (t) => {
      Bs = t;
    },
    sendToPet: sl,
  }),
  {
    cancelCoveringMotion: nm,
    triggerStretchSequence: vi,
    triggerDrinkSequence: dl,
    triggerPomodoroFocusStartSequence: SE,
    triggerJumpSequence: kE,
  } = Pk({
    screen: Gs,
    getPetPeekState: () => bt,
    getPetWindow: () => Re,
    boundsWithConstrainedPetPosition: (...t) => xm(...t),
    setCurrentPetPosition: (t) => {
      Zr = t;
    },
    saveSettings: cn,
    broadcastPetSize: (...t) => kl(...t),
    getPeekStretchEnabled: () => Zn,
    getPeekDrinkEnabled: () => es,
    unpeekPet: (...t) => Pl(...t),
    peekPet: (...t) => Rl(...t),
  }),
  {
    attachDevToolsShortcut: sm,
    attachWindowDiagnostics: om,
    toggleDevToolsForWindow: AE,
  } = Hk({
    app: me,
    logError: Us,
    logWarn: Ze,
    isEscapeKeyInput: Ck,
    cancelCoveringMotion: nm,
  }),
  {
    pomodoroPhaseDurationSec: im,
    pomodoroState: EE,
    broadcastPomodoroState: hl,
    stopPomodoroTimer: fl,
    startPomodoroTimer: BR,
    startPomodoro: pl,
    pausePomodoro: gl,
    resetPomodoro: ml,
    setPomodoroFocusMin: yl,
    setPomodoroRestSec: _l,
  } = $k({
    getFocusMin: () => Wt,
    setFocusMinValue: (t) => {
      Wt = t;
    },
    getRestSec: () => or,
    setRestSecValue: (t) => {
      or = t;
    },
    getMode: () => Hs,
    setMode: (t) => {
      Hs = t;
    },
    getRunning: () => Ws,
    setRunning: (t) => {
      Ws = t;
    },
    getVisible: () => zc,
    setVisible: (t) => {
      zc = t;
    },
    getRemainingSec: () => ts,
    setRemainingSec: (t) => {
      ts = t;
    },
    saveSettings: cn,
    refreshAppTrayMenu: (...t) => ir(...t),
    sendToPet: sl,
    sendPomodoroComplete: (t) => {
      !bt &&
        Re &&
        !Re.isDestroyed() &&
        Re.webContents.send("pomodoro-complete", t);
    },
    triggerStretchSequence: vi,
    triggerPomodoroFocusStartSequence: SE,
    captureAnalytics: an,
    remainingSecBucketForAnalytics: AA,
  }),
  {
    registerGlobalShortcuts: TE,
    startKeyHook: CE,
    stopKeyHook: am,
  } = Tk({
    isMac: rs,
    appIconPath: wt,
    globalShortcut: Rg,
    shell: Og,
    systemPreferences: ck,
    dialog: Js,
    nativeImage: rn,
    logInfo: It,
    logWarn: Ze,
    t: St,
    releaseBuildExcludesDevOptions: gi,
    triggerJumpSequence: kE,
    cancelCoveringMotion: nm,
    getPetWindow: () => Re,
  }),
  {
    loadLicense: wi,
    removeLicense: PE,
    licenseRecoveryReasonFromMessage: RE,
    licenseActivatePayload: OE,
    activateLicenseKey: IE,
    validateSavedLicense: xE,
  } = pk({ app: me, isMac: rs, isWindows: on, logWarn: Ze, t: St }),
  {
    keepWindowOnTop: cm,
    reinforcePetWindowOnTop: lm,
    startPetOnTopReinforcement: NE,
    stopPetOnTopReinforcement: um,
  } = Xk({ isMac: rs, isWindows: on, getPetWindow: () => Re }),
  {
    applyFullscreenOverlayMode: LE,
    firstDockVisibleWindow: jE,
    updateDockVisibility: vl,
  } = Wk({
    app: me,
    fs: Ir,
    nativeImage: rn,
    isMac: rs,
    appIconPath: wt,
    appDisplayName: pi,
    logWarn: Ze,
    reinforcePetWindowOnTop: lm,
    getLicenseWindow: () => Ar,
    getPatternWindow: () => Bt,
    getMappingWindow: () => $s,
  }),
  { createLicenseWindow: Ys } = Vk({
    app: me,
    BrowserWindow: en,
    runtimePath: sn,
    preloadPath: nn.join(__dirname, "preload.js"),
    appIconPath: wt,
    t: St,
    updateDockVisibility: vl,
    attachWindowDiagnostics: om,
    attachDevToolsShortcut: sm,
    getLicenseWindow: () => Ar,
    setLicenseWindow: (t) => {
      Ar = t;
    },
    getPetWindow: () => Re,
  }),
  { openPatternEditor: wl } = Kk({
    BrowserWindow: en,
    runtimePath: sn,
    preloadPath: nn.join(__dirname, "preload.js"),
    appIconPath: wt,
    t: St,
    updateDockVisibility: vl,
    getPatternWindow: () => Bt,
    setPatternWindow: (t) => {
      Bt = t;
    },
    broadcastPattern: () => Xs(),
  }),
  { openMappingEditor: dm } = zk({
    BrowserWindow: en,
    projectPath: Ok,
    preloadPath: nn.join(__dirname, "preload.js"),
    appIconPath: wt,
    t: St,
    updateDockVisibility: vl,
    getMappingWindow: () => $s,
    setMappingWindow: (t) => {
      $s = t;
    },
  }),
  {
    buildAppMenu: hm,
    buildSettingsMenuTemplate: ME,
    buildSizeMenuTemplate: DE,
    buildSoundMenuTemplate: UE,
    buildStretchIntervalMenu: $E,
    buildDrinkIntervalMenu: FE,
    createAppTray: qE,
    destroyAppTray: BE,
    refreshAppTrayMenu: ir,
    shouldShowAccountLinkCta: HE,
  } = rA({
    app: me,
    BrowserWindow: en,
    Menu: Pg,
    Tray: ik,
    fs: Ir,
    nativeImage: rn,
    isMac: rs,
    isWindows: on,
    appIconPath: wt,
    trayTemplateIconPath: TA,
    t: St,
    appDisplayName: pi,
    releaseBuildExcludesDevOptions: gi,
    getStretchIntervalMin: () => Er,
    releaseExcludedStretchIntervalMin: Ig,
    setStretchInterval: (...t) => wT(...t),
    getDrinkIntervalMin: () => Qr,
    releaseExcludedDrinkIntervalMin: Ng,
    setDrinkInterval: (...t) => bT(...t),
    triggerDrinkSequence: dl,
    getPeekStretchEnabled: () => Zn,
    setPeekStretchEnabled: (...t) => ST(...t),
    getPeekDrinkEnabled: () => es,
    setPeekDrinkEnabled: (...t) => kT(...t),
    getPomodoroRunning: () => Ws,
    getPomodoroRemainingSec: () => ts,
    getPomodoroMode: () => Hs,
    pomodoroPhaseDurationSec: im,
    pausePomodoro: gl,
    startPomodoro: pl,
    resetPomodoro: ml,
    getPomodoroFocusMin: () => Wt,
    setPomodoroFocusMin: yl,
    getPomodoroRestSec: () => or,
    setPomodoroRestSec: _l,
    hasPetWindow: nl,
    sendToPet: sl,
    triggerStretchSequence: vi,
    getSoundMuted: () => Rr,
    setSoundMuted: (...t) => El(...t),
    getTaskCompleteSoundVolume: () => Pr,
    soundLevelForVolume: KA,
    setSoundVolumeLevel: (...t) => CT(...t),
    getPetSizeOptions: () => PT,
    getCurrentPetSize: () => Vt,
    setPetSize: (...t) => zT(...t),
    resizePetBy: (...t) => KT(...t),
    resetPetSize: (...t) => GT(...t),
    getPetPeekState: () => bt,
    peekPet: (...t) => Rl(...t),
    unpeekPet: (...t) => Pl(...t),
    getCurrentLanguage: () => Ht,
    setLanguage: (...t) => bm(...t),
    accountManager: Yr,
    loadLicense: wi,
    checkForUpdatesNow: (...t) => bl(...t),
    getLaunchAtLogin: () => Ks,
    setLaunchAtLogin: (...t) => vT(...t),
    getAllowAnalysis: () => Or,
    setAllowAnalysis: (...t) => Tl(...t),
    getAgentMonitoringEnabled: (...t) => el(...t),
    setAgentMonitoringOverride: (...t) => Rm(...t),
    signOutCurrentAccount: (...t) => fm(...t),
    syncNow: em,
    getAppNetworkOnline: () => tl,
    unlinkCurrentAccountLicense: (...t) => pm(...t),
    logWarn: Ze,
    movePetToCenter: (...t) => JT(...t),
    openPatternEditor: wl,
    toggleDevToolsForWindow: AE,
    getPetWindow: () => Re,
    getLicenseWindow: () => Ar,
  }),
  {
    oauthRedirectUrlForApp: WE,
    deepLinkSchemeFromUrl: VE,
    oauthCallbackLogFields: KE,
    isOAuthCallbackUrl: zE,
    extractDeepLinkUrl: GE,
    dispatchDeepLink: JE,
    markDeepLinksReady: YE,
    registerDeepLinkProtocol: XE,
    startOAuthCallbackServer: QE,
    closeOAuthCallbackServer: ZE,
  } = mk({
    app: me,
    logInfo: It,
    logWarn: Ze,
    appDisplayName: pi,
    t: St,
    escapeHtml: $A,
    normalizeLanguage: rl,
    getCurrentLanguage: () => Ht,
    handleDeepLinkUrl: (...t) => rT(...t),
  }),
  {
    completeAccountLicenseLink: eT,
    getUiAccountState: tT,
    handleDeepLinkUrl: rT,
    signOutCurrentAccount: fm,
    unlinkCurrentAccountLicense: pm,
  } = gk({
    accountManager: Yr,
    loadLicense: wi,
    removeLicense: PE,
    loadSyncState: mi,
    saveSyncState: cl,
    clearSyncPolling: yi,
    resetSyncFailureCount: Zg,
    resetAccountSyncedLocalData: Qg,
    downloadAccountDataToLocal: nE,
    uploadLocalDataToAccount: uE,
    refreshAppTrayMenu: ir,
    startLicensedApp: (...t) => Ol(...t),
    returnToLicenseWindow: (...t) => jm(...t),
    dialog: Js,
    nativeImage: rn,
    fs: Ir,
    appIconPath: wt,
    t: St,
    logInfo: It,
    logWarn: Ze,
    isOAuthCallbackUrl: zE,
    oauthCallbackLogFields: KE,
    getLicenseWindow: () => Ar,
    getPetWindow: () => Re,
  }),
  {
    setupAutoUpdater: nT,
    checkForUpdatesNow: bl,
    downloadUpdate: sT,
    installDownloadedUpdate: oT,
  } = _k({
    app: me,
    sendUpdateState: BA,
    checkAppAccessValidityNow: (...t) => Mm(...t),
  }),
  { registerDeepLinkEntryPoints: iT, requestSingleInstanceLock: aT } = wk({
    app: me,
    isSmokeTest: Kc,
    isAgentHookCli: qg,
    logInfo: It,
    logWarn: Ze,
    extractDeepLinkUrl: GE,
    dispatchDeepLink: JE,
    deepLinkSchemeFromUrl: VE,
    getLicenseWindow: () => Ar,
    getPetWindow: () => Re,
  }),
  gm = aT();
gm && iT();
var Xr = Lg(),
  {
    legacyPresetOfficialNames: cT,
    fallbackPatternPresetId: mm,
    patternPath: lT,
    customPatternPresetsPath: uT,
    selectedCatPatternId: dT,
    loadBuiltinPatternPresets: hT,
    loadBuiltinPatternPresetById: fT,
    loadAllCustomPatternPresets: ym,
    loadCustomPatternPresets: pT,
    saveCustomPatternPresets: _m,
    customPatternPresetPayload: gT,
    loadPattern: mT,
    savePattern: vm,
    broadcastPattern: Xs,
    applyFallbackPatternPreset: yT,
  } = qk({
    app: me,
    fs: Ir,
    runtimePath: sn,
    readJsonFile: di,
    writeJsonFile: hi,
    loadSyncState: mi,
    markSyncDirty: _i,
    getCurrentPattern: () => Xr,
    setCurrentPattern: (t) => {
      Xr = t;
    },
    sendPatternChanged: (t) => {
      Re && !Re.isDestroyed() && Re.webContents.send("pattern-changed", t);
    },
    sendPatternPresetsChanged: () => {
      Bt && !Bt.isDestroyed() && Bt.webContents.send("pattern-presets-changed");
    },
  }),
  Er = Yc,
  Qn = null,
  Qr = xg,
  Fs = null,
  Zn = !1,
  es = !1,
  qs = [],
  nr = "Shanks",
  sr = "",
  Tr = !0,
  Cr = "",
  Bs = !0,
  Wt = 25,
  or = 300,
  Hs = "focus",
  Ws = !1,
  zc = !1,
  ts = Wt * 60,
  Vs = !1,
  Pr = Xc,
  Rr = !1,
  Ks = !1,
  Or = !0,
  zs = {},
  li = "",
  {
    applyLaunchAtLoginSetting: _T,
    startStretchTimer: Sl,
    startDrinkTimer: wm,
    setLaunchAtLogin: vT,
    setStretchInterval: wT,
    setDrinkInterval: bT,
    setPeekStretchEnabled: ST,
    setPeekDrinkEnabled: kT,
    setLanguage: bm,
    broadcastCatNameSettings: Sm,
    broadcastUserNameSettings: km,
    broadcastPetSize: kl,
    broadcastFixedMessageSettings: Am,
    setCatName: Em,
    setUserName: Tm,
    setShowCatName: Al,
    setFixedMessage: Cm,
    markCatNamePromptShown: AT,
    broadcastTaskCompleteSoundVolume: ET,
    broadcastSoundMuted: TT,
    setTaskCompleteSoundVolume: Pm,
    setSoundVolumeLevel: CT,
    setSoundMuted: El,
    setAllowAnalysis: Tl,
    setAgentMonitoringOverride: Rm,
  } = jk({
    app: me,
    isWindows: on,
    logWarn: Ze,
    t: St,
    normalizeLanguage: rl,
    normalizeSoundVolume: Jg,
    normalizeStretchIntervalForBuild: ol,
    normalizeDrinkIntervalForBuild: il,
    soundVolumeForLevel: VA,
    saveSettings: cn,
    buildAppMenu: hm,
    refreshAppTrayMenu: ir,
    triggerStretchSequence: vi,
    getStretchTimer: () => Qn,
    setStretchTimer: (t) => {
      Qn = t;
    },
    getStretchIntervalMin: () => Er,
    setStretchIntervalMin: (t) => {
      Er = t;
    },
    triggerDrinkSequence: dl,
    getDrinkTimer: () => Fs,
    setDrinkTimer: (t) => {
      Fs = t;
    },
    getDrinkIntervalMin: () => Qr,
    setDrinkIntervalMin: (t) => {
      Qr = t;
    },
    getPeekStretchEnabled: () => Zn,
    setPeekStretchEnabledValue: (t) => {
      Zn = t;
    },
    getPeekDrinkEnabled: () => es,
    setPeekDrinkEnabledValue: (t) => {
      es = t;
    },
    getCurrentLanguage: () => Ht,
    setCurrentLanguage: (t) => {
      Ht = t;
    },
    getCatName: () => nr,
    setCatNameValue: (t) => {
      nr = t;
    },
    getUserName: () => sr,
    setUserNameValue: (t) => {
      sr = t;
    },
    getShowCatName: () => Tr,
    setShowCatNameValue: (t) => {
      Tr = t;
    },
    getFixedMessage: () => Cr,
    setFixedMessageValue: (t) => {
      Cr = t;
    },
    getCatNamePromptShown: () => Vs,
    setCatNamePromptShownValue: (t) => {
      Vs = t;
    },
    getTaskCompleteSoundVolume: () => Pr,
    setTaskCompleteSoundVolumeValue: (t) => {
      Pr = t;
    },
    getSoundMuted: () => Rr,
    setSoundMutedValue: (t) => {
      Rr = t;
    },
    getLaunchAtLogin: () => Ks,
    setLaunchAtLoginValue: (t) => {
      Ks = t;
    },
    getAllowAnalysis: () => Or,
    setAllowAnalysisValue: (t) => {
      Or = t;
    },
    setAgentMonitoringOverrideValue: (t, e) => {
      zs = { ...zs, [t]: e };
    },
    getAgentMonitoringEnabled: el,
    applyAgentMonitoringState: IA,
    getCurrentPetSize: () => Vt,
    getPetWindow: () => Re,
    getLicenseWindow: () => Ar,
    getPatternWindow: () => Bt,
    getMappingWindow: () => $s,
  }),
  PT = [60, 80, 100, 120, 140, 160, 200, 240],
  RT = 280,
  OT = 80,
  Om = 80,
  IT = 0.32,
  xT = 0.08,
  NT = 0.32,
  LT = 2.5,
  jT = 4.5,
  Gc = 0,
  Vt = fi,
  Zr = null,
  Jc = !1,
  bt = null,
  {
    boundsForPetPeek: Im,
    boundsWithConstrainedPetPosition: xm,
    constrainPetPosition: MT,
    constrainPetVisualInsideWorkArea: Nm,
    defaultPetPosition: DT,
    displayForPetDropBounds: UT,
    petCursorFocusPoint: $T,
    petPeekEdgeForBounds: FT,
    petVisualRectForBounds: HR,
    windowDims: Cl,
  } = Yk({
    screen: Gs,
    defaultSize: fi,
    stretchRatio: LT,
    dragStretchRatio: jT,
    minWindowWidth: RT,
    minVisiblePetWindowPx: OT,
    petTopPx: Om,
    petPeekVisibleRatio: IT,
    petPeekFaceSliceStartRatio: xT,
    petPeekFaceCenterYRatio: NT,
    getCurrentPetSize: () => Vt,
    getPetWindowExpandedForDrag: () => Jc,
    getPetPeekState: () => bt,
  }),
  {
    hideShareCaptureOverlay: qT,
    registerShareCaptureIpc: BT,
    updateShareCaptureForPetBounds: Lm,
  } = Zk({
    app: me,
    BrowserWindow: en,
    desktopCapturer: ak,
    dialog: Js,
    nativeImage: rn,
    ipcMain: tn,
    fs: Ir,
    os: uk,
    path: nn,
    spawn: hk,
    screen: Gs,
    ffmpegPath: qA,
    appIconPath: wt,
    cropGuardXPx: LA,
    cropGuardTopPx: jA,
    cropGuardBottomPx: MA,
    getPetWindow: () => Re,
    getCurrentPetSize: () => Vt,
    keepWindowOnTop: cm,
    captureAnalytics: an,
    t: St,
  });
BT();
var { createPetWindow: HT } = Gk({
    BrowserWindow: en,
    screen: Gs,
    runtimePath: sn,
    preloadPath: nn.join(__dirname, "preload.js"),
    appIconPath: wt,
    windowDims: Cl,
    defaultPetPosition: DT,
    constrainPetPosition: MT,
    petCursorFocusPoint: $T,
    getPetWindow: () => Re,
    setPetWindow: (t) => {
      Re = t;
    },
    getCurrentPetSize: () => Vt,
    getCurrentPetPosition: () => Zr,
    setCurrentPetPosition: (t) => {
      Zr = t;
    },
    getPetPeekState: () => bt,
    getCatNamePromptShown: () => Vs,
    getCatName: () => nr,
    attachWindowDiagnostics: om,
    attachDevToolsShortcut: sm,
    keepWindowOnTop: cm,
    startPetOnTopReinforcement: NE,
    stopPetOnTopReinforcement: um,
    broadcastPattern: Xs,
    broadcastCatNameSettings: Sm,
    broadcastUserNameSettings: km,
    broadcastPetSize: kl,
    broadcastFixedMessageSettings: Am,
    broadcastPomodoroState: hl,
    broadcastTaskCompleteSoundVolume: ET,
    broadcastSoundMuted: TT,
    broadcastReminders: ul,
    broadcastReminderSettings: tm,
    refreshAppTrayMenu: ir,
  }),
  {
    clearPetPeekState: WR,
    setPetPeekState: WT,
    unpeekPet: Pl,
    peekPet: Rl,
    ensurePetWindowVisible: VT,
    resizePetBy: KT,
    setPetSize: zT,
    resetPetSize: GT,
    movePetToCenter: JT,
    setPetWindowExpandedForDrag: YT,
  } = Jk({
    screen: Gs,
    defaultPetSize: fi,
    petTopPx: Om,
    normalizePetSize: Gg,
    normalizePetPeekEdge: Xg,
    getPetWindow: () => Re,
    getLastPetDragAt: () => Gc,
    getCurrentPetSize: () => Vt,
    setCurrentPetSize: (t) => {
      Vt = t;
    },
    getPetWindowExpandedForDrag: () => Jc,
    setPetWindowExpandedForDragValue: (t) => {
      Jc = t;
    },
    getPetPeekState: () => bt,
    setPetPeekStateValue: (t) => {
      bt = t;
    },
    setCurrentPetPosition: (t) => {
      Zr = t;
    },
    windowDims: Cl,
    boundsForPetPeek: Im,
    boundsWithConstrainedPetPosition: xm,
    constrainPetVisualInsideWorkArea: Nm,
    displayForPetDropBounds: UT,
    saveSettings: cn,
    broadcastPetSize: kl,
    refreshAppTrayMenu: ir,
    updateShareCaptureForPetBounds: Lm,
    captureAnalytics: an,
    reinforcePetWindowOnTop: lm,
  }),
  {
    clearStretchTimer: XT,
    registerWakeSyncHandler: QT,
    returnToLicenseWindow: jm,
    startLicensedApp: Ol,
  } = vk({
    createPetWindow: HT,
    refreshAppTrayMenu: ir,
    startKeyHook: CE,
    stopKeyHook: am,
    startAgentIntegrations: OA,
    stopAgentIntegrations: Kg,
    startStretchTimer: Sl,
    getStretchTimer: () => Qn,
    setStretchTimer: (t) => {
      Qn = t;
    },
    startDrinkTimer: wm,
    getDrinkTimer: () => Fs,
    setDrinkTimer: (t) => {
      Fs = t;
    },
    startReminderTimer: bE,
    stopReminderTimer: rm,
    stopPomodoroTimer: fl,
    hideShareCaptureOverlay: qT,
    createLicenseWindow: Ys,
    powerMonitor: lk,
    wakeSyncMinIntervalMs: UA,
    logWarn: Ze,
    syncNow: em,
    clearSyncPolling: yi,
    getLicenseWindow: () => Ar,
    getPatternWindow: () => Bt,
    getMappingWindow: () => $s,
    getPetWindow: () => Re,
  }),
  { checkAppAccessValidityNow: Mm, resolveStartupAndLaunch: Cg } = {
    checkAppAccessValidityNow: async () => {},
    resolveStartupAndLaunch: Ol,
  };
nA({
  ipcMain: tn,
  dialog: Js,
  nativeImage: rn,
  path: nn,
  fs: Ir,
  vm: dk,
  runtimePath: sn,
  getPatternWindow: () => Bt,
  getPetWindow: () => Re,
  getCurrentPattern: () => Xr,
  setCurrentPattern: (t) => {
    Xr = t;
  },
  loadCustomPatternPresets: pT,
  loadBuiltinPatternPresets: hT,
  loadAllCustomPatternPresets: ym,
  saveCustomPatternPresets: _m,
  customPatternPresetPayload: gT,
  customPatternPresetExportName: lA,
  sanitizePattern: jg,
  uniqueCustomPatternPresetName: dA,
  normalizeImportedCustomPresets: hA,
  nextLocalMutationTimestamp: ll,
  markPresetSyncPending: oE,
  markPresetSyncPendingIds: iE,
  markSyncDirty: _i,
  scheduleBackgroundSync: lE,
  loadSyncState: mi,
  savePattern: vm,
  broadcastPattern: Xs,
  applyFallbackPatternPreset: yT,
  fallbackPatternPresetId: mm,
  isUuid: Mg,
  catPatternRowPayload: Dg,
  getAccountSupabaseContext: sE,
  readJsonFile: di,
  writeJsonFile: hi,
  openPatternEditor: wl,
  openMappingEditor: dm,
  t: St,
  appIconPath: wt,
  logWarn: Ze,
  captureAnalytics: an,
  presetTypeForAnalytics: kA,
});
sA({
  ipcMain: tn,
  shell: Og,
  accountManager: Yr,
  logWarn: Ze,
  getUiAccountState: tT,
  signOutCurrentAccount: fm,
  unlinkCurrentAccountLicense: pm,
  completeAccountLicenseLink: eT,
  loadLicense: wi,
  createLicenseWindow: Ys,
  getAccountNudgeDismissedDate: () => li,
  setAccountNudgeDismissedDate: (t) => {
    li = t;
  },
  normalizeDateKey: Yg,
  saveLocalUiState: hE,
  activateLicenseKey: IE,
  startLicensedApp: Ol,
  licenseRecoveryReasonFromMessage: RE,
  landingPageUrl: xA,
  licenseResetPageUrl: NA,
});
oA({
  ipcMain: tn,
  analytics: ui,
  logInfo: It,
  getCurrentLanguage: () => Ht,
  setLanguage: bm,
  getUserName: () => sr,
  setUserName: Tm,
  getCatName: () => nr,
  getShowCatName: () => Tr,
  setCatName: Em,
  setShowCatName: Al,
  getFixedMessage: () => Cr,
  setFixedMessage: Cm,
  markCatNamePromptShown: AT,
  getTaskCompleteSoundVolume: () => Pr,
  setTaskCompleteSoundVolume: Pm,
  getSoundMuted: () => Rr,
  setSoundMuted: El,
  getAllowAnalysis: () => Or,
  setAllowAnalysis: Tl,
  getAgentMonitoringEnabled: el,
  setAgentMonitoringOverride: Rm,
  setAppNetworkOnline: (t) => {
    tl = t;
  },
  resetSyncFailureCount: Zg,
  retryBackgroundSyncNow: aE,
  clearSyncPolling: yi,
  refreshAppTrayMenu: ir,
});
iA({
  ipcMain: tn,
  reminderList: gE,
  addReminder: yE,
  updateReminder: _E,
  deleteReminder: vE,
  setReminderEnabled: wE,
  pomodoroState: EE,
  startPomodoro: pl,
  pausePomodoro: gl,
  resetPomodoro: ml,
  setPomodoroFocusMin: yl,
  setPomodoroRestSec: _l,
});
cA({
  ipcMain: tn,
  checkForUpdatesNow: bl,
  downloadUpdate: sT,
  installDownloadedUpdate: oT,
});
var { scheduleRegularChecks: ZT, stopRegularChecks: eC } = bk({
  regularCheckIntervalMs: DA,
  checkAppAccessValidityNow: Mm,
  checkForUpdatesNow: bl,
});
aA({
  ipcMain: tn,
  Menu: Pg,
  t: St,
  releaseBuildExcludesDevOptions: gi,
  getPetWindow: () => Re,
  getLastPetDragAt: () => Gc,
  setLastPetDragAt: (t) => {
    Gc = t;
  },
  getCurrentPetSize: () => Vt,
  setCurrentPetPosition: (t) => {
    Zr = t;
  },
  windowDims: Cl,
  petPeekEdgeForBounds: FT,
  boundsForPetPeek: Im,
  constrainPetVisualInsideWorkArea: Nm,
  setPetPeekState: WT,
  updateShareCaptureForPetBounds: Lm,
  saveSettings: cn,
  unpeekPet: Pl,
  peekPet: Rl,
  ensurePetWindowVisible: VT,
  getPetPeekState: () => bt,
  setPetWindowExpandedForDrag: YT,
  shouldShowAccountLinkCta: HE,
  createLicenseWindow: Ys,
  getFixedMessage: () => Cr,
  getShowReminderButtonOutside: () => Bs,
  setShowReminderButtonOutside: mE,
  getPomodoroRunning: () => Ws,
  getPomodoroRemainingSec: () => ts,
  getPomodoroMode: () => Hs,
  pomodoroPhaseDurationSec: im,
  pausePomodoro: gl,
  startPomodoro: pl,
  resetPomodoro: ml,
  getPomodoroFocusMin: () => Wt,
  setPomodoroFocusMin: yl,
  getPomodoroRestSec: () => or,
  setPomodoroRestSec: _l,
  triggerStretchSequence: vi,
  buildStretchIntervalMenu: $E,
  triggerDrinkSequence: dl,
  buildDrinkIntervalMenu: FE,
  getUserName: () => sr,
  getCatName: () => nr,
  getShowCatName: () => Tr,
  setShowCatName: Al,
  openPatternEditor: wl,
  openMappingEditor: dm,
  buildSoundMenuTemplate: UE,
  buildSizeMenuTemplate: DE,
  buildSettingsMenuTemplate: ME,
});
me.whenReady().then(async () => {
  try {
    if (!gm) return;
    if (
      (It("[Shanks] starting", {
        version: me.getVersion(),
        platform: process.platform,
        arch: process.arch,
        electron: process.versions.electron,
        node: process.versions.node,
        logPath: bA,
        smokeTest: Kc,
      }),
      Kc)
    ) {
      (It("[Shanks] smoke test passed"), me.quit());
      return;
    }
    (LE(),
      me.setName(pi()),
      XE(),
      me.dock && Ir.existsSync(wt) && me.dock.setIcon(rn.createFromPath(wt)),
      Yr.init({
        userDataPath: me.getPath("userData"),
        log: { info: It, warn: Ze, error: Us },
        oauthRedirectUrl: WE(),
      }),
      ui.init({
        app: me,
        accountManager: Yr,
        getAllowAnalysis: () => Or,
        log: { info: It, warn: Ze, error: Us },
      }),
      QE(),
      (Ht = FA()),
      dE(),
      an("app_opened"),
      _T(),
      mT(),
      hm(),
      qE(),
      TE(),
      QT(),
      nT(),
      await Ol(),
      YE(),
      me.on("activate", () => {
        let t = jE();
        if (t) {
          (t.isMinimized() && t.restore(), t.focus());
          return;
        }
        en.getAllWindows().length > 0 ||
          Ol().catch((e) => {
            (Us("[Shanks] failed to activate window:", e),
              Ys(e && e.message ? e.message : ""));
          });
      }),
      ZT());
  } catch (t) {
    Us("[Shanks] startup failed:", t);
    try {
      Js.showErrorBox(
        "Shanks failed to start",
        t && t.message ? t.message : String(t || "Unknown error"),
      );
    } catch {}
  }
});
me.on("will-quit", () => {
  (um(),
    am(),
    XT(),
    rm(),
    fl(),
    Kg(),
    yi(),
    eC(),
    ZE(),
    BE(),
    ui.shutdown().catch(() => {}),
    Rg.unregisterAll());
});
me.on("window-all-closed", () => {
  rs || me.quit();
});
