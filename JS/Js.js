
const text = document.getElementById("text");


function onButtonClick(){
    random = Math.floor(Math.random() * 100 + 1);
    text.innerText = random;
}
function reset() {
    text.innerText = "Example text";
}

