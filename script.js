var resultArray
var selectedElement
var waitingforInput = false
var selectedIndex
var answerAttemptInRow = 0
var numberGuessedCorrect = 0
var attempt = 1
function generateRandomNumber(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min).toString()
  resultArray = randomNumber.split("")
  console.log(resultArray);
}

generateRandomNumber(1111, 9999)

function circleClicked(element, index) {
  selectedElement = element
  event.target.classList.add("wait")
  waitingforInput = true
  selectedIndex = index
}

function detectKeyPress(event) {
  if (waitingforInput == true) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      selectedElement.target.innerHTML = event.key
      waitingforInput = false
      selectedElement.target.classList.remove("wait")
      checkNumberExist(event.key, selectedIndex);
      answerAttemptInRow++;
      if (answerAttemptInRow == 4) {
        attempt++
        if (numberGuessedCorrect != 4) {
          generateCicle()
        }
        numberGuessedCorrect = 0
        answerAttemptInRow = 0
      }
    }
  }
}

function checkNumberExist(number, index) {
  isNUmberPresent = resultArray.indexOf(number)
  console.log(isNUmberPresent);
  if (isNUmberPresent !== -1) {
    if (index == isNUmberPresent) {
      selectedElement.target.classList.add("correct")
      numberGuessedCorrect++
      if (numberGuessedCorrect == 4) {
        console.log("You Won");
      }
    }
    else {
      selectedElement.target.classList.add("wrongIndex")
    }
  }
  else {
    selectedElement.target.classList.add("wrong")
  }
}

function generateCicle() {
  document.getElementById("content").innerHTML += ` <div  class="row  text-center justify-content-center">
  <div class="col-xs-1 box-grid" onclick="circleClicked(event,0)"></div>
  <div class="col-xs-1 box-grid" onclick="circleClicked(event,1)"></div>
  <div class="col-xs-1 box-grid" onclick="circleClicked(event,2)"></div>
  <div class="col-xs-1 box-grid" onclick="circleClicked(event,3)"></div>
</div>`
}

generateCicle()