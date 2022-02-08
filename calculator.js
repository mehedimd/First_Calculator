
    //----Get User Input-------

function getInput(x){
    var input = document.querySelector("#display");
    input.value += x;

    console.log(input.value);
    console.log(typeof(input.value));


}
    // Calculating Total Result

function result(){
  var displayValue = document.querySelector("#display").value;
 var result = eval(displayValue);
 document.querySelector("#display").value = result;
}


    // Clear Full Screen
    
function  cls(){
    document.querySelector("#display").value = "";
}


    // Go Backword one by one 

function back(){
    var back = document.querySelector("#display").value;
    var backResult = back.slice(0, back.length-1);

    document.querySelector("#display").value = backResult;
}