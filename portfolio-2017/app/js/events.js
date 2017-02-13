document.querySelector('.menu-icon').addEventListener('click', function() {
    if (!this.hasAttribute('on')) {
        this.setAttribute('on', '');        
        document.querySelector('#menu').setAttribute('on', '');
    } else {
        this.removeAttribute('on');
        document.querySelector('#menu').removeAttribute('on');
    }
});

document.addEventListener('scroll', evt => {
    if (window.scrollY >= 350 && window.scrollY <= 1300) {
        document.querySelector('.content').setAttribute('on', '');
    } else {
        document.querySelector('.content').removeAttribute('on');
    }
        
});

document.querySelector('.slide-to-about').addEventListener('click', () => {
    do {
        ++window.scrollY;
    } while (window.scrollY < window.innerHeight)
});