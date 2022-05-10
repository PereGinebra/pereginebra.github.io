window.onload = init;
window.addEventListener('resize', function(event) {
    if(window.innerWidth !== windowWidth) {
        updateCardHeight();
        windowWidth = window.innerWidth;
    }
    windowHeight = window.innerHeight;
}, true);

//GLOBAL VARIABLES
var selectedButton = undefined;
var selectedSection = undefined;
var selectedId = undefined;

var windowWidth = undefined;
var windowHeight = undefined;

var storedCardHeight = undefined;

function init() {
    selectedButton = document.getElementById("introButton");
    selectedSection = document.getElementById("introSection");
    selectedId = "intro";

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    menuCard = document.getElementById("menuCard");
    updateCardHeight();
    setMyAge();
}

function menuFunc(x) {
    x.classList.toggle("change");
    menuCard.classList.toggle("hide");
}

function goToSectionById(id) {
    selectSectionById(id);
    const section = document.getElementById(id+"Section");
    section.scrollIntoView({behavior: "smooth", block: "center"});
}

function goToElementById(id) {
    const element = document.getElementById(id);
    if(id == 'projects') element.scrollIntoView({behavior: "smooth"});
    else element.scrollIntoView({behavior: "smooth", block: "center"});
}

function selectSectionById(id) {
    if(id != selectedId) {
        //deselect the previous section
        selectedSection.classList.toggle('selectedSection');
        selectedSection.classList.toggle('hiddenSection');
        selectedButton.classList.toggle('selectButton');
        
        //select the new section
        let section = document.getElementById(id+"Section");
        let button = document.getElementById(id+"Button");
        section.classList.toggle('selectedSection');
        section.classList.toggle('hiddenSection');
        button.classList.toggle('selectButton');

        if (id === 'intro') updateCardHeight();
        //store the selected section
        selectedId = id;
        selectedSection = section;
        selectedButton = button;

    }
}

function nextSection() {
    switch (selectedId) {
        case 'intro':
            selectSectionById('programming');
        break;
        case 'programming':
            selectSectionById('hobbies');
        break;
        case 'hobbies':
            selectSectionById('languages');
        break;
        case 'languages':
            selectSectionById('intro')
        break;
    }
}

function previousSection() {
    switch (selectedId) {
        case 'intro':
            selectSectionById('languages');
        break;
        case 'programming':
            selectSectionById('intro');
        break;
        case 'hobbies':
            selectSectionById('programming');
        break;
        case 'languages':
            selectSectionById('hobbies')
        break;
    }
}

function setMyAge() {
    let intro = document.getElementById('aboutIntro');
    const date = new Date();
    let age = date.getFullYear() - 2000;
    if (date.getMonth()+1 < 8 || (date.getMonth()+1 == 8 && date.getDate() < 15)) {
        age-=1;
    }
    intro.innerText = intro.innerText.replace("_",age.toString());
}

function updateCardHeight() {
    let cards = Array.from(document.getElementsByClassName('card'));
    let introCard = document.getElementById('introSection');
    introCard.style.height = 'auto';    //set intro to auto so it recalculates its height
    const introHeight = introCard.clientHeight-32; //get new height
    if (introHeight > 0) storedCardHeight = introHeight;
    cards.forEach(card => {     //set it to all cards
        card.style.height = introHeight > 0 ? introHeight.toString()+'px' : 'auto';
        if(card.clientHeight-33 < storedCardHeight) card.style.height = storedCardHeight.toString()+'px';
    });
    
  }
