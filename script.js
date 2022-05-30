var enterButton = document.getElementById("enter");
var input = document.getElementById("user Input");
var ul = document.querySelector ("ul");
var item = document.getElementByTageName ("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return input.value.lenth;
}

function createListElement(){
     var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);//adds li to ul
    input.value = ""; //reset text input field.

    //start strikethough
    function crossOut(){
    li.classList.toggle("done");
}

li.addEventListener("click", crossOut);
//end strikethrough

// start add delete button
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode ("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
//end add delete button

//add class delete (display:none)
function deleteListItem(){
    li.classList.add("delete")
}
//end add class delete
}

function addListAferClick(){
if (inputLength() > 0) { //make sure that an empty input field
    createListElement ();
}
}

function addListAfterKeyPress(event){
    if (inputLength ()> 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAFterKeyPress);