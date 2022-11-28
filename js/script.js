

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const btnMore = document.querySelector('.btn-menu')
const menuItems = document.querySelectorAll('.sweet-list').length
let items = 4

btnMore.addEventListener('click', () => {
	items += 2;
	const array = Array.from(document.querySelector('.sweet-list').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('sweet-item-visible'));

	if (items === 8) {
		btnMore.textContent = "Bienvenue!";
	}
});

const logoBtn = document.querySelector('.logo')
const naVig = document.querySelector('.nav-bar')
const linksIt = document.querySelectorAll('.bar-item')

logoBtn.addEventListener('click', function() {
	naVig.classList.add('bar-active');
})

linksIt.forEach(function(el) {
	el.addEventListener('click', function() {
		naVig.classList.remove('bar-active');
	})
})



app.use((req, res, next) => {
	res.document.querySelectorAll('Access-Control-Allow-Origin', '*');
	next();
}); 