var Blog = Backbone.Model.extend({
  urlRoot: '/entries',
  defaults: function() {
    return {
      title: 'title',
      content: 'content',
    };
  },
  initialize: function() {
    console.log('model initialized!');
  },
  toJSON: function() {
    return {blog: this.attributes};
  }
});