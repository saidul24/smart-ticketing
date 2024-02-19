

// set, Update element text
function setElementTextById (elementId, text){
    const element = document.getElementById(elementId)
    element.innerText = text ;
}

// get element numberText
function getElementTextNumberById(elementId){
    const element = document.getElementById(elementId).innerText;
    const TextNumber = parseInt(element)
    return TextNumber ;
}

// set bg-color
function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.style.background = '#1DD100'
    element.style.color = 'white'
}


