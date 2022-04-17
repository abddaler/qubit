//Скролл навигации

class SCROLL {
    constructor(set){
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el); 
        } else if(set.el instanceof HTMLElement){
            this.el = set.el;
        }
        this.top = set.top;
        this.el.style.position = 'fixed'
        this.el.style.zIndex=100,
        this.el.style.top = this.scroll()
        this.unit = set.unit

        window.addEventListener('scroll', () => this.scroll())
    }
    scroll(){
        this.winodow=window.innerHeight;
        if (this.window - scrollY > 0) {
            this.el.style.top = this.window - scrollY + 'px'
        }else{
            this.el.style.top = 0
        }
    }
    
    scrollNumber(){
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined){
            return window.innerHeight - this.el.clientHeight
        }
    }
}


let nav = document.querySelector('.nav')
const myScroll = new SCROLL({
        el: nav,
        top: 100,
        unit: '%'
});



// Слайдер 

new Splide( '.splide',{
    type:'loop',
    perPage: 1,
    gap: 30,
    width: '1050px',
    height: '420px',
    fixedWidth: '320px',
    fixedHeight: '410px',
    pagination: false,
} ).mount();

//Бургер меню

const iconMenu = document.querySelector('.menu-icon');

if(iconMenu){
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('__lock')
        iconMenu.classList.toggle('__active');
        menuBody.classList.toggle('__active');
    })
}

//Hover ссылок

document.querySelectorAll('.nav-list__link').forEach((elem) => {

	elem.onmouseenter =
	elem.onmouseleave = (e) => {
		const tolerance = 10
		const left = 0
		const right = elem.clientWidth
		let x = e.pageX - elem.offsetLeft
		if (x - tolerance < left){ 
            x = left 
        } else if (x + tolerance > right){ 
            x = right 
        }

		elem.style.setProperty('--x', `${ x }px`)
	}

})