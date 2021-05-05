const btnTranslate = document.getElementById("btn-translate");
const textInput = document.getElementById("text-input");
const output = document.querySelector("#output");

function clickHandler(){
    output.innerHTML=("sdfg "+textInput.value);
};
    

btnTranslate.addEventListener("click",clickHandler);
