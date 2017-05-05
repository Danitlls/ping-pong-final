//Business logic
var arrayNumbers = [];
var input;

var count = function(number){
  for ( var i = 0 ; i < input ; i+=1){

    if(number % 15 === 0){
      // number = number.toString();
      // return "ping-pong";
      arrayNumbers.push("<br>" + " ping-pong");
      number = number -1;
      // console.log(typeof(number));
    }else if(number % 5 === 0 ){
      // return "pong";
      // alert(number);
      arrayNumbers.push("<br>" +" pong");
      number = number -1;
    }else if(number % 3 === 0){
      // alert(number);
      arrayNumbers.push("<br>" +" ping");
      number = number -1;
    }else{
      arrayNumbers.push("<br>" + number);
      number = number -1;
    }
  // console.log(arrayNumbers);
  };
};

var reverseArray = function(arrayN){
  var arrayDos = arrayN.reverse();
};


//User interface Logic.
$(document).ready(function(){
  $("#form1").submit(function(event){
   event.preventDefault();

  input = parseInt($("#userInput").val());

  count(input);
  console.log(arrayNumbers);
  $("#resultReverse").append(arrayNumbers);

  reverseArray(arrayNumbers);
  $("#result").append( arrayNumbers);

  $("#result").show();
  $("#resultReverse").show();
  });
});
