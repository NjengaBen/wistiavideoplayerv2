function preload(e) {
  $(e).each(function () {
    $("<img />").attr("src", this).appendTo("body").css("display", "none");
  });
}
function ctrlShiftKey(e, t) {
  return e.ctrlKey && e.shiftKey && e.keyCode === t.charCodeAt(0);
}
$(document).ready(function () {
  $(".actoggle").click(function (e) {
    e.preventDefault();
    let t = $(this);
    t.next().hasClass("show")
      ? (t.next().removeClass("show"), t.next().slideUp(350))
      : (t.parent().parent().find("li .inner").removeClass("show"),
        t.parent().parent().find("li .inner").slideUp(350),
        t.next().toggleClass("show"),
        t.next().slideToggle(350));
  });
}),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(function () {
          return t(e, document, {});
        })
      : "undefined" != typeof exports
      ? global && global.testEnv
        ? t(global.testEnv, global.testEnv.document, exports)
        : t(e, document, exports)
      : (e.Bounceback = t(e, document, {}));
  })(window, function (r, a, o) {
    function i(e, t, n) {
      e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1);
    }
    var e = r.Bounceback;
    (o.noConflict = function () {
      return (r.Bounceback = e), this;
    }),
      (o.version = "1.0.0"),
      (o.options = {
        distance: 100,
        maxDisplay: 1,
        method: "auto",
        sensitivity: 10,
        cookieLife: 365,
        scrollDelay: 500,
        aggressive: !1,
        checkReferrer: !0,
        storeName: "bounceback-visited",
        onBounce: function () {
          return o;
        },
      }),
      (o.data = {
        get: function (e) {
          if (r.localStorage) return r.localStorage.getItem(e) || "";
          for (
            var t = a.cookie.split(";"), n = -1, o = [], i = t.length;
            ++n < i;

          )
            if ((o = t[n].split("="))[0] == e) return o.shift(), o.join("=");
          return "";
        },
        set: function (e, t) {
          var n;
          return (
            r.localStorage
              ? r.localStorage.setItem(e, t)
              : ((n = new Date()).setDate(n.getDate() + o.options.cookieLife),
                (a.cookie =
                  e + "=" + t + "; expires=" + n.toUTCString() + ";path=/;")),
            this
          );
        },
      });
    var t = 0;
    return (
      (o.onBounce = function () {
        t++,
          (!this.options.maxDisplay || t <= this.options.maxDisplay) &&
            this.options.onBounce();
      }),
      (/(android|bb\d+|meego).+mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
        /(android|bb\d+|meego).+mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.platform
        ) ||
        (/\b(iPad)\b/.test(navigator.userAgent) &&
          /WebKit/.test(navigator.userAgent) &&
          !window.MSStream) ||
        ("MacIntel" === navigator.platform &&
          navigator.maxTouchPoints &&
          5 === navigator.maxTouchPoints)) &&
        (o.isMobile = !0),
      (o.disabled = !1),
      (o.activated = !1),
      (o.disable = function () {
        return (this.disabled = !0), this;
      }),
      (o.enable = function () {
        return (this.disabled = !1), this;
      }),
      (o.activate = function (e) {
        var t, n;
        "history" == e
          ? "replaceState" in r.history
            ? (r.history.replaceState(
                {
                  isBouncing: !0,
                },
                r.title
              ),
              r.history.pushState(null, r.title),
              i(r, "popstate", function (e) {
                r.history.state && r.history.state.isBouncing && o.onBounce();
              }))
            : "onhashchange" in r &&
              (r.location.replace("#bht"),
              (r.location.hash = ""),
              i(r, "hashchange", function () {
                "bht" === r.location.hash.substr(-3) && o.onBounce();
              }))
          : ((t = null),
            (n = []),
            i(a, "mousemove", function (e) {
              n.unshift({
                x: e.clientX,
                y: e.clientY,
              }),
                (n = n.slice(0, 10));
            }),
            i(a, "mouseout", function (e) {
              var t;
              o.disabled ||
                ((!(t = e.relatedTarget || e.toElement) ||
                  "HTML" == t.nodeName) &&
                  e.clientY <= o.options.distance &&
                  10 == n.length &&
                  n[0].y < n[9].y &&
                  n[9].y - n[0].y > o.options.sensitivity &&
                  o.onBounce());
            }),
            this.options.scrollDelay &&
              i(r, "scroll", function (e) {
                o.disabled ||
                  ((o.disabled = !0),
                  clearTimeout(t),
                  (t = setTimeout(function () {
                    o.disabled = !1;
                  }, o.options.scrollDelay)));
              }));
      }),
      (o.init = function (e) {
        var t, n;
        for (t in ((e = e || {}), this.options))
          this.options.hasOwnProperty(t) &&
            !e.hasOwnProperty(t) &&
            (e[t] = this.options[t]);
        return (
          (this.options = e).checkReferrer &&
            a.referrer &&
            (((n = a.createElement("a")).href = a.referrer),
            n.host == r.location.host && this.data.set(e.storeName, "1")),
          this.activated ||
            (!e.aggressive && this.data.get(e.storeName)) ||
            ((this.activated = !0),
            "history" === e.method || ("auto" === e.method && this.isMobile)
              ? this.activate("history")
              : this.activate("mouse"),
            this.data.set(e.storeName, "1")),
          this
        );
      }),
      o
    );
  }),
  (function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
      ? (module.exports = function (e, t) {
          return (
            void 0 === t &&
              (t =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(e)),
            n(t),
            t
          );
        })
      : n(jQuery);
  })(function (u) {
    "use strict";
    function o(e, t) {
      if (!(this instanceof o)) {
        var n = new o(e, t);
        return n.open(), n;
      }
      (this.id = o.id++),
        this.setup(e, t),
        this.chainCallbacks(o._callbackChain);
    }
    var i, r, a, n, s, c;
    void 0 !== u
      ? u.fn.jquery.match(/-ajax/)
        ? "console" in window &&
          window.console.info(
            "Featherlight needs regular jQuery, not the slim version."
          )
        : ((i = []),
          (r = function (t) {
            return (i = u.grep(i, function (e) {
              return e !== t && 0 < e.$instance.closest("body").length;
            }));
          }),
          (s = function (e) {
            u.each(o.opened().reverse(), function () {
              return e.isDefaultPrevented() || !1 !== this[n[e.type]](e)
                ? void 0
                : (e.preventDefault(), e.stopPropagation(), !1);
            });
          }),
          (c = function (e) {
            var t;
            e !== o._globalHandlerInstalled &&
              ((o._globalHandlerInstalled = e),
              (t = u
                .map(n, function (e, t) {
                  return t + "." + o.prototype.namespace;
                })
                .join(" ")),
              u(window)[e ? "on" : "off"](t, s));
          }),
          (o.prototype = {
            constructor: o,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !(n = {
              keyup: "onKeyUp",
              resize: "onResize",
            }),
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !(a = {
              allow: 1,
              allowfullscreen: 1,
              frameborder: 1,
              height: 1,
              longdesc: 1,
              marginheight: 1,
              marginwidth: 1,
              mozallowfullscreen: 1,
              name: 1,
              referrerpolicy: 1,
              sandbox: 1,
              scrolling: 1,
              src: 1,
              srcdoc: 1,
              style: 1,
              webkitallowfullscreen: 1,
              width: 1,
            }),
            otherClose: null,
            beforeOpen: u.noop,
            beforeContent: u.noop,
            beforeClose: u.noop,
            afterOpen: u.noop,
            afterContent: u.noop,
            afterClose: u.noop,
            onKeyUp: u.noop,
            onResize: u.noop,
            type: null,
            contentFilters: [
              "jquery",
              "image",
              "html",
              "ajax",
              "iframe",
              "text",
            ],
            setup: function (e, t) {
              "object" != typeof e ||
                e instanceof u != 0 ||
                t ||
                ((t = e), (e = void 0));
              var n = u.extend(this, t, {
                  target: e,
                }),
                e = n.resetCss ? n.namespace + "-reset" : n.namespace,
                e = u(
                  n.background ||
                    [
                      '<div class="' + e + "-loading " + e + '">',
                      '<div class="' + e + '-content">',
                      '<button class="' +
                        e +
                        "-close-icon " +
                        n.namespace +
                        '-close" aria-label="Close">',
                      n.closeIcon,
                      "</button>",
                      '<div class="' +
                        n.namespace +
                        '-inner">' +
                        n.loading +
                        "</div>",
                      "</div>",
                      "</div>",
                    ].join("")
                ),
                o =
                  "." +
                  n.namespace +
                  "-close" +
                  (n.otherClose ? "," + n.otherClose : "");
              return (
                (n.$instance = e.clone().addClass(n.variant)),
                n.$instance.on(
                  n.closeTrigger + "." + n.namespace,
                  function (e) {
                    var t;
                    e.isDefaultPrevented() ||
                      ((t = u(e.target)),
                      (("background" === n.closeOnClick &&
                        t.is("." + n.namespace)) ||
                        "anywhere" === n.closeOnClick ||
                        t.closest(o).length) &&
                        (n.close(e), e.preventDefault()));
                  }
                ),
                this
              );
            },
            getContent: function () {
              if (!1 !== this.persist && this.$content) return this.$content;
              function e(e) {
                return t.$currentTarget && t.$currentTarget.attr(e);
              }
              var t = this,
                n = this.constructor.contentFilters,
                o = e(t.targetAttr),
                i = t.target || o || "",
                r = n[t.type];
              if (
                (!r && i in n && ((r = n[i]), (i = t.target && o)),
                (i = i || e("href") || ""),
                !r)
              )
                for (var a in n) t[a] && ((r = n[a]), (i = t[a]));
              if (!r) {
                var s = i,
                  i = null;
                if (
                  (u.each(t.contentFilters, function () {
                    return (
                      (r = n[this]),
                      !(i =
                        !(i = r.test ? r.test(s) : i) &&
                        r.regex &&
                        s.match &&
                        s.match(r.regex)
                          ? s
                          : i)
                    );
                  }),
                  !i)
                )
                  return (
                    "console" in window &&
                      window.console.error(
                        "Featherlight: no content filter found " +
                          (s ? ' for "' + s + '"' : " (no target specified)")
                      ),
                    !1
                  );
              }
              return r.process.call(t, i);
            },
            setContent: function (e) {
              return (
                this.$instance.removeClass(this.namespace + "-loading"),
                this.$instance.toggleClass(
                  this.namespace + "-iframe",
                  e.is("iframe")
                ),
                this.$instance
                  .find("." + this.namespace + "-inner")
                  .not(e)
                  .slice(1)
                  .remove()
                  .end()
                  .replaceWith(u.contains(this.$instance[0], e[0]) ? "" : e),
                (this.$content = e.addClass(this.namespace + "-inner")),
                this
              );
            },
            open: function (t) {
              var n = this;
              if (
                (n.$instance.hide().appendTo(n.root),
                !((t && t.isDefaultPrevented()) || !1 === n.beforeOpen(t)))
              ) {
                t && t.preventDefault();
                var e = n.getContent();
                if (e)
                  return (
                    i.push(n),
                    c(!0),
                    n.$instance.fadeIn(n.openSpeed),
                    n.beforeContent(t),
                    u
                      .when(e)
                      .always(function (e) {
                        e && (n.setContent(e), n.afterContent(t));
                      })
                      .then(n.$instance.promise())
                      .done(function () {
                        n.afterOpen(t);
                      })
                  );
              }
              return n.$instance.detach(), u.Deferred().reject().promise();
            },
            close: function (e) {
              var t = this,
                n = u.Deferred();
              return (
                !1 === t.beforeClose(e)
                  ? n.reject()
                  : (0 === r(t).length && c(!1),
                    t.$instance.fadeOut(t.closeSpeed, function () {
                      t.$instance.detach(), t.afterClose(e), n.resolve();
                    })),
                n.promise()
              );
            },
            resize: function (e, t) {
              var n;
              e &&
                t &&
                (this.$content.css("width", "").css("height", ""),
                1 <
                  (n = Math.max(
                    e / (this.$content.parent().width() - 1),
                    t / (this.$content.parent().height() - 1)
                  )) &&
                  ((n = t / Math.floor(t / n)),
                  this.$content
                    .css("width", e / n + "px")
                    .css("height", t / n + "px")));
            },
            chainCallbacks: function (e) {
              for (var t in e)
                this[t] = u.proxy(e[t], this, u.proxy(this[t], this));
            },
          }),
          u.extend(o, {
            id: 0,
            autoBind: "[data-featherlight]",
            defaults: o.prototype,
            contentFilters: {
              jquery: {
                regex: /^[#.]\w/,
                test: function (e) {
                  return e instanceof u && e;
                },
                process: function (e) {
                  return !1 !== this.persist ? u(e) : u(e).clone(!0);
                },
              },
              image: {
                regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                process: function (e) {
                  var t = u.Deferred(),
                    n = new Image(),
                    o = u(
                      '<img src="' +
                        e +
                        '" alt="" class="' +
                        this.namespace +
                        '-image" />'
                    );
                  return (
                    (n.onload = function () {
                      (o.naturalWidth = n.width),
                        (o.naturalHeight = n.height),
                        t.resolve(o);
                    }),
                    (n.onerror = function () {
                      t.reject(o);
                    }),
                    (n.src = e),
                    t.promise()
                  );
                },
              },
              html: {
                regex: /^\s*<[\w!][^<]*>/,
                process: function (e) {
                  return u(e);
                },
              },
              ajax: {
                regex: /./,
                process: function (e) {
                  var n = u.Deferred(),
                    o = u("<div></div>").load(e, function (e, t) {
                      "error" !== t && n.resolve(o.contents()), n.reject();
                    });
                  return n.promise();
                },
              },
              iframe: {
                process: function (e) {
                  var t = new u.Deferred(),
                    n = u("<iframe/>"),
                    o = (function (e, t) {
                      var n,
                        o = {},
                        i = new RegExp("^" + t + "([A-Z])(.*)");
                      for (n in e) {
                        var r = n.match(i);
                        r &&
                          (o[
                            (
                              r[1] + r[2].replace(/([A-Z])/g, "-$1")
                            ).toLowerCase()
                          ] = e[n]);
                      }
                      return o;
                    })(this, "iframe"),
                    i = (function (e, t) {
                      var n,
                        o = {};
                      for (n in e) n in t && ((o[n] = e[n]), delete e[n]);
                      return o;
                    })(o, a);
                  return (
                    n
                      .hide()
                      .attr("src", e)
                      .attr(i)
                      .css(o)
                      .on("load", function () {
                        t.resolve(n.show());
                      })
                      .appendTo(
                        this.$instance.find("." + this.namespace + "-content")
                      ),
                    t.promise()
                  );
                },
              },
              text: {
                process: function (e) {
                  return u("<div>", {
                    text: e,
                  });
                },
              },
            },
            functionAttributes: [
              "beforeOpen",
              "afterOpen",
              "beforeContent",
              "afterContent",
              "beforeClose",
              "afterClose",
            ],
            readElementConfig: function (e, t) {
              var n = this,
                o = new RegExp("^data-" + t + "-(.*)"),
                i = {};
              return (
                e &&
                  e.attributes &&
                  u.each(e.attributes, function () {
                    var e = this.name.match(o);
                    if (e) {
                      var t = this.value,
                        e = u.camelCase(e[1]);
                      if (0 <= u.inArray(e, n.functionAttributes))
                        t = new Function(t);
                      else
                        try {
                          t = JSON.parse(t);
                        } catch (e) {}
                      i[e] = t;
                    }
                  }),
                i
              );
            },
            extend: function (e, t) {
              function n() {
                this.constructor = e;
              }
              return (
                (n.prototype = this.prototype),
                (e.prototype = new n()),
                (e.__super__ = this.prototype),
                u.extend(e, this, t),
                (e.defaults = e.prototype),
                e
              );
            },
            attach: function (i, r, a) {
              var s = this;
              "object" != typeof r ||
                r instanceof u != 0 ||
                a ||
                ((a = r), (r = void 0));
              var c,
                e = (a = u.extend({}, a)).namespace || s.defaults.namespace,
                l = u.extend({}, s.defaults, s.readElementConfig(i[0], e), a),
                e = function (e) {
                  var t = u(e.currentTarget),
                    n = u.extend(
                      {
                        $source: i,
                        $currentTarget: t,
                      },
                      s.readElementConfig(i[0], l.namespace),
                      s.readElementConfig(e.currentTarget, l.namespace),
                      a
                    ),
                    o = c || t.data("featherlight-persisted") || new s(r, n);
                  "shared" === o.persist
                    ? (c = o)
                    : !1 !== o.persist && t.data("featherlight-persisted", o),
                    n.$currentTarget.blur && n.$currentTarget.blur(),
                    o.open(e);
                };
              return (
                i.on(l.openTrigger + "." + l.namespace, l.filter, e),
                {
                  filter: l.filter,
                  handler: e,
                }
              );
            },
            current: function () {
              var e = this.opened();
              return e[e.length - 1] || null;
            },
            opened: function () {
              var t = this;
              return (
                r(),
                u.grep(i, function (e) {
                  return e instanceof t;
                })
              );
            },
            close: function (e) {
              var t = this.current();
              return t ? t.close(e) : void 0;
            },
            _onReady: function () {
              var o,
                i = this;
              i.autoBind &&
                ((o = u(i.autoBind)).each(function () {
                  i.attach(u(this));
                }),
                u(document).on("click", i.autoBind, function (e) {
                  var t, n;
                  e.isDefaultPrevented() ||
                    ((t = u(e.currentTarget)),
                    o.length !== (o = o.add(t)).length &&
                      (!(n = i.attach(t)).filter ||
                        0 < u(e.target).parentsUntil(t, n.filter).length) &&
                      n.handler(e));
                }));
            },
            _callbackChain: {
              onKeyUp: function (e, t) {
                return 27 === t.keyCode
                  ? (this.closeOnEsc && u.featherlight.close(t), !1)
                  : e(t);
              },
              beforeOpen: function (e, t) {
                return (
                  u(document.documentElement).addClass("with-featherlight"),
                  (this._previouslyActive = document.activeElement),
                  (this._$previouslyTabbable = u(
                    "a, input, select, textarea, iframe, button, iframe, [contentEditable=true]"
                  )
                    .not("[tabindex]")
                    .not(this.$instance.find("button"))),
                  (this._$previouslyWithTabIndex =
                    u("[tabindex]").not('[tabindex="-1"]')),
                  (this._previousWithTabIndices =
                    this._$previouslyWithTabIndex.map(function (e, t) {
                      return u(t).attr("tabindex");
                    })),
                  this._$previouslyWithTabIndex
                    .add(this._$previouslyTabbable)
                    .attr("tabindex", -1),
                  document.activeElement.blur && document.activeElement.blur(),
                  e(t)
                );
              },
              afterClose: function (e, t) {
                var t = e(t),
                  n = this;
                return (
                  this._$previouslyTabbable.removeAttr("tabindex"),
                  this._$previouslyWithTabIndex.each(function (e, t) {
                    u(t).attr("tabindex", n._previousWithTabIndices[e]);
                  }),
                  this._previouslyActive.focus(),
                  0 === o.opened().length &&
                    u(document.documentElement).removeClass(
                      "with-featherlight"
                    ),
                  t
                );
              },
              onResize: function (e, t) {
                return (
                  this.resize(
                    this.$content.naturalWidth,
                    this.$content.naturalHeight
                  ),
                  e(t)
                );
              },
              afterContent: function (e, t) {
                e = e(t);
                return (
                  this.$instance.find("[autofocus]:not([disabled])").focus(),
                  this.onResize(t),
                  e
                );
              },
            },
          }),
          (u.featherlight = o),
          (u.fn.featherlight = function (e, t) {
            return o.attach(this, e, t), this;
          }),
          u(document).ready(function () {
            o._onReady();
          }))
      : "console" in window &&
        window.console.info("Too much lightness, Featherlight needs jQuery.");
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(require("jquery"))
      : "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(e.jQuery);
  })(this, function (u) {
    "use strict";
    function d(e, t) {
      var n = e.getBoundingClientRect(),
        o = n.top,
        i = n.bottom,
        r = n.left,
        a = n.right,
        s = u.extend(
          {
            tolerance: 0,
            viewport: window,
          },
          t
        ),
        c = !1,
        l = s.viewport.jquery ? s.viewport : u(s.viewport);
      l.length ||
        (console.warn(
          "isInViewport: The viewport selector you have provided matches no element on page."
        ),
        console.warn("isInViewport: Defaulting to viewport as window"),
        (l = u(window)));
      var e = l.height(),
        n = l.width(),
        t = l[0].toString();
      return (
        l[0] !== window &&
          "[object Window]" !== t &&
          "[object DOMWindow]" !== t &&
          ((o -= (t = l[0].getBoundingClientRect()).top),
          (i -= t.top),
          (r -= t.left),
          (a -= t.left),
          (d.scrollBarWidth =
            d.scrollBarWidth ||
            ((t = l),
            (l = u("<div></div>").css({
              width: "100%",
            })),
            t.append(l),
            (t = t.width() - l.width()),
            l.remove(),
            t)),
          (n -= d.scrollBarWidth)),
        (s.tolerance = ~~Math.round(parseFloat(s.tolerance))),
        s.tolerance < 0 && (s.tolerance = e + s.tolerance),
        a <= 0 || n <= r
          ? c
          : s.tolerance
          ? o <= s.tolerance && i >= s.tolerance
          : 0 < i && o <= e
      );
    }
    function o(e) {
      if (e) {
        e = e.split(",");
        return (
          1 === e.length && isNaN(e[0]) && ((e[1] = e[0]), (e[0] = void 0)),
          {
            tolerance: e[0] ? e[0].trim() : void 0,
            viewport: e[1] ? u(e[1].trim()) : void 0,
          }
        );
      }
      return {};
    }
    (u = u && u.hasOwnProperty("default") ? u.default : u).extend(
      u.expr.pseudos || u.expr[":"],
      {
        "in-viewport": u.expr.createPseudo
          ? u.expr.createPseudo(function (t) {
              return function (e) {
                return d(e, o(t));
              };
            })
          : function (e, t, n) {
              return d(e, o(n[3]));
            },
      }
    ),
      (u.fn.isInViewport = function (n) {
        return this.filter(function (e, t) {
          return d(t, n);
        });
      }),
      (u.fn.run = function (e) {
        var n = this;
        if (
          !(
            (e =
              1 === arguments.length && "function" == typeof e
                ? [e]
                : e) instanceof Array
          )
        )
          throw new SyntaxError(
            "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
          );
        return (
          e.forEach(function (t) {
            "function" != typeof t
              ? (console.warn(
                  "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
                ),
                console.warn(
                  "isInViewport: Ignoring non-function values in array and moving on"
                ))
              : [].slice.call(n).forEach(function (e) {
                  return t.call(u(e));
                });
          }),
          this
        );
      });
  }),
  $(document).bind("contextmenu", function (e) {
    return !1;
  }),
  document.addEventListener("contextmenu", (e) => e.preventDefault()),
  (document.onkeydown = (e) => {
    if (
      123 === event.keyCode ||
      ctrlShiftKey(e, "I") ||
      ctrlShiftKey(e, "J") ||
      ctrlShiftKey(e, "C") ||
      (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
    )
      return !1;
  });
