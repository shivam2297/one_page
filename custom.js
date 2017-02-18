// JavaScript Document

function move(id){
		if(id=="homelink")
		$('html, body').animate({scrollTop: $('#home').offset().top}, 2000);
		if(id=="aboutlink")
		$('html, body').animate({scrollTop: $('#about_me').offset().top}, 2000);
		if(id=="profilelink")
		$('html, body').animate({scrollTop: $('#developer_profile').offset().top}, 2000);
		if(id=="guidelink")
		$('html, body').animate({scrollTop: $('#carrer_guide').offset().top}, 2000);
		if(id=="contactlink")
		$('html, body').animate({scrollTop: $('#contact').offset().top}, 2000);
	}