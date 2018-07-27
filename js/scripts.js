$(document).ready(function(){
/*SCRIPT PARA AGREGAR CLASE ACTIVO*/
    $("nav ul li a").click(function() {
      $("nav ul li a.activo").removeClass('activo');
      var $this = $(this);
      if (!$this.hasClass('activo')) {
          $this.addClass('activo');
      }
  	});
  
/*SCRIPT PARA ANIMACION DE MENU HAMBURGUESA*/
    var flag1 = false;
	$(".hamburger").click(function(){
		if(!flag1){
			$(".hamburger").addClass("is-active");
			$('nav').animate({
              left: '0'
          });
			flag1 = true;
		}
		else{
			$(".hamburger").removeClass("is-active");
			 $('nav').animate({
            left: '-100%'
        	});
			flag1 = false;
		}
	});
/*SCRIPT PARA ANIMACION DE MENU DE NAVEGACION*/
	var flag2 = false;
	var scroll;
	var mensaje = "Esta entrando";

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

if(window.innerWidth > 800 && window.innerWidth < 1240){
	if(scroll > 100){
		if(!flag2){
			$("header").css({"position": "fixed", "top": "0", "height": "130px", "z-index": "1000"});
			$("#logo").css({"margin-top": "-25px", "width": "170px", "height": "160px"});
			$("header").css({"background-color": "#f8f8f8"});
			$("nav").css({"margin-left": "4%"});
			$("nav ul li").css({"margin-top": "23px"});
			$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$('body').css({'margin-top': '180px'});
			flag2 = true;	
			}
		}
	else{
		if(flag2) {
			$("header").css({"position": "static"});
			$("#logo").css({"margin-top": "0px", "width": "250px", "height": "250px"});
			$("header").css({"background-color": "transparent"});
			$("nav").css({"margin-left": "9px"});
			$("nav ul li").css({"margin-top": "0px"});
			$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$('body').css({'margin-top': '0px'});
			flag2 = false;	
		}	
	}
}

if(window.innerWidth >= 1240 && window.innerWidth < 1440){
	if(scroll > 100){
		if(!flag2){
			$("header").css({"position": "fixed", "top": "0", "height": "130px", "z-index": "1000"});
			$("#logo").css({"margin-top": "-25px", "width": "170px", "height": "160px"});
			$("header").css({"background-color": "#f8f8f8"});
			$("nav").css({"margin-left": "8%"});
			$("nav ul li").css({"margin-top": "23px"});
			$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$('body').css({'margin-top': '180px'});
			flag2 = true;	
		}
	}
	else{
		if(flag2) {
			$("header").css({"position": "static"});
			$("#logo").css({"margin-top": "0px", "width": "300px", "height": "300px"});
			$("header").css({"background-color": "transparent"});
			$("nav").css({"margin-left": "4%"});
			$("nav ul li").css({"margin-top": "0px"});
			$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$('body').css({'margin-top': '0px'});
			flag2 = false;	
		}
	}
}

if(window.innerWidth >=1440){
	if(scroll > 100){
		if(!flag2){
			$("header").css({"position": "fixed", "top": "0", "height": "130px", "z-index": "1000"});
			$("#logo").css({"margin-top": "-25px", "width": "170px", "height": "160px"});
			$("header").css({"background-color": "#f8f8f8"});
			$("nav").css({"margin-left": "12%"});
			$("nav ul li").css({"margin-top": "23px"});
			$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
			$('body').css({'margin-top': '180px'});
			flag2 = true;	
		}
	}
	else{
		if(flag2) {
			$("header").css({"position": "static"});
			$("#logo").css({"margin-top": "0px", "width": "350px", "height": "350px"});
			$("header").css({"background-color": "transparent"});
			$("nav").css({"margin-left": "6%"});
			$("nav ul li").css({"margin-top": "0px"});
			$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
			$('body').css({'margin-top': '0px'});
			flag2 = false;	
		}
	}
}
});



/*SCRIPT PARA CONOCER LA POSICIÓN DE LA VENTANA
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll == 1800){
		
	}
});
*/
var resumenEscuela = jQuery('.resumen-escuela');
if(resumenEscuela.length > 0){
	$('.resumen-escuela').waypoint(function(){
		/*SCRIPTS PARA ANIMAR NUMEROS*/
		$('#profesores').animateNumber({number: 20}, 4000);
		$('#pae').animateNumber({number: 50}, 4000);
		$('#cursos').animateNumber({number: 35}, 4000);
	},{
		offset: '55%'
	});
}
});
