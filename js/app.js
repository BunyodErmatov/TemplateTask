// dom elementlarni keraklisini ulab oldik
const item = document.querySelector('.items'),
	overflow = document.querySelector('.overflow'),
	nav = document.querySelector('.section-one'),
	btns = document.querySelectorAll('button')

// navni sticy qilish uchun orqa fon berdik
nav.style.backgroundColor = '#fff'
btns.forEach(item => {
	item.addEventListener('click', () => {
		nav.style.position = ''
	})
})
nav.style.position = 'sticky'

// loader uchun o'zgaruchidan foydalandik!
let loader = true

// Loader qo'shtik
if (loader) {
	overflow.style.display = 'flex'
}

// Loader ishi tugashi
setTimeout(() => {
	loader = false
	overflow.style.display = 'none'
	item.classList.remove('hidden')
}, 3500)
