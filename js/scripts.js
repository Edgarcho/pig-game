function Player(name) {
  this.playerName = name;
  this.playerTotal = 0;
  this.playerScore = [];
  this.playerTurn = 0;
}

Player.prototype.game = function(number) {
  if (objArray[0].playerTurn === objArray[1].playerTurn) {
    var roll = Math.floor(Math.random() * 6+1);
      if (roll === 1) {
        this.playerScore = [];
        objArray[0].playerTurn += 1;
      } else if (roll > 1) {
        this.playerScore.push(roll);
        console.log(this.playerScore);
      } else {

        } //close inside if
      } else if (objArray[0].playerTurn === objArray[1].playerTurn){

      } //close outside if
    } //close prototype

Player.prototype.addScore = function(numbers) {
  if (objArray[0].playerTurn === objArray[1].playerTurn) {
  var sum = 0;

  for (i=0 ; i<=this.playerScore.length - 1; i++) {
    sum = sum + this.playerScore[i]
  }
  this.playerTotal = sum;
    objArray[0].playerTurn += 1;
  }
}

//User interface logic
$(document).ready(function(){
  $("#playerInfo").submit(function(event){
    event.preventDefault();
    var playerOne = $("#player-one").val();
    var playerTwo = $("#player-two").val();
    newPlayerOne = new Player(playerOne);
    newPlayerTwo = new Player(playerTwo);
    objArray.push(newPlayerOne);
    objArray.push(newPlayerTwo);
    console.log(objArray);
  });
  $("#formOne").submit(function(event){
    event.preventDefault();
    newPlayerOne.game();
    newPlayerTwo.game();
  });
  $("#hold").click(function(event) {
    newPlayerOne.addScore();
    newPlayerTwo.addScore();
    console.log(newPlayerOne.playerTotal);
    console.log(newPlayerTwo.playerTotal);
  });
});
