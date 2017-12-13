function Player(name) {
  this.playerName = name;
  this.playerTotal = 0;
  this.playerScore = [];
  this.turn = false;
}

Player.prototype.addScore = function(numbers) {
  for (i=0 ; i=this.playerScore.length - 1; i++) {
    var sum = sum + this.playerScore[i]
  }
}

Player.prototype.game = function(number) {
  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  var roll = getRandomNumber(1,6);
  // console.log(roll);
  //console.log(newPlayer);
  if (roll === 1) {
    this.playerScore = 0;
  } else if (roll > 1) {
    this.playerScore.push(roll);
    console.log(this.playerScore);
  } else {

  }
}

//User interface logic
$(document).ready(function(){
  $("#playerInfo").submit(function(event){
    event.preventDefault();
    var playerOne = $("#player-one").val();
    //var playerTwo = $("#player-two").val();
    newPlayer = new Player(playerOne);
    console.log(newPlayer);
  });
  $("#formOne").submit(function(event){
    event.preventDefault();
    console.log(newPlayer.playerScore);
    newPlayer.game();
    console.log(newPlayer.playerScore);
    // game();
    // console.log();
  });
});
