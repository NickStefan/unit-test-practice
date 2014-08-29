var expect = chai.expect;

describe('arrayCount', function(){
  var arr = [1,2,2,3,4,1];

  it('should return a count of the number of array elements', function() {
    expect(ns.arrayCount([1,2,6])).to.equal(3);
    expect(ns.arrayCount([])).to.equal(0);
    expect(ns.arrayCount(arr)).to.equal(arr.length);
  });
  
  it('should return a number', function(){
    expect(ns.arrayCount([])).to.be.a('number');
    expect(ns.arrayCount(arr)).to.be.a('number');
    
  });
  
});

describe('fancyName', function(){
  it('should return a name of at least 4 parts', function(){
    expect(ns.fancyName("Nick Stefan").split(" ").length).to.be.at.least(4);
  });
});

describe('asyncFunc', function(){
  
  beforeEach(function(done){
    ns.asyncFunc(done);
  });
  
  it('should return a true value despite async', function(done){
    expect(ns.asyncResult).to.equal(true);
    done();
  });
});