// declering all global variable
const result = document.querySelector('#result');
const allImgCont = document.querySelectorAll('.img-container');
const gameStart = document.querySelector('#btnStr');
let allowed = false;
let dragSrcElem = null;




// images that will be dragged
function imgStartDrag (e) {
    if (allowed) {
        dragSrcElem = this;
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
}

// where all images will be dropped
function imgDragOver (ev) {
    if (ev.preventDefault) {``
        ev.preventDefault();
    }
    return false;
}

// when dropping occurs
function imgDropOn (evt) {
    if (dragSrcElem != this) {
        if (allowed) {
            dragSrcElem.innerHTML = this.innerHTML;
            this.innerHTML = evt.dataTransfer.getData('text/html');
            sound.play();
            // calling matching & winning function
            checkWin();
        }
        return false;
    }
}
 
// calling all function handler
allImgCont.forEach (function (item) {
    item.addEventListener('dragstart', imgStartDrag);
    item.addEventListener('dragover', imgDragOver);
    item.addEventListener('drop', imgDropOn);
});

// Displ0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ay time and allow dragging images
gameStart.addEventListener('click', () => {
    allowed = true;
    if (!setTimeId) {     
        countTime();
    }
});