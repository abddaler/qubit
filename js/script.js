class SCROLL{constructor(e){"string"==typeof e.el?this.el=document.querySelector(e.el):e.el instanceof HTMLElement&&(this.el=e.el),this.top=e.top,this.el.style.position="fixed",this.el.style.zIndex=100,this.el.style.top=this.scroll(),this.unit=e.unit,window.addEventListener("scroll",(()=>this.scroll()))}scroll(){this.winodow=window.innerHeight,this.window-scrollY>0?this.el.style.top=this.window-scrollY+"px":this.el.style.top=0}scrollNumber(){return"px"==this.unit?this.top>=0?this.top:0:"%"==this.unit||null==this.unit?window.innerHeight-this.el.clientHeight:void 0}}let nav=document.querySelector(".nav");const myScroll=new SCROLL({el:nav,top:100,unit:"%"});new Splide(".splide",{type:"loop",perPage:1,gap:30,width:"1050px",height:"420px",fixedWidth:"320px",fixedHeight:"410px"}).mount();const iconMenu=document.querySelector(".menu-icon");if(iconMenu){const e=document.querySelector(".menu-body");iconMenu.addEventListener("click",(function(t){document.body.classList.toggle("__lock"),iconMenu.classList.toggle("__active"),e.classList.toggle("__active")}))}document.querySelectorAll(".nav-list__link").forEach((e=>{e.onmouseenter=e.onmouseleave=t=>{const i=e.clientWidth;let o=t.pageX-e.offsetLeft;o-10<0?o=0:o+10>i&&(o=i),e.style.setProperty("--x",`${o}px`)}}));