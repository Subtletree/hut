import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('intention', params.intention_id);
  },
  actions: {
    editIntention: function() {
      console.log('a');
    },
    deleteIntention: function() {
      console.log('b');
    }
  }
});
