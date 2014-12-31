# The DOM

**Learning Objectives**

- What is the DOM? How is it different from HTML?
- How do we select elements from the DOM?
- How do we exchange data with elements in the DOM?
- How do we capture user interaction with the DOM?

## What is the DOM?

The DOM, or Document Object Model, is the living representation of an HTML document. HTML itself is just plain old text. A web browser simply parses HTML into data, and then uses that data to assemble an interactive program. This interactive program is the DOM.

### Is JavaScript the DOM?

In a word: NO. JavaScript is a general purpose *programming language*. The DOM is a very specific *program*. The DOM is very much its own beast; we simply talk to it using JavaScript.

### What does the DOM do?

The DOM allows us to dynamically respond to and manipulate a web page. Generally speaking, there are three major tasks that we use the DOM for:

1. We **select** individual elements (or sets of elements) out of the DOM to work with them.

2. We **exchange data** with the DOM: this involves reading data from specific elements, and/or writing new data into the DOM structure.

3. We **observe** the DOM for user interactions, and then respond to events such as text input or button clicks.

## Selecting Elements

The DOM is composed of individual **elements**. If we want to manipulate an element, we must first select it, or reference it, from the DOM. In JavaScript, we prefer to select elements by their `id` attribute, and leave CSS classes for styling purposes.

```html
 <header>
   <h1>The Raven</h1>
   <p id="author">Edgar Allen Poe</p>
 </header>
 
 <script>
   var authorEl = document.querySelector('#author');
 </script>
```

**Common element selector methods include:**

 - `document.querySelector("#css-selector")` : Gets ONE element.
 - `document.querySelectorAll(".css-selector")` : Gets ALL matching elements.
 
## Exchanging Data

Once we've selected the DOM elements that we're interested in, we can get and/or set their data. This can be as simple as reading attributes of an element, or as significant as replacing an element's entire HTML content.

```html
 <p id="author">Edgar Allen Poe</p>

 <script>
   // Get author element:
   var authorEl = document.querySelector('#author');
   
   // Replace its inner text content:
   authorEl.innerText = 'Walt Whitman';
 </script>
```

**Common element data methods include:**

 - `innerText`: gets/sets the plain text content of an element.
 - `innerHTML`: gets/sets the HTML markup within an element.
 - `value`: gets/sets the value of `<input>` field elements.
 - `getAttribute(attr)`: gets an attribute value of the element.
 - `setAttribute(attr, value)`: sets the value of an attribute.
 
## Observing User Interaction

To make our applications interactive, we need to know when the user interacts with the DOM (ie: clicking buttons, entering text, etc). Thankfully, the DOM does all the heavy lifting of tracking input for us. The DOM then fires off an **event**, or notification, when an interaction occurs that we can tell JavaScript to *listen* for:

```html
 <button id="done">I'm Done</button>
 
 <script>
   var doneEl = document.querySelector('#done');
   
   doneEl.addEventListener('click', function(evt) {
     console.log('The user is done!!');
   });
 </script>
```

To monitor user input, we select the element that we're interested in and call upon it's `addEventListener` method to bind an event. The `addEventListener` method takes two parameters:

 - The **event name** to listen for.
 - An **event handler function** (callback) to run when the event occurs.

**Commonly tracked event names:**

 - `"click"`: triggered when elements are clicked.
 - `"input"`: triggered when an input form element recieves input.
 - `"change"`: triggered when an input element changes value.
 - `"submit"`: triggered by a form element when it is submitted.

### The Event Object

When we bind an event handler function, that function may define an argument (usually called `evt`) to recieve the *event object*. The event object is passed into the handler function by the browser, and includes a detailed description of the event that has just occured:

```html
 <button id="done">I'm Done</button>
 
 <script>
   var doneEl = document.querySelector('#done');
   
   doneEl.addEventListener('click', function(evt) {
     console.log(evt.target); // the "#done" element that the event occured on.
     console.log(evt.localX); // x-position of the cursor when the event occured.
     console.log(evt.shiftKey); // was the shift key pressed when the event occured?
   });
 </script>
```

The event object contains all sorts of useful data about the state of the browser when the user interaction occured. It includes the coordinates of the cursor, the keyboard code of a keystroke, other control keys pressed at the time of the event, etc. See [event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event) for a complete list of available event data.
