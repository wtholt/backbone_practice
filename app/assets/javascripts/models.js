var Entry = Backbone.Model.extend({
  urlRoot: '/entries',
  defaults: function() {
    return {
      title: 'Title',
      content: 'Content',
    };
  },
  initialize: function() {
    console.log('entry has started');
  },
  toJSON: function() {
    return {entry: this.attributes};
  }
});