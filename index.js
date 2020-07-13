// Write your code here!

let main = document.querySelector("main#main")
main.remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "YOUR_NAME is the champion"
newHeader.className = "victory";

