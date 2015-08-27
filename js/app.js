// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - lightbox

// jQuery representation of an object, handy to use the "$" to declare variables
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");

// Append the 'img' tag inside the 'div' overlay
$overlay.append($image);

// Add caption to overlay
$overlay.append($caption);

// Append the overlay '<div><img><div>' inside the body paragraph
$("body").append($overlay);

// When the 'a link' inside the #imageGallery is clicked
$("#imageGallery a").click(function(event){
	
	// preventDefault prevents the link from redirecting
	event.preventDefault();
	
	// gets the value of the 'href', or image location
	var imageLocation = $(this).attr("href");
	
	// changes the images '<img>' src to become the image location, '<img src="">'
	$image.attr("src", imageLocation);
	
	// shows the overlay;
	$overlay.show();
	
	// selects the current 'img' children of the 'a link' and grabs the 'alt' attribute 
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

// When overclick is clicked, it will hide it;
$overlay.click(function(){
	$overlay.hide();	
});