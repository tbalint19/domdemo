let myEventListener = (event: Event) => {
  let userInput = (event.target as HTMLInputElement).value
  let result = userInput.split("").reverse().join("")
  renderH1(result)
  renderP(userInput)
}

// input
let resultHeaderElement = document.getElementById("result-header")!
let resultParagraphElement = document.getElementById("result-paragraph")!
let inputElement = document.getElementById("my-input")!
let buttonElement = document.getElementById("my-button")!

inputElement.addEventListener("input", myEventListener)
buttonElement.addEventListener("click", myEventListener)


// output
let renderH1 = (content: string) => {
  if (content.length > 5) {
    resultHeaderElement.innerHTML = "<h1>" + content + "</h1>" // !!!!!
  } else {
    resultHeaderElement.innerHTML = ""
  }
}

let renderP = (content: string) => {
  let toRender = ""
  let count = 0
  while (count < 150) {
    toRender += "<p class='my-class'>" + content + "</p>"
    count++
  }
  resultParagraphElement.innerHTML = toRender
}