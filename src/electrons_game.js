// electrons_game.js
function ElectronsGame() {}
ElectronsGame.prototype.play = function(dies) {

    let res = 0;
    
    for (let die of dies) {
        if (die === 3) res += 2;
        else if (die === 5) res += 4;
    }
    
    return res;
};
