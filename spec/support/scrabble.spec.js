import Scrabble from "scrabble";

describe('Scrabble', function() {

  var testScrabble;
  beforeEach(function() {
    testScrabble = new Scrabble();
  });

  describe('score', function() {
    it('should score a given word', function() {
      // var testScrabble = new Scrabble();
      expect(testScrabble.score('word')).toEqual(8);
      expect(testScrabble.score('majesty')).toEqual(69);
    });

    // it('should throw error when passed integer', function() {
    //   expect(testScrabble.score(10)).toThrow(e);
    // });

  });


});
