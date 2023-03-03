(() => {
  "use strict";
  var __webpack_modules__ = {
      139: (e, t, n) => {
        n.d(t, {
          default: () => u,
        });
        n(6);
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function o(e, t, n) {
          !(function (e, t) {
            if (t.has(e))
              throw new TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          })(e, t),
            t.set(e, n);
        }
        function i(e, t, n) {
          return (
            (function (e, t, n) {
              if (t.set) t.set.call(e, n);
              else {
                if (!t.writable)
                  throw new TypeError(
                    "attempted to set read only private field"
                  );
                t.value = n;
              }
            })(e, a(e, t, "set"), n),
            n
          );
        }
        function a(e, t, n) {
          if (!t.has(e))
            throw new TypeError(
              "attempted to " + n + " private field on non-instance"
            );
          return t.get(e);
        }
        var l = new WeakMap();
        const u = (function () {
          function e(t) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              o(this, l, {
                writable: !0,
                value: void 0,
              }),
              (this.video = t),
              (this.unbinds = []),
              (this.reactMounts = {});
          }
          var t, n, u;
          return (
            (t = e),
            (n = [
              {
                key: "mount",
                value: function (e) {
                  this.rootElem = e;
                },
              },
              {
                key: "disabledButton",
                get: function () {
                  return (function (e, t) {
                    return t.get ? t.get.call(e) : t.value;
                  })((e = this), a(e, l, "get"));
                  var e;
                },
                set: function (e) {
                  i(this, l, e);
                },
              },
            ]) && r(t.prototype, n),
            u && r(t, u),
            Object.defineProperty(t, "prototype", {
              writable: !1,
            }),
            e
          );
        })();
      },
      548: (e, t, n) => {
        n.d(t, {
          default: () => y,
        });
        var r = n(6),
          o = n(19),
          i = n(12),
          a = n(10);
        function l(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function s(e, t) {
          return (
            (s = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            s(e, t)
          );
        }
        function c(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = p(e);
            if (t) {
              var o = p(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return f(this, n);
          };
        }
        function f(e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return d(e);
        }
        function d(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            p(e)
          );
        }
        function h(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var _ = (0, o.cachedDetect)(),
          v = 600;
        const y = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0,
              },
            })),
              Object.defineProperty(e, "prototype", {
                writable: !1,
              }),
              t && s(e, t);
          })(p, e);
          var t,
            n,
            o,
            f = c(p);
          function p() {
            var e;
            l(this, p);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              h(d((e = f.call.apply(f, [this].concat(n)))), "state", {
                buttons: [
                  {
                    key: (0, a.seqId)(),
                    isFadingUp: !1,
                    isFirstRender: !1,
                  },
                ],
                isDisplayNone: !0,
                isMouseDown: !1,
                isOpaque: !1,
              }),
              h(d(e), "onClick", function (t) {
                if (e.props.fadeUpOnClick) {
                  var n = e.state.buttons,
                    r = (0, i.clone)(n),
                    o = r[r.length - 1];
                  o.isFadingUp = !0;
                  var l = o.key;
                  r.push({
                    key: (0, a.seqId)(),
                    isFadingUp: !1,
                    isFirstRender: !0,
                  }),
                    e.setState({
                      buttons: r,
                    }),
                    setTimeout(function () {
                      e.setState({
                        buttons: e.state.buttons.filter(function (e) {
                          return e.key !== l;
                        }),
                      });
                    }, 700);
                }
                var u = e.props.onClick;
                u && u(t);
              }),
              h(d(e), "onMouseDown", function () {
                e.setState({
                  isMouseDown: !0,
                });
              }),
              h(d(e), "onMouseUp", function () {
                e.setState({
                  isMouseDown: !1,
                });
              }),
              h(d(e), "onTouchEnd", function () {
                e.setState({
                  isMouseDown: !1,
                });
              }),
              h(d(e), "onTouchStart", function () {
                e.setState({
                  isMouseDown: !0,
                });
              }),
              e
            );
          }
          return (
            (t = p),
            (n = [
              {
                key: "buttonStyle",
                value: function (e) {
                  var t = this.props,
                    n = t.bottom,
                    r = t.left,
                    o = t.right,
                    i = t.scale,
                    a = t.top,
                    l = e.isFadingUp,
                    u = e.isFirstRender,
                    s = this.state,
                    c = s.isDisplayNone,
                    f = s.isMouseDown,
                    d = s.isOpaque,
                    p = 140 * i,
                    h = -50,
                    _ = 0.8;
                  return (
                    l ? (h = -120) : u && (h = 20),
                    l ? (_ = 1) : u ? (_ = 0.4) : f && (_ = 0.9),
                    {
                      background: "rgba(0,0,0,.6)",
                      border: 0,
                      borderRadius: "50%",
                      bottom: n,
                      cursor: "pointer",
                      display: c ? "none" : "block",
                      height: "".concat(140 * i, "px"),
                      left: r,
                      margin: 0,
                      padding: 0,
                      pointerEvents: "auto",
                      position: "absolute",
                      opacity: !d || l || u ? 0 : 1,
                      outline: "none",
                      right: o,
                      top: a,
                      transform: "translate(-50%, "
                        .concat(h, "%) scale(")
                        .concat(_, ")"),
                      transition: "opacity "
                        .concat(l ? v : 200, "ms, transform ")
                        .concat(f ? 200 : v, "ms"),
                      webkitTapHighlightColor: "rgba(0,0,0,0)",
                      width: "".concat(p, "px"),
                    }
                  );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.handleVisibilityChange(this.props, this.state);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this,
                    t = this.props.isVisible,
                    n = this.state.buttons;
                  if (t && n[n.length - 1].isFirstRender) {
                    var r = (0, i.clone)(n);
                    (r[r.length - 1].isFirstRender = !1),
                      setTimeout(function () {
                        e.setState({
                          buttons: r,
                        });
                      }, 10);
                  }
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.isVisible !== this.props.isVisible &&
                    this.handleVisibilityChange(e, this.state);
                },
              },
              {
                key: "handleVisibilityChange",
                value: function (e, t) {
                  var n = this,
                    r = e.isVisible,
                    o = t.isDisplayNone,
                    i = t.isOpaque;
                  r && o
                    ? (this.setState({
                        isDisplayNone: !1,
                      }),
                      setTimeout(function () {
                        n.setState({
                          isOpaque: !0,
                        });
                      }, 10))
                    : !r &&
                      i &&
                      (this.setState({
                        isOpaque: !1,
                      }),
                      setTimeout(function () {
                        n.setState({
                          isDisplayNone: !0,
                        });
                      }, 100));
                },
              },
              {
                key: "rootStyle",
                value: function () {
                  return {
                    height: "100%",
                    left: 0,
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaLabel,
                    o = t.children,
                    i = this.state.buttons;
                  return (0, r.h)(
                    "div",
                    {
                      class: "w-css-reset w-css-reset-tree",
                      style: this.rootStyle(),
                    },
                    i.map(function (t, a) {
                      return (0, r.h)(
                        "button",
                        {
                          "aria-label": n,
                          class: "w-vulcan-v2-button",
                          key: t.key,
                          onClick: a === i.length - 1 && e.onClick,
                          onMouseDown: !_.touchScreen && e.onMouseDown,
                          onMouseUp: !_.touchScreen && e.onMouseUp,
                          onTouchEnd: _.touchScreen && e.onTouchEnd,
                          onTouchStart: _.touchScreen && e.onTouchStart,
                          style: e.buttonStyle(t),
                        },
                        o
                      );
                    })
                  );
                },
              },
            ]) && u(t.prototype, n),
            o && u(t, o),
            Object.defineProperty(t, "prototype", {
              writable: !1,
            }),
            p
          );
        })(r.Component);
      },
      549: (e, t, n) => {
        n.d(t, {
          default: () => p,
        });
        var r = n(6),
          o = n(15),
          i = n(10),
          a = n(7);
        function l() {
          return (
            (l = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            l.apply(this, arguments)
          );
        }
        function u(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function s(e, t) {
          return (
            (s = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            s(e, t)
          );
        }
        function c(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = d(e);
            if (t) {
              var o = d(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return f(this, n);
          };
        }
        function f(e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        function d(e) {
          return (
            (d = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            d(e)
          );
        }
        const p = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0,
              },
            })),
              Object.defineProperty(e, "prototype", {
                writable: !1,
              }),
              t && s(e, t);
          })(p, e);
          var t,
            n,
            f,
            d = c(p);
          function p(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p),
              ((t = d.call(this, e)).svgId = (0, i.seqId)("w-loading-swoop-")),
              (t.gradientId = (0, i.seqId)("w-loading-swoop-grad-")),
              (t.animName = (0, i.seqId)("w-loading-swoop-")),
              t
            );
          }
          return (
            (t = p),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  (0, o.addInlineCss)(
                    this.svgEl,
                    "\n@keyframes "
                      .concat(
                        this.animName,
                        " {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#"
                      )
                      .concat(this.svgId, " path {\n  animation: ")
                      .concat(
                        this.animName,
                        " 1s cubic-bezier(0.495, 0.155, 0.580, 0.845) infinite;\n  transform-origin: center;\n}\n    "
                      )
                  );
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function () {
                  return !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (0, r.h)(
                    "svg",
                    l(
                      {},
                      (0, a.standardSvgAttrs)({
                        width: 120,
                        height: 120,
                        styleOverride: {
                          position: "absolute",
                        },
                      }),
                      {
                        id: this.svgId,
                      }
                    ),
                    (0, r.h)(
                      "linearGradient",
                      {
                        gradientUnits: "userSpaceOnUse",
                        id: this.gradientId,
                        ref: function (t) {
                          e.svgEl = t;
                        },
                        x1: "31.5",
                        x2: "31.5",
                        y1: "0",
                        y2: "120",
                      },
                      (0, r.h)("stop", {
                        offset: "0",
                        style: {
                          stopColor: "#FFFFFF",
                        },
                      }),
                      (0, r.h)("stop", {
                        offset: "0.7279",
                        style: {
                          stopColor: "#FFFFFF",
                          stopOpacity: 0,
                        },
                      })
                    ),
                    (0, r.h)("path", {
                      d: "M60,0C26.9,0,0,26.9,0,60s26.9,60,60,60v-6C30.2,114,6,89.8,6,60S30.2,6,60,6c1.7,0,3-1.3,3-3S61.7,0,60,0z",
                      style: {
                        fill: "url(#".concat(this.gradientId, ")"),
                        opacity: 0.8,
                      },
                    })
                  );
                },
              },
            ]) && u(t.prototype, n),
            f && u(t, f),
            Object.defineProperty(t, "prototype", {
              writable: !1,
            }),
            p
          );
        })(r.Component);
      },
      547: (e, t, n) => {
        n.d(t, {
          default: () => w,
        });
        var r = n(2),
          o = n(139),
          i = n(548),
          a = n(549),
          l = n(164),
          u = n(57),
          s = n(6),
          c = n(146),
          f = n(11);
        function d(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function p(e, t) {
          return (
            (p = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            p(e, t)
          );
        }
        function h(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = y(e);
            if (t) {
              var o = y(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return _(this, n);
          };
        }
        function _(e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return v(e);
        }
        function v(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function y(e) {
          return (
            (y = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            y(e)
          );
        }
        function g(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var b = (0, n(19).cachedDetect)(),
          m = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0,
                },
              })),
                Object.defineProperty(e, "prototype", {
                  writable: !1,
                }),
                t && p(e, t);
            })(_, e);
            var t,
              n,
              r,
              o = h(_);
            function _(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, _),
                g(v((t = o.call(this, e))), "onClick", function () {
                  "playing" === t.video.state()
                    ? t.video.pause()
                    : t.video.play();
                }),
                g(v(t), "renderButton", function () {
                  var e = "playing" === t.video.state(),
                    n = t.scale(),
                    r = 1.05,
                    o = {
                      boxSizing: "border-box",
                      height: "100%",
                      paddingBottom: "".concat(45 * n * r, "px"),
                      paddingLeft: "".concat((e ? 51 : 55) * n * r, "px"),
                      paddingRight: "".concat((e ? 51 : 45) * n * r, "px"),
                      paddingTop: "".concat(45 * n * r, "px"),
                    };
                  t.isLoading &&
                    t.video.setAriaLiveText("The video is loading..."),
                    (0, s.render)(
                      (0, s.h)(
                        i.default,
                        {
                          ariaLabel: e
                            ? t.translate("TITLE_WHEN_PLAYING")
                            : t.translate("TITLE_WHEN_NOT_PLAYING"),
                          isVisible: t.isVisible(),
                          left: "50%",
                          onClick: t.onClick,
                          scale: n,
                          top: "50%",
                        },
                        t.isLoading && (0, s.h)(a.default, null),
                        (0, s.h)(
                          "div",
                          {
                            style: o,
                          },
                          (0, s.h)(l.default, {
                            isPlaying: e,
                            noPadding: !0,
                          })
                        )
                      ),
                      t.rootElem
                    ),
                    (t.reactMounts = [t.rootElem]);
                }),
                (t.isLoading = !1),
                (t.hasMounted = !1),
                t
              );
            }
            return (
              (t = _),
              (n = [
                {
                  key: "destroy",
                  value: function () {
                    (0, u.destroyControl)(this);
                  },
                },
                {
                  key: "isVisible",
                  value: function () {
                    var e = this.props.controlsAreVisible,
                      t = this.video,
                      n = t.state(),
                      r = "beforeplay" === n,
                      o =
                        "ended" === n &&
                        "reset" === t.embedOptions().endVideoBehavior,
                      i = t._impl.ui.anyDialogOpen();
                    return (
                      this.isLoading || (b.touchScreen && e && !i && !r && !o)
                    );
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    (this.rootElem = e),
                      this.setupBindings(),
                      (this.hasMounted = !0),
                      this.renderButton();
                  },
                },
                {
                  key: "onControlPropsUpdated",
                  value: function (e) {
                    var t = this;
                    ["anyDialogOpen", "controlsAreVisible", "videoWidth"].some(
                      function (n) {
                        return t.props[n] !== e[n];
                      }
                    ) && this.renderButton();
                  },
                },
                {
                  key: "setupBindings",
                  value: function () {
                    var e = this,
                      t = -1;
                    this.hasMounted ||
                      this.unbinds.push(
                        this.video.on("play", this.renderButton),
                        this.video.on("pause", this.renderButton),
                        this.video.on("end", this.renderButton),
                        this.video.on("waiting", function (n) {
                          !e.isLoading &&
                            t < 2 &&
                            n >= 2 &&
                            ((e.isLoading = !0), e.renderButton()),
                            (t = n);
                        }),
                        this.video.on("done-waiting", function () {
                          (e.isLoading = !1), e.renderButton(), (t = -1);
                        }),
                        this.video.on("timechange", function () {
                          (e.isLoading = !1), e.renderButton(), (t = -1);
                        })
                      );
                  },
                },
                {
                  key: "scale",
                  value: function () {
                    return Math.min(
                      1.3,
                      Math.max(
                        0.3,
                        (0, c.controlMultiplierBasedOnVideo)(
                          this.video,
                          [640, 960]
                        )
                      )
                    );
                  },
                },
                {
                  key: "translate",
                  value: function (e) {
                    return (0, f.getTranslation)(
                      this.props.playerLanguage.code,
                      "PLAY_BUTTON_".concat(e)
                    );
                  },
                },
              ]) && d(t.prototype, n),
              r && d(t, r),
              Object.defineProperty(t, "prototype", {
                writable: !1,
              }),
              _
            );
          })(o.default);
        (m.shouldMount = function () {
          return !0;
        }),
          (m.handle = "playPauseLoading"),
          (m.type = "above-control-bar"),
          r.default.defineControl(m);
        const w = m;
      },
      164: (e, t, n) => {
        n.d(t, {
          default: () => p,
        });
        var r = n(6),
          o = n(12),
          i = n(7);
        function a() {
          return (
            (a = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            a.apply(this, arguments)
          );
        }
        function l(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function s(e, t) {
          return (
            (s = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            s(e, t)
          );
        }
        function c(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = d(e);
            if (t) {
              var o = d(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return f(this, n);
          };
        }
        function f(e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e);
        }
        function d(e) {
          return (
            (d = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            d(e)
          );
        }
        const p = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0,
              },
            })),
              Object.defineProperty(e, "prototype", {
                writable: !1,
              }),
              t && s(e, t);
          })(p, e);
          var t,
            n,
            f,
            d = c(p);
          function p() {
            return l(this, p), d.apply(this, arguments);
          }
          return (
            (t = p),
            (n = [
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return this.props.isPlaying !== e.isPlaying;
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, r.h)(
                    "div",
                    {
                      style: this.rootStyle(),
                    },
                    (0, r.h)(
                      "div",
                      {
                        style: {
                          display: this.props.isPlaying ? "block" : "none",
                          height: "100%",
                          width: "100%",
                        },
                      },
                      this.renderPauseIcon()
                    ),
                    (0, r.h)(
                      "div",
                      {
                        style: {
                          display: this.props.isPlaying ? "none" : "block",
                          height: "100%",
                          width: "100%",
                        },
                      },
                      this.renderPlayIcon()
                    )
                  );
                },
              },
              {
                key: "renderPlayIcon",
                value: function () {
                  var e = this.props.noPadding,
                    t = e ? 0 : 20,
                    n = e ? 0 : 9,
                    o = 11.556,
                    i = ""
                      .concat(t + o, ",")
                      .concat(n + 7.5, " ")
                      .concat(t, ",")
                      .concat(n + 15, " ")
                      .concat(t, ",")
                      .concat(n);
                  return (0, r.h)(
                    "svg",
                    a({}, this.svgAttrs(o + 2 * t, 15 + 2 * n), {
                      class: "w-css-reset w-css-reset-tree",
                    }),
                    (0, r.h)("polygon", {
                      points: i,
                    })
                  );
                },
              },
              {
                key: "renderPauseIcon",
                value: function () {
                  var e = this.props.noPadding,
                    t = e ? 0 : 20,
                    n = e ? 0 : 11.3;
                  return (0, r.h)(
                    "svg",
                    a({}, this.svgAttrs(10 + 2 * t, 12 + 2 * n), {
                      class: "w-css-reset w-css-reset-tree",
                    }),
                    (0, r.h)(
                      "g",
                      null,
                      (0, r.h)("rect", {
                        x: t,
                        y: n,
                        width: "3.5",
                        height: 12,
                      }),
                      (0, r.h)("rect", {
                        x: t + 6.5,
                        y: n,
                        width: "3.5",
                        height: 12,
                      })
                    )
                  );
                },
              },
              {
                key: "rootStyle",
                value: function () {
                  return {
                    height: "100%",
                    width: "100%",
                  };
                },
              },
              {
                key: "svgAttrs",
                value: function () {
                  var e = this.props.noPadding,
                    t = this.props.isPlaying,
                    n = e ? 0 : 20,
                    r = e ? 0 : t ? 11.3 : 9,
                    a = t ? 12 : 16,
                    l = t ? 10 : 11.556,
                    u = (0, i.standardSvgAttrs)({
                      width: l + 2 * n,
                      height: a + 2 * r,
                      ariaHidden: !0,
                    });
                  return (0, o.merge)(u.style, this.props.svgStyle), u;
                },
              },
            ]) && u(t.prototype, n),
            f && u(t, f),
            Object.defineProperty(t, "prototype", {
              writable: !1,
            }),
            p
          );
        })(r.Component);
      },
      57: (e, t, n) => {
        n.d(t, {
          destroyControl: () => a,
        });
        n(13), n(58);
        var r = n(19),
          o = (n(59), n(15)),
          i = n(6),
          a =
            (n(10),
            (0, r.cachedDetect)(),
            function (e) {
              (e._destroyed = !0),
                (function (e) {
                  e.unbinds instanceof Array &&
                    (e.unbinds.map(function (e) {
                      try {
                        "function" == typeof e && e();
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 1);
                      }
                    }),
                    (e.unbinds = null));
                })(e),
                l(e),
                s(e),
                c(e);
            }),
          l = function (e) {
            e.rootElem &&
              (0, o.elemRemove)(
                Array.prototype.slice.call(e.rootElem.childNodes)
              );
          },
          u = function (e) {
            var t = e[0],
              n = e[1];
            t && n && (0, i.render)((0, i.h)("nothing", null), t);
          },
          s = function (e) {
            var t = e.reactMounts;
            if (t)
              if (t instanceof Array) u(t);
              else for (var n in t) t.hasOwnProperty(n) && t[n] && u(t[n]);
          },
          c = function (e) {
            for (var t in e)
              e.hasOwnProperty(t) &&
                ("_" !== (n = t)[0] || "_" !== n[1]) &&
                "mounted" !== t &&
                (e[t] = null);
            var n;
            (e.__prevProps = null), (e._destroyed = !0);
          };
      },
      58: (e, t, n) => {
        n.d(t, {
          getControlDefinitions: () => o,
        });
        var r = n(2);
        null == r.default._controlDefinitions &&
          (r.default._controlDefinitions = {});
        var o = function () {
          return r.default._controlDefinitions || {};
        };
        r.default.defineControl = function (e) {
          null != e.handle
            ? null == r.default._controlDefinitions[e.handle] &&
              ((r.default._controlDefinitions[e.handle] = e),
              r.default.trigger && r.default.trigger("controldefined", e))
            : console.error("Please specify a handle property for control", e);
        };
      },
      11: (e, t, n) => {
        n.d(t, {
          getTranslation: () => p,
        });
        var r = n(2),
          o = n(12),
          i = (r.default.languages = r.default.languages || {}),
          a = (r.default.translations = r.default.translations || {});
        r.default._translationPromises || (r.default._translationPromises = {});
        var l,
          u = [
            "ar",
            "de",
            "es",
            "en-US",
            "fr",
            "it",
            "ja",
            "ko",
            "pt",
            "ru",
            "zh-CN",
          ],
          s = function (e, t, n) {
            (i[e] = {
              code: e,
              text: d(t),
            }),
              n && c(e, n);
          },
          c = function (e, t) {
            if (null == i[e])
              throw new Error(
                "Must define a language with code ".concat(
                  e,
                  " before defining its translations."
                )
              );
            var n = a[e];
            n ? (0, o.merge)(n, t) : (a[e] = (0, o.clone)(t));
          },
          f = (r.default.cachedDecodings = r.default.cachedDecodings || {}),
          d = function (e) {
            return (
              l || (l = document.createElement("textarea")),
              null != f[e]
                ? f[e]
                : ((l.innerHTML = e), (f[e] = l.value), l.value)
            );
          },
          p = function (e, t) {
            var n;
            return (
              (n = a[e] && a[e][t] ? a[e][t] : a["en-US"][t]),
              d(
                (function (e) {
                  return null == e ? "?" : e;
                })(n)
              )
            );
          },
          h = function () {
            return (
              navigator.languages || navigator.language
                ? (r.default.languagePreference = navigator.languages || [
                    navigator.language,
                  ])
                : (r.default.languagePreference = ["en-US"]),
              r.default.languagePreference
            );
          },
          _ = function (e) {
            if (r.default._translationPromises[e])
              return r.default._translationPromises[e];
            var t = new Promise(function (t, n) {
              r.default
                .asyncRequire(["translations/".concat(e, ".js")])
                .then(function () {
                  t({
                    code: e,
                    translations: a[e],
                  });
                })
                .catch(n);
            });
            return (r.default._translationPromises[e] = t), t;
          },
          v = function () {
            var e = (function () {
              return (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : h
              )().reduce(function (e, t) {
                var n = -1 !== u.indexOf(t),
                  r = t.split("-")[0],
                  o = -1 !== u.indexOf(r);
                return n ? e.push(t) : o && e.push(r), e;
              }, []);
            })()[0];
            return (
              (e && "en" !== e) || (e = "en-US"),
              a[e]
                ? Promise.resolve({
                    code: e,
                    translations: a[e],
                  })
                : _(e)
            );
          };
        s("en-US", "English"),
          c("en-US", {
            PLAY: "Play",
            PLAY_BUTTON_LIVE_NOT_STARTED: "Livestream has not started",
            PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: "Play Video",
            PLAY_BUTTON_TITLE_WHEN_PLAYING: "Pause",
            REWATCH: "Rewatch",
            SKIP: "Skip",
          }),
          (r.default._initializers.initDefaultTranslation = v),
          (r.default.getDefaultTranslation = v),
          (r.default.suppportedLanguages = u),
          (r.default.defineLanguage = s),
          (r.default.getLanguage = function (e) {
            return i[e];
          }),
          (r.default.getLanguagePreference = h),
          (r.default.defineTranslations = c),
          (r.default.getTranslation = p),
          (r.default.loadAndDefineTranslation = _);
      },
      13: (e, t, n) => {
        n.d(t, {
          default: () => o,
        });
        var r = function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          return e;
        };
        const o = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          if (Object.assign) return Object.assign.apply(Object, [e].concat(n));
          for (var i = 0; i < n.length; i++) r(e, n[i]);
          return e;
        };
      },
      23: (e, t, n) => {
        n.d(t, {
          bind: () => u,
          bindNamed: () => h,
          trigger: () => f,
          unbind: () => s,
          unbindAllInNamespace: () => v,
          unbindNamed: () => _,
        });
        var r = n(2);
        function o(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return i(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return i(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return i(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var a,
          l = Array.prototype.slice,
          u = function (e, t) {
            var n = this;
            return (
              n._bindings || (n._bindings = {}),
              n._bindings[e] || (n._bindings[e] = []),
              n._bindings[e].push(t),
              function () {
                n.unbind(e, t);
              }
            );
          },
          s = function (e, t) {
            if (!this._bindings) return this;
            if (!this._bindings[e]) return this;
            for (var n = [], r = 0; r < this._bindings[e].length; r++) {
              var o = this._bindings[e][r];
              o !== t && n.push(o);
            }
            this._bindings[e] = n;
          },
          c = function (e, t) {
            return (
              this.unbind(e, t),
              this.bind(e, t),
              {
                event: e,
                fn: t,
              }
            );
          },
          f = function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return (
              this._bindings &&
                null != this._bindings.all &&
                d.apply(this, ["all", e].concat(n)),
              d.apply(this, [e].concat(n))
            );
          },
          d = function (e) {
            if (!this._bindings) return this;
            if (!this._bindings[e]) return this;
            for (
              var t, n = l.call(arguments, 1), i = o(this._bindings[e]), a = 0;
              a < i.length;
              a++
            ) {
              var u = i[a];
              try {
                var s = u.apply(this, n);
                s === this.unbind &&
                  (null == t && (t = []),
                  t.push({
                    event: e,
                    fn: u,
                  }));
              } catch (e) {
                if (this._throwTriggerErrors) throw e;
                r.default.error && r.default.error(e);
              }
            }
            if (t)
              for (var c = 0; c < t.length; c++) {
                var f = t[c];
                this.unbind(f.event, f.fn);
              }
            return this;
          },
          p = function (e, t) {
            null == e._namedBindings && (e._namedBindings = {}),
              null == e._namedBindings[t] && (e._namedBindings[t] = {});
          },
          h = function (e, t, n, r) {
            return (
              this.unbindNamed(e, t),
              (function (e, t, n, r, o) {
                p(e, t),
                  (e._namedBindings[t][n] = {
                    event: r,
                    fn: o,
                  });
              })(this, e, t, n, r),
              this.bind(n, r),
              function () {
                this.unbindNamed(e, t);
              }
            );
          },
          _ = function (e, t) {
            p(this, e);
            var n = (function (e, t, n) {
              return p(e, t), e._namedBindings[t][n];
            })(this, e, t);
            if (n) {
              var r = n.event,
                o = n.fn;
              this.unbind(r, o);
            }
            var i = this._namedBindings;
            return delete i[e][t], y(i[e]) && delete i[e], this;
          },
          v = function (e) {
            var t = this._namedBindings && this._namedBindings[e];
            if (null == t) return this;
            for (var n in t) t.hasOwnProperty(n) && this.unbindNamed(e, n);
          },
          y = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          };
        ((a = function () {}.prototype).bind = u),
          (a.unbind = s),
          (a.on = u),
          (a.off = s),
          (a.rebind = c),
          (a.trigger = f),
          (a.bindNamed = h),
          (a.unbindNamed = _),
          (a.unbindAllInNamespace = v);
      },
      19: (e, t, n) => {
        n.d(t, {
          cachedDetect: () => q,
        });
        var r,
          o = n(2),
          i = n(3),
          a = navigator.userAgent,
          l = /(webkit)[ /]([^\s]+)/i,
          u = /OPR\/([^\s]+)/i,
          s = /(edge)\/(\d+(?:\.\d+)?)/i,
          c = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
          f = /(android) ([^;]+)/i,
          d = /(iphone)/i,
          p = /(ipad)/i,
          h = /(Windows Phone OS (\d+(?:\.\d+)?))/,
          _ = /OS (\d+)_(\d+)/i,
          v = /(playstation 3)/i,
          y = /BlackBerry|BB10/i,
          g = /(firefox)/i,
          b = /Mobile VR/i,
          m = /Version\/([^\s]+)/i,
          w = function () {
            return (P()[1] || "webkit").toLowerCase();
          },
          O = function () {
            return P()[2];
          },
          P = function () {
            var e;
            return (e = a.match(s)) || (e = a.match(l)) || (e = a.match(u))
              ? e
              : e
              ? (null != document.documentMode &&
                  (e[2] = document.documentMode),
                e)
              : (e = a.match(c)) || [];
          },
          T = function () {
            var e = a.match(f);
            return (
              null != e && {
                version: e[2],
              }
            );
          },
          k = function () {
            return d.test(a);
          },
          S = function () {
            return B() > 0 || T();
          },
          x = function () {
            try {
              var e = matchMedia("(hover:hover)");
              if ("not all" !== e.media) return e.matches;
            } catch (e) {}
            return !S();
          },
          E = function () {
            return y.test(a);
          },
          j = function () {
            return (
              ("MacIntel" === navigator.platform &&
                navigator.userAgent.indexOf("Mac") >= 0 &&
                navigator.maxTouchPoints > 1) ||
              p.test(a)
            );
          },
          A = function () {
            return l.test(a) && !/chrome/i.test(a) && !j() && !k();
          },
          L = function () {
            return (
              !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                version: C(),
              }
            );
          },
          C = function () {
            var e = a.match(/\bChrome\/([^\s]+)/);
            return e && e[1];
          },
          D = function () {
            return u.test(a);
          },
          B = function () {
            var e = a.match(_),
              t = a.match(m);
            return null != e
              ? parseFloat("".concat(e[1], ".").concat(e[2]))
              : null != t && t[1] && j()
              ? parseFloat(t[1])
              : 0;
          },
          I = function () {
            return s.test(a);
          },
          M = function () {
            return g.test(a);
          },
          N = function () {
            var e = document.createElement("video"),
              t = !1;
            try {
              if (e.canPlayType) {
                var n = 'video/mp4; codecs="avc1.42E01E';
                ((t = {}).h264 =
                  !!e.canPlayType(n + '"') ||
                  !!e.canPlayType(n + ', mp4a.40.2"')),
                  (t.webm = !!e.canPlayType(
                    'video/webm; codecs="vp9, vorbis"'
                  )),
                  (t.nativeHls = !!e.canPlayType(
                    "application/vnd.apple.mpegURL"
                  ));
              }
            } catch (e) {
              t = {
                ogg: !1,
                h264: !1,
                webm: !1,
                nativeHls: !1,
              };
            }
            return t;
          },
          R = function () {
            try {
              return (
                "localStorage" in i.default && null != i.default.localStorage
              );
            } catch (e) {
              return !1;
            }
          },
          U = ["WebKit", "Moz", "O", "Ms", ""],
          F = function () {
            for (var e = 0; e < U.length; e++) {
              var t = U[e] + "MutationObserver";
              if (i.default[t]) return t;
            }
            return null;
          },
          W = function () {
            if (null != r) return r;
            try {
              var e = Object.defineProperty({}, "passive", {
                get: function () {
                  r = !0;
                },
              });
              window.addEventListener("test", null, e);
            } catch (e) {
              r = !1;
            }
            return r;
          },
          q = function () {
            return (
              o.default._detectCache || (o.default._detectCache = V()),
              o.default._detectCache
            );
          },
          V = function () {
            var e,
              t,
              n,
              r,
              o,
              l,
              u,
              s,
              c,
              f,
              d,
              p,
              _ = {
                browser: {
                  version: O(),
                },
                edge: I(),
                firefox: M(),
                gearvr: b.test(a),
                android: T(),
                oldandroid: T() && parseFloat(T().version) < 4.1,
                iphone: k(),
                ipad: j(),
                blackberry: E(),
                safari: A(),
                chrome: L(),
                opera: D(),
                winphone: {
                  version: h.test(a)[2],
                },
                ios: {
                  version: B(),
                },
                windows: /win/i.test(navigator.platform),
                mac: /mac/i.test(navigator.platform),
                linux: /linux/i.test(navigator.platform),
                retina:
                  null != i.default.devicePixelRatio &&
                  i.default.devicePixelRatio > 1,
                hoverIsNatural: x(),
                touchScreen: S(),
                ps3: v.test(a),
                video: N(),
                mediaSource:
                  i.default.MediaSource &&
                  i.default.MediaSource.isTypeSupported(
                    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                  ),
                nativeHls: (k() || j() || A()) && N().nativeHls,
                localstorage: R(),
                json: !(!i.default.JSON || "function" != typeof JSON.parse),
                backgroundSize:
                  ((p = document.createElement("div")),
                  "" === p.style.backgroundSize ||
                    "" === p.style.webkitBackgroundSize ||
                    "" === p.style.mozBackgroundSize ||
                    "" === p.style.oBackgroundSize),
                fullscreenEnabled:
                  document.fullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.msFullscreenEnabled,
                vulcanSupport:
                  ((d = /webkit|mozilla|edge/.test(w())),
                  Boolean(
                    !k() &&
                      !j() &&
                      !T() &&
                      !E() &&
                      d &&
                      N().h264 &&
                      Object.defineProperties
                  )),
                mutationObserver: F(),
                callingPlayRequiresEventContext: B() > 0 || T() || A(),
                passiveSupported: W(),
                webp:
                  ((e = L()),
                  (t = M()),
                  (n = I()),
                  (r = D()),
                  (o = e && O() >= 32),
                  (l = e && O() >= 75 && T()),
                  (u = t && O() >= 65),
                  (s = t && O() >= 67 && T()),
                  (c = n && O() >= 18),
                  (f = r && O() >= 19),
                  o || l || u || s || c || f),
              };
            return (_.browser[w()] = !0), _;
          };
      },
      16: (e, t, n) => {
        n(17);
      },
      15: (e, t, n) => {
        n.d(t, {
          addInlineCss: () => c,
          elemBind: () => v,
          elemRemove: () => f,
          elemStyle: () => d,
          elemUnbind: () => y,
        });
        var r,
          o = n(12),
          i = (n(16), n(18), n(19)),
          a = n(20),
          l = (n(24), n(25), n(10)),
          u = n(2).default,
          s = (0, i.cachedDetect)(),
          c = function (e, t) {
            var n = e || document.body || document.head,
              r = document.createElement("style");
            return (
              (r.id = (0, l.seqId)("wistia_", "_style")),
              r.setAttribute("type", "text/css"),
              (r.className = "wistia_injected_style"),
              n.appendChild(r, n.nextSibling),
              r.styleSheet
                ? (r.styleSheet.cssText = t)
                : r.appendChild(document.createTextNode(t)),
              r
            );
          },
          f = function e(t) {
            var n;
            if ((0, o.isArray)(t) || (window.NodeList && t instanceof NodeList))
              for (var r = 0; r < t.length; r++) e(t[r]);
            else
              null == t ||
                (1 !== t.nodeType && 3 !== t.nodeType) ||
                !(n = t.parentNode) ||
                (n.removeChild(t), (t = null));
          },
          d = function e(t) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            if (
              (0, o.isArray)(t) ||
              (window.NodeList && t instanceof NodeList)
            ) {
              for (var l = [], u = 0; u < t.length; u++) {
                var s = t[u];
                1 === s.nodeType && l.push(e.apply(void 0, [s].concat(r)));
              }
              return l;
            }
            if (2 === r.length) {
              var c = r[0],
                f = r[1];
              t.style[c] = f;
            } else if (1 === r.length)
              if ("string" == typeof r[0]) {
                var d = r[0];
                try {
                  return t.currentStyle
                    ? t.currentStyle[d]
                    : window.getComputedStyle
                    ? window.getComputedStyle(t, null).getPropertyValue(d)
                    : null;
                } catch (e) {
                  a.wlog.notice(e);
                }
              } else {
                var p = _(r[0]);
                for (var h in p) {
                  var v = p[h];
                  t.style[h] = v;
                }
              }
            else a.wlog.apply(void 0, ["Unexpected args", t].concat(r));
          },
          p = {
            borderImage: !0,
            mixBlendMode: !0,
            transform: !0,
            transition: !0,
            transitionDuration: !0,
          },
          h = ["webkit", "moz", "o", "ms"],
          _ = function (e) {
            if (s.chrome) return e;
            var t = {};
            for (var n in e) {
              var r = e[n];
              if (((t[n] = r), p[n]))
                for (var o = h, i = 0; i < o.length; i++) {
                  var a = o[i] + n.charAt(0).toUpperCase() + n.slice(1);
                  n[a] || (t[a] = r);
                }
            }
            return t;
          },
          v = function (e, t, n) {
            var r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = function (r) {
                (r = r || window.event).pageX ||
                  r.pageY ||
                  (!r.clientX && !r.clientY) ||
                  ((r.pageX = r.clientX + m()), (r.pageY = r.clientY + b())),
                  r.preventDefault ||
                    (r.preventDefault = function () {
                      r.returnValue = !1;
                    }),
                  r.stopPropagation ||
                    (r.stopPropagation = function () {
                      r.cancelBubble = !0;
                    }),
                  null == r.which &&
                    (r.which = null != r.charCode ? r.charCode : r.keyCode),
                  null == r.which &&
                    null != r.button &&
                    (1 & r.button
                      ? (r.which = 1)
                      : 2 & r.button
                      ? (r.which = 3)
                      : 4 & r.button
                      ? (r.which = 2)
                      : (r.which = 0)),
                  r.target || (r.srcElement && (r.target = r.srcElement)),
                  r.target &&
                    3 === r.target.nodeType &&
                    (r.target = r.target.parentNode);
                for (
                  var o = arguments.length,
                    i = new Array(o > 1 ? o - 1 : 0),
                    a = 1;
                  a < o;
                  a++
                )
                  i[a - 1] = arguments[a];
                var l = n.apply(r.target, [r].concat(i));
                return l === y && y(e, t, n), l;
              };
            u._elemBind = u._elemBind || {};
            var i = g(e, t, n);
            return (
              (u._elemBind[i] = o),
              (o.elem = e),
              (o.event = t),
              e.addEventListener(t, o, r),
              function () {
                y(e, t, n, r);
              }
            );
          },
          y = function (e, t, n) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (
              null != e &&
              null != e._wistiaElemId &&
              null != n &&
              n._wistiaBindId
            ) {
              var o = g(e, t, n),
                i = u._elemBind[o];
              return (
                i &&
                  (e.removeEventListener(t, i, r),
                  (i.elem = null),
                  (i.event = null)),
                delete u._elemBind[o]
              );
            }
          },
          g = function (e, t, n) {
            return (
              (e._wistiaElemId =
                e._wistiaElemId || (0, l.seqId)("wistia_elem_")),
              (n._wistiaBindId =
                n._wistiaBindId || (0, l.seqId)("wistia_bind_")),
              ""
                .concat(e._wistiaElemId, ".")
                .concat(t, ".")
                .concat(n._wistiaBindId)
            );
          },
          b = function (e) {
            var t = document.body,
              n = document.documentElement;
            if (null == e) return (n && n.scrollTop) || (t && t.scrollTop) || 0;
            t && (t.scrollTop = e), n && (n.scrollTop = e);
          },
          m = function (e) {
            var t = document.body,
              n = document.documentElement;
            if (null == e)
              return (n && n.scrollLeft) || (t && t.scrollLeft) || 0;
            t && (t.scrollLeft = e), n && (n.scrollLeft = e);
          };
        [
          "auxclick",
          "click",
          "contextmenu",
          "dblclick",
          "focus",
          "keydown",
          "keypress",
          "keyup",
          "mousedown",
          "mouseup",
          "reset",
          "submit",
          "touchend",
          "touchstart",
        ].forEach(function (e) {
          v(
            document,
            e,
            function (e) {
              (r = e),
                Date.now(),
                setTimeout(function () {
                  r === e && (r = void 0);
                }, 0);
            },
            !s.passiveSupported || {
              capture: !0,
              passive: !0,
            }
          );
        });
      },
      24: (e, t, n) => {
        var r;
        n.d(t, {
          elemOffset: () => i,
        });
        var o = function () {
            if (null != r) return r;
            var e = document.createElement("div");
            return (
              (e.style.paddingLeft = e.style.width = "1px"),
              document.body.appendChild(e),
              (r = 2 === e.offsetWidth),
              document.body.removeChild(e),
              r
            );
          },
          i = function (e) {
            var t,
              n,
              r = document.body,
              i = document.defaultView,
              l = document.documentElement,
              u = e.getBoundingClientRect(),
              s = l.clientTop || r.clientTop || 0,
              c = l.clientLeft || r.clientLeft || 0;
            (t =
              i && null != i.pageYOffset
                ? i.pageYOffset
                : o() && l && null != l.scrollTop
                ? l.scrollTop
                : r.scrollTop),
              (n =
                i && null != i.pageXOffset
                  ? i.pageXOffset
                  : o() && l && null != l.scrollLeft
                  ? l.scrollLeft
                  : r.scrollLeft);
            var f = a(e);
            return {
              height: u.height * f,
              top: u.top * f + t - s,
              left: u.left * f + n - c,
              width: u.width * f,
              zoom: f,
            };
          },
          a = function e(t) {
            return t && t !== document.documentElement
              ? e(t.parentElement) * (getComputedStyle(t).zoom || 1)
              : 1;
          };
      },
      146: (e, t, n) => {
        n.d(t, {
          controlMultiplierBasedOnVideo: () => s,
        });
        n(15), n(59);
        var r = n(19),
          o = n(12);
        function i(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == n) return;
              var r,
                o,
                i = [],
                a = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (l = !0), (o = e);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (l) throw o;
                }
              }
              return i;
            })(e, t) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return a(e, t);
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var l = (0, r.cachedDetect)(),
          u = function (e) {
            if (!(l.iphone || l.ipad || l.android)) return [640, 960];
            if (null != e && e.isAudio()) return [500, 960];
            var t,
              n,
              r,
              i,
              a =
                ((t = document.querySelector("meta[name=viewport]")),
                (n = t && t.getAttribute("content")),
                (r = {}),
                n &&
                  n.split(/[\s,]+/).forEach(function (e) {
                    var t = e.split("=");
                    2 === t.length && (r[t[0]] = (0, o.cast)(t[1]));
                  }),
                r);
            if (a.width) {
              i =
                "number" == typeof a.width
                  ? 0 + a.width
                  : screen.width || window.innerWidth;
              var u = Math.max(
                a["minimum-scale"] || 0,
                Math.min(a["maximum-scale"] || 10, a["initial-scale"] || 1)
              );
              u < 1 && (i /= u);
            } else i = window.innerWidth;
            return [i, (2 * i) / 3];
          },
          s = function (e, t) {
            var n = e.videoWidth(),
              r = i(t || u(e), 2),
              o = r[0],
              a = r[1];
            return n < o ? n / o : n > a ? n / a : 1;
          };
      },
      21: (e, t, n) => {
        n.d(t, {
          globalTrigger: () => o,
        });
        var r = n(2);
        (0, n(22).makeWbindable)(r.default);
        r.default.bind.bind(r.default),
          r.default.on.bind(r.default),
          r.default.off.bind(r.default),
          r.default.rebind.bind(r.default);
        var o = r.default.trigger.bind(r.default);
        r.default.unbind.bind(r.default);
      },
      12: (e, t, n) => {
        n.d(t, {
          cast: () => u,
          clone: () => l,
          isArray: () => d,
          isEmpty: () => _,
          isObject: () => h,
          merge: () => r,
        });
        n(13), Array.prototype.slice;
        var r = function (e) {
            if (0 == (arguments.length <= 1 ? 0 : arguments.length - 1))
              return e;
            for (
              var t = 0;
              t < (arguments.length <= 1 ? 0 : arguments.length - 1);
              t++
            )
              o(
                e,
                t + 1 < 1 || arguments.length <= t + 1
                  ? void 0
                  : arguments[t + 1]
              );
            return e;
          },
          o = function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : i,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : a;
            if (d(n)) {
              d(t) || (t = []);
              for (var l = 0; l < n.length; l++) {
                var u = n[l];
                null == t[l] &&
                  null != u &&
                  (d(u) ? (t[l] = []) : h(u) && (t[l] = {}));
                var s = e(t[l], u, r);
                o(n, l, s) ? delete t[l] : (t[l] = s);
              }
              return r(t);
            }
            if (h(n)) {
              for (var c in n)
                if (
                  n.hasOwnProperty(c) &&
                  (t.hasOwnProperty(c) || null == t[c])
                ) {
                  var f = n[c];
                  d(f)
                    ? (d(t[c]) || (t[c] = []), e(t[c], f, r), (t[c] = r(t[c])))
                    : h(f)
                    ? (h(t[c]) || (t[c] = {}), e(t[c], f, r), (t[c] = r(t[c])))
                    : null == t
                    ? ((t = {}), o(n, c, f) || (t[c] = r(f)))
                    : o(n, c, f)
                    ? delete t[c]
                    : (t[c] = r(f));
                }
              return r(t);
            }
            return r(n);
          },
          i = function (e) {
            return e;
          },
          a = function (e, t, n) {
            return null == n;
          },
          l = function (e, t) {
            return d(e) ? o([], e, t) : o({}, e, t);
          },
          u = function (e) {
            return null == e ? e : h(e) || d(e) ? c(e) : s("" + e, e);
          },
          s = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e;
            return /^-?[1-9]\d*?$/.test(e)
              ? parseInt(e, 10)
              : "0" === e || "-0" === e
              ? 0
              : /^-?\d*\.\d+$/.test(e)
              ? parseFloat(e)
              : !!/^true$/i.test(e) || (!/^false$/i.test(e) && t);
          },
          c = function (e) {
            return o(
              e,
              e,
              function (e) {
                return "string" == typeof e ? s(e) : e;
              },
              function () {
                return !1;
              }
            );
          },
          f = /^\s*function Array()/,
          d = function (e) {
            return null != e && e.push && f.test(e.constructor);
          },
          p = /^\s*function Object()/,
          h = function (e) {
            return null != e && "object" == typeof e && p.test(e.constructor);
          },
          _ = function (e) {
            return (
              null == e ||
              !(!d(e) || e.length) ||
              (!!h(e) && !Object.keys(e).length)
            );
          };
      },
      18: () => {},
      17: (e, t, n) => {
        n.d(t, {
          default: () => r,
        });
        const r = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 50,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 5e3,
            o = arguments.length > 4 ? arguments[4] : void 0,
            i = null,
            a = new Date().getTime(),
            l = function l() {
              new Date().getTime() - a > r
                ? "function" == typeof o && o()
                : e()
                ? t()
                : (clearTimeout(i), (i = setTimeout(l, n)));
            };
          i = setTimeout(l, 1);
        };
      },
      3: (e, t, n) => {
        var r;
        n.d(t, {
          default: () => o,
        });
        try {
          (r = self).self !== r &&
            void 0 !== r.self &&
            "undefined" != typeof window &&
            (r = window);
        } catch (e) {
          r = "undefined" != typeof globalThis ? globalThis : window;
        }
        const o = r;
      },
      27: (e, t, n) => {
        n.d(t, {
          default: () => r,
        });
        const r = function (e, t) {
          return new Promise(function (n, r) {
            var o;
            null == t && (t = 8e3),
              ((o = document.createElement("script")).src = e),
              (o.async = !0),
              (o.type = "text/javascript");
            var i = null,
              a = !1,
              l = function () {
                (o.onerror = o.onreadystatechange = o.onload = null),
                  clearTimeout(i),
                  clearTimeout(s),
                  (i = setTimeout(function () {
                    o && o.parentNode && o.parentNode.removeChild(o);
                  }, 500));
              },
              u = function () {
                var e = o.readyState;
                a ||
                  (e && !/loaded|complete/.test(e)) ||
                  ((a = !0),
                  setTimeout(function () {
                    n(), l();
                  }, 1));
              },
              s = setTimeout(function () {
                (a = !0), l(), r("timeout");
              }, t);
            (o.onerror = function () {
              (a = !0), l(), r("error");
            }),
              (o.onreadystatechange = u),
              (o.onload = u),
              (document.body || document.head).appendChild(o);
          });
        };
      },
      25: (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.d(__webpack_exports__, {
          execScriptTags: () => execScriptTags,
          getScriptTags: () => getScriptTags,
          removeScriptTags: () => removeScriptTags,
        });
        var utilities_script_utils__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(26),
          getScriptTags = function (e) {
            return (
              e.match(
                /<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi
              ) || []
            );
          },
          scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(
            scriptTags
          ) {
            if (!scriptTags) return [];
            scriptTags instanceof Array ||
              (scriptTags = getScriptTags(scriptTags));
            for (var hashes = [], i = 0; i < scriptTags.length; i++) {
              var scriptTag = scriptTags[i],
                hash = {},
                matches = scriptTag.match(/<script.*?>/i);
              matches &&
                ((matches = matches[0].match(/src="([^"]+)"/i)),
                matches &&
                  ((hash.src = matches[1]),
                  (hash.async = /async/i.test(
                    scriptTag.replace(hash.src, "")
                  )))),
                matches ||
                  ((matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i)),
                  matches &&
                    (function () {
                      var src = matches[1];
                      hash.fn = function () {
                        return eval(src);
                      };
                    })()),
                hashes.push(hash);
            }
            return hashes;
          },
          execScriptTags = function (e, t) {
            if (!e) return null;
            var n = scriptTagsToRunScriptsInput(e);
            return (0,
            utilities_script_utils__WEBPACK_IMPORTED_MODULE_0__.runScripts)(
              n
            ).then(t);
          },
          removeScriptTags = function (e) {
            return e.replace(
              /<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g,
              ""
            );
          };
      },
      26: (e, t, n) => {
        n.d(t, {
          runScripts: () => f,
        });
        var r = n(20),
          o = n(12),
          i = n(27);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  u(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function u(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var s = function (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = document.getElementsByTagName("script"),
                r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r],
                i = o.getAttribute("src") || "";
              if (t.ignoreQueryParams) {
                var a = i.split("?"),
                  l = a[0];
                i = l;
              }
              if (
                (!t.scriptRegex &&
                  t.ignoreProtocol &&
                  ((i = i.replace(/^https?:/, "")),
                  (e = e.replace(/^https?:/, ""))),
                t.scriptRegex && t.scriptRegex.test(i))
              )
                return o;
              if (t.testStartsWith && 0 === i.indexOf(e)) return o;
              if (i === e) return o;
            }
            return null;
          },
          c = function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 8e3,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return (
              null == r && (r = 8e3),
              null == o && (o = {}),
              new Promise(function (a) {
                if ((!0 === o.once && (t = s(e)) && (n = !0), !o.once || !n))
                  return (0, i.default)(e, r)
                    .then(a)
                    .catch(function (e) {
                      a(e),
                        setTimeout(function () {
                          console.error(e);
                        }, 1);
                    });
                (t.readyState && !/loaded|complete/.test(t.readyState)) ||
                  setTimeout(function () {
                    a();
                  }, 1);
              })
            );
          },
          f = function () {
            for (
              var e, t = arguments.length, n = new Array(t), o = 0;
              o < t;
              o++
            )
              n[o] = arguments[o];
            (e = n[0] instanceof Array ? n[0] : n), (e = d(e));
            var i = [],
              a = [],
              u = [];
            return (
              e.forEach(function (e) {
                var t = l({}, e),
                  n = new Promise(function (e) {
                    t.resolve = e;
                  });
                (t.promise = n),
                  u.push(t.promise),
                  e.async ? i.push(t) : a.push(t);
              }),
              a.reduce(function (e, t) {
                if (t.fn)
                  try {
                    t.fn();
                  } catch (e) {
                    r.wlog.error(e);
                  } finally {
                    t.resolve();
                  }
                else t.src && c(t.src, null, t).then(t.resolve);
                return e.then(t.promise);
              }, Promise.resolve()),
              setTimeout(function () {
                i.forEach(function (e) {
                  if (e.fn)
                    try {
                      e.fn();
                    } catch (e) {
                      r.wlog.error(e);
                    } finally {
                      e.resolve();
                    }
                  else e.src && c(e.src, null, e).then(e.resolve);
                });
              }, 1),
              Promise.all(u)
            );
          },
          d = function (e) {
            for (var t = [], n = 0; n < e.length; n++) {
              var r = e[n];
              "string" == typeof r
                ? t.push({
                    src: r,
                    async: !1,
                  })
                : (0, o.isObject)(r)
                ? t.push(r)
                : t.push({
                    fn: r,
                    async: !1,
                  });
            }
            return t;
          };
      },
      10: (e, t, n) => {
        n.d(t, {
          seqId: () => o,
        });
        var r = n(2),
          o = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "wistia_",
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = r.default._sequenceVal || 1,
              o = "" + e + n + t;
            return (r.default._sequenceVal = n + 1), o;
          };
      },
      7: (e, t, n) => {
        function r(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function o(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? r(Object(n), !0).forEach(function (t) {
                  i(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n.d(t, {
          standardSvgAttrs: () => a,
        });
        var a = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.width,
            n = e.height,
            r = e.styleOverride,
            i = void 0 === r ? {} : r,
            a = e.ariaHidden,
            l = void 0 !== a && a;
          return {
            x: "0px",
            y: "0px",
            viewBox: "0 0 ".concat(t, " ").concat(n),
            "enable-background": "new 0 0 ".concat(t, " ").concat(n),
            "aria-hidden": "".concat(!!l),
            style: o(
              {
                fill: "#ffffff",
                height: "100%",
                left: 0,
                strokeWidth: 0,
                top: 0,
                width: "100%",
              },
              i
            ),
          };
        };
      },
      59: (e, t, n) => {
        n.d(t, {
          clearTimeouts: () => l,
          doTimeout: () => a,
        });
        var r = n(2),
          o = n(12),
          i = r.default;
        null == i._timeouts && (i._timeouts = {});
        var a = function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
            (0, o.isArray)(e) && (e = e.join("."));
            var r = s(e);
            if ((l(e, r), t)) {
              var a = i._timeouts[r];
              null == a && (a = i._timeouts[r] = {});
              var u = setTimeout(function () {
                delete a[e], t();
              }, n);
              return (a[e] = u), u;
            }
            return i._timeouts[r][e];
          },
          l = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            if (
              ((0, o.isArray)(e) && (e = e.join(".")),
              "__global__" === (n = n || s(e)) && (t = i._timeouts[e]))
            )
              for (var r in t) {
                var a = t[r];
                clearTimeout(a), delete t[r];
              }
            if ((t = i._timeouts[n]))
              for (var l in t) {
                var c = t[l];
                !l.indexOf ||
                  0 !== l.indexOf(e) ||
                  (l.length !== e.length && "." !== l.charAt(e.length)) ||
                  (clearTimeout(c), delete t[l]);
              }
            i.blockSweepTimeouts ||
              ((i.blockSweepTimeouts = !0),
              setTimeout(u, 0),
              setTimeout(function () {
                i.blockSweepTimeouts = !1;
              }, 5e3));
          },
          u = function () {
            for (var e in i._timeouts) {
              var t = i._timeouts[e];
              (0, o.isEmpty)(t) && delete i._timeouts[e];
            }
          },
          s = function (e) {
            var t = e.indexOf(".");
            return t > 0 ? e.substring(0, t) : "__global__";
          };
      },
      22: (e, t, n) => {
        n.d(t, {
          makeWbindable: () => i,
        });
        var r = n(2),
          o = n(23);
        r.default.bindable ||
          (r.default.bindable = {
            bind: function (e, t) {
              return this.specialBind &&
                !0 === this.specialBind.apply(this, arguments)
                ? this
                : t
                ? (o.bind.call(this, e, t), this)
                : void (
                    r.default.warn &&
                    r.default.warn(
                      this.constructor.name,
                      "bind",
                      "falsey value passed in as callback:",
                      t
                    )
                  );
            },
            unbind: function (e, t) {
              return (
                (this.specialUnbind &&
                  !0 === this.specialUnbind.apply(this, arguments)) ||
                  (t
                    ? o.unbind.call(this, e, t)
                    : this._bindings && (this._bindings[e] = []),
                  this._bindings &&
                    this._bindings[e] &&
                    !this._bindings[e].length &&
                    ((this._bindings[e] = null), delete this._bindings[e])),
                this
              );
            },
            on: function (e, t) {
              var n =
                this.specialBind && this.specialBind.apply(this, arguments);
              return "function" == typeof n ? n : o.bind.call(this, e, t);
            },
            off: function (e, t) {
              var n =
                this.specialUnbind && this.specialUnbind.apply(this, arguments);
              return "function" == typeof n ? n : o.unbind.call(this, e, t);
            },
            rebind: function (e, t) {
              return this.unbind(e, t), this.bind(e, t), this;
            },
            trigger: function (e) {
              for (
                var t,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              return (t = o.trigger).call.apply(t, [this, e].concat(r)), this;
            },
            bindNamed: function () {
              return o.bindNamed.apply(this, arguments);
            },
            unbindNamed: function () {
              return o.unbindNamed.apply(this, arguments);
            },
            unbindAllInNamespace: function () {
              return o.unbindAllInNamespace.apply(this, arguments);
            },
          });
        var i = function (e) {
          for (var t in r.default.bindable) {
            var n = r.default.bindable[t];
            e[t] || (e[t] = n);
          }
        };
        r.default.bindable;
      },
      20: (e, t, n) => {
        n.d(t, {
          wlog: () => v,
        });
        var r = n(2),
          o = n(21);
        function i(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return a(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return a(e, t);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var l = {
            ERROR: 0,
            WARNING: 1,
            NOTICE: 2,
            INFO: 3,
            DEBUG: 4,
            error: 0,
            warning: 1,
            notice: 2,
            info: 3,
            debug: 4,
          },
          u = function () {},
          s = function (e) {
            var t = this;
            null == e && (e = {});
            return (
              (t.error = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return t.log(0, n);
              }),
              (t.warn = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return t.log(1, n);
              }),
              (t.notice = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return t.log(1, n);
              }),
              (t.info = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return t.log(3, n);
              }),
              (t.debug = function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                return t.log(4, n);
              }),
              (t.ctx = e),
              t.ctx.initializedAt || t.reset(),
              t
            );
          },
          c = s.prototype;
        (c.reset = function () {
          (this.ctx.level = 0),
            (this.ctx.grep = null),
            (this.ctx.grepv = null),
            (this.ctx.first1000LogLines = []),
            (this.ctx.last1000LogLines = []),
            (this.ctx.initializedAt = new Date().getTime());
        }),
          (c.setLevel = function (e) {
            var t = this.logFunc(3);
            null != l[e]
              ? ((this.ctx.level = l[e]),
                t('Log level set to "'.concat(e, '" (').concat(l[e], ")")))
              : t('Unknown log level "'.concat(e, '"'));
          }),
          (c.setGrep = function (e) {
            this.ctx.grep = e;
          }),
          (c.setGrepv = function (e) {
            this.ctx.grepv = e;
          }),
          (c.first1000LogLines = function () {
            return this.ctx.first1000LogLines;
          }),
          (c.last1000LogLines = function () {
            return this.ctx.last1000LogLines;
          }),
          (c.matchedGrep = function (e) {
            var t = !1;
            if (this.ctx.grep || this.ctx.grepv) {
              for (var n = [], r = 0; r < e.length; r++)
                try {
                  var o = e[r];
                  n.push(o.toString && o.toString());
                } catch (e) {
                  n.push("");
                }
              var i = n.join(" "),
                a = !this.ctx.grep || i.match(this.ctx.grep),
                l = !this.ctx.grepv || !i.match(this.ctx.grepv);
              t = a && l;
            } else t = !0;
            return t;
          }),
          (c.now = function () {
            return "undefined" != typeof performance &&
              "function" == typeof performance.now
              ? performance.now().toFixed(3)
              : Date.now
              ? Date.now() - this.ctx.initializedAt
              : new Date().getTime() - this.ctx.initializedAt;
          }),
          (c.messagesToLogLine = function (e, t, n) {
            var r,
              o = [e, t];
            o = o.concat(n);
            try {
              (r = o.join(" ") || "").length > 200 && (r = r.slice(0, 200));
            } catch (e) {
              r = "could not serialize";
            }
            return r;
          }),
          (c.persistLine = function (e) {
            this.ctx.first1000LogLines.length < 1e3
              ? this.ctx.first1000LogLines.push(e)
              : (this.ctx.last1000LogLines.length >= 1e3 &&
                  this.ctx.last1000LogLines.shift(),
                this.ctx.last1000LogLines.push(e));
          }),
          (c.log = function (e, t) {
            var n,
              r = e <= this.ctx.level,
              a = e < 4,
              l = (r || a) && this.matchedGrep(t);
            if (
              (0 === e &&
                (0, o.globalTrigger)("problem", {
                  type: "error-logged",
                  data: {
                    messages: t,
                  },
                }),
              l && (r || a) && (n = this.now()),
              a && l)
            ) {
              var u = this.messagesToLogLine(e, n, t);
              this.persistLine(u);
            }
            if (r && l) {
              var s,
                c = this.logFunc(e);
              1 === t.length && (s = t[0]) instanceof Error
                ? (c(s.message), s.stack && c(s.stack))
                : c.apply(void 0, i(t));
            }
          });
        var f = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            console.error.apply(console, t);
          },
          d = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            console.warn.apply(console, t);
          },
          p = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            console.info.apply(console, t);
          },
          h = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            console.debug.apply(console, t);
          },
          _ = function (e) {
            console.log.apply(console, e);
          };
        (c.logFunc = function (e) {
          return (
            null == e && (e = this.level),
            console
              ? (0 === e
                  ? (t = f)
                  : 1 === e
                  ? (t = d)
                  : 3 === e
                  ? (t = p)
                  : 4 === e && (t = h),
                t || (t = _),
                "function" != typeof t && ((this.noConsoleLog = !0), (t = u)),
                t)
              : u
          );
          var t;
        }),
          (c.maybePrefix = function (e, t) {
            if (e) {
              if ("function" == typeof e)
                try {
                  e = e();
                } catch (t) {
                  e = 'prefix err "'.concat(t.message, '"');
                }
              return e instanceof Array ? e.concat(t) : [e].concat(t);
            }
            return t;
          }),
          (c.getPrefixedFunctions = function (e) {
            var t = this;
            return {
              log: function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return t.log(0, t.maybePrefix(e, r));
              },
              error: function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return t.log(0, t.maybePrefix(e, r));
              },
              warn: function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return t.log(1, t.maybePrefix(e, r));
              },
              notice: function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return t.log(1, t.maybePrefix(e, r));
              },
              info: function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return t.log(3, t.maybePrefix(e, r));
              },
              debug: function () {
                for (
                  var n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return t.log(4, t.maybePrefix(e, r));
              },
            };
          }),
          r.default && null == r.default.wlogCtx && (r.default.wlogCtx = {});
        var v = new s(r.default.wlogCtx);
      },
      2: (e, t, n) => {
        n.d(t, {
          default: () => i,
        });
        var r = n(3);
        null == r.default.Wistia && (r.default.Wistia = {});
        var o = r.default.Wistia;
        null == o._initializers && (o._initializers = {}),
          null == o._destructors && (o._destructors = {}),
          null == o.mixin &&
            (o.mixin = function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            });
        const i = r.default.Wistia;
      },
      6: (e, t, n) => {
        n.d(t, {
          Component: () => v,
          h: () => p,
          render: () => B,
        });
        var r,
          o,
          i,
          a,
          l,
          u = {},
          s = [],
          c =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function f(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function d(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function p(e, t, n) {
          var o,
            i,
            a,
            l = {};
          for (a in t)
            "key" == a ? (o = t[a]) : "ref" == a ? (i = t[a]) : (l[a] = t[a]);
          if (
            (arguments.length > 2 &&
              (l.children = arguments.length > 3 ? r.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
          )
            for (a in e.defaultProps)
              void 0 === l[a] && (l[a] = e.defaultProps[a]);
          return h(e, l, o, i, null);
        }
        function h(e, t, n, r, a) {
          var l = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++i : a,
          };
          return null == a && null != o.vnode && o.vnode(l), l;
        }
        function _(e) {
          return e.children;
        }
        function v(e, t) {
          (this.props = e), (this.context = t);
        }
        function y(e, t) {
          if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? y(e) : null;
        }
        function g(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
              }
            return g(e);
          }
        }
        function b(e) {
          ((!e.__d && (e.__d = !0) && a.push(e) && !m.__r++) ||
            l !== o.debounceRendering) &&
            ((l = o.debounceRendering) || setTimeout)(m);
        }
        function m() {
          for (var e; (m.__r = a.length); )
            (e = a.sort(function (e, t) {
              return e.__v.__b - t.__v.__b;
            })),
              (a = []),
              e.some(function (e) {
                var t, n, r, o, i, a;
                e.__d &&
                  ((i = (o = (t = e).__v).__e),
                  (a = t.__P) &&
                    ((n = []),
                    ((r = f({}, o)).__v = o.__v + 1),
                    E(
                      a,
                      o,
                      r,
                      t.__n,
                      void 0 !== a.ownerSVGElement,
                      null != o.__h ? [i] : null,
                      n,
                      null == i ? y(o) : i,
                      o.__h
                    ),
                    j(n, o),
                    o.__e != i && g(o)));
              });
        }
        function w(e, t, n, r, o, i, a, l, c, f) {
          var d,
            p,
            v,
            g,
            b,
            m,
            w,
            T = (r && r.__k) || s,
            k = T.length;
          for (n.__k = [], d = 0; d < t.length; d++)
            if (
              null !=
              (g = n.__k[d] =
                null == (g = t[d]) || "boolean" == typeof g
                  ? null
                  : "string" == typeof g ||
                    "number" == typeof g ||
                    "bigint" == typeof g
                  ? h(null, g, null, null, g)
                  : Array.isArray(g)
                  ? h(
                      _,
                      {
                        children: g,
                      },
                      null,
                      null,
                      null
                    )
                  : g.__b > 0
                  ? h(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v)
                  : g)
            ) {
              if (
                ((g.__ = n),
                (g.__b = n.__b + 1),
                null === (v = T[d]) ||
                  (v && g.key == v.key && g.type === v.type))
              )
                T[d] = void 0;
              else
                for (p = 0; p < k; p++) {
                  if ((v = T[p]) && g.key == v.key && g.type === v.type) {
                    T[p] = void 0;
                    break;
                  }
                  v = null;
                }
              E(e, g, (v = v || u), o, i, a, l, c, f),
                (b = g.__e),
                (p = g.ref) &&
                  v.ref != p &&
                  (w || (w = []),
                  v.ref && w.push(v.ref, null, g),
                  w.push(p, g.__c || b, g)),
                null != b
                  ? (null == m && (m = b),
                    "function" == typeof g.type && g.__k === v.__k
                      ? (g.__d = c = O(g, c, e))
                      : (c = P(e, g, v, T, b, c)),
                    "function" == typeof n.type && (n.__d = c))
                  : c && v.__e == c && c.parentNode != e && (c = y(v));
            }
          for (n.__e = m, d = k; d--; ) null != T[d] && C(T[d], T[d]);
          if (w) for (d = 0; d < w.length; d++) L(w[d], w[++d], w[++d]);
        }
        function O(e, t, n) {
          for (var r, o = e.__k, i = 0; o && i < o.length; i++)
            (r = o[i]) &&
              ((r.__ = e),
              (t =
                "function" == typeof r.type
                  ? O(r, t, n)
                  : P(n, r, r, o, r.__e, t)));
          return t;
        }
        function P(e, t, n, r, o, i) {
          var a, l, u;
          if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
          else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e)
              e.appendChild(o), (a = null);
            else {
              for (l = i, u = 0; (l = l.nextSibling) && u < r.length; u += 2)
                if (l == o) break e;
              e.insertBefore(o, i), (a = i);
            }
          return void 0 !== a ? a : o.nextSibling;
        }
        function T(e, t, n) {
          "-" === t[0]
            ? e.setProperty(t, n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || c.test(t)
                  ? n
                  : n + "px");
        }
        function k(e, t, n, r, o) {
          var i;
          e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || T(e.style, t, "");
              if (n) for (t in n) (r && n[t] === r[t]) || T(e.style, t, n[t]);
            }
          else if ("o" === t[0] && "n" === t[1])
            (i = t !== (t = t.replace(/Capture$/, ""))),
              (t =
                t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + i] = n),
              n
                ? r || e.addEventListener(t, i ? x : S, i)
                : e.removeEventListener(t, i ? x : S, i);
          else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "href" !== t &&
              "list" !== t &&
              "form" !== t &&
              "tabIndex" !== t &&
              "download" !== t &&
              t in e
            )
              try {
                e[t] = null == n ? "" : n;
                break e;
              } catch (e) {}
            "function" == typeof n ||
              (null == n || (!1 === n && -1 == t.indexOf("-"))
                ? e.removeAttribute(t)
                : e.setAttribute(t, n));
          }
        }
        function S(e) {
          this.l[e.type + !1](o.event ? o.event(e) : e);
        }
        function x(e) {
          this.l[e.type + !0](o.event ? o.event(e) : e);
        }
        function E(e, t, n, r, i, a, l, u, s) {
          var c,
            d,
            p,
            h,
            y,
            g,
            b,
            m,
            O,
            P,
            T,
            k,
            S,
            x,
            E,
            j = t.type;
          if (void 0 !== t.constructor) return null;
          null != n.__h &&
            ((s = n.__h), (u = t.__e = n.__e), (t.__h = null), (a = [u])),
            (c = o.__b) && c(t);
          try {
            e: if ("function" == typeof j) {
              if (
                ((m = t.props),
                (O = (c = j.contextType) && r[c.__c]),
                (P = c ? (O ? O.props.value : c.__) : r),
                n.__c
                  ? (b = (d = t.__c = n.__c).__ = d.__E)
                  : ("prototype" in j && j.prototype.render
                      ? (t.__c = d = new j(m, P))
                      : ((t.__c = d = new v(m, P)),
                        (d.constructor = j),
                        (d.render = D)),
                    O && O.sub(d),
                    (d.props = m),
                    d.state || (d.state = {}),
                    (d.context = P),
                    (d.__n = r),
                    (p = d.__d = !0),
                    (d.__h = []),
                    (d._sb = [])),
                null == d.__s && (d.__s = d.state),
                null != j.getDerivedStateFromProps &&
                  (d.__s == d.state && (d.__s = f({}, d.__s)),
                  f(d.__s, j.getDerivedStateFromProps(m, d.__s))),
                (h = d.props),
                (y = d.state),
                p)
              )
                null == j.getDerivedStateFromProps &&
                  null != d.componentWillMount &&
                  d.componentWillMount(),
                  null != d.componentDidMount &&
                    d.__h.push(d.componentDidMount);
              else {
                if (
                  (null == j.getDerivedStateFromProps &&
                    m !== h &&
                    null != d.componentWillReceiveProps &&
                    d.componentWillReceiveProps(m, P),
                  (!d.__e &&
                    null != d.shouldComponentUpdate &&
                    !1 === d.shouldComponentUpdate(m, d.__s, P)) ||
                    t.__v === n.__v)
                ) {
                  for (
                    d.props = m,
                      d.state = d.__s,
                      t.__v !== n.__v && (d.__d = !1),
                      d.__v = t,
                      t.__e = n.__e,
                      t.__k = n.__k,
                      t.__k.forEach(function (e) {
                        e && (e.__ = t);
                      }),
                      T = 0;
                    T < d._sb.length;
                    T++
                  )
                    d.__h.push(d._sb[T]);
                  (d._sb = []), d.__h.length && l.push(d);
                  break e;
                }
                null != d.componentWillUpdate &&
                  d.componentWillUpdate(m, d.__s, P),
                  null != d.componentDidUpdate &&
                    d.__h.push(function () {
                      d.componentDidUpdate(h, y, g);
                    });
              }
              if (
                ((d.context = P),
                (d.props = m),
                (d.__v = t),
                (d.__P = e),
                (k = o.__r),
                (S = 0),
                "prototype" in j && j.prototype.render)
              ) {
                for (
                  d.state = d.__s,
                    d.__d = !1,
                    k && k(t),
                    c = d.render(d.props, d.state, d.context),
                    x = 0;
                  x < d._sb.length;
                  x++
                )
                  d.__h.push(d._sb[x]);
                d._sb = [];
              } else
                do {
                  (d.__d = !1),
                    k && k(t),
                    (c = d.render(d.props, d.state, d.context)),
                    (d.state = d.__s);
                } while (d.__d && ++S < 25);
              (d.state = d.__s),
                null != d.getChildContext &&
                  (r = f(f({}, r), d.getChildContext())),
                p ||
                  null == d.getSnapshotBeforeUpdate ||
                  (g = d.getSnapshotBeforeUpdate(h, y)),
                (E =
                  null != c && c.type === _ && null == c.key
                    ? c.props.children
                    : c),
                w(e, Array.isArray(E) ? E : [E], t, n, r, i, a, l, u, s),
                (d.base = t.__e),
                (t.__h = null),
                d.__h.length && l.push(d),
                b && (d.__E = d.__ = null),
                (d.__e = !1);
            } else
              null == a && t.__v === n.__v
                ? ((t.__k = n.__k), (t.__e = n.__e))
                : (t.__e = A(n.__e, t, n, r, i, a, l, s));
            (c = o.diffed) && c(t);
          } catch (e) {
            (t.__v = null),
              (s || null != a) &&
                ((t.__e = u), (t.__h = !!s), (a[a.indexOf(u)] = null)),
              o.__e(e, t, n);
          }
        }
        function j(e, t) {
          o.__c && o.__c(t, e),
            e.some(function (t) {
              try {
                (e = t.__h),
                  (t.__h = []),
                  e.some(function (e) {
                    e.call(t);
                  });
              } catch (e) {
                o.__e(e, t.__v);
              }
            });
        }
        function A(e, t, n, o, i, a, l, s) {
          var c,
            f,
            p,
            h = n.props,
            _ = t.props,
            v = t.type,
            g = 0;
          if (("svg" === v && (i = !0), null != a))
            for (; g < a.length; g++)
              if (
                (c = a[g]) &&
                "setAttribute" in c == !!v &&
                (v ? c.localName === v : 3 === c.nodeType)
              ) {
                (e = c), (a[g] = null);
                break;
              }
          if (null == e) {
            if (null === v) return document.createTextNode(_);
            (e = i
              ? document.createElementNS("http://www.w3.org/2000/svg", v)
              : document.createElement(v, _.is && _)),
              (a = null),
              (s = !1);
          }
          if (null === v) h === _ || (s && e.data === _) || (e.data = _);
          else {
            if (
              ((a = a && r.call(e.childNodes)),
              (f = (h = n.props || u).dangerouslySetInnerHTML),
              (p = _.dangerouslySetInnerHTML),
              !s)
            ) {
              if (null != a)
                for (h = {}, g = 0; g < e.attributes.length; g++)
                  h[e.attributes[g].name] = e.attributes[g].value;
              (p || f) &&
                ((p &&
                  ((f && p.__html == f.__html) || p.__html === e.innerHTML)) ||
                  (e.innerHTML = (p && p.__html) || ""));
            }
            if (
              ((function (e, t, n, r, o) {
                var i;
                for (i in n)
                  "children" === i ||
                    "key" === i ||
                    i in t ||
                    k(e, i, null, n[i], r);
                for (i in t)
                  (o && "function" != typeof t[i]) ||
                    "children" === i ||
                    "key" === i ||
                    "value" === i ||
                    "checked" === i ||
                    n[i] === t[i] ||
                    k(e, i, t[i], n[i], r);
              })(e, _, h, i, s),
              p)
            )
              t.__k = [];
            else if (
              ((g = t.props.children),
              w(
                e,
                Array.isArray(g) ? g : [g],
                t,
                n,
                o,
                i && "foreignObject" !== v,
                a,
                l,
                a ? a[0] : n.__k && y(n, 0),
                s
              ),
              null != a)
            )
              for (g = a.length; g--; ) null != a[g] && d(a[g]);
            s ||
              ("value" in _ &&
                void 0 !== (g = _.value) &&
                (g !== e.value ||
                  ("progress" === v && !g) ||
                  ("option" === v && g !== h.value)) &&
                k(e, "value", g, h.value, !1),
              "checked" in _ &&
                void 0 !== (g = _.checked) &&
                g !== e.checked &&
                k(e, "checked", g, h.checked, !1));
          }
          return e;
        }
        function L(e, t, n) {
          try {
            "function" == typeof e ? e(t) : (e.current = t);
          } catch (e) {
            o.__e(e, n);
          }
        }
        function C(e, t, n) {
          var r, i;
          if (
            (o.unmount && o.unmount(e),
            (r = e.ref) &&
              ((r.current && r.current !== e.__e) || L(r, null, t)),
            null != (r = e.__c))
          ) {
            if (r.componentWillUnmount)
              try {
                r.componentWillUnmount();
              } catch (e) {
                o.__e(e, t);
              }
            (r.base = r.__P = null), (e.__c = void 0);
          }
          if ((r = e.__k))
            for (i = 0; i < r.length; i++)
              r[i] && C(r[i], t, n || "function" != typeof e.type);
          n || null == e.__e || d(e.__e), (e.__ = e.__e = e.__d = void 0);
        }
        function D(e, t, n) {
          return this.constructor(e, n);
        }
        function B(e, t, n) {
          var i, a, l;
          o.__ && o.__(e, t),
            (a = (i = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (l = []),
            E(
              t,
              (e = ((!i && n) || t).__k = p(_, null, [e])),
              a || u,
              u,
              void 0 !== t.ownerSVGElement,
              !i && n
                ? [n]
                : a
                ? null
                : t.firstChild
                ? r.call(t.childNodes)
                : null,
              l,
              !i && n ? n : a ? a.__e : t.firstChild,
              i
            ),
            j(l, e);
        }
        (r = s.slice),
          (o = {
            __e: function (e, t, n, r) {
              for (var o, i, a; (t = t.__); )
                if ((o = t.__c) && !o.__)
                  try {
                    if (
                      ((i = o.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (o.setState(i.getDerivedStateFromError(e)),
                        (a = o.__d)),
                      null != o.componentDidCatch &&
                        (o.componentDidCatch(e, r || {}), (a = o.__d)),
                      a)
                    )
                      return (o.__E = o);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (i = 0),
          (v.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = f({}, this.state))),
              "function" == typeof e && (e = e(f({}, n), this.props)),
              e && f(n, e),
              null != e && this.__v && (t && this._sb.push(t), b(this));
          }),
          (v.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), b(this));
          }),
          (v.prototype.render = _),
          (a = []),
          (m.__r = 0);
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var n = (__webpack_module_cache__[e] = {
      exports: {},
    });
    return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.d = (e, t) => {
    for (var n in t)
      __webpack_require__.o(t, n) &&
        !__webpack_require__.o(e, n) &&
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
  }),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t));
  var __webpack_exports__ = {},
    wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__,
    _embeds_media_players_vulcanV2Player_video_controls_PlayPauseLoadingCircleControl_PlayPauseLoadingCircleControl__WEBPACK_IMPORTED_MODULE_1__;
  (wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2)),
    (_embeds_media_players_vulcanV2Player_video_controls_PlayPauseLoadingCircleControl_PlayPauseLoadingCircleControl__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(547)),
    wistia_namespace_js__WEBPACK_IMPORTED_MODULE_0__.default.define(
      "playPauseLoadingControl.js",
      {
        PlayPauseLoadingCircleControl:
          _embeds_media_players_vulcanV2Player_video_controls_PlayPauseLoadingCircleControl_PlayPauseLoadingCircleControl__WEBPACK_IMPORTED_MODULE_1__.default,
      }
    );
})();
