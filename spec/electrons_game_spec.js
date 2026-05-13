describe('Electrons game', function() {
	beforeEach(function() {
		game = new ElectronsGame();
	});

	// TC_1
	it('should return 6 for [ 1, 2, 3, 4, 5 ] ', function() {
		expect(game.play([ 1, 2, 3, 4, 5 ])).toEqual(6);
	});

	// TC_2
	it('should return 4 for [ 2, 2, 3, 3 ] ', function() {
		expect(game.play([ 2, 2, 3, 3 ])).toEqual(4);
	});
});
