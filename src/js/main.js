$(document).ready(function () {
  const e = $(".modal"),
    t = $("[data-toggle=modal]"),
    o = $(".modal__close"),
    i = $(".modal-success"),
    n = $(".success-dialog__button");
  let s;
  function l(e) {
    e.target.playVideo();
  }
  t.on("click", function () {
    e.toggleClass("modal--visible");
  }),
    o.on("click", function () {
      e.toggleClass("modal--visible");
    }),
    $(document).keydown(function (t) {
      27 === t.keyCode && ($(e).removeClass("modal--visible"), $(i).removeClass("visible"));
    }),
    $(document).click(function (t) {
      ($(t.target).is(e) || $(t.target).is(i)) && ($(e).removeClass("modal--visible"), $(i).removeClass("visible"));
    }),
    $(window).scroll(function () {
      $(this).scrollTop() > 100 ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut();
    }),
    $(".scrollToTop").click(function () {
      return $("html, body").animate({ scrollTop: 0 }, 800), !1;
    }),
    $(".hero__scroll-down").click(function () {
      return $("html, body").animate({ scrollTop: $(window).height() - $("header").outerHeight() }, 600), !1;
    }),
    $(document).ready(function () {
      $("a").on("click", function (e) {
        if ("" !== this.hash) {
          e.preventDefault();
          let t = this.hash;
          $("html, body").animate({ scrollTop: $(t).offset().top - $("header").outerHeight() }, 600, function () {
            window.location.hash = t;
          });
        }
      });
    }),
    new Swiper(".projects__swiper-container", {
      loop: !0,
      spaceBetween: 40,
      pagination: { el: ".projects__swiper-pagination", type: "bullets" },
      navigation: { nextEl: ".projects__swiper-button-next", prevEl: ".projects__swiper-button-prev" },
      on: {
        init: function () {
          const e = $(".projects__swiper-button-next"),
            t = $(".projects__swiper-button-prev"),
            o = $(".swiper-pagination");
          e.css("left", t.width() + 10 + o.width() + 30), o.css("left", t.width() + 10);
        },
      },
    }),
    $("form").each(function () {
      $(this).validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
          userName: { required: !0, minlength: 2, maxlength: 15 },
          userPhone: { required: !0, minlength: 17 },
          userEmail: { required: !0, email: !0 },
          userQuestion: { required: !0, minlength: 15 },
          policyCheckbox: "required",
        },
        messages: {
          userName: { required: "Заполните поле", minlength: "Имя должно быть не короче 2 букв", maxlength: "Имя должно быть не длинее 15 букв" },
          userPhone: { required: "Заполните поле", minlength: "Введите полный номер телефона" },
          userEmail: { required: "Заполните поле", email: "Введите корректный Email в формате name@domain.com" },
          userQuestion: { required: "Задайте Ваш вопрос", minlength: "Вопрос должен быть не короче 15 символов" },
          policyCheckbox: "Примите соглашение",
        },
        submitHandler: function (t) {
          $.ajax({
            type: "post",
            url: "send.php",
            data: $(t).serialize(),
            success: function (o) {
              return $(t)[0].reset(), $(e).removeClass("modal--visible"), $(i).addClass("visible"), ym(64377703, "reachGoal", "request"), !0;
            },
          });
        },
      });
    }),
    $("[type=tel]").mask("+7(000) 000-00-00", { placeholder: "Ваш номер телефона" }),
    new WOW().init(),
    n.on("click", function () {
      i.removeClass("visible");
    }),
    $(".video__play").on("click", function () {
      s = new YT.Player("player", { height: "auto", width: "100%", videoId: "RHzzLqJWqHs", events: { onReady: l } });
    });
  const r = $(".design").offset().top;
  $(window).bind("scroll", function () {
    $(this).scrollTop() > r &&
    ($("#map").html(
      '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab8ac4b9951bd0913ca60195d895117ad301fff4e1226cd192097af3b1951894b&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false"></script>'
    ),
      $(window).unbind("scroll"));
  });
});

