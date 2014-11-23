Myemberapp.ContestRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('contest', params.contest_id);
  }
});

