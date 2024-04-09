(function ($) {
  'use strict';

  $(window).scroll(function () {
    if ($('.navigation').offset().top > 100) {
      $('.navigation').addClass('fixed-nav');
    } else {
      $('.navigation').removeClass('fixed-nav');
    }
  });

  $('.portfolio-gallery').each(function () {
    $(this)
      .find('.popup-gallery')
      .magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
  });

  $('#contact-form').validate({
    rules: {
      user_name: {
        required: true,
        minlength: 4
      },
      user_email: {
        required: true,
        email: true
      },
      // user_subject: {
      // 	required: false
      // },
      user_message: {
        required: true
      }
    },
    messages: {
      user_name: {
        required: "Come on, you have a name don't you?",
        minlength: 'Your name must consist of at least 2 characters'
      },
      user_email: {
        required: 'Please put your email address'
      },
      user_message: {
        required: 'Put some messages here?',
        minlength: 'Your name must consist of at least 2 characters'
      }
    },
    submitHandler: function (form) {
      $(form).ajaxSubmit({
        type: 'POST',
        data: $(form).serialize(),
        url: 'sendmail.php',
        success: function () {
          $('#contact-form #success').fadeIn();
        },
        error: function () {
          $('#contact-form #error').fadeIn();
        }
      });
    }
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  });

  // Init Magnific Popup
  $('.portfolio-popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-with-zoom',
    navigateByImgClick: true,
    arrowMarkup:
      '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    tPrev: 'Previous (Left arrow key)',
    tNext: 'Next (Right arrow key)',
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img')
          ? openerElement
          : openerElement.find('img');
      }
    }
  });

  // custom

  // popular room
  let popularRoomData = [
    {
      roomNumber: 1,
      title: 'Deluxe Double Room With Balcony',
      image: '../images/core/room/1/IMG_2250.png',
      description: 'Room Size: 25 square meters'
    },
    {
      roomNumber: 2,
      title: `Superior King`,
      image: '../images/core/room/2/IMG_2250.png',
      description: 'Room Size: 25 square meters'
    },
    {
      roomNumber: 3,
      title: 'Double room with balcony',
      image: '../images/core/room/3/IMG_2304.png',
      description: 'Room Size: 20 square meters'
    },
    {
      roomNumber: 5,
      title: 'Superior Double Room',
      image: '../images/core/room/5/IMG_2302.png',
      description: 'Room Size: 20 square meters'
    },
    {
      roomNumber: 6,
      title: 'Small Double Room',
      image: '../images/core/room/6/IMG_2337.png',
      description: 'Room Size: 16 square meters'
    },
    {
      roomNumber: 7,
      title: 'Standard Queen Room',
      image: '../images/core/room/7/IMG_2302.png',
      description: 'Room Size: 20 square meters'
    }
  ];

  for (let index = 0; index < popularRoomData.length; index++) {
    $('#popular-room').append(`
		<div class="col-lg-4 col-md-6 col-sm-6 col-6">
			<div class="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
				<img src=${popularRoomData[index].image} alt="" class="img-fluid">

				<div class="card-body">
					<a href="javascript:void(0)"><h5 class="font-secondary mb-0">${popularRoomData[index].title}</h5></a>
					<p class=" mb-2">${popularRoomData[index].description}</p>
				</div>
			</div>
		</div>
		`);
  }

  //   out facilities
  let ourFacilitiesData = [
    {
      icon: 'icofont-wind',
      title: 'Air Conditioner',
      description: '',
      style: {
        fontSize: '70px'
      }
    },
    {
      icon: 'icofont-monitor',
      title: '43” Television',
      description: '',
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-energy-solar',
      title: 'Private Balcony',
      description: '',
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-architecture-alt',
      title: 'Working Desk',
      description: '',
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-bed',
      title: '180x200 Bed Size',
      description: '',
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-refrigerator',
      title: 'Cupboard',
      description: '',
      style: {
        fontSize: '55px'
      }
    }
  ];

  for (let index = 0; index < ourFacilitiesData.length; index++) {
    $('#our-facilities').append(`
	<div class="col-lg-4 col-md-6 col-sm-6">
	<div class="text-center px-4 py-5 hover-style-1"> 
	  <i class="${ourFacilitiesData[index].icon} text-lg text-color" style="font-size:${ourFacilitiesData[index].style.fontSize}"></i>
	  <h4 class="mt-3 mb-4 text-uppercase">${ourFacilitiesData[index].title}</h4>
	  <p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
		molestias.
	  </p>
	</div>
  </div>
		`);
  }

  let ourGalleryData = [
    {
      image: '../images/core/gallery/IMG_3330.png'
    },
    {
      image: '../images/core/gallery/IMG_2197.png'
    },
    {
      image: '../images/core/gallery/IMG_2359.png'
    },
    {
      image: '../images/core/gallery/IMG_2257.png'
    },
    {
      image: '../images/core/gallery/IMG_2307.png'
    },
    {
      image: '../images/core/gallery/IMG_2314.png'
    },
    {
      image: '../images/core/gallery/IMG_2289.png'
    },
    {
      image: '../images/core/gallery/IMG_2291.png'
    }
  ];

  for (let index = 0; index < ourGalleryData.length; index++) {
    $('#our-gallery').append(`
	  <div class="col-lg-3 col-md-6 col-sm-6"> 
		<a href="${ourGalleryData[index].image}" class="popup-gallery">
			<img
				src="${ourGalleryData[index].image}"
				alt=""
				class="img-fluid"
			/>
		</a>
	</div>
	`);
  }
})(jQuery);
