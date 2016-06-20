$(document).ready(
  function() {
    $(".menu").click(function() {
      $(".fullmenu").toggleClass("showmenu");
    });
    $(window).scroll(function() {
      var si = window.pageYOffset;
      $(".logo").css({
        "transform" : "translate(-50%, " + si/8 + "%)"
      });
      $(".back-bird").css({
        "transform" : "translate(0px, " + si/10 + "%)"
      });
      $(".fore-bird").css({
        "transform" : "translate(-40%,-" + si/100 +"%)"
      });
      if (si > $(".pics").offset().top - ($(window).height())) {
        $(".pics figure").each(function(i) {
          setTimeout(function() {
            $(".pics figure").eq(i).addClass("animate");
          },400*(i+1));
        });
      }
      if(si > $(".content").offset().top) {
        $(".menu").css({"opacity": 1});
      }
      else {
        $(".menu").css({"opacity": 0});
      }
      if (si > $(".summer").offset().top - $(window).height()) {
        let s = ($(".summer").offset().top - $(window).height() - si+900)/400
        $(".tint").css({"opacity": + s +""});
      }
      if (si > $(".blog").offset().top - $(window).height()) {
            let s1=20
            let s = Math.min(0,si - $(".post").offset().top + $(window).height() -350)

            $(".post1").css({"transform": "translate("+ s + "px," + s1 +"px)"});
            $(".post3").css({"transform": "translate("+ -s + "px,"+ s1 +"px)"});

      }
    });

  }
);
