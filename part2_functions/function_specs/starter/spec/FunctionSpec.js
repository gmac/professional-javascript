describe("JavaScript Function", function() {


  // PART 1: Sunlight Zone

  describe('arguments and return', function() {

    it('will accept arguments and return values.', function() {

      function add(a, b) {
        return a + b;
      }

    });


    it('provides an arguments *object* that contains all arguments passed into the function.', function() {

      function test() {
        // Inspect "arguments" object...
      }

      test(10, 20);
    });
  });


  // PART 2: Twilight Zone

  describe('scope and closure', function() {

    it('allows function scopes to reference outward, but not to look inward at nested closures.', function() {

      var outer = 10;

      function test() {
        var inner = 20;
      }

      test();
    });


    it('will override conflicting variable declarations in an inner scope. The outer scope is unaffected.', function() {

      var n = 5;

      function test() {
        var n = 20;
      }

      test();
    });


    it('allows inner scopes to access and modify variables declared in an outer scope.', function() {

      var n = 5;

      function test() {
        n = 20;
      }

      test();
    });


    it('assigns all undeclared variables into global (window) scope.', function() {

      function test() {
        n = 20;
      }

      test();
    });


    it('allows Immedaitely-Invoked Function Expressions (IIFE) to set up a private scope.', function() {

      // Write an IIFE...

    });
  });


  // PART 3: Midnight Zone

  describe('context', function() {

    it('will bind the Function Invocation pattern to the global object.', function() {

      function test() {
        return this;
      }

    });


    it('will bind the Method Invocation pattern to the host object.', function() {

      var obj = {
        test: function() {
          return this;
        }
      };

    });


    it('will bind the Call Invocation pattern to a passed object.', function() {

      function test(a, b) {
        return this;
      }

      var target = {};
      var calledOn = test.call(target, 5, 10);

    });


    it('will bind the Constructor Invocation pattern to a brand new object instance.', function() {

      function TestWidget(name) {
        this.name = name;
      }

      var beep = new TestWidget('beep');
      var boop = new TestWidget('boop');

    });
  });

});