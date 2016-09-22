import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: service('session-account'),
  beforeModel() {
    return this._loadCurrentUser();
  },
  sessionAuthenticated() {
    var currentRoute = this.controllerFor('application').get('currentRouteName');
    if (currentRoute === 'intentions.new') {
      // Do nothing
    } else {
      this._super(...arguments);
    }

    this._loadCurrentUser().then(()=>{
      this.transitionTo('/');
    }).catch(() => this.get('session').invalidate());
  },
  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  }
});
