$(window).on('load', function(){
  $('#mobileNavBtn').click(function(){
    $('#mobileNav').toggle()
  })
  activationMenu();

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

});

$(window).on('scroll', function(){
  activationHeader()
});

function activationHeader() {
  if ($(window).scrollTop() > 300) {
    $("#header").addClass("is-active");
  } else {
    $("#header").removeClass("is-active");
  }
}

function activationMenu() {
  $('.header-pc-nav li').each(function(){
    const path = $('a', this).attr('href')
    const category = location.pathname.split("/")[location.pathname.split("/").length - 3];

    if (location.href.includes(path) || (category && path.includes(category))) {
      $('a', this).addClass('is-active')
    }
  })
}
