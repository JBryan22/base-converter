var baseConverter = function(number, base) {
  var newNumArr = [];
  while (number >= 1) {
    newNumArr.push(number % base);
    number = parseInt(number / base);
  }
  return newNumArr.reverse().join('');
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
