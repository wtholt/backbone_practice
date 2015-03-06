var AppRouter = Backbone.Router.extend({
  initialize: function() {
    console.log('routes have started');
  },
  routes: {
    '':'home',
    'new':'new',
  },

  home: function() {
    this.loadView(new AppView());
    this.view.render();
  },

  new: function() {
    this.loadView(new newView());
  },

  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
  }
});