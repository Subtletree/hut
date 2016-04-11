import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  readyForSubmit: Ember.computed('session.isAuthenticated', function() {
    return !this.get('session.isAuthenticated');
  }),
  actions: {
    numParticipantsChanged() {
      console.log('changed');
    }
  }
});
