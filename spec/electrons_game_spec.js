describe('Electrons game', function() {
	beforeEach(function() {
		game = new ElectronsGame();
	});

	// TODO TC_1
	it('should return 6 for [ 1, 2, 3, 4, 5 ] ', function() {
		expect(game.play([ 1, 2, 3, 4, 5 ])).toEqual(6);
	});
});
