$(function() {
  var $win = $(window),
      $main = $('main'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'fixed';
      console.log(navigator.userAgent);

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
    }
  });

  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    $('#gnav').css('display', 'none');
    $('#sp').css('display', 'block');
    var $win = $(window),
        $main = $('main'),
        $nav = $('#sp'),
        navHeight = $nav.outerHeight(),
        navPos = $nav.offset().top,
        fixedClass = 'fixed';
        console.log(navigator.userAgent);

    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > navPos ) {
        $nav.addClass(fixedClass);
        $main.css('margin-top', navHeight);
      } else {
        $nav.removeClass(fixedClass);
        $main.css('margin-top', '0');
      }
    });
  } else {
    return false;
  }

});

$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
          $('.globalMenuSp').css('display', 'block');
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });

    $('.globalMenuSp ul li a').click(function() {
      $('.globalMenuSp').css('display', 'none');
      $('.navToggle').removeClass('active');
    })
});
