function onClickBackToTop() {
	$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
}

$(document).ready(function (){

	/* register callbacks */
	$("#mySkillsButton").click(function (){
		$('html, body').scrollTo($("#mySkillsPanel") , 800);
     });

	$("#menuProjectsButton").click(function (){
		$('html, body').scrollTo($("#projectsPanel") , 800);
     });

     $("#menuAboutButton").click(function (){
		$('html, body').scrollTo($("#aboutMePanel") , 800);
     });

	/* hide back to top element */
	$('.back-top').hide();

	// fade in .back-top
	$(function () {
		$(window).scroll(function () {

			/* configure animation classes */
			$('.mySkillsAnimatedLeft:in-viewport').addClass('slideInLeft animated');
			$('.mySkillsAnimatedRight:in-viewport').addClass('slideInRight animated');
			$('.animatedTitle:in-viewport').addClass('slideInDown animated');
			$('.animatedFadeIn:in-viewport').addClass('fadeIn animated');

			if ($(this).scrollTop() > 100) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.back-top').click(onClickBackToTop);

	});
});
