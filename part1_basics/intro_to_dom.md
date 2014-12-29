<h1>The DOM</h1>

<p><strong>Learning Objectives</strong></p>

<ul>
<li>What is the DOM? How is it different from HTML?</li>
<li>How do we select elements from the DOM?</li>
<li>How do we exchange data with elements in the DOM?</li>
<li>How do we capture user interaction with the DOM?</li>
</ul>

<h2>What is the DOM?</h2>

<p>The DOM, or Document Object Model, is the living representation of an HTML document. HTML itself is just plain old text. A web browser simply parses HTML into data, and then uses that data to assemble an interactive program. This interactive program is the DOM.</p>

<h2>What does the DOM do?</h2>

<p>The DOM allows us to manipulate elements within a web page. We can get and set the content of individual elements, we can add and remove elements on the fly, and we can capture the input that occurs when a user interacts with any element.</p>

<h2>Is JavaScript the DOM?</h2>

<p>In a word: NO. JavaScript is a general purpose <em>programming language</em>. The DOM is a very specific <em>program</em>. The DOM is very much its own beast; we simply talk to it using JavaScript.</p>

<hr />

<h2>Selecting Elements</h2>

<p>The DOM is composed of individual <strong>elements</strong>. If we want to manipulate an element, we must first select it (or, reference it) from the DOM.</p>

<p>In JavaScript, we prefer to target elements by their <code>id</code> attribute, and leave CSS classes exclusively for styling purposes.</p>

<pre><code>
 <header>
   <h1>The Raven</h1>
   <p id="author">Edgar Allen Poe</p>
 </header>

 <script>
   var authorEl = document.querySelector('#author');
 </script>
</code></pre>

<p>Common element selector methods include:</p>

<ul>
<li><code>document.querySelector("#css-selector")</code> : Gets ONE element.</li>
<li><code>document.querySelectorAll(".css-selector")</code> : Gets ALL matching elements.</li>
</ul>

<h2>Exchanging Data with Elements</h2>

<p>Once we've accessed a DOM element, we can get and/or set their data. This could be as basic as reading attributes from the element, or major as replacing the element's entire HTML contents.</p>

<pre><code>
 <p id="author">Edgar Allen Poe</p>

 <script>
   // Get author element:
   var authorEl = document.querySelector('#author');

   // Replace its inner text content:
   authorEl.innerText = 'Walt Whitman';
 </script>
</code></pre>

<p><strong>Common element data methods include:</strong></p>

<ul>
<li><code>innerText</code>: gets/sets the plain text content of an element.</li>
<li><code>innerHTML</code>: gets/sets the HTML markup within an element.</li>
<li><code>value</code>: gets/sets the value of <code>&lt;input&gt;</code> field elements.</li>
<li><code>getAttribute(attr)</code>: gets an attribute value of the element.</li>
<li><code>setAttribute(attr, value)</code>: sets the value of an attribute.</li>
</ul>

<h2>Listening for Element Events</h2>

<p>To make our applications interactive, we need to know when the user interacts with the DOM (ie: clicking buttons, entering text, etc). Thankfully, the DOM does all the heavy lifting of tracking user input for us; it then fires off <strong>events</strong>, or notifications, when actions occur.</p>

<p>We use JavaScript to "listen" for the specific events that we're interested in responding to:</p>

<pre><code>
 <button id="done">I'm Done</button>

 <script>
   var doneEl = document.querySelector('#done');

   doneEl.addEventListener('click', function() {
     console.log('The user is done!!');
   });
 </script>
</code></pre>

<p>To listen for events, we call <code>addEventListener</code> on the element we're interested in, and pass in the event name to listen for and a function to execute when the event occurs.</p>

<p><strong>Commonly tracked events:</strong></p>

<ul>
<li><code>"click"</code>: triggered when elements are clicked.</li>
<li><code>"input"</code>: triggered when an input form element recieves input.</li>
<li><code>"change"</code>: triggered when an input element changes value.</li>
<li><code>"submit"</code>: triggered by a form element when it is submitted.</li>
</ul>