document.addEventListener('click', function(e) {
	var elem = e.target,
		container = document.querySelector('#menu__list');

	if (elem.classList.contains('menu__link')) {
		e.preventDefault();

		var content = elem.nextElementSibling,
			textBlock = content.firstElementChild,
			reqWidth = textBlock.clientWidth,
			item = elem.parentNode,
			items = container.children;


		if (!item.classList.contains('menu__item--active')) {
			for(var i = 0; i < items.length; i++) {
				var currentItem = items[i];

				currentItem.classList.remove('menu__item--active');
				currentItem.lastElementChild.style.width = 0;
			};

			item.classList.add('menu__item--active');
			content.style.width = reqWidth + 'px';

		} else {
			item.classList.remove('menu__item--active');
			content.style.width = 0;
		}

	}
});