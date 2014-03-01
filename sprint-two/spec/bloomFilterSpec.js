var expect = chai.expect;
var assert = chai.assert;

describe("bloom filter", function() {
  var bloom;
  var dict = {};

  beforeEach(function() {
    bloom = new Bloom(); //Defaults to an object
  });

  it("should have methods named 'add', 'check', and 'remove'", function() {
    expect(bloom.add).to.be.a('function');
    expect(bloom.check).to.be.a('function');
    expect(bloom.remove).to.be.a('function');
  });

  it("should add values to an object", function(){
    bloom.add('Susan Sarandon');
    bloom.add('Danny Glover');
    assert.isTrue(bloom.check("Danny Glover"));
    assert.isTrue(bloom.check("Susan Sarandon"));
  });

  it("should remove values from a bloom", function(){
    bloom.add('Mel Gibson');
    bloom.remove('Mel Gibson');
    assert.isFalse(bloom.check('Mel Gibson'));
  });

});
