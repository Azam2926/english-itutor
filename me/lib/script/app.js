var words = document.getElementsByClassName('words')[0];
var images = document.getElementsByClassName('images')[0];

var counter = 0;

overAudio = new Audio("lib/audio/over3.m4a");

window.onload = function() {

    var wordsArray = [
        '<div class="word" id="0" style="animation-delay: 0.1s" draggable="true"><p>water bottle</p></div>',
        '<div class="word" id="1" style="animation-delay: 0.2s" draggable="true"><p>face veil</p></div>',
        '<div class="word" id="2" style="animation-delay: 0.3s" draggable="true"><p>boots</p></div>',
        '<div class="word" id="3" style="animation-delay: 0.4s" draggable="true"><p>bayonet</p></div>',
        '<div class="word" id="4" style="animation-delay: 0.5s" draggable="true"><p>belt</p></div>',
        '<div class="word" id="5" style="animation-delay: 0.6s" draggable="true"><p>steel helmet</p></div>',
        '<div class="word" id="6" style="animation-delay: 0.7s" draggable="true"><p>sling</p></div>',
        '<div class="word" id="7" style="animation-delay: 0.8s" draggable="true"><p>magazine</p></div>',
    ];

    var imagesArray = [
        '<div class="image" style="animation-delay: 0.1s" ><img src="me/lib/image/2.png" alt="face veil" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.2s" ><img src="me/lib/image/1.png" alt="steel helmet" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.3s" ><img src="me/lib/image/3.png" alt="water bottle" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.4s" ><img src="me/lib/image/4.png" alt="boots" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.5s" ><img src="me/lib/image/5.png" alt="bayonet" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.6s" ><img src="me/lib/image/6.png" alt="magazine" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.7s" ><img src="me/lib/image/7.png" alt="sling" width="150px" height="200px"></div>',
        '<div class="image" style="animation-delay: 0.8s" ><img src="me/lib/image/8.png" alt="belt" width="150px" height="200px"></div>',
    ];

    var i = 0;
    var random;
    while (i < wordsArray.length) {
        random = Math.floor(Math.random() * wordsArray.length);
        if (wordsArray[random] != "selected") {
            words.innerHTML += wordsArray[random];
            wordsArray[random] = "selected";
            i++;
        }
    }

    i = 0;

    while (i < imagesArray.length) {
        random = Math.floor(Math.random() * imagesArray.length);
        if (imagesArray[random] != "selected") {
            images.innerHTML += imagesArray[random];
            imagesArray[random] = "selected";
            i++;
        }
    }

    var wordDiv = document.getElementsByClassName('word');
    var imgs = document.getElementsByClassName('image');

    for (i = 0; i < wordDiv.length; i++) {
        wordDiv[i].setAttribute('draggable', 'true');
        wordDiv[i].addEventListener('dragstart', dragStart, false);
        wordDiv[i].addEventListener('mousedown', mouseDown, false);

        imgs[i].addEventListener('dragenter', dragEnter, false);
        imgs[i].addEventListener('dragover', dragOver, false);
        imgs[i].addEventListener('drop', drop, false);
        imgs[i].addEventListener('dragleave', dragLeave, false);
        imgs[i].addEventListener('click', click, false);
    }
};


function dragStart(ev) {

    ev.dataTransfer.setData('text', ev.target.id);

    ev.target.parentNode.style = 'box-shadow: 17px 13px 20px 7px rgba(0, 0 , 0, 0.4); opactiy: 0.1;';
}

function dragEnter(ev) {

    ev.target.style.border = '3px dashed red';
}

function dragOver(ev) {

    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    ev.target.parentNode.style = 'box-shadow: 17px 13px 20px 7px rgba(0, 0 , 0, 0.4); opactiy: 0.1;';
    var id = ev.dataTransfer.getData('text');

    element = document.getElementById(id);
    element.style.transition = 'all 2s';

    if (ev.target.nodeName == 'IMG') {
        if (element.childNodes[0].innerHTML == ev.target.alt) {

            ev.target.parentNode.appendChild(element);
            element.style = 'background-color: #ff3030; width: 150px';

            counter++;
        }
    } else {
        if (element.childNodes[0].innerHTML == ev.target.firstChild.alt) {

            ev.target.appendChild(element);
            element.style = 'background-color: #ff3030; width: 150px';

            counter++;
        }
    }
    ev.target.style.border = '';
    if (counter >= 8) {
        end();
    }
}


var isDown = false;
var downId = '';

function mouseDown(ev) {
    isDown = true;

    if (ev.target.nodeName == 'DIV') {
        downId = ev.target.id;
    } else {
        downId = ev.target.parentNode.id;
    }
}

function click(ev) {
    ev.target.parentNode.style = 'box-shadow: 17px 13px 20px 7px rgba(0, 0 , 0, 0.4); opactiy: 0.1;';
    if (isDown) {

        id = downId;

        element = document.getElementById(id);
        element.style.transition = 'all 2s';
        if (ev.target.nodeName == 'IMG') {
            if (element.childNodes[0].innerHTML == ev.target.alt) {

                ev.target.parentNode.appendChild(element);
                element.style = 'background-color: #ff3030; width: 150px';

                counter++;
                isDown = false;
            }
        } else {
            if (element.childNodes[0].innerHTML == ev.target.firstChild.alt) {

                ev.target.appendChild(element);
                element.style = 'background-color: #ff3030; width: 150px';

                counter++;
                isDown = false;
            }
        }
        ev.target.style.border = '';

        if (counter >= 8) {
            end();
        }
    }
}

function dragLeave(ev) {

    ev.target.style.border = '';
}

function end() {

    overAudio.play();
    modalTrigger.click();

    document.head.appendChild(st);
    images.style = 'text-align: center; width: initial; float:initial; margin: 20px 250px';
    words.style.display = 'none';
    var link = document.createElement('a');
    var nextBtn = document.createElement('button');
    var textNode = document.createTextNode('Next');
    nextBtn.appendChild(textNode);
    nextBtn.setAttribute('class', 'btn btn-success');
    link.appendChild(nextBtn);
    link.setAttribute('href', 'inputs.html');
    images.appendChild(link);
}


var modalTrigger = document.getElementById('myBtn');
modalTrigger.addEventListener('click', function() {


    var modal = document.getElementsByClassName('modal')[0];
    modal.style = 'top: 70px; opacity: 1; display: block;';
});

var st = document.createElement('style');
var txt = document.createTextNode('body>*:not(.container){filter: blur(3px)}');
st.appendChild(txt);

// 709 73 69
