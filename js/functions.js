$(document).ready(
  function() {
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
          },200*(i+1));
        });
      }
    });

  }
);
