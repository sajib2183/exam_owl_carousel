// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({

//     });
//   });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            dots:false
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})