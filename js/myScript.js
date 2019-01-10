var canvas;
var ctx;

var colorValue;
console.log("Here we go :/");

window.onload = function(){
	console.log("Onload fired");
	document.getElementById("shirt-img").style.visibility = "hidden"; 
	
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext("2d");	
	
	cshirtCanvas();	
	
};
$(function(){
	console.log("home-bxslider fired");
	$('.home-bxslider').bxSlider({
		mode: 'horizontal',
		captions: true,
		auto: true,
		stopAutoOnClick: true,
		pager: true,
		slideWidth: 800
	});
});
$(function(){
	$('.cshirt-bxslider').bxSlider({
		mode: 'vertical',
		pager: true,
		minSlides:2,
		maxSlides:2,
		moveSlides:1,
	});
	console.log("cshirt-bxslider fired");
});


$(function(){
	$('.color p').click(function() {
		switch (true) {
			case $(this).hasClass('color1v'):
				colorValue = "rgb(0,0,0)"						
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color2v'):			
				colorValue = "rgb(255,0,0)"					
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color3v'):
				colorValue = "rgb(0,255,0)"	
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color4v'):
				colorValue = "rgb(0,0,255)"
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color5v'):
				colorValue = "rgb(0,255,255)"
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color6v'):
				colorValue = "rgb(255,0,255)"
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color7v'):
				colorValue = "rgb(255,255,0)"
				csOverlay(colorValue);
				break;
			case $(this).hasClass('color8v'):
				colorValue = "rgb(255,255,255)"
				csOverlay(colorValue);
				break;
			default:
				text = "csOverlay(colorValup";
		}
	});
});

function cshirtCanvas(){
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var img = document.getElementById("shirt-img");
	ctx.drawImage(img,25,20);
	ctx.globalAlpha = "0.5";
	console.log("cshirtCanvas fired");

};

function csOverlay(cValue){
	console.log("csOverlay fired");

	ctx.globalCompositeOperation="source-in";
	ctx.fillStyle = cValue;
	console.log("Gathered from csOverlay "+cValue);
	ctx.fillRect(0, 0, 1000, 700);
	ctx.globalAlpha = "1";
};

$(function(){
	$('.logo img').click(function() {
		switch (true) {
			case $(this).hasClass('logo1img'):
				$("#activeLogo").remove();
				$('<img id="activeLogo" src="assets/logo1OL.jpg">').appendTo(".logoOverlay");
				break;
			case $(this).hasClass('logo2img'):		
				$("#activeLogo").remove();			
				$('<img id="activeLogo" src="assets/logo2OL.jpg">').appendTo(".logoOverlay");
				break;
			case $(this).hasClass('logo3img'):
				$("#activeLogo").remove();
				$('<img id="activeLogo" src="assets/logo3OL.jpg">').appendTo(".logoOverlay");
				break;
			case $(this).hasClass('logo4img'):
				$('<img id="activeLogo" src="assets/logo4OL.jpg">').appendTo(".logoOverlay");
				$("#activeLogo").remove();
				break;
			case $(this).hasClass('logo5img'):
				$('<img id="activeLogo" src="assets/logo5OL.jpg">').appendTo(".logoOverlay");
				$("#activeLogo").remove();
				break;
			case $(this).hasClass('logo6img'):
				$('<img id="activeLogo" src="assets/logo6OL.jpg">').appendTo(".logoOverlay");
				$("#activeLogo").remove();
				break;
			case $(this).hasClass('logo7img'):
				$('<img id="activeLogo" src="assets/logo7OL.jpg">').appendTo(".logoOverlay");
				$("#activeLogo").remove();
				break;
			case $(this).hasClass('logo8img'):
				$('<img id="activeLogo" src="assets/logo8OL.jpg">').appendTo(".logoOverlay");
				$("#activeLogo").remove();
				break;
			default:
				text = "csOverlay(colorValup";
		}
	});
	
});
function dropDownFunction(){
	document.getElementById("myDropMenu").classList.toggle("show");
}
window.onclick = function(event){
	if(!event.target.matches(".dropButton")){
		var dropDownMenu = document.getElementsByClassName("dropdownContent");
		var i;
		for (i=0;i<dropDownMenu.length;i++){
			if(dropDownMenu.classList.contains("show")){
				openDropDown.classList.remove("show");
			}
			
		}
	}
}

//var colorIsClicked = false;
//function colorClicked(){
//	colorIsClicked = true;
//	
//}
//var colorElement = document.getElementsByClassName('color');
//colorElement.addEventListener('click', colorClicked);



//You need to find a way to give colors a RGBa value to use in JS for the overlay
//function myFunction() {
//	console.log("Buttontest worked")
//    var x = document.getElementsByClassName("color");
//    var tester = document.getElementById("test");
//	tester.innerHTML = x.length;
//}
//maybe use this with the color palette somehow

//Try to use the drag and drop feature instead of clicking??



