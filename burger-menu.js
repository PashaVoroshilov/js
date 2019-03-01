(function burgerMenu(selector) {
	var menu = document.querySelector(selector),
		button = menu.firstElementChild,
		links = document.querySelectorAll('.burger-nav__link'),
		overlay = menu.lastElementChild;

	button.addEventListener('click', function(e) {
		e.preventDefault();
		toggleMenu();
	});

	for (var i = 0; i < links.length; i++) {
		var currentItems = links[i];

		currentItems.addEventListener('click', function() {
			toggleMenu();
		});
	}

	overlay.addEventListener('click', function() {
		toggleMenu();
	});

	function toggleMenu () {
		menu.classList.toggle('burger-menu--active');
	}


}('.burger-menu'));

