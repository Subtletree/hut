import Ember from 'ember';
const { inject: { service }, RSVP } = Ember;
export default Ember.Service.extend({
  session: service('session'),
  store: service(),
  loadCurrentUser() {
    const token = this.get('session.data.authenticated.token');
    if (!Ember.isEmpty(token)) {
      var claims = JSON.parse(atob(token.split('.')[1]));
      var user = this.get('store').push({
        data: {
          id: claims.user_id,
          type: 'user',
          attributes: {
            email: claims.user_email
          },
          relationships: {}
        }
      });
      this.set('session.currentUser', user)
    }
  }
});
