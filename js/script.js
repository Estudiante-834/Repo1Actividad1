const inputMessage = document.getElementById("input-mssg");
const addButton = document.getElementById("add-button");
const resetButton = document.getElementById("reset-button");
const messageList = document.getElementById("mssg-list");

function addMessage() {
    let newMessage = document.createElement("li")

    newMessage.innerText = inputMessage.value;
    messageList.appendChild(newMessage);
    inputMessage.value = "";
}

function resetMessage() {
    messageList.innerHTML = "";
}

addButton.addEventListener("click", addMessage);
resetButton.addEventListener("click", resetMessage);
inputMessage.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addMessage();
    }
})
