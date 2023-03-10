function resizeVideo(e, n) {
  var i, o, t;
  (i = "desktop" == video_type ? ((d = 16), 9) : ((d = 10), 16)),
    (o =
      $(".headline-box").length && "none" != $(".headline-box").css("display")
        ? $(".headline-box").height()
        : 0),
    (t =
      $(".topCBblock").length && "none" != $(".cbh").css("display") ? 26 : 0);
  var n = window.innerHeight - o - t - e - n,
    d = Math.round((n / i) * d);
  $(".vid-type").attr(
    "style",
    "max-height: " + n + "px !important; max-width: " + d + "px !important"
  );
}

function bigVideo() {
  $(".cbh").hide(),
    $(".cbtb").hide(),
    $(".headline-box").hide(),
    $(".video-lights").addClass("black-background-vid"),
    $(".change-container").addClass("container-full"),
    $(".vb").removeClass("video-border"),
    $(".vid-padding").attr(
      "style",
      "height: " + window.innerHeight + "px !important"
    ),
    resizeVideo(0, 0),
    $("html, body").animate(
      {
        scrollTop: $(".video-section").offset().top,
      },
      250,
      function () {}
    );
}

function smallVideo() {
  $(".cbh").show();
  $(".cbtb").show(),
    $(".headline-box").show(),
    $(".video-lights").removeClass("black-background-vid"),
    $(".change-container").removeClass("container-full"),
    $(".vb").addClass("video-border"),
    $(".vid-padding").attr("style", "height: auto !important;"),
    resizeVideo(50, -3);
}
(window._wq = window._wq || []),
  _wq.push({
    id: video_id,
    options: {
      fullscreenOnRotateToLandscape: !1,
      copyLinkAndThumbnailEnabled: !1,
      playsinline: !0,
      resumable: !1,
      seo: !1,
      volume: 1,
      wmode: "transparent",
      playbar: ld_video_controls,
      smallPlayButton: ld_video_controls,
      volumeControl: ld_video_controls,
      fullscreenButton: ld_video_controls,
    },
    onReady: function (e) {
      resizeVideo(50, -3), $(".loading-video-inner").hide();
      var n = !1,
        i = 0;
      e.bind("play", function () {
        e.isMuted()
          ? $(".button-unmute").show()
          : ($(".button-unmute").hide(),
            (n = !0),
            fullscreen_video && bigVideo()),
          $(".button-continue").hide();
      }),
        $(".button-unmute").click(function () {
          !1 === n && ((n = !0), 2 < i && e.time(0)),
            e.unmute(),
            $(".button-unmute").hide(),
            fullscreen_video && bigVideo();
        }),
        $(".button-continue").click(function () {
          !1 === n && ((n = !0), 2 < i && e.time(0)),
            e.play(),
            $(".button-continue").hide();
        }),
        e.bind("pause", function () {
          e.unmute(),
            $(".button-unmute").hide(),
            fullscreen_video && smallVideo(),
            $(".button-continue").show();
        }),
        e.bind("end", function () {
          e.unmute(),
            $(".button-unmute").hide(),
            fullscreen_video && smallVideo(),
            $(".button-continue").show();
        }),
        e.bind("secondchange", function (e) {
          i = e;
        });
    },
  }),
  preload([
    "../assets/images/generic/" + ld_image_continue,
    "../assets/images/generic/" + ld_image_unmute,
    "../assets/images/loading-video.gif",
  ]);
