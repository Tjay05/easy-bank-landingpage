const hBurger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

let displayValue = menu.style.display;

function mobileScreen() {
	hBurger.addEventListener('click', () => {
		if (menu.style.display === displayValue) {
			menu.style.display = 'flex';
			hBurger.setAttribute('src', 'images/icon-close.svg');
		} else {
			menu.style.display = displayValue;
			hBurger.setAttribute('src', 'images/icon-hamburger.svg');
		}
	});
}

function desktopScreen() {
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
	}
}

function toggleScreen (e) {
	if (e.matches) {
		desktopScreen();
	} else {
		mobileScreen();
	}
}

const mediaQuery = window.matchMedia('(min-width: 768px)');
toggleScreen(mediaQuery);

mediaQuery.addEventListener('change', toggleScreen)
