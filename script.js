/*----------------------------------------------------*/
/* Mobile Navigation
------------------------------------------------------ */

$('.mobileToggle').click(function () {
	if ($('.mainNav').hasClass('openNav')) {
		$('.mainNav').removeClass('openNav');
	} else {
		$('.mainNav').addClass('openNav');
	}
});

$('.mainNav li a').click(function () {
	if ($('.mainNav').hasClass('openNav')) {
		$('.navigation').removeClass('openNav');
		$('.mainNav').removeClass('openNav');
	}
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$(document).ready(function () {

	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

});

/*----------------------------------------------------*/
/* Hero Animation
------------------------------------------------------ */
var hero = new TimelineMax({});
hero.staggerFrom(".first", 0.8, { opacity: 0 }, 0.6)
	.staggerFrom(".second", 0.6, { opacity: 0, y: 20 }, 0.4, "-=0.2");

document.addEventListener("DOMContentLoaded", function () {
	// List of image filenames from your "images/gallery" folder
	const imageList = [
		"1B962943-1A02-47B3-A8F6-55CF2929B642.jpeg",
		"3EB0B294-7437-492F-806D-E145873FEF0F.jpeg",
		"5C670103-57E9-4B34-8505-8D45C0CFE073.jpeg",
		"9DA18AC3-E362-4592-863A-D858A9E50E5B.jpeg",
		"018DEFB6-F729-4E69-8315-C2820A2602BE.jpeg",
		"30C9EE7B-3DB9-4C43-A7D9-5C2E1CAD3F81.jpeg",
		"9671D01A-F168-4A8D-BDC5-93AAC3AAC8D5.jpeg",
		"02432143-F0BC-4659-92BE-3BB820CA0E48.jpeg",
		"A4CDC8BE-D7E2-4562-BC85-0C94D0327CAD.jpeg",
		"C3D3509E-061E-4B13-85CE-3E6A64EC18D4.jpeg",
		"C05147C1-3E53-42A3-9A06-29021AAC7BC5.jpeg",
		"CCB5E7CC-FA20-46B8-B555-41AEE3BB253F.jpeg",
		"DDA3B22B-AB61-47DE-ACA4-37855DF86385.jpeg",
		"E4FDC4A4-DBE4-4866-8535-512EE56C7DDE.jpeg",
		"E52E4BA9-BE27-41EB-94A7-2AAB1A4CCF0D.jpeg"
	];

	const galleryContainer = document.getElementById("gallery-container");

	imageList.forEach((image, index) => {
		const div = document.createElement("div");
		div.className = "three col";

		div.innerHTML = `
				<div class="work">
					<img src="images/gallery/${image}" alt="Gallery Image ${index + 1}" />
					<div class="work-overlay">
						<h4>Image ${index + 1}</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>
				</div>
			`;

		galleryContainer.appendChild(div);
	});
});
