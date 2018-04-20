$(document).ready(function() {
  function addZero(str, max) {
    str = str.toString();
    return str.length < max ? addZero("0" + str, max) : str;
  };

  function setTimer(startingDate, selector) {
    let countDown = setInterval(function() {
      let now = new Date().getTime(),
        difference = startingDate - now,
        days = addZero(Math.floor(difference / (1000 * 60 * 60 * 24)), 2),
        hours = addZero(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2),
        minutes = addZero(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 2),
        seconds = addZero(Math.floor((difference % (1000 * 60)) / 1000), 2);
      $(selector).find('.days').text(days);
      $(selector).find('.hours').text(hours);
      $(selector).find('.minutes').text(minutes);
      $(selector).find('.seconds').text(seconds);
      if (difference < 0) {
        clearInterval(countDown);
        $(selector).find('.timer').remove();
      }
    }, 1000);
  };
  setTimer(1546812001000, '#timer0');
  setTimer(1524236400000, '#timer1');
  setTimer(1523869200000, '#timer2');
  setTimer(1546812001000, '#timer3');

  // slider setting
  $('.review-slider').slick({
    autoplay: true,
    slidesToShow: 2,
    rows: 0,
    nextArrow: '<button type="button" class="slick-next icon-arrow"></button>',
    prevArrow: '<button type="button" class="slick-prev icon-arrow"></button>',
  });

  $('.last-news-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    rows: 0,
    nextArrow: '<button type="button" class="slick-next icon-arrow"></button>',
    prevArrow: '<button type="button" class="slick-prev icon-arrow"></button>',
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function(e) {
        $('#photo-preview').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
    $('#photo-placeholder').hide();
  }
  $("#user-photo").on('change', function() {
    readURL(this);
  });

  $('.contact-item-add-info-btn .btn-fill').on('click',function (e) {
  	e.preventDefault();
  	//$(this).tab('show')
  	console.log($(this).attr('href'))
  	$($(this).attr('href')).tab('show');
  	/*$(this).tab('show')*/
  })
})
