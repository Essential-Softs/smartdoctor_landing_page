//  ****************************************************************************
//  * Smartdoctors - For Samrt Patients
//  * Copyright 2022 | Smartdoctors | https://smartdoctors.us
//  * Designed by | EssentailSofts | https://essentialsofts.com
//  * Author: EssentailSofts
//  *
//  * This website integrates components from the following projects
//  *
//  *  Font Awesome Pro 5.14.0 by @fontawesome - https://fontawesome.com
//  *  jQuery v3.6.3 | (c) jQuery Foundation | jquery.org/license
//  *  Bootstrap v5.2.3 | Copyright 2011-2016 Twitter, Inc. | MIT License
//  ****************************************************************************
$('#feature_list').click(function () {
    $('.icon_rotate').toggleClass("down");
});
$('#mobile_feature_collapse_btn').click(function () {
    $('.icon_rotate_mobile').toggleClass("down_mobile");
});

$(document).ready(function () {
    $('.accordion-button').on('click', function () {
        $('.before_div').addClass('d-none');
        $('.after_div').removeClass('d-none');
    });
});


var owl = $('#mobile_screen_feature_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
    var name =  $('#mobile_screen_feature_carousel').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video =  $('#mobile_screen_feature_carousel').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link =  $('#mobile_screen_feature_carousel').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature1_name').text(name);
   $('#feature_1_link').text(video)
   $('#feature_1_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature1_name').text(name);
   $('#feature_1_link').text(video)
   $('#feature_1_link').attr('href',link)
})



// Owl 2
var owl_2 = $('#mobile_screen_feature_carousel_two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtnOwl2').click(function() {
    owl_2.trigger('next.owl.carousel');
    var name =  $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature2_name').text(name);
   $('#feature_2_link').text(video)
   $('#feature_2_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtnOwl2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_2.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature2_name').text(name);
   $('#feature_2_link').text(video)
   $('#feature_2_link').attr('href',link)
})






// Owl 3
var owl_3 = $('#mobile_screen_feature_carousel_three').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtnOwl3').click(function() {
    owl_3.trigger('next.owl.carousel');
    var name =  $('#mobile_screen_feature_carousel_three').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video =  $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link =  $('#mobile_screen_feature_carousel_two').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature3_name').text(name);
   $('#feature_3_link').text(video)
   $('#feature_3_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtnOwl3').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_3.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel_three').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_three').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_three').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature3_name').text(name);
   $('#feature_3_link').text(video)
   $('#feature_3_link').attr('href',link)
})






// Owl 4
var owl_4 = $('#mobile_screen_feature_carousel_four').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtnOwl4').click(function() {
    owl_4.trigger('next.owl.carousel');
    var name = $('#mobile_screen_feature_carousel_four').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_four').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_four').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature4_name').text(name);
   $('#feature_4_link').text(video)
   $('#feature_4_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtnOwl4').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_4.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel_four').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_four').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_four').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature4_name').text(name);
   $('#feature_4_link').text(video)
   $('#feature_4_link').attr('href',link)
})








// Owl 5
var owl_5 = $('#mobile_screen_feature_carousel_five').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtnOwl5').click(function() {
    owl_5.trigger('next.owl.carousel');
    var name = $('#mobile_screen_feature_carousel_five').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_five').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_five').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature5_name').text(name);
   $('#feature_5_link').text(video)
   $('#feature_5_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtnOwl5').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_5.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel_five').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_five').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_five').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature5_name').text(name);
   $('#feature_5_link').text(video)
   $('#feature_5_link').attr('href',link)
})






// Owl 6
var owl_6 = $('#mobile_screen_feature_carousel_six').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtnOwl6').click(function() {
    owl_6.trigger('next.owl.carousel');
    var name = $('#mobile_screen_feature_carousel_six').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_six').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_six').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature6_name').text(name);
   $('#feature_6_link').text(video)
   $('#feature_6_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtnOwl6').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_6.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel_six').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_six').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_six').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature6_name').text(name);
   $('#feature_6_link').text(video)
   $('#feature_6_link').attr('href',link)
})






// Owl 7
var owl_7 = $('#mobile_screen_feature_carousel_seven').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// var owl = $('.owl-carousel');
// owl.owlCarousel();
// Go to the next item
$('.customNextBtnOwl7').click(function() {
    owl_7.trigger('next.owl.carousel');
    var name = $('#mobile_screen_feature_carousel_seven').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_seven').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_seven').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature7_name').text(name);
   $('#feature_7_link').text(video)
   $('#feature_7_link').attr('href',link)
})
// Go to the previous item
$('.customPrevBtnOwl7').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl_7.trigger('prev.owl.carousel', [300]);
    var name = $('#mobile_screen_feature_carousel_seven').find('.owl-stage > .active > .item > span').attr('meta-name');
    var video = $('#mobile_screen_feature_carousel_seven').find('.owl-stage > .active > .item > span').attr('meta-video');
    var link = $('#mobile_screen_feature_carousel_seven').find('.owl-stage > .active > .item > span').attr('meta-url');
   $('#feature7_name').text(name);
   $('#feature_7_link').text(video)
   $('#feature_7_link').attr('href',link)
})
