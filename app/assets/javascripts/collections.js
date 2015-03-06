var EntryCollection = Backbone.Collection.extend({
  url: '/entries',
  initialize: function() {
    console.log('entry collection has started')
  }
});