//operation object
/*
var opObj = {
  //properties
  name: "string",
  args: 123,
  //function
  opMethod: function(args) {
    var result = args stuff;
    return result;
  }
}
// operation function
function dynCalc(op,a,b,c){
var result;
//stuff
return result;
}
*/
// substract two numbers
var substraction = {
  name: "substract",
  args: 2,
  operation: function(a,b) {
    return a-b;
  }
};

// add up two numbers
var add = {
  name: "aditional",
  args: 2,
  operation: function(a,b) {
    var result = a + b;
    return result;
  }
};

// multiply two numbers
var multiply = {
  name: "multiplier",
  args: 2,
  operation: function(a,b) {
    return a * b;
  }
};
//check if bigger number is less than smaller number
// if it isn't subtract lesser from what's left
// else: remember the remainder
// divide two numbers
var division = {
  name: "divide by",
  args: 2,
  operation: function(a,b) {
    if (a>b){
    return a/b;
  } else {
    return b/a;
  }
};

// amplify a number
var power = {
  name: "powered by" ,
  args: 2,
  operation: function(a,b){
    return Math.pow(a,b)
  }
};

/// add between three numbers
var sum3 = {
  name: "sum between three num",
  args: 3,
  operation: function(a,b,c){
    return a+b+c;
  }
};

// just know a number
var num = {
  name: "number",
  args: 2,
  operation: function(a){
    return a;
  }
};

/*
*********************
First task of dynCalc
********************* */
function dynCalc(op,a,b,c){
  switch(op.args){
    case 1: return op.operation(a);
    break;
    case 2: return op.operation(a,b);
    break;
    case 3: return op.operation(a,b,c);
    break;
  }
};

dynCalc(power,2,2);
/*
*********************************
Use dynamic arguments for dynCalc
*********************************
*/

/*
*********************************
Make dynCalc an object with array
*********************************
*/
