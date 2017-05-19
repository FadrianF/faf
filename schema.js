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

var scheme = {
  name= {
    type:'string',
    fallback:'alala'
  },
  numsArg = {
    type: ,
    fallback: 000
  },
  op = {
    type: op,
    fallback: +
  }
}

function schematizer(op,scheme){
  //stuff
}
*/

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
    return a + b;
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

// divide two numbers
var division = {
  name: "divide by",
  args: 2,
  operation: function(a,b) {
    return a/b;
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
  args: "4",
  operation: function(a,b,c){
    return a+b+c;
  }
};

// just know a number
var num = {
  name: "number",
  args: 1,
  operation: function(a){
    return a;
  }
};

var gigi = {
}

var bibi = {
  args: 3,
}

var cici = {
  operation: function(a){
    return a;
  }
}

var schema = {
  name:{
    type: 'string',
    fallback: 'gigi'
  },
  args:{
    type: 'number',
    fallback: 0
  },
  operation:{
    type: 'function',
    fallback: function(){"hasta la vista"}
    }

}



function schematizer(op,schema){
  var result = [];
  var message = '';
  var newObject = {};

   // three ifs, one checking for each required property.  if one is missing add in the fallback and say so.  after all three go on to the loop
  if (op.name == undefined){
    op.name = "Mircea cel bengos";
    message += " Name missing, default added " + op.name + "\n";
  }
  if (op.args == undefined){
    op.args = 0;
    message += " Args missing, default added " + op.args "\n";
  }
  if (op.operation == undefined){
    op.operation =  function(){"hasta la vista"};
    message +=  " Operation missing, default added " + op.operation "\n";
  }
  for(i in op){
    if(i in schema){
      if(typeof (op[i]) == schema[i].type){
        message = message + " the " + i + " is correct,";
        newObject[i] = op[i];
      }else {
        message = message + " The " + op[i] + " replaced with " + schema[i].fallback + ", ";
        newObject[i] = schema[i].fallback;
      }
    } else {
      message = message + "the " + schema[i] + " from the schema doesn't correspond with the " + op[i] + " from the operator"
    }

  }

  result.push(message);
  result.push(newObject);
  return result;
}

schematizer(sum3,schema);
