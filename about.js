var slider = document.getElemenById("mySlider");
var output = document.getElementById ("demo");
output.innerHTML = slider.value;

slider.oninput = function(){
	output.innerHTML = this.value;
}