FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('layout', { main: 'main' });
  },
});

FlowRouter.route('/controls', {
  name: 'App.controls',
  action() {
    BlazeLayout.render('layout', { main: 'controls' });
  },
});


