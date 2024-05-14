function buy(){
    alert("Purchased Successfully");
}

var i = 0; 			
var image = [];	
var time = 3000;
image[0] = "img1.png";
image[1] = "img2.png";
image[2] = "img3.png";
function changeImg(){
	document.slide.src = image[i];
	if(i < image.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}
window.onload=changeImg;
