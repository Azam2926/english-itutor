var spans = document.getElementsByClassName('keys');
var answers = ['who', 'was born', 'was left', 'to become', 'where', 'was still'];

var ks = new KS(spans, answers);
var paragraphs = new P();

UI.displayNext();






























// var span1 = document.getElementsByClassName('keys');
// var scrore = 0;
// var audio;
// var inp = document.getElementById('in');
// var result = document.getElementById('result');
// var chk = document.getElementById('check');
// var label = document.getElementById('label');
// var textnode = document.createTextNode('Next');
// var score = document.getElementById('score');
// var indiv = document.getElementsByClassName('asd')[0];
// var imageRight = '<img src="right.png"  style="width:60px;height:40px;">';
// var imageWrong = '<img src="wrong.png"  style="width:60px;height:40px;">';
// var FirstP = document.getElementsByClassName('first')[0];

// var nextButton = document.createElement("button");
// nextButton.appendChild(textnode);
// nextButton.style.display = 'inline';
// nextButton.setAttribute('class', 'btn');

// window.onload = function() {

//     for (var i = 1; i <= span1.length; i++) {

//         var str = keys[i - 1];
//         span1[i - 1].addEventListener('click', function() {}, false);

//     }

//     FirstP.style.color = 'blue';
//     FirstP.style.opacity = '1';
//     FirstP.style.cursor = 'pointer';
// };

// function Checker(num, answ) {


//     var checked = false;
//     indiv.style.display = 'block';
//     working(num, checked);
//     label.innerHTML = 'Enter a correct answer:';
//     inp.setAttribute('placeholder', 'Input a correct answer');

//     result.innerHTML = "";

//     chk.onclick = function() {

//         var asdq = '.p:nth-child(' + num + ')';
//         var qw = num + 1;
//         var asdqa = '.p:nth-child(' + qw + ')';

//         if (inp.value == answ) {
//             scrore++;
//             checked = true;
//             audio = document.getElementsByTagName("audio")[0];
//             audio.setAttribute('src', "right.m4a");
//             audio.play();

//             inp.value = "";
//             result.innerHTML = imageRight;

//             this.style.display = 'none';

//             working(num, checked);
//             indiv.appendChild(nextButton, chk);
//             nextButton.style.display = 'inline';
//             label.innerHTML = 'YUUU correct answer';

//             nextButton.onclick = function() {
//                 span1[num - 1].innerHTML = answ;
//                 inp.setAttribute('placeholder', '');
//                 span1[num - 1].style.textDecoration = 'underline';

//                 $(asdq).css({ "color": "black", "opacity": "1", "cursor": "text" });
//                 $(asdqa).css({ "color": "blue", "opacity": "1", "cursor": "pointer" });
//                 $(chk).show(400);
//                 $(this).hide(400);
//                 indiv.style.display = 'none';
//             };
//         } else {
//             audio = document.getElementsByTagName("audio")[1];
//             audio.setAttribute('src', "Recording%20(3).m4a");
//             audio.play();

//             inp.value = "";
//             result.innerHTML = imageWrong;
//             inp.setAttribute('placeholder', 'Try again');
//             label.innerHTML = "Huhhhh wrong answer";
//         }
//     };
// }Z