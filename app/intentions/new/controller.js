import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  readyForSubmit: Ember.computed('session.isAuthenticated', function() {
    return !this.get('session.isAuthenticated');
  }),
  actions: {
    save() {
      console.log(this.get('model'));
      this.get('model').save().then(function(intention) {
        this.transitionToRoute('intentions.show', intention);
      }, function(reason) {
      });
    },
    numParticipantsChanged() {
      console.log('changed');
    }
  }
});
