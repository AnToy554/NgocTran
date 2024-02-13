    "use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const bearImg = document.querySelector(".bear-img");

const MAX_IMAGES = 7;

let play = true;
let noCount = 0;
var time = null;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
        noCount = 0;
        return play = true;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Ahihi,joke xíu hoi🥰.Va lung tung vui ve nha bae😘.An yêu bé iu nhìu ạ❤️💞";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không",
    "Gái chắc chứ?",
    "Bae!!! Đừng mà🥺",
    "Đừng như vậy nữa mà😔",
    "Tym tui tan nát mất😰",
    "Tui sẽ khóc đó...😭",
    "Tui cực kỳ cực kỳ buồn đó ạ😭😭😭",
    "Làm ơn đồng ý đi ạ...🥺😭"
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  bearImg.src = `img/bear-${image}.gif`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

