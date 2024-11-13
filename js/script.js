function addMessage() {
    let messageList = document.getElementById("mssg-list");
    let newMessage = document.createElement("li")

    newMessage.innerText = inputMessage.value;
    messageList.appendChild(newMessage);

    inputMessage.value = "";
}

let inputMessage = document.getElementById("input-mssg");
let addButton = document.getElementById("add-button")

addButton.addEventListener("click", addMessage);