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

3. We **listen to** the DOM for user interactions, and then respond to events (such as clicks and text input).

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

**Modern element selector methods include:**

 - `document.querySelector("#css-selector")` : Gets ONE element.
 - `document.querySelectorAll(".css-selector")` : Gets ALL matching elements.
 
**Older selector methods include:**

 - `document.getElementById('id-name')`: Gets ONE element.
 - `document.getElementsByClassName('class-name')`: Gets ALL matching class elements.
 - `document.getElementsByTagName('tagname')`: Gets ALL matching tag elements.
 
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

 - `className`: gets/sets the class name of an element.
 - `innerText`: gets/sets the plain text content of an element.
 - `innerHTML`: gets/sets the HTML markup within an element.
 - `value`: gets/sets the value of `<input>` field elements.
 - `getAttribute(attr)`: gets an attribute value of the element.
 - `setAttribute(attr, value)`: sets the value of an attribute.
 
## Listening For User Interaction

To make our applications interactive, we need to know when the user interacts with the DOM (ie: clicking elements, entering text, etc). Thankfully, the DOM does all the heavy lifting of tracking user input for us. The DOM then fires off an **event**, or notification, when an interaction occurs. We use JavaScript to *listen to* the DOM for these event notifications:

```html
 <button id="done">I'm Done</button>
 
 <script>
   var doneEl = document.querySelector('#done');
   
   doneEl.addEventListener('click', function() {
     console.log('The user is done!!');
   });
 </script>
```

To monitor user input, we select an element that we're interested in and then use `addEventListener` to bind an event. The `addEventListener` method takes two parameters:

 - The **event name** to listen for.
 - A **handler function** (callback) to run when the event occurs.

**Commonly tracked event names:**

 - `"click"`: triggered when elements are clicked.
 - `"focus"`: triggered when an element receives browser focus.
 - `"input"`: triggered when an input form element recieves input.
 - `"change"`: triggered when an input element changes value.
 - `"submit"`: triggered by a form element upon submission.
 - `"keydown"`: triggered when the user presses a keyboard key.

### The Event Object

When we bind an event handler, that function may declare an argument (usually called `evt`) to recieve the *Event Object*:

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

The Event Object contains all kinds of useful data detailing the state of the browser at the time the event occured, including the coordinates of the cursor, the keystroke code, other control keys pressed, etc. The event object also allows us to cancel the browser's default behavior for an event by invoking the `preventDefault` method:

```html
<a href="/home" id="home-link">Home</a>
 
 <script>
   var homeLinkEl = document.querySelector('#home-link');
   
   homeLinkEl.addEventListener('click', function(evt) {
     // Don't let the browser follow the clicked link URL:
     evt.preventDefault();
     // ... instead, we'll just use the link to perfom custom actions on this page ...
   });
 </script>
```

See [event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event) for a complete summary of event data and methods.

### Event Propagation (Bubbling)

Consider the following DOM structure:

```html
 <html>
  <body>
    <section>
      <h1>Fun With Propagation</h1>
      <p>Let's <button>bubble</button>.</p>
    </section>
  </body>
 </html>
```

Let's say that a user clicks on the "bubble" button. The click event will trigger on the clicked `button` element; however it won't stop there... that `button` is part of a `p` element, so the parent `p` has also been clicked; and that `p` is part of a `section` element, so the parent `section` has also been clicked; and so on in goes.

In this way, event notifications originate on the elements where the event has actually occured, and then *bubble* up through the DOM to each higher parent node in sequence. This allows us to capture events at any level within the DOM. For example, listening for clicks on the `document` responds to a click anywhere on the page.