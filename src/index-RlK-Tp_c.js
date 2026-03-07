var tg = t => {
    throw TypeError(t)
};
var Vc = (t, e, r) => e.has(t) || tg("Cannot " + r);
var P = (t, e, r) => (Vc(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
    ue = (t, e, r) => e.has(t) ? tg("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r),
    X = (t, e, r, i) => (Vc(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r),
    be = (t, e, r) => (Vc(t, e, "access private method"), r);
var Ka = (t, e, r, i) => ({
    set _(a) {
        X(t, e, a, r)
    },
    get _() {
        return P(t, e, i)
    }
});

function rb(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const l = Object.getOwnPropertyDescriptor(i, a);
                    l && Object.defineProperty(t, a, l.get ? l : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const c of l.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity), a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const l = r(a);
        fetch(a.href, l)
    }
})();

function Gv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Bc = {
        exports: {}
    },
    Yi = {},
    Uc = {
        exports: {}
    },
    Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;

function sb() {
    if (ng) return Se;
    ng = 1;
    var t = Symbol.for("react.element"),
        e = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        y = Symbol.iterator;

    function w(A) {
        return A === null || typeof A != "object" ? null : (A = y && A[y] || A["@@iterator"], typeof A == "function" ? A : null)
    }
    var E = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        S = Object.assign,
        b = {};

    function x(A, z, ge) {
        this.props = A, this.context = z, this.refs = b, this.updater = ge || E
    }
    x.prototype.isReactComponent = {}, x.prototype.setState = function(A, z) {
        if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, z, "setState")
    }, x.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    };

    function R() {}
    R.prototype = x.prototype;

    function V(A, z, ge) {
        this.props = A, this.context = z, this.refs = b, this.updater = ge || E
    }
    var D = V.prototype = new R;
    D.constructor = V, S(D, x.prototype), D.isPureReactComponent = !0;
    var M = Array.isArray,
        B = Object.prototype.hasOwnProperty,
        K = {
            current: null
        },
        G = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function j(A, z, ge) {
        var ye, le = {},
            he = null,
            Ae = null;
        if (z != null)
            for (ye in z.ref !== void 0 && (Ae = z.ref), z.key !== void 0 && (he = "" + z.key), z) B.call(z, ye) && !G.hasOwnProperty(ye) && (le[ye] = z[ye]);
        var Te = arguments.length - 2;
        if (Te === 1) le.children = ge;
        else if (1 < Te) {
            for (var ve = Array(Te), pt = 0; pt < Te; pt++) ve[pt] = arguments[pt + 2];
            le.children = ve
        }
        if (A && A.defaultProps)
            for (ye in Te = A.defaultProps, Te) le[ye] === void 0 && (le[ye] = Te[ye]);
        return {
            $$typeof: t,
            type: A,
            key: he,
            ref: Ae,
            props: le,
            _owner: K.current
        }
    }

    function Z(A, z) {
        return {
            $$typeof: t,
            type: A.type,
            key: z,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }

    function fe(A) {
        return typeof A == "object" && A !== null && A.$$typeof === t
    }

    function _e(A) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(ge) {
            return z[ge]
        })
    }
    var Le = /\/+/g;

    function Me(A, z) {
        return typeof A == "object" && A !== null && A.key != null ? _e("" + A.key) : z.toString(36)
    }

    function Re(A, z, ge, ye, le) {
        var he = typeof A;
        (he === "undefined" || he === "boolean") && (A = null);
        var Ae = !1;
        if (A === null) Ae = !0;
        else switch (he) {
            case "string":
            case "number":
                Ae = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                    case t:
                    case e:
                        Ae = !0
                }
        }
        if (Ae) return Ae = A, le = le(Ae), A = ye === "" ? "." + Me(Ae, 0) : ye, M(le) ? (ge = "", A != null && (ge = A.replace(Le, "$&/") + "/"), Re(le, z, ge, "", function(pt) {
            return pt
        })) : le != null && (fe(le) && (le = Z(le, ge + (!le.key || Ae && Ae.key === le.key ? "" : ("" + le.key).replace(Le, "$&/") + "/") + A)), z.push(le)), 1;
        if (Ae = 0, ye = ye === "" ? "." : ye + ":", M(A))
            for (var Te = 0; Te < A.length; Te++) {
                he = A[Te];
                var ve = ye + Me(he, Te);
                Ae += Re(he, z, ge, ve, le)
            } else if (ve = w(A), typeof ve == "function")
                for (A = ve.call(A), Te = 0; !(he = A.next()).done;) he = he.value, ve = ye + Me(he, Te++), Ae += Re(he, z, ge, ve, le);
            else if (he === "object") throw z = String(A), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Ae
    }

    function je(A, z, ge) {
        if (A == null) return A;
        var ye = [],
            le = 0;
        return Re(A, ye, "", "", function(he) {
            return z.call(ge, he, le++)
        }), ye
    }

    function we(A) {
        if (A._status === -1) {
            var z = A._result;
            z = z(), z.then(function(ge) {
                (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ge)
            }, function(ge) {
                (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ge)
            }), A._status === -1 && (A._status = 0, A._result = z)
        }
        if (A._status === 1) return A._result.default;
        throw A._result
    }
    var de = {
            current: null
        },
        H = {
            transition: null
        },
        se = {
            ReactCurrentDispatcher: de,
            ReactCurrentBatchConfig: H,
            ReactCurrentOwner: K
        };

    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: je,
        forEach: function(A, z, ge) {
            je(A, function() {
                z.apply(this, arguments)
            }, ge)
        },
        count: function(A) {
            var z = 0;
            return je(A, function() {
                z++
            }), z
        },
        toArray: function(A) {
            return je(A, function(z) {
                return z
            }) || []
        },
        only: function(A) {
            if (!fe(A)) throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    }, Se.Component = x, Se.Fragment = r, Se.Profiler = a, Se.PureComponent = V, Se.StrictMode = i, Se.Suspense = h, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se, Se.act = U, Se.cloneElement = function(A, z, ge) {
        if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var ye = S({}, A.props),
            le = A.key,
            he = A.ref,
            Ae = A._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref, Ae = K.current), z.key !== void 0 && (le = "" + z.key), A.type && A.type.defaultProps) var Te = A.type.defaultProps;
            for (ve in z) B.call(z, ve) && !G.hasOwnProperty(ve) && (ye[ve] = z[ve] === void 0 && Te !== void 0 ? Te[ve] : z[ve])
        }
        var ve = arguments.length - 2;
        if (ve === 1) ye.children = ge;
        else if (1 < ve) {
            Te = Array(ve);
            for (var pt = 0; pt < ve; pt++) Te[pt] = arguments[pt + 2];
            ye.children = Te
        }
        return {
            $$typeof: t,
            type: A.type,
            key: le,
            ref: he,
            props: ye,
            _owner: Ae
        }
    }, Se.createContext = function(A) {
        return A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, A.Provider = {
            $$typeof: l,
            _context: A
        }, A.Consumer = A
    }, Se.createElement = j, Se.createFactory = function(A) {
        var z = j.bind(null, A);
        return z.type = A, z
    }, Se.createRef = function() {
        return {
            current: null
        }
    }, Se.forwardRef = function(A) {
        return {
            $$typeof: f,
            render: A
        }
    }, Se.isValidElement = fe, Se.lazy = function(A) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: we
        }
    }, Se.memo = function(A, z) {
        return {
            $$typeof: m,
            type: A,
            compare: z === void 0 ? null : z
        }
    }, Se.startTransition = function(A) {
        var z = H.transition;
        H.transition = {};
        try {
            A()
        } finally {
            H.transition = z
        }
    }, Se.unstable_act = U, Se.useCallback = function(A, z) {
        return de.current.useCallback(A, z)
    }, Se.useContext = function(A) {
        return de.current.useContext(A)
    }, Se.useDebugValue = function() {}, Se.useDeferredValue = function(A) {
        return de.current.useDeferredValue(A)
    }, Se.useEffect = function(A, z) {
        return de.current.useEffect(A, z)
    }, Se.useId = function() {
        return de.current.useId()
    }, Se.useImperativeHandle = function(A, z, ge) {
        return de.current.useImperativeHandle(A, z, ge)
    }, Se.useInsertionEffect = function(A, z) {
        return de.current.useInsertionEffect(A, z)
    }, Se.useLayoutEffect = function(A, z) {
        return de.current.useLayoutEffect(A, z)
    }, Se.useMemo = function(A, z) {
        return de.current.useMemo(A, z)
    }, Se.useReducer = function(A, z, ge) {
        return de.current.useReducer(A, z, ge)
    }, Se.useRef = function(A) {
        return de.current.useRef(A)
    }, Se.useState = function(A) {
        return de.current.useState(A)
    }, Se.useSyncExternalStore = function(A, z, ge) {
        return de.current.useSyncExternalStore(A, z, ge)
    }, Se.useTransition = function() {
        return de.current.useTransition()
    }, Se.version = "18.3.1", Se
}
var rg;

function lf() {
    return rg || (rg = 1, Uc.exports = sb()), Uc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sg;

function ib() {
    if (sg) return Yi;
    sg = 1;
    var t = lf(),
        e = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function c(f, h, m) {
        var g, y = {},
            w = null,
            E = null;
        m !== void 0 && (w = "" + m), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (E = h.ref);
        for (g in h) i.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
        if (f && f.defaultProps)
            for (g in h = f.defaultProps, h) y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: f,
            key: w,
            ref: E,
            props: y,
            _owner: a.current
        }
    }
    return Yi.Fragment = r, Yi.jsx = c, Yi.jsxs = c, Yi
}
var ig;

function ob() {
    return ig || (ig = 1, Bc.exports = ib()), Bc.exports
}
var C = ob(),
    N = lf();
const ab = Gv(N),
    Yv = rb({
        __proto__: null,
        default: ab
    }, [N]);
var Qa = {},
    zc = {
        exports: {}
    },
    Nt = {},
    $c = {
        exports: {}
    },
    Wc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;

function lb() {
    return og || (og = 1, (function(t) {
        function e(H, se) {
            var U = H.length;
            H.push(se);
            e: for (; 0 < U;) {
                var A = U - 1 >>> 1,
                    z = H[A];
                if (0 < a(z, se)) H[A] = se, H[U] = z, U = A;
                else break e
            }
        }

        function r(H) {
            return H.length === 0 ? null : H[0]
        }

        function i(H) {
            if (H.length === 0) return null;
            var se = H[0],
                U = H.pop();
            if (U !== se) {
                H[0] = U;
                e: for (var A = 0, z = H.length, ge = z >>> 1; A < ge;) {
                    var ye = 2 * (A + 1) - 1,
                        le = H[ye],
                        he = ye + 1,
                        Ae = H[he];
                    if (0 > a(le, U)) he < z && 0 > a(Ae, le) ? (H[A] = Ae, H[he] = U, A = he) : (H[A] = le, H[ye] = U, A = ye);
                    else if (he < z && 0 > a(Ae, U)) H[A] = Ae, H[he] = U, A = he;
                    else break e
                }
            }
            return se
        }

        function a(H, se) {
            var U = H.sortIndex - se.sortIndex;
            return U !== 0 ? U : H.id - se.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var c = Date,
                f = c.now();
            t.unstable_now = function() {
                return c.now() - f
            }
        }
        var h = [],
            m = [],
            g = 1,
            y = null,
            w = 3,
            E = !1,
            S = !1,
            b = !1,
            x = typeof setTimeout == "function" ? setTimeout : null,
            R = typeof clearTimeout == "function" ? clearTimeout : null,
            V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function D(H) {
            for (var se = r(m); se !== null;) {
                if (se.callback === null) i(m);
                else if (se.startTime <= H) i(m), se.sortIndex = se.expirationTime, e(h, se);
                else break;
                se = r(m)
            }
        }

        function M(H) {
            if (b = !1, D(H), !S)
                if (r(h) !== null) S = !0, we(B);
                else {
                    var se = r(m);
                    se !== null && de(M, se.startTime - H)
                }
        }

        function B(H, se) {
            S = !1, b && (b = !1, R(j), j = -1), E = !0;
            var U = w;
            try {
                for (D(se), y = r(h); y !== null && (!(y.expirationTime > se) || H && !_e());) {
                    var A = y.callback;
                    if (typeof A == "function") {
                        y.callback = null, w = y.priorityLevel;
                        var z = A(y.expirationTime <= se);
                        se = t.unstable_now(), typeof z == "function" ? y.callback = z : y === r(h) && i(h), D(se)
                    } else i(h);
                    y = r(h)
                }
                if (y !== null) var ge = !0;
                else {
                    var ye = r(m);
                    ye !== null && de(M, ye.startTime - se), ge = !1
                }
                return ge
            } finally {
                y = null, w = U, E = !1
            }
        }
        var K = !1,
            G = null,
            j = -1,
            Z = 5,
            fe = -1;

        function _e() {
            return !(t.unstable_now() - fe < Z)
        }

        function Le() {
            if (G !== null) {
                var H = t.unstable_now();
                fe = H;
                var se = !0;
                try {
                    se = G(!0, H)
                } finally {
                    se ? Me() : (K = !1, G = null)
                }
            } else K = !1
        }
        var Me;
        if (typeof V == "function") Me = function() {
            V(Le)
        };
        else if (typeof MessageChannel < "u") {
            var Re = new MessageChannel,
                je = Re.port2;
            Re.port1.onmessage = Le, Me = function() {
                je.postMessage(null)
            }
        } else Me = function() {
            x(Le, 0)
        };

        function we(H) {
            G = H, K || (K = !0, Me())
        }

        function de(H, se) {
            j = x(function() {
                H(t.unstable_now())
            }, se)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(H) {
            H.callback = null
        }, t.unstable_continueExecution = function() {
            S || E || (S = !0, we(B))
        }, t.unstable_forceFrameRate = function(H) {
            0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < H ? Math.floor(1e3 / H) : 5
        }, t.unstable_getCurrentPriorityLevel = function() {
            return w
        }, t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }, t.unstable_next = function(H) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var se = 3;
                    break;
                default:
                    se = w
            }
            var U = w;
            w = se;
            try {
                return H()
            } finally {
                w = U
            }
        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(H, se) {
            switch (H) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    H = 3
            }
            var U = w;
            w = H;
            try {
                return se()
            } finally {
                w = U
            }
        }, t.unstable_scheduleCallback = function(H, se, U) {
            var A = t.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? A + U : A) : U = A, H) {
                case 1:
                    var z = -1;
                    break;
                case 2:
                    z = 250;
                    break;
                case 5:
                    z = 1073741823;
                    break;
                case 4:
                    z = 1e4;
                    break;
                default:
                    z = 5e3
            }
            return z = U + z, H = {
                id: g++,
                callback: se,
                priorityLevel: H,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            }, U > A ? (H.sortIndex = U, e(m, H), r(h) === null && H === r(m) && (b ? (R(j), j = -1) : b = !0, de(M, U - A))) : (H.sortIndex = z, e(h, H), S || E || (S = !0, we(B))), H
        }, t.unstable_shouldYield = _e, t.unstable_wrapCallback = function(H) {
            var se = w;
            return function() {
                var U = w;
                w = se;
                try {
                    return H.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    })(Wc)), Wc
}
var ag;

function ub() {
    return ag || (ag = 1, $c.exports = lb()), $c.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lg;

function cb() {
    if (lg) return Nt;
    lg = 1;
    var t = lf(),
        e = ub();

    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set,
        a = {};

    function l(n, s) {
        c(n, s), c(n + "Capture", s)
    }

    function c(n, s) {
        for (a[n] = s, n = 0; n < s.length; n++) i.add(s[n])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        h = Object.prototype.hasOwnProperty,
        m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        y = {};

    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0, !1)
    }

    function E(n, s, o, u) {
        if (o !== null && o.type === 0) return !1;
        switch (typeof s) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
            default:
                return !1
        }
    }

    function S(n, s, o, u) {
        if (s === null || typeof s > "u" || E(n, s, o, u)) return !0;
        if (u) return !1;
        if (o !== null) switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
        }
        return !1
    }

    function b(n, s, o, u, d, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = n, this.type = s, this.sanitizeURL = p, this.removeEmptyString = v
    }
    var x = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        x[n] = new b(n, 0, !1, n, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(n) {
        var s = n[0];
        x[s] = new b(s, 1, !1, n[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        x[n] = new b(n, 2, !1, n.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        x[n] = new b(n, 2, !1, n, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        x[n] = new b(n, 3, !1, n.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        x[n] = new b(n, 3, !0, n, null, !1, !1)
    }), ["capture", "download"].forEach(function(n) {
        x[n] = new b(n, 4, !1, n, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(n) {
        x[n] = new b(n, 6, !1, n, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(n) {
        x[n] = new b(n, 5, !1, n.toLowerCase(), null, !1, !1)
    });
    var R = /[\-:]([a-z])/g;

    function V(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
        x[n] = new b(n, 1, !1, n.toLowerCase(), null, !1, !1)
    }), x.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
        x[n] = new b(n, 1, !1, n.toLowerCase(), null, !0, !0)
    });

    function D(n, s, o, u) {
        var d = x.hasOwnProperty(s) ? x[s] : null;
        (d !== null ? d.type !== 0 : u || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (S(s, o, d, u) && (o = null), u || d === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (s = d.attributeName, u = d.attributeNamespace, o === null ? n.removeAttribute(s) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, s, o) : n.setAttribute(s, o))))
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        B = Symbol.for("react.element"),
        K = Symbol.for("react.portal"),
        G = Symbol.for("react.fragment"),
        j = Symbol.for("react.strict_mode"),
        Z = Symbol.for("react.profiler"),
        fe = Symbol.for("react.provider"),
        _e = Symbol.for("react.context"),
        Le = Symbol.for("react.forward_ref"),
        Me = Symbol.for("react.suspense"),
        Re = Symbol.for("react.suspense_list"),
        je = Symbol.for("react.memo"),
        we = Symbol.for("react.lazy"),
        de = Symbol.for("react.offscreen"),
        H = Symbol.iterator;

    function se(n) {
        return n === null || typeof n != "object" ? null : (n = H && n[H] || n["@@iterator"], typeof n == "function" ? n : null)
    }
    var U = Object.assign,
        A;

    function z(n) {
        if (A === void 0) try {
            throw Error()
        } catch (o) {
            var s = o.stack.trim().match(/\n( *(at )?)/);
            A = s && s[1] || ""
        }
        return `
` + A + n
    }
    var ge = !1;

    function ye(n, s) {
        if (!n || ge) return "";
        ge = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                        throw Error()
                    }, Object.defineProperty(s.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (I) {
                        var u = I
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (I) {
                        u = I
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (I) {
                    u = I
                }
                n()
            }
        } catch (I) {
            if (I && u && typeof I.stack == "string") {
                for (var d = I.stack.split(`
`), p = u.stack.split(`
`), v = d.length - 1, k = p.length - 1; 1 <= v && 0 <= k && d[v] !== p[k];) k--;
                for (; 1 <= v && 0 <= k; v--, k--)
                    if (d[v] !== p[k]) {
                        if (v !== 1 || k !== 1)
                            do
                                if (v--, k--, 0 > k || d[v] !== p[k]) {
                                    var T = `
` + d[v].replace(" at new ", " at ");
                                    return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T
                                } while (1 <= v && 0 <= k);
                        break
                    }
            }
        } finally {
            ge = !1, Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }

    function le(n) {
        switch (n.tag) {
            case 5:
                return z(n.type);
            case 16:
                return z("Lazy");
            case 13:
                return z("Suspense");
            case 19:
                return z("SuspenseList");
            case 0:
            case 2:
            case 15:
                return n = ye(n.type, !1), n;
            case 11:
                return n = ye(n.type.render, !1), n;
            case 1:
                return n = ye(n.type, !0), n;
            default:
                return ""
        }
    }

    function he(n) {
        if (n == null) return null;
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
        switch (n) {
            case G:
                return "Fragment";
            case K:
                return "Portal";
            case Z:
                return "Profiler";
            case j:
                return "StrictMode";
            case Me:
                return "Suspense";
            case Re:
                return "SuspenseList"
        }
        if (typeof n == "object") switch (n.$$typeof) {
            case _e:
                return (n.displayName || "Context") + ".Consumer";
            case fe:
                return (n._context.displayName || "Context") + ".Provider";
            case Le:
                var s = n.render;
                return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
            case je:
                return s = n.displayName || null, s !== null ? s : he(n.type) || "Memo";
            case we:
                s = n._payload, n = n._init;
                try {
                    return he(n(s))
                } catch {}
        }
        return null
    }

    function Ae(n) {
        var s = n.type;
        switch (n.tag) {
            case 24:
                return "Cache";
            case 9:
                return (s.displayName || "Context") + ".Consumer";
            case 10:
                return (s._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return n = s.render, n = n.displayName || n.name || "", s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return s;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return he(s);
            case 8:
                return s === j ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof s == "function") return s.displayName || s.name || null;
                if (typeof s == "string") return s
        }
        return null
    }

    function Te(n) {
        switch (typeof n) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return n;
            case "object":
                return n;
            default:
                return ""
        }
    }

    function ve(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }

    function pt(n) {
        var s = ve(n) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s),
            u = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var d = o.get,
                p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(v) {
                    u = "" + v, p.call(this, v)
                }
            }), Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }), {
                getValue: function() {
                    return u
                },
                setValue: function(v) {
                    u = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null, delete n[s]
                }
            }
        }
    }

    function Tn(n) {
        n._valueTracker || (n._valueTracker = pt(n))
    }

    function Ar(n) {
        if (!n) return !1;
        var s = n._valueTracker;
        if (!s) return !0;
        var o = s.getValue(),
            u = "";
        return n && (u = ve(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (s.setValue(n), !0) : !1
    }

    function $n(n) {
        if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }

    function Wn(n, s) {
        var o = s.checked;
        return U({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? n._wrapperState.initialChecked
        })
    }

    function lh(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue,
            u = s.checked != null ? s.checked : s.defaultChecked;
        o = Te(s.value != null ? s.value : o), n._wrapperState = {
            initialChecked: u,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }

    function uh(n, s) {
        s = s.checked, s != null && D(n, "checked", s, !1)
    }

    function Kl(n, s) {
        uh(n, s);
        var o = Te(s.value),
            u = s.type;
        if (o != null) u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (u === "submit" || u === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Ql(n, s.type, o) : s.hasOwnProperty("defaultValue") && Ql(n, s.type, Te(s.defaultValue)), s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }

    function ch(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var u = s.type;
            if (!(u !== "submit" && u !== "reset" || s.value !== void 0 && s.value !== null)) return;
            s = "" + n._wrapperState.initialValue, o || s === n.value || (n.value = s), n.defaultValue = s
        }
        o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o)
    }

    function Ql(n, s, o) {
        (s !== "number" || $n(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var di = Array.isArray;

    function fs(n, s, o, u) {
        if (n = n.options, s) {
            s = {};
            for (var d = 0; d < o.length; d++) s["$" + o[d]] = !0;
            for (o = 0; o < n.length; o++) d = s.hasOwnProperty("$" + n[o].value), n[o].selected !== d && (n[o].selected = d), d && u && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Te(o), s = null, d = 0; d < n.length; d++) {
                if (n[d].value === o) {
                    n[d].selected = !0, u && (n[d].defaultSelected = !0);
                    return
                }
                s !== null || n[d].disabled || (s = n[d])
            }
            s !== null && (s.selected = !0)
        }
    }

    function Gl(n, s) {
        if (s.dangerouslySetInnerHTML != null) throw Error(r(91));
        return U({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }

    function dh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children, s = s.defaultValue, o != null) {
                if (s != null) throw Error(r(92));
                if (di(o)) {
                    if (1 < o.length) throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""), o = s
        }
        n._wrapperState = {
            initialValue: Te(o)
        }
    }

    function fh(n, s) {
        var o = Te(s.value),
            u = Te(s.defaultValue);
        o != null && (o = "" + o, o !== n.value && (n.value = o), s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u)
    }

    function hh(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }

    function ph(n) {
        switch (n) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Yl(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? ph(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var Vo, mh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, u, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, u, d)
            })
        } : n
    })(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = s;
        else {
            for (Vo = Vo || document.createElement("div"), Vo.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = Vo.firstChild; n.firstChild;) n.removeChild(n.firstChild);
            for (; s.firstChild;) n.appendChild(s.firstChild)
        }
    });

    function fi(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var hi = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        a1 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(hi).forEach(function(n) {
        a1.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1), hi[s] = hi[n]
        })
    });

    function gh(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || hi.hasOwnProperty(n) && hi[n] ? ("" + s).trim() : s + "px"
    }

    function yh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var u = o.indexOf("--") === 0,
                    d = gh(o, s[o], u);
                o === "float" && (o = "cssFloat"), u ? n.setProperty(o, d) : n[o] = d
            }
    }
    var l1 = U({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Xl(n, s) {
        if (s) {
            if (l1[n] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null) throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object") throw Error(r(62))
        }
    }

    function Jl(n, s) {
        if (n.indexOf("-") === -1) return typeof s.is == "string";
        switch (n) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Zl = null;

    function eu(n) {
        return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n
    }
    var tu = null,
        hs = null,
        ps = null;

    function vh(n) {
        if (n = Di(n)) {
            if (typeof tu != "function") throw Error(r(280));
            var s = n.stateNode;
            s && (s = la(s), tu(n.stateNode, n.type, s))
        }
    }

    function wh(n) {
        hs ? ps ? ps.push(n) : ps = [n] : hs = n
    }

    function xh() {
        if (hs) {
            var n = hs,
                s = ps;
            if (ps = hs = null, vh(n), s)
                for (n = 0; n < s.length; n++) vh(s[n])
        }
    }

    function Sh(n, s) {
        return n(s)
    }

    function bh() {}
    var nu = !1;

    function Eh(n, s, o) {
        if (nu) return n(s, o);
        nu = !0;
        try {
            return Sh(n, s, o)
        } finally {
            nu = !1, (hs !== null || ps !== null) && (bh(), xh())
        }
    }

    function pi(n, s) {
        var o = n.stateNode;
        if (o === null) return null;
        var u = la(o);
        if (u === null) return null;
        o = u[s];
        e: switch (s) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
                break e;
            default:
                n = !1
        }
        if (n) return null;
        if (o && typeof o != "function") throw Error(r(231, s, typeof o));
        return o
    }
    var ru = !1;
    if (f) try {
        var mi = {};
        Object.defineProperty(mi, "passive", {
            get: function() {
                ru = !0
            }
        }), window.addEventListener("test", mi, mi), window.removeEventListener("test", mi, mi)
    } catch {
        ru = !1
    }

    function u1(n, s, o, u, d, p, v, k, T) {
        var I = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, I)
        } catch (W) {
            this.onError(W)
        }
    }
    var gi = !1,
        Bo = null,
        Uo = !1,
        su = null,
        c1 = {
            onError: function(n) {
                gi = !0, Bo = n
            }
        };

    function d1(n, s, o, u, d, p, v, k, T) {
        gi = !1, Bo = null, u1.apply(c1, arguments)
    }

    function f1(n, s, o, u, d, p, v, k, T) {
        if (d1.apply(this, arguments), gi) {
            if (gi) {
                var I = Bo;
                gi = !1, Bo = null
            } else throw Error(r(198));
            Uo || (Uo = !0, su = I)
        }
    }

    function Nr(n) {
        var s = n,
            o = n;
        if (n.alternate)
            for (; s.return;) s = s.return;
        else {
            n = s;
            do s = n, (s.flags & 4098) !== 0 && (o = s.return), n = s.return; while (n)
        }
        return s.tag === 3 ? o : null
    }

    function kh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate, n !== null && (s = n.memoizedState)), s !== null) return s.dehydrated
        }
        return null
    }

    function Ch(n) {
        if (Nr(n) !== n) throw Error(r(188))
    }

    function h1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Nr(n), s === null) throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, u = s;;) {
            var d = o.return;
            if (d === null) break;
            var p = d.alternate;
            if (p === null) {
                if (u = d.return, u !== null) {
                    o = u;
                    continue
                }
                break
            }
            if (d.child === p.child) {
                for (p = d.child; p;) {
                    if (p === o) return Ch(d), n;
                    if (p === u) return Ch(d), s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== u.return) o = d, u = p;
            else {
                for (var v = !1, k = d.child; k;) {
                    if (k === o) {
                        v = !0, o = d, u = p;
                        break
                    }
                    if (k === u) {
                        v = !0, u = d, o = p;
                        break
                    }
                    k = k.sibling
                }
                if (!v) {
                    for (k = p.child; k;) {
                        if (k === o) {
                            v = !0, o = p, u = d;
                            break
                        }
                        if (k === u) {
                            v = !0, u = p, o = d;
                            break
                        }
                        k = k.sibling
                    }
                    if (!v) throw Error(r(189))
                }
            }
            if (o.alternate !== u) throw Error(r(190))
        }
        if (o.tag !== 3) throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }

    function Th(n) {
        return n = h1(n), n !== null ? Ph(n) : null
    }

    function Ph(n) {
        if (n.tag === 5 || n.tag === 6) return n;
        for (n = n.child; n !== null;) {
            var s = Ph(n);
            if (s !== null) return s;
            n = n.sibling
        }
        return null
    }
    var _h = e.unstable_scheduleCallback,
        Rh = e.unstable_cancelCallback,
        p1 = e.unstable_shouldYield,
        m1 = e.unstable_requestPaint,
        Qe = e.unstable_now,
        g1 = e.unstable_getCurrentPriorityLevel,
        iu = e.unstable_ImmediatePriority,
        Ah = e.unstable_UserBlockingPriority,
        zo = e.unstable_NormalPriority,
        y1 = e.unstable_LowPriority,
        Nh = e.unstable_IdlePriority,
        $o = null,
        pn = null;

    function v1(n) {
        if (pn && typeof pn.onCommitFiberRoot == "function") try {
            pn.onCommitFiberRoot($o, n, void 0, (n.current.flags & 128) === 128)
        } catch {}
    }
    var tn = Math.clz32 ? Math.clz32 : S1,
        w1 = Math.log,
        x1 = Math.LN2;

    function S1(n) {
        return n >>>= 0, n === 0 ? 32 : 31 - (w1(n) / x1 | 0) | 0
    }
    var Wo = 64,
        qo = 4194304;

    function yi(n) {
        switch (n & -n) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return n & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return n
        }
    }

    function Ho(n, s) {
        var o = n.pendingLanes;
        if (o === 0) return 0;
        var u = 0,
            d = n.suspendedLanes,
            p = n.pingedLanes,
            v = o & 268435455;
        if (v !== 0) {
            var k = v & ~d;
            k !== 0 ? u = yi(k) : (p &= v, p !== 0 && (u = yi(p)))
        } else v = o & ~d, v !== 0 ? u = yi(v) : p !== 0 && (u = yi(p));
        if (u === 0) return 0;
        if (s !== 0 && s !== u && (s & d) === 0 && (d = u & -u, p = s & -s, d >= p || d === 16 && (p & 4194240) !== 0)) return s;
        if ((u & 4) !== 0 && (u |= o & 16), s = n.entangledLanes, s !== 0)
            for (n = n.entanglements, s &= u; 0 < s;) o = 31 - tn(s), d = 1 << o, u |= n[o], s &= ~d;
        return u
    }

    function b1(n, s) {
        switch (n) {
            case 1:
            case 2:
            case 4:
                return s + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return s + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function E1(n, s) {
        for (var o = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, p = n.pendingLanes; 0 < p;) {
            var v = 31 - tn(p),
                k = 1 << v,
                T = d[v];
            T === -1 ? ((k & o) === 0 || (k & u) !== 0) && (d[v] = b1(k, s)) : T <= s && (n.expiredLanes |= k), p &= ~k
        }
    }

    function ou(n) {
        return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }

    function Oh() {
        var n = Wo;
        return Wo <<= 1, (Wo & 4194240) === 0 && (Wo = 64), n
    }

    function au(n) {
        for (var s = [], o = 0; 31 > o; o++) s.push(n);
        return s
    }

    function vi(n, s, o) {
        n.pendingLanes |= s, s !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, s = 31 - tn(s), n[s] = o
    }

    function k1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= s, n.mutableReadLanes &= s, n.entangledLanes &= s, s = n.entanglements;
        var u = n.eventTimes;
        for (n = n.expirationTimes; 0 < o;) {
            var d = 31 - tn(o),
                p = 1 << d;
            s[d] = 0, u[d] = -1, n[d] = -1, o &= ~p
        }
    }

    function lu(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o;) {
            var u = 31 - tn(o),
                d = 1 << u;
            d & s | n[u] & s && (n[u] |= s), o &= ~d
        }
    }
    var Oe = 0;

    function Lh(n) {
        return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Mh, uu, Dh, jh, Ih, cu = !1,
        Ko = [],
        qn = null,
        Hn = null,
        Kn = null,
        wi = new Map,
        xi = new Map,
        Qn = [],
        C1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Fh(n, s) {
        switch (n) {
            case "focusin":
            case "focusout":
                qn = null;
                break;
            case "dragenter":
            case "dragleave":
                Hn = null;
                break;
            case "mouseover":
            case "mouseout":
                Kn = null;
                break;
            case "pointerover":
            case "pointerout":
                wi.delete(s.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                xi.delete(s.pointerId)
        }
    }

    function Si(n, s, o, u, d, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: u,
            nativeEvent: p,
            targetContainers: [d]
        }, s !== null && (s = Di(s), s !== null && uu(s)), n) : (n.eventSystemFlags |= u, s = n.targetContainers, d !== null && s.indexOf(d) === -1 && s.push(d), n)
    }

    function T1(n, s, o, u, d) {
        switch (s) {
            case "focusin":
                return qn = Si(qn, n, s, o, u, d), !0;
            case "dragenter":
                return Hn = Si(Hn, n, s, o, u, d), !0;
            case "mouseover":
                return Kn = Si(Kn, n, s, o, u, d), !0;
            case "pointerover":
                var p = d.pointerId;
                return wi.set(p, Si(wi.get(p) || null, n, s, o, u, d)), !0;
            case "gotpointercapture":
                return p = d.pointerId, xi.set(p, Si(xi.get(p) || null, n, s, o, u, d)), !0
        }
        return !1
    }

    function Vh(n) {
        var s = Or(n.target);
        if (s !== null) {
            var o = Nr(s);
            if (o !== null) {
                if (s = o.tag, s === 13) {
                    if (s = kh(o), s !== null) {
                        n.blockedOn = s, Ih(n.priority, function() {
                            Dh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }

    function Qo(n) {
        if (n.blockedOn !== null) return !1;
        for (var s = n.targetContainers; 0 < s.length;) {
            var o = fu(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var u = new o.constructor(o.type, o);
                Zl = u, o.target.dispatchEvent(u), Zl = null
            } else return s = Di(o), s !== null && uu(s), n.blockedOn = o, !1;
            s.shift()
        }
        return !0
    }

    function Bh(n, s, o) {
        Qo(n) && o.delete(s)
    }

    function P1() {
        cu = !1, qn !== null && Qo(qn) && (qn = null), Hn !== null && Qo(Hn) && (Hn = null), Kn !== null && Qo(Kn) && (Kn = null), wi.forEach(Bh), xi.forEach(Bh)
    }

    function bi(n, s) {
        n.blockedOn === s && (n.blockedOn = null, cu || (cu = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, P1)))
    }

    function Ei(n) {
        function s(d) {
            return bi(d, n)
        }
        if (0 < Ko.length) {
            bi(Ko[0], n);
            for (var o = 1; o < Ko.length; o++) {
                var u = Ko[o];
                u.blockedOn === n && (u.blockedOn = null)
            }
        }
        for (qn !== null && bi(qn, n), Hn !== null && bi(Hn, n), Kn !== null && bi(Kn, n), wi.forEach(s), xi.forEach(s), o = 0; o < Qn.length; o++) u = Qn[o], u.blockedOn === n && (u.blockedOn = null);
        for (; 0 < Qn.length && (o = Qn[0], o.blockedOn === null);) Vh(o), o.blockedOn === null && Qn.shift()
    }
    var ms = M.ReactCurrentBatchConfig,
        Go = !0;

    function _1(n, s, o, u) {
        var d = Oe,
            p = ms.transition;
        ms.transition = null;
        try {
            Oe = 1, du(n, s, o, u)
        } finally {
            Oe = d, ms.transition = p
        }
    }

    function R1(n, s, o, u) {
        var d = Oe,
            p = ms.transition;
        ms.transition = null;
        try {
            Oe = 4, du(n, s, o, u)
        } finally {
            Oe = d, ms.transition = p
        }
    }

    function du(n, s, o, u) {
        if (Go) {
            var d = fu(n, s, o, u);
            if (d === null) Ru(n, s, u, Yo, o), Fh(n, u);
            else if (T1(d, n, s, o, u)) u.stopPropagation();
            else if (Fh(n, u), s & 4 && -1 < C1.indexOf(n)) {
                for (; d !== null;) {
                    var p = Di(d);
                    if (p !== null && Mh(p), p = fu(n, s, o, u), p === null && Ru(n, s, u, Yo, o), p === d) break;
                    d = p
                }
                d !== null && u.stopPropagation()
            } else Ru(n, s, u, null, o)
        }
    }
    var Yo = null;

    function fu(n, s, o, u) {
        if (Yo = null, n = eu(u), n = Or(n), n !== null)
            if (s = Nr(n), s === null) n = null;
            else if (o = s.tag, o === 13) {
            if (n = kh(s), n !== null) return n;
            n = null
        } else if (o === 3) {
            if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
            n = null
        } else s !== n && (n = null);
        return Yo = n, null
    }

    function Uh(n) {
        switch (n) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (g1()) {
                    case iu:
                        return 1;
                    case Ah:
                        return 4;
                    case zo:
                    case y1:
                        return 16;
                    case Nh:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Gn = null,
        hu = null,
        Xo = null;

    function zh() {
        if (Xo) return Xo;
        var n, s = hu,
            o = s.length,
            u, d = "value" in Gn ? Gn.value : Gn.textContent,
            p = d.length;
        for (n = 0; n < o && s[n] === d[n]; n++);
        var v = o - n;
        for (u = 1; u <= v && s[o - u] === d[p - u]; u++);
        return Xo = d.slice(n, 1 < u ? 1 - u : void 0)
    }

    function Jo(n) {
        var s = n.keyCode;
        return "charCode" in n ? (n = n.charCode, n === 0 && s === 13 && (n = 13)) : n = s, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0
    }

    function Zo() {
        return !0
    }

    function $h() {
        return !1
    }

    function It(n) {
        function s(o, u, d, p, v) {
            this._reactName = o, this._targetInst = d, this.type = u, this.nativeEvent = p, this.target = v, this.currentTarget = null;
            for (var k in n) n.hasOwnProperty(k) && (o = n[k], this[k] = o ? o(p) : p[k]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Zo : $h, this.isPropagationStopped = $h, this
        }
        return U(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Zo)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Zo)
            },
            persist: function() {},
            isPersistent: Zo
        }), s
    }
    var gs = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(n) {
                return n.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        pu = It(gs),
        ki = U({}, gs, {
            view: 0,
            detail: 0
        }),
        A1 = It(ki),
        mu, gu, Ci, ea = U({}, ki, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: vu,
            button: 0,
            buttons: 0,
            relatedTarget: function(n) {
                return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
            },
            movementX: function(n) {
                return "movementX" in n ? n.movementX : (n !== Ci && (Ci && n.type === "mousemove" ? (mu = n.screenX - Ci.screenX, gu = n.screenY - Ci.screenY) : gu = mu = 0, Ci = n), mu)
            },
            movementY: function(n) {
                return "movementY" in n ? n.movementY : gu
            }
        }),
        Wh = It(ea),
        N1 = U({}, ea, {
            dataTransfer: 0
        }),
        O1 = It(N1),
        L1 = U({}, ki, {
            relatedTarget: 0
        }),
        yu = It(L1),
        M1 = U({}, gs, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        D1 = It(M1),
        j1 = U({}, gs, {
            clipboardData: function(n) {
                return "clipboardData" in n ? n.clipboardData : window.clipboardData
            }
        }),
        I1 = It(j1),
        F1 = U({}, gs, {
            data: 0
        }),
        qh = It(F1),
        V1 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        B1 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        U1 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function z1(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = U1[n]) ? !!s[n] : !1
    }

    function vu() {
        return z1
    }
    var $1 = U({}, ki, {
            key: function(n) {
                if (n.key) {
                    var s = V1[n.key] || n.key;
                    if (s !== "Unidentified") return s
                }
                return n.type === "keypress" ? (n = Jo(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? B1[n.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: vu,
            charCode: function(n) {
                return n.type === "keypress" ? Jo(n) : 0
            },
            keyCode: function(n) {
                return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            },
            which: function(n) {
                return n.type === "keypress" ? Jo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            }
        }),
        W1 = It($1),
        q1 = U({}, ea, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Hh = It(q1),
        H1 = U({}, ki, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: vu
        }),
        K1 = It(H1),
        Q1 = U({}, gs, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        G1 = It(Q1),
        Y1 = U({}, ea, {
            deltaX: function(n) {
                return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0
            },
            deltaY: function(n) {
                return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        X1 = It(Y1),
        J1 = [9, 13, 27, 32],
        wu = f && "CompositionEvent" in window,
        Ti = null;
    f && "documentMode" in document && (Ti = document.documentMode);
    var Z1 = f && "TextEvent" in window && !Ti,
        Kh = f && (!wu || Ti && 8 < Ti && 11 >= Ti),
        Qh = " ",
        Gh = !1;

    function Yh(n, s) {
        switch (n) {
            case "keyup":
                return J1.indexOf(s.keyCode) !== -1;
            case "keydown":
                return s.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Xh(n) {
        return n = n.detail, typeof n == "object" && "data" in n ? n.data : null
    }
    var ys = !1;

    function eS(n, s) {
        switch (n) {
            case "compositionend":
                return Xh(s);
            case "keypress":
                return s.which !== 32 ? null : (Gh = !0, Qh);
            case "textInput":
                return n = s.data, n === Qh && Gh ? null : n;
            default:
                return null
        }
    }

    function tS(n, s) {
        if (ys) return n === "compositionend" || !wu && Yh(n, s) ? (n = zh(), Xo = hu = Gn = null, ys = !1, n) : null;
        switch (n) {
            case "paste":
                return null;
            case "keypress":
                if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                    if (s.char && 1 < s.char.length) return s.char;
                    if (s.which) return String.fromCharCode(s.which)
                }
                return null;
            case "compositionend":
                return Kh && s.locale !== "ko" ? null : s.data;
            default:
                return null
        }
    }
    var nS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Jh(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!nS[n.type] : s === "textarea"
    }

    function Zh(n, s, o, u) {
        wh(u), s = ia(s, "onChange"), 0 < s.length && (o = new pu("onChange", "change", null, o, u), n.push({
            event: o,
            listeners: s
        }))
    }
    var Pi = null,
        _i = null;

    function rS(n) {
        yp(n, 0)
    }

    function ta(n) {
        var s = bs(n);
        if (Ar(s)) return n
    }

    function sS(n, s) {
        if (n === "change") return s
    }
    var ep = !1;
    if (f) {
        var xu;
        if (f) {
            var Su = "oninput" in document;
            if (!Su) {
                var tp = document.createElement("div");
                tp.setAttribute("oninput", "return;"), Su = typeof tp.oninput == "function"
            }
            xu = Su
        } else xu = !1;
        ep = xu && (!document.documentMode || 9 < document.documentMode)
    }

    function np() {
        Pi && (Pi.detachEvent("onpropertychange", rp), _i = Pi = null)
    }

    function rp(n) {
        if (n.propertyName === "value" && ta(_i)) {
            var s = [];
            Zh(s, _i, n, eu(n)), Eh(rS, s)
        }
    }

    function iS(n, s, o) {
        n === "focusin" ? (np(), Pi = s, _i = o, Pi.attachEvent("onpropertychange", rp)) : n === "focusout" && np()
    }

    function oS(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown") return ta(_i)
    }

    function aS(n, s) {
        if (n === "click") return ta(s)
    }

    function lS(n, s) {
        if (n === "input" || n === "change") return ta(s)
    }

    function uS(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var nn = typeof Object.is == "function" ? Object.is : uS;

    function Ri(n, s) {
        if (nn(n, s)) return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null) return !1;
        var o = Object.keys(n),
            u = Object.keys(s);
        if (o.length !== u.length) return !1;
        for (u = 0; u < o.length; u++) {
            var d = o[u];
            if (!h.call(s, d) || !nn(n[d], s[d])) return !1
        }
        return !0
    }

    function sp(n) {
        for (; n && n.firstChild;) n = n.firstChild;
        return n
    }

    function ip(n, s) {
        var o = sp(n);
        n = 0;
        for (var u; o;) {
            if (o.nodeType === 3) {
                if (u = n + o.textContent.length, n <= s && u >= s) return {
                    node: o,
                    offset: s - n
                };
                n = u
            }
            e: {
                for (; o;) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = sp(o)
        }
    }

    function op(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? op(n, s.parentNode) : "contains" in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }

    function ap() {
        for (var n = window, s = $n(); s instanceof n.HTMLIFrameElement;) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o) n = s.contentWindow;
            else break;
            s = $n(n.document)
        }
        return s
    }

    function bu(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }

    function cS(n) {
        var s = ap(),
            o = n.focusedElem,
            u = n.selectionRange;
        if (s !== o && o && o.ownerDocument && op(o.ownerDocument.documentElement, o)) {
            if (u !== null && bu(o)) {
                if (s = u.start, n = u.end, n === void 0 && (n = s), "selectionStart" in o) o.selectionStart = s, o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window, n.getSelection) {
                    n = n.getSelection();
                    var d = o.textContent.length,
                        p = Math.min(u.start, d);
                    u = u.end === void 0 ? p : Math.min(u.end, d), !n.extend && p > u && (d = u, u = p, p = d), d = ip(o, p);
                    var v = ip(o, u);
                    d && v && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(), s.setStart(d.node, d.offset), n.removeAllRanges(), p > u ? (n.addRange(s), n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset), n.addRange(s)))
                }
            }
            for (s = [], n = o; n = n.parentNode;) n.nodeType === 1 && s.push({
                element: n,
                left: n.scrollLeft,
                top: n.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < s.length; o++) n = s[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top
        }
    }
    var dS = f && "documentMode" in document && 11 >= document.documentMode,
        vs = null,
        Eu = null,
        Ai = null,
        ku = !1;

    function lp(n, s, o) {
        var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        ku || vs == null || vs !== $n(u) || (u = vs, "selectionStart" in u && bu(u) ? u = {
            start: u.selectionStart,
            end: u.selectionEnd
        } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset
        }), Ai && Ri(Ai, u) || (Ai = u, u = ia(Eu, "onSelect"), 0 < u.length && (s = new pu("onSelect", "select", null, s, o), n.push({
            event: s,
            listeners: u
        }), s.target = vs)))
    }

    function na(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(), o["Webkit" + n] = "webkit" + s, o["Moz" + n] = "moz" + s, o
    }
    var ws = {
            animationend: na("Animation", "AnimationEnd"),
            animationiteration: na("Animation", "AnimationIteration"),
            animationstart: na("Animation", "AnimationStart"),
            transitionend: na("Transition", "TransitionEnd")
        },
        Cu = {},
        up = {};
    f && (up = document.createElement("div").style, "AnimationEvent" in window || (delete ws.animationend.animation, delete ws.animationiteration.animation, delete ws.animationstart.animation), "TransitionEvent" in window || delete ws.transitionend.transition);

    function ra(n) {
        if (Cu[n]) return Cu[n];
        if (!ws[n]) return n;
        var s = ws[n],
            o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in up) return Cu[n] = s[o];
        return n
    }
    var cp = ra("animationend"),
        dp = ra("animationiteration"),
        fp = ra("animationstart"),
        hp = ra("transitionend"),
        pp = new Map,
        mp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Yn(n, s) {
        pp.set(n, s), l(s, [n])
    }
    for (var Tu = 0; Tu < mp.length; Tu++) {
        var Pu = mp[Tu],
            fS = Pu.toLowerCase(),
            hS = Pu[0].toUpperCase() + Pu.slice(1);
        Yn(fS, "on" + hS)
    }
    Yn(cp, "onAnimationEnd"), Yn(dp, "onAnimationIteration"), Yn(fp, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(hp, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        pS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));

    function gp(n, s, o) {
        var u = n.type || "unknown-event";
        n.currentTarget = o, f1(u, s, void 0, n), n.currentTarget = null
    }

    function yp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var u = n[o],
                d = u.event;
            u = u.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = u.length - 1; 0 <= v; v--) {
                        var k = u[v],
                            T = k.instance,
                            I = k.currentTarget;
                        if (k = k.listener, T !== p && d.isPropagationStopped()) break e;
                        gp(d, k, I), p = T
                    } else
                        for (v = 0; v < u.length; v++) {
                            if (k = u[v], T = k.instance, I = k.currentTarget, k = k.listener, T !== p && d.isPropagationStopped()) break e;
                            gp(d, k, I), p = T
                        }
            }
        }
        if (Uo) throw n = su, Uo = !1, su = null, n
    }

    function Fe(n, s) {
        var o = s[Du];
        o === void 0 && (o = s[Du] = new Set);
        var u = n + "__bubble";
        o.has(u) || (vp(s, n, 2, !1), o.add(u))
    }

    function _u(n, s, o) {
        var u = 0;
        s && (u |= 4), vp(o, n, u, s)
    }
    var sa = "_reactListening" + Math.random().toString(36).slice(2);

    function Oi(n) {
        if (!n[sa]) {
            n[sa] = !0, i.forEach(function(o) {
                o !== "selectionchange" && (pS.has(o) || _u(o, !1, n), _u(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[sa] || (s[sa] = !0, _u("selectionchange", !1, s))
        }
    }

    function vp(n, s, o, u) {
        switch (Uh(s)) {
            case 1:
                var d = _1;
                break;
            case 4:
                d = R1;
                break;
            default:
                d = du
        }
        o = d.bind(null, s, o, n), d = void 0, !ru || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = !0), u ? d !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: d
        }) : n.addEventListener(s, o, !0) : d !== void 0 ? n.addEventListener(s, o, {
            passive: d
        }) : n.addEventListener(s, o, !1)
    }

    function Ru(n, s, o, u, d) {
        var p = u;
        if ((s & 1) === 0 && (s & 2) === 0 && u !== null) e: for (;;) {
            if (u === null) return;
            var v = u.tag;
            if (v === 3 || v === 4) {
                var k = u.stateNode.containerInfo;
                if (k === d || k.nodeType === 8 && k.parentNode === d) break;
                if (v === 4)
                    for (v = u.return; v !== null;) {
                        var T = v.tag;
                        if ((T === 3 || T === 4) && (T = v.stateNode.containerInfo, T === d || T.nodeType === 8 && T.parentNode === d)) return;
                        v = v.return
                    }
                for (; k !== null;) {
                    if (v = Or(k), v === null) return;
                    if (T = v.tag, T === 5 || T === 6) {
                        u = p = v;
                        continue e
                    }
                    k = k.parentNode
                }
            }
            u = u.return
        }
        Eh(function() {
            var I = p,
                W = eu(o),
                q = [];
            e: {
                var $ = pp.get(n);
                if ($ !== void 0) {
                    var Y = pu,
                        ee = n;
                    switch (n) {
                        case "keypress":
                            if (Jo(o) === 0) break e;
                        case "keydown":
                        case "keyup":
                            Y = W1;
                            break;
                        case "focusin":
                            ee = "focus", Y = yu;
                            break;
                        case "focusout":
                            ee = "blur", Y = yu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            Y = yu;
                            break;
                        case "click":
                            if (o.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            Y = Wh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            Y = O1;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            Y = K1;
                            break;
                        case cp:
                        case dp:
                        case fp:
                            Y = D1;
                            break;
                        case hp:
                            Y = G1;
                            break;
                        case "scroll":
                            Y = A1;
                            break;
                        case "wheel":
                            Y = X1;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            Y = I1;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            Y = Hh
                    }
                    var re = (s & 4) !== 0,
                        Ge = !re && n === "scroll",
                        O = re ? $ !== null ? $ + "Capture" : null : $;
                    re = [];
                    for (var _ = I, L; _ !== null;) {
                        L = _;
                        var Q = L.stateNode;
                        if (L.tag === 5 && Q !== null && (L = Q, O !== null && (Q = pi(_, O), Q != null && re.push(Li(_, Q, L)))), Ge) break;
                        _ = _.return
                    }
                    0 < re.length && ($ = new Y($, ee, null, o, W), q.push({
                        event: $,
                        listeners: re
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = n === "mouseover" || n === "pointerover", Y = n === "mouseout" || n === "pointerout", $ && o !== Zl && (ee = o.relatedTarget || o.fromElement) && (Or(ee) || ee[Pn])) break e;
                    if ((Y || $) && ($ = W.window === W ? W : ($ = W.ownerDocument) ? $.defaultView || $.parentWindow : window, Y ? (ee = o.relatedTarget || o.toElement, Y = I, ee = ee ? Or(ee) : null, ee !== null && (Ge = Nr(ee), ee !== Ge || ee.tag !== 5 && ee.tag !== 6) && (ee = null)) : (Y = null, ee = I), Y !== ee)) {
                        if (re = Wh, Q = "onMouseLeave", O = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (re = Hh, Q = "onPointerLeave", O = "onPointerEnter", _ = "pointer"), Ge = Y == null ? $ : bs(Y), L = ee == null ? $ : bs(ee), $ = new re(Q, _ + "leave", Y, o, W), $.target = Ge, $.relatedTarget = L, Q = null, Or(W) === I && (re = new re(O, _ + "enter", ee, o, W), re.target = L, re.relatedTarget = Ge, Q = re), Ge = Q, Y && ee) t: {
                            for (re = Y, O = ee, _ = 0, L = re; L; L = xs(L)) _++;
                            for (L = 0, Q = O; Q; Q = xs(Q)) L++;
                            for (; 0 < _ - L;) re = xs(re),
                            _--;
                            for (; 0 < L - _;) O = xs(O),
                            L--;
                            for (; _--;) {
                                if (re === O || O !== null && re === O.alternate) break t;
                                re = xs(re), O = xs(O)
                            }
                            re = null
                        }
                        else re = null;
                        Y !== null && wp(q, $, Y, re, !1), ee !== null && Ge !== null && wp(q, Ge, ee, re, !0)
                    }
                }
                e: {
                    if ($ = I ? bs(I) : window, Y = $.nodeName && $.nodeName.toLowerCase(), Y === "select" || Y === "input" && $.type === "file") var ie = sS;
                    else if (Jh($))
                        if (ep) ie = lS;
                        else {
                            ie = oS;
                            var oe = iS
                        }
                    else(Y = $.nodeName) && Y.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ie = aS);
                    if (ie && (ie = ie(n, I))) {
                        Zh(q, ie, o, W);
                        break e
                    }
                    oe && oe(n, $, I),
                    n === "focusout" && (oe = $._wrapperState) && oe.controlled && $.type === "number" && Ql($, "number", $.value)
                }
                switch (oe = I ? bs(I) : window, n) {
                    case "focusin":
                        (Jh(oe) || oe.contentEditable === "true") && (vs = oe, Eu = I, Ai = null);
                        break;
                    case "focusout":
                        Ai = Eu = vs = null;
                        break;
                    case "mousedown":
                        ku = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ku = !1, lp(q, o, W);
                        break;
                    case "selectionchange":
                        if (dS) break;
                    case "keydown":
                    case "keyup":
                        lp(q, o, W)
                }
                var ae;
                if (wu) e: {
                    switch (n) {
                        case "compositionstart":
                            var me = "onCompositionStart";
                            break e;
                        case "compositionend":
                            me = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            me = "onCompositionUpdate";
                            break e
                    }
                    me = void 0
                }
                else ys ? Yh(n, o) && (me = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (me = "onCompositionStart");me && (Kh && o.locale !== "ko" && (ys || me !== "onCompositionStart" ? me === "onCompositionEnd" && ys && (ae = zh()) : (Gn = W, hu = "value" in Gn ? Gn.value : Gn.textContent, ys = !0)), oe = ia(I, me), 0 < oe.length && (me = new qh(me, n, null, o, W), q.push({
                    event: me,
                    listeners: oe
                }), ae ? me.data = ae : (ae = Xh(o), ae !== null && (me.data = ae)))),
                (ae = Z1 ? eS(n, o) : tS(n, o)) && (I = ia(I, "onBeforeInput"), 0 < I.length && (W = new qh("onBeforeInput", "beforeinput", null, o, W), q.push({
                    event: W,
                    listeners: I
                }), W.data = ae))
            }
            yp(q, s)
        })
    }

    function Li(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }

    function ia(n, s) {
        for (var o = s + "Capture", u = []; n !== null;) {
            var d = n,
                p = d.stateNode;
            d.tag === 5 && p !== null && (d = p, p = pi(n, o), p != null && u.unshift(Li(n, p, d)), p = pi(n, s), p != null && u.push(Li(n, p, d))), n = n.return
        }
        return u
    }

    function xs(n) {
        if (n === null) return null;
        do n = n.return; while (n && n.tag !== 5);
        return n || null
    }

    function wp(n, s, o, u, d) {
        for (var p = s._reactName, v = []; o !== null && o !== u;) {
            var k = o,
                T = k.alternate,
                I = k.stateNode;
            if (T !== null && T === u) break;
            k.tag === 5 && I !== null && (k = I, d ? (T = pi(o, p), T != null && v.unshift(Li(o, T, k))) : d || (T = pi(o, p), T != null && v.push(Li(o, T, k)))), o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var mS = /\r\n?/g,
        gS = /\u0000|\uFFFD/g;

    function xp(n) {
        return (typeof n == "string" ? n : "" + n).replace(mS, `
`).replace(gS, "")
    }

    function oa(n, s, o) {
        if (s = xp(s), xp(n) !== s && o) throw Error(r(425))
    }

    function aa() {}
    var Au = null,
        Nu = null;

    function Ou(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Lu = typeof setTimeout == "function" ? setTimeout : void 0,
        yS = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Sp = typeof Promise == "function" ? Promise : void 0,
        vS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sp < "u" ? function(n) {
            return Sp.resolve(null).then(n).catch(wS)
        } : Lu;

    function wS(n) {
        setTimeout(function() {
            throw n
        })
    }

    function Mu(n, s) {
        var o = s,
            u = 0;
        do {
            var d = o.nextSibling;
            if (n.removeChild(o), d && d.nodeType === 8)
                if (o = d.data, o === "/$") {
                    if (u === 0) {
                        n.removeChild(d), Ei(s);
                        return
                    }
                    u--
                } else o !== "$" && o !== "$?" && o !== "$!" || u++;
            o = d
        } while (o);
        Ei(s)
    }

    function Xn(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3) break;
            if (s === 8) {
                if (s = n.data, s === "$" || s === "$!" || s === "$?") break;
                if (s === "/$") return null
            }
        }
        return n
    }

    function bp(n) {
        n = n.previousSibling;
        for (var s = 0; n;) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0) return n;
                    s--
                } else o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var Ss = Math.random().toString(36).slice(2),
        mn = "__reactFiber$" + Ss,
        Mi = "__reactProps$" + Ss,
        Pn = "__reactContainer$" + Ss,
        Du = "__reactEvents$" + Ss,
        xS = "__reactListeners$" + Ss,
        SS = "__reactHandles$" + Ss;

    function Or(n) {
        var s = n[mn];
        if (s) return s;
        for (var o = n.parentNode; o;) {
            if (s = o[Pn] || o[mn]) {
                if (o = s.alternate, s.child !== null || o !== null && o.child !== null)
                    for (n = bp(n); n !== null;) {
                        if (o = n[mn]) return o;
                        n = bp(n)
                    }
                return s
            }
            n = o, o = n.parentNode
        }
        return null
    }

    function Di(n) {
        return n = n[mn] || n[Pn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }

    function bs(n) {
        if (n.tag === 5 || n.tag === 6) return n.stateNode;
        throw Error(r(33))
    }

    function la(n) {
        return n[Mi] || null
    }
    var ju = [],
        Es = -1;

    function Jn(n) {
        return {
            current: n
        }
    }

    function Ve(n) {
        0 > Es || (n.current = ju[Es], ju[Es] = null, Es--)
    }

    function Ie(n, s) {
        Es++, ju[Es] = n.current, n.current = s
    }
    var Zn = {},
        mt = Jn(Zn),
        Tt = Jn(!1),
        Lr = Zn;

    function ks(n, s) {
        var o = n.type.contextTypes;
        if (!o) return Zn;
        var u = n.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === s) return u.__reactInternalMemoizedMaskedChildContext;
        var d = {},
            p;
        for (p in o) d[p] = s[p];
        return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = s, n.__reactInternalMemoizedMaskedChildContext = d), d
    }

    function Pt(n) {
        return n = n.childContextTypes, n != null
    }

    function ua() {
        Ve(Tt), Ve(mt)
    }

    function Ep(n, s, o) {
        if (mt.current !== Zn) throw Error(r(168));
        Ie(mt, s), Ie(Tt, o)
    }

    function kp(n, s, o) {
        var u = n.stateNode;
        if (s = s.childContextTypes, typeof u.getChildContext != "function") return o;
        u = u.getChildContext();
        for (var d in u)
            if (!(d in s)) throw Error(r(108, Ae(n) || "Unknown", d));
        return U({}, o, u)
    }

    function ca(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Zn, Lr = mt.current, Ie(mt, n), Ie(Tt, Tt.current), !0
    }

    function Cp(n, s, o) {
        var u = n.stateNode;
        if (!u) throw Error(r(169));
        o ? (n = kp(n, s, Lr), u.__reactInternalMemoizedMergedChildContext = n, Ve(Tt), Ve(mt), Ie(mt, n)) : Ve(Tt), Ie(Tt, o)
    }
    var _n = null,
        da = !1,
        Iu = !1;

    function Tp(n) {
        _n === null ? _n = [n] : _n.push(n)
    }

    function bS(n) {
        da = !0, Tp(n)
    }

    function er() {
        if (!Iu && _n !== null) {
            Iu = !0;
            var n = 0,
                s = Oe;
            try {
                var o = _n;
                for (Oe = 1; n < o.length; n++) {
                    var u = o[n];
                    do u = u(!0); while (u !== null)
                }
                _n = null, da = !1
            } catch (d) {
                throw _n !== null && (_n = _n.slice(n + 1)), _h(iu, er), d
            } finally {
                Oe = s, Iu = !1
            }
        }
        return null
    }
    var Cs = [],
        Ts = 0,
        fa = null,
        ha = 0,
        $t = [],
        Wt = 0,
        Mr = null,
        Rn = 1,
        An = "";

    function Dr(n, s) {
        Cs[Ts++] = ha, Cs[Ts++] = fa, fa = n, ha = s
    }

    function Pp(n, s, o) {
        $t[Wt++] = Rn, $t[Wt++] = An, $t[Wt++] = Mr, Mr = n;
        var u = Rn;
        n = An;
        var d = 32 - tn(u) - 1;
        u &= ~(1 << d), o += 1;
        var p = 32 - tn(s) + d;
        if (30 < p) {
            var v = d - d % 5;
            p = (u & (1 << v) - 1).toString(32), u >>= v, d -= v, Rn = 1 << 32 - tn(s) + d | o << d | u, An = p + n
        } else Rn = 1 << p | o << d | u, An = n
    }

    function Fu(n) {
        n.return !== null && (Dr(n, 1), Pp(n, 1, 0))
    }

    function Vu(n) {
        for (; n === fa;) fa = Cs[--Ts], Cs[Ts] = null, ha = Cs[--Ts], Cs[Ts] = null;
        for (; n === Mr;) Mr = $t[--Wt], $t[Wt] = null, An = $t[--Wt], $t[Wt] = null, Rn = $t[--Wt], $t[Wt] = null
    }
    var Ft = null,
        Vt = null,
        Ue = !1,
        rn = null;

    function _p(n, s) {
        var o = Qt(5, null, null, 0);
        o.elementType = "DELETED", o.stateNode = s, o.return = n, s = n.deletions, s === null ? (n.deletions = [o], n.flags |= 16) : s.push(o)
    }

    function Rp(n, s) {
        switch (n.tag) {
            case 5:
                var o = n.type;
                return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (n.stateNode = s, Ft = n, Vt = Xn(s.firstChild), !0) : !1;
            case 6:
                return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (n.stateNode = s, Ft = n, Vt = null, !0) : !1;
            case 13:
                return s = s.nodeType !== 8 ? null : s, s !== null ? (o = Mr !== null ? {
                    id: Rn,
                    overflow: An
                } : null, n.memoizedState = {
                    dehydrated: s,
                    treeContext: o,
                    retryLane: 1073741824
                }, o = Qt(18, null, null, 0), o.stateNode = s, o.return = n, n.child = o, Ft = n, Vt = null, !0) : !1;
            default:
                return !1
        }
    }

    function Bu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }

    function Uu(n) {
        if (Ue) {
            var s = Vt;
            if (s) {
                var o = s;
                if (!Rp(n, s)) {
                    if (Bu(n)) throw Error(r(418));
                    s = Xn(o.nextSibling);
                    var u = Ft;
                    s && Rp(n, s) ? _p(u, o) : (n.flags = n.flags & -4097 | 2, Ue = !1, Ft = n)
                }
            } else {
                if (Bu(n)) throw Error(r(418));
                n.flags = n.flags & -4097 | 2, Ue = !1, Ft = n
            }
        }
    }

    function Ap(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;) n = n.return;
        Ft = n
    }

    function pa(n) {
        if (n !== Ft) return !1;
        if (!Ue) return Ap(n), Ue = !0, !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type, s = s !== "head" && s !== "body" && !Ou(n.type, n.memoizedProps)), s && (s = Vt)) {
            if (Bu(n)) throw Np(), Error(r(418));
            for (; s;) _p(n, s), s = Xn(s.nextSibling)
        }
        if (Ap(n), n.tag === 13) {
            if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
            e: {
                for (n = n.nextSibling, s = 0; n;) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Vt = Xn(n.nextSibling);
                                break e
                            }
                            s--
                        } else o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Vt = null
            }
        } else Vt = Ft ? Xn(n.stateNode.nextSibling) : null;
        return !0
    }

    function Np() {
        for (var n = Vt; n;) n = Xn(n.nextSibling)
    }

    function Ps() {
        Vt = Ft = null, Ue = !1
    }

    function zu(n) {
        rn === null ? rn = [n] : rn.push(n)
    }
    var ES = M.ReactCurrentBatchConfig;

    function ji(n, s, o) {
        if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner, o) {
                    if (o.tag !== 1) throw Error(r(309));
                    var u = o.stateNode
                }
                if (!u) throw Error(r(147, n));
                var d = u,
                    p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var k = d.refs;
                    v === null ? delete k[p] : k[p] = v
                }, s._stringRef = p, s)
            }
            if (typeof n != "string") throw Error(r(284));
            if (!o._owner) throw Error(r(290, n))
        }
        return n
    }

    function ma(n, s) {
        throw n = Object.prototype.toString.call(s), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }

    function Op(n) {
        var s = n._init;
        return s(n._payload)
    }

    function Lp(n) {
        function s(O, _) {
            if (n) {
                var L = O.deletions;
                L === null ? (O.deletions = [_], O.flags |= 16) : L.push(_)
            }
        }

        function o(O, _) {
            if (!n) return null;
            for (; _ !== null;) s(O, _), _ = _.sibling;
            return null
        }

        function u(O, _) {
            for (O = new Map; _ !== null;) _.key !== null ? O.set(_.key, _) : O.set(_.index, _), _ = _.sibling;
            return O
        }

        function d(O, _) {
            return O = lr(O, _), O.index = 0, O.sibling = null, O
        }

        function p(O, _, L) {
            return O.index = L, n ? (L = O.alternate, L !== null ? (L = L.index, L < _ ? (O.flags |= 2, _) : L) : (O.flags |= 2, _)) : (O.flags |= 1048576, _)
        }

        function v(O) {
            return n && O.alternate === null && (O.flags |= 2), O
        }

        function k(O, _, L, Q) {
            return _ === null || _.tag !== 6 ? (_ = Lc(L, O.mode, Q), _.return = O, _) : (_ = d(_, L), _.return = O, _)
        }

        function T(O, _, L, Q) {
            var ie = L.type;
            return ie === G ? W(O, _, L.props.children, Q, L.key) : _ !== null && (_.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === we && Op(ie) === _.type) ? (Q = d(_, L.props), Q.ref = ji(O, _, L), Q.return = O, Q) : (Q = Va(L.type, L.key, L.props, null, O.mode, Q), Q.ref = ji(O, _, L), Q.return = O, Q)
        }

        function I(O, _, L, Q) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = Mc(L, O.mode, Q), _.return = O, _) : (_ = d(_, L.children || []), _.return = O, _)
        }

        function W(O, _, L, Q, ie) {
            return _ === null || _.tag !== 7 ? (_ = $r(L, O.mode, Q, ie), _.return = O, _) : (_ = d(_, L), _.return = O, _)
        }

        function q(O, _, L) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Lc("" + _, O.mode, L), _.return = O, _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case B:
                        return L = Va(_.type, _.key, _.props, null, O.mode, L), L.ref = ji(O, null, _), L.return = O, L;
                    case K:
                        return _ = Mc(_, O.mode, L), _.return = O, _;
                    case we:
                        var Q = _._init;
                        return q(O, Q(_._payload), L)
                }
                if (di(_) || se(_)) return _ = $r(_, O.mode, L, null), _.return = O, _;
                ma(O, _)
            }
            return null
        }

        function $(O, _, L, Q) {
            var ie = _ !== null ? _.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number") return ie !== null ? null : k(O, _, "" + L, Q);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case B:
                        return L.key === ie ? T(O, _, L, Q) : null;
                    case K:
                        return L.key === ie ? I(O, _, L, Q) : null;
                    case we:
                        return ie = L._init, $(O, _, ie(L._payload), Q)
                }
                if (di(L) || se(L)) return ie !== null ? null : W(O, _, L, Q, null);
                ma(O, L)
            }
            return null
        }

        function Y(O, _, L, Q, ie) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number") return O = O.get(L) || null, k(_, O, "" + Q, ie);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case B:
                        return O = O.get(Q.key === null ? L : Q.key) || null, T(_, O, Q, ie);
                    case K:
                        return O = O.get(Q.key === null ? L : Q.key) || null, I(_, O, Q, ie);
                    case we:
                        var oe = Q._init;
                        return Y(O, _, L, oe(Q._payload), ie)
                }
                if (di(Q) || se(Q)) return O = O.get(L) || null, W(_, O, Q, ie, null);
                ma(_, Q)
            }
            return null
        }

        function ee(O, _, L, Q) {
            for (var ie = null, oe = null, ae = _, me = _ = 0, ot = null; ae !== null && me < L.length; me++) {
                ae.index > me ? (ot = ae, ae = null) : ot = ae.sibling;
                var Pe = $(O, ae, L[me], Q);
                if (Pe === null) {
                    ae === null && (ae = ot);
                    break
                }
                n && ae && Pe.alternate === null && s(O, ae), _ = p(Pe, _, me), oe === null ? ie = Pe : oe.sibling = Pe, oe = Pe, ae = ot
            }
            if (me === L.length) return o(O, ae), Ue && Dr(O, me), ie;
            if (ae === null) {
                for (; me < L.length; me++) ae = q(O, L[me], Q), ae !== null && (_ = p(ae, _, me), oe === null ? ie = ae : oe.sibling = ae, oe = ae);
                return Ue && Dr(O, me), ie
            }
            for (ae = u(O, ae); me < L.length; me++) ot = Y(ae, O, me, L[me], Q), ot !== null && (n && ot.alternate !== null && ae.delete(ot.key === null ? me : ot.key), _ = p(ot, _, me), oe === null ? ie = ot : oe.sibling = ot, oe = ot);
            return n && ae.forEach(function(ur) {
                return s(O, ur)
            }), Ue && Dr(O, me), ie
        }

        function re(O, _, L, Q) {
            var ie = se(L);
            if (typeof ie != "function") throw Error(r(150));
            if (L = ie.call(L), L == null) throw Error(r(151));
            for (var oe = ie = null, ae = _, me = _ = 0, ot = null, Pe = L.next(); ae !== null && !Pe.done; me++, Pe = L.next()) {
                ae.index > me ? (ot = ae, ae = null) : ot = ae.sibling;
                var ur = $(O, ae, Pe.value, Q);
                if (ur === null) {
                    ae === null && (ae = ot);
                    break
                }
                n && ae && ur.alternate === null && s(O, ae), _ = p(ur, _, me), oe === null ? ie = ur : oe.sibling = ur, oe = ur, ae = ot
            }
            if (Pe.done) return o(O, ae), Ue && Dr(O, me), ie;
            if (ae === null) {
                for (; !Pe.done; me++, Pe = L.next()) Pe = q(O, Pe.value, Q), Pe !== null && (_ = p(Pe, _, me), oe === null ? ie = Pe : oe.sibling = Pe, oe = Pe);
                return Ue && Dr(O, me), ie
            }
            for (ae = u(O, ae); !Pe.done; me++, Pe = L.next()) Pe = Y(ae, O, me, Pe.value, Q), Pe !== null && (n && Pe.alternate !== null && ae.delete(Pe.key === null ? me : Pe.key), _ = p(Pe, _, me), oe === null ? ie = Pe : oe.sibling = Pe, oe = Pe);
            return n && ae.forEach(function(nb) {
                return s(O, nb)
            }), Ue && Dr(O, me), ie
        }

        function Ge(O, _, L, Q) {
            if (typeof L == "object" && L !== null && L.type === G && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case B:
                        e: {
                            for (var ie = L.key, oe = _; oe !== null;) {
                                if (oe.key === ie) {
                                    if (ie = L.type, ie === G) {
                                        if (oe.tag === 7) {
                                            o(O, oe.sibling), _ = d(oe, L.props.children), _.return = O, O = _;
                                            break e
                                        }
                                    } else if (oe.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === we && Op(ie) === oe.type) {
                                        o(O, oe.sibling), _ = d(oe, L.props), _.ref = ji(O, oe, L), _.return = O, O = _;
                                        break e
                                    }
                                    o(O, oe);
                                    break
                                } else s(O, oe);
                                oe = oe.sibling
                            }
                            L.type === G ? (_ = $r(L.props.children, O.mode, Q, L.key), _.return = O, O = _) : (Q = Va(L.type, L.key, L.props, null, O.mode, Q), Q.ref = ji(O, _, L), Q.return = O, O = Q)
                        }
                        return v(O);
                    case K:
                        e: {
                            for (oe = L.key; _ !== null;) {
                                if (_.key === oe)
                                    if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                                        o(O, _.sibling), _ = d(_, L.children || []), _.return = O, O = _;
                                        break e
                                    } else {
                                        o(O, _);
                                        break
                                    }
                                else s(O, _);
                                _ = _.sibling
                            }
                            _ = Mc(L, O.mode, Q),
                            _.return = O,
                            O = _
                        }
                        return v(O);
                    case we:
                        return oe = L._init, Ge(O, _, oe(L._payload), Q)
                }
                if (di(L)) return ee(O, _, L, Q);
                if (se(L)) return re(O, _, L, Q);
                ma(O, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (o(O, _.sibling), _ = d(_, L), _.return = O, O = _) : (o(O, _), _ = Lc(L, O.mode, Q), _.return = O, O = _), v(O)) : o(O, _)
        }
        return Ge
    }
    var _s = Lp(!0),
        Mp = Lp(!1),
        ga = Jn(null),
        ya = null,
        Rs = null,
        $u = null;

    function Wu() {
        $u = Rs = ya = null
    }

    function qu(n) {
        var s = ga.current;
        Ve(ga), n._currentValue = s
    }

    function Hu(n, s, o) {
        for (; n !== null;) {
            var u = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s, u !== null && (u.childLanes |= s)) : u !== null && (u.childLanes & s) !== s && (u.childLanes |= s), n === o) break;
            n = n.return
        }
    }

    function As(n, s) {
        ya = n, $u = Rs = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (_t = !0), n.firstContext = null)
    }

    function qt(n) {
        var s = n._currentValue;
        if ($u !== n)
            if (n = {
                    context: n,
                    memoizedValue: s,
                    next: null
                }, Rs === null) {
                if (ya === null) throw Error(r(308));
                Rs = n, ya.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else Rs = Rs.next = n;
        return s
    }
    var jr = null;

    function Ku(n) {
        jr === null ? jr = [n] : jr.push(n)
    }

    function Dp(n, s, o, u) {
        var d = s.interleaved;
        return d === null ? (o.next = o, Ku(s)) : (o.next = d.next, d.next = o), s.interleaved = o, Nn(n, u)
    }

    function Nn(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s), o = n, n = n.return; n !== null;) n.childLanes |= s, o = n.alternate, o !== null && (o.childLanes |= s), o = n, n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var tr = !1;

    function Qu(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function jp(n, s) {
        n = n.updateQueue, s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }

    function On(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function nr(n, s, o) {
        var u = n.updateQueue;
        if (u === null) return null;
        if (u = u.shared, (Ce & 2) !== 0) {
            var d = u.pending;
            return d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s, Nn(n, o)
        }
        return d = u.interleaved, d === null ? (s.next = s, Ku(u)) : (s.next = d.next, d.next = s), u.interleaved = s, Nn(n, o)
    }

    function va(n, s, o) {
        if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194240) !== 0)) {
            var u = s.lanes;
            u &= n.pendingLanes, o |= u, s.lanes = o, lu(n, o)
        }
    }

    function Ip(n, s) {
        var o = n.updateQueue,
            u = n.alternate;
        if (u !== null && (u = u.updateQueue, o === u)) {
            var d = null,
                p = null;
            if (o = o.firstBaseUpdate, o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? d = p = v : p = p.next = v, o = o.next
                } while (o !== null);
                p === null ? d = p = s : p = p.next = s
            } else d = p = s;
            o = {
                baseState: u.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: p,
                shared: u.shared,
                effects: u.effects
            }, n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = s : n.next = s, o.lastBaseUpdate = s
    }

    function wa(n, s, o, u) {
        var d = n.updateQueue;
        tr = !1;
        var p = d.firstBaseUpdate,
            v = d.lastBaseUpdate,
            k = d.shared.pending;
        if (k !== null) {
            d.shared.pending = null;
            var T = k,
                I = T.next;
            T.next = null, v === null ? p = I : v.next = I, v = T;
            var W = n.alternate;
            W !== null && (W = W.updateQueue, k = W.lastBaseUpdate, k !== v && (k === null ? W.firstBaseUpdate = I : k.next = I, W.lastBaseUpdate = T))
        }
        if (p !== null) {
            var q = d.baseState;
            v = 0, W = I = T = null, k = p;
            do {
                var $ = k.lane,
                    Y = k.eventTime;
                if ((u & $) === $) {
                    W !== null && (W = W.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    });
                    e: {
                        var ee = n,
                            re = k;
                        switch ($ = s, Y = o, re.tag) {
                            case 1:
                                if (ee = re.payload, typeof ee == "function") {
                                    q = ee.call(Y, q, $);
                                    break e
                                }
                                q = ee;
                                break e;
                            case 3:
                                ee.flags = ee.flags & -65537 | 128;
                            case 0:
                                if (ee = re.payload, $ = typeof ee == "function" ? ee.call(Y, q, $) : ee, $ == null) break e;
                                q = U({}, q, $);
                                break e;
                            case 2:
                                tr = !0
                        }
                    }
                    k.callback !== null && k.lane !== 0 && (n.flags |= 64, $ = d.effects, $ === null ? d.effects = [k] : $.push(k))
                } else Y = {
                    eventTime: Y,
                    lane: $,
                    tag: k.tag,
                    payload: k.payload,
                    callback: k.callback,
                    next: null
                }, W === null ? (I = W = Y, T = q) : W = W.next = Y, v |= $;
                if (k = k.next, k === null) {
                    if (k = d.shared.pending, k === null) break;
                    $ = k, k = $.next, $.next = null, d.lastBaseUpdate = $, d.shared.pending = null
                }
            } while (!0);
            if (W === null && (T = q), d.baseState = T, d.firstBaseUpdate = I, d.lastBaseUpdate = W, s = d.shared.interleaved, s !== null) {
                d = s;
                do v |= d.lane, d = d.next; while (d !== s)
            } else p === null && (d.shared.lanes = 0);
            Vr |= v, n.lanes = v, n.memoizedState = q
        }
    }

    function Fp(n, s, o) {
        if (n = s.effects, s.effects = null, n !== null)
            for (s = 0; s < n.length; s++) {
                var u = n[s],
                    d = u.callback;
                if (d !== null) {
                    if (u.callback = null, u = o, typeof d != "function") throw Error(r(191, d));
                    d.call(u)
                }
            }
    }
    var Ii = {},
        gn = Jn(Ii),
        Fi = Jn(Ii),
        Vi = Jn(Ii);

    function Ir(n) {
        if (n === Ii) throw Error(r(174));
        return n
    }

    function Gu(n, s) {
        switch (Ie(Vi, s), Ie(Fi, n), Ie(gn, Ii), n = s.nodeType, n) {
            case 9:
            case 11:
                s = (s = s.documentElement) ? s.namespaceURI : Yl(null, "");
                break;
            default:
                n = n === 8 ? s.parentNode : s, s = n.namespaceURI || null, n = n.tagName, s = Yl(s, n)
        }
        Ve(gn), Ie(gn, s)
    }

    function Ns() {
        Ve(gn), Ve(Fi), Ve(Vi)
    }

    function Vp(n) {
        Ir(Vi.current);
        var s = Ir(gn.current),
            o = Yl(s, n.type);
        s !== o && (Ie(Fi, n), Ie(gn, o))
    }

    function Yu(n) {
        Fi.current === n && (Ve(gn), Ve(Fi))
    }
    var ze = Jn(0);

    function xa(n) {
        for (var s = n; s !== null;) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0) return s
            } else if (s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === n) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === n) return null;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
        return null
    }
    var Xu = [];

    function Ju() {
        for (var n = 0; n < Xu.length; n++) Xu[n]._workInProgressVersionPrimary = null;
        Xu.length = 0
    }
    var Sa = M.ReactCurrentDispatcher,
        Zu = M.ReactCurrentBatchConfig,
        Fr = 0,
        $e = null,
        tt = null,
        st = null,
        ba = !1,
        Bi = !1,
        Ui = 0,
        kS = 0;

    function gt() {
        throw Error(r(321))
    }

    function ec(n, s) {
        if (s === null) return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!nn(n[o], s[o])) return !1;
        return !0
    }

    function tc(n, s, o, u, d, p) {
        if (Fr = p, $e = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, Sa.current = n === null || n.memoizedState === null ? _S : RS, n = o(u, d), Bi) {
            p = 0;
            do {
                if (Bi = !1, Ui = 0, 25 <= p) throw Error(r(301));
                p += 1, st = tt = null, s.updateQueue = null, Sa.current = AS, n = o(u, d)
            } while (Bi)
        }
        if (Sa.current = Ca, s = tt !== null && tt.next !== null, Fr = 0, st = tt = $e = null, ba = !1, s) throw Error(r(300));
        return n
    }

    function nc() {
        var n = Ui !== 0;
        return Ui = 0, n
    }

    function yn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return st === null ? $e.memoizedState = st = n : st = st.next = n, st
    }

    function Ht() {
        if (tt === null) {
            var n = $e.alternate;
            n = n !== null ? n.memoizedState : null
        } else n = tt.next;
        var s = st === null ? $e.memoizedState : st.next;
        if (s !== null) st = s, tt = n;
        else {
            if (n === null) throw Error(r(310));
            tt = n, n = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null
            }, st === null ? $e.memoizedState = st = n : st = st.next = n
        }
        return st
    }

    function zi(n, s) {
        return typeof s == "function" ? s(n) : s
    }

    function rc(n) {
        var s = Ht(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = tt,
            d = u.baseQueue,
            p = o.pending;
        if (p !== null) {
            if (d !== null) {
                var v = d.next;
                d.next = p.next, p.next = v
            }
            u.baseQueue = d = p, o.pending = null
        }
        if (d !== null) {
            p = d.next, u = u.baseState;
            var k = v = null,
                T = null,
                I = p;
            do {
                var W = I.lane;
                if ((Fr & W) === W) T !== null && (T = T.next = {
                    lane: 0,
                    action: I.action,
                    hasEagerState: I.hasEagerState,
                    eagerState: I.eagerState,
                    next: null
                }), u = I.hasEagerState ? I.eagerState : n(u, I.action);
                else {
                    var q = {
                        lane: W,
                        action: I.action,
                        hasEagerState: I.hasEagerState,
                        eagerState: I.eagerState,
                        next: null
                    };
                    T === null ? (k = T = q, v = u) : T = T.next = q, $e.lanes |= W, Vr |= W
                }
                I = I.next
            } while (I !== null && I !== p);
            T === null ? v = u : T.next = k, nn(u, s.memoizedState) || (_t = !0), s.memoizedState = u, s.baseState = v, s.baseQueue = T, o.lastRenderedState = u
        }
        if (n = o.interleaved, n !== null) {
            d = n;
            do p = d.lane, $e.lanes |= p, Vr |= p, d = d.next; while (d !== n)
        } else d === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }

    function sc(n) {
        var s = Ht(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var u = o.dispatch,
            d = o.pending,
            p = s.memoizedState;
        if (d !== null) {
            o.pending = null;
            var v = d = d.next;
            do p = n(p, v.action), v = v.next; while (v !== d);
            nn(p, s.memoizedState) || (_t = !0), s.memoizedState = p, s.baseQueue === null && (s.baseState = p), o.lastRenderedState = p
        }
        return [p, u]
    }

    function Bp() {}

    function Up(n, s) {
        var o = $e,
            u = Ht(),
            d = s(),
            p = !nn(u.memoizedState, d);
        if (p && (u.memoizedState = d, _t = !0), u = u.queue, ic(Wp.bind(null, o, u, n), [n]), u.getSnapshot !== s || p || st !== null && st.memoizedState.tag & 1) {
            if (o.flags |= 2048, $i(9, $p.bind(null, o, u, d, s), void 0, null), it === null) throw Error(r(349));
            (Fr & 30) !== 0 || zp(o, s, d)
        }
        return d
    }

    function zp(n, s, o) {
        n.flags |= 16384, n = {
            getSnapshot: s,
            value: o
        }, s = $e.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, $e.updateQueue = s, s.stores = [n]) : (o = s.stores, o === null ? s.stores = [n] : o.push(n))
    }

    function $p(n, s, o, u) {
        s.value = o, s.getSnapshot = u, qp(s) && Hp(n)
    }

    function Wp(n, s, o) {
        return o(function() {
            qp(s) && Hp(n)
        })
    }

    function qp(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !nn(n, o)
        } catch {
            return !0
        }
    }

    function Hp(n) {
        var s = Nn(n, 1);
        s !== null && ln(s, n, 1, -1)
    }

    function Kp(n) {
        var s = yn();
        return typeof n == "function" && (n = n()), s.memoizedState = s.baseState = n, n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: zi,
            lastRenderedState: n
        }, s.queue = n, n = n.dispatch = PS.bind(null, $e, n), [s.memoizedState, n]
    }

    function $i(n, s, o, u) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: u,
            next: null
        }, s = $e.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, $e.updateQueue = s, s.lastEffect = n.next = n) : (o = s.lastEffect, o === null ? s.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, s.lastEffect = n)), n
    }

    function Qp() {
        return Ht().memoizedState
    }

    function Ea(n, s, o, u) {
        var d = yn();
        $e.flags |= n, d.memoizedState = $i(1 | s, o, void 0, u === void 0 ? null : u)
    }

    function ka(n, s, o, u) {
        var d = Ht();
        u = u === void 0 ? null : u;
        var p = void 0;
        if (tt !== null) {
            var v = tt.memoizedState;
            if (p = v.destroy, u !== null && ec(u, v.deps)) {
                d.memoizedState = $i(s, o, p, u);
                return
            }
        }
        $e.flags |= n, d.memoizedState = $i(1 | s, o, p, u)
    }

    function Gp(n, s) {
        return Ea(8390656, 8, n, s)
    }

    function ic(n, s) {
        return ka(2048, 8, n, s)
    }

    function Yp(n, s) {
        return ka(4, 2, n, s)
    }

    function Xp(n, s) {
        return ka(4, 4, n, s)
    }

    function Jp(n, s) {
        if (typeof s == "function") return n = n(), s(n),
            function() {
                s(null)
            };
        if (s != null) return n = n(), s.current = n,
            function() {
                s.current = null
            }
    }

    function Zp(n, s, o) {
        return o = o != null ? o.concat([n]) : null, ka(4, 4, Jp.bind(null, s, n), o)
    }

    function oc() {}

    function em(n, s) {
        var o = Ht();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && ec(s, u[1]) ? u[0] : (o.memoizedState = [n, s], n)
    }

    function tm(n, s) {
        var o = Ht();
        s = s === void 0 ? null : s;
        var u = o.memoizedState;
        return u !== null && s !== null && ec(s, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, s], n)
    }

    function nm(n, s, o) {
        return (Fr & 21) === 0 ? (n.baseState && (n.baseState = !1, _t = !0), n.memoizedState = o) : (nn(o, s) || (o = Oh(), $e.lanes |= o, Vr |= o, n.baseState = !0), s)
    }

    function CS(n, s) {
        var o = Oe;
        Oe = o !== 0 && 4 > o ? o : 4, n(!0);
        var u = Zu.transition;
        Zu.transition = {};
        try {
            n(!1), s()
        } finally {
            Oe = o, Zu.transition = u
        }
    }

    function rm() {
        return Ht().memoizedState
    }

    function TS(n, s, o) {
        var u = or(n);
        if (o = {
                lane: u,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, sm(n)) im(s, o);
        else if (o = Dp(n, s, o, u), o !== null) {
            var d = kt();
            ln(o, n, u, d), om(o, s, u)
        }
    }

    function PS(n, s, o) {
        var u = or(n),
            d = {
                lane: u,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (sm(n)) im(s, d);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer, p !== null)) try {
                var v = s.lastRenderedState,
                    k = p(v, o);
                if (d.hasEagerState = !0, d.eagerState = k, nn(k, v)) {
                    var T = s.interleaved;
                    T === null ? (d.next = d, Ku(s)) : (d.next = T.next, T.next = d), s.interleaved = d;
                    return
                }
            } catch {} finally {}
            o = Dp(n, s, d, u), o !== null && (d = kt(), ln(o, n, u, d), om(o, s, u))
        }
    }

    function sm(n) {
        var s = n.alternate;
        return n === $e || s !== null && s === $e
    }

    function im(n, s) {
        Bi = ba = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next, o.next = s), n.pending = s
    }

    function om(n, s, o) {
        if ((o & 4194240) !== 0) {
            var u = s.lanes;
            u &= n.pendingLanes, o |= u, s.lanes = o, lu(n, o)
        }
    }
    var Ca = {
            readContext: qt,
            useCallback: gt,
            useContext: gt,
            useEffect: gt,
            useImperativeHandle: gt,
            useInsertionEffect: gt,
            useLayoutEffect: gt,
            useMemo: gt,
            useReducer: gt,
            useRef: gt,
            useState: gt,
            useDebugValue: gt,
            useDeferredValue: gt,
            useTransition: gt,
            useMutableSource: gt,
            useSyncExternalStore: gt,
            useId: gt,
            unstable_isNewReconciler: !1
        },
        _S = {
            readContext: qt,
            useCallback: function(n, s) {
                return yn().memoizedState = [n, s === void 0 ? null : s], n
            },
            useContext: qt,
            useEffect: Gp,
            useImperativeHandle: function(n, s, o) {
                return o = o != null ? o.concat([n]) : null, Ea(4194308, 4, Jp.bind(null, s, n), o)
            },
            useLayoutEffect: function(n, s) {
                return Ea(4194308, 4, n, s)
            },
            useInsertionEffect: function(n, s) {
                return Ea(4, 2, n, s)
            },
            useMemo: function(n, s) {
                var o = yn();
                return s = s === void 0 ? null : s, n = n(), o.memoizedState = [n, s], n
            },
            useReducer: function(n, s, o) {
                var u = yn();
                return s = o !== void 0 ? o(s) : s, u.memoizedState = u.baseState = s, n = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: n,
                    lastRenderedState: s
                }, u.queue = n, n = n.dispatch = TS.bind(null, $e, n), [u.memoizedState, n]
            },
            useRef: function(n) {
                var s = yn();
                return n = {
                    current: n
                }, s.memoizedState = n
            },
            useState: Kp,
            useDebugValue: oc,
            useDeferredValue: function(n) {
                return yn().memoizedState = n
            },
            useTransition: function() {
                var n = Kp(!1),
                    s = n[0];
                return n = CS.bind(null, n[1]), yn().memoizedState = n, [s, n]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(n, s, o) {
                var u = $e,
                    d = yn();
                if (Ue) {
                    if (o === void 0) throw Error(r(407));
                    o = o()
                } else {
                    if (o = s(), it === null) throw Error(r(349));
                    (Fr & 30) !== 0 || zp(u, s, o)
                }
                d.memoizedState = o;
                var p = {
                    value: o,
                    getSnapshot: s
                };
                return d.queue = p, Gp(Wp.bind(null, u, p, n), [n]), u.flags |= 2048, $i(9, $p.bind(null, u, p, o, s), void 0, null), o
            },
            useId: function() {
                var n = yn(),
                    s = it.identifierPrefix;
                if (Ue) {
                    var o = An,
                        u = Rn;
                    o = (u & ~(1 << 32 - tn(u) - 1)).toString(32) + o, s = ":" + s + "R" + o, o = Ui++, 0 < o && (s += "H" + o.toString(32)), s += ":"
                } else o = kS++, s = ":" + s + "r" + o.toString(32) + ":";
                return n.memoizedState = s
            },
            unstable_isNewReconciler: !1
        },
        RS = {
            readContext: qt,
            useCallback: em,
            useContext: qt,
            useEffect: ic,
            useImperativeHandle: Zp,
            useInsertionEffect: Yp,
            useLayoutEffect: Xp,
            useMemo: tm,
            useReducer: rc,
            useRef: Qp,
            useState: function() {
                return rc(zi)
            },
            useDebugValue: oc,
            useDeferredValue: function(n) {
                var s = Ht();
                return nm(s, tt.memoizedState, n)
            },
            useTransition: function() {
                var n = rc(zi)[0],
                    s = Ht().memoizedState;
                return [n, s]
            },
            useMutableSource: Bp,
            useSyncExternalStore: Up,
            useId: rm,
            unstable_isNewReconciler: !1
        },
        AS = {
            readContext: qt,
            useCallback: em,
            useContext: qt,
            useEffect: ic,
            useImperativeHandle: Zp,
            useInsertionEffect: Yp,
            useLayoutEffect: Xp,
            useMemo: tm,
            useReducer: sc,
            useRef: Qp,
            useState: function() {
                return sc(zi)
            },
            useDebugValue: oc,
            useDeferredValue: function(n) {
                var s = Ht();
                return tt === null ? s.memoizedState = n : nm(s, tt.memoizedState, n)
            },
            useTransition: function() {
                var n = sc(zi)[0],
                    s = Ht().memoizedState;
                return [n, s]
            },
            useMutableSource: Bp,
            useSyncExternalStore: Up,
            useId: rm,
            unstable_isNewReconciler: !1
        };

    function sn(n, s) {
        if (n && n.defaultProps) {
            s = U({}, s), n = n.defaultProps;
            for (var o in n) s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }

    function ac(n, s, o, u) {
        s = n.memoizedState, o = o(u, s), o = o == null ? s : U({}, s, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Ta = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Nr(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var u = kt(),
                d = or(n),
                p = On(u, d);
            p.payload = s, o != null && (p.callback = o), s = nr(n, p, d), s !== null && (ln(s, n, d, u), va(s, n, d))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var u = kt(),
                d = or(n),
                p = On(u, d);
            p.tag = 1, p.payload = s, o != null && (p.callback = o), s = nr(n, p, d), s !== null && (ln(s, n, d, u), va(s, n, d))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = kt(),
                u = or(n),
                d = On(o, u);
            d.tag = 2, s != null && (d.callback = s), s = nr(n, d, u), s !== null && (ln(s, n, u, o), va(s, n, u))
        }
    };

    function am(n, s, o, u, d, p, v) {
        return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, v) : s.prototype && s.prototype.isPureReactComponent ? !Ri(o, u) || !Ri(d, p) : !0
    }

    function lm(n, s, o) {
        var u = !1,
            d = Zn,
            p = s.contextType;
        return typeof p == "object" && p !== null ? p = qt(p) : (d = Pt(s) ? Lr : mt.current, u = s.contextTypes, p = (u = u != null) ? ks(n, d) : Zn), s = new s(o, p), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Ta, n.stateNode = s, s._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = p), s
    }

    function um(n, s, o, u) {
        n = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, u), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, u), s.state !== n && Ta.enqueueReplaceState(s, s.state, null)
    }

    function lc(n, s, o, u) {
        var d = n.stateNode;
        d.props = o, d.state = n.memoizedState, d.refs = {}, Qu(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? d.context = qt(p) : (p = Pt(s) ? Lr : mt.current, d.context = ks(n, p)), d.state = n.memoizedState, p = s.getDerivedStateFromProps, typeof p == "function" && (ac(n, s, p, o), d.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (s = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), s !== d.state && Ta.enqueueReplaceState(d, d.state, null), wa(n, o, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308)
    }

    function Os(n, s) {
        try {
            var o = "",
                u = s;
            do o += le(u), u = u.return; while (u);
            var d = o
        } catch (p) {
            d = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: d,
            digest: null
        }
    }

    function uc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ?? null,
            digest: s ?? null
        }
    }

    function cc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var NS = typeof WeakMap == "function" ? WeakMap : Map;

    function cm(n, s, o) {
        o = On(-1, o), o.tag = 3, o.payload = {
            element: null
        };
        var u = s.value;
        return o.callback = function() {
            La || (La = !0, Cc = u), cc(n, s)
        }, o
    }

    function dm(n, s, o) {
        o = On(-1, o), o.tag = 3;
        var u = n.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var d = s.value;
            o.payload = function() {
                return u(d)
            }, o.callback = function() {
                cc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            cc(n, s), typeof u != "function" && (sr === null ? sr = new Set([this]) : sr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }), o
    }

    function fm(n, s, o) {
        var u = n.pingCache;
        if (u === null) {
            u = n.pingCache = new NS;
            var d = new Set;
            u.set(s, d)
        } else d = u.get(s), d === void 0 && (d = new Set, u.set(s, d));
        d.has(o) || (d.add(o), n = qS.bind(null, n, s, o), s.then(n, n))
    }

    function hm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return n;
            n = n.return
        } while (n !== null);
        return null
    }

    function pm(n, s, o, u, d) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = On(-1, 1), s.tag = 2, nr(o, s, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = d, n)
    }
    var OS = M.ReactCurrentOwner,
        _t = !1;

    function Et(n, s, o, u) {
        s.child = n === null ? Mp(s, null, o, u) : _s(s, n.child, o, u)
    }

    function mm(n, s, o, u, d) {
        o = o.render;
        var p = s.ref;
        return As(s, d), u = tc(n, s, o, u, p, d), o = nc(), n !== null && !_t ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~d, Ln(n, s, d)) : (Ue && o && Fu(s), s.flags |= 1, Et(n, s, u, d), s.child)
    }

    function gm(n, s, o, u, d) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Oc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15, s.type = p, ym(n, s, p, u, d)) : (n = Va(o.type, null, u, s, s.mode, d), n.ref = s.ref, n.return = s, s.child = n)
        }
        if (p = n.child, (n.lanes & d) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare, o = o !== null ? o : Ri, o(v, u) && n.ref === s.ref) return Ln(n, s, d)
        }
        return s.flags |= 1, n = lr(p, u), n.ref = s.ref, n.return = s, s.child = n
    }

    function ym(n, s, o, u, d) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (Ri(p, u) && n.ref === s.ref)
                if (_t = !1, s.pendingProps = u = p, (n.lanes & d) !== 0)(n.flags & 131072) !== 0 && (_t = !0);
                else return s.lanes = n.lanes, Ln(n, s, d)
        }
        return dc(n, s, o, u, d)
    }

    function vm(n, s, o) {
        var u = s.pendingProps,
            d = u.children,
            p = n !== null ? n.memoizedState : null;
        if (u.mode === "hidden")
            if ((s.mode & 1) === 0) s.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Ie(Ms, Bt), Bt |= o;
            else {
                if ((o & 1073741824) === 0) return n = p !== null ? p.baseLanes | o : o, s.lanes = s.childLanes = 1073741824, s.memoizedState = {
                    baseLanes: n,
                    cachePool: null,
                    transitions: null
                }, s.updateQueue = null, Ie(Ms, Bt), Bt |= n, null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, u = p !== null ? p.baseLanes : o, Ie(Ms, Bt), Bt |= u
            }
        else p !== null ? (u = p.baseLanes | o, s.memoizedState = null) : u = o, Ie(Ms, Bt), Bt |= u;
        return Et(n, s, d, o), s.child
    }

    function wm(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512, s.flags |= 2097152)
    }

    function dc(n, s, o, u, d) {
        var p = Pt(o) ? Lr : mt.current;
        return p = ks(s, p), As(s, d), o = tc(n, s, o, u, p, d), u = nc(), n !== null && !_t ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~d, Ln(n, s, d)) : (Ue && u && Fu(s), s.flags |= 1, Et(n, s, o, d), s.child)
    }

    function xm(n, s, o, u, d) {
        if (Pt(o)) {
            var p = !0;
            ca(s)
        } else p = !1;
        if (As(s, d), s.stateNode === null) _a(n, s), lm(s, o, u), lc(s, o, u, d), u = !0;
        else if (n === null) {
            var v = s.stateNode,
                k = s.memoizedProps;
            v.props = k;
            var T = v.context,
                I = o.contextType;
            typeof I == "object" && I !== null ? I = qt(I) : (I = Pt(o) ? Lr : mt.current, I = ks(s, I));
            var W = o.getDerivedStateFromProps,
                q = typeof W == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (k !== u || T !== I) && um(s, v, u, I), tr = !1;
            var $ = s.memoizedState;
            v.state = $, wa(s, u, v, d), T = s.memoizedState, k !== u || $ !== T || Tt.current || tr ? (typeof W == "function" && (ac(s, o, W, u), T = s.memoizedState), (k = tr || am(s, o, k, u, $, T, I)) ? (q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = u, s.memoizedState = T), v.props = u, v.state = T, v.context = I, u = k) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308), u = !1)
        } else {
            v = s.stateNode, jp(n, s), k = s.memoizedProps, I = s.type === s.elementType ? k : sn(s.type, k), v.props = I, q = s.pendingProps, $ = v.context, T = o.contextType, typeof T == "object" && T !== null ? T = qt(T) : (T = Pt(o) ? Lr : mt.current, T = ks(s, T));
            var Y = o.getDerivedStateFromProps;
            (W = typeof Y == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (k !== q || $ !== T) && um(s, v, u, T), tr = !1, $ = s.memoizedState, v.state = $, wa(s, u, v, d);
            var ee = s.memoizedState;
            k !== q || $ !== ee || Tt.current || tr ? (typeof Y == "function" && (ac(s, o, Y, u), ee = s.memoizedState), (I = tr || am(s, o, I, u, $, ee, T) || !1) ? (W || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(u, ee, T), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(u, ee, T)), typeof v.componentDidUpdate == "function" && (s.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || k === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), s.memoizedProps = u, s.memoizedState = ee), v.props = u, v.state = ee, v.context = T, u = I) : (typeof v.componentDidUpdate != "function" || k === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), u = !1)
        }
        return fc(n, s, o, u, p, d)
    }

    function fc(n, s, o, u, d, p) {
        wm(n, s);
        var v = (s.flags & 128) !== 0;
        if (!u && !v) return d && Cp(s, o, !1), Ln(n, s, p);
        u = s.stateNode, OS.current = s;
        var k = v && typeof o.getDerivedStateFromError != "function" ? null : u.render();
        return s.flags |= 1, n !== null && v ? (s.child = _s(s, n.child, null, p), s.child = _s(s, null, k, p)) : Et(n, s, k, p), s.memoizedState = u.state, d && Cp(s, o, !0), s.child
    }

    function Sm(n) {
        var s = n.stateNode;
        s.pendingContext ? Ep(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Ep(n, s.context, !1), Gu(n, s.containerInfo)
    }

    function bm(n, s, o, u, d) {
        return Ps(), zu(d), s.flags |= 256, Et(n, s, o, u), s.child
    }
    var hc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function pc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }

    function Em(n, s, o) {
        var u = s.pendingProps,
            d = ze.current,
            p = !1,
            v = (s.flags & 128) !== 0,
            k;
        if ((k = v) || (k = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), k ? (p = !0, s.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Ie(ze, d & 1), n === null) return Uu(s), n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (v = u.children, n = u.fallback, p ? (u = s.mode, p = s.child, v = {
            mode: "hidden",
            children: v
        }, (u & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = v) : p = Ba(v, u, 0, null), n = $r(n, u, o, null), p.return = s, n.return = s, p.sibling = n, s.child = p, s.child.memoizedState = pc(o), s.memoizedState = hc, n) : mc(s, v));
        if (d = n.memoizedState, d !== null && (k = d.dehydrated, k !== null)) return LS(n, s, v, u, k, d, o);
        if (p) {
            p = u.fallback, v = s.mode, d = n.child, k = d.sibling;
            var T = {
                mode: "hidden",
                children: u.children
            };
            return (v & 1) === 0 && s.child !== d ? (u = s.child, u.childLanes = 0, u.pendingProps = T, s.deletions = null) : (u = lr(d, T), u.subtreeFlags = d.subtreeFlags & 14680064), k !== null ? p = lr(k, p) : (p = $r(p, v, o, null), p.flags |= 2), p.return = s, u.return = s, u.sibling = p, s.child = u, u = p, p = s.child, v = n.child.memoizedState, v = v === null ? pc(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            }, p.memoizedState = v, p.childLanes = n.childLanes & ~o, s.memoizedState = hc, u
        }
        return p = n.child, n = p.sibling, u = lr(p, {
            mode: "visible",
            children: u.children
        }), (s.mode & 1) === 0 && (u.lanes = o), u.return = s, u.sibling = null, n !== null && (o = s.deletions, o === null ? (s.deletions = [n], s.flags |= 16) : o.push(n)), s.child = u, s.memoizedState = null, u
    }

    function mc(n, s) {
        return s = Ba({
            mode: "visible",
            children: s
        }, n.mode, 0, null), s.return = n, n.child = s
    }

    function Pa(n, s, o, u) {
        return u !== null && zu(u), _s(s, n.child, null, o), n = mc(s, s.pendingProps.children), n.flags |= 2, s.memoizedState = null, n
    }

    function LS(n, s, o, u, d, p, v) {
        if (o) return s.flags & 256 ? (s.flags &= -257, u = uc(Error(r(422))), Pa(n, s, v, u)) : s.memoizedState !== null ? (s.child = n.child, s.flags |= 128, null) : (p = u.fallback, d = s.mode, u = Ba({
            mode: "visible",
            children: u.children
        }, d, 0, null), p = $r(p, d, v, null), p.flags |= 2, u.return = s, p.return = s, u.sibling = p, s.child = u, (s.mode & 1) !== 0 && _s(s, n.child, null, v), s.child.memoizedState = pc(v), s.memoizedState = hc, p);
        if ((s.mode & 1) === 0) return Pa(n, s, v, null);
        if (d.data === "$!") {
            if (u = d.nextSibling && d.nextSibling.dataset, u) var k = u.dgst;
            return u = k, p = Error(r(419)), u = uc(p, u, void 0), Pa(n, s, v, u)
        }
        if (k = (v & n.childLanes) !== 0, _t || k) {
            if (u = it, u !== null) {
                switch (v & -v) {
                    case 4:
                        d = 2;
                        break;
                    case 16:
                        d = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        d = 32;
                        break;
                    case 536870912:
                        d = 268435456;
                        break;
                    default:
                        d = 0
                }
                d = (d & (u.suspendedLanes | v)) !== 0 ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, Nn(n, d), ln(u, n, d, -1))
            }
            return Nc(), u = uc(Error(r(421))), Pa(n, s, v, u)
        }
        return d.data === "$?" ? (s.flags |= 128, s.child = n.child, s = HS.bind(null, n), d._reactRetry = s, null) : (n = p.treeContext, Vt = Xn(d.nextSibling), Ft = s, Ue = !0, rn = null, n !== null && ($t[Wt++] = Rn, $t[Wt++] = An, $t[Wt++] = Mr, Rn = n.id, An = n.overflow, Mr = s), s = mc(s, u.children), s.flags |= 4096, s)
    }

    function km(n, s, o) {
        n.lanes |= s;
        var u = n.alternate;
        u !== null && (u.lanes |= s), Hu(n.return, s, o)
    }

    function gc(n, s, o, u, d) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: u,
            tail: o,
            tailMode: d
        } : (p.isBackwards = s, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = d)
    }

    function Cm(n, s, o) {
        var u = s.pendingProps,
            d = u.revealOrder,
            p = u.tail;
        if (Et(n, s, u.children, o), u = ze.current, (u & 2) !== 0) u = u & 1 | 2, s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0) e: for (n = s.child; n !== null;) {
                if (n.tag === 13) n.memoizedState !== null && km(n, o, s);
                else if (n.tag === 19) km(n, o, s);
                else if (n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue
                }
                if (n === s) break e;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === s) break e;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
            u &= 1
        }
        if (Ie(ze, u), (s.mode & 1) === 0) s.memoizedState = null;
        else switch (d) {
            case "forwards":
                for (o = s.child, d = null; o !== null;) n = o.alternate, n !== null && xa(n) === null && (d = o), o = o.sibling;
                o = d, o === null ? (d = s.child, s.child = null) : (d = o.sibling, o.sibling = null), gc(s, !1, d, o, p);
                break;
            case "backwards":
                for (o = null, d = s.child, s.child = null; d !== null;) {
                    if (n = d.alternate, n !== null && xa(n) === null) {
                        s.child = d;
                        break
                    }
                    n = d.sibling, d.sibling = o, o = d, d = n
                }
                gc(s, !0, o, null, p);
                break;
            case "together":
                gc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
        }
        return s.child
    }

    function _a(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null, s.alternate = null, s.flags |= 2)
    }

    function Ln(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies), Vr |= s.lanes, (o & s.childLanes) === 0) return null;
        if (n !== null && s.child !== n.child) throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child, o = lr(n, n.pendingProps), s.child = o, o.return = s; n.sibling !== null;) n = n.sibling, o = o.sibling = lr(n, n.pendingProps), o.return = s;
            o.sibling = null
        }
        return s.child
    }

    function MS(n, s, o) {
        switch (s.tag) {
            case 3:
                Sm(s), Ps();
                break;
            case 5:
                Vp(s);
                break;
            case 1:
                Pt(s.type) && ca(s);
                break;
            case 4:
                Gu(s, s.stateNode.containerInfo);
                break;
            case 10:
                var u = s.type._context,
                    d = s.memoizedProps.value;
                Ie(ga, u._currentValue), u._currentValue = d;
                break;
            case 13:
                if (u = s.memoizedState, u !== null) return u.dehydrated !== null ? (Ie(ze, ze.current & 1), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? Em(n, s, o) : (Ie(ze, ze.current & 1), n = Ln(n, s, o), n !== null ? n.sibling : null);
                Ie(ze, ze.current & 1);
                break;
            case 19:
                if (u = (o & s.childLanes) !== 0, (n.flags & 128) !== 0) {
                    if (u) return Cm(n, s, o);
                    s.flags |= 128
                }
                if (d = s.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ie(ze, ze.current), u) break;
                return null;
            case 22:
            case 23:
                return s.lanes = 0, vm(n, s, o)
        }
        return Ln(n, s, o)
    }
    var Tm, yc, Pm, _m;
    Tm = function(n, s) {
        for (var o = s.child; o !== null;) {
            if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === s) break;
            for (; o.sibling === null;) {
                if (o.return === null || o.return === s) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }, yc = function() {}, Pm = function(n, s, o, u) {
        var d = n.memoizedProps;
        if (d !== u) {
            n = s.stateNode, Ir(gn.current);
            var p = null;
            switch (o) {
                case "input":
                    d = Wn(n, d), u = Wn(n, u), p = [];
                    break;
                case "select":
                    d = U({}, d, {
                        value: void 0
                    }), u = U({}, u, {
                        value: void 0
                    }), p = [];
                    break;
                case "textarea":
                    d = Gl(n, d), u = Gl(n, u), p = [];
                    break;
                default:
                    typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = aa)
            }
            Xl(o, u);
            var v;
            o = null;
            for (I in d)
                if (!u.hasOwnProperty(I) && d.hasOwnProperty(I) && d[I] != null)
                    if (I === "style") {
                        var k = d[I];
                        for (v in k) k.hasOwnProperty(v) && (o || (o = {}), o[v] = "")
                    } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (a.hasOwnProperty(I) ? p || (p = []) : (p = p || []).push(I, null));
            for (I in u) {
                var T = u[I];
                if (k = d != null ? d[I] : void 0, u.hasOwnProperty(I) && T !== k && (T != null || k != null))
                    if (I === "style")
                        if (k) {
                            for (v in k) !k.hasOwnProperty(v) || T && T.hasOwnProperty(v) || (o || (o = {}), o[v] = "");
                            for (v in T) T.hasOwnProperty(v) && k[v] !== T[v] && (o || (o = {}), o[v] = T[v])
                        } else o || (p || (p = []), p.push(I, o)), o = T;
                else I === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, k = k ? k.__html : void 0, T != null && k !== T && (p = p || []).push(I, T)) : I === "children" ? typeof T != "string" && typeof T != "number" || (p = p || []).push(I, "" + T) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (a.hasOwnProperty(I) ? (T != null && I === "onScroll" && Fe("scroll", n), p || k === T || (p = [])) : (p = p || []).push(I, T))
            }
            o && (p = p || []).push("style", o);
            var I = p;
            (s.updateQueue = I) && (s.flags |= 4)
        }
    }, _m = function(n, s, o, u) {
        o !== u && (s.flags |= 4)
    };

    function Wi(n, s) {
        if (!Ue) switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var u = null; o !== null;) o.alternate !== null && (u = o), o = o.sibling;
                u === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null
        }
    }

    function yt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child,
            o = 0,
            u = 0;
        if (s)
            for (var d = n.child; d !== null;) o |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = n, d = d.sibling;
        else
            for (d = n.child; d !== null;) o |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = n, d = d.sibling;
        return n.subtreeFlags |= u, n.childLanes = o, s
    }

    function DS(n, s, o) {
        var u = s.pendingProps;
        switch (Vu(s), s.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return yt(s), null;
            case 1:
                return Pt(s.type) && ua(), yt(s), null;
            case 3:
                return u = s.stateNode, Ns(), Ve(Tt), Ve(mt), Ju(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (pa(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, rn !== null && (_c(rn), rn = null))), yc(n, s), yt(s), null;
            case 5:
                Yu(s);
                var d = Ir(Vi.current);
                if (o = s.type, n !== null && s.stateNode != null) Pm(n, s, o, u, d), n.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
                else {
                    if (!u) {
                        if (s.stateNode === null) throw Error(r(166));
                        return yt(s), null
                    }
                    if (n = Ir(gn.current), pa(s)) {
                        u = s.stateNode, o = s.type;
                        var p = s.memoizedProps;
                        switch (u[mn] = s, u[Mi] = p, n = (s.mode & 1) !== 0, o) {
                            case "dialog":
                                Fe("cancel", u), Fe("close", u);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Fe("load", u);
                                break;
                            case "video":
                            case "audio":
                                for (d = 0; d < Ni.length; d++) Fe(Ni[d], u);
                                break;
                            case "source":
                                Fe("error", u);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Fe("error", u), Fe("load", u);
                                break;
                            case "details":
                                Fe("toggle", u);
                                break;
                            case "input":
                                lh(u, p), Fe("invalid", u);
                                break;
                            case "select":
                                u._wrapperState = {
                                    wasMultiple: !!p.multiple
                                }, Fe("invalid", u);
                                break;
                            case "textarea":
                                dh(u, p), Fe("invalid", u)
                        }
                        Xl(o, p), d = null;
                        for (var v in p)
                            if (p.hasOwnProperty(v)) {
                                var k = p[v];
                                v === "children" ? typeof k == "string" ? u.textContent !== k && (p.suppressHydrationWarning !== !0 && oa(u.textContent, k, n), d = ["children", k]) : typeof k == "number" && u.textContent !== "" + k && (p.suppressHydrationWarning !== !0 && oa(u.textContent, k, n), d = ["children", "" + k]) : a.hasOwnProperty(v) && k != null && v === "onScroll" && Fe("scroll", u)
                            } switch (o) {
                            case "input":
                                Tn(u), ch(u, p, !0);
                                break;
                            case "textarea":
                                Tn(u), hh(u);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof p.onClick == "function" && (u.onclick = aa)
                        }
                        u = d, s.updateQueue = u, u !== null && (s.flags |= 4)
                    } else {
                        v = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ph(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = v.createElement(o, {
                            is: u.is
                        }) : (n = v.createElement(o), o === "select" && (v = n, u.multiple ? v.multiple = !0 : u.size && (v.size = u.size))) : n = v.createElementNS(n, o), n[mn] = s, n[Mi] = u, Tm(n, s, !1, !1), s.stateNode = n;
                        e: {
                            switch (v = Jl(o, u), o) {
                                case "dialog":
                                    Fe("cancel", n), Fe("close", n), d = u;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Fe("load", n), d = u;
                                    break;
                                case "video":
                                case "audio":
                                    for (d = 0; d < Ni.length; d++) Fe(Ni[d], n);
                                    d = u;
                                    break;
                                case "source":
                                    Fe("error", n), d = u;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Fe("error", n), Fe("load", n), d = u;
                                    break;
                                case "details":
                                    Fe("toggle", n), d = u;
                                    break;
                                case "input":
                                    lh(n, u), d = Wn(n, u), Fe("invalid", n);
                                    break;
                                case "option":
                                    d = u;
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!u.multiple
                                    }, d = U({}, u, {
                                        value: void 0
                                    }), Fe("invalid", n);
                                    break;
                                case "textarea":
                                    dh(n, u), d = Gl(n, u), Fe("invalid", n);
                                    break;
                                default:
                                    d = u
                            }
                            Xl(o, d),
                            k = d;
                            for (p in k)
                                if (k.hasOwnProperty(p)) {
                                    var T = k[p];
                                    p === "style" ? yh(n, T) : p === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && mh(n, T)) : p === "children" ? typeof T == "string" ? (o !== "textarea" || T !== "") && fi(n, T) : typeof T == "number" && fi(n, "" + T) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? T != null && p === "onScroll" && Fe("scroll", n) : T != null && D(n, p, T, v))
                                } switch (o) {
                                case "input":
                                    Tn(n), ch(n, u, !1);
                                    break;
                                case "textarea":
                                    Tn(n), hh(n);
                                    break;
                                case "option":
                                    u.value != null && n.setAttribute("value", "" + Te(u.value));
                                    break;
                                case "select":
                                    n.multiple = !!u.multiple, p = u.value, p != null ? fs(n, !!u.multiple, p, !1) : u.defaultValue != null && fs(n, !!u.multiple, u.defaultValue, !0);
                                    break;
                                default:
                                    typeof d.onClick == "function" && (n.onclick = aa)
                            }
                            switch (o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u = !!u.autoFocus;
                                    break e;
                                case "img":
                                    u = !0;
                                    break e;
                                default:
                                    u = !1
                            }
                        }
                        u && (s.flags |= 4)
                    }
                    s.ref !== null && (s.flags |= 512, s.flags |= 2097152)
                }
                return yt(s), null;
            case 6:
                if (n && s.stateNode != null) _m(n, s, n.memoizedProps, u);
                else {
                    if (typeof u != "string" && s.stateNode === null) throw Error(r(166));
                    if (o = Ir(Vi.current), Ir(gn.current), pa(s)) {
                        if (u = s.stateNode, o = s.memoizedProps, u[mn] = s, (p = u.nodeValue !== o) && (n = Ft, n !== null)) switch (n.tag) {
                            case 3:
                                oa(u.nodeValue, o, (n.mode & 1) !== 0);
                                break;
                            case 5:
                                n.memoizedProps.suppressHydrationWarning !== !0 && oa(u.nodeValue, o, (n.mode & 1) !== 0)
                        }
                        p && (s.flags |= 4)
                    } else u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[mn] = s, s.stateNode = u
                }
                return yt(s), null;
            case 13:
                if (Ve(ze), u = s.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                    if (Ue && Vt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Np(), Ps(), s.flags |= 98560, p = !1;
                    else if (p = pa(s), u !== null && u.dehydrated !== null) {
                        if (n === null) {
                            if (!p) throw Error(r(318));
                            if (p = s.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(r(317));
                            p[mn] = s
                        } else Ps(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                        yt(s), p = !1
                    } else rn !== null && (_c(rn), rn = null), p = !0;
                    if (!p) return s.flags & 65536 ? s : null
                }
                return (s.flags & 128) !== 0 ? (s.lanes = o, s) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (n === null || (ze.current & 1) !== 0 ? nt === 0 && (nt = 3) : Nc())), s.updateQueue !== null && (s.flags |= 4), yt(s), null);
            case 4:
                return Ns(), yc(n, s), n === null && Oi(s.stateNode.containerInfo), yt(s), null;
            case 10:
                return qu(s.type._context), yt(s), null;
            case 17:
                return Pt(s.type) && ua(), yt(s), null;
            case 19:
                if (Ve(ze), p = s.memoizedState, p === null) return yt(s), null;
                if (u = (s.flags & 128) !== 0, v = p.rendering, v === null)
                    if (u) Wi(p, !1);
                    else {
                        if (nt !== 0 || n !== null && (n.flags & 128) !== 0)
                            for (n = s.child; n !== null;) {
                                if (v = xa(n), v !== null) {
                                    for (s.flags |= 128, Wi(p, !1), u = v.updateQueue, u !== null && (s.updateQueue = u, s.flags |= 4), s.subtreeFlags = 0, u = o, o = s.child; o !== null;) p = o, n = u, p.flags &= 14680066, v = p.alternate, v === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = v.childLanes, p.lanes = v.lanes, p.child = v.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = v.memoizedProps, p.memoizedState = v.memoizedState, p.updateQueue = v.updateQueue, p.type = v.type, n = v.dependencies, p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }), o = o.sibling;
                                    return Ie(ze, ze.current & 1 | 2), s.child
                                }
                                n = n.sibling
                            }
                        p.tail !== null && Qe() > Ds && (s.flags |= 128, u = !0, Wi(p, !1), s.lanes = 4194304)
                    }
                else {
                    if (!u)
                        if (n = xa(v), n !== null) {
                            if (s.flags |= 128, u = !0, o = n.updateQueue, o !== null && (s.updateQueue = o, s.flags |= 4), Wi(p, !0), p.tail === null && p.tailMode === "hidden" && !v.alternate && !Ue) return yt(s), null
                        } else 2 * Qe() - p.renderingStartTime > Ds && o !== 1073741824 && (s.flags |= 128, u = !0, Wi(p, !1), s.lanes = 4194304);
                    p.isBackwards ? (v.sibling = s.child, s.child = v) : (o = p.last, o !== null ? o.sibling = v : s.child = v, p.last = v)
                }
                return p.tail !== null ? (s = p.tail, p.rendering = s, p.tail = s.sibling, p.renderingStartTime = Qe(), s.sibling = null, o = ze.current, Ie(ze, u ? o & 1 | 2 : o & 1), s) : (yt(s), null);
            case 22:
            case 23:
                return Ac(), u = s.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (s.flags |= 8192), u && (s.mode & 1) !== 0 ? (Bt & 1073741824) !== 0 && (yt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : yt(s), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(r(156, s.tag))
    }

    function jS(n, s) {
        switch (Vu(s), s.tag) {
            case 1:
                return Pt(s.type) && ua(), n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 3:
                return Ns(), Ve(Tt), Ve(mt), Ju(), n = s.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128, s) : null;
            case 5:
                return Yu(s), null;
            case 13:
                if (Ve(ze), n = s.memoizedState, n !== null && n.dehydrated !== null) {
                    if (s.alternate === null) throw Error(r(340));
                    Ps()
                }
                return n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 19:
                return Ve(ze), null;
            case 4:
                return Ns(), null;
            case 10:
                return qu(s.type._context), null;
            case 22:
            case 23:
                return Ac(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Ra = !1,
        vt = !1,
        IS = typeof WeakSet == "function" ? WeakSet : Set,
        J = null;

    function Ls(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function") try {
                o(null)
            } catch (u) {
                qe(n, s, u)
            } else o.current = null
    }

    function vc(n, s, o) {
        try {
            o()
        } catch (u) {
            qe(n, s, u)
        }
    }
    var Rm = !1;

    function FS(n, s) {
        if (Au = Go, n = ap(), bu(n)) {
            if ("selectionStart" in n) var o = {
                start: n.selectionStart,
                end: n.selectionEnd
            };
            else e: {
                o = (o = n.ownerDocument) && o.defaultView || window;
                var u = o.getSelection && o.getSelection();
                if (u && u.rangeCount !== 0) {
                    o = u.anchorNode;
                    var d = u.anchorOffset,
                        p = u.focusNode;
                    u = u.focusOffset;
                    try {
                        o.nodeType, p.nodeType
                    } catch {
                        o = null;
                        break e
                    }
                    var v = 0,
                        k = -1,
                        T = -1,
                        I = 0,
                        W = 0,
                        q = n,
                        $ = null;
                    t: for (;;) {
                        for (var Y; q !== o || d !== 0 && q.nodeType !== 3 || (k = v + d), q !== p || u !== 0 && q.nodeType !== 3 || (T = v + u), q.nodeType === 3 && (v += q.nodeValue.length), (Y = q.firstChild) !== null;) $ = q, q = Y;
                        for (;;) {
                            if (q === n) break t;
                            if ($ === o && ++I === d && (k = v), $ === p && ++W === u && (T = v), (Y = q.nextSibling) !== null) break;
                            q = $, $ = q.parentNode
                        }
                        q = Y
                    }
                    o = k === -1 || T === -1 ? null : {
                        start: k,
                        end: T
                    }
                } else o = null
            }
            o = o || {
                start: 0,
                end: 0
            }
        } else o = null;
        for (Nu = {
                focusedElem: n,
                selectionRange: o
            }, Go = !1, J = s; J !== null;)
            if (s = J, n = s.child, (s.subtreeFlags & 1028) !== 0 && n !== null) n.return = s, J = n;
            else
                for (; J !== null;) {
                    s = J;
                    try {
                        var ee = s.alternate;
                        if ((s.flags & 1024) !== 0) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ee !== null) {
                                    var re = ee.memoizedProps,
                                        Ge = ee.memoizedState,
                                        O = s.stateNode,
                                        _ = O.getSnapshotBeforeUpdate(s.elementType === s.type ? re : sn(s.type, re), Ge);
                                    O.__reactInternalSnapshotBeforeUpdate = _
                                }
                                break;
                            case 3:
                                var L = s.stateNode.containerInfo;
                                L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                        }
                    } catch (Q) {
                        qe(s, s.return, Q)
                    }
                    if (n = s.sibling, n !== null) {
                        n.return = s.return, J = n;
                        break
                    }
                    J = s.return
                }
        return ee = Rm, Rm = !1, ee
    }

    function qi(n, s, o) {
        var u = s.updateQueue;
        if (u = u !== null ? u.lastEffect : null, u !== null) {
            var d = u = u.next;
            do {
                if ((d.tag & n) === n) {
                    var p = d.destroy;
                    d.destroy = void 0, p !== void 0 && vc(s, o, p)
                }
                d = d.next
            } while (d !== u)
        }
    }

    function Aa(n, s) {
        if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var u = o.create;
                    o.destroy = u()
                }
                o = o.next
            } while (o !== s)
        }
    }

    function wc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
                case 5:
                    n = o;
                    break;
                default:
                    n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }

    function Am(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null, Am(s)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (s = n.stateNode, s !== null && (delete s[mn], delete s[Mi], delete s[Du], delete s[xS], delete s[SS])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null
    }

    function Nm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }

    function Om(n) {
        e: for (;;) {
            for (; n.sibling === null;) {
                if (n.return === null || Nm(n.return)) return null;
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
                if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
                n.child.return = n, n = n.child
            }
            if (!(n.flags & 2)) return n.stateNode
        }
    }

    function xc(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6) n = n.stateNode, s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode, s.insertBefore(n, o)) : (s = o, s.appendChild(n)), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = aa));
        else if (u !== 4 && (n = n.child, n !== null))
            for (xc(n, s, o), n = n.sibling; n !== null;) xc(n, s, o), n = n.sibling
    }

    function Sc(n, s, o) {
        var u = n.tag;
        if (u === 5 || u === 6) n = n.stateNode, s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (u !== 4 && (n = n.child, n !== null))
            for (Sc(n, s, o), n = n.sibling; n !== null;) Sc(n, s, o), n = n.sibling
    }
    var lt = null,
        on = !1;

    function rr(n, s, o) {
        for (o = o.child; o !== null;) Lm(n, s, o), o = o.sibling
    }

    function Lm(n, s, o) {
        if (pn && typeof pn.onCommitFiberUnmount == "function") try {
            pn.onCommitFiberUnmount($o, o)
        } catch {}
        switch (o.tag) {
            case 5:
                vt || Ls(o, s);
            case 6:
                var u = lt,
                    d = on;
                lt = null, rr(n, s, o), lt = u, on = d, lt !== null && (on ? (n = lt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : lt.removeChild(o.stateNode));
                break;
            case 18:
                lt !== null && (on ? (n = lt, o = o.stateNode, n.nodeType === 8 ? Mu(n.parentNode, o) : n.nodeType === 1 && Mu(n, o), Ei(n)) : Mu(lt, o.stateNode));
                break;
            case 4:
                u = lt, d = on, lt = o.stateNode.containerInfo, on = !0, rr(n, s, o), lt = u, on = d;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!vt && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
                    d = u = u.next;
                    do {
                        var p = d,
                            v = p.destroy;
                        p = p.tag, v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && vc(o, s, v), d = d.next
                    } while (d !== u)
                }
                rr(n, s, o);
                break;
            case 1:
                if (!vt && (Ls(o, s), u = o.stateNode, typeof u.componentWillUnmount == "function")) try {
                    u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount()
                } catch (k) {
                    qe(o, s, k)
                }
                rr(n, s, o);
                break;
            case 21:
                rr(n, s, o);
                break;
            case 22:
                o.mode & 1 ? (vt = (u = vt) || o.memoizedState !== null, rr(n, s, o), vt = u) : rr(n, s, o);
                break;
            default:
                rr(n, s, o)
        }
    }

    function Mm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new IS), s.forEach(function(u) {
                var d = KS.bind(null, n, u);
                o.has(u) || (o.add(u), u.then(d, d))
            })
        }
    }

    function an(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var u = 0; u < o.length; u++) {
                var d = o[u];
                try {
                    var p = n,
                        v = s,
                        k = v;
                    e: for (; k !== null;) {
                        switch (k.tag) {
                            case 5:
                                lt = k.stateNode, on = !1;
                                break e;
                            case 3:
                                lt = k.stateNode.containerInfo, on = !0;
                                break e;
                            case 4:
                                lt = k.stateNode.containerInfo, on = !0;
                                break e
                        }
                        k = k.return
                    }
                    if (lt === null) throw Error(r(160));
                    Lm(p, v, d), lt = null, on = !1;
                    var T = d.alternate;
                    T !== null && (T.return = null), d.return = null
                } catch (I) {
                    qe(d, s, I)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null;) Dm(s, n), s = s.sibling
    }

    function Dm(n, s) {
        var o = n.alternate,
            u = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (an(s, n), vn(n), u & 4) {
                    try {
                        qi(3, n, n.return), Aa(3, n)
                    } catch (re) {
                        qe(n, n.return, re)
                    }
                    try {
                        qi(5, n, n.return)
                    } catch (re) {
                        qe(n, n.return, re)
                    }
                }
                break;
            case 1:
                an(s, n), vn(n), u & 512 && o !== null && Ls(o, o.return);
                break;
            case 5:
                if (an(s, n), vn(n), u & 512 && o !== null && Ls(o, o.return), n.flags & 32) {
                    var d = n.stateNode;
                    try {
                        fi(d, "")
                    } catch (re) {
                        qe(n, n.return, re)
                    }
                }
                if (u & 4 && (d = n.stateNode, d != null)) {
                    var p = n.memoizedProps,
                        v = o !== null ? o.memoizedProps : p,
                        k = n.type,
                        T = n.updateQueue;
                    if (n.updateQueue = null, T !== null) try {
                        k === "input" && p.type === "radio" && p.name != null && uh(d, p), Jl(k, v);
                        var I = Jl(k, p);
                        for (v = 0; v < T.length; v += 2) {
                            var W = T[v],
                                q = T[v + 1];
                            W === "style" ? yh(d, q) : W === "dangerouslySetInnerHTML" ? mh(d, q) : W === "children" ? fi(d, q) : D(d, W, q, I)
                        }
                        switch (k) {
                            case "input":
                                Kl(d, p);
                                break;
                            case "textarea":
                                fh(d, p);
                                break;
                            case "select":
                                var $ = d._wrapperState.wasMultiple;
                                d._wrapperState.wasMultiple = !!p.multiple;
                                var Y = p.value;
                                Y != null ? fs(d, !!p.multiple, Y, !1) : $ !== !!p.multiple && (p.defaultValue != null ? fs(d, !!p.multiple, p.defaultValue, !0) : fs(d, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        d[Mi] = p
                    } catch (re) {
                        qe(n, n.return, re)
                    }
                }
                break;
            case 6:
                if (an(s, n), vn(n), u & 4) {
                    if (n.stateNode === null) throw Error(r(162));
                    d = n.stateNode, p = n.memoizedProps;
                    try {
                        d.nodeValue = p
                    } catch (re) {
                        qe(n, n.return, re)
                    }
                }
                break;
            case 3:
                if (an(s, n), vn(n), u & 4 && o !== null && o.memoizedState.isDehydrated) try {
                    Ei(s.containerInfo)
                } catch (re) {
                    qe(n, n.return, re)
                }
                break;
            case 4:
                an(s, n), vn(n);
                break;
            case 13:
                an(s, n), vn(n), d = n.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (kc = Qe())), u & 4 && Mm(n);
                break;
            case 22:
                if (W = o !== null && o.memoizedState !== null, n.mode & 1 ? (vt = (I = vt) || W, an(s, n), vt = I) : an(s, n), vn(n), u & 8192) {
                    if (I = n.memoizedState !== null, (n.stateNode.isHidden = I) && !W && (n.mode & 1) !== 0)
                        for (J = n, W = n.child; W !== null;) {
                            for (q = J = W; J !== null;) {
                                switch ($ = J, Y = $.child, $.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        qi(4, $, $.return);
                                        break;
                                    case 1:
                                        Ls($, $.return);
                                        var ee = $.stateNode;
                                        if (typeof ee.componentWillUnmount == "function") {
                                            u = $, o = $.return;
                                            try {
                                                s = u, ee.props = s.memoizedProps, ee.state = s.memoizedState, ee.componentWillUnmount()
                                            } catch (re) {
                                                qe(u, o, re)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Ls($, $.return);
                                        break;
                                    case 22:
                                        if ($.memoizedState !== null) {
                                            Fm(q);
                                            continue
                                        }
                                }
                                Y !== null ? (Y.return = $, J = Y) : Fm(q)
                            }
                            W = W.sibling
                        }
                    e: for (W = null, q = n;;) {
                        if (q.tag === 5) {
                            if (W === null) {
                                W = q;
                                try {
                                    d = q.stateNode, I ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (k = q.stateNode, T = q.memoizedProps.style, v = T != null && T.hasOwnProperty("display") ? T.display : null, k.style.display = gh("display", v))
                                } catch (re) {
                                    qe(n, n.return, re)
                                }
                            }
                        } else if (q.tag === 6) {
                            if (W === null) try {
                                q.stateNode.nodeValue = I ? "" : q.memoizedProps
                            } catch (re) {
                                qe(n, n.return, re)
                            }
                        } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                            q.child.return = q, q = q.child;
                            continue
                        }
                        if (q === n) break e;
                        for (; q.sibling === null;) {
                            if (q.return === null || q.return === n) break e;
                            W === q && (W = null), q = q.return
                        }
                        W === q && (W = null), q.sibling.return = q.return, q = q.sibling
                    }
                }
                break;
            case 19:
                an(s, n), vn(n), u & 4 && Mm(n);
                break;
            case 21:
                break;
            default:
                an(s, n), vn(n)
        }
    }

    function vn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null;) {
                        if (Nm(o)) {
                            var u = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (u.tag) {
                    case 5:
                        var d = u.stateNode;
                        u.flags & 32 && (fi(d, ""), u.flags &= -33);
                        var p = Om(n);
                        Sc(n, p, d);
                        break;
                    case 3:
                    case 4:
                        var v = u.stateNode.containerInfo,
                            k = Om(n);
                        xc(n, k, v);
                        break;
                    default:
                        throw Error(r(161))
                }
            }
            catch (T) {
                qe(n, n.return, T)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }

    function VS(n, s, o) {
        J = n, jm(n)
    }

    function jm(n, s, o) {
        for (var u = (n.mode & 1) !== 0; J !== null;) {
            var d = J,
                p = d.child;
            if (d.tag === 22 && u) {
                var v = d.memoizedState !== null || Ra;
                if (!v) {
                    var k = d.alternate,
                        T = k !== null && k.memoizedState !== null || vt;
                    k = Ra;
                    var I = vt;
                    if (Ra = v, (vt = T) && !I)
                        for (J = d; J !== null;) v = J, T = v.child, v.tag === 22 && v.memoizedState !== null ? Vm(d) : T !== null ? (T.return = v, J = T) : Vm(d);
                    for (; p !== null;) J = p, jm(p), p = p.sibling;
                    J = d, Ra = k, vt = I
                }
                Im(n)
            } else(d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, J = p) : Im(n)
        }
    }

    function Im(n) {
        for (; J !== null;) {
            var s = J;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0) switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            vt || Aa(5, s);
                            break;
                        case 1:
                            var u = s.stateNode;
                            if (s.flags & 4 && !vt)
                                if (o === null) u.componentDidMount();
                                else {
                                    var d = s.elementType === s.type ? o.memoizedProps : sn(s.type, o.memoizedProps);
                                    u.componentDidUpdate(d, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate)
                                } var p = s.updateQueue;
                            p !== null && Fp(s, p, u);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null, s.child !== null) switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                }
                                Fp(s, v, o)
                            }
                            break;
                        case 5:
                            var k = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = k;
                                var T = s.memoizedProps;
                                switch (s.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        T.autoFocus && o.focus();
                                        break;
                                    case "img":
                                        T.src && (o.src = T.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var I = s.alternate;
                                if (I !== null) {
                                    var W = I.memoizedState;
                                    if (W !== null) {
                                        var q = W.dehydrated;
                                        q !== null && Ei(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                    }
                    vt || s.flags & 512 && wc(s)
                } catch ($) {
                    qe(s, s.return, $)
                }
            }
            if (s === n) {
                J = null;
                break
            }
            if (o = s.sibling, o !== null) {
                o.return = s.return, J = o;
                break
            }
            J = s.return
        }
    }

    function Fm(n) {
        for (; J !== null;) {
            var s = J;
            if (s === n) {
                J = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return, J = o;
                break
            }
            J = s.return
        }
    }

    function Vm(n) {
        for (; J !== null;) {
            var s = J;
            try {
                switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var o = s.return;
                        try {
                            Aa(4, s)
                        } catch (T) {
                            qe(s, o, T)
                        }
                        break;
                    case 1:
                        var u = s.stateNode;
                        if (typeof u.componentDidMount == "function") {
                            var d = s.return;
                            try {
                                u.componentDidMount()
                            } catch (T) {
                                qe(s, d, T)
                            }
                        }
                        var p = s.return;
                        try {
                            wc(s)
                        } catch (T) {
                            qe(s, p, T)
                        }
                        break;
                    case 5:
                        var v = s.return;
                        try {
                            wc(s)
                        } catch (T) {
                            qe(s, v, T)
                        }
                }
            } catch (T) {
                qe(s, s.return, T)
            }
            if (s === n) {
                J = null;
                break
            }
            var k = s.sibling;
            if (k !== null) {
                k.return = s.return, J = k;
                break
            }
            J = s.return
        }
    }
    var BS = Math.ceil,
        Na = M.ReactCurrentDispatcher,
        bc = M.ReactCurrentOwner,
        Kt = M.ReactCurrentBatchConfig,
        Ce = 0,
        it = null,
        Je = null,
        ut = 0,
        Bt = 0,
        Ms = Jn(0),
        nt = 0,
        Hi = null,
        Vr = 0,
        Oa = 0,
        Ec = 0,
        Ki = null,
        Rt = null,
        kc = 0,
        Ds = 1 / 0,
        Mn = null,
        La = !1,
        Cc = null,
        sr = null,
        Ma = !1,
        ir = null,
        Da = 0,
        Qi = 0,
        Tc = null,
        ja = -1,
        Ia = 0;

    function kt() {
        return (Ce & 6) !== 0 ? Qe() : ja !== -1 ? ja : ja = Qe()
    }

    function or(n) {
        return (n.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && ut !== 0 ? ut & -ut : ES.transition !== null ? (Ia === 0 && (Ia = Oh()), Ia) : (n = Oe, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Uh(n.type)), n)
    }

    function ln(n, s, o, u) {
        if (50 < Qi) throw Qi = 0, Tc = null, Error(r(185));
        vi(n, o, u), ((Ce & 2) === 0 || n !== it) && (n === it && ((Ce & 2) === 0 && (Oa |= o), nt === 4 && ar(n, ut)), At(n, u), o === 1 && Ce === 0 && (s.mode & 1) === 0 && (Ds = Qe() + 500, da && er()))
    }

    function At(n, s) {
        var o = n.callbackNode;
        E1(n, s);
        var u = Ho(n, n === it ? ut : 0);
        if (u === 0) o !== null && Rh(o), n.callbackNode = null, n.callbackPriority = 0;
        else if (s = u & -u, n.callbackPriority !== s) {
            if (o != null && Rh(o), s === 1) n.tag === 0 ? bS(Um.bind(null, n)) : Tp(Um.bind(null, n)), vS(function() {
                (Ce & 6) === 0 && er()
            }), o = null;
            else {
                switch (Lh(u)) {
                    case 1:
                        o = iu;
                        break;
                    case 4:
                        o = Ah;
                        break;
                    case 16:
                        o = zo;
                        break;
                    case 536870912:
                        o = Nh;
                        break;
                    default:
                        o = zo
                }
                o = Gm(o, Bm.bind(null, n))
            }
            n.callbackPriority = s, n.callbackNode = o
        }
    }

    function Bm(n, s) {
        if (ja = -1, Ia = 0, (Ce & 6) !== 0) throw Error(r(327));
        var o = n.callbackNode;
        if (js() && n.callbackNode !== o) return null;
        var u = Ho(n, n === it ? ut : 0);
        if (u === 0) return null;
        if ((u & 30) !== 0 || (u & n.expiredLanes) !== 0 || s) s = Fa(n, u);
        else {
            s = u;
            var d = Ce;
            Ce |= 2;
            var p = $m();
            (it !== n || ut !== s) && (Mn = null, Ds = Qe() + 500, Ur(n, s));
            do try {
                $S();
                break
            } catch (k) {
                zm(n, k)
            }
            while (!0);
            Wu(), Na.current = p, Ce = d, Je !== null ? s = 0 : (it = null, ut = 0, s = nt)
        }
        if (s !== 0) {
            if (s === 2 && (d = ou(n), d !== 0 && (u = d, s = Pc(n, d))), s === 1) throw o = Hi, Ur(n, 0), ar(n, u), At(n, Qe()), o;
            if (s === 6) ar(n, u);
            else {
                if (d = n.current.alternate, (u & 30) === 0 && !US(d) && (s = Fa(n, u), s === 2 && (p = ou(n), p !== 0 && (u = p, s = Pc(n, p))), s === 1)) throw o = Hi, Ur(n, 0), ar(n, u), At(n, Qe()), o;
                switch (n.finishedWork = d, n.finishedLanes = u, s) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 2:
                        zr(n, Rt, Mn);
                        break;
                    case 3:
                        if (ar(n, u), (u & 130023424) === u && (s = kc + 500 - Qe(), 10 < s)) {
                            if (Ho(n, 0) !== 0) break;
                            if (d = n.suspendedLanes, (d & u) !== u) {
                                kt(), n.pingedLanes |= n.suspendedLanes & d;
                                break
                            }
                            n.timeoutHandle = Lu(zr.bind(null, n, Rt, Mn), s);
                            break
                        }
                        zr(n, Rt, Mn);
                        break;
                    case 4:
                        if (ar(n, u), (u & 4194240) === u) break;
                        for (s = n.eventTimes, d = -1; 0 < u;) {
                            var v = 31 - tn(u);
                            p = 1 << v, v = s[v], v > d && (d = v), u &= ~p
                        }
                        if (u = d, u = Qe() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * BS(u / 1960)) - u, 10 < u) {
                            n.timeoutHandle = Lu(zr.bind(null, n, Rt, Mn), u);
                            break
                        }
                        zr(n, Rt, Mn);
                        break;
                    case 5:
                        zr(n, Rt, Mn);
                        break;
                    default:
                        throw Error(r(329))
                }
            }
        }
        return At(n, Qe()), n.callbackNode === o ? Bm.bind(null, n) : null
    }

    function Pc(n, s) {
        var o = Ki;
        return n.current.memoizedState.isDehydrated && (Ur(n, s).flags |= 256), n = Fa(n, s), n !== 2 && (s = Rt, Rt = o, s !== null && _c(s)), n
    }

    function _c(n) {
        Rt === null ? Rt = n : Rt.push.apply(Rt, n)
    }

    function US(n) {
        for (var s = n;;) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores, o !== null))
                    for (var u = 0; u < o.length; u++) {
                        var d = o[u],
                            p = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!nn(p(), d)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child, s.subtreeFlags & 16384 && o !== null) o.return = s, s = o;
            else {
                if (s === n) break;
                for (; s.sibling === null;) {
                    if (s.return === null || s.return === n) return !0;
                    s = s.return
                }
                s.sibling.return = s.return, s = s.sibling
            }
        }
        return !0
    }

    function ar(n, s) {
        for (s &= ~Ec, s &= ~Oa, n.suspendedLanes |= s, n.pingedLanes &= ~s, n = n.expirationTimes; 0 < s;) {
            var o = 31 - tn(s),
                u = 1 << o;
            n[o] = -1, s &= ~u
        }
    }

    function Um(n) {
        if ((Ce & 6) !== 0) throw Error(r(327));
        js();
        var s = Ho(n, 0);
        if ((s & 1) === 0) return At(n, Qe()), null;
        var o = Fa(n, s);
        if (n.tag !== 0 && o === 2) {
            var u = ou(n);
            u !== 0 && (s = u, o = Pc(n, u))
        }
        if (o === 1) throw o = Hi, Ur(n, 0), ar(n, s), At(n, Qe()), o;
        if (o === 6) throw Error(r(345));
        return n.finishedWork = n.current.alternate, n.finishedLanes = s, zr(n, Rt, Mn), At(n, Qe()), null
    }

    function Rc(n, s) {
        var o = Ce;
        Ce |= 1;
        try {
            return n(s)
        } finally {
            Ce = o, Ce === 0 && (Ds = Qe() + 500, da && er())
        }
    }

    function Br(n) {
        ir !== null && ir.tag === 0 && (Ce & 6) === 0 && js();
        var s = Ce;
        Ce |= 1;
        var o = Kt.transition,
            u = Oe;
        try {
            if (Kt.transition = null, Oe = 1, n) return n()
        } finally {
            Oe = u, Kt.transition = o, Ce = s, (Ce & 6) === 0 && er()
        }
    }

    function Ac() {
        Bt = Ms.current, Ve(Ms)
    }

    function Ur(n, s) {
        n.finishedWork = null, n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1, yS(o)), Je !== null)
            for (o = Je.return; o !== null;) {
                var u = o;
                switch (Vu(u), u.tag) {
                    case 1:
                        u = u.type.childContextTypes, u != null && ua();
                        break;
                    case 3:
                        Ns(), Ve(Tt), Ve(mt), Ju();
                        break;
                    case 5:
                        Yu(u);
                        break;
                    case 4:
                        Ns();
                        break;
                    case 13:
                        Ve(ze);
                        break;
                    case 19:
                        Ve(ze);
                        break;
                    case 10:
                        qu(u.type._context);
                        break;
                    case 22:
                    case 23:
                        Ac()
                }
                o = o.return
            }
        if (it = n, Je = n = lr(n.current, null), ut = Bt = s, nt = 0, Hi = null, Ec = Oa = Vr = 0, Rt = Ki = null, jr !== null) {
            for (s = 0; s < jr.length; s++)
                if (o = jr[s], u = o.interleaved, u !== null) {
                    o.interleaved = null;
                    var d = u.next,
                        p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = d, u.next = v
                    }
                    o.pending = u
                } jr = null
        }
        return n
    }

    function zm(n, s) {
        do {
            var o = Je;
            try {
                if (Wu(), Sa.current = Ca, ba) {
                    for (var u = $e.memoizedState; u !== null;) {
                        var d = u.queue;
                        d !== null && (d.pending = null), u = u.next
                    }
                    ba = !1
                }
                if (Fr = 0, st = tt = $e = null, Bi = !1, Ui = 0, bc.current = null, o === null || o.return === null) {
                    nt = 1, Hi = s, Je = null;
                    break
                }
                e: {
                    var p = n,
                        v = o.return,
                        k = o,
                        T = s;
                    if (s = ut, k.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
                        var I = T,
                            W = k,
                            q = W.tag;
                        if ((W.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var $ = W.alternate;
                            $ ? (W.updateQueue = $.updateQueue, W.memoizedState = $.memoizedState, W.lanes = $.lanes) : (W.updateQueue = null, W.memoizedState = null)
                        }
                        var Y = hm(v);
                        if (Y !== null) {
                            Y.flags &= -257, pm(Y, v, k, p, s), Y.mode & 1 && fm(p, I, s), s = Y, T = I;
                            var ee = s.updateQueue;
                            if (ee === null) {
                                var re = new Set;
                                re.add(T), s.updateQueue = re
                            } else ee.add(T);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                fm(p, I, s), Nc();
                                break e
                            }
                            T = Error(r(426))
                        }
                    } else if (Ue && k.mode & 1) {
                        var Ge = hm(v);
                        if (Ge !== null) {
                            (Ge.flags & 65536) === 0 && (Ge.flags |= 256), pm(Ge, v, k, p, s), zu(Os(T, k));
                            break e
                        }
                    }
                    p = T = Os(T, k),
                    nt !== 4 && (nt = 2),
                    Ki === null ? Ki = [p] : Ki.push(p),
                    p = v;do {
                        switch (p.tag) {
                            case 3:
                                p.flags |= 65536, s &= -s, p.lanes |= s;
                                var O = cm(p, T, s);
                                Ip(p, O);
                                break e;
                            case 1:
                                k = T;
                                var _ = p.type,
                                    L = p.stateNode;
                                if ((p.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (sr === null || !sr.has(L)))) {
                                    p.flags |= 65536, s &= -s, p.lanes |= s;
                                    var Q = dm(p, k, s);
                                    Ip(p, Q);
                                    break e
                                }
                        }
                        p = p.return
                    } while (p !== null)
                }
                qm(o)
            } catch (ie) {
                s = ie, Je === o && o !== null && (Je = o = o.return);
                continue
            }
            break
        } while (!0)
    }

    function $m() {
        var n = Na.current;
        return Na.current = Ca, n === null ? Ca : n
    }

    function Nc() {
        (nt === 0 || nt === 3 || nt === 2) && (nt = 4), it === null || (Vr & 268435455) === 0 && (Oa & 268435455) === 0 || ar(it, ut)
    }

    function Fa(n, s) {
        var o = Ce;
        Ce |= 2;
        var u = $m();
        (it !== n || ut !== s) && (Mn = null, Ur(n, s));
        do try {
            zS();
            break
        } catch (d) {
            zm(n, d)
        }
        while (!0);
        if (Wu(), Ce = o, Na.current = u, Je !== null) throw Error(r(261));
        return it = null, ut = 0, nt
    }

    function zS() {
        for (; Je !== null;) Wm(Je)
    }

    function $S() {
        for (; Je !== null && !p1();) Wm(Je)
    }

    function Wm(n) {
        var s = Qm(n.alternate, n, Bt);
        n.memoizedProps = n.pendingProps, s === null ? qm(n) : Je = s, bc.current = null
    }

    function qm(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return, (s.flags & 32768) === 0) {
                if (o = DS(o, s, Bt), o !== null) {
                    Je = o;
                    return
                }
            } else {
                if (o = jS(o, s), o !== null) {
                    o.flags &= 32767, Je = o;
                    return
                }
                if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
                else {
                    nt = 6, Je = null;
                    return
                }
            }
            if (s = s.sibling, s !== null) {
                Je = s;
                return
            }
            Je = s = n
        } while (s !== null);
        nt === 0 && (nt = 5)
    }

    function zr(n, s, o) {
        var u = Oe,
            d = Kt.transition;
        try {
            Kt.transition = null, Oe = 1, WS(n, s, o, u)
        } finally {
            Kt.transition = d, Oe = u
        }
        return null
    }

    function WS(n, s, o, u) {
        do js(); while (ir !== null);
        if ((Ce & 6) !== 0) throw Error(r(327));
        o = n.finishedWork;
        var d = n.finishedLanes;
        if (o === null) return null;
        if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(r(177));
        n.callbackNode = null, n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (k1(n, p), n === it && (Je = it = null, ut = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || Ma || (Ma = !0, Gm(zo, function() {
                return js(), null
            })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
            p = Kt.transition, Kt.transition = null;
            var v = Oe;
            Oe = 1;
            var k = Ce;
            Ce |= 4, bc.current = null, FS(n, o), Dm(o, n), cS(Nu), Go = !!Au, Nu = Au = null, n.current = o, VS(o), m1(), Ce = k, Oe = v, Kt.transition = p
        } else n.current = o;
        if (Ma && (Ma = !1, ir = n, Da = d), p = n.pendingLanes, p === 0 && (sr = null), v1(o.stateNode), At(n, Qe()), s !== null)
            for (u = n.onRecoverableError, o = 0; o < s.length; o++) d = s[o], u(d.value, {
                componentStack: d.stack,
                digest: d.digest
            });
        if (La) throw La = !1, n = Cc, Cc = null, n;
        return (Da & 1) !== 0 && n.tag !== 0 && js(), p = n.pendingLanes, (p & 1) !== 0 ? n === Tc ? Qi++ : (Qi = 0, Tc = n) : Qi = 0, er(), null
    }

    function js() {
        if (ir !== null) {
            var n = Lh(Da),
                s = Kt.transition,
                o = Oe;
            try {
                if (Kt.transition = null, Oe = 16 > n ? 16 : n, ir === null) var u = !1;
                else {
                    if (n = ir, ir = null, Da = 0, (Ce & 6) !== 0) throw Error(r(331));
                    var d = Ce;
                    for (Ce |= 4, J = n.current; J !== null;) {
                        var p = J,
                            v = p.child;
                        if ((J.flags & 16) !== 0) {
                            var k = p.deletions;
                            if (k !== null) {
                                for (var T = 0; T < k.length; T++) {
                                    var I = k[T];
                                    for (J = I; J !== null;) {
                                        var W = J;
                                        switch (W.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                qi(8, W, p)
                                        }
                                        var q = W.child;
                                        if (q !== null) q.return = W, J = q;
                                        else
                                            for (; J !== null;) {
                                                W = J;
                                                var $ = W.sibling,
                                                    Y = W.return;
                                                if (Am(W), W === I) {
                                                    J = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = Y, J = $;
                                                    break
                                                }
                                                J = Y
                                            }
                                    }
                                }
                                var ee = p.alternate;
                                if (ee !== null) {
                                    var re = ee.child;
                                    if (re !== null) {
                                        ee.child = null;
                                        do {
                                            var Ge = re.sibling;
                                            re.sibling = null, re = Ge
                                        } while (re !== null)
                                    }
                                }
                                J = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null) v.return = p, J = v;
                        else e: for (; J !== null;) {
                            if (p = J, (p.flags & 2048) !== 0) switch (p.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    qi(9, p, p.return)
                            }
                            var O = p.sibling;
                            if (O !== null) {
                                O.return = p.return, J = O;
                                break e
                            }
                            J = p.return
                        }
                    }
                    var _ = n.current;
                    for (J = _; J !== null;) {
                        v = J;
                        var L = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && L !== null) L.return = v, J = L;
                        else e: for (v = _; J !== null;) {
                            if (k = J, (k.flags & 2048) !== 0) try {
                                switch (k.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Aa(9, k)
                                }
                            } catch (ie) {
                                qe(k, k.return, ie)
                            }
                            if (k === v) {
                                J = null;
                                break e
                            }
                            var Q = k.sibling;
                            if (Q !== null) {
                                Q.return = k.return, J = Q;
                                break e
                            }
                            J = k.return
                        }
                    }
                    if (Ce = d, er(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
                        pn.onPostCommitFiberRoot($o, n)
                    } catch {}
                    u = !0
                }
                return u
            } finally {
                Oe = o, Kt.transition = s
            }
        }
        return !1
    }

    function Hm(n, s, o) {
        s = Os(o, s), s = cm(n, s, 1), n = nr(n, s, 1), s = kt(), n !== null && (vi(n, 1, s), At(n, s))
    }

    function qe(n, s, o) {
        if (n.tag === 3) Hm(n, n, o);
        else
            for (; s !== null;) {
                if (s.tag === 3) {
                    Hm(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var u = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (sr === null || !sr.has(u))) {
                        n = Os(o, n), n = dm(s, n, 1), s = nr(s, n, 1), n = kt(), s !== null && (vi(s, 1, n), At(s, n));
                        break
                    }
                }
                s = s.return
            }
    }

    function qS(n, s, o) {
        var u = n.pingCache;
        u !== null && u.delete(s), s = kt(), n.pingedLanes |= n.suspendedLanes & o, it === n && (ut & o) === o && (nt === 4 || nt === 3 && (ut & 130023424) === ut && 500 > Qe() - kc ? Ur(n, 0) : Ec |= o), At(n, s)
    }

    function Km(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = qo, qo <<= 1, (qo & 130023424) === 0 && (qo = 4194304)));
        var o = kt();
        n = Nn(n, s), n !== null && (vi(n, s, o), At(n, o))
    }

    function HS(n) {
        var s = n.memoizedState,
            o = 0;
        s !== null && (o = s.retryLane), Km(n, o)
    }

    function KS(n, s) {
        var o = 0;
        switch (n.tag) {
            case 13:
                var u = n.stateNode,
                    d = n.memoizedState;
                d !== null && (o = d.retryLane);
                break;
            case 19:
                u = n.stateNode;
                break;
            default:
                throw Error(r(314))
        }
        u !== null && u.delete(s), Km(n, o)
    }
    var Qm;
    Qm = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Tt.current) _t = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0) return _t = !1, MS(n, s, o);
                _t = (n.flags & 131072) !== 0
            }
        else _t = !1, Ue && (s.flags & 1048576) !== 0 && Pp(s, ha, s.index);
        switch (s.lanes = 0, s.tag) {
            case 2:
                var u = s.type;
                _a(n, s), n = s.pendingProps;
                var d = ks(s, mt.current);
                As(s, o), d = tc(null, s, u, n, d, o);
                var p = nc();
                return s.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Pt(u) ? (p = !0, ca(s)) : p = !1, s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Qu(s), d.updater = Ta, s.stateNode = d, d._reactInternals = s, lc(s, u, n, o), s = fc(null, s, u, !0, p, o)) : (s.tag = 0, Ue && p && Fu(s), Et(null, s, d, o), s = s.child), s;
            case 16:
                u = s.elementType;
                e: {
                    switch (_a(n, s), n = s.pendingProps, d = u._init, u = d(u._payload), s.type = u, d = s.tag = GS(u), n = sn(u, n), d) {
                        case 0:
                            s = dc(null, s, u, n, o);
                            break e;
                        case 1:
                            s = xm(null, s, u, n, o);
                            break e;
                        case 11:
                            s = mm(null, s, u, n, o);
                            break e;
                        case 14:
                            s = gm(null, s, u, sn(u.type, n), o);
                            break e
                    }
                    throw Error(r(306, u, ""))
                }
                return s;
            case 0:
                return u = s.type, d = s.pendingProps, d = s.elementType === u ? d : sn(u, d), dc(n, s, u, d, o);
            case 1:
                return u = s.type, d = s.pendingProps, d = s.elementType === u ? d : sn(u, d), xm(n, s, u, d, o);
            case 3:
                e: {
                    if (Sm(s), n === null) throw Error(r(387));u = s.pendingProps,
                    p = s.memoizedState,
                    d = p.element,
                    jp(n, s),
                    wa(s, u, null, o);
                    var v = s.memoizedState;
                    if (u = v.element, p.isDehydrated)
                        if (p = {
                                element: u,
                                isDehydrated: !1,
                                cache: v.cache,
                                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                                transitions: v.transitions
                            }, s.updateQueue.baseState = p, s.memoizedState = p, s.flags & 256) {
                            d = Os(Error(r(423)), s), s = bm(n, s, u, o, d);
                            break e
                        } else if (u !== d) {
                        d = Os(Error(r(424)), s), s = bm(n, s, u, o, d);
                        break e
                    } else
                        for (Vt = Xn(s.stateNode.containerInfo.firstChild), Ft = s, Ue = !0, rn = null, o = Mp(s, null, u, o), s.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
                    else {
                        if (Ps(), u === d) {
                            s = Ln(n, s, o);
                            break e
                        }
                        Et(n, s, u, o)
                    }
                    s = s.child
                }
                return s;
            case 5:
                return Vp(s), n === null && Uu(s), u = s.type, d = s.pendingProps, p = n !== null ? n.memoizedProps : null, v = d.children, Ou(u, d) ? v = null : p !== null && Ou(u, p) && (s.flags |= 32), wm(n, s), Et(n, s, v, o), s.child;
            case 6:
                return n === null && Uu(s), null;
            case 13:
                return Em(n, s, o);
            case 4:
                return Gu(s, s.stateNode.containerInfo), u = s.pendingProps, n === null ? s.child = _s(s, null, u, o) : Et(n, s, u, o), s.child;
            case 11:
                return u = s.type, d = s.pendingProps, d = s.elementType === u ? d : sn(u, d), mm(n, s, u, d, o);
            case 7:
                return Et(n, s, s.pendingProps, o), s.child;
            case 8:
                return Et(n, s, s.pendingProps.children, o), s.child;
            case 12:
                return Et(n, s, s.pendingProps.children, o), s.child;
            case 10:
                e: {
                    if (u = s.type._context, d = s.pendingProps, p = s.memoizedProps, v = d.value, Ie(ga, u._currentValue), u._currentValue = v, p !== null)
                        if (nn(p.value, v)) {
                            if (p.children === d.children && !Tt.current) {
                                s = Ln(n, s, o);
                                break e
                            }
                        } else
                            for (p = s.child, p !== null && (p.return = s); p !== null;) {
                                var k = p.dependencies;
                                if (k !== null) {
                                    v = p.child;
                                    for (var T = k.firstContext; T !== null;) {
                                        if (T.context === u) {
                                            if (p.tag === 1) {
                                                T = On(-1, o & -o), T.tag = 2;
                                                var I = p.updateQueue;
                                                if (I !== null) {
                                                    I = I.shared;
                                                    var W = I.pending;
                                                    W === null ? T.next = T : (T.next = W.next, W.next = T), I.pending = T
                                                }
                                            }
                                            p.lanes |= o, T = p.alternate, T !== null && (T.lanes |= o), Hu(p.return, o, s), k.lanes |= o;
                                            break
                                        }
                                        T = T.next
                                    }
                                } else if (p.tag === 10) v = p.type === s.type ? null : p.child;
                                else if (p.tag === 18) {
                                    if (v = p.return, v === null) throw Error(r(341));
                                    v.lanes |= o, k = v.alternate, k !== null && (k.lanes |= o), Hu(v, o, s), v = p.sibling
                                } else v = p.child;
                                if (v !== null) v.return = p;
                                else
                                    for (v = p; v !== null;) {
                                        if (v === s) {
                                            v = null;
                                            break
                                        }
                                        if (p = v.sibling, p !== null) {
                                            p.return = v.return, v = p;
                                            break
                                        }
                                        v = v.return
                                    }
                                p = v
                            }
                    Et(n, s, d.children, o),
                    s = s.child
                }
                return s;
            case 9:
                return d = s.type, u = s.pendingProps.children, As(s, o), d = qt(d), u = u(d), s.flags |= 1, Et(n, s, u, o), s.child;
            case 14:
                return u = s.type, d = sn(u, s.pendingProps), d = sn(u.type, d), gm(n, s, u, d, o);
            case 15:
                return ym(n, s, s.type, s.pendingProps, o);
            case 17:
                return u = s.type, d = s.pendingProps, d = s.elementType === u ? d : sn(u, d), _a(n, s), s.tag = 1, Pt(u) ? (n = !0, ca(s)) : n = !1, As(s, o), lm(s, u, d), lc(s, u, d, o), fc(null, s, u, !0, n, o);
            case 19:
                return Cm(n, s, o);
            case 22:
                return vm(n, s, o)
        }
        throw Error(r(156, s.tag))
    };

    function Gm(n, s) {
        return _h(n, s)
    }

    function QS(n, s, o, u) {
        this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Qt(n, s, o, u) {
        return new QS(n, s, o, u)
    }

    function Oc(n) {
        return n = n.prototype, !(!n || !n.isReactComponent)
    }

    function GS(n) {
        if (typeof n == "function") return Oc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof, n === Le) return 11;
            if (n === je) return 14
        }
        return 2
    }

    function lr(n, s) {
        var o = n.alternate;
        return o === null ? (o = Qt(n.tag, s, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = s, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, s = n.dependencies, o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o
    }

    function Va(n, s, o, u, d, p) {
        var v = 2;
        if (u = n, typeof n == "function") Oc(n) && (v = 1);
        else if (typeof n == "string") v = 5;
        else e: switch (n) {
            case G:
                return $r(o.children, d, p, s);
            case j:
                v = 8, d |= 8;
                break;
            case Z:
                return n = Qt(12, o, s, d | 2), n.elementType = Z, n.lanes = p, n;
            case Me:
                return n = Qt(13, o, s, d), n.elementType = Me, n.lanes = p, n;
            case Re:
                return n = Qt(19, o, s, d), n.elementType = Re, n.lanes = p, n;
            case de:
                return Ba(o, d, p, s);
            default:
                if (typeof n == "object" && n !== null) switch (n.$$typeof) {
                    case fe:
                        v = 10;
                        break e;
                    case _e:
                        v = 9;
                        break e;
                    case Le:
                        v = 11;
                        break e;
                    case je:
                        v = 14;
                        break e;
                    case we:
                        v = 16, u = null;
                        break e
                }
                throw Error(r(130, n == null ? n : typeof n, ""))
        }
        return s = Qt(v, o, s, d), s.elementType = n, s.type = u, s.lanes = p, s
    }

    function $r(n, s, o, u) {
        return n = Qt(7, n, u, s), n.lanes = o, n
    }

    function Ba(n, s, o, u) {
        return n = Qt(22, n, u, s), n.elementType = de, n.lanes = o, n.stateNode = {
            isHidden: !1
        }, n
    }

    function Lc(n, s, o) {
        return n = Qt(6, n, null, s), n.lanes = o, n
    }

    function Mc(n, s, o) {
        return s = Qt(4, n.children !== null ? n.children : [], n.key, s), s.lanes = o, s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        }, s
    }

    function YS(n, s, o, u, d) {
        this.tag = s, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = au(0), this.expirationTimes = au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = au(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null
    }

    function Dc(n, s, o, u, d, p, v, k, T) {
        return n = new YS(n, s, o, k, T), s === 1 ? (s = 1, p === !0 && (s |= 8)) : s = 0, p = Qt(3, null, null, s), n.current = p, p.stateNode = n, p.memoizedState = {
            element: u,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Qu(p), n
    }

    function XS(n, s, o) {
        var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: u == null ? null : "" + u,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }

    function Ym(n) {
        if (!n) return Zn;
        n = n._reactInternals;
        e: {
            if (Nr(n) !== n || n.tag !== 1) throw Error(r(170));
            var s = n;do {
                switch (s.tag) {
                    case 3:
                        s = s.stateNode.context;
                        break e;
                    case 1:
                        if (Pt(s.type)) {
                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Pt(o)) return kp(n, o, s)
        }
        return s
    }

    function Xm(n, s, o, u, d, p, v, k, T) {
        return n = Dc(o, u, !0, n, d, p, v, k, T), n.context = Ym(null), o = n.current, u = kt(), d = or(o), p = On(u, d), p.callback = s ?? null, nr(o, p, d), n.current.lanes = d, vi(n, d, u), At(n, u), n
    }

    function Ua(n, s, o, u) {
        var d = s.current,
            p = kt(),
            v = or(d);
        return o = Ym(o), s.context === null ? s.context = o : s.pendingContext = o, s = On(p, v), s.payload = {
            element: n
        }, u = u === void 0 ? null : u, u !== null && (s.callback = u), n = nr(d, s, v), n !== null && (ln(n, d, v, p), va(n, d, v)), v
    }

    function za(n) {
        if (n = n.current, !n.child) return null;
        switch (n.child.tag) {
            case 5:
                return n.child.stateNode;
            default:
                return n.child.stateNode
        }
    }

    function Jm(n, s) {
        if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }

    function jc(n, s) {
        Jm(n, s), (n = n.alternate) && Jm(n, s)
    }

    function JS() {
        return null
    }
    var Zm = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    };

    function Ic(n) {
        this._internalRoot = n
    }
    $a.prototype.render = Ic.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null) throw Error(r(409));
        Ua(n, s, null, null)
    }, $a.prototype.unmount = Ic.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Br(function() {
                Ua(null, n, null, null)
            }), s[Pn] = null
        }
    };

    function $a(n) {
        this._internalRoot = n
    }
    $a.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = jh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Qn.length && s !== 0 && s < Qn[o].priority; o++);
            Qn.splice(o, 0, n), o === 0 && Vh(n)
        }
    };

    function Fc(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }

    function Wa(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }

    function eg() {}

    function ZS(n, s, o, u, d) {
        if (d) {
            if (typeof u == "function") {
                var p = u;
                u = function() {
                    var I = za(v);
                    p.call(I)
                }
            }
            var v = Xm(s, u, n, 0, null, !1, !1, "", eg);
            return n._reactRootContainer = v, n[Pn] = v.current, Oi(n.nodeType === 8 ? n.parentNode : n), Br(), v
        }
        for (; d = n.lastChild;) n.removeChild(d);
        if (typeof u == "function") {
            var k = u;
            u = function() {
                var I = za(T);
                k.call(I)
            }
        }
        var T = Dc(n, 0, !1, null, null, !1, !1, "", eg);
        return n._reactRootContainer = T, n[Pn] = T.current, Oi(n.nodeType === 8 ? n.parentNode : n), Br(function() {
            Ua(s, T, o, u)
        }), T
    }

    function qa(n, s, o, u, d) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof d == "function") {
                var k = d;
                d = function() {
                    var T = za(v);
                    k.call(T)
                }
            }
            Ua(s, v, n, d)
        } else v = ZS(o, s, n, d, u);
        return za(v)
    }
    Mh = function(n) {
        switch (n.tag) {
            case 3:
                var s = n.stateNode;
                if (s.current.memoizedState.isDehydrated) {
                    var o = yi(s.pendingLanes);
                    o !== 0 && (lu(s, o | 1), At(s, Qe()), (Ce & 6) === 0 && (Ds = Qe() + 500, er()))
                }
                break;
            case 13:
                Br(function() {
                    var u = Nn(n, 1);
                    if (u !== null) {
                        var d = kt();
                        ln(u, n, 1, d)
                    }
                }), jc(n, 1)
        }
    }, uu = function(n) {
        if (n.tag === 13) {
            var s = Nn(n, 134217728);
            if (s !== null) {
                var o = kt();
                ln(s, n, 134217728, o)
            }
            jc(n, 134217728)
        }
    }, Dh = function(n) {
        if (n.tag === 13) {
            var s = or(n),
                o = Nn(n, s);
            if (o !== null) {
                var u = kt();
                ln(o, n, s, u)
            }
            jc(n, s)
        }
    }, jh = function() {
        return Oe
    }, Ih = function(n, s) {
        var o = Oe;
        try {
            return Oe = n, s()
        } finally {
            Oe = o
        }
    }, tu = function(n, s, o) {
        switch (s) {
            case "input":
                if (Kl(n, o), s = o.name, o.type === "radio" && s != null) {
                    for (o = n; o.parentNode;) o = o.parentNode;
                    for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < o.length; s++) {
                        var u = o[s];
                        if (u !== n && u.form === n.form) {
                            var d = la(u);
                            if (!d) throw Error(r(90));
                            Ar(u), Kl(u, d)
                        }
                    }
                }
                break;
            case "textarea":
                fh(n, o);
                break;
            case "select":
                s = o.value, s != null && fs(n, !!o.multiple, s, !1)
        }
    }, Sh = Rc, bh = Br;
    var eb = {
            usingClientEntryPoint: !1,
            Events: [Di, bs, la, wh, xh, Rc]
        },
        Gi = {
            findFiberByHostInstance: Or,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        tb = {
            bundleType: Gi.bundleType,
            version: Gi.version,
            rendererPackageName: Gi.rendererPackageName,
            rendererConfig: Gi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: M.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(n) {
                return n = Th(n), n === null ? null : n.stateNode
            },
            findFiberByHostInstance: Gi.findFiberByHostInstance || JS,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ha.isDisabled && Ha.supportsFiber) try {
            $o = Ha.inject(tb), pn = Ha
        } catch {}
    }
    return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eb, Nt.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Fc(s)) throw Error(r(200));
        return XS(n, s, null, o)
    }, Nt.createRoot = function(n, s) {
        if (!Fc(n)) throw Error(r(299));
        var o = !1,
            u = "",
            d = Zm;
        return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (u = s.identifierPrefix), s.onRecoverableError !== void 0 && (d = s.onRecoverableError)), s = Dc(n, 1, !1, null, null, o, !1, u, d), n[Pn] = s.current, Oi(n.nodeType === 8 ? n.parentNode : n), new Ic(s)
    }, Nt.findDOMNode = function(n) {
        if (n == null) return null;
        if (n.nodeType === 1) return n;
        var s = n._reactInternals;
        if (s === void 0) throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
        return n = Th(s), n = n === null ? null : n.stateNode, n
    }, Nt.flushSync = function(n) {
        return Br(n)
    }, Nt.hydrate = function(n, s, o) {
        if (!Wa(s)) throw Error(r(200));
        return qa(null, n, s, !0, o)
    }, Nt.hydrateRoot = function(n, s, o) {
        if (!Fc(n)) throw Error(r(405));
        var u = o != null && o.hydratedSources || null,
            d = !1,
            p = "",
            v = Zm;
        if (o != null && (o.unstable_strictMode === !0 && (d = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (v = o.onRecoverableError)), s = Xm(s, null, n, 1, o ?? null, d, !1, p, v), n[Pn] = s.current, Oi(n), u)
            for (n = 0; n < u.length; n++) o = u[n], d = o._getVersion, d = d(o._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, d] : s.mutableSourceEagerHydrationData.push(o, d);
        return new $a(s)
    }, Nt.render = function(n, s, o) {
        if (!Wa(s)) throw Error(r(200));
        return qa(null, n, s, !1, o)
    }, Nt.unmountComponentAtNode = function(n) {
        if (!Wa(n)) throw Error(r(40));
        return n._reactRootContainer ? (Br(function() {
            qa(null, null, n, !1, function() {
                n._reactRootContainer = null, n[Pn] = null
            })
        }), !0) : !1
    }, Nt.unstable_batchedUpdates = Rc, Nt.unstable_renderSubtreeIntoContainer = function(n, s, o, u) {
        if (!Wa(o)) throw Error(r(200));
        if (n == null || n._reactInternals === void 0) throw Error(r(38));
        return qa(n, s, o, !1, u)
    }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt
}
var ug;

function Xv() {
    if (ug) return zc.exports;
    ug = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (e) {
            console.error(e)
        }
    }
    return t(), zc.exports = cb(), zc.exports
}
var cg;

function db() {
    if (cg) return Qa;
    cg = 1;
    var t = Xv();
    return Qa.createRoot = t.createRoot, Qa.hydrateRoot = t.hydrateRoot, Qa
}
var fb = db();
const hb = Gv(fb),
    pb = 20,
    mb = 1e6,
    Vn = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST"
    };
let qc = 0;

function gb() {
    return qc = (qc + 1) % Number.MAX_VALUE, qc.toString()
}
const Hc = new Map,
    dg = t => {
        if (Hc.has(t)) return;
        const e = setTimeout(() => {
            Hc.delete(t), co({
                type: Vn.REMOVE_TOAST,
                toastId: t
            })
        }, mb);
        Hc.set(t, e)
    },
    yb = (t, e) => {
        switch (e.type) {
            case Vn.ADD_TOAST:
                return {
                    ...t, toasts: [e.toast, ...t.toasts].slice(0, pb)
                };
            case Vn.UPDATE_TOAST:
                return {
                    ...t, toasts: t.toasts.map(r => r.id === e.toast.id ? {
                        ...r,
                        ...e.toast
                    } : r)
                };
            case Vn.DISMISS_TOAST: {
                const {
                    toastId: r
                } = e;
                return r ? dg(r) : t.toasts.forEach(i => {
                    dg(i.id)
                }), {
                    ...t,
                    toasts: t.toasts.map(i => i.id === r || r === void 0 ? {
                        ...i,
                        open: !1
                    } : i)
                }
            }
            case Vn.REMOVE_TOAST:
                return e.toastId === void 0 ? {
                    ...t,
                    toasts: []
                } : {
                    ...t,
                    toasts: t.toasts.filter(r => r.id !== e.toastId)
                }
        }
    },
    il = [];
let ol = {
    toasts: []
};

function co(t) {
    ol = yb(ol, t), il.forEach(e => {
        e(ol)
    })
}

function vb({
    ...t
}) {
    const e = gb(),
        r = a => co({
            type: Vn.UPDATE_TOAST,
            toast: {
                ...a,
                id: e
            }
        }),
        i = () => co({
            type: Vn.DISMISS_TOAST,
            toastId: e
        });
    return co({
        type: Vn.ADD_TOAST,
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }), {
        id: e,
        dismiss: i,
        update: r
    }
}

function wb() {
    const [t, e] = N.useState(ol);
    return N.useEffect(() => (il.push(e), () => {
        const r = il.indexOf(e);
        r > -1 && il.splice(r, 1)
    }), [t]), {
        ...t,
        toast: vb,
        dismiss: r => co({
            type: Vn.DISMISS_TOAST,
            toastId: r
        })
    }
}

function Jv(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++) t[e] && (r = Jv(t[e])) && (i && (i += " "), i += r)
        } else
            for (r in t) t[r] && (i && (i += " "), i += r);
    return i
}

function Zv() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)(t = arguments[r]) && (e = Jv(t)) && (i && (i += " "), i += e);
    return i
}
const fg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    hg = Zv,
    e0 = (t, e) => r => {
        var i;
        if ((e == null ? void 0 : e.variants) == null) return hg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
        const {
            variants: a,
            defaultVariants: l
        } = e, c = Object.keys(a).map(m => {
            const g = r == null ? void 0 : r[m],
                y = l == null ? void 0 : l[m];
            if (g === null) return null;
            const w = fg(g) || fg(y);
            return a[m][w]
        }), f = r && Object.entries(r).reduce((m, g) => {
            let [y, w] = g;
            return w === void 0 || (m[y] = w), m
        }, {}), h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((m, g) => {
            let {
                class: y,
                className: w,
                ...E
            } = g;
            return Object.entries(E).every(S => {
                let [b, x] = S;
                return Array.isArray(x) ? x.includes({
                    ...l,
                    ...f
                } [b]) : {
                    ...l,
                    ...f
                } [b] === x
            }) ? [...m, y, w] : m
        }, []);
        return hg(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
    };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    t0 = (...t) => t.filter((e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = N.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: l,
    iconNode: c,
    ...f
}, h) => N.createElement("svg", {
    ref: h,
    ...Sb,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: t0("lucide", a),
    ...f
}, [...c.map(([m, g]) => N.createElement(m, g)), ...Array.isArray(l) ? l : [l]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = (t, e) => {
    const r = N.forwardRef(({
        className: i,
        ...a
    }, l) => N.createElement(bb, {
        ref: l,
        iconNode: e,
        className: t0(`lucide-${xb(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`, r
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eb = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    kb = ht("ChevronDown", Eb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ],
    Tb = ht("ChevronLeft", Cb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ],
    _b = ht("ChevronRight", Pb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rb = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ],
    Ab = ht("Clock", Rb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = [
        ["path", {
            d: "M10 2v2",
            key: "7u0qdc"
        }],
        ["path", {
            d: "M14 2v2",
            key: "6buw04"
        }],
        ["path", {
            d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
            key: "pwadti"
        }],
        ["path", {
            d: "M6 2v2",
            key: "colzsn"
        }]
    ],
    Ob = ht("Coffee", Nb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lb = [
        ["path", {
            d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
            key: "1kt360"
        }],
        ["path", {
            d: "m9 13 2 2 4-4",
            key: "6343dt"
        }]
    ],
    Mb = ht("FolderCheck", Lb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Db = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ],
    jb = ht("Globe", Db);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ib = [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]
    ],
    Fb = ht("Mail", Ib);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    Bb = ht("MapPin", Vb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ub = [
        ["path", {
            d: "m3 11 18-5v12L3 14v-3z",
            key: "n962bs"
        }],
        ["path", {
            d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
            key: "1yl0tm"
        }]
    ],
    zb = ht("Megaphone", Ub);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    Wb = ht("Menu", $b);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qb = [
        ["path", {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0"
        }],
        ["path", {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd"
        }]
    ],
    Hb = ht("Quote", qb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kb = [
        ["path", {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }],
        ["path", {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }],
        ["path", {
            d: "M8 16H3v5",
            key: "1cv678"
        }]
    ],
    Qb = ht("RefreshCw", Kb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gb = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    Yb = ht("Send", Gb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xb = [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }]
    ],
    Jb = ht("Smartphone", Xb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["path", {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }]
    ],
    eE = ht("Users", Zb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    n0 = ht("X", tE),
    nE = (t, e) => {
        const r = new Array(t.length + e.length);
        for (let i = 0; i < t.length; i++) r[i] = t[i];
        for (let i = 0; i < e.length; i++) r[t.length + i] = e[i];
        return r
    },
    rE = (t, e) => ({
        classGroupId: t,
        validator: e
    }),
    r0 = (t = new Map, e = null, r) => ({
        nextPart: t,
        validators: e,
        classGroupId: r
    }),
    vl = "-",
    pg = [],
    sE = "arbitrary..",
    iE = t => {
        const e = aE(t),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: i
            } = t;
        return {
            getClassGroupId: c => {
                if (c.startsWith("[") && c.endsWith("]")) return oE(c);
                const f = c.split(vl),
                    h = f[0] === "" && f.length > 1 ? 1 : 0;
                return s0(f, h, e)
            },
            getConflictingClassGroupIds: (c, f) => {
                if (f) {
                    const h = i[c],
                        m = r[c];
                    return h ? m ? nE(m, h) : h : m || pg
                }
                return r[c] || pg
            }
        }
    },
    s0 = (t, e, r) => {
        if (t.length - e === 0) return r.classGroupId;
        const a = t[e],
            l = r.nextPart.get(a);
        if (l) {
            const m = s0(t, e + 1, l);
            if (m) return m
        }
        const c = r.validators;
        if (c === null) return;
        const f = e === 0 ? t.join(vl) : t.slice(e).join(vl),
            h = c.length;
        for (let m = 0; m < h; m++) {
            const g = c[m];
            if (g.validator(f)) return g.classGroupId
        }
    },
    oE = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const e = t.slice(1, -1),
            r = e.indexOf(":"),
            i = e.slice(0, r);
        return i ? sE + i : void 0
    })(),
    aE = t => {
        const {
            theme: e,
            classGroups: r
        } = t;
        return lE(r, e)
    },
    lE = (t, e) => {
        const r = r0();
        for (const i in t) {
            const a = t[i];
            uf(a, r, i, e)
        }
        return r
    },
    uf = (t, e, r, i) => {
        const a = t.length;
        for (let l = 0; l < a; l++) {
            const c = t[l];
            uE(c, e, r, i)
        }
    },
    uE = (t, e, r, i) => {
        if (typeof t == "string") {
            cE(t, e, r);
            return
        }
        if (typeof t == "function") {
            dE(t, e, r, i);
            return
        }
        fE(t, e, r, i)
    },
    cE = (t, e, r) => {
        const i = t === "" ? e : i0(e, t);
        i.classGroupId = r
    },
    dE = (t, e, r, i) => {
        if (hE(t)) {
            uf(t(i), e, r, i);
            return
        }
        e.validators === null && (e.validators = []), e.validators.push(rE(r, t))
    },
    fE = (t, e, r, i) => {
        const a = Object.entries(t),
            l = a.length;
        for (let c = 0; c < l; c++) {
            const [f, h] = a[c];
            uf(h, i0(e, f), r, i)
        }
    },
    i0 = (t, e) => {
        let r = t;
        const i = e.split(vl),
            a = i.length;
        for (let l = 0; l < a; l++) {
            const c = i[l];
            let f = r.nextPart.get(c);
            f || (f = r0(), r.nextPart.set(c, f)), r = f
        }
        return r
    },
    hE = t => "isThemeGetter" in t && t.isThemeGetter === !0,
    pE = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            r = Object.create(null),
            i = Object.create(null);
        const a = (l, c) => {
            r[l] = c, e++, e > t && (e = 0, i = r, r = Object.create(null))
        };
        return {
            get(l) {
                let c = r[l];
                if (c !== void 0) return c;
                if ((c = i[l]) !== void 0) return a(l, c), c
            },
            set(l, c) {
                l in r ? r[l] = c : a(l, c)
            }
        }
    },
    gd = "!",
    mg = ":",
    mE = [],
    gg = (t, e, r, i, a) => ({
        modifiers: t,
        hasImportantModifier: e,
        baseClassName: r,
        maybePostfixModifierPosition: i,
        isExternal: a
    }),
    gE = t => {
        const {
            prefix: e,
            experimentalParseClassName: r
        } = t;
        let i = a => {
            const l = [];
            let c = 0,
                f = 0,
                h = 0,
                m;
            const g = a.length;
            for (let b = 0; b < g; b++) {
                const x = a[b];
                if (c === 0 && f === 0) {
                    if (x === mg) {
                        l.push(a.slice(h, b)), h = b + 1;
                        continue
                    }
                    if (x === "/") {
                        m = b;
                        continue
                    }
                }
                x === "[" ? c++ : x === "]" ? c-- : x === "(" ? f++ : x === ")" && f--
            }
            const y = l.length === 0 ? a : a.slice(h);
            let w = y,
                E = !1;
            y.endsWith(gd) ? (w = y.slice(0, -1), E = !0) : y.startsWith(gd) && (w = y.slice(1), E = !0);
            const S = m && m > h ? m - h : void 0;
            return gg(l, E, w, S)
        };
        if (e) {
            const a = e + mg,
                l = i;
            i = c => c.startsWith(a) ? l(c.slice(a.length)) : gg(mE, !1, c, void 0, !0)
        }
        if (r) {
            const a = i;
            i = l => r({
                className: l,
                parseClassName: a
            })
        }
        return i
    },
    yE = t => {
        const e = new Map;
        return t.orderSensitiveModifiers.forEach((r, i) => {
            e.set(r, 1e6 + i)
        }), r => {
            const i = [];
            let a = [];
            for (let l = 0; l < r.length; l++) {
                const c = r[l],
                    f = c[0] === "[",
                    h = e.has(c);
                f || h ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(c)) : a.push(c)
            }
            return a.length > 0 && (a.sort(), i.push(...a)), i
        }
    },
    vE = t => ({
        cache: pE(t.cacheSize),
        parseClassName: gE(t),
        sortModifiers: yE(t),
        ...iE(t)
    }),
    wE = /\s+/,
    xE = (t, e) => {
        const {
            parseClassName: r,
            getClassGroupId: i,
            getConflictingClassGroupIds: a,
            sortModifiers: l
        } = e, c = [], f = t.trim().split(wE);
        let h = "";
        for (let m = f.length - 1; m >= 0; m -= 1) {
            const g = f[m],
                {
                    isExternal: y,
                    modifiers: w,
                    hasImportantModifier: E,
                    baseClassName: S,
                    maybePostfixModifierPosition: b
                } = r(g);
            if (y) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            let x = !!b,
                R = i(x ? S.substring(0, b) : S);
            if (!R) {
                if (!x) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                if (R = i(S), !R) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                x = !1
            }
            const V = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":"),
                D = E ? V + gd : V,
                M = D + R;
            if (c.indexOf(M) > -1) continue;
            c.push(M);
            const B = a(R, x);
            for (let K = 0; K < B.length; ++K) {
                const G = B[K];
                c.push(D + G)
            }
            h = g + (h.length > 0 ? " " + h : h)
        }
        return h
    },
    SE = (...t) => {
        let e = 0,
            r, i, a = "";
        for (; e < t.length;)(r = t[e++]) && (i = o0(r)) && (a && (a += " "), a += i);
        return a
    },
    o0 = t => {
        if (typeof t == "string") return t;
        let e, r = "";
        for (let i = 0; i < t.length; i++) t[i] && (e = o0(t[i])) && (r && (r += " "), r += e);
        return r
    },
    bE = (t, ...e) => {
        let r, i, a, l;
        const c = h => {
                const m = e.reduce((g, y) => y(g), t());
                return r = vE(m), i = r.cache.get, a = r.cache.set, l = f, f(h)
            },
            f = h => {
                const m = i(h);
                if (m) return m;
                const g = xE(h, r);
                return a(h, g), g
            };
        return l = c, (...h) => l(SE(...h))
    },
    EE = [],
    rt = t => {
        const e = r => r[t] || EE;
        return e.isThemeGetter = !0, e
    },
    a0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    l0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    kE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    CE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    TE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    PE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    _E = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    RE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    cr = t => kE.test(t),
    xe = t => !!t && !Number.isNaN(Number(t)),
    dr = t => !!t && Number.isInteger(Number(t)),
    Kc = t => t.endsWith("%") && xe(t.slice(0, -1)),
    Dn = t => CE.test(t),
    u0 = () => !0,
    AE = t => TE.test(t) && !PE.test(t),
    cf = () => !1,
    NE = t => _E.test(t),
    OE = t => RE.test(t),
    LE = t => !te(t) && !ne(t),
    ME = t => Pr(t, f0, cf),
    te = t => a0.test(t),
    Wr = t => Pr(t, h0, AE),
    yg = t => Pr(t, zE, xe),
    DE = t => Pr(t, m0, u0),
    jE = t => Pr(t, p0, cf),
    vg = t => Pr(t, c0, cf),
    IE = t => Pr(t, d0, OE),
    Ga = t => Pr(t, g0, NE),
    ne = t => l0.test(t),
    Xi = t => cs(t, h0),
    FE = t => cs(t, p0),
    wg = t => cs(t, c0),
    VE = t => cs(t, f0),
    BE = t => cs(t, d0),
    Ya = t => cs(t, g0, !0),
    UE = t => cs(t, m0, !0),
    Pr = (t, e, r) => {
        const i = a0.exec(t);
        return i ? i[1] ? e(i[1]) : r(i[2]) : !1
    },
    cs = (t, e, r = !1) => {
        const i = l0.exec(t);
        return i ? i[1] ? e(i[1]) : r : !1
    },
    c0 = t => t === "position" || t === "percentage",
    d0 = t => t === "image" || t === "url",
    f0 = t => t === "length" || t === "size" || t === "bg-size",
    h0 = t => t === "length",
    zE = t => t === "number",
    p0 = t => t === "family-name",
    m0 = t => t === "number" || t === "weight",
    g0 = t => t === "shadow",
    $E = () => {
        const t = rt("color"),
            e = rt("font"),
            r = rt("text"),
            i = rt("font-weight"),
            a = rt("tracking"),
            l = rt("leading"),
            c = rt("breakpoint"),
            f = rt("container"),
            h = rt("spacing"),
            m = rt("radius"),
            g = rt("shadow"),
            y = rt("inset-shadow"),
            w = rt("text-shadow"),
            E = rt("drop-shadow"),
            S = rt("blur"),
            b = rt("perspective"),
            x = rt("aspect"),
            R = rt("ease"),
            V = rt("animate"),
            D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            M = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            B = () => [...M(), ne, te],
            K = () => ["auto", "hidden", "clip", "visible", "scroll"],
            G = () => ["auto", "contain", "none"],
            j = () => [ne, te, h],
            Z = () => [cr, "full", "auto", ...j()],
            fe = () => [dr, "none", "subgrid", ne, te],
            _e = () => ["auto", {
                span: ["full", dr, ne, te]
            }, dr, ne, te],
            Le = () => [dr, "auto", ne, te],
            Me = () => ["auto", "min", "max", "fr", ne, te],
            Re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            je = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            we = () => ["auto", ...j()],
            de = () => [cr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()],
            H = () => [cr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()],
            se = () => [cr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()],
            U = () => [t, ne, te],
            A = () => [...M(), wg, vg, {
                position: [ne, te]
            }],
            z = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            ge = () => ["auto", "cover", "contain", VE, ME, {
                size: [ne, te]
            }],
            ye = () => [Kc, Xi, Wr],
            le = () => ["", "none", "full", m, ne, te],
            he = () => ["", xe, Xi, Wr],
            Ae = () => ["solid", "dashed", "dotted", "double"],
            Te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ve = () => [xe, Kc, wg, vg],
            pt = () => ["", "none", S, ne, te],
            Tn = () => ["none", xe, ne, te],
            Ar = () => ["none", xe, ne, te],
            $n = () => [xe, ne, te],
            Wn = () => [cr, "full", ...j()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Dn],
                breakpoint: [Dn],
                color: [u0],
                container: [Dn],
                "drop-shadow": [Dn],
                ease: ["in", "out", "in-out"],
                font: [LE],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Dn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Dn],
                shadow: [Dn],
                spacing: ["px", xe],
                text: [Dn],
                "text-shadow": [Dn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", cr, te, ne, x]
                }],
                container: ["container"],
                columns: [{
                    columns: [xe, te, ne, f]
                }],
                "break-after": [{
                    "break-after": D()
                }],
                "break-before": [{
                    "break-before": D()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: B()
                }],
                overflow: [{
                    overflow: K()
                }],
                "overflow-x": [{
                    "overflow-x": K()
                }],
                "overflow-y": [{
                    "overflow-y": K()
                }],
                overscroll: [{
                    overscroll: G()
                }],
                "overscroll-x": [{
                    "overscroll-x": G()
                }],
                "overscroll-y": [{
                    "overscroll-y": G()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: Z()
                }],
                "inset-x": [{
                    "inset-x": Z()
                }],
                "inset-y": [{
                    "inset-y": Z()
                }],
                start: [{
                    "inset-s": Z(),
                    start: Z()
                }],
                end: [{
                    "inset-e": Z(),
                    end: Z()
                }],
                "inset-bs": [{
                    "inset-bs": Z()
                }],
                "inset-be": [{
                    "inset-be": Z()
                }],
                top: [{
                    top: Z()
                }],
                right: [{
                    right: Z()
                }],
                bottom: [{
                    bottom: Z()
                }],
                left: [{
                    left: Z()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [dr, "auto", ne, te]
                }],
                basis: [{
                    basis: [cr, "full", "auto", f, ...j()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [xe, cr, "auto", "initial", "none", te]
                }],
                grow: [{
                    grow: ["", xe, ne, te]
                }],
                shrink: [{
                    shrink: ["", xe, ne, te]
                }],
                order: [{
                    order: [dr, "first", "last", "none", ne, te]
                }],
                "grid-cols": [{
                    "grid-cols": fe()
                }],
                "col-start-end": [{
                    col: _e()
                }],
                "col-start": [{
                    "col-start": Le()
                }],
                "col-end": [{
                    "col-end": Le()
                }],
                "grid-rows": [{
                    "grid-rows": fe()
                }],
                "row-start-end": [{
                    row: _e()
                }],
                "row-start": [{
                    "row-start": Le()
                }],
                "row-end": [{
                    "row-end": Le()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": Me()
                }],
                "auto-rows": [{
                    "auto-rows": Me()
                }],
                gap: [{
                    gap: j()
                }],
                "gap-x": [{
                    "gap-x": j()
                }],
                "gap-y": [{
                    "gap-y": j()
                }],
                "justify-content": [{
                    justify: [...Re(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...je(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...je()]
                }],
                "align-content": [{
                    content: ["normal", ...Re()]
                }],
                "align-items": [{
                    items: [...je(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...je(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": Re()
                }],
                "place-items": [{
                    "place-items": [...je(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...je()]
                }],
                p: [{
                    p: j()
                }],
                px: [{
                    px: j()
                }],
                py: [{
                    py: j()
                }],
                ps: [{
                    ps: j()
                }],
                pe: [{
                    pe: j()
                }],
                pbs: [{
                    pbs: j()
                }],
                pbe: [{
                    pbe: j()
                }],
                pt: [{
                    pt: j()
                }],
                pr: [{
                    pr: j()
                }],
                pb: [{
                    pb: j()
                }],
                pl: [{
                    pl: j()
                }],
                m: [{
                    m: we()
                }],
                mx: [{
                    mx: we()
                }],
                my: [{
                    my: we()
                }],
                ms: [{
                    ms: we()
                }],
                me: [{
                    me: we()
                }],
                mbs: [{
                    mbs: we()
                }],
                mbe: [{
                    mbe: we()
                }],
                mt: [{
                    mt: we()
                }],
                mr: [{
                    mr: we()
                }],
                mb: [{
                    mb: we()
                }],
                ml: [{
                    ml: we()
                }],
                "space-x": [{
                    "space-x": j()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": j()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: de()
                }],
                "inline-size": [{
                    inline: ["auto", ...H()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...H()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...H()]
                }],
                "block-size": [{
                    block: ["auto", ...se()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...se()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...se()]
                }],
                w: [{
                    w: [f, "screen", ...de()]
                }],
                "min-w": [{
                    "min-w": [f, "screen", "none", ...de()]
                }],
                "max-w": [{
                    "max-w": [f, "screen", "none", "prose", {
                        screen: [c]
                    }, ...de()]
                }],
                h: [{
                    h: ["screen", "lh", ...de()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...de()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...de()]
                }],
                "font-size": [{
                    text: ["base", r, Xi, Wr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [i, UE, DE]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Kc, te]
                }],
                "font-family": [{
                    font: [FE, jE, e]
                }],
                "font-features": [{
                    "font-features": [te]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [a, ne, te]
                }],
                "line-clamp": [{
                    "line-clamp": [xe, "none", ne, yg]
                }],
                leading: [{
                    leading: [l, ...j()]
                }],
                "list-image": [{
                    "list-image": ["none", ne, te]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", ne, te]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: U()
                }],
                "text-color": [{
                    text: U()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Ae(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [xe, "from-font", "auto", ne, Wr]
                }],
                "text-decoration-color": [{
                    decoration: U()
                }],
                "underline-offset": [{
                    "underline-offset": [xe, "auto", ne, te]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, te]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ne, te]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: A()
                }],
                "bg-repeat": [{
                    bg: z()
                }],
                "bg-size": [{
                    bg: ge()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, dr, ne, te],
                        radial: ["", ne, te],
                        conic: [dr, ne, te]
                    }, BE, IE]
                }],
                "bg-color": [{
                    bg: U()
                }],
                "gradient-from-pos": [{
                    from: ye()
                }],
                "gradient-via-pos": [{
                    via: ye()
                }],
                "gradient-to-pos": [{
                    to: ye()
                }],
                "gradient-from": [{
                    from: U()
                }],
                "gradient-via": [{
                    via: U()
                }],
                "gradient-to": [{
                    to: U()
                }],
                rounded: [{
                    rounded: le()
                }],
                "rounded-s": [{
                    "rounded-s": le()
                }],
                "rounded-e": [{
                    "rounded-e": le()
                }],
                "rounded-t": [{
                    "rounded-t": le()
                }],
                "rounded-r": [{
                    "rounded-r": le()
                }],
                "rounded-b": [{
                    "rounded-b": le()
                }],
                "rounded-l": [{
                    "rounded-l": le()
                }],
                "rounded-ss": [{
                    "rounded-ss": le()
                }],
                "rounded-se": [{
                    "rounded-se": le()
                }],
                "rounded-ee": [{
                    "rounded-ee": le()
                }],
                "rounded-es": [{
                    "rounded-es": le()
                }],
                "rounded-tl": [{
                    "rounded-tl": le()
                }],
                "rounded-tr": [{
                    "rounded-tr": le()
                }],
                "rounded-br": [{
                    "rounded-br": le()
                }],
                "rounded-bl": [{
                    "rounded-bl": le()
                }],
                "border-w": [{
                    border: he()
                }],
                "border-w-x": [{
                    "border-x": he()
                }],
                "border-w-y": [{
                    "border-y": he()
                }],
                "border-w-s": [{
                    "border-s": he()
                }],
                "border-w-e": [{
                    "border-e": he()
                }],
                "border-w-bs": [{
                    "border-bs": he()
                }],
                "border-w-be": [{
                    "border-be": he()
                }],
                "border-w-t": [{
                    "border-t": he()
                }],
                "border-w-r": [{
                    "border-r": he()
                }],
                "border-w-b": [{
                    "border-b": he()
                }],
                "border-w-l": [{
                    "border-l": he()
                }],
                "divide-x": [{
                    "divide-x": he()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": he()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...Ae(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...Ae(), "hidden", "none"]
                }],
                "border-color": [{
                    border: U()
                }],
                "border-color-x": [{
                    "border-x": U()
                }],
                "border-color-y": [{
                    "border-y": U()
                }],
                "border-color-s": [{
                    "border-s": U()
                }],
                "border-color-e": [{
                    "border-e": U()
                }],
                "border-color-bs": [{
                    "border-bs": U()
                }],
                "border-color-be": [{
                    "border-be": U()
                }],
                "border-color-t": [{
                    "border-t": U()
                }],
                "border-color-r": [{
                    "border-r": U()
                }],
                "border-color-b": [{
                    "border-b": U()
                }],
                "border-color-l": [{
                    "border-l": U()
                }],
                "divide-color": [{
                    divide: U()
                }],
                "outline-style": [{
                    outline: [...Ae(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [xe, ne, te]
                }],
                "outline-w": [{
                    outline: ["", xe, Xi, Wr]
                }],
                "outline-color": [{
                    outline: U()
                }],
                shadow: [{
                    shadow: ["", "none", g, Ya, Ga]
                }],
                "shadow-color": [{
                    shadow: U()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", y, Ya, Ga]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": U()
                }],
                "ring-w": [{
                    ring: he()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: U()
                }],
                "ring-offset-w": [{
                    "ring-offset": [xe, Wr]
                }],
                "ring-offset-color": [{
                    "ring-offset": U()
                }],
                "inset-ring-w": [{
                    "inset-ring": he()
                }],
                "inset-ring-color": [{
                    "inset-ring": U()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", w, Ya, Ga]
                }],
                "text-shadow-color": [{
                    "text-shadow": U()
                }],
                opacity: [{
                    opacity: [xe, ne, te]
                }],
                "mix-blend": [{
                    "mix-blend": [...Te(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": Te()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [xe]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": ve()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": ve()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": U()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": U()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": ve()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": ve()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": U()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": U()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": ve()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": ve()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": U()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": U()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": ve()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": ve()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": U()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": U()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": ve()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": ve()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": U()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": U()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": ve()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": ve()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": U()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": U()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": ve()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": ve()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": U()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": U()
                }],
                "mask-image-radial": [{
                    "mask-radial": [ne, te]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": ve()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": ve()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": U()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": U()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": M()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [xe]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": ve()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": ve()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": U()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": U()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: A()
                }],
                "mask-repeat": [{
                    mask: z()
                }],
                "mask-size": [{
                    mask: ge()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", ne, te]
                }],
                filter: [{
                    filter: ["", "none", ne, te]
                }],
                blur: [{
                    blur: pt()
                }],
                brightness: [{
                    brightness: [xe, ne, te]
                }],
                contrast: [{
                    contrast: [xe, ne, te]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", E, Ya, Ga]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": U()
                }],
                grayscale: [{
                    grayscale: ["", xe, ne, te]
                }],
                "hue-rotate": [{
                    "hue-rotate": [xe, ne, te]
                }],
                invert: [{
                    invert: ["", xe, ne, te]
                }],
                saturate: [{
                    saturate: [xe, ne, te]
                }],
                sepia: [{
                    sepia: ["", xe, ne, te]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", ne, te]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": pt()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [xe, ne, te]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [xe, ne, te]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", xe, ne, te]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [xe, ne, te]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", xe, ne, te]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [xe, ne, te]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [xe, ne, te]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", xe, ne, te]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": j()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": j()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": j()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, te]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [xe, "initial", ne, te]
                }],
                ease: [{
                    ease: ["linear", "initial", R, ne, te]
                }],
                delay: [{
                    delay: [xe, ne, te]
                }],
                animate: [{
                    animate: ["none", V, ne, te]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [b, ne, te]
                }],
                "perspective-origin": [{
                    "perspective-origin": B()
                }],
                rotate: [{
                    rotate: Tn()
                }],
                "rotate-x": [{
                    "rotate-x": Tn()
                }],
                "rotate-y": [{
                    "rotate-y": Tn()
                }],
                "rotate-z": [{
                    "rotate-z": Tn()
                }],
                scale: [{
                    scale: Ar()
                }],
                "scale-x": [{
                    "scale-x": Ar()
                }],
                "scale-y": [{
                    "scale-y": Ar()
                }],
                "scale-z": [{
                    "scale-z": Ar()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: $n()
                }],
                "skew-x": [{
                    "skew-x": $n()
                }],
                "skew-y": [{
                    "skew-y": $n()
                }],
                transform: [{
                    transform: [ne, te, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: B()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Wn()
                }],
                "translate-x": [{
                    "translate-x": Wn()
                }],
                "translate-y": [{
                    "translate-y": Wn()
                }],
                "translate-z": [{
                    "translate-z": Wn()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: U()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: U()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, te]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": j()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": j()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ne, te]
                }],
                fill: [{
                    fill: ["none", ...U()]
                }],
                "stroke-w": [{
                    stroke: [xe, Xi, Wr, yg]
                }],
                stroke: [{
                    stroke: ["none", ...U()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    WE = bE($E);

function _r(...t) {
    return WE(Zv(t))
}
const y0 = N.forwardRef(({
    ...t
}, e) => C.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
y0.displayName = "ToastProvider";
const v0 = N.forwardRef(({
    ...t
}, e) => C.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
v0.displayName = "ToastViewport";
const qE = e0("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    w0 = N.forwardRef(({
        className: t,
        variant: e,
        ...r
    }, i) => C.jsx("div", {
        ref: i,
        className: _r(qE({
            variant: e
        }), t),
        ...r
    }));
w0.displayName = "Toast";
const HE = N.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("div", {
    ref: r,
    className: _r("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
HE.displayName = "ToastAction";
const x0 = N.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("button", {
    ref: r,
    className: _r("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: C.jsx(n0, {
        className: "h-4 w-4"
    })
}));
x0.displayName = "ToastClose";
const S0 = N.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("div", {
    ref: r,
    className: _r("text-sm font-semibold", t),
    ...e
}));
S0.displayName = "ToastTitle";
const b0 = N.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("div", {
    ref: r,
    className: _r("text-sm opacity-90", t),
    ...e
}));
b0.displayName = "ToastDescription";

function KE() {
    const {
        toasts: t
    } = wb();
    return C.jsxs(y0, {
        children: [t.map(function({
            id: e,
            title: r,
            description: i,
            action: a,
            ...l
        }) {
            return C.jsxs(w0, {
                ...l,
                children: [C.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && C.jsx(S0, {
                        children: r
                    }), i && C.jsx(b0, {
                        children: i
                    })]
                }), a, C.jsx(x0, {})]
            }, e)
        }), C.jsx(v0, {})]
    })
}
var Ro = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    QE = {
        setTimeout: (t, e) => setTimeout(t, e),
        clearTimeout: t => clearTimeout(t),
        setInterval: (t, e) => setInterval(t, e),
        clearInterval: t => clearInterval(t)
    },
    pr, af, Vv, GE = (Vv = class {
        constructor() {
            ue(this, pr, QE);
            ue(this, af, !1)
        }
        setTimeoutProvider(t) {
            X(this, pr, t)
        }
        setTimeout(t, e) {
            return P(this, pr).setTimeout(t, e)
        }
        clearTimeout(t) {
            P(this, pr).clearTimeout(t)
        }
        setInterval(t, e) {
            return P(this, pr).setInterval(t, e)
        }
        clearInterval(t) {
            P(this, pr).clearInterval(t)
        }
    }, pr = new WeakMap, af = new WeakMap, Vv),
    Qr = new GE;

function YE(t) {
    setTimeout(t, 0)
}
var ls = typeof window > "u" || "Deno" in globalThis;

function Lt() {}

function XE(t, e) {
    return typeof t == "function" ? t(e) : t
}

function yd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function E0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function Er(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Zt(t, e) {
    return typeof t == "function" ? t(e) : t
}

function xg(t, e) {
    const {
        type: r = "all",
        exact: i,
        fetchStatus: a,
        predicate: l,
        queryKey: c,
        stale: f
    } = t;
    if (c) {
        if (i) {
            if (e.queryHash !== df(c, e.options)) return !1
        } else if (!vo(e.queryKey, c)) return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h) return !1
    }
    return !(typeof f == "boolean" && e.isStale() !== f || a && a !== e.state.fetchStatus || l && !l(e))
}

function Sg(t, e) {
    const {
        exact: r,
        status: i,
        predicate: a,
        mutationKey: l
    } = t;
    if (l) {
        if (!e.options.mutationKey) return !1;
        if (r) {
            if (yo(e.options.mutationKey) !== yo(l)) return !1
        } else if (!vo(e.options.mutationKey, l)) return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}

function df(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || yo)(t)
}

function yo(t) {
    return JSON.stringify(t, (e, r) => wd(r) ? Object.keys(r).sort().reduce((i, a) => (i[a] = r[a], i), {}) : r)
}

function vo(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => vo(t[r], e[r])) : !1
}
var JE = Object.prototype.hasOwnProperty;

function k0(t, e, r = 0) {
    if (t === e) return t;
    if (r > 500) return e;
    const i = bg(t) && bg(e);
    if (!i && !(wd(t) && wd(e))) return e;
    const l = (i ? t : Object.keys(t)).length,
        c = i ? e : Object.keys(e),
        f = c.length,
        h = i ? new Array(f) : {};
    let m = 0;
    for (let g = 0; g < f; g++) {
        const y = i ? g : c[g],
            w = t[y],
            E = e[y];
        if (w === E) {
            h[y] = w, (i ? g < l : JE.call(t, y)) && m++;
            continue
        }
        if (w === null || E === null || typeof w != "object" || typeof E != "object") {
            h[y] = E;
            continue
        }
        const S = k0(w, E, r + 1);
        h[y] = S, S === w && m++
    }
    return l === f && m === l ? t : h
}

function vd(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const r in t)
        if (t[r] !== e[r]) return !1;
    return !0
}

function bg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function wd(t) {
    if (!Eg(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const r = e.prototype;
    return !(!Eg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function Eg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function ZE(t) {
    return new Promise(e => {
        Qr.setTimeout(e, t)
    })
}

function xd(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? k0(t, e) : e
}

function ek(t, e, r = 0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}

function tk(t, e, r = 0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var ff = Symbol();

function C0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === ff ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}

function T0(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}

function nk(t, e, r) {
    let i = !1,
        a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ?? (a = e()), i || (i = !0, a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })), a)
    }), t
}
var Xr, mr, qs, Bv, rk = (Bv = class extends Ro {
        constructor() {
            super();
            ue(this, Xr);
            ue(this, mr);
            ue(this, qs);
            X(this, qs, e => {
                if (!ls && window.addEventListener) {
                    const r = () => e();
                    return window.addEventListener("visibilitychange", r, !1), () => {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, mr) || this.setEventListener(P(this, qs))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = P(this, mr)) == null || e.call(this), X(this, mr, void 0))
        }
        setEventListener(e) {
            var r;
            X(this, qs, e), (r = P(this, mr)) == null || r.call(this), X(this, mr, e(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            }))
        }
        setFocused(e) {
            P(this, Xr) !== e && (X(this, Xr, e), this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(r => {
                r(e)
            })
        }
        isFocused() {
            var e;
            return typeof P(this, Xr) == "boolean" ? P(this, Xr) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
        }
    }, Xr = new WeakMap, mr = new WeakMap, qs = new WeakMap, Bv),
    hf = new rk;

function Sd() {
    let t, e;
    const r = new Promise((a, l) => {
        t = a, e = l
    });
    r.status = "pending", r.catch(() => {});

    function i(a) {
        Object.assign(r, a), delete r.resolve, delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }), t(a)
    }, r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }), e(a)
    }, r
}
var sk = YE;

function ik() {
    let t = [],
        e = 0,
        r = f => {
            f()
        },
        i = f => {
            f()
        },
        a = sk;
    const l = f => {
            e ? t.push(f) : a(() => {
                r(f)
            })
        },
        c = () => {
            const f = t;
            t = [], f.length && a(() => {
                i(() => {
                    f.forEach(h => {
                        r(h)
                    })
                })
            })
        };
    return {
        batch: f => {
            let h;
            e++;
            try {
                h = f()
            } finally {
                e--, e || c()
            }
            return h
        },
        batchCalls: f => (...h) => {
            l(() => {
                f(...h)
            })
        },
        schedule: l,
        setNotifyFunction: f => {
            r = f
        },
        setBatchNotifyFunction: f => {
            i = f
        },
        setScheduler: f => {
            a = f
        }
    }
}
var ft = ik(),
    Hs, gr, Ks, Uv, ok = (Uv = class extends Ro {
        constructor() {
            super();
            ue(this, Hs, !0);
            ue(this, gr);
            ue(this, Ks);
            X(this, Ks, e => {
                if (!ls && window.addEventListener) {
                    const r = () => e(!0),
                        i = () => e(!1);
                    return window.addEventListener("online", r, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", r), window.removeEventListener("offline", i)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, gr) || this.setEventListener(P(this, Ks))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = P(this, gr)) == null || e.call(this), X(this, gr, void 0))
        }
        setEventListener(e) {
            var r;
            X(this, Ks, e), (r = P(this, gr)) == null || r.call(this), X(this, gr, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
            P(this, Hs) !== e && (X(this, Hs, e), this.listeners.forEach(i => {
                i(e)
            }))
        }
        isOnline() {
            return P(this, Hs)
        }
    }, Hs = new WeakMap, gr = new WeakMap, Ks = new WeakMap, Uv),
    wl = new ok;

function ak(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function P0(t) {
    return (t ?? "online") === "online" ? wl.isOnline() : !0
}
var bd = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
};

function _0(t) {
    let e = !1,
        r = 0,
        i;
    const a = Sd(),
        l = () => a.status !== "pending",
        c = b => {
            var x;
            if (!l()) {
                const R = new bd(b);
                w(R), (x = t.onCancel) == null || x.call(t, R)
            }
        },
        f = () => {
            e = !0
        },
        h = () => {
            e = !1
        },
        m = () => hf.isFocused() && (t.networkMode === "always" || wl.isOnline()) && t.canRun(),
        g = () => P0(t.networkMode) && t.canRun(),
        y = b => {
            l() || (i == null || i(), a.resolve(b))
        },
        w = b => {
            l() || (i == null || i(), a.reject(b))
        },
        E = () => new Promise(b => {
            var x;
            i = R => {
                (l() || m()) && b(R)
            }, (x = t.onPause) == null || x.call(t)
        }).then(() => {
            var b;
            i = void 0, l() || (b = t.onContinue) == null || b.call(t)
        }),
        S = () => {
            if (l()) return;
            let b;
            const x = r === 0 ? t.initialPromise : void 0;
            try {
                b = x ?? t.fn()
            } catch (R) {
                b = Promise.reject(R)
            }
            Promise.resolve(b).then(y).catch(R => {
                var K;
                if (l()) return;
                const V = t.retry ?? (ls ? 0 : 3),
                    D = t.retryDelay ?? ak,
                    M = typeof D == "function" ? D(r, R) : D,
                    B = V === !0 || typeof V == "number" && r < V || typeof V == "function" && V(r, R);
                if (e || !B) {
                    w(R);
                    return
                }
                r++, (K = t.onFail) == null || K.call(t, r, R), ZE(M).then(() => m() ? void 0 : E()).then(() => {
                    e ? w(R) : S()
                })
            })
        };
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(), a),
        cancelRetry: f,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? S() : E().then(S), a)
    }
}
var Jr, zv, R0 = (zv = class {
        constructor() {
            ue(this, Jr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), yd(this.gcTime) && X(this, Jr, Qr.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ?? (ls ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            P(this, Jr) && (Qr.clearTimeout(P(this, Jr)), X(this, Jr, void 0))
        }
    }, Jr = new WeakMap, zv),
    Zr, Qs, Jt, es, at, ko, ts, cn, jn, $v, lk = ($v = class extends R0 {
        constructor(e) {
            super();
            ue(this, cn);
            ue(this, Zr);
            ue(this, Qs);
            ue(this, Jt);
            ue(this, es);
            ue(this, at);
            ue(this, ko);
            ue(this, ts);
            X(this, ts, !1), X(this, ko, e.defaultOptions), this.setOptions(e.options), this.observers = [], X(this, es, e.client), X(this, Jt, P(this, es).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, X(this, Zr, Cg(this.options)), this.state = e.state ?? P(this, Zr), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var e;
            return (e = P(this, at)) == null ? void 0 : e.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...P(this, ko),
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const r = Cg(this.options);
                r.data !== void 0 && (this.setState(kg(r.data, r.dataUpdatedAt)), X(this, Zr, r))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && P(this, Jt).remove(this)
        }
        setData(e, r) {
            const i = xd(this.state.data, e, this.options);
            return be(this, cn, jn).call(this, {
                data: i,
                type: "success",
                dataUpdatedAt: r == null ? void 0 : r.updatedAt,
                manual: r == null ? void 0 : r.manual
            }), i
        }
        setState(e, r) {
            be(this, cn, jn).call(this, {
                type: "setState",
                state: e,
                setStateOptions: r
            })
        }
        cancel(e) {
            var i, a;
            const r = (i = P(this, at)) == null ? void 0 : i.promise;
            return (a = P(this, at)) == null || a.cancel(e), r ? r.then(Lt).catch(Lt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(P(this, Zr))
        }
        isActive() {
            return this.observers.some(e => Zt(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ff || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => Er(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !E0(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = P(this, at)) == null || r.continue()
        }
        onOnline() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnReconnect());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = P(this, at)) == null || r.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), P(this, Jt).notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (P(this, at) && (P(this, ts) ? P(this, at).cancel({
                revert: !0
            }) : P(this, at).cancelRetry()), this.scheduleGc()), P(this, Jt).notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || be(this, cn, jn).call(this, {
                type: "invalidate"
            })
        }
        async fetch(e, r) {
            var h, m, g, y, w, E, S, b, x, R, V, D;
            if (this.state.fetchStatus !== "idle" && ((h = P(this, at)) == null ? void 0 : h.status()) !== "rejected") {
                if (this.state.data !== void 0 && (r != null && r.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (P(this, at)) return P(this, at).continueRetry(), P(this, at).promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const M = this.observers.find(B => B.options.queryFn);
                M && this.setOptions(M.options)
            }
            const i = new AbortController,
                a = M => {
                    Object.defineProperty(M, "signal", {
                        enumerable: !0,
                        get: () => (X(this, ts, !0), i.signal)
                    })
                },
                l = () => {
                    const M = C0(this.options, r),
                        K = (() => {
                            const G = {
                                client: P(this, es),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return a(G), G
                        })();
                    return X(this, ts, !1), this.options.persister ? this.options.persister(M, K, this) : M(K)
                },
                f = (() => {
                    const M = {
                        fetchOptions: r,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: P(this, es),
                        state: this.state,
                        fetchFn: l
                    };
                    return a(M), M
                })();
            (m = this.options.behavior) == null || m.onFetch(f, this), X(this, Qs, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) && be(this, cn, jn).call(this, {
                type: "fetch",
                meta: (y = f.fetchOptions) == null ? void 0 : y.meta
            }), X(this, at, _0({
                initialPromise: r == null ? void 0 : r.initialPromise,
                fn: f.fetchFn,
                onCancel: M => {
                    M instanceof bd && M.revert && this.setState({
                        ...P(this, Qs),
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (M, B) => {
                    be(this, cn, jn).call(this, {
                        type: "failed",
                        failureCount: M,
                        error: B
                    })
                },
                onPause: () => {
                    be(this, cn, jn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    be(this, cn, jn).call(this, {
                        type: "continue"
                    })
                },
                retry: f.options.retry,
                retryDelay: f.options.retryDelay,
                networkMode: f.options.networkMode,
                canRun: () => !0
            }));
            try {
                const M = await P(this, at).start();
                if (M === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(M), (E = (w = P(this, Jt).config).onSuccess) == null || E.call(w, M, this), (b = (S = P(this, Jt).config).onSettled) == null || b.call(S, M, this.state.error, this), M
            } catch (M) {
                if (M instanceof bd) {
                    if (M.silent) return P(this, at).promise;
                    if (M.revert) {
                        if (this.state.data === void 0) throw M;
                        return this.state.data
                    }
                }
                throw be(this, cn, jn).call(this, {
                    type: "error",
                    error: M
                }), (R = (x = P(this, Jt).config).onError) == null || R.call(x, M, this), (D = (V = P(this, Jt).config).onSettled) == null || D.call(V, this.state.data, M, this), M
            } finally {
                this.scheduleGc()
            }
        }
    }, Zr = new WeakMap, Qs = new WeakMap, Jt = new WeakMap, es = new WeakMap, at = new WeakMap, ko = new WeakMap, ts = new WeakMap, cn = new WeakSet, jn = function(e) {
        const r = i => {
            switch (e.type) {
                case "failed":
                    return {
                        ...i, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                    };
                case "pause":
                    return {
                        ...i, fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...i, fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...i, ...A0(i.data, this.options), fetchMeta: e.meta ?? null
                    };
                case "success":
                    const a = {
                        ...i,
                        ...kg(e.data, e.dataUpdatedAt),
                        dataUpdateCount: i.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return X(this, Qs, e.manual ? a : void 0), a;
                case "error":
                    const l = e.error;
                    return {
                        ...i, error: l, errorUpdateCount: i.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: i.fetchFailureCount + 1, fetchFailureReason: l, fetchStatus: "idle", status: "error", isInvalidated: !0
                    };
                case "invalidate":
                    return {
                        ...i, isInvalidated: !0
                    };
                case "setState":
                    return {
                        ...i, ...e.state
                    }
            }
        };
        this.state = r(this.state), ft.batch(() => {
            this.observers.forEach(i => {
                i.onQueryUpdate()
            }), P(this, Jt).notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }, $v);

function A0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: P0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function kg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function Cg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        r = e !== void 0,
        i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ot, Ee, Co, Ct, ns, Gs, In, yr, To, Ys, Xs, rs, ss, vr, Js, Ne, no, Ed, kd, Cd, Td, Pd, _d, Rd, N0, Wv, uk = (Wv = class extends Ro {
    constructor(e, r) {
        super();
        ue(this, Ne);
        ue(this, Ot);
        ue(this, Ee);
        ue(this, Co);
        ue(this, Ct);
        ue(this, ns);
        ue(this, Gs);
        ue(this, In);
        ue(this, yr);
        ue(this, To);
        ue(this, Ys);
        ue(this, Xs);
        ue(this, rs);
        ue(this, ss);
        ue(this, vr);
        ue(this, Js, new Set);
        this.options = r, X(this, Ot, e), X(this, yr, null), X(this, In, Sd()), this.bindMethods(), this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, Ee).addObserver(this), Tg(P(this, Ee), this.options) ? be(this, Ne, no).call(this) : this.updateResult(), be(this, Ne, Td).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Ad(P(this, Ee), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Ad(P(this, Ee), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, be(this, Ne, Pd).call(this), be(this, Ne, _d).call(this), P(this, Ee).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options,
            i = P(this, Ee);
        if (this.options = P(this, Ot).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Zt(this.options.enabled, P(this, Ee)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        be(this, Ne, Rd).call(this), P(this, Ee).setOptions(this.options), r._defaulted && !vd(this.options, r) && P(this, Ot).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, Ee),
            observer: this
        });
        const a = this.hasListeners();
        a && Pg(P(this, Ee), i, this.options, r) && be(this, Ne, no).call(this), this.updateResult(), a && (P(this, Ee) !== i || Zt(this.options.enabled, P(this, Ee)) !== Zt(r.enabled, P(this, Ee)) || Er(this.options.staleTime, P(this, Ee)) !== Er(r.staleTime, P(this, Ee))) && be(this, Ne, Ed).call(this);
        const l = be(this, Ne, kd).call(this);
        a && (P(this, Ee) !== i || Zt(this.options.enabled, P(this, Ee)) !== Zt(r.enabled, P(this, Ee)) || l !== P(this, vr)) && be(this, Ne, Cd).call(this, l)
    }
    getOptimisticResult(e) {
        const r = P(this, Ot).getQueryCache().build(P(this, Ot), e),
            i = this.createResult(r, e);
        return dk(this, i) && (X(this, Ct, i), X(this, Gs, this.options), X(this, ns, P(this, Ee).state)), i
    }
    getCurrentResult() {
        return P(this, Ct)
    }
    trackResult(e, r) {
        return new Proxy(e, {
            get: (i, a) => (this.trackProp(a), r == null || r(a), a === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && P(this, In).status === "pending" && P(this, In).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(i, a))
        })
    }
    trackProp(e) {
        P(this, Js).add(e)
    }
    getCurrentQuery() {
        return P(this, Ee)
    }
    refetch({
        ...e
    } = {}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        const r = P(this, Ot).defaultQueryOptions(e),
            i = P(this, Ot).getQueryCache().build(P(this, Ot), r);
        return i.fetch().then(() => this.createResult(i, r))
    }
    fetch(e) {
        return be(this, Ne, no).call(this, {
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then(() => (this.updateResult(), P(this, Ct)))
    }
    createResult(e, r) {
        var Z;
        const i = P(this, Ee),
            a = this.options,
            l = P(this, Ct),
            c = P(this, ns),
            f = P(this, Gs),
            m = e !== i ? e.state : P(this, Co),
            {
                state: g
            } = e;
        let y = {
                ...g
            },
            w = !1,
            E;
        if (r._optimisticResults) {
            const fe = this.hasListeners(),
                _e = !fe && Tg(e, r),
                Le = fe && Pg(e, i, r, a);
            (_e || Le) && (y = {
                ...y,
                ...A0(g.data, e.options)
            }), r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {
            error: S,
            errorUpdatedAt: b,
            status: x
        } = y;
        E = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && E === void 0 && x === "pending") {
            let fe;
            l != null && l.isPlaceholderData && r.placeholderData === (f == null ? void 0 : f.placeholderData) ? (fe = l.data, R = !0) : fe = typeof r.placeholderData == "function" ? r.placeholderData((Z = P(this, Xs)) == null ? void 0 : Z.state.data, P(this, Xs)) : r.placeholderData, fe !== void 0 && (x = "success", E = xd(l == null ? void 0 : l.data, fe, r), w = !0)
        }
        if (r.select && E !== void 0 && !R)
            if (l && E === (c == null ? void 0 : c.data) && r.select === P(this, To)) E = P(this, Ys);
            else try {
                X(this, To, r.select), E = r.select(E), E = xd(l == null ? void 0 : l.data, E, r), X(this, Ys, E), X(this, yr, null)
            } catch (fe) {
                X(this, yr, fe)
            }
        P(this, yr) && (S = P(this, yr), E = P(this, Ys), b = Date.now(), x = "error");
        const V = y.fetchStatus === "fetching",
            D = x === "pending",
            M = x === "error",
            B = D && V,
            K = E !== void 0,
            j = {
                status: x,
                fetchStatus: y.fetchStatus,
                isPending: D,
                isSuccess: x === "success",
                isError: M,
                isInitialLoading: B,
                isLoading: B,
                data: E,
                dataUpdatedAt: y.dataUpdatedAt,
                error: S,
                errorUpdatedAt: b,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
                isFetching: V,
                isRefetching: V && !D,
                isLoadingError: M && !K,
                isPaused: y.fetchStatus === "paused",
                isPlaceholderData: w,
                isRefetchError: M && K,
                isStale: pf(e, r),
                refetch: this.refetch,
                promise: P(this, In),
                isEnabled: Zt(r.enabled, e) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const fe = j.data !== void 0,
                _e = j.status === "error" && !fe,
                Le = je => {
                    _e ? je.reject(j.error) : fe && je.resolve(j.data)
                },
                Me = () => {
                    const je = X(this, In, j.promise = Sd());
                    Le(je)
                },
                Re = P(this, In);
            switch (Re.status) {
                case "pending":
                    e.queryHash === i.queryHash && Le(Re);
                    break;
                case "fulfilled":
                    (_e || j.data !== Re.value) && Me();
                    break;
                case "rejected":
                    (!_e || j.error !== Re.reason) && Me();
                    break
            }
        }
        return j
    }
    updateResult() {
        const e = P(this, Ct),
            r = this.createResult(P(this, Ee), this.options);
        if (X(this, ns, P(this, Ee).state), X(this, Gs, this.options), P(this, ns).data !== void 0 && X(this, Xs, P(this, Ee)), vd(r, e)) return;
        X(this, Ct, r);
        const i = () => {
            if (!e) return !0;
            const {
                notifyOnChangeProps: a
            } = this.options, l = typeof a == "function" ? a() : a;
            if (l === "all" || !l && !P(this, Js).size) return !0;
            const c = new Set(l ?? P(this, Js));
            return this.options.throwOnError && c.add("error"), Object.keys(P(this, Ct)).some(f => {
                const h = f;
                return P(this, Ct)[h] !== e[h] && c.has(h)
            })
        };
        be(this, Ne, N0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && be(this, Ne, Td).call(this)
    }
}, Ot = new WeakMap, Ee = new WeakMap, Co = new WeakMap, Ct = new WeakMap, ns = new WeakMap, Gs = new WeakMap, In = new WeakMap, yr = new WeakMap, To = new WeakMap, Ys = new WeakMap, Xs = new WeakMap, rs = new WeakMap, ss = new WeakMap, vr = new WeakMap, Js = new WeakMap, Ne = new WeakSet, no = function(e) {
    be(this, Ne, Rd).call(this);
    let r = P(this, Ee).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Lt)), r
}, Ed = function() {
    be(this, Ne, Pd).call(this);
    const e = Er(this.options.staleTime, P(this, Ee));
    if (ls || P(this, Ct).isStale || !yd(e)) return;
    const i = E0(P(this, Ct).dataUpdatedAt, e) + 1;
    X(this, rs, Qr.setTimeout(() => {
        P(this, Ct).isStale || this.updateResult()
    }, i))
}, kd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, Ee)) : this.options.refetchInterval) ?? !1
}, Cd = function(e) {
    be(this, Ne, _d).call(this), X(this, vr, e), !(ls || Zt(this.options.enabled, P(this, Ee)) === !1 || !yd(P(this, vr)) || P(this, vr) === 0) && X(this, ss, Qr.setInterval(() => {
        (this.options.refetchIntervalInBackground || hf.isFocused()) && be(this, Ne, no).call(this)
    }, P(this, vr)))
}, Td = function() {
    be(this, Ne, Ed).call(this), be(this, Ne, Cd).call(this, be(this, Ne, kd).call(this))
}, Pd = function() {
    P(this, rs) && (Qr.clearTimeout(P(this, rs)), X(this, rs, void 0))
}, _d = function() {
    P(this, ss) && (Qr.clearInterval(P(this, ss)), X(this, ss, void 0))
}, Rd = function() {
    const e = P(this, Ot).getQueryCache().build(P(this, Ot), this.options);
    if (e === P(this, Ee)) return;
    const r = P(this, Ee);
    X(this, Ee, e), X(this, Co, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this))
}, N0 = function(e) {
    ft.batch(() => {
        e.listeners && this.listeners.forEach(r => {
            r(P(this, Ct))
        }), P(this, Ot).getQueryCache().notify({
            query: P(this, Ee),
            type: "observerResultsUpdated"
        })
    })
}, Wv);

function ck(t, e) {
    return Zt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}

function Tg(t, e) {
    return ck(t, e) || t.state.data !== void 0 && Ad(t, e, e.refetchOnMount)
}

function Ad(t, e, r) {
    if (Zt(e.enabled, t) !== !1 && Er(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && pf(t, e)
    }
    return !1
}

function Pg(t, e, r, i) {
    return (t !== e || Zt(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && pf(t, r)
}

function pf(t, e) {
    return Zt(e.enabled, t) !== !1 && t.isStaleByTime(Er(e.staleTime, t))
}

function dk(t, e) {
    return !vd(t.getCurrentResult(), e)
}

function _g(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, E, S;
            const i = e.options,
                a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction,
                l = ((E = e.state.data) == null ? void 0 : E.pages) || [],
                c = ((S = e.state.data) == null ? void 0 : S.pageParams) || [];
            let f = {
                    pages: [],
                    pageParams: []
                },
                h = 0;
            const m = async () => {
                let b = !1;
                const x = D => {
                        nk(D, () => e.signal, () => b = !0)
                    },
                    R = C0(e.options, e.fetchOptions),
                    V = async (D, M, B) => {
                        if (b) return Promise.reject();
                        if (M == null && D.pages.length) return Promise.resolve(D);
                        const G = (() => {
                                const _e = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: M,
                                    direction: B ? "backward" : "forward",
                                    meta: e.options.meta
                                };
                                return x(_e), _e
                            })(),
                            j = await R(G),
                            {
                                maxPages: Z
                            } = e.options,
                            fe = B ? tk : ek;
                        return {
                            pages: fe(D.pages, j, Z),
                            pageParams: fe(D.pageParams, M, Z)
                        }
                    };
                if (a && l.length) {
                    const D = a === "backward",
                        M = D ? fk : Rg,
                        B = {
                            pages: l,
                            pageParams: c
                        },
                        K = M(i, B);
                    f = await V(B, K, D)
                } else {
                    const D = t ?? l.length;
                    do {
                        const M = h === 0 ? c[0] ?? i.initialPageParam : Rg(i, f);
                        if (h > 0 && M == null) break;
                        f = await V(f, M), h++
                    } while (h < D)
                }
                return f
            };
            e.options.persister ? e.fetchFn = () => {
                var b, x;
                return (x = (b = e.options).persister) == null ? void 0 : x.call(b, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            } : e.fetchFn = m
        }
    }
}

function Rg(t, {
    pages: e,
    pageParams: r
}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}

function fk(t, {
    pages: e,
    pageParams: r
}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var Po, wn, wt, is, xn, fr, qv, hk = (qv = class extends R0 {
    constructor(e) {
        super();
        ue(this, xn);
        ue(this, Po);
        ue(this, wn);
        ue(this, wt);
        ue(this, is);
        X(this, Po, e.client), this.mutationId = e.mutationId, X(this, wt, e.mutationCache), X(this, wn, []), this.state = e.state || pk(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        P(this, wn).includes(e) || (P(this, wn).push(e), this.clearGcTimeout(), P(this, wt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        X(this, wn, P(this, wn).filter(r => r !== e)), this.scheduleGc(), P(this, wt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        P(this, wn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, wt).remove(this))
    }
    continue () {
        var e;
        return ((e = P(this, is)) == null ? void 0 : e.continue()) ?? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, f, h, m, g, y, w, E, S, b, x, R, V, D, M, B, K, G;
        const r = () => {
                be(this, xn, fr).call(this, {
                    type: "continue"
                })
            },
            i = {
                client: P(this, Po),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        X(this, is, _0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (j, Z) => {
                be(this, xn, fr).call(this, {
                    type: "failed",
                    failureCount: j,
                    error: Z
                })
            },
            onPause: () => {
                be(this, xn, fr).call(this, {
                    type: "pause"
                })
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, wt).canRun(this)
        }));
        const a = this.state.status === "pending",
            l = !P(this, is).canStart();
        try {
            if (a) r();
            else {
                be(this, xn, fr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: l
                }), P(this, wt).config.onMutate && await P(this, wt).config.onMutate(e, this, i);
                const Z = await ((f = (c = this.options).onMutate) == null ? void 0 : f.call(c, e, i));
                Z !== this.state.context && be(this, xn, fr).call(this, {
                    type: "pending",
                    context: Z,
                    variables: e,
                    isPaused: l
                })
            }
            const j = await P(this, is).start();
            return await ((m = (h = P(this, wt).config).onSuccess) == null ? void 0 : m.call(h, j, e, this.state.context, this, i)), await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, j, e, this.state.context, i)), await ((E = (w = P(this, wt).config).onSettled) == null ? void 0 : E.call(w, j, null, this.state.variables, this.state.context, this, i)), await ((b = (S = this.options).onSettled) == null ? void 0 : b.call(S, j, null, e, this.state.context, i)), be(this, xn, fr).call(this, {
                type: "success",
                data: j
            }), j
        } catch (j) {
            try {
                await ((R = (x = P(this, wt).config).onError) == null ? void 0 : R.call(x, j, e, this.state.context, this, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            try {
                await ((D = (V = this.options).onError) == null ? void 0 : D.call(V, j, e, this.state.context, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            try {
                await ((B = (M = P(this, wt).config).onSettled) == null ? void 0 : B.call(M, void 0, j, this.state.variables, this.state.context, this, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            try {
                await ((G = (K = this.options).onSettled) == null ? void 0 : G.call(K, void 0, j, e, this.state.context, i))
            } catch (Z) {
                Promise.reject(Z)
            }
            throw be(this, xn, fr).call(this, {
                type: "error",
                error: j
            }), j
        } finally {
            P(this, wt).runNext(this)
        }
    }
}, Po = new WeakMap, wn = new WeakMap, wt = new WeakMap, is = new WeakMap, xn = new WeakSet, fr = function(e) {
    const r = i => {
        switch (e.type) {
            case "failed":
                return {
                    ...i, failureCount: e.failureCount, failureReason: e.error
                };
            case "pause":
                return {
                    ...i, isPaused: !0
                };
            case "continue":
                return {
                    ...i, isPaused: !1
                };
            case "pending":
                return {
                    ...i, context: e.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: e.isPaused, status: "pending", variables: e.variables, submittedAt: Date.now()
                };
            case "success":
                return {
                    ...i, data: e.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                };
            case "error":
                return {
                    ...i, data: void 0, error: e.error, failureCount: i.failureCount + 1, failureReason: e.error, isPaused: !1, status: "error"
                }
        }
    };
    this.state = r(this.state), ft.batch(() => {
        P(this, wn).forEach(i => {
            i.onMutationUpdate(e)
        }), P(this, wt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    })
}, qv);

function pk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Fn, dn, _o, Hv, mk = (Hv = class extends Ro {
    constructor(e = {}) {
        super();
        ue(this, Fn);
        ue(this, dn);
        ue(this, _o);
        this.config = e, X(this, Fn, new Set), X(this, dn, new Map), X(this, _o, 0)
    }
    build(e, r, i) {
        const a = new hk({
            client: e,
            mutationCache: this,
            mutationId: ++Ka(this, _o)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a), a
    }
    add(e) {
        P(this, Fn).add(e);
        const r = Xa(e);
        if (typeof r == "string") {
            const i = P(this, dn).get(r);
            i ? i.push(e) : P(this, dn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (P(this, Fn).delete(e)) {
            const r = Xa(e);
            if (typeof r == "string") {
                const i = P(this, dn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else i[0] === e && P(this, dn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Xa(e);
        if (typeof r == "string") {
            const i = P(this, dn).get(r),
                a = i == null ? void 0 : i.find(l => l.state.status === "pending");
            return !a || a === e
        } else return !0
    }
    runNext(e) {
        var i;
        const r = Xa(e);
        if (typeof r == "string") {
            const a = (i = P(this, dn).get(r)) == null ? void 0 : i.find(l => l !== e && l.state.isPaused);
            return (a == null ? void 0 : a.continue()) ?? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        ft.batch(() => {
            P(this, Fn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), P(this, Fn).clear(), P(this, dn).clear()
        })
    }
    getAll() {
        return Array.from(P(this, Fn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => Sg(r, i))
    }
    findAll(e = {}) {
        return this.getAll().filter(r => Sg(e, r))
    }
    notify(e) {
        ft.batch(() => {
            this.listeners.forEach(r => {
                r(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return ft.batch(() => Promise.all(e.map(r => r.continue().catch(Lt))))
    }
}, Fn = new WeakMap, dn = new WeakMap, _o = new WeakMap, Hv);

function Xa(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Sn, Kv, gk = (Kv = class extends Ro {
        constructor(e = {}) {
            super();
            ue(this, Sn);
            this.config = e, X(this, Sn, new Map)
        }
        build(e, r, i) {
            const a = r.queryKey,
                l = r.queryHash ?? df(a, r);
            let c = this.get(l);
            return c || (c = new lk({
                client: e,
                queryKey: a,
                queryHash: l,
                options: e.defaultQueryOptions(r),
                state: i,
                defaultOptions: e.getQueryDefaults(a)
            }), this.add(c)), c
        }
        add(e) {
            P(this, Sn).has(e.queryHash) || (P(this, Sn).set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const r = P(this, Sn).get(e.queryHash);
            r && (e.destroy(), r === e && P(this, Sn).delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            ft.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return P(this, Sn).get(e)
        }
        getAll() {
            return [...P(this, Sn).values()]
        }
        find(e) {
            const r = {
                exact: !0,
                ...e
            };
            return this.getAll().find(i => xg(r, i))
        }
        findAll(e = {}) {
            const r = this.getAll();
            return Object.keys(e).length > 0 ? r.filter(i => xg(e, i)) : r
        }
        notify(e) {
            ft.batch(() => {
                this.listeners.forEach(r => {
                    r(e)
                })
            })
        }
        onFocus() {
            ft.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            ft.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    }, Sn = new WeakMap, Kv),
    He, wr, xr, Zs, ei, Sr, ti, ni, Qv, yk = (Qv = class {
        constructor(t = {}) {
            ue(this, He);
            ue(this, wr);
            ue(this, xr);
            ue(this, Zs);
            ue(this, ei);
            ue(this, Sr);
            ue(this, ti);
            ue(this, ni);
            X(this, He, t.queryCache || new gk), X(this, wr, t.mutationCache || new mk), X(this, xr, t.defaultOptions || {}), X(this, Zs, new Map), X(this, ei, new Map), X(this, Sr, 0)
        }
        mount() {
            Ka(this, Sr)._++, P(this, Sr) === 1 && (X(this, ti, hf.subscribe(async t => {
                t && (await this.resumePausedMutations(), P(this, He).onFocus())
            })), X(this, ni, wl.subscribe(async t => {
                t && (await this.resumePausedMutations(), P(this, He).onOnline())
            })))
        }
        unmount() {
            var t, e;
            Ka(this, Sr)._--, P(this, Sr) === 0 && ((t = P(this, ti)) == null || t.call(this), X(this, ti, void 0), (e = P(this, ni)) == null || e.call(this), X(this, ni, void 0))
        }
        isFetching(t) {
            return P(this, He).findAll({
                ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return P(this, wr).findAll({
                ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = P(this, He).get(e.queryHash)) == null ? void 0 : r.state.data
        }
        ensureQueryData(t) {
            const e = this.defaultQueryOptions(t),
                r = P(this, He).build(this, e),
                i = r.state.data;
            return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(Er(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i))
        }
        getQueriesData(t) {
            return P(this, He).findAll(t).map(({
                queryKey: e,
                state: r
            }) => {
                const i = r.data;
                return [e, i]
            })
        }
        setQueryData(t, e, r) {
            const i = this.defaultQueryOptions({
                    queryKey: t
                }),
                a = P(this, He).get(i.queryHash),
                l = a == null ? void 0 : a.state.data,
                c = XE(e, l);
            if (c !== void 0) return P(this, He).build(this, i).setData(c, {
                ...r,
                manual: !0
            })
        }
        setQueriesData(t, e, r) {
            return ft.batch(() => P(this, He).findAll(t).map(({
                queryKey: i
            }) => [i, this.setQueryData(i, e, r)]))
        }
        getQueryState(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = P(this, He).get(e.queryHash)) == null ? void 0 : r.state
        }
        removeQueries(t) {
            const e = P(this, He);
            ft.batch(() => {
                e.findAll(t).forEach(r => {
                    e.remove(r)
                })
            })
        }
        resetQueries(t, e) {
            const r = P(this, He);
            return ft.batch(() => (r.findAll(t).forEach(i => {
                i.reset()
            }), this.refetchQueries({
                type: "active",
                ...t
            }, e)))
        }
        cancelQueries(t, e = {}) {
            const r = {
                    revert: !0,
                    ...e
                },
                i = ft.batch(() => P(this, He).findAll(t).map(a => a.cancel(r)));
            return Promise.all(i).then(Lt).catch(Lt)
        }
        invalidateQueries(t, e = {}) {
            return ft.batch(() => (P(this, He).findAll(t).forEach(r => {
                r.invalidate()
            }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
                ...t,
                type: (t == null ? void 0 : t.refetchType) ?? (t == null ? void 0 : t.type) ?? "active"
            }, e)))
        }
        refetchQueries(t, e = {}) {
            const r = {
                    ...e,
                    cancelRefetch: e.cancelRefetch ?? !0
                },
                i = ft.batch(() => P(this, He).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
                    let l = a.fetch(void 0, r);
                    return r.throwOnError || (l = l.catch(Lt)), a.state.fetchStatus === "paused" ? Promise.resolve() : l
                }));
            return Promise.all(i).then(Lt)
        }
        fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            e.retry === void 0 && (e.retry = !1);
            const r = P(this, He).build(this, e);
            return r.isStaleByTime(Er(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Lt).catch(Lt)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = _g(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Lt).catch(Lt)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = _g(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return wl.isOnline() ? P(this, wr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return P(this, He)
        }
        getMutationCache() {
            return P(this, wr)
        }
        getDefaultOptions() {
            return P(this, xr)
        }
        setDefaultOptions(t) {
            X(this, xr, t)
        }
        setQueryDefaults(t, e) {
            P(this, Zs).set(yo(t), {
                queryKey: t,
                defaultOptions: e
            })
        }
        getQueryDefaults(t) {
            const e = [...P(this, Zs).values()],
                r = {};
            return e.forEach(i => {
                vo(t, i.queryKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        setMutationDefaults(t, e) {
            P(this, ei).set(yo(t), {
                mutationKey: t,
                defaultOptions: e
            })
        }
        getMutationDefaults(t) {
            const e = [...P(this, ei).values()],
                r = {};
            return e.forEach(i => {
                vo(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = {
                ...P(this, xr).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return e.queryHash || (e.queryHash = df(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === ff && (e.enabled = !1), e
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : {
                ...P(this, xr).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            P(this, He).clear(), P(this, wr).clear()
        }
    }, He = new WeakMap, wr = new WeakMap, xr = new WeakMap, Zs = new WeakMap, ei = new WeakMap, Sr = new WeakMap, ti = new WeakMap, ni = new WeakMap, Qv),
    O0 = N.createContext(void 0),
    vk = t => {
        const e = N.useContext(O0);
        if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return e
    },
    wk = ({
        client: t,
        children: e
    }) => (N.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), C.jsx(O0.Provider, {
        value: t,
        children: e
    })),
    L0 = N.createContext(!1),
    xk = () => N.useContext(L0);
L0.Provider;

function Sk() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        },
        reset: () => {
            t = !0
        },
        isReset: () => t
    }
}
var bk = N.createContext(Sk()),
    Ek = () => N.useContext(bk),
    kk = (t, e, r) => {
        const i = r != null && r.state.error && typeof t.throwOnError == "function" ? T0(t.throwOnError, [r.state.error, r]) : t.throwOnError;
        (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
    },
    Ck = t => {
        N.useEffect(() => {
            t.clearReset()
        }, [t])
    },
    Tk = ({
        result: t,
        errorResetBoundary: e,
        throwOnError: r,
        query: i,
        suspense: a
    }) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || T0(r, [t.error, i])),
    Pk = t => {
        if (t.suspense) {
            const r = a => a === "static" ? a : Math.max(a ?? 1e3, 1e3),
                i = t.staleTime;
            t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
        }
    },
    _k = (t, e) => t.isLoading && t.isFetching && !e,
    Rk = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
    Ag = (t, e, r) => e.fetchOptimistic(t).catch(() => {
        r.clearReset()
    });

function Ak(t, e, r) {
    var w, E, S, b;
    const i = xk(),
        a = Ek(),
        l = vk(),
        c = l.defaultQueryOptions(t);
    (E = (w = l.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || E.call(w, c);
    const f = l.getQueryCache().get(c.queryHash);
    c._optimisticResults = i ? "isRestoring" : "optimistic", Pk(c), kk(c, a, f), Ck(a);
    const h = !l.getQueryCache().get(c.queryHash),
        [m] = N.useState(() => new e(l, c)),
        g = m.getOptimisticResult(c),
        y = !i && t.subscribed !== !1;
    if (N.useSyncExternalStore(N.useCallback(x => {
            const R = y ? m.subscribe(ft.batchCalls(x)) : Lt;
            return m.updateResult(), R
        }, [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()), N.useEffect(() => {
            m.setOptions(c)
        }, [c, m]), Rk(c, g)) throw Ag(c, m, a);
    if (Tk({
            result: g,
            errorResetBoundary: a,
            throwOnError: c.throwOnError,
            query: f,
            suspense: c.suspense
        })) throw g.error;
    if ((b = (S = l.getDefaultOptions().queries) == null ? void 0 : S._experimental_afterQuery) == null || b.call(S, c, g), c.experimental_prefetchInRender && !ls && _k(g, i)) {
        const x = h ? Ag(c, m, a) : f == null ? void 0 : f.promise;
        x == null || x.catch(Lt).finally(() => {
            m.updateResult()
        })
    }
    return c.notifyOnChangeProps ? g : m.trackResult(g)
}

function Nk(t, e) {
    return Ak(t, uk)
}
const Ok = new yk({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: !1,
                retry: 1
            }
        }
    }),
    mf = N.createContext({});

function gf(t) {
    const e = N.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const Nl = N.createContext(null),
    yf = N.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
class Lk extends N.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0, i.width = r.offsetWidth || 0, i.top = r.offsetTop, i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Mk({
    children: t,
    isPresent: e
}) {
    const r = N.useId(),
        i = N.useRef(null),
        a = N.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: l
        } = N.useContext(yf);
    return N.useInsertionEffect(() => {
        const {
            width: c,
            height: f,
            top: h,
            left: m
        } = a.current;
        if (e || !i.current || !c || !f) return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return l && (g.nonce = l), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `), () => {
            document.head.removeChild(g)
        }
    }, [e]), C.jsx(Lk, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: N.cloneElement(t, {
            ref: i
        })
    })
}
const Dk = ({
    children: t,
    initial: e,
    isPresent: r,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: l,
    mode: c
}) => {
    const f = gf(jk),
        h = N.useId(),
        m = N.useCallback(y => {
            f.set(y, !0);
            for (const w of f.values())
                if (!w) return;
            i && i()
        }, [f, i]),
        g = N.useMemo(() => ({
            id: h,
            initial: e,
            isPresent: r,
            custom: a,
            onExitComplete: m,
            register: y => (f.set(y, !1), () => f.delete(y))
        }), l ? [Math.random(), m] : [r, m]);
    return N.useMemo(() => {
        f.forEach((y, w) => f.set(w, !1))
    }, [r]), N.useEffect(() => {
        !r && !f.size && i && i()
    }, [r]), c === "popLayout" && (t = C.jsx(Mk, {
        isPresent: r,
        children: t
    })), C.jsx(Nl.Provider, {
        value: g,
        children: t
    })
};

function jk() {
    return new Map
}

function M0(t = !0) {
    const e = N.useContext(Nl);
    if (e === null) return [!0, null];
    const {
        isPresent: r,
        onExitComplete: i,
        register: a
    } = e, l = N.useId();
    N.useEffect(() => {
        t && a(l)
    }, [t]);
    const c = N.useCallback(() => t && i && i(l), [l, i, t]);
    return !r && i ? [!1, c] : [!0]
}
const Ja = t => t.key || "";

function Ng(t) {
    const e = [];
    return N.Children.forEach(t, r => {
        N.isValidElement(r) && e.push(r)
    }), e
}
const vf = typeof window < "u",
    D0 = vf ? N.useLayoutEffect : N.useEffect,
    wf = ({
        children: t,
        custom: e,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: a = !0,
        mode: l = "sync",
        propagate: c = !1
    }) => {
        const [f, h] = M0(c), m = N.useMemo(() => Ng(t), [t]), g = c && !f ? [] : m.map(Ja), y = N.useRef(!0), w = N.useRef(m), E = gf(() => new Map), [S, b] = N.useState(m), [x, R] = N.useState(m);
        D0(() => {
            y.current = !1, w.current = m;
            for (let M = 0; M < x.length; M++) {
                const B = Ja(x[M]);
                g.includes(B) ? E.delete(B) : E.get(B) !== !0 && E.set(B, !1)
            }
        }, [x, g.length, g.join("-")]);
        const V = [];
        if (m !== S) {
            let M = [...m];
            for (let B = 0; B < x.length; B++) {
                const K = x[B],
                    G = Ja(K);
                g.includes(G) || (M.splice(B, 0, K), V.push(K))
            }
            l === "wait" && V.length && (M = V), R(Ng(M)), b(m);
            return
        }
        const {
            forceRender: D
        } = N.useContext(mf);
        return C.jsx(C.Fragment, {
            children: x.map(M => {
                const B = Ja(M),
                    K = c && !f ? !1 : m === x || g.includes(B),
                    G = () => {
                        if (E.has(B)) E.set(B, !0);
                        else return;
                        let j = !0;
                        E.forEach(Z => {
                            Z || (j = !1)
                        }), j && (D == null || D(), R(w.current), c && (h == null || h()), i && i())
                    };
                return C.jsx(Dk, {
                    isPresent: K,
                    initial: !y.current || r ? void 0 : !1,
                    custom: K ? void 0 : e,
                    presenceAffectsLayout: a,
                    mode: l,
                    onExitComplete: K ? void 0 : G,
                    children: M
                }, B)
            })
        })
    },
    Ut = t => t;
let j0 = Ut;

function xf(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const ri = (t, e, r) => {
        const i = e - t;
        return i === 0 ? 1 : (r - t) / i
    },
    Bn = t => t * 1e3,
    Un = t => t / 1e3,
    Ik = {
        useManualTiming: !1
    };

function Fk(t) {
    let e = new Set,
        r = new Set,
        i = !1,
        a = !1;
    const l = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function f(m) {
        l.has(m) && (h.schedule(m), t()), m(c)
    }
    const h = {
        schedule: (m, g = !1, y = !1) => {
            const E = y && i ? e : r;
            return g && l.add(m), E.has(m) || E.add(m), m
        },
        cancel: m => {
            r.delete(m), l.delete(m)
        },
        process: m => {
            if (c = m, i) {
                a = !0;
                return
            }
            i = !0, [e, r] = [r, e], e.forEach(f), e.clear(), i = !1, a && (a = !1, h.process(m))
        }
    };
    return h
}
const Za = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    Vk = 40;

function I0(t, e) {
    let r = !1,
        i = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = () => r = !0,
        c = Za.reduce((R, V) => (R[V] = Fk(l), R), {}),
        {
            read: f,
            resolveKeyframes: h,
            update: m,
            preRender: g,
            render: y,
            postRender: w
        } = c,
        E = () => {
            const R = performance.now();
            r = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, Vk), 1), a.timestamp = R, a.isProcessing = !0, f.process(a), h.process(a), m.process(a), g.process(a), y.process(a), w.process(a), a.isProcessing = !1, r && e && (i = !1, t(E))
        },
        S = () => {
            r = !0, i = !0, a.isProcessing || t(E)
        };
    return {
        schedule: Za.reduce((R, V) => {
            const D = c[V];
            return R[V] = (M, B = !1, K = !1) => (r || S(), D.schedule(M, B, K)), R
        }, {}),
        cancel: R => {
            for (let V = 0; V < Za.length; V++) c[Za[V]].cancel(R)
        },
        state: a,
        steps: c
    }
}
const {
    schedule: Be,
    cancel: Cr,
    state: dt,
    steps: Qc
} = I0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ut, !0), F0 = N.createContext({
    strict: !1
}), Og = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, si = {};
for (const t in Og) si[t] = {
    isEnabled: e => Og[t].some(r => !!e[r])
};

function Bk(t) {
    for (const e in t) si[e] = {
        ...si[e],
        ...t[e]
    }
}
const Uk = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function xl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Uk.has(t)
}
let V0 = t => !xl(t);

function zk(t) {
    t && (V0 = e => e.startsWith("on") ? !xl(e) : t(e))
}
try {
    zk(require("@emotion/is-prop-valid").default)
} catch {}

function $k(t, e, r) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (V0(a) || r === !0 && xl(a) || !e && !xl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}

function Wk(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map,
        r = (...i) => t(...i);
    return new Proxy(r, {
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a))
    })
}
const Ol = N.createContext({});

function wo(t) {
    return typeof t == "string" || Array.isArray(t)
}

function Ll(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Sf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    bf = ["initial", ...Sf];

function Ml(t) {
    return Ll(t.animate) || bf.some(e => wo(t[e]))
}

function B0(t) {
    return !!(Ml(t) || t.variants)
}

function qk(t, e) {
    if (Ml(t)) {
        const {
            initial: r,
            animate: i
        } = t;
        return {
            initial: r === !1 || wo(r) ? r : void 0,
            animate: wo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function Hk(t) {
    const {
        initial: e,
        animate: r
    } = qk(t, N.useContext(Ol));
    return N.useMemo(() => ({
        initial: e,
        animate: r
    }), [Lg(e), Lg(r)])
}

function Lg(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Kk = Symbol.for("motionComponentSymbol");

function Vs(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function Qk(t, e, r) {
    return N.useCallback(i => {
        i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), r && (typeof r == "function" ? r(i) : Vs(r) && (r.current = i))
    }, [e])
}
const Ef = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Gk = "framerAppearId",
    U0 = "data-" + Ef(Gk),
    {
        schedule: kf
    } = I0(queueMicrotask, !1),
    z0 = N.createContext({});

function Yk(t, e, r, i, a) {
    var l, c;
    const {
        visualElement: f
    } = N.useContext(Ol), h = N.useContext(F0), m = N.useContext(Nl), g = N.useContext(yf).reducedMotion, y = N.useRef(null);
    i = i || h.renderer, !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: f,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current,
        E = N.useContext(z0);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && Xk(y.current, r, a, E);
    const S = N.useRef(!1);
    N.useInsertionEffect(() => {
        w && S.current && w.update(r, m)
    });
    const b = r[U0],
        x = N.useRef(!!b && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, b)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, b)));
    return D0(() => {
        w && (S.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), kf.render(w.render), x.current && w.animationState && w.animationState.animateChanges())
    }), N.useEffect(() => {
        w && (!x.current && w.animationState && w.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null || R === void 0 || R.call(window, b)
        }), x.current = !1))
    }), w
}

function Xk(t, e, r, i) {
    const {
        layoutId: a,
        layout: l,
        drag: c,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: m
    } = e;
    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : $0(t.parent)), t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!c || f && Vs(f),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}

function $0(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : $0(t.parent)
}

function Jk({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: r,
    useVisualState: i,
    Component: a
}) {
    var l, c;
    t && Bk(t);

    function f(m, g) {
        let y;
        const w = {
                ...N.useContext(yf),
                ...m,
                layoutId: Zk(m)
            },
            {
                isStatic: E
            } = w,
            S = Hk(m),
            b = i(m, E);
        if (!E && vf) {
            eC();
            const x = tC(w);
            y = x.MeasureLayout, S.visualElement = Yk(a, b, w, e, x.ProjectionNode)
        }
        return C.jsxs(Ol.Provider, {
            value: S,
            children: [y && S.visualElement ? C.jsx(y, {
                visualElement: S.visualElement,
                ...w
            }) : null, r(a, m, Qk(b, S.visualElement, g), b, E, S.visualElement)]
        })
    }
    f.displayName = `motion.${typeof a=="string"?a:`create(${(c=(l=a.displayName)!==null&&l!==void 0?l:a.name)!==null&&c!==void 0?c:""})`}`;
    const h = N.forwardRef(f);
    return h[Kk] = a, h
}

function Zk({
    layoutId: t
}) {
    const e = N.useContext(mf).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function eC(t, e) {
    N.useContext(F0).strict
}

function tC(t) {
    const {
        drag: e,
        layout: r
    } = si;
    if (!e && !r) return {};
    const i = {
        ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const nC = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Cf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(nC.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Mg(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((r, i) => {
        e[0][i] = r.get(), e[1][i] = r.getVelocity()
    }), e
}

function Tf(t, e, r, i) {
    if (typeof e == "function") {
        const [a, l] = Mg(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [a, l] = Mg(i);
        e = e(r !== void 0 ? r : t.custom, a, l)
    }
    return e
}
const Nd = t => Array.isArray(t),
    rC = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    sC = t => Nd(t) ? t[t.length - 1] || 0 : t,
    bt = t => !!(t && t.getVelocity);

function al(t) {
    const e = bt(t) ? t.get() : t;
    return rC(e) ? e.toValue() : e
}

function iC({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onUpdate: r
}, i, a, l) {
    const c = {
        latestValues: oC(i, a, l, t),
        renderState: e()
    };
    return r && (c.onMount = f => r({
        props: i,
        current: f,
        ...c
    }), c.onUpdate = f => r(f)), c
}
const W0 = t => (e, r) => {
    const i = N.useContext(Ol),
        a = N.useContext(Nl),
        l = () => iC(t, e, i, a);
    return r ? l() : gf(l)
};

function oC(t, e, r, i) {
    const a = {},
        l = i(t, {});
    for (const w in l) a[w] = al(l[w]);
    let {
        initial: c,
        animate: f
    } = t;
    const h = Ml(t),
        m = B0(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial), f === void 0 && (f = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? f : c;
    if (y && typeof y != "boolean" && !Ll(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let E = 0; E < w.length; E++) {
            const S = Tf(t, w[E]);
            if (S) {
                const {
                    transitionEnd: b,
                    transition: x,
                    ...R
                } = S;
                for (const V in R) {
                    let D = R[V];
                    if (Array.isArray(D)) {
                        const M = g ? D.length - 1 : 0;
                        D = D[M]
                    }
                    D !== null && (a[V] = D)
                }
                for (const V in b) a[V] = b[V]
            }
        }
    }
    return a
}
const ai = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ds = new Set(ai),
    q0 = t => e => typeof e == "string" && e.startsWith(t),
    H0 = q0("--"),
    aC = q0("var(--"),
    Pf = t => aC(t) ? lC.test(t.split("/*")[0].trim()) : !1,
    lC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    K0 = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    zn = (t, e, r) => r > e ? e : r < t ? t : r,
    li = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    xo = {
        ...li,
        transform: t => zn(0, 1, t)
    },
    el = {
        ...li,
        default: 1
    },
    Ao = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    hr = Ao("deg"),
    bn = Ao("%"),
    ce = Ao("px"),
    uC = Ao("vh"),
    cC = Ao("vw"),
    Dg = {
        ...bn,
        parse: t => bn.parse(t) / 100,
        transform: t => bn.transform(t * 100)
    },
    dC = {
        borderWidth: ce,
        borderTopWidth: ce,
        borderRightWidth: ce,
        borderBottomWidth: ce,
        borderLeftWidth: ce,
        borderRadius: ce,
        radius: ce,
        borderTopLeftRadius: ce,
        borderTopRightRadius: ce,
        borderBottomRightRadius: ce,
        borderBottomLeftRadius: ce,
        width: ce,
        maxWidth: ce,
        height: ce,
        maxHeight: ce,
        top: ce,
        right: ce,
        bottom: ce,
        left: ce,
        padding: ce,
        paddingTop: ce,
        paddingRight: ce,
        paddingBottom: ce,
        paddingLeft: ce,
        margin: ce,
        marginTop: ce,
        marginRight: ce,
        marginBottom: ce,
        marginLeft: ce,
        backgroundPositionX: ce,
        backgroundPositionY: ce
    },
    fC = {
        rotate: hr,
        rotateX: hr,
        rotateY: hr,
        rotateZ: hr,
        scale: el,
        scaleX: el,
        scaleY: el,
        scaleZ: el,
        skew: hr,
        skewX: hr,
        skewY: hr,
        distance: ce,
        translateX: ce,
        translateY: ce,
        translateZ: ce,
        x: ce,
        y: ce,
        z: ce,
        perspective: ce,
        transformPerspective: ce,
        opacity: xo,
        originX: Dg,
        originY: Dg,
        originZ: ce
    },
    jg = {
        ...li,
        transform: Math.round
    },
    _f = {
        ...dC,
        ...fC,
        zIndex: jg,
        size: ce,
        fillOpacity: xo,
        strokeOpacity: xo,
        numOctaves: jg
    },
    hC = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    pC = ai.length;

function mC(t, e, r) {
    let i = "",
        a = !0;
    for (let l = 0; l < pC; l++) {
        const c = ai[l],
            f = t[c];
        if (f === void 0) continue;
        let h = !0;
        if (typeof f == "number" ? h = f === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(f) === 0, !h || r) {
            const m = K0(f, _f[c]);
            if (!h) {
                a = !1;
                const g = hC[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(), r ? i = r(e, a ? "" : i) : a && (i = "none"), i
}

function Rf(t, e, r) {
    const {
        style: i,
        vars: a,
        transformOrigin: l
    } = t;
    let c = !1,
        f = !1;
    for (const h in e) {
        const m = e[h];
        if (ds.has(h)) {
            c = !0;
            continue
        } else if (H0(h)) {
            a[h] = m;
            continue
        } else {
            const g = K0(m, _f[h]);
            h.startsWith("origin") ? (f = !0, l[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = mC(e, t.transform, r) : i.transform && (i.transform = "none")), f) {
        const {
            originX: h = "50%",
            originY: m = "50%",
            originZ: g = 0
        } = l;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const gC = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    yC = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function vC(t, e, r = 1, i = 0, a = !0) {
    t.pathLength = 1;
    const l = a ? gC : yC;
    t[l.offset] = ce.transform(-i);
    const c = ce.transform(e),
        f = ce.transform(r);
    t[l.array] = `${c} ${f}`
}

function Ig(t, e, r) {
    return typeof t == "string" ? t : ce.transform(e + r * t)
}

function wC(t, e, r) {
    const i = Ig(e, t.x, t.width),
        a = Ig(r, t.y, t.height);
    return `${i} ${a}`
}

function Af(t, {
    attrX: e,
    attrY: r,
    attrScale: i,
    originX: a,
    originY: l,
    pathLength: c,
    pathSpacing: f = 1,
    pathOffset: h = 0,
    ...m
}, g, y) {
    if (Rf(t, m, y), g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: w,
        style: E,
        dimensions: S
    } = t;
    w.transform && (S && (E.transform = w.transform), delete w.transform), S && (a !== void 0 || l !== void 0 || E.transform) && (E.transformOrigin = wC(S, a !== void 0 ? a : .5, l !== void 0 ? l : .5)), e !== void 0 && (w.x = e), r !== void 0 && (w.y = r), i !== void 0 && (w.scale = i), c !== void 0 && vC(w, c, f, h, !1)
}
const Nf = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Q0 = () => ({
        ...Nf(),
        attrs: {}
    }),
    Of = t => typeof t == "string" && t.toLowerCase() === "svg";

function G0(t, {
    style: e,
    vars: r
}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const l in r) t.style.setProperty(l, r[l])
}
const Y0 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function X0(t, e, r, i) {
    G0(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(Y0.has(a) ? a : Ef(a), e.attrs[a])
}
const Sl = {};

function xC(t) {
    Object.assign(Sl, t)
}

function J0(t, {
    layout: e,
    layoutId: r
}) {
    return ds.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!Sl[t] || t === "opacity")
}

function Lf(t, e, r) {
    var i;
    const {
        style: a
    } = t, l = {};
    for (const c in a)(bt(a[c]) || e.style && bt(e.style[c]) || J0(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (l[c] = a[c]);
    return l
}

function Z0(t, e, r) {
    const i = Lf(t, e, r);
    for (const a in t)
        if (bt(t[a]) || bt(e[a])) {
            const l = ai.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        } return i
}

function SC(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Fg = ["x", "y", "width", "height", "cx", "cy", "r"],
    bC = {
        useVisualState: W0({
            scrapeMotionValuesFromProps: Z0,
            createRenderState: Q0,
            onUpdate: ({
                props: t,
                prevProps: e,
                current: r,
                renderState: i,
                latestValues: a
            }) => {
                if (!r) return;
                let l = !!t.drag;
                if (!l) {
                    for (const f in a)
                        if (ds.has(f)) {
                            l = !0;
                            break
                        }
                }
                if (!l) return;
                let c = !e;
                if (e)
                    for (let f = 0; f < Fg.length; f++) {
                        const h = Fg[f];
                        t[h] !== e[h] && (c = !0)
                    }
                c && Be.read(() => {
                    SC(r, i), Be.render(() => {
                        Af(i, a, Of(r.tagName), t.transformTemplate), X0(r, i)
                    })
                })
            }
        })
    },
    EC = {
        useVisualState: W0({
            scrapeMotionValuesFromProps: Lf,
            createRenderState: Nf
        })
    };

function ew(t, e, r) {
    for (const i in e) !bt(e[i]) && !J0(i, r) && (t[i] = e[i])
}

function kC({
    transformTemplate: t
}, e) {
    return N.useMemo(() => {
        const r = Nf();
        return Rf(r, e, t), Object.assign({}, r.vars, r.style)
    }, [e])
}

function CC(t, e) {
    const r = t.style || {},
        i = {};
    return ew(i, r, t), Object.assign(i, kC(t, e)), i
}

function TC(t, e) {
    const r = {},
        i = CC(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
}

function PC(t, e, r, i) {
    const a = N.useMemo(() => {
        const l = Q0();
        return Af(l, e, Of(i), t.transformTemplate), {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }, [e]);
    if (t.style) {
        const l = {};
        ew(l, t.style, t), a.style = {
            ...l,
            ...a.style
        }
    }
    return a
}

function _C(t = !1) {
    return (r, i, a, {
        latestValues: l
    }, c) => {
        const h = (Cf(r) ? PC : TC)(i, l, c, r),
            m = $k(i, typeof r == "string", t),
            g = r !== N.Fragment ? {
                ...m,
                ...h,
                ref: a
            } : {},
            {
                children: y
            } = i,
            w = N.useMemo(() => bt(y) ? y.get() : y, [y]);
        return N.createElement(r, {
            ...g,
            children: w
        })
    }
}

function RC(t, e) {
    return function(i, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const c = {
            ...Cf(i) ? bC : EC,
            preloadedFeatures: t,
            useRender: _C(a),
            createVisualElement: e,
            Component: i
        };
        return Jk(c)
    }
}

function tw(t, e) {
    if (!Array.isArray(e)) return !1;
    const r = e.length;
    if (r !== t.length) return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}

function Dl(t, e, r) {
    const i = t.getProps();
    return Tf(i, e, r !== void 0 ? r : i.custom, t)
}
const AC = xf(() => window.ScrollTimeline !== void 0);
class NC {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (AC() && a.attachTimeline) return a.attachTimeline(e);
            if (typeof r == "function") return r(a)
        });
        return () => {
            i.forEach((a, l) => {
                a && a(), this.animations[l].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++) e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class OC extends NC {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}

function Mf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Od = 2e4;

function nw(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < Od;) e += r, i = t.next(e);
    return e >= Od ? 1 / 0 : e
}

function Df(t) {
    return typeof t == "function"
}

function Vg(t, e) {
    t.timeline = e, t.onfinish = null
}
const jf = t => Array.isArray(t) && typeof t[0] == "number",
    LC = {
        linearEasing: void 0
    };

function MC(t, e) {
    const r = xf(t);
    return () => {
        var i;
        return (i = LC[e]) !== null && i !== void 0 ? i : r()
    }
}
const bl = MC(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    rw = (t, e, r = 10) => {
        let i = "";
        const a = Math.max(Math.round(e / r), 2);
        for (let l = 0; l < a; l++) i += t(ri(0, a - 1, l)) + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    };

function sw(t) {
    return !!(typeof t == "function" && bl() || !t || typeof t == "string" && (t in Ld || bl()) || jf(t) || Array.isArray(t) && t.every(sw))
}
const ro = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
    Ld = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: ro([0, .65, .55, 1]),
        circOut: ro([.55, 0, 1, .45]),
        backIn: ro([.31, .01, .66, -.59]),
        backOut: ro([.33, 1.53, .69, .99])
    };

function iw(t, e) {
    if (t) return typeof t == "function" && bl() ? rw(t, e) : jf(t) ? ro(t) : Array.isArray(t) ? t.map(r => iw(r, e) || Ld.easeOut) : Ld[t]
}
const un = {
    x: !1,
    y: !1
};

function ow() {
    return un.x || un.y
}

function DC(t, e, r) {
    var i;
    if (t instanceof Element) return [t];
    if (typeof t == "string") {
        let a = document;
        const l = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}

function aw(t, e) {
    const r = DC(t),
        i = new AbortController,
        a = {
            passive: !0,
            ...e,
            signal: i.signal
        };
    return [r, a, () => i.abort()]
}

function Bg(t) {
    return e => {
        e.pointerType === "touch" || ow() || t(e)
    }
}

function jC(t, e, r = {}) {
    const [i, a, l] = aw(t, r), c = Bg(f => {
        const {
            target: h
        } = f, m = e(f);
        if (typeof m != "function" || !h) return;
        const g = Bg(y => {
            m(y), h.removeEventListener("pointerleave", g)
        });
        h.addEventListener("pointerleave", g, a)
    });
    return i.forEach(f => {
        f.addEventListener("pointerenter", c, a)
    }), l
}
const lw = (t, e) => e ? t === e ? !0 : lw(t, e.parentElement) : !1,
    If = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    IC = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function FC(t) {
    return IC.has(t.tagName) || t.tabIndex !== -1
}
const so = new WeakSet;

function Ug(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function Gc(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const VC = (t, e) => {
    const r = t.currentTarget;
    if (!r) return;
    const i = Ug(() => {
        if (so.has(r)) return;
        Gc(r, "down");
        const a = Ug(() => {
                Gc(r, "up")
            }),
            l = () => Gc(r, "cancel");
        r.addEventListener("keyup", a, e), r.addEventListener("blur", l, e)
    });
    r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
};

function zg(t) {
    return If(t) && !ow()
}

function BC(t, e, r = {}) {
    const [i, a, l] = aw(t, r), c = f => {
        const h = f.currentTarget;
        if (!zg(f) || so.has(h)) return;
        so.add(h);
        const m = e(f),
            g = (E, S) => {
                window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", w), !(!zg(E) || !so.has(h)) && (so.delete(h), typeof m == "function" && m(E, {
                    success: S
                }))
            },
            y = E => {
                g(E, r.useGlobalTarget || lw(h, E.target))
            },
            w = E => {
                g(E, !1)
            };
        window.addEventListener("pointerup", y, a), window.addEventListener("pointercancel", w, a)
    };
    return i.forEach(f => {
        !FC(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0), (r.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a), f.addEventListener("focus", m => VC(m, a), a)
    }), l
}

function UC(t) {
    return t === "x" || t === "y" ? un[t] ? null : (un[t] = !0, () => {
        un[t] = !1
    }) : un.x || un.y ? null : (un.x = un.y = !0, () => {
        un.x = un.y = !1
    })
}
const uw = new Set(["width", "height", "top", "left", "right", "bottom", ...ai]);
let ll;

function zC() {
    ll = void 0
}
const En = {
    now: () => (ll === void 0 && En.set(dt.isProcessing || Ik.useManualTiming ? dt.timestamp : performance.now()), ll),
    set: t => {
        ll = t, queueMicrotask(zC)
    }
};

function Ff(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function Vf(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class Bf {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Ff(this.subscriptions, e), () => Vf(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](e, r, i);
            else
                for (let l = 0; l < a; l++) {
                    const c = this.subscriptions[l];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function cw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const $g = 30,
    $C = t => !isNaN(parseFloat(t));
class WC {
    constructor(e, r = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
            const l = En.now();
            this.updatedAt !== l && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = En.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = $C(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new Bf);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(), Be.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : i
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e, this.stopPassiveEffect = r
    }
    set(e, r = !0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = En.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > $g) return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, $g);
        return cw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(), new Promise(r => {
            this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function So(t, e) {
    return new WC(t, e)
}

function qC(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, So(r))
}

function HC(t, e) {
    const r = Dl(t, e);
    let {
        transitionEnd: i = {},
        transition: a = {},
        ...l
    } = r || {};
    l = {
        ...l,
        ...i
    };
    for (const c in l) {
        const f = sC(l[c]);
        qC(t, c, f)
    }
}

function KC(t) {
    return !!(bt(t) && t.add)
}

function Md(t, e) {
    const r = t.getValue("willChange");
    if (KC(r)) return r.add(e)
}

function dw(t) {
    return t.props[U0]
}
const fw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
    QC = 1e-7,
    GC = 12;

function YC(t, e, r, i, a) {
    let l, c, f = 0;
    do c = e + (r - e) / 2, l = fw(c, i, a) - t, l > 0 ? r = c : e = c; while (Math.abs(l) > QC && ++f < GC);
    return c
}

function No(t, e, r, i) {
    if (t === e && r === i) return Ut;
    const a = l => YC(l, 0, 1, t, r);
    return l => l === 0 || l === 1 ? l : fw(a(l), e, i)
}
const hw = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    pw = t => e => 1 - t(1 - e),
    mw = No(.33, 1.53, .69, .99),
    Uf = pw(mw),
    gw = hw(Uf),
    yw = t => (t *= 2) < 1 ? .5 * Uf(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    zf = t => 1 - Math.sin(Math.acos(t)),
    vw = pw(zf),
    ww = hw(zf),
    xw = t => /^0[^.\s]+$/u.test(t);

function XC(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || xw(t) : !0
}
const fo = t => Math.round(t * 1e5) / 1e5,
    $f = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function JC(t) {
    return t == null
}
const ZC = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Wf = (t, e) => r => !!(typeof r == "string" && ZC.test(r) && r.startsWith(t) || e && !JC(r) && Object.prototype.hasOwnProperty.call(r, e)),
    Sw = (t, e, r) => i => {
        if (typeof i != "string") return i;
        const [a, l, c, f] = i.match($f);
        return {
            [t]: parseFloat(a),
            [e]: parseFloat(l),
            [r]: parseFloat(c),
            alpha: f !== void 0 ? parseFloat(f) : 1
        }
    },
    eT = t => zn(0, 255, t),
    Yc = {
        ...li,
        transform: t => Math.round(eT(t))
    },
    Gr = {
        test: Wf("rgb", "red"),
        parse: Sw("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
        }) => "rgba(" + Yc.transform(t) + ", " + Yc.transform(e) + ", " + Yc.transform(r) + ", " + fo(xo.transform(i)) + ")"
    };

function tT(t) {
    let e = "",
        r = "",
        i = "",
        a = "";
    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, r += r, i += i, a += a), {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Dd = {
        test: Wf("#"),
        parse: tT,
        transform: Gr.transform
    },
    Bs = {
        test: Wf("hsl", "hue"),
        parse: Sw("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + bn.transform(fo(e)) + ", " + bn.transform(fo(r)) + ", " + fo(xo.transform(i)) + ")"
    },
    xt = {
        test: t => Gr.test(t) || Dd.test(t) || Bs.test(t),
        parse: t => Gr.test(t) ? Gr.parse(t) : Bs.test(t) ? Bs.parse(t) : Dd.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Gr.transform(t) : Bs.transform(t)
    },
    nT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function rT(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match($f)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(nT)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const bw = "number",
    Ew = "color",
    sT = "var",
    iT = "var(",
    Wg = "${}",
    oT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function bo(t) {
    const e = t.toString(),
        r = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let l = 0;
    const f = e.replace(oT, h => (xt.test(h) ? (i.color.push(l), a.push(Ew), r.push(xt.parse(h))) : h.startsWith(iT) ? (i.var.push(l), a.push(sT), r.push(h)) : (i.number.push(l), a.push(bw), r.push(parseFloat(h))), ++l, Wg)).split(Wg);
    return {
        values: r,
        split: f,
        indexes: i,
        types: a
    }
}

function kw(t) {
    return bo(t).values
}

function Cw(t) {
    const {
        split: e,
        types: r
    } = bo(t), i = e.length;
    return a => {
        let l = "";
        for (let c = 0; c < i; c++)
            if (l += e[c], a[c] !== void 0) {
                const f = r[c];
                f === bw ? l += fo(a[c]) : f === Ew ? l += xt.transform(a[c]) : l += a[c]
            } return l
    }
}
const aT = t => typeof t == "number" ? 0 : t;

function lT(t) {
    const e = kw(t);
    return Cw(t)(e.map(aT))
}
const Tr = {
        test: rT,
        parse: kw,
        createTransformer: Cw,
        getAnimatableNone: lT
    },
    uT = new Set(["brightness", "contrast", "saturate", "opacity"]);

function cT(t) {
    const [e, r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = r.match($f) || [];
    if (!i) return t;
    const a = r.replace(i, "");
    let l = uT.has(e) ? 1 : 0;
    return i !== r && (l *= 100), e + "(" + l + a + ")"
}
const dT = /\b([a-z-]*)\(.*?\)/gu,
    jd = {
        ...Tr,
        getAnimatableNone: t => {
            const e = t.match(dT);
            return e ? e.map(cT).join(" ") : t
        }
    },
    fT = {
        ..._f,
        color: xt,
        backgroundColor: xt,
        outlineColor: xt,
        fill: xt,
        stroke: xt,
        borderColor: xt,
        borderTopColor: xt,
        borderRightColor: xt,
        borderBottomColor: xt,
        borderLeftColor: xt,
        filter: jd,
        WebkitFilter: jd
    },
    qf = t => fT[t];

function Tw(t, e) {
    let r = qf(t);
    return r !== jd && (r = Tr), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const hT = new Set(["auto", "none", "0"]);

function pT(t, e, r) {
    let i = 0,
        a;
    for (; i < t.length && !a;) {
        const l = t[i];
        typeof l == "string" && !hT.has(l) && bo(l).values.length && (a = t[i]), i++
    }
    if (a && r)
        for (const l of e) t[l] = Tw(r, a)
}
const qg = t => t === li || t === ce,
    Hg = (t, e) => parseFloat(t.split(", ")[e]),
    Kg = (t, e) => (r, {
        transform: i
    }) => {
        if (i === "none" || !i) return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a) return Hg(a[1], e);
        {
            const l = i.match(/^matrix\((.+)\)$/u);
            return l ? Hg(l[1], t) : 0
        }
    },
    mT = new Set(["x", "y", "z"]),
    gT = ai.filter(t => !mT.has(t));

function yT(t) {
    const e = [];
    return gT.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
    }), e
}
const ii = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: Kg(4, 13),
    y: Kg(5, 14)
};
ii.translateX = ii.x;
ii.translateY = ii.y;
const os = new Set;
let Id = !1,
    Fd = !1;

function Pw() {
    if (Fd) {
        const t = Array.from(os).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            r = new Map;
        e.forEach(i => {
            const a = yT(i);
            a.length && (r.set(i, a), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach(([l, c]) => {
                var f;
                (f = i.getValue(l)) === null || f === void 0 || f.set(c)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    Fd = !1, Id = !1, os.forEach(t => t.complete()), os.clear()
}

function _w() {
    os.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (Fd = !0)
    })
}

function vT() {
    _w(), Pw()
}
class Hf {
    constructor(e, r, i, a, l, c = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = i, this.motionValue = a, this.element = l, this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (os.add(this), Id || (Id = !0, Be.read(_w), Be.resolveKeyframes(Pw))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r,
            element: i,
            motionValue: a
        } = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const c = a == null ? void 0 : a.get(),
                        f = e[e.length - 1];
                    if (c !== void 0) e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, f);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = f), a && c === void 0 && a.set(e[0])
                } else e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), os.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, os.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Rw = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    wT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function xT(t) {
    const e = wT.exec(t);
    if (!e) return [, ];
    const [, r, i, a] = e;
    return [`--${r??i}`, a]
}

function Aw(t, e, r = 1) {
    const [i, a] = xT(t);
    if (!i) return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const c = l.trim();
        return Rw(c) ? parseFloat(c) : c
    }
    return Pf(a) ? Aw(a, e, r + 1) : a
}
const Nw = t => e => e.test(t),
    ST = {
        test: t => t === "auto",
        parse: t => t
    },
    Ow = [li, ce, bn, hr, cC, uC, ST],
    Qg = t => Ow.find(Nw(t));
class Lw extends Hf {
    constructor(e, r, i, a, l) {
        super(e, r, i, a, l, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: r,
            name: i
        } = this;
        if (!r || !r.current) return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(), Pf(m))) {
                const g = Aw(m, r.current);
                g !== void 0 && (e[h] = g), h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(), !uw.has(i) || e.length !== 2) return;
        const [a, l] = e, c = Qg(a), f = Qg(l);
        if (c !== f)
            if (qg(c) && qg(f))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r
        } = this, i = [];
        for (let a = 0; a < e.length; a++) XC(e[a]) && i.push(a);
        i.length && pT(e, i, r)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: r,
            name: i
        } = this;
        if (!e || !e.current) return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ii[i](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {
            element: r,
            name: i,
            unresolvedKeyframes: a
        } = this;
        if (!r || !r.current) return;
        const l = r.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const c = a.length - 1,
            f = a[c];
        a[c] = ii[i](r.measureViewportBox(), window.getComputedStyle(r.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([h, m]) => {
            r.getValue(h).set(m)
        }), this.resolveNoneKeyframes()
    }
}
const Gg = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Tr.test(t) || t === "0") && !t.startsWith("url("));

function bT(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e) return !0
}

function ET(t, e, r, i) {
    const a = t[0];
    if (a === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const l = t[t.length - 1],
        c = Gg(a, e),
        f = Gg(l, e);
    return !c || !f ? !1 : bT(t) || (r === "spring" || Df(r)) && i
}
const kT = t => t !== null;

function jl(t, {
    repeat: e,
    repeatType: r = "loop"
}, i) {
    const a = t.filter(kT),
        l = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !l || i === void 0 ? a[l] : i
}
const CT = 40;
class Mw {
    constructor({
        autoplay: e = !0,
        delay: r = 0,
        type: i = "keyframes",
        repeat: a = 0,
        repeatDelay: l = 0,
        repeatType: c = "loop",
        ...f
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = En.now(), this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: c,
            ...f
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > CT ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && vT(), this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = En.now(), this.hasAttemptedResolve = !0;
        const {
            name: i,
            type: a,
            velocity: l,
            delay: c,
            onComplete: f,
            onUpdate: h,
            isGenerator: m
        } = this.options;
        if (!m && !ET(e, i, a, l))
            if (c) this.options.duration = 0;
            else {
                h && h(jl(e, this.options, r)), f && f(), this.resolveFinishedPromise();
                return
            } const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}
const We = (t, e, r) => t + (e - t) * r;

function Xc(t, e, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}

function TT({
    hue: t,
    saturation: e,
    lightness: r,
    alpha: i
}) {
    t /= 360, e /= 100, r /= 100;
    let a = 0,
        l = 0,
        c = 0;
    if (!e) a = l = c = r;
    else {
        const f = r < .5 ? r * (1 + e) : r + e - r * e,
            h = 2 * r - f;
        a = Xc(h, f, t + 1 / 3), l = Xc(h, f, t), c = Xc(h, f, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}

function El(t, e) {
    return r => r > 0 ? e : t
}
const Jc = (t, e, r) => {
        const i = t * t,
            a = r * (e * e - i) + i;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    PT = [Dd, Gr, Bs],
    _T = t => PT.find(e => e.test(t));

function Yg(t) {
    const e = _T(t);
    if (!e) return !1;
    let r = e.parse(t);
    return e === Bs && (r = TT(r)), r
}
const Xg = (t, e) => {
        const r = Yg(t),
            i = Yg(e);
        if (!r || !i) return El(t, e);
        const a = {
            ...r
        };
        return l => (a.red = Jc(r.red, i.red, l), a.green = Jc(r.green, i.green, l), a.blue = Jc(r.blue, i.blue, l), a.alpha = We(r.alpha, i.alpha, l), Gr.transform(a))
    },
    RT = (t, e) => r => e(t(r)),
    Oo = (...t) => t.reduce(RT),
    Vd = new Set(["none", "hidden"]);

function AT(t, e) {
    return Vd.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}

function NT(t, e) {
    return r => We(t, e, r)
}

function Kf(t) {
    return typeof t == "number" ? NT : typeof t == "string" ? Pf(t) ? El : xt.test(t) ? Xg : MT : Array.isArray(t) ? Dw : typeof t == "object" ? xt.test(t) ? Xg : OT : El
}

function Dw(t, e) {
    const r = [...t],
        i = r.length,
        a = t.map((l, c) => Kf(l)(l, e[c]));
    return l => {
        for (let c = 0; c < i; c++) r[c] = a[c](l);
        return r
    }
}

function OT(t, e) {
    const r = {
            ...t,
            ...e
        },
        i = {};
    for (const a in r) t[a] !== void 0 && e[a] !== void 0 && (i[a] = Kf(t[a])(t[a], e[a]));
    return a => {
        for (const l in i) r[l] = i[l](a);
        return r
    }
}

function LT(t, e) {
    var r;
    const i = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let l = 0; l < e.values.length; l++) {
        const c = e.types[l],
            f = t.indexes[c][a[c]],
            h = (r = t.values[f]) !== null && r !== void 0 ? r : 0;
        i[l] = h, a[c]++
    }
    return i
}
const MT = (t, e) => {
    const r = Tr.createTransformer(e),
        i = bo(t),
        a = bo(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Vd.has(t) && !a.values.length || Vd.has(e) && !i.values.length ? AT(t, e) : Oo(Dw(LT(i, a), a.values), r) : El(t, e)
};

function jw(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? We(t, e, r) : Kf(t)(t, e)
}
const DT = 5;

function Iw(t, e, r) {
    const i = Math.max(e - DT, 0);
    return cw(r - t(i), e - i)
}
const Ke = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Zc = .001;

function jT({
    duration: t = Ke.duration,
    bounce: e = Ke.bounce,
    velocity: r = Ke.velocity,
    mass: i = Ke.mass
}) {
    let a, l, c = 1 - e;
    c = zn(Ke.minDamping, Ke.maxDamping, c), t = zn(Ke.minDuration, Ke.maxDuration, Un(t)), c < 1 ? (a = m => {
        const g = m * c,
            y = g * t,
            w = g - r,
            E = Bd(m, c),
            S = Math.exp(-y);
        return Zc - w / E * S
    }, l = m => {
        const y = m * c * t,
            w = y * r + r,
            E = Math.pow(c, 2) * Math.pow(m, 2) * t,
            S = Math.exp(-y),
            b = Bd(Math.pow(m, 2), c);
        return (-a(m) + Zc > 0 ? -1 : 1) * ((w - E) * S) / b
    }) : (a = m => {
        const g = Math.exp(-m * t),
            y = (m - r) * t + 1;
        return -Zc + g * y
    }, l = m => {
        const g = Math.exp(-m * t),
            y = (r - m) * (t * t);
        return g * y
    });
    const f = 5 / t,
        h = FT(a, l, f);
    if (t = Bn(t), isNaN(h)) return {
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        duration: t
    };
    {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const IT = 12;

function FT(t, e, r) {
    let i = r;
    for (let a = 1; a < IT; a++) i = i - t(i) / e(i);
    return i
}

function Bd(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const VT = ["duration", "bounce"],
    BT = ["stiffness", "damping", "mass"];

function Jg(t, e) {
    return e.some(r => t[r] !== void 0)
}

function UT(t) {
    let e = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Jg(t, BT) && Jg(t, VT))
        if (t.visualDuration) {
            const r = t.visualDuration,
                i = 2 * Math.PI / (r * 1.2),
                a = i * i,
                l = 2 * zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: Ke.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const r = jT(t);
            e = {
                ...e,
                ...r,
                mass: Ke.mass
            }, e.isResolvedFromDuration = !0
        } return e
}

function Fw(t = Ke.visualDuration, e = Ke.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: a
    } = r;
    const l = r.keyframes[0],
        c = r.keyframes[r.keyframes.length - 1],
        f = {
            done: !1,
            value: l
        },
        {
            stiffness: h,
            damping: m,
            mass: g,
            duration: y,
            velocity: w,
            isResolvedFromDuration: E
        } = UT({
            ...r,
            velocity: -Un(r.velocity || 0)
        }),
        S = w || 0,
        b = m / (2 * Math.sqrt(h * g)),
        x = c - l,
        R = Un(Math.sqrt(h / g)),
        V = Math.abs(x) < 5;
    i || (i = V ? Ke.restSpeed.granular : Ke.restSpeed.default), a || (a = V ? Ke.restDelta.granular : Ke.restDelta.default);
    let D;
    if (b < 1) {
        const B = Bd(R, b);
        D = K => {
            const G = Math.exp(-b * R * K);
            return c - G * ((S + b * R * x) / B * Math.sin(B * K) + x * Math.cos(B * K))
        }
    } else if (b === 1) D = B => c - Math.exp(-R * B) * (x + (S + R * x) * B);
    else {
        const B = R * Math.sqrt(b * b - 1);
        D = K => {
            const G = Math.exp(-b * R * K),
                j = Math.min(B * K, 300);
            return c - G * ((S + b * R * x) * Math.sinh(j) + B * x * Math.cosh(j)) / B
        }
    }
    const M = {
        calculatedDuration: E && y || null,
        next: B => {
            const K = D(B);
            if (E) f.done = B >= y;
            else {
                let G = 0;
                b < 1 && (G = B === 0 ? Bn(S) : Iw(D, B, K));
                const j = Math.abs(G) <= i,
                    Z = Math.abs(c - K) <= a;
                f.done = j && Z
            }
            return f.value = f.done ? c : K, f
        },
        toString: () => {
            const B = Math.min(nw(M), Od),
                K = rw(G => M.next(B * G).value, B, 30);
            return B + "ms " + K
        }
    };
    return M
}

function Zg({
    keyframes: t,
    velocity: e = 0,
    power: r = .8,
    timeConstant: i = 325,
    bounceDamping: a = 10,
    bounceStiffness: l = 500,
    modifyTarget: c,
    min: f,
    max: h,
    restDelta: m = .5,
    restSpeed: g
}) {
    const y = t[0],
        w = {
            done: !1,
            value: y
        },
        E = j => f !== void 0 && j < f || h !== void 0 && j > h,
        S = j => f === void 0 ? h : h === void 0 || Math.abs(f - j) < Math.abs(h - j) ? f : h;
    let b = r * e;
    const x = y + b,
        R = c === void 0 ? x : c(x);
    R !== x && (b = R - y);
    const V = j => -b * Math.exp(-j / i),
        D = j => R + V(j),
        M = j => {
            const Z = V(j),
                fe = D(j);
            w.done = Math.abs(Z) <= m, w.value = w.done ? R : fe
        };
    let B, K;
    const G = j => {
        E(w.value) && (B = j, K = Fw({
            keyframes: [w.value, S(w.value)],
            velocity: Iw(D, j, w.value),
            damping: a,
            stiffness: l,
            restDelta: m,
            restSpeed: g
        }))
    };
    return G(0), {
        calculatedDuration: null,
        next: j => {
            let Z = !1;
            return !K && B === void 0 && (Z = !0, M(j), G(j)), B !== void 0 && j >= B ? K.next(j - B) : (!Z && M(j), w)
        }
    }
}
const zT = No(.42, 0, 1, 1),
    $T = No(0, 0, .58, 1),
    Vw = No(.42, 0, .58, 1),
    WT = t => Array.isArray(t) && typeof t[0] != "number",
    qT = {
        linear: Ut,
        easeIn: zT,
        easeInOut: Vw,
        easeOut: $T,
        circIn: zf,
        circInOut: ww,
        circOut: vw,
        backIn: Uf,
        backInOut: gw,
        backOut: mw,
        anticipate: yw
    },
    ey = t => {
        if (jf(t)) {
            j0(t.length === 4);
            const [e, r, i, a] = t;
            return No(e, r, i, a)
        } else if (typeof t == "string") return qT[t];
        return t
    };

function HT(t, e, r) {
    const i = [],
        a = r || jw,
        l = t.length - 1;
    for (let c = 0; c < l; c++) {
        let f = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Ut : e;
            f = Oo(h, f)
        }
        i.push(f)
    }
    return i
}

function KT(t, e, {
    clamp: r = !0,
    ease: i,
    mixer: a
} = {}) {
    const l = t.length;
    if (j0(l === e.length), l === 1) return () => e[0];
    if (l === 2 && e[0] === e[1]) return () => e[1];
    const c = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const f = HT(e, i, a),
        h = f.length,
        m = g => {
            if (c && g < t[0]) return e[0];
            let y = 0;
            if (h > 1)
                for (; y < t.length - 2 && !(g < t[y + 1]); y++);
            const w = ri(t[y], t[y + 1], g);
            return f[y](w)
        };
    return r ? g => m(zn(t[0], t[l - 1], g)) : m
}

function QT(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = ri(0, e, i);
        t.push(We(r, 1, a))
    }
}

function GT(t) {
    const e = [0];
    return QT(e, t.length - 1), e
}

function YT(t, e) {
    return t.map(r => r * e)
}

function XT(t, e) {
    return t.map(() => e || Vw).splice(0, t.length - 1)
}

function kl({
    duration: t = 300,
    keyframes: e,
    times: r,
    ease: i = "easeInOut"
}) {
    const a = WT(i) ? i.map(ey) : ey(i),
        l = {
            done: !1,
            value: e[0]
        },
        c = YT(r && r.length === e.length ? r : GT(e), t),
        f = KT(c, e, {
            ease: Array.isArray(a) ? a : XT(e, a)
        });
    return {
        calculatedDuration: t,
        next: h => (l.value = f(h), l.done = h >= t, l)
    }
}
const JT = t => {
        const e = ({
            timestamp: r
        }) => t(r);
        return {
            start: () => Be.update(e, !0),
            stop: () => Cr(e),
            now: () => dt.isProcessing ? dt.timestamp : En.now()
        }
    },
    ZT = {
        decay: Zg,
        inertia: Zg,
        tween: kl,
        keyframes: kl,
        spring: Fw
    },
    eP = t => t / 100;
class Qf extends Mw {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: h
            } = this.options;
            h && h()
        };
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: l
        } = this.options, c = (a == null ? void 0 : a.KeyframeResolver) || Hf, f = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(l, f, r, i, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: r = "keyframes",
            repeat: i = 0,
            repeatDelay: a = 0,
            repeatType: l,
            velocity: c = 0
        } = this.options, f = Df(r) ? r : ZT[r] || kl;
        let h, m;
        f !== kl && typeof e[0] != "number" && (h = Oo(eP, jw(e[0], e[1])), e = [0, 100]);
        const g = f({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (m = f({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })), g.calculatedDuration === null && (g.calculatedDuration = nw(g));
        const {
            calculatedDuration: y
        } = g, w = y + a, E = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: E
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r = !1) {
        const {
            resolved: i
        } = this;
        if (!i) {
            const {
                keyframes: j
            } = this.options;
            return {
                done: !0,
                value: j[j.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: l,
            mirroredGenerator: c,
            mapPercentToKeyframes: f,
            keyframes: h,
            calculatedDuration: m,
            totalDuration: g,
            resolvedDuration: y
        } = i;
        if (this.startTime === null) return l.next(0);
        const {
            delay: w,
            repeat: E,
            repeatType: S,
            repeatDelay: b,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)), r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            V = this.speed >= 0 ? R < 0 : R > g;
        this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let D = this.currentTime,
            M = l;
        if (E) {
            const j = Math.min(this.currentTime, g) / y;
            let Z = Math.floor(j),
                fe = j % 1;
            !fe && j >= 1 && (fe = 1), fe === 1 && Z--, Z = Math.min(Z, E + 1), !!(Z % 2) && (S === "reverse" ? (fe = 1 - fe, b && (fe -= b / y)) : S === "mirror" && (M = c)), D = zn(0, 1, fe) * y
        }
        const B = V ? {
            done: !1,
            value: h[0]
        } : M.next(D);
        f && (B.value = f(B.value));
        let {
            done: K
        } = B;
        !V && m !== null && (K = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && K);
        return G && a !== void 0 && (B.value = jl(h, this.options, a)), x && x(B.value), G && this.finish(), B
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? Un(e.calculatedDuration) : 0
    }
    get time() {
        return Un(this.currentTime)
    }
    set time(e) {
        e = Bn(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e, r && (this.time = Un(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = JT,
            onPlay: r,
            startTime: i
        } = this.options;
        this.driver || (this.driver = e(l => this.tick(l))), r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const tP = new Set(["opacity", "clipPath", "filter", "transform"]);

function nP(t, e, r, {
    delay: i = 0,
    duration: a = 300,
    repeat: l = 0,
    repeatType: c = "loop",
    ease: f = "easeInOut",
    times: h
} = {}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = iw(f, a);
    return Array.isArray(g) && (m.easing = g), t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: l + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const rP = xf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Cl = 10,
    sP = 2e4;

function iP(t) {
    return Df(t.type) || t.type === "spring" || !sw(t.ease)
}

function oP(t, e) {
    const r = new Qf({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let l = 0;
    for (; !i.done && l < sP;) i = r.sample(l), a.push(i.value), l += Cl;
    return {
        times: void 0,
        keyframes: a,
        duration: l - Cl,
        ease: "linear"
    }
}
const Bw = {
    anticipate: yw,
    backInOut: gw,
    circInOut: ww
};

function aP(t) {
    return t in Bw
}
class ty extends Mw {
    constructor(e) {
        super(e);
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: l
        } = this.options;
        this.resolver = new Lw(l, (c, f) => this.onKeyframesResolved(c, f), r, i, a), this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {
            duration: i = 300,
            times: a,
            ease: l,
            type: c,
            motionValue: f,
            name: h,
            startTime: m
        } = this.options;
        if (!f.owner || !f.owner.current) return !1;
        if (typeof l == "string" && bl() && aP(l) && (l = Bw[l]), iP(this.options)) {
            const {
                onComplete: y,
                onUpdate: w,
                motionValue: E,
                element: S,
                ...b
            } = this.options, x = oP(e, b);
            e = x.keyframes, e.length === 1 && (e[1] = e[0]), i = x.duration, a = x.times, l = x.ease, c = "keyframes"
        }
        const g = nP(f.owner.current, h, e, {
            ...this.options,
            duration: i,
            times: a,
            ease: l
        });
        return g.startTime = m ?? this.calcStartTime(), this.pendingTimeline ? (Vg(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
            const {
                onComplete: y
            } = this.options;
            f.set(jl(e, this.options, r)), y && y(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: g,
            duration: i,
            times: a,
            type: c,
            ease: l,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: r
        } = e;
        return Un(r)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: r
        } = e;
        return Un(r.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.currentTime = Bn(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: r
        } = e;
        return r.playbackRate
    }
    set speed(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: r
        } = e;
        return r.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: r
        } = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: r
            } = this;
            if (!r) return Ut;
            const {
                animation: i
            } = r;
            Vg(i, e)
        }
        return Ut
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.playState === "finished" && this.updateFinishedPromise(), r.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r,
            keyframes: i,
            duration: a,
            type: l,
            ease: c,
            times: f
        } = e;
        if (r.playState === "idle" || r.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: m,
                onUpdate: g,
                onComplete: y,
                element: w,
                ...E
            } = this.options, S = new Qf({
                ...E,
                keyframes: i,
                duration: a,
                type: l,
                ease: c,
                times: f,
                isGenerator: !0
            }), b = Bn(this.time);
            m.setWithVelocity(S.sample(b - Cl).value, S.sample(b).value, Cl)
        }
        const {
            onStop: h
        } = this.options;
        h && h(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: r,
            name: i,
            repeatDelay: a,
            repeatType: l,
            damping: c,
            type: f
        } = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: h,
            transformTemplate: m
        } = r.owner.getProps();
        return rP() && i && tP.has(i) && !h && !m && !a && l !== "mirror" && c !== 0 && f !== "inertia"
    }
}
const lP = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    uP = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    cP = {
        type: "keyframes",
        duration: .8
    },
    dP = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    fP = (t, {
        keyframes: e
    }) => e.length > 2 ? cP : ds.has(t) ? t.startsWith("scale") ? uP(e[1]) : lP : dP;

function hP({
    when: t,
    delay: e,
    delayChildren: r,
    staggerChildren: i,
    staggerDirection: a,
    repeat: l,
    repeatType: c,
    repeatDelay: f,
    from: h,
    elapsed: m,
    ...g
}) {
    return !!Object.keys(g).length
}
const Gf = (t, e, r, i = {}, a, l) => c => {
    const f = Mf(i, t) || {},
        h = f.delay || i.delay || 0;
    let {
        elapsed: m = 0
    } = i;
    m = m - Bn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...f,
        delay: -m,
        onUpdate: w => {
            e.set(w), f.onUpdate && f.onUpdate(w)
        },
        onComplete: () => {
            c(), f.onComplete && f.onComplete()
        },
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    hP(f) || (g = {
        ...g,
        ...fP(t, g)
    }), g.duration && (g.duration = Bn(g.duration)), g.repeatDelay && (g.repeatDelay = Bn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), y && !l && e.get() !== void 0) {
        const w = jl(g.keyframes, f);
        if (w !== void 0) return Be.update(() => {
            g.onUpdate(w), g.onComplete()
        }), new OC([])
    }
    return !l && ty.supports(g) ? new ty(g) : new Qf(g)
};

function pP({
    protectedKeys: t,
    needsAnimating: e
}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1, i
}

function Uw(t, e, {
    delay: r = 0,
    transitionOverride: i,
    type: a
} = {}) {
    var l;
    let {
        transition: c = t.getDefaultTransition(),
        transitionEnd: f,
        ...h
    } = e;
    i && (c = i);
    const m = [],
        g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null),
            E = h[y];
        if (E === void 0 || g && pP(g, y)) continue;
        const S = {
            delay: r,
            ...Mf(c || {}, y)
        };
        let b = !1;
        if (window.MotionHandoffAnimation) {
            const R = dw(t);
            if (R) {
                const V = window.MotionHandoffAnimation(R, y, Be);
                V !== null && (S.startTime = V, b = !0)
            }
        }
        Md(t, y), w.start(Gf(y, w, E, t.shouldReduceMotion && uw.has(y) ? {
            type: !1
        } : S, t, b));
        const x = w.animation;
        x && m.push(x)
    }
    return f && Promise.all(m).then(() => {
        Be.update(() => {
            f && HC(t, f)
        })
    }), m
}

function Ud(t, e, r = {}) {
    var i;
    const a = Dl(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {
        transition: l = t.getDefaultTransition() || {}
    } = a || {};
    r.transitionOverride && (l = r.transitionOverride);
    const c = a ? () => Promise.all(Uw(t, a, r)) : () => Promise.resolve(),
        f = t.variantChildren && t.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: y,
                staggerDirection: w
            } = l;
            return mP(t, e, g + m, y, w, r)
        } : () => Promise.resolve(),
        {
            when: h
        } = l;
    if (h) {
        const [m, g] = h === "beforeChildren" ? [c, f] : [f, c];
        return m().then(() => g())
    } else return Promise.all([c(), f(r.delay)])
}

function mP(t, e, r = 0, i = 0, a = 1, l) {
    const c = [],
        f = (t.variantChildren.size - 1) * i,
        h = a === 1 ? (m = 0) => m * i : (m = 0) => f - m * i;
    return Array.from(t.variantChildren).sort(gP).forEach((m, g) => {
        m.notify("AnimationStart", e), c.push(Ud(m, e, {
            ...l,
            delay: r + h(g)
        }).then(() => m.notify("AnimationComplete", e)))
    }), Promise.all(c)
}

function gP(t, e) {
    return t.sortNodePosition(e)
}

function yP(t, e, r = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => Ud(t, l, r));
        i = Promise.all(a)
    } else if (typeof e == "string") i = Ud(t, e, r);
    else {
        const a = typeof e == "function" ? Dl(t, e, r.custom) : e;
        i = Promise.all(Uw(t, a, r))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const vP = bf.length;

function zw(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const r = t.parent ? zw(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial), r
    }
    const e = {};
    for (let r = 0; r < vP; r++) {
        const i = bf[r],
            a = t.props[i];
        (wo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const wP = [...Sf].reverse(),
    xP = Sf.length;

function SP(t) {
    return e => Promise.all(e.map(({
        animation: r,
        options: i
    }) => yP(t, r, i)))
}

function bP(t) {
    let e = SP(t),
        r = ny(),
        i = !0;
    const a = h => (m, g) => {
        var y;
        const w = Dl(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {
                transition: E,
                transitionEnd: S,
                ...b
            } = w;
            m = {
                ...m,
                ...b,
                ...S
            }
        }
        return m
    };

    function l(h) {
        e = h(t)
    }

    function c(h) {
        const {
            props: m
        } = t, g = zw(t.parent) || {}, y = [], w = new Set;
        let E = {},
            S = 1 / 0;
        for (let x = 0; x < xP; x++) {
            const R = wP[x],
                V = r[R],
                D = m[R] !== void 0 ? m[R] : g[R],
                M = wo(D),
                B = R === h ? V.isActive : null;
            B === !1 && (S = x);
            let K = D === g[R] && D !== m[R] && M;
            if (K && i && t.manuallyAnimateOnMount && (K = !1), V.protectedKeys = {
                    ...E
                }, !V.isActive && B === null || !D && !V.prevProp || Ll(D) || typeof D == "boolean") continue;
            const G = EP(V.prevProp, D);
            let j = G || R === h && V.isActive && !K && M || x > S && M,
                Z = !1;
            const fe = Array.isArray(D) ? D : [D];
            let _e = fe.reduce(a(R), {});
            B === !1 && (_e = {});
            const {
                prevResolvedValues: Le = {}
            } = V, Me = {
                ...Le,
                ..._e
            }, Re = de => {
                j = !0, w.has(de) && (Z = !0, w.delete(de)), V.needsAnimating[de] = !0;
                const H = t.getValue(de);
                H && (H.liveStyle = !1)
            };
            for (const de in Me) {
                const H = _e[de],
                    se = Le[de];
                if (E.hasOwnProperty(de)) continue;
                let U = !1;
                Nd(H) && Nd(se) ? U = !tw(H, se) : U = H !== se, U ? H != null ? Re(de) : w.add(de) : H !== void 0 && w.has(de) ? Re(de) : V.protectedKeys[de] = !0
            }
            V.prevProp = D, V.prevResolvedValues = _e, V.isActive && (E = {
                ...E,
                ..._e
            }), i && t.blockInitialAnimation && (j = !1), j && (!(K && G) || Z) && y.push(...fe.map(de => ({
                animation: de,
                options: {
                    type: R
                }
            })))
        }
        if (w.size) {
            const x = {};
            w.forEach(R => {
                const V = t.getBaseTarget(R),
                    D = t.getValue(R);
                D && (D.liveStyle = !0), x[R] = V ?? null
            }), y.push({
                animation: x
            })
        }
        let b = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (b = !1), i = !1, b ? e(y) : Promise.resolve()
    }

    function f(h, m) {
        var g;
        if (r[h].isActive === m) return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var E;
            return (E = w.animationState) === null || E === void 0 ? void 0 : E.setActive(h, m)
        }), r[h].isActive = m;
        const y = c(h);
        for (const w in r) r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: f,
        setAnimateFunction: l,
        getState: () => r,
        reset: () => {
            r = ny(), i = !0
        }
    }
}

function EP(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !tw(e, t) : !1
}

function qr(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function ny() {
    return {
        animate: qr(!0),
        whileInView: qr(),
        whileHover: qr(),
        whileTap: qr(),
        whileDrag: qr(),
        whileFocus: qr(),
        exit: qr()
    }
}
class Rr {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class kP extends Rr {
    constructor(e) {
        super(e), e.animationState || (e.animationState = bP(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        Ll(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: r
        } = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let CP = 0;
class TP extends Rr {
    constructor() {
        super(...arguments), this.id = CP++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then(() => r(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const PP = {
    animation: {
        Feature: kP
    },
    exit: {
        Feature: TP
    }
};

function Eo(t, e, r, i = {
    passive: !0
}) {
    return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
}

function Lo(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const _P = t => e => If(e) && t(e, Lo(e));

function ho(t, e, r, i) {
    return Eo(t, e, _P(r), i)
}
const ry = (t, e) => Math.abs(t - e);

function RP(t, e) {
    const r = ry(t.x, e.x),
        i = ry(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class $w {
    constructor(e, r, {
        transformPagePoint: i,
        contextWindow: a,
        dragSnapToOrigin: l = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = td(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    E = RP(y.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !E) return;
                const {
                    point: S
                } = y, {
                    timestamp: b
                } = dt;
                this.history.push({
                    ...S,
                    timestamp: b
                });
                const {
                    onStart: x,
                    onMove: R
                } = this.handlers;
                w || (x && x(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), R && R(this.lastMoveEvent, y)
            }, this.handlePointerMove = (y, w) => {
                this.lastMoveEvent = y, this.lastMoveEventInfo = ed(w, this.transformPagePoint), Be.update(this.updatePoint, !0)
            }, this.handlePointerUp = (y, w) => {
                this.end();
                const {
                    onEnd: E,
                    onSessionEnd: S,
                    resumeAnimation: b
                } = this.handlers;
                if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = td(y.type === "pointercancel" ? this.lastMoveEventInfo : ed(w, this.transformPagePoint), this.history);
                this.startEvent && E && E(y, x), S && S(y, x)
            }, !If(e)) return;
        this.dragSnapToOrigin = l, this.handlers = r, this.transformPagePoint = i, this.contextWindow = a || window;
        const c = Lo(e),
            f = ed(c, this.transformPagePoint),
            {
                point: h
            } = f,
            {
                timestamp: m
            } = dt;
        this.history = [{
            ...h,
            timestamp: m
        }];
        const {
            onSessionStart: g
        } = r;
        g && g(e, td(f, this.history)), this.removeListeners = Oo(ho(this.contextWindow, "pointermove", this.handlePointerMove), ho(this.contextWindow, "pointerup", this.handlePointerUp), ho(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), Cr(this.updatePoint)
    }
}

function ed(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function sy(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function td({
    point: t
}, e) {
    return {
        point: t,
        delta: sy(t, Ww(e)),
        offset: sy(t, AP(e)),
        velocity: NP(e, .1)
    }
}

function AP(t) {
    return t[0]
}

function Ww(t) {
    return t[t.length - 1]
}

function NP(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let r = t.length - 1,
        i = null;
    const a = Ww(t);
    for (; r >= 0 && (i = t[r], !(a.timestamp - i.timestamp > Bn(e)));) r--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const l = Un(a.timestamp - i.timestamp);
    if (l === 0) return {
        x: 0,
        y: 0
    };
    const c = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}
const qw = 1e-4,
    OP = 1 - qw,
    LP = 1 + qw,
    Hw = .01,
    MP = 0 - Hw,
    DP = 0 + Hw;

function zt(t) {
    return t.max - t.min
}

function jP(t, e, r) {
    return Math.abs(t - e) <= r
}

function iy(t, e, r, i = .5) {
    t.origin = i, t.originPoint = We(e.min, e.max, t.origin), t.scale = zt(r) / zt(e), t.translate = We(r.min, r.max, t.origin) - t.originPoint, (t.scale >= OP && t.scale <= LP || isNaN(t.scale)) && (t.scale = 1), (t.translate >= MP && t.translate <= DP || isNaN(t.translate)) && (t.translate = 0)
}

function po(t, e, r, i) {
    iy(t.x, e.x, r.x, i ? i.originX : void 0), iy(t.y, e.y, r.y, i ? i.originY : void 0)
}

function oy(t, e, r) {
    t.min = r.min + e.min, t.max = t.min + zt(e)
}

function IP(t, e, r) {
    oy(t.x, e.x, r.x), oy(t.y, e.y, r.y)
}

function ay(t, e, r) {
    t.min = e.min - r.min, t.max = t.min + zt(e)
}

function mo(t, e, r) {
    ay(t.x, e.x, r.x), ay(t.y, e.y, r.y)
}

function FP(t, {
    min: e,
    max: r
}, i) {
    return e !== void 0 && t < e ? t = i ? We(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? We(r, t, i.max) : Math.min(t, r)), t
}

function ly(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}

function VP(t, {
    top: e,
    left: r,
    bottom: i,
    right: a
}) {
    return {
        x: ly(t.x, r, a),
        y: ly(t.y, e, i)
    }
}

function uy(t, e) {
    let r = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
        min: r,
        max: i
    }
}

function BP(t, e) {
    return {
        x: uy(t.x, e.x),
        y: uy(t.y, e.y)
    }
}

function UP(t, e) {
    let r = .5;
    const i = zt(t),
        a = zt(e);
    return a > i ? r = ri(e.min, e.max - i, t.min) : i > a && (r = ri(t.min, t.max - a, e.min)), zn(0, 1, r)
}

function zP(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r
}
const zd = .35;

function $P(t = zd) {
    return t === !1 ? t = 0 : t === !0 && (t = zd), {
        x: cy(t, "left", "right"),
        y: cy(t, "top", "bottom")
    }
}

function cy(t, e, r) {
    return {
        min: dy(t, e),
        max: dy(t, r)
    }
}

function dy(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const fy = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Us = () => ({
        x: fy(),
        y: fy()
    }),
    hy = () => ({
        min: 0,
        max: 0
    }),
    Ye = () => ({
        x: hy(),
        y: hy()
    });

function Xt(t) {
    return [t("x"), t("y")]
}

function Kw({
    top: t,
    left: e,
    right: r,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}

function WP({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function qP(t, e) {
    if (!e) return t;
    const r = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}

function nd(t) {
    return t === void 0 || t === 1
}

function $d({
    scale: t,
    scaleX: e,
    scaleY: r
}) {
    return !nd(t) || !nd(e) || !nd(r)
}

function Hr(t) {
    return $d(t) || Qw(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Qw(t) {
    return py(t.x) || py(t.y)
}

function py(t) {
    return t && t !== "0%"
}

function Tl(t, e, r) {
    const i = t - r,
        a = e * i;
    return r + a
}

function my(t, e, r, i, a) {
    return a !== void 0 && (t = Tl(t, a, i)), Tl(t, r, i) + e
}

function Wd(t, e = 0, r = 1, i, a) {
    t.min = my(t.min, e, r, i, a), t.max = my(t.max, e, r, i, a)
}

function Gw(t, {
    x: e,
    y: r
}) {
    Wd(t.x, e.translate, e.scale, e.originPoint), Wd(t.y, r.translate, r.scale, r.originPoint)
}
const gy = .999999999999,
    yy = 1.0000000000001;

function HP(t, e, r, i = !1) {
    const a = r.length;
    if (!a) return;
    e.x = e.y = 1;
    let l, c;
    for (let f = 0; f < a; f++) {
        l = r[f], c = l.projectionDelta;
        const {
            visualElement: h
        } = l.options;
        h && h.props.style && h.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && $s(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, Gw(t, c)), i && Hr(l.latestValues) && $s(t, l.latestValues))
    }
    e.x < yy && e.x > gy && (e.x = 1), e.y < yy && e.y > gy && (e.y = 1)
}

function zs(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function vy(t, e, r, i, a = .5) {
    const l = We(t.min, t.max, a);
    Wd(t, e, r, l, i)
}

function $s(t, e) {
    vy(t.x, e.x, e.scaleX, e.scale, e.originX), vy(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Yw(t, e) {
    return Kw(qP(t.getBoundingClientRect(), e))
}

function KP(t, e, r) {
    const i = Yw(t, r),
        {
            scroll: a
        } = e;
    return a && (zs(i.x, a.offset.x), zs(i.y, a.offset.y)), i
}
const Xw = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    QP = new WeakMap;
class GP {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ye(), this.visualElement = e
    }
    start(e, {
        snapToCursor: r = !1
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const a = g => {
                const {
                    dragSnapToOrigin: y
                } = this.getProps();
                y ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Lo(g).point)
            },
            l = (g, y) => {
                const {
                    drag: w,
                    dragPropagation: E,
                    onDragStart: S
                } = this.getProps();
                if (w && !E && (this.openDragLock && this.openDragLock(), this.openDragLock = UC(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xt(x => {
                    let R = this.getAxisMotionValue(x).get() || 0;
                    if (bn.test(R)) {
                        const {
                            projection: V
                        } = this.visualElement;
                        if (V && V.layout) {
                            const D = V.layout.layoutBox[x];
                            D && (R = zt(D) * (parseFloat(R) / 100))
                        }
                    }
                    this.originPoint[x] = R
                }), S && Be.postRender(() => S(g, y)), Md(this.visualElement, "transform");
                const {
                    animationState: b
                } = this.visualElement;
                b && b.setActive("whileDrag", !0)
            },
            c = (g, y) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: E,
                    onDirectionLock: S,
                    onDrag: b
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: x
                } = y;
                if (E && this.currentDirection === null) {
                    this.currentDirection = YP(x), this.currentDirection !== null && S && S(this.currentDirection);
                    return
                }
                this.updateAxis("x", y.point, x), this.updateAxis("y", y.point, x), this.visualElement.render(), b && b(g, y)
            },
            f = (g, y) => this.stop(g, y),
            h = () => Xt(g => {
                var y;
                return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
            }),
            {
                dragSnapToOrigin: m
            } = this.getProps();
        this.panSession = new $w(e, {
            onSessionStart: a,
            onStart: l,
            onMove: c,
            onSessionEnd: f,
            resumeAnimation: h
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Xw(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: a
        } = r;
        this.startAnimation(a);
        const {
            onDragEnd: l
        } = this.getProps();
        l && Be.postRender(() => l(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: r
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: i
        } = this.getProps();
        !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {
            drag: a
        } = this.getProps();
        if (!i || !tl(e, a, this.currentDirection)) return;
        const l = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = FP(c, this.constraints[e], this.elastic[e])), l.set(c)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: r,
            dragElastic: i
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, l = this.constraints;
        r && Vs(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = VP(a.layoutBox, r) : this.constraints = !1, this.elastic = $P(i), l !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Xt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = zP(a.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: r
        } = this.getProps();
        if (!e || !Vs(e)) return !1;
        const i = e.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const l = KP(i, a.root, this.visualElement.getTransformPagePoint());
        let c = BP(a.layout.layoutBox, l);
        if (r) {
            const f = r(WP(c));
            this.hasMutatedConstraints = !!f, f && (c = Kw(f))
        }
        return c
    }
    startAnimation(e) {
        const {
            drag: r,
            dragMomentum: i,
            dragElastic: a,
            dragTransition: l,
            dragSnapToOrigin: c,
            onDragTransitionEnd: f
        } = this.getProps(), h = this.constraints || {}, m = Xt(g => {
            if (!tl(g, r, this.currentDirection)) return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6,
                E = a ? 40 : 1e7,
                S = {
                    type: "inertia",
                    velocity: i ? e[g] : 0,
                    bounceStiffness: w,
                    bounceDamping: E,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...l,
                    ...y
                };
            return this.startAxisValueAnimation(g, S)
        });
        return Promise.all(m).then(f)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return Md(this.visualElement, e), i.start(Gf(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Xt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Xt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        })
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`,
            i = this.visualElement.getProps(),
            a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Xt(r => {
            const {
                drag: i
            } = this.getProps();
            if (!tl(r, i, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, l = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {
                    min: c,
                    max: f
                } = a.layout.layoutBox[r];
                l.set(e[r] - We(c, f, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: r
        } = this.getProps(), {
            projection: i
        } = this.visualElement;
        if (!Vs(r) || !i || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Xt(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const h = f.get();
                a[c] = UP({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        });
        const {
            transformTemplate: l
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), Xt(c => {
            if (!tl(c, e, null)) return;
            const f = this.getAxisMotionValue(c),
                {
                    min: h,
                    max: m
                } = this.constraints[c];
            f.set(We(h, m, a[c]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        QP.set(this.visualElement, this);
        const e = this.visualElement.current,
            r = ho(e, "pointerdown", h => {
                const {
                    drag: m,
                    dragListener: g = !0
                } = this.getProps();
                m && g && this.start(h)
            }),
            i = () => {
                const {
                    dragConstraints: h
                } = this.getProps();
                Vs(h) && h.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            l = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Be.read(i);
        const c = Eo(window, "resize", () => this.scalePositionWithinConstraints()),
            f = a.addEventListener("didUpdate", (({
                delta: h,
                hasLayoutChanged: m
            }) => {
                this.isDragging && m && (Xt(g => {
                    const y = this.getAxisMotionValue(g);
                    y && (this.originPoint[g] += h[g].translate, y.set(y.get() + h[g].translate))
                }), this.visualElement.render())
            }));
        return () => {
            c(), r(), l(), f && f()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: r = !1,
                dragDirectionLock: i = !1,
                dragPropagation: a = !1,
                dragConstraints: l = !1,
                dragElastic: c = zd,
                dragMomentum: f = !0
            } = e;
        return {
            ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: c,
            dragMomentum: f
        }
    }
}

function tl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}

function YP(t, e = 10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
}
class XP extends Rr {
    constructor(e) {
        super(e), this.removeGroupControls = Ut, this.removeListeners = Ut, this.controls = new GP(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ut
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const wy = t => (e, r) => {
    t && Be.postRender(() => t(e, r))
};
class JP extends Rr {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ut
    }
    onPointerDown(e) {
        this.session = new $w(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Xw(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: r,
            onPan: i,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: wy(e),
            onStart: wy(r),
            onMove: i,
            onEnd: (l, c) => {
                delete this.session, a && Be.postRender(() => a(l, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ho(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const ul = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function xy(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Ji = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (ce.test(t)) t = parseFloat(t);
                else return t;
            const r = xy(t, e.target.x),
                i = xy(t, e.target.y);
            return `${r}% ${i}%`
        }
    },
    ZP = {
        correct: (t, {
            treeScale: e,
            projectionDelta: r
        }) => {
            const i = t,
                a = Tr.parse(t);
            if (a.length > 5) return i;
            const l = Tr.createTransformer(t),
                c = typeof a[0] != "number" ? 1 : 0,
                f = r.x.scale * e.x,
                h = r.y.scale * e.y;
            a[0 + c] /= f, a[1 + c] /= h;
            const m = We(f, h, .5);
            return typeof a[2 + c] == "number" && (a[2 + c] /= m), typeof a[3 + c] == "number" && (a[3 + c] /= m), l(a)
        }
    };
class e_ extends N.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i,
            layoutId: a
        } = this.props, {
            projection: l
        } = e;
        xC(t_), l && (r.group && r.group.add(l), i && i.register && a && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })), ul.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: r,
            visualElement: i,
            drag: a,
            isPresent: l
        } = this.props, c = i.projection;
        return c && (c.isPresent = l, a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(), e.isPresent !== l && (l ? c.promote() : c.relegate() || Be.postRender(() => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), kf.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i
        } = this.props, {
            projection: a
        } = e;
        a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function Jw(t) {
    const [e, r] = M0(), i = N.useContext(mf);
    return C.jsx(e_, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: N.useContext(z0),
        isPresent: e,
        safeToRemove: r
    })
}
const t_ = {
    borderRadius: {
        ...Ji,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Ji,
    borderTopRightRadius: Ji,
    borderBottomLeftRadius: Ji,
    borderBottomRightRadius: Ji,
    boxShadow: ZP
};

function n_(t, e, r) {
    const i = bt(t) ? t : So(t);
    return i.start(Gf("", i, e, r)), i.animation
}

function r_(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const s_ = (t, e) => t.depth - e.depth;
class i_ {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        Ff(this.children, e), this.isDirty = !0
    }
    remove(e) {
        Vf(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(s_), this.isDirty = !1, this.children.forEach(e)
    }
}

function o_(t, e) {
    const r = En.now(),
        i = ({
            timestamp: a
        }) => {
            const l = a - r;
            l >= e && (Cr(i), t(l - e))
        };
    return Be.read(i, !0), () => Cr(i)
}
const Zw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    a_ = Zw.length,
    Sy = t => typeof t == "string" ? parseFloat(t) : t,
    by = t => typeof t == "number" || ce.test(t);

function l_(t, e, r, i, a, l) {
    a ? (t.opacity = We(0, r.opacity !== void 0 ? r.opacity : 1, u_(i)), t.opacityExit = We(e.opacity !== void 0 ? e.opacity : 1, 0, c_(i))) : l && (t.opacity = We(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < a_; c++) {
        const f = `border${Zw[c]}Radius`;
        let h = Ey(e, f),
            m = Ey(r, f);
        if (h === void 0 && m === void 0) continue;
        h || (h = 0), m || (m = 0), h === 0 || m === 0 || by(h) === by(m) ? (t[f] = Math.max(We(Sy(h), Sy(m), i), 0), (bn.test(m) || bn.test(h)) && (t[f] += "%")) : t[f] = m
    }(e.rotate || r.rotate) && (t.rotate = We(e.rotate || 0, r.rotate || 0, i))
}

function Ey(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const u_ = ex(0, .5, vw),
    c_ = ex(.5, .95, Ut);

function ex(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(ri(t, e, i))
}

function ky(t, e) {
    t.min = e.min, t.max = e.max
}

function Gt(t, e) {
    ky(t.x, e.x), ky(t.y, e.y)
}

function Cy(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Ty(t, e, r, i, a) {
    return t -= e, t = Tl(t, 1 / r, i), a !== void 0 && (t = Tl(t, 1 / a, i)), t
}

function d_(t, e = 0, r = 1, i = .5, a, l = t, c = t) {
    if (bn.test(e) && (e = parseFloat(e), e = We(c.min, c.max, e / 100) - c.min), typeof e != "number") return;
    let f = We(l.min, l.max, i);
    t === l && (f -= e), t.min = Ty(t.min, e, r, f, a), t.max = Ty(t.max, e, r, f, a)
}

function Py(t, e, [r, i, a], l, c) {
    d_(t, e[r], e[i], e[a], e.scale, l, c)
}
const f_ = ["x", "scaleX", "originX"],
    h_ = ["y", "scaleY", "originY"];

function _y(t, e, r, i) {
    Py(t.x, e, f_, r ? r.x : void 0, i ? i.x : void 0), Py(t.y, e, h_, r ? r.y : void 0, i ? i.y : void 0)
}

function Ry(t) {
    return t.translate === 0 && t.scale === 1
}

function tx(t) {
    return Ry(t.x) && Ry(t.y)
}

function Ay(t, e) {
    return t.min === e.min && t.max === e.max
}

function p_(t, e) {
    return Ay(t.x, e.x) && Ay(t.y, e.y)
}

function Ny(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function nx(t, e) {
    return Ny(t.x, e.x) && Ny(t.y, e.y)
}

function Oy(t) {
    return zt(t.x) / zt(t.y)
}

function Ly(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class m_ {
    constructor() {
        this.members = []
    }
    add(e) {
        Ff(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (Vf(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0) return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const l = this.members[a];
            if (l.isPresent !== !1) {
                i = l;
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, r && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: a
            } = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: r,
                resumingFrom: i
            } = e;
            r.onExitComplete && r.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function g_(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x,
        l = t.y.translate / e.y,
        c = (r == null ? void 0 : r.z) || 0;
    if ((a || l || c) && (i = `translate3d(${a}px, ${l}px, ${c}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
        const {
            transformPerspective: m,
            rotate: g,
            rotateX: y,
            rotateY: w,
            skewX: E,
            skewY: S
        } = r;
        m && (i = `perspective(${m}px) ${i}`), g && (i += `rotate(${g}deg) `), y && (i += `rotateX(${y}deg) `), w && (i += `rotateY(${w}deg) `), E && (i += `skewX(${E}deg) `), S && (i += `skewY(${S}deg) `)
    }
    const f = t.x.scale * e.x,
        h = t.y.scale * e.y;
    return (f !== 1 || h !== 1) && (i += `scale(${f}, ${h})`), i || "none"
}
const Kr = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    io = typeof window < "u" && window.MotionDebug !== void 0,
    rd = ["", "X", "Y", "Z"],
    y_ = {
        visibility: "hidden"
    },
    My = 1e3;
let v_ = 0;

function sd(t, e, r, i) {
    const {
        latestValues: a
    } = e;
    a[t] && (r[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function rx(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const r = dw(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {
            layout: a,
            layoutId: l
        } = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Be, !(a || l))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && rx(i)
}

function sx({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: r,
    checkIsScrollRoot: i,
    resetTransform: a
}) {
    return class {
        constructor(c = {}, f = e == null ? void 0 : e()) {
            this.id = v_++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, io && (Kr.totalNodes = Kr.resolvedTargetDeltas = Kr.recalculatedProjection = 0), this.nodes.forEach(S_), this.nodes.forEach(T_), this.nodes.forEach(P_), this.nodes.forEach(b_), io && window.MotionDebug.record(Kr)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = f ? f.root || f : this, this.path = f ? [...f.path, f] : [], this.parent = f, this.depth = f ? f.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new i_)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new Bf), this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, f = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = r_(c), this.instance = c;
            const {
                layoutId: h,
                layout: m,
                visualElement: g
            } = this.options;
            if (g && !g.current && g.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), f && (m || h) && (this.isLayoutDirty = !0), t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0, y && y(), y = o_(w, 250), ul.hasAnimatedSinceResize && (ul.hasAnimatedSinceResize = !1, this.nodes.forEach(jy))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: E,
                layout: S
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || g.getDefaultTransition() || O_,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: R
                    } = g.getProps(),
                    V = !this.targetLayout || !nx(this.targetLayout, S) || E,
                    D = !w && E;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || D || w && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, D);
                    const M = {
                        ...Mf(b, "layout"),
                        onPlay: x,
                        onComplete: R
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (M.delay = 0, M.type = !1), this.startAnimation(M)
                } else w || jy(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = S
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Cr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(__), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: c
            } = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && rx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
            }
            const {
                layoutId: f,
                layout: h
            } = this.options;
            if (f === void 0 && !h) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Dy);
                return
            }
            this.isUpdating || this.nodes.forEach(k_), this.isUpdating = !1, this.nodes.forEach(C_), this.nodes.forEach(w_), this.nodes.forEach(x_), this.clearAllSnapshots();
            const f = En.now();
            dt.delta = zn(0, 1e3 / 60, f - dt.timestamp), dt.timestamp = f, dt.isProcessing = !0, Qc.update.process(dt), Qc.preRender.process(dt), Qc.render.process(dt), dt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, kf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(E_), this.sharedNodes.forEach(R_)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Be.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Be.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Ye(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: f
            } = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c = "measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1), f) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                f = this.projectionDelta && !tx(this.projectionDelta),
                h = this.getTransformTemplate(),
                m = h ? h(this.latestValues, "") : void 0,
                g = m !== this.prevTransformTemplateValue;
            c && (f || Hr(this.latestValues) || g) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(c = !0) {
            const f = this.measurePageBox();
            let h = this.removeElementScroll(f);
            return c && (h = this.removeTransform(h)), L_(h), {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {
                visualElement: f
            } = this.options;
            if (!f) return Ye();
            const h = f.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(M_))) {
                const {
                    scroll: g
                } = this.root;
                g && (zs(h.x, g.offset.x), zs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var f;
            const h = Ye();
            if (Gt(h, c), !((f = this.scroll) === null || f === void 0) && f.wasRoot) return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m],
                    {
                        scroll: y,
                        options: w
                    } = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Gt(h, c), zs(h.x, y.offset.x), zs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, f = !1) {
            const h = Ye();
            Gt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !f && g.options.layoutScroll && g.scroll && g !== g.root && $s(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), Hr(g.latestValues) && $s(h, g.latestValues)
            }
            return Hr(this.latestValues) && $s(h, this.latestValues), h
        }
        removeTransform(c) {
            const f = Ye();
            Gt(f, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !Hr(m.latestValues)) continue;
                $d(m.latestValues) && m.updateSnapshot();
                const g = Ye(),
                    y = m.measurePageBox();
                Gt(g, y), _y(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return Hr(this.latestValues) && _y(f, this.latestValues), f
        }
        setTargetDelta(c) {
            this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== dt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c = !1) {
            var f;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = dt.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const E = this.getClosestProjectingParent();
                    E && E.layout && this.animationProgress !== 1 ? (this.relativeParent = E, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), mo(this.relativeTargetOrigin, this.layout.layoutBox, E.layout.layoutBox), Gt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ye(), this.targetWithTransforms = Ye()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), IP(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Gt(this.target, this.layout.layoutBox), Gw(this.target, this.targetDelta)) : Gt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const E = this.getClosestProjectingParent();
                        E && !!E.resumingFrom == !!this.resumingFrom && !E.options.layoutScroll && E.target && this.animationProgress !== 1 ? (this.relativeParent = E, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), mo(this.relativeTargetOrigin, this.target, E.target), Gt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    io && Kr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || $d(this.parent.latestValues) || Qw(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const f = this.getLead(),
                h = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === dt.timestamp && (m = !1), m) return;
            const {
                layout: g,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || y)) return;
            Gt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                E = this.treeScale.y;
            HP(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Ye());
            const {
                target: S
            } = f;
            if (!S) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Cy(this.prevProjectionDelta.x, this.projectionDelta.x), Cy(this.prevProjectionDelta.y, this.projectionDelta.y)), po(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== E || !Ly(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ly(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S)), io && Kr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c = !0) {
            var f;
            if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(), c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Us(), this.projectionDelta = Us(), this.projectionDeltaWithTransform = Us()
        }
        setAnimationOrigin(c, f = !1) {
            const h = this.snapshot,
                m = h ? h.latestValues : {},
                g = {
                    ...this.latestValues
                },
                y = Us();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !f;
            const w = Ye(),
                E = h ? h.source : void 0,
                S = this.layout ? this.layout.source : void 0,
                b = E !== S,
                x = this.getStack(),
                R = !x || x.members.length <= 1,
                V = !!(b && !R && this.options.crossfade === !0 && !this.path.some(N_));
            this.animationProgress = 0;
            let D;
            this.mixTargetDelta = M => {
                const B = M / 1e3;
                Iy(y.x, c.x, B), Iy(y.y, c.y, B), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (mo(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), A_(this.relativeTarget, this.relativeTargetOrigin, w, B), D && p_(this.relativeTarget, D) && (this.isProjectionDirty = !1), D || (D = Ye()), Gt(D, this.relativeTarget)), b && (this.animationValues = g, l_(g, m, this.latestValues, B, V, R)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = B
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Cr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Be.update(() => {
                ul.hasAnimatedSinceResize = !0, this.currentAnimation = n_(0, My, {
                    ...c,
                    onUpdate: f => {
                        this.mixTargetDelta(f), c.onUpdate && c.onUpdate(f)
                    },
                    onComplete: () => {
                        c.onComplete && c.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(My), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {
                targetWithTransforms: f,
                target: h,
                layout: m,
                latestValues: g
            } = c;
            if (!(!f || !h || !m)) {
                if (this !== c && this.layout && m && ix(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Ye();
                    const y = zt(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min, h.x.max = h.x.min + y;
                    const w = zt(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min, h.y.max = h.y.min + w
                }
                Gt(f, h), $s(f, g), po(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new m_), this.sharedNodes.get(c).add(f);
            const m = f.options.initialPromotionConfig;
            f.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {
                layoutId: f
            } = this.options;
            return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {
                layoutId: f
            } = this.options;
            return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: c
            } = this.options;
            if (c) return this.root.sharedNodes.get(c)
        }
        promote({
            needsReset: c,
            transition: f,
            preserveFollowOpacity: h
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, h), c && (this.projectionDelta = void 0, this.needsReset = !0), f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: c
            } = this.options;
            if (!c) return;
            let f = !1;
            const {
                latestValues: h
            } = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (f = !0), !f) return;
            const m = {};
            h.z && sd("z", c, m, this.animationValues);
            for (let g = 0; g < rd.length; g++) sd(`rotate${rd[g]}`, c, m, this.animationValues), sd(`skew${rd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m) c.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var f, h;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return y_;
            const m = {
                    visibility: ""
                },
                g = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, m.opacity = "", m.pointerEvents = al(c == null ? void 0 : c.pointerEvents) || "", m.transform = g ? g(this.latestValues, "") : "none", m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const b = {};
                return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, b.pointerEvents = al(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !Hr(this.latestValues) && (b.transform = g ? g({}, "") : "none", this.hasProjected = !1), b
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), m.transform = g_(this.projectionDeltaWithTransform, this.treeScale, w), g && (m.transform = g(w, m.transform));
            const {
                x: E,
                y: S
            } = this.projectionDelta;
            m.transformOrigin = `${E.origin*100}% ${S.origin*100}% 0`, y.animationValues ? m.opacity = y === this ? (h = (f = w.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const b in Sl) {
                if (w[b] === void 0) continue;
                const {
                    correct: x,
                    applyTo: R
                } = Sl[b], V = m.transform === "none" ? w[b] : x(w[b], y);
                if (R) {
                    const D = R.length;
                    for (let M = 0; M < D; M++) m[R[M]] = V
                } else m[b] = V
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? al(c == null ? void 0 : c.pointerEvents) || "" : "none"), m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }), this.root.nodes.forEach(Dy), this.root.sharedNodes.clear()
        }
    }
}

function w_(t) {
    t.updateLayout()
}

function x_(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: a
        } = t.layout, {
            animationType: l
        } = t.options, c = r.source !== t.layout.source;
        l === "size" ? Xt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y],
                E = zt(w);
            w.min = i[y].min, w.max = w.min + E
        }) : ix(l, r.layoutBox, i) && Xt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y],
                E = zt(i[y]);
            w.max = w.min + E, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[y].max = t.relativeTarget[y].min + E)
        });
        const f = Us();
        po(f, i, r.layoutBox);
        const h = Us();
        c ? po(h, t.applyTransform(a, !0), r.measuredBox) : po(h, i, r.layoutBox);
        const m = !tx(f);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: w,
                    layout: E
                } = y;
                if (w && E) {
                    const S = Ye();
                    mo(S, r.layoutBox, w.layoutBox);
                    const b = Ye();
                    mo(b, i, E.layoutBox), nx(S, b) || (g = !0), y.options.layoutRoot && (t.relativeTarget = b, t.relativeTargetOrigin = S, t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: i
        } = t.options;
        i && i()
    }
    t.options.transition = void 0
}

function S_(t) {
    io && Kr.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function b_(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function E_(t) {
    t.clearSnapshot()
}

function Dy(t) {
    t.clearMeasurements()
}

function k_(t) {
    t.isLayoutDirty = !1
}

function C_(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function jy(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function T_(t) {
    t.resolveTargetDelta()
}

function P_(t) {
    t.calcProjection()
}

function __(t) {
    t.resetSkewAndRotation()
}

function R_(t) {
    t.removeLeadSnapshot()
}

function Iy(t, e, r) {
    t.translate = We(e.translate, 0, r), t.scale = We(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
}

function Fy(t, e, r, i) {
    t.min = We(e.min, r.min, i), t.max = We(e.max, r.max, i)
}

function A_(t, e, r, i) {
    Fy(t.x, e.x, r.x, i), Fy(t.y, e.y, r.y, i)
}

function N_(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const O_ = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Vy = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    By = Vy("applewebkit/") && !Vy("chrome/") ? Math.round : Ut;

function Uy(t) {
    t.min = By(t.min), t.max = By(t.max)
}

function L_(t) {
    Uy(t.x), Uy(t.y)
}

function ix(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !jP(Oy(e), Oy(r), .2)
}

function M_(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const D_ = sx({
        attachResizeListener: (t, e) => Eo(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    id = {
        current: void 0
    },
    ox = sx({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!id.current) {
                const t = new D_({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), id.current = t
            }
            return id.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    j_ = {
        pan: {
            Feature: JP
        },
        drag: {
            Feature: XP,
            ProjectionNode: ox,
            MeasureLayout: Jw
        }
    };

function zy(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r,
        l = i[a];
    l && Be.postRender(() => l(e, Lo(e)))
}
class I_ extends Rr {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = jC(e, r => (zy(this.node, r, "Start"), i => zy(this.node, i, "End"))))
    }
    unmount() {}
}
class F_ extends Rr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Oo(Eo(this.node.current, "focus", () => this.onFocus()), Eo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function $y(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r),
        l = i[a];
    l && Be.postRender(() => l(e, Lo(e)))
}
class V_ extends Rr {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = BC(e, r => ($y(this.node, r, "Start"), (i, {
            success: a
        }) => $y(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const qd = new WeakMap,
    od = new WeakMap,
    B_ = t => {
        const e = qd.get(t.target);
        e && e(t)
    },
    U_ = t => {
        t.forEach(B_)
    };

function z_({
    root: t,
    ...e
}) {
    const r = t || document;
    od.has(r) || od.set(r, {});
    const i = od.get(r),
        a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(U_, {
        root: t,
        ...e
    })), i[a]
}

function $_(t, e, r) {
    const i = z_(e);
    return qd.set(t, r), i.observe(t), () => {
        qd.delete(t), i.unobserve(t)
    }
}
const W_ = {
    some: 0,
    all: 1
};
class q_ extends Rr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: r,
            margin: i,
            amount: a = "some",
            once: l
        } = e, c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : W_[a]
        }, f = h => {
            const {
                isIntersecting: m
            } = h;
            if (this.isInView === m || (this.isInView = m, l && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: g,
                onViewportLeave: y
            } = this.node.getProps(), w = m ? g : y;
            w && w(h)
        };
        return $_(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: r
        } = this.node;
        ["amount", "margin", "root"].some(H_(e, r)) && this.startObserver()
    }
    unmount() {}
}

function H_({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return r => t[r] !== e[r]
}
const K_ = {
        inView: {
            Feature: q_
        },
        tap: {
            Feature: V_
        },
        focus: {
            Feature: F_
        },
        hover: {
            Feature: I_
        }
    },
    Q_ = {
        layout: {
            ProjectionNode: ox,
            MeasureLayout: Jw
        }
    },
    Hd = {
        current: null
    },
    ax = {
        current: !1
    };

function G_() {
    if (ax.current = !0, !!vf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Hd.current = t.matches;
            t.addListener(e), e()
        } else Hd.current = !1
}
const Y_ = [...Ow, xt, Tr],
    X_ = t => Y_.find(Nw(t)),
    Wy = new WeakMap;

function J_(t, e, r) {
    for (const i in e) {
        const a = e[i],
            l = r[i];
        if (bt(a)) t.addValue(i, a);
        else if (bt(l)) t.addValue(i, So(a, {
            owner: t
        }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, So(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r) e[i] === void 0 && t.removeValue(i);
    return e
}
const qy = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Z_ {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({
        parent: e,
        props: r,
        presenceContext: i,
        reducedMotionConfig: a,
        blockInitialAnimation: l,
        visualState: c
    }, f = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Hf, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const E = En.now();
            this.renderScheduledAt < E && (this.renderScheduledAt = E, Be.render(this.render, !1, !0))
        };
        const {
            latestValues: h,
            renderState: m,
            onUpdate: g
        } = c;
        this.onUpdate = g, this.latestValues = h, this.baseTarget = {
            ...h
        }, this.initialValues = r.initial ? {
            ...h
        } : {}, this.renderState = m, this.parent = e, this.props = r, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.blockInitialAnimation = !!l, this.isControllingVariants = Ml(r), this.isVariantNode = B0(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: y,
            ...w
        } = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const E in w) {
            const S = w[E];
            h[E] !== void 0 && bt(S) && S.set(h[E], !1)
        }
    }
    mount(e) {
        this.current = e, Wy.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), ax.current || G_(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Hd.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Wy.delete(this.current), this.projection && this.projection.unmount(), Cr(this.notifyUpdate), Cr(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = ds.has(e),
            a = r.on("change", f => {
                this.latestValues[e] = f, this.props.onUpdate && Be.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
            }),
            l = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
            a(), l(), c && c(), r.owner && r.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in si) {
            const r = si[e];
            if (!r) continue;
            const {
                isEnabled: i,
                Feature: a
            } = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(), l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
        for (let i = 0; i < qy.length; i++) {
            const a = qy[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const l = "on" + a,
                c = e[l];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = J_(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r) return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = So(r === null ? void 0 : r, {
            owner: this
        }), this.addValue(e, i)), i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (Rw(a) || xw(a)) ? a = parseFloat(a) : !X_(a) && Tr.test(r) && (a = Tw(e, r)), this.setBaseTarget(e, bt(a) ? a.get() : a)), bt(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {
            initial: i
        } = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = Tf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0) return a;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !bt(l) ? l : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new Bf), this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class lx extends Z_ {
    constructor() {
        super(...arguments), this.KeyframeResolver = Lw
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {
        vars: r,
        style: i
    }) {
        delete r[e], delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        bt(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }))
    }
}

function eR(t) {
    return window.getComputedStyle(t)
}
class tR extends lx {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = G0
    }
    readValueFromInstance(e, r) {
        if (ds.has(r)) {
            const i = qf(r);
            return i && i.default || 0
        } else {
            const i = eR(e),
                a = (H0(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: r
    }) {
        return Yw(e, r)
    }
    build(e, r, i) {
        Rf(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Lf(e, r, i)
    }
}
class nR extends lx {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ye
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (ds.has(r)) {
            const i = qf(r);
            return i && i.default || 0
        }
        return r = Y0.has(r) ? r : Ef(r), e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Z0(e, r, i)
    }
    build(e, r, i) {
        Af(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        X0(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = Of(e.tagName), super.mount(e)
    }
}
const rR = (t, e) => Cf(t) ? new nR(e) : new tR(e, {
        allowProjection: t !== N.Fragment
    }),
    sR = RC({
        ...PP,
        ...K_,
        ...j_,
        ...Q_
    }, rR),
    Ze = Wk(sR),
    Hy = [{
        label: "Story",
        id: "story"
    }, {
        label: "Services",
        id: "services"
    }, {
        label: "Portfolio",
        id: "portfolio"
    }, {
        label: "Contact",
        id: "contact"
    }];

function iR() {
    const [t, e] = N.useState(!1), [r, i] = N.useState(!1);
    N.useEffect(() => {
        const l = () => e(window.scrollY > 50);
        return window.addEventListener("scroll", l), () => window.removeEventListener("scroll", l)
    }, []);
    const a = l => {
        var c;
        (c = document.getElementById(l)) == null || c.scrollIntoView({
            behavior: "smooth"
        }), i(!1)
    };
    return C.jsxs(C.Fragment, {
        children: [C.jsx(Ze.nav, {
            initial: {
                y: -100
            },
            animate: {
                y: 0
            },
            transition: {
                duration: .6
            },
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${t?"bg-white shadow-lg py-4":"bg-white/95 py-6"}`,
            children: C.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 flex items-center justify-between",
                children: [C.jsx("button", {
                    onClick: () => a("story"),
                    className: "flex items-center",
                    children: C.jsx("img", {
                        src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ab678eddedf6450ddeef5a/26d6b27d9_logo.png",
                        alt: "NimbleCat",
                        className: "h-10"
                    })
                }), C.jsx("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: Hy.map(l => C.jsx("button", {
                        onClick: () => a(l.id),
                        className: "text-sm text-gray-700 hover:text-[#c8a951] tracking-wide uppercase transition-colors duration-300",
                        children: l.label
                    }, l.id))
                }), C.jsx("button", {
                    onClick: () => i(!r),
                    className: "md:hidden text-gray-800",
                    children: r ? C.jsx(n0, {
                        className: "w-6 h-6"
                    }) : C.jsx(Wb, {
                        className: "w-6 h-6"
                    })
                })]
            })
        }), C.jsx(wf, {
            children: r && C.jsx(Ze.div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                className: "fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg flex items-center justify-center",
                children: C.jsx("div", {
                    className: "flex flex-col items-center gap-8",
                    children: Hy.map(l => C.jsx("button", {
                        onClick: () => a(l.id),
                        className: "text-2xl text-white hover:text-[#c8a951] tracking-widest uppercase transition-colors",
                        children: l.label
                    }, l.id))
                })
            })
        })]
    })
}

function oR() {
    const t = e => {
        var r;
        (r = document.getElementById(e)) == null || r.scrollIntoView({
            behavior: "smooth"
        })
    };
    return C.jsxs("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]",
        children: [C.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center",
            style: {
                backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ab678eddedf6450ddeef5a/22b77fa6d_bg-hero.png')"
            }
        }), C.jsx("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: C.jsx("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/aioJzP3fH4U?si=Bys9v-0ZKufsjS44&controls=0&autoplay=1&mute=1&loop=1&playlist=aioJzP3fH4U&playsinline=1",
                title: "YouTube video player",
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                referrerPolicy: "strict-origin-when-cross-origin",
                allowFullScreen: !0,
                className: "absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                style: {
                    border: "none"
                }
            })
        }), C.jsx("div", {
            className: "absolute inset-0 bg-black/50"
        }), C.jsxs("div", {
            className: "relative z-10 text-center px-6 max-w-5xl mx-auto",
            children: [C.jsx(Ze.p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                className: "text-[#c8a951] tracking-[0.35em] uppercase text-sm md:text-base font-medium mb-6",
                children: "Web Development — Design — App Development"
            }), C.jsxs(Ze.h1, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .2
                },
                className: "text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight",
                children: ["Make Your Business", " ", C.jsx("span", {
                    className: "text-[#c8a951] italic",
                    children: "Digital"
                })]
            }), C.jsx(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: .5
                },
                className: "mt-12",
                children: C.jsx("button", {
                    onClick: () => t("services"),
                    className: "border border-white/30 text-white px-8 py-3 tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-500",
                    children: "What We Do"
                })
            })]
        }), C.jsx(Ze.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 1.2,
                duration: 1
            },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2",
            children: C.jsx("button", {
                onClick: () => t("story"),
                className: "text-white/50 hover:text-white transition-colors",
                children: C.jsx(kb, {
                    className: "w-8 h-8 animate-bounce"
                })
            })
        })]
    })
}

function aR() {
    return C.jsx("section", {
        id: "story",
        className: "py-24 md:py-32 bg-white",
        children: C.jsx("div", {
            className: "max-w-3xl mx-auto px-6 text-center",
            children: C.jsxs(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                children: [C.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-8",
                    children: "Our Story"
                }), C.jsx("div", {
                    className: "w-16 h-0.5 bg-[#c8a951] mx-auto mb-10"
                }), C.jsxs("p", {
                    className: "text-gray-500 text-lg leading-relaxed",
                    children: [C.jsx("span", {
                        className: "text-[#c8a951] font-semibold",
                        children: "NimbleCat"
                    }), " was formed in 2012 by some kiwis with a big dream. They had little money but incredible determination, passion, and the skill set to provide affordable digital solutions for businesses."]
                }), C.jsxs("p", {
                    className: "text-gray-500 text-lg leading-relaxed mt-6",
                    children: [C.jsx("span", {
                        className: "text-[#c8a951] font-semibold",
                        children: "NimbleCat"
                    }), " ", "love crafting beautiful websites and apps that have great functionality. They are experts in web design & development, iOS, and Android apps. Contact", " ", C.jsx("span", {
                        className: "text-[#c8a951] font-semibold",
                        children: "NimbleCat"
                    }), " to make your next tech project a reality."]
                })]
            })
        })
    })
}
const lR = [{
    icon: jb,
    title: "Website Design & Development",
    points: ["Customised website design", "Manage your own content", "E-commerce & online shop options", "Mobile & tablet friendly", "Hosting included"]
}, {
    icon: Jb,
    title: "App Development",
    points: ["Get a customised app built for your business idea", "We handle design, build and publishing", "Ready for people to download!"]
}, {
    icon: Qb,
    title: "Revamp Your Existing Website",
    points: ["Does it need a bit of love?", "Higher ranking in Google?", "Want us to start you a blog?"]
}, {
    icon: zb,
    title: "Marketing",
    points: ["Brand & Identity", "Social Media strategy", "Ramp up your social media efforts", "Content Marketing"]
}];

function uR() {
    return C.jsx("section", {
        id: "services",
        className: "py-24 md:py-32 bg-[#111111]",
        children: C.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [C.jsxs(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                className: "text-center mb-16",
                children: [C.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-4",
                    children: "Services"
                }), C.jsx("div", {
                    className: "w-16 h-0.5 bg-[#c8a951] mx-auto mb-6"
                }), C.jsx("p", {
                    className: "text-gray-400 text-lg",
                    children: "Our team will be happy to assist you."
                })]
            }), C.jsx("div", {
                className: "grid md:grid-cols-2 gap-8 lg:gap-12",
                children: lR.map((t, e) => C.jsx(Ze.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: e * .1
                    },
                    className: "group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#c8a951]/40 transition-all duration-500",
                    children: C.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-start gap-5",
                        children: [C.jsx("div", {
                            className: "w-14 h-14 rounded-xl bg-[#c8a951]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c8a951]/20 transition-colors duration-500",
                            children: C.jsx(t.icon, {
                                className: "w-7 h-7 text-[#c8a951]"
                            })
                        }), C.jsxs("div", {
                            children: [C.jsx("h3", {
                                className: "text-xl font-semibold text-white mb-4",
                                children: t.title
                            }), C.jsx("ul", {
                                className: "space-y-2",
                                children: t.points.map(r => C.jsxs("li", {
                                    className: "text-gray-400 flex items-start gap-2",
                                    children: [C.jsx("span", {
                                        className: "text-[#c8a951] mt-1.5 text-xs",
                                        children: "●"
                                    }), r]
                                }, r))
                            })]
                        })]
                    })
                }, t.title))
            }), C.jsx(Ze.p, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                transition: {
                    delay: .5
                },
                className: "text-center text-gray-500 mt-12 italic text-sm",
                children: "A static website can cost as little as $750. More dynamic websites that require e-commerce aspects will need more customisation."
            })]
        })
    })
}
const Ky = [{
        name: "Ceres Organics",
        tags: ["Branding", "Mobile", "Web"],
        image: "./src/ceres-1.png"
    }, {
        name: "Coast Events",
        tags: ["Branding", "Mobile", "Web"],
        image: "./src/screencapture-coastevents-nz-2019-11-13-12_24_34-1.png"
    }, {
        name: "Genesis My Account",
        tags: ["Branding", "Web"],
        image: "./src/genesis-myaccount.png"
    }, {
        name: "Air New Zealand",
        tags: ["Web"],
        image: "./src/air-nz.png"
    }, {
        name: "TwoBricks",
        tags: ["Branding", "Mobile", "Web"],
        image: "./src/TwoBricks.jpg"
    }, {
        name: "iPruneTrees",
        tags: ["Web"],
        image: "./src/iprunetreeservices.png"
    }, {
        name: "Auckland Web Designs",
        tags: ["Branding", "Web"],
        image: "./src/aucklandwebdesigns.jpg"
    }, {
        name: "ThinkHQ",
        tags: ["Mobile", "Web"],
        image: "./src/thinkhq.png"
    }, {
        name: "Fifo Connect",
        tags: ["Branding", "Web"],
        image: "./src/fifo-connect-1.jpg"
    }, {
        name: "HotShotTrader",
        tags: ["Branding", "Mobile", "Web"],
        image: "./src/hotshottrader.jpg"
    }, {
        name: "NZ Typing Services",
        tags: ["Branding", "Web"],
        image: "./src/nz-typing-services.png"
    }, {
        name: "Stagecoach",
        tags: ["App", "Branding", "Mobile", "Web"],
        image: "./src/stagecoach-1.jpg"
    }, {
        name: "Rufus Leonard",
        tags: ["Branding", "Web"],
        image: "./src/rufus.jpg"
    }, {
        name: "Pizza Express",
        tags: ["Branding", "Web"],
        image: "./src/pizza-express.jpg"
    }, {
        name: "London Business School",
        tags: ["Branding", "Web"],
        image: "./src/LBS.jpg"
    }],
    cR = ["All", "Web", "Branding"];

function dR() {
    const [t, e] = N.useState("All"), r = t === "All" ? Ky : Ky.filter(i => i.tags.includes(t));
    return C.jsx("section", {
        id: "portfolio",
        className: "py-24 md:py-32 bg-[#fafafa]",
        children: C.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [C.jsxs(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                className: "text-center mb-14",
                children: [C.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4",
                    children: "Portfolio"
                }), C.jsx("div", {
                    className: "w-16 h-0.5 bg-[#c8a951] mx-auto mb-8"
                }), C.jsx("div", {
                    className: "flex justify-center gap-2",
                    children: cR.map(i => C.jsx("button", {
                        onClick: () => e(i),
                        className: `px-5 py-2 text-sm tracking-wide uppercase transition-all duration-300 rounded-full ${t===i?"bg-[#1a1a1a] text-white":"bg-transparent text-gray-500 hover:text-[#1a1a1a]"}`,
                        children: i
                    }, i))
                })]
            }), C.jsx(Ze.div, {
                layout: !0,
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: C.jsx(wf, {
                    mode: "popLayout",
                    children: r.map(i => C.jsxs(Ze.div, {
                        layout: !0,
                        initial: {
                            opacity: 0,
                            scale: .9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: .9
                        },
                        transition: {
                            duration: .4
                        },
                        className: "group relative overflow-hidden rounded-2xl aspect-square cursor-pointer",
                        children: [C.jsx("img", {
                            src: i.image,
                            alt: i.name,
                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        }), C.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6",
                            children: C.jsxs("div", {
                                children: [C.jsx("h3", {
                                    className: "text-white font-bold text-xl mb-1",
                                    children: i.name
                                }), C.jsx("p", {
                                    className: "text-[#c8a951] text-sm",
                                    children: i.tags.join(", ")
                                })]
                            })
                        })]
                    }, i.name))
                })
            })]
        })
    })
}
const fR = [{
    icon: Ab,
    number: 15,
    suffix: "+",
    label: "Years of Experience"
}, {
    icon: eE,
    number: 45,
    suffix: "+",
    label: "Clients Worked With"
}, {
    icon: Mb,
    number: 50,
    suffix: "+",
    label: "Completed Projects"
}, {
    icon: Ob,
    number: 1099,
    suffix: "+",
    label: "Coffees"
}];

function hR({
    target: t,
    suffix: e,
    inView: r
}) {
    const [i, a] = N.useState(0);
    return N.useEffect(() => {
        if (!r) return;
        let l = 0;
        const f = t / (2e3 / 16),
            h = setInterval(() => {
                l += f, l >= t ? (a(t), clearInterval(h)) : a(Math.floor(l))
            }, 16);
        return () => clearInterval(h)
    }, [r, t]), C.jsxs("span", {
        className: "text-5xl md:text-6xl font-bold text-white tabular-nums",
        children: [i.toLocaleString(), e]
    })
}

function pR() {
    const [t, e] = N.useState(!1), r = N.useRef(null);
    return N.useEffect(() => {
        const i = new IntersectionObserver(([a]) => {
            a.isIntersecting && e(!0)
        }, {
            threshold: .3
        });
        return r.current && i.observe(r.current), () => i.disconnect()
    }, []), C.jsxs("section", {
        ref: r,
        className: "py-24 md:py-32 bg-[#111111] relative overflow-hidden",
        children: [C.jsx("div", {
            className: "absolute inset-0 opacity-5",
            children: C.jsx("div", {
                className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')] bg-cover bg-center"
            })
        }), C.jsxs("div", {
            className: "max-w-6xl mx-auto px-6 relative z-10",
            children: [C.jsxs(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                className: "text-center mb-16",
                children: [C.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-4",
                    children: "Some Fun Facts"
                }), C.jsx("div", {
                    className: "w-16 h-0.5 bg-[#c8a951] mx-auto"
                })]
            }), C.jsx("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12",
                children: fR.map((i, a) => C.jsxs(Ze.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: a * .1
                    },
                    className: "text-center",
                    children: [C.jsx(i.icon, {
                        className: "w-8 h-8 text-[#c8a951] mx-auto mb-4"
                    }), C.jsx(hR, {
                        target: i.number,
                        suffix: i.suffix,
                        inView: t
                    }), C.jsx("p", {
                        className: "text-gray-400 mt-3 text-sm tracking-wide uppercase",
                        children: i.label
                    })]
                }, i.label))
            })]
        })]
    })
}
const Is = [{
    text: "Nimblecat had our website up, running and looking great working with our very short deadline. Very professional in all communication to us and it was clear that Nimblecat have the expertise to deliver.",
    author: "iPrune Tree Services"
}, {
    text: "Shaun helped us develop our company application, dealing with a lot of complex functionality. He was great to work with and delivered the project on time and to a high standard.",
    author: "ThinkHQ"
}, {
    text: "Working with NimbleCat was a fantastic experience. They understood our vision and delivered a website that exceeded our expectations. Highly recommended for anyone looking for quality web development.",
    author: "Auckland Web Designs"
}];

function mR() {
    const [t, e] = N.useState(0), r = () => e(a => (a + 1) % Is.length), i = () => e(a => (a - 1 + Is.length) % Is.length);
    return C.jsx("section", {
        className: "py-24 md:py-32 bg-[#fafafa]",
        children: C.jsxs("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [C.jsxs(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                className: "text-center mb-14",
                children: [C.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4",
                    children: "Happy Clients"
                }), C.jsx("div", {
                    className: "w-16 h-0.5 bg-[#c8a951] mx-auto"
                })]
            }), C.jsxs("div", {
                className: "relative",
                children: [C.jsx(Hb, {
                    className: "w-12 h-12 text-[#c8a951]/20 mx-auto mb-6"
                }), C.jsx("div", {
                    className: "min-h-[180px] flex items-center justify-center",
                    children: C.jsx(wf, {
                        mode: "wait",
                        children: C.jsxs(Ze.div, {
                            initial: {
                                opacity: 0,
                                x: 40
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -40
                            },
                            transition: {
                                duration: .4
                            },
                            className: "text-center",
                            children: [C.jsxs("p", {
                                className: "text-gray-600 text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto",
                                children: ['"', Is[t].text, '"']
                            }), C.jsxs("p", {
                                className: "mt-6 text-[#c8a951] font-semibold tracking-wide",
                                children: ["— ", Is[t].author]
                            })]
                        }, t)
                    })
                }), C.jsxs("div", {
                    className: "flex justify-center gap-4 mt-10",
                    children: [C.jsx("button", {
                        onClick: i,
                        className: "w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c8a951] hover:text-[#c8a951] transition-colors",
                        children: C.jsx(Tb, {
                            className: "w-5 h-5"
                        })
                    }), C.jsx("div", {
                        className: "flex items-center gap-2",
                        children: Is.map((a, l) => C.jsx("button", {
                            onClick: () => e(l),
                            className: `w-2 h-2 rounded-full transition-all duration-300 ${l===t?"bg-[#c8a951] w-6":"bg-gray-300"}`
                        }, l))
                    }), C.jsx("button", {
                        onClick: r,
                        className: "w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#c8a951] hover:text-[#c8a951] transition-colors",
                        children: C.jsx(_b, {
                            className: "w-5 h-5"
                        })
                    })]
                })]
            })]
        })
    })
}
const Kd = N.forwardRef(({
    className: t,
    type: e,
    ...r
}, i) => C.jsx("input", {
    type: e,
    className: _r("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: i,
    ...r
}));
Kd.displayName = "Input";
const ux = N.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("textarea", {
    className: _r("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: r,
    ...e
}));
ux.displayName = "Textarea";

function Qy(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e)
}

function gR(...t) {
    return e => {
        let r = !1;
        const i = t.map(a => {
            const l = Qy(a, e);
            return !r && typeof l == "function" && (r = !0), l
        });
        if (r) return () => {
            for (let a = 0; a < i.length; a++) {
                const l = i[a];
                typeof l == "function" ? l() : Qy(t[a], null)
            }
        }
    }
}
var yR = Symbol.for("react.lazy"),
    Pl = Yv[" use ".trim().toString()];

function vR(t) {
    return typeof t == "object" && t !== null && "then" in t
}

function cx(t) {
    return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === yR && "_payload" in t && vR(t._payload)
}

function wR(t) {
    const e = SR(t),
        r = N.forwardRef((i, a) => {
            let {
                children: l,
                ...c
            } = i;
            cx(l) && typeof Pl == "function" && (l = Pl(l._payload));
            const f = N.Children.toArray(l),
                h = f.find(ER);
            if (h) {
                const m = h.props.children,
                    g = f.map(y => y === h ? N.Children.count(m) > 1 ? N.Children.only(null) : N.isValidElement(m) ? m.props.children : null : y);
                return C.jsx(e, {
                    ...c,
                    ref: a,
                    children: N.isValidElement(m) ? N.cloneElement(m, void 0, g) : null
                })
            }
            return C.jsx(e, {
                ...c,
                ref: a,
                children: l
            })
        });
    return r.displayName = `${t}.Slot`, r
}
var xR = wR("Slot");

function SR(t) {
    const e = N.forwardRef((r, i) => {
        let {
            children: a,
            ...l
        } = r;
        if (cx(a) && typeof Pl == "function" && (a = Pl(a._payload)), N.isValidElement(a)) {
            const c = CR(a),
                f = kR(l, a.props);
            return a.type !== N.Fragment && (f.ref = i ? gR(i, c) : c), N.cloneElement(a, f)
        }
        return N.Children.count(a) > 1 ? N.Children.only(null) : null
    });
    return e.displayName = `${t}.SlotClone`, e
}
var bR = Symbol("radix.slottable");

function ER(t) {
    return N.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === bR
}

function kR(t, e) {
    const r = {
        ...e
    };
    for (const i in e) {
        const a = t[i],
            l = e[i];
        /^on[A-Z]/.test(i) ? a && l ? r[i] = (...f) => {
            const h = l(...f);
            return a(...f), h
        } : a && (r[i] = a) : i === "style" ? r[i] = {
            ...a,
            ...l
        } : i === "className" && (r[i] = [a, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...r
    }
}

function CR(t) {
    var i, a;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get,
        r = e && "isReactWarning" in e && e.isReactWarning;
    return r ? t.ref : (e = (a = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : a.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref)
}
const TR = e0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    dx = N.forwardRef(({
        className: t,
        variant: e,
        size: r,
        asChild: i = !1,
        ...a
    }, l) => {
        const c = i ? xR : "button";
        return C.jsx(c, {
            className: _r(TR({
                variant: e,
                size: r,
                className: t
            })),
            ref: l,
            ...a
        })
    });
dx.displayName = "Button";

function PR() {
    const [t, e] = N.useState({
        name: "",
        email: "",
        message: ""
    }), [r, i] = N.useState(!1), a = l => {
        l.preventDefault(), i(!0), setTimeout(() => i(!1), 3e3), e({
            name: "",
            email: "",
            message: ""
        })
    };
    return C.jsx("section", {
        id: "contact",
        className: "py-24 md:py-32 bg-white",
        children: C.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [C.jsxs(Ze.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .7
                },
                className: "text-center mb-16",
                children: [C.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4",
                    children: "Get In Touch"
                }), C.jsx("div", {
                    className: "w-16 h-0.5 bg-[#c8a951] mx-auto mb-6"
                }), C.jsx("p", {
                    className: "text-gray-500 text-lg",
                    children: "Ready to start your project? We'd love to hear from you."
                })]
            }), C.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 lg:gap-20",
                children: [C.jsxs(Ze.div, {
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5
                    },
                    children: [C.jsxs("div", {
                        className: "space-y-8",
                        children: [C.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [C.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-[#c8a951]/10 flex items-center justify-center shrink-0",
                                children: C.jsx(Fb, {
                                    className: "w-5 h-5 text-[#c8a951]"
                                })
                            }), C.jsxs("div", {
                                children: [C.jsx("h4", {
                                    className: "font-semibold text-[#1a1a1a] mb-1",
                                    children: "Email"
                                }), C.jsx("p", {
                                    className: "text-gray-500",
                                    children: "hello@nimblecat.co.nz"
                                })]
                            })]
                        }), C.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [C.jsx("div", {
                                className: "w-12 h-12 rounded-xl bg-[#c8a951]/10 flex items-center justify-center shrink-0",
                                children: C.jsx(Bb, {
                                    className: "w-5 h-5 text-[#c8a951]"
                                })
                            }), C.jsxs("div", {
                                children: [C.jsx("h4", {
                                    className: "font-semibold text-[#1a1a1a] mb-1",
                                    children: "Location"
                                }), C.jsx("p", {
                                    className: "text-gray-500",
                                    children: "Auckland, New Zealand"
                                })]
                            })]
                        })]
                    }), C.jsx("div", {
                        className: "mt-12 p-8 bg-[#fafafa] rounded-2xl",
                        children: C.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "We're a small team with big ambitions. Whether you need a simple website, a complex web application, or a mobile app — we're here to make it happen. Let's build something great together."
                        })
                    })]
                }), C.jsxs(Ze.form, {
                    onSubmit: a,
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "space-y-5",
                    children: [C.jsx("div", {
                        children: C.jsx(Kd, {
                            placeholder: "Your Name",
                            value: t.name,
                            onChange: l => e({
                                ...t,
                                name: l.target.value
                            }),
                            className: "h-12 border-gray-200 focus:border-[#c8a951] rounded-xl",
                            required: !0
                        })
                    }), C.jsx("div", {
                        children: C.jsx(Kd, {
                            type: "email",
                            placeholder: "Your Email",
                            value: t.email,
                            onChange: l => e({
                                ...t,
                                email: l.target.value
                            }),
                            className: "h-12 border-gray-200 focus:border-[#c8a951] rounded-xl",
                            required: !0
                        })
                    }), C.jsx("div", {
                        children: C.jsx(ux, {
                            placeholder: "Your Message",
                            value: t.message,
                            onChange: l => e({
                                ...t,
                                message: l.target.value
                            }),
                            className: "min-h-[150px] border-gray-200 focus:border-[#c8a951] rounded-xl resize-none",
                            required: !0
                        })
                    }), C.jsx(dx, {
                        type: "submit",
                        className: "w-full h-12 bg-[#1a1a1a] hover:bg-[#c8a951] text-white rounded-xl transition-all duration-500 flex items-center justify-center gap-2",
                        children: r ? "Message Sent!" : C.jsxs(C.Fragment, {
                            children: [C.jsx(Yb, {
                                className: "w-4 h-4"
                            }), "Send Message"]
                        })
                    })]
                })]
            })]
        })
    })
}

function _R() {
    return C.jsx("footer", {
        className: "bg-white py-10 border-t border-gray-200",
        children: C.jsxs("div", {
            className: "max-w-6xl mx-auto px-6 text-center",
            children: [C.jsx("img", {
                src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ab678eddedf6450ddeef5a/26d6b27d9_logo.png",
                alt: "NimbleCat",
                className: "h-14 mx-auto mb-3"
            }), C.jsxs("p", {
                className: "text-gray-500 text-sm",
                children: ["© ", new Date().getFullYear(), " NimbleCat. All rights reserved. Auckland, New Zealand."]
            })]
        })
    })
}

function RR() {
    return C.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [C.jsx(iR, {}), C.jsx(oR, {}), C.jsx(aR, {}), C.jsx(uR, {}), C.jsx(dR, {}), C.jsx(pR, {}), C.jsx(mR, {}), C.jsx(PR, {}), C.jsx(_R, {})]
    })
}
const AR = {
        Home: RR
    },
    NR = {
        mainPage: "Home",
        Pages: AR
    };
Xv();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _l() {
    return _l = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, _l.apply(this, arguments)
}
var br;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(br || (br = {}));
const Gy = "popstate";

function OR(t) {
    t === void 0 && (t = {});

    function e(i, a) {
        let {
            pathname: l,
            search: c,
            hash: f
        } = i.location;
        return Qd("", {
            pathname: l,
            search: c,
            hash: f
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function r(i, a) {
        return typeof a == "string" ? a : hx(a)
    }
    return MR(e, r, null, t)
}

function jt(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function fx(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function LR() {
    return Math.random().toString(36).substr(2, 8)
}

function Yy(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function Qd(t, e, r, i) {
    return r === void 0 && (r = null), _l({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Il(e) : e, {
        state: r,
        key: e && e.key || i || LR()
    })
}

function hx(t) {
    let {
        pathname: e = "/",
        search: r = "",
        hash: i = ""
    } = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e
}

function Il(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
    }
    return e
}

function MR(t, e, r, i) {
    i === void 0 && (i = {});
    let {
        window: a = document.defaultView,
        v5Compat: l = !1
    } = i, c = a.history, f = br.Pop, h = null, m = g();
    m == null && (m = 0, c.replaceState(_l({}, c.state, {
        idx: m
    }), ""));

    function g() {
        return (c.state || {
            idx: null
        }).idx
    }

    function y() {
        f = br.Pop;
        let x = g(),
            R = x == null ? null : x - m;
        m = x, h && h({
            action: f,
            location: b.location,
            delta: R
        })
    }

    function w(x, R) {
        f = br.Push;
        let V = Qd(b.location, x, R);
        m = g() + 1;
        let D = Yy(V, m),
            M = b.createHref(V);
        try {
            c.pushState(D, "", M)
        } catch (B) {
            if (B instanceof DOMException && B.name === "DataCloneError") throw B;
            a.location.assign(M)
        }
        l && h && h({
            action: f,
            location: b.location,
            delta: 1
        })
    }

    function E(x, R) {
        f = br.Replace;
        let V = Qd(b.location, x, R);
        m = g();
        let D = Yy(V, m),
            M = b.createHref(V);
        c.replaceState(D, "", M), l && h && h({
            action: f,
            location: b.location,
            delta: 0
        })
    }

    function S(x) {
        let R = a.location.origin !== "null" ? a.location.origin : a.location.href,
            V = typeof x == "string" ? x : hx(x);
        return V = V.replace(/ $/, "%20"), jt(R, "No window.location.(origin|href) available to create URL for href: " + V), new URL(V, R)
    }
    let b = {
        get action() {
            return f
        },
        get location() {
            return t(a, c)
        },
        listen(x) {
            if (h) throw new Error("A history only accepts one active listener");
            return a.addEventListener(Gy, y), h = x, () => {
                a.removeEventListener(Gy, y), h = null
            }
        },
        createHref(x) {
            return e(a, x)
        },
        createURL: S,
        encodeLocation(x) {
            let R = S(x);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: w,
        replace: E,
        go(x) {
            return c.go(x)
        }
    };
    return b
}
var Xy;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(Xy || (Xy = {}));

function DR(t, e, r) {
    return r === void 0 && (r = "/"), jR(t, e, r)
}

function jR(t, e, r, i) {
    let a = typeof e == "string" ? Il(e) : e,
        l = gx(a.pathname || "/", r);
    if (l == null) return null;
    let c = px(t);
    IR(c);
    let f = null;
    for (let h = 0; f == null && h < c.length; ++h) {
        let m = GR(l);
        f = HR(c[h], m)
    }
    return f
}

function px(t, e, r, i) {
    e === void 0 && (e = []), r === void 0 && (r = []), i === void 0 && (i = "");
    let a = (l, c, f) => {
        let h = {
            relativePath: f === void 0 ? l.path || "" : f,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: c,
            route: l
        };
        h.relativePath.startsWith("/") && (jt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(i.length));
        let m = Ws([i, h.relativePath]),
            g = r.concat(h);
        l.children && l.children.length > 0 && (jt(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')), px(l.children, e, g, m)), !(l.path == null && !l.index) && e.push({
            path: m,
            score: WR(m, l.index),
            routesMeta: g
        })
    };
    return t.forEach((l, c) => {
        var f;
        if (l.path === "" || !((f = l.path) != null && f.includes("?"))) a(l, c);
        else
            for (let h of mx(l.path)) a(l, c, h)
    }), e
}

function mx(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [r, ...i] = e, a = r.endsWith("?"), l = r.replace(/\?$/, "");
    if (i.length === 0) return a ? [l, ""] : [l];
    let c = mx(i.join("/")),
        f = [];
    return f.push(...c.map(h => h === "" ? l : [l, h].join("/"))), a && f.push(...c), f.map(h => t.startsWith("/") && h === "" ? "/" : h)
}

function IR(t) {
    t.sort((e, r) => e.score !== r.score ? r.score - e.score : qR(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const FR = /^:[\w-]+$/,
    VR = 3,
    BR = 2,
    UR = 1,
    zR = 10,
    $R = -2,
    Jy = t => t === "*";

function WR(t, e) {
    let r = t.split("/"),
        i = r.length;
    return r.some(Jy) && (i += $R), e && (i += BR), r.filter(a => !Jy(a)).reduce((a, l) => a + (FR.test(l) ? VR : l === "" ? UR : zR), i)
}

function qR(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function HR(t, e, r) {
    let {
        routesMeta: i
    } = t, a = {}, l = "/", c = [];
    for (let f = 0; f < i.length; ++f) {
        let h = i[f],
            m = f === i.length - 1,
            g = l === "/" ? e : e.slice(l.length) || "/",
            y = KR({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: m
            }, g),
            w = h.route;
        if (!y) return null;
        Object.assign(a, y.params), c.push({
            params: a,
            pathname: Ws([l, y.pathname]),
            pathnameBase: YR(Ws([l, y.pathnameBase])),
            route: w
        }), y.pathnameBase !== "/" && (l = Ws([l, y.pathnameBase]))
    }
    return c
}

function KR(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [r, i] = QR(t.path, t.caseSensitive, t.end), a = e.match(r);
    if (!a) return null;
    let l = a[0],
        c = l.replace(/(.)\/+$/, "$1"),
        f = a.slice(1);
    return {
        params: i.reduce((m, g, y) => {
            let {
                paramName: w,
                isOptional: E
            } = g;
            if (w === "*") {
                let b = f[y] || "";
                c = l.slice(0, l.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const S = f[y];
            return E && !S ? m[w] = void 0 : m[w] = (S || "").replace(/%2F/g, "/"), m
        }, {}),
        pathname: l,
        pathnameBase: c,
        pattern: t
    }
}

function QR(t, e, r) {
    e === void 0 && (e = !1), r === void 0 && (r = !0), fx(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [],
        a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, h) => (i.push({
            paramName: f,
            isOptional: h != null
        }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }), a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, e ? void 0 : "i"), i]
}

function GR(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return fx(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function gx(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length,
        i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const Ws = t => t.join("/").replace(/\/\/+/g, "/"),
    YR = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");

function XR(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const yx = ["post", "put", "patch", "delete"];
new Set(yx);
const JR = ["get", ...yx];
new Set(JR);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rl() {
    return Rl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, Rl.apply(this, arguments)
}
const ZR = N.createContext(null),
    eA = N.createContext(null),
    vx = N.createContext(null),
    Fl = N.createContext(null),
    Vl = N.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    wx = N.createContext(null);

function Yf() {
    return N.useContext(Fl) != null
}

function xx() {
    return Yf() || jt(!1), N.useContext(Fl).location
}

function tA(t, e) {
    return nA(t, e)
}

function nA(t, e, r, i) {
    Yf() || jt(!1);
    let {
        navigator: a
    } = N.useContext(vx), {
        matches: l
    } = N.useContext(Vl), c = l[l.length - 1], f = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = xx(),
        g;
    if (e) {
        var y;
        let x = typeof e == "string" ? Il(e) : e;
        h === "/" || (y = x.pathname) != null && y.startsWith(h) || jt(!1), g = x
    } else g = m;
    let w = g.pathname || "/",
        E = w;
    if (h !== "/") {
        let x = h.replace(/^\//, "").split("/");
        E = "/" + w.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let S = DR(t, {
            pathname: E
        }),
        b = aA(S && S.map(x => Object.assign({}, x, {
            params: Object.assign({}, f, x.params),
            pathname: Ws([h, a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase: x.pathnameBase === "/" ? h : Ws([h, a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
        })), l, r, i);
    return e && b ? N.createElement(Fl.Provider, {
        value: {
            location: Rl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: br.Pop
        }
    }, b) : b
}

function rA() {
    let t = dA(),
        e = XR(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        r = t instanceof Error ? t.stack : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? N.createElement("pre", {
        style: a
    }, r) : null, null)
}
const sA = N.createElement(rA, null);
class iA extends N.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? N.createElement(Vl.Provider, {
            value: this.props.routeContext
        }, N.createElement(wx.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function oA(t) {
    let {
        routeContext: e,
        match: r,
        children: i
    } = t, a = N.useContext(ZR);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), N.createElement(Vl.Provider, {
        value: e
    }, i)
}

function aA(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []), r === void 0 && (r = null), i === void 0 && (i = null), t == null) {
        var l;
        if (!r) return null;
        if (r.errors) t = r.matches;
        else if ((l = i) != null && l.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0) t = r.matches;
        else return null
    }
    let c = t,
        f = (a = r) == null ? void 0 : a.errors;
    if (f != null) {
        let g = c.findIndex(y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0);
        g >= 0 || jt(!1), c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1,
        m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g), y.route.id) {
                let {
                    loaderData: w,
                    errors: E
                } = r, S = y.route.loader && w[y.route.id] === void 0 && (!E || E[y.route.id] === void 0);
                if (y.route.lazy || S) {
                    h = !0, m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight((g, y, w) => {
        let E, S = !1,
            b = null,
            x = null;
        r && (E = f && y.route.id ? f[y.route.id] : void 0, b = y.route.errorElement || sA, h && (m < 0 && w === 0 ? (fA("route-fallback"), S = !0, x = null) : m === w && (S = !0, x = y.route.hydrateFallbackElement || null)));
        let R = e.concat(c.slice(0, w + 1)),
            V = () => {
                let D;
                return E ? D = b : S ? D = x : y.route.Component ? D = N.createElement(y.route.Component, null) : y.route.element ? D = y.route.element : D = g, N.createElement(oA, {
                    match: y,
                    routeContext: {
                        outlet: g,
                        matches: R,
                        isDataRoute: r != null
                    },
                    children: D
                })
            };
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? N.createElement(iA, {
            location: r.location,
            revalidation: r.revalidation,
            component: b,
            error: E,
            children: V(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : V()
    }, null)
}
var Sx = (function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
})(Sx || {});

function lA(t) {
    let e = N.useContext(eA);
    return e || jt(!1), e
}

function uA(t) {
    let e = N.useContext(Vl);
    return e || jt(!1), e
}

function cA(t) {
    let e = uA(),
        r = e.matches[e.matches.length - 1];
    return r.route.id || jt(!1), r.route.id
}

function dA() {
    var t;
    let e = N.useContext(wx),
        r = lA(Sx.UseRouteError),
        i = cA();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const Zy = {};

function fA(t, e, r) {
    Zy[t] || (Zy[t] = !0)
}

function hA(t, e) {
    t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function cl(t) {
    jt(!1)
}

function pA(t) {
    let {
        basename: e = "/",
        children: r = null,
        location: i,
        navigationType: a = br.Pop,
        navigator: l,
        static: c = !1,
        future: f
    } = t;
    Yf() && jt(!1);
    let h = e.replace(/^\/*/, "/"),
        m = N.useMemo(() => ({
            basename: h,
            navigator: l,
            static: c,
            future: Rl({
                v7_relativeSplatPath: !1
            }, f)
        }), [h, f, l, c]);
    typeof i == "string" && (i = Il(i));
    let {
        pathname: g = "/",
        search: y = "",
        hash: w = "",
        state: E = null,
        key: S = "default"
    } = i, b = N.useMemo(() => {
        let x = gx(g, h);
        return x == null ? null : {
            location: {
                pathname: x,
                search: y,
                hash: w,
                state: E,
                key: S
            },
            navigationType: a
        }
    }, [h, g, y, w, E, S, a]);
    return b == null ? null : N.createElement(vx.Provider, {
        value: m
    }, N.createElement(Fl.Provider, {
        children: r,
        value: b
    }))
}

function mA(t) {
    let {
        children: e,
        location: r
    } = t;
    return tA(Gd(e), r)
}
new Promise(() => {});

function Gd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return N.Children.forEach(t, (i, a) => {
        if (!N.isValidElement(i)) return;
        let l = [...e, a];
        if (i.type === N.Fragment) {
            r.push.apply(r, Gd(i.props.children, l));
            return
        }
        i.type !== cl && jt(!1), !i.props.index || !i.props.children || jt(!1);
        let c = {
            id: i.props.id || l.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = Gd(i.props.children, l)), r.push(c)
    }), r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const gA = "6";
try {
    window.__reactRouterVersion = gA
} catch {}
const yA = "startTransition",
    ev = Yv[yA];

function vA(t) {
    let {
        basename: e,
        children: r,
        future: i,
        window: a
    } = t, l = N.useRef();
    l.current == null && (l.current = OR({
        window: a,
        v5Compat: !0
    }));
    let c = l.current,
        [f, h] = N.useState({
            action: c.action,
            location: c.location
        }),
        {
            v7_startTransition: m
        } = i || {},
        g = N.useCallback(y => {
            m && ev ? ev(() => h(y)) : h(y)
        }, [h, m]);
    return N.useLayoutEffect(() => c.listen(g), [c, g]), N.useEffect(() => hA(i), [i]), N.createElement(pA, {
        basename: e,
        children: r,
        location: f.location,
        navigationType: f.action,
        navigator: c,
        future: i
    })
}
var tv;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(tv || (tv = {}));
var nv;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(nv || (nv = {}));

function bx(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {
    toString: wA
} = Object.prototype, {
    getPrototypeOf: Xf
} = Object, {
    iterator: Bl,
    toStringTag: Ex
} = Symbol, Ul = (t => e => {
    const r = wA.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), hn = t => (t = t.toLowerCase(), e => Ul(e) === t), zl = t => e => typeof e === t, {
    isArray: ui
} = Array, oi = zl("undefined");

function Mo(t) {
    return t !== null && !oi(t) && t.constructor !== null && !oi(t.constructor) && Mt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const kx = hn("ArrayBuffer");

function xA(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && kx(t.buffer), e
}
const SA = zl("string"),
    Mt = zl("function"),
    Cx = zl("number"),
    Do = t => t !== null && typeof t == "object",
    bA = t => t === !0 || t === !1,
    dl = t => {
        if (Ul(t) !== "object") return !1;
        const e = Xf(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Ex in t) && !(Bl in t)
    },
    EA = t => {
        if (!Do(t) || Mo(t)) return !1;
        try {
            return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
        } catch {
            return !1
        }
    },
    kA = hn("Date"),
    CA = hn("File"),
    TA = hn("Blob"),
    PA = hn("FileList"),
    _A = t => Do(t) && Mt(t.pipe),
    RA = t => {
        let e;
        return t && (typeof FormData == "function" && t instanceof FormData || Mt(t.append) && ((e = Ul(t)) === "formdata" || e === "object" && Mt(t.toString) && t.toString() === "[object FormData]"))
    },
    AA = hn("URLSearchParams"),
    [NA, OA, LA, MA] = ["ReadableStream", "Request", "Response", "Headers"].map(hn),
    DA = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function jo(t, e, {
    allOwnKeys: r = !1
} = {}) {
    if (t === null || typeof t > "u") return;
    let i, a;
    if (typeof t != "object" && (t = [t]), ui(t))
        for (i = 0, a = t.length; i < a; i++) e.call(null, t[i], i, t);
    else {
        if (Mo(t)) return;
        const l = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
            c = l.length;
        let f;
        for (i = 0; i < c; i++) f = l[i], e.call(null, t[f], f, t)
    }
}

function Tx(t, e) {
    if (Mo(t)) return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length,
        a;
    for (; i-- > 0;)
        if (a = r[i], e === a.toLowerCase()) return a;
    return null
}
const Yr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    Px = t => !oi(t) && t !== Yr;

function Yd() {
    const {
        caseless: t,
        skipUndefined: e
    } = Px(this) && this || {}, r = {}, i = (a, l) => {
        if (l === "__proto__" || l === "constructor" || l === "prototype") return;
        const c = t && Tx(r, l) || l;
        dl(r[c]) && dl(a) ? r[c] = Yd(r[c], a) : dl(a) ? r[c] = Yd({}, a) : ui(a) ? r[c] = a.slice() : (!e || !oi(a)) && (r[c] = a)
    };
    for (let a = 0, l = arguments.length; a < l; a++) arguments[a] && jo(arguments[a], i);
    return r
}
const jA = (t, e, r, {
        allOwnKeys: i
    } = {}) => (jo(e, (a, l) => {
        r && Mt(a) ? Object.defineProperty(t, l, {
            value: bx(a, r),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(t, l, {
            value: a,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: i
    }), t),
    IA = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    FA = (t, e, r, i) => {
        t.prototype = Object.create(e.prototype, i), Object.defineProperty(t.prototype, "constructor", {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "super", {
            value: e.prototype
        }), r && Object.assign(t.prototype, r)
    },
    VA = (t, e, r, i) => {
        let a, l, c;
        const f = {};
        if (e = e || {}, t == null) return e;
        do {
            for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0;) c = a[l], (!i || i(c, t, e)) && !f[c] && (e[c] = t[c], f[c] = !0);
            t = r !== !1 && Xf(t)
        } while (t && (!r || r(t, e)) && t !== Object.prototype);
        return e
    },
    BA = (t, e, r) => {
        t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
        const i = t.indexOf(e, r);
        return i !== -1 && i === r
    },
    UA = t => {
        if (!t) return null;
        if (ui(t)) return t;
        let e = t.length;
        if (!Cx(e)) return null;
        const r = new Array(e);
        for (; e-- > 0;) r[e] = t[e];
        return r
    },
    zA = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && Xf(Uint8Array)),
    $A = (t, e) => {
        const i = (t && t[Bl]).call(t);
        let a;
        for (;
            (a = i.next()) && !a.done;) {
            const l = a.value;
            e.call(t, l[0], l[1])
        }
    },
    WA = (t, e) => {
        let r;
        const i = [];
        for (;
            (r = t.exec(e)) !== null;) i.push(r);
        return i
    },
    qA = hn("HTMLFormElement"),
    HA = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
        return i.toUpperCase() + a
    }),
    rv = (({
        hasOwnProperty: t
    }) => (e, r) => t.call(e, r))(Object.prototype),
    KA = hn("RegExp"),
    _x = (t, e) => {
        const r = Object.getOwnPropertyDescriptors(t),
            i = {};
        jo(r, (a, l) => {
            let c;
            (c = e(a, l, t)) !== !1 && (i[l] = c || a)
        }), Object.defineProperties(t, i)
    },
    QA = t => {
        _x(t, (e, r) => {
            if (Mt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
            const i = t[r];
            if (Mt(i)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                })
            }
        })
    },
    GA = (t, e) => {
        const r = {},
            i = a => {
                a.forEach(l => {
                    r[l] = !0
                })
            };
        return ui(t) ? i(t) : i(String(t).split(e)), r
    },
    YA = () => {},
    XA = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;

function JA(t) {
    return !!(t && Mt(t.append) && t[Ex] === "FormData" && t[Bl])
}
const ZA = t => {
        const e = new Array(10),
            r = (i, a) => {
                if (Do(i)) {
                    if (e.indexOf(i) >= 0) return;
                    if (Mo(i)) return i;
                    if (!("toJSON" in i)) {
                        e[a] = i;
                        const l = ui(i) ? [] : {};
                        return jo(i, (c, f) => {
                            const h = r(c, a + 1);
                            !oi(h) && (l[f] = h)
                        }), e[a] = void 0, l
                    }
                }
                return i
            };
        return r(t, 0)
    },
    e2 = hn("AsyncFunction"),
    t2 = t => t && (Do(t) || Mt(t)) && Mt(t.then) && Mt(t.catch),
    Rx = ((t, e) => t ? setImmediate : e ? ((r, i) => (Yr.addEventListener("message", ({
        source: a,
        data: l
    }) => {
        a === Yr && l === r && i.length && i.shift()()
    }, !1), a => {
        i.push(a), Yr.postMessage(r, "*")
    }))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Mt(Yr.postMessage)),
    n2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Yr) : typeof process < "u" && process.nextTick || Rx,
    r2 = t => t != null && Mt(t[Bl]),
    F = {
        isArray: ui,
        isArrayBuffer: kx,
        isBuffer: Mo,
        isFormData: RA,
        isArrayBufferView: xA,
        isString: SA,
        isNumber: Cx,
        isBoolean: bA,
        isObject: Do,
        isPlainObject: dl,
        isEmptyObject: EA,
        isReadableStream: NA,
        isRequest: OA,
        isResponse: LA,
        isHeaders: MA,
        isUndefined: oi,
        isDate: kA,
        isFile: CA,
        isBlob: TA,
        isRegExp: KA,
        isFunction: Mt,
        isStream: _A,
        isURLSearchParams: AA,
        isTypedArray: zA,
        isFileList: PA,
        forEach: jo,
        merge: Yd,
        extend: jA,
        trim: DA,
        stripBOM: IA,
        inherits: FA,
        toFlatObject: VA,
        kindOf: Ul,
        kindOfTest: hn,
        endsWith: BA,
        toArray: UA,
        forEachEntry: $A,
        matchAll: WA,
        isHTMLForm: qA,
        hasOwnProperty: rv,
        hasOwnProp: rv,
        reduceDescriptors: _x,
        freezeMethods: QA,
        toObjectSet: GA,
        toCamelCase: HA,
        noop: YA,
        toFiniteNumber: XA,
        findKey: Tx,
        global: Yr,
        isContextDefined: Px,
        isSpecCompliantForm: JA,
        toJSONObject: ZA,
        isAsyncFn: e2,
        isThenable: t2,
        setImmediate: Rx,
        asap: n2,
        isIterable: r2
    };
let pe = class Ax extends Error {
    static from(e, r, i, a, l, c) {
        const f = new Ax(e.message, r || e.code, i, a, l);
        return f.cause = e, f.name = e.name, c && Object.assign(f, c), f
    }
    constructor(e, r, i, a, l) {
        super(e), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), i && (this.config = i), a && (this.request = a), l && (this.response = l, this.status = l.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: F.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
};
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const s2 = null;

function Xd(t) {
    return F.isPlainObject(t) || F.isArray(t)
}

function Nx(t) {
    return F.endsWith(t, "[]") ? t.slice(0, -2) : t
}

function sv(t, e, r) {
    return t ? t.concat(e).map(function(a, l) {
        return a = Nx(a), !r && l ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}

function i2(t) {
    return F.isArray(t) && !t.some(Xd)
}
const o2 = F.toFlatObject(F, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function $l(t, e, r) {
    if (!F.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData, r = F.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(b, x) {
        return !F.isUndefined(x[b])
    });
    const i = r.metaTokens,
        a = r.visitor || g,
        l = r.dots,
        c = r.indexes,
        h = (r.Blob || typeof Blob < "u" && Blob) && F.isSpecCompliantForm(e);
    if (!F.isFunction(a)) throw new TypeError("visitor must be a function");

    function m(S) {
        if (S === null) return "";
        if (F.isDate(S)) return S.toISOString();
        if (F.isBoolean(S)) return S.toString();
        if (!h && F.isBlob(S)) throw new pe("Blob is not supported. Use a Buffer instead.");
        return F.isArrayBuffer(S) || F.isTypedArray(S) ? h && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
    }

    function g(S, b, x) {
        let R = S;
        if (S && !x && typeof S == "object") {
            if (F.endsWith(b, "{}")) b = i ? b : b.slice(0, -2), S = JSON.stringify(S);
            else if (F.isArray(S) && i2(S) || (F.isFileList(S) || F.endsWith(b, "[]")) && (R = F.toArray(S))) return b = Nx(b), R.forEach(function(D, M) {
                !(F.isUndefined(D) || D === null) && e.append(c === !0 ? sv([b], M, l) : c === null ? b : b + "[]", m(D))
            }), !1
        }
        return Xd(S) ? !0 : (e.append(sv(x, b, l), m(S)), !1)
    }
    const y = [],
        w = Object.assign(o2, {
            defaultVisitor: g,
            convertValue: m,
            isVisitable: Xd
        });

    function E(S, b) {
        if (!F.isUndefined(S)) {
            if (y.indexOf(S) !== -1) throw Error("Circular reference detected in " + b.join("."));
            y.push(S), F.forEach(S, function(R, V) {
                (!(F.isUndefined(R) || R === null) && a.call(e, R, F.isString(V) ? V.trim() : V, b, w)) === !0 && E(R, b ? b.concat(V) : [V])
            }), y.pop()
        }
    }
    if (!F.isObject(t)) throw new TypeError("data must be an object");
    return E(t), e
}

function iv(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}

function Jf(t, e) {
    this._pairs = [], t && $l(t, this, e)
}
const Ox = Jf.prototype;
Ox.append = function(e, r) {
    this._pairs.push([e, r])
};
Ox.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, iv)
    } : iv;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
};

function a2(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function Lx(t, e, r) {
    if (!e) return t;
    const i = r && r.encode || a2,
        a = F.isFunction(r) ? {
            serialize: r
        } : r,
        l = a && a.serialize;
    let c;
    if (l ? c = l(e, a) : c = F.isURLSearchParams(e) ? e.toString() : new Jf(e, a).toString(i), c) {
        const f = t.indexOf("#");
        f !== -1 && (t = t.slice(0, f)), t += (t.indexOf("?") === -1 ? "?" : "&") + c
    }
    return t
}
class ov {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        F.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const Zf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0
    },
    l2 = typeof URLSearchParams < "u" ? URLSearchParams : Jf,
    u2 = typeof FormData < "u" ? FormData : null,
    c2 = typeof Blob < "u" ? Blob : null,
    d2 = {
        isBrowser: !0,
        classes: {
            URLSearchParams: l2,
            FormData: u2,
            Blob: c2
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    eh = typeof window < "u" && typeof document < "u",
    Jd = typeof navigator == "object" && navigator || void 0,
    f2 = eh && (!Jd || ["ReactNative", "NativeScript", "NS"].indexOf(Jd.product) < 0),
    h2 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    p2 = eh && window.location.href || "http://localhost",
    m2 = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: eh,
        hasStandardBrowserEnv: f2,
        hasStandardBrowserWebWorkerEnv: h2,
        navigator: Jd,
        origin: p2
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    St = {
        ...m2,
        ...d2
    };

function g2(t, e) {
    return $l(t, new St.classes.URLSearchParams, {
        visitor: function(r, i, a, l) {
            return St.isNode && F.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}

function y2(t) {
    return F.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function v2(t) {
    const e = {},
        r = Object.keys(t);
    let i;
    const a = r.length;
    let l;
    for (i = 0; i < a; i++) l = r[i], e[l] = t[l];
    return e
}

function Mx(t) {
    function e(r, i, a, l) {
        let c = r[l++];
        if (c === "__proto__") return !0;
        const f = Number.isFinite(+c),
            h = l >= r.length;
        return c = !c && F.isArray(a) ? a.length : c, h ? (F.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i, !f) : ((!a[c] || !F.isObject(a[c])) && (a[c] = []), e(r, i, a[c], l) && F.isArray(a[c]) && (a[c] = v2(a[c])), !f)
    }
    if (F.isFormData(t) && F.isFunction(t.entries)) {
        const r = {};
        return F.forEachEntry(t, (i, a) => {
            e(y2(i), a, r, 0)
        }), r
    }
    return null
}

function w2(t, e, r) {
    if (F.isString(t)) try {
        return (e || JSON.parse)(t), F.trim(t)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (r || JSON.stringify)(t)
}
const Io = {
    transitional: Zf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || "",
            a = i.indexOf("application/json") > -1,
            l = F.isObject(e);
        if (l && F.isHTMLForm(e) && (e = new FormData(e)), F.isFormData(e)) return a ? JSON.stringify(Mx(e)) : e;
        if (F.isArrayBuffer(e) || F.isBuffer(e) || F.isStream(e) || F.isFile(e) || F.isBlob(e) || F.isReadableStream(e)) return e;
        if (F.isArrayBufferView(e)) return e.buffer;
        if (F.isURLSearchParams(e)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let f;
        if (l) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return g2(e, this.formSerializer).toString();
            if ((f = F.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return $l(f ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return l || a ? (r.setContentType("application/json", !1), w2(e)) : e
    }],
    transformResponse: [function(e) {
        const r = this.transitional || Io.transitional,
            i = r && r.forcedJSONParsing,
            a = this.responseType === "json";
        if (F.isResponse(e) || F.isReadableStream(e)) return e;
        if (e && F.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (f) {
                if (c) throw f.name === "SyntaxError" ? pe.from(f, pe.ERR_BAD_RESPONSE, this, null, this.response) : f
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: St.classes.FormData,
        Blob: St.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
F.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    Io.headers[t] = {}
});
const x2 = F.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    S2 = t => {
        const e = {};
        let r, i, a;
        return t && t.split(`
`).forEach(function(c) {
            a = c.indexOf(":"), r = c.substring(0, a).trim().toLowerCase(), i = c.substring(a + 1).trim(), !(!r || e[r] && x2[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
        }), e
    },
    av = Symbol("internals");

function Zi(t) {
    return t && String(t).trim().toLowerCase()
}

function fl(t) {
    return t === !1 || t == null ? t : F.isArray(t) ? t.map(fl) : String(t)
}

function b2(t) {
    const e = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t);) e[i[1]] = i[2];
    return e
}
const E2 = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

function ad(t, e, r, i, a) {
    if (F.isFunction(i)) return i.call(this, e, r);
    if (a && (e = r), !!F.isString(e)) {
        if (F.isString(i)) return e.indexOf(i) !== -1;
        if (F.isRegExp(i)) return i.test(e)
    }
}

function k2(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}

function C2(t, e) {
    const r = F.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, l, c) {
                return this[i].call(this, e, a, l, c)
            },
            configurable: !0
        })
    })
}
let Dt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;

        function l(f, h, m) {
            const g = Zi(h);
            if (!g) throw new Error("header name must be a non-empty string");
            const y = F.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = fl(f))
        }
        const c = (f, h) => F.forEach(f, (m, g) => l(m, g, h));
        if (F.isPlainObject(e) || e instanceof this.constructor) c(e, r);
        else if (F.isString(e) && (e = e.trim()) && !E2(e)) c(S2(e), r);
        else if (F.isObject(e) && F.isIterable(e)) {
            let f = {},
                h, m;
            for (const g of e) {
                if (!F.isArray(g)) throw TypeError("Object iterator must return a key-value pair");
                f[m = g[0]] = (h = f[m]) ? F.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(f, r)
        } else e != null && l(r, e, i);
        return this
    }
    get(e, r) {
        if (e = Zi(e), e) {
            const i = F.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r) return a;
                if (r === !0) return b2(a);
                if (F.isFunction(r)) return r.call(this, a, i);
                if (F.isRegExp(r)) return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = Zi(e), e) {
            const i = F.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || ad(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;

        function l(c) {
            if (c = Zi(c), c) {
                const f = F.findKey(i, c);
                f && (!r || ad(i, i[f], f, r)) && (delete i[f], a = !0)
            }
        }
        return F.isArray(e) ? e.forEach(l) : l(e), a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length,
            a = !1;
        for (; i--;) {
            const l = r[i];
            (!e || ad(this, this[l], l, e, !0)) && (delete this[l], a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this,
            i = {};
        return F.forEach(this, (a, l) => {
            const c = F.findKey(i, l);
            if (c) {
                r[c] = fl(a), delete r[l];
                return
            }
            const f = e ? k2(l) : String(l).trim();
            f !== l && delete r[l], r[f] = fl(a), i[f] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return F.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && F.isArray(i) ? i.join(", ") : i)
        }), r
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)), i
    }
    static accessor(e) {
        const i = (this[av] = this[av] = {
                accessors: {}
            }).accessors,
            a = this.prototype;

        function l(c) {
            const f = Zi(c);
            i[f] || (C2(a, c), i[f] = !0)
        }
        return F.isArray(e) ? e.forEach(l) : l(e), this
    }
};
Dt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
F.reduceDescriptors(Dt.prototype, ({
    value: t
}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
});
F.freezeMethods(Dt);

function ld(t, e) {
    const r = this || Io,
        i = e || r,
        a = Dt.from(i.headers);
    let l = i.data;
    return F.forEach(t, function(f) {
        l = f.call(r, l, a.normalize(), e ? e.status : void 0)
    }), a.normalize(), l
}

function Dx(t) {
    return !!(t && t.__CANCEL__)
}
let Fo = class extends pe {
    constructor(e, r, i) {
        super(e ?? "canceled", pe.ERR_CANCELED, r, i), this.name = "CanceledError", this.__CANCEL__ = !0
    }
};

function jx(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new pe("Request failed with status code " + r.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
}

function T2(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}

function P2(t, e) {
    t = t || 10;
    const r = new Array(t),
        i = new Array(t);
    let a = 0,
        l = 0,
        c;
    return e = e !== void 0 ? e : 1e3,
        function(h) {
            const m = Date.now(),
                g = i[l];
            c || (c = m), r[a] = h, i[a] = m;
            let y = l,
                w = 0;
            for (; y !== a;) w += r[y++], y = y % t;
            if (a = (a + 1) % t, a === l && (l = (l + 1) % t), m - c < e) return;
            const E = g && m - g;
            return E ? Math.round(w * 1e3 / E) : void 0
        }
}

function _2(t, e) {
    let r = 0,
        i = 1e3 / e,
        a, l;
    const c = (m, g = Date.now()) => {
        r = g, a = null, l && (clearTimeout(l), l = null), t(...m)
    };
    return [(...m) => {
        const g = Date.now(),
            y = g - r;
        y >= i ? c(m, g) : (a = m, l || (l = setTimeout(() => {
            l = null, c(a)
        }, i - y)))
    }, () => a && c(a)]
}
const Al = (t, e, r = 3) => {
        let i = 0;
        const a = P2(50, 250);
        return _2(l => {
            const c = l.loaded,
                f = l.lengthComputable ? l.total : void 0,
                h = c - i,
                m = a(h),
                g = c <= f;
            i = c;
            const y = {
                loaded: c,
                total: f,
                progress: f ? c / f : void 0,
                bytes: h,
                rate: m || void 0,
                estimated: m && f && g ? (f - c) / m : void 0,
                event: l,
                lengthComputable: f != null,
                [e ? "download" : "upload"]: !0
            };
            t(y)
        }, r)
    },
    lv = (t, e) => {
        const r = t != null;
        return [i => e[0]({
            lengthComputable: r,
            total: t,
            loaded: i
        }), e[1]]
    },
    uv = t => (...e) => F.asap(() => t(...e)),
    R2 = St.hasStandardBrowserEnv ? ((t, e) => r => (r = new URL(r, St.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(St.origin), St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)) : () => !0,
    A2 = St.hasStandardBrowserEnv ? {
        write(t, e, r, i, a, l, c) {
            if (typeof document > "u") return;
            const f = [`${t}=${encodeURIComponent(e)}`];
            F.isNumber(r) && f.push(`expires=${new Date(r).toUTCString()}`), F.isString(i) && f.push(`path=${i}`), F.isString(a) && f.push(`domain=${a}`), l === !0 && f.push("secure"), F.isString(c) && f.push(`SameSite=${c}`), document.cookie = f.join("; ")
        },
        read(t) {
            if (typeof document > "u") return null;
            const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : null
        },
        remove(t) {
            this.write(t, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function N2(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}

function O2(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}

function Ix(t, e, r) {
    let i = !N2(e);
    return t && (i || r == !1) ? O2(t, e) : e
}
const cv = t => t instanceof Dt ? {
    ...t
} : t;

function us(t, e) {
    e = e || {};
    const r = {};

    function i(m, g, y, w) {
        return F.isPlainObject(m) && F.isPlainObject(g) ? F.merge.call({
            caseless: w
        }, m, g) : F.isPlainObject(g) ? F.merge({}, g) : F.isArray(g) ? g.slice() : g
    }

    function a(m, g, y, w) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m)) return i(void 0, m, y, w)
        } else return i(m, g, y, w)
    }

    function l(m, g) {
        if (!F.isUndefined(g)) return i(void 0, g)
    }

    function c(m, g) {
        if (F.isUndefined(g)) {
            if (!F.isUndefined(m)) return i(void 0, m)
        } else return i(void 0, g)
    }

    function f(m, g, y) {
        if (y in e) return i(m, g);
        if (y in t) return i(void 0, m)
    }
    const h = {
        url: l,
        method: l,
        data: l,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: f,
        headers: (m, g, y) => a(cv(m), cv(g), y, !0)
    };
    return F.forEach(Object.keys({
        ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype") return;
        const y = F.hasOwnProp(h, g) ? h[g] : a,
            w = y(t[g], e[g], g);
        F.isUndefined(w) && y !== f || (r[g] = w)
    }), r
}
const Fx = t => {
        const e = us({}, t);
        let {
            data: r,
            withXSRFToken: i,
            xsrfHeaderName: a,
            xsrfCookieName: l,
            headers: c,
            auth: f
        } = e;
        if (e.headers = c = Dt.from(c), e.url = Lx(Ix(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), f && c.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))), F.isFormData(r)) {
            if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
            else if (F.isFunction(r.getHeaders)) {
                const h = r.getHeaders(),
                    m = ["content-type", "content-length"];
                Object.entries(h).forEach(([g, y]) => {
                    m.includes(g.toLowerCase()) && c.set(g, y)
                })
            }
        }
        if (St.hasStandardBrowserEnv && (i && F.isFunction(i) && (i = i(e)), i || i !== !1 && R2(e.url))) {
            const h = a && l && A2.read(l);
            h && c.set(a, h)
        }
        return e
    },
    L2 = typeof XMLHttpRequest < "u",
    M2 = L2 && function(t) {
        return new Promise(function(r, i) {
            const a = Fx(t);
            let l = a.data;
            const c = Dt.from(a.headers).normalize();
            let {
                responseType: f,
                onUploadProgress: h,
                onDownloadProgress: m
            } = a, g, y, w, E, S;

            function b() {
                E && E(), S && S(), a.cancelToken && a.cancelToken.unsubscribe(g), a.signal && a.signal.removeEventListener("abort", g)
            }
            let x = new XMLHttpRequest;
            x.open(a.method.toUpperCase(), a.url, !0), x.timeout = a.timeout;

            function R() {
                if (!x) return;
                const D = Dt.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()),
                    B = {
                        data: !f || f === "text" || f === "json" ? x.responseText : x.response,
                        status: x.status,
                        statusText: x.statusText,
                        headers: D,
                        config: t,
                        request: x
                    };
                jx(function(G) {
                    r(G), b()
                }, function(G) {
                    i(G), b()
                }, B), x = null
            }
            "onloadend" in x ? x.onloadend = R : x.onreadystatechange = function() {
                !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(R)
            }, x.onabort = function() {
                x && (i(new pe("Request aborted", pe.ECONNABORTED, t, x)), x = null)
            }, x.onerror = function(M) {
                const B = M && M.message ? M.message : "Network Error",
                    K = new pe(B, pe.ERR_NETWORK, t, x);
                K.event = M || null, i(K), x = null
            }, x.ontimeout = function() {
                let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
                const B = a.transitional || Zf;
                a.timeoutErrorMessage && (M = a.timeoutErrorMessage), i(new pe(M, B.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, t, x)), x = null
            }, l === void 0 && c.setContentType(null), "setRequestHeader" in x && F.forEach(c.toJSON(), function(M, B) {
                x.setRequestHeader(B, M)
            }), F.isUndefined(a.withCredentials) || (x.withCredentials = !!a.withCredentials), f && f !== "json" && (x.responseType = a.responseType), m && ([w, S] = Al(m, !0), x.addEventListener("progress", w)), h && x.upload && ([y, E] = Al(h), x.upload.addEventListener("progress", y), x.upload.addEventListener("loadend", E)), (a.cancelToken || a.signal) && (g = D => {
                x && (i(!D || D.type ? new Fo(null, t, x) : D), x.abort(), x = null)
            }, a.cancelToken && a.cancelToken.subscribe(g), a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
            const V = T2(a.url);
            if (V && St.protocols.indexOf(V) === -1) {
                i(new pe("Unsupported protocol " + V + ":", pe.ERR_BAD_REQUEST, t));
                return
            }
            x.send(l || null)
        })
    },
    D2 = (t, e) => {
        const {
            length: r
        } = t = t ? t.filter(Boolean) : [];
        if (e || r) {
            let i = new AbortController,
                a;
            const l = function(m) {
                if (!a) {
                    a = !0, f();
                    const g = m instanceof Error ? m : this.reason;
                    i.abort(g instanceof pe ? g : new Fo(g instanceof Error ? g.message : g))
                }
            };
            let c = e && setTimeout(() => {
                c = null, l(new pe(`timeout of ${e}ms exceeded`, pe.ETIMEDOUT))
            }, e);
            const f = () => {
                t && (c && clearTimeout(c), c = null, t.forEach(m => {
                    m.unsubscribe ? m.unsubscribe(l) : m.removeEventListener("abort", l)
                }), t = null)
            };
            t.forEach(m => m.addEventListener("abort", l));
            const {
                signal: h
            } = i;
            return h.unsubscribe = () => F.asap(f), h
        }
    },
    j2 = function*(t, e) {
        let r = t.byteLength;
        if (r < e) {
            yield t;
            return
        }
        let i = 0,
            a;
        for (; i < r;) a = i + e, yield t.slice(i, a), i = a
    },
    I2 = async function*(t, e) {
        for await (const r of F2(t)) yield* j2(r, e)
    }, F2 = async function*(t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return
        }
        const e = t.getReader();
        try {
            for (;;) {
                const {
                    done: r,
                    value: i
                } = await e.read();
                if (r) break;
                yield i
            }
        } finally {
            await e.cancel()
        }
    }, dv = (t, e, r, i) => {
        const a = I2(t, e);
        let l = 0,
            c, f = h => {
                c || (c = !0, i && i(h))
            };
        return new ReadableStream({
            async pull(h) {
                try {
                    const {
                        done: m,
                        value: g
                    } = await a.next();
                    if (m) {
                        f(), h.close();
                        return
                    }
                    let y = g.byteLength;
                    if (r) {
                        let w = l += y;
                        r(w)
                    }
                    h.enqueue(new Uint8Array(g))
                } catch (m) {
                    throw f(m), m
                }
            },
            cancel(h) {
                return f(h), a.return()
            }
        }, {
            highWaterMark: 2
        })
    }, fv = 64 * 1024, {
        isFunction: nl
    } = F, V2 = (({
        Request: t,
        Response: e
    }) => ({
        Request: t,
        Response: e
    }))(F.global), {
        ReadableStream: hv,
        TextEncoder: pv
    } = F.global, mv = (t, ...e) => {
        try {
            return !!t(...e)
        } catch {
            return !1
        }
    }, B2 = t => {
        t = F.merge.call({
            skipUndefined: !0
        }, V2, t);
        const {
            fetch: e,
            Request: r,
            Response: i
        } = t, a = e ? nl(e) : typeof fetch == "function", l = nl(r), c = nl(i);
        if (!a) return !1;
        const f = a && nl(hv),
            h = a && (typeof pv == "function" ? (S => b => S.encode(b))(new pv) : async S => new Uint8Array(await new r(S).arrayBuffer())),
            m = l && f && mv(() => {
                let S = !1;
                const b = new r(St.origin, {
                    body: new hv,
                    method: "POST",
                    get duplex() {
                        return S = !0, "half"
                    }
                }).headers.has("Content-Type");
                return S && !b
            }),
            g = c && f && mv(() => F.isReadableStream(new i("").body)),
            y = {
                stream: g && (S => S.body)
            };
        a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(S => {
            !y[S] && (y[S] = (b, x) => {
                let R = b && b[S];
                if (R) return R.call(b);
                throw new pe(`Response type '${S}' is not supported`, pe.ERR_NOT_SUPPORT, x)
            })
        });
        const w = async S => {
            if (S == null) return 0;
            if (F.isBlob(S)) return S.size;
            if (F.isSpecCompliantForm(S)) return (await new r(St.origin, {
                method: "POST",
                body: S
            }).arrayBuffer()).byteLength;
            if (F.isArrayBufferView(S) || F.isArrayBuffer(S)) return S.byteLength;
            if (F.isURLSearchParams(S) && (S = S + ""), F.isString(S)) return (await h(S)).byteLength
        }, E = async (S, b) => {
            const x = F.toFiniteNumber(S.getContentLength());
            return x ?? w(b)
        };
        return async S => {
            let {
                url: b,
                method: x,
                data: R,
                signal: V,
                cancelToken: D,
                timeout: M,
                onDownloadProgress: B,
                onUploadProgress: K,
                responseType: G,
                headers: j,
                withCredentials: Z = "same-origin",
                fetchOptions: fe
            } = Fx(S), _e = e || fetch;
            G = G ? (G + "").toLowerCase() : "text";
            let Le = D2([V, D && D.toAbortSignal()], M),
                Me = null;
            const Re = Le && Le.unsubscribe && (() => {
                Le.unsubscribe()
            });
            let je;
            try {
                if (K && m && x !== "get" && x !== "head" && (je = await E(j, R)) !== 0) {
                    let A = new r(b, {
                            method: "POST",
                            body: R,
                            duplex: "half"
                        }),
                        z;
                    if (F.isFormData(R) && (z = A.headers.get("content-type")) && j.setContentType(z), A.body) {
                        const [ge, ye] = lv(je, Al(uv(K)));
                        R = dv(A.body, fv, ge, ye)
                    }
                }
                F.isString(Z) || (Z = Z ? "include" : "omit");
                const we = l && "credentials" in r.prototype,
                    de = {
                        ...fe,
                        signal: Le,
                        method: x.toUpperCase(),
                        headers: j.normalize().toJSON(),
                        body: R,
                        duplex: "half",
                        credentials: we ? Z : void 0
                    };
                Me = l && new r(b, de);
                let H = await (l ? _e(Me, fe) : _e(b, de));
                const se = g && (G === "stream" || G === "response");
                if (g && (B || se && Re)) {
                    const A = {};
                    ["status", "statusText", "headers"].forEach(le => {
                        A[le] = H[le]
                    });
                    const z = F.toFiniteNumber(H.headers.get("content-length")),
                        [ge, ye] = B && lv(z, Al(uv(B), !0)) || [];
                    H = new i(dv(H.body, fv, ge, () => {
                        ye && ye(), Re && Re()
                    }), A)
                }
                G = G || "text";
                let U = await y[F.findKey(y, G) || "text"](H, S);
                return !se && Re && Re(), await new Promise((A, z) => {
                    jx(A, z, {
                        data: U,
                        headers: Dt.from(H.headers),
                        status: H.status,
                        statusText: H.statusText,
                        config: S,
                        request: Me
                    })
                })
            } catch (we) {
                throw Re && Re(), we && we.name === "TypeError" && /Load failed|fetch/i.test(we.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, S, Me, we && we.response), {
                    cause: we.cause || we
                }) : pe.from(we, we && we.code, S, Me, we && we.response)
            }
        }
    }, U2 = new Map, Vx = t => {
        let e = t && t.env || {};
        const {
            fetch: r,
            Request: i,
            Response: a
        } = e, l = [i, a, r];
        let c = l.length,
            f = c,
            h, m, g = U2;
        for (; f--;) h = l[f], m = g.get(h), m === void 0 && g.set(h, m = f ? new Map : B2(e)), g = m;
        return m
    };
Vx();
const th = {
    http: s2,
    xhr: M2,
    fetch: {
        get: Vx
    }
};
F.forEach(th, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
});
const gv = t => `- ${t}`,
    z2 = t => F.isFunction(t) || t === null || t === !1;

function $2(t, e) {
    t = F.isArray(t) ? t : [t];
    const {
        length: r
    } = t;
    let i, a;
    const l = {};
    for (let c = 0; c < r; c++) {
        i = t[c];
        let f;
        if (a = i, !z2(i) && (a = th[(f = String(i)).toLowerCase()], a === void 0)) throw new pe(`Unknown adapter '${f}'`);
        if (a && (F.isFunction(a) || (a = a.get(e)))) break;
        l[f || "#" + c] = a
    }
    if (!a) {
        const c = Object.entries(l).map(([h, m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let f = r ? c.length > 1 ? `since :
` + c.map(gv).join(`
`) : " " + gv(c[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + f, "ERR_NOT_SUPPORT")
    }
    return a
}
const Bx = {
    getAdapter: $2,
    adapters: th
};

function ud(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Fo(null, t)
}

function yv(t) {
    return ud(t), t.headers = Dt.from(t.headers), t.data = ld.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Bx.getAdapter(t.adapter || Io.adapter, t)(t).then(function(i) {
        return ud(t), i.data = ld.call(t, t.transformResponse, i), i.headers = Dt.from(i.headers), i
    }, function(i) {
        return Dx(i) || (ud(t), i && i.response && (i.response.data = ld.call(t, t.transformResponse, i.response), i.response.headers = Dt.from(i.response.headers))), Promise.reject(i)
    })
}
const Ux = "1.13.5",
    Wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    Wl[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
});
const vv = {};
Wl.transitional = function(e, r, i) {
    function a(l, c) {
        return "[Axios v" + Ux + "] Transitional option '" + l + "'" + c + (i ? ". " + i : "")
    }
    return (l, c, f) => {
        if (e === !1) throw new pe(a(c, " has been removed" + (r ? " in " + r : "")), pe.ERR_DEPRECATED);
        return r && !vv[c] && (vv[c] = !0, console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))), e ? e(l, c, f) : !0
    }
};
Wl.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0)
};

function W2(t, e, r) {
    if (typeof t != "object") throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0;) {
        const l = i[a],
            c = e[l];
        if (c) {
            const f = t[l],
                h = f === void 0 || c(f, l, t);
            if (h !== !0) throw new pe("option " + l + " must be " + h, pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0) throw new pe("Unknown option " + l, pe.ERR_BAD_OPTION)
    }
}
const hl = {
        assertOptions: W2,
        validators: Wl
    },
    Yt = hl.validators;
let as = class {
    constructor(e) {
        this.defaults = e || {}, this.interceptors = {
            request: new ov,
            response: new ov
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const l = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? l && !String(i.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + l) : i.stack = l
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = us(this.defaults, r);
        const {
            transitional: i,
            paramsSerializer: a,
            headers: l
        } = r;
        i !== void 0 && hl.assertOptions(i, {
            silentJSONParsing: Yt.transitional(Yt.boolean),
            forcedJSONParsing: Yt.transitional(Yt.boolean),
            clarifyTimeoutError: Yt.transitional(Yt.boolean),
            legacyInterceptorReqResOrdering: Yt.transitional(Yt.boolean)
        }, !1), a != null && (F.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : hl.assertOptions(a, {
            encode: Yt.function,
            serialize: Yt.function
        }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), hl.assertOptions(r, {
            baseUrl: Yt.spelling("baseURL"),
            withXsrfToken: Yt.spelling("withXSRFToken")
        }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = l && F.merge(l.common, l[r.method]);
        l && F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
            delete l[S]
        }), r.headers = Dt.concat(c, l);
        const f = [];
        let h = !0;
        this.interceptors.request.forEach(function(b) {
            if (typeof b.runWhen == "function" && b.runWhen(r) === !1) return;
            h = h && b.synchronous;
            const x = r.transitional || Zf;
            x && x.legacyInterceptorReqResOrdering ? f.unshift(b.fulfilled, b.rejected) : f.push(b.fulfilled, b.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(b) {
            m.push(b.fulfilled, b.rejected)
        });
        let g, y = 0,
            w;
        if (!h) {
            const S = [yv.bind(this), void 0];
            for (S.unshift(...f), S.push(...m), w = S.length, g = Promise.resolve(r); y < w;) g = g.then(S[y++], S[y++]);
            return g
        }
        w = f.length;
        let E = r;
        for (; y < w;) {
            const S = f[y++],
                b = f[y++];
            try {
                E = S(E)
            } catch (x) {
                b.call(this, x);
                break
            }
        }
        try {
            g = yv.call(this, E)
        } catch (S) {
            return Promise.reject(S)
        }
        for (y = 0, w = m.length; y < w;) g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = us(this.defaults, e);
        const r = Ix(e.baseURL, e.url, e.allowAbsoluteUrls);
        return Lx(r, e.params, e.paramsSerializer)
    }
};
F.forEach(["delete", "get", "head", "options"], function(e) {
    as.prototype[e] = function(r, i) {
        return this.request(us(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
F.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(l, c, f) {
            return this.request(us(f || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: c
            }))
        }
    }
    as.prototype[e] = r(), as.prototype[e + "Form"] = r(!0)
});
let q2 = class zx {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(l) {
            r = l
        });
        const i = this;
        this.promise.then(a => {
            if (!i._listeners) return;
            let l = i._listeners.length;
            for (; l-- > 0;) i._listeners[l](a);
            i._listeners = null
        }), this.promise.then = a => {
            let l;
            const c = new Promise(f => {
                i.subscribe(f), l = f
            }).then(a);
            return c.cancel = function() {
                i.unsubscribe(l)
            }, c
        }, e(function(l, c, f) {
            i.reason || (i.reason = new Fo(l, c, f), r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController,
            r = i => {
                e.abort(i)
            };
        return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal
    }
    static source() {
        let e;
        return {
            token: new zx(function(a) {
                e = a
            }),
            cancel: e
        }
    }
};

function H2(t) {
    return function(r) {
        return t.apply(null, r)
    }
}

function K2(t) {
    return F.isObject(t) && t.isAxiosError === !0
}
const Zd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(Zd).forEach(([t, e]) => {
    Zd[e] = t
});

function $x(t) {
    const e = new as(t),
        r = bx(as.prototype.request, e);
    return F.extend(r, as.prototype, e, {
        allOwnKeys: !0
    }), F.extend(r, e, null, {
        allOwnKeys: !0
    }), r.create = function(a) {
        return $x(us(t, a))
    }, r
}
const Xe = $x(Io);
Xe.Axios = as;
Xe.CanceledError = Fo;
Xe.CancelToken = q2;
Xe.isCancel = Dx;
Xe.VERSION = Ux;
Xe.toFormData = $l;
Xe.AxiosError = pe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(e) {
    return Promise.all(e)
};
Xe.spread = H2;
Xe.isAxiosError = K2;
Xe.mergeConfig = us;
Xe.AxiosHeaders = Dt;
Xe.formToJSON = t => Mx(F.isHTMLForm(t) ? new FormData(t) : t);
Xe.getAdapter = Bx.getAdapter;
Xe.HttpStatusCode = Zd;
Xe.default = Xe;
const {
    Axios: VO,
    AxiosError: BO,
    CanceledError: UO,
    isCancel: zO,
    CancelToken: $O,
    VERSION: WO,
    all: qO,
    Cancel: HO,
    isAxiosError: KO,
    spread: QO,
    toFormData: GO,
    AxiosHeaders: YO,
    HttpStatusCode: XO,
    formToJSON: JO,
    getAdapter: ZO,
    mergeConfig: eL
} = Xe, Q2 = typeof window > "u", wv = !Q2 && window.self !== window.top, cd = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), ct = [];
for (let t = 0; t < 256; ++t) ct.push((t + 256).toString(16).slice(1));

function G2(t, e = 0) {
    return (ct[t[e + 0]] + ct[t[e + 1]] + ct[t[e + 2]] + ct[t[e + 3]] + "-" + ct[t[e + 4]] + ct[t[e + 5]] + "-" + ct[t[e + 6]] + ct[t[e + 7]] + "-" + ct[t[e + 8]] + ct[t[e + 9]] + "-" + ct[t[e + 10]] + ct[t[e + 11]] + ct[t[e + 12]] + ct[t[e + 13]] + ct[t[e + 14]] + ct[t[e + 15]]).toLowerCase()
}
let dd;
const Y2 = new Uint8Array(16);

function X2() {
    if (!dd) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        dd = crypto.getRandomValues.bind(crypto)
    }
    return dd(Y2)
}
const J2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    xv = {
        randomUUID: J2
    };

function Z2(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ?? ((a = t.rng) == null ? void 0 : a.call(t)) ?? X2();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, G2(i)
}

function eN(t, e, r) {
    return xv.randomUUID && !t ? xv.randomUUID() : Z2(t)
}
class tN extends Error {
    constructor(e, r, i, a, l) {
        super(e), this.name = "Base44Error", this.status = r, this.code = i, this.data = a, this.originalError = l
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}

function oo({
    baseURL: t,
    headers: e = {},
    token: r,
    interceptResponses: i = !0,
    onError: a
}) {
    const l = Xe.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (l.defaults.headers.common.Authorization = `Bearer ${r}`), l.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const f = eN();
        if (c.requestId = f, wv) try {
            window.parent.postMessage({
                type: "api-request-start",
                requestId: f,
                data: {
                    url: t + c.url,
                    method: c.method,
                    body: c.data instanceof FormData ? "[FormData object]" : c.data
                }
            }, "*")
        } catch {}
        return c
    }), i && l.interceptors.response.use(c => {
        var f;
        const h = (f = c.config) === null || f === void 0 ? void 0 : f.requestId;
        try {
            wv && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }, c => {
        var f, h, m, g, y, w, E, S;
        const b = ((h = (f = c.response) === null || f === void 0 ? void 0 : f.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message,
            x = new tN(b, (y = c.response) === null || y === void 0 ? void 0 : y.status, (E = (w = c.response) === null || w === void 0 ? void 0 : w.data) === null || E === void 0 ? void 0 : E.code, (S = c.response) === null || S === void 0 ? void 0 : S.data, c);
        return a == null || a(x), Promise.reject(x)
    }), l
}

function Sv(t) {
    const {
        axios: e,
        appId: r,
        getSocket: i
    } = t;
    return new Proxy({}, {
        get(a, l) {
            if (!(typeof l != "string" || l === "then" || l.startsWith("_"))) return rN(e, r, l, i)
        }
    })
}

function nN(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r), null
    }
}

function rN(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(l, c, f, h) {
            const m = {};
            return l && (m.sort = l), c && (m.limit = c), f && (m.skip = f), h && (m.fields = Array.isArray(h) ? h.join(",") : h), t.get(a, {
                params: m
            })
        },
        async filter(l, c, f, h, m) {
            const g = {
                q: JSON.stringify(l)
            };
            return c && (g.sort = c), f && (g.limit = f), h && (g.skip = h), m && (g.fields = Array.isArray(m) ? m.join(",") : m), t.get(a, {
                params: g
            })
        },
        async get(l) {
            return t.get(`${a}/${l}`)
        },
        async create(l) {
            return t.post(a, l)
        },
        async update(l, c) {
            return t.put(`${a}/${l}`, c)
        },
        async delete(l) {
            return t.delete(`${a}/${l}`)
        },
        async deleteMany(l) {
            return t.delete(a, {
                data: l
            })
        },
        async bulkCreate(l) {
            return t.post(`${a}/bulk`, l)
        },
        async importEntities(l) {
            const c = new FormData;
            return c.append("file", l, l.name), t.post(`${a}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(l) {
            const c = `entities:${e}:${r}`;
            return i().subscribeToRoom(c, {
                update_model: m => {
                    const g = nN(m.data);
                    if (g) try {
                        l(g)
                    } catch (y) {
                        console.error("[Base44 SDK] Subscription callback error:", y)
                    }
                }
            })
        }
    }
}

function sN(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim())) throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim())) throw new Error("Operation ID is required and cannot be empty");
            const {
                pathParams: l,
                queryParams: c,
                ...f
            } = a ?? {}, h = {
                ...f,
                ...l && {
                    path_params: l
                },
                ...c && {
                    query_params: c
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}

function bv(t, e) {
    const r = sN(t, e);
    return new Proxy({}, {
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_"))) return a === "custom" ? r : new Proxy({}, {
                get(l, c) {
                    if (!(typeof c != "string" || c === "then" || c.startsWith("_"))) return async f => {
                        if (typeof f == "string") throw new Error(`Integration ${c} must receive an object with named parameters, received: ${f}`);
                        let h, m;
                        return f instanceof FormData || f && Object.values(f).some(g => g instanceof File) ? (h = new FormData, Object.keys(f).forEach(g => {
                            f[g] instanceof File ? h.append(g, f[g], f[g].name) : typeof f[g] == "object" && f[g] !== null ? h.append(g, JSON.stringify(f[g])) : h.append(g, f[g])
                        }), m = "multipart/form-data") : (h = f, m = "application/json"), a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${c}`, h || f, {
                            headers: {
                                "Content-Type": m
                            }
                        }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`, h || f, {
                            headers: {
                                "Content-Type": m
                            }
                        })
                    }
                }
            })
        }
    })
}

function iN(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u") throw new Error("Login method can only be used in a browser environment");
            const l = a ? new URL(a, window.location.origin).toString() : window.location.href,
                c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(l)}`;
            window.location.href = c
        },
        loginWithProvider(a, l = "/") {
            const c = new URL(l, window.location.origin).toString(),
                f = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a==="google"?"":`/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${f}`;
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization, typeof window < "u") {
                if (window.localStorage) try {
                    window.localStorage.removeItem("base44_access_token"), window.localStorage.removeItem("token")
                } catch (f) {
                    console.error("Failed to remove token from localStorage:", f)
                }
                const l = a || window.location.href,
                    c = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(l)}`;
                window.location.href = c
            }
        },
        setToken(a, l = !0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`, e.defaults.headers.common.Authorization = `Bearer ${a}`, l && typeof window < "u" && window.localStorage)) try {
                window.localStorage.setItem("base44_access_token", a), window.localStorage.setItem("token", a)
            } catch (c) {
                console.error("Failed to save token to localStorage:", c)
            }
        },
        async loginViaEmailPassword(a, l, c) {
            var f;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                        email: a,
                        password: l,
                        ...c && {
                            turnstile_token: c
                        }
                    }),
                    {
                        access_token: m,
                        user: g
                    } = h;
                return m && this.setToken(m), {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((f = h.response) === null || f === void 0 ? void 0 : f.status) === 401 && await this.logout(), h
            }
        },
        async isAuthenticated() {
            try {
              return true;
                // return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(a, l) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: l
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({
            email: a,
            otpCode: l
        }) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: l
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({
            resetToken: a,
            newPassword: l
        }) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: l
            })
        },
        changePassword({
            userId: a,
            currentPassword: l,
            newPassword: c
        }) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: l,
                new_password: c
            })
        }
    }
}

function oN(t, e, r) {
    return {
        async getAccessToken(i) {
            const a = `/apps/${e}/auth/sso/accesstoken/${i}`,
                l = {};
            return r && (l["on-behalf-of"] = `Bearer ${r}`), t.get(a, {
                headers: l
            })
        }
    }
}

function aN(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            const l = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: l.access_token,
                connectionConfig: (i = l.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}

function nh(t = {}) {
    const {
        storageKey: e = "base44_access_token",
        paramName: r = "access_token",
        saveToStorage: i = !0,
        removeFromUrl: a = !0
    } = t;
    let l = null;
    if (typeof window < "u" && window.location) try {
        const c = new URLSearchParams(window.location.search);
        if (l = c.get(r), l) {
            if (i && lN(l, {
                    storageKey: e
                }), a) {
                c.delete(r);
                const f = `${window.location.pathname}${c.toString()?`?${c.toString()}`:""}${window.location.hash}`;
                window.history.replaceState({}, document.title, f)
            }
            return l
        }
    } catch (c) {
        console.error("Error retrieving token from URL:", c)
    }
    if (typeof window < "u" && window.localStorage) try {
        return l = window.localStorage.getItem(e), l
    } catch (c) {
        console.error("Error retrieving token from local storage:", c)
    }
    return null
}

function lN(t, e) {
    const {
        storageKey: r = "base44_access_token"
    } = e;
    if (typeof window > "u" || !window.localStorage || !t) return !1;
    try {
        return window.localStorage.setItem(r, t), window.localStorage.setItem("token", t), !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i), !1
    }
}

function Ev(t, e) {
    return {
        async invoke(r, i) {
            if (typeof i == "string") throw new Error(`Function ${r} must receive an object with named parameters, received: ${i}`);
            let a, l;
            return i instanceof FormData || i && Object.values(i).some(c => c instanceof File) ? (a = new FormData, Object.keys(i).forEach(c => {
                i[c] instanceof File ? a.append(c, i[c], i[c].name) : typeof i[c] == "object" && i[c] !== null ? a.append(c, JSON.stringify(i[c])) : a.append(c, i[c])
            }), l = "multipart/form-data") : (a = i, l = "application/json"), t.post(`/apps/${e}/functions/${r}`, a || i, {
                headers: {
                    "Content-Type": l
                }
            })
        }
    }
}

function kv({
    axios: t,
    getSocket: e,
    appId: r,
    serverUrl: i,
    token: a
}) {
    const l = `/apps/${r}/agents`,
        c = {},
        f = () => t.get(`${l}/conversations`),
        h = S => t.get(`${l}/conversations/${S}`);
    return {
        getConversations: f,
        getConversation: h,
        listConversations: S => t.get(`${l}/conversations`, {
            params: S
        }),
        createConversation: S => t.post(`${l}/conversations`, S),
        addMessage: async (S, b) => t.post(`${l}/conversations/v2/${S.id}/messages`, b),
        subscribeToConversation: (S, b) => {
            const x = `/agent-conversations/${S}`,
                R = e(),
                V = h(S).then(D => (c[S] = D, D));
            return R.subscribeToRoom(x, {
                connect: () => {},
                update_model: async ({
                    data: D
                }) => {
                    const M = JSON.parse(D);
                    if (M._message) {
                        await V;
                        const B = M._message,
                            K = c[S];
                        if (K) {
                            const G = K.messages || [],
                                j = G.findIndex(fe => fe.id === B.id),
                                Z = j !== -1 ? G.map((fe, _e) => _e === j ? B : fe) : [...G, B];
                            c[S] = {
                                ...K,
                                messages: Z
                            }, b == null || b(c[S])
                        }
                    }
                }
            })
        },
        getWhatsAppConnectURL: S => {
            const b = `${i}/api/apps/${r}/agents/${encodeURIComponent(S)}/whatsapp`,
                x = a ?? nh();
            return x ? `${b}?token=${x}` : b
        }
    }
}

function Cv(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            // await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i = {}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i = {}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}

function uN(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin") throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Cn = Object.create(null);
Cn.open = "0";
Cn.close = "1";
Cn.ping = "2";
Cn.pong = "3";
Cn.message = "4";
Cn.upgrade = "5";
Cn.noop = "6";
const pl = Object.create(null);
Object.keys(Cn).forEach(t => {
    pl[Cn[t]] = t
});
const ef = {
        type: "error",
        data: "parser error"
    },
    Wx = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    qx = typeof ArrayBuffer == "function",
    Hx = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer,
    rh = ({
        type: t,
        data: e
    }, r, i) => Wx && e instanceof Blob ? r ? i(e) : Tv(e, i) : qx && (e instanceof ArrayBuffer || Hx(e)) ? r ? i(e) : Tv(new Blob([e]), i) : i(Cn[t] + (e || "")),
    Tv = (t, e) => {
        const r = new FileReader;
        return r.onload = function() {
            const i = r.result.split(",")[1];
            e("b" + (i || ""))
        }, r.readAsDataURL(t)
    };

function Pv(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
}
let fd;

function cN(t, e) {
    if (Wx && t.data instanceof Blob) return t.data.arrayBuffer().then(Pv).then(e);
    if (qx && (t.data instanceof ArrayBuffer || Hx(t.data))) return e(Pv(t.data));
    rh(t, !1, r => {
        fd || (fd = new TextEncoder), e(fd.encode(r))
    })
}
const _v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    ao = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < _v.length; t++) ao[_v.charCodeAt(t)] = t;
const dN = t => {
        let e = t.length * .75,
            r = t.length,
            i, a = 0,
            l, c, f, h;
        t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
        const m = new ArrayBuffer(e),
            g = new Uint8Array(m);
        for (i = 0; i < r; i += 4) l = ao[t.charCodeAt(i)], c = ao[t.charCodeAt(i + 1)], f = ao[t.charCodeAt(i + 2)], h = ao[t.charCodeAt(i + 3)], g[a++] = l << 2 | c >> 4, g[a++] = (c & 15) << 4 | f >> 2, g[a++] = (f & 3) << 6 | h & 63;
        return m
    },
    fN = typeof ArrayBuffer == "function",
    sh = (t, e) => {
        if (typeof t != "string") return {
            type: "message",
            data: Kx(t, e)
        };
        const r = t.charAt(0);
        return r === "b" ? {
            type: "message",
            data: hN(t.substring(1), e)
        } : pl[r] ? t.length > 1 ? {
            type: pl[r],
            data: t.substring(1)
        } : {
            type: pl[r]
        } : ef
    },
    hN = (t, e) => {
        if (fN) {
            const r = dN(t);
            return Kx(r, e)
        } else return {
            base64: !0,
            data: t
        }
    },
    Kx = (t, e) => {
        switch (e) {
            case "blob":
                return t instanceof Blob ? t : new Blob([t]);
            case "arraybuffer":
            default:
                return t instanceof ArrayBuffer ? t : t.buffer
        }
    },
    Qx = "",
    pN = (t, e) => {
        const r = t.length,
            i = new Array(r);
        let a = 0;
        t.forEach((l, c) => {
            rh(l, !1, f => {
                i[c] = f, ++a === r && e(i.join(Qx))
            })
        })
    },
    mN = (t, e) => {
        const r = t.split(Qx),
            i = [];
        for (let a = 0; a < r.length; a++) {
            const l = sh(r[a], e);
            if (i.push(l), l.type === "error") break
        }
        return i
    };

function gN() {
    return new TransformStream({
        transform(t, e) {
            cN(t, r => {
                const i = r.length;
                let a;
                if (i < 126) a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 126), l.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const l = new DataView(a.buffer);
                    l.setUint8(0, 127), l.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128), e.enqueue(a), e.enqueue(r)
            })
        }
    })
}
let hd;

function rl(t) {
    return t.reduce((e, r) => e + r.length, 0)
}

function sl(t, e) {
    if (t[0].length === e) return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++) r[a] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)), r
}

function yN(t, e) {
    hd || (hd = new TextDecoder);
    const r = [];
    let i = 0,
        a = -1,
        l = !1;
    return new TransformStream({
        transform(c, f) {
            for (r.push(c);;) {
                if (i === 0) {
                    if (rl(r) < 1) break;
                    const h = sl(r, 1);
                    l = (h[0] & 128) === 128, a = h[0] & 127, a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (rl(r) < 2) break;
                    const h = sl(r, 2);
                    a = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), i = 3
                } else if (i === 2) {
                    if (rl(r) < 8) break;
                    const h = sl(r, 8),
                        m = new DataView(h.buffer, h.byteOffset, h.length),
                        g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        f.enqueue(ef);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4), i = 3
                } else {
                    if (rl(r) < a) break;
                    const h = sl(r, a);
                    f.enqueue(sh(l ? h : hd.decode(h), e)), i = 0
                }
                if (a === 0 || a > t) {
                    f.enqueue(ef);
                    break
                }
            }
        }
    })
}
const Gx = 4;

function et(t) {
    if (t) return vN(t)
}

function vN(t) {
    for (var e in et.prototype) t[e] = et.prototype[e];
    return t
}
et.prototype.on = et.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
};
et.prototype.once = function(t, e) {
    function r() {
        this.off(t, r), e.apply(this, arguments)
    }
    return r.fn = e, this.on(t, r), this
};
et.prototype.off = et.prototype.removeListener = et.prototype.removeAllListeners = et.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var r = this._callbacks["$" + t];
    if (!r) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + t], this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a], i === e || i.fn === e) {
            r.splice(a, 1);
            break
        } return r.length === 0 && delete this._callbacks["$" + t], this
};
et.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i) r[i].apply(this, e)
    }
    return this
};
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
};
et.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
};
const ql = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0),
    en = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    wN = "arraybuffer";

function Yx(t, ...e) {
    return e.reduce((r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]), r), {})
}
const xN = en.setTimeout,
    SN = en.clearTimeout;

function Hl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = xN.bind(en), t.clearTimeoutFn = SN.bind(en)) : (t.setTimeoutFn = en.setTimeout.bind(en), t.clearTimeoutFn = en.clearTimeout.bind(en))
}
const bN = 1.33;

function EN(t) {
    return typeof t == "string" ? kN(t) : Math.ceil((t.byteLength || t.size) * bN)
}

function kN(t) {
    let e = 0,
        r = 0;
    for (let i = 0, a = t.length; i < a; i++) e = t.charCodeAt(i), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++, r += 4);
    return r
}

function Xx() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function CN(t) {
    let e = "";
    for (let r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}

function TN(t) {
    let e = {},
        r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let l = r[i].split("=");
        e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
    }
    return e
}
class PN extends Error {
    constructor(e, r, i) {
        super(e), this.description = r, this.context = i, this.type = "TransportError"
    }
}
class ih extends et {
    constructor(e) {
        super(), this.writable = !1, Hl(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new PN(e, r, i)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(e) {
        const r = sh(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = CN(e);
        return r.length ? "?" + r : ""
    }
}
class _N extends ih {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused", e()
        };
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++, this.once("pollComplete", function() {
                --i || r()
            })), this.writable || (i++, this.once("drain", function() {
                --i || r()
            }))
        } else r()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(i)
        };
        mN(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1, pN(e, r => {
            this.doWrite(r, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const e = this.opts.secure ? "https" : "http",
            r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Xx()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r)
    }
}
let Jx = !1;
try {
    Jx = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const RN = Jx;

function AN() {}
class NN extends _N {
    constructor(e) {
        if (super(e), typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r), i.on("error", (a, l) => {
            this.onError("xhr post error", a, l)
        })
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }), this.pollXhr = e
    }
}
class kn extends et {
    constructor(e, r, i) {
        super(), this.createRequest = e, Hl(this, i), this._opts = i, this._method = i.method || "GET", this._uri = r, this._data = i.data !== void 0 ? i.data : null, this._create()
    }
    _create() {
        var e;
        const r = Yx(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST") try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}(e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }, 0))
            }, i.send(this._data)
        } catch (a) {
            this.setTimeoutFn(() => {
                this._onError(a)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = kn.requestsCount++, kn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr), this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = AN, e) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete kn.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
kn.requestsCount = 0;
kn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Rv);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide" in en ? "pagehide" : "unload";
        addEventListener(t, Rv, !1)
    }
}

function Rv() {
    for (let t in kn.requests) kn.requests.hasOwnProperty(t) && kn.requests[t].abort()
}
const ON = (function() {
    const t = Zx({
        xdomain: !1
    });
    return t && t.responseType !== null
})();
class LN extends NN {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = ON && !r
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts), new kn(Zx, this.uri(), e)
    }
}

function Zx(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || RN)) return new XMLHttpRequest
    } catch {}
    if (!e) try {
        return new en[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const e1 = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class MN extends ih {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri(),
            r = this.opts.protocols,
            i = e1 ? {} : Yx(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            rh(i, this.supportsBinary, l => {
                try {
                    this.doWrite(i, l)
                } catch {}
                a && ql(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws",
            r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = Xx()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r)
    }
}
const pd = en.WebSocket || en.MozWebSocket;
class DN extends MN {
    createSocket(e, r, i) {
        return e1 ? new pd(e, r, i) : r ? new pd(e, r) : new pd(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class jN extends ih {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(e => {
            this.onError("webtransport error", e)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(e => {
                const r = yN(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = e.readable.pipeThrough(r).getReader(),
                    a = gN();
                a.readable.pipeTo(e.writable), this._writer = a.writable.getWriter();
                const l = () => {
                    i.read().then(({
                        done: f,
                        value: h
                    }) => {
                        f || (this.onPacket(h), l())
                    }).catch(f => {})
                };
                l();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`), this._writer.write(c).then(() => this.onOpen())
            })
        })
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            this._writer.write(i).then(() => {
                a && ql(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const IN = {
        websocket: DN,
        webtransport: jN,
        polling: LN
    },
    FN = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    VN = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function tf(t) {
    if (t.length > 8e3) throw "URI too long";
    const e = t,
        r = t.indexOf("["),
        i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = FN.exec(t || ""),
        l = {},
        c = 14;
    for (; c--;) l[VN[c]] = a[c] || "";
    return r != -1 && i != -1 && (l.source = e, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = BN(l, l.path), l.queryKey = UN(l, l.query), l
}

function BN(t, e) {
    const r = /\/{2,9}/g,
        i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i
}

function UN(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, l) {
        a && (r[a] = l)
    }), r
}
const nf = typeof addEventListener == "function" && typeof removeEventListener == "function",
    ml = [];
nf && addEventListener("offline", () => {
    ml.forEach(t => t())
}, !1);
class kr extends et {
    constructor(e, r) {
        if (super(), this.binaryType = wN, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
            const i = tf(e);
            r.hostname = i.host, r.secure = i.protocol === "https" || i.protocol === "wss", r.port = i.port, i.query && (r.query = i.query)
        } else r.host && (r.hostname = tf(r.host).host);
        Hl(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a), this._transportsByName[a] = i
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = TN(this.opts.query)), nf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, ml.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = Gx, r.transport = e, this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const e = this.opts.rememberUpgrade && kr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(), this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open", kr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data, this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                break
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += EN(a)), i > 0 && r > this._maxPayload) return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, ql(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r, r = void 0), typeof i == "function" && (a = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
        i = i || {}, i.compress = i.compress !== !1;
        const l = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", l), this.writeBuffer.push(l), a && this.once("flush", a), this.flush()
    }
    close() {
        const e = () => {
                this._onClose("forced close"), this.transport.close()
            },
            r = () => {
                this.off("upgrade", r), this.off("upgradeError", r), e()
            },
            i = () => {
                this.once("upgrade", r), this.once("upgradeError", r)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }) : this.upgrading ? i() : e()), this
    }
    _onError(e) {
        if (kr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", e), this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), nf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const i = ml.indexOf(this._offlineEventListener);
                i !== -1 && ml.splice(i, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
kr.protocol = Gx;
class zN extends kr {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++) this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e),
            i = !1;
        kr.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]), r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", r), !r) return;
                        kr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                            i || this.readyState !== "closed" && (g(), this.setTransport(r), r.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name, this.emitReserved("upgradeError", w)
                    }
            }))
        };

        function l() {
            i || (i = !0, g(), r.close(), r = null)
        }
        const c = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name, l(), this.emitReserved("upgradeError", w)
        };

        function f() {
            c("transport closed")
        }

        function h() {
            c("socket closed")
        }

        function m(y) {
            r && y.name !== r.name && l()
        }
        const g = () => {
            r.removeListener("open", a), r.removeListener("error", c), r.removeListener("close", f), this.off("close", h), this.off("upgrading", m)
        };
        r.once("open", a), r.once("error", c), r.once("close", f), this.once("close", h), this.once("upgrading", m), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
            i || r.open()
        }, 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++) ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let $N = class extends zN {
    constructor(e, r = {}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => IN[a]).filter(a => !!a)), super(e, i)
    }
};

function WN(t, e = "", r) {
    let i = t;
    r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), i = tf(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
    const l = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + l + ":" + i.port + e, i.href = i.protocol + "://" + l + (r && r.port === i.port ? "" : ":" + i.port), i
}
const qN = typeof ArrayBuffer == "function",
    HN = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer,
    t1 = Object.prototype.toString,
    KN = typeof Blob == "function" || typeof Blob < "u" && t1.call(Blob) === "[object BlobConstructor]",
    QN = typeof File == "function" || typeof File < "u" && t1.call(File) === "[object FileConstructor]";

function oh(t) {
    return qN && (t instanceof ArrayBuffer || HN(t)) || KN && t instanceof Blob || QN && t instanceof File
}

function gl(t, e) {
    if (!t || typeof t != "object") return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (gl(t[r])) return !0;
        return !1
    }
    if (oh(t)) return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1) return gl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && gl(t[r])) return !0;
    return !1
}

function GN(t) {
    const e = [],
        r = t.data,
        i = t;
    return i.data = rf(r, e), i.attachments = e.length, {
        packet: i,
        buffers: e
    }
}

function rf(t, e) {
    if (!t) return t;
    if (oh(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t), r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++) r[i] = rf(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = rf(t[i], e));
        return r
    }
    return t
}

function YN(t, e) {
    return t.data = sf(t.data, e), delete t.attachments, t
}

function sf(t, e) {
    if (!t) return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++) t[r] = sf(t[r], e);
    else if (typeof t == "object")
        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r] = sf(t[r], e));
    return t
}
const XN = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var ke;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
})(ke || (ke = {}));
class JN {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === ke.EVENT || e.type === ke.ACK) && gl(e) ? this.encodeAsBinary({
            type: e.type === ke.EVENT ? ke.BINARY_EVENT : ke.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === ke.BINARY_EVENT || e.type === ke.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r
    }
    encodeAsBinary(e) {
        const r = GN(e),
            i = this.encodeAsString(r.packet),
            a = r.buffers;
        return a.unshift(i), a
    }
}
class ah extends et {
    constructor(e) {
        super(), this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === ke.BINARY_EVENT;
            i || r.type === ke.BINARY_ACK ? (r.type = i ? ke.EVENT : ke.ACK, this.reconstructor = new ZN(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (oh(e) || e.base64)
            if (this.reconstructor) r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (ke[i.type] === void 0) throw new Error("unknown packet type " + i.type);
        if (i.type === ke.BINARY_EVENT || i.type === ke.BINARY_ACK) {
            const l = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length;);
            const c = e.substring(l, r);
            if (c != Number(c) || e.charAt(r) !== "-") throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const l = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length););
            i.nsp = e.substring(l, r)
        } else i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const l = r + 1;
            for (; ++r;) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length) break
            }
            i.id = Number(e.substring(l, r + 1))
        }
        if (e.charAt(++r)) {
            const l = this.tryParse(e.substr(r));
            if (ah.isPayloadValid(i.type, l)) i.data = l;
            else throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
            case ke.CONNECT:
                return Av(r);
            case ke.DISCONNECT:
                return r === void 0;
            case ke.CONNECT_ERROR:
                return typeof r == "string" || Av(r);
            case ke.EVENT:
            case ke.BINARY_EVENT:
                return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && XN.indexOf(r[0]) === -1);
            case ke.ACK:
            case ke.BINARY_ACK:
                return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class ZN {
    constructor(e) {
        this.packet = e, this.buffers = [], this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            const r = YN(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}

function Av(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const eO = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: ah,
    Encoder: JN,
    get PacketType() {
        return ke
    }
}, Symbol.toStringTag, {
    value: "Module"
}));

function fn(t, e, r) {
    return t.on(e, r),
        function() {
            t.off(e, r)
        }
}
const tO = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class n1 extends et {
    constructor(e, r, i) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const e = this.io;
        this.subs = [fn(e, "open", this.onopen.bind(this)), fn(e, "packet", this.onpacket.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this
    }
    emit(e, ...r) {
        var i, a, l;
        if (tO.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(r), this;
        const c = {
            type: ke.EVENT,
            data: r
        };
        if (c.options = {}, c.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
            const g = this.ids++,
                y = r.pop();
            this._registerAckCallback(g, y), c.id = g
        }
        const f = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable,
            h = this.connected && !(!((l = this.io.engine) === null || l === void 0) && l._hasPingExpired());
        return this.flags.volatile && !f || (h ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const l = this.io.setTimeoutFn(() => {
                delete this.acks[e];
                for (let f = 0; f < this.sendBuffer.length; f++) this.sendBuffer[f].id === e && this.sendBuffer.splice(f, 1);
                r.call(this, new Error("operation has timed out"))
            }, a),
            c = (...f) => {
                this.io.clearTimeoutFn(l), r.apply(this, f)
            };
        c.withError = !0, this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise((i, a) => {
            const l = (c, f) => c ? a(c) : i(f);
            l.withError = !0, r.push(l), this.emit(e, ...r)
        })
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((a, ...l) => (this._queue[0], a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), r && r(a)) : (this._queue.shift(), r && r(null, ...l)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: ke.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e], i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(e) {
        if (e.nsp === this.nsp) switch (e.type) {
            case ke.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case ke.EVENT:
            case ke.BINARY_EVENT:
                this.onevent(e);
                break;
            case ke.ACK:
            case ke.BINARY_ACK:
                this.onack(e);
                break;
            case ke.DISCONNECT:
                this.ondisconnect();
                break;
            case ke.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data, this.emitReserved("connect_error", i);
                break
        }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r) i.apply(this, e)
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0, r.packet({
                type: ke.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e), this.packet(e)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: ke.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(e) {
        return this.flags.timeout = e, this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
    }
    offAny(e) {
        if (!this._anyListeners) return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r) i.apply(this, e.data)
        }
    }
}

function ci(t) {
    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
}
ci.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(),
            r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
};
ci.prototype.reset = function() {
    this.attempts = 0
};
ci.prototype.setMin = function(t) {
    this.ms = t
};
ci.prototype.setMax = function(t) {
    this.max = t
};
ci.prototype.setJitter = function(t) {
    this.jitter = t
};
class of extends et {
    constructor(e, r) {
        var i;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Hl(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new ci({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
        const a = r.parser || eO;
        this.encoder = new a.Encoder, this.decoder = new a.Decoder, this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new $N(this.uri, this.opts);
        const r = this.engine,
            i = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const a = fn(r, "open", function() {
                i.onopen(), e && e()
            }),
            l = f => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", f), e ? e(f) : this.maybeReconnectOnOpen()
            },
            c = fn(r, "error", l);
        if (this._timeout !== !1) {
            const f = this._timeout,
                h = this.setTimeoutFn(() => {
                    a(), l(new Error("timeout")), r.close()
                }, f);
            this.opts.autoUnref && h.unref(), this.subs.push(() => {
                this.clearTimeoutFn(h)
            })
        }
        return this.subs.push(a), this.subs.push(c), this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const e = this.engine;
        this.subs.push(fn(e, "ping", this.onping.bind(this)), fn(e, "data", this.ondata.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this)), fn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        ql(() => {
            this.emitReserved("packet", e)
        }, this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new n1(this, e, r), this.nsps[e] = i), i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active) return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++) this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }))
            }, r);
            this.opts.autoUnref && i.unref(), this.subs.push(() => {
                this.clearTimeoutFn(i)
            })
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
    }
}
const eo = {};

function yl(t, e) {
    typeof t == "object" && (e = t, t = void 0), e = e || {};
    const r = WN(t, e.path || "/socket.io"),
        i = r.source,
        a = r.id,
        l = r.path,
        c = eo[a] && l in eo[a].nsps,
        f = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return f ? h = new of(i, e) : (eo[a] || (eo[a] = new of(i, e)), h = eo[a]), r.query && !e.query && (e.query = r.queryKey), h.socket(r.path, e)
}
Object.assign(yl, {
    Manager: of,
    Socket: n1,
    io: yl,
    connect: yl
});

function Nv(t, e) {
    var r;
    const i = yl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : nh()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id), (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }), i.on("update_model", async a => {
        var l;
        return (l = e.update_model) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i.on("error", async a => {
        var l;
        return (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i.on("connect_error", async a => {
        var l;
        return console.error("connect_error", a), (l = e.error) === null || l === void 0 ? void 0 : l.call(e, a)
    }), i
}

function nO({
    config: t
}) {
    let e = {
        ...t
    };
    const r = {},
        i = {
            connect: async () => {
                const E = [];
                Object.keys(r).forEach(S => {
                    h(S);
                    const b = y(S);
                    b == null || b.forEach(({
                        connect: x
                    }) => {
                        const R = async () => x == null ? void 0 : x();
                        E.push(R())
                    })
                }), await Promise.all(E)
            },
            update_model: async E => {
                const b = y(E.room).map(x => {
                    var R;
                    return (R = x.update_model) === null || R === void 0 ? void 0 : R.call(x, E)
                });
                await Promise.all(b)
            },
            error: async E => {
                console.error("error", E);
                const S = Object.values(r).flat().map(b => {
                    var x;
                    return (x = b.error) === null || x === void 0 ? void 0 : x.call(b, E)
                });
                await Promise.all(S)
            }
        };
    let a = Nv(t, i);

    function l() {
        c()
    }

    function c() {
        a && a.disconnect()
    }

    function f(E) {
        l(), e = {
            ...e,
            ...E
        }, a = Nv(e, i)
    }

    function h(E) {
        a.emit("join", E)
    }

    function m(E) {
        a.emit("leave", E)
    }
    async function g(E, S) {
        var b;
        const x = JSON.stringify(S);
        return (b = i.update_model) === null || b === void 0 ? void 0 : b.call(i, {
            room: E,
            data: x
        })
    }

    function y(E) {
        return r[E]
    }
    return {
        socket: a,
        subscribeToRoom: (E, S) => (r[E] || (h(E), r[E] = []), r[E].push(S), () => {
            var b, x;
            r[E] = (x = (b = r[E]) === null || b === void 0 ? void 0 : b.filter(R => R !== S)) !== null && x !== void 0 ? x : [], r[E].length === 0 && m(E)
        }),
        updateConfig: f,
        updateModel: g,
        disconnect: c
    }
}
const to = typeof window < "u" ? window : {
    base44SharedInstances: {}
};

function rO(t, e) {
    return to.base44SharedInstances || (to.base44SharedInstances = {}), to.base44SharedInstances[t] || (to.base44SharedInstances[t] = {
        instance: e()
    }), to.base44SharedInstances[t].instance
}
const sO = "__user_heartbeat_event__",
    iO = "__initialization_event__",
    oO = "__session_duration_event__",
    Ov = "analytics-enable",
    Lv = "base44_analytics_session_id",
    aO = {
        enabled: !0,
        maxQueueSize: 1e3,
        throttleTime: 1e3,
        batchSize: 30,
        heartBeatInterval: 60 * 1e3
    },
    lO = "analytics",
    De = rO(lO, () => ({
        requestsQueue: [],
        isProcessing: !1,
        isHeartBeatProcessing: !1,
        wasInitializationTracked: !1,
        sessionContext: null,
        sessionStartTime: null,
        config: {
            ...aO,
            ...gO()
        }
    })),
    uO = ({
        axiosClient: t,
        serverUrl: e,
        appId: r,
        userAuthModule: i
    }) => {
        var a;
        const {
            maxQueueSize: l,
            throttleTime: c,
            batchSize: f
        } = De.config;
        if (!(!((a = De.config) === null || a === void 0) && a.enabled)) return {
            track: () => {},
            cleanup: () => {}
        };
        let h;
        const m = `${e}/api/apps/${r}/analytics/track/batch`,
            g = async D => {
                await t.request({
                    method: "POST",
                    url: `/apps/${r}/analytics/track/batch`,
                    data: {
                        events: D
                    }
                })
            }, y = D => {
                try {
                    const M = JSON.stringify({
                            events: D
                        }),
                        B = new Blob([M], {
                            type: "application/json"
                        });
                    return typeof navigator > "u" || M.length > 6e4 || !navigator.sendBeacon(m, B)
                } catch {
                    return !1
                }
            }, w = async (D, M = {}) => {
                if (D.length === 0) return;
                const B = await mO(i),
                    K = D.map(pO(B));
                try {
                    (!M.isBeacon || !y(K)) && await g(K)
                } catch {}
            }, E = () => {
                Dv(w, {
                    throttleTime: c,
                    batchSize: f
                })
            }, S = D => {
                if (De.requestsQueue.length >= l) return;
                const M = hO();
                De.requestsQueue.push({
                    ...D,
                    ...M
                }), E()
            }, b = () => {
                Dv(w, {
                    throttleTime: c,
                    batchSize: f
                }), h = jv(S), dO()
            }, x = () => {
                Mv(), h == null || h(), fO(S);
                const D = De.requestsQueue.splice(0);
                w(D, {
                    isBeacon: !0
                })
            }, R = () => {
                typeof window > "u" || (document.visibilityState === "hidden" ? x() : document.visibilityState === "visible" && b())
            }, V = () => {
                Mv(), h == null || h(), typeof window < "u" && window.removeEventListener("visibilitychange", R)
            };
        return E(), h = jv(S), cO(S), typeof window < "u" && window.addEventListener("visibilitychange", R), {
            track: S,
            cleanup: V
        }
    };

function Mv() {
    De.isProcessing = !1
}
async function Dv(t, e) {
    if (De.isProcessing) return;
    De.isProcessing = !0;
    const {
        throttleTime: r = 1e3,
        batchSize: i = 30
    } = e ?? {};
    for (; De.isProcessing && De.requestsQueue.length > 0;) {
        const a = De.requestsQueue.splice(0, i);
        a.length && await t(a), await new Promise(l => setTimeout(l, r))
    }
    De.isProcessing = !1
}

function jv(t) {
    var e;
    if (De.isHeartBeatProcessing || ((e = De.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10) return () => {};
    De.isHeartBeatProcessing = !0;
    const r = setInterval(() => {
        t({
            eventName: sO
        })
    }, De.config.heartBeatInterval);
    return () => {
        clearInterval(r), De.isHeartBeatProcessing = !1
    }
}

function cO(t) {
    typeof window > "u" || De.wasInitializationTracked || (De.wasInitializationTracked = !0, t({
        eventName: iO,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}

function dO() {
    typeof window > "u" || De.sessionStartTime !== null || (De.sessionStartTime = new Date().toISOString())
}

function fO(t) {
    if (typeof window > "u" || De.sessionStartTime === null) return;
    const e = new Date().getTime() - new Date(De.sessionStartTime).getTime();
    De.sessionStartTime = null, t({
        eventName: oO,
        properties: {
            sessionDuration: e
        }
    })
}

function hO() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}

function pO(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let md = null;
async function mO(t) {
    if (!De.sessionContext) {
        if (!md) {
            const e = yO();
            md = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch(() => ({
                user_id: null,
                session_id: e
            }))
        }
        De.sessionContext = await md
    }
    return De.sessionContext
}

function gO() {
    if (typeof window > "u") return;
    const e = new URLSearchParams(window.location.search).get(Ov);
    if (e == null || !e.length) return;
    const r = new URLSearchParams(window.location.search);
    r.delete(Ov);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i), {
        enabled: e === "true"
    }
}

function yO() {
    if (typeof window > "u") return cd();
    try {
        const t = localStorage.getItem(Lv);
        if (!t) {
            const e = cd();
            return localStorage.setItem(Lv, e), e
        }
        return t
    } catch {
        return cd()
    }
}

function vO(t) {
    const {
        serverUrl: e = "",
        appId: r,
        token: i,
        serviceToken: a,
        requiresAuth: l = !1,
        appBaseUrl: c,
        options: f,
        functionsVersion: h,
        headers: m
    } = t, g = typeof c == "string" ? c : "", y = {
        serverUrl: e,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: r,
        token: i
    };
    let w = null;
    const E = () => (w || (w = nO({
            config: y
        })), w),
        S = {
            ...m,
            "X-App-Id": String(r)
        },
        b = h ? {
            ...S,
            "Base44-Functions-Version": h
        } : S,
        x = oo({
            baseURL: `${e}/api`,
            headers: S,
            token: i,
            onError: f == null ? void 0 : f.onError
        }),
        R = oo({
            baseURL: `${e}/api`,
            headers: b,
            token: i,
            interceptResponses: !1,
            onError: f == null ? void 0 : f.onError
        }),
        V = oo({
            baseURL: `${e}/api`,
            headers: S,
            token: a,
            onError: f == null ? void 0 : f.onError
        }),
        D = oo({
            baseURL: `${e}/api`,
            headers: b,
            token: a,
            interceptResponses: !1
        }),
        M = iN(x, R, r, {
            appBaseUrl: g
        }),
        B = {
            entities: Sv({
                axios: x,
                appId: r,
                getSocket: E
            }),
            integrations: bv(x, r),
            auth: M,
            functions: Ev(R, r),
            agents: kv({
                axios: x,
                getSocket: E,
                appId: r,
                serverUrl: e,
                token: i
            }),
            appLogs: Cv(x, r),
            users: uN(x, r),
            analytics: uO({
                axiosClient: x,
                serverUrl: e,
                appId: r,
                userAuthModule: M
            }),
            cleanup: () => {
                B.analytics.cleanup(), w && w.disconnect()
            }
        },
        K = {
            entities: Sv({
                axios: V,
                appId: r,
                getSocket: E
            }),
            integrations: bv(V, r),
            sso: oN(V, r, i),
            connectors: aN(V, r),
            functions: Ev(D, r),
            agents: kv({
                axios: V,
                getSocket: E,
                appId: r,
                serverUrl: e,
                token: i
            }),
            appLogs: Cv(V, r),
            cleanup: () => {
                w && w.disconnect()
            }
        };
    if (typeof window < "u") {
        const j = i || nh();
        j && B.auth.setToken(j)
    }
    return l && typeof window < "u" && setTimeout(async () => {
        try {
            return;
            // await B.auth.isAuthenticated() || B.auth.redirectToLogin(window.location.href)
        } catch (j) {
            console.error("Authentication check failed:", j), B.auth.redirectToLogin(window.location.href)
        }
    }, 0), {
        ...B,
        setToken(j) {
            B.auth.setToken(j), w && w.updateConfig({
                token: j
            }), y.token = j
        },
        getConfig() {
            return {
                serverUrl: e,
                appId: r,
                requiresAuth: l
            }
        },
        get asServiceRole() {
            if (!a) throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return K
        }
    }
}
const r1 = typeof window > "u",
    wO = r1 ? {
        localStorage: new Map
    } : window,
    go = wO.localStorage,
    xO = t => t.replace(/([A-Z])/g, "_$1").toLowerCase(),
    Fs = (t, {
        defaultValue: e = void 0,
        removeFromUrl: r = !1
    } = {}) => {
        if (r1) return e;
        const i = `base44_${xO(t)}`,
            a = new URLSearchParams(window.location.search),
            l = a.get(t);
        if (r) {
            a.delete(t);
            const f = `${window.location.pathname}${a.toString()?`?${a.toString()}`:""}${window.location.hash}`;
            window.history.replaceState({}, document.title, f)
        }
        if (l) return go.setItem(i, l), l;
        if (e) return go.setItem(i, e), e;
        const c = go.getItem(i);
        return c || null
    },
    SO = () => (Fs("clear_access_token") === "true" && (go.removeItem("base44_access_token"), go.removeItem("token")), {
        appId: Fs("app_id", {
            defaultValue: "69ab678eddedf6450ddeef5a"
        }),
        token: Fs("access_token", {
            removeFromUrl: !0
        }),
        fromUrl: Fs("from_url", {
            defaultValue: window.location.href
        }),
        functionsVersion: Fs("functions_version", {
            defaultValue: "prod"
        }),
        appBaseUrl: Fs("app_base_url", {
            defaultValue: void 0
        })
    }),
    lo = {
        ...SO()
    },
    {
        appId: bO,
        token: EO,
        functionsVersion: kO,
        appBaseUrl: CO
    } = lo,
    uo = vO({
        appId: bO,
        token: EO,
        functionsVersion: kO,
        serverUrl: "",
        requiresAuth: !1,
        appBaseUrl: CO
    });

function TO({}) {
    var a;
    const e = xx().pathname.substring(1),
        {
            data: r,
            isFetched: i
        } = Nk({
            queryKey: ["user"],
            queryFn: async () => {
                try {
                    return {
                        user: await uo.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return C.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: C.jsx("div", {
            className: "max-w-md w-full",
            children: C.jsxs("div", {
                className: "text-center space-y-6",
                children: [C.jsxs("div", {
                    className: "space-y-2",
                    children: [C.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), C.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), C.jsxs("div", {
                    className: "space-y-3",
                    children: [C.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), C.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", C.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && C.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: C.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [C.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: C.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), C.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [C.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), C.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), C.jsx("div", {
                    className: "pt-6",
                    children: C.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [C.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: C.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const s1 = N.createContext(),
    PO = ({
        children: t
    }) => {
        const [e, r] = N.useState(null), [i, a] = N.useState(!1), [l, c] = N.useState(!1), [f, h] = N.useState(!1), [m, g] = N.useState(null), [y, w] = N.useState(null);
        const E = async () => {}, S = async () => {}, b = () => {}, x = () => {};
        return C.jsx(s1.Provider, {
            value: {
                user: e,
                isAuthenticated: i,
                isLoadingAuth: l,
                isLoadingPublicSettings: f,
                authError: m,
                appPublicSettings: y,
                logout: b,
                navigateToLogin: x,
                checkAppState: E
            },
            children: t
        })
    },
    _O = () => {
        const t = N.useContext(s1);
        if (!t) throw new Error("useAuth must be used within an AuthProvider");
        return t
    },
    RO = () => C.jsx("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
        children: C.jsx("div", {
            className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
            children: C.jsxs("div", {
                className: "text-center",
                children: [C.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                    children: C.jsx("svg", {
                        className: "w-8 h-8 text-orange-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: C.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), C.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-4",
                    children: "Access Restricted"
                }), C.jsx("p", {
                    className: "text-slate-600 mb-8",
                    children: "You are not registered to use this application. Please contact the app administrator to request access."
                }), C.jsxs("div", {
                    className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                    children: [C.jsx("p", {
                        children: "If you believe this is an error, you can:"
                    }), C.jsxs("ul", {
                        className: "list-disc list-inside mt-2 space-y-1",
                        children: [C.jsx("li", {
                            children: "Verify you are logged in with the correct account"
                        }), C.jsx("li", {
                            children: "Contact the app administrator for access"
                        }), C.jsx("li", {
                            children: "Try logging out and back in again"
                        })]
                    })]
                })]
            })
        })
    }),
    {
        Pages: i1,
        Layout: Iv,
        mainPage: AO
    } = NR,
    o1 = AO,
    NO = i1[o1],
    Fv = ({
        children: t,
        currentPageName: e
    }) => Iv ? C.jsx(Iv, {
        currentPageName: e,
        children: t
    }) : C.jsx(C.Fragment, {
        children: t
    }),
    OO = () => {
        const {
            isLoadingAuth: t,
            isLoadingPublicSettings: e,
            authError: r,
            navigateToLogin: i
        } = _O();
        if (e || t) return C.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: C.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
        if (r) {
            if (r.type === "user_not_registered") return C.jsx(RO, {});
            if (r.type === "auth_required") return i(), null
        }
        return C.jsxs(mA, {
            children: [C.jsx(cl, {
                path: "/",
                element: C.jsx(Fv, {
                    currentPageName: o1,
                    children: C.jsx(NO, {})
                })
            }), Object.entries(i1).map(([a, l]) => C.jsx(cl, {
                path: `/${a}`,
                element: C.jsx(Fv, {
                    currentPageName: a,
                    children: C.jsx(l, {})
                })
            }, a)), C.jsx(cl, {
                path: "*",
                element: C.jsx(TO, {})
            })]
        })
    };

function LO() {
    return C.jsx(PO, {
        children: C.jsxs(wk, {
            client: Ok,
            children: [C.jsx(vA, {
                children: C.jsx(OO, {})
            }), C.jsx(KE, {})]
        })
    })
}
hb.createRoot(document.getElementById("root")).render(C.jsx(LO, {}));