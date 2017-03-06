// JavaScript Document

$(document).ready(function(e) {
    $('html, body').animate({scrollTop: 10, opacity: 0.5}, 1000);
	$('html, body').animate({scrollTop: 0, opacity: 1}, 1000);
});
/***link scrolling***/

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
		
		$('.nav-wrap').toggleClass('active');
		$('.menu-icon').toggleClass('change');
	}
	


/***fade blinking effect****/

$(document).ready(function(){
			$(".fadein").hide(0).delay(500).fadeIn(2000);			
			$(".fadein").delay(500).fadeOut(2000);		
    		setInterval(function(){ fadein() }, 1000);
	});
	
	function fadein(){
		$(".fadein").fadeIn(2000);			
		$(".fadein").delay(500).fadeOut(2000);
	}
    

/***scroll fading effect***/

$(window).scroll(function () {
		  $('.scrollfade').each(function () {
			  if ((($(this).offset().top - $(window).scrollTop()) < 50) || (($(window).height() - ($(this).offset().top - $(window).scrollTop() + $(this).outerHeight())) < 20)) {
				  $(this).stop().fadeTo(100, 0);
				  
			  } else {
				  $(this).stop().fadeTo(100, 1);
				  
				  
			  }
		  });
	//console.log("scroll fade");
	});
	

$(window).scroll(function(){
		if($(window).scrollTop()==$('#home').offset().top)
			$('.particles').fadeIn(500);
		else
			$('.particles').fadeOut(1000);
		console.log("scrolled");
	});
	
	
/***skillbars canvas***/

$(window).scroll(function(){
		if($(window).scrollTop()==$('#developer_profile').offset().top){
			$('.skillbar').fadeIn(500);
   			load_skills('skilla',70,'#ff0');
			load_skills('skillb',100,'#0f0');
			load_skills('skillc',60,'#f00');
			load_skills('skilld',75,'#5f0');
			load_skills('skille',40,'#fff');
			load_skills('skillf',80,'#4fa');
		}
		else
			$('.skillbar').fadeOut(1000);
		//console.log("scrolled");
	});

function load_skills(id, v, color){
	var ctx = document.getElementById(id).getContext('2d');
	var al = 0;
	var start  = 4.72;
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;
	var diff;
	function progresssim(){
			diff = ((al/100) * Math.PI*2*10).toFixed(2);
			ctx.clearRect(0,0,cw,ch);
			ctx.lineWidth = 10;
			ctx.strokeStyle = color;
			ctx.fillStyle = color;
			ctx.textAlign = 'center';
			ctx.font = "20px bold Arial";
			ctx.fillText(al+'%',cw/2,ch/2+2,cw);
			ctx.beginPath();
			ctx.arc(50,50,40,start,diff/10+start,false);
			ctx.stroke();
			
			if(al >= v)
				clearTimeout(sim);
			al++;
	}
	var sim = setInterval(progresssim, 50);
}
	
