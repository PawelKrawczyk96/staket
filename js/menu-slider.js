function move(selector) {
  $("html,body").animate(
    {
      scrollTop: $(selector).offset().top - 70
    },
    1000
  );
  $("#menu-mobile").removeClass("colapsed");
  $("#menu-mobile").css("max-height", "0");
}
