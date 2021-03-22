const audioList = document.querySelectorAll("audio");
const PIANO = document.getElementById("piano");
let fullScreen = document
  .querySelector(".fullscreen")
  .addEventListener("click", useFullSkrin);
// console.log(fullScreen);
// fullScreen.addEventListener("click", useFullSkrin);

function useFullSkrin() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const audioMap = {};

for (const audio of audioList) {
  audioMap[audio.id] = audio;
  audioMap[audio.dataset.letter] = audio;
  audioMap[audio.dataset.rusletter] = audio;
}

const keys = document.querySelectorAll(".piano-key");

const keyMap = {};
keys.forEach((key) => {
  keyMap[key.dataset.letter] = key;
  keyMap[key.dataset.rusletter] = key;
  keyMap[key.dataset.note] = key;
  key.addEventListener("mousedown", playNote);
});

function playNote(event) {
  let pianoKey = event.target;
  let note = audioMap[pianoKey.dataset.note];
  pianoKey.classList.add("active");
  note.play();
  note.addEventListener("ended", () => {
    pianoKey.classList.remove("active");
  });
}

document.addEventListener("keydown", playKeyNote);

function playKeyNote(event) {
  console.log(event.key);
  let needKey = event.key;
  let note = audioMap[needKey.toUpperCase()];
  if (note) {
    keyMap[needKey.toUpperCase()].classList.add("active");
    note.currentTime = 0;
    note.play();
    note.addEventListener("ended", () => {
      keyMap[needKey.toUpperCase()].classList.remove("active");
    });
  }
}

const startSound = (event) => {
  event.target.classList.add("active");
  let pianoKey = event.target;
  let note = audioMap[pianoKey.dataset.note];
  note.play();
};

const stopSound = (event) => {
  event.target.classList.remove("active");
};

const startCorrespondOver = (event) => {
  event.target.classList.add("active");

  keys.forEach((elem) => {
    elem.addEventListener("mouseover", startSound);
    elem.addEventListener("mouseout", stopSound);
  });
};
const stopCorrespondOver = () => {
  keys.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound);
    elem.removeEventListener("mouseout", stopSound);
  });
};

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);
