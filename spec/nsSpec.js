var expect = chai.expect;

describe('arrayCount', function(){
  var arr = [1,2,2,3,4,1];

  it('should return a count of the number of array elements', function() {
    expect(ns.arrayCount([1,2,6])).to.equal(3);
    expect(ns.arrayCount([])).to.equal(0);
    expect(ns.arrayCount()).to.equal(undefined);
    expect(ns.arrayCount(arr)).to.equal(arr.length);
  });
});