import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAuthenticated() {
    var currentRoute = this.controllerFor('application').get('currentRouteName');
      if (currentRoute === 'intentions.new') {
        // Do nothing
      } else {
        this._super();
      }
  }
});
