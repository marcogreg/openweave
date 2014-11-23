Myemberapp.ContestEditController = Ember.ObjectController.extend({
  needs: 'contest',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.contest.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('contest',this.get('model'));
    }
  }
});

