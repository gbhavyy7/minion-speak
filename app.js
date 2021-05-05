const btnTranslate = document.getElementById("btn-translate");
const textInput = document.getElementById("text-input");
const output = document.querySelector("#output");


const serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL+"?text="+input
}

function clickHandler(){
    const inputText=textInput.value;
    fetch(getTranslationURL(inputText))
    .then( response => response.json() )
    .then( json =>{ 
        const translatedText = json.contents.translated;
        output.innerText = translatedText;
        } )


};
    

btnTranslate.addEventListener("click",clickHandler);
