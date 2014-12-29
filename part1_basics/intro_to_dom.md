# The DOM

**Learning Objectives**

- What is the DOM? How is it different from HTML?
- How do we select elements from the DOM?
- How do we exchange data with elements in the DOM?
- How do we capture user interaction with the DOM?

## What is the DOM?

The DOM, or Document Object Model, is the living representation of an HTML document. HTML itself is just plain old text. A web browser simply parses HTML into data, and then uses that data to assemble an interactive program. This interactive program is the DOM.

## What does the DOM do?

The DOM allows us to manipulate elements within a web page. We can get and set the content of individual elements, we can add and remove elements on the fly, and we can capture the input that occurs when a user interacts with any element.

## Is JavaScript the DOM?

In a word: NO. JavaScript is a general purpose *programming language*. The DOM is a very specific *program*. The DOM is very much its own beast; we simply talk to it using JavaScript.

---

## Selecting Elements

The DOM is composed of individual **elements**. If we want to manipulate an element, we must first select it (or, reference it) from the DOM.

In JavaScript, we prefer to target elements by their `id` attribute, and leave CSS classes exclusively for styling purposes.

```html
 <header>
   <h1>The Raven</h1>
   <p id="author">Edgar Allen Poe</p>
 </header>
 
 <script>
   var authorEl = document.querySelector('#author');
 </script>
```

Common element selector methods include:

 - `document.querySelector("#css-selector")` : Gets ONE element.
 - `document.querySelectorAll(".css-selector")` : Gets ALL matching elements.
 
## Exchanging Data with Elements

Once we've accessed a DOM element, we can get and/or set their data. This could be as basic as reading attributes from the element, or major as replacing the element's entire HTML contents.

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
 
## Listening for Element Events

To make our applications interactive, we need to know when the user interacts with the DOM (ie: clicking buttons, entering text, etc). Thankfully, the DOM does all the heavy lifting of tracking user input for us; it then fires off **events**, or notifications, when actions occur.

We use JavaScript to "listen" for the specific events that we're interested in responding to:

```html
 <button id="done">I'm Done</button>
 
 <script>
   var doneEl = document.querySelector('#done');
   
   doneEl.addEventListener('click', function() {
     console.log('The user is done!!');
   });
 </script>
```

To listen for events, we call `addEventListener` on the element we're interested in, and pass in the event name to listen for and a function to execute when the event occurs.

**Commonly tracked events:**

 - `"click"`: triggered when elements are clicked.
 - `"input"`: triggered when an input form element recieves input.
 - `"change"`: triggered when an input element changes value.
 - `"submit"`: triggered by a form element when it is submitted.
