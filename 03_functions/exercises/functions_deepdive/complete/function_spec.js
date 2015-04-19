// PART 1: Sunlight Zone: Arguments & Return
// -----------------------------------------

it('will accept arguments and return values.', function() {

  function add(a, b) {
    return a + b;
  }

  expect( add(5, 10) ).toEqual(15);
});



it('provides an arguments *object* that contains all arguments passed into the function.', function() {

  function test() {
    expect(arguments[0]).toBe(10);
    expect(arguments[1]).toBe(20);
    expect(arguments instanceof Array).toBeFalsy();
  }

  test(10, 20);
});



// PART 2: Twilight Zone: Closure & Scope
// --------------------------------------

it('allows function scopes to reference outward, but not to look inward at nested closures.', function() {

  var outer = 10;

  function test() {
    var inner = 20;
    expect(outer).toBe(10);
    expect(inner).toBe(20);
  }

  test();
  expect(outer).toBe(10);
  expect(typeof inner).toBe('undefined');
});



it('will override conflicting variable declarations in an inner scope. The outer scope is unaffected.', function() {

  var n = 5;

  function test() {
    var n = 20;
    expect(n).toBe(20);
  }

  test();
  expect(n).toBe(5);
});



it('allows inner scopes to access and modify variables declared in an outer scope.', function() {

  var n = 5;

  function test() {
    n = 20;
  }

  test();
  expect(n).toBe(20);
});



it('assigns all undeclared variables into global (window) scope.', function() {

  function test() {
    n = 20;
  }

  test();
  expect(window.n).toBe(20);
});



it('allows Immedaitely-Invoked Function Expressions (IIFE) to set up a private scope.', function() {

  var invoked = false;

  (function() {
    invoked = true;

    // My code goes here...

  })();

  expect(invoked).toBe(true);
});



// PART 3: Midnight Zone: Contextual Invocation
// --------------------------------------------

it('will bind the Function Invocation pattern to the global object.', function() {

  function test() {
    return this;
  }

  expect(test()).toBe(window);
});



it('will bind the Call Invocation pattern to a passed object.', function() {

  function test(a, b) {
    expect(a).toBe(5);
    expect(b).toBe(10);
    return this;
  }

  var target = {};
  var calledOn = test.call(target, 5, 10);

  expect( calledOn ).toBe(target);
});



it('will bind the Method Invocation pattern to the host object.', function() {

  var obj = {
    test: function() {
      return this;
    }
  };

  expect( obj.test() ).toBe(obj);
});



it('will bind the Constructor Invocation pattern to a brand new object instance.', function() {

  function TestWidget(name) {
    this.name = name;
  }

  var beep = new TestWidget('beep');
  var bop = new TestWidget('bop');

  expect(beep.name).toBe('beep');
  expect(bop.name).toBe('bop');
});