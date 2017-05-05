var arrayNumbers = [];
var input;


var count = function(number){
  for ( var i = 0 ; i < input ; i+=1){

  if(number % 15 === 0){
    // number = number.toString();
    // return "ping-pong";
    arrayNumbers.push("ping-pong");
    number = number -1;
    // console.log(typeof(number));
  }else if(number % 5 === 0 ){
    // return "pong";
    // alert(number);
    arrayNumbers.push("pong");
    number = number -1;
  }else if(number % 3 === 0){
    // alert(number);
    arrayNumbers.push("ping");
    number = number -1;
  }else{
    arrayNumbers.push(number);
    number = number -1;
  }
  console.log(arrayNumbers);
};
};


$(document).ready(function(){
  $("#form1").submit(function(event){
   event.preventDefault();

  input = parseInt($("#userInput").val());
  // console.log(typeof(input));  // input is a number

  // ifDivisible(input);
  count(input);
  console.log(arrayNumbers);

  $("#result").text(arrayNumbers);

  });
});
