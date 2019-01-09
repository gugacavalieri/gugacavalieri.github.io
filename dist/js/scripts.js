
(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);
<!-- start Mixpanel -->
(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,
0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
mixpanel.init("fafffea1584c9c0b3e529092b54f01ef");
<!-- end Mixpanel -->

jQuery(document).ready(function(){
    mixpanel.track("Page Viewed");
    jQuery('.mixpanel-event').click();
});

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
