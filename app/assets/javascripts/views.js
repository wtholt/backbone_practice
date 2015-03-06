var testView = Backbone.View.extend({
  el: '.container',
  template: _.template("<h1>Hello <%= who %></h1>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template({who: 'Will!'}));
    return this;
  }
});

// var AddEntryView = Backbone.View.extend({
//   tagName: 'section',
//   template: _.template('<div class="form"> <%= form %> </div>'),
//   initialize: function() {
//     $('.form').append(this.el);
//     this.render();
//   },
//   render: function() {
//     this.$el.html(this.template({form: '.addEntryTmpl'}));
//     return this;
//   }
// });

// var AddEntryView = Backbone.View.extend({
//   initialize: function() {
//     template: _.template($('#addEntryTmpl').html()),
//     $('.form').append(this.el);
//     this.render();
//   },
//   render: function() {
//     console.log('running?');
//     this.$el.html(this);
//     console.log('still running?');
//     return this;
//   },
// });