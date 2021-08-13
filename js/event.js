function makeDarkBlue() {
    document.body.style.backgroundColor = 'darkblue';
    document.body.style.color = 'white';
}

const makeCrimson = document.getElementById('make-crimson');
makeCrimson.onclick = crimsonBg;
function crimsonBg() {
    document.body.style.backgroundColor = 'crimson';
    document.body.style.color = 'white';
}

const makeTeal = document.getElementById('make-teal');
makeTeal.onclick = function () {
    document.body.style.backgroundColor = 'teal';
    document.body.style.color = 'white';
}

const makePurple = document.getElementById('make-purple');
makePurple.addEventListener('click', purpleBtn);

function purpleBtn() {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
}