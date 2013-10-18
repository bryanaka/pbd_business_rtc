/* jshint camelcase: false, strict: false, undef: false, indent: 2 */
Router.configure({
  layout: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading'
});


Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'travel_index',
    renderTemplates: {
      'travel_nav': {to:'topNav'}
    }
  });

  this.route('travel_index', {
    path: '/travel',
    controller: TravelController,
    action: 'index'
  });

  this.route('new_travel', {
    path: '/travel/new',
    controller: TravelController,
    action: 'new'
  });

  this.route('show_travel', {
    path: '/travel/:_id',
    controller: TravelController,
    action: 'show'
  });

  this.route('edit_travel', {
    path: '/travel/:_id/edit',
    controller: TravelController,
    action: 'edit'
  });

});