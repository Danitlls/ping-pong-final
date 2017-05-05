var arrayNumbers = [];
var input;


// var count = function(number){
//   for ( var i = 0 ; i < input ; i+=1){
//     var newNumber = number - 1;
//   }
//   arrayNumbers.push(newNumber);
//   console.log(arrayNumbers);
// }
var ifDivisible = function(number){
  if(number % 15 === 0){
    // number = number.toString();
    number = "ping-pong";
    alert(number);
    console.log(typeof(number));
  }else if(number % 5 === 0 ){
    number = "pong";
    alert(number);
  }else if(number % 3 === 0){
    number = "ping";
    alert(number);
  }else{
    alert(number);
  }
};

$(document).ready(function(){
  $("#form1").submit(function(event){
   event.preventDefault();

  input = parseInt($("#userInput").val());
  // console.log(typeof(input));  // input is a number

  ifDivisible(input);


  });
});
