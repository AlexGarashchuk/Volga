$('.slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1245,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
        
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
          arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          arrows: false
      }
    }
  ]
});



//высота блока

var heightSitebar;
    heightSitebar=$('.main-for-shadow').height();
console.log(heightSitebar);


$('.shadow-left').css({'height':heightSitebar});
$('.shadow-right').css({'height':heightSitebar});

//mobile-menu

$('.burg').click(function(){
    $('.mobile-menu').slideToggle();
})