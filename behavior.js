document.addEventListener("DOMContentLoaded", function(event){
    var thumbnailElement0 = document.getElementById("smart_thumbnail");
    thumbnailElement0.addEventListener("click", function(){
	if (thumbnailElement0.className == "small") {
	    thumbnailElement0.className = "";
	}
	else {
	    thumbnailElement0.className = "small";
	}
    });
})
	
