var AppView = Backbone.View.extend({
  el: '.container',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html('<h1> Blogs</h1>');
    return this;
  }
});

var newView = Backbone.View.extend({
  tagName: 'section',
  template: _.template($('#newForm').html()),
  initialize: function() {
    this.render();
    $('.form').append(this.el);
  },
  render: function() {
    this.$el.html(this);
    return this;
  },
});