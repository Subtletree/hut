import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.set('session', Ember.inject.service('session'));
    return this.store.findRecord('user', this.get('session.currentUser.id'));
  }
});
