document.addEventListener('click', function(e) {
	var elem = e.target,
		container = document.querySelector('#team__acco');

	if (elem.classList.contains('team__name')) {
		e.preventDefault();

		var content = elem.nextElementSibling,
			textBlock = content.firstElementChild,
			reqHeight = textBlock.clientHeight,
			item = elem.parentNode,
			items = container.children;


		if (!item.classList.contains('team__item--active')) {
			for(var i = 0; i < items.length; i++) {
				var currentItem = items[i];

				currentItem.classList.remove('team__item--active');
				currentItem.lastElementChild.style.height = 0;
			};

			item.classList.add('team__item--active');
			content.style.height = reqHeight + 'px';

		} else {
			item.classList.remove('team__item--active');
			content.style.height = 0;
		}

	}
});
