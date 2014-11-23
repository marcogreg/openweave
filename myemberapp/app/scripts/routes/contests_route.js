Myemberapp.ContestsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('contest');
  }
});

