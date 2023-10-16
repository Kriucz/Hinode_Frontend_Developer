const navBtn = document.querySelector('.navigation-button')
const nav = document.querySelector('.navigation')
const navBg = document.querySelector('.background')
const navSelect = document.querySelectorAll('.navigation-item__link')

const loadingScreen = document.querySelector('.loading-screen')

const allBtn = document.querySelector('#all-projects')
const htmlBtn = document.querySelector('#html-css')
const jsBtn = document.querySelector('#js')
const reactBtn = document.querySelector('#react')

const allSite = document.querySelectorAll('.projects-menu__card')
const cssSite = document.querySelectorAll('.css')
const jsSite = document.querySelectorAll('.js')
const reactSite = document.querySelectorAll('.react')

const footerYear = document.querySelector('.footer__year')

window.addEventListener('load', ()=> {
loadingScreen.classList.add('hide')
setTimeout(()=> {document.body.removeChild(loadingScreen)},1000)
})

const navBtnHandler = () => {
	nav.classList.toggle('show')
}
navBtn.addEventListener('click', navBtnHandler)

const navHideHandler = () => {
	nav.classList.remove('show')
}

navSelect.forEach(e=>{
	e.addEventListener('click', navHideHandler)
})


const SortHandler = xSite => {
	allSite.forEach(site => {
		site.classList.remove('sorted-back')
		site.classList.add('sorted-start')
	})
	setTimeout(() => {
		allSite.forEach(site => {
			site.classList.add('sorted')

			xSite.forEach(site => {
				site.classList.remove('sorted')
			})
		})
	}, 500)
	setTimeout(() => {
		xSite.forEach(site => {
            site.classList.remove('sorted-start')
			site.classList.add('sorted-back')
		})
	}, 500)
}
// const SortHandler = xSite => {
// 	allSite.forEach(site => {
// 		site.classList.add('sorted')
// 	})
// 	xSite.forEach(site => {
// 		site.classList.remove('sorted')
// 	})
// }

allBtn.addEventListener('click', () => SortHandler(allSite))
htmlBtn.addEventListener('click', () => SortHandler(cssSite))
jsBtn.addEventListener('click', () => SortHandler(jsSite))
reactBtn.addEventListener('click', () => SortHandler(reactSite))


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
