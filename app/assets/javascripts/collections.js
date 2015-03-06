var BlogCollection = Backbone.Collection.extend({
  url: '/entries',
  initialize: function() {
    console.log('blog collection');
  }
});