# JavaScript Basics

**Learning Objectives**

- What is JavaScript?
- What are Data Types? Name the primitive types.
- What is a Variable?
- What are Arrays and Objects? How do they relate to variables?
- What is enumeration? How is it done?
- What are Conditionals?
- What are Functions? How do they basically work?

---

## What IS JavaScript?

JavaScript was originally developed in May 1995, over the course of 10 days, by Brendan Eich (now of Mozilla) while working on Netscape Navigator. It was designed as a simple browser scripting langauge that would allow web developers to interact more closely with the Netscape web browser.

To debunk a myth: the JavaScript language is in NO WAY related to the Java programming language. In fact, JavaScript was originally called "LiveScript", but was regrettably renamed by the Netscape marketing team to piggy-back off the 90's vogue of Java. The name "JavaScript" has been confused ever since.

JavaScript quickly gained universal adoption among web browsers, making it the ubiquitous solution for client-side (browser-based) application programming. Then in 2012, NodeJS brought JavaScript to the server, making it a full-stack language. At present, JavaScript is among the most prevelant languages used in web development.

---

## The JavaScript Console

The JavaScript console is an interactive environment in all major web browsers where you can run JavaScript commands and see JavaScript output from the current page. It is an excellent sandbox for playing with with JavaScript.

**To access the console:**

 - **Chrome**: 
   - View > Developer Tools > JavaScript Console (CMD + Shift + j)
 - **Safari**:
   - Preferences > Advanced > Show Develop Menu. Then...
   - Develop > Show Web Inspector > JavaScript

When writing JavaScript, you can use `console.log` to print messages from your scripts out into the JavaScript console:

```javascript
console.log("Hello World!");
```

---

## Comments

Comments are human-readable notes included in code that are ignored by the program. Commenting your code will help narrate programming logic for your own benefit and that of other developers. In JavaScript, use `//` to open a comment line:

```javascript
// Print a friendly message into the console:
console.log("Hello World!");
```

This document will frequently include comments to narrate code examples.

## Data Types

Computer programs fundamentally operate through the interaction of data. That begs the question: what IS data? The simple answer is that data comes in different forms for different uses.

### Primitive Types

Primitives have discrete values, such as text and numbers. These are basic data building blocks:

 - **String**: `"A string of characters."`
 - **Number**: `5` (integer) or `3.14` (floating-point decimal)
 - **Boolean**: `true` or `false`
 - **Undefined**: `undefined` fills in for values that have not yet been set.
 - **Null**: `null` is generally assigned as a placeholder for missing data.
 
### Composite Types

Composite structures manage references to many primitive values, and/or other composite structures:

 - **Array**: `["hello", 23, true]`
 - **Object**: `{firstName: "Indiana", lastName: "Jones"}`

### Using `typeof`

We commonly want to know the data type of an unknown value. This can be done using the `typeof` keyword, which will provide a string description of the value's data type:

```javascript
typeof "Hello" // "string"
typeof 23 // "number"
typeof true // "boolean"
```

### String Operations & Methods

A **String** manages a "string" of characters, or, a chunk of text. Strings are always wrapped in single or double quotes (this allows the opposite quotation type to be nested within the string):

```javascript
// Wrapped in single quotes:
'The "Bilbo" ring.'

// Wrapped in double quotes:
"Bilbo's ring."
```

Strings may be *concatenated*, or joined together, using the `+` operator:

```javascript
// Concatenate three strings...
"Hello" + " " + "World"

// Result:
"Hello World"
```

Most data types have built-in *methods*, or, functions provided by the JavaScript language for manipulating the data. We call methods directly on data values to transform them. Strings provide many useful methods:

```javascript
// Call the "toLowerCase" method of String data:
"Hello World".toUpperCase() // "HELLO WORLD"

"Hello World".replace("Hello", "Goodbye") // "Goodbye World"

"Hello World".slice(5) // "Hello"
```

The methods available for a given data value is determined by its data type (in other words, strings have a different set of built-in methods than numbers).

**Common String methods**:

 - `toUpperCase` / `toLowerCase` (transforms letter case)
 - `slice` / `substr` (extracts portions of a string)
 - `indexOf` (finds text position within a string)
  
### Number Operations & Methods

A **Number** manages a numeric value. These may be integers (whole numbers) or decimals. Numbers allow basic arithmatic using the `+`, `-`, `*`, and `\` operators:

```javascript
4 + 2 // 6 (addition)
4 - 2 // 2 (subtraction)
4 * 2 // 8 (multiplication)
4 / 2 // 2 (division)
```

Note that problems arise when attempting to perform numeric operations on mixed data types, such as Strings and Numbers together. For example:

```javascript
23 + "50" // "2350" (whoops, we got string concatenation!)
```

In the above example, math could not be performed on number and string data together, so both values were converted to strings and concatenated. To fix this, we'd use one of JavaScript's provided methods for parsing the string into a proper number:

```javascript
// Parse a string into a numeric integer:
23 + parseInt("50") // 73

// Parse a string into a numeric floating-point decimal:
100 * parseFloat("0.5") // 50
```

An oddity of the number data type is the special value `NaN`, which represents "Not a Number". You'll commonly get `NaN` after trying to perform impossible arithmatic operations:

```javascript
23 / 0 // NaN
```

You can check the outcome of math operations for `NaN` using JavaScript's `isNaN()` function. Likewise, this same pattern applies for the less common (and more bizarre) `Infinity` number value, which can be recognized using the `isFinite()` function.

## Variables

Data values may be assigned custom labels called **Variables**. Think of a variable as a name tag for a piece of data. A single value may have many variables referring to it.

**Declaration & Assignment**

Variables are declared using the `var` keyword, and are assigned values using the `=` (assignment) operator. A variable may refer to any type of data.

```javascript
var customerName = "Bruce Wayne";
var orderQuantity = 50;
var totalPrice = orderQuantity * 10.99;
```

We only need to declare each variable ONCE using the `var` keyword. After a variable has been declared, we can reference and reassign it at any time by just its name:

```javascript
// Initial declarations...
var orderQuantity = 10;
var unitPrice = 10.99;
var totalPrice = orderQuantity * unitPrice;

// Later...
orderQuantity = 9;
totalPrice = orderQuantity * unitPrice;
```

**Naming**

In JavaScript, variable names should be formatted using *headless camel case* (initial lower-case with capitalized word separators). This naming convention is a precedent of the JavaScript language:

```javascript
var headlessCamelCase = "Correct.";
```

Also note that JavaScript naming is case-sensative. That means names with different capitalizations are treated as different variables:

```javascript
// Be careful, these are separate variables due to capitalization:
var viewPort = '16:9';
var viewport = '4:3';
```

**Modification Operators**

We frequently need to reassign a variable to itself altered by a modifier:

```javascript
orderQuantity = orderQuantity + 1;
```

This pattern is SO common, in fact, that JavaScript provides operators to abbreviate this. These operators modify a variable's value, and then reassign the result back to the variable:

```javascript
var orderQuantity = 10;

orderQuantity += 1; // adds 10+1, then reassigns as 11
orderQuantity -= 5; // subtracts 11-5, then reassigns as 6 
orderQuantity *= 2; // multiplies 6*2, then reassigns as 12
orderQuantity /= 4; // divides 12\4, then reassigns as 3
```

You may also see the `++` (increment) and `--` (decrement) operators used occasionally. These modify a variable's value by +1 and -1 respectively:

```javascript
var i = 5;
i++; // adds 5+1, then reassigns as 6
i--; // subtracts 6-1, then reassigns as 5
```

Beware: the increment and decrement operators are far trickier than they appear, so it's best to only use them in `for` loops (discussed later) while getting started. Otherwise, use `+= 1` and `-= 1`.

### Pass by Value vs. Reference

It's quite common for variables to reference one another:

```javascript
var a = 100;
var b = a;
```

While this process looks simple enough, it's actually very important to understand how this data exchange works under the hood. This passing of data differs slightly for primitive and composite data types.

**Primitive data is passed by value.**

For strings, numbers, and booleans, variables point at the datum itself. Suffice it to say, passing by value works just the way you'd expect:

```javascript
var a = 10;
var b = a;

a += 1; // <-- Modify variable A.
a; // 11 <-- A now holds a new value, 11.
b; // 10 <-- B still holds the original value, 10.
```
 
**Composite data is passed by reference.**

For arrays and objects, variables point at the memory address (think of your highschool locker number) where the datum is stored. This means multiple variables will all reference a single datum:

```javascript
var a = [];
var b = a;

a.push("test"); // <-- Modify variable A.
a.length; // 1 <-- A has one item.
b.length; // 1 <-- B has one item.
```

The above demonstrates how multiple variables will reference the same underlying array instance. Modifications to the underlying datum are visible through all variable aliases. While composite data structures *can* be duplicated into unique variables, JavaScript requires you to intentaionally do so.

## Arrays

Arrays manage a set of data references, indexed with sequential numbers. Any type of data may be added to an array, and any number of values may be added.

```javascript
// Create a new empty array:
var empty = [];

// Create a new array with initial values:
var stuff = ["hello", 23, true];
```

Arrays maintain a `length` property that will always tell us how many values are in the array:

```javascript
stuff.length // 3
```

To reference values within an array, use square brackets citing an index position. The first index position is always *zero*:

```javascript
stuff[0] // "hello"
stuff[1] // 23
stuff[2] // true
```

Arrays may contain nested data structures, such as other arrays. We reference nested arrays by chaining their index accessors:

```javascript
var heros = [['Luke', 'Jedi'], ['Leia', 'Rebel'], ['Han', 'Rouge']];

heros.length // 3
heros[0] // ['Luke', 'Jedi']
heros[1][0] // 'Leia'
heros[2][1] // 'Rouge'
```

Arrays provide a host of methods for managing their contents. For example, use `push` to add items onto the end of an array:

```javascript
var fruits = ['banana', 'apple'];

fruits.push('coconut'); // ['banana', 'apple', 'coconut']
fruits.length; // 3
```

Or use `pop` to remove (and return) the last item from an array:

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

## Enumeration (`for` loops)

Composite data structures (Arrays and Objects) allow programs to iterate through each item referenced in their data structure using the `for` statement. This process of stepping incrementally through each item in a set is called *enumeration*.

**Enumerating Arrays**

The most basic and reliable enumeration technique for an array is a sequential `for` loop that steps through each index position:

```javascript
var heros = ['Luke', 'Leia', 'Han'];

for (var i=0; i < heros.length; i++) {
  console.log( heros[i] );
}
```

This `for` loop has three parts: an iterator, a condition, and an increment.

 - The **iterator** maintains a counter for stepping through array indices.
 - The **condition** determins when the loop has completed and should exit.
 - The **increment** advances the iterator at the end of each loop cycle.
 
JavaScript arrays provide some handy methods to simplify common `for` loop tasks. Research `forEach`, `map`, and `reduce` methods.

**Enumerating Objects**

With objects, we have named keys to enumerate rather than sequential numeric indices. To access each named key, we use an alternate form of the `for` loop known as `for...in`.

```javascript
var heroAges = {
  'Luke': 19,
  'Leia': 19,
  'Han': 29
};

for (var heroName in heroAges) {
  console.log( heroName +': '+ heroAges[heroName] );
}
```

This `for...in` loop has two parts: an iterator, and an object.

 - The **iterator** variable will assume the value of each *key* as the loop runs.
 - The **object** specifies what data structure to loop through the keys of.

Now, this simpler `for...in` loop technically works on arrays as well, however it cannot guarentee the order in which keys are accessed. For named object keys, we're generally not concerned with access order. For ordered arrays though, it's generally safest to use a sequential `for` loop.

## Conditionals

Conditional statements provide a simple logic construct for expressing: "if this, then do that":

```javascript
if (condition) {
  // Do something in this block...
}
```

A conditional statement is comprised of two parts:

 - The **condition** is a code *expression* that gets assessed as a boolean (true/false). This condition generally compares two data values (ex: `a < b`).
 
 - The condition is followed by a **block**, which is a list of commands wrapped in curly braces. If the condition evaluates as truthy, then the block runs. Otherwise, the block is skipped.

Conditional statements may be extended with multiple clauses using `else if`, and may include a final catchall `else` block to run when other conditions fail:

```javascript
if (a > b) {
  // A is greater...
  
} else if (a < b) {
  // A is less...
  
} else {
  // When all else fails...
}
```

When structuring multi-clause conditionals, just remember that only ONE block will ever be allowed to run during program execution.

### Data Truthiness

Computer programs make decisions about data in terms that they understand: 1 or 0 (true or false). To facilitate this, all data values have an inherent "truthiness", or a boolean assessed from their value.

Thankfully, we don't need to memorize the truthiness of all possible data values! Programming languages have deliberately few "falsey" values, so if we know those, we know that everything else is "truthy".

**JavaScript has FIVE values that asses as falsey:**

 - `false` (Boolean)
 - `0` (Number)
 - `""` (String with zero characters)
 - `null`
 - `undefined`

We'll frequently place single data values into conditionals, and allow the value's truthiness to fulfill the condition:

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

To assess two values in relation to one another, we perform comparisons:

```
a === b   Equality. Does A equal B?
a !== b   Inequality. Does A NOT equal B?

a < b     Less than. Is A less than B?
a <= b    Less than or Equal. Is A less than OR equal to B?

a > b     Greater than. Is A greater than B?
a >= b    Geater than or Equal. Is A greater than OR equal to B?
```

Comparison operations also yeild booleans (true or false). We'll frequently perform comparisons directly inside of conditional statements:

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

Sometimes we need to reverse our assessment of data, or assess multiple conditions. The NOT, AND, and OR operators are used here.

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

The `&&` ("And") operator combines multiple assessments. Assessments may be wrapped in parenthesis to group them. The `&&` operator requires that all assessments be truthy for the full expression to be truthy:

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

The `||` ("Or") operator checks multiple assessments, and requires that at least one assessment be truthy for the full expression to be truthy.

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

Functions may recieve *arguments*, which are data parameters passed as variables into the function block:

```
var parrot = function(phrase) {
  // This function receives one argument variable, called "phrase".
  console.log(phrase);
};

parrot("Hello world."); // "Hello world."
parrot("Poly want a cracker."); // "Poly want a cracker."
```

We commonly use functions to *callback* after other operations complete:

```javascript
setTimeout(function() {
  // This function will run after a 1-second timer...
}, 1000);
```

In the above example, `setTimeout` configures a one second (1000 millisecond) timer, after which our provided callback function will be invoked.
