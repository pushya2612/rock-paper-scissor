let computermove ='';    
let result =''
let playermove =''
function pickcomputermove()
{
    const random =Math.random()
    if (random >= 0 && random < 1/3)
    {
        computermove = 'rock';
    }
    else if (random >= 1/3 && random < 2/3)
    {
        computermove = 'paper';
    }
    else if (random >= 2/3 && random < 1)
    {
        computermove = 'scissor';
    }
    return computermove
}
let score =JSON.parse(localStorage.getItem('score')) /*method 1*/ || {wins:0, lose:0, ties:0} 
/*method 2*/
// if (score === null)
// {
//     score = {
//         wins: 0,
//         lose: 0,
//         ties: 0
//     };
// }
/*method 3 */
// if (!score)
// {
//     score = {
//         wins: 0,
//         lose: 0,
//         ties: 0
//     };
// }

function playgame(playermove)
{
    const computermove=pickcomputermove()
    if (playermove ==='rock')
    {
        if (computermove === 'rock')
        {
            result='TIE'
        }
        else if (computermove === 'paper')
        {
            result='YOU LOSE'
        }
        else if (computermove === 'scissor')
        {
            result='YOU WIN'
        }
    }
    else if (playermove ==='paper')
    {
        if (computermove === 'paper')
        {
            result='TIE'
        }
        else if (computermove === 'scissor')
        {
            result='YOU LOSE'
        }
        else if (computermove === 'rock')
        {
            result='YOU WIN'
        }
    }
    else if (playermove ==='scissor')
    {
        if (computermove === 'scissor')
        {
            result='TIE'
        }
        else if (computermove === 'rock')
        {
            result='YOU LOSE'
        }
        else if (computermove === 'paper')
        {
            result='YOU WIN'
        }
    }
    if (result === 'YOU WIN')
    {
        score.wins+=1;
    }
    else if (result==='YOU LOSE')
    {
        score.lose+=1
    }
    else if (result==='TIE')
    {
        score.ties+=1
    }
    localStorage.setItem('score', JSON.stringify(score));
    //upadting score after every game
    updateScore();
    //updating the symbols of player and computer moves
    let playerSymbol;

    if (playermove === 'rock') {
        playerSymbol = '✊';
    }
    else if (playermove === 'paper') {
        playerSymbol = '✋';
    }
    else if (playermove === 'scissor') {
        playerSymbol = '✌️';
    }


    let computerSymbol;

    if (computermove === 'rock') {
        computerSymbol = '✊';
    }
    else if (computermove   === 'paper') {
        computerSymbol = '✋';
    }
    else if (computermove === 'scissor') {
        computerSymbol = '✌️';
    }

    document.getElementById('playermove').textContent = playerSymbol;
    document.getElementById('computermove').textContent = computerSymbol;
    document.getElementById('player-instruction').innerHTML = playermove.toUpperCase();
    document.getElementById('computer-instruction').innerHTML = computermove.toUpperCase();
}
function updateScore()
{
    document.getElementById('no-wins').innerHTML= score.wins;
    document.getElementById('no-losses').innerHTML= score.lose;
    document.getElementById('no-ties').innerHTML= score.ties;
    console.log(score)
}
function resetscore()
{
    score.wins =0;
    score.lose =0;
    score.ties =0;
    localStorage.removeItem('score');
    document.getElementById('playermove').innerHTML = '⚡';
    document.getElementById('computermove').innerHTML = '⚡';
     document.getElementById('player-instruction').innerHTML = 'Ready';
    document.getElementById('computer-instruction').innerHTML = 'Ready';
    //update after resetting the score
    updateScore();
}
//to display the score when the page is reloaded
updateScore();

