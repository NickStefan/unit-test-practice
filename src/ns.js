ns = {};

(function(){
  
  ns.arrayCount = function(arr){
    return (arr ? arr.length : undefined);
  };
  
  ns.fancyName = function(str){
    titles = ["Lord","King",""];
    middles = ["Barthollemew","Charles"];
    numerals = ["I","II","III","IV"];
    str = str.split(' ');

    str.unshift(titles[Math.floor(Math.random() * titles.length)]);
    str.splice(2,0,middles[Math.floor(Math.random() * middles.length)]);
    str.push(numerals[Math.floor(Math.random() * numerals.length)]);
    console.log(str);
    return str.join(" ");
  };
  
}).call(this);