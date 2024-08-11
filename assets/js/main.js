jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLinks = document.querySelectorAll(".youtube-button");
const YTPlayerPopup = document.querySelector(".youtube-player-popup iframe");

YTLinks.forEach((link) => {
	link.addEventListener("click", () => {
		if (link.dataset.link != "")
		{
			let videolink = `https://www.youtube.com/embed/${link.dataset.link}?&autoplay=1`;
			YTPlayerPopup.src = videolink;
			YTPlayerOverlay.classList.add("active");
		}
	});
});

YTPlayerOverlay.addEventListener("click", () => {
	YTPlayerPopup.src = "";
	YTPlayerOverlay.classList.remove("active");
});