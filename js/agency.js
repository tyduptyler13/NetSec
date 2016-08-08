/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 500, 'swing');
    //$('.nav.navbar-nav li.active').removeClass('active');
    //anchor.parent().addClass('active');
    event.preventDefault();
  });

  $(document).scroll(function(){
    var height = $(document).scrollTop();
    var target = $('.navbar-fixed-top');
    if (height < 300 && target.hasClass('navbar-shrink')){
      target.removeClass('navbar-shrink');
    } else if (height > 300 && !target.hasClass('navbar-shrink')){
      target.addClass('navbar-shrink');
    }
  });

  $(document).scroll(function(){
    var pos = $(document).scrollTop() + $(window).height() / 2;
    $('section').each(function(i, ele){
      var e = $(ele);
      if (pos >= e.offset().top){
        var id = e.attr('id');
        $('.nav.navbar-nav li.active').removeClass('active');
        $('.nav.navbar-nav a[href="#' + id + '"]').parent().addClass('active');
      }
    });
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });

  $('div.modal').on('show.bs.modal', function() {
  	var modal = this;
  	var hash = modal.id;
  	window.location.hash = hash;
  	window.onhashchange = function() {
  		if (!location.hash){
  			$(modal).modal('hide');
  		}
  	}
  });
});


