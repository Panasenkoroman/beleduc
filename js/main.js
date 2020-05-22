$(function(){

// --- parallax ---//

  function parallax(event) {
    this.querySelectorAll('.figure').forEach(layer =>{
      let speed = layer.getAttribute('data-speed');
      layer.style.transform = `translate(${event.clientX*speed/150+ 'px, ' +event.clientY*speed/150}px)`;
    })
  }

  document.addEventListener('mousemove', parallax)

// --- parallax ---//


    $('.header__menu-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header__menu ').toggleClass('active');
    });
    // $('.header__menu ul a').on('click', function(){
    //     $('.header__menu-btn').removeClass('active')
    //     $('.header__menu ul').removeClass('active')
    // });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top -15;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });


//--- script product(slider) ---//
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.tab-item .swiper-button-next',
        prevEl: '.tab-item .swiper-button-prev',
      },
      breakpoints: {
        1195: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    });

    var swiper = new Swiper('.swiper-video', {
      navigation: {
        nextEl: '.swiper-video .swiper-button-next',
        prevEl: '.swiper-video .swiper-button-prev',
      },
    });

    var swiper = new Swiper('.swiper-reviews', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-reviews .swiper-button-next',
        prevEl: '.swiper-reviews .swiper-button-prev',
      },
       pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      breakpoints: {
        1195: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        600: {
          slidesPerGroup: 2,
          slidesPerView: 2,
        },
      },
    });
//--- script product(slider) ---//

//--- script tabs ---//

    $('.tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.tab_content').find('.tab-item').removeClass('active-tab');
          $('.tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });
    var height = $('.tabs').height();
    
      if (height > 60){
        $('.tabs').addClass('active');
      }else{
        $('.tabs').removeClass('active');
      }


    
//--- script tabs ---//

//--- script video ---//
      $('.myvideo').on('click', function(){
        $(this).prop('controls', true);
      });
//--- end video ---//

//--- start products-popup ---//

    $(".open__products-popup").on("click", function(){
      var copy = $(this).parents(".active-tab");
          copy.clone().prependTo('.products-popup .wrapper');
      $('.products-popup').addClass('active');
      var swiper = new Swiper('.products-popup .swiper-container', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: '.tab-item .swiper-button-next',
        prevEl: '.tab-item .swiper-button-prev',
      },
      });
    });

    $(".open-back-call").on("click", function(){
      $('.back-call-popup').addClass('active');
    });

     $(".product__item-btn").on("click", function(){
      $('.request-popup').addClass('active');
    });

//--- end products-popup ---//

//--- click outside an element ---//

    $(document).mouseup(function (e){ 
      var element = $(".wrapper");
      if (!element.is(e.target) && element.has(e.target).length === 0) {
        $(".popup").removeClass("active");
        $('.popup .tab-item ').remove();
      };
    });
    $('.close').on('click', function() {
      $(".popup").removeClass("active");
      $('.popup .tab-item ').remove();
    });
//--- click outside an element ---//

// --- animation airplane ---//
  var wrapper = $('#reviews');

    $(window).scroll(function(){
      var nsc = $(document).scrollTop();
      var bp1 = wrapper.offset().top;
      if (nsc>bp1) {  
        $('.airplane').addClass('active') 
      }else { 
        $('.airplane').removeClass('active')  
      }
    });
    
// --- animation airplane ---//

    });


  