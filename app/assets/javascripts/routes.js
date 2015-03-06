var AppRouter = Backbone.Router.extend({
  initialize: function() {
    console.log('routes have started')
  },
  routes: {
    '' : 'index',
    'test': 'test',
    'new' : 'new'
  },

  test: function () {
    this.loadView(new testView);
    this.view.render(); 
    console.log('home route');   
    
  },

  new: function() {
    this.loadView(new AddEntryView());
  },

  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
    console.log('view loaded');

  }
});