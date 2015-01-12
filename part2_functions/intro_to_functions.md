# The Abyss of JavaScript Functions

**Learning Objectives**

- What are arguments? What is return?
- What are First-Class functions?
- What is scope & closure? What's the difference?
- What is global scope? Why is it bad?
- What is context?
- What is invocation? How is it done?

# Part 1. The Sunlight Zone

## Named and Anonymous Functions

Functions may have names by which they're referenced, or may be anonymous (unnamed).

```javascript
function goBoom() {
  // This is a named function...
}

function() {
  // This is an anonymous function...
}
```

Typical uses:

 * **Named functions** are generally program fixtures (constructor functions, helper methods).
 
 * **Anonymous functions** are generally program data (passed callbacks, stored methods).
 
## Arguments, Return, & Invocation

Functions accept passed **arguments**, and may **return** a value:

```javascript
function add(a, b) {
  return a + b;
}
```

**Breakdown:**

- This is a named function: `function add() {}`
- It accepts two argument variables: `(a, b)`
- It returns a calculation: `return a + b;`


To run the function, we must *invoke* it (AKA, "call" it):

```javascript
var result = add(10, 15);
// -> 25
```

In this case, we're invoking the function with two parameters: `(10, 15)`. These parameters are mapped to the function's argument variables, making `a=10` and `b=15`. The function returns their sum, `25`, into the program.

### The `arguments` Object

Whenever a function is invoked, its scope is configured with a special array-like object called `arguments`. This arguments object contains all parameters that were passed into the function:

```javascript
function printName(first, last) {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

printName('Luke', 'Skywalker');
// -> "Luke"
// -> "Skywalker"
```

The arguments object is available even if the function block defines no arguments. This allows a function to operate upon an unknown set of arguments:

```javascript
function printName() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

printName('Luke', 'Skywalker');
// -> "Luke"
// -> "Skywalker"
```

The oddity of the `arguments` object is that it looks like an Array (with numeric keys and a `length` property), but is actually an Object. If you ever want to convert the arguments object into an *actual* array, use this little trick:

```javascript
function() {
  var argsArray = Array.prototype.slice.call(arguments);
}
```

## First-Class Functions

In computer science, a programming language is said to have first-class functions when it treats them as "first-class citizens". This means functions are considered a full-fledged data type, versus just being runnable blocks of code.

**TODO:** Explain the difference between calling and referencing a function in JavaScript.

In JavaScript, functions are *objects* just like every other data type, and can therefore be used interchangeably with other data. Uses of first-class functions include:

### 1. Assigning functions to variables

Functions may be assigned to variables, just like any other type of data:

```javascript
var beep = function() {
  // do stuff...
};
```

### 2. Storing functions within data structures

Functions may be stored in arrays, or assigned as the value of object keys:

```javascript
var car = {
  make: 'Toyota',
  model: 'Corolla',
  doors: 4,
  honk: function() {
    // do stuff...
  }
};
```

### 3. Passing functions to other functions

Functions may be passed as arguments to other functions. This is commonly used for passing a *callback* function that runs after the requested operation is completed:

```javascript
function setTimeout(callback, duration) {
  // Wait for {{duration}} milliseconds... then upon completion:
  callback();
}

setTimeout(function() {
  console.log('Timeout complete.');
}, 1000);
```

### 4. Returning functions from other functions

Functions may return other function objects. This is an advanced technique, and is extremely powerful for building functions with customized behaviors:

```javascript
function greeter(message) {
  return function(name) {
  	return message + name;
  };
}

var helloGreeter = greeter('Hello, ');
helloGreeter('Dave'); // -> "Hello, Dave"
helloGreeter('Sam'): // -> "Hello, Sam"
```

# Part 2: The Twilight Zone

## Scope & Closure

Every function is a *closure* in which a new *scope* is created. 

- A **closure** is a blackbox that encapsulates its internal workings.

- A **scope** is an encapsulated space where data (variables and functions) exist.

**Quote Crockford:**

> JavaScript has function scope. … That means that the variables defined in a function are not visible outside of the function, and that a variable defined anywhere within a function is visible everywhere within the function.

Functions may be nested to create nested scopes. Any scope may look outward to access data from a higher scope, however scopes may **not** look inward at the internal workings of a closure.

```javascript
var president = "Everyone knows me. Globally!";

function town() {
  var mayor = "I'm unknown outside of my township.";

  function house() {
    var homebody = "No one knows me. I don't leave home.";
  } 
}
```

### Global Scope

In a web browser, all scripts operate within *global scope*, which is the top-level scope of the JavaScript environment. In web browsers, global scope is the `window` object.

Global scope is a rough and dodgy place, famously quoted as "The Mos Eisley of JavaScript". Large amounts of code from numerous sources is thrown into the mix here, which can lead to conflicts. It's generally advised to put as little data as possible directly into global scope.

### Variable Scoping

When variables are declared (using the `"var"` keyword), they are created within their immediate scope. If a variable with the same name exists within an outer scope, that variable will be overridden *in the inner scope*. The outer scope variable will remain unchanged.

```javascript
var n = 5;

function inner() {
  var n = 10;
  console.log(n); // <- 10
}

inner();
console.log(n); // <- 5
```

When a variable is referenced in an inner scope without an explicit `var` declaration, that variable will be referenced from up the scope chain:

```javascript
var n = 5;

function inner() {
  n = 10;
}

inner();
console.log(n); // <- 10
```

Variables without a declaration in any scope will be treated as global variables, and will be set in global scope.

```javascript
function inner() {
  n = 10;
}

inner();
console.log(window.n); // <- 10
```

### IIFE's 

To avoid naming conflicts, we want to minimize our footprint of data stored within global scope. **Immedaitely-Invoking Function Expressions** (IIFE) are commonly used to establish a private scope for an application to run in:

```javascript
(function() {
  // My application code goes in here... in my own private scope!
})();
```

What is an IIFE? It's just an anonymous function that invokes itself. However, that IIFE provides a new closure in which you can safely write JavaScript code without cluttering global scope.

## Declaration vs. Assignment

Look at the two scenarios below. While they may appear to be functionally identical, they will actually be subject to different language rules that could affect their behavior:

**Declaration – a named function *declaration*:**

```javascript
function goBoom() {
  console.log("boom");
}
```

**Assignment – an anonymous function *assigned* to a variable:**

```javascript
var goBoom = function() {
  console.log("boom");
};
```

What's the difference? Declarations may be called upon *anywhere within their scope*, whereas assignments are only available *after they've been set*. As a general rule, use declarations unless you specifically need to manage assignment order.

## Hoisting

Here's the technical rationale behind declarations versus assignment... When a new scope is configured, all declarations are *hoisted* to the top of the scope. Assignment order is not changed.

Consider the following:

```javascript
// The code as WE see it:

(function() {
  beep(); // <- "beep"
  bop(); // <- "TypeError: undefined is not a function"
  
  function beep() {
    console.log("beep");
  }
  
  var bop = function() {
    console.log("bop");
  };
})();
``` 

If we run this example, the `beep` function successfully runs while the `bop` function throws an error. Why?

Behind the scenes, the JavaScript compiler has hoisted our declarations, while leaving all original assignment order unchanged:

```javascript
// The same code as JAVASCRIPT sees it:

(function() {
  // Hoisting!
  var bop;
  function beep() {
    console.log("beep");
  }
  
  beep(); // <- "beep"
  bop(); // <- "TypeError: undefined is not a function"
  
  bop = function() {
    console.log("bop");
  };
})();
```

Why wouldn't JavaScript also hoist the assignment? Well, that would change control flow: that carefully-considered order of operations that we planned out while writing our application code. If we make a variable assignment at a specific point within our script, then JavaScript wisely assumes that we did it for a reason.

# Part 3: The Midnight Zone

## Context (*this*)

A function can indiscriminately operate upon *any* object. When a function is invoked, it is *bound* to an object on which it operates. The *contextual object* on which a function operates is referenced using the keyword `this`.

```javascript
var xwing = {
  pilot: null,
  
  setPilot: function(pilot) {
    this.pilot = pilot;
    this.update();
  },
  
  update: function() {
    console.log('This X-Wing has changed!');
  }
};

xwing.setPilot("Luke Skywalker");
// -> "This X-Wing has changed!"

console.log(xwing.pilot);
// -> "Luke Skywalker"
```

## The Four Patterns of Invocation

Remember that we must *invoke* a function to run it (ie: call upon the function to do its thing). Amazingly, there are FOUR ways to invoke a function in JavaScript. This makes JS both amazingly flexible and slightly insane.

### 1. Function invocation pattern

When a function is invoked without context, the function is bound to global scope:

```javascript
function goBoom() {
  console.log(this);
}

goBoom();
// -> this === window
```

**Context**: `this` refers to the "window" object (global scope).

### 2. Method invocation pattern

When a function is defined on an object, it is said to be a *method* of the object. When a method is invoked through its host object, the method is bound to its host:

```javascript
var deathstar = {
  goBoom: function() {
    console.log(this);
  }
};

deathstar.goBoom();
// -> this === deathstar
```

**Context**: `this` refers to the host object.

### 3. Call/Apply invocation pattern

Function objects have their own set of native methods, most notably are `.call` and `.apply`. These methods will invoke the function with a provided contextual object.

```javascript
function goBoom() {
  console.log(this);  
}

var tiefighter = {};
goBoom.call(tiefighter);
// -> this === tiefighter
```

**Context**: `this` refers to the passed object.

### 4. Constructor invocation pattern

Any function may act as a constructor for new object instances. New object instances may be constructed with the `new` keyword while invoking a function.

Constructors represent proper nouns within our application, therefore they have a convention of capitalized names:

```javascript
function PodRacer() {
  console.log(this);
}

var pod = new PodRacer();
// this === A shiny new PodRacer instance!
```

**Context**: `this` refers to the newly-created object instance.

# Part 4: The Abyss

## Prototypal Inheritance

**Quote Crockford:**

> In classical languages, objects are instances of classes, and a class can inherit from another class. JavaScript is a *prototypal* language, which means that objects inherit directly from other objects.

**Regarding prototypal inheritance:**

> Prototypal inheritance is conceptually simpler than classical inheritance: a new object can inherit the traits of an old object. This is perhaps unfamiliar, but it is really easy to understand. You start by making a useful object. You can then make many more objects that are like that one. The classification process of breaking an application down into a set of nested abstract classes can be completely avoided.

### Function Prototype

Functions may define a `prototype` object. When the constructor pattern creates a new object instance, the constructor function's prototype object is bestowed upon the newly created object instance. This new object instance can perform all the actions of its assigned prototype.

```javascript
function Deathstar() {
  console.log('New Deathstar');
}

Deathstar.prototype = {
  isLethal: true,
  attack: function() {
    // do stuff...
  },
  deathray: function() {
    // do stuff...
  }
};

var ds = new Deathstar();

console.log(ds.isLethal); // << true
ds.attack();
```

### Shared Prototypes

At a glance, prototypal inheritance looks similar to classical inheritance in that objects built from the same prototype have the same methods. However, it's more nuanced than that: objects built from the same prototype literally --DO-- have the same methods, because they're actually both referencing the same prototype object with their method definitions.

```javascript
function Beeper() {
  // do stuff...
}

Beeper.prototype = {
  beep: function() {
    // do stuff...
  }
};

var a = new Beeper();
var b = new Beeper();
console.log(a.beep === b.beep); // <- true 
```

When a constructor function builds a new object instance, it's really just creating an empty object that references the constructor function's prototype.

### Shared Prototype Data

A common mistake is sharing instance-specific data structures at the prototype level, at which time the data is shared between all object instances.

```javascript
function ShoppingList() {}

ShoppingList.prototype = {
  list: [],
  
  addItem: function(item) {
    this.list.push(item);
  }
};

var pat = new ShoppingList();
var bob = new ShoppingList();

pat.addItem('eggs');
console.log( pat.list.length ); // <- 1
console.log( bob.list.length ); // <- 1???
```

The solution is to configure instance-specific data structures in the constructor function, like so:

```javascript
function ShoppingList() {
  this.list = [];
}

ShoppingList.prototype = {
  addItem: function(item) {
    this.list.push(item);
  }
};

var pat = new ShoppingList();
var bob = new ShoppingList();

pat.addItem('eggs');
console.log( pat.list.length ); // <- 1
console.log( bob.list.length ); // <- 0
```

### Prototype Chains

When data is requested from an object instance, that object is checked for the requested data; if it doesn't possess that data, then its prototype is searched.

Keep in mind that prototypes are also just objects, so the same rules apply. In this way, *prototype chains* are formed, where a series of linked prototypes together provide an object with its full behavior.

```javascript
function Fruit(name) {
  this.name = name;
}

function Banana() {}
Banana.prototype = new Fruit('banana');

function Coconut() {}
Coconut.prototype = new Fruit('coconut');

var b = new Banana();
console.log(b.name);
```

Given that objects utilize the methods of other objects as their own, we should start to understand some of the rationale behind contextual invocation rules.

## Super/Mixin methods

In the event that a method overrides another method or leverages the behavior of another object's method, the alternate method behavior can be applied to the object.

We'll start to need this pattern as we get into Backbone.

```javascript
function Fruit(name) {
  this.name = name;
}

Fruit.prototype = {
  eat: function() {
    // Do stuff...
  }
};

function Banana() {}
Banana.prototype = {
  eat: function() {
    // Do stuff specific to Banana...
    return Fruit.prototype.eat.apply(this, arguments);
  }
};
```

# 5. The Trenches

## Partial Applications

When a function accepts arguments, they are stored within its scope and made accessible to its nested functions, or members. If a nested members is returned back out of its parent function, the returned member retains the data from the scope in which it was created. This allows a functions to create *partial applications*, where the a returned function is partially configured to perform a custom task.

```javascript
function multiplyFactory(base) {
  return function(n) {
    return base * n;
  }
}

// Get a multiply-by-ten function:
var multiplyByTen = multiplyFactory(10);


multiplyByTen(5); // 50
multiplyByTen(75); // 750
```

## Public vs. Private

JavaScript has no formal language construct for public and private members. However we can achieve the same results by hiding data within a closure that returns a public interface object.

In the example below, the methods of the public interface object retain all privileged data from the closure in which they were created, while not exposing that privileged data to the rest of the application.

```javascript
function Person() {
  var firstName = "Beep";
  var lastName = "Beeperson";
  var age = 25;
  var ssNumber = 000112222;
   
  return {
    isLoggedIn: false,
    
    name: function() {
      return firstName +' '+ lastName;
    },
    
    age: function() {
      return age;
    },
    
    completeForm: function(form) {
      // Beep will accept a form to put their SS# into...
    }
  };
}

// Create a person…
var person = new Person();

person.isLoggedIn = true;
person.name();
```

# Finale

See [JavaScript, The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742).
