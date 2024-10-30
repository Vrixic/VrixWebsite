// /*
// 	Stellar by HTML5 UP
// 	html5up.net | @ajlkn
// 	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
// */

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth * window.devicePixelRatio;
// canvas.height = window.innerHeight * window.devicePixelRatio;

// canvas.style.width = `${window.innerWidth}px`;
// canvas.style.height = `${window.innerHeight}px`;

// // Simple PRNG based on a seed
// function random(seed) {
// 	let x = Math.sin(seed) * 10000;
// 	return x - Math.floor(x);
// }

//  // Function to generate a random polygon based on a seed, keeping it close to a rectangle
//  function generatePolygon(seed) {
// 	let p1 = Math.floor(random(seed) * 50); // Top edge
// 	let p2 = Math.floor(random(seed + 1) * 35) + 75; // Bottom edge
// 	let p3 = Math.floor(random(seed + 2) * 25); // Left edge
// 	let p4 = Math.floor(random(seed + 3) * 85) + 25; // Right edge

// 	return `polygon(${p3}% ${p1}%, ${p4}% ${p1}%, ${p4}% ${p2}%, ${p3}% ${p2}%)`;
// }

// // Generate x random polygons based on a seed
// function generatePolygons(seed, count) {
// 	let polygons = [];
// 	for (let i = 0; i < count; i++) {
// 		polygons.push(`${generatePolygon(seed + i)}`);
// 	}
// 	return polygons;//.join('\n');
// }

// (function($) {

// 	var	$window = $(window),
// 		$body = $('body'),
// 		$main = $('#main');

// 	// Breakpoints.
// 		breakpoints({
// 			xlarge:   [ '1281px',  '1680px' ],
// 			large:    [ '981px',   '1280px' ],
// 			medium:   [ '737px',   '980px'  ],
// 			small:    [ '481px',   '736px'  ],
// 			xsmall:   [ '361px',   '480px'  ],
// 			xxsmall:  [ null,      '360px'  ]
// 		});

// 	// Play initial animations on page load.
// 		$window.on('load', function() {
// 			window.setTimeout(function() {
// 				$body.removeClass('is-preload');
// 			}, 100);
// 		});

// 	// Nav.
// 		var $nav = $('#nav');

// 		if ($nav.length > 0) {

// 			// Shrink effect.
// 			$main
// 			.scrollex({
// 				mode: 'top',
// 				enter: function() {
// 					$nav.addClass('alt');
// 				},
// 				leave: function() {
// 					$nav.removeClass('alt');
// 				},
// 			});

// 			// Links.
// 			var $nav_a = $nav.find('a');

// 			$nav_a
// 			.scrolly({
// 				speed: 1000,
// 				offset: function() { return $nav.height(); }
// 			})
// 			.on('click', function() {

// 				var $this = $(this);

// 				// External link? Bail.
// 					if ($this.attr('href').charAt(0) != '#')
// 						return;

// 				// Deactivate all links.
// 					$nav_a
// 						.removeClass('active')
// 						.removeClass('active-locked');

// 				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
// 					$this
// 						.addClass('active')
// 						.addClass('active-locked');
// 			})
// 			.each(function() {

// 				var	$this = $(this),
// 					id = $this.attr('href'),
// 					$section = $(id);

// 				// No section for this link? Bail.
// 					if ($section.length < 1)
// 						return;

// 				// Scrollex.
// 					$section.scrollex({
// 						mode: 'middle',
// 						initialize: function() {

// 							// Deactivate section.
// 								if (browser.canUse('transition'))
// 									$section.addClass('inactive');

// 						},
// 						enter: function() {

// 							// Activate section.
// 								$section.removeClass('inactive');

// 							// No locked links? Deactivate all links and activate this section's one.
// 								if ($nav_a.filter('.active-locked').length == 0) {

// 									$nav_a.removeClass('active');
// 									$this.addClass('active');

// 								}

// 							// Otherwise, if this section's link is the one that's locked, unlock it.
// 								else if ($this.hasClass('active-locked'))
// 									$this.removeClass('active-locked');

// 						}
// 					});

// 			});

// 			var $cyberBtns = $nav.find('button');
// 			$cyberBtns.scrolly({
// 				speed: 1000,
// 				offset: function() { return $nav.height(); }
// 			})
// 			.on('click', function() {
	
// 				var $this = $(this);
	
// 				// External link? Bail.
// 				if ($this.attr('href').charAt(0) != '#')
// 					return;
	
// 				// Deactivate all links.
// 				$cyberBtns
// 					.removeClass('active')
// 					.removeClass('active-locked');
	
// 				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
// 				$this
// 					.addClass('active')
// 					.addClass('active-locked');	
// 			}).each(function() {
// 				var	$this = $(this),
// 				id = $this.attr('href'),
// 				$section = $(id);
	
// 				// No section for this link? Bail.
// 				if ($section.length < 1)
// 					return;
	
// 				// Scrollex.
// 				$section.scrollex({
// 					mode: 'middle',
// 					initialize: function() {
	
// 						// Deactivate section.
// 						if (browser.canUse('transition'))
// 							$section.addClass('inactive');
	
// 					},
// 					enter: function() {
	
// 						// Activate section.
// 						$section.removeClass('inactive');
	
// 						// No locked links? Deactivate all links and activate this section's one.
// 						if ($cyberBtns.filter('.active-locked').length == 0) {

// 							$cyberBtns.removeClass('active');
// 							$this.addClass('active');

// 						}
	
// 						// Otherwise, if this section's link is the one that's locked, unlock it.
// 						else if ($this.hasClass('active-locked'))
// 							$this.removeClass('active-locked');
	
// 					}
// 				});
	
// 			});

// 			let cyberBtnsNav = document.getElementsByClassName('button-cyber-nav');
// 			for (let i = 0; i < cyberBtnsNav.length-1; i++) 
// 			{
// 				let seed = Math.floor(Date.now() + Math.random()); // Random seed
// 				let polygonsCSS = generatePolygons(seed, 7);
// 				for (let j = 1; j < 6; j++) 
// 				{
// 					cyberBtnsNav[i].style.setProperty(`--clip-${j+1}`, `${polygonsCSS[j]}`);
// 				}
// 			}
// 		}

// 	// Scrolly.
// 		$('.scrolly').scrolly({
// 			speed: 1000
// 		});

// })(jQuery);