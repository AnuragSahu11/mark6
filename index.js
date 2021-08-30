const textArea = document.querySelector(".input_text");
const inputButton = document.querySelector(".input_button");
const output = document.querySelector(".output_text");

function fetchData(text) {
  fetch(
    `https://api.funtranslations.com/translate/minion.json?text=${text}`
  )
    .then((response) => response.json())
    .then((data) => {
      translate(data.contents.translated);
    })
    .catch((error) => console.log(error));
}

function translate(text) {
  output.innerHTML = `${text}`;
}

inputButton.addEventListener("click", () => {
  console.log(textArea.value)
  fetchData(textArea.value);
});
