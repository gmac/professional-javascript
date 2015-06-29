/**
* Model for managing a single contact:
*/
var ContactModel = Backbone.Model.extend({
  defaults: {
    name: '',
    email: ''
  }
});

/**
* Collection for managing a list of contact models:
*/
var ContactList = Backbone.Collection.extend({
  // Tell this collection what type of model to manage:
  model: ContactModel,
  
  // Configure the model to persist data in localStorage:
  // (we're providing a hash string to use as the namespace for our application data)
  localStorage: new Backbone.LocalStorage('4136a932eb7724a00cb87c3fb9e1ea1d')
});

/**
* View for managing the #add-contact form submissions:
*/
var AddContactView = Backbone.View.extend({
  el: '#add-contact',

  events: {
    'submit': 'onSubmit'
  },

  onSubmit: function(evt) {
    // Stop form from refreshing the page:
    evt.preventDefault();

    // Create a new contact:
    this.collection.create({
      name: this.$('[name="name"]').val(),
      email: this.$('[name="email"]').val()
    });

    // Blank out all form fields:
    this.el.reset();
  }
});

/**
* View for displaying the list of contacts:
*/
var ListContactsView = Backbone.View.extend({
  el: '#list-contacts',

  initialize: function() {
    this.listenTo(this.collection, 'sync remove', this.render);
  },

  render: function() {
    // Start and empty string for building the list HTML:
    var list = '';

    // Add table row HTML for each model stored in the collection:
    this.collection.each(function(model) {
      list += '<tr>';
      list += '<td>'+ model.get('name') +'</td><td>'+ model.get('email') +'</td>';
      list += '<td><button data-remove="'+ model.cid +'">x</button></td>';
      list += '</tr>';
    });

    // Insert the rendered HTML into the table body:
    this.$('tbody').html(list);
  },

  events: {
    'click [data-remove]': 'onRemove'
  },

  onRemove: function(evt) {
    // Read the "data-remove" attribute from the clicked element:
    // this attribute contains an ID for the corresponding model.
    var cid = this.$(evt.target).data('remove');

    // Get the model from the collection:
    var model = this.collection.get(cid);

    // Destory the model:
    // this removes the model from the collection,
    // and clears its data from persisted storage (localStorage).
    model.destroy();
  }
});

/**
* Create model & view instances:
*/
var contacts = new ContactList();
var addContactView = new AddContactView({collection: contacts});
var listContactsView = new ListContactsView({collection: contacts});

contacts.fetch();