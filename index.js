const btnSection = document.querySelector(".section-two");
const textSelector= document.querySelector(".txt-input");
const outputSelector= document.querySelector(".output");

const urlBanana= `https://api.funtranslations.com/translate/minion.json`;
const urlPirate= `https://api.funtranslations.com/translate/pirate.json`;
const urlYoda= `https://api.funtranslations.com/translate/yoda.json`;


function errorHandler(error){
    console.log(error.message)
    alert("Try again after some time", error)
}


function getTranslationURL(input, classItem) {
    if(classItem==='btn-banana'){
        return urlBanana + "?" + "text=" + input
    }
    if(classItem==='btn-pirate'){
        return  urlPirate + "?" + "text=" + input
    }
    if(classItem==='btn-yoda'){
        return  urlYoda + "?" + "text=" + input
    }
}

//Event bubbling
function clickEventHandler(e){

    const text= textSelector.value;

    const classItem = e.target.classList[1];

    const input= getTranslationURL(text, classItem)
    
    fetch(input).then(response => response.json())
                .then(json => {
                    const translatedText= json.contents.translated;
                    outputSelector.innerText = translatedText;
                }).catch(errorHandler)
}



btnSection.addEventListener("click", clickEventHandler);
