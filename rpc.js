function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);  // [1,0]  | [0,1]
     message = finalMessage(results);
    rpsfrontEnd(yourChoice.id,botChoice, message);

}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase={
     'rock': {'rock': 0.5 , 'paper': 0, 'scissors': 1},
     'paper': {'rock': 1 , 'paper': 0.5, 'scissors': 0},
     'scissors': {'rock': 0 , 'paper': 1, 'scissors': 0.5}
    };

var yourScore= rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];
return[yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore===0){
        return {'message': 'You lost', 'color':'red'};

    }
    else if(yourScore===0.5){
        return{'message': 'You tied', 'color': 'yellow'};
    }
    else {
        return{'message': 'You won', 'color': 'green'};
    }
}

function rpsfrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase= {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv= document.createElement('div');
    var messageDiv= document.createElement('div');

    humanDiv.innerHTML= "<img src = '" + imageDatabase[humanImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style ='color:" + finalMessage['color']+ "; font-size: 60px; padding: 30px; '>" + finalMessage['message']+ "</h1>"
    botDiv.innerHTML= "<img src = '" + imageDatabase[botImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243,28,24,1);'>" 
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
} 

// function reset(){
//     document.getElementById('rpsGame').remove();
// }

// function reset(){
//     document.getElementById('randToRpsInt').remove();
// }

// function reset(){
//     document.getElementById('numberToChoice').remove();
// }

// function reset(){
//     document.getElementById('decideWinner').remove();
// }

// function reset(){
//     document.getElementById('finalMessage').remove();
// }

// function reset(){
//     document.getElementById('rpsfrontEnd').remove();
// }