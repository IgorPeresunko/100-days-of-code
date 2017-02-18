//loader
const loader = () => {
    setTimeout(() => {        
        document.querySelector('.wrapper').style.visibility = 'visible';
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('#loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('#menu').style.display = 'table';
            document.querySelector('#loader').style.display = 'none';
        }, 500);
    }, 2000);
}
window.onload = loader;

//full screen
document.querySelector('.full-screen').addEventListener('click', () => {
    launchFullScreen(document.documentElement);//.requestFullScreen();
});


document.querySelector('.menu-icon').addEventListener('click', function() {
    if (!this.hasAttribute('on')) {
        this.setAttribute('on', '');        
        document.querySelector('#menu').setAttribute('on', '');
    } else {
        closeMenu();
    }
});

document.addEventListener('scroll', evt => {
    //about-text
    let scroll = window.scrollY;
    if (scroll >= 350 && scroll <= 1300) {
        document.querySelector('.content').setAttribute('on', '');
    } else {
        document.querySelector('.content').removeAttribute('on');
    }
    //lovejs
    if (scroll >= window.innerHeight && (scroll <= window.innerHeight * 3)) {
        document.querySelector('#love-js').style.zIndex = 600; 
    } else {
        document.querySelector('#love-js').style.zIndex = 80; 
    }
    //scroll-down
    if (scroll >= 0 && scroll < window.innerHeight) {
        document.querySelector('.slide').setAttribute('to', '1');
    } else if (scroll >= window.innerHeight && scroll < window.innerHeight * 2) {
        document.querySelector('.slide').setAttribute('to', '2');
    } else if (scroll >= window.innerHeight * 2 && scroll < window.innerHeight * 3) {
        document.querySelector('.slide').setAttribute('to', '3');
    } 
    if (scroll === document.body.scrollHeight - window.innerHeight) {    
        document.querySelector('.slide').style.visibility = "hidden";    
    } else {
        document.querySelector('.slide').style.visibility = "visible"; 
    }
        
});

document.querySelector('#menu').addEventListener('click', () => {
    closeMenu();
});

function closeMenu() {
    document.querySelector('.menu-icon').removeAttribute('on');
    document.querySelector('#menu').removeAttribute('on');
}

const slide = (el) => {
    el = el * window.innerHeight;
    let i = window.pageYOffset;
    let diff = el - i;
    let step = 0;
    let interval = setInterval(() => {
        window.scrollTo(0, i + diff * step);
        if (step >= 1) clearInterval(interval);
        step += .05;
    }, 20);
}
document.querySelector('.slide').addEventListener('click', 
    () => slide(Number(document.querySelector('.slide').getAttribute('to'))));


function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

// Выход из полноэкранного режима
function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}

///resize
window.onresize = () => {
    document.querySelectorAll('canvas').forEach(canvas => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        console.log(canvas);
    });

}