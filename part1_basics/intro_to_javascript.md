# JavaScript Basics

**Learning Objectives**

- What is JavaScript?
- What are Data Types? Name the primitive types.
- What is a Variable?
- What are Arrays and Objects? How do they relate to variables?
- What is enumeration? How is it done?
- What are Conditionals?
- What are Functions? How do they basically work?

Peter stuff:

- Explain the difference between calling and referencing a function in JavaScript.
- Follow a JavaScript style guide and use the appropriate syntax
- Define a function in JavaScript
- Create an array, access items in an array, change the value of items in an array
- Use a for loop for iteration
- Create objects using literal notation
- Access property values in a JavaScript object

---

## What IS JavaScript?

JavaScript was originally developed in May 1995, over the course of 10 days, by Brendan Eich (now of Mozilla) while working on Netscape Navigator. It was designed as a simple browser scripting langauge that would allow web developers to interact more closely with the Netscape web browser.

To debunk a myth: the JavaScript language is in NO WAY related to the Java programming language. In fact, JavaScript was originally called "LiveScript", but was regrettably renamed by the Netscape marketing team to piggy-back off the 90's vogue of Java. The name "JavaScript" has been confused ever since.

JavaScript quickly gained universal adoption among web browsers, making it the ubiquitous solution for client-side (browser-based) application programming. Then in 2012, NodeJS brought JavaScript to the server, making it a full-stack language. At present, JavaScript is among the most prevelant languages used in web development.

---

## Accessing the JavaScript Console

 - **In Chrome:** View > Developer Tools > JavaScript Console (or CMD + Shift + j)
 - **In Safari:**
 - **In Firefox:**

To print messages into the JavaScript console, use `console.log()` within your JavaScript code:

```javascript
console.log("Hello World!");
```

---

## Comments

Comments are notes written in code for the benefit of developers. Comments are ignored by a program. A line is commented using `// Message`.

## Data Types

### Primitives

Primitive data types have discrete values, such as text, numbers, and true/false. These primitive data types tend to be small and memory efficient:

 - **String**: `"A string of characters."`
 - **Number**: `5` or `3.14`
 - **Boolean**: `true` or `false`
 - **Non-Values**: `undefined` and `null`
 
### Composites

Composite data types are structures that hold many discrete values. These values may be primitives or other composite structures. We'll discuss these more later:

 - **Array**: `["hello", 23, true]`
 - **Object**: `{firstName: "Greg", lastName: "MacWilliam"}`

### Using `typeof`

You'll commonly want to inspect an unknown value's data type. This can be done using the `typeof` keyword, which provides a string description of the value's data type:

```javascript
typeof "Hello" // "string"
typeof 23 // "number"
typeof true // "boolean"
```

### String Operations and Methods

A **String** manages a "string" of characters; ie: a chunk of text. Strings are always wrapped in single or double quotes (this allows the opposite quotation type to be nested within the string):

```javascript
// Wrapped in single quotes:
'The "Bilbo" ring.'

// Wrapped in double quotes:
"Bilbo's ring."
```

Strings may be joined together, or, "concatenated" using the `+` operator:

```javascript
// Concatenate three strings...
"Hello" + " " + "World"

// Result:
"Hello World"
```

All data types have built-in "methods", or, functions provided my the JavaScript language for manipulating the data. We can call methods directly on data values to transform them. Strings provide many useful methods, for example:

```javascript
// Call the "toLowerCase" method of String data:
"Hello World".toUpperCase() // "HELLO WORLD"

"Hello World".replace("Hello", "Goodbye") // "Goodbye World"

"Hello World".slice(5) // "Hello"
```

Note that the methods available for a given data value is determined by its data type (in other words, Strings have a different set of built-in methods than Numbers).

**Common String methods**:

 - `toUpperCase` / `toLowerCase`
 - `slice` / `substr` (extracts portions of a string)
 - `indexOf` (finds text position within a string)
  
### Number Operations and Methods

A **Number** manages a numeric value. These may be integers (whole numbers) or decimals. Numbers support basic math operations using the `+`, `-`, `*`, and `\` operators:

```javascript
4 + 2 // 6 (addition)
4 - 2 // 2 (subtraction)
4 * 2 // 8 (multiplication)
4 / 2 // 2 (division)
```

Note that problems arise when attempting to perform numeric operations on mixed datatypes, such as Strings and Numbers together. For example:

```javascript
23 + "50" // "2350" (whoops, we got string concatenation!)
```

In the above example, math could not be performed on Number and a String data, so both values were converted to strings and concatenated. To address this, JavaScript provides some built-in methods for parsing strings into proper numeric formats:

```javascript
// Parse a string into a numeric integer:
23 + parseInt("50") // 73

// Parse a string into a numeric floating-point decimal:
100 * parseFloat("0.5") // 50
```

Increments...

```javascript
++;
+=;
```

## Variables

Data values may be managed using dynamically-assigned labels called **Variables**. Think of a variable as a name tag for a piece of data:

```javascript
var costPerWidget = 10;
var numberOfWidgets = 50;
var totalCost = costPerWidget * numberOfWidgets;

// totalCost is 500
```

Variables are declared using the `var` keyword. A variable may refer to any type of data, and may be reassigned to refer to a new data value at any time. In JavaScript, variable names use the following naming convention:

```javascript
var headlessCamelCase = "<< Correct.";

var slithering_snake_case = "<< Wrong.";
```

We only need to declare a variable ONCE using the `var` keyword. After a variable has been declared, we can reference and modify it freely using just its name.

```javascript
var orderQuantity = 10;

// User removes an item from their shopping cart...

orderQuantity = orderQuantity - 1;
```

The above example, where we set a variable to itself altered by a modifier, is an extremely common operation. SO common, in fact, that JavaScript has built-in operators for doing this for us:

```javascript
var orderQuantity = 10;

orderQuantity += 1; // 11
orderQuantity -= 5; // 6
orderQuantity *= 2; // 12
orderQuantity /= 4; // 3
```

These operators are handy for operating on a variable's value and then assigning the result back to the variable.

Objects are pass by reference, primitives are pass by value. Do for numbers and strings:

```javascript
 a = 5
 b = a
 a = 6
 b
```

## Arrays

Arrays manage a set of data references, indexed numerically. Any type of data may be added to an array, and any number of values may be added.

```javascript
// Create a new empty array:
var empty = [];

// Create a new array with initial values:
var junk = ['Bob', 23, true];
```

Arrays maintain a `length` property that will always tell us how many values are in the array:

```javascript
junk.length // 3
```

To reference values within an array, we use square brackets citing an index position. The first index position is always *zero*:

```javascript
junk[0] // "Bob"
junk[1] // 23
junk[2] // true
```

Arrays can also contain nested data structures, such as other arrays. We can reference nested arrays by chaining their position accessors:

```javascript
var heros = [['Luke', 'Jedi'], ['Leia', 'Rebel'], ['Han', 'Rouge']];

heros.length // 3
heros[0].length // 2

heros[1][0] // 'Leia'
heros[2][1] // 'Rouge'
```

Arrays also provide a host of methods for managing their contents. For example, a common method used to add items onto the end of an array is `push`:

```javascript
var fruits = ['banana', 'apple'];

fruits.push('coconut'); // ['banana', 'apple', 'coconut']
fruits.length // 3
```

Or, a common method used to remove (and return) items from the end of an array is `pop`:

```javascript
var lastFruit = fruits.pop(); // 'coconut'

// "fruits" is back to just ['banana', 'apple']
fruits.length // 2
```

**Other common Array methods include:**

 - `unshift`: adds items to the beginning of an array.
 - `shift`: removes and returns items from the beginning of an array.
 - `slice`: copies an array.
 - `splice`: adds and removes items from an array at specific indices.
 - `sort`: sorts the contents of an array.


## Objects

An Object is another composite data structure, similar to an array. An object manages *key/value* pairs; where a *key* is a named reference to a data *value*. Object keys may refer to any type of data, and a single object can manage any number of key/value pairs.

```javascript
// Create a new empty object:
var empty = {};

// Create a new object with initial values:
var user = {
  userName: 'bigvader23',
  firstName: 'Darth',
  lastName: 'Vader',
  email: 'darth.vader@imperialrule.gov',
  signinCount: 221,
  isAdmin: true
};
```

When accessing data stored on an object, we can use dot syntax or bracket syntax (dot syntax is generally preferred for clenliness):

```javascript
// Dot syntax:
user.userName; // "bigvader23"

// Bracket syntax:
user["lastName"]; // "Vader"
```
To add or modify key/value pairs of an Object, we can simply assign the values to key names using dot syntax or bracket syntax:

```javascript
// Assign new value using dot syntax:
user.lightsaberColor = "red";

// Modify existing values, just like any other variable:
user.signinCount += 1; // 222

// Assign values using bracket syntax:
user["isAdmin"] = false;
```

## Enumeration

```javascript
var heros = ['Luke', 'Leia', 'Han'];

for (var i=0; i < heros.length; i++) {
  console.log( heros[i] );
}
```

```javascript
var heroScores = {
  'Luke': 8,
  'Leia': 9,
  'Han': 15
};

for (var hero in heroScores) {
  console.log( hero +': '+ heroScores[hero] );
}
```

## Conditionals

Conditional statements provide a simple logic construct for expressing: "if this, then do that":

```javascript
if (condition) {
  // Do something in this block...
}
```

A conditional statement is comprised of two parts:

 - The **condition** is a code *expression* that gets assessed into a boolean (true/false). This condition generally compares two data values (ex: `a < b`).
 
 - The condition is followed by a **block**, which is a block of code wrapped in curly braces. If the condition evaluates as truthy, then the block runs. Otherwise, the block is skipped.

Conditional statements may be extended with multiple clauses using `else if`, and may include a final catch-all `else` block to run when all other conditions fail:

```javascript
if (a > b) {
  // A is greater...
  
} else if (a < b) {
  // A is less...
  
} else {
  // When all else fails...
}
```

When structuring multi-clause conditionals, just remember that only *one block* will ever be allowed to run during program execution.

### Data Truthiness

Computer programs make decisions about data in terms they understand: 1 or 0 (true or false). To facilitate this, all data values have an inherent "truthiness", or boolean derived from their value.

Thankfully, we don't need to memorize the truthiness of all possible data values! Programming languages have deliberately few falsey values, so if we know those, we know that everything else is truthy.

**JavaScript has FIVE falsey values:**

 - `false` (Boolean)
 - `0` (Number)
 - `""` (String with zero characters)
 - `null`
 - `undefined`

We commonly put single data values into conditionals, and allow the value's truthiness to fulfill the condition:

```javascript
var orders = [];

if (orders.length) {
  // This does NOT run, because orders has 0 length (falsey).  
}

orders.push('Cheese Toast');

if (orders.length) {
  // This runs, because orders has a length of 1 (truthy).
}
```

### Data Comparisons

To assess two values against one another, we perform comparisons:

```
a === b   Equality. Does A equal B?
a !== b   Inequality. Does A NOT equal B?

a < b     Less than. Is A less than B?
a <= b    Less than or Equal. Is A less than OR equal to B?

a > b     Greater than. Is A greater than B?
a >= b    Geater than or Equal. Is A greater than OR equal to B?
```

Comparison operations again yeild boolean (true or false) values. We commonly perform comparisons inside of conditionals:

```javascript
var age = 18;

if (age >= 16) {
  console.log("You are eligible for a driver's license.");
}

if (age < 21) {
  console.log("Sorry, you cannot drink alcohol.");
}
```

### Logical Operators

Sometimes we need to reverse our assessment of data, or compare multiple sets of values. Therefore, we have operators for expressing NOT, AND, and OR.

**NOT**

The `!` ("Bang") operator negates the truthiness of the proceeding expression:

```javascript
var orders = [];

if (!orders.length) {
  // If we have no orders...
  // This block RUNS because:
  // - Orders length is 0 (falsey), negated to be truthy.
}
```

**AND**

The `&&` ("And") operator combines multiple assessment clauses. Clauses may be wrapped in parenthesis to group them. The `&&` operator requires that all clauses be truthy for the full expression to be truthy:

```javascript
var orders = ['Banana Sandwich'];

if (orders.length && (orders.length < 10)) {
  // If we have orders, and the quantity is less than ten...
  // This block RUNS because:
  // - Orders length is 1 (truthy), AND...
  // - Orders length is less than 10 (truthy)
}
```

**OR**

The `||` ("Or") operator checks multiple assessment clauses, and requires that at least one clause be truthy for the full expression to be truthy.

```javascript
var orders = [];

if (!orders.length || (orders.length > 10) {
  // If we have no orders, or we have more than 10 orders...
  // This block RUNS because:
  // - (!orders.length) is truthy, OR...
  // - (orders.length > 10) is falsey
}
```

## Functions (For Dummies)

At their most basic, functions are reusable blocks of code. After a function is declared using the `function` keyword, it may be *invoked* (or, called upon) repeatedly to run its operation:

```javascript
var goBoom = function() {
  console.log('BOOM!');
};

goBoom(); // BOOM!
goBoom(); // BOOM!
```

We commonly use functions to *callback* after other operations complete:

```javascript
setTimeout(function() {
  // This function will run after a 1-second timer...
}, 1000);
```

In the above example, `setTimeout` configures a one second (1000 millisecond) timer, after which our provided callback function will be invoked.
