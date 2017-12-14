var computerScore = [];
var computerTotal = 0;
var turn = 1;

function computer(roll) {
  if (turn % 2 === 0 && computerScore.length !== 2) {
    var roll = Math.floor(Math.random() * 6+1 );
    console.log(roll);
      if (roll === 1) {
        computerScore.length = 0;
        turn = turn + 1;
      } else if (roll > 1) {
        computerScore.push(roll);
        console.log(computerScore);
      } else {

      }
    } else if (computerScore.length === 2) {
      var compSum = 0;

      for (i=0 ; i<=computerScore.length - 1; i++) {
        compSum = compSum + computerScore[i];
      }
      computerTotal = compSum;
      turn = turn + 1;
  } else {

  }
}


function Player(name) {
  this.playerName = name;
  this.playerScore = [];
  this.playerTotal = 0;
}

Player.prototype.game = function(number) {
  if (turn % 2 !== 0) {
    var roll = Math.floor(Math.random() * 6+1 );
    console.log(roll);
    if (roll === 1) {
      this.playerScore.length = 0;
      turn = turn + 1;
    } else if (roll > 1) {
      this.playerScore.push(roll);
      console.log(this.playerScore);
    }
  } else {

  }
}

Player.prototype.addScore = function (numbers) {
  var sum = 0;

  for (i=0 ; i<=this.playerScore.length - 1; i++) {
    sum = sum + this.playerScore[i];
  }
  this.playerTotal = sum;
  turn = turn + 1;
}

//User interface logic
$(document).ready(function(){
  $("#playerInfo").submit(function(event){
    event.preventDefault();
    var playerOne = $("#player-one").val();
    newPlayerOne = new Player(playerOne);
    console.log(newPlayerOne);
  });
  $("#formOne").submit(function(event){
    event.preventDefault();
    newPlayerOne.game();
    computer();
  });
  $("#hold").click(function(event) {
    newPlayerOne.addScore();
    computer();
    console.log(newPlayerOne.playerTotal);
  });
});
