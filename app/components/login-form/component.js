import Ember from 'ember';

export default Ember.Component.extend({
  // actions: {
  //   authenticate() {
  //     let { email, password } = this.getProperties('email', 'password');
  //     this.get('session').authenticate('authenticator:custom', email, password).catch((reason) => {
  //       this.set('errorMessage', reason.error || reason);
  //     });
  //   }
  // }
  actions: {
    authenticate: function() {
      console.log('1');
      this.sendAction('authenticate', this.getProperties('identification', 'password'));
      // var credentials = this.getProperties('identification', 'password'),
      //   authenticator = 'authenticator:token';
      //
      // this.get('session').authenticate(authenticator, credentials).catch((reason) => {
      //   this.set('errorMessage', reason.errors || reason);
      //   console.log(reason);
      // });
    }
  }
});
