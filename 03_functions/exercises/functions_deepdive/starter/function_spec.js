// PART 1: Sunlight Zone: Arguments & Return
// -----------------------------------------

it('will accept arguments and return values.', function() {

  function test(a, b) {

  }

});


it('provides an arguments *object* that contains all arguments passed into the function.', function() {

  function test() {
    
  }

});



// PART 2: Twilight Zone: Scope & Closure
// --------------------------------------

it('allows function scopes to reference outward, but not to look inward at nested closures.', function() {

  var outer = 10;

  function test() {
    var inner = 20;
  }

});



it('will override conflicting variable declarations in an inner scope. The outer scope is unaffected.', function() {

  var n = 5;

  function test() {
    var n = 20;
  }

});



it('allows inner scopes to access and modify variables declared in an outer scope.', function() {

  var n = 5;

  function test() {
    n = 20;
  }

});



it('assigns all undeclared variables into global (window) scope.', function() {

  function test() {
    n = 20;
  }

});



it('allows Immedaitely-Invoked Function Expressions (IIFE) to set up a private scope.', function() {

  // Write an IIFE...

});



// PART 3: Midnight Zone: Contextual Invocation
// --------------------------------------------

it('will bind the Function Invocation pattern to the global object.', function() {

  function test() {
    return this;
  }

});



it('will bind the Call Invocation pattern to a passed object.', function() {

  function test(a, b) {
    return this;
  }

  var target = {};

});



it('will bind the Method Invocation pattern to the host object.', function() {

  var obj = {
    test: function() {
      return this;
    }
  };

});



it('will bind the Constructor Invocation pattern to a brand new object instance.', function() {

  function TestWidget(name) {
    this.name = name;
  }

});