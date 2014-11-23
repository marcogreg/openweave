Myemberapp.Router.map(function () {
  
  this.resource('contests', function(){
    this.resource('contest', { path: '/:contest_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.route( 'add-user', { path: '/users/new' });
  this.route( 'add-contest', { path: '/contests/new' });

  this.route( 'gallery', { path: '/contests/gallery' });
  
});
