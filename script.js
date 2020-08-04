var resultArray
var selectedElement
var waitingforInput = false
var oncepressed = false
function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min).toString()
  resultArray = randomNumber.split("")
}

generateRandomNumber(1111, 9999)

function circleClicked(element, index) {
      selectedElement = element
      event.target.classList.add("wait")
      waitingforInput = true
      oncepressed = true
}  




function detectKeyPress(event) {
  if (waitingforInput == true) {
    if (event.keyCode>=48 && event.keyCode <=57)
      selectedElement.target.innerHTML = event.key
      waitingforInput = false
      selectedElement.target.classList.remove("wait")
  }

}
