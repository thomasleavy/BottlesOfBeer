//Week 9, Lab 1
function bottles() {     
  var lyricsElement = document.getElementById("lyrics");
  lyricsElement.innerHTML = '';  
  for (var i = 99; i > 0; i--) { 
    if (i > 1) {
      lyricsElement.innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer! You take one down and pass it around, " + (i - 1) + " bottles of beer on the wall! <br>"; 
    } else if (i === 2) {
      lyricsElement.innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer! You take one down and pass it around, " + (i - 1) + " bottle of beer on the wall! <br>";
   } else {
    lyricsElement.innerHTML += i + " bottle of beer on the wall, " + i + " bottle of beer! You take one down and pass it around, no more bottles of beer on the wall!";
   }
 } 
}

