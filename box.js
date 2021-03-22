//продублированное с занятия

const COLLECTION = document.querySelectorAll(".piano-key");
const PIANO = document.getElementById("piano");

const startSound = (event) => {
  event.target.classList.add("active");
};

const stopSound = (event) => {
  event.target.classList.remove("active");
};

const startCorrespondOver = (event) => {
  event.target.classList.add("active");
  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", startSound);
    elem.addEventListener("mouseout", stopSound);
  });
};
const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound);
    elem.removeEventListener("mouseout", stopSound);
  });
};

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);
//моё сделаное с денисом
const audioList = document.querySelectorAll("audio");
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

//
const audioList = document.querySelectorAll("audio");
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

const COLLECTION = document.querySelectorAll(".piano-key");

const PIANO = document.getElementById("piano");

const startSound = (event) => {
  event.target.classList.add("active");
};

const stopSound = (event) => {
  event.target.classList.remove("active");
};

const startCorrespondOver = (event) => {
  event.target.classList.add("active");

  COLLECTION.forEach((elem) => {
    elem.addEventListener("mouseover", startSound);
    elem.addEventListener("mouseout", stopSound);
  });
};
const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound);
    elem.removeEventListener("mouseout", stopSound);
  });
};

PIANO.addEventListener("mousedown", startCorrespondOver);
PIANO.addEventListener("mouseup", stopCorrespondOver);
