# Startup Ideas

This exercise uses the small (but incredibly entertaining) [This for That API](http://itsthisforthat.com/api.php) to build a simple single-page application.

**Learning Objectives**

- What is a Model?
- What is a View?
- Why do we practice Model/View separation?

## 1. Make a Model

Add the following at the top of your `app.js` file:

```
// A model for loading and managing idea data:

var IdeaModel = Backbone.Model.extend({
  // Define a remote URL for this model to fetch data from:
  url: 'http://itsthisforthat.com/api.php?json',

  // Set default values for the fields of data that we expect to load:
  defaults: {
    'this': '',
    'that': ''
  },

  // Create a method that loads model data:
  // (normally we'd just call "fetch" on a model to load data,
  // however this API requires some special parameters to load data from it)
  reload: function() {
    return this.fetch({dataType: 'jsonp', jsonp: 'call'});
  }
});
```

This model will manage the data used by our application. It does a few things:

* It defines a `url` that we'll load data from.

* It defines default values for the fields of data we expect to load from the API.

* Lastly, this API requires some special configuration settings to load data from it. Rather than including these configuration settings everwhere that we need to request data, we've just written a method that will handle loading data with the proper configuration. Now, we simply need to call `.reload()` on our model to have it fetch data from the API.

## 2. Instantiate the model

Whenever we configure a component, Backbone gives us a component _class_. Think of a class as a blueprint: once we have a blueprint for a house, we can build _instances_ of that house using the blueprint. In order to actually use our model, we'll need to create an instance of its class:

Add this to the bottom of `app.js`:

```
/*
* Instantiate Components:
*/

var idea = new IdeaModel();
```

**DID IT WORK?**

Reload the page... nothing happened (that we could see!). This is where the JavaScript Console is our best friend: it allows us to interact with our application before graphics are present on the screen. In Chrome, open up the JavaScript console using `View > Developer > JavaScript Console`.

In the console, type the following and then hit ENTER:

```
idea.toJSON();
```

Here, we've asked our `idea` model to render out its data. It gives us something that looks suspiciously like its default settings:

```
Object {this: "", that: ""}
```

Okay, now let's tell our model to `reload`:

```
idea.reload();
```

Did anything happen? Well, try asking it to print out its data again:

```
idea.toJSON();
```

This time, you should see something that looks like random ideas for a great startup pitch! Try reloading and printing out data again... fun!

## 3. Make a view

Alright, this console stuff is fun, but we want to see these great ideas print out on the screen! This is pretty simple... now that we have a model to fetch and store data, we just need something that watches the model, and prints out its data whenever it changes.

Add this just _above_ the `/* Instantiate Components */` section of `app.js`:

```
// A view for displaying loaded idea data:

var IdeaView = Backbone.View.extend({
  // Attach this view to the "idea" element in the DOM:
  el: '#idea',

  // Upon creating this view, have it listen for "change" events in its model.
  // Whenever the model changes, we want our view to re-render its graphics:
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  // Renders model data onto the screen.
  // This is called whenever the model changes.
  render: function() {
    // Build a text representation of our model data,
    // and then insert it into the "idea-text" element within the view.
    var text = this.model.get('this') +' for '+ this.model.get('that');
    this.$('#idea-text').html(text);
  },

  // Have Backbone configure a click event on the "idea-reload" button:
  // whenever "idea-reload" is clicked, we'll call this view's "onReload" method:
  events: {
    'click #idea-reload': 'onReload'
  },

  // Called whenever the user clicks the "idea-reload" button:
  // this simply tells the model to reload itself.
  onReload: function(evt) {
    this.model.reload();
  }
});
```

This view is responsible for translating data stored in our model into graphics that will appear on the screen. Whenever data within our model changes, this view will observe the change, and render the newest data onto the screen.

## 4. Instantiate the view

Just like our model, our view also needs to be instantiated. Adjust the `/* Instantiate Components */` section in `app.js` to this:

```
/*
* Instantiate Components:
*/

var idea = new IdeaModel();
var ideaView = new IdeaView({model: idea});
```

Now we're instantiating both the model and the view; and also instructing the view on what model we want it to render. Reload the page and start clicking the "Hit Me!" button... fun!

**DID WE DO IT RIGHT?**

Well-designed applications have a signature: their design is so robust, that they can be fully controlled via the console. Let's try it... open the JavaScript console again, watch your app screen, and run:

```
idea.reload();
```

Did your view auto-magically update? Congratulations, you're on your way to building better application.

**OKAY, BUT WHY?! HOW?!?**

Classic "spaghetti code" apps make a mess by intertwining data and display. The same proceedures attempt to manage data and display, and more importantly, to keep them in sync. As an application gets bigger, this task of synchronizing becomes increasingly difficult.

Model/View separation takes a different approach. PUT THE DATA FIRST. Graphics should be fairly negligable in application design... They're simply a human-friendly presentation of what is inherently stateful data. By focusing on data first (the model), we're establishing the core of what our application _does_. Once our model is doing its primary job of managing data, a view can simply observe that model, and render out state whenever the data changes.
