var computerScore = [];
var computerTotal = 0;
var turn = 1;
function computer(roll) {
  //debugger;
  while (computerScore.length <= 2 && turn % 2 === 0) {

      var roll = Math.floor(Math.random() * 6+1 );
        if (roll === 1 && computerScore.length < 2) {
          computerScore.length = 0;
          turn = turn + 1;
        } else if (roll > 1 && computerScore.length < 2) {
          computerScore.push(roll);
        } else {
        var compSum = 0;

        for (i=0 ; i<=computerScore.length - 1; i++) {
          compSum = compSum + computerScore[i];
        }
        computerTotal = computerTotal + compSum;
        turn = turn + 1;
        computerScore.length = 0;
        break
    }
  }
}
function Player(name) {
  this.playerName = name;
  this.playerScore = [];
  this.playerTotal = 0;
}
Player.prototype.game = function(number) {
  //debugger;
  if (turn % 2 !== 0) {
    var roll = Math.floor(Math.random() * 6+1 );
    if (roll === 1) {
      this.playerScore.length = 0;
      turn = turn + 1;
    } else if (roll > 1) {
      this.playerScore.push(roll);
    }
  } else {

  }
}
Player.prototype.addScore = function (numbers) {
  var sum = 0;
  for (i=0 ; i<=this.playerScore.length - 1; i++) {
    sum = sum + this.playerScore[i];
  }
  this.playerTotal = this.playerTotal + sum;
  this.playerScore.length = 0;
  turn = turn + 1;
}
//User interface logic
$(document).ready(function(){
  $("#playerInfo").submit(function(event){
    event.preventDefault();
    var playerOne = $("#player-one").val();
    newPlayerOne = new Player(playerOne);
    $(".name").text(newPlayerOne.playerName);
  });
  $("#formOne").submit(function(event){
    event.preventDefault();
    newPlayerOne.game();
    $(".player-rolls").text(newPlayerOne.playerScore);
    computer();
    $(".computer").text(" " + computerTotal);
  });
  $("#hold").click(function(event) {
    newPlayerOne.addScore();
    computer();
    $(".first-player").text(" " + newPlayerOne.playerTotal);
    $(".computer").text(" " + computerTotal);
  });
});
