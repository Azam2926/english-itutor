var x = document.createElement("STYLE");
var inputs;
var answers = ['soldier', 'grenade', 'ammunition', 'steel helmet', 'sling', 'combat'];

nextAudio = new Audio("lib/audio/lightswitch2.m4a");
correctAudio = new Audio("lib/audio/correct.m4a");
wrongAudio = new Audio("lib/audio/wrong.m4a");
overAudio = new Audio("lib/audio/over3.m4a");

var id;

window.addEventListener('load', function() {

    var inputsArray = [
        '<div class="blocks" id="0" style="animation-delay: 0.1s" ><label>It is a person who serves in an army - </label><input type="text" class="inp"></div>',
        '<div class="blocks" id="1" style="animation-delay: 0.2s" ><label>Small bomb which you throw - </label><input type="text" class="inp"></div>',
        '<div class="blocks" id="2" style="animation-delay: 0.3s" ><label>It is bullets and rockets that are made to be fired from guns - </label><input type="text" class="inp"></div>',
        '<div class="blocks" id="3" style="animation-delay: 0.4s" ><label>It is a hat made of a strong material which you wear to protect your head - </label><input type="text" class="inp"></div>',
        '<div class="blocks" id="4" style="animation-delay: 0.5s" ><label>It is an object such as a gun, a knife, or a missile, which is used to kill or hurt people in a fight or a war - </label><input type="text" class="inp"></div>',
        '<div class="blocks" id="5" style="animation-delay: 0.6s" ><label>It is a special set of clothes which some people, for example soldiers or the police, wear to work in and which some children wear at school - </label><input type="text" class="inp"></div>'
    ];

    var i = 0;
    var random;
    while (i < inputsArray.length) {
        random = Math.floor(Math.random() * inputsArray.length);
        if (inputsArray[random] != "selected") {
            this.document.getElementsByClassName('containerBma')[0].innerHTML += inputsArray[random];
            inputsArray[random] = "selected";
            i++;
        }
    }

    inputs = document.getElementsByClassName('inp');


    for (i = 0; i < inputs.length; i++) {

        const answer = answers[i];
        const nextInputIndex = i + 1;
        const inputIndex = i;

        inputs[i].addEventListener('keydown', function() {

            id = parseInt(this.parentNode.id);
            if (event.keyCode == 13) {
                if (this.value == answers[id]) {

                    if (this.parentNode.id == this.parentNode.parentNode.lastChild.id) {
                        overAudio.play();
                        modalTrigger.click();

                        document.head.appendChild(st);
                    } else {
                        correctAudio.play();
                    }

                    this.setAttribute('readonly', 'readonly');
                    this.removeEventListener('focus', myFocusFunction);

                    if (inputs[nextInputIndex]) {
                        inputs[nextInputIndex].focus();
                    } else {

                    }
                } else {
                    this.value = '';
                    this.placeholder = 'Try again';
                    wrongAudio.play();
                }
            }
        }, false);

        inputs[i].addEventListener('keyup', function() {

            id = parseInt(this.parentNode.id);
            if (event.keyCode == 100) {
                this.value = answers[id] + '';
            }
        }, false);

        inputs[i].addEventListener('focus', myFocusFunction, false);
        inputs[i].addEventListener('blur', myBlurFunction, false);

    }

    inputs[0].focus();

});


function myFocusFunction() {
    event.target.parentNode.style.boxShadow = '10px 10px 20px 0px cyan';
}

function myBlurFunction() {
    event.target.parentNode.style.boxShadow = '';
}



// Over style


var modalTrigger = document.getElementById('myBtn');
modalTrigger.addEventListener('click', function() {


    var modal = document.getElementsByClassName('modal')[0];
    modal.style = 'top: 70px; opacity: 1; display: block;';
});

var st = document.createElement('style');
var txt = document.createTextNode('body>*:not(.container){filter: blur(3px)}');
st.appendChild(txt);
