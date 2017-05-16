//Business logic
var arrayNumbers = [];

var count = function(number){
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      arrayNumbers.push("ping-pong");
    } else if (i % 5 === 0 ) {
      arrayNumbers.push("pong");
    } else if (i % 3 === 0) {
      arrayNumbers.push("ping");
    } else {
      arrayNumbers.push(i);
    }
  };
};

function printToScreen(target, array) {
  array.forEach(function(element) {
    $(target).append('<li>' + element + '</li>')
  })
}

//User interface Logic.
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    count(input);
    // console.log(arrayNumbers);
    printToScreen("#result", arrayNumbers)
    arrayNumbers.reverse();
    printToScreen("#resultReverse", arrayNumbers)
    $("#result").toggle(600);
    $("#resultReverse").toggle(500);
    $("#form1").hide();
    $(".show-number").text(input);
    $("#user-input").fadeIn(1500);
  });
});
