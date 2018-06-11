$(document).ready(function(){
/*SCRIPT PARA AGREGAR CLASE ACTIVO*/
    $("nav ul li a").click(function(e) {
      $("nav ul li a.activo").removeClass('activo');
      var $this = $(this);
      if (!$this.hasClass('activo')) {
          $this.addClass('activo');
      }
      e.preventDefault();
  	});
/*SCRIPT PARA ANIMACION DE MENU HAMBURGUESA*/
    var flag1 = false;
	$(".hamburger").click(function(){
		if(!flag1){
			$(".hamburger").addClass("is-active");
			flag1 = true;
		}
		else{
			$(".hamburger").removeClass("is-active");
			flag1 = false;
		}
	});
/*SCRIPT PARA ANIMACION DE MENU DE NAVEGACION*/
	var flag2 = false;
	var scroll;
	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 150){
			if(!flag2){
				$("header").css({"position": "fixed", "top": "0", "height": "100px", "z-index": "100"});
				$("#logo").css({"margin-top": "-5px", "width": "80px", "height": "80px"});
				$("header").css({"background-color": "#f8f8f8"});
				$("nav").css({"margin-left": "9%"});
				$("nav ul li").css({"margin-top": "15px"});
				$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
				$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
				$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0.63)"});
				flag2 = true;	
			}
		}
		else{
			if(flag2) {
				$("header").css({"position": "static"});
				$("#logo").css({"margin-top": "50px", "width": "230px", "height": "230px"});
				$("header").css({"background-color": "transparent"});
				$("nav").css({"margin-left": "4%"});
				$("nav ul li").css({"margin-top": "0px"});
				$("header").css({"box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
				$("header").css({"-moz-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
				$("header").css({"-webkit-box-shadow":"0px 10px 25px 0px rgba(0,0,0,0)"});
				flag2 = false;	
			}
		}
	});
});
