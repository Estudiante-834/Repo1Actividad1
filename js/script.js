function addMessage() {
    let messageList = document.getElementById("mssg-list");
    let newMessage = document.createElement("li")

    newMessage.innerText = inputMessage.value;
    messageList.appendChild(newMessage);
    inputMessage.value = "";
}

function resetMessage() {
    let messageList = document.getElementById("mssg-list");
    
    messageList.innerHTML = "";
}

let inputMessage = document.getElementById("input-mssg");
let addButton = document.getElementById("add-button");
let resetButton = document.getElementById("reset-button");

addButton.addEventListener("click", addMessage);
resetButton.addEventListener("click", resetMessage);