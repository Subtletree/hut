import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['intention-user'],
  actions: {
    authenticate_user: function(credentials) {
      //var credentials = this.getProperties('identification', 'password'),
      var authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials).catch((reason) => {
        this.set('errorMessage', reason.errors || reason);
      });
    }
  }
});
