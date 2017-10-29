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
    let audioCello = document.querySelectorAll("audio[data-instrument='cello']").item(0)
    let divCello = document.querySelectorAll("div[data-instrument='cello']").item(0)
    playbackToggle(audioCello, divCello)
  } else if (instrument === "flute") {
    let audioFlute = document.querySelectorAll("audio[data-instrument='flute']").item(0)
    let divFlute = document.querySelectorAll("div[data-instrument='flute']").item(0)
    playbackToggle(audioFlute, divFlute)
  } else {
    let audioTrumpet = document.querySelectorAll("audio[data-instrument='trumpet']").item(0)
    let divTrumpet = document.querySelectorAll("div[data-instrument='trumpet']").item(0)
    playbackToggle(audioTrumpet, divTrumpet)
  }
}

function playbackToggle(audioElement, divElement) {
  if (audioElement.paused) {
    audioElement.play()
    divElement.classList.remove("key")
    divElement.classList.add("keyplaying")
  } else {
    audioElement.pause()
    divElement.classList.remove("keyplaying")
    divElement.classList.add("key")
  }
}
