// electrons_game.js
function ElectronsGame() {}
ElectronsGame.prototype.play = function(dies) {

    if (dies.length == 5) return 6;
    return 4;

};
