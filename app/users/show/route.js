import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.set('session', Ember.inject.service('session'));
    console.log(this.get('session.currentUser.id'));
    return this.store.findRecord('user', this.get('session.currentUser.id'));
  }
});
