# 1. Make a Model class

First, we need a model that will manage data for each individual contact. Put this at the top of your `app.js` JavaScript file:

```
// Model for managing a single contact:

var ContactModel = Backbone.Model.extend({
  defaults: {
    name: '',
    email: ''
  }
});
```

A model may define as many fields of data as you need to represent the subject that you're "modeling". In the future, we'd likely want our contacts to include phone numbers, addresses, a photo, etc. We can easily expand this model in the future to include those sorts of additional fields.

While we're not working with a formal database in this exercise, keep in mind that this model mirrors the structure of a database that would store our contacts in a full-stack web application.

# 2. Make a Collection class

Models store data about our individual contacts. However, we need to manage a _list_ of contacts. A Collection is a data structure designed to manage a list of models. Add this into `app.js` below your model class:

```
// Collection for managing a list of contact models:

var ContactList = Backbone.Collection.extend({
  // Tell this collection what type of model to manage:
  model: ContactModel,
  
  // Configure the model to persist data in localStorage:
  // stored data will be namespaced under "contacts":
  localStorage: new Backbone.LocalStorage('contacts')
});
```

We're doing two things here:

* First, we're telling the collection what type of model it will manage. In this case, our collection will manage a list of `ContactModel` objects.

* Next, we're configuring a Backbone plugin that allows our collection to store data locally within the web browser. Otherwise, our Collection would attempt to make network requests that send our data to a backend web application for storage. We don't have a backend application, so for now we're cheating and just using `localStorage`.

# 3. A View for the add-contact form:

Next, we'll setup a View class that manages the `#add-contacts` form. Whenever this form is submitted, we want to collect data from the form and use it to create a new contact in the collection. Add this into `app.js` below your collection class:

```
// View for managing the #add-contact form submissions:

var AddContactView = Backbone.View.extend({
  // Bind this view to the "add-contact" form element:
  el: '#add-contact',
  
  // Make DOM "submit" events call this view's "onSubmit" method:
  events: {
    'submit': 'onSubmit'
  },
  
  // "submit" event handler...
  // Called whenever the "add-contact" form is submitted:
  onSubmit: function(evt) {
    // Stop form submit from refreshing the page:
    evt.preventDefault();

    // Create a new contact based on form data:
    this.collection.create({
      name: this.$('[name="name"]').val(),
      email: this.$('[name="email"]').val()
    });

    // Clear all form fields:
    this.el.reset();
  }
});
```

We're doing several things here:

* First, we're providing the selector `#add-contact` as the view's `el`, or element. Backbone will select that element from the DOM and attach it to this view. A view's job is to manage the behaviors of its attached element. _Note: while we're defining `el` as a selector string, Backbone will replace the `el` property with the actual DOM element._

* Next, we've used Backbone's event delegation table to make any `"submit"` event within the DOM trigger the view's `onSubmit` method. 

* Finally, whenever the form is submitted, we're collecting user input from the form fields and using that data to create a new contact in the collection.

# 4. Create Instances

If you were to refresh the contacts list page at the moment, you'll see that for all of our JavaScript, nothing has happened. That's okay. What we've done so far is to set up _classes_ for each component in our application. Think of a class as a blueprint for building an object; the same way we'd make a blueprint for a house, and then build one (or more) physical houses using it. What we need to do now is to build physical _instances_ of each of our component classes.

Add the following to the bottom of your `app.js` file:

```
/**
* Instantiate Components:
*/

// Instance the contacts list collection:
var contacts = new ContactList();

// Instance the "add-contacts" view:
// We pass in our contacts list as it's "collection" to manage.
var addView = new AddContactView({collection: contacts});
```

Here we've created _instances_ of the `ContactList` collection and the `AddContactView`. Once our components have been instanced, our application should be live! Try it out: refresh the app page and add a few contacts using the form...

**NOTHING HAPPENED. DID IT WORK?**

This is where the JavaScript console is our best friend. While we haven't changed anything in the page that we can _visually_ see, that doesn't mean our application isn't silently collecting and caching data. Let's find out. Open the JavaScript console (Chrome: `View > Developer > JavaScript Console`). This is a live console where you can interact with the state of JavaScript on the current page. For starters, type this and then press ENTER:

```
contacts.length
```

Here, we're asking for the number of `ContactModel` instances stored within our collection. It should match the number of contacts you've submitted through the form (resubmit the form, and then rerun the above command. You should have an additional contact now). To inspect the models in your collection, run this:

```
contacts.toJSON()
```

The Chrome console should give you a list of inspectable objects, the data on each object (or, "model", as is the proper term) should look familiar!

BUT – is this data getting stored for future use? Well, let's have a look at the browser's `localStorage` object:

```
localStorage
```

Your local storage should contain data that looks something like this:

```
contacts: "21414242-8d82-6c16-9c62-1bd831d6f59d",
contacts-21414242-8d82-6c16-9c62-1bd831d6f59d: "{"name":"Bob Baker","email":"thepriceiswrong@gmail.com","id":"21414242-8d82-6c16-9c62-1bd831d6f59d"}"
```

The above is Backbone's local storage adaptor writing application data into our browser cache (in a real application, we'd send this to a back-end application that would store the data in a database).

**SO, IS THIS GOOD?**

Yeah, this is REALLY good. While we've placed absolutely nothing on the screen, we've accomplished something far more fundamental: we've established a data storage system that manages and persists data. At the end of the day, _graphics are meaningless_. Applications revolve around the safe management and exchange of data. Data is essential; graphics are just a nicety for human-friendly interfaces... and the good news is that once we have good data services established, then presenting the data as graphics on screen is fairly trivial.

# 5. Present the data on-screen

Yeah, yeah... so you want to see pretty data show up on screen rather than just inspecting your collection through the command line? Well, then let's create another view that handles the translation of models stored in the collection into graphics on the screen. Add this into `app.js` just _above_ the `/* Instantiate Components */` section:

```
// View for displaying the list of contacts:

var ListContactsView = Backbone.View.extend({
  // Attach this view to the "list-contacts" table element:
  el: '#list-contacts',
  
  // Initializes the view once when it is first created:
  initialize: function() {
    // Listen for "sync" and "remove" events from the contacts collection:
    // Whenever the collection adds or removes a model,
    // then we'll re-render this view with the latest data.
    this.listenTo(this.collection, 'sync remove', this.render);
  },
  
  // Method used to render graphics for this view:
  // This method will simply build an HTML representation of contacts,
  // and then insert that HTML into the DOM.
  render: function() {
    // Start and empty string for building the list HTML:
    var list = '';

    // Append table row HTML for each model stored in the collection:
    this.collection.each(function(model) {
      list += '<tr><td>'+ model.get('name') +'</td><td>'+ model.get('email') +'</td></tr>';
    });

    // Insert the rendered HTML into the table body:
    this.$('tbody').html(list);
  }
});
```

This view is not very intelligent. What it's doing is simply listening to our contacts collection for `sync` and `remove` events, which indicate that contacts have been added or removed from the collection. When either of these events occur, the view calls its `render` method, which builds an HTML representation of the current contacts data, and displays that HTML on the screen.

This is a fundamentally simple pattern... rather than a complex algorithm to manage data and display together (and attempt to keep them synchronized), we've split the concerns apart: our collection manages a list of models. When any of these models change, the view simply re-renders with their revised state.