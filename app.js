// GETTING ALL VARRIABLES

var link = window.location.href;
var title = document.querySelector('#main .title');
var index = 0;
var next = document.getElementById('next-btn');
var content = document.querySelector('.content');
var txt = document.querySelector('.txt');

var form, box, popupCloseBtn, popupBtn, popupInput, proposeBtn;

form = document.querySelector('#popup-form');
box = document.querySelector('.popup-box');
popupInput = document.querySelector('.popup-input');
popupCloseBtn = document.querySelector('.popup-close');
popupBtn = document.querySelector('.popup-btn');
proposeBtn = document.querySelector('#propose-btn');

// VERIFYING THE LINK
if (link.indexOf('#') != -1 && link.indexOf('#') != (link.length - 1)) {
    // HIDING HADER AND SHOWING THE MAIN SECTION
    document.getElementById('header').classList.add('hide');
    document.getElementById('footer').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    // GETTING THE TITLE FROM LINK
    link = link.slice(link.indexOf('#') + 1);
    title.innerHTML = link;
}

// LINES THAT ARE STORING IN A ARRAY
var lines = [
	"I've been staring at your profile picture with your name",
	"Found the reason for my smile, the day I found you. Will you let me be the reason for your smile?",
	"My friend things you’re cute but I don’t. I think you are absolutely gorgeous.",
    "You are hotter than the bottom of my laptop",
	"Like a broken pencil, Life without you is pointless",
    "Hold my hand tight as I want to grow old with you from this day forth",
    "I Love You Damn",
	"I Love You A lot",
	"I’m not a holder but I really want to keep you forever",
	"Your hand looks heavy, Can I hold it for a lifetime?",
	"BTW If you were a Tomato, You’d be a really nice Tomato",
	"Happy Valentine Day My Sweet Love"
]

// MAKING FUNCTIONS

function load(){
    //MAKING BASIC ANIMATION
    content.classList.add('content-anim');
    txt.innerHTML = lines[index];
    setTimeout( () => {
        content.classList.remove('content-anim');
    }, 500 )

    // WHILE INDEX REACH THE MAXIMUM NUMBER OF LINE
    if(index == (lines.length - 1)){
        // STOP INCREASING INDEX
        index = (lines.length - 1);
    }else{
        // OTHERWISE INCREASING IT
        index++;
    }
}

function generate() {
    // VALIDATING BUTTON FOR COPY LINK
    if (popupBtn.innerHTML == "Copy") {
        // SELECTING LINK
        popupInput.select();
        popupInput.setSelectionRange(0, 99999);
        // COPYING LINK
        document.execCommand('copy');

        // RESTORING ITEMS
        popupBtn.innerHTML = "Submit";
        popupClose()
        // ALEART FOR COPYING
        alert('Link Is Copied \n \nNow Send This To Your Valentine')
    } else {
        // VALIDATING INPUT VALUE
        if(popupInput.value.length != 0){
            // CONCATING THE LINK WITH NAME
            var pageLink = window.location.href + "#" + popupInput.value;
            popupInput.value = pageLink;
            // CHANGING BUTTON TEXT FOR COPY
            popupBtn.innerHTML = "Copy";
        }else{
            // ALEART FOR INVALID INPUT
            alert('Please Insert A Valid Name')
        }
    }
}

function popupOpen() {
    // MAKING POPUP VISIBLE WITH BASIC ANIMATION
    form.classList.remove('hide');
    setTimeout(() => {
        box.classList.add('box-anim');
    }, 10);
    setTimeout(() => {
        box.classList.remove('box-anim');
    }, 500);
}

function popupClose() {
    form.classList.add('hide');
    popupInput.value = "";
}

// CALLING THIS FUNCTION

next.addEventListener('click', load);
proposeBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
popupBtn.addEventListener('click', generate);