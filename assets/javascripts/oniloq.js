$(window).load(function () {
	//$('#wrapper').addClass('loaded');
	$('#oniloq').fadeIn(800);
});
$(function () {
	anchor();
	toTop();
	menuToggle();

	var topBtn = $('#page-top');
	topBtn.hide();
	function toTop() {
		$(window).scroll(scrollToTop);
	} 
	function scrollToTop() {
		if( $(this).scrollTop() > 100 ) {
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();
		}
	}
	var $href;
	function anchor() {
		$href=$('a[href^=#]').click(scroll);
	}
	function scroll() {
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		var id=$(this).attr('href');
		//if() {
			//return false;
		//}
		$("html,body").animate({
			scrollTop: HashOffset
		}, 1000);
		return false;
	}
	var $menu, $menutoggle;
    function menuToggle() {
        $menu=$('#menu');
        $menutoggle = $('.toggle');
        $menutoggle.click(togglemenu);
    }
	function togglemenu(e) {
		e.preventDefault();
		if ($menu.attr('data-status') != "open") {
			openmenu(true);
		} else {
			closemenu(true);
		}
	}
    function openmenu(slide) {
        $menu.addClass('open').attr('data-status', 'open');
    }

    function closemenu(slide) {
        $menu.removeClass('open').attr('data-status', 'closed');
    }
});
$(function(){
	$(document).ready(function() {
		$(function(){
		});
	});
});(jQuery);
