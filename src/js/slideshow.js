			//$('#main-slideshow').css('background-image', "url('index-contents/main-ss/main-slideshow-"+2+".jpg')");
			var i =0;
			var images = ['index-contents/main-ss/main-slideshow-1.jpg','index-contents/main-ss/main-slideshow-2.jpg','index-contents/main-ss/main-slideshow-3.jpg','index-contents/main-ss/main-slideshow-4.jpg','index-contents/main-ss/main-slideshow-5.jpg'];
			var image = $('#main-slideshow');
            //Initial Background image setup
			image.css('background-image', "url('index-contents/main-ss/main-slideshow-"+2+".jpg')");
            //Change image at regular intervals
			setInterval(function(){  
				image.fadeOut(1000, function () {
				image.css('background-image', 'url(' + images [i++] +')');
				image.fadeIn(1000);
			   });
			if(i == images.length)
			i = 0;
			}, 5000);           
