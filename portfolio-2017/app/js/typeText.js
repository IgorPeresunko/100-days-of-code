(function() {
let currentText = 0,
    text = [
        'love code',
        'enjoy learning',
        'think JavaScript will conquer the world...',
    ]
text.sort(() => .5 - Math.random());

const type = () => {
    setInterval(cursor, 500);
    setTimeout(() => print(0, true), 1000);
}

const cursor = () => {
    let cursor = document.querySelector('#cursor').style;
    cursor.opacity = (cursor.opacity === '1') ? 0 : 1;
}

const print = (i = 0, growing) => {
    document.querySelector('#text').textContent = text[currentText].slice(0, i);
    if (i < text[currentText].length && growing) {
        setTimeout(()=>print(++i, true), 50)
    } else if (growing) {
        setTimeout(()=>print(i, false), 1500)
    } else if (i > 0) {
        setTimeout(()=>print(--i, false), 50)
    } else {
        currentText < (text.length - 1) ? ++currentText : currentText = 0;
        setTimeout(() => print(0, true), 1000);
    }
}

type();
}());