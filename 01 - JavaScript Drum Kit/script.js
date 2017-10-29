var key = document.getElementsByClassName("key")

for(let i = 0; i < key.length; i++) {
  key[i].addEventListener("click", whichKey)
}

function whichKey() {
  let instrument = this.dataset.instrument
  console.log("Clicked:", this.dataset.instrument)
  playAudio(instrument)
}

function playAudio(instrument) {
  if (instrument === "cello") {
    let cello = document.querySelectorAll("audio[data-instrument='cello']").item(0)
    playbackToggle(cello)
  } else if (instrument === "flute") {
    let flute = document.querySelectorAll("audio[data-instrument='flute']").item(0)
    playbackToggle(flute)
  } else {
    let trumpet = document.querySelectorAll("audio[data-instrument='trumpet']").item(0)
    playbackToggle(trumpet)
  }
}

function playbackToggle(element) {
  element.paused ? element.play() : element.pause()
}
