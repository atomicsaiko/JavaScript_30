console.log(document.getElementsByClassName("key"))

var key = document.getElementsByClassName("key")

for(i = 0; i < key.length; i++) {
  key[i].addEventListener("click", whichKey)
}

function whichKey() {
  console.log(this.dataset.instrument)
}
