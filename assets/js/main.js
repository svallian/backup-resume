/*image changer*/
$( document ).ready(function() {
    var imageArray = ["../ayenz.github.io/assets/images/1.jpg", "../ayenz.github.io/assets/images/2.jpg", "../ayenz.github.io/assets/images/3.jpg", "../ayenz.github.io/assets/images/4.jpg", "../ayenz.github.io/assets/images/6.jpg", "../ayenz.github.io/assets/images/7.jpg", "../ayenz.github.io/assets/images/8.jpg"];
    var imageIndex = 0;
    function changeImageByTimer() {
      bigImage = $('#bigImage');

      bigImage.animate({opacity: .1 }, function() {
        $(this).attr('src', imageArray[imageIndex]);

      });

      imageIndex++;
      console.log(imageIndex)

      if (imageIndex >= 7) {
        imageIndex = 0;
      }

      bigImage.animate({opacity: 1})
    }

    var imgTimer = setInterval(changeImageByTimer, 5000);
});


/*----------------------------*/
$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


// $('#countdown').countdown({
// 	date: "Desember 24, 2015 18:03:26",
// 	render: function(data) {
// 	  var el = $(this.el);
// 	  el.empty()
// 	    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
// 	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
// 	}
// });
