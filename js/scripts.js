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

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 100 && window.innerWidth > 800){
			if(!flag2){
				$("header").css({"position": "fixed", "top": "0", "height": "120px", "z-index": "1000"});
				$("#logo").css({"margin-top": "-35px", "width": "170px", "height": "160px"});
				$("header").css({"background-color": "#f8f8f8"});
				$("nav").css({"margin-left": "3%"});
				$("nav ul li").css({"margin-top": "23px"});
				$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
				$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
				$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
				flag2 = true;	
			}
		}
		else{
			if(flag2) {
				$("header").css({"position": "static"});
				$("#logo").css({"margin-top": "0px", "width": "200px", "height": "200px"});
				$("header").css({"background-color": "transparent"});
				$("nav").css({"margin-left": "10px"});
				$("nav ul li").css({"margin-top": "0px"});
				$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
				$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
				$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
				flag2 = false;	
			}
		}
	});

/*SCRIPTS PARA ANIMAR NUMEROS*/
$('#profesores').animateNumber({number: 20}, 5000);
$('#pae').animateNumber({number: 50}, 5000);
$('#cursos').animateNumber({number: 35}, 5000);

/*SCRIPT PARA CONOCER LA POSICIÓN DE LA VENTANA*/
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	//console.log(scroll);
});

var anchoHeader = $('.redes-inicio').innerWidth();
console.log(anchoHeader);
});
