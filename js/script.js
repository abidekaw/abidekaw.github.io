// event pada saat di klik
$('.page-scroll').on('click', function(e){

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html, body').animate({
      scrollTop: elemenTujuan.offset().top - 50
  }, 1000, 'swing');

  e.preventDefault();

});

// about
$(window).on('load', function() {
$('.pKiri').addClass('pMuncul');
$('.pKanan').addClass('pMuncul');
});

// parallax
$(window).scroll(function() {
var wScroll = $(this).scrollTop();

// console.log(wScroll);

// jumbotron
$('.jumbotron img').css({
  'transform' : 'translate(0px, '+ wScroll/4 +'%)'
});

$('.jumbotron h1').css({
  'transform' : 'translate(0px, '+ wScroll/2 +'%)'
});

$('.jumbotron p').css({
  'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
});

// portofolio
if( wScroll > $('.portofolio').offset().top - 250 ) {
  $('.portofolio .thumbnail').each(function(i) {
    setTimeout(function() {
      // console.log('ok');
      $('.portofolio .thumbnail').eq(i).addClass('muncul');
    }, 300 * (i+1));		
  });

}


});