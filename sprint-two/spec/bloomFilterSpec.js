var expect = chai.expect;
var assert = chai.assert;

describe("bloom filter", function() {
  var bloom;

  beforeEach(function() {
    bloom = new Bloom(); //Defaults to an object
  });

  it("should have methods named 'add', 'check', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.check).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

});
