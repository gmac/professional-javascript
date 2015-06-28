// A model for loading and managing idea data:

var IdeaModel = Backbone.Model.extend({
  url: 'http://itsthisforthat.com/api.php?json',

  defaults: {
    'this': '',
    'that': ''
  },

  reload: function() {
    return this.fetch({dataType: 'jsonp', jsonp: 'call'});
  }
});


// A view for displaying loaded idea data:

var IdeaView = Backbone.View.extend({
  el: '#idea',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var text = this.model.get('this') +' for '+ this.model.get('that');
    this.$('#idea-text').html(text);
  },

  events: {
    'click #idea-reload': 'onReload'
  },

  onReload: function(evt) {
    this.model.reload();
  }
});


// Create instances of the model and view:
// the view is aware of the model, while the model is NOT aware of the view.

var idea = new IdeaModel();
var ideaView = new IdeaView({model: idea});
