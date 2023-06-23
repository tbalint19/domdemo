let resultParagraphElement = document.getElementById("result-paragraph")!

let render = (content: string) => {
  resultParagraphElement.innerHTML = content
}

const load = async () => {
  let response = await fetch("https://rickandmortyapi.com/api/character")
  let data = await response.json()

  
  render(data["info"]["pages"])
}

let loadButtonElement = document.getElementById("load")!
loadButtonElement.addEventListener("click", load)
