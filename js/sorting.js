$( document ).ready(function() {
  /* activate jquery isotope */
  var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });



  $container.isotope({ filter: '*' });

    // filter items on button click
  $('#filters').on( 'click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });



//   $(function() {
//   $('a[href*=#]:not([href=#])').click(function(e) {
//     e.preventDefault();
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

$('.scrollto').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {
        var hashStr = this.hash.slice(1);
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + hashStr +']');

        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top - 30}, 900);
            window.location.hash = hashStr;
            return false;
        }
    }
});


$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', '#222222');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

});
