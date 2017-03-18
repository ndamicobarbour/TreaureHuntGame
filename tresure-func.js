var bomb1 = generateId()
var bomb2 = generateId()
var bomb3 = generateId()
var treasure1 = generateId()
var treasure2 = generateId()
var treasure3 = generateId()
var counter = 25
var treasurecounter = 0


function generateId() {
  new_id = Math.floor(Math.random()*25)
  while(new_id === bomb1 || new_id === bomb2 || new_id === bomb3 ||
        new_id === treasure1 || new_id === treasure2 || new_id === treasure3
  ) {
    new_id = Math.floor(Math.random()*25)
  }
  return new_id
}

function checkPosition(id)
{
  counter = counter - 1;
  document.getElementById("counter").innerHTML = counter
if (bomb1===id || bomb2===id || bomb3===id) {
  document.getElementById(id).innerHTML="&#x2620"
  document.getElementById("counter").innerHTML="You Loose!"
  alert("You Loose!")
}
else if (treasure1===id || treasure2===id|| treasure3===id){
  treasurecounter = treasurecounter + 1
  document.getElementById(id).innerHTML="$"
}

else {
document.getElementById(id).innerHTML = "&#x1f332"
}
if (treasurecounter===3) {
  document.getElementById("counter").innerHTML="You Win!"
  alert("You Win!")
}}




function reset()
{
  var i = 0;
  for ( i = 0 ; i< 25 ;i++){
  document.getElementById(i).innerHTML = i+1
}
//  document.getElementById(1).innerHTML = 2
//  document.getElementById(2).innerHTML = 3
//  document.getElementById(3).innerHTML = 4
//  document.getElementById(4).innerHTML = 5
//  document.getElementById(5).innerHTML = 6
//  document.getElementById(6).innerHTML = 7
//  document.getElementById(7).innerHTML = 8
//  document.getElementById(8).innerHTML = 9
  document.getElementById("counter").innerHTML = "25"
  bomb = Math.floor(Math.random()*25)
  treasure = Math.floor(Math.random()*25)
  treasurecounter = 0
  counter = 25

}
