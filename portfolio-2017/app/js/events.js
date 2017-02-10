document.querySelector('.menu-icon').addEventListener('click', function() {
    if (!this.hasAttribute('on')) {
        this.setAttribute('on', '');        
        document.querySelector('#menu').setAttribute('on', '');
    } else {
        this.removeAttribute('on');
        document.querySelector('#menu').removeAttribute('on');
    }    
});