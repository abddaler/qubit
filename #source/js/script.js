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
// let position = 0;
// const slidesToShow = 3,
//       slidesToScroll = 3,
//         container = document.querySelector('.slider'),
//         track = document.querySelector('.trusted-section-content-slider'),
//         btnPrev = document.querySelector('.slider-prev'),
//         btnNext = document.querySelector('.slider-next'),
//         items = document.querySelectorAll('.trusted-section-content-card'),
//         itemsCount = items.length,
//         itemWidth = container.clientWidth / slidesToShow,   
//         movePosition = slidesToScroll * itemWidth;

        
// btnNext.addEventListener('click', ()=> {
//     const itemsLeft = Math.abs(position) + slidesToShow * itemWidth / itemWidth;

//     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

//     setPosition();
//     checkBtns();
// });

// btnPrev.addEventListener('click', ()=> {
//     const itemsLeft = Math.abs(position) / itemWidth;

//     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//     console.log('НЕУЖЕЛИ Я СДЕЛАЛ ЭТОТ ХЕРОВ СЛАЙДЕР')
//     setPosition();
//     checkBtns();
// });

// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`;
// }

// const checkBtns = () => {
//     btnPrev.disabled = position === 0;
//     btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth

// }

// checkBtns()

// class SLIDER{
//     constructor(options){
//         this.slider = document.querySelector(options.slider);
//         this.sliderLine = this.slider.querySelector('.trusted-section-content-slider')
//         this.slides = this.sliderLine.children
//         this.next = this.slider.querySelector('.slider-next')
//         this.prev = this.slider.querySelector('.slider-prev')

//         this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y'
//         this.timeMove = options.time != undefined ? options.time : 1000
//         this.width = this.slider.clientWidth
//         this.height = this.slider.clientHeight
//         this.moveSize = 'X' === this.dir ? this.width : this.height

//         this.activeSlide = 0

//         this.sliderLine.style = `position: relative;
//                                  height:${this.height}px;
//                                  overflow: hidden;
//                                  `

//         for (let i = 0; i < this.slides.length; i++) {
//             const sl = this.slides[i]
//             sl.style = `position: absolute;
//                         width: ${this.width}px;
//                         height: ${this.height}px;
            
//                         `
//                         if (i != this.activeSlide) {
//                             sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
//                         }

//                         if (i === this.slides.length - 1) {
//                             sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
//                         }
            
//         }  
//         if (options.autoplay == true) {
//             let interval = setInterval(()=>{

//                 this.move(this.next)
//             },options.interval)
//             this.slider.addEventListener('mouseenter' , () => {
//                 clearInterval(interval)
//             })
//             this.slider.addEventListener('mouseleave' , () => {
//                 interval = setInterval(()=>{
//                     this.move(this.next)
//                 },options.interval)
//             })
            

            
//         } 
//         this.next.addEventListener('click', () => this.move(this.next))                      
//         this.prev.addEventListener('click', () => this.move(this.prev))                      


//     }

//     move(btn){
//         this.next.disabled = true
//         this.prev.disabled = true
//         setTimeout(()=>{
//             this.next.disabled = false
//             this.prev.disabled = false
            
//         },this.timeMove + 0.5)
//         let completedMoveSize = btn == this.next ? this.moveSize * -1 : this.moveSize

//         for (let i = 0; i < this.slides.length; i++) {
//             const slide = this.slides[i]
//             slide.style.transition = '0ms'
//             if (i != this.activeSlide) {
//                 slide.style.transform = `translate${this.dir}(${completedMoveSize * -1}px)`
//             }
//         }
//         this.slides[this.activeSlide].style.transform = `translate${this.dir}(${completedMoveSize}px)`
//         this.slides[this.activeSlide].style.transition = this.timeMove + 'ms'
//         if (btn == this.next) {
//             this.activeSlide++
//             if (this.activeSlide >= this.slides.length) {
//                 this.activeSlide = 0
//             }
//         }else if (btn == this.prev){
//             this.activeSlide--
//             if (this.activeSlide < 0) {
//                 this.activeSlide = this.slides.length - 1
//             }
//         }
        
//         this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`
//         this.slides[this.activeSlide].style.transition = this.timeMove + 'ms'

//     }
// }
// const slider = new SLIDER({
//     slider: '.trusted-section-content',
//     direction: 'X',
//     time: 1000,
//     autoplay: true,
//     interval: 5000
// })


new Splide( '.splide',{
    type:'loop',
    perPage: 1,
    gap: 30,
    width: '1050px',
    height: '420px',
    fixedWidth: '320px',
    fixedHeight: '410px'
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