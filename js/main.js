const num = document.querySelector('.num');
const bgnum = document.querySelector('.bgnum');


const MainSlide = new Swiper('.mainSlide', {
    loop: true,
    slideActiveClass: 'on',
    on: {
        init: function () {
            console.log('생김');
            num.innerHTML = `${this.realIndex + 1} / ${this.slides.length}`;
        },
        slideChangeTransitionStart: function () {
            bgnum.style.cssText = `
            background-position-y: 0; 
            `
        },
        slideChangeTransitionEnd: function () {
            console.log(this.realIndex, this.slides.length);
            num.innerHTML = `${this.realIndex + 1} / ${this.slides.length}`;
            bgnum.style.cssText = `
            background-position-y: ${-1000 - 100 * this.realIndex}px; 
            `
        }
    }
});

document.querySelector('.arrows .left').addEventListener('click', () => {
    MainSlide.slidePrev();
})

const dots = document.querySelectorAll('.dots li');

dots.forEach((it, idx) => {
    it.addEventListener('click', () => {
        dots.forEach(it => it.classList.remove('on'));
        it.classList.add('on');
        MainSlide.slideTo(idx);
    })
});



