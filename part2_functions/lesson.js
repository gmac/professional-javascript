// -----------------------
// PART 1: Basic Functions
// -----------------------


// Arguments & Return
// ------------------
// A function accepts arguments, and returns a value:

function add(a, b) {
  return a + b;
}

var sum = add(5, 10);


// The "arguments" Object
// ----------------------
// Functions provide an array-like object called "arguments"
// that contains references to all passed params:

function mult() {
  return arguments[0] * arguments[1];
}

var product = mult(5, 10);


// The "arguments" object is useful for operating
// on an unknown number of passed parameters:

function total() {
  var t = 0;
  for (var i=0; i < arguments.length; i++) {
    t += arguments[i];
  }
  return t;
}

var totalSum = total(5, 10, 25, 50);



// Reference vs. Invocation
// ------------------------
// Functions may be referenced just like any other data type;
// they only execute when "invoked" using the "()" operator:

function beep() {
  return 'beep';
}

// Reference the function object as data.
// This references the function object WITHOUT executing it:
console.log( beep );

// Invoke the function, telling it to run.
// The "()" invocation operator is what executes the function:
console.log( beep() );



// Declaration vs. Assignment
// --------------------------
// Functions may be declared, or assigned to variables.
// Declarations are universally available (thanks to hoisting),
// while assignments are only available after being set.

// beepD(); // << This would work here.

function beepD() {
  console.log('beep');
}

// beepA(); // << This would cause an error here.

var beepA = function() {
  console.log('beep');
};



// Functions as First-Class Objects
// --------------------------------
// Functions are objects just like any other type of data,
// therefore they may be used in the same way as anything else.
// This includes:

// 1) Functions may be assigned to variables:

var honk = function() {
  // do stuff...
};


// 2) Functions may be stored within data structures:

var car = {
  model: 'sedan',
  honk: function() {
    // do stuff...
  }
};


// 3) Functions may be passed as arguments to other functions:

function timer(secs, callback) {
  // Wait for [secs] seconds, then...
  callback();
}

timer(1, function() {
  console.log('Timer Complete!');
});


// 4) Functions may be returned from other functions:

function meta() {
  return function() {
    // do stuff...
  };
}



// -----------------------
// PART 2: Closure & Scope
// -----------------------

// Immediately-Invoking Function Expressions (IIFEs)
// -------------------------------------------------
// We need to isolate our programs within their own scope
// to do this, we use a function wrapper that invokes itself:

(function() {

  console.log('I ran within my own private scope!');

})();



// Variable Scoping
// ----------------
// Variables are unique to the scope in which they are declared.
// Declarations are:
// - "var boom"
// - "function boom"

(function() {

  var n = 5;

  function inner() {
    var n = 10;
    console.log(n); // <- 10
  }

  inner();
  console.log(n); // <- 5

})();


// Scope Chain
// -----------
// When a variable is accessed in a scope that does not declare it,
// the variable is accessed from up the chain of nested scopes.

(function() {

  var n = 5;

  function inner() {
    n = 10;
  }

  inner();
  console.log(n); // <- 10

})();


// Global Scope
// ------------
// When a variable has no scoped declaration,
// access will bubble up to the highest-level scope: global.
// In web browsers, global scope is the "window" object:

(function() {

  function inner() {
    n = 15;
  }

  inner();
  console.log(window.n); // <- 15

})();



// -----------------------------
// PART 3: Contextual Invocation
// -----------------------------

// 1) Function Invocation
// ----------------------
// When a function is invoked without context,
// it binds to global scope:

function goBoom() {
  console.log(this);
}

goBoom(); // this -> window



// 2) Call Invocation
// ------------------
// Function objects have a "call" method.
// Using "call" will invoke a function, bound to a passed object:

var xwing = {};

function goBoom() {
  console.log(this);
}

goBoom.call(xwing); // this -> xwing



// 3) Method Invocation
// --------------------
// Functions attached to an object
// may be invoked as "methods" of the object:

var deathstar = {
  goBoom: function() {
    console.log(this);
  }
};

deathstar.goBoom();



// 4) Constructor Invocation
// -------------------------
// When functions are invoked with the "new" keyword,
// a brand new object is created and bound to the invocation.

function PodRacer() {
  console.log(this);
}

var pod = new PodRacer(); // this -> brand new object