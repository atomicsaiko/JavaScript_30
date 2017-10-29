console.log(document.getElementsByClassName("key"))

var key = document.getElementsByClassName("key")

for(i = 0; i < key.length; i++) {
  key[i].addEventListener("click", () => console.log("Click"))
}
