window.onload = init;

function init() {
    selectedButton = document.getElementById("introButton");
    selectedSection = document.getElementById("introSection");
    selectedId = "intro";
}

function menuFunc(x) {
    console.log(x);
    x.classList.toggle("change");
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
