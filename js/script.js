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
  const imageDirectory = 'images/core/room';

  // popular room
  let popularRoomData = [
    {
      roomNumber: 1,
      title: 'Deluxe Double Room (+Balcony)',
      description: 'Room Size: 25 square meters',
      image: `${imageDirectory}/1/IMG_3330.png`,
      isPopular: true,
      images: [
        {
          fileName: `IMG_2250.png`
        },
        {
          fileName: `IMG_3330.png`
        },
        {
          fileName: `IMG_3332.png`
        },
        {
          fileName: `IMG_2197.png`
        },

        {
          fileName: `IMG_2359.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 25 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: '43” Television',
          value: ''
        },
        {
          name: 'Working Desk',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        {
          name: 'Private Balcony',
          value: ''
        },
        {
          name: '180 x 200 Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    },
    {
      roomNumber: 2,
      title: `Superior King`,
      description: 'Room Size: 25 square meters',
      image: 'images/core/room/2/IMG_2255.png',
      isPopular: false,
      images: [
        {
          fileName: `IMG_2250.png`
        },
        {
          fileName: `IMG_2255.png`
        },
        {
          fileName: `IMG_2257.png`
        },
        {
          fileName: `IMG_2359.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 25 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: '43” Television',
          value: ''
        },
        {
          name: 'Working Desk',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        // {
        //   name: 'Private Balcony',
        //   value: ''
        // },
        {
          name: '180 x 200 Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    },
    {
      roomNumber: 3,
      title: 'Double Room (+Balcony)',
      description: 'Room Size: 20 square meters',
      image: 'images/core/room/3/IMG_2304.png',
      isPopular: false,
      images: [
        {
          fileName: `IMG_2304.png`
        },
        {
          fileName: `IMG_2307.png`
        },
        {
          fileName: `IMG_2313.png`
        },
        {
          fileName: `IMG_2314.png`
        },
        {
          fileName: `IMG_2359.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 20 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: '32” Television',
          value: ''
        },
        {
          name: 'Working Desk',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        {
          name: '180 x 200cm Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    },
    {
      roomNumber: 5,
      title: 'Superior Double Room',
      description: 'Room Size: 20 square meters',
      image: 'images/core/room/5/IMG_2302.png',
      isPopular: false,
      images: [
        {
          fileName: `IMG_2289.png`
        },
        {
          fileName: `IMG_2291.png`
        },
        {
          fileName: `IMG_2302.png`
        },
        {
          fileName: `IMG_2314.png`
        },
        {
          fileName: `IMG_2292.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 20 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: '32” Television',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        {
          name: '160 x 200 Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    },
    {
      roomNumber: 6,
      title: 'Small Double Room',
      description: 'Room Size: 16 square meters',
      image: 'images/core/room/6/IMG_2337.png',
      isPopular: false,
      images: [
        {
          fileName: `IMG_2337.png`
        },
        {
          fileName: `IMG_2343.png`
        },
        {
          fileName: `IMG_2292.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 16 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: '32” Television',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        {
          name: '180 x 200 Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    },
    {
      roomNumber: 7,
      title: 'Standard Queen Room',
      description: 'Room Size: 20 square meters',
      image: 'images/core/room/7/IMG_2302.png',
      isPopular: false,
      images: [
        {
          fileName: `IMG_2208.png`
        },
        {
          fileName: `IMG_2289.png`
        },
        {
          fileName: `IMG_2302.png`
        },
        {
          fileName: `IMG_2292.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 20 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: '32” Television',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        {
          name: '160 x 200 Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    }
  ];

  for (let index = 0; index < popularRoomData.length; index++) {
    const encodedString = encodeURIComponent(
      JSON.stringify(popularRoomData[index])
    );

    $('#popular-room').append(`
      <div class="col-lg-4 col-md-6 col-sm-6 col-6" style="margin-top:10px">
        <a href="room-detail.html?roomData=${encodedString}">
          <div class="card border-0 rounded-0 p-0 mb-3 mb-lg-0 shadow-sm">
            <div class="square-img">
              <img src=${popularRoomData[index].image} alt="" class="img-fluid">
            </div>
            <div class="card-body">
              <h5 class="font-secondary mb-0">${popularRoomData[index].title}</h5>
              <p style="margin-top:10px;line-height:20px">
                Click to open
              </p>
            </div>
          </div>
        </a>
      </div>
		`);
  }

  //   out facilities
  let ourFacilitiesData = [
    {
      icon: 'icofont-wind',
      title: 'Air Conditioner',
      description: `An air conditioner is like a super-cool machine that blasts chilly air when it's too hot outside, making your room feel awesome.`,
      style: {
        fontSize: '70px'
      }
    },
    {
      icon: 'icofont-monitor',
      title: '43” Television',
      description: `A TV is that big screen where you watch all your favorite shows and movies, like having a cinema right in your room.`,
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-energy-solar',
      title: 'Private Balcony',
      description: `Your private balcony is your own little outdoor spot connected to your room, perfect for chilling, enjoying the breeze, or just gazing at the stars.`,
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-architecture-alt',
      title: 'Working Desk',
      description: `Your working desk is like your personal command center for getting stuff done – whether it's homework, drawing, or playing games on your computer.`,
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-bed',
      title: '180 x 200 Bed Size',
      description: `Your bed is your cozy nest, where you snuggle up, close your eyes, and drift off to dreamland, surrounded by soft blankets and pillows.`,
      style: {
        fontSize: '65px'
      }
    },
    {
      icon: 'icofont-refrigerator',
      title: 'Cupboard',
      description: `A cupboard is basically your secret storage space, where you stash all your clothes, toys, and random treasures to keep your room looking neat and tidy.`,
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
        <p>${ourFacilitiesData[index].description}</p>
      </div>
    </div>
		`);
  }

  let ourGalleryData = [
    {
      image: 'images/core/room/1/IMG_3330.png'
    },
    {
      image: 'images/core/room/1/IMG_2197.png'
    },
    {
      image: 'images/core/room/1/IMG_2359.png'
    },
    {
      image: 'images/core/room/2/IMG_2257.png'
    },
    {
      image: 'images/core/room/3/IMG_2307.png'
    },
    {
      image: 'images/core/room/3/IMG_2314.png'
    },
    {
      image: 'images/core/room/5/IMG_2289.png'
    },
    {
      image: 'images/core/room/5/IMG_2291.png'
    }
  ];

  for (let index = 0; index < ourGalleryData.length; index++) {
    $('#our-gallery').append(`
      <div class="col-lg-3 col-md-6 col-sm-6"> 
        <a href="${ourGalleryData[index].image}" class="popup-gallery">
          <div class="square-img">
            <img
              src="${ourGalleryData[index].image}"
              alt=""
              class="img-fluid"
            />
          </div>
        </a>
      </div>
	`);
  }

  for (let index = 0; index < popularRoomData.length; index++) {
    $('#hotel-list').append(`
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card px-4 py-5 rounded-0 bg-4" style="background: url(${
          popularRoomData[index].image
        }) no-repeat;background-size: cover;">
          <div class="position-relative">
            <h4
              class="card-title text-capitalize font-weight-normal font-secondary text-white"
            >
              ${
                popularRoomData[index].isPopular
                  ? `<span class="text-sm bg-primary text-white py-1 px-2 mr-2">
              Popular
            </span>`
                  : ``
              }
              ${popularRoomData[index].title}
            </h4>
            <div class="card-body mt-2">
              <ul class="list-unstyled lh-35 mb-4">
                ${popularRoomData[index].facilities.map(
                  item => `
                            <li class="text-white" style="margin-bottom:-25px">
                              <i class="ti-check mr-3 text-color"></i>
                              ${item.name} ${
                    item.value ? `(${item.value})` : ''
                  }
                            </li>
                          `
                )} 
              </ul>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=6281281009907&type=phone_number" class="btn btn-main" style="margin-top:30px">Book Now</a>
            </div>
          </div>
        </div>
      </div>
	`);
  }

  const popularDrinks = [
    {
      roomNumber: 1,
      title: 'Deluxe Double Room (+Balcony)',
      description: 'Room Size: 25 square meters',
      image: `${imageDirectory}/1/IMG_3330.png`,
      isPopular: true,
      images: [
        {
          fileName: `IMG_2197.png`
        },
        {
          fileName: `IMG_2250.png`
        },
        {
          fileName: `IMG_2359.png`
        },
        {
          fileName: `IMG_3330.png`
        },
        {
          fileName: `IMG_3332.png`
        }
      ],
      facilities: [
        {
          name: 'Room Size 25 Square meters',
          value: ''
        },
        {
          name: 'Air Conditioner',
          value: ''
        },
        {
          name: 'Hairdryer',
          value: ''
        },
        {
          name: 'Cupboard',
          value: ''
        },
        {
          name: '43” Television',
          value: ''
        },
        {
          name: 'Working Desk',
          value: ''
        },
        {
          name: 'Bathroom',
          value: ''
        },
        {
          name: 'Private Balcony',
          value: ''
        },
        {
          name: '180 x 200 Bed Size',
          value: ''
        },
        {
          name: 'Private Bathroom',
          value: ''
        },
        {
          name: 'Shampoo & Body Soap',
          value: ''
        }
      ]
    }
  ];

  for (let index = 0; index < popularDrinks.length; index++) {
    $('#drink-list').append(`
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card px-4 py-5 rounded-0 bg-4" style="background: url(${
          popularRoomData[index].image
        }) no-repeat;background-size: cover;">
          <div class="position-relative">
            <h4
              class="card-title text-capitalize font-weight-normal font-secondary text-white"
            >
              ${
                popularRoomData[index].isPopular
                  ? `<span class="text-sm bg-primary text-white py-1 px-2 mr-2">
              Popular
            </span>`
                  : ``
              }
              ${popularRoomData[index].title}
            </h4>
            <div class="card-body mt-2">
              <ul class="list-unstyled lh-35 mb-4">
                ${popularRoomData[index].facilities.map(
                  item => `
                            <li class="text-white" style="margin-bottom:-25px">
                              <i class="ti-check mr-3 text-color"></i>
                              ${item.name} ${
                    item.value ? `(${item.value})` : ''
                  }
                            </li>
                          `
                )} 
              </ul>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=6281281009907&type=phone_number" class="btn btn-main" style="margin-top:30px">Book Now</a>
            </div>
          </div>
        </div>
      </div>
	`);
  }

  let foodAndBeverageGalleryGalleryData = [
    {
      image: 'images/core/food-and-beverage/1.png'
    },
    {
      image: 'images/core/food-and-beverage/2.png'
    },
    {
      image: 'images/core/food-and-beverage/3.png'
    },
    {
      image: 'images/core/food-and-beverage/4.png'
    }
  ];

  for (
    let index = 0;
    index < foodAndBeverageGalleryGalleryData.length;
    index++
  ) {
    $('#food-and-beverage-gallery').append(`
      <div class="col-lg-3 col-md-6 col-sm-6" style="padding: 10px"> 
        <a target="_blank" href="${foodAndBeverageGalleryGalleryData[index].image}">
          <div>
            <img
              src="${foodAndBeverageGalleryGalleryData[index].image}"
              alt=""
              class="img-fluid"
            />
          </div>
        </a>
      </div>
	`);
  }

  let drinksGalleryData = [
    {
      image: 'images/core/drinks/DSC06305.jpeg'
    },
    {
      image: 'images/core/drinks/IMG_5869.jpg'
    },
    {
      image: 'images/core/drinks/IMG_5877.jpg'
    },
    {
      image: 'images/core/drinks/IMG_5883.jpg'
    },
    {
      image: 'images/core/drinks/IMG_5884.jpg'
    },
    {
      image: 'images/core/drinks/IMG_5890.jpg'
    },
    {
      image: 'images/core/drinks/IMG_5891.jpg'
    }
  ];

  for (let index = 0; index < drinksGalleryData.length; index++) {
    $('#drinks-gallery').append(`
      <div class="col-lg-3 col-md-6 col-sm-6"> 
        <a href="${drinksGalleryData[index].image}" class="popup-gallery">
          <div class="square-img">
            <img
              src="${drinksGalleryData[index].image}"
              alt=""
              class="img-fluid"
            />
          </div>
        </a>
      </div>
	`);
  }
})(jQuery);
