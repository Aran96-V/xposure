s = skrollr.init();

jQuery(window).load(function() {
  $(".theNavigator").delay(1500).css({"opacity":"0"}).animate({opacity:'1'},{ duration: 1800 }, "swing");
  $("#btnMenu").delay(1500).css({"margin-left":"-10%", "opacity":"0"}).animate({marginLeft:'0%', opacity:'1'},{ duration: 1800 }, "swing");
  $("#secIntro").delay(2500).css({"bottom":"-5%", "opacity":"0"}).animate({bottom:'0%', opacity:'1'},{ duration: 800 }, "bounceIn");
  $(".logoHolder").delay(1500).css({"margin-top":"-10%", "opacity":"0"}).animate({marginTop:'0%', opacity:'1'},{ duration: 1800 }, "swing");
  $(".lingualHolder").delay(1300).css({"margin-top":"-10%", "opacity":"0"}).animate({marginTop:'0%', opacity:'1'},{ duration: 1800 }, "swing");
  $(".btnBook").delay(1500).css({"margin-top":"-10%", "opacity":"0"}).animate({marginTop:'0%', opacity:'1'},{ duration: 1800 }, "swing");
    $("footer").delay(1500).css({"margin-bottom":"-10%", "opacity":"0"}).animate({marginBottom:'0%', opacity:'1'},{ duration: 2000 }, "swing");
  });