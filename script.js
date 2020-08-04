var resultArray
var selectedElement
var waitingforInput = false
function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min).toString()
  resultArray = randomNumber.split("")
}

generateRandomNumber(1111, 9999)



function circleClicked(element, index) {
  selectedElement = element
  event.target.classList.add("wait")
  waitingforInput = true
}


function detectKeyPress(event) {
  if (waitingforInput == true) {
      selectedElement.target.innerHTML = event.key

  }

}


