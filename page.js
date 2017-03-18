function magic () {
var random = Math.floor(Math.random() *4)
if (random === 0) {
  document.getElementById('answer').innerHTML = "Yes!";
} else if (random === 1) {
  document.getElementById('answer').innerHTML = "No?";
} else if (random === 2) {
  document.getElementById('answer').innerHTML = "Maybe you should ask google...";
} else if (random === 3) {
  document.getElementById('answer').innerHTML = "Who cares about your question, let's do some coding!";
}
}
