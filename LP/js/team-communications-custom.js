////////////////////////////////////////////////////////////////////////// ** //
// Smooth Scroll To Anchor
////////////////////////////////////////////////////////////////////////// ** //
$(function() {
  "use strict";
  $('.navbar a,.contact-us-but,.down-arrow a,.cta-holder a,.brief-intro a, a.back-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, 'linear');
        return false;
      }
    }
  });
});


////////////////////////////////////////////////////////////////////////// ** //
// Show Back to Top after first section
////////////////////////////////////////////////////////////////////////// ** //
var edistance = $('#ecosystem').offset().top,
     $window = $(window);
$window.scroll(function() {
  "use strict";
  if ( $window.scrollTop() <= edistance ) {
    $('.back-to-top').removeClass('active'); 
  }else{
    $('.back-to-top').addClass('active');
  }
});
////////////////////////////////////////////////////////////////////////// ** //
// In-View Animation
////////////////////////////////////////////////////////////////////////// ** //
var $animation_elements = $('.ani');
var $window = $(window);
function check_if_in_view() {
  "use strict";
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

////////////////////////////////////////////////////////////////////////// ** //
// Video Lightbox
////////////////////////////////////////////////////////////////////////// ** //
$(".play-video").click(function () {
  "use strict";
  $("#play-video-lightbox").fadeIn('fast');
  $("iframe#team-comm-full").attr('src', "https://www.youtube.com/embed/h_llgBq0pW0?enablejsapi=1&autoplay=1");
  $("#play-video-lightbox").toggleClass("active");
  $("body,html").addClass("lightbox-active");
});
$("#play-video-lightbox .close-but").click(function () {
  "use strict";
  $("#play-video-lightbox").fadeOut("fast");
  $("#play-video-lightbox").toggleClass("active");
  
  $("iframe#team-comm-full").attr('src', "https://www.youtube.com/embed/h_llgBq0pW0?enablejsapi=1&autoplay=0");
  $("body,html").removeClass("lightbox-active");
}); 
////////////////////////////////////////////////////////////////////////// ** //
// Home Animation
////////////////////////////////////////////////////////////////////////// ** //
$(document).ready(function() {
  "use strict";
  setTimeout(function(){
    $("#video-loop").addClass("active");
  }, 500);
});
////////////////////////////////////////////////////////////////////////// ** //
// Verticals Show/Hide
////////////////////////////////////////////////////////////////////////// ** //
$('#vertical-markets nav a').click(function() {        
  "use strict";
  var showsect = $(this).data("id");
  $('#vertical-markets nav a').removeClass('active');
  $('.vertical-markets-item').fadeOut();
  $('#'+showsect).fadeIn();
  $(this).addClass('active');
});
////////////////////////////////////////////////////////////////////////// ** //
// Scrollspy
////////////////////////////////////////////////////////////////////////// ** //
var lastId,
    topMenu = $("#mobile-collapse"),
    topMenuHeight = topMenu.outerHeight()+15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      "use strict";
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    menuItems.click(function(e){
      "use strict";
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });
    $(window).scroll(function(){
       "use strict";
       var fromTop = $(this).scrollTop()+topMenuHeight;
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       if (lastId !== id) {
           lastId = id;
           menuItems
             .parent().removeClass("active")
             .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    });
 
      