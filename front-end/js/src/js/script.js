inputText = document.querySelector(".input_text");

inputAdd = document.querySelector(".input_add");

inputClear = document.querySelector(".input_clear");

inputBlock = document.querySelector(".input_block");

inputAdd.addEventListener("click",(e)=>{
    if(inputText.value == ""){
        alert("Недопустимый ввод");
    } 
    else if(inputText.value !== ""){
        inputBlock.innerHTML += `<li>${inputText.value}</li> `;
    }
});
inputClear.addEventListener("click", (e) => {
    inputText.value = "";
});
