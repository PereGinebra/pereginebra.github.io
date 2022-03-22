window.onload = init;

function init() {
    selectedButton = document.getElementById("introButton");
    selectedSection = document.getElementById("introSection");
    selectedId = "intro";

    menuCard = document.getElementById("menuCard");
    setMyAge();
}

function menuFunc(x) {
    x.classList.toggle("change");
    menuCard.classList.toggle("hide");
}

function goToSectionById(id) {
    selectSectionById(id);
    const section = document.getElementById(id+"Section");
    section.scrollIntoView();
}

function goToElementById(id) {
    const element = document.getElementById(id);
    element.scrollIntoView();
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
    console.log('helou');
}
