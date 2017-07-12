var hexNums = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

var baseConverter = function(number, base) {
  var newNumArr = [];
  if (base > 10) {
    while (number >= 1) {
      newNumArr.push(hexNums[(number % base)])
      number = parseInt(number / base);
    }
    return newNumArr.reverse().join('');
  } else {
    while (number >= 1) {
      newNumArr.push(number % base);
      number = parseInt(number / base);
    }
    return newNumArr.reverse().join('');
  }
}


$(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var base = parseInt($("#base").val());
    var result = baseConverter(number, base);
    $("#result").text(result);
  });
});
