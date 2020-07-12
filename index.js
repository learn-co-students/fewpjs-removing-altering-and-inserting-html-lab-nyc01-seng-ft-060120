// let mainElement = document.getElementById("main")
let mainElement = document.querySelector('main')
mainElement.remove();

let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "S+ Hiro is the champion!"
document.body.appendChild(newHeader)